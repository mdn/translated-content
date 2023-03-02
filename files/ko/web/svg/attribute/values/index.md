---
title: values
slug: Web/SVG/Attribute/values
---
« [SVG Attribute reference home](/en/SVG/Attribute)

`values` 속성은 사용하는 맥락에 따라 크게 두 가지 의미가 있습니다.

애니메이션 요소의 경우, values 속성은 세미콜론으로 구분된 하나 이상의 값 목록입니다. 애니메이션은 애니메이션 과정에서 순서대로 값을 적용합니다. 값 목록이 지정되면 {{ SVGAttr("from") }}, {{ SVGAttr("to") }} 그리고 {{ SVGAttr("by") }} 속성 값은 무시됩니다.

{{ SVGElement("feColorMatrix") }} 요소의 경우 값의 내용은 {{ SVGAttr("type") }} 속성의 값에 따라 다릅니다:

- For `type="matrix"`, `values` is a list of 20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34), separated by whitespace and/or a comma.
- For `type="saturate"`, `values` is a single real number value (0 to 1).
- For `type="hueRotate"`, `values` is a single one real number value (degrees).
- For `type="luminanceToAlpha"`, `values` is not applicable.

If the attribute is not specified, then the default behavior depends on the value of attribute {{ SVGAttr("type") }}.

- If `type="matrix"`, then this attribute defaults to the identity matrix.
- If `type="saturate"`, then this attribute defaults to the value 1, which results in the identity matrix.
- If `type="hueRotate"`, then this attribute defaults to the value 0, which results in the identity matrix.

## Usage context

### For animation elements

| Categories         | Animation value attribute                                                        |
| ------------------ | -------------------------------------------------------------------------------- |
| Value              | \<list>                                                                           |
| Animatable         | No                                                                               |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/animate.html#ValuesAttribute) |

### For the {{ SVGElement("feColorMatrix") }} element

| Categories         | _None_                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Value              | \<list> \| [\<number>](/en/SVG/Content_type#Number)                 |
| Animatable         | Yes                                                                                           |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#feColorMatrixValuesAttribute) |

## 예제

## Elements

The following elements can use the `values` attribute

- [Animation elements](/en/SVG/Element#Animation) »
- {{ SVGElement("feColorMatrix") }}
