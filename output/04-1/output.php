<?php
require "./input.php";   // 「require "ファイルパス")」で外部ファイル読み込み

// 「foreach(配列変数 as 変数)」で配列の要素で繰り返し処理
foreach ($numbers as $num) {
    if ($num % 3 == 0 && $num % 5 == 0) {
        echo "FizzBuzz" . PHP_EOL;
    } elseif ($num % 3 == 0) {
        echo "Fizz" . PHP_EOL;
    } elseif ($num % 5 == 0) {
        echo "Buzz" . PHP_EOL;        
    } else {
        echo $num . PHP_EOL;
    }
}
?>