---
title: foreignObject
slug: Web/SVG/Element/foreignObject
---

{{SVGRef}}

[SVG](/zh-CN/docs/Web/SVG)中的 **`<foreignObject>`** 元素允许包含来自不同的 XML 命名空间的元素。在浏览器的上下文中，很可能是 XHTML / HTML。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    polygon {
      fill: black;
    }

    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- Common use case: embed HTML text into SVG -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
      In the context of SVG embeded into HTML, the XHTML namespace could
      be avoided, but it is mandatory in the context of an SVG document
    -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
      mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
      imperdiet eros. Aliquam erat volutpat.
    </div>
  </foreignObject>
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 属性

- {{SVGAttr("height")}}
  - : 设置 foreignObject 的高度。
    值得类型：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/zh-CN/docs/Web/SVG/Content_type#percentage) ; _默认值_: `auto`; _是否可设置动画_: **yes**
- {{SVGAttr("width")}}
  - : 设置 foreignObject 的宽度。
    值得类型：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/zh-CN/docs/Web/SVG/Content_type#percentage) ; _默认值_: `auto`; _是否可设置动画_: **yes**
- {{SVGAttr("x")}}
  - : 设置 foreignObject 的 x 坐标。
    值得类型：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/zh-CN/docs/Web/SVG/Content_type#percentage) ; _默认值_: `0`; _是否可设置动画_: **yes**
- {{SVGAttr("y")}}
  - : 设置 foreignObject 的 y 坐标。
    值得类型：[**\<length>**](/zh-CN/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/zh-CN/docs/Web/SVG/Content_type#percentage) ; _默认值_: `0`; _是否可设置动画_: **yes**

> [!NOTE]
> 从 SVG2 开始，x、y、宽度和高度都是几何属性，这意味着这些属性也可以用作该元素的 CSS 属性。

## 使用上下文

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
