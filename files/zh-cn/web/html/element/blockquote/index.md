---
title: <blockquote>：块级引用元素
slug: Web/HTML/Element/blockquote
---

{{HTMLSidebar}}

**HTML `<blockquote>` 元素**（或者 HTML 块级引用元素），代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进（[注](/zh-CN/docs/Web/HTML/Element/blockquote#Notes) 中说明了如何更改）。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 {{HTMLElement("cite")}} 元素。

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, sectioning root, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Flow_content">flow content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLQuoteElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

此元素的属性包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

- `cite`
  - : 是一个标注引用的信息的来源文档或者相关信息的 URL。通常用来描述能够解释引文的上下文或者引用的信息。

## 使用说明

若要修改被引用内容的缩进距离，可以使用 {{Glossary("CSS")}} {{cssxref("margin-left")}} 和/或 {{cssxref("margin-right")}} 属性，或使用 {{cssxref("margin")}} 缩写属性。

若想使用在行内引用较短的内容而非创建一个单独的引用块，可使用 {{HTMLElement("q")}}（Quotation）元素。

如果想要使用短引用（行间引用），可以使用{{HTMLElement("q")}} 标签。

## 示例

下面的这个例子演示了使用 `<blockquote>` 元素引用一段来自 {{RFC(1149)}} 的内容，以禽类作为载体的 IP 数据包传输标准。

```html
<blockquote cite="https://tools.ietf.org/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside of early spring.
    This is because of the 3D ether space available to the carriers, in contrast
    to the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
```

上面的 HTML 代码将会生成：

{{EmbedLiveSample("示例", 640, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 适用于行内引用的 {{HTMLElement("q")}} 元素。
- 适用于来源引文的 {{HTMLElement("cite")}} 元素。
