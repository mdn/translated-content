---
title: <rtc>
slug: Web/HTML/Element/rtc
---

{{HTMLSidebar}}{{deprecated_header}}

**HTML `<rtc>` 元素**包含文字的语义注解，它们在 {{HTMLElement("rb")}} 元素中展示。{{HTMLElement("rb")}} 元素可以拥有发音 ({{HTMLElement("rt")}}) 和语义 ({{HTMLElement("rtc")}}) 注解。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a> 或者 {{HTMLElement("rt")}} 元素</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>如果它紧紧跟随{{HTMLElement("rb")}}，{{HTMLElement("rtc")}} 或者 {{HTMLElement("rt")}} 元素的起始标签，或父元素的闭合标签，它的闭合标签就可以省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>{{HTMLElement("ruby")}} 元素。</td>
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

该元素仅仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)

## 示例

```html
<ruby>
  <rb>旧</rb>
  <rb>金</rb>
  <rb>山</rb>
  <rt>jiù</rt>
  <rt>jīn</rt>
  <rt>shān</rt>
  <rtc>San Francisco</rtc>
</ruby>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}

{{HTMLSidebar}}
