---
title: dominant-baseline
slug: Web/SVG/Attribute/dominant-baseline
---

« [SVG Attribute reference home](/zh-CN/SVG/Attribute)

The `dominant-baseline` attribute is used to determine or re-determine a scaled-baseline-table. A scaled-baseline-table is a compound value with three components: a baseline-identifier for the dominant-baseline, a baseline-table and a baseline-table font-size. Some values of the property re-determine all three values; other only re-establish the baseline-table font-size. When the initial value, auto, would give an undesired result, this property can be used to explicitly set the desire scaled-baseline-table.

If there is no baseline table in the nominal font or if the baseline table lacks an entry for the desired baseline, then the browser may use heuristics to determine the position of the desired baseline.

As a presentation attribute, it also can be used as a property directly inside a CSS stylesheet, see {{ cssxref("dominant-baseline","CSS dominant-baseline") }} for further information.

## Usage context

| Categories         | Presentation attribute                                                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Value              | **auto** \| use-script \| no-change \| reset-size \| ideographic \| alphabetic \| hanging \| mathematical \| central \| middle \| text-after-edge \| text-before-edge \| inherit |
| Animatable         | Yes                                                                                                                                                                              |
| Normative document | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/text.html#DominantBaselineProperty)                                                                                           |

- auto
  - : If this property occurs on a {{ SVGElement("text") }} element, then the computed value depends on the value of the {{ SVGAttr("writing-mode") }} attribute. If the {{ SVGAttr("writing-mode") }} is horizontal, then the value of the dominant-baseline component is `alphabetic`, else if the {{ SVGAttr("writing-mode") }} is vertical, then the value of the dominant-baseline component is `central`.If this property occurs on a {{ SVGElement("tspan") }}, {{ SVGElement("tref") }}, {{ SVGElement("altGlyph") }} or {{ SVGElement("textPath") }} element, then the dominant-baseline and the baseline-table components remain the same as those of the parent text content element. If the computed {{ SVGAttr("baseline-shift") }} value actually shifts the baseline, then the baseline-table font-size component is set to the value of the {{ SVGAttr("font-size") }} attribute on the element on which the `dominant-baseline` attribute occurs, otherwise the baseline-table font-size remains the same as that of the element. If there is no parent text content element, the scaled-baseline-table value is constructed as above for {{ SVGElement("text") }} elements.
- use-script
  - : The dominant-baseline and the baseline-table components are set by determining the predominant script of the character data content. The {{ SVGAttr("writing-mode") }}, whether horizontal or vertical, is used to select the appropriate set of baseline-tables and the dominant baseline is used to select the baseline-table that corresponds to that baseline. The baseline-table font-size component is set to the value of the {{ SVGAttr("font-size") }} attribute on the element on which the `dominant-baseline` attribute occurs.
- no-change
  - : The dominant-baseline, the baseline-table, and the baseline-table font-size remain the same as that of the parent text content element.
- reset-size
  - : The dominant-baseline and the baseline-table remain the same, but the baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element. This re-scales the baseline-table for the current {{ SVGAttr("font-size") }}.
- ideographic
  - : The baseline-identifier for the dominant-baseline is set to be `ideographic`, the derived baseline-table is constructed using the `ideographic` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- alphabetic
  - : The baseline-identifier for the dominant-baseline is set to be `alphabetic`, the derived baseline-table is constructed using the `alphabetic` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- hanging
  - : The baseline-identifier for the dominant-baseline is set to be `hanging`, the derived baseline-table is constructed using the `hanging` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- mathematical
  - : The baseline-identifier for the dominant-baseline is set to be `mathematical`, the derived baseline-table is constructed using the `mathematical` baseline-table in the font, and the baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- central
  - : The baseline-identifier for the dominant-baseline is set to be `central`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of baseline-table names: `ideographic`, `alphabetic`, `hanging`, `mathematical`. The baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- middle
  - : The baseline-identifier for the dominant-baseline is set to be `middle`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. That font baseline-table is chosen using the following priority order of baseline-table names: `alphabetic`, `ideographic`, `hanging`, `mathematical`. The baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- text-after-edge
  - : The baseline-identifier for the dominant-baseline is set to be `text-after-edge`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. The choice of which font baseline-table to use from the baseline-tables in the font is browser dependent. The baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.
- text-before-edge
  - : The baseline-identifier for the dominant-baseline is set to be `text-before-edge`. The derived baseline-table is constructed from the defined baselines in a baseline-table in the font. The choice of which baseline-table to use from the baseline-tables in the font is browser dependent. The baseline-table font-size is changed to the value of the {{ SVGAttr("font-size") }} attribute on this element.

## Example

## Elements

The following elements can use the `dominant-baseline-shift` attribute

- [Text content elements](/zh-CN/SVG/Element#Text_content_elements) »

## 规范

{{Specifications}}

## See also

- {{ cssxref("dominant-baseline","CSS dominant-baseline") }}
