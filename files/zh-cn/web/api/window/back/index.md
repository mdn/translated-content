---
title: Window.back()
slug: Web/API/Window/back
---

{{APIRef}}{{ Non-standard_header() }}{{deprecated_header}}

## 总结

跳转窗口到 history 中的前一个地址，这曾是 Gecko 的方法。请使用标准的 history.back 替代它。

## Syntax

```plain
window.back()
```

## Example

```js
function goBack() {
  if (canGoBack) window.back();
}
```
