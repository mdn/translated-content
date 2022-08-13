---
title: text-align
slug: Web/CSS/text-align
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Text
  - Referenz
translation_of: Web/CSS/text-align
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`text-align`** egt die horizontale Ausrichtung eines Blockelements oder eines Tabellenzellenrahmens fest. Dies bedeutet, dass sie wie {{cssxref("vertical-align")}} funktioniert, jedoch in horizontaler Richtung.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## Syntax

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Character-based alignment in a table column */
text-align: ".";
text-align: "." center;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

Die Eigenschaft `text-align` wird auf eine der folgenden Arten angegeben:

- Mit den Schlüsselwortwerten [`start`](/de/docs/Web/CSS/text-align$edit#start), [`end`](/de/docs/Web/CSS/text-align$edit#end), [`left`](/de/docs/Web/CSS/text-align$edit#left), [`right`](/de/docs/Web/CSS/text-align$edit#right), [`center`](/de/docs/Web/CSS/text-align$edit#center), [`justify`](/de/docs/Web/CSS/text-align$edit#justify), [`justify-all`](/de/docs/Web/CSS/text-align$edit#justify-all), or [`match-parent`](/de/docs/Web/CSS/text-align$edit#match-parent).
- Nur mit einem [`<string>`](/de/docs/Web/CSS/text-align$edit#string) Wert, wobei in diesem Fall der andere Wert standardmäßig auf [`right`](/de/docs/Web/CSS/text-align$edit#right) gesetzt wird.
- Die Verwendung sowohl eines Schlüsselwortwerts als auch eines [`<string>`](/de/docs/Web/CSS/text-align$edit#string) Wertes.

### Werte

- `start` {{experimental_inline}}
  - : Dasselbe wie `left`, falls {{cssxref("direction")}} `ltr` ist und `right`, falls `direction` `rtl` ist.
- `end` {{experimental_inline}}
  - : Dasselbe wie `right`, falls {{cssxref("direction")}} `ltr` ist und `left`, falls `direction` `rtl` ist.
- `left`
  - : Die Inlineinhalte werden am linken Rand (linksbündig) der Zeilenbox ausgerichtet.
- `right`
  - : Die Inlineinhalte werden am rechten Rand (rechtsbündig) der Zeilenbox ausgerichtet.
- `center`
  - : Die Inlineinhalte werden innerhalb der Zeilenbox zentriert.
- `justify`
  - : Der Text wird im Blocksatz angeordnet. Text sollte seinen linken und rechten Rand bündig am linken und rechten Rand des Absatzinhalts ausrichten.
- `justify-all` {{experimental_inline}}
  - : Dasselbe wie `justify`, erzwingt jedoch, dass die letzte Zeile ebenfalls im Blocksatz angeordnet wird.
- `match-parent` {{experimental_inline}}
  - : Ähnlich zu `inherit` mit dem Unterschied, dass die Werte `start` und `end` in Bezug auf die {{cssxref("direction")}} des Elternelements berechnet werden und durch den passenden `left` oder `right` Wert ersetzt werden.
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : Gibt bei Anwendung auf eine Tabellenzelle das Zeichen an, um das der Inhalt der Zelle ausgerichtet wird.

## Bedenken zur Zugänglichkeit

Der inkonsistente Abstand zwischen den Wörtern, der durch einen gerechtfertigten Text entsteht, kann für Menschen mit kognitiven Problemen wie Legasthenie problematisch sein.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Linksbündig

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: left;
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample("Left_alignment","100%","100%")}}

### Zentriert

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample("Centered_text","100%","100%")}}

### Blocksatz

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius.
  Suspendisse in libero risus, in interdum massa.
  Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### Ergebnis

{{EmbedLiveSample("Justify","100%","100%")}}

### Hinweis

Der Standard-kompatible Weg, einen Block selbst zu zentrieren, ohne seinen Inline-Inhalt zu zentrieren, ist z.B. das Setzen der linken und rechten {{cssxref("margin")}} auf `auto`, z.B..:

```css
.something {
  margin: auto;
}
```

```css
.something {
  margin: 0 auto;
}
```

```css
.something {
  margin-left: auto;
  margin-right: auto;
}
```

## Spezifikationen

| Spezifikation                                                                            | Status                                           | Kommentar                                                                                                           |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#text-align', 'text-align')}} | {{Spec2('CSS Logical Properties')}} | Keine Änderungen                                                                                                    |
| {{SpecName('CSS4 Text', '#alignment', 'text-align')}}                 | {{Spec2('CSS4 Text')}}                     | Fügt den Wert `<string>` hinzu.                                                                                     |
| {{SpecName('CSS3 Text', '#text-align-property', 'text-align')}}     | {{Spec2('CSS3 Text')}}                     | Fügt die `start`, `end` und `match-parent` Werte hinzu. Ändert den unbenannten Initialwert zu `start` (der er war). |
| {{SpecName('CSS2.1', 'text.html#alignment-prop', 'text-align')}}     | {{Spec2('CSS2.1')}}                         | Keine Änderungen                                                                                                    |
| {{SpecName('CSS1', '#text-align', 'text-align')}}                         | {{Spec2('CSS1')}}                         | Ursprüngliche Definition                                                                                            |

## Browser Kompatibilität

{{Compat("css.properties.text-align")}}

## Siehe auch

- {{cssxref("margin", "margin:auto")}}, {{cssxref("margin-left", "margin-left:auto")}}, {{cssxref("vertical-align")}}
