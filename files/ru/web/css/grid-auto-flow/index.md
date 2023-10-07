---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
---

CSS-свойство управляет поведением автоматически размещаемых элементов, точно указывая, как они попадают в сетку.

{{EmbedInteractiveExample("pages/css/grid-auto-flow.html")}}

## Синтаксис

```css
/* Ключевые свойства и значения */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Глобальные значения */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: unset;
```

Свойство можно использовать в двух вариантах:

- с одним ключевым значением: `row`, `column`, или `dense`.
- с двумя значениями: `row dense` или `column dense`.

### Значения

- `row`
  - : Ключевое слово, указывающее размещать элементы, заполняя поочерёдно каждую строку и добавляя новые строки по мере необходимости. Это значение используется по умолчанию.
- `column`
  - : Ключевое слово, указывающее размещать элементы, заполняя поочерёдно каждый столбец и добавляя новые столбцы по мере необходимости.
- `dense`
  - : Ключевое слово, указывающее заполнять элементами свободное пространство сетки. Это может привести к нарушению порядка, т.к. элементы будут выстраиваться не в соответствии со своим расположением, а в соответствии с размером.Если свойство не используется, алгоритм разместит элементы строго по порядку, вне зависимости от наличия свободных ячеек.

### Formal syntax

{{csssyntax}}

## Пример

### HTML Content

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

### CSS Content

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

{{EmbedLiveSample("Пример", "200px", "230px")}}

## Спецификация

{{Specifications}}

{{cssinfo}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- Related CSS properties: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout](/ru/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)_
- Video tutorial: _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_
