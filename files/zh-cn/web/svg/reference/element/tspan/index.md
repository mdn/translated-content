---
title: <tspan>
slug: Web/SVG/Reference/Element/tspan
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<tspan>`** [SVG](/zh-CN/docs/Web/SVG) 元素定义了 {{SVGElement("text")}} 元素或另一个 `<tspan>` 元素内的子文本。它允许按需调整该子文本的样式和/或位置。

> [!NOTE]
> `<tspan>` 元素默认不会换行；若要换行，需要使用 {{CSSXRef("white-space")}} CSS 属性进行样式设置。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("x")}}
  - : 文本基线起点的 x 坐标；若提供的是值列表，则为每个字形各自的 x 坐标。
    _值类型_：([**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)) 的列表；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("y")}}
  - : 文本基线起点的 y 坐标；若提供的是值列表，则为每个字形各自的 y 坐标。
    _值类型_：([**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)) 的列表；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("dx")}}
  - : 相对于前一个文本元素水平偏移文本位置；若提供的是值列表，则为每个字形各自偏移。
    _值类型_：([**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)) 的列表；_默认值_：_无_；_动画性_：**是**
- {{SVGAttr("dy")}}
  - : 相对于前一个文本元素垂直偏移文本位置；若提供的是值列表，则为每个字形各自偏移。
    _值类型_：([**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)) 的列表；_默认值_：_无_；_动画性_：**是**
- {{SVGAttr("rotate")}}
  - : 旋转每个字形的方向。可以单独旋转各个字形。
    _值类型_：[**\<list-of-number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#t_值数列)；_默认值_：无；_动画性_：**是**
- {{SVGAttr("lengthAdjust")}}
  - : 文本如何拉伸或压缩，以适配 `textLength` 属性所定义的宽度。
    _值类型_：`spacing` | `spacingAndGlyphs`；_默认值_：`spacing`；_动画性_：**是**
- {{SVGAttr("textLength")}}
  - : 文本应缩放以适应的宽度。
    _值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)；_默认值_：_无_；_动画性_：**是**

## DOM 接口

此元素实现了 {{domxref("SVGTSpanElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    text {
      font: italic 12px serif;
    }
    tspan {
      font: bold 10px sans-serif;
      fill: red;
    }
  </style>

  <text x="10" y="30" class="small">
    You are
    <tspan>not</tspan>
    a banana!
  </text>
</svg>
```

{{EmbedLiveSample("示例", 100, "100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSXRef("white-space", "", "#svg_文本元素的多行文本")}}
