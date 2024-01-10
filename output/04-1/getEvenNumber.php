<?php
    // $argv[]はコマンドライン引数（入力された値）を受け取る特別な配列
    // ０番目の値はファイル名なので、１番目を指定する
    $input_num = $argv[1];

    if ($input_num % 2 == 0) {
        echo $input_num . "は偶数です" . PHP_EOL;
    } else {
        echo $input_num . "は奇数です" . PHP_EOL;
    }
?>