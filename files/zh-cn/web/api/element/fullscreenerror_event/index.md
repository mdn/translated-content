---
title: Element：fullscreenerror 事件
slug: Web/API/Element/fullscreenerror_event
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{APIRef("Fullscreen API")}}

**`fullscreenerror`** 事件在浏览器不能切换全屏模式时触发。

与 [`fullscreenchange` 事件](/zh-CN/docs/Web/API/Element/fullscreenchange_event)一样，会触发两个 `fullscreenerror` 事件；第一个事件会发送给未能更改模式的 {{domxref("Element")}}，第二个事件会发送给拥有该元素的 {{domxref("Document")}}。

有关切换到全屏模式可能失败的原因，请参阅[全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)。

该事件不可取消。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## 事件类型

通用的 {{domxref("Event")}}。

## 示例

```js
const requestor = document.querySelector("div");

function handleError(event) {
  console.error("切换至全屏模式时发生错误");
  console.log(event);
}

requestor.addEventListener("fullscreenerror", handleError);
// 或
requestor.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`fullscreenchange`](/zh-CN/docs/Web/API/Element/fullscreenchange_event)
- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏 API 使用指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
