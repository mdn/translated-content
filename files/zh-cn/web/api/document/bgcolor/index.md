---
title: Document：bgColor 属性
slug: Web/API/Document/bgColor
l10n:
  sourceCommit: 23fb12ae62339140281b9aad2c9f856e2e5a4762
---

{{APIRef("DOM")}} {{Deprecated_Header}}

已弃用的 `bgColor` 属性用于获取或设置当前文档的背景颜色。

## 值

表示颜色的字符串，可以是颜色名称（例如“red”）或十六进制值（例如“`#ff0000`”）。

## 示例

```js
document.bgColor = "darkblue";
```

## 备注

Firefox 中该属性的默认值是白色（十六进制的 `#ffffff`）。

在 [DOM 第 2 版 HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268) 规范中 `document.bgColor` 已被弃用。推荐的替代方法是使用 CSS 样式 {{Cssxref("background-color")}}，可以通过 DOM 中的 `document.body.style.backgroundColor` 来访问该样式。另一种替代方法是 `document.body.bgColor`，不过 HTML 4.01 也已弃用这种方法，转而使用 CSS 替代方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
