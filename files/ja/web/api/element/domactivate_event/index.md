---
title: "Element: DOMActivate イベント"
short-title: DOMActivate
slug: Web/API/Element/DOMActivate_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}{{Deprecated_Header}}

**`DOMActivate`** イベントは、要素がアクティブになったとき、例えば、マウスを使ったりキーを押したりしてそこに移動したときに発行されます。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("DOMActivate", (event) => {});

onDOMActivate = (event) => {};
```

## イベント型

{{domxref("MouseEvent")}} です。 {{domxref("Event")}} を継承しています。

{{InheritanceDiagram("MouseEvent")}}

## イベントプロパティ

[...]

## 例

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.2"
  baseProfile="tiny"
  xmlns:ev="http://www.w3.org/2001/xml-events"
  width="6cm"
  height="5cm"
  viewBox="0 0 600 500">
  <desc>Example: invoke an ECMAScript function from a DOMActivate event</desc>

  <!-- ECMAScript to change the radius -->
  <script type="application/ecmascript">
    <![CDATA[ function change(evt) { const circle = evt.target; const
    currentRadius = circle.getFloatTrait("r"); if (currentRadius === 100) {
    circle.setFloatTrait("r", currentRadius * 2); } else {
    circle.setFloatTrait("r", currentRadius * 0.5); } } ]]>
  </script>

  <!-- Act on each DOMActivate event -->
  <circle cx="300" cy="225" r="100" fill="red">
    <handler type="application/ecmascript" ev:event="DOMActivate">
      change(evt);
    </handler>
  </circle>

  <text
    x="300"
    y="480"
    font-family="Verdana"
    font-size="35"
    text-anchor="middle">
    Activate the circle to change its size
  </text>
</svg>
```

{{EmbedLiveSample("Examples", 640, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
