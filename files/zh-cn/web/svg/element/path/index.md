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

```plain
<svg width="100%" height="100%" viewBox="0 0 400 400"
     xmlns="http://www.w3.org/2000/svg">

  <path d="M 100 100 L 300 100 L 200 300 z"
        fill="orange" stroke="black" stroke-width="3" />
</svg>
```

输出结果：

{{EmbedLiveSample("Example",200,215)}}

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
