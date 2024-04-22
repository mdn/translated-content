---
title: patternContentUnits
slug: Web/SVG/Attribute/patternContentUnits
---

« [SVG Attribute reference home](/en/SVG/Attribute)

Атрибут `patternContentUnits` определяет систему координат для содержимого {{ SVGElement("pattern") }}. Заметьте, что этот атрибут не имеет эффекта, если {{ SVGAttr("viewBox") }} определён на {{ SVGElement("pattern") }} элементе.

Если `patternContentUnits` атрибут не определён, то его значение предполагается равным `userSpaceOnUse`.

Заметьте, что значение {{ SVGElement("pattern") }} не имеет влияния на заданные в процентах атрибуты контента . Это означает, что, если вы задаёте значение `patternContentUnits` равным `objectBoundingBox`, значения, указанные в процентах, будут пересчитаны, как если бы вы задали `userSpaceOnUse`.

## Контекст использования

| Categories         | _None_                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| Value              | `userSpaceOnUse` \| **`objectBoundingBox`**                                                                  |
| Animatable         | Yes                                                                                                          |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/pservers.html#PatternElementPatternContentUnitsAttribute) |

- userSpaceOnUse
  - : Пользовательская система координат {{ SVGElement("pattern") }} element is the coordinate system that results from taking the current user coordinate system in place at the time when the {{ SVGElement("pattern") }} element is referenced (i.e., the user coordinate system for the element referencing the {{ SVGElement("pattern") }} element via a {{ SVGAttr("fill") }} or {{ SVGAttr("stroke") }} attribute) and then applying the transform specified by attribute {{ SVGAttr("patternTransform") }}.
- objectBoundingBox
  - : Пользовательская система координат для содержимого {{ SVGElement("pattern") }} элемента is established using the bounding box of the element to which the pattern is applied and then applying the transform specified by attribute {{ SVGAttr("patternTransform") }}.

## Примеры

## Элементы

Атрибут `patternContentUnits` может быть определён на следующих элементах:

- {{ SVGElement("pattern") }}
