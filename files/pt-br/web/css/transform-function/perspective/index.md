---
title: perspective()
slug: Web/CSS/transform-function/perspective
---

{{CSSRef}}

A função [CSS](/pt-BR/docs/Web/CSS) **`perspective()`** define uma transformação que configura a distância entre o usuário e o plano z=0. Seu resultado é um dado do tipo {{cssxref("&lt;transform-function&gt;")}}.

## Sintaxe

A distância de perspectiva usada por`perspective()` é especificada por um valor {{cssxref("&lt;length&gt;")}}, que representa a distância entre o usuário e o plano z=0. Um valor positivo faz o elemento parecer mais perto do usuário, e um valor negativo o faz parecer mais longe.

```
perspective(d)
```

### Valores

- _d_
  - : É um {{cssxref("&lt;length&gt;")}} representando a distância do usuário até o plano z=0. Se for 0 ou um valor negativo, nenhuma transformação de perspectiva é aplicada.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Coordenadas cartesianas em ℝ<sup>2</sup></th>
      <th scope="col">Coordenadas homogêneas em ℝℙ<sup>2</sup></th>
      <th scope="col">Coordenadas cartesianas em ℝ<sup>3</sup></th>
      <th scope="col">Coordenadas homogêneas em ℝℙ<sup>3</sup></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2" rowspan="2">
        <p>
          Essa transformação se aplica ao espaço 3D e não pode ser representada
          no plano.
        </p>
      </td>
      <td colspan="1" rowspan="2">
        Essa não é uma transformação linear em ℝ<sup>3</sup>, e não pode ser
        representada usando uma matriz de coordenadas cartesianas.
      </td>
      <td colspan="1" rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr
              ><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr
              ><mtr
                ><mtd>0</mtd><mtd>0</mtd><mtd><mo>−</mo>1<mo>/</mo>d</mtd
                ><mtd>1</mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### HTML

```html
<p>Sem perspectiva:</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>Com perspectiva (7.5cm):</p>
<div class="perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

### CSS

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

.no-perspective-box {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotateX(-15deg) rotateY(15deg);
  margin-left: 100px;
}

.perspective-box {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: perspective(7.5cm) rotateX(-15deg) rotateY(15deg);
  margin-left: 100px;
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
```

### Resultado

{{ EmbedLiveSample('Examples', '250', '350') }}

## Compatibilidade com navegadores

Veja o tipo de dado [`<transform-function>`](/pt-BR/docs/Web/CSS/transform-function#Browser_compatibility) para informações de compatibilidade.

## Ver também

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
