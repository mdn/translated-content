---
title: 可视视口 API
slug: Web/API/Visual_Viewport_API
l10n:
  sourceCommit: 4b5b3e16c8260a429db07dd54420ae40794b96c2
---

{{DefaultAPISidebar("Visual Viewport")}}

**可视视口 API** 提供了一种用于查询和修改窗口{{Glossary("visual viewport", "可视视口")}}属性的显式机制。可视视口是屏幕的可视部分，不包括屏幕键盘、缩放区域以外的区域或任何其他不随页面尺寸缩放的屏幕工具。

## 概念和用法

移动 web 包含两个视口，即布局视口和可视视口。布局视口涵盖页面上的所有元素，而可视视口则是屏幕上实际可见的内容。当用户缩放页面时，可视视口会缩小，但布局视口保持不变。屏幕键盘（OSK）等用户界面功能可以缩小可视视口，而不影响布局视口。

如果网页元素需要在屏幕上可见，而与网页的可见部分无关，该怎么办？例如，如果你需要一组图像控件无论设备的捏合缩放级别如何都能保持在屏幕上，该怎么办？目前各浏览器在处理这个问题上存在差异。可视视口可让网页开发人员根据屏幕上显示的内容对元素进行相对定位，从而解决这个问题。

要访问窗口的可视视口，可以从 {{domxref("window.visualViewport")}} 属性中获取 {{domxref("VisualViewport")}} 对象。该对象包含一组描述视口的属性。它包含三个事件：{{domxref("VisualViewport/resize_event", "resize")}}、{{domxref("VisualViewport/scroll_event", "scroll")}} 和 {{domxref("VisualViewport/scrollend_event", "scrollend")}}，分别在视口调整大小、滚动和完成滚动操作时触发。

通过前两个事件，可以在滚动或缩放时相对于可视视口定位元素，这些元素通常会锚定在布局视口上。通过 `scrollend` 事件，可以在滚动操作完成时更新元素。例如，你可以使用这些事件在缩放和滚动时将元素固定在可视视窗上，并在滚动结束时对其进行更新。

## 接口

- {{DOMxRef("VisualViewport")}}
  - : 表示给定窗口的可视视口。窗口的 `VisualViewport` 对象提供有关视口位置和大小的信息，并接收 {{domxref("VisualViewport.resize_event", "resize")}}、{{domxref("VisualViewport.scroll_event", "scroll")}} 和 {{domxref("VisualViewport.scrollend_event", "scrollend")}} 事件。

### 对其他接口的扩展

- {{domxref("Window.visualViewport")}} {{ReadOnlyInline}}
  - : 窗口 {{domxref("VisualViewport")}} 对象的只读引用。如果该属性不存在，则不支持此 API。

## 示例

[可视视口 API 示例](https://mdn.github.io/dom-examples/visual-viewport-api/)提供了不同可视视口特性（包括三种事件类型）如何工作的基本演示。在支持的台式机和手机浏览器中加载页面，并尝试滚动页面和缩放。当调整大小和滚动时，信息框会重新定位，以保持相对于可视视口的位置不变，同时更新其显示的视口和滚动信息。此外，在调整大小（`resize`）和滚动（`scroll`）时，我们会改变方框的颜色，以显示正在发生的事情，而在滚动结束（`scrollend`）时又会变回原来的颜色。

你会发现，在桌面浏览器上，{{domxref("Window.scrollX")}} 和 {{domxref("Window.scrollY")}} 值会随着窗口的滚动而更新，视觉视口位置不会改变。不过，在移动浏览器上，{{domxref("VisualViewport.offsetLeft")}} 和 {{domxref("VisualViewport.offsetTop")}} 值通常会被更新——通常是可视视口发生变化，而不是窗口位置发生变化。

HTML 示例如下。信息框由 `id` 为 `output` 的 {{htmlelement("div")}} 表示。

```html
<p id="instructions">尝试滚动和缩放，看看报告的数值有什么变化。</p>
<div id="output">
  <p id="visual-info"></p>
  <hr />
  <p id="window-info"></p>
</div>
```

为了简洁起见，我们将不解释示例的 CSS，因为这对理解演示并不重要。你可以通过上面的示例链接查看。

在 JavaScript 中，我们首先要获取信息框的引用，以便在页面缩放和滚动时更新信息框，以及信息框中的两个段落。第一个将包含报告的 {{domxref("VisualViewport.offsetLeft")}} 和 {{domxref("VisualViewport.offsetTop")}} 值，第二个将包含报告的 {{domxref("Window.scrollX")}} 和 {{domxref("Window.scrollY")}} 值。

```js
const output = document.getElementById("output");
const visualInfo = document.getElementById("visual-info");
const windowInfo = document.getElementById("window-info");
```

接下来，我们定义事件触发时要运行的两个关键函数：

- `scrollUpdater()` 将在 `resize` 和 `scroll` 事件触发时调用：此函数通过查询 {{domxref("VisualViewport.offsetTop")}} 和 {{domxref("VisualViewport.offsetLeft")}} 属性更新信息框相对于可视视图的位置，并使用它们的值更新相关 {{glossary("inset properties", "inset 属性")}}的值。我们还更改了信息框的背景颜色，以显示正在发生的事情，并运行 `updateText()` 函数更新框中显示的值。
- `scrollEndUpdater()` 函数将在 `scrollend` 事件触发时调用：它会将信息框恢复为原来的颜色，并运行 `updateText()` 函数以确保在滚动结束时显示最新值。

```js
const scrollUpdater = () => {
  output.style.top = `${visualViewport.offsetTop + 10}px`;
  output.style.left = `${visualViewport.offsetLeft + 10}px`;
  output.style.background = "yellow";
  updateText();
};

const scrollendUpdater = () => {
  output.style.background = "lime";
  updateText();
};
```

`updateText()` 函数如下所示。它将第一段的 {{domxref("HTMLElement.innerText")}} 设置为显示当前的 {{domxref("VisualViewport.offsetLeft")}} 和 {{domxref("VisualViewport.offsetTop")}} 值，并将第二段的 {{domxref("HTMLElement.innerText")}} 设置为显示当前的 {{domxref("Window.scrollX")}} 和 {{domxref("Window.scrollY")}} 值。定义 `updateText()` 后，我们立即调用它，以便在页面加载时正确显示信息框。

```js
function updateText() {
  visualInfo.innerText = `可视视口 left: ${visualViewport.offsetLeft.toFixed(2)}
    top: ${visualViewport.offsetTop.toFixed(2)}`;
  windowInfo.innerText = `当前窗口（window）scrollX: ${window.scrollX.toFixed(2)}
    scrollY: ${window.scrollY.toFixed(2)}`;
}

updateText();
```

> [!NOTE]
> 我们使用 {{jsxref("Number.toFixed()")}} 方法将所有数值截断到小数点后两位，因为有些浏览器会将它们显示为亚像素数值，可能会有大量小数位。

现在，我们在可视视口和 {{domxref("Window")}} 对象上都设置了事件处理器属性，以便在移动设备和桌面设备上的适当时间运行关键功能：

- 我们在 `window` 上设置了处理器，这样信息框的位置和内容就能在常规的窗口滚动操作中更新，例如在桌面浏览器上滚动页面时。
- 我们在 `visualViewport` 上设置了处理器，这样信息框的位置和内容就会在视觉视口滚动或缩放操作时更新，例如在移动浏览器上滚动和缩放页面时。

```js
visualViewport.onresize = scrollUpdater;
visualViewport.onscroll = scrollUpdater;
visualViewport.onscrollend = scrollendUpdater;
window.onresize = scrollUpdater;
window.onscroll = scrollUpdater;
window.onscrollend = scrollendUpdater;
```

`scrollUpdater()` 会在 `resize` 和 `scroll` 事件触发时执行，而 `scrollEndUpdater()` 会在 `scrollend` 事件触发时执行。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
