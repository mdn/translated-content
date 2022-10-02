---
title: filterUnits
slug: Web/SVG/Attribute/filterUnits
---

« [SVG Attribute reference home](/ja/SVG/Attribute)

`filterUnits`属性は、 {{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} そして {{ SVGAttr("height") }} の座標系を定義します。

もし`filterUnits`属性が指定されていない場合、`objectBoundingBox`が指定されているのと同じになります。

## Usage context

| Categories         | _None_                                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| Value              | `userSpaceOnUse` \| **`objectBoundingBox`**                                                        |
| Animatable         | Yes                                                                                                |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#FilterElementFilterUnitsAttribute) |

- userSpaceOnUse
  - : {{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} and {{ SVGAttr("height") }} represent values in the current coordinate system that results from taking the current user coordinate system in place at the time when the {{ SVGElement("filter") }} element is referenced (i.e., the user coordinate system for the element referencing the {{ SVGElement("filter") }} element via a {{ SVGAttr("filter") }} attribute).
- objectBoundingBox
  - : In that case, {{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} and {{ SVGAttr("height") }} represent fractions or percentages of the bounding box on the referencing element.

## Examples

## Elements

The following elements can use the `filterUnits` attribute:

- {{ SVGElement("filter") }}
