---
title: <embed>：外部内容嵌入元素
slug: Web/HTML/Element/embed
---

**HTML `<embed>` 元素**将外部内容嵌入文档中的指定位置。此内容由外部应用程序或其他交互式内容源（如浏览器插件）提供。

> **备注：** 这篇文档仅定义该元素在 HTML5 中定义的部分，不包含该元素之前的声明内容和非标准的实现。

请记住，大多数现代浏览器已经弃用并取消了对浏览器插件的支持，所以如果您希望您的网站可以在普通用户的浏览器上运行，那么依靠 `<embed>` 通常是不明智的。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>, embedded content, interactive content, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>None, it is an {{Glossary("empty element")}}.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>Must have a start tag, and must not have an end tag.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts embedded content.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td><a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/img_role"><code>img</code></a>, <a href="/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a></td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLEmbedElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素的属性包括 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

- `height`
  - : 资源显示的高度，in [CSS pixels](https://drafts.csswg.org/css-values/#px). — (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))
- `src`
  - : 被嵌套的资源的 URL。
- `type`
  - : 用于选择插件实例化的 MIME 类型。
- `width`
  - : 资源显示的宽度，in [CSS pixels](https://drafts.csswg.org/css-values/#px). — (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))

## 例子

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

> **备注：** 不同浏览器之间显示有差异。Blink 内核浏览器（Chrome，Opera）会显示 HTML 资源的内容，但 Firefox 会显示一条通知消息，指出内容需要一个插件（见 [Firefox bug 730768](https://bugzil.la/730768)）。建议使用 \<object> 或 \<iframe> 元素。

{{Compat}}

## 参见

- 其他用于嵌入各种类型内容的元素还包括：{{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} 和 {{HTMLElement("video")}}.

{{ HTMLSidebar }}
