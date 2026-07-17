---
title: accumulate
slug: Web/SVG/Reference/Attribute/accumulate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`accumulate`** 属性控制动画是否累加。

对于重复动画来说，在前一次结果基础上继续累加往往很有用，每次迭代都会累积。该属性用于告知动画：是否在每次迭代时将值加到先前已动画属性的值上。

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
  - : 指定第一次之后的每次重复迭代都基于前一次迭代的最终值继续累加。
- `none`
  - : 指定重复迭代不累加。

如果目标属性的值不支持加法，或者动画元素不重复，则忽略此属性。

如果动画函数仅用 {{SVGAttr("to")}} 属性指定，则也会忽略此属性。

## 规范

{{Specifications}}

## 参见

- [使用 SMIL 的 SVG 动画](/zh-CN/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
