---
title: <blockquote>
slug: Web/HTML/Element/blockquote
tags:
  - Element
  - HTML
  - HTML Gruppierungsinhalt
  - HTML:Flow content
  - Referenz
  - Web
translation_of: Web/HTML/Element/blockquote
---
## Übersicht

Das **HTML `<blockquote>` Element** (oder _HTML Block Quotation Element_) gibt an, dass der eingeschlossene Text ein erweiterndes Zitat ist. Normalerweise wird dieses Element als Einrückung dargestellt (siehe [Anmerkungen](/de/docs/HTML/Element/blockquote#Notes "HTML/Element/blockquote#Notes") wie man die Darstellung ändert). Eine URL für die Quelle des Zitats kann mit Hilfe des _cite_ Attributs angegeben werden, während die Quelle eines Textes mit dem {{HTMLElement("cite")}} Element angegeben werden kann.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), Sektionsursprung, greifbarer Inhalt. |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content_categories#Phrasing_content").                                  |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                        |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content_categories#Phrasing_content") erlaubt.      |
| DOM Schnittstelle                                                               | {{domxref("HTMLQuoteElement")}}                                                                                                        |

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("cite")}}
  - : Eine URL, die ein Quelldokument oder die Quellnachricht angibt, für die zitierte Information. Dieses Attribut zielt darauf ab, auf Informationen zu zeigen, die den Kontext oder die Referenz des Zitats näher erläutern.

## Beispiel

```html
<blockquote cite="http://developer.mozilla.org">
  <p>Das ist ein Zitat vom Mozilla Developer Center.</p>
</blockquote>
```

Dieser HTML Code gibt folgendes Ergebnis aus:

> Das ist ein Zitat vom Mozilla Developer Center.

## Spezifikationen

| Spezifikation                                                                                                                    | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-blockquote-element', '&lt;blockquote&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-blockquote-element', '&lt;blockquote&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.2', '&lt;blockquote&gt;')}}                             | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Anmerkungen

Um die `<blockquote>` Einrückung zu ändern, kann die [CSS](/de/docs/CSS "CSS") {{cssxref("margin")}} Eigenschaft genutzt werden.

Für kurze Zitate kann man das {{HTMLElement("q")}} Element nutzen.

## Siehe auch

- Das {{HTMLElement("q")}} Element einreihige Zitat.
- Das {{HTMLElement("cite")}} Element für Quellenangaben.

{{HTMLRef}}
