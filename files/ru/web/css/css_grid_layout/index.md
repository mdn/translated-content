---
title: CSS Grid Layout
slug: Web/CSS/CSS_grid_layout
---

**CSS Grid Layout** отлично подходит для того, чтобы разделить страницу на основные области или определить взаимосвязь размера, позиционирования и уровня между частями контента, состоящего из HTML примитивов.

Как и таблицы (\<table>), grid layout позволяет выравнивать элементы в столбцы и строки. Тем не менее, с помощью CSS grid работать с элементами гораздо проще, чем с таблицами. Например, дочерние элементы grid-контейнера могут наслаиваться друг на друга как и другие элементы при помощи CSS.

## Базовый пример

В приведённом ниже примере показана сетка состоящая из трёх колонок, в которой минимальная ширина элементов строки установлена в "100px", а максимальная в "auto". Grid-элементы располагаются в сетке линейно.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233, 171, 88);
  border-radius: 5px;
  background-color: rgba(233, 171, 88, 0.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{ EmbedLiveSample('example', '500', '440') }}

## Ссылки

### CSS-свойства

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-row-gap")}}
- {{cssxref("grid-column-gap")}}
- {{cssxref("grid-gap")}}

### CSS функции

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### Глоссарий

- [Grid](/ru/docs/Glossary/Grid)
- [Grid Lines](/ru/docs/Glossary/Grid_Lines)
- [Grid Tracks](/ru/docs/Glossary/Grid_Tracks)
- [Grid Cell](/ru/docs/Glossary/Grid_Cell)
- [Grid Area](/ru/docs/Glossary/Grid_Areas)
- [Gutters](/ru/docs/Glossary/Gutters)
- [Grid Axis](/ru/docs/Glossary/Grid_Axis)
- [Grid row](/ru/docs/Glossary/Grid_Rows)
- [Grid column](/ru/docs/Glossary/Grid_Column)

## Руководства

- [Базовая концепция Grid Layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Связь Grid Layout с другими методами компоновки](/ru/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Расположение элементов по грид-линиям с помощью CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Шаблон области сетки](/ru/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Использование именованных линий](/ru/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Авторазмещение в CSS Grid Layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Выравнивание блока в CSS Grid Layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Сетка, логические Значения и Режимы Редактирования](/ru/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout и доступность](/ru/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/ru/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Реализация общих макетов используя CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)
- [Subgrid](/ru/docs/Web/CSS/CSS_Grid_Layout/Subgrid)
- [Masonry Layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout){{Experimental_Inline}}

## Внешние ресурсы

- [Примеры от Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - Коллекция примеров использования и видео уроки](http://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/ru/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)

## Спецификации

| Specification              | Status                  | Comment                                                                                   |
| -------------------------- | ----------------------- | ----------------------------------------------------------------------------------------- |
| {{SpecName("CSS Grid 3")}} | {{Spec2("CSS Grid 3")}} | Adds [masonry](/ru/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout).                          |
| {{SpecName("CSS Grid 2")}} | {{Spec2("CSS Grid 2")}} | Added [subgrids](/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#subgrid). |
| {{SpecName("CSS3 Grid")}}  | {{Spec2("CSS3 Grid")}}  | Initial definition.                                                                       |
