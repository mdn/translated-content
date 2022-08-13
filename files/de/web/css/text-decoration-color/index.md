---
title: text-decoration-color
slug: Web/CSS/text-decoration-color
translation_of: Web/CSS/text-decoration-color
---
{{ CSSRef }}

## Zusammenfassung

Mit der CSS-Eigenschaft `text-decoration-color` kann die Farbe für Unterstreichungen, Überstreichungen oder Durchstreichungen gesetzt werden, spezifiziert durch {{cssxref("text-decoration-line")}}. Das ist die bevorzugte Art und Weise, Textdekorationen eine Farbe zuzuweisen.

{{cssinfo}}

## Syntax

    Formale Syntax: {{csssyntax("text-decoration-color")}}

<!---->

    text-decoration-color: currentColor
    text-decoration-color: red
    text-decoration-color: #00ff00
    text-decoration-color: rgba(255, 128, 128, 0.5)
    text-decoration-color: transparent

    text-decoration-color: inherit

### Werte

- `<color>`
  - : Die Eigenschaft `color` akzeptiert verschiedene Schlüsselwörter und numerische Daten. Siehe {{cssxref("&lt;color&gt;")}}-Werte für genauere Details.

## Beispiel

```css
.beispiel {
    text-decoration: underline;
    text-decoration-color: red;
}
```

Das obige Beispiel hat denselben Effekt wie der folgende Code, der auch noch einen Hover-Style hinzufügt.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.beispiel {
  font-size: 24px;
  text-decoration: underline;
  color: red;
}
.beispiel:hover {
  color: blue;
  text-decoration: line-through;
}
</style>
</head>
<body>
<span class="beispiel">
  <span style="color:black">schwarzer Text mit roter Linie und blauem Hovereffekt</span>
</span>
</body>
</html>
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                                           | Anmerkung |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | --------- |
| {{ SpecName('CSS3 Text-decoration', '#text-decoration-color', 'text-decoration-color') }} | {{ Spec2('CSS3 Text-decoration') }} |           |

## Browserkompabilität

{{Compat}}
