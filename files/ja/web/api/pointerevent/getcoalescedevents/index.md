---
title: "PointerEvent: getCoalescedEvents() メソッド"
short-title: getCoalescedEvents()
slug: Web/API/PointerEvent/getCoalescedEvents
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{APIRef("Pointer Events")}} {{secureContext_header}}

**`getCoalescedEvents()`** は {{domxref("PointerEvent")}} インターフェイスのメソッドで、単一の {{domxref('Element/pointermove_event', 'pointermove')}} または {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} イベントに統合（マージ）された `PointerEvent` インスタンスの配列を返します。
ユーザーエージェントは、複数の更新を多数の {{domxref('Element/pointermove_event', 'pointermove')}} イベントの並びを単一のイベントに統合します。
これにより、ユーザーエージェントが処理するイベント数が減るため、処理速度の向上に役立ちますが、特に高速かつ大規模な動きの場合、追跡の粒度と精度が低下する可能性があります。

**`getCoalescedEvents()`** メソッドを使用すると、アプリケーションは必要に応じて、ポインターの移動データを正確に処理するために、統合前のすべての位置の変更にアクセスすることができます。統合前の位置の変更は、描画アプリケーションで望ましいものです。すべてのイベントにアクセスすることで、たとえば、ポインターの動きにより近い滑らかな曲線を作成するのに役立ちます。

イベントの統合についての説明は、[仕様書の Figure 7](https://w3c.github.io/pointerevents/#figure_coalesced) を参照してください。

## 構文

```js-nolint
getCoalescedEvents()
```

### 引数

なし。

### 返値

{{domxref('PointerEvent')}} インスタンスの配列。

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

  const coalescedEvents = e.getCoalescedEvents();
  for (let coalescedEvent of coalescedEvents) {
    // 違いが分かるようにオフセットを適用し、赤に色付けする
    drawCircle(coalescedEvent.clientX + 20, coalescedEvent.clientY + 20, "red");
  }
});
```

### 結果

{{EmbedLiveSample("Example", "", "320")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
