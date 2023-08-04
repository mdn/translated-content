---
title: Document.bgColor
slug: Web/API/Document/bgColor
---

{{APIRef("DOM")}}{{ Deprecated_header() }}

`bgColor` 获取/设置当前文档的背景颜色

## 语法

```plain
color = document.bgColor
document.bgColor =color
```

### 参数

- `color` 表示颜色的字符串如“red”，或者是十六进制的色值如“#ff0000”。

## 示例

```plain
document.bgColor = "darkblue";
```

## 笔记

这个属性在 Mozilla Firefox 中的默认值是白色“#ffffff”。

`document.bgColor` 在 [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) 中已经不推荐使用。推荐使用 CSS 的 [background-color](en/CSS/background-color) 或者 `document.body.style.backgroundColor` 来给文档设置背景颜色。另外一种方式是使用 `document.body.bgColor`, 这种方式也已经不推荐使用了。
