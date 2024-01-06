// 初期化
let isSpinning = false;
let numbers = [0, 0, 0];

// 開始ボタンが押されたときの処理
function startSlot() {
    if (!isSpinning) {
        isSpinning = true;
        spinSlot();
    }
}

// スロットを回す処理
function spinSlot() {
    numbers = numbers.map(() => Math.floor(Math.random() * 10));
    updateDisplay();

    // 一定時間ごとに数字を変更（ここでは500ミリ秒）
    setTimeout(() => {
        if (isSpinning) {
            spinSlot();
        }
    }, 500);
}

// ストップボタンが押されたときの処理
function stopSlot(slotIndex) {
    if (isSpinning) {
        isSpinning = false;
        numbers[slotIndex - 1] = Math.floor(Math.random() * 10);
        updateDisplay();
        checkResult();
    }
}

// 画面に数字を表示
function updateDisplay() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`number${i}`).innerText = numbers[i - 1];
    }
}

// 結果をチェックしてポップアップ表示
function checkResult() {
    if (numbers[0] === numbers[1] && numbers[1] === numbers[2]) {
        alert("あたり！");
    } else {
        alert("はずれ！");
    }
}
