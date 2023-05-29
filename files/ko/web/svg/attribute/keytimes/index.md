---
title: keyTimes
slug: Web/SVG/Attribute/keyTimes
---
« [SVG Attribute reference home](/ko/docs/Web/SVG/Attribute)

`keyTimes` 속성은 애니메이션의 pacing을 제어하는 데 사용되는 세미콜론으로 구분 된 시간 값 목록입니다. 목록의 각 시간은 {{ SVGAttr("values") }} 속성 목록의 값에 해당하며 애니메이션에서 값이 사용되는 시기를 정의합니다. `keyTimes` 목록의 각 시간 값은 0과 1 사이의 부동 소수점 값으로 지정되며 애니메이션 요소의 지속 시간에 대한 비례 오프셋을 나타냅니다.

만약 `keyTimes` 목록이 지정될 경우, {{ SVGAttr("values") }} 목록에서와 같이 `keyTimes` 목록에 있는 값과 정확하게 일치해야합니다.

각 연속적인 시간 값은 이전 시간 값보다 크거나 같아야 합니다.

`keyTimes` 목록의 semantics는 interpolation 모드에 따라 다릅니다.

- For linear and spline animation, the first time value in the list must be 0, and the last time value in the list must be 1. The key time associated with each value defines when the value is set; values are interpolated between the key times.
- For discrete animation, the first time value in the list must be 0. The time associated with each value defines when the value is set; the animation function uses that value until the next time defined in `keyTimes`.

If the interpolation mode is _paced_, the `keyTimes` attribute is ignored.

If the duration is indefinite, any `keyTimes` specification will be ignored.

## Usage context

| Categories         | Animation value attribute                                                        |
| ------------------ | -------------------------------------------------------------------------------- |
| Value              | \<list>                                                                           |
| Animatable         | No                                                                               |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#KeyTimesAttribute) |

## 예제

```html
<?xml version="1.0"?>
<svg width="120" height="120"
     viewPort="0 0 120 120" version="1.1"
     xmlns="http://www.w3.org/2000/svg">

    <circle cx="60" cy="10" r="10">

        <animate attributeName="cx"
                 attributeType="XML"
                 dur="4s"
                 values="60 ; 110 ; 60 ; 10 ; 60"
                 keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
                 repeatCount="indefinite"/>

        <animate attributeName="cy"
                 attributeType="XML"
                 dur="4s"
                 values="10 ; 60 ; 110 ; 60 ; 10 "
                 keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
                 repeatCount="indefinite"/>

    </circle>
</svg>
```

**Live sample**

{{ EmbedLiveSample('Example','120','120') }}

## Elements

The following elements can use the `keyTimes` attribute

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateMotion") }}
- {{ SVGElement("animateTransform") }}
