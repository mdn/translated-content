---
title: border-collapse
slug: Web/CSS/border-collapse
tags:
  - CSS
  - CSS Border
  - CSS Rahmen
  - CSS Referenz
  - CSS Table
  - Referenz
translation_of: Web/CSS/border-collapse
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft `border-collapse` bestimmt, ob die Zellen innerhalb einer Tabelle mite einem gemeinsamen oder getrennten Rahmen dargestellt werden.

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

> **Hinweis:** Wenn der Wert auf collapsed gesetzt ist, so verhält sich der Wert `inset` für {{cssxref("border-style")}} wie der Wert `groove` und der Wert `outset` wie `ridge`.

> **Hinweis:** When cells are separated, the distance between cells is defined by the {{cssxref("border-spacing")}} property.

## Syntax

```css
/* Keyword values */
border-collapse: collapse;
border-collapse: separate;

/* Global values */
border-collapse: inherit;
border-collapse: initial;
border-collapse: unset;
```

Die Eigenschaft `border-collapse` wird als ein einziges Schlüsselwort angegeben, das aus der folgenden Liste ausgewählt werden kann.

### Werte

- `separate`
  - : Standardwert. Jede Zelle besitzt ihre eigenen Rahmen, deren Abstand mit [`border-spacing`](/de/CSS/border-spacing "de/CSS/border-spacing") angegeben wird.
- `collapse`
  - : Benachbarte Zellen haben einen gemeinsame Rahmen.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### A colorful table of browser engines

#### HTML

```html
<table class="separate">
  <caption><code>border-collapse: separate</code></caption>
  <tbody>
    <tr><th>Browser</th> <th>Layout Engine</th></tr>
    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>
    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>
    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>
    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>
    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>
  </tbody>
</table>
<table class="collapse">
  <caption><code>border-collapse: collapse</code></caption>
  <tbody>
    <tr><th>Browser</th> <th>Layout Engine</th></tr>
    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>
    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>
    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>
    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>
    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  border-collapse: collapse;
}

.separate {
  border-collapse: separate;
}

table {
  display: inline-table;
  margin: 1em;
  border: dashed 5px;
}

table th,
table td {
  border: solid 3px;
}

.fx { border-color: orange blue; }
.gk { border-color: black red; }
.ed { border-color: blue gold; }
.tr { border-color: aqua; }
.sa { border-color: silver blue; }
.wk { border-color: gold blue; }
.ch { border-color: red yellow green blue; }
.bk { border-color: navy blue teal aqua; }
.op { border-color: red; }
```

#### Ergebnis

{{ EmbedLiveSample('A_colorful_table_of_browser_engines', 400, 300) }}

## Spezifikationen

| Spezifikation                                                                            | Status                       | Anmerkung                |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------------ |
| {{ SpecName('CSS2.1', 'tables.html#borders', 'border-collapse') }} | {{ Spec2('CSS2.1') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.border-collapse")}}

## Siehe auch

- {{cssxref("border-spacing")}}, {{cssxref("border-style")}}, {{cssxref("caption-side")}}, {{cssxref("empty-cells")}}, {{cssxref("table-layout")}}
