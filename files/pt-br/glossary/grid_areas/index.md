---
title: Grid Areas
slug: Glossary/Grid_Areas
---

Um **grid area** é um ou mais {{glossary("grid cell", "grid cells")}} que compõem uma área retangular do grid. As Grid Areas quando se coloca um item usando [line-based placement](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid) (posicionamento baseado em colunas e linha)ou quando define áreas usando [named grid areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)(substituindo o nome).

![Image showing a highlighted grid area](1_grid_area.png)

Áreas do Grid devem ser de natureza regutangular; não é possível criar por exemplo uma área de grid em forma de T ou L .

No exemplo abaixo temos um grid contêiner com dois items de grid, nomeamos esses com a propriedade {{cssxref("grid-area")}} e em seguida colocamos eles no grid usando {{cssxref("grid-template-areas")}}. Isso cria duas áreas de grid, uma cobrindo 4 áreas do grid e a outra duas áreas do grid.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    "a a b"
    "a a b";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
```

```html
<div class="wrapper">
  <div class="item1">Item</div>
  <div class="item2">Item</div>
</div>
```

{{ EmbedLiveSample('example_1', '300', '280') }}

## Saiba Mais

### Property reference

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-area")}}

### Further reading

- CSS Grid Layout Guide: _[Basic concepts of grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
- CSS Grid Layout Guide: _[Grid template areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- [Definition of Grid Areas in the CSS Grid Layout specification](https://drafts.csswg.org/css-grid/#grid-area-concept)
