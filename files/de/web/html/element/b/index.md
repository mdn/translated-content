---
title: b
slug: Web/HTML/Element/b
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/b
---
Das HTML bold Element (`<b>`) wird benutzt, um einen Text hervorzuheben und die Aufmerksamkeit des Lesers hierauf zu lenken. Dabei wird keine besondere Wichtigkeit oder Relevanz übertragen. Typischerweise sind Schlüsselwörter in einer Zusammenfassung, Produktnamen oder andere Textstellen, die speziell präsentiert werden sollen, mit dem bold Tag ausgezeichnet. Ein weiteres Beispiel ist die Markierung der führenden Sätze der Absätze eines Artikels.

> **Note:** **Hinweise zur Verwendung:\*** Das HTML bold Element sollte nicht mit den {{ HTMLElement("strong") }}, {{ HTMLElement("em") }} oder {{ HTMLElement("mark") }} Elementen verwechselt werden. Das {{ HTMLElement("strong") }} Element repräsentiert einen Text, der über eine gewisse _Wichtigkeit_ verfügt, {{ HTMLElement("em") }} betont den Text und das {{ HTMLElement("mark") }} Element repräsentiert einen Text, der über eine gewisse _Relevanz_ verfügt. Das bold Element enthält keine speziellen semantischen Informationen; es kann als das Element angesehen werden, welches benutzt wird, wenn kein anderes passend ist.
>
> - Überschriften sollen daher nicht mit dem bold Element ausgezeichnet werden. Dafür sind die Elemente {{ HTMLElement("h1") }} bis {{ HTMLElement("h6") }} gedacht. Stylesheets können verwendet werden, um das Standardaussehen des Elements zu verändern, sodass es nicht zwingend ist, dass etwas in Fettdruck angezeigt wird.
> - Es macht in der Praxis Sinn das **class** Attribut zu verwenden, um weitere semantische Informationen hinzuzufügen. Das vereinfacht zudem die Entwicklung von verschiedenen Styles eines Webdokuments, ohne dass dabei der HTML-Code verändert werden muss.
> - In der Geschichte von HTML war das `bold` Element dazu gedacht, Text mit Fettdruck darzustellen. Da Style-Informationen seit HTML 4 nicht länger erwünscht sind, hat sich diese Bedeutung geändert.

## Verwendungskontext

| [Inhaltskategorie](/de/HTML/Inhaltskategorien "de/HTML/Inhaltskategorien") | [Flow content](/de/HTML/Inhaltskategorien#Flow_content "de/HTML/Inhaltskategorien#Flow content"), [Phrasing content](/de/HTML/Inhaltskategorien#Phrasing_content "de/HTML/Inhaltskategorien#Phrasing content")                                                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                           | Phrasing content                                                                                                                                                                                                                                                                              |
| Tag Auslassung                                                             | Keine; Start- und Endtag sind vorgeschrieben.                                                                                                                                                                                                                                                 |
| Erlaubte Elternelemente                                                    | Jedes Element, dass Phrasing content zulässt.                                                                                                                                                                                                                                                 |
| Normatives Dokument                                                        | [HTML5, section 4.5.21](https://html.spec.whatwg.org/multipage/semantics.html#the-b-element "http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-b-element") ([HTML4.01, section 15.2.1](http://www.w3.org/TR/REC-html40/present/graphics.html#edef-B)) |

## Attribute

Genau wie alle anderen HTML Elemente verfügt dieses Element über [globale Attribute](/de/HTML/Globale_Attribute "de/HTML/Globale Attribute").

## DOM Interface

Dieses Element implementiert das [`HTMLElement`](/de/DOM/element "de/DOM/element") Interface.

> **Note:** **Implementationshinweis:** Bis einschließlich Gecko 1.9.2 implementiert Firefox das [HTMLSpanElement](/de/DOM/span "de/DOM/span") Interface für dieses Element.

## Beispiel

    <p>
      Dieser Artikel beschreibt einige <b>text-level</b> Elemente. Es beschreibt die Verwendung in einem <b>HTML</b> Dokument.
    </p>
    Schlüsselwörter werden hier mit dem Standard-Style des <b> Elements versehen, meistens Fettdruck

#### Ergebnis

Dieser Artikel beschreibt einige **text-level** Elemente. Es beschreibt die Verwendung in einem **HTML** Dokument.

Schlüsselwörter werden hier mit dem Standard-Style des \<b> Elements versehen, meistens Fettdruck.

## Siehe auch

- Andere Elemente mit semantischer Bedeutung auf Text-Ebene: {{ HTMLElement("a") }}, {{ HTMLElement("em") }}, {{ HTMLElement("strong") }}, {{ HTMLElement("small") }}, {{ HTMLElement("cite") }}, {{ HTMLElement("q") }}, {{ HTMLElement("dfn") }}, {{ HTMLElement("abbr") }}, {{ HTMLElement("time") }}, {{ HTMLElement("code") }}, {{ HTMLElement("var") }}, {{ HTMLElement("samp") }}, {{ HTMLElement("kbd") }}, {{ HTMLElement("sub") }}, {{ HTMLElement("sup") }}, {{ HTMLElement("i") }}, {{ HTMLElement("mark") }}, {{ HTMLElement("ruby") }}, {{ HTMLElement("rp") }}, {{ HTMLElement("rt") }}, {{ HTMLElement("bdo") }}, {{ HTMLElement("span") }}, {{ HTMLElement("br") }}, {{ HTMLElement("wbr") }}.
- [Verwendung von \<b> und \<i> Elementen (W3C)](http://www.w3.org/International/questions/qa-b-and-i-tags.de.php)

{{HTMLRef}}
