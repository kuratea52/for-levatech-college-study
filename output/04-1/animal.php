<?php
// クラスの宣言
class Animal {
    // 「public」はアクセス修飾子の一種で、クラス内外のどこからでもアクセス可能、「public プロパティ」として使用
    // プロパティ（メンバ変数とも呼ぶ）とは、クラス内で定義された変数のこと
    public $cry = "bowbow!";
    
    // クラス内の関数を「メソッド」と呼ぶ
    function bow() {
        echo $this->cry . PHP_EOL;   // 「$this->プロパティ名」でプロパティを呼び出せる
    }
}

// クラスの継承、「class 新クラス名 extends 既存クラス名」
class Dog extends Animal {
    public $cry = "わんわん！";
    // メソッドは既にAnimalクラスで定義されているので不要
}

class Cat extends Animal {
    public $cry = "ニャーニャー！";
}

// Animalクラスのインスタンスを生成
$animal_1 = new Animal();
// Animalクラスのインスタンスを使用
$animal_1->bow();   // 「インスタンス->メソッド名」でbowメソッドを呼び出す

// Dogクラスのインスタンスを生成
$animal_2 = new Dog();
// Dogクラスのインスタンスを使用
$animal_2->bow();

// Catクラスのインスタンスを生成
$animal_3 = new Cat();
// Catクラスのインスタンスを使用
$animal_3->bow();
?>