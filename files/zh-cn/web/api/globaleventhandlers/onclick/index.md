---
title: GlobalEventHandlers.onclick
slug: Web/API/GlobalEventHandlers/onclick
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
  - 事件处理器
  - 全局事件处理器
translation_of: Web/API/GlobalEventHandlers/onclick
---
{{ ApiRef("HTML DOM") }}

全局事件处理器（{{domxref("GlobalEventHandlers")}}）的 **`onclick`** 属性，是处理当前元素的 {{domxref("Element/click_event", "click")}} 事件的事件处理器（[event handler](/en-US/docs/Web/Events/Event_handlers)）。

当用户点击一个元素时，会触发 `click` 事件。在每次点击的整个过程中，`click` 事件的运行顺序在 {{domxref("Element/mousedown_event", "mousedown")}} 和 {{domxref("Element/mouseup_event", "mouseup")}} 事件之后。

> **备注：** 当你使用 `click` 事件去触发一个动作时，也要考虑向 {{domxref("Element/keydown_event", "keydown")}} 事件添加此动作，以便允许不使用鼠标或触摸屏的用户进行同样的操作。

## 语法

```js
target.onclick = functionRef;
```

### 值

`functionRef` 是一个函数名称，或一个 [函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)。该函数接收 {{domxref("MouseEvent")}} 对象作为其唯一参数。在函数内，{{jsxref("Operators/this", "this")}} 是触发当前事件的元素（同时匹配 `event.currentTarget`）。

同一时刻，每个 `onclick` 接收器只能指向唯一一个对象。所以，你可能更倾向于使用 {{domxref("EventTarget.addEventListener()")}} 的方法，这种方法更加灵活。

## 示例

### 监听 click 事件

这个示例会在 click 事件发生时改变元素颜色。

#### HTML

```html
<div id="demo">请点击这里</div>
```

#### Javascript

```js
document.getElementById('demo').onclick = function changeContent() {

  document.getElementById('demo').textContent = "Help me";
  document.getElementById('demo').style = "Color: red";

}
```

#### 结果

{{EmbedLiveSample("Detecting_clicks")}}

### 获取点击的坐标

这个示例会记录每次点击的坐标。

#### HTML

```html
<p>请随意点击本示例。</p>
<p id="log"></p>
```

#### JavaScript

```js
let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Position: (${e.clientX}, ${e.clientY})`;
}
```

#### 结果

{{EmbedLiveSample("Getting_the_coordinates_of_clicks")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element/click_event", "click")}} 事件
- 与 `onclick` 有关的事件处理器

  - {{domxref("GlobalEventHandlers.onauxclick")}}
  - {{domxref("GlobalEventHandlers.ondblclick")}}
