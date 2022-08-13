---
title: '<section>: um Abschnitten zu erstellen'
slug: Web/HTML/Element/section
tags:
  - Element
  - HTML
  - HTML 5
  - HTML section
  - Unterteilung
translation_of: Web/HTML/Element/section
---
{{HTMLRef}}

## Übersicht

Das _HTML Element Section_ (`<section>`) stellt eine allgemeine Unterteilung des Dokumentes dar, z.B. eine thematische Gruppierung des Inhaltes typischerweise mit einer Überschrift. Jeder `<section>` Abschnitt sollte identifizierbar sein, üblicherweise durch Einfügen einer Überschrift ([`h1`](http://www.w3.org/html/wg/drafts/html/master/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements)-[`h6`](http://www.w3.org/html/wg/drafts/html/master/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements) Element) als Kindelement des `<section>` Elementes.

Zum Beispiel sollte jedes Navigationsmenü in ein `<nav>` Element eingebettet sein, eine Liste von Suchergebnissen und eine Anzeige einer Karte hat kein solch spezifisches Element und könnte daher in eine `<section>` eingebettet werden.

> **Note:** _Hinweis zur Benutzung:_\* Wenn der Inhalt des {{HTMLElement("section")}} Elementes sinnvoll getrennt zu syndizieren ist, benutzt man stattdessen das {{HTMLElement("article")}} Element.
>
> - {{HTMLElement("section")}} soll nicht als allgemeines Containerelement benutzt werden; dafür gibt es {{HTMLElement("div")}}. Insbesondere gilt dies, wenn die Einteilung ausschließlich für CSS-Zwecke gedacht ist. Als Faustformel gilt, dass ein mit {{HTMLElement("section")}} ausgezeichneter Abschnitt auch in der Gliederung des Dokumentes erscheinen sollte.

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories) | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content), [Abschnitte](/de/docs/Web/HTML/Content_categories#Sectioning_content), greifbarer Inhalt.                                                                |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                          | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content).                                                                                                                                                          |
| Tag omission                                              | {{no_tag_omission}}                                                                                                                                                                                                         |
| Erlaubte Elternelemente                                   | Jedes Element das [flow content](/de/docs/Web/HTML/Content_categories#Flow_content) erlaubt. Beachte, dass das {{HTMLElement("section")}} kein Nachkomme des {{HTMLElement("address")}} Elementes sein darf. |
| DOM Schnittstelle                                         | {{domxref("HTMLElement")}}                                                                                                                                                                                             |

## Attribute

Dieses Element enthält nur [globale Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiele

```html
<section>
  <h1>Heading</h1>
  <p>Bunch of awesome content</p>
</section>
```

## Beispiel 2

### Bisher

```html
<div>
  <h2>Heading</h2>
  <img>some image</img>
</div>
```

### Jetzt

```html
<section>
  <h2>Heading</h2>
  <img>some image</img>
</section>
```

##

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-section-element', '&lt;section&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5.1', 'sections.html#the-section-element', '&lt;section&gt;')}}         | {{Spec2('HTML5.1')}}     |           |
| {{SpecName('HTML5 W3C', 'sections.html#the-section-element', '&lt;section&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Andere mit Section verwandte Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/de/docs/Sections_and_Outlines_of_an_HTML5_document).
