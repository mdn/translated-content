---
title: Element.setPointerCapture()
slug: Web/API/Element/setPointerCapture
---

{{APIRef("DOM")}}

{{domxref("Element")}}接口的**`setPointerCapture()`** 方法用于将特定元素指定为未来指针事件的捕获目标。指针的后续事件将以捕获元素为目标，直到捕获被释放（通过{{domxref("Element.releasePointerCapture()")}}）。

> **备注：** 一旦设置了 pointer capture，`pointerover`、`pointerout`、`pointerenter` 和 `pointerleave` 事件将不会被触发，直到越过设置了 capture 的元素的边界。这是因为其他元素将不能再作为 pointer 事件的目标了。这会影响到这些事件在其他元素上的触发。

### 指针捕获概述

指针捕获允许一个特定的指针事件 ({{domxref("PointerEvent")}}) 事件从一个事件触发时候的目标重定位到另一个目标上。这个功能可以确保一个元素可以持续的接收到一个 pointer 事件，即使这个事件的触发点已经移出了这个元素（比如，在滚动的时候）。

## 语法

```
targetElement.setPointerCapture(pointerId);
```

### 参数

- `pointerId`
  - : {{domxref("PointerEvent")}} 对象的{{domxref("PointerEvent.pointerId", "pointerId")}} 。

### 返回值

返回 void。如果`pointerId`不匹配任何当前活动的指针事件，将抛出{{domxref("DOMException")}}。

## 示例

当您按下它时，此示例在 {{HtmlElement("div")}} 上设置指针捕获。这使您可以滑动元素，即使指针移动到其边界之外也是如此。

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

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ domxref("Element.releasePointerCapture")}}
- {{ domxref("Pointer_events","Pointer Events") }}
