---
title: Window.sizeToContent()
slug: Web/API/Window/sizeToContent
---

{{APIRef}}{{Non-standard_header}}

**`Window.sizeToContent()`** 方法根据窗口内容调整窗口大小。为了使其工作，在调用此函数时应加载 DOM 内容，例如，一旦抛出 {domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件。

可以强行的调整窗口的最小尺寸。

## 语法

```js-nolint
sizeToContent()
```

## 示例

```js
window.sizeToContent();
```

## 规范

此特性不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window")}}
