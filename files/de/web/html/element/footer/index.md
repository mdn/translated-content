---
title: <footer>
slug: Web/HTML/Element/footer
tags:
  - Element
  - HTML
  - HTML Sektionen
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/footer
---
{{HTMLRef}}

## Übersicht

Das **HTML `<footer>` Element** repräsentiert eine Fußzeile für den nahestehendsten Sektionsinhalt oder das [Sektionsquellen](/de/docs/Sections_and_Outlines_of_an_HTML5_document#Sectioning_root "Sections and Outlines of an HTML5 document#Sectioning root") Element (also das nahestehendste Element wie zum Beispiel {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("body")}}, {{HTMLElement("details")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("td")}}). Eine Fußzeile enthält typischerweise Informationen über den Autor der Sektion, die Copyright-Daten oder Links zu verwandten Dokumente.

> **Note:** **Hinweis zur Benutzung:\*** Informationen über den Autor sollten in ein {{HTMLElement("address")}} Element eingebettet werden, welches wiederum in einem `<footer>` Element stehen kann.
>
> - Das `<footer>` Element ist kein Sektionsinhalt und führt deshalb auch keine neue Sektion in der [Begrenzung](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document") ein.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), greifbarer Inhalt.                                                                                                                                                                        |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), jedoch kein `<footer>` oder {{HTMLElement("header")}} Nachfahre.                                                                                                                   |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                                                                             |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content") erlaubt. Das `<footer>` Element muss kein Nachfahre eines {{HTMLElement("address")}}, {{HTMLElement("header")}} oder anderem `<footer>` Element sein. |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                 |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes) ein.

## Beispiel

```html
<footer>
  Hier ein paar Copyright Informationen oder stattdessen Informationen über den &lt;Artikel&gt;?
</footer>
```

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-footer-element', '&lt;footer&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'sections.html#the-footer-element', '&lt;footer&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |

## Browserkompatibilität

{{Compat("html.elements.footer")}}

## Siehe auch

- Andere Sektions-verwandte Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Sektionen und Begrenzungen eines HTML5 Dokuments](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document").
