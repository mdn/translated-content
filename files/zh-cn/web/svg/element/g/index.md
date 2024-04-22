---
title: g
slug: Web/SVG/Element/g
---

{{SVGRef}}

元素`g`是用来组合对象的容器。添加到`g`元素上的变换会应用到其所有的子元素上。添加到`g`元素的属性会被其所有的子元素继承。此外，`g`元素也可以用来定义复杂的对象，之后可以通过{{SVGElement("use")}}元素来引用它们。

## 用法

{{svginfo}}

## 示例

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 95 50"
  xmlns="http://www.w3.org/2000/svg">
  <g stroke="green" fill="white" stroke-width="5">
    <circle cx="25" cy="25" r="15" />
    <circle cx="40" cy="25" r="15" />
    <circle cx="55" cy="25" r="15" />
    <circle cx="70" cy="25" r="15" />
  </g>
</svg>
```

{{EmbedLiveSample("示例",220,130)}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/SVG/Attribute#ConditionalProccessing) »
- [核心属性](/zh-CN/docs/SVG/Attribute#Core) »
- [图形事件属性](/zh-CN/docs/SVG/Attribute#GraphicalEvent) »
- [外观属性](/zh-CN/docs/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}
- {{SVGAttr("transform")}}

### 专有属性

_没有专有属性。_

## DOM 接口

该元素实现了 `SVGGElement` 的所有接口。

## 浏览器兼容性

{{Compat}}
