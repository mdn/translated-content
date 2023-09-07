---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
---

A propriedade de CSS **`grid-auto-flow`** controla como o algoritmo de arrumação automática funciona, especificando exatamente como os itens fluirão no grid.

```css
/* Keywords Chaves */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Valores globais */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: unset;
```

{{cssinfo}}

## Syntaxe

Esta propriedade pode ser de duas maneiras:

- uma única keyword (palavra-chave): `row(linha)`, `column`(coluna), ou `dense(denso)`.
- duas keywords (palavras-chave): `row dense(linha densa)` ou `column dense(coluna densa)`.

### Valores

- `row` (linha)
  - : Keyword (palavra-chave) que determina que o algoritmo de arrumação automática coloca os itens preenchendo cada linha de uma vez, adicionando novas linhas se necessário. Se nem `row` (linha) ou `column` (coluna) for especificado, `row` (linha) é assumido.
- `column` (coluna)
  - : É uma keyword (palavra-chave) que determina que o algoritmo de arrumação automática coloque os itens preenchendo colunas, adicionando novas se necessário.
- `dense` (denso)

  - : Keyword (palavra-chave) que determina que o algoritmo de arrumação automática use um formato de compactação "denso", que tenta preencher os espaços anteriores do grid caso receba itens menores após. Isto talvez deixe os itens fora de ordem, preenchendo espaços deixados por itens maiores.

    Se omitido, o algoritmo "esparso" é utilizado, onde o algoritmo de arrumação somente "avança" no grid ao colocar os itens, nunca voltando para preencher os espaços. Isso garante que todos os itens colocados automaticamente apareçam "em ordem", mesmo que deixem espaçs que poderiam ser preenchidos por itens posteriores.

### Sintaxe Formal

{{csssyntax}}

## Exemplo

### Conteúdo HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="direction" onchange="changeGridAutoFlow()">
  <option value="column">column</option>
  <option value="row">row</option>
</select>
<input id="dense" type="checkbox" onchange="changeGridAutoFlow()" />
<label for="dense">dense</label>
```

### Conteúdo CSS

```css
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column; /* or 'row', 'row dense', 'column dense' */
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}
```

```js hidden
function changeGridAutoFlow() {
  var grid = document.getElementById("grid");
  var direction = document.getElementById("direction");
  var dense = document.getElementById("dense");
  var gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}
```

{{EmbedLiveSample("Example", "200px", "230px")}}

## Especificações

| Especificação                                                          | Status                 | Comentário        |
| ---------------------------------------------------------------------- | ---------------------- | ----------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-auto-flow", "grid-auto-flow")}} | {{Spec2("CSS3 Grid")}} | Definição Inicial |

## Compatibilidade com navegadores

{{Compat("css.properties.grid-auto-flow")}}

## Veja Também

- Propriedades CSS relacionadas: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid")}}
- Guia de Grid Layout: _[Arrumação automática no grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)_
- Video tutorial: _[Introduzindo arrumação automática no grid e ordem](http://gridbyexample.com/video/series-auto-placement-order/)_

1. [**CSS**](/pt-BR/docs/Web/CSS)
2. [**CSS Reference**](/pt-BR/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
4. **Guias**

   1. [Conceitos básicos do grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   2. [Relacionamento com outros tipos de layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
   3. [Arrumação baseada em linha](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
   4. [Grid template areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [Layout usando named grid lines](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
   6. [Arrumação automática no grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [Alinhamento de Box no grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [Grids, logical values e writing modes](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS Grid Layout e Acessibilidade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS Grid Layout e Progressive Enhancement](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [Identificando layouts comuns usando grids](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Propriedades**

   1. [grid](/pt-BR/docs/Web/CSS/grid)
   2. [grid-area](/pt-BR/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/pt-BR/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/pt-BR/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/pt-BR/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/pt-BR/docs/Web/CSS/grid-column)
   7. [grid-column-end](/pt-BR/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/pt-BR/docs/Web/CSS/grid-column-gap)
   9. [grid-column-start](/pt-BR/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/pt-BR/docs/Web/CSS/grid-gap)
   11. [grid-row](/pt-BR/docs/Web/CSS/grid-row)
   12. [grid-row-end](/pt-BR/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/pt-BR/docs/Web/CSS/grid-row-gap)
   14. [grid-row-start](/pt-BR/docs/Web/CSS/grid-row-start)
   15. [grid-template](/pt-BR/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/pt-BR/docs/Web/CSS/grid-template-areas)
   17. [grid-template-columns](/pt-BR/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/pt-BR/docs/Web/CSS/grid-template-rows)

6. **Glossário**

   1. [Grid lines](/pt-BR/docs/Glossary/Grid_lines)
   2. [Grid tracks](/pt-BR/docs/Glossary/Grid_tracks)
   3. [Grid cell](/pt-BR/docs/Glossary/Grid_cell)
   4. [Grid areas](/pt-BR/docs/Glossary/Grid_areas)
   5. [Gutters](/pt-BR/docs/Glossary/Gutters)
   6. [Grid row](/pt-BR/docs/Glossary/Grid_rows)
   7. [Grid column](/pt-BR/docs/Glossary/Grid_column)
