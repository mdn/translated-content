---
title: transform-origin
slug: Web/CSS/transform-origin
---

{{CSSRef}}

A propriedade **`transform-origin`** define a origem das transformações de um elemento no [CSS](/pt-BR/docs/Web/CSS).

{{EmbedInteractiveExample("pages/css/transform-origin.html")}}

A origem da transformação é o ponto em torno do qual uma transformação é aplicada. Por exemplo, a origem da transformação da função [`rotate()`](/pt-BR/docs/Web/CSS/transform-function/rotate) é o centro de rotação.

Na prática, essa propriedade envolve um par de translações em torno das outras transformações do elemento. A primeira translação move a origem da transformação para a origem real em <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>. Em seguida, as outras transformações são aplicadas e, porque a origem da transformação está em <math><mrow><mo stretchy="false">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy="false">)</mo></mrow></math>, essas transformações atuam em relação à origem da transformação. Por fim, a translação oposta é aplicada, movendo a origem da transformação de volta à sua localização original. Consequentemente, essa definição

```css
transform-origin: -100% 50%;
transform: rotate(45deg);
```

resulta na mesma transformação que

```css
transform-origin: 0 0;
transform: translate(-100%, 50%) rotate(45deg) translate(100%, -50%);
```

Lendo da direita para a esquerda, `translate(100%, -50%)` é a tradução para trazer a origem da transformação para a origem real, `rotate(45deg)` é a transformação original e `translate(-100%, 50%)` é a tradução para restaurar a origem da transformação à sua localização original.

Por padrão, a origem de uma transformação é `center` (centro).

## Sintaxe

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
```

A propriedade `transform-origin` pode ser especificada usando um, dois ou três valores, onde cada valor representa um deslocamento. Deslocamentos que não são definidos explicitamente são redefinidos para seus respectivos [valores iniciais](/pt-BR/docs/Web/CSS/initial_value).

Se um único valor {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} for definido, ele representa o deslocamento horizontal.

Se dois ou mais valores forem definidos e nenhum deles for uma palavra-chave, ou a única palavra-chave utilizada for `center`, então o primeiro valor representa o deslocamento horizontal e o segundo representa o deslocamento vertical.

- Sintaxe de um valor:

  - O valor deve ser um {{cssxref("&lt;length&gt;")}}, um {{cssxref("&lt;percentage&gt;")}}, ou uma das palavras-chave `left`, `center`, `right`, `top` e `bottom`.

- Sintaxe de dois valores:

  - Um valor deve ser um {{cssxref("&lt;length&gt;")}}, um {{cssxref("&lt;percentage&gt;")}}, ou uma das palavras-chave `left`, `center` e `right`.
  - O outro valor deve ser um {{cssxref("&lt;length&gt;")}}, um {{cssxref("&lt;percentage&gt;")}}, ou uma das palavras-chave `top`, `center` e `bottom`.

- Sintaxe de três valores:

  - Os dois primeiros valores são os mesmos da sintaxe de dois valores.
  - O terceiro valor deve ser um {{cssxref("&lt;length&gt;")}}. Ele representa sempre o deslocamento Z.

### Valores

- _x-offset_
  - : É um {{cssxref("&lt;length&gt;")}} ou um {{cssxref("&lt;percentage&gt;")}} que descreve a distância a partir da borda esquerda da caixa onde a origem da transformação é definida.
- _offset-keyword_
  - : É uma das palavras-chave `left`, `right`, `top`, `bottom` ou `center` que descreve o deslocamento correspondente.
- _y-offset_
  - : É um {{cssxref("&lt;length&gt;")}} ou um {{cssxref("&lt;percentage&gt;")}} que descreve a distância a partir da borda superior da caixa onde a origem da transformação é definida.
- _x-offset-keyword_
  - : É uma das palavras-chave `left`, `right` ou `center` que descreve a distância a partir da borda esquerda da caixa onde a origem da transformação é definida.
- _y-offset-keyword_
  - : É uma das palavras-chave `top`, `bottom` ou `center` que descreve a distância a partir da borda superior da caixa onde a origem da transformação é definida.
- _z-offset_
  - : É um {{cssxref("&lt;length&gt;")}} (e nunca um {{cssxref("&lt;percentage&gt;")}} que tornaria a afirmação inválida) que descreve a distância do olho do usuário onde a origem z=0 é definida.

As palavras-chave são atalhos convenientes e correspondem aos seguintes valores de {{cssxref("&lt;percentage&gt;")}}:

| Keyword  | Value  |
| -------- | ------ |
| `left`   | `0%`   |
| `center` | `50%`  |
| `right`  | `100%` |
| `top`    | `0%`   |
| `bottom` | `100%` |

## Definição formal

{{CSSInfo}}

> **Nota:** O valor inicial de `transform-origin` é `0 0` para todos os elementos SVG, exceto para elementos `<svg>` raiz e elementos `<svg>` que são filhos diretos de um elemento [foreignObject](/pt-BR/docs/Web/SVG/Element/foreignObject), cujo `transform-origin` é `50% 50%`, assim como outros elementos CSS. Consulte o atributo [transform-origin](/pt-BR/docs/Web/SVG/Attribute/transform-origin) do SVG para obter mais informações.

## Sintaxe formal

{{csssyntax}}

## Exemplos

### Uma demonstração de vários valores de transformação

Este exemplo mostra o efeito de escolher diferentes valores de `transform-origin` para uma variedade de funções de transformação.

```html hidden
<div class="container">
  <div class="example">
    <div class="box box1">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: none;
  </pre>

  <div class="example">
    <div class="box box2">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
  </pre>

  <div class="example">
    <div class="box box3">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box4">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: 100% 100%;
  </pre>

  <div class="example">
    <div class="box box5">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: rotate(30deg);
transform-origin: -1em -3em;
  </pre>

  <div class="example">
    <div class="box box6">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
  </pre>

  <div class="example">
    <div class="box box7">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 0 0;
  </pre>

  <div class="example">
    <div class="box box8">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: scale(1.7);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box9">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewX(50deg);
transform-origin: 100% -30%;
  </pre>

  <div class="example">
    <div class="box box10">&nbsp;</div>
    <div class="box original">&nbsp;</div>
  </div>

  <pre>
transform: skewY(50deg);
transform-origin: 100% -30%;
  </pre>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 20px;
}

.example {
  position: relative;
  margin: 0 2em 4em 5em;
}

.box {
  display: inline-block;
  width: 3em;
  height: 3em;
  border: solid 1px;
  background-color: palegreen;
}

.original {
  position: absolute;
  left: 0;
  opacity: 20%;
}

.box1 {
  transform: none;
}

.box2 {
  transform: rotate(30deg);
}

.box3 {
  transform: rotate(30deg);
  transform-origin: 0 0;
}

.box4 {
  transform: rotate(30deg);
  transform-origin: 100% 100%;
}

.box5 {
  transform: rotate(30deg);
  transform-origin: -1em -3em;
}

.box6 {
  transform: scale(1.7);
}

.box7 {
  transform: scale(1.7);
  transform-origin: 0 0;
}

.box8 {
  transform: scale(1.7);
  transform-origin: 100% -30%;
}

.box9 {
  transform: skewX(50deg);
  transform-origin: 100% -30%;
}

.box10 {
  transform: skewY(50deg);
  transform-origin: 100% -30%;
}
```

{{EmbedLiveSample('A_demonstration_of_various_transform_values', '', 1350) }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadorres

{{Compat}}

## Veja também

- [Usando transformações CSS](/pt-BR/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
- <https://css-tricks.com/almanac/properties/t/transform-origin/>
