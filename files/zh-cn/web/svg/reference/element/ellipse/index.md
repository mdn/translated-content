---
title: <ellipse>
slug: Web/SVG/Reference/Element/ellipse
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<ellipse>`** [SVG](/zh-CN/docs/Web/SVG) 元素是一种 SVG 基本形状，用于根据中心坐标以及 x 和 y 半径创建椭圆。

> [!NOTE]
> 椭圆无法指定精确朝向（例如，若你想绘制倾斜 45 度的椭圆），但可以使用 {{SVGAttr("transform")}} 属性旋转它。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("cx")}}
  - : 椭圆中心的 x 坐标。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("cy")}}
  - : 椭圆中心的 y 坐标。_值类型_：[**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("rx")}}
  - : 椭圆在 x 轴上的半径。_值类型_：`auto` | [**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)；_默认值_：`auto`；_动画性_：**是**
- {{SVGAttr("ry")}}
  - : 椭圆在 y 轴上的半径。_值类型_：`auto` | [**\<length>**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度) | [**\<percentage>**](/zh-CN/docs/Web/SVG/Guides/Content_type#百分数)；_默认值_：`auto`；_动画性_：**是**
- {{SVGAttr("pathLength")}}
  - : 此属性用于指定路径的总长度，单位为用户单位。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#数字)；_默认值_：_无_；_动画性_：**是**

> [!NOTE]
> 从 SVG2 开始，`cx`、`cy`、`rx` 和 `ry` 是*几何属性*，这意味着这些属性也可以作为该元素的 CSS 属性使用。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('示例', 100, '100%')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 SVG 基本形状：**{{ SVGElement('circle') }}**、{{ SVGElement('line') }}、{{ SVGElement('polygon') }}、{{ SVGElement('polyline') }}、{{ SVGElement('rect') }}
