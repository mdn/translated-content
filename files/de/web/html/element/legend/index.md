---
title: <legend>
slug: Web/HTML/Element/legend
translation_of: Web/HTML/Element/legend
---
The **HTML `<legend>` element** represents a caption for the content of its parent {{HTMLElement("fieldset")}}.

| [Inhaltskategorien](/de/docs/HTML/Content_categories) | Keine.                                                                                                 |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Zugelassener Inhalt                                   | Definiert eine Überschrift für einen Formularbereich welches durch ein Fieldset zusammengefasst wurde. |
| Tag Verwendung                                        | Start-Tag und End-Tag notwendig.                                                                       |
| Elternelemente                                        | Legend kann nur innerhalb von fieldset stehen                                                          |
| Permitted ARIA roles                                  |                                                                                                        |
| DOM interface                                         |                                                                                                        |

## Attribute

Dieses Element unterstützt die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

## Examples

\<fieldset>
\<legend>Geschlecht\</legend>
\<label for="man">
\<input type="radio" name="geschlecht" value="man"> Männlich\</label>
\<label for="woman">
\<input type="radio" name="geschlecht" value="woman"> Weiblich\</label>
\</fieldset>

## Specifications

| Specification                                                                                            | Status                           | Comment                                                             |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "forms.html#the-legend-element", "&lt;legend&gt;")}} | {{Spec2("HTML WHATWG")}} | Definition of the `legend` element                                  |
| {{SpecName("HTML WHATWG", "rendering.html#the-fieldset-and-legend-elements")}} | {{Spec2("HTML WHATWG")}} | Suggested default rendering of the `fieldset` and `legend` elements |
| {{SpecName("HTML5 W3C", "forms.html#the-legend-element", "&lt;legend&gt;")}}     | {{Spec2("HTML5 W3C")}}     |                                                                     |
| {{SpecName("HTML4.01", "interact/forms.html#h-17.10", "&lt;legend&gt;")}}         | {{Spec2("HTML4.01")}}     | Initial definition                                                  |

## Browser Kompatibilität

{{Compat("html.elements.legend")}}

## See also

- Others form-related elements: {{HTMLElement("form")}}, {{HTMLElement("option")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.

{{HTMLRef}}
