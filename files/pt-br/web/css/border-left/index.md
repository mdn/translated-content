---
title: border-left
slug: Web/CSS/border-left
---

{{CSSRef}}

## Resumo

A **`border-left`** é uma [propriedade shorthand](/pt-BR/docs/Web/CSS/Shorthand_properties) em [CSS](/pt-BR/docs/Web/CSS) que define todas as propriedades da {{cssxref("border")}} esquerda de um elemento.

{{EmbedInteractiveExample("pages/css/border-left.html")}}

Tal como acontece com todas as propriedades abreviadas, `border-left` sempre define os valores de todas as propriedades que possam ser definidas, ainda que estas não tenham sido especificadas. Ela define aquelas que não forem especificadas para os valores padrão. Considere o código a seguir:

```css
border-left-style: dotted;
border-left: thick green;
```

É na verdade o mesmo que:

```css
border-left-style: dotted;
border-left: none thick green;
```

O valor de {{cssxref("border-left-style")}} dado antes de `border-left` é ignorado. Uma vez que o valor padrão de {{cssxref("border-left-style")}} é `none`, não especificar a parte `border-style` resulta em nenhuma borda.

## Propriedades constituintes

Essa propriedade é uma abreviação das seguintes propriedades CSS:

- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}

## Sintaxe

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed blue;

/* Global values */
border-left: inherit;
border-left: initial;
border-left: revert;
border-left: revert-layer;
border-left: unset;
```

Os três valores da propriedade abreviada podem ser especificados em qualquer ordem, e um ou dois deles podem ser omitidos.

### Valores

- `<br-width>`
  - : Veja {{cssxref("border-left-width")}}.
- `<br-style>`
  - : Veja {{cssxref("border-left-style")}}.
- {{cssxref("&lt;color&gt;")}}
  - : Veja {{cssxref("border-left-color")}}.

## Definição formal

{{CSSInfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### Aplicando uma borda esquerda

#### HTML

```html
<div>Essa caixa tem uma borda no seu lado esquerdo.</div>
```

#### CSS

```css
div {
  border-left: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### Resultado

{{EmbedLiveSample('Applying_a_left_border')}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
- [Planos de fundo e bordas](/pt-BR/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [Aprenda CSS: planos de fundo e bordas](/pt-BR/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
