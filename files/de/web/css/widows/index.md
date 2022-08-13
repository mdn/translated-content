---
title: widows
slug: Web/CSS/widows
tags:
  - CSS
  - CSS Eigenschaft
  - CSS3
  - Layout
  - Referenz
  - Web
  - mehrspaltiges Layout
  - print
translation_of: Web/CSS/widows
---
{{CSSRef}}

Die [CSS](/de/docs/CSS)-Eigenschaft **`widows`** legt die Mindestanzahl von Zeilen in einem Blockcontainer fest, die _oben_ auf einer [Seite](/de/docs/Web/CSS/Paged_Media), einem Bereich oder einer [Spalte](/de/docs/Web/CSS/CSS_Columns) angezeigt werden müssen.

```css
/* <integer> values */
widows: 2;
widows: 3;

/* Global values */
widows: inherit;
widows: initial;
widows: unset;
```

> **Note:** **Hinweis**: In der Typografie ist ein _Hurenkind_ die letzte Zeile eines Absatzes, die allein oben auf einer Seite angezeigt wird (der Absatz wird von einer vorherigen Seite fortgesetzt).

## Syntax

### Werte

- {{cssxref("&lt;integer&gt;")}}
  - : Die Mindestanzahl von Zeilen, die nach einem Fragmentierungsbruch ganz oben an einem neuen Fragment bleiben können. Der Wert muss positiv sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiel

### Spalten kontrollierendes widows

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>This is the second paragraph containing some more text than the first one. It is used to demonstrate how widows work.</p>
  <p>This is the third paragraph. It has a little bit more text than the first one.</p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample("Controlling_column_widows", 400, 160)}}

## Spezifikationen

| Specification                                                                        | Status                                   | Comment                                                                                                                |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Fragmentation', '#widows-orphans', 'widows')}} | {{Spec2('CSS3 Fragmentation')}} | Erweitert `widows`, die auf alle Fragmenttypen angewendet werden können, einschließlich Seiten, Regionen oder Spalten. |
| {{SpecName('CSS3 Multicol', '#filling-columns', 'widows')}}     | {{Spec2('CSS3 Multicol')}}     | Empfehlungen zur Berücksichtigung von `widows` in Bezug auf Spalten.                                                   |
| {{SpecName('CSS2.1', 'page.html#break-inside', 'widows')}}         | {{Spec2('CSS2.1')}}                 | Initiale Definition.                                                                                                   |

## Browserkompatibilität

{{Compat("css.properties.widows")}}

## Siehe auch

- {{cssxref("orphans")}}
- [Seitennummerierte Medien](/de/docs/Web/CSS/Paged_Media)
