<?php
    $input_num = $argv[1];

    if ($input_num % 2 === 0) {
        echo $input_num . "は偶数です" . PHP_EOL;
    } else {
        echo $input_num . "は奇数です" . PHP_EOL;
    }
?>