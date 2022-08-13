---
title: column-rule
slug: Web/CSS/column-rule
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspaltenlayout
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/column-rule
---
{{CSSRef("CSS Multi-columns")}}

## Übersicht

In mehrspaltigen Layouts beschreibt die `column-rule` CSS Eigenschaft eine gerade Linie, welche zwischen jeder Spalte dargestellt wird. Sie ist eine komfortable Kurzform, um das separate Setzen der einzelnen `column-rule-*` Eigenschaften zu vermeiden: {{Cssxref("column-rule-width")}}, {{Cssxref("column-rule-style")}} und {{Cssxref("column-rule-color")}}.

{{cssinfo}}

## Syntax

    Formale Syntax: {{csssyntax("column-rule")}}

### Werte

Akzeptiert einen, zwei oder drei Werte in beliebiger Reihenfolge:

- `<column-rule-width>`
  - : Ist eine {{cssxref("&lt;length&gt;")}} oder eins der drei Schlüsselwörter `thin`, `medium` oder `thick`. Siehe {{cssxref("border-width")}} für Details.
- `<column-rule-style>`
  - : Siehe {{cssxref("border-style")}} für mögliche Werte und Details.
- `<column-rule-color>`
  - : Ist ein {{cssxref("&lt;color&gt;")}} Wert.

## Beispiele

    p.foo { column-rule: dotted; }          /* entspricht "medium dotted currentColor" */
    p.bar { column-rule: solid blue; }      /* entspricht "medium solid blue" */
    p.baz { column-rule: solid 8px; }       /* entspricht "8px solid currentColor" */
    p.abc { column-rule: thick inset blue; }

### Live Beispiel

padding:0.3em; background:gold; border:groove 2px gold; **column-rule: inset 2px gold;** **column-width:17em;**

## Spezifikation

| Spezifikation                                                                    | Status                               | Kommentar |
| -------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{SpecName('CSS3 Multicol', '#column-rule', 'column-rule')}} | {{Spec2('CSS3 Multicol')}} |           |

## Browser Kompatibilität

{{Compat("css.properties.column-rule")}}
