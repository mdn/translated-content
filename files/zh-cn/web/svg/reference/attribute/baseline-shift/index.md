---
title: baseline-shift
slug: Web/SVG/Reference/Attribute/baseline-shift
l10n:
  sourceCommit: a7615ee2f9e22946edff7633962bc1d9eee9e0ad
---

**`baseline-shift`** 属性允许相对于父文本内容元素的 dominant-baseline 重新定位 dominant-baseline。移动的对象可能是上标或下标。

> [!NOTE]
> 作为一个表现属性，`baseline-shift` 可以用作 CSS 属性。

> [!NOTE]
> 此属性将被弃用，建议作者改用 [`vertical-align`](/zh-CN/docs/Web/CSS/Reference/Properties/vertical-align)。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        {{cssxref("length-percentage")}} | <code>sub</code> |
        <code>super</code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>有</td>
    </tr>
  </tbody>
</table>

- `sub`
  - : dominant-baseline 移动到下标的默认位置。
- `super`
  - : dominant-baseline 移动到上标的默认位置。
- `<length-percentage>`
  - : 长度值，将父文本内容元素的 dominant-baseline 升高（正值）或降低（负值）指定的长度。

    百分比值，将父文本内容元素的 dominant-baseline 升高（正值）或降低（负值）至 {{SVGAttr("line-height")}} 指定的百分比。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
