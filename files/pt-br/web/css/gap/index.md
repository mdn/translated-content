---
title: gap
slug: Web/CSS/gap
---

{{CSSRef}}

A propriedade {{CSSxRef("", "CSS")}} **`gap`** define os espaços ({{glossary("gutters")}}) entre as linhas e colunas. É uma {{CSSxRef("Shorthand_properties", "propriedade shorthand")}} para {{CSSxRef("row-gap")}} e {{CSSxRef("column-gap")}}.

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
  - : É o comprimento do espaçamento (gutter) que separa as linhas do grid.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : É o comprimento do espaçamento (gutter) que separa as linhas do grid, relativo à dimensão do elemento.

## Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

### Flex layout

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Resultado

{{EmbedLiveSample("Flex_layout", "auto", 250)}}

### Grid layout

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Resultado

{{EmbedLiveSample("Grid_layout", "auto", 250)}}

### Layout de múltiplas colunas

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  <code>gap</code> property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Resultado

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Propriedades CSS relacionadas: {{CSSxRef("row-gap")}}, {{CSSxRef("column-gap")}}
- Guia para layout Grid: _{{CSSxRef("CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters", "Conceitos básicos de Grid Layout - Gutters")}}_
