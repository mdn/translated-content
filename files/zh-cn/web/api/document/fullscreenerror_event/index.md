---
title: Document：fullscreenerror 事件
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef}}

当浏览器不能切换至全屏模式时，会触发 `fullscreenerror` 事件。

与 [`fullscreenchange` 事件](/zh-CN/docs/Web/API/Document/fullscreenchange_event)一样，会触发两个 `fullscreenerror` 事件；第一个事件会发送给未能更改模式的 {{domxref("Element")}}，第二个事件会发送给拥有该元素的 {{domxref("Document")}}。

有关切换到全屏模式可能失败的原因，请参阅[全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)。

该事件不可取消。

## 语法

在类似于 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("fullscreenerror", (event) => {});

onfullscreenerror = (event) => {};
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

document.addEventListener("fullscreenerror", handleError);
// 或
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}
- {{domxref("Element")}}：{{domxref("Element/fullscreenerror_event", "fullscreenerror")}} 事件
- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏 API 使用指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
