// ボタンとテキスト要素をidを使用して取得
const btn = document.getElementById("btn");
const txt = document.getElementById("txt");

// クリックイベントが発生した際に実行される関数を追加
btn.addEventListener("click", function(){
    // 「OK」or「キャンセル」を選択するダイアログを表示するメソッドを、変数 choice に格納
    const choice = window.confirm("CLICK COMPLETE");
    // 選択結果に基づいてテキスト要素の内容を変更
    if (choice) {
        txt.textContent = "OKがクリックされました！"
    } else {
        txt.textContent = "キャンセルが選択されました"
    }
})