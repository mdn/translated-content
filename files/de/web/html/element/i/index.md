---
title: <i>
slug: Web/HTML/Element/i
tags:
  - HTML
  - Textformatierung
  - semantisch
  - tag
translation_of: Web/HTML/Element/i
---
## Zusammenfassung

Das **HTML-Element `<i>` **hebt einen Teil vom Rest eines Textes ab um ein Beispiel, einen Fachbegriff, einen Ausdruck aus einer Fremdsprache oder die Gedanken einer fiktionalen Figur deutlicher vom Rest abzugrenzen. Das Element stellt diese Inhalte dann _kursiv_ dar.

| [I](/de/docs/Web/HTML/Content_categories)nhaltliche Kategorien | [Fließtexte](/de/docs/Web/HTML/Content_categories#Flow_content), [Ausdruckstext,](/de/docs/Web/HTML/Content_categories#Phrasing_content) greifbarer/offensichtlicher Inhalt    |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Zugelassener Inhalt                                            | [ausdrückender Inhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content/)                                                                                                 |
| Unterdrückte Tags                                              | {{no_tag_omission}}                                                                                                                                                       |
| Erlaubte elterliche Elemente                                   | Sämtliche Elemente mit [ausdrückendem Inhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content). (Textform!)                                                              |
| DOM-Schnittstelle                                              | {{domxref("HTMLElement")}} Seit Gecko 1.9.2 (Firefox 4) inklusive unterstützt Firefox die {{domxref("HTMLSpanElement")}}-Schnittstelle für dieses Element. |

## Attribute

Dieses Element unterstützt nur die [Globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiel

```html
<p>Der lateinische Ausdruck <i>Veni, vidi, vici</i> wird häufig in Musik, Kunst und Literatur verwendet.</p>
```

### Ergebnis

Der lateinische Ausdruck _Veni, vidi, vici_ wird häufig in Kunst, Musik und Literatur verwendet.

## Notizen

In früheren Versionen der HTML-Spezifikation war der `<i>`-Tag nur ein Element um den angezeigten Text zu formatieren, ähnlich wie der `<b>-T`ag für die Darstellung von fettem Text verwendet wird.

Diese Funktion wurde zunehmend unüblicher: Heute werden `<i>`-Tags häufiger für semantische Abgrenzungen als für Textformatierungen verwendet. Trotzdem stellen die Browser den Text kursiv dar, auch wenn diese Funktion per Definiton nicht mehr erwünscht ist.

Wir empfehlen, dieses Element nur zu verwenden, wenn kein anderes passenderes Element gefunden werden kann. Zum Beispiel:

- Benutzen Sie das Element {{HTMLElement("em")}}, um Betonungen darszustellen.
- Benutzen Sie das Element {{HTMLElement("strong")}}, um einen Textabschnitt als wichtig darzustellen.
- Benutzen Sie das Element {{HTMLElement("mark")}}, um Relevanz darzustellen.
- Um ein kreatives Werk (ein Buch, ein Bühnenwerk oder ein Musikstück) kennzuzeichnen, wird das Element "{{HTMLElement("cite")}}" verwendet.
- Verwenden Sie das Element {{HTMLElement("dfn")}}, um definierende Instanzen kennzuzeichnen.

Eine gute Idee ist es auch, das **class**-Attribut zu verwenden, um zu definieren, warum und wie das Element verwendet wird.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'present/graphics.html#h-15.2.1', '&lt;b&gt;')}}                 | {{Spec2('HTML4.01')}}     |           |

## Browserkompatibilität

{{Compat}}

{{HTMLRef}}
