---
title: <radialGradient>
slug: Web/SVG/Element/radialGradient
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

**`<radialGradient>`** 用来定义径向渐变，以对图形元素进行填充或描边。

> [!NOTE]
> 不要与 CSS {{cssxref('gradient/radial-gradient', 'radial-gradient()')}} 混淆，CSS 渐变只能应用在 HTML 元素上，而 SVG 渐变只能运用在 SVG 元素上。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 10 10"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  </defs>

  <!-- 使用自定义的径向渐变 -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample("示例", 120, 120)}}

## 属性

- {{SVGAttr("cx")}}
  - : 这个属性定义了径向渐变的终点圆的 X 坐标。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#长度)；_默认值_：`50%`；_动画性_：**有**
- {{SVGAttr("cy")}}
  - : 这个属性定义了径向渐变的终点圆的 Y 坐标。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#长度)；_默认值_：`50%`；_动画性_：**有**
- {{SVGAttr("fr")}}
  - : 这个属性定义了径向梯度的起点圆的半径。渐变的绘制将使 0% {{SVGElement('stop','gradient stop')}} 被映射到起始圆的周长。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#长度)；_默认值_：`0%`；_动画性_：**有**
- {{SVGAttr("fx")}}
  - : 这个属性定义了径向渐变的起点圆的 X 坐标。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#长度)；_默认值_：与 `cx` 相同；_动画性_：**有**
- {{SVGAttr("fy")}}
  - : 这个属性定义了径向渐变的起点圆的 Y 坐标。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#长度)；_默认值_：与 `cy` 相同；_动画性_：**有**
- {{SVGAttr("gradientUnits")}}
  - : 这个属性定义了 `cx`、`cy`、`r`、`fx`、`fy`、`fr` 属性的坐标系统；_值类型_：`userSpaceOnUse`｜`objectBoundingBox`；_默认值_：`objectBoundingBox`；_动画性_：**有**
- {{SVGAttr("gradientTransform")}}
  - : 这个属性为梯度坐标系提供了额外的[变换](/zh-CN/docs/Web/SVG/Attribute/transform)。_值类型_：**[\<transform-list>](/zh-CN/docs/Web/SVG/Content_type#平移数列)** ；_默认值_：_identity transform_；_动画性_：**有**
- {{SVGAttr("href")}}
  - : 这个属性定义了对另一个将被用作模板 `<radialGradient>` 元素的引用。_值类型_：[**\<URL>**](/zh-CN/docs/Web/SVG/Content_type#url)；_默认值_：none；_动画性_：**有**
- {{SVGAttr("r")}}
  - : 这个属性定义了径向渐变的终点圆的半径。梯度的绘制将使 100% 的{{SVGElement('stop','gradient stop')}} 被映射到终点圆的周长。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#长度)；_默认值_：`50%`；_动画性_：**有**
- {{SVGAttr("spreadMethod")}}
  - : 这个属性表明，如果渐变在包含渐变的形状的边界内开始或结束，它将如何表现。_值类型_：`pad`|`reflect`|`repeat`；_默认值_：`pad`；_动画性_：**有**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : 对另一个将被用作模板的 `<radialGradient>` 元素的 [\<IRI>](/zh-CN/docs/Web/SVG/Content_type#iri) 引用。_值类型_：[**\<IRI>**](/zh-CN/docs/Web/SVG/Content_type#iri)；_默认值_：none；_动画性_：**有**

## 使用上下文

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
