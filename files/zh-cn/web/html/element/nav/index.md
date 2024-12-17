---
title: <nav>
slug: Web/HTML/Element/nav
---

{{HTMLSidebar}}

**HTML `<nav>`元素**表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></dfn></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a>, <a href="/zh-CN/docs/HTML/Content_categories#Sectioning_content">区块内容</a>, 可视的内容。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许的内容</dfn></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许的父元素</dfn></th>
   <td>所有允许<a href="/zh-CN/docs/HTML/Content_categories#Flow_content">流式内容</a>的元素</td>
  </tr>
  <tr>
   <th scope="row"><dfn>允许的</dfn> ARIA roles</th>
   <td>None</td>
  </tr>
  <tr>
   <th scope="row"><dfn>DOM 接口</dfn></th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes).

## _使用说明_

- 并不是所有的链接都必须使用`<nav>`元素，它只用来将一些热门的链接放入导航栏，例如{{HTMLElement("footer")}}元素就常用来在页面底部包含一个不常用到，没必要加入{{HTMLElement("nav")}}的链接列表。
- 一个网页也可能含有多个{{HTMLElement("nav")}}元素，例如一个是网站内的导航列表，另一个是本页面内的导航列表。
- 对于屏幕阅读障碍的人，可以使用这个元素来确定是否忽略初始内容。

## 示例

```xml
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- 其他部分相关元素：{{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [HTML5 的文档节段和纲要](/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document).
- [ARIA: Navigation role](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)
