---
title: <rt>
slug: Web/HTML/Element/rt
---

**HTML Ruby 文本 (`<rt>`) 元素**包含字符的发音，字符在 ruby 注解中出现，它用于描述东亚字符的发音。这个元素始终在 {{ HTMLElement("ruby") }} 元素中使用。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/Web/HTML/Content_categories">内容分类</a></th>
   <td>无</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td><a href="/zh-CN/docs/Web/HTML/Content_categories#Phrasing_content">短语内容</a></td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>如果 {{HTMLElement("rt")}} 元素紧紧跟随 {{HTMLElement("rt")}} 或者 {{HTMLElement("rp")}} 元素，或者父元素中没有更多内容了，结束标签可以省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>{{HTMLElement("ruby")}} 元素</td>
  </tr>
  <tr>
   <th scope="row">允许的 ARIA 角色</th>
   <td>任意     </td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素仅仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 示例

```html
<ruby> 汉 <rt>Hàn</rt> 字 <rt>Zì</rt> </ruby>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}

{{HTMLSidebar}}
