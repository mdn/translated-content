---
title: xml:space
slug: Web/SVG/Attribute/xml:space
---

{{deprecated_header("SVG2")}}

« [SVG Attribute reference home](/en/SVG/Attribute)

SVG supports the standard XML attribute `xml:space` to specify the handling of white space characters within a given {{ SVGElement("text") }} element's character data. Note that any child element of a {{ SVGElement("text") }} element may also have an `xml:space` attribute which will apply to that child element's text content. Note that this attribute influences the way a browser should parse the xml content and therefore will change the way the DOM is built. It means that any change made to the value of this attribute through the DOM API may have no effect.

> **Примечание:** Instead of using the `xml:space` attribute you should use the {{cssxref("white-space")}} CSS property.

## Usage context

| Categories         | _None_                                                                   |
| ------------------ | ------------------------------------------------------------------------ |
| Value              | **`default`** \| `preserve`                                              |
| Animatable         | No                                                                       |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/text.html#WhiteSpace) |

- default
  - : Браузер удалит все символы перевода строки. Затем он преобразует все символы табуляции в символы пробелов. Затем он вырежет все начальные и конечные пробелы. И, наконец, все смежные пробелы будут объединены.
- preserve
  - : Браузер преобразует все символы перевода строки и табуляции в символы пробелов. Затем он отрендерит все символы пробелов, в том числе начальные и конечные, а также смежные. Таким образом, когда рендеринг происходит с `xml:space="preserve"`, строка "a b" (три пробела между "a" и "b") будет иметь больше расстояние между "a" и "b", чем "a b" (один пробел между "a" и "b").

## Examples

## Elements

All the SVG elements can use the `xml:space` attribute
