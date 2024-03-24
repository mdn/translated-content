---
title: grid
slug: Web/CSS/grid
---

## Общие сведения

Свойство CSS **`grid`** является сокращённой формой записи, которая устанавливает значения для всех явных свойств сетки (grid) ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, и {{cssxref("grid-template-areas")}}), всех неявных свойств сетки (grid) ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, и {{cssxref("grid-auto-flow")}}), и свойств для промежутков между рядами и столбцами сетки ({{cssxref("grid-column-gap")}} и {{cssxref("grid-row-gap")}}) в одной строчке.

> **Примечание:** В одной строке grid могут быть описаны свойства только одного вида: явные или неявные. Подсвойства, которые не были описаны, принимают, как и в других сокращённых формах записи свойств, значения по умолчанию. Кроме того, при помощи сокращённой формы записи значения свойств для промежутков между рядами и столбцами сетки по умолчанию сбрасываются, несмотря на то, что они не могут быть установлены в сокращённой форме записи.

{{cssinfo}}

## Синтаксис

```css
/* <'grid-template'> значения*/
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

### Значения

- `<'grid-template'>`
  - : Определяет {{cssxref("grid-template")}} (шаблон сетки) включая {{cssxref("grid-template-columns")}} (столбцы), {{cssxref("grid-template-rows")}} (ряды) и {{cssxref("grid-template-areas")}} (области).
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Устанавливает auto-flow явно задавая размещение по рядам с помощью свойства {{cssxref("grid-template-rows")}} (и устанавливая свойство {{cssxref("grid-template-columns")}} в значение `none`) и уточняет, как должно работать авто-повторение столбцов при помощи свойства {{cssxref("grid-auto-columns")}} (и устанавливая {{cssxref("grid-auto-rows")}} в значение `auto`). Свойство {{cssxref("grid-auto-flow")}} может быть так же установлено для столбцов со свойством `dense` если оно определено.Все остальные подсвойства grid сбрасываются в их начальные значения .
- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Устанавливает auto-flow явно задавая размещение по столбцам с помощью свойства {{cssxref("grid-template-columns")}} (и устанавливая свойство {{cssxref("grid-template-rows")}} в значение `none`) и уточняет, как должно работать авто-повторение рядов при помощи свойства {{cssxref("grid-auto-rows")}} (и устанавливая {{cssxref("grid-auto-columns")}} в значение `auto`). Свойство {{cssxref("grid-auto-flow")}} может быть так же установлено для рядов со свойством `dense` если оно определено.Все остальные подсвойства grid сбрасываются в их начальные значения .

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

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

### CSS Content

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

### Результат

{{EmbedLiveSample("Example", "100%", 150)}}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Связанные свойства CSS: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Руководство по разметке сетки: _[Line-based placement with CSS Grid](/ru/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Руководство по разметке сетки: _[Grid template areas - Grid definition shorthands](/ru/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_
