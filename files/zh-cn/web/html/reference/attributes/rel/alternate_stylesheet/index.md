---
title: 替代样式表
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
original_slug: Web/HTML/Attributes/rel/alternate_stylesheet
---

{{CSSRef}}

Specifying **alternative style sheets** in a web page provides a way for users to see multiple versions of a page, based on their needs or preferences.

在网页中指定可替代样式表允许用户为网页选择他们喜欢的样式。

Firefox 允许用户通过菜单栏中 查看 > 页面样式 选择样式表。Internet Explorer 也支持这一功能（从 IE8 开始）（菜单栏 查看 > 页面样式）。网页也可提供自己的用户界面让用户

在 Firefox 和 Internet Explorer（从 IE8（6？）开始）中，用户可以通过菜单栏中的 查看 > 页面样式 来选择网页的样式。网页也可以提供选择样式的界面。

## 示例：提供可替代样式表

一般使用 {{HTMLElement("link")}} 元素指定可替换样式表。在这个标签中指定`rel="alternate stylesheet"` 属性和 `title="..."`属性

```html
<link href="reset.css" rel="stylesheet" type="text/css" />

<link
  href="default.css"
  rel="stylesheet"
  type="text/css"
  title="Default Style" />
<link
  href="fancy.css"
  rel="alternate stylesheet"
  type="text/css"
  title="Fancy" />
<link
  href="basic.css"
  rel="alternate stylesheet"
  type="text/css"
  title="Basic" />
```

在此例中，“页面样式”菜单中会出现“Default Style”、“Fancy”和“Basic”的选项。“Default Style”默认选中。如果用户选择一个不同的样式，浏览器就使用用户选择的样式。

无论用户选择何种样式，reset.css 总会被应用。

### 尝试

[点击此处](https://mdn.github.io/css-examples/alt-style-sheets/)进入示例。

## 细节

网页中的样式表分为三类：

- **Persistent** (no `rel="alternate"`, no `title=""`): always applies to the document.
- **Preferred** (no `rel="alternate"`, with `title="..."` specified): applied by default, but {{domxref("StyleSheet.disabled", "disabled", "", 1)}} if an alternate stylesheet is selected. **There can only be one preferred stylesheet**, so providing stylesheets with different title attributes will cause some of them to be ignored. See [Correctly Using Titles With External Stylesheets](/zh-CN/docs/Correctly_Using_Titles_With_External_Stylesheets) for a more detailed discussion.
- **Alternate** (`rel="alternate stylesheet"`, `title="..."` must be specified): disabled by default, can be selected.

When style sheets are referenced with a `title` attribute on the {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} or {{HTMLElement("style")}} element, the title becomes one of the choices offered to the user. Style sheets linked with the same `title` are part of the same choice. Style sheets linked without a `title` attribute are always applied.

Use `rel="stylesheet"` to link to the default style, and `rel="alternate stylesheet"` to link to alternative style sheets. This tells the browser which style sheet title should be selected by default, and makes that default selection apply in browsers that do not support alternate style sheets.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
