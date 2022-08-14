---
title: border-spacing
slug: Web/CSS/border-spacing
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Referenz
  - CSS Tabellen
  - Referenz
translation_of: Web/CSS/border-spacing
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`border-spacing`** legt die Abstände zwischen Tabellenzellen fest.
Die Eigenschaft hat nur dann Auswirkungen, wenn [`border-collapse: separate`](/de/CSS/border-collapse "de/CSS/border-collapse") definiert ist.

{{EmbedInteractiveExample("pages/css/border-spacing.html")}}

Der Wert für `border-spacing `wird auch entlang der Außenkante der Tabelle verwendet, wobei der Abstand zwischen dem Rand der Tabelle und den Zellen in der ersten/letzten Spalte oder Zeile die Summe des relevanten Randabstands (horizontalen oder vertikalen) `border-spacing` und des relevanten (oben, rechts, unten oder links) {{cssxref("padding")}} in der Tabelle ist.

value is also used along the outside edge of the table, where the distance between the table's border and the cells in the first/last column or row is the sum of the relevant (horizontal or vertical) `border-spacing` and the relevant (top, right, bottom, or left) {{cssxref("padding")}} on the table.

> **Note:** **Hinweis:** Die `border-spacing` Eigenschaft entspricht demveraltetem `<table>` Attribut `cellspacing`, mit der Ausnahme, dass es einen optionalen zweiten Wert hat, mit dem unterschiedliche horizontale und vertikale Abstände eingestellt werden können.

## Syntax

```css
/* <length> */
border-spacing: 2px;

/* horizontal <length> | vertical <length> */
border-spacing: 1cm 2em;

/* Global values */
border-spacing: inherit;
border-spacing: initial;
```

Die Eigenschaft `border-spacing` kann entweder als ein oder zwei Werte angegeben werden.

- Wenn **ein** `<length>` Wert angegeben wird, definiert er sowohl die horizontalen als auch die vertikalen Abstände zwischen den Zellen.
- Wenn **zwei** `<length>` Werte angegeben werden, definiert der erste Wert den horizontalen Abstand zwischen Zellen (d.h. den Abstand zwischen Zellen in benachbarten Spalten) und der zweite Wert den vertikalen Abstand zwischen Zellen (d.h. den Abstand zwischen Zellen in benachbarten Zeilen).

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert.
- {{cssxref("&lt;initial&gt;")}}
  - : Setzt den Standardwert für diese Eigenschaft
- {{cssxref("&lt;inherit&gt;")}}
  - : Diese Eigenschaft erbt den Wert von seinem Elternelement.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Abstände und Padding von Tabellenzellen

In diesem Beispiel wird ein Abstand von `.5em` vertikal und `1em` horizontal zwischen den Zellen einer Tabelle angewendet. Beachten Sie, wie die `padding` Werte der Tabelle entlang ihrer Außenkanten zu ihren Randabstandswerten `border-spacing` addiert werden.

#### HTML

```html
<table>
  <tr>
    <td>1</td><td>2</td><td>3</td>
  </tr>
  <tr>
    <td>4</td><td>5</td><td>6</td>
  </tr>
  <tr>
    <td>7</td><td>8</td><td>9</td>
  </tr>
</table>
```

#### CSS

```css
table {
  border-spacing: 1em .5em;
  padding: 0 2em 1em 0;
  border: 1px solid orange;
}

td {
  width: 1.5em;
  height: 1.5em;
  background: #d2d2d2;
  text-align: center;
  vertical-align: middle;
}
```

#### Ergebnis

{{ EmbedLiveSample('Spacing_and_padding_table_cells', 400, 200) }}

## Spezifikationen

| Spezifikation                                                                                        | Status                       | Kommentar                |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------ |
| {{ SpecName('CSS2.1', 'tables.html#separated-borders', 'border-spacing') }} | {{ Spec2('CSS2.1') }} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat("css.properties.border-spacing")}}

## Siehe auch

- [`border-collapse`](/de/CSS/border-collapse "de/CSS/border-collapse"), [`caption-side`](/de/CSS/caption-side "de/CSS/caption-side"), [`empty-cells`](/de/CSS/empty-cells "de/CSS/empty-cells"), [`table-layout`](/de/CSS/table-layout "de/CSS/table-layout")

{{ languages( { "en": "en/CSS/border-spacing", "fr": "fr/CSS/border-spacing", "pl": "pl/CSS/border-spacing", "es": "es/CSS/border-spacing" } ) }}
