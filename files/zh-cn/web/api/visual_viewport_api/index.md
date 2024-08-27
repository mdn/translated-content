---
title: 可视视口 API
slug: Web/API/Visual_Viewport_API
l10n:
  sourceCommit: 04b91d4a12bec8c3adad0de48a030f6b6c4e4d1e
---

{{DefaultAPISidebar("Visual Viewport")}}

**可视视口 API** 提供了一种用于查询和修改窗口{{Glossary("visual viewport", "可视视口")}}属性的显式机制。可视视口是屏幕的可视部分，不包括屏幕键盘、缩放区域以外的区域或任何其他不随页面尺寸缩放的屏幕工具。

## 概念和用法

移动 WEB 包含两个视口，即布局视口和可视视口。布局视口涵盖页面上的所有元素，而可视视口则是屏幕上实际可见的内容。当用户缩放页面时，可视视口会缩小，但布局视口保持不变。屏幕键盘（OSK）等用户界面功能可以缩小可视视口，而不影响布局视口。

如果网页元素需要在屏幕上可见，而与网页的可见部分无关，该怎么办？例如，如果你需要一组图像控件无论设备的捏合缩放级别如何都能保持在屏幕上，该怎么办？目前各浏览器在处理这个问题上存在差异。可视化视口可让网页开发人员根据屏幕上显示的内容对元素进行相对定位，从而解决这个问题。

要访问窗口的可视化视口，可以从 {{domxref("window.visualViewport")}} 属性中获取 {{domxref("VisualViewport")}} 对象。该对象包含一组描述视口的属性。它还包含两个事件：`onresize` 和 `onscroll`，这两个事件就会在可视视口发生变化时触发。通过这些事件，你可以相对于可视化视口定位元素，而这些元素通常会锚定在布局视口上。

## 接口

- {{DOMxRef("VisualViewport")}}
  - : 指示给定窗口的可视视口。窗口的 `VisualViewport` 对象提供有关视口位置和大小的信息，并接收 {{domxref("VisualViewport.resize_event", "resize")}} 和 {{domxref("VisualViewport.scroll_event", "scroll")}} 事件，你可以通过监控这些事件来了解窗口视口何时发生变化。

### 对其他接口的扩展

- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : 窗口 {{domxref("VisualViewport")}} 对象的只读引用。 如果该属性不存在，则不支持 API。

## 示例

下面的代码以[规范中的示例](https://github.com/WICG/visual-viewport/blob/gh-pages/examples/fixed-to-viewport.html)为基础，但增加了一些内容，使其功能更加完善。它显示了一个名为 `viewportHandler()` 的函数。调用时，它会查询 `offsetLeft` 和 `height` 属性，然后用于 CSS `translate()`。你可以通过将该函数传递给两个事件调用来调用它。

在本示例中，有一点可能不太清楚，那就是 `pendingUpdate` 标志的使用和对 `requestAnimationFrame()` 的调用。`pendingUpdate` 标志的作用是防止在 `onresize` 和 `onscroll` 同时启动时发生多次调用变换的情况。使用 `requestAnimationFrame()` 可以确保在下一次呈现之前进行变换。

```js
let pendingUpdate = false;

function viewportHandler(event) {
  if (pendingUpdate) return;
  pendingUpdate = true;

  requestAnimationFrame(() => {
    pendingUpdate = false;
    const layoutViewport = document.getElementById("layoutViewport");

    // 由于 bar 的位置是固定的，因此我们需要根据视觉视口与布局视口原点的偏移量来进行偏移。
    const viewport = event.target;
    const offsetLeft = viewport.offsetLeft;
    const offsetTop =
      viewport.height -
      layoutViewport.getBoundingClientRect().height +
      viewport.offsetTop;

    // 你也可以通过设置 style.left 和 style.top，如果使用了 width: 100% 代替
    bottomBar.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${
      1 / viewport.scale
    })`;
  });
}

window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
