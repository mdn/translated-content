---
title: translate3d()
slug: Web/CSS/transform-function/translate3d
tags:
  - CSS
  - CSS Funktion
  - CSS Transformation
  - Funktion
  - Referenz
translation_of: Web/CSS/transform-function/translate3d()
original_slug: Web/CSS/transform-function/translate3d()
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Eigenschaften **`translate3d()`** positioniert ein Element im 3D-Raum neu. Sein Ergebnis ist ein {{cssxref("&lt;Transform-Funktion&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translate3d.html")}}

Diese Transformation wird durch einen dreidimensionalen Vektor charakterisiert. Seine Koordinaten legen fest, wie sehr sich das Element in jede Richtung bewegt.

## Syntax

    translate3d(tx, ty, tz)

### Werte

- `tx`
  - : Ist ein {{cssxref("&lt;Länge&gt;")}} oder {{cssxref("&lt;Prozentsatz&gt;")}}, das die Abszisse des Verschiebungsvektors darstellt.
- `ty`
  - : Ist ein {{cssxref("&lt;Länge&gt;")}} oder {{cssxref("&lt;Prozentsatz&gt;")}}, das die Ordinate des Verschiebevektors darstellt.
- `tz`
  - : Ist ein {{cssxref("&lt;Länge&gt;")}}, der die z-Komponente des Verschiebungsvektors darstellt.
    Es kann kein {{cssxref("&lt;Prozentwert&gt;")}}-Wert sein; in diesem Fall wird die Eigenschaft, die die Transformation enthält, als ungültig betrachtet.

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
        <p>
          Diese Transformation gilt für den 3D-Raum und kann nicht in der Ebene
          dargestellt werden.
        </p>
      </td>
      <td colspan="1" rowspan="2">
        Eine Verschiebung ist keine lineare Transformation in ℝ3 und kann nicht
        durch eine kartesische Koordinatenmatrix dargestellt werden.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>tz</mtd></mtr
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

## Beispiele

### Verwendung einer einachsigen Verschiebung

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Equivalent to perspective(500px) translateX(10px) */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_a_single_axis_translation", 250, 250)}}

### Kombinierte Z-Achsen- und X-Achsen-Verschiebung

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Combining_z-axis_and_x-axis_translation", 250, 250)}}

## Spezifikation

| Spezifikation                                                                                    | Status                                   | Kommentar                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------ |
| {{SpecName("CSS Transforms 2", "#funcdef-translate3d", "translate3d()")}} | {{Spec2("CSS Transforms 2")}} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat("css.types.transform-function")}}

## Siehe auch

- {{cssxref("translate")}}
- [`translateY()`](</de/docs/Web/CSS/transform-function/translateY()>)
- [`translateX()`](/de/docs/Web/CSS/transform-function/translateX)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
