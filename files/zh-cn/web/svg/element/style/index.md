---
title: style
slug: Web/SVG/Element/style
---

{{SVGRef}}

`style`元素元素样式表直接在 SVG 内容中间嵌入。SVG 的`style`元素的属性与 HTML 中的相应的元素并无二致（请阅读 HTML 的 {{HTMLElement("style")}} 元素）。

## 用法

{{svginfo}}

## 示例

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    /* <![CDATA[ */
    circle {
      fill: orange;
      stroke: black;
      stroke-width: 10px; // Note that the value of a pixel depend on the viewBox
    }
    /* ]]> */
  </style>

  <circle cx="50" cy="50" r="40" />
</svg>
```

示例输出

{{EmbedLiveSample("示例",150,165)}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »

### 专有属性

- {{SVGAttr("type")}}
- {{SVGAttr("media")}}
- {{SVGAttr("title")}}

## DOM 接口

该元素实现了[`SVGStyleElement`](/zh-CN/DOM/SVGStyleElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 中的`<style>`元素](/zh-CN/HTML/Element/style)
