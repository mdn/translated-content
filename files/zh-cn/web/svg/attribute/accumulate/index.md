---
title: accumulate
slug: Web/SVG/Attribute/accumulate
l10n:
  sourceCommit: 6108db121731f7210c63dbc2871b7acc239f1173
---

{{SVGRef}}

该属性控制了动画是否是累加的。

在原来的结果的基础上重复动画的时候，它通常很有用，每一次循环都累加。这个属性告诉动画是否是每次循环，前一个动画属性值要加上去。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>none</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

- sum
  - : 指定第一次循环后的每次循环建立在上次循环的终值上。
- none
  - : 指定重复循环是不累加的。这是默认值。

如果目标属性值不支持添加，或者动画元素不重复，则忽略此属性。

如果仅使用 {{SVGAttr("to")}} 属性指定动画函数，则忽略此属性。

## 规范

{{Specifications}}

## 参见

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
