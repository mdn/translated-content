---
title: "DedicatedWorkerGlobalScope: cancelAnimationFrame() メソッド"
short-title: cancelAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

**`cancelAnimationFrame()`** は {{domxref("DedicatedWorkerGlobalScope")}} インターフェイスのメソッドで、{{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} の呼び出しによって以前にスケジュールされたアニメーションフレームのリクエストをキャンセルします。

`cancelAnimationFrame()` メソッドを呼び出すには、現在のワーカーに関連付けられた所有者 {{domxref("Window", "window")}} が必要です。つまり、現在のワーカーが {{domxref("Window", "window")}} によって作成されているか、または {{domxref("Window", "window")}} を所有者とする専用ワーカーによって作成されている必要があります。

## 構文

```js-nolint
cancelAnimationFrame(handle)
```

### 引数

- `handle`
  - : {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} の呼び出しによって返される ID 値。この呼び出しは、同じワーカー内で行われている必要があります。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 現在のワーカーが当該メソッドに対応していない場合、この例外が発生します。

## 例

以下は、専用ワーカー内で `OffscreenCanvas` を使用して `requestAnimationFrame()` を実行する方法を示す完全な例です。

HTML には次のものを入れます。

```html
<canvas width="100" height="100"></canvas>
```

以下の JavaScript にリンクする必要があります。

```js
const worker = new Worker("worker.js");

// キャンバスコントロールをワーカーへ委譲
const offscreenCanvas = document
  .querySelector("canvas")
  .transferControlToOffscreen();

// アニメーションを開始
worker.postMessage(
  {
    type: "start",
    canvas: offscreenCanvas,
  },
  [offscreenCanvas],
);

// アニメーションを 5 秒後に停止
setTimeout(() => {
  worker.postMessage({
    type: "stop",
  });
}, 5000);
```

**worker.js:**

```js
let ctx;
let pos = 0;
let animationId;
let isRunning = false;
let lastTime = 0;

function draw(currentTime) {
  if (!isRunning) return;

  // アニメーションを円滑にするための刻み時間を計算
  if (lastTime === 0) lastTime = currentTime;
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // クリアして移動する矩形を描画
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 50 * deltaTime; // 50 ピクセル毎秒で移動

  // アニメーションをループ
  if (pos > 100) pos = -10;

  animationId = self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    isRunning = true;
    lastTime = 0;
    animationId = self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    isRunning = false;
    if (animationId) {
      self.cancelAnimationFrame(animationId);
    }
  }
});
```

メインスレッドでは、まず {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} を使用して、{{HTMLElement("canvas")}} 要素の制御を {{domxref("OffscreenCanvas")}} に移し、オフスクリーンキャンバスを使用して、その処理をワーカーに `"start"` メッセージとして送信します。

ワーカーファイル (`worker.js`) では、アニメーションのロジックを処理します。`"start"` メッセージを受信すると、ワーカーはアニメーションを開始し、矩形を左から右へ移動させます。`"stop"` メッセージを受信すると、アニメーションを停止します。

最後に、メインスレッドはワーカーに `"stop"` メッセージを送信することで、待ち時間後にアニメーションを停止させることができます。これにより、停止する前にアニメーションを表示させることが可能になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- {{domxref("Window.cancelAnimationFrame()")}}
