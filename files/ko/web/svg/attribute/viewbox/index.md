---
title: viewBox
slug: Web/SVG/Attribute/viewBox
---

« [SVG Attribute reference home](/en/SVG/Attribute)

`viewBox` 속성은 특수한 container element 에 fit 하기 위한 주어진 graphics stretch 의 set 을 명시한다.

`viewBox` 속성의 값은 whitespace and/or a comma 로 나뉘어진 `min-x`, `min-y`, `width`, `height` 4가지 number list 이다. 이는 주어진 element 에 의해 설정된 viewport 의 bounds 에 맵핑되어야 하는 user space 내의 rectangle 을 명시하며, {{ SVGAttr("preserveAspectRatio") }} 속성과 관계가 있다.

음수로 이루어진 width 또는 height 는 허용되지 않으며 zero 값은 element rendering 이 불가하다.

## Usage context

| Categories         | None                                                                             |
| ------------------ | -------------------------------------------------------------------------------- |
| Value              | _See above_                                                                      |
| Animatable         | Yes                                                                              |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/coords.html#ViewBoxAttribute) |

## Example

## Elements

아래 element 들은 `viewBox` 속성을 사용할 수 있다.

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("view") }}

## See also

- [SVG Getting Started: Positions](/en/SVG/Tutorial/Positions)
