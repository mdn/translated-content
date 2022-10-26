---
title: <sup>
slug: Web/HTML/Element/sup
---

**HTML `<sup>` 元素**定义了一个文本区域，出于排版的原因，与主要的文本相比，应该展示得更高并且更小。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/zh-CN/docs/HTML/Content_categories">内容分类</a></th>
   <td>流式内容和短语内容</td>
  </tr>
  <tr>
   <th scope="row">允许的内容</th>
   <td>短语内容</td>
  </tr>
  <tr>
   <th scope="row">标签省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">允许的父元素</th>
   <td>可以包含短语内容的任意元素</td>
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

这个元素仅仅包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

## 用法注解

- 这个元素应该只用于排版目的，也就是改变文本的位置会改变含义，例如在数学中（_f4_，也可以考虑使用 [MathML](/zh-CN/docs/MathML) 公式）或者在法语缩写中（Mlle，Mme 或者 Cie）。
- 这个元素不能用于样式上的目的，比如产品名称 LaTeX 的样式，这时应该使用 [CSS](/zh-CN/docs/CSS)样式： {{ cssxref("vertical-align") }} 属性的 `super` 值能实现相同效果。

## 示例

```html
<p>This text is <sup>superscripted</sup></p>
```

#### 结果

This text is superscripted

## 规范

{{Specifications}}

## 另见

- {{ HTMLElement("sub") }} HTML 元素会产生下标。要注意，你不能同时使用它们，你需要 [MathML](/zh-CN/docs/MathML) 来同时产生化学符号旁边的下标和上标，代表它的序号和核子数。
- [`<msub>`](/zh-CN/docs/MathML/Element/msub), [`<msup>`](/zh-CN/docs/MathML/Element/msup), 和 [`<msubsup>`](/zh-CN/docs/MathML/Element/msubsup) MathML 元素。

{{HTMLRef}}
