---
title: Window：scrollByLines() 方法
slug: Web/API/Window/scrollByLines
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}} {{Non-standard_header}}

**`Window.scrollByLines()`** 方法按指定的行数滚动文档。

## 语法

```js-nolint
scrollByLines(lines)
```

### 参数

- `lines`
  - : 滚动文档的行数，可以是正整数或负整数。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```html
<!-- 将文档向上滚动 5 行 -->
<button id="scroll-up" onclick="scrollByLines(-5);">向上 5 行</button>

<!-- 将文档向下滚动 5 行 -->
<button id="scroll-down" onclick="scrollByLines(5);">向下 5 行</button>
```

## 规范

这不属于任何规范。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByPages()")}}
- {{domxref("window.scrollTo()")}}
