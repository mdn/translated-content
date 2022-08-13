---
title: <header>
slug: Web/HTML/Element/header
tags:
  - Element
  - HTML
  - HTML Sektionen
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/header
---
{{HTMLRef}}

## Übersicht

Das **HTML `<header>` Element** repräsentiert eine Gruppe von Einführungs- oder Navigationshilfen. Es kann ein paar Kopfelemente beinhalten, jedoch auch andere Elemente wie zum Beispiel ein Logo, ein Suchfeld, usw.

> **Note:** **Hinweis zur Benutzung:\*** Das `<header>` Element ist kein Sektionsinhalt und führt deshalb auch keine neue Sektion in der [Begrenzung](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document") ein.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), greifbarer Inhalt.                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Erlaubter Inhalt                                                                | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), jedoch kein `<header>` oder {{HTMLElement("footer")}} Nachfahre                                                                                                                                              |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                       |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content") erlaubt. Ein `<header>` Element darf kein Nachfahre von einem {{HTMLElement("address")}}, {{HTMLElement("footer")}} oder anderem {{HTMLElement("header")}} Element sein. |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                           |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

```html
<header>
  hier ein Logo
</header>
```

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-header-element', '&lt;header&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'sections.html#the-header-element', '&lt;header&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Eine detailliertere Beschreibung: [The header element | HTML5 Doctor](http://html5doctor.com/the-header-element/ "The header element | HTML5 Doctor")
- Andere Sektions-verwandte Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Sektionen und Bregrenzungen eines HTML5 Dokuments](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document").
