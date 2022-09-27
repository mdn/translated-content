---
title: window.find
slug: Web/API/Window/find
---

{{ ApiRef() }}

> **备注：** `window.find()` 可能会在未来版本的 Gecko 中被废弃。查看 {{Bug("672395")}}

### 概述

在一个页面中搜索指定的字符串。

### 语法

```plain
window.find(aString, aCaseSensitive, aBackwards, aWrapAround,
            aWholeWord, aSearchInFrames, aShowDialog);
```

- `aString`
  - : 将要搜索的字符串
- `aCaseSensitive`
  - : 布尔值，如果为`true`,表示搜索是区分大小写的。
- `aBackwards`
  - : 布尔值。如果为`true`, 表示搜索方向为向上搜索。
- `aWrapAround`
  - : 布尔值。如果为`true`, 表示为循环搜索。
- `aWholeWord` {{ unimplemented_inline() }}
  - : 布尔值。如果为`true`,表示采用全字匹配搜索。该参数无效; 查看 {{ bug("481513") }}.
- `aSearchInFrames`
  - : 布尔值。如果为`true`, 表示会搜索框架内的文本。
- `aShowDialog`
  - : 布尔值。如果为`true`, 则会弹出一个搜索对话框。

### 返回值

`如果搜索到指定的字符串，则返回 true，否则`返回 false.

## 规范

不属于任何规范。

## 浏览器兼容性

{{Compat}}
