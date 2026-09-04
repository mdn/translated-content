---
title: in2
slug: Web/SVG/Reference/Attribute/in2
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

**`in2`** 属性标识给定滤镜原语的第二个输入。它的工作方式与 {{SVGAttr("in")}} 属性完全相同。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("feBlend")}}
- {{SVGElement("feComposite")}}
- {{SVGElement("feDisplacementMap")}}

## feBlend

对于 {{SVGElement("feBlend")}}，`in2` 定义混合操作的第二个输入图像。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>
        第一个滤镜原语为 <code>SourceGraphic</code>，否则为前一个滤镜原语的结果
      </td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## feComposite

对于 {{SVGElement("feComposite")}}，`in2` 定义合成操作的第二个输入图像。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>
        第一个滤镜原语为 <code>SourceGraphic</code>，否则为前一个滤镜原语的结果
      </td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## feDisplacementMap

对于 {{SVGElement("feDisplacementMap")}}，`in2` 定义第二个输入图像，用于对 {{SVGAttr("in")}} 属性所定义图像中的像素进行位移。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>SourceGraphic</code> | <code>SourceAlpha</code> |
        <code>BackgroundImage</code> | <code>BackgroundAlpha</code> |
        <code>FillPaint</code> | <code>StrokePaint</code> |
        <code>&#x3C;filter-primitive-reference></code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td>
        第一个滤镜原语为 <code>SourceGraphic</code>，否则为前一个滤镜原语的结果
      </td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}
