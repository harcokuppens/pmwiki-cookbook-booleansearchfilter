<?php if (!defined('PmWiki'))  exit();

$includeitems = '\(:includeitems\s*:\)';

Markup('includeitems', 'directives', '/' . $includeitems  . '/', "mu_includeitems");

function mu_includeitems($m)
{
    global $FarmD;

    $html = file_get_contents("$FarmD/wiki.d/items.html");
    return Keep($html);
}
