---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}{{SeeCompatTable}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`block-size`** define o tamanho horizontal ou vertical de um elemento bloco. Corresponde à propriedade {{cssxref("width")}} ou {{cssxref("height")}}, dependendo do valor do {{cssxref("writing-mode")}}.

{{InteractiveExample("CSS Demo: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

## Sintaxe

```css
/* valores <length> */
block-size: 300px;
block-size: 25em;

/* valores <percentage> */
block-size: 75%;

/* valores de Keyword */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* valores globais */
block-size: inherit;
block-size: initial;
block-size: unset;
```

Se o modo de escrita está orientado verticalmente, o valor do `block-size` refere-se à largura do elemento; senão, refere-se à altura do elemento. Uma propriedade relacionada é {{cssxref("inline-size")}}, que define as outras dimensões do elemento.

### Valores

A propriedade `block-size` leva os mesmos valores que as propriedades {{cssxref("width")}} e {{cssxref("height")}}.

## Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<p class="exampleText">Example text</p>
```

### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

{{EmbedLiveSample("Example")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- As propriedades: {{cssxref("width")}} and {{cssxref("height")}}
- {{cssxref("writing-mode")}}
