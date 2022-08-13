---
title: h1-h6
slug: Web/HTML/Element/Heading_Elements
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/Heading_Elements
original_slug: Web/HTML/Element/h1-h6
---
### Übersicht

Die **Überschriftenelemente** bestehen aus sechs verschiedenen Leveln. `<h1>` ist die Überschrift mit der höchsten Gewichtung und `<h6>` mit der kleinsten. Ein Überschriften-Element beschreibt das Thema des Bereiches, welcher der Überschrift folgt. Überschriften können auch verwendet werden, um ein Inhaltsverzeichnis für ein Dokument automatisch zu erstellen.

- Element Typ: [block-level](/de/HTML/Block-level_Elemente "de/HTML/Block-level_Elemente")
- Erlaubter Inhalt: [inline](/de/HTML/Inline_Elemente "de/HTML/Inline_Elemente")

### Beispiel

#### Alle Überschriften

      <h1>Überschrift Level 1</h1>
      <h2>Überschrift Level 2</h2>
      <h3>Überschrift Level 3</h3>
      <h4>Überschrift Level 4</h4>
      <h5>Überschrift Level 5</h5>
      <h6>Überschrift Level 6</h6>

Dieses HTML gibt das Folgende aus:

![Image:HTML-headers2.png](/@api/deki/files/245/=HTML-headers2.png)

#### Beispielseite

      <h1>Heading elements</h1>

        <h2>Summary</h2>
        <p>Some text here...</p>

        <h2>Examples</h2>
          <h3>Example 1</h3>
          <p>Some text here...</p>

          <h3>Example 2</h3>
          <p>Some text here...</p>

        <h2>See also</h2>
        <p>Some text here...</p>

Dieses HTML gibt das Folgende aus:

![Image:HTML-headers1.png](/@api/deki/files/244/=HTML-headers1.png)

### Hinweise

Es sollte kein tieferes Überschriftenlevel verwendet werden, um die Schriftgröße zu vermindern. Stattdessen sollte die Größe über die [CSS](/de/CSS "de/CSS") [font-size](/de/CSS/font-size "de/CSS/font-size") Eigenschaft festgelegt werden.

Es sollte vermieden werden Überschriftenlevel zu überspringen. Es sollte immer von `<h1> ausgegangen werden`, danach `<h2>` und so weiter. Außerdem sollte versucht werden nur eine Überschrift des ersten Levels in einem Dokument zu benutzen.

Die Gruppierung von Überschriften und Inhalte kann über [`<div>`](/de/HTML/Element/div "de/HTML/Element/div") Element realisiert werden.

### Siehe auch

- [HTML Paragraph Element](/de/HTML/Element/p "de/HTML/Element/p")
- [HTML Division Element](/de/HTML/Element/div "de/HTML/Element/div")

{{HTMLRef}}
