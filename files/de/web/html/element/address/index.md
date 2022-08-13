---
title: <address>
slug: Web/HTML/Element/address
tags:
  - Element
  - HTML
  - HTML Sektionen
  - Referenz
  - Web
translation_of: Web/HTML/Element/address
---
## Übersicht

Das _HTML `<address>` Element_ kann von Autoren genutzt werden, um Kontaktinformationen an den nähesten {{HTMLElement("article")}} oder {{HTMLElement("body")}} Erben zu übergeben. Im letzteren Fall gilt es für das gesamte Dokument.

> **Note:** **Hinweis zur Benutzung:\*** Um eine beliebige Adresse darzustellen, welche unabhängig von den Kontaktinformationen ist, sollte eher das {{HTMLElement("p")}} Element als das \<address> Element genutzt werden.
>
> - Dieses Element sollte nicht mehr Informationen als die reinen Kontaktinformationen beinhalten, wie zum Beispiel ein Publizierungs-Datum (welches in ein {{HTMLElement("time")}} Element gehört).
> - Typischerweise wird ein \<address> Element innerhalb eines {{HTMLElement("footer")}} Elements der aktuellen Sektion platziert.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), greifbarer Inhalt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), jedoch ohne <address> Element und ohne Kopfinhalt ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}), no sectioning content ({{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}), and no {{HTMLElement("header")}} or {{HTMLElement("footer")}} element. |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Erlaubte Elternelemente                                                         | Jedes Element, welches [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content") akzeptiert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}}. Bis Gecko 2.0 (Firefox 4), hat Gecko dieses Element mit Hilfe der {{domxref("HTMLSpanElement")}} Schnittstelle implementiert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

```html
  <address>
    You can contact author at <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.<br>
    If you see any bugs, please <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br>
    You may also want to visit us:<br>
    Mozilla Foundation<br>
    1981 Landings Drive<br>
    Building K<br>
    Mountain View, CA 94043-0801<br>
    USA
  </address>
```

Das obenstehende HTML wird folgendes ausgeben:

![Image:HTML-address.png](/@api/deki/files/238/=HTML-address.png)

Außerdem stellt das _address_ Element den Text im gleichen Stil wie das {{HTMLElement("i")}} oder {{HTMLElement("em")}} Element dar. Es ist angebracht das _address_ Element zu benutzen, wenn man mit Kontaktinformationen umgeht, als wenn man nur zusätzliche Informationen mitteilen möchte.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-address-element', '&lt;address&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'sections.html#the-address-element', '&lt;address&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.6', '&lt;address&gt;')}}                 | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Andere verwandte Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("header")}};
- [Sections and outlines of an HTML5 document](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document").

{{HTMLRef}}
