---
title: '-webkit-mask-repeat-y'
slug: Web/CSS/-webkit-mask-repeat-y
translation_of: Web/CSS/-webkit-mask-repeat-y
---
{{CSSRef}}{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-y` gibt an, ob und wie ein Maskenbild vertikal wiederholt wird.

```css
/* Keyword values */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Multiple values */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
```

{{cssinfo}}

### Syntax

## Werte

- repeat
  - : Das Maskenbild wird vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird nicht vertikal wiederholt, nur eine Kopie des Maskenbildes wird in vertikaler Richtung gezeichnet. Der vertikale Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- space
  - : Das Bild wird so oft wie möglich wiederholt, ohne zu beschneiden. Das erste und das letzte Bild werden am oberen und unteren Rand des Elements fixiert, und Leerräume werden gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref ("mask-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Übersteuerung angezeigt werden. Der einzige Fall, in dem Clipping mit Leerzeichen auftritt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der erlaubte vertikale Raum größer wird, dehnen sich die wiederholten Bilder (ohne Lücken), bis Platz für einen weiteren Platz ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Höhe von 260 Pixeln, das dreimal wiederholt wird, kann sich dehnen, bis jede Wiederholung 300 Pixel hoch ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf eine Höhe von 225px komprimieren.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
.exampleone {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: repeat;
}

.exampletwo {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: no-repeat;
}
```

### Support für mehrere Bildmasken

Sie können für jedes Maskenbild, getrennt durch Kommas, einen anderen `<repeat-style>` angeben:

```css
.examplethree {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-y: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil verglichen, vom ersten bis zum letzten.

## Browser-Kompatibilität

{{Compat}}

\[1] Während die Eigenschaft selbst erkannt wird, akzeptiert sie keine Werte.

## Sehenswert

{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-x")}}
