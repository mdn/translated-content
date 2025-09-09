---
title: grid
slug: Web/CSS/grid
---

A propriedade **`grid`** do CSS é uma [abreviação](/pt-BR/docs/Web/CSS/CSS_cascade/Shorthand_properties) das propriedades que definem todas as propriedades da grade explícita ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, e {{cssxref("grid-template-areas")}}), e todas as propriedades implícitas da grade ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, e {{cssxref("grid-auto-flow")}}), em uma única declaração.

{{InteractiveExample("CSS Demo: grid")}}

```css interactive-example-choice
grid: auto-flow / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid: auto-flow dense / 40px 40px 1fr;
```

```css interactive-example-choice
grid: repeat(3, 80px) / auto-flow;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-column: auto / span 3;
  grid-row: auto / span 2;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-column: auto / span 2;
}
```

> [!NOTE]
> Você pode especificar apenas as propriedades explícitas _ou_ implícitas da grade em uma única declaração `grid`. As subpropriedades que você não especifica são definidas como seu valor inicial, como é normal para abreviações. Além disso, as propriedades da medianiz NÃO são redefinidas por essa abreviação.

## Sintaxe

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: unset;
```

### Valores

- `<'grid-template'>`
  - : Define o {{cssxref("grid-template")}} incluindo {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} e {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Configura um fluxo automático definindo as faixas de linha explicitamente por meio da propriedade {{cssxref("grid-template-rows")}} (e a propriedade {{cssxref("grid-template-columns")}} para `none`) e especificando como repetir automaticamente as faixas da coluna via {{cssxref("grid-auto-columns")}} (e setando {{cssxref("grid-auto-rows")}} para `auto`). {{cssxref("grid-auto-flow")}} também é definido para a `column`, de acordo com `dense`, se especificado.

    Todas as outras subpropriedades `grid` são redefinidas para seus valores iniciais.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Configura um fluxo automático definindo as faixas da coluna explicitamente por meio da propriedade {{cssxref("grid-template-columns")}} (e a propriedade {{cssxref("grid-template-rows")}} para `none`) e especificando como repetir automaticamente as faixas de linha via {{cssxref("grid-auto-rows")}} (e setando {{cssxref("grid-auto-columns")}} para `auto`). {{cssxref("grid-auto-flow")}} também é definido para `row` de acordo com `dense`, se especificado.

    Todas as outras subpropriedades `grid` são redefinidas para seus valores iniciais.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### Conteúdo HTML

```html
<div id="container">
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

### Conteúdo CSS

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

### Resultado

{{EmbedLiveSample("Example", "100%", 150)}}

## Especificações

{{Specifications}}

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Propriedades CSS relacionadas: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Guia de Layout de Grade: _[Line-based placement with CSS Grid](/pt-BR/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- Guia de Layout de Grade: _[Grid template areas - Grid definition shorthands](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_

1. [**CSS**](/pt-BR/docs/Web/CSS)
2. [**CSS Reference**](/pt-BR/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_grid_layout)
4. **Guias**
   1. [Basics concepts of grid layout](/pt-BR/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
   2. [Relationship to other layout methods](/pt-BR/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
   3. [Line-based placement](/pt-BR/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
   4. [Grid template areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [Layout using named grid lines](/pt-BR/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
   6. [Auto-placement in grid layout](/pt-BR/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
   7. [Box alignment in grid layout](/pt-BR/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
   8. [Grids, logical values and writing modes](/pt-BR/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
   9. [CSS Grid Layout and Accessibility](/pt-BR/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
   10. [CSS Grid Layout and Progressive Enhancement](/pt-BR/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement)
   11. [Realizing common layouts using grids](/pt-BR/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

5. **Propriedades**
   1. [grid](/pt-BR/docs/Web/CSS/grid)
   2. [grid-area](/pt-BR/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/pt-BR/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/pt-BR/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/pt-BR/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/pt-BR/docs/Web/CSS/grid-column)
   7. [grid-column-end](/pt-BR/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/pt-BR/docs/Web/CSS/column-gap)
   9. [grid-column-start](/pt-BR/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/pt-BR/docs/Web/CSS/gap)
   11. [grid-row](/pt-BR/docs/Web/CSS/grid-row)
   12. [grid-row-end](/pt-BR/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/pt-BR/docs/Web/CSS/row-gap)
   14. [grid-row-start](/pt-BR/docs/Web/CSS/grid-row-start)
   15. [grid-template](/pt-BR/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/pt-BR/docs/Web/CSS/grid-template-areas)
   17. [grid-template-columns](/pt-BR/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/pt-BR/docs/Web/CSS/grid-template-rows)

6. **Glossário**
   1. [Grid lines](/pt-BR/docs/Glossary/Grid_lines)
   2. [Grid tracks](/pt-BR/docs/Glossary/Grid_tracks)
   3. [Grid cell](/pt-BR/docs/Glossary/Grid_cell)
   4. [Grid areas](/pt-BR/docs/Glossary/Grid_Areas)
   5. [Gutters](/pt-BR/docs/Glossary/Gutters)
   6. [Grid row](/pt-BR/docs/Glossary/Grid_Row)
   7. [Grid column](/pt-BR/docs/Glossary/Grid_column)
