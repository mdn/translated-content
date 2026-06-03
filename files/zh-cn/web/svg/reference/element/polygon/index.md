---
title: <polygon>
slug: Web/SVG/Reference/Element/polygon
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

[SVG](/zh-CN/docs/Web/SVG) 元素 **`<polygon>`** 用于定义由一系列相连直线段组成的闭合图形。最后一个点会与第一个点相连形成封闭形状。

若需要开放形状，请参见 {{SVGElement("polyline")}} 元素。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr('points')}}
  - : 此属性定义绘制多边形所需的点列表（由 `x,y` 绝对坐标对组成）。
    _值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#number)+；_默认值_：`""`；_动画性_：**是**
- {{SVGAttr("pathLength")}}
  - : 此属性用于指定路径的总长度，单位为用户单位。
    _值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#number)；_默认值_：_无_；_动画性_：**是**

## DOM 接口

此元素实现了 {{domxref("SVGPolygonElement")}} 接口。

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
  <!-- 带有默认填充色的多边形示例 -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- 相同多边形形状示例：只有描边且无填充色 -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [SVG 表现属性](/zh-CN/docs/Web/SVG/Reference/Attribute#表现属性)，包括 {{SVGAttr("fill")}} 和 {{SVGAttr("stroke")}}

- **其他 SVG 基本形状：**
  - {{ SVGElement('circle') }}
  - {{ SVGElement('ellipse') }}
  - {{ SVGElement('line') }}
  - {{ SVGElement('polyline') }}
  - {{ SVGElement('rect') }}
