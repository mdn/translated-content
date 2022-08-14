---
title: '-webkit-mask-repeat-x'
slug: Web/CSS/-webkit-mask-repeat-x
translation_of: Web/CSS/-webkit-mask-repeat-x
---
{{CSSRef}}{{Non-standard_header}}

Die Eigenschaft `-webkit-mask-repeat-x` gibt an, ob und wie ein Maskenbild horizontal wiederholt wird.

```css
/* Keyword values */
-webkit-mask-repeat-x: repeat;
-webkit-mask-repeat-x: no-repeat;
-webkit-mask-repeat-x: space;
-webkit-mask-repeat-x: round;

/* Multiple values */
-webkit-mask-repeat-x: repeat, no-repeat, space;

/* Global values */
-webkit-mask-repeat-x: inherit;
-webkit-mask-repeat-x: initial;
-webkit-mask-repeat-x: unset;
```

{{cssinfo}}

## Syntax

### Werte

- repeat
  - : Das Maskenbild wird sowohl horizontal als auch vertikal wiederholt.
- no-repeat
  - : Das Maskenbild wird nicht wiederholt, nur eine Kopie des Maskenbildes wird gezeichnet. Der Rest des Inhalts des maskierten Elements wird nicht angezeigt.
- space
  - : Das Bild wird so oft wie möglich wiederholt, ohne zu beschneiden. Das erste und das letzte Bild sind an jeder Seite des Elements angeheftet und Leerräume sind gleichmäßig zwischen den Bildern verteilt. Die Eigenschaft {{cssxref ("mask-position")}} wird ignoriert, es sei denn, nur ein Bild kann ohne Übersteuerung angezeigt werden. Der einzige Fall, in dem Clipping mit Leerzeichen auftritt, ist, wenn nicht genügend Platz vorhanden ist, um ein Bild anzuzeigen.
- round
  - : Wenn der erlaubte Platz vergrößert wird, werden sich die wiederholten Bilder dehnen (ohne Lücken zu hinterlassen), bis Platz für einen weiteren Platz vorhanden ist. Wenn das nächste Bild hinzugefügt wird, werden alle aktuellen komprimiert, um Platz zu schaffen. Beispiel: Ein Bild mit einer ursprünglichen Breite von 260 Pixeln, das dreimal wiederholt wird, könnte sich dehnen, bis jede Wiederholung 300 Pixel breit ist, und dann wird ein weiteres Bild hinzugefügt. Sie werden dann auf 225px komprimieren.

### Formale Syntax

{{csssyntax}}

## Beispiel

```css
.exampleone {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-x: repeat;
}

.exampletwo {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-x: no-repeat;
}
```

### Support für mehrere Bildmasken

Sie können für jedes Maskenbild, getrennt durch Kommas, einen anderen `<repeat-style> `angeben:

```css
.examplethree {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-x: repeat, space;
}
```

Jedes Bild wird mit dem entsprechenden Wiederholungsstil verglichen, vom ersten bis zum letzten.

## Browser-Kompatibilität

{{Compat}}

\[1] Während die Eigenschaft selbst erkannt wird, akzeptiert sie keine Werte.

## Sehenswert

{{cssxref("-webkit-mask-repeat")}}, {{cssxref("-webkit-mask-repeat-y")}}
