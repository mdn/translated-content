---
title: <dd>
slug: Web/HTML/Element/dd
tags:
  - Element
  - HTML
  - HTML Gruppierungsinhalt
  - Referenz
  - Web
translation_of: Web/HTML/Element/dd
---
## Übersicht

Das **HTML `<dd>` Element** (oder _HTML Description Element_) indiziert die Beschreibung eines Begriffes innerhalb einer Description List ({{HTMLElement("dl")}} Element). Dieses Element kann nur als Kindelement auftreten und muss einem {{HTMLElement("dt")}} Element folgen.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | Keine.                                                                                                                                                                                          |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content").                                                                                      |
| Tag Auslassung                                                                  | Muss ein Start-Tag haben. Das End-Tag kann ausgelassen werden, wenn es direkt von einem `<dd>` Element gefolgt wird oder es keinen Inhalt im Elternelement mehr gibt.                           |
| Erlaubte Elternelemente                                                         | Nach einem {{HTMLElement("dt")}} Element oder einem `<dl>` Element, innerhalb eines {{HTMLElement("dl")}} Elements.                                                               |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4) hat Firefox die [HTMLSpanElement](/de/docs/DOM/span "DOM/span") Schnittstelle für dieses Element implementiert. |

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("nowrap")}} {{Non-standard_inline}}
  - : Wenn der Wert dieses Attributs auf `yes` steht, wird der Definitionstext nicht umbrechen. Der Standardwert für dieses Attribut lautet `no`.

## Beispiel

Siehe [\<dl> Beispiele](/de/docs/HTML/Element/dl#examples "HTML/Element/dl#examples").

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-dd-element', '&lt;dd&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dd-element', '&lt;dd&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dd&gt;')}}                     | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLELement("dl")}} Element
- {{HTMLElement("dt")}} Element

{{HTMLRef}}
