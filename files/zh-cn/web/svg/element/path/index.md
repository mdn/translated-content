---
title: path
slug: Web/SVG/Element/path
---

{{SVGRef}}

**[起步](/zh-CN/docs/Web/SVG/Tutorial/Paths)**
本教程将教你开始使用 SVG 路径。

path 元素是用来定义形状的通用元素。所有的基本形状都可以用 path 元素来创建。

## 用法

{{svginfo}}

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

输出结果：

{{EmbedLiveSample("示例",200,215)}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/docs/Web/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/docs/Web/SVG/Attribute#GraphicalEvent) »
- [外观属性](/zh-CN/docs/Web/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 专有属性

- {{SVGAttr("d")}}
- {{SVGAttr("pathLength")}}

## DOM 接口

该元素实现了[`SVGPathElement`](/zh-CN/docs/DOM/SVGPathElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- [The MDN SVG "Getting Started" tutorial : Path](/zh-CN/docs/Web/SVG/Tutorial/Paths)
