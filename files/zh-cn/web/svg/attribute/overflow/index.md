---
title: overflow
slug: Web/SVG/Attribute/overflow
---

« [SVG Attribute reference home](/zh-CN/SVG/Attribute)

The `overflow` attribute has the same parameter values as defined for the {{ cssxref("overflow","CSS overflow property") }}. However, the following additional points apply:

- The `overflow` attribute only applies to elements that establish new viewports (see below), {{ SVGElement("pattern") }} elements and {{ SVGElement("marker") }} elements. For all other elements, the property has no effect.
- For those elements to which the `overflow` attribute can apply, if the `overflow` attribute has the value `hidden` or `scroll`, the effect is that a new clipping path in the shape of a rectangle is created. The result is equivalent to defining a {{ SVGElement("clipPath") }} element whose content is a {{ SVGElement("rect") }} element which defines the equivalent rectangle, and then specifying the \<uri> of this {{ SVGElement("clipPath") }} element on the {{ SVGAttr("clip-path") }} attribute for the given element.
- If the `overflow` attribute has a value other than `hidden` or `scroll`, the property has no effect.
- Within SVG content, the value `auto` is equivalent to the value `visible`.
- When an outermost svg element is embedded inline within HTML, if the `overflow` attribute has the value `hidden` or `scroll`, then the browser will establish an initial clipping path equal to the bounds of the initial viewport; otherwise, the initial clipping path is set according to the CSS clipping rules.
- When an outermost svg element is stand-alone, the `overflow` attribute on the outermost svg element is ignored for the purposes of visual rendering and the initial clipping path is set to the bounds of the initial viewport.
- The initial value for `overflow` as defined in CSS is `visible`, and this applies also to the root {{ SVGElement("svg") }} element; however, for child elements of an SVG document, SVG's browser style sheet overrides this initial value and sets the `overflow` attribute on elements that establish new viewports, ‘pattern’ elements and ‘marker’ elements to the value `hidden`.

As a presentation attribute, it also can be used as a property directly inside a CSS stylesheet, see {{ cssxref("overflow","CSS overflow") }} for further information.

## Usage context

| Categories | Presentation attribute                         |
| ---------- | ---------------------------------------------- |
| Value      | visible \| hidden \| scroll \| auto \| inherit |
| Animatable | Yes                                            |

## Example

## Elements

The following elements can use the `overflow` attribute

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("marker") }}

## 规范

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ cssxref("overflow","CSS overflow") }}
