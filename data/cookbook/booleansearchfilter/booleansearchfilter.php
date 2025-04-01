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

    $subscript = "";
    if (array_key_exists("subscript", $args)) {
        $subscript = "\"" . html_entity_decode($args['subscript']) . "\"";
    }

    $setHighlighting = "";
    if (!empty($args['highlighting']) && $args['highlighting'] == "false") {
        $setHighlighting = '.setHighlighting(false)';
    }

    // create script tag
    $setSectionElementsCssSelector = "";
    if (! empty($sectionElementsCssSelector)) {
        $setSectionElementsCssSelector = ".setSectionElementsCssSelector(\"$sectionElementsCssSelector\")";
    }

    // at this place you can activate a custom form which you can customize in the html variable below
    $customForm = false;
    if ($customForm) {
        $custom_subscript = "<b>my custom form</b>";
        if (array_key_exists("subscript", $args)) {
            $custom_subscript =  html_entity_decode($args['subscript']);
        }
        // $custom_subscript = "<b>my custom form</b>";
        $html = <<<EOT
        <div id="{$id}">
            <form id="{$id}_searchForm">
                <input id="{$id}_searchbox" type="text" placeholder="Type boolean search expression here..." aria-label="Type boolean search expression here..." style="width: 500px; padding: 5px; border: 1px solid #ccc; border-radius: 4px; " />
                <button id="{$id}_button" type="button" aria-label="Do Search">
                Search
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                Case Sensitive <input type="checkbox" id="{$id}_checkbox" >
                </label>
                <br>
                {$custom_subscript}
            </form>
            <div id="{$id}_error" style="color: red; font-weight: bold"></div>
            <div id="{$id}_answer"></div>
        </div>    
        EOT;

        $scriptTag =  <<<EOT
        <script type="module">
        import { BooleanSearch } from "$BooleanSearchFilter_JS";
        new BooleanSearch().setId("$id")$setSectionElementsCssSelector
        .setElementsCssSelector("$elementsCssSelector")$setHighlighting
        .apply();
        </script>
        EOT;
    } else {
        // default form which is created automatically by the javascript booleansearchfilter library
        $html =  <<<EOT
        <div id="$id"></div>
        EOT;

        $scriptTag =  <<<EOT
        <script type="module">
        import { BooleanSearch } from "$BooleanSearchFilter_JS";
        new BooleanSearch().setId("$id")
        .setAutoForm($subscript)$setSectionElementsCssSelector
        .setElementsCssSelector("$elementsCssSelector")$setHighlighting
        .apply();
        </script>
        EOT;
    }

    $HTMLFooterFmt['booleansearchfilter-html'] = $scriptTag;

    return Keep($html);
}
