---
title: counter-reset
slug: Web/CSS/counter-reset
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Liste
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/counter-reset
---
{{CSSRef}}

## Übersicht

Die `counter-reset` [CSS](/de/docs/Web/CSS "CSS") Eigenschaft wird verwendet, um [CSS Zähler](/de/docs/Web/CSS/CSS_Lists_and_Counters/CSS_Zähler_verwenden "CSS_Counters") auf einen bestimmten Wert zurückzusetzen.

{{cssinfo}}

## Syntax

```css
/* Setzt 'counter-name' auf 0 */
counter-reset: counter-name;

/* Setzt 'counter-name' auf -1 */
counter-reset: counter-name -1;

/* Setzt 'counter1' auf 1 und 'counter2' auf 4 */
counter-reset: counter1 1 counter2 4;

/* Bricht alle Rücksetzungen ab, die in weniger spezifischen Regeln gesetzt würden */
counter-reset: none;

/* Globale Werte */
counter-reset: inherit;
counter-reset: initial;
counter-reset: unset;
```

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des Zählers, der zurückgesetzt werden soll. Dieser Bezeichner besteht aus einer Kombination von den schreibungsunabhängigen Buchstaben `a` bis `z`, den Zahlen `0` bis `9`, Unterstrichen (`_`), und/oder Bindestrichen (`-`). Das erste Zeichen, das kein Bindestrich ist, muss ein Buchstabe sein (d. h. am Anfang darf keine Zahl stehen, auch nicht, wenn davor ein Bindestrich steht). Zudem sind zwei Bindestriche am Anfang des Bezeichners verboten. Er darf weder `none`, `unset`, `initial` oder `inherit` unabhängig von Groß- und Kleinschreibung sein.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Vorkommen des Elements zurückgesetzt werden soll. Falls nicht angegeben, wird `0` verwendet.
- `none`
  - : Ist ein Schlüsselwort, das angibt, dass keiner der Zähler zurückgesetzt wird. Es kann dazu verwendet werden, um `counter-reset` Werte zu verstecken, die in weniger spezifischen Regeln definiert wurden.

Es können beliebig viele Zähler zurückgesetzt werden, jeder durch ein Leerzeichen getrennt.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
h1 {
  counter-reset: chapter section 1 page;
  /* Setzt den 'chapter' und 'page' Zähler auf 0
     und den 'section' Zähler auf 1. */
}
```

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Anmerkung                |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName('CSS3 Lists', '#counter-reset', 'counter-reset')}}                         | {{Spec2('CSS3 Lists')}} | Keine Änderung           |
| {{SpecName('CSS2.1', 'generate.html#propdef-counter-reset', 'counter-reset')}} | {{Spec2('CSS2.1')}}         | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.counter-reset")}}

## Siehe auch

- [CSS Zähler](/de/docs/Web/CSS/CSS_Lists_and_Counters/CSS_Zähler_verwenden "CSS Counters")
- {{Cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
