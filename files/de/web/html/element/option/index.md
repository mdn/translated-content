---
title: <option>
slug: Web/HTML/Element/option
tags:
  - Element
  - Formulare
  - HTML
  - HTML Formulare
  - Referenz
  - Web
translation_of: Web/HTML/Element/option
---
## Zusammenfassung

Im Rahmen eines Web Formulars erzeugt das **HTML `<option>` Element** einen innerhalb eines HTML5 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} oder {{HTMLElement("datalist")}} Elements zur Auswahl angezeigten Eintrag.

| [Inhaltskategorie](/de/docs/Web/HTML/Content_categories "HTML/Content_categories") | Keine.                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zugelassene Inhalte                                                                | Text mit bedarfsweise in HTML Sequenzen umgewandelten Spezial- und Sonderzeichen, wie z.B. `&eacute;`.                                                                                                                                               |
| Verhalten bei Auslassung                                                           | Im Gegensatz zum einleitenden Tag kann das beendende Tag ausgelassen werden, sofern diesem direkt ein weiteres `<option>` oder {{HTMLElement("optgroup")}} Element folgt, oder aber, wenn das Elternelement keine weiteren Inhalte enthält. |
| Zugelassene Elternelemente                                                         | Ein {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} oder {{HTMLElement("datalist")}} Element.                                                                                                                        |
| DOM Schnittstelle                                                                  | {{domxref("HTMLOptionElement")}}                                                                                                                                                                                                         |

## Attribute

Dieses Element berücksichtigt die [globalen Attribute](/de/docs/Web/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("disabled")}}
  - : Dieser boolesche Wert kennzeichnet diesen Eintrag als nicht auswählbar. Im Regelfall werden nicht auswählbare Einträge in der Darstellung ausgegraut und erhalten keine Benachrichtigungen über Mausclicks, Fokus etc. mehr vom Browser. Ein Element kann darüber hinaus auch deshalb nicht auswählbar sein, weil ein ihm übergeordnetes {{HTMLElement("optgroup")}} Element inaktiviert ist.
- {{htmlattrdef("label")}}
  - : Dieses Attribut kann eine kurze erläuternde Informationen zur Bedeutung der jeweiligen Auswahl enthalten. Wurde dem **`label`** Attribut kein Inhalt explizit zugewiesen, enthält es den Textinhalt des Auswahlpunktes selbst.> **Note:** _Hinweis zur Nutzung:_ Ein **`label`** Attribut sollte lediglich eine kurze Erläuterung enthalten, wie sie z.B. im Rahmen eines Auswahlmenüs sinnvoll ist. Für längere Beschreibungen, z.B. den neben Radiobuttons und Auswahlschaltflächen angezeigten Text, wurde das **`value`** Attribut vorgesehen.
- {{htmlattrdef("selected")}}
  - : Wenn angegeben, kennzeichnet dieser boolesche Wert, ob die betreffende Auswahl initial bereits als angewählt gekennzeichnet ist. Wenn das betreffende `<option>` Element einem {{HTMLElement("select")}} Element untergeordnet ist, dessen Attribut für Mehrfachauswahl {{htmlattrxref("multiple", "select")}} nicht gesetzt ist, darf nur ein einziges `<option>` Element des beinhaltenden {{HTMLElement("select")}} über ein **selected** Attribut verfügen.
- {{htmlattrdef("value")}}

  - : Dieses Attribut kann eine textuelle Erläuterung zur Bedeutung der betreffenden Auswahl enthalten. Wurde diesem Attribut kein Inhalt explizit zugewiesen, enthält es den Textinhalt des Auswahlpunktes selbst.

    > **Note:** _Hinweis zur Nutzung:_ Ein **`label`** Attribut sollte lediglich eine kurze Erläuterung enthalten, wie sie z.B. im Rahmen eines Auswahlmenüs sinnvoll ist. Für längere Beschreibungen, z.B. den neben Radiobuttons und Auswahlschaltflächen angezeigten Text, wurde das **`value`** Attribut vorgesehen.

## Beispiele

Siehe Beispiele bei {{HTMLElement("select")}}.

## Spezifikation

| Spezifikation                                                                                                            | Status                           | Anmerkung |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'the-button-element.html#the-option-element', '&lt;option&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'forms.html#the-option-element', '&lt;option&gt;')}}                     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.6', '&lt;option&gt;')}}                         | {{Spec2('HTML4.01')}}     |           |

## Browserunterstützung

{{Compat}}

### Gecko notes

\[1] In Versionen vor Gecko 7.0, {{geckoRelease("7.0")}}, enthielt ein nicht explizit spezifiziertes label Attribut fälschlicherweise überhaupt keinen Inhalt, anstatt den textuellen Inhalt des Auswahlpunktes selbst.

## Siehe auch

- Weitere Elemente mit Bezug auf Formulare: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} und {{HTMLElement("meter")}}.

{{HTMLRef}}
