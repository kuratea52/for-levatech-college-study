<?php
require "./input.php";   // 「require "ファイルパス")」で外部ファイル読み込み

// 「foreach(配列変数 as 変数)」で配列の要素で繰り返し処理
foreach ($numbers as $num) {
    if ($num % 3 == 0 && $num % 5 == 0) {
        echo "FizzBuzz";
    } elseif ($num % 3 == 0) {
        echo "Fizz";
    } elseif ($num % 5 == 0) {
        echo "Buzz";        
    } else {
        echo $num;
    }
    echo PHP_EOL;
}
?>