---
title: max-width
slug: Web/CSS/max-width
---

{{CSSRef}}

A propriedade **`max-width`** do [CSS](/pt-BR/docs/Web/CSS) estabelece a largura máxima de um elemento. Ele evita que o [valor usado](/pt-BR/docs/Web/CSS/CSS_cascade/used_value) da propriedade {{cssxref("width")}} se torne maior que o valor especificado por `max-width`.

{{InteractiveExample("CSS Demo: max-width")}}

```css interactive-example-choice
max-width: 150px;
```

```css interactive-example-choice
max-width: 20em;
```

```css interactive-example-choice
max-width: 75%;
```

```css interactive-example-choice
max-width: 20ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the maximum width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

`max-width` substitui {{cssxref("width")}}, mas {{cssxref("min-width")}} substitui `max-width`.

## Sintaxe

```css
/* <length> valor */
max-width: 3.5em;

/* <porcentagem> valor */
max-width: 75%;

/* Valores de keyword */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content(20em);

/* Valores Globais */
max-width: inherit;
max-width: initial;
max-width: revert;
max-width: revert-layer;
max-width: unset;
```

### Valores

- {{cssxref("&lt;length&gt;")}}
  - : Define a `max-width` como um valor absoluto.
- {{cssxref("&lt;percentage&gt;")}}
  - : Define a `max-width` como uma porcentagem da largura do bloco que o contém.
- `none`
  - : A largura não possui valor máximo. (padrão)
- `max-content` {{experimental_inline()}}
  - : A `max-width` intrínseca preferida.
- `min-content` {{experimental_inline()}}
  - : O mínimo `max-width` intrínseco.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Use a fórmula `fit-content` com o espaço disponível substituído pelo argumento especificado, i.e. `min(max-content, max(min-content, argumento)).`

## Preocupações de Acessibilidade

Certifique-se que os elementos definidos com `max-width` não sejam truncados e/ou não obscureçam outros conteúdos quando a página for ampliada para aumentar o tamanho do texto.

- [MDN Understanding WCAG, explicações da Diretriz 1.4](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_inclusive_separating_foreground_from_background)
- [Compreender o Critério de Sucesso 1.4.4 | W3C Entendendo as WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### Definindo a largura máxima em pixels

Neste exemplo, o "child" terá 150 pixels de largura ou a largura do "parent", o que for menor:

#### HTML

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

#### Resultado

{{EmbedLiveSample("Setting_max_width_in_pixels", 350, 100)}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [O box model](/pt-BR/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("width")}}, {{cssxref("min-width")}}
- The mapped logical properties: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}
