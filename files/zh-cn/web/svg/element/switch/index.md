---
title: switch
slug: Web/SVG/Element/switch
---

{{SVGRef}}

`switch`元素对它的直接子元素上的属性{{ SVGAttr("requiredFeatures") }}、属性{{ SVGAttr("requiredExtensions") }} 和 属性{{ SVGAttr("systemLanguage") }}按照顺序进行评估，然后处理和呈现第一个评估为`true`的子元素。其他子元素会被绕过不会被呈现。如果某个子元素是容器元素比如说是一个{{ SVGElement("g") }}元素，那么整个子树会被处理呈现或者全部绕过不呈现。

注意：属性`display`和属性`visibility`的值对`switch 元素处理是不起作用的。`特别是，在`switch 元素的子元素上`设置`display`为 none，对`switch` 元素的 true/false 测试处理不起作用。

## 使用上下文

{{svginfo}}

## 示例

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Attribute#conditionalproccessing) »
- [核心属性](/zh-CN/docs/Web/SVG/Attribute#core) »
- [图形事件属性](/zh-CN/docs/Web/SVG/Attribute#graphicalevent) »
- [外观属性](/zh-CN/docs/Web/SVG/Attribute#presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 专有属性

- {{ SVGAttr("allowReorder") }}

## DOM 接口

该元素实现了 [`SVGSwitchElement`](/zh-CN/docs/Web/API/SVGSwitchElement) 接口。

## 浏览器兼容性

{{Compat}}
