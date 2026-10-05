---
title: yChannelSelector
slug: Web/SVG/Reference/Attribute/yChannelSelector
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`yChannelSelector`** 属性指定使用 {{SVGAttr("in2")}} 的哪个颜色通道，沿 y 轴对 {{SVGAttr("in")}} 中的像素进行位移。

## 元素

你可以将此属性与 {{SVGElement("feDisplacementMap")}} SVG 元素一起使用。

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>R</code> | <code>G</code> | <code>B</code> | <code>A</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>A</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- `R`
  - : 该关键字指定使用 {{SVGAttr("in2")}} 所定义输入图像的红色通道，沿 y 轴对 {{SVGAttr("in")}} 所定义输入图像中的像素进行位移。
- `G`
  - : 该关键字指定使用 {{SVGAttr("in2")}} 所定义输入图像的绿色通道，沿 y 轴对 {{SVGAttr("in")}} 所定义输入图像中的像素进行位移。
- `B`
  - : 该关键字指定使用 {{SVGAttr("in2")}} 所定义输入图像的蓝色通道，沿 y 轴对 {{SVGAttr("in")}} 所定义输入图像中的像素进行位移。
- `A`
  - : 该关键字指定使用 {{SVGAttr("in2")}} 所定义输入图像的 alpha 通道，沿 y 轴对 {{SVGAttr("in")}} 所定义输入图像中的像素进行位移。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feImage
      href="mdn.svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      result="abc" />
    <feDisplacementMap
      in2="abc"
      in="SourceGraphic"
      scale="30"
      yChannelSelector="R" />
  </filter>
  <filter id="displacementFilter2">
    <feImage
      href="mdn.svg"
      x="0"
      y="0"
      width="100%"
      height="100%"
      result="abc" />
    <feDisplacementMap
      in2="abc"
      in="SourceGraphic"
      scale="30"
      yChannelSelector="B" />
  </filter>

  <text x="10" y="60" font-size="50" filter="url(#displacementFilter)">
    一些位移文本
  </text>
  <text x="10" y="120" font-size="50" filter="url(#displacementFilter2)">
    一些位移文本
  </text>
</svg>
```

{{EmbedLiveSample("示例", "480", "200")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
