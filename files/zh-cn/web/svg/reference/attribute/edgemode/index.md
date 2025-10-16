---
title: edgeMode
slug: Web/SVG/Reference/Attribute/edgeMode
---

`edgeMode` 属性确定了当核心位于输入图像的边缘或贴近输入图像的边缘时，如何取用颜色值用于扩展输入图像，从而可以应用矩阵操作。

如果没有指定 `edgeMode` 属性，等效于值被指定为 `duplicate`。

## 使用说明

| 类别   | 无                            |
| ------ | ----------------------------- |
| 值     | **duplicate** \| wrap \| none |
| 可变性 | Yes                           |

- duplicate
  - : 它指示输入图像沿着每条边扩展，复制输入图像的给定边缘上的颜色值。
- wrap
  - : 它指示扩展输入图像，从图像相对的边缘取色。
- none
  - : 它指示扩展输入图像，用 0 作为 RGBA 的像素值。

## 示例

## 元素

以下元素可以使用`edgeMode`属性：

- {{ SVGElement("feConvolveMatrix") }}

## 规范

{{Specifications}}
