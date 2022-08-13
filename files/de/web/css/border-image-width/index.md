---
title: border-image-width
slug: Web/CSS/border-image-width
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Ränder
  - Grafik
  - Layout
  - Referenz
translation_of: Web/CSS/border-image-width
---
{{CSSRef}}

## Übersicht

Die CSS Eigenschaft `border-image-width` definiert die Breite des Randbilds. Wenn sie definiert wird, wird die Eigenschaft {{cssxref("border-width")}} durch ihren Wert überschrieben.

{{cssinfo}}

## Syntax

```css
/* border-image-width: all */
border-image-width: 3;

/* border-image-width: vertical horizontal */
border-image-width: 2em 3em;

/* border-image-width: top horizontal bottom */
border-image-width: 5% 15% 10%;

/* border-image-width: top right bottom left */
border-image-width: 5% 2em 10% auto;

/* Globale Werte */
border-image-width: inherit;
border-image-width: initial;
border-image-width: unset;
```

wobei:

- _width_
  - : Ist ein Wert, der die Breite des Bildes angibt, das als Rand für alle vier Ränder verwendet wird. Er wird ausschließlich in der Einwert-Syntax verwendet.
- _vertical_
  - : Ist ein Wert, der die Breite des Bildes angibt, das für alle vertikalen Ränder, d. h. den oberen und unteren Rand, verwendet wird. Er wird ausschließlich in der Zweiwert-Syntax verwendet.
- _horizontal_
  - : Ist ein Wert, der die Breite des Bildes angibt, das für alle horizontalen Ränder, d. h. den rechten und linken Rand, verwendet wird. Er wird ausschließlich in der Zweiwert-Syntax verwendet.
- _top_
  - : Ist ein Wert, der die Breite des Bildes angibt, das für den oberen Rand verwendet wird. Er wird ausschließlich für die Dreiwert- und Vierwert-Syntax verwendet.
- _bottom_
  - : Ist ein Wert, der die Breite des Bildes angibt, das für den unteren Rand verwendet wird. Er wird ausschließlich für die Dreiwert- und Vierwert-Syntax verwendet.
- _right_
  - : Ist ein Wert, der die Breite des Bildes angibt, das für den rechten Rand verwendet wird. Er wird ausschließlich für die Dreiwert- und Vierwert-Syntax verwendet.
- _left_
  - : Ist ein Wert, der die Breite des Bildes angibt, das für den linken Rand verwendet wird. Er wird ausschließlich für die Dreiwert- und Vierwert-Syntax verwendet.
- `inherit`
  - : Ist ein Schlüsselwort, welches bewirkt, dass alle vier Werte von den berechneten Werten des Elternelements geerbt werden.

### Werte

- `<length>`
  - : Repräsentiert die Länge des Teilbilds. Sie kann eine absolute oder relative Länge sein. Dieser Wert darf nicht negativ sein.
- `<percentage>`
  - : Repräsentiert den Prozentwert des Teilbilds relativ zur Höhe oder Breite des Randbildbereichs. Dieser Wert darf nicht negativ sein.
- `<number>`
  - : Repräsentiert ein Vielfaches des berechneten Wertes der {{cssxref("border-width")}} Eigenschaft des Elements dar, die als Teilbildgröße verwendet wird. Dieser Wert darf nicht negativ sein.
- `auto`
  - : Gibt an, dass die Breite oder Höhe des Bildes die tatsächliche Größe dieser Dimension sein muss.

### Formale Syntax

{{csssyntax}}

## Beispiele

### HTML-Inhalt

```html
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
```

### CSS-Inhalt

```css
p{
   border-image-source: url("https://mdn.mozillademos.org/files/10470/border.png");
   border-image-slice:30;
   border-image-width:20px;
   border-image-repeat: round;
   padding:40px
}
```

{{ EmbedLiveSample('Beispiele', '480', '320') }}

## Spezifikationen

| Spezifikation                                                                                            | Status                                   | Anmerkung                   |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------- |
| {{SpecName('CSS3 Backgrounds', '#border-image-width', 'border-image-width')}} | {{Spec2('CSS3 Backgrounds')}} | Ursprüngliche Spezifikation |

## Browser Kompatibilität

{{Compat("css.properties.border-image-width")}}
