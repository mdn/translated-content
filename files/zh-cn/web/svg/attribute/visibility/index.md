---
title: visibility
slug: Web/SVG/Attribute/visibility
---

« [SVG 属性参考主页](/zh-CN/SVG/Attribute)

`visibility`属性让你能够控制一个图形元素的可见性。用了值`hidden`或者值`collapse`，当前的图形元素将不可见。

> **备注：** 如果 {{ SVGElement("tspan") }}元素、{{ SVGElement("tref") }}元素或{{ SVGElement("altGlyph") }}元素上的`visibility`属性设置为`hidden`，则文本变得不可见，但是依然占用文本布局计算的空间。

根据属性{{ SVGAttr("pointer-events") }}的值，图形元素如果属性`visibility` 值设置为 `hidden`，依然能够响应事件。

作为一个外观属性，它可以直接用作 CSS 样式表内部的属性。请阅读{{ cssxref("visibility","CSS visibility") }}以了解更多信息。

## 用法

| 类别   | 外观属性                                     |
| ------ | -------------------------------------------- |
| 值     | **visible** \| hidden \| collapse \| inherit |
| 可变性 | Yes                                          |

## 示例

## 元素

下列元素楞以使用`visibility`属性：

- [图形元素](/zh-CN/SVG/Element#Graphics) »
- [文本内容元素](/zh-CN/SVG/Element#Text_content_elements) »

## 规范

{{Specifications}}

## 参见

- 属性{{ SVGAttr("display") }}
- {{ cssxref("visibility","CSS visibility") }}
