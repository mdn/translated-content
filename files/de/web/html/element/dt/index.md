---
title: <dt>
slug: Web/HTML/Element/dt
tags:
  - Element
  - HTML
  - HTML Gruppierungsinhalt
  - Referenz
  - Web
translation_of: Web/HTML/Element/dt
---
## Übersicht

Das **HTML `<dt>` Element** (oder HTML Definition Term Element) identifiziert einen Begriff in einer Definitionsliste. Dieses Element kann nur als Kindelement eines {{HTMLElement("dl")}} Elements vorkommen. Normalerweise wird es gefolgt von einem {{HTMLElement("dd")}} Element. Mehrere `<dt>` Elemente in einer Reihe indizieren verschiedene Begriffe, die jeweils vom nächsten {{HTMLElement("dd")}} Element definiert werden.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | Keine.                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | {{todo}} [Fließender Inhalt](/de/docs/HTML/Content_categories#Flowing_content "HTML/Content_categories#Phrasing_content"), jedoch ohne {{HTMLElement("header")}}, {{HTMLElement("footer")}}, Sektionsinhalt oder Nachfahren von Kopfinhalten. |
| Tag Auslassung                                                                  | Muss ein Start-Tag besitzen. Das End-Tag kann ausgelassen werden, vorausgesetzt es folgt direkt ein `<dd>` Element oder es gibt keinen weiteren Inhalt im Elternelement.                                                                                        |
| Erlaubte Elternelemente                                                         | Vor einem {{HTMLElement("dt")}} oder einem {{HTMLElement("dd")}} Element, innerhalb eines {{HTMLElement("dl")}} Elements.                                                                                                                  |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}} Bis einschließlich Gecko 1.9.2 (Firefox 4) hat Firefox die [HTMLSpanElement](/de/docs/DOM/span "DOM/span") Schnittstelle für dieses Element implementiert.                                                                 |

## Attribute

Dieses Attribut schließt [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

Siehe [definition list](/de/docs/HTML/Element/dl#Examples "HTML/Element/dl#Examples").

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-dt-element', '&lt;dt&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-dt-element', '&lt;dt&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.3', '&lt;dt&gt;')}}                     | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dd")}} Element
- {{HTMLElement("dl")}} Element

{{HTMLRef}}
