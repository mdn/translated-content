---
title: Element：releasePointerCapture() 方法
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`releasePointerCapture()`** 方法释放（停止）之前为特定指针（{{domxref("PointerEvent")}}）设置的[_指针捕捉_](/zh-CN/docs/Web/API/Pointer_events#指针捕捉)。

## 语法

```js-nolint
releasePointerCapture(pointerId)
```

### 参数

- `pointerId`
  - : 一个 {{domxref("PointerEvent")}} 对象的 {{domxref("PointerEvent.pointerId", "pointerId")}}。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `NotFoundError` {{domxref("DOMException")}}
  - : 如果 `pointerId` 与任何活动指针都不匹配，则抛出该异常。

## 示例

此示例在按下 {{HtmlElement("div")}} 时为其设置指针捕捉。这使你可以在水平方向上滑动该元素，即使指针移动到其边界之外也是如此。

### HTML

```html
<div id="slider">滑动我</div>
```

### CSS

```css
div {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffbbee;
}
```

### JavaScript

```js
const slider = document.getElementById("slider");

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

- {{domxref("Element.hasPointerCapture", "Element.hasPointerCapture()")}}
- {{domxref("Element.setPointerCapture", "Element.setPointerCapture()")}}
- [指针事件](/zh-CN/docs/Web/API/Pointer_events)
