---
title: Window：blur() 方法
slug: Web/API/Window/blur
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef}}{{deprecated_header}}

**`Window.blur()`** 方法不起任何作用。

> [!NOTE]
> 从历史上看，这种方法在编程上相当于用户将焦点从当前窗口中移开。由于某些恶意网站滥用此功能，这种行为已被移除。在 Firefox 中，你可以通过设置 `dom.disable_window_flip` 首选项来启用旧的行为。

## 语法

```js-nolint
blur()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
window.blur();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
