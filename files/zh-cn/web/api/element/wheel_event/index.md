---
title: Element：滚轮事件
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

**`wheel`** 事件在用户旋转定点设备（通常是鼠标）上的滚轮按钮时触发。对于模拟滚轮操作的类似设备（例如触控板和滚球鼠标）也会触发该事件。

该事件取代了已被弃用的非标准 {{domxref("Element/mousewheel_event", "mousewheel")}} 事件。

不要将 `wheel` 事件与 {{domxref("Element/scroll_event", "scroll")}} 事件混淆：

- `wheel` 事件不一定会触发 `scroll` 事件。例如，元素可能根本无法滚动。使用滚轮或触控板进行缩放操作时也会触发 `wheel` 事件（其中 {{domxref("MouseEvent/ctrlKey", "ctrlKey")}} 为 `true`）。
- `scroll` 事件不一定是 `wheel` 事件触发的。元素也可以通过键盘、拖动滚动条或使用 JavaScript 来滚动。
- 即使 `wheel` 事件确实触发了滚动，`wheel` 事件中的 `delta*` 值也不一定反映内容的滚动方向。

因此，请不要依赖 `wheel` 事件的 `delta*` 属性来获得滚动方向。请改为在 `scroll` 事件中检测目标元素 {{domxref("Element.scrollLeft", "scrollLeft")}} 和 {{domxref("Element.scrollTop", "scrollTop")}} 值的变化。

`wheel` 事件是可取消的。在某些浏览器中，只有序列中的第一个 `wheel` 事件是可取消的，后续事件不可取消。如果事件被取消，则不会执行滚动或缩放。这可能会导致性能问题，因为浏览器必须等待每个 `wheel` 事件处理完毕后才能实际滚动内容。可以通过在调用 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 时设置 `passive: true` 来避免这种情况，这可能会使浏览器生成不可取消的 `wheel` 事件。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js-nolint
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
```

## 事件类型

一个 {{domxref("WheelEvent")}}。继承自 {{domxref("MouseEvent")}}、{{domxref("UIEvent")}} 和 {{domxref("Event")}}。

{{InheritanceDiagram("WheelEvent")}}

## 示例

### 通过滚轮缩放元素

此示例展示了如何使用鼠标（或其他定点设备）滚轮缩放元素。

```html
<div>使用鼠标滚轮来进行缩放</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #ccddff;
  padding: 5px;
}
```

```js
let scale = 1;
const el = document.querySelector("div");

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

el.onwheel = zoom;
```

{{EmbedLiveSample("通过滚轮缩放元素", 700, 300)}}

### 使用 addEventListener 的等价形式

上面的事件处理器也可以通过 {{domxref("EventTarget/addEventListener", "addEventListener()")}} 方法来设置：

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WheelEvent")}}
