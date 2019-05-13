<?php
header('Content-type:text/html; charset="utf-8"');

$page = isset($_GET['page']) ? $_GET['page'] : 0;

$url = 'https://api.asilu.com/images/baidu?page=' . $page;

$content = file_get_contents($url);


echo $content;


?>