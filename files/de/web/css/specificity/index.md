---
title: Spezifität
slug: Web/CSS/Specificity
tags:
  - Beispiel
  - CSS
  - Guide
  - Web
translation_of: Web/CSS/Specificity
original_slug: Web/CSS/Spezifität
---
{{cssref}}

## Das Konzept

Spezifität ist das Mittel, mit dem ein Browser bestimmt, welche Eigenschaftswerte die relevantesten für ein Element sind und zugewiesen werden. Spezifität basiert ausschließlich auf den Matchingregeln, welche durch die verschiedenen [Selektoren](/de/docs/Web/CSS/CSS_Referenz#Selektoren) gebildet werden.

## Berechnung

Die Spezifität wird durch die Verkettung der Anzahl jedes Selektortyps berechnet. Sie entspricht **keiner** Gewichtung, die dem passenden Ausdruck zugewiesen wird.

Im Falle einer Spezifitätsgleichheit wird die letzte im CSS gefundene Deklaration auf das Element angewandt.

{{ Note("Die Nähe von Elementen in einem Dokumentenbaum zueinander hat keine Auswirkung auf die Spezifität.") }}

### Reihenfolge der Spezifität

Die folgende Selektorenliste ist nach aufsteigender Spezifität sortiert:

- Universelle Selektoren
- Typselektoren
- Klassenselektoren
- Attributselektoren
- Pseudoklassen
- ID-Selektoren
- Inlinestile

### Die `!important` Ausnahme

Wenn eine `!important` Regel auf eine Stildeklaration angewendet wird, überschreibt diese Deklaration alle anderen Deklarationen des CSS, unabhängig davon, wo sie in der Deklarationsliste steht. Jedoch hat `!important` nichts mit Spezifität zu tun. Es wird davon **abgeraten**, `!important`zu verwenden, da es das Debuggen erschwert, weil die normale _Kaskadierung_ der Stylesheets dadurch unterbrochen wird.

**Einige allgemeine Regeln:**

- **Niemals** `!important` in CSS verwenden, das auf der gesamten Seite Verwendung findet.
- `!important` **nur** in Seiten spezifischem CSS verwenden, das seitenweites oder fremdes CSS (wie beispielsweise von ExtJS oder YUI) überschreibt.
- **Niemals** !important verwenden, wenn ein Plugin/Mashup geschrieben wird.
- **Immer** nach einem Weg suchen, Spezifität zu verwenden, bevor `!important` in Erwägung gezogen wird.

**Anstatt `!important` zu verwenden kann folgendes getan werden:**

1. Besseren Gebrauch der CSS Kaskadierungseigenschaften machen.
2. Spezifischere Regeln verwenden. Eines oder mehrere Elemente vor dem Element anzugeben, das selektiert werden soll, ist spezifischer und erhält eine höhere Priorität:

    ```html
    <div id="test">
      <span>Text</span>
    </div>
    ```

    ```css
    div#test span { color: green; }
    span { color: red; }
    div span { color: blue; }
    ```

Unabhängig von der Reihenfolge, in der der Text steht, wird der Text grün dargestellt, da die Regel spezifischer ist. (Des weiteren überschreibt die Regel für blau die Regel für rot unabhängig von deren Reihenfolge.)

**!Important sollte in folgenden Fällen verwendet werden:**

A) Erstes Szenario

1. Eine globale CSS Datei wird verwendet, die die visuellen Aspekte der Seite global setzt.
2. Es werden Inline Styles in Elementen verwendet, wovon grundsätzlich abgeraten wird.

In diesem Fall sollten bestimmte Stile in der globalen CSS Datei als !important deklariert werden, was Inline Styles überschreibt.

B) Weiteres Szenario

    #someElement p {
      color: blue;
    }

    p.awesome {
      color: red;
    }

Ohne `!important` hat die erste Regel eine höhere Spezifität und hat damit Vorrang vor der zweiten Regel. Somit werden alle `awesome` Absätze blau dargestellt.

**Wie `!important` überschrieben werden kann**

Eine Eigenschaft, die mit !important gekennzeichnet ist, kann durch eine weitere !important Eigenschaft überschrieben werden. Hierbei muss jedoch die zweite Eigenschaft entweder eine höhere Spezifität besitzen (indem im Selektor ein zusätzlicher Tag, eine ID oder Klasse angegeben wird) oder eine CSS Regel mit dem gleichen Selektor muss weiter unten als die existierende platziert werden.

Einige Beispiele mit höherer Spezifität:

    table td    {height: 50px !important;}
    .myTable td {height: 50px !important;}
    #myTable td {height: 50px !important;}

Beispiel für gleichen Selektor nach dem existierenden:

    td {height: 50px !important;}

### Die `:not` Ausnahme

Die Negations-Pseudoklasse `:not` wird nicht als Pseudoklasse in der Spezifitätsberechnung berücksichtigt. Jedoch werden Selektoren innerhalb der Negations-Pseudoklasse als normale Selektoren behandelt.

Beispiel CSS:

```css
div.outer p {
  color:orange;
}
div:not(.outer) p {
  color: lime;
}
```

Angewendet auf folgendes HTML:

```html
<div class="outer">
  <p>Dies ist im äußeren div.</p>
  <div class="inner">
    <p>Dieser Text ist innerhalb des inneren divs.</p>
  </div>
</div>
```

Ergibt:

{{ EmbedLiveSample('Beispiel_not','600','100') }}

### Formbasierte Spezifität

Spezifität basiert auf der Form eines Selektors. Im folgenden Fall zählt der Selektor als ein Attribut im Algorithmus zur Bestimmung der Spezifität, obwohl er eine ID selektiert.

CSS:

```css
* #foo {
  color: green;
}
*[id="foo"] {
  color: purple;
}
```

Angewendet auf folgendes HTML:

```html
<p id="foo">I am a sample text.</p>
```

Ergibt:

{{ EmbedLiveSample('Beispiel_formbasierte_Spezifitaet','600','100') }}

Da das gleiche Element selektiert wird, der ID-Selektor jedoch eine höhere Spezifität aufweist.

### Nichtbeachtung der Position innerhalb des Baumes

CSS:

```css
body h1 {
  color: green;
}
html h1 {
  color: purple;
}
```

Angewendet auf folgendes HTML:

```html
<html>
  <body>
    <h1>Here is a title!</h1>
  </body>
</html>
```

Ergibt:

{{ EmbedLiveSample('Beispiel_Nichtbeachtung_Baumposition','600','100') }}

## Siehe auch

- CSS3 Selektoren Spezifität - <http://www.w3.org/TR/selectors/#specificity>
- CSS Schlüsselkonzepte:
  [CSS Syntax](/de/docs/Web/CSS/Syntax "Syntax"),
  [Spezifität](/de/docs/Web/CSS/Spezifität "Spezifität") und
  [Vererbung](/de/docs/Web/CSS/Vererbung "Vererbung"),
  das [Boxmodell](/de/docs/Web/CSS/Boxmodell "Boxmodell"),
  [Layoutmodi](/de/docs/Web/CSS/Layoutmodi "CSS Layoutmodi") und
  [visuelle Formatierungsmodelle](/de/docs/Web/Guide/CSS/Visuelles_Formatierungsmodell "Visuelles Formatierungsmodell")
  und [Abstandzusammenfallen](/de/docs/Web/CSS/Boxmodell/Abstandzusammenfallen_meistern "Abstandzusammenfallen"),
  or the [initiale](/de/docs/Web/CSS/Initialwert "Initialwert"),
  [berechnete](/de/docs/Web/CSS/berechneter_Wert "berechneter Wert"),
  [verwendete](/de/docs/Web/CSS/verwendeter_Wert "verwendeter Wert")
  and [tatsächliche](/de/docs/Web/CSS/tatsächlicher_Wert "tatsächlicher Wert") Werte.
  Definitions of [Wertsyntax](/de/docs/Web/CSS/Wertdefinitionssyntax "Wertdefinitionssyntax"),
  [Kurzschreibweiseeigenschaften](/de/docs/Web/CSS/Kurzschreibweiseeigenschaften "Kurzschreibweiseeigenschaften")
  and [ersetzte Elemente](/de/docs/Web/CSS/ersetztes_Element "Ersetztes Element").
