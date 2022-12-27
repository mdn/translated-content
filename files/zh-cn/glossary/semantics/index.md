---
title: Semantics（语义）
slug: Glossary/Semantics
original_slug: Glossary/语义
---

在编程中，**语义**指的是一段代码的含义 — 例如 "运行这行 JavaScript 代码会产生怎样的影响？", 或者 "这个 HTML 的元素有什么作用，扮演了什么样的角色"（而不只是 "它看上去像是什么？"。）

## JavaScript 中的语义

JavaScript 中，考虑一个函数，该函数接受一个字符串参数，然后返回一个以该字符串为文本内容的{{htmlelement("li")}}元素。如果该函数调用是`build('Peach')`，你会需要去看代码才能理解该函数做了什么吗，如果是`createLiWithContent('Peach')`呢？

## CSS 中的语义

CSS 中，考虑给一个列表设置样式，`li` 元素代表不同类型的水果。通过 `div > ul > li`，你能知道 DOM 的那一部分会被选择中吗？但如果是 `.fruits__item` 呢？

## HTML 中的语义

HTML 中，例如，{{htmlelement("h1")}} 元素是一个语义化元素，赋予了它包裹着的文本“这个页面中最高级别标题功能“的角色 (或含义) 。

```html
<h1>This is a top level heading</h1>
```

默认情况下，绝大多数浏览器的 [user agent stylesheet](/zh-CN/docs/Web/CSS/Cascade#User-agent_stylesheets) 将会赋予一个 {{htmlelement("h1")}} 元素很大的字号尺寸从而使它看上去更像是一个标题（虽然你可以把它格式化为任何你想要的样式），但是更重要的是它的语义会被在很多地方以不同的方式被使用到，例如搜索引擎会把它包含的内容作为一个重要的关键词，从而影响这个页面在搜索结果中的排序（参见{{ glossary ("SEO")}}），而且屏幕阅读器会使用它来帮助视障用户更好的使用这个页面。

另一方面，你可以通过样式（CSS）来让任何的元素*看上去*像是一个最高级别的标题，就像下面所展示的方法一样：

```html
<span style="font-size: 32px; margin: 21px 0;">Is this a top level heading?</span>
```

这将会把这个元素渲染得像是一个最高级别的标题，但是它的值没有对应到最“最高级别标题”这一语义，所以在此之上，它不会获得更多额外的描述（只是一个普通“span”元素而不是“最高级别标题”这一语义）。所以在恰当的需求下使用恰当的 HTML 元素是一个不错的主意。

HTML should be coded to represent the _data_ that will be populated and not based on its default presentation styling. Presentation (how it should look), is the sole responsibility of [CSS](/zh-CN/docs/Web/CSS).

Some of the benefits from writing semantic markup are as follows:

- Search engines will consider its contents as important keywords to influence the page's search rankings (see {{glossary("SEO")}})
- Screen readers can use it as a signpost to help visually impaired users navigate a page
- Finding blocks of meaningful code is significantly easier than searching though endless `div`s with or without semantic or namespaced classes
- Suggests to the developer the type of data that will be populated
- Semantic naming mirrors proper custom element/component naming

When approaching which markup to use, ask yourself, "What element(s) best describe/represent the data that I'm going to populate?" For example, is it a list of data?; ordered, unordered?; is it an article with sections and an aside of related information?; does it list out definitions?; is it a figure or image that needs a caption?; should it have a header and a footer in addition to the global site-wide header and footer?; etc.

## 语义化元素

这是一些语义化的元（[source](https://www.w3schools.com/html/html5_semantic_elements.asp)）。

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## 了解更多

- [HTML element reference](/zh-CN/docs/Web/HTML/Element#Inline_text_semantics) on MDN
- [Using HTML sections and outlines](/zh-CN/docs/Web/HTML/Element/Heading_Elements#Problems_solved_by_HTML5) on MDN
- [HTML5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp) on w3schools
- [The meaning of semantics in computer science](https://zh.wikipedia.org/wiki/Semantics#Computer_science) on Wikipedia
- [MDN Web Docs Glossary](/zh-CN/docs/Glossary)

  - {{Glossary("SEO")}}

- Some of semantic elements in HTML

  - {{htmlelement("article")}}
  - {{htmlelement("aside")}}
  - {{htmlelement("details")}}
  - {{htmlelement("figcaption")}}
  - {{htmlelement("figure")}}
  - {{htmlelement("footer")}}
  - {{htmlelement("header")}}
  - {{htmlelement("main")}}
  - {{htmlelement("mark")}}
  - {{htmlelement("nav")}}
  - {{htmlelement("section")}}
  - {{htmlelement("summary")}}
  - {{htmlelement("time")}}
