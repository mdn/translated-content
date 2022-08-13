---
title: Block-Level Elemente
slug: Web/HTML/Block-level_elements
tags:
  - Anfänger
  - Beginner
  - Elemente
  - Guide
  - HTML
  - HTML Elemente
  - Referenzen
  - Web Programmierung
translation_of: Web/HTML/Block-level_elements
original_slug: Web/HTML/Block-level_elemente
---
Block- und [Inline-Elemente](/de/docs/Web/HTML/Inline_elemente "/en-US/docs/HTML/inline_elements") sind die zwei ursprünglichen Kategorien der darstellenden HTML-Elemente.

Block-Elemente nehmen typischerweise die gesamte verfügbare Breite ihres Elternelements ein und grenzen ihren Inhalt vertikal durch je einen Zeilenumbruch gegenüber den vor- und nachfolgenden Elementen ab. Auf diese Weise erzeugen sie den rechteckigen Block, der ihnen den Namen gibt.

Block-Elemente stellen inhaltlich einen zusammenhängenden Bereich dar und geben ihm eine semantische Bedeutung. Prominentes Beispiel für ein Block-Element ist {{ HTMLElement("p") }}, das einen Textabsatz (Englisch: paragraph) umfasst und mit Abständen darüber und darunter von anderen Bereichen des Dokuments trennt.
Einzige Ausnahme ist von dieser Regel ist {{ HTMLElement("div") }}; dieses hat keine semantische Bedeutung und dient lediglich dem Zugriff auf den betreffenden Bereich mittels CSS oder Javascript.

Gemeinhin können Block-Elemente Inline- und meist auch weitere Block-Elemente enthalten. Dieser strukturellen Unterscheidung liegt die Idee zugrunde, dass auf Block-Ebene größere Strukturen definiert werden als auf Inline-Ebene.
Die höchste Ebene für Block-Elemente selbst ist das Element {{ HTMLElement("body") }}.

Die einfache Unterscheidung zwischen Block- und Inline-Ebene wird in HTML-Spezifikationen bis einschließlich Version 4.01 verwendet. In HTML 5 wird diese Zweiteilung zu einem komplexeren Satz von [Inhaltskategorien](/de/docs/HTML/Content_categories) ergänzt. Hierbei entspricht die Block-Ebene in HTML 5 grob der Kategorie [fließender Inhalte](/de/docs/HTML/Content_categories#Flow_content), während die Inline-Ebene der Kategorie [gestaltender Inhalte](/de/docs/HTML/Content_categories#Phrasing_content) gleichkommt. Darüber hinaus existieren weitere Kategorien.

## Elemente

Die nachfolgende Liste zeigt eine komplette Übersicht aller HTML-Block-Elemente (die neuen HTML-5-Elemente sind technisch gesehen nicht als Block-Elemente definiert).

- {{ HTMLElement("address") }}
  - : Kontaktinformation.
- {{ HTMLElement("article") }} {{ HTMLVersionInline(5) }}
  - : Inhalt eines Artikels.
- {{ HTMLElement("aside") }} {{ HTMLVersionInline(5) }}
  - : Anmerkungen.
- {{ HTMLElement("audio") }} {{ HTMLVersionInline(5) }}
  - : Audio-Wiedergabe.
- {{ HTMLElement("video") }} {{ HTMLVersionInline(5) }}
  - : Video-Wiedergabe.
- {{ HTMLElement("blockquote") }}
  - : Zitat in Form eines eigenständigen Absatzes.
- {{ HTMLElement("canvas") }} {{ HTMLVersionInline(5) }}
  - : Bereich zum Zeichnen und Malen.
- {{ HTMLElement("dd") }}
  - : Definition, Beschreibung.
- {{ HTMLElement("div") }}
  - : Allgemeine Unterteilung ohne semantische Aussage.

- {{ HTMLElement("dl") }}

  - : Definitionsliste.

- {{ HTMLElement("fieldset") }}
  - : Gruppe von Elementen im Formular oder Reiter im Dialog.
- {{ HTMLElement("figcaption") }} {{ HTMLVersionInline(5) }}
  - : Beschreibung einer Grafik.
- {{ HTMLElement("figure") }} {{ HTMLVersionInline(5) }}
  - : Grafik mit Beschreibung (siehe {{ HTMLElement("figcaption") }}).
- {{ HTMLElement("footer") }} {{ HTMLVersionInline(5) }}
  - : Fußbereich.
- {{ HTMLElement("form") }}
  - : Eingabeformular.
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : Überschriften in Abstufung 1 bis 6.
- {{ HTMLElement("header") }} {{ HTMLVersionInline(5) }}
  - : Kopfbereich.
- {{ HTMLElement("hgroup") }} {{ HTMLVersionInline(5) }}
  - : Gruppe mehrerer Überschriften.
- {{ HTMLElement("hr") }}

  - : Horizontrale Trennlinie.

- {{ HTMLElement("noscript") }}
  - : Ersatzinhalt, falls JavaScript deaktiviert ist.
- {{ HTMLElement("ol") }}
  - : Geordnete Liste.
- {{ HTMLElement("output") }} {{ HTMLVersionInline(5) }}
  - : Dynamisch erzeugte Ausgaben.
- {{ HTMLElement("p") }}
  - : Textabsatz.
- {{ HTMLElement("pre") }}
  - : Vorformatierter Text.
- {{ HTMLElement("section") }} {{ HTMLVersionInline(5) }}
  - : Abschnitt einer Seite.
- {{ HTMLElement("table") }}
  - : Tabelle.
- {{ HTMLElement("tfoot") }}
  - : Fußbereich der Tabelle.
- {{ HTMLElement("ul") }}
  - : Ungeordnete Liste.

###

## Siehe auch

- [Inline-Elemente](/de/docs/Web/HTML/Inline_elemente "en/HTML/Inline_elements")
