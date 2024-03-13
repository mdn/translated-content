---
title: Window：resize 事件
slug: Web/API/Window/resize_event
---

{{APIRef}}

文档视图（窗口）调整大小时会触发 **`resize`** 事件。

这个事件不可取消，不会冒泡。

在一些早期的浏览器中，可以在任何 HTML 元素上注册 `resize` 事件处理器。现在仍然可以设置 `onresize` 属性或使用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 在任何元素上设置一个处理器。然而，`resize` 事件只在 {{domxref("Window", "window")}} 对象（即由 {{domxref("document.defaultView")}} 返回）上触发。只有在 `window` 对象上注册的处理器才能接收 `resize` 事件。

虽然现在 `resize` 事件只针对窗口触发，但你可以使用 [ResizeObserver](/zh-CN/docs/Web/API/ResizeObserver) API 获得其他元素的尺寸调整通知。

如果对你的应用程序来说，调整大小事件被触发了太多次，请参阅[优化 window.onresize](https://web.archive.org/web/20220714020647/https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) 来控制事件触发的时间。

## 语法

在像 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或者设置事件处理器属性。

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## 事件类型

{{domxref("UIEvent")}}。继承自 {{domxref("Event")}}。

{{InheritanceDiagram("UIEvent")}}

## 事件属性

_本接口也从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("UIEvent.detail")}} {{ReadOnlyInline}}
  - : 根据事件类型不同，返回一个带有事件细节的 `long` 值。
- {{domxref("UIEvent.sourceCapabilities")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 返回 `InputDeviceCapabilities` 接口的一个实例，它提供了生成触摸事件相关的物理设备信息。
- {{domxref("UIEvent.view")}} {{ReadOnlyInline}}
  - : 返回一个 {{glossary("WindowProxy")}}，其中包含产生该事件的视图。
- {{domxref("UIEvent.which")}} {{deprecated_inline}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : 返回被按下的数字键的 `keyCode`，或被按下的字母数字键的字符代码（`charCode`）。

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

> **备注：** 这里的例子是在 {{HTMLElement("iframe")}} 中输出的，所以报告的宽度和高度值是针对 `<iframe>` 的，而不是本页面所在的窗口。特别是，很难调整窗口的大小，以便看到报告高度的不同。
>
> [在示例本身窗口查看示例](https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/API/Window/resize_event/_sample_.window_size_logger.html)更容易观察到效果。

### addEventListener 等价形式

你也可以使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 方法设定事件处理器：

```js
window.addEventListener("resize", reportWindowSize);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
