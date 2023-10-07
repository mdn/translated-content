---
title: "Element: setPointerCapture() メソッド"
short-title: setPointerCapture()
slug: Web/API/Element/setPointerCapture
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`setPointerCapture()`** は {{domxref("Element")}} インターフェイスのメソッドで、特定の要素をこれ以降のポインターイベントの*キャプチャターゲット*として指定するために使用します。（{{domxref("Element.releasePointerCapture()")}} を介して、または {{domxref("Element/pointerup_event", "pointerup")}} イベントが発生して）キャプチャが解放されるまで、それ以降のポインターのイベントはキャプチャ要素をターゲットにします。

> **メモ:** ポインターキャプチャ設定後、それ以降のポインターイベントはキャプチャ対象の要素内で発生したとみなされます。よって、 `pointerover`、`pointerenter`、`pointerleave`、`pointerout` は**発生しません**。
> タッチ画面の機器などで[直接操作](https://w3c.github.io/pointerevents/#dfn-direct-manipulation)をしているブラウザーでは、 `pointerdown` イベント発生時に要素に対してポインターキャプチャが[自動的に適用](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture)されます。ポインターキャプチャの解放は {{domxref('element.releasePointerCapture')}} メソッドを手動で呼び出したとき、または `pointerup` もしくは `pointercancel` イベント発生時に自動的に行われます。

### ポインターキャプチャの概要

*ポインターキャプチャ*では、ポインターの位置にある通常 (または*ヒットテスト*) のターゲットではなく、特定の*ポインターイベント* ({{domxref("PointerEvent")}}) のイベントを特定の要素にターゲットしなおすことができます。 これは、ポインターデバイスの接触が要素から外れた場合でも、（スクロールやパンなどで）要素がポインターイベントを受信し続けるようにするために使用できます。

## 構文

```js-nolint
setPointerCapture(pointerId)
```

### 引数

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `NotFoundError` {{domxref("DOMException")}}
  - : `pointerId` がアクティブなポインターのいずれにも一致しなかった場合に発生します。

## 例

この例では、 {{HtmlElement("div")}} を押下するとポインターキャプチャが設定されます。これにより、ポインターをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。

### HTML

```html
<div id="slider">SLIDE ME</div>
```

### CSS

```css
div {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbe;
}
```

### JavaScript

```js
function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById("slider");

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.releasePointerCapture")}}
- {{domxref("Pointer_events","ポインターイベント", "", 1)}}
