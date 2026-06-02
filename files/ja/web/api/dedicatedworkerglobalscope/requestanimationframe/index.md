---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame() メソッド"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

**`requestAnimationFrame()`** は {{domxref("DedicatedWorkerGlobalScope")}} インターフェイスのメソッドで、アニメーションフレームを実行したいことをブラウザーに指示し、次回の再描画の前に、ユーザーが指定したコールバック関数を呼び出すよう要求します。

コールバック関数への呼び出し頻度は、通常、ディスプレイのリフレッシュレートと一致します。最も一般的なリフレッシュレートは 60Hz（60 サイクル／フレーム毎秒）ですが、75Hz、120Hz、144Hz も広く使用されています。パフォーマンスとバッテリー駆動時間の向上のため、ほとんどのブラウザーでは、バックグラウンドのタブや非表示の {{ HTMLElement("iframe") }} 内で実行されている場合、`requestAnimationFrame()` の呼び出しは一時停止されます。

`requestAnimationFrame()` メソッドを呼び出すと、コールバック関数が 1 回だけ実行されるようスケジュールされます。別のフレームをアニメーションさせたい場合は、コールバック関数内で再度 `requestAnimationFrame()` を呼び出す必要があります。

> [!WARNING]
> アニメーションが 1 フレームでどれだけ進んだかを計算する場合、常に第 1 引数（または現在時刻を取得する他の方法）を使用するようにしてください。**そうしないと、アニメーションはリフレッシュレートの高い画面では速く実行されます**。これを行う方法については、以下の例を参照してください。

`requestAnimationFrame()` メソッドを呼び出すには、現在のワーカーに関連付けられた所有者 {{domxref("Window", "window")}} が必要です。つまり、現在のワーカーが {{domxref("Window", "window")}} によって作成されているか、または {{domxref("Window", "window")}} を所有者とする専用ワーカーによって作成されている必要があります。

## 構文

```js-nolint
requestAnimationFrame(callback)
```

### 引数

- `callback`
  - : 次の再描画でアニメーションを更新する時に呼び出す関数を指定します。このコールバック関数には、1 つの引数が渡されます。
    - `timestamp`
      - : 前回フレームのレンダリング終了時刻を示す {{domxref("DOMHighResTimeStamp")}} です（[時刻オリジン](/ja/docs/Web/API/Performance/timeOrigin)からの経過ミリ秒数に基づきます）。このタイムスタンプはミリ秒単位の実数ですが、最小精度は 1 ミリ秒です。また、このタイムスタンプの値は、コールバック関数の開始時に {{domxref('performance.now()')}} を呼び出した場合と似ていますが、決して同じ値になることはありません。

        `requestAnimationFrame()` によってキューに入れられた複数のコールバックが、単一のフレーム内で発生し始めた場合、たとえ前回各コールバックの作業量計算中に時間が経過していたとしても、それぞれのコールバックには同じタイムスタンプが割り当てられます。

### 返値

`long` の整数値で、コールバックリスト内のエントリーを一意に識別するリクエスト ID です。この値は 0 以外ですが、それ以外の特性については一切想定しないでください。この値を {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} に渡すことで、リフレッシュコールバックのリクエストをキャンセルできます。ただし、キャンセル操作は同じワーカー内で行われている必要があります。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 現在のワーカーがこのメソッドに対応していない場合に発生します。

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

- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
- {{domxref("Window.requestAnimationFrame()")}}
