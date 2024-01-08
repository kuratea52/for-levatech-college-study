// スロットの状態を管理するオブジェクトの配列
var carr = [{ f: false, v: 0, obj: null },
            { f: false, v: 0, obj: null },
            { f: false, v: 0, obj: null }];

// スロットの全体の状態を表す変数
var nowStatus = false;

// ページの読み込みが完了したら実行される関数
window.addEventListener("load", function () {
  // 各スロットのHTML要素を取得し、オブジェクトに格納
  for (let i = 0; i < carr.length; i++) {
    carr[i].obj = document.getElementById("c" + (i + 1));
  }

  // 20ミリ秒ごとに繰り返し実行される関数を登録
  setInterval(interval, 20);
});

// スロットの値を更新する関数
function interval() {
  // ゲームが進行中であれば
  if (nowStatus) {
    // 各スロットの状態を確認して更新
    for (let i = 0; i < carr.length; i++) {
      // スロットが有効な場合
      if (carr[i].f) {
        // 1を足して10で割った余りを新しい値として設定
        carr[i].v = (carr[i].v + 1) % 10;
        // HTMLに新しい値を表示
        carr[i].obj.innerHTML = carr[i].v;
      }
    }
  }
}

// ゲームを開始する関数
function start() {
  // ゲームが既に進行中であれば何もせず終了
  if (nowStatus) {
    return;
  }

  // ゲームを開始状態に設定
  nowStatus = true;

  // 各スロットを有効に設定
  for (let i = 0; i < carr.length; i++) {
    carr[i].f = true;
  }
}

// 特定のスロットを停止する関数
function stop(c) {
  // ゲームが進行中であれば
  if (nowStatus) {
    // 対象のスロットを停止状態に変更
    carr[c].f = false;

    // すべてのスロットが停止しているかどうかを確認
    if (!carr[0].f && !carr[1].f && !carr[2].f) {
      // ゲームを終了状態に設定
      nowStatus = false;

      // スロットの値が一致しているか判定し、結果を表示
      if (carr[0].v == carr[1].v && carr[1].v == carr[2].v) {
        document.getElementById("char").innerHTML = "あたり";
      } else {
        document.getElementById("char").innerHTML = "はずれ";
      }
    }
  }
}
