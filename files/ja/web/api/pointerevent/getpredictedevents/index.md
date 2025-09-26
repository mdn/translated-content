---
title: "PointerEvent: getPredictedEvents() メソッド"
short-title: getPredictedEvents()
slug: Web/API/PointerEvent/getPredictedEvents
l10n:
  sourceCommit: 84c430110b84fae0335959184ce73f03124220fd
---

{{APIRef("Pointer Events")}}

**`getPredictedEvents()`** は {{domxref("PointerEvent")}} インターフェイスのメソッドで、将来のポインター位置を予測した一連の `PointerEvent` インスタンスを返します。
予測位置の計算方法はユーザーエージェントによって異なりますが、過去の位置、現在の速度、軌道に基づいて計算されます。

アプリケーションは予測イベントを使用して、予測された位置に「描画」することができます。予測イベントのアプリケーションによる解釈と用途によって、知覚される応答時間が縮小する可能性があります。

予測されるイベントの例については、[仕様書の Figure 8](https://w3c.github.io/pointerevents/#figure_predicted) を参照してください。

## 構文

```js-nolint
getPredictedEvents()
```

### 引数

なし。

### 返値

{{domxref('PointerEvent')}} インスタンスの配列です。

## 例

### HTML

```html
<canvas id="target" width="600" height="300"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("target");
const ctx = canvas.getContext("2d");

const pointerEvents = [];

function drawCircle(x, y, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 最後の 20 件のイベントを描画
  if (pointerEvents.length > 20) {
    pointerEvents.shift();
  }
  pointerEvents.push({ x, y, color });

  for (const pointerEvent of pointerEvents) {
    ctx.beginPath();
    ctx.arc(pointerEvent.x, pointerEvent.y, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = pointerEvent.color;
    ctx.stroke();
  }
}

canvas.addEventListener("pointermove", (e) => {
  // 現在のイベントに円を描画
  drawCircle(e.clientX, e.clientY, "black");

  const predictedEvents = e.getPredictedEvents();
  for (let predictedEvent of predictedEvents) {
    // 違いが分かるようにオフセットを適用し、赤に色付けする
    drawCircle(predictedEvent.clientX + 20, predictedEvent.clientY + 20, "red");
  }
});
```

### 結果

{{EmbedLiveSample("Example", "", "320")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
