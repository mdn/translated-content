---
title: gap
slug: Web/CSS/gap
translation_of: Web/CSS/gap
---

{{CSSRef}}

A propriedade {{CSSxRef("", "CSS")}}  **`gap`** define os espaços ({{glossary("gutters", "entrelinhas")}}) entre as linhas e colunas. É uma {{CSSxRef("Shorthand_properties", "propriedade shorthand")}} para {{CSSxRef("row-gap")}} e {{CSSxRef("column-gap")}}.

{{EmbedInteractiveExample("pages/css/gap.html")}}

É importante notar que `grid-gap` é um pseudônimo para esta propriedade.

## Sintaxe

```css
/* Um valor de comprimento */
/* Tipo: <length> */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* Um valor de porcentagem */
/* Tipo: <percentage> */
gap: 16%;
gap: 100%;

/* Dois valores de comprimento */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* Um ou dois valores de porcentagem */
gap: 16% 100%;
gap: 21px 82%;

/* Valores de calc() */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Valores globais */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

Esta propriedade é especificada como um valor para `<'row-gap'>` seguido opcionalmente por um valor para `<'column-gap'>`. Se o valor para `<'column-gap'>` for omitido, este será definido como o mesmo valor de `<'row-gap'>`.

Os valores de `<'row-gap'>` e `<'column-gap'>` são ambos especificados como `<length>` ou `<percentage>`.

### Valores

- {{CSSxRef("&lt;length&gt;")}}
  - : É o comprimento do espaçamento que separa as linhas do grid.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : É o comprimento do espaçamento que separa as linhas do grid, relativo à dimensão do elemento.
