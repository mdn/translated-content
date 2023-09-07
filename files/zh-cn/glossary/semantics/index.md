---
title: Semantics（语义）
slug: Glossary/Semantics
---

{{GlossarySidebar}}

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
<span style="font-size: 32px; margin: 21px 0;"
  >Is this a top level heading?</span
>
```

这将会把这个元素渲染得像是一个最高级别的标题，但是它的值没有对应到最“最高级别标题”这一语义，所以在此之上，它不会获得更多额外的描述（只是一个普通“span”元素而不是“最高级别标题”这一语义）。所以在恰当的需求下使用恰当的 HTML 元素是一个不错的主意。

HTML 应该编写为表示将要填充的数据，而不是基于其默认的演示样式。演示（应该是什么样子），是 [CSS](/zh-CN/docs/Web/CSS) 的唯一责任。

写语义标记的一些好处如下：

- 搜索引擎将其内容视为影响页面搜索排名的重要关键字（参见 {{ glossary ("SEO")}}）。
- 屏幕阅读器可以将其用作指引，帮助视力受损的用户导航页面。
- 比起搜索无休止的带有或不带有语义/命名空间类的 `div`，找到有意义的代码块显然容易得多。
- 向开发人员建议将要填充的数据类型。
- 语义命名反映了正确的自定义元素/组件命名。

当接近要使用的标记时，问问自己，“什么元素最能描述/表示我要填充的数据？”例如，它是数据列表吗？有序或无序？是否是一篇具有章节和相关信息旁注的文章？它是否列出了定义？它是需要标题的图形还是图像？除了全局网站范围的页眉和页脚之外，它还应该有页眉和页脚吗？等等。

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
