---
title: columns
slug: Web/CSS/columns
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspalten Layout
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/columns
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS "CSS") Eigenschaft **`columns`** ist eine Kurzform Eigenschaft, die es erlaubt, sowohl die {{ cssxref('column-width') }} als auch die {{ cssxref("column-count") }} Eigenschaft auf einmal zu setzen.

{{EmbedInteractiveExample("pages/css/columns.html")}}

## Syntax

```css
/* Column width */
columns: 18em;

/* Column count */
columns: auto;
columns: 2;

/* Both column width and count */
columns: 2 auto;
columns: auto 12em;
columns: auto auto;

/* Global values */
columns: inherit;
columns: initial;
columns: unset;
```

Die Eigenschaft `columns` kann mit einem oder mit zwei von den unten aufgelisteten Werten in beliebiger Reihenfolge spezifiziert.

### Werte

- `<column-width>`
  - : The ideal column width, defined as a {{cssxref("&lt;length&gt;")}} or the keyword `auto`. The actual width may be wider or narrower to fit the available space. See {{cssxref("column-width")}}.
- `<column-count>`
  - : The ideal number of columns into which the element's content should be flowed, defined as an {{cssxref("&lt;integer&gt;")}} or the keyword `auto`. If neither this value nor the column's width are `auto`, it merely indicates the maximum allowable number of columns. See {{cssxref("column-count")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiel

### Sets drei gleiche Spalten

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns
  using the CSS `columns` property. The text
  is equally distributed over the columns.
</p>
```

#### CSS

```css
.content-box {
  columns: 3 auto;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_three_equal_columns', 'auto', 120)}}

## Spezifikation

| Spezifikation                                                            | Status                               | Kommentar                |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Multicol', '#columns', 'columns') }} | {{ Spec2('CSS3 Multicol') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.columns")}}

## Siehe auch

- {{cssxref("widows")}}
- {{cssxref("orphans")}}
- [Seitennummerierte Medien](/de/docs/Web/CSS/Paged_Media)
