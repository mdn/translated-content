---
title: title
slug: Web/SVG/Reference/Element/title
---

SVG 绘图中的每个窗口元素或图形元素都可以提供一个`title`描述性字符串，该描述只能是纯文本。如果当前的 SVG 文档片段在可视媒体中呈现为 SVG，title 元素不会呈现为绘图的一部分。然而，一些用户代理可能会，举个例子，把`title`显示为一个提示冒泡。替代性提词既可以看到也可以听到，它显示了 title 元素但是不会显示路径元素或者别的图形元素。`title`元素通常提升了 SVG 文档的无障碍。

通常`title`元素必须是它的父元素的第一个子元素。注意，只有当`title`是它的父元素的第一个子元素的时候，那些编译器才会把`title`显示为一个提示冒泡。

## 使用上下文

{{svginfo}}

## 示例

下面的代码片段显示了 SVG `<title>`标签的用法。

```xml
<svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
  <g>
    <title>SVG Title Demo example</title>
    <rect x="10" y="10" width="200" height="50"
    style="fill:none; stroke:blue; stroke-width:1px"/>
  </g>
</svg>
```

## 属性

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Reference/Attribute#core) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}

### 专有属性

_没有专有属性。_

## DOM 接口

该元素实现了 [`SVGTitleElement`](/zh-CN/docs/DOM/SVGTitleElement) 接口。

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("desc") }}
