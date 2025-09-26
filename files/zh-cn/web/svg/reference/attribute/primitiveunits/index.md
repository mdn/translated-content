---
title: primitiveUnits
slug: Web/SVG/Reference/Attribute/primitiveUnits
---

`primitiveUnits` 属性为过滤器原语和定义过滤器原语子域中的各种各样的长度单位指定坐标系统。

如果 primitiveUnits 属性未指定，那么效果就如同指定值为 userSpaceOnUse 的效果是一样的。

## Usage context

| Categories | _None_                                      |
| ---------- | ------------------------------------------- |
| Value      | **`userSpaceOnUse`** \| `objectBoundingBox` |
| Animatable | Yes                                         |

- userSpaceOnUse
  - : 当{{ SVGElement("filter") }}元素使用该值的时候，过滤器中定义的任意长度的值都基于当前用户坐标系统 (例如通过{{ SVGAttr("filter") }}属性引用该{{ SVGElement("filter") }}元素的元素所在的用户坐标系统).
- objectBoundingBox
  - : 在 filter 中定义的任意长度值表示引用该 filter 的元素的包围盒的分数或百分比。

## Examples

## Elements

下列元素可以使用 primitiveUnits 属性：

- {{ SVGElement("filter") }}

## 规范

{{Specifications}}
