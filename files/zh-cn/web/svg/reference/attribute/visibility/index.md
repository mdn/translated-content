---
title: visibility
slug: Web/SVG/Reference/Attribute/visibility
---

`visibility`属性让你能够控制一个图形元素的可见性。用了值`hidden`或者值`collapse`，当前的图形元素将不可见。

> [!NOTE]
> 如果 {{ SVGElement("tspan") }} 元素上的 `visibility` 属性设置为 `hidden`，则文本变得不可见，但是依然占用文本布局计算的空间。

根据属性 {{ SVGAttr("pointer-events") }} 的值，图形元素如果属性 `visibility` 值设置为 `hidden`，依然能够响应事件。

作为一个表现属性，它可以直接用作 CSS 样式表内部的属性。请阅读 {{ cssxref("visibility","CSS visibility") }} 以了解更多信息。

## 使用说明

| 类别   | 表现属性                                     |
| ------ | -------------------------------------------- |
| 值     | **visible** \| hidden \| collapse \| inherit |
| 可变性 | Yes                                          |

## 示例

## 元素

下列元素楞以使用`visibility`属性：

- [图形元素](/zh-CN/docs/Web/SVG/Reference/Element#graphics) »
- [文本内容元素](/zh-CN/docs/Web/SVG/Reference/Element#text_content_elements) »

## 规范

{{Specifications}}

## 参见

- 属性{{ SVGAttr("display") }}
- {{ cssxref("visibility","CSS visibility") }}
