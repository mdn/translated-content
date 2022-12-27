---
title: Element.setPointerCapture()
slug: Web/API/Element/setPointerCapture
---

{{APIRef("DOM")}}

**`setPointerCapture()`** は {{domxref("Element")}} インターフェイスのメソッドで、特定の要素をこれ以降のポインターイベントの*キャプチャターゲット*として指定するために使用します。 ({{domxref("Element.releasePointerCapture()")}} を介して) キャプチャが解放されるまで、それ以降のポインターのイベントはキャプチャ要素をターゲットにします。

> **メモ:** ポインターキャプチャを設定している場合、 {{domxref("HTMLElement/pointerover_event", "pointerover")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}}, {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}, {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} のイベントはキャプチャターゲットの境界を横断したときにのみ生成されます。これは他のすべての要素でこれらのイベントを抑制する効果があります。

### ポインターキャプチャの概要

*ポインターキャプチャ*では、ポインターの位置にある通常 (または*ヒットテスト*) のターゲットではなく、特定の*ポインターイベント* ({{domxref("PointerEvent")}}) のイベントを特定の要素にターゲットしなおすことができます。 これは、ポインターデバイスの接触が要素から外れた場合でも、 (スクロールやパンなどで) 要素がポインターイベントを受信し続けるようにするために使用できます。

## 構文

```
targetElement.setPointerCapture(pointerId);
```

### 引数

- `pointerId`
  - : {{domxref("PointerEvent")}} オブジェクトの {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 返値

このメソッドは `undefined` を返します。

### 例外

| 例外               | 説明                                                     |
| ------------------ | -------------------------------------------------------- |
| `InvalidPointerId` | pointerId が、どのアクティブポインターとも一致しません。 |

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

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```

### 結果

{{EmbedLiveSample("Example")}}

## 仕様書

| 仕様書                                                                                                                                       | 状態                                     | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------- |
| {{SpecName('Pointer Events 2','#idl-def-element-setpointercapture-pointerid', 'setPointerCapture')}}         | {{Spec2('Pointer Events 2')}} | 不安定版 |
| {{SpecName('Pointer Events', '#widl-Element-setPointerCapture-void-long-pointerId', 'setPointerCapture')}} | {{Spec2('Pointer Events')}}     | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.releasePointerCapture")}}
- {{domxref("Pointer_events","ポインターイベント")}}
