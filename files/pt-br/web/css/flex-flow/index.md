---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`flex-flow`** é uma [junção](/pt-BR/docs/Web/CSS/Shorthand_properties) das propriedades {{cssxref("flex-direction")}} e {{cssxref("flex-wrap")}}.

{{EmbedInteractiveExample("pages/css/flex-flow.html")}}

## Sintaxe

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* Global values */
flex-flow: inherit;
flex-flow: initial;
flex-flow: unset;
```

### Valores

Consulte {{cssxref("flex-direction")}} e {{cssxref("flex-wrap")}} para ver os detalhes sobre os valores.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
elemento {
  /* O eixo principal é a direção do bloco com main-start e main-end invertidos.
   * Os itens flex estão dispostos em múltiplas linhas */
  flex-flow: column-reverse wrap;
}
```

## Especificações

{{Specifications}}

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Guia de Flexbox CSS: _[Conceitos básicos de flexbox](/pt-BR/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- Guia de Flexbox CSS: _[Ordenando itens flex](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
