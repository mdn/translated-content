---
title: ResizeObserver
slug: Web/API/ResizeObserver
---

{{APIRef("Resize Observer API")}}

**`ResizeObserver`** 接口监视 {{domxref('Element')}} 内容盒或边框盒或者 {{domxref('SVGElement')}} 边界尺寸的变化。

> **备注：** 内容盒是盒模型放置内容的部分，这意味着边框盒减去内边距和边框的宽度就是内容盒。边框盒包含内容、内边距和边框。有关进一步阐述，参见[盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)。

`ResizeObserver` 避免了通过回调函数调整大小时，通常创建的无限回调循环和循环依赖项。它只能通过在后续的帧中处理 DOM 中更深层次的元素来做到这一点。如果它的实现遵循规范，则应在绘制前和布局后调用 resize 事件。

## 构造函数

- {{domxref("ResizeObserver.ResizeObserver", "ResizeObserver()")}}
  - : 创建并返回一个新的 `ResizeObserver` 对象。

## 属性

无。

## 方法

- {{domxref('ResizeObserver.disconnect()')}}
  - : 取消特定观察者目标上所有对 {{domxref('Element')}} 的监听。
- {{domxref('ResizeObserver.observe()')}}
  - : 开始对指定 {{domxref('Element')}} 的监听。
- {{domxref('ResizeObserver.unobserve()')}}
  - : 结束对指定 {{domxref('Element')}} 的监听。

## 示例

在 [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html)（[见源码](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)）示例中，我们使用 resize observer 去更改头和段落的 {{cssxref("font-size")}}，随着 slider 的值被改变，也引起了包含的 `<div>` 的宽度改变。这展示了你可以响应元素大小的变化，即使它们与视口无关。

我们也提供了一个 checkbox 来关闭和打开 observer。如果它是关闭的，文本将不会随着 `<div>` 的宽度改变而改变。

JavaScript 看起来像这样：

```js
const h1Elem = document.querySelector("h1");
const pElem = document.querySelector("p");
const divElem = document.querySelector("body > div");
const slider = document.querySelector('input[type="range"]');
const checkbox = document.querySelector('input[type="checkbox"]');

divElem.style.width = "600px";

slider.addEventListener("input", () => {
  divElem.style.width = `${slider.value}px`;
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.contentBoxSize) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : entry.contentBoxSize;

      h1Elem.style.fontSize = `${Math.max(
        1.5,
        contentBoxSize.inlineSize / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(
        1,
        contentBoxSize.inlineSize / 600,
      )}rem`;
    } else {
      h1Elem.style.fontSize = `${Math.max(
        1.5,
        entry.contentRect.width / 200,
      )}rem`;
      pElem.style.fontSize = `${Math.max(1, entry.contentRect.width / 600)}rem`;
    }
  }

  console.log("Size changed");
});

resizeObserver.observe(divElem);

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    resizeObserver.observe(divElem);
  } else {
    resizeObserver.unobserve(divElem);
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [盒模型](/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)
- {{domxref('PerformanceObserver')}}
- {{domxref('IntersectionObserver')}}（[Intersection Observer API](/zh-CN/docs/Web/API/Intersection_Observer_API) 的一部分）
