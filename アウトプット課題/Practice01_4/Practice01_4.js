const btn = document.getElementById("btn");

// 変数 btn にクリックイベントを追加
btn.addEventListener("click", function() {
    // 3つの運勢を配列に格納
    const fortunes = ["大吉", "中吉", "小吉"];

    // 運勢をランダムに選択
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];

    // ポップアップで運勢を表示
    alert(selectedFortune);
})
