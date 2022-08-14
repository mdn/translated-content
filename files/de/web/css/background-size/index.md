---
title: background-size
slug: Web/CSS/background-size
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Hintergrund
  - NeedsMobileBrowserCompatibility
  - Referenz
translation_of: Web/CSS/background-size
---
{{CSSRef}}

## Übersicht

Die `background-size` [CSS](/de/docs/CSS "CSS") Eigenschaft definiert die Abmessungen eines Hintergrundbildes. Die Abmessungen des Bildes können komplett festgelegt werden oder nur teilweise, um das eigentliche Seitenverhältnis zu erhalten.

> **Note:** **Hinweis:** Folgt auf `background-size` die {{cssxref("background")}} Kurzform und es wird in ihr kein Wert für diese Eigenschaft angegeben, wird der Wert auf den Standardwert zurückgesetzt.

{{cssinfo}}

## Syntax

```css
/* Schlüsselwort Syntax */
background-size: cover;
background-size: contain;

/* Ein-Wert Syntax: Der Wert definiert die Bildbreite,
   die Höhe wird auf 'auto' gesetzt */
background-size: 50%;
background-size: 3em;
background-size: 12px;
background-size: auto;

/* Zwei-Wert Syntax: Der erste Wert definiert die Bildbreite,
   der Zweite die Höhe */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;

/* Werte für mehrere Hintergründe, die durch background-image definiert wurden,
   können kommagetrennt aufgelistet werden */
background-size: auto, auto     /* Nicht zu verwechseln mit background-size: auto auto */
background-size: 50%, 25%, 25%;
background-size: 6px, auto, contain;

/* Globale Werte */
background-size: inherit;
background-size: initial;
background-size: unset;
```

### Werte

- `<length>`
  - : Ein `{{cssxref("&lt;length&gt;")}}` Wert, der das Hintergrundbild auf die angegebene Länge in der entsprechenden Maßeinheit skaliert. Negative Werte sind nicht erlaubt.
- `<percentage>`
  - : Ein {{cssxref("&lt;percentage&gt;")}} Wert, der das Hintergrundbild auf den angegebenen Prozentwert des Hintergrund-Positionierungsbereich skaliert (angegeben durch {{cssxref("background-origin")}}). Standardmäßig umfasst der Positionierungsbereich den Inhalt des Elements und dessen Innenabstand (Padding), kann aber auch so abgeändert werden, dass er nur den Inhalt umfasst oder Inhalt, Innenabstand und Rahmen. Ist die {{cssxref("background-attachment","attachment")}} Eigenschaft auf `fixed` gesetzt, entspricht der Positionierungsbereich dem Browser-Fenster abzüglich des von eventuellen Scroll-Leisten genutzten Bereichs. Negative Prozentwerte sind nicht erlaubt.
- `auto`
  - : Das `auto` Schlüsselwort skaliert das Hintergrundbild so in die entsprechende Richtung, dass das ursprüngliche Seitenverhältnis beibehalten wird.
- `cover`
  - : Das `cover` Schlüsselwort behält das Seitenverhältnis des Hintergrundbildes bei und skaliert es so, dass es so klein wie möglich ist, aber den Hintergrund-Positionierungsbereichs vollständig abdeckt.
- `contain`
  - : Das contain Schlüsselwort behält das Seitenverhältnis des Hintergrundbildes bei und skaliert es so, dass es so groß wie möglich ist, aber vollständig im Hintergrund-Positionierungsbereichs enthalten ist.

Die Interpretation möglicher Werte hängt von den Maßen (Breite und Höhe) und der Proportion (Verhältnis von Breite zu Höhe) des Bildes ab. Eine Rastergrafik hat immer eigene Maße und eine eigene Proportion. Eine Vektorgrafik kann beide eigenen Maße haben (und somit auch eine eigene Proportion). Sie kann aber auch nur ein oder kein eigenes Maß haben. In beiden Fällen kann sie (muss aber nicht) eine eigen Proportion haben. Farbverläufe werden als Grafiken ohne eigene Maße und eigener Proportion behandelt.

> **Note:** **Hinweis:** Dieses Verhalten hat sich in Gecko 8.0 {{geckoRelease("8.0")}} geändert. Vorher wurden Farbverläufe als Grafiken ohne eigene Maße, aber mit einer eigenen Proportion behandelt. Die Proportion entsprach dabei derjenigen des Positionierungsbereich des Hintergrunds.

Hintergrundbilder, die mittels {{cssxref("-moz-element")}} generiert wurden, werden momentan als Bilder mit den Maßen des Elements behandelt. Außer es handelt sich um ein SVG-Element, dann werden die Maße des Hintergrund-Positionierungsbereich mit der eigenen Proportion verwendet.

> **Note:** **Hinweis:** Die entspricht nicht dem spezifizierten Verhalten, wonach die Maße und die Proportion stets denjenigen Werten des Elements entsprechen müssen.

Die gerenderte Größe des Hintergrundbildes wird folgendermaßen berechnet:

- Falls beide Werte von `background-size` angegeben werden und nicht `auto` sind:
  - : Das Hintergrundbild wird mit den angegebenen Werten gerendert.
- Falls die Schlüsselwörter `contain` oder `cover` gesetzt werden:
  - : Das Bild behält seine eigene Proportion bei, wobei die Maße so berechnet werden, dass das Bild im Hintergrund-Positionierungsbereich enthalten ist beziehungsweise ihn abdeckt. Besitzt das Bild keine eigene Proportion, wird es auf die Größe des Hintergrund-Positionierungsbereichs gerendert.
- Falls ` background-size ``auto` oder `auto auto` ist:
  - : Besitzt das Bild beide Maße, wird es in dieser Größe gerendert. Hat es keine eigenen Maße und keine eigene Proportion, wird es in der Größe des Hintergrund-Positionierungsbereich gerendert. Hat es keine Maße, aber eine Proportion, wird es so gerendert als ob `contain` angegeben wurde. Hat es ein Maß angegeben und besitzt eine Proportion, wird es entsprechend dieser Angaben gerendert. Hat es ein Maß und keine Proportion, wird es mit diesem eigenen Maß und dem entsprechenden Maß des Hintergrund-Positionierungsbereichs gerendert.
- Falls `background-size` ein `auto` und ein nicht-`auto` Wert besitzt:
  - : Hat das Bild eine eigene Proportion, wird das nicht spezifizierte Maß aus dem angegebenen Maß und der Proportion berechnet. Hat das Bild keine eigene Proportion, wird das angebene Maß und das entsprechende eigene Maß des Bilds verwendet, falls vorhanden. Existiert kein eigenes Maß, wird dasjenige des Hintergrund-Positionierungsbereichs verwendet.

Es ist zu beachten, dass Vektorgrafiken ohne Maße oder Proportion noch nicht vollständig in allen Browsern implementiert sind. Aus diesem Grund sollte man nicht zu sehr auf das oben beschriebene Verhalten vertrauen. Tests in unterschiedlichen Browsern (insbesondere Firefox 7 oder älter und Firefox 8 oder neuer) sind nötig, um festzustellen, ob die verschiedenen Darstellungen akzeptabel sind.

### Formale Syntax

{{csssyntax}}

## Beispiele

[Diese Demonstration von `background-size: cover`](http://whereswalden.com/files/mozilla/background-size/page-cover.html) und [diese Demonstration von `background-size: contain`](http://whereswalden.com/files/mozilla/background-size/page-contain.html) sollten in einem neuen Fenster geöffnet werden, damit man das Verhalten von `cover` und `contain` bei ändernder Größe des Hintergrund-Positionierungsbereichs beobachten kann. [Diese Demos](http://whereswalden.com/files/mozilla/background-size/more-examples.html) zeigen das Zusammenspiel von `background-size` mit anderen `background-*` Attributen.

## Hinweise

Wird ein Farbverlauf als HIntergrund und zusätzliche eine `background-size` angegeben, ist es empfehlenswert, die Hintergrund-Größe nicht mit einem einzelnen `auto` Wert oder nur mit einer Breite zu definieren (zum Beispiel `background-size: 50%`). Das Rendern solcher Farbverläufe hat sich mit Firefox 8 geändert und führt generell zu einer inkonsistenten Darstellung in Browsern, die die beiden Spezifikationen [the CSS3 `background-size` specification](http://www.w3.org/TR/css3-background/#the-background-size) und [the CSS3 Image Values gradient specification](http://dev.w3.org/csswg/css3-images/#gradients) nicht vollständig implementieren.

```css
.bar {
       width: 50px; height: 100px;
       background-image: gradient(...);

       /* NICHT EMPFOHLEN */
       background-size: 25px;
       background-size: 50%;
       background-size: auto 50px;
       background-size: auto 50%;

       /* OKAY */
       background-size: 25px 50px;
       background-size: 50% 50%;
}
```

Insbesondere ist es nicht empfohlen, ein Pixel-Wert und ein `auto` Wert zusammen mit einem Farbverlauf zu verwenden, da die Darstellung in Firefox-Versionen vor 8 oder in anderen Browsern, die nicht das Firefox 8 Rendering verwenden nicht nachzuvollziehen ist, wenn die genaue Größe des Elements nicht bekannt ist.

## Spezifikation

| Spezifikation                                                                                        | Status                                   | Kommentar |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-size', 'background-size')}} | {{Spec2('CSS3 Backgrounds')}} |           |

## Browser Kompatibilität

{{Compat("css.properties.background-size")}}

## Siehe auch

- [CSS Referenz](/de/docs/Web/CSS/CSS_Referenz "CSS Reference")
- [Mehrere Hintergründe](/de/docs/Web/Guide/CSS/Using_multiple_backgrounds "CSS/Multiple backgrounds")
- [HIntergrundbilder skalieren](/de/docs/Web/Guide/CSS/Scaling_background_images "CSS/Scaling_background_images")
