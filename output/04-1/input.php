<?php
$numbers = array();   // 「array()」で空の配列を作る

for ($i = 1; $i <= 100; $i++) {
    // 「array_push(追加先の配列名, 追加する値)」で配列に要素を追加
    array_push($numbers, $i);
}
?>