---
title: document.fgColor
slug: Web/API/Document/fgColor
---

{{ ApiRef() }}

### 概述

{{ Deprecated_header() }} `fgColor` 属性用来获取或设置当前文档的前景色或者文本颜色。

### 语法

```plain
  var color = document.fgColor;
  document.fgColor = color;
```

### 参数

- `color` 是一个颜色值，可以为一个颜色类型，比如"red",或者一个 16 进制 RGB 值，比如 "`#ff0000`".

### 例子

```plain
document.fgColor = "white";
document.bgColor = "darkblue";
```

### 备注

在 Mozilla Firefox 中，该属性的默认值是黑色.(`black 或者#000000`).

`document.fgColor` 属性已经在[DOM Level 2](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)中被废弃。推荐使用的`css`属性为{{ Cssxref("color") }} (用法为 `document.body.style.color = "red"`).

另外一个类似的属性是 `document.body.text`, 该属性也在 [HTML 4.01](https://www.w3.org/TR/html401/struct/global.html#adef-text) 中被废弃，推荐使用 CSS 属性。

### 规范

{{Compat}}
