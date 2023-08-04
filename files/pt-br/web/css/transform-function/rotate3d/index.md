---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d
---

{{CSSRef}}

A função [CSS](/pt-BR/docs/Web/CSS) **`rotate3d()`** define uma transformação que gira um elemento em torno de um eixo fixo no espaço 3D, sem deformá-lo. Seu resultado é um dado do tipo {{cssxref("&lt;transform-function&gt;")}}.

No espaço 3D, rotações têm três graus de liberdade que, juntos, descrevem um único eixo de rotação. O eixo de rotação é definido por um vetor \[x, y, z] e passado pela origem (como definido pela propriedade {{ cssxref("transform-origin") }}). Se, como especificado, o vetor não for _normalizado_ (isto é, se a soma dos quadrados das suas três coordenadas não for 1), o {{glossary("user agent")}} irá normalizá-lo internamente. Um vetor não-normalizável, como o vetor nulo \[0, 0, 0], fará com que a rotação seja ignorada, mas sem invalidar toda a propriedade CSS.

> **Nota:** Diferente de rotações no plano 2D, a composição de rotações 3D normalmente não é comutativa. Em outras palavras, a ordem na qual as rotações são aplicadas impacta o resultado.

## Sintaxe

A quantidade de rotação criada por `rotate3d()` é especificada por três {{cssxref("&lt;number&gt;")}} e um {{cssxref("&lt;angle&gt;")}}. Os `<number>` representam as coordenadas x, y e z do vetor, denotando o eixo de rotação. O `<angle>` representa o ângulo de rotação; se positivo, o movimento será no sentido horário; se negativo, será no sentido anti-horário.

```
rotate3d(x, y, z, a)
```

### Valores

- `x`
  - : É um {{cssxref("&lt;number&gt;")}} descrevendo a coordenada x do vetor denotando o eixo de rotação que pode ser entre 0 e 1.
- `y`
  - : É um {{cssxref("&lt;number&gt;")}} descrevendo a coordenada y do vetor denotando o eixo de rotação que pode ser entre 0 e 1.
- `z`
  - : É um {{cssxref("&lt;number&gt;")}} descrevendo a coordenada z do vetor denotando o eixo de rotação que pode ser entre 0 e 1.
- `a`
  - : É um {{ cssxref("&lt;angle&gt;") }} representando o ângulo de rotação. Um ângulo positivo denota uma rotação no sentido horário, e um negativo no sentido anti-horário.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Coordenadas cartesianas em ℝ<sup>2</sup></th>
      <td rowspan="2">
        Essa transformação se aplica ao plano 3D e não pode ser representada em
        um plano.
      </td>
    </tr>
    <tr>
      <th scope="col">Coordenadas homogêneas em ℝℙ<sup>2</sup></th>
    </tr>
    <tr>
      <th scope="col">Coordenadas cartesianas em ℝ<sup>3</sup></th>
      <td colspan="1">
        <a href="/@api/deki/files/5987/=transform-functions-rotate3d_cart.png"
          ><img
            src="/@api/deki/files/5987/=transform-functions-rotate3d_cart.png?size=webview"
            style="height: 47px; width: 510px" /></a
        ><math>
          <mfenced
            ><mtable
              ><mtr
                ><mtd
                  >1<mo>+</mo>(1<mo>-</mo>cos(<mi>a</mi>))(<msup
                    ><mi>x</mi><mn>2</mn></msup
                  ><mo>-</mo>1)</mtd
                ><mtd
                  ><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)+<mi>x</mi
                  ><mi>y</mi>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd
                  ><mo>-</mo><mi>y</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>z</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ></mtr
              ><mtr
                ><mtd
                  ><mo>-</mo><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo
                  ><mi>x</mi><mi>y</mi
                  ><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtd>1+(1-cos(a))(y2-1)</mtd
                ><mtd
                  ><mi>x</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>y</mi
                  ><mi>z</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd
                ><mtr
                  ><mtd>ysin(a) + xz(1-cos(a))</mtd
                  ><mtd>-xsin(a)+yz(1-cos(a))</mtd><mtd>1+(1-cos(a))(z2-1)</mtd
                  ><mtd>t</mtd></mtr
                ><mtr
                  ><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr
                ></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <th scope="col">Coordenadas homogêneas em ℝℙ<sup>3</sup></th>
      <td colspan="1">
        <a href="/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png"
          ><img
            src="/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png?size=webview"
            style="height: 61px; width: 522px"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

## Exemplos

### Rotacionando no eixo y

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotacionado</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Rotating_on_the_y-axis", "auto", 180)}}

### Rotacionando em um eixo customizado

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotacionado</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
```

#### Resultado

{{EmbedLiveSample("Rotating_on_a_custom_axis", "auto", 180)}}

## Compatibilidade com navegadores

Veja o tipo de dado [`<transform-function>`](/pt-BR/docs/Web/CSS/transform-function#Browser_compatibility) para informações de compatibilidade.

## Ver também

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
