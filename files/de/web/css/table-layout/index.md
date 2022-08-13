---
title: table-layout
slug: Web/CSS/table-layout
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Tabelle
  - Referenz
  - recipe:css-property
translation_of: Web/CSS/table-layout
---
{{CSSRef}}

Die CSS Eigenschaft **`table-layout`** legt den Algorithmus fest, der für das Layout von {{htmlelement("table")}} Zellen, Zeilen und Spalten verwendet wird.

{{EmbedInteractiveExample("pages/css/table-layout.html")}}

## Syntax

```css
/* Keyword values */
table-layout: auto;
table-layout: fixed;

/* Global values */
table-layout: inherit;
table-layout: initial;
table-layout: unset;
```

### Werte

- {{Cssxref("auto")}}
  - : Standardwert. Die meisten Browser haben einen automatischen Tabellenlayout-Algorithmus. Die Breiten der Tabelle und ihrer Zellen werden an den Inhalt angepasst.
- `fixed`

  - : Die Tabellen- und Spaltenbreiten werden durch die Breiten der Tabellen- und Spaltenelemente oder durch die Breite der ersten Zellenzeile festgelegt. Zellen in nachfolgenden Zeilen haben keinen Einfluss auf die Spaltenbreiten.

    Bei der "festen" oder "fixierten" `fixed` Layoutmethode kann die gesamte Tabelle gerendert werden, sobald die erste Tabellenzeile heruntergeladen und analysiert wurde. Dies kann die Renderingzeit bei der "automatischen" `auto` Layoutmethode beschleunigen, aber der Inhalt nachfolgender Zellen passt möglicherweise nicht in die bereitgestellten Spaltenbreiten. Zellen verwenden die Eigenschaft {{Cssxref("overflow")}}, um zu bestimmen, ob überlaufende Inhalte abgeschnitten werden sollen. Dies erfolgt aber nur, wenn die Breite der Tabelle bekannt ist; andernfalls werden die Zellen nicht überlaufen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Tabellen fester Breite mit Text-Überlauf

In diesem Beispiel wird ein festes `fixed` Tabellenlayout in Kombination mit der Eigenschaft {{cssxref("width")}} verwendet, um die Breite der Tabelle einzuschränken. Die Eigenschaft {{cssxref("text-overflow")}} wird verwendet, um eine Ellipse auf Wörter anzuwenden, die zu lang sind, um in die Tabelle zu passen.
Wenn das Tabellenlayout automatisch `auto` wäre, würde die Tabelle trotz der angegebenen Breite wachsen, um ihren Inhalt aufzunehmen.

#### HTML

```html
<table>
  <tr><td>Ed</td><td>Wood</td></tr>
  <tr><td>Albert</td><td>Schweitzer</td></tr>
  <tr><td>Jane</td><td>Fonda</td></tr>
  <tr><td>William</td><td>Shakespeare</td></tr>
</table>
```

#### CSS

```css
table {
  table-layout: fixed;
  width: 120px;
  border: 1px solid red;
}

td {
  border: 1px solid blue;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

#### Ergebnis

{{EmbedLiveSample('Fixed-width_tables_with_text-overflow')}}

## Spezifikationen

| Spezifikation                                                                            | Status                   | Kommentar                 |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------------------------- |
| {{SpecName('CSS2.1', 'tables.html#width-layout', 'table-layout')}} | {{Spec2('CSS2.1')}} | Ursprüngliche Definition. |

## Browser Kompatibilität

{{Compat("css.properties.table-layout")}}

## Siehe auch

- [`<table>`](/en-US/docs/Web/HTML/Element/table)
