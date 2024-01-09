<?php
    $str = "文字列です。";   // $strは文字列型
    $int_number = 4;    // $int_numberは整数型
    $arr = array(1, 2, 3, 4);   // $arrは配列型
    
    echo gettype($str) . PHP_EOL;
    echo gettype($int_number) . PHP_EOL;
    echo gettype($arr) . PHP_EOL;
?>