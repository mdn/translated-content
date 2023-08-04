---
title: <picture>：picture 元素
slug: Web/HTML/Element/picture
---

{{HTMLSidebar}}

**HTML `<picture>` 元素**通过包含零或多个 {{HTMLElement("source")}} 元素和一个 {{HTMLElement("img")}} 元素来为不同的显示/设备场景提供图像版本。浏览器会选择最匹配的子 `<source>` 元素，如果没有匹配的，就选择 `<img>` 元素的 [`src`](/zh-CN/docs/Web/HTML/Element/img#src) 属性中的 URL。然后，所选图像呈现在\<img>元素占据的空间中。

{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}

要决定加载哪个 URL，{{Glossary("user agent")}} 检查每个 `<source>` 的 [`srcset`](/zh-CN/docs/Web/HTML/Element/source#srcset)、[`media`](/zh-CN/docs/Web/HTML/Element/source#media) 和 [`type`](/zh-CN/docs/Web/HTML/Element/source#type) 属性，来选择最匹配页面当前布局、显示设备特征等的兼容图像。

`<picture>` 的常见使用场景：

- 艺术指导 (Art direction) —— 针对不同 `media` 条件裁剪或修改图像
- 遇到所有浏览器都不支持的特定格式时，提供不同的图像格式

如果要为高 DPI (Retina) 显示提供更高像素密度的图像版本，请在 `<img>` 元素上使用 [`srcset`](/zh-CN/docs/Web/HTML/Element/img#srcset) 。这使得浏览器可以在节约流量模式下选择低像素密度版本，且不需要您编写明确的 `media` 条件。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">流内容</a>，表述内容，嵌入内容。</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>零或多个 {{HTMLElement("source")}} 元素，以及紧随其后的一个 {{HTMLElement("img")}} 元素，可以混合一些脚本支持的元素。</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>任何可以包含嵌入内容的元素。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA roles</th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLPictureElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素只包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 用法提示

你可以使用 {{cssxref("object-position")}} 属性调整元素框架内图像的位置，用 {{cssxref("object-fit")}} 属性控制图片如何调整大小来适应框架。

> **备注：** 在子 `<img>` 元素上使用这些属性，不是 `<picture>` 元素。

## 示例

这些示例演示了 {{HTMLElement("source")}} 元素的不同属性如何更改`<picture>`中图像的选择。

### `media` 属性

`media` 属性允许你提供一个用于给用户代理作为选择 {{HTMLElement("source")}} 元素的依据的媒体条件 (media condition)（类似于媒体查询）。如果这个媒体条件匹配结果为 `false`，那么这个 {{HTMLElement("source")}} 元素会被跳过。

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN" />
</picture>
```

### `type` 属性

`type` 属性允许你为 {{HTMLElement("source")}} 元素的 `srcset` 属性指向的资源指定一个 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)。如果用户代理不支持指定的类型，那么这个 {{HTMLElement("source")}} 元素会被跳过。

```html
<picture>
  <source srcset="mdn-logo.svg" type="image/svg+xml" />
  <img src="mdn-logo.png" alt="MDN" />
</picture>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考链接

- {{HTMLElement("img")}} 元素
- {{HTMLElement("source")}} 元素
- 在其框架内定位和缩放图片：{{cssxref("object-position")}} 和 {{cssxref("object-fit")}}
