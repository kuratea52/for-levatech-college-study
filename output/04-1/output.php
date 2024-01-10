<?php
require "./input.php";   // 「require "ファイルパス")」で外部ファイル読み込み

// 「foreach(配列変数 as 変数)」で配列の要素で繰り返し処理
foreach ($numbers as $num) {
    // 最初に３の倍数にも５の倍数にも当てはまる条件を指定する
    // 最初の条件を３の倍数のみ当てはまる式にした場合、１５は「Fizz」のままになってしまう
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