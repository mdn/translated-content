---
title: visibilitychange
slug: Web/API/Document/visibilitychange_event
---

{{APIRef}}

当其选项卡的内容变得可见或被隐藏时，会在文档上触发 `visibilitychange` (能见度更改) 事件。

## 概述

- Interface
  - : {{domxref("event")}}
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : {{domxref("Document")}}
- Default Action
  - : None

## 使用说明

该事件不包括文档的更新的可见性状态，但是您可以从文档的 {{domxref("Document.visibilityState", "visibilityState")}} 属性中获取该信息。

> **警告：** 当 visibleStateState 属性的值转换为 `hidden` 时，Safari 不会按预期触发 `visibilitychange`；因此，在这种情况下，您还需要包含代码以侦听 [`pagehide`](/zh-CN/docs/Web/API/Window/pagehide_event) 事件。

> **警告：** 出于兼容性原因，请确保使用 `document.addEventListener` 而不是 `window.addEventListener` 来注册回调。Safari <14.0 仅支持前者。

## 属性

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## 例子

本示例在文档可见时开始播放音乐曲目，在文档不再可见时暂停音乐。

```js
document.addEventListener("visibilitychange", function () {
  console.log(document.visibilityState);
});
```

```
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [使用页面可见性 API](/zh-CN/docs/DOM/Using_the_Page_Visibility_API)
- {{domxref("Document.visibilityState")}}
