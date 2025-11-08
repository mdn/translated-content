---
title: rel="alternate stylesheet"
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`alternate stylesheet`** 关键字对在作为 [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/link#rel) 属性值用于 {{HTMLElement("link")}} 元素时，表示目标资源为*替代样式表*。在网页中指定**替代样式表**可让用户根据自身需求或偏好查看页面的多个版本。

> [!NOTE]
> 该功能在未安装扩展的浏览器中支持不佳。若需提供与用户现有偏好兼容的替代呈现方式，参见 CSS {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} 和 {{cssxref("@media/prefers-contrast","prefers-contrast")}} [媒体特性](/zh-CN/docs/Web/CSS/Reference/At-rules/@media#媒体特性)。

Firefox 允许用户通过*视图 > 页面样式*子菜单选择替代{{glossary("stylesheet", "样式表")}}，该菜单会显示 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 属性的值。其他浏览器需要安装扩展才能启用此功能。网页还可以提供自己的用户界面，让用户切换样式。

## 示例

### 提供替代样式表

替代样式表通过使用带有 `rel="alternate stylesheet"` 和 `title="..."` 属性的 {{HTMLElement("link")}} 标签指定。例如：

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="默认样式" />
<link href="fancy.css" rel="alternate stylesheet" title="华丽" />
<link href="basic.css" rel="alternate stylesheet" title="基本" />
```

在此例中，*页面样式*菜单中会出现“默认样式”、“华丽”和“基本”的选项。“默认样式”默认选中。如果用户选择一个不同的样式，浏览器就使用用户选择的样式。

无论用户选择何种样式，`reset.css` 样式表中的规则都会始终应用。

### 试试看

[在此尝试一个可运行的示例](https://mdn.github.io/css-examples/alt-style-sheets/)。

## 细节

文档的样式表分为三类：

- **持久**（具有 `rel="stylesheet"`，且没有 `title=""`）：始终应用于文档。
- **首选**（具有 `rel="stylesheet"`，且指定了 `title="…"`）：默认应用，但如果选择了替代样式表，则会{{domxref("StyleSheet.disabled", "禁用", "", 1)}}。**只能有一个首选样式表**，因此提供具有不同标题属性的样式表会导致其中一些被忽略。
- **替代**（`rel="alternate stylesheet"`，且指定了 `title="…"`）：默认禁用，可被选中。

当存在样式表菜单时，如果在 {{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}} 或 {{HTMLElement("style")}} 元素上使用 `title` 属性引用样式表，则该标题将成为用户可选项之一。具有相同 [`title`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/title) 的样式表属于同一选项。未指定 `title` 属性的样式表始终会被应用。

使用 `rel="stylesheet"` 链接到默认样式表，使用 `rel="alternate stylesheet"` 链接到替代样式表。这会告知浏览器应默认选择哪个样式表标题，并在不支持替代样式表的浏览器中应用该默认选择。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS](/zh-CN/docs/Web/CSS)
- [使用动态样式信息](/zh-CN/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
