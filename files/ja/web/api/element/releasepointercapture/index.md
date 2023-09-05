---
title: "Element: releasePointerCapture() メソッド"
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`releasePointerCapture()`** は {{domxref("Element")}} インターフェイスのメソッドで、特定の（{{domxref("PointerEvent")}} の）*ポインター*に対して以前に設定された*ポインターキャプチャ*を解放（停止）します。

*ポインターキャプチャ*の説明と特定の要素に設定する方法については、{{domxref("Element.setPointerCapture","Element.setPointerCapture()")}} メソッドを参照してください。

## 構文

```js-nolint
releasePointerCapture(pointerId)
```

### 引数

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

| 例外               | 説明                                                       |
| ------------------ | ---------------------------------------------------------- |
| `InvalidPointerId` | pointerId がどのアクティブなポインターとも一致しない場合。 |

## 例

この例では、{{HtmlElement("div")}} を押下するとポインターキャプチャが設定されます。 これにより、ポインターをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。

### HTML

```html
<div id="slider">スライドしてね</div>
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

- {{ domxref("Element.setPointerCapture","Element.setPointerCapture()") }}
- {{domxref("Pointer_events","ポインターイベント", "", 1)}}
