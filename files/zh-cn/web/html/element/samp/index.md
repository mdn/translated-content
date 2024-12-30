---
title: <samp>
slug: Web/HTML/Element/samp
---

{{HTMLSidebar}}

\<samp> 元素用于标识计算机程序输出，通常使用浏览器缺省的 monotype 字体（例如 Lucida Console）。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td><a href="/en/HTML/Content_categories#Flow_content">Flow content</a>, <a href="/en/HTML/Content_categories#Phrasing_content">phrasing content</a>, palpable content.</td>
  </tr>
  <tr>
   <th scope="row">允许内容</th>
   <td><a href="/en/HTML/Content_categories#Phrasing_content">Phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>不允许，开始标签和结束标签都不能省略。</td>
  </tr>
  <tr>
   <th scope="row">允许的父级元素</th>
   <td>Any element that accepts <a href="/zh-CN/docs/HTML/Content_categories#Phrasing_content">phrasing content</a>.</td>
  </tr>
  <tr>
   <th scope="row">DOM 接口</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

## 属性

该元素只包含 [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## DOM 接口

该元素实现了 [`HTMLElement`](/zh-CN/docs/Web/API/element) 接口。

> [!NOTE]
> 基于 Gecko 1.9.2 及以上，Firefox 还为该元素实现了[HTMLSpanElement](/zh-CN/docs/DOM/span) 接口。

## 示例

```html
<p>Regular text. <samp>This is sample text.</samp> Regular text.</p>
```

### 结果

Regular text. `This is sample text.` Regular text.

## 规范

{{Specifications}}

## 注意

可以使用 CSS 选择器 `samp` 定义规则来覆盖浏览器的缺省字体。不过，用户设置的偏好可能会优先于指定的 CSS 使用。

## 参见

- [HTML Code Element](/zh-CN/docs/Web/HTML/Element/code)
