---
title: "MouseEvent: movementY プロパティ"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: b3638d40efb549704bd2e73d8aa93514978892cf
---

{{APIRef("Pointer Lock API")}}

**`movementY`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、直前の {{domxref("Element/mousemove_event", "mousemove")}} イベントとこのイベントのマウスポインターの Y 座標の差を示します。このプロパティの値は `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY` のように計算されます。

> [!WARNING]
> ブラウザーは `movementY` と {{domxref("MouseEvent.screenY", "screenY")}} に[仕様で定義されているものとは異なる単位を使用します](https://github.com/w3c/pointerlock/issues/42)。ブラウザーとオペレーティングシステムによって、 `movementY` の単位は物理ピクセルであったり、論理ピクセルであったり、 CSS ピクセルであったりします。

## 値

数値です。 `mousemove` 以外の {{domxref("MouseEvent")}} では常に 0 です。

## 例

この例は {{domxref("MouseEvent.movementX", "movementX")}} と `movementY` を使用して、マウスの移動量を記録します。

### HTML

```html
<p id="log">マウスを動かしてください。</p>
```

### JavaScript

```js
function logMovement(event) {
  log.innerText = `移動量: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
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

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
