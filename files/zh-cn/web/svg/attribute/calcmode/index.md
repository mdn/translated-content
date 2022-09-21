---
title: calcMode
slug: Web/SVG/Attribute/calcMode
---

« [SVG Attribute reference home](/zh-CN/SVG/Attribute)

This attribute specifies the interpolation mode for the animation. The default mode is **linear**, however if the attribute does not support linear interpolation (e.g. for strings), the `calcMode` attribute is ignored and discrete interpolation is used.

## Usage context

| Categories         | Animation value attribute                                                        |
| ------------------ | -------------------------------------------------------------------------------- |
| Value              | discrete \| linear \| paced \| spline                                            |
| Animatable         | No                                                                               |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/animate.html#CalcModeAttribute) |

- discrete
  - : This specifies that the animation function will jump from one value to the next without any interpolation.
- linear
  - : Simple linear interpolation between values is used to calculate the animation function. Except for {{ SVGElement("animateMotion") }}, this is the default value.
- paced
  - : Defines interpolation to produce an even pace of change across the animation. This is only supported for values that define a linear numeric range, and for which some notion of "distance" between points can be calculated (e.g. position, width, height, etc.). If paced is specified, any {{ SVGAttr("keyTimes") }} or {{ SVGAttr("keySplines") }} will be ignored. For {{ SVGElement("animateMotion") }}, this is the default value.
- spline
  - : Interpolates from one value in the {{ SVGAttr("values") }} list to the next according to a time function defined by a cubic Bézier spline. The points of the spline are defined in the {{ SVGAttr("keyTimes") }} attribute, and the control points for each interval are defined in the {{ SVGAttr("keySplines") }} attribute.

## Example

## Elements

The following elements can use the `calcMode` attribute

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateMotion") }}
- {{ SVGElement("animateTransform") }}

## 规范

{{Specifications}}
