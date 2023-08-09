---
title: Grid
slug: Glossary/Grid
---

_CSS Гриды (они же сетки или CSS Grid)_ устанавливаются с помощью значения `grid` в свойстве `display`; вы можете определить колонки и строки в сетке с помощью свойств {{cssxref("grid-template-columns")}} и {{cssxref("grid-template-rows")}} соответственно.

Сетка, которую вы создаёте, используя эти свойства, является явной сеткой.

If you place content outside of this explicit grid, or if you are relying on auto-placement and the grid algorithm needs to create additional row or column {{glossary("grid tracks", "tracks")}} to hold {{glossary("grid item", "grid items")}}, then extra tracks will be created in the implicit grid. The _implicit grid_ is the grid created automatically due to content being added outside of the tracks defined.

В примере ниже отображена _точная сетка_ из трёх колонок и двух рядов. The _third_ row on the grid is an _implicit grid_ row track, formed due to their being more than the six items which fill the explicit tracks.

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('example', '500', '330') }}

## Дополнительные материалы

### Руководство по свойствам

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Что почитать ещё

- Руководство по CSS Grid: _[Базовые принципы CSS сеток](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)_
