---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Rahmen
  - Referenz
translation_of: Web/CSS/border-bottom-color
---
{{CSSRef}}

## Übersicht

Die `border-bottom-color` [CSS](/de/docs/Web/CSS) Eigenschaft legt die Farbe des unteren Rahmens eines Elements fest. Beachte, dass in vielen Fällen die Kurzschreibweisen {{cssxref("border-color")}} oder {{cssxref("border-bottom")}} geeigneter und daher zu bevorzugen sind.

{{cssinfo}}

## Syntax

```css
border-bottom-color: yellow;
border-bottom-color: #F5F6F7;
```

### Werte

- `<color>`
  - : Ist ein {{cssxref("&lt;color&gt;")}} CSS Wert, der die Farbe des unteren Rahmens beschreibt.
- `inherit`
  - : Ist ein Schlüsselwort, das die Farbe des unteren Rahmens des Elternelements kennzeichnet (welche sich vom Standardwert von `border-bottom-color` unterscheiden kann).

### Formale Syntax

{{csssyntax}}

## Beispiele

### Ein einfacher div mit einem Rahmen

#### HTML Inhalt

```html
<div class="mybox">
    <p>Dies ist eine Box mit einem Rahmen außenrum.
       Beachte welche Seite der Box
       <span class="redtext">rot</span> ist.</p>
</div>
```

#### CSS Inhalt

```css
.mybox {
    border: solid 0.3em gold;
    border-bottom-color: red;
    width: auto;
}
.redtext {
    color: red;
}
```

#### Ergebnis

{{EmbedLiveSample("Ein_einfacher_div_mit_einem_Rahmen")}}

## Spezifikationen

| Spezifikation                                                                                                | Status                                   | Anmerkung                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("CSS3 Backgrounds", "#border-bottom-color", "border-bottom-color")}}     | {{Spec2("CSS3 Backgrounds")}} | Keine nennenswerten Änderungen, jedoch wurde das Schlüsselwort `transparent` entfernt, das nun in {{cssxref("&lt;color&gt;")}} beinhaltet ist, welcher erweitert wurde. |
| {{SpecName("CSS2.1", "box.html#border-color-properties", "border-bottom-color")}} | {{Spec2('CSS2.1')}}                 | Erstmalige Definition                                                                                                                                                           |

## Browser Kompatibilität

{{Compat("css.properties.border-bottom-color")}}

## Siehe auch

- Die rahmenbezogenen CSS Kurzschreibweise Eigenschaften {{Cssxref("border")}}, {{Cssxref("border-bottom")}} und {{Cssxref("border-color")}}.
- Die farbbezogenen CSS Eigenschaften, die sich auf die anderen Ränder beziehen: {{Cssxref("border-right-color")}}, {{Cssxref("border-top-color")}} und {{Cssxref("border-left-color")}}.
- Die anderen rahmenbezogenen CSS Eigenschaften, die sich auf denselben Rand beziehen: {{cssxref("border-bottom-style")}} und {{cssxref("border-bottom-width")}}.
