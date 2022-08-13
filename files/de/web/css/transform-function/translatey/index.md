---
title: translateY()
slug: Web/CSS/transform-function/translateY
tags:
  - CSS
  - CSS Funktion
  - CSS Transfomation
  - Funktion
  - Referenz
translation_of: Web/CSS/transform-function/translateY()
original_slug: Web/CSS/transform-function/translateY()
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS)-Funktion **`translateY()`** positioniert ein Element horizontal auf der 2D-Ebene neu. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

![](https://mdn.mozillademos.org/files/12125/translateY.png)

> **Hinweis:** `translateY(ty)` ist dasselbe wie `translate(0, ty)` oder `translate3d(0, ty, 0)`.

## Syntax

```css
/* <length-percentage> values */
transform: translateY(200px);
transform: translateY(50%);
```

### Werte

- `<length-percentage>`
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} , der die Abszisse des Verschiebevektors darstellt. Ein Prozentwert bezieht sich auf die Breite der Referenzbox, die durch die Eigenschaft {{cssxref("transform-box")}} definiert ist.

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
      <td colspan="1" rowspan="2">
        <p>
          Eine Translation ist keine lineare Transformation in ℝ2 und kann nicht
          durch eine kartesische Koordinatenmatrix dargestellt werden.
        </p>
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
            ></mfenced
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><math
            ><mfenced
              ><mtable
                ><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr
                ><mtr>0<mtd>1</mtd><mtd>t</mtd></mtr
                ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable
              ></mfenced
            ></math
          ></math
        >
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>t</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

## Formale Syntax

    translateY({{cssxref("&lt;length-percentage&gt;")}})

## Beispiel

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateY(10px);
  background-color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 250, 250)}}

## Spezifikation

| Spezifikation                                                                                                | Status                               | Kommentar                |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{SpecName("CSS3 Transforms", "#funcdef-transform-translatex", "translateX()")}} | {{Spec2("CSS3 Transforms")}} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat("css.types.transform-function")}}

## See also

- {{cssxref("translate")}}
- [`translateX()`](/de/docs/Web/CSS/transform-function/translateX)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
