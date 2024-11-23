---
title: accumulate
slug: Web/SVG/Attribute/accumulate
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
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

- `sum`
  - : 指定第一次迭代后的每次迭代建立在上次迭代的终值上。
- `none`
  - : 指定重复迭代是不累加的。

如果目标属性值不支持加运算，或者动画元素不重复，则忽略此属性。

如果仅使用 {{SVGAttr("to")}} 属性指定动画函数，则忽略此属性。

## 规范

{{Specifications}}

## 参见

- [SMIL 动画规范](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
