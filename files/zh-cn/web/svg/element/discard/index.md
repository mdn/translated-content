---
title: <discard>
slug: Web/SVG/Element/discard
tags:
  - Element
  - NeedsExample
  - Reference
  - SVG
  - SVG Animation
translation_of: Web/SVG/Element/discard
---
{{SVGRef}}

**`<discard>`** [SVG](/zh-CN/docs/Web/SVG) 元素允许作者指定在何时丢弃特定元素，从而减少 SVG 用户代理所需的资源。这对于帮助 SVG 查看器在显示长时间运行的文档时节省内存特别有用。

`<discard>` 元素可以出现在 {{SVGElement("animate")}} 元素可以出现的任何位置。

## 用法

{{svginfo}}

## 属性

### 全局属性

- [条件处理属性](/zh-CN/docs/Web/SVG/Attribute#条件处理属性)
- [核心属性](/zh-CN/docs/Web/SVG/Attribute#核心属性)
- [aria 属性](/zh-CN/docs/Web/SVG/Attribute#aria_attributes)

### 专有属性

- {{SVGAttr("begin")}}
- {{SVGAttr("href")}}（但应注意 `<discard>` 不支持 `xlink:href` 属性）

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
