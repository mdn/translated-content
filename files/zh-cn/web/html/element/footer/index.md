---
title: <footer>
slug: Web/HTML/Element/footer
---

{{HTMLRef}}

**HTML \<footer> 元素**表示最近一个[章节内容](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Defining_Sections_in_HTML5)或者[根节点](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_root)（sectioning root）元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

- _[内容分类](/zh-CN/docs/HTML/Content_categories)_ [流内容](/zh-CN/docs/HTML/Content_categories#Flow_content), 可触内容。
- _允许的内容_ [流内容](/zh-CN/docs/HTML/Content_categories#Flow_content)，但是不能包含\<footer>或者{{HTMLElement("header")}}。
- _标签省略_ {{no_tag_omission}}
- *允许的父元素*任何接收[流内容](/zh-CN/docs/HTML/Content_categories#Flow_content)的元素。注意\<footer>元素必须不能是 {{HTMLElement("address")}}, {{HTMLElement("header")}} 或者另一个`<footer>` 元素的后代元素。
- _DOM 接口_ {{domxref("HTMLElement")}}

## 属性

该元素仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 使用说明

- \<footer>元素内的作者信息应包含在{{HTMLElement("address")}} 元素中。
- \<footer>元素不是章节内容，因此在[outline](/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document)中不能包含新的章节。

## 例子

```html
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 section 相关的元素：{{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document).
- [ARIA: Contentinfo role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)
