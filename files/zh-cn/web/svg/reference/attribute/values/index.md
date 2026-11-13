---
title: values
slug: Web/SVG/Reference/Attribute/values
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`values`** 属性根据使用语境有不同含义：要么定义动画过程中使用的值序列，要么是颜色矩阵所用的数字列表，该列表会根据要执行的颜色变换类型而有不同解释。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("feColorMatrix")}}

## animate、animateMotion、animateTransform

对于 {{SVGElement("animate")}}、{{SVGElement("animateMotion")}} 和 {{SVGElement("animateTransform")}}，`values` 是定义动画过程中所用值序列的列表。如果指定了此属性，元素上设置的任何 {{SVGAttr("from")}}、{{SVGAttr("to")}} 和 {{SVGAttr("by")}} 属性值都会被忽略。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#t_值数列"
            >&#x3C;list-of-values></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

- `<list-of-values>`
  - : 该值包含一个或多个以分号分隔的值。这些值的类型由 {{SVGAttr("href")}} 和 {{SVGAttr("attributeName")}} 属性定义。

## feColorMatrix

对于 {{SVGElement("feColorMatrix")}} 元素，`values` 是数字列表，会根据 {{SVGAttr("type")}} 属性的值有不同解释。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#t_值数列"
            >&#x3C;list-of-numbers></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>
        <em
          >若 <code>type="matrix"</code>，为单位矩阵，<br />若
          <code>type="saturate"</code>，为 <code>1</code>，结果为单位
          矩阵，<br />若 <code>type="hueRotate"</code>，为 <code>0</code>，
          结果为单位矩阵</em
        >
      </td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- `<list-of-numbers>`
  - : 该值是数字列表，会根据 `type` 属性的值有不同解释：
    - 对于 `type="matrix"`，`values` 是 20 个矩阵值的列表（a00 a01 a02 a03 a04 a10 a11 … a34），以空白和/或逗号分隔。
    - 对于 `type="saturate"`，`values` 是单个实数值（0 到 1）。
    - 对于 `type="hueRotate"`，`values` 是单个实数值（度数）。
    - 对于 `type="luminanceToAlpha"`，`values` 不适用。

## 规范

{{Specifications}}
