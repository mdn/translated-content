---
title: <ruby>
slug: Web/HTML/Element/ruby
---

{{HTMLSidebar}}

**HTML `<ruby>` 元素** 被用来展示东亚文字注音或字符注释。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容范畴</a></th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Flow_content">流式内容</a>, <a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父级元素</th>
   <td>See prose</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

本元素支持 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 示例

### 示例 1: 字

```html
<ruby>
  汉 <rp>(</rp><rt>han</rt><rp>)</rp> 字 <rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```

### 示例 2: 词

```html
<ruby> 明 日 <rp>(</rp><rt>ming ri</rt><rp>)</rp> </ruby>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
- {{HTMLElement("rbc")}}
- {{CSSxRef("text-transform")}}: full-size-kana
