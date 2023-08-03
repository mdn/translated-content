---
title: align-content
slug: Web/CSS/align-content
---

{{CSSRef}}

Свойство {{cssxRef('', 'CSS')}} **`align-content`** устанавливает распределение пространства между и вокруг элементами контента вдоль поперечной оси {{cssxRef('CSS_Flexible_Box_Layout', 'flexbox')}} контейнера или вдоль блочной оси {{cssxRef('CSS_Grid_Layout', 'grid')}} контейнера.

The interactive example below use Grid Layout to demonstrate some of the values of this property.

{{EmbedInteractiveExample("pages/css/align-content.html")}}

Это свойство не влияет на однострочные flex-контейнеры (т.е. с `flex-wrap: nowrap`)

## Синтаксис

```css
/* Основное позиционное выравнивание */
/* align-content не принимает значения left и right */
align-content: center; /* Расположить элементы вокруг центра */
align-content: start; /* Расположить элементы в начале */
align-content: end; /* Расположить элементы в конце */
align-content: flex-start; /* Расположить элементы flex в начале */
align-content: flex-end; /* Расположить элементы flex в конце */

/* Нормальное выравнивание */
align-content: normal;

/* Выравнивание по базовой линии */
align-content: baseline;
align-content: first baseline;
align-content: last baseline;

/* Распределённое выравнивание */
align-content: space-between; /* Распределить элементы равномерно
                                 Первый элемент находится на одном уровне с началом,
                                 последней - совпадает с концом */
align-content: space-around; /* Распределить элементы равномерно
                                 Элементы имеют половинное пространство
                                 на каждом конце */
align-content: space-evenly; /* Распределить элементы равномерно
                                 Элементы имеют одинаковое пространство вокруг них */
align-content: stretch; /* Распределить элементы равномерно
                                 Растянуть 'auto'-размерные элементы, чтобы заполнить
                                 контейнер */

/* Выравнивание переполнения (overflow) */
align-content: safe center;
align-content: unsafe center;

/* Глобальные значения */
align-content: inherit;
align-content: initial;
align-content: unset;
```

### Значения

- `start`
  - : Элементы расположены вплотную друг к другу, прижавшись к началу контейнера выравнивания по поперечной оси.
- `end`
  - : Элементы расположены вплотную друг к другу, прижавшись к концу контейнера выравнивания по поперечной оси.
- `flex-start`
  - : Элементы расположены вплотную друг к другу, прижавшись к краю контейнера выравнивания в зависимости от поперечной стороны начала (cross-start) контейнера flex.
    Это относится только к элементам макета flex. Для элементов, которые не являются потомками flex контейнера, это значение трактуется как `start`.
- `flex-end`
  - : Элементы расположены вплотную друг к другу, прижавшись к краю контейнера выравнивания в зависимости от поперечной стороны конца (cross-end) контейнера flex.
    Это относится только к элементам макета flex. Для элементов, которые не являются потомками flex контейнера, это значение трактуется как `end`.
- `center`
  - : Элементы расположены вплотную друг к другу в центре контейнера выравнивания по поперечной оси.
- `normal`
  - : Элементы расположены в их дефолтной позиции как если бы `align-content` не было определено.
- `baseline first baseline`
  `last baseline`
  - : ![базовая линия - это линия, на которой «сидит» большинство букв и ниже которой располагаются нижние выносные элементы (свисания).](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/410px-Typography_Line_Terms.svg.png)Определяет участие в выравнивании первой или последней базовой линии: выравнивает базовую линию выравнивания первого или последнего базового набора блока с соответствующей базовой линией в общем первом или последнем базовом наборе всех блоков в его группе совместного использования базовой линии.
    Резервное выравнивание для `first baseline` равно `start`, для `last baseline` - `end`.
- `space-between`
  - : Элементы равномерно распределены внутри контейнера выравнивания вдоль поперечной оси. Интервал между каждой парой соседних элементов одинаков. Первый элемент находится на одном уровне с начальной кромкой контейнера выравнивания на поперечной оси, а последний элемент находится на одном уровне с конечной кромкой контейнера выравнивания на поперечной оси.
- `space-around`
  - : Элементы равномерно распределены внутри контейнера выравнивания вдоль поперечной оси. Интервал между каждой парой соседних предметов одинаков. Пустое пространство до первого и после последнего элемента равно половине пространства между каждой парой смежных элементов.
- `space-evenly`
  - : Элементы равномерно распределены внутри контейнера выравнивания вдоль поперечной оси. Интервал между каждой парой соседних элементов, начальным краем и первым элементом, а также конечным краем и последним элементом абсолютно одинаков.
- `stretch`
  - : Если объединённый размер элементов вдоль поперечной оси меньше размера контейнера выравнивания, размер любого `auto`-размерного элемента увеличивается одинаково (не пропорционально), но при этом соблюдаются ограничения, налагаемые {{cssxRef('max-height')}}/{{cssxRef('max-width')}} (или эквивалентной функциональности), так что объединённый размер точно заполняет контейнер выравнивания вдоль поперечной оси.
- `safe`
  - : Используется вместе с ключевым словом выравнивания. Если выбранное ключевое слово означает, что элемент переполняет контейнер выравнивания, что приводит к потере данных, вместо этого элемент выравнивается, как если бы режим выравнивания был `start`.
- `unsafe`
  - : Используется вместе с ключевым словом выравнивания. Независимо от относительных размеров элемента и контейнера выравнивания и от того, может ли произойти переполнение, которое приводит к потере данных, данное значение выравнивания учитывается.

### Формальный синтаксис

{{csssyntax}}

## Пример

### CSS

```css
#container {
  height: 200px;
  width: 240px;
  align-content: center; /* Can be changed in the live sample */
  background-color: #8c8c8c;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
}

div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
}

#item2 {
  background-color: #a0c8ff;
  min-height: 50px;
}

#item3 {
  background-color: #ffa08c;
  min-height: 40px;
}

#item4 {
  background-color: #ffff8c;
  min-height: 60px;
}

#item5 {
  background-color: #ff8cff;
  min-height: 70px;
}

#item6 {
  background-color: #8cffff;
  min-height: 50px;
  font-size: 30px;
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

### HTML

```html
<div id="container" class="flex">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
  <div id="item6">6</div>
</div>

<div class="row">
  <label for="display">display: </label>
  <select id="display">
    <option value="flex">flex</option>
    <option value="grid">grid</option>
  </select>
</div>

<div class="row">
  <label for="values">align-content: </label>
  <select id="values">
    <option value="normal">normal</option>
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center" selected>center</option>
    <option value="space-between">space-between</option>
    <option value="space-around">space-around</option>
    <option value="space-evenly">space-evenly</option>

    <option value="start">start</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>

    <option value="baseline">baseline</option>
    <option value="first baseline">first baseline</option>
    <option value="last baseline">last baseline</option>

    <option value="safe center">safe center</option>
    <option value="unsafe center">unsafe center</option>
    <option value="safe right">safe right</option>
    <option value="unsafe right">unsafe right</option>
    <option value="safe end">safe end</option>
    <option value="unsafe end">unsafe end</option>
    <option value="safe flex-end">safe flex-end</option>
    <option value="unsafe flex-end">unsafe flex-end</option>
  </select>
</div>
```

```js hidden
var values = document.getElementById("values");
var display = document.getElementById("display");
var container = document.getElementById("container");

values.addEventListener("change", function (evt) {
  container.style.alignContent = evt.target.value;
});

display.addEventListener("change", function (evt) {
  container.className = evt.target.value;
});
```

### Результат

{{EmbedLiveSample('Пример', 260, 290)}}

## Спецификации

{{Specifications("css.properties.align-content.grid_context")}}
{{Specifications("css.properties.align-content.grid_context")}}

## Совместимость с браузерами

### Support in Flex layout

{{Compat}}

### Support in Grid layout

{{Compat}}

## Смотрите также

- [Использование гибких блоков CSS](/ru/docs/CSS/Using_CSS_flexible_boxes)
