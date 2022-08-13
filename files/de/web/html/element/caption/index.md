---
title: <caption>
slug: Web/HTML/Element/caption
translation_of: Web/HTML/Element/caption
---
## Zusammenfassung

Das **HTML-Element `<caption>` **(oder auch HTML-Tabellenüberschrift-Element) stellt den Titel einer Tabelle dar. Somit ist dieses immer das erste untergeordnete Element einer Tabelle ({{HTMLElement("table")}}). Das Layout wird über CSS festegelegt, es ist relativ zur Tabelle.

| [Inhaltskategorie](/de/docs/HTML/Content_categories "HTML/Content_categories") | Keine                                                                                                      |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| erlaubter Inhalt                                                               | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"). |
| Auslassbare Tags                                                               | {{no_tag_omission}}                                                                                   |
| erlaubte elterliche Elemente                                                   | A {{HTMLElement("table")}} element, as its first descendant.                                       |
| DOM-Schnittstelle                                                              | {{domxref("HTMLTableCaptionElement")}}                                                       |

## Attribute

Dieses Dokument unterstützt die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("align")}} {{deprecatedGeneric('inline','HTML4.01')}} {{obsoleteGeneric('inline','HTML5')}}
  - : This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have the following values:\* `left`, displayed to the left of the table
    - `top`, displayed before the the table
    - `right`, displayed to the right of the table
    - `bottom`, displayed under the table> **Note:** **Usage note:** Do not use this attribute, as it has been deprecated: the {{HTMLElement("caption")}} element should be styled using [CSS](/de/docs/CSS "CSS"). To give a similar effect to the `align` attribute, use the the [CSS](/de/docs/CSS "CSS") properties {{cssxref("caption-side")}} and {{cssxref("text-align")}}.

## Examples

Please see the {{HTMLElement("table")}} page for examples on {{HTMLElement("caption")}}

## Specifications

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'tabular-data.html#the-caption-element', '&lt;caption&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'tabular-data.html#the-caption-element', '&lt;caption&gt;')}}     | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'struct/tables.html#h-11.2.2', '&lt;caption&gt;')}}                 | {{Spec2('HTML4.01')}}     |         |

## Browser compatibility

{{Compat}}

## See also

- Other table-related HTML Elements: {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- CSS properties that may be specially useful to style the {{HTMLElement("caption")}} element:

  - {{cssxref("text-align")}}, {{cssxref("caption-side")}}.

{{HTMLRef}}
