---
title: calc
slug: Web/CSS/calc
tags:
  - CSS
  - CSS Funktion
  - Referenz
translation_of: Web/CSS/calc()
original_slug: Web/CSS/calc()
---
{{CSSRef}}

## Übersicht

Mit der CSS-Funktion calc() lassen sich Werte für CSS-Eigenschaften berechnen.

calc() kann überall verwendet werden, wo {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;number&gt;")}} und {{cssxref("&lt;integer&gt;")}} eingesetzt werden dürfen.

## Syntax

{{csssyntax}}

    /* Eigenschaft: calc(Ausdruck) */
    width: calc(100% - 80px);

### Werte

- Ausdruck
  - : Ein mathematischer Ausdruck, dessen Ergebnis als Wert verwendet wird.

### Ausdrücke

Der Ausdruck kann eine beliebige Kombination der folgenden Operatoren sein:

- **+**
  - : Addition.
- **-**
  - : Subtraktion.
- **\***
  - : Multiplikation (muss mindestens eine {{cssxref("&lt;number&gt;")}} enthalten).
- **/**
  - : Division (Divisor muss eine {{cssxref("&lt;number&gt;")}} sein).

Bei den Operanden darf es sich um jeden Wert vom Typ {{cssxref("&lt;length&gt;")}} handeln, insbesondere können auch verschiedene Einheiten miteinander verrechnet werden.
Das Setzen von Klammern ist ebenfalls möglich.

`calc()`-Funktionen können ineinander verschachtelt werden.

> **Note:** **Hinweis:** Die Operatoren + und - erfordern zwingend ein Leerzeichen zwischen dem Operator und den Werten. Zum Beispiel würde `calc(50% -8px)` als Prozentwert, gefolgt von einer negativen Pixel-Länge interpretiert. Eine korrekte Subtraktion ergibt sich nur mit einem Leerzeichen zwischen - und 8px: `calc(50% - 8px)`
> Bei einer Multiplikation oder Division spielen Leerzeichen keine Rolle, sind aber der Lesbarkeit wegen empfohlen.

> **Note:** Berechnungen für die Breite oder Höhe von Tabellenspalten und -spaltengruppen sowie Tabellenzeilen und -zeilengruppen, sowie Tabellenzellen _können_ vom Browser als Wert `auto` behandelt werden. Dies gilt für Tabellen mit dem Typ auto oder fixed.

## Beispiele

### Relative Größe eines Objekts mit einer absoluten Positionierung

Mit `calc()` ist es kein Problem mehr, die Maße eines Objekts in Abhängigkeit anderer Maße festzulegen.

In diesem Beispiel wurde ein Banner erstellt, das die gesamte verfügbare Breite einnehmen, dabei jedoch auf beiden Seiten einen Abstand einnehmen soll, der exakt 40 Pixeln beträgt.

Links ist die Position mit `left: 40px` definiert. Mit `calc(100% - 80px)` werden von der Gesamtbreite 80 Pixel abgezogen (2 \* 40 Pixel), so verbleibt am rechten Rand ein Abstand von ebenfalls exakt 40 Pixeln.

```css
.banner {
  position: absolute;
  left: 40px;
  width: 90%;               /* fallback for browsers without support for calc() */
  width: calc(100% - 80px);
}
```

```html
<div class="banner">This is a banner!</div>
```

{{ EmbedLiveSample('Relative_Gr%C3%B6sse_eines_Objekts_mit_einer_absoluten_Positionierung', '100%', '60') }}

## Spezifikation

| Spezifikation                                                            | Status                           | Anmerkung |
| ------------------------------------------------------------------------ | -------------------------------- | --------- |
| {{SpecName('CSS3 Values', '#calc-notation', 'calc()')}} | {{Spec2('CSS3 Values')}} |           |

## Browserkompatibilität

{{Compat("css.types.calc")}}

## Siehe auch

- [Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2010/06/css3-calc/ "Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog")
