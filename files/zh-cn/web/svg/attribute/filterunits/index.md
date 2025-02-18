---
title: filterUnits
slug: Web/SVG/Attribute/filterUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`filterUnits`** 属性定义了 {{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}} 和 {{SVGAttr("height")}} 属性的坐标系。

该属性可用于以下 SVG 元素：

- {{SVGElement("filter")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : {{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}} 和 {{SVGAttr("height")}} 表示当前坐标系中的数值，该坐标系基于引用 {{SVGElement("filter")}} 元素时的用户坐标系（即通过 {{SVGAttr("filter")}} 属性引用 {{SVGElement("filter")}} 元素的元素所处的用户坐标系）。
- `objectBoundingBox`
  - : 在这种情况下，{{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}} 和 {{SVGAttr("height")}} 表示引用元素边界框的分数或百分比。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
