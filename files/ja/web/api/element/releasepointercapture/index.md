---
title: Element.releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
---

{{APIRef("DOM")}}

{{domxref("Element")}} インターフェイスの **`releasePointerCapture()`** メソッドは、特定の（{{domxref("PointerEvent")}}）*ポインタ*に対して以前に設定された*ポインタキャプチャ*を解放（停止）します。

*ポインタキャプチャ*の説明と特定の要素に設定する方法については、{{domxref("Element.setPointerCapture","Element.setPointerCapture()")}} メソッドを参照してください。

## 構文

```
targetElement.releasePointerCapture(pointerId);
```

### パラメーター

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 戻り値

このメソッドは `undefined` を返します。

### 例外

| 例外               | 説明                                                   |
| ------------------ | ------------------------------------------------------ |
| `InvalidPointerId` | pointerId は、どのアクティブポインタとも一致しません。 |

## 例

この例では、{{HtmlElement("div")}} を押下するとポインタキャプチャが設定されます。 これにより、ポインタをその境界の外側に移動した場合でも、要素を水平方向にスライドさせることができます。

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

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様

| 仕様                                                                                                                                             | 状態                                     | コメント |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#idl-def-element-releasepointercapture-pointerid', 'releasePointerCapture')}} | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#idl-def-element-releasepointercapture-pointerid', 'releasePointerCapture')}} | {{Spec2('Pointer Events')}}     | 初期定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ domxref("Element.setPointerCapture","Element.setPointerCapture()") }}
- {{ domxref("Pointer_events","Pointer Events") }}
