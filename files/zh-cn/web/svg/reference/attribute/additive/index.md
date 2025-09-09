---
title: additive
slug: Web/SVG/Reference/Attribute/additive
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

**`additive`** 属性控制动画是否是可加的。

将动画定义为属性值的偏移量或增量（而不是绝对值）通常很有用。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>replace</code> | <code>sum</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

- sum
  - : 指定动画将添加到属性和其他较低优先级动画的基础值之上。
- replace
  - : 指定动画将覆盖属性的基础值和其他优先级较低的动画。这是默认设置，但其作用也会受到动画值属性 {{SVGAttr("by")}} 和 {{SVGAttr("to")}} 的影响，如下文所述：[SMIL 动画：from、to 和 by 属性是如何影响 additive 的行为的](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive)。

## 规范

{{Specifications}}

## 参见

- [SMIL 动画规范](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute)
