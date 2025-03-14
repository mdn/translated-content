---
title: "MouseEvent: movementX プロパティ"
short-title: movementX
slug: Web/API/MouseEvent/movementX
l10n:
  sourceCommit: b3638d40efb549704bd2e73d8aa93514978892cf
---

{{APIRef("Pointer Lock API")}}

**`movementX`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントとこのイベントのマウスポインターの X 座標の差を示します。このプロパティの値は `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX` のように計算されます。

> [!WARNING]
> ブラウザーは `movementX` と {{domxref("MouseEvent.screenX", "screenX")}} に [仕様で定義されているものとは異なる単位を使用します](https://github.com/w3c/pointerlock/issues/42)。ブラウザーとオペレーティングシステムによって、 `movementX` の単位は物理ピクセルであったり、論理ピクセルであったり、 CSS ピクセルであったりします。

## 値

数値です。 `mousemove` 以外の {{domxref("MouseEvent")}} では常に 0 です。

## 例

この例は `movementX` と {{domxref("MouseEvent.movementY", "movementY")}} を使用して、マウスの移動量を記録します。

### HTML

```html
<p id="log">マウスを動かしてください。</p>
```

### JavaScript

```js
function logMovement(event) {
  log.insertAdjacentHTML(
    "afterbegin",
    `移動量: ${event.movementX}, ${event.movementY}<br>`,
  );
  while (log.childNodes.length > 128) log.lastChild.remove();
}

const log = document.getElementById("log");
document.addEventListener("mousemove", logMovement);
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent.movementY")}}
- {{domxref("MouseEvent")}}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
