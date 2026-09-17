---
title: <path>
slug: Web/SVG/Reference/Element/path
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

**`<path>`** [SVG](/zh-CN/docs/Web/SVG) 元素是用于定义形状的通用元素。所有基本形状都可以用 `<path>` 元素创建。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("d")}}
  - : 此属性定义路径的形状。
    _值类型_：**\<string>**；_默认值_：`''`；_动画性_：**是**
- {{SVGAttr("pathLength")}}
  - : 此属性用于指定路径的总长度，单位为用户单位。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#数字)；_默认值_：_无_；_动画性_：**是**

## DOM 接口

该元素实现了 {{domxref("SVGPathElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- SVG 基本形状：{{ SVGElement('circle') }}、{{ SVGElement('ellipse') }}、{{ SVGElement('line') }}、{{ SVGElement('polygon') }}、{{ SVGElement('polyline') }}、{{ SVGElement('rect') }}
- [MDN SVG“入门”教程：路径](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)
