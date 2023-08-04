---
title: line
slug: Web/SVG/Element/line
---

{{SVGRef}}

`line`元素是一个 SVG 基本形状，用来创建一条连接两个点的线。

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
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- 如果不指定描边颜色，则无法看见线条 -->
</svg>
```

{{EmbedLiveSample('示例', 100, 100)}}

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

- {{SVGAttr("x1")}}
- {{SVGAttr("x2")}}
- {{SVGAttr("y1")}}
- {{SVGAttr("y2")}}

## DOM 接口

该元素实现了 `SVGLineElement` 接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("polygon")}}
- {{SVGElement("path")}}
