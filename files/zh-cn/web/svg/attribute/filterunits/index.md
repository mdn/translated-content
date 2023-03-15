---
title: filterUnits
slug: Web/SVG/Attribute/filterUnits
---

« [SVG Attribute reference home](/zh-CN/SVG/Attribute)

filterUnits 属性定义{{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} 和{{ SVGAttr("height") }}使用的坐标系系统。

如果 filterUnits 属性未指定，那么效果如同指定了值为`objectBoundingBox.`

## Usage context

| Categories         | _None_                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Value              | `userSpaceOnUse` \| **`objectBoundingBox`**                                                        |
| Animatable         | Yes                                                                                                |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#FilterElementFilterUnitsAttribute) |

- userSpaceOnUse
  - : {{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} 和 {{ SVGAttr("height") }} 表示当前坐标系统中的值，这些值表示{{ SVGElement("filter") }}元素在当前用户坐标系中的位置和大小 (例如通过{{ SVGAttr("filter") }}引用该{{ SVGElement("filter") }}元素的元素所在的坐标系系统).
- objectBoundingBox
  - : 在这种情况下，{{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} 和 {{ SVGAttr("height") }}biao 表示引用{{ SVGElement("filter") }}元素的元素的 baow 包围盒的分数或百分比。

## Examples

## Elements

下面这些元素可以使用 filterUnits 属性：

- {{ SVGElement("filter") }}

## 规范

{{Specifications}}
