---
title: calcMode
slug: Web/SVG/Attribute/calcMode
---

{{SVGRef}}

« [SVG Attribute reference home](/en-US/SVG/Attribute)

이 속성은 애니메이션의 interpolation 모드를 지정합니다. 기본 모드는 linear 이지만 속성이 linear interpolation을 지원하지 않으면(예: 문자열의 경우) calcMode 속성이 무시되고 discrete interpolation이 사용됩니다.

## Usage context

| Categories         | Animation value attribute                                                         |
| ------------------ | --------------------------------------------------------------------------------- |
| Value              | discrete \| linear \| paced \| spline                                             |
| Animatable         | No                                                                                |
| Normative document | [SVG 1.1 (2nd Edition)](https://www.w3.org/TR/SVG/animate.html#CalcModeAttribute) |

- discrete
  - : 이것은 애니메이션 함수가 interpolation 없이 하나의 값에서 다음 값으로 점프하도록 지정합니다.
- linear
  - : 값 사이의 단순한 linear interpolation은 애니메이션 함수를 계산하는데 사용됩니다. {{ SVGElement("animateMotion") }}의 경우를 제외하고는 이것은 기본 값입니다.
- paced
  - : Defines interpolation to produce an even pace of change across the animation. This is only supported for values that define a linear numeric range, and for which some notion of "distance" between points can be calculated (e.g. position, width, height, etc.). If paced is specified, any {{ SVGAttr("keyTimes") }} or {{ SVGAttr("keySplines") }} will be ignored. For {{ SVGElement("animateMotion") }}, this is the default value.
- spline
  - : cubic Bézier spline에 정의된 시간 함수에 따라 {{ SVGAttr("values") }} 목록의 한 값에서 다음 값으로 interpolation 합니다. spline의 점(point)은 {{ SVGAttr("keyTimes") }} 속성에 정의되고, 각 간격의 제어점은 {{ SVGAttr("keySplines") }} 속성에 정의됩니다.

## 예제

## Elements

다음 요소에서 calcMode 속성을 사용할 수 있습니다.

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateMotion") }}
- {{ SVGElement("animateTransform") }}
