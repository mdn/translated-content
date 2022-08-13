---
title: nav
slug: Web/HTML/Element/nav
tags:
  - Element
  - HTML
  - HTML Sektionen
  - Referenz
  - Web
translation_of: Web/HTML/Element/nav
---
{{HTMLRef}}

Das **HTML Element `<nav>`** zeichent einen Seitenbereich aus, der dazu bestimmt ist Navigationslinks bereitzustellen, die entweder zum aktuellen Dokument oder zu anderen Dokumenten zeigen. Häufige Beispiele für Navigationsbereiche sind Menüs, Inhaltsverzeichnisse oder andere Verzeichnisse.

| [Inhaltskategorien](/de/docs/Web/Guide/HTML/Inhaltskategorien) | [Fließender Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fließender_Inhalt), [Unterteilender Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Unterteilender_Inhalt), [Fühlbarer Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fühlbarer_Inhalt). |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                               | [Fließender Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fließender_Inhalt).                                                                                                                                                                           |
| Tag Wegfall                                                    | {{no_tag_omission}}                                                                                                                                                                                                                                    |
| Erlaubte Elternelemente                                        | Alle Elemente die [fließenden Inhalt](/de/docs/Web/Guide/HTML/Inhaltskategorien#Fließender_Inhalt) akzeptieren.                                                                                                                                             |
| Erlaubte ARIA-Rollen                                           | Keine                                                                                                                                                                                                                                                       |
| DOM interface                                                  | {{domxref("HTMLElement")}}                                                                                                                                                                                                                        |

## Attribute

Dieses Element besitzt nur die [globalen Attribute](/de/docs/Web/HTML/Globale_Attribute).

## Verwendungshinweise

- Es ist nicht nötig, dass alle Links in einen `<nav>` Element enthalten sind. Die Benutzung von `<nav>` ist nur für wichtige Abschnitte von Navigationslinks beabsichtigt; normalerweise enthält das {{HTMLElement("footer")}} Element eine Liste von Links, welche nicht in einem {{HTMLElement("nav")}} Element beinhaltet sein müssen.
- Ein Dokument darf mehrere {{HTMLElement("nav")}} Elemente enthalten, zum Beispiel, eins für die Seitennavigation und eins für seiteninterne Navigation. [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) kann benutzt werden um Barrierefreiheit zu fördern (siehe [Beispiel](/de/docs/Web/HTML/Element/Heading_Elements#Labeling_section_content)).
- User-Agents, wie Bildschirmleser zur Unterstützung von Menschen mit Behinderung, können dieses Element benutzen, um zu entscheiden, ob das anfängliche Rendering von Navigationsinhalt ausgelassen werden kann.

## Beispiel

In diesem Beispiel wird das `<nav>` Element benutzt, um eine ungeordnete Liste ({{HTMLElement("ul")}}) von Links. Mit entsprechenden CSS kann dies als Seitenleiste, Navigationsleiste oder Drop-Down-Menü verwendet werden.

```html
<nav class="menu">
  <ul>
    <li><a href="#">Startseite</a></li>
    <li><a href="#">Über</a></li>
    <li><a href="#">Kontakt</a></li>
  </ul>
</nav>
```

## Spezifikationen

| Spezifikation                                                                                        | Status                           | Anmerkung                                         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-nav-element', '&lt;nav&gt;')}} | {{Spec2('HTML WHATWG')}} | Keine Änderung seit dem letzten W3C Schnapschuss. |
| {{SpecName('HTML5 W3C', 'sections.html#the-nav-element', '&lt;nav&gt;')}}     | {{Spec2('HTML5 W3C')}}     | Anfängliche Definition                            |

## Browser-Kompatibilität

{{Compat("html.elements.nav")}}

## Siehe auch

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document").
- [ARIA: Navigation role](/de/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)
