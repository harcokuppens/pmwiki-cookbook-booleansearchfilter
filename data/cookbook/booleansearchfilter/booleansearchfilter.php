<?php if (!defined('PmWiki'))  exit();

$RecipeInfo['booleansearchfilter']['Version'] = '20250328';


# define js and css files
#------------------------
SDV($BooleanSearchFilter_PubDirUrl, "$PubDirUrl/booleansearchfilter");
//SDV( $BooleanSearchFilter_CSS, "$BooleanSearchFilter_PubDirUrl/booleansearchfilter.css" );
SDV($BooleanSearchFilter_JS, "$BooleanSearchFilter_PubDirUrl/BooleanSearch.bundled.es.js");

$optional_options = '(?:\s+([^\n]*?))?';
$booleansearchfilter = '\(:booleansearchfilter' . $optional_options . ':\)';

Markup('booleansearchfilter', 'directives', '/' . $booleansearchfilter  . '/', "mu_booleansearchfilter");

function mu_booleansearchfilter($m)
{
    global $ImagePopup_JS, $ImagePopup_CSS, $HTMLStylesFmt, $HTMLHeaderFmt, $HTMLFooterFmt, $BooleanSearchFilter_JS;

    //  get parameters  
    // -----------------

    $unparsed_args = $m[1];

    // parse arguments in directive .
    $args = ParseArgs($unparsed_args);


    $id = "BooleanSearch";
    if (!empty($args['id'])) {
        $id = $args['id'];
    }

    $sectionElementsCssSelector = ""; // by default no section elements
    if (!empty($args['sectionElementsCssSelector'])) {
        // need html_entity_decode to decode &gt; and in the css selector back to '>'
        $sectionElementsCssSelector = html_entity_decode($args['sectionElementsCssSelector']);
    }

    // set default value for elementsCssSelector
    $elementsCssSelector = "li";
    if (empty($sectionElementsCssSelector)) {
        # only within content window of pmwiki we search/filter li elements
        $elementsCssSelector = "#wikitext  li";
    }

    if (!empty($args['elementsCssSelector'])) {
        $elementsCssSelector = html_entity_decode($args['elementsCssSelector']);
    }

    // create script tag
    $setSectionElementsCssSelector = "";
    if (! empty($sectionElementsCssSelector)) {
        $setSectionElementsCssSelector = ".setSectionElementsCssSelector(\"$sectionElementsCssSelector\")";
    }

    $scriptTag =  <<<EOT
    <script type="module">
    import { BooleanSearch } from "$BooleanSearchFilter_JS";
    new BooleanSearch().setId("$id")
      .setAutoForm()$setSectionElementsCssSelector
      .setElementsCssSelector("$elementsCssSelector")
      .apply();
    </script>
    EOT;


    $HTMLFooterFmt['booleansearchfilter-html'] = $scriptTag;

    $html =  <<<EOT
    <div id="$id"></div>
    EOT;

    return Keep($html);
}
