---
title: Window：focus() 方法
slug: Web/API/Window/focus
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

发出将窗口置顶的请求。用户设置可能导致此操作失败，并且在方法返回之前并不能保证窗口已处于最前端。

## 语法

```js-nolint
focus()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
if (clicked) {
  window.focus();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
