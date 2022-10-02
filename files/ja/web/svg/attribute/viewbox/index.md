---
title: viewBox
slug: Web/SVG/Attribute/viewBox
---

« [SVG Attribute reference home](/ja/SVG/Attribute)

`viewBox`属性は、特定の container 要素に合わせるためのグラフィックス stretch のセットを指定できます。

The value of the `viewBox` attribute is a list of four numbers `min-x`, `min-y`, `width` and `height`, separated by whitespace and/or a comma, which specify a rectangle in user space which should be mapped to the bounds of the viewport established by the given element, taking into account attribute {{ SVGAttr("preserveAspectRatio") }}.

Negative values for `width` or `height` are not permitted and a value of zero disables rendering of the element.

## Usage context

| Categories         | None                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| Value              | _See above_                                                                      |
| Animatable         | Yes                                                                              |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/coords.html#ViewBoxAttribute) |

## 例

## 要素

以下の要素が`viewBox`属性を使います。

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("view") }}

## See also

- [SVG Getting Started: Positions](/ja/SVG/Tutorial/Positions)
