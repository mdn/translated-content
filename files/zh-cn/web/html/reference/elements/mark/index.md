---
title: <mark>
slug: Web/HTML/Reference/Elements/mark
---

## 概要

HTML 标记文本元素 (< Mark >) 表示为引用或符号目的而标记或突出显示的文本，这是由于标记的段落在封闭上下文中的相关性或重要性造成的。

这个 _HTML mark_ 标签代表突出显示的文字，例如可以为了**标记**特定上下文中的文本而使用这个标签**.** 举个例子，它可以用来显示搜索引擎搜索后关键词

- _内容分类_ [Flow content](/zh-CN/docs/Web/HTML/Guides/Content_categories#flow_content), [phrasing content](/zh-CN/docs/Web/HTML/Guides/Content_categories#phrasing_content), palpable content.
- _允许的内容_ [Phrasing content](/zh-CN/docs/Web/HTML/Guides/Content_categories#phrasing_content).
- _标签省略_：不允许，开始标签和结束标签都不能省略。
- *允许的父元素*任何接受[phrasing content](/zh-CN/docs/Web/HTML/Guides/Content_categories#phrasing_content) 的元素。
- _DOM 接口_ {{domxref("HTMLElement")}}

## 属性

这个元素只包含了 [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes).

## 使用说明

`<mark>`元素的典型使用场景包括：

- 当用在引用（{{HTMLElement("q")}}、{{HTMLElement("blockquote")}}）中时，通常用来显示有特殊意义的文本，但不在原材料中标记出来；或者是用来显示特殊审查的材料，即使原作者不认为它特别重要。
- 另外，\<mark>元素还用来显示与用户当前活动相关的一部分文档内容。例如，它可能被用于显示匹配搜索结果中的单词。
- 不要为了语法高亮而用 `<mark>` 元素; 你应该用 _{{HTMLElement("strong")}}_ 元素结合适当的 CSS 来实现这个目的（语法高亮）。

> [!NOTE]
> 不要把 `<mark>` 元素和 {{HTMLElement("strong")}} 元素搞混淆；{{HTMLElement("strong")}} 元素用来表示文本在上下文的重要性的，而 `<mark>` 元素是用来表示上下文的关联性的。

## 示例

```html
<p>&lt;mark&gt; 元素用于 <mark>高亮</mark> 文本</p>
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Other [text-level semantics elements](/zh-CN/docs/HTML/Text-level_semantics_elements): {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("abbr")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("i")}}, {{HTMLElement("b")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
