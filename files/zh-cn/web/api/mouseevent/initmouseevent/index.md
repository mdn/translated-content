---
title: MouseEvent：initMouseEvent() 方法
slug: Web/API/MouseEvent/initMouseEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("UI Events")}}{{deprecated_header}}

**`MouseEvent.initMouseEvent()`** 方法用于在鼠标事件创建时（一般通过 {{domxref("Document.createEvent()")}} 方法创建）初始化其属性的值。

> [!NOTE]
> **该方法已被弃用，请勿再使用。**
>
> 使用特定的事件构造器，如 {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} 替代它。[创建和派发事件](/zh-CN/docs/Web/API/Document_Object_Model/Events#创建和派发事件)一节提供了更多有关使用这些事件的方法的信息。

以这种方式初始化的事件必须是用 {{domxref("Document.createEvent()")}} 方法创建的。在使用 {{ domxref("EventTarget.dispatchEvent()") }} 派发事件之前，必须调用该方法来设置事件。

## 语法

```js-nolint
initMouseEvent(type, canBubble, cancelable, view,
                     detail, screenX, screenY, clientX, clientY,
                     ctrlKey, altKey, shiftKey, metaKey,
                     button, relatedTarget)
```

### 参数

- `type`
  - : 设置事件类型（{{domxref("Event.type", "type")}}）的字符串，包含以下几种鼠标事件：`click`、`mousedown`、`mouseup`、`mouseover`、`mousemove`、`mouseout`。
- `canBubble`
  - : 是否可以冒泡。设置 {{domxref("Event.bubbles")}} 的值。
- `cancelable`
  - : 是否可以阻止事件默认行为。设置 {{domxref("Event.cancelable")}} 的值。
- `view`
  - : 事件的 AbstractView 对象引用，需要在这里传递 {{domxref("window")}} 对象。设置 {{domxref("UIEvent.view")}} 的值。
- `detail`
  - : 事件的鼠标点击数量。设置 {{domxref("UIEvent.detail")}} 的值。
- `screenX`
  - : 事件的屏幕 x 坐标。设置 {{domxref("MouseEvent.screenX")}} 的值。
- `screenY`
  - : 事件的屏幕 y 坐标。设置 {{domxref("MouseEvent.screenY")}} 的值。
- `clientX`
  - : 事件的客户端 x 坐标。设置 {{domxref("MouseEvent.clientX")}} 的值。
- `clientY`
  - : 事件的客户端 y 坐标。设置 {{domxref("MouseEvent.clientY")}} 的值。
- `ctrlKey`
  - : 事件发生时 <kbd>control</kbd> 键是否被按下。设置 {{domxref("MouseEvent.ctrlKey")}} 的值。

- `altKey`
  - : 事件发生时 <kbd>alt</kbd> 键是否被按下。设置 {{domxref("MouseEvent.altKey")}} 的值。

- `shiftKey`
  - : 事件发生时 <kbd>shift</kbd> 键是否被按下。设置 {{domxref("MouseEvent.shiftKey")}} 的值。

- `metaKey`
  - : 事件发生时 <kbd>meta</kbd> 键是否被按下。设置 {{domxref("MouseEvent.metaKey")}} 的值。

- _`button`_
  - : 事件的鼠标 {{domxref("MouseEvent.button", "button")}}。
- `relatedTarget`
  - : 事件的[相关对象](/zh-CN/docs/Web/API/MouseEvent/relatedTarget)。只在某些事件类型有用（`mouseover` 和 `mouseout`）。其他的情况下，传递 `null`。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const event = document.createEvent("MouseEvents");
event.initMouseEvent(
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
document.body.dispatchEvent(event);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MouseEvent.MouseEvent()","MouseEvent()")}} 构造函数，更标准的创建 {{domxref("MouseEvent")}} 对象方法。
- {{domxref("Event.initEvent()")}} 可以简单达到相同目的的方法。它已过时，不应再使用。
