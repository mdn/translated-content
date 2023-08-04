---
title: <rp>
slug: Web/HTML/Element/rp
---

**HTML `<rp>` 元素**用于为那些不能使用 {{HTMLElement("ruby") }} 元素展示 ruby 注解的浏览器，提供随后的圆括号。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">Content categories</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>文本</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>{{HTMLElement("ruby")}} 元素。 <code>&lt;rp&gt; </code>必须位于 {{HTMLElement("rt")}} 的前面和后面。</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

这个元素仅仅支持 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 用法注解

- Ruby 注解用于展示东亚文字的发音，例如使用日语罗马音和汉语拼音的文字。 `<rp>` 元素用于不支持 {{ HTMLElement("ruby") }} 元素的情况。 `<rp>` 的内容提供了应该展示的东西，通常是圆括号，以便表示 ruby 注解的存在。

## 示例

```html
<ruby>
  漢 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}

{{HTMLSidebar}}
