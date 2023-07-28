---
title: <dfn>
slug: Web/HTML/Element/dfn
---

## 摘要

_HTML 定义元素_ (**\<dfn>**) 表示术语的一个定义。

> **备注：** `<dfn>` 元素标记了被定义的术语；术语定义应当在 {{HTMLElement("p")}}, {{HTMLElement("section")}}或定义列表 (通常是{{HTMLElement("dt")}}, {{HTMLElement("dd")}} 对) 中给出。
>
> - 被定义术语的值由下列规则确定：
>
>   1. 如果 `<dfn>` 元素有一个 **`title`** 属性，那么该术语的值就是该属性的值。
>   2. 否则，如果它仅包含一个 {{HTMLElement("abbr")}} 元素，该元素拥有 [`title`](/zh-CN/docs/Web/HTML/Element/abbr#title) 属性，那么该术语的值就是该属性的值。
>   3. 否则，`<dfn>` 元素的文本内容就是该术语的值。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories">内容分类</a></th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">Phrasing content</a>, but no {{HTMLElement("dfn")}} element must be a descendant.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>Any element that accepts <a href="/zh-CN/docs/Web/Guide/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素包括 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

在 HTML5 中，**`title`** 属性拥有特殊含义，见上文。

## 示例

下列示例是合法的 HTML5。

```html
<!-- Define "The Internet" -->
<p>
  <dfn id="def-internet">The Internet</dfn> is a global system of interconnected
  networks that use the Internet Protocol Suite (TCP/IP) to serve billions of
  users worldwide.
</p>
```

在同一文档的后面：

```html
<dl>
  <!-- Define "World-Wide Web" and reference definition for "the Internet" -->
  <dt>
    <dfn>
      <abbr title="World-Wide Web">WWW</abbr>
    </dfn>
  </dt>
  <dd>
    The World-Wide Web (WWW) is a system of interlinked hypertext documents
    accessed on <a href="#def-internet">the Internet</a>.
  </dd>
</dl>
```

### 结果

{{ EmbedLiveSample('示例', '600', '150') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 定义列表的相关元素：{{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}

{{HTMLSidebar}}
