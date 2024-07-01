---
title: translate
slug: Web/CSS/translate
---

{{CSSRef}}

A propriedade **`translate`** [CSS](/pt-BR/docs/Web/CSS) do CSS, permite que você especifique transformações `translate` individualmente e independentemente da propriedade {{CSSxRef("transform")}}. É mais adequado para o uso de interface de usuário, e nos poupa quando se trata de lembrar a ordem exata que devemos especificar nos valores das funções de `transform`.

## Syntax

```css
/* Propriedades principais */
translate: none;

/* Valores únicos */
translate: 100px;
translate: 50%;

/* Dois valores */
translate: 100px 200px;
translate: 50% 105px;

/* Três valores */
translate: 50% 105px 5rem;

/* Valores Globais */
translate: inherit;
translate: initial;
translate: revert;
translate: revert-layer;
translate: unset;
```

### Valores

- Único {{cssxref("&lt;length-percentage&gt;")}} valor
  - : Um {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} que especifica o deslocamento `translate` ao longo do eixo-X. Equivalente a função `translate()` (2D translation) com um único valor especificado.
- Dois {{cssxref("&lt;length-percentage&gt;")}} valores
  - : Dois {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} que especifica os deslocametos `translate` ao longo dos eixos X e Y (respectivamente) de uma 2D translation. Equivalente a função `translate()` (2D translation) com dois valores especificados.
- Três valores
  - : Dois {{cssxref("&lt;length-percentage&gt;")}} e um único {{cssxref("&lt;length&gt;")}} valores que especifica os deslocamentos dos eixos X, Y, e Z (respectivamente) de uma 3D translation. Equivalente a função `translate3d()` (3D translation).
- `none`
  - : Especifica que nenhum deslocamento deva ser aplicado.

## Definição formal

{{CSSInfo}}

## Sintaxe formal

{{CSSSyntax}}

## Exemplos

### HTML

```html
<div>
  <p class="translate">Translation</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.translate {
  transition: translate 1s;
}

div:hover .translate {
  translate: 200px 50px;
}
```

### Resultado

{{EmbedLiveSample('Exemplos')}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{cssxref('scale')}}
- {{cssxref('rotate')}}
- {{cssxref('transform')}}

Nota: `skew` não é um valor independente de `transform`
