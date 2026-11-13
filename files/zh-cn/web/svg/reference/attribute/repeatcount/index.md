---
title: repeatCount
slug: Web/SVG/Reference/Attribute/repeatCount
---

这个属性表示动画将发生的次数。

这个属性的值指定了重复的次数。它也可以包括用分数值表示。它的值必须大于 0。

## 示例

The following elements can use the `repeatCount` attribute

- [Animation elements](/zh-CN/docs/Web/SVG/Reference/Element#animation) »

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("number")}} | <code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : 该值指定迭代次数。它可以使用分数值来表示部分迭代。分数值仅表示整个动画持续时间的一部分。值必须大于 `0`。
- `indefinite`
  - : 该值表示动画将无限期地重复（即直到文档结束）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
