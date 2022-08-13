---
title: '@-Regel'
slug: Web/CSS/At-rule
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/At-rule
---
{{cssref}}

Eine **@-Regel** ist ein [CSS Statement](/de/docs/Web/CSS/Syntax#CSS_Statements), das mit einem At-Zeichen beginnt, '`@`' (`U+0040 COMMERCIAL AT`), gefolgt von einem Bezeichner und das beim ersten Semikolon, '`;`' (`U+003B SEMICOLON`), außerhalb eines [CSS Blocks](/de/docs/Web/CSS/Syntax#CSS_Deklarationsblöcke) endet oder am Ende des ersten Blocks.

Es gibt verschiedene @-Regeln, bestimmt durch deren Bezeichner, jede mit einer unterschiedlichen Syntax:

- {{cssxref("@charset")}} — Definiert den Zeichensatz, der vom Stylesheet verwendet wird.
- {{cssxref("@import")}} — Teilt der CSS Engine mit, ein externes Stylesheet einzubinden.
- {{cssxref("@namespace")}} — Teilt der CSS Engine mit, dass sie alle Inhalte mit einem XML Namespace als Präfix betrachten soll.
- **_Verschachtelte @-Regeln_** — Eine Untermenge an verschachtelten Statements, welche als Statement eines Stylesheets als auch innerhalb von bedingten Gruppenregeln verwendet werden können:

  - {{cssxref("@media")}} — Eine bedingte Gruppenregel, die ihren Inhalt anwendet, falls das Gerät die Kriterien der Bedingung erfüllt, die durch eine _Media Query_ definiert wird.
  - {{cssxref("@supports")}} {{experimental_inline}} — Eine bedingte Gruppenregel, die ihren Inhalt anwendet, falls der Browser die Kriterien der angegebenen Bedingung erfüllt.
  - {{cssxref("@document")}} {{experimental_inline}} — Eine bedingte Gruppenregel, die ihren Inhalt anwendet, falls das Dokument, auf das das Stylesheet angewendet wird, die Kriterien der angegebenen Bedingung erfüllt. _(verschoben nach Level 4 der CSS Spezifikation)_
  - {{cssxref("@page")}} — Beschreibt den Aspekt von Layoutänderungen, welche angewendet werden, wenn das Dokument gedruckt wird.
  - {{cssxref("@font-face")}} — Beschreibt den Aspekt einer externen Schrift, die heruntergeladen werden soll.
  - {{cssxref("@keyframes")}} {{experimental_inline}} — Beschreibt den Aspekt von Zwischenschritten in einer CSS Animationssequenz.
  - {{cssxref("@viewport")}} {{experimental_inline}} — Beschreibt die Aspekte des Viewports auf Geräten mit kleinem Bildschirm. _(aktuell im Arbeitsentwurfsstadium)_

## Bedingte Gruppenregeln

Ähnlich wie die Werte von Eigenschaften hat jede @-Regel eine andere Syntax. Trotzdem können einige von ihnen zu einer speziellen Kategorie zusammengefasst werden, **bedingte Gruppenregeln** genannt. Diese Statements teilen sich eine gemeinsame Syntax und jedes von ihnen kann _verschachtelte Statements_ — entweder _Regelsets_ oder _verschachtelte @-Regeln_ — beinhalten. Darüber hinaus vermitteln sie alle die gleiche semantische Bedeutung — sie alle verbindet eine Art Bedingung, welche immer entweder **true** oder **false** ergibt. Falls die Bedingung **true** ergibt, werden alle Statements innerhalb der Gruppe angewandt.

Bedingte Gruppenregeln werden in [CSS Conditionals Level 3](https://drafts.csswg.org/css-conditional-3/) definiert und sind:

- {{cssxref("@media")}},
- {{cssxref("@supports")}},
- {{cssxref("@document")}}. _(verschoben nach Level 4 der Spezifikation)_

Da jede bedingte Gruppe auch verschachtelte Statements beinhalten kann, kann es eine undefinierte Anzahl von Verschachtelungen geben.

## Spezifikationen

| Spezifikation                                | Status                                   | Kommentar                |
| -------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Conditional')}} | {{Spec2('CSS3 Conditional')}} | Ursprüngliche Definition |
