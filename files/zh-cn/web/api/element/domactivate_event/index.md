---
title: "Element: DOMActivate event"
slug: Web/API/Element/DOMActivate_event
---

{{APIRef}}

{{Deprecated_Header}}

当元素被激活时发生，例如点击鼠标或键盘按键。

当元素被激活，如使用鼠标点击或使用键盘导航并激活至这个元素时， **`DOMActivate`** 事件被触发。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><p>Bubbles</p></th>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th scope="row"><p>Cancelable</p></th>
      <td><p>Yes</p></td>
    </tr>
    <tr>
      <th scope="row"><p>Interface</p></th>
      <td><p>{{domxref("MouseEvent")}}</p></td>
    </tr>
  </tbody>
</table>

## 示例

```
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
