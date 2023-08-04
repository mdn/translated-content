---
title: <address>
slug: Web/HTML/Element/address
---

{{HTMLSidebar}}

**HTML `<address>` 元素** 表示其中的 HTML 提供了某个人或某个组织（等等）的联系信息。

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

由`<address>`元素中任何形式的内容所提供的联系信息适用于上下文的背景信息，可以是必要的任何一种联系方式，比如真实地址、URL、电子邮箱、电话号码、社交媒体账号、地理坐标等等。此元素应该包含联系信息对应的个人、团体或组织的名称。

`<address>`可以使用在多种语境中，例如在文章开头提供商务的联系方式，或者放在{{HTMLElement("article")}}元素内，指明该文章的作者。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-cn/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, 但是不能嵌套<code>&lt;address&gt;元素</code>, 不能是头部内容 ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}), 不能是区块内容 ({{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}), 不能是{{HTMLElement("header")}} 或 {{HTMLElement("footer")}}元素。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>, but always excluding <code>&lt;address&gt;</code> elements (according to the logical principle of symmetry, if <code>&lt;address&gt;</code> tag, as a parent, can not have nested <code>&lt;address&gt;</code> element, then the same <code>&lt;address&gt;</code> content can not have <code>&lt;address&gt;</code> tag as its parent).</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}} 在 Gecko 2.0（Firefox 4）以前，Gecko 使用 {{domxref("HTMLSpanElement")}} 接口实现这个元素</td>
  </tr>
 </tbody>
</table>

## 属性

此元素只有[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 用法说明

- 当表示一个和联系信息无关的任意的地址时，请改用 {{HTMLElement("p")}} 元素而不是 `<address>` 元素。
- 这个元素不能包含除联系信息之外的任何信息，比如出版日期（这应当被包含在 {{HTMLElement("time")}} 元素之中）。
- 通常，`<address>` 元素可以放在 {{HTMLElement("footer")}} 元素之中（如果存在的话）。

## 示例

这个例子演示了如何使用 `<address>` 表示一篇文章的作者的联系信息。

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### 结果

{{EmbedLiveSample("示例", "300", "200")}}

虽然 `<address>` 元素看起来只是使用了 {{HTMLElement("i")}} 或者 {{HTMLElement("em")}} 元素的默认样式来渲染其中的文本，但是当处理联系信息时使用它更为合适，因为它表达了额外的语义信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Others section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [使用 HTML 章节和大纲](/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
