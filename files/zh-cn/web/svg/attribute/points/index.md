---
title: points
slug: Web/SVG/Attribute/points
---

{{SVGRef}}

`points` 属性定义了用来画一个 {{ SVGElement("polyline") }} 元素或画一个 {{SVGElement("polygon") }} 元素的点的数列。

每个点用用户坐标系统中的一个 X 坐标和 Y 坐标定义。用逗号分开每个点的 X 和 Y 坐标标记是一个常用实践（但是并非必要），使用空间标注每个点。

## 用法

| 类别   | 无                |
| ------ | ----------------- |
| 值     | \<list-of-points> |
| 可变性 | Yes               |

## 示例

```xml
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polygon points="100,10 250,150 200,110"
           style="fill:lime;stroke:purple;stroke-width:1" />
</svg>
```

## 元素

以下元素可以使用`points`属性：

- {{ SVGElement("polyline") }}
- {{ SVGElement("polygon") }}

## 规范

{{Specifications}}
