---
title: 'Element: DOMActivate イベント'
slug: Web/API/Element/DOMActivate_event
---

{{APIRef}}

{{Deprecated_Header}}

**`DOMActivate`** イベントは、要素がアクティブになったとき、例えば、マウスを使ったりキーを押したりしてそこに移動したときに発行されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">バブリング</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">キャンセル</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">インターフェイス</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
  </tbody>
</table>

## 例

```html
<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny"
     xmlns:ev="http://www.w3.org/2001/xml-events"
     width="6cm" height="5cm" viewBox="0 0 600 500">

  <desc>Example: invoke an ECMAScript function from a DOMActivate event</desc>

  <!-- ECMAScript to change the radius -->
  <script type="application/ecmascript"><![CDATA[
    function change(evt) {
      var circle = evt.target;
      var currentRadius = circle.getFloatTrait("r");
      if (currentRadius == 100)
        circle.setFloatTrait("r", currentRadius * 2);
      else
        circle.setFloatTrait("r", currentRadius * 0.5);
    }
  ]]></script>

  <!-- Act on each DOMActivate event -->
  <circle cx="300" cy="225" r="100" fill="red">
    <handler type="application/ecmascript" ev:event="DOMActivate"> change(evt); </handler>
  </circle>

  <text x="300" y="480" font-family="Verdana" font-size="35" text-anchor="middle">
    Activate the circle to change its size
  </text>
</svg>
```

{{EmbedLiveSample("Examples", 640, 200)}}

## 仕様書

| 仕様書                                                                                   | 状態                         |
| ---------------------------------------------------------------------------------------- | ---------------------------- |
| {{SpecName('UI Events', '#event-type-DOMActivate', 'DOMActivate')}} | {{Spec2('UI Events')}} |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
