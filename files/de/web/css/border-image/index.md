---
title: border-image
slug: Web/CSS/border-image
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Ränder
  - Grafik
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/border-image
---
{{CSSRef("CSS Borders")}}

## Übersicht

Die `border-image` CSS Eigenschaft ermöglicht das Zeichnen eines Bildes an den Rändern eines Elements. Dies vereinfacht das Zeichnen von komplex wirkenden Widgets deutlich und macht den Gebrauch von neun Kästen um das Element für einige Fälle überflüssig.

`border-image` wird anstatt der Randstile benutzt, die durch die {{cssxref("border-style")}} Eigenschaft definiert werden. Es ist wichtig anzumerken, dass, wenn der berechnete Wert von {{cssxref("border-image-source")}}, welcher entweder durch `border-image-source` oder die Kurzschreibweise `border-image` gesetzt werden kann, `none` ist, oder falls das Bild nicht angezeigt werden kann, die Randstile verwendet werden.

{{cssinfo}}

## Syntax

{{csssyntax}}

### Werte

Siehe die entsprechenden Eigenschaften der verschiedenen Werte.

## Beispiele

### Bild wiederholt (repeat)

Das Bild wird aufgeteilt und einfach gekachelt, um den Randbereich zu füllen.

```css
.beispiel {
  border: 30px solid transparent;
  -moz-border-image:url("/files/4127/border.png") 30 30 repeat; /* Old firefox */
  -webkit-border-image:url("/files/4127/border.png") 30 30 repeat; /* Safari */
  -o-border-image:url("/files/4127/border.png") 30 30 repeat; /* Opera */
  border-image:url("/files/4127/border.png") 30 30 repeat;
}
```

Ergibt:
![Beispiel für border-image: repeat](https://mdn.mozillademos.org/files/8199/borderRepeat.png)

### Bild wiederholt (round)

Die Option `round` ist eine Variante der `repeat` Option, die die Kacheln so verteilt, dass die Enden sauber verbunden sind.

```css
.beispiel {
  border: 30px solid transparent;
  -moz-border-image:url("/files/4127/border.png") 30 30 round; /* Old firefox */
  -webkit-border-image:url("/files/4127/border.png") 30 30 round; /* Safari */
  -o-border-image:url("/files/4127/border.png") 30 30 round; /* Opera */
  border-image:url("/files/4127/border.png") 30 30 round;
}
```

Ergibt:
![Beispiel für border-image: round](https://mdn.mozillademos.org/files/8201/borderRound.png)

### Bild gestreckt

Die `stretch` Option streckt die Bilder, um den Randbereich zu füllen.

```css
.beispiel {
  border: 30px solid transparent;
  -moz-border-image:url("/files/4127/border.png") 30 30 stretch; /* Old firefox */
  -webkit-border-image:url("/files/4127/border.png") 30 30 stretch; /* Safari */
  -o-border-image:url("/files/4127/border.png") 30 30 stretch; /* Opera */
  border-image:url("/files/4127/border.png") 30 30 stretch;
}
```

Ergibt:
![Beispiel für border-image: stretch](https://mdn.mozillademos.org/files/8203/borderStretch.png)

## Spezifikation

| Spezifikation                                                                            | Status                                   | Kommentar |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| {{SpecName('CSS3 Backgrounds', '#border-image', 'border-image')}} | {{Spec2('CSS3 Backgrounds')}} |           |

## Browser Kompatibilität

{{Compat("css.properties.border-image")}}
