---
title: <article>
slug: Web/HTML/Element/article
---

{{HTMLSidebar}}

**HTML `<article>`** 元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

给定文档中可以包含多篇文章;例如，阅读器在博客上滚动时一个接一个地显示每篇文章的文本，每个帖子将包含在`<article>`元素中，可能包含一个或多个`<section>`。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></dfn></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, sectioning content, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>标记省略</dfn></th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>所有接受 <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>的元素。注意<code>&lt;article&gt;</code>元素不能成为{{HTMLElement("address")}}元素的子元素。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 实例</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素只具有[全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 使用说明

- 每个`<article>`，通常包括标题（\<h1> - \<h6>元素）作为`<article>`元素的子元素。
- 当`<article>`元素嵌套使用时，则该元素代表与外层元素有关的文章。例如，代表博客评论的`<article>`元素可嵌套在代表博客文章的`<article>`元素中。
- `<article>`元素的作者信息可通过{{HTMLElement("address")}}元素提供，但是不适用于嵌套的`<article>`元素。
- `<article>`元素的发布日期和时间可通过{{HTMLElement("time")}}元素的{{htmlattrxref("pubdate", "time")}}属性表示。
- 可以使用{{HTMLElement("time")}} 元素的{{htmlattrxref("datetime", "time")}}属性来描述`<article>`元素的发布日期和时间。请注意{{HTMLElement("time")}}的*{{htmlattrxref("pubdate", "time")}}* 属性不再是*{{glossary("W3C")}}* *{{glossary("HTML5")}}*标准。

## 示例

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-17 19:00">May 17</time>
          by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on
      <time datetime="2015-05-15 19:00">May 15</time>
      by Staff.
    </p>
  </footer>
</article>
```

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关文章

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Sections and outlines of an HTML5 document](/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document).
