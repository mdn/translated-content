---
title: <cite>
slug: Web/HTML/Element/cite
---

{{HTMLSidebar}}

_HTML 引用（Citation）标签_ (**\<cite>**) 表示一个作品的引用，且必须包含作品的标题。这个引用可能是一个根据适当的上下文约定关联引用的元数据的缩写。

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row" style="vertical-align: middle;">内容类别</th>
   <td>
    <p><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">流内容（Flow Content）</a>，<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">叙述内容（Phrasing Content）</a>，可触及的内容（Palpable Content）。</p>
   </td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">叙述内容（Phrasing Content）</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父级元素</th>
   <td>任何接受<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">叙述内容（Phrasing Content）</a>的元素。</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>这个元素在 Gecko 1.9.2 (Firefox 4) 及之前的版本中 实现为 HTMLElement, Firefox 实现为 HTMLSpanElement。</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素仅包含了 所有的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

> [!NOTE]
> 适用场合可能包括一本书，一张纸，一篇散文，一首诗，一个分数，一首歌，一部电影，一个电视节目，一个游戏，一个雕塑，一幅画，戏剧制作，一个剧本，一个歌剧，一种音乐，一个展览，一个法律案件报告，一个计算机程序，一个网站，一个网页，博客或评论，论坛帖子或评论，鸣叫，或者书面或口头陈述，等等。
>
> - W3C 规范，对创造性的工作可能包括作者的名字，而 WHATWG 宣布，它可能不包括在任何情况下，一个人的名字。
> - 在 blockquote 元素或者 q 元素上使用 cite 或者 blockquote 属性来标明参考的在线资源。
> - 为了避免在使用 cite 元素时默认字体为斜体，可以使用 css 的 font-style 属性重新进行设置。

## 使用说明

在 `<cite>` 标签中，可能引用的内容类型如下：

- A book
- A research paper
- An essay
- A poem
- A musical score
- A song
- A play or film script
- A film
- A television show
- A game
- A sculpture
- A painting
- A theatrical production
- A play
- An opera
- A musical
- An exhibition
- A legal case report
- A computer program
- A web site
- A web page
- A blog post or comment
- A forum post or comment
- A tweet
- A Facebook post
- A written or oral statement
- And so forth.

值得注意的是，W3C 标准允许在 `<cite>` 元素中包含引用内容的作者信息。然而 WHATWG 规范不允许在 `<cite>` 元素中出现人名。

要标明{{HTMLElement("blockquote")}} 或 {{HTMLElement("q")}}之中内容的引用来源，可以使用元素的[`cite`](/zh-CN/docs/Web/HTML/Element/blockquote#cite)属性。

通常，浏览器默认使用斜体来展示`<cite>`元素中的内容。可以通过指定`<cite>`元素的{{cssxref("font-style")}}样式来覆盖这种默认行为。

## 示例

```html
More information can be found in <cite>[ISO-0000]</cite>.
```

该段代码的输出如下：

{{EmbedLiveSample("示例", 640, 60)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 适用于长引用的 {{HTMLElement("blockquote")}} 元素。
- 适用于行内引用的 {{HTMLElement("q")}} 元素。
