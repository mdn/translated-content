---
title: <wbr>
slug: Web/HTML/Element/wbr
---

{{HTMLSidebar}}

**HTML `<wbr>` 元素** — 一个文本中的位置，其中浏览器可以选择来换行，虽然它的换行规则可能不会在这里换行。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">Content categories</a></th>
   <td><a href="/zh-CN/docs/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>Empty</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>It is an {{Glossary("empty element")}}; it must have a start tag, but must not have an end tag.</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素仅仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)

## Notes

在 UTF-8 编码的页面中， `<wbr>` 表现为 `U+200B ZERO-WIDTH SPACE` （零宽空格）代码点。特别是，它表现为 Unicode bidi BN 代码点，也就是说，它对 bidi-ordering 没有影响：`<div dir=rtl>123,<wbr>456</div>` 展示 `123,456` 而不是 `456,123`，当不拆成的两行时候。

出于相同原因， `< wbr >`元素不会在换行的地方引入连字符。为了使连字符仅仅在行尾出现，使用连字符软实体 (`& shy;`) 来代替。

这个元素首先在 Internet Explorer 5.5 中实现，并且在 HTML5 中官方定义。

## 示例

[_Yahoo 代码规范_](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/)推荐[在标点之前为 URL 换行](https://web.archive.org/web/20121105171040/http://styleguide.yahoo.com/editing/treat-abbreviations-capitalization-and-titles-consistently/website-names-and-addresses)，以便避免将标点符号留在行尾，这会让读者将 URL 的末尾搞错。

```html
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
