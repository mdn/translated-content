---
title: image-orientation
slug: Web/CSS/image-orientation
tags:
  - CSS
  - CSS Bild
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/image-orientation
---
{{CSSRef}}{{SeeCompatTable}}

## Übersicht

Mit der [CSS](/de/docs/CSS) Eigenschaft `image-orientation` kann die Ausrichtung eines Bildes geändert werden.

> **Hinweis:** Diese Eigenschaft ist nicht dazu gedacht Bilder beliebig zu drehen sondern eine fehlerhaften Ausrichtung zu korrigieren. Deshalb wird zur nächsten Vierteldrehung gerundet.
>
> - Ebenso ist diese Eigenschaft nicht dazu vorgesehen das Layout zu verändern, da sich `image-orientation` nur auf Bilder auswirkt.

{{cssinfo}}

## Syntax

```css
image-orientation: 0deg;
image-orientation: 6.4deg;     /* Wird zu 0deg gerundet */
image-orientation: -90deg;     /* Wie 270deg, der normalisiert berechnete Wert */
image-orientation: from-image; /* EXIF Daten des Bildes verwenden */
image-orientation: 90deg flip; /* Um 90deg rotieren und horizontal spiegeln */
image-orientation: flip;       /* Horizontales Spiegeln ohne Drehung */

/* Globale Werte */
image-orientation: inherit;
image-orientation: initial;
image-orientation: unset;
```

### Werte

- `from-image`
  - : Das Bild wird entsprechend der enthaltenen EXIF-Informationen gedreht.
- `<angle>`
  - : Die {{cssxref("&lt;angle&gt;")}} der anzuwendenden Rotation. Wird zu den nächsten `90deg` (`0.25turn`) gerundet.
- `flip`
  - : Das Bild wird horizontal gespiegelt, nachdem die Drehung des {{cssxref("&lt;angle&gt;")}} Wertes angewendet wird. Wenn keine {{cssxref("&lt;angle&gt;")}} gegeben ist, wird `0deg` benutzt.

### Formale Syntax

{{csssyntax}}

## Beispiele

```html
<img src="arrow.png" alt="Pfeil" style="image-orientation: 180deg;">
```

## Spezifikationen

| Spezifikation                                                                                | Status                           | Kommentar                                                       |
| -------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------- |
| {{SpecName('CSS4 Images', '#image-orientation', 'image-orientation')}} | {{Spec2('CSS4 Images')}} | Die Schlüsselwörter `from-image` und `flip` wurden hinzugefügt. |
| {{SpecName('CSS3 Images', '#image-orientation', 'image-orientation')}} | {{Spec2('CSS3 Images')}} | Ursprüngliche Definition                                        |

## Browser Kompatibilität

{{Compat("css.properties.image-orientation")}}

## Siehe auch

- Andere bildbezogene CSS-Eigenschaften {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
