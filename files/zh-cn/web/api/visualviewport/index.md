---
title: VisualViewport
slug: Web/API/VisualViewport
---

{{SeeCompatTable}}{{APIRef("Visual Viewport")}}

[Visual Viewport API](/zh-CN/docs/Web/API/Visual_Viewport_API) 提供了当前页面的视觉视口接口，即 **`VisualViewport`** 。对于每个页面容器来说（如 iframe），都存在有一个独立的 window 对象。每个页面容器的 window 对象都有一个独立的 `VisualViewport` 属性。

你可以使用 {{domxref("Window.visualViewport")}} 获得对应 window 的视觉视口 API。

> **备注：** 与布局视口（layout viewport）不同的是：只有最上层的 window 才有视觉视口（visual viewport）这一概念。因此只有最上层 window 的 `VisualViewport` 属性才是有效的，其他层的视觉视口属性可看作是布局视口属性的别名。比如，对于一个 {{htmlelement("iframe")}} ，其对应的视觉视口属性 {{domxref("VisualViewport.width")}} 相当于对应的布局视口属性，如 {{domxref("Element.clientWidth", "document.documentElement.clientWidth")}}.

## 属性

_`VisualViewport`_ 从其父元素继承属性 _{{domxref("EventTarget")}}_。

- {{domxref("VisualViewport.offsetLeft")}} {{readonlyinline}}
  - : 返回视觉视口的左边框到布局视口的左边框的 CSS 像素距离。
- {{domxref("VisualViewport.offsetTop")}} {{readonlyinline}}
  - : 返回视觉视口的上边框到布局视口的上边框的 CSS 像素距离。
- {{domxref("VisualViewport.pageLeft")}} {{readonlyinline}}
  - : 返回相对于初始的 viewport 属性的 X 轴坐标所对应的 CSS 像素数。
- {{domxref("VisualViewport.pageTop")}} {{readonlyinline}}
  - : 返回相对于初始的 viewport 属性的 Y 轴坐标所对应的 CSS 像素数。
- {{domxref("VisualViewport.width")}} {{readonlyinline}}
  - : 返回视觉视口的宽度所对应的 CSS 像素数。
- {{domxref("VisualViewport.height")}} {{readonlyinline}}
  - : 返回视觉视口的高度所对应的 CSS 像素数。
- {{domxref("VisualViewport.scale")}} {{readonlyinline}}
  - : 返回当前视觉视口所应用的缩放比例。

## Events

通过使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或者将监听回调函数赋值给对应的 `oneventname` 属性，可以为对应的视口事件添加监听。

- [`resize`](/zh-CN/docs/Web/API/VisualViewport/resize_event)
  - : 当视觉视口被改变时触发。
    也可以为 {{domxref("VisualViewport.onresize")}} 属性赋值来添加监听。
- [`scroll`](/zh-CN/docs/Web/API/VisualViewport/scroll_event)
  - : 当视觉视口滑动时触发。
    也可以为 {{domxref("VisualViewport.onscroll")}} 属性赋值来添加监听。

## 例子

### 缩放检测并隐藏元素

这个例子取自 [Visual Viewport README](https://github.com/WICG/visual-viewport)，展示了如何在用户缩放时隐藏某个盒子（或元素）。这对于增强一个页面在缩放时的用户体验有重要意义。同样，你也可以查看另一个 [例子](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html) 。

```js
var bottomBar = document.getElementById("bottombar");
var viewport = window.visualViewport;

function resizeHandler() {
  if (viewport.scale > 1.3) bottomBar.style.display = "none";
  else bottomBar.style.display = "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### 模拟 position 属性：device-fixed

这个例子同样取自 [Visual Viewport README](https://github.com/WICG/visual-viewport) ，展示了如何使用视觉视口 API，从而模拟 `position: device-fixed` 的 CSS 属性。类似于 `position: fixed` ，这一属性可将被设置的元素固定在视觉视口特定位置。此外，你也可以查看另一个 [例子](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html) 。

```js
var bottomBar = document.getElementById("bottombar");
var viewport = window.visualViewport;
function viewportHandler() {
  var layoutViewport = document.getElementById("layoutViewport");

  // Since the bar is position: fixed we need to offset it by the visual
  // viewport's offset from the layout viewport origin.
  var offsetLeft = viewport.offsetLeft;
  var offsetTop =
    viewport.height -
    layoutViewport.getBoundingClientRect().height +
    viewport.offsetTop;

  // You could also do this by setting style.left and style.top if you
  // use width: 100% instead.
  bottomBar.style.transform =
    "translate(" +
    offsetLeft +
    "px," +
    offsetTop +
    "px) " +
    "scale(" +
    1 / viewport.scale +
    ")";
}
window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
```

> **备注：** 应小心使用上述方案，使用这种方式模拟的 `position: device-fixed` 可能会导致其他元素在滚动页面时出现闪烁。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参照

- [Web 视口说明](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — 解释了什么是浏览器视口和视觉视口和布局视口的区别。
