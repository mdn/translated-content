---
title: translateZ()
slug: Web/CSS/transform-function/translateZ
---

La función **`translateZ()`** [CSS](/es/docs/Web/CSS) reposiciona un elemento a lo largo del eje-z (z-axis) en el espacio 3D, es decir, más cerca o mas lejos del espectador. Su resultado es un {{cssxref("&lt;transform-function&gt;")}} tipo de dato.

{{InteractiveExample("CSS Demo: translateZ()")}}

```css interactive-example-choice
transform: translateZ(0);
```

```css interactive-example-choice
transform: translateZ(42px);
```

```css interactive-example-choice
transform: translateZ(-9.7rem);
```

```css interactive-example-choice
transform: translateZ(-3ch);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgba(90, 90, 90, 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 210, 0, 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 210, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210, 210, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210, 0, 210, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Esta transformación es definida por una {{cssxref("&lt;length&gt;")}} la cual especifica que tan lejos hacia denttro o hacia afuera el elemento o los elementos se mueven.

En los ejemplos interacticos anteriores, [`perspective: 550px;`](/es/docs/Web/CSS/perspective) (para crear un espacio 3D) y [`transform-style: preserve-3d;`](/es/docs/Web/CSS/transform-style) (los elementos hijos, los 6 lados del cubo, estan también posicionados en el espacio 3D), es decir, han sido establecidos en el cubo.

> [!NOTE]
> `translateZ(tz)` es equivalente a `translate3d(0, 0, tz)`.

## Syntax

```
translateZ(tz)
```

### Values

- `tz`
  - : Una {{cssxref("&lt;length&gt;")}} que representa el componente-z del vector. Un valor positivo mueve el elemento hacia el espectador, y un elemento negativo mueve el elemento más lejos.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordenadas Cartesianas en ℝ<sup>2</sup></th>
      <th scope="col">Coordenadas Homógeneas en ℝℙ<sup>2</sup></th>
      <th scope="col">Coordenadas Cartesianas en ℝ<sup>3</sup></th>
      <th scope="col">Coordenadas Homógeneas enℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        Esta transformación se aplica al espacio 4D y no puede ser representada
        en el plano.
      </td>
      <td colspan="1" rowspan="2">
        Una traducción no es una transformación lineal en ℝ<sup>3</sup> y no
        puede ser representada usando una matriz de coordenadas-Cartesianas.
      </td>
      <td colspan="1" rowspan="2">
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr>1 <mtd>0 </mtd><mtd>0 </mtd><mtd>0</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr><mtr>0 </mtr></mtable
              ></mfenced
            ></math
          ><math
            ><mfenced
              ><mtable
                ><mtr><mtd>1 </mtd><mtd>0 </mtd><mtd>0</mtd></mtr></mtable
              ></mfenced
            ></math
          >
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr></mtable></mfenced></math
          ><mtd style="">0 </mtd><mtd style="">0 </mtd><mtd style="">1 </mtd
          ><mtd style="">t</mtd>
        </p>
        <p>
          <math
            ><mfenced
              ><mtable
                ><mtr><mtd></mtd></mtr
                ><mtr
                  ><mtd>0 </mtd><mtd>0 </mtd><mtd>0 </mtd><mtd>1</mtd></mtr
                ></mtable
              ></mfenced
            ></math
          >
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Ejemplos

En este ejemplo, se crean dos cuadros. Uno se coloca normalmente en la página, sin ser traducida en absoluto. El segundo se modifica aplicando perspectiva para crear un espacio 3D, luego se mueve hacia el usuario.

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

Lo que realmente importa es la clase "movida"; veamos que hace. Primero, la función [`perspective()`](/es/docs/Web/CSS/transform-function/perspective) posiciona al espectador en relación con el plano que se encuentra donde z=0 (en esencia, la superficie de la pantalla). Un valor de `500px` significa que el usario es 500 pixels "delante de" las imagenes ubicadas en z=0.

Luego, la función `translateZ()` mueve el elemento 200 pixeles "hacia afuera" desde la pantalla, hacia el usuario. Esto tiene el efecto de hacer que el elemento parezca más grande cuando se ve en una pantalla 2D, o más cerca cuando se ve usando un auricular VR u otro dispositivo de pantalla 3D.

### Resultado

{{EmbedLiveSample("Examples", 250, 250)}}

Si el valor `perspective()` es menor que el valor `translateZ()`, como `transform: perspective(200px) translateZ(300px);` el elemento transformado no será visible ya que está más allá de la vista del usuario. Cuanto menor sea la diferencia entre la pespectiva y los valores de transformación, más cerca estará el usuario del elemento y más grande parecerá el elemento traducido.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegador

Por favor observe la propiedad [`<transform-function>`](/es/docs/Web/CSS/transform-function#browser_compatibility) para información de compatibilidad.

## Véase también

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
