---
title: <aside>
slug: Web/HTML/Element/aside
---

**HTML `<aside>` 元素**表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）。

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（Flow_content）">流式元素</a>、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#章节元素（Sectioning_content）">章节元素</a>、<a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Palpable_content">可触摸内容</a>。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#流式元素（Flow_content）">流式元素</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>所有元素接受流式元素。注意 <code>&lt;aside&gt;</code> 不能是{{HTMLElement("address")}} 元素的后代</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/region_role"><code>region</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素只有[全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 使用说明

- 不要使用 `<aside>` 元素去尾随括号内的文本，因为这种文本被认为是主要流内容的一部分。

## 示例

```html
<article>
  <p>
    迪斯尼电影<cite>海的女儿</cite>（<cite>The Little Mermaid</cite>）于 1989
    年首次登上银幕。
  </p>
  <aside>在首次发行期间，该片便收获了 8700 万美元的票房。</aside>
  <p>更多有关该电影的信息…</p>
</article>
```

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [使用 HTML 章节与大纲](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)

{{HTMLSidebar}}
