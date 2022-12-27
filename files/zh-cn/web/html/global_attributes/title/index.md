---
title: title
slug: Web/HTML/Global_attributes/title
---

{{HTMLSidebar("Global_attributes")}}

**title** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 包含了表示咨询信息文本，和它属于的元素相关。这个信息通常存在，但绝不必要，作为提示信息展示给用户。一些典型用例：

- 链接：被链接文档的标题或描述
- 媒体元素，例如图像：描述或关联信息
- 段落：脚注或者相关的评论
- 引用：作者信息，以及其他

如果省略了这个属性，就意味着这个元素的最近祖先的标题仍然是相关的（并且可以用作元素的提示信息）。如果这个属性设为空字符串，它就明确意味着，它的最近祖先的标题是不相关的（并且不应用于这个元素的提示信息）。

额外的语义可以附加到 {{ HTMLElement("link") }}，{{ HTMLElement("abbr") }}，{{ HTMLElement("input") }} 和 { HTMLElement("menuitem") }} 元素的 **title** 属性。

**title** 属性可以包含多行。每个插入的 `U+000A LINE FEED` (`LF`) 代表一个换行。有一些需要注意的东西，因为这意味着：

```html
<p>Newlines in title should be taken into account,like this <abbr title="This is a
multiline title">example</abbr>.</p>
```

这个示例定义了两行的标题。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- 反映这个属性的 {{domxref("HTMLElement.title")}}
