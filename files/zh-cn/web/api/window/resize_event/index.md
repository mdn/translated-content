---
title: Window：resize 事件
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: 030c1397d753681105a443d619c9ef0e10cd7458
---

{{APIRef}}

**`resize`** 事件在文档视图（窗口）调整大小时触发。

这个事件不可取消，不会冒泡。

在一些早期的浏览器中，可以在任何 HTML 元素上注册 `resize` 事件处理器。现在仍然可以设置 `onresize` 属性或使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 在任何元素上设置一个处理器。然而，`resize` 事件只在 {{domxref("Window", "window")}} 对象（即由 {{domxref("document.defaultView")}} 返回）上触发。只有在 `window` 对象上注册的处理器才能接收 `resize` 事件。

虽然现在 `resize` 事件只针对窗口触发，但你可以使用 [ResizeObserver](/zh-CN/docs/Web/API/ResizeObserver) API 获得其他元素的尺寸调整通知。

如果对你的应用程序来说，调整大小事件被触发了太多次，请参阅[优化 window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) 来控制事件触发的时间。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## 事件类型

一个通用的 {{domxref("Event")}}。

## 示例

### 窗口大小记录器

以下示例报告了每次改变窗口大小时，窗口的尺寸。

#### HTML

```html
<p>缩放浏览器窗口以触发 <code>resize</code> 事件</p>
<p>窗口高度：<span id="height"></span></p>
<p>窗口宽度：<span id="width"></span></p>
```

#### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
```

#### 结果

{{EmbedLiveSample("窗口大小记录器")}}

> [!NOTE]
> 这里的例子是在 {{HTMLElement("iframe")}} 中输出的，所以报告的宽度和高度值是针对 `<iframe>` 的，而不是本页面所在的窗口。特别是，很难调整窗口的大小，以便看到报告高度的不同。
>
> {{LiveSampleLink("窗口大小记录器", "在示例本身窗口查看示例", 1)}}更容易观察到效果。

### addEventListener 等价形式

你也可以使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法设定事件处理器：

```js
window.addEventListener("resize", reportWindowSize);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
