---
title: <nav>
slug: Web/HTML/Element/nav
tags:
  - HTML
  - 元素
  - 导航
  - 链接
translation_of: Web/HTML/Element/nav
---
<div>{{HTMLRef}}</div>

<p><strong>HTML <code>&lt;nav&gt;</code>元素</strong>表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}</div>

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
   <th scope="row"><dfn>忽略的标记</dfn></th>
   <td>{{no_tag_omission}}</td>
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

<h2 id="属性">属性</h2>

<p>这个元素只包含<a href="https://developer.mozilla.org/zh-CN/docs/HTML/Global_attributes">全局属性</a>.</p>

<h2 id="使用说明"><em>使用说明</em></h2>

<ul>
 <li>并不是所有的链接都必须使用<code>&lt;nav&gt;</code>元素，它只用来将一些热门的链接放入导航栏，例如{{HTMLElement("footer")}}元素就常用来在页面底部包含一个不常用到，没必要加入{{HTMLElement("nav")}}的链接列表。</li>
 <li>一个网页也可能含有多个{{HTMLElement("nav")}}元素，例如一个是网站内的导航列表，另一个是本页面内的导航列表。</li>
 <li>对于屏幕阅读障碍的人，可以使用这个元素来确定是否忽略初始内容。</li>
</ul>

<h2 id="示例">示例</h2>

<pre class="brush:xml">&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;
</pre>

<h2 id="Specifications">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>

<p>{{Compat}}</p>

<h2 id="更多">更多</h2>

<ul>
 <li>其他部分相关元素: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};</li>
 <li><a href="/zh-CN/docs/Sections_and_Outlines_of_an_HTML5_document">HTML5 的文档节段和纲要</a>.</li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role">ARIA: Navigation role</a></li>
</ul>
