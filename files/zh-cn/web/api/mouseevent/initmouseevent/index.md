---
title: MouseEvent.initMouseEvent()
slug: Web/API/MouseEvent/initMouseEvent
---

{{APIRef("DOM Events")}}{{deprecated_header}}

**`MouseEvent.initMouseEvent()`** 方法用以在鼠标事件创建时 (一般用 {{domxref("Document.createEvent()")}}方法创建) 初始化其属性的值。

事件初始化是在事件被{{ domxref("Document.createEvent()") }}方法创建后必需的。这个方法必须在事件被{{ domxref("EventTarget.dispatchEvent()") }}方法发送出来前调用。一旦事件被发送后，它将不再起任何作用。

> **备注：** **不要再用此方法，已过时。**
>
> 使用特定的事件构造器来替代它，像 {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}。[创建并发送事件](/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events) 页面里有更多的使用信息。

## 语法

```
event.initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget);
```

### 形参

- _`type`_
  - : 设置事件类型{{domxref("Event.type", "type")}} 的字符串，包含以下几种鼠标事件：`click`，`mousedown`，`mouseup`，`mouseover`，`mousemove`，`mouseout`。
- _`canBubble`_
  - : 是否可以冒泡。取值集合见{{domxref("Event.bubbles")}}。
- _`cancelable`_
  - : 是否可以阻止事件默认行为。取值集合见{{domxref("Event.cancelable")}}。
- _`view`_
  - : 事件的 AbstractView 对象引用，这里其实指向{{domxref("window")}} 对象。取值集合见 {{domxref("UIEvent.view")}}。
- _`detail`_
  - : 事件的鼠标点击数量。取值集合见{{domxref("Event.detail")}}。
- _`screenX`_
  - : 事件的屏幕的 x 坐标。取值集合见{{domxref("MouseEvent.screenX")}}。
- _`screenY`_
  - : 事件的屏幕的 y 坐标。取值集合见{{domxref("MouseEvent.screenY")}}。
- _`clientX`_
  - : 事件的客户端 x 坐标。取值集合见{{domxref("MouseEvent.clientX")}}。
- _`clientY`_
  - : 事件的客户端 y 坐标。取值集合见{{domxref("MouseEvent.clientY")}}。
- _`ctrlKey`_

  - : 事件发生时&#x20;

    <kbd>control</kbd>

    &#x20;键是否被按下。取值集合见{{domxref("MouseEvent.ctrlKey")}}。

- _`altKey`_

  - : 事件发生时&#x20;

    <kbd>alt</kbd>

    &#x20;键是否被按下。取值集合见{{domxref("MouseEvent.altKey")}}。

- _`shiftKey`_

  - : 事件发生时&#x20;

    <kbd>shift</kbd>

    &#x20;键是否被按下。取值集合见{{domxref("MouseEvent.shiftKey")}}。

- _`metaKey`_

  - : 事件发生时&#x20;

    <kbd>meta</kbd>

    &#x20;键是否被按下。取值集合见{{domxref("MouseEvent.metaKey")}}。

- _`button`_
  - : 鼠标按键值 {{domxref("MouseEvent.button", "button")}}。
- _`relatedTarget`_
  - : 事件的[相关对象](/zh-CN/DOM/event.relatedTarget)。只在某些事件类型有用 (例如 `mouseover` ?和 `mouseout`)。其他的传 null。

## 示例

### HTML

```html
<div style="background:red;width:180px;padding:10px;">
  <div id="out"></div>
  <input type="text" />
</div>
```

### JavaScript

```js
document.body.onclick = function () {
  e = arguments[0];
  var dt = e.target,
    stag = dt.tagName.toLowerCase();
  document.getElementById("out").innerHTML = stag;
};
var simulateClick = function () {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    0,
    0,
    0,
    80,
    20,
    false,
    false,
    false,
    false,
    0,
    null,
  );
  document.body.dispatchEvent(evt);
};
simulateClick(); //Why it can not show "input" ?
```

这里有个在线演示

{{EmbedLiveSample('示例', 200, 36)}}

## 规范

此特性不属于任何规范，也不再有望成为标准。

请使用 {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} 构造函数代替。

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("MouseEvent.MouseEvent()","MouseEvent()")}}构造器，更标准的创建{{domxref("MouseEvent")}}对象方法。
- {{domxref("Event.initEvent()")}}可以简单达到相同目的的方法。它已过时不再使用。
