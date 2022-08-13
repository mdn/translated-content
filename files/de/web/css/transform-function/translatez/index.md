---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
tags:
  - 3D
  - CSS
  - CSS Funktion
  - CSS Transformation
  - Funktion
  - Referenz
translation_of: Web/CSS/transform-function/translateZ()
original_slug: Web/CSS/transform-function/translateZ()
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Funktion **`translateZ()`** positioniert ein Element entlang der Z-Achse im 3D-Raum neu, d. h. näher zum Betrachter hin oder weiter von ihm weg. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translateZ.html")}}

Diese Transformation wird durch einen {{cssxref("&lt;length&gt;")}}-Wert definiert, der angibt, wie weit sich das Element oder die Elemente nach innen oder nach außen bewegen.

In den obigen interaktiven Beispielen wurden die Werte [`perspective: 550px;`](/de/docs/Web/CSS/perspective) gesetzt, um einen 3D-Raum zu erzeugen, und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style), damit die Kinder-elemente, die 6 Seiten des Würfels, auch im 3D-Raum positioniert werden, auf den Würfel gesetzt.

> **Note:** **Hinweis:** `translateZ(tz)` ist gleichzusetzen mit `translate3d(0, 0, tz)`.

## Syntax

    translateZ(tz)

### Werte

- `tz`
  - : Ein {{cssxref("&lt;Länge&gt;")}} Wert, der die Z-Komponente des Verschiebungsvektors darstellt. Ein positiver Wert verschiebt das Element zum Betrachter hin, ein negativer Wert weiter vom Betrachter weg.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Kartesische Koordinaten auf ℝ<sup>2</sup></th>
      <th scope="col">Homogene Koordinaten auf ℝℙ<sup>2</sup></th>
      <th scope="col">Kartesische Koordinaten auf ℝ<sup>3</sup></th>
      <th scope="col">Homogene Koordinaten auf ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        Diese Transformation gilt für den 3D-Raum und kann nicht in der Ebene
        dargestellt werden.
      </td>
      <td colspan="1" rowspan="2">
        Eine Verschiebung ist keine lineare Transformation in ℝ3 und kann nicht
        durch eine kartesische Koordinatenmatrix dargestellt werden.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

In diesem Beispiel werden zwei Boxen erstellt. Einer wird normal auf der Seite positioniert, ohne dass er übersetzt wird. Der zweite wird durch Anwendung der Perspektive verändert, um einen 3D-Raum zu erzeugen, und dann in Richtung des Benutzers bewegt.

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
```

### CSS

```css
div {
  position: relative;
  width: 60px;
  height: 60px;
  left: 100px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translateZ(200px);
  background-color: pink;
}
```

Was hier wirklich wichtig ist, ist die Klasse "moved"; lassen Sie uns einen Blick darauf werfen, was sie tut. Zunächst positioniert die Funktion [perspective()](/de/docs/Web/CSS/transform-function/perspective) den Betrachter relativ zu der Ebene, die bei z=0 liegt (im Wesentlichen die Oberfläche des Bildschirms). Ein Wert von `500px` bedeutet, dass sich der Benutzer 500 Pixel "vor" dem Bild befindet, das bei z=0 liegt.

Dann verschiebt die Funktion [translateZ()](</de/docs/Web/CSS/transform-function/translateZ()>) das Element um 200 Pixel vom Bildschirm "nach außen", in Richtung des Benutzers. Dies hat den Effekt, dass das Element größer erscheint, wenn es auf einem 2D-Display betrachtet wird, oder näher, wenn es mit einem VR-Headset oder einem anderen 3D-Anzeigegerät betrachtet wird.

Beachten Sie, wenn der `perspective()`-Wert kleiner ist als der `translateZ()`-Wert, wie z.B. `transform: perspective(200px) translateZ(300px);` das transformierte Element wird nicht sichtbar sein, da es weiter als der Viewport des Benutzers ist. Je kleiner der Unterschied zwischen den Werten von `perspective()` und `translateZ()` ist, desto näher ist der Benutzer am Element und desto größer erscheint das übersetzte Element.

#### Ergebnis

{{EmbedLiveSample("Examples", 250, 250)}}

## Specifications

| Spezifikation                                                                                | Status                                   | Kommentar                                                              |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| {{SpecName('CSS Transforms 2', '#transform-functions', 'transform')}} | {{Spec2('CSS Transforms 2')}} | Fügt eine 3D-Transformationsfunktion zum CSS Transform-Standard hinzu. |

## Browser-Kompatibilität

{{Compat("css.types.transform-function")}}

## Siehe auch

- [`translate`](/de/docs/Web/CSS/translate "Mit der CSS-Eigenschaft translate CSS können Sie Transformationen einzeln und unabhängig von der Eigenschaft transform angeben. Dies entspricht eher der typischen Verwendung auf der Benutzeroberfläche und erspart es, sich die genaue Reihenfolge der Transformationsfunktionen zu merken, die im Transformationswert angegeben werden müssen.")
- [`translateX()`](</de/docs/Web/CSS/transform-function/translateX()>)
- [`translateY()`](</de/docs/Web/CSS/transform-function/translateY()>)
- [`translate3d()`](</de/docs/Web/CSS/transform-function/translate3d()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
