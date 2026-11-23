---
title: "MouseEvent: movementY プロパティ"
short-title: movementY
slug: Web/API/MouseEvent/movementY
l10n:
  sourceCommit: 4d90fa2de9c90af02c581e294adaa67093fdfd4e
---

{{APIRef("Pointer Lock API")}}

**`movementY`** は {{domxref("MouseEvent")}} インターフェイスの読み取り専用プロパティで、指定された移動イベントと直前の同じ型の移動イベントとの間におけるマウス（またはポインター）の Y 座標の差を返します。

つまり、このプロパティの値は `currentEvent.movementY = currentEvent.screenY - previousEvent.screenY` のように計算されます。
{{domxref("Element/mousemove_event", "mousemove")}}、{{domxref("Element/pointermove_event", "pointermove")}}、{{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} 以外のイベントでは、値は 0 になります。

> [!WARNING]
> ブラウザーは、仕様で定義されているものとは異なる単位を `movementY` と `screenY` に[使用します](https://github.com/w3c/pointerlock/issues/42)。
> ブラウザーとオペレーティングシステムによって、`movementY` の単位は物理ピクセル、論理ピクセル、または CSS ピクセルになります。
> 代わりに移動プロパティを使用せず、現在のクライアント値（{{domxref("MouseEvent.screenX", "screenX")}}、{{domxref("MouseEvent.screenY", "screenY")}}）と直前のクライアント値との差を計算することを推奨します。

## 値

数値です。
`mousemove` 以外の {{domxref("MouseEvent")}} および、`pointermove` または `pointerrawupdate` 以外の {{domxref("PointerEvent")}} では常に 0 です。

## 例

### `mousemove` イベントのマウス移動量の記録

この例は {{domxref("MouseEvent.movementX", "movementX")}} と `movementY` を使用して、マウスの移動量を記録します。

#### HTML

```html
<p id="log">この要素の内側でマウスを動かしてください。</p>
```

#### JavaScript

```js
const log = document.getElementById("log");

function logMovement(event) {
  log.innerText = `移動量: ${event.movementX}, ${event.movementY}\n${log.innerText}`;
}

document.addEventListener("mousemove", logMovement);
```

#### 結果

{{EmbedLiveSample("`mousemove` イベントのマウス移動量の記録")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent.movementX")}}
- {{domxref("MouseEvent")}}
- [ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)
