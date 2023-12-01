---
title: values
slug: Web/SVG/Attribute/values
---

« [SVG Attribute reference home](/en/SVG/Attribute)

Атрибут `values` имеет два значения в зависимости от используемого контекста.

Для элементов анимации атрибут `values` представляет собой разделённый точками с запятой список одного или нескольких значений. В анимации будут применены значения в порядке следования анимации. Если задан список `values`, значения атрибутов {{ SVGAttr("from") }}, {{ SVGAttr("to") }} и {{ SVGAttr("by") }} игнорируются.

Для элемента {{ SVGElement("feColorMatrix") }} содержимое `values` зависит от значения атрибута {{ SVGAttr("type") }}:

- Для `type="matrix"`, `values` — это список из 20 значений матрицы (А00 А01 А02 А03 А04 A10 А11... А34), разделённых пробелами и/или запятой.
- Для `type="saturate"`, `values` — это единственное вещественное число (от 0 до 1).
- Для `type="hueRotate"`, `values` — это одно вещественное число (градусов).
- Для `type="luminanceToAlpha"`, `values` не применимы.

Если атрибут не указан, то поведение по умолчанию зависит от значения атрибута {{SVGAttr("type")}}.

- Если `type="matrix"`, этот атрибут по умолчанию присваивается матрице идентификаторов.
- Если `type="saturate"`, то этот атрибут по умолчанию присваивает значение 1, что приводит к получению матрицы идентификаторов.
  Если `type="hueRotate"`, то этот атрибут по умолчанию присваивает значение 0, что приводит к получению матрицы идентификаторов.

## Usage context

### For animation elements

| Categories         | Animation value attribute                                                        |
| ------------------ | -------------------------------------------------------------------------------- |
| Value              | \<list>                                                                          |
| Animatable         | No                                                                               |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/animate.html#ValuesAttribute) |

### For the {{ SVGElement("feColorMatrix") }} element

| Categories         | _None_                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Value              | \<list> \| [\<number>](/en/SVG/Content_type#Number)                                           |
| Animatable         | Yes                                                                                           |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/filters.html#feColorMatrixValuesAttribute) |

## Example

## Elements

The following elements can use the `values` attribute

- [Animation elements](/en/SVG/Element#Animation)
- {{ SVGElement("feColorMatrix") }}
