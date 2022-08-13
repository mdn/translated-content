---
title: counter-increment
slug: Web/CSS/counter-increment
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Liste
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/counter-increment
---
{{CSSRef}}

## Übersicht

Die **`counter-increment`** [CSS](/de/docs/Web/CSS) Eigenschaft wird verwendet, um den Wert von [CSS Zählern](/de/docs/Web/CSS/CSS_Lists_and_Counters/CSS_Zähler_verwenden) um einen bestimmten Wert zu erhöhen. Der Wert des Zählers kann durch die {{cssxref("counter-reset")}} CSS Eigenschaft zurückgesetzt werden.

{{cssinfo}}

## Syntax

```css
/* Erhöht 'counter-name' um 1 */
counter-increment: counter-name;

/* Verringert 'counter-name' um 1 */
counter-increment: counter-name -1;

/* Erhöht 'counter1' um 1 und verringert 'counter2' um 4 */
counter-increment: counter1 counter2 -4;

/* Belässt die Zähler unverändert: wird verwendet, um weniger spezifische Werte zu verstecken */
counter-increment: none;

/* Globale Werte */
counter-increment: inherit;
counter-increment: initial;
counter-increment: unset;
```

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des Zählers, der erhöht bzw. verringert werden soll. Dieser Bezeichner besteht aus einer Kombination von den schreibungsunabhängigen Buchstaben `a` bis `z`, den Zahlen `0` bis `9`, Unterstrichen (`_`), und/oder Bindestrichen (`-`). Das erste Zeichen, das kein Bindestrich ist, muss ein Buchstabe sein (d. h. am Anfang darf keine Zahl stehen, auch nicht, wenn davor ein Bindestrich steht). Zudem sind zwei Bindestriche am Anfang des Bezeichners verboten. Er darf weder `none`, `unset`, `initial` oder `inherit` unabhängig von Groß- und Kleinschreibung sein.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, der dem Zähler hinzugefügt wird. Falls nicht angegeben, wird `1` verwendet.
- `none`
  - : Keiner der Zähler wird verändert. Dieser Wert wird als Standardwert verwendet oder um eine Erhöhung bzw. Verringerung in spezifischeren Regeln zurückzusetzen.

Es können beliebig viele Zähler erhöht bzw. verringert werden, jeder durch ein Leerzeichen getrennt.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
h1 {
  counter-increment: chapter section 2 page;
  /* Erhöht den Wert der 'chapter' und 'page' Zähler um 1
     und den 'section' Zähler um 2. */
}
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                           | Kommentar                |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------ |
| {{SpecName("CSS3 Lists", "#counter-increment", "counter-increment")}}                         | {{Spec2("CSS3 Lists")}} | Keine Änderung           |
| {{SpecName("CSS2.1", "generate.html#propdef-counter-increment", "counter-increment")}} | {{Spec2("CSS2.1")}}         | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.counter-increment")}}

## Siehe auch

- [CSS Zähler verwenden](/de/docs/Web/CSS/CSS_Lists_and_Counters/CSS_Zähler_verwenden)
- {{cssxref("counter-reset")}}
