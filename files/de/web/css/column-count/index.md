---
title: column-count
slug: Web/CSS/column-count
translation_of: Web/CSS/column-count
---
{{CSSRef("CSS Multi-columns")}}

## Übersicht

Die [CSS](/de/docs/Web/CSS) Eigenschaft `column-count` bestimmt die Spaltenanzahl innerhalb eines Elements.

{{cssinfo}}

## Syntax

{{csssyntax("column-count")}}

    column-count: 3
    column-count: auto

### Werte

- `auto`
  - : Besagt, dass die Anzahl Spalten von anderen Werten Abhängig ist, wie z. B. {{cssxref("column-width")}}.
- `<number>`
  - : Ein positiver {{cssxref("&lt;integer&gt;")}}, welcher die Anzahl der Spalten genau festlegt. Falls der Wert von {{cssxref("column-width")}} nicht auto ist, stellt dieser Wert die maximale Anzahl an Spalten dar.

## Beispiel

```css
.content-box {
  border: 10px solid #000000;
  column-count:3;
}
```

## Spezifikations

| Spezifikation                                                                        | Status                               | Anmerkung |
| ------------------------------------------------------------------------------------ | ------------------------------------ | --------- |
| {{SpecName('CSS3 Multicol', '#column-count', 'column-count')}} | {{Spec2('CSS3 Multicol')}} |           |

## Browser Kompatibilität

{{Compat}}
