---
title: place-items
slug: Web/CSS/place-items
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Grid
  - CSS Property
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.place-items
---
{{CSSRef}}

Сокращённое свойство [CSS](/ru/docs/Web/CSS) **`place-items`** позволяет одновременно выравнивать элементы и колонки, и ряда (т.е. по свойствам {{CSSxRef("align-items")}} и {{CSSxRef("justify-items")}}) в соответствующей системе раскладки, такой как [гриды](/ru/docs/Web/CSS/CSS_Grid_Layout) или [флексбоксы](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout). Если задано одно значение, оно используется для выравнивания и в колонке, и в ряду.

{{EmbedInteractiveExample("pages/css/place-items.html")}}

## Связанные свойства

Это свойство является сокращением для следующих CSS-свойств:

- [`align-items`](/ru/docs/Web/CSS/align-items)
- [`justify-items`](/ru/docs/Web/CSS/justify-items)

## Синтаксис

```css
/* Значения в виде ключевых слов */
place-items: center;
place-items: normal start;

/* Позиционное выравнивание */
place-items: center normal;
place-items: start legacy;
place-items: end normal;
place-items: self-start legacy;
place-items: self-end normal;
place-items: flex-start legacy;
place-items: flex-end normal;
place-items: left legacy;
place-items: right normal;

/* Выравнивание по базовой линии */
place-items: baseline normal;
place-items: first baseline legacy;
place-items: last baseline normal;
place-items: stretch legacy;

/* Глобальные значения */
place-items: inherit;
place-items: initial;
place-items: revert;
place-items: unset;
```

### Значения

Записывается одним из двух способов:

- Одно значение {{cssxref("align-items")}}, которое используется для определения выравнивания как колонки, так и ряда.
- Значение {{cssxref("align-items")}}, определяющее выравнивание колонки, после которого следует значение {{cssxref("justify-items")}}, задающее выравнивание для ряда.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Выравнивание элементов во флекс-контейнере

Для флекс-раскладки свойства {{cssxref("justify-self")}} или {{cssxref("justify-items")}} не применяются, поскольку элементы размещаются по главной оси, поэтому второе значение будет проигнорировано.

```css hidden
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
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="container">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
</div>

<div class="row">
  <label for="values">place-items: </label>
  <select id="values">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
let values = document.getElementById('values');
let container = document.getElementById('container');

values.addEventListener('change', function (evt) {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#container {
  height:200px;
  width: 240px;
  place-items: stretch; /* В выпадающем списке ниже можно изменить это значение */
  background-color: #8c8c8c;
  display: flex;
}

```

#### Результат

{{EmbedLiveSample("Выравнивание элементов во флекс-контейнере", 260, 290)}}

### Выравнивание элементов в грид-контейнере

В следующем грид-контейнере есть элементы, которые меньше грид-области, в которой они находятся, поэтому `place-items` будет выравнивать их по оси колонки и оси ряда.

```css hidden
div > div {
  box-sizing: border-box;
  border: 2px solid #8c8c8c;
}

#item1 {
  background-color: #8cffa0;
  min-height: 30px;
  font-size: 2em;
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
}

select {
  font-size: 16px;
}

.row {
  margin-top: 10px;
}
```

```html hidden
<div id="gridcontainer">
  <div id="item1">1</div>
  <div id="item2">2</div>
  <div id="item3">3</div>
  <div id="item4">4</div>
  <div id="item5">5</div>
</div>

<div class="row">
  <label for="gridvalues">place-items: </label>
  <select id="gridvalues">
    <option value="stretch">stretch</option>
    <option value="start">start</option>
    <option value="center">center</option>
    <option value="end">end</option>
    <option value="left">left</option>
    <option value="right">right</option>
    <option value="auto center">auto center</option>
    <option value="normal start">normal start</option>
    <option value="center normal">center normal</option>
    <option value="start auto">start auto</option>
    <option value="end normal">end normal</option>
    <option value="self-start auto">self-start auto</option>
    <option value="self-end normal">self-end normal</option>
    <option value="flex-start auto">flex-start auto</option>
    <option value="flex-end normal">flex-end normal</option>
    <option value="left auto">left auto</option>
    <option value="right normal">right normal</option>
    <option value="baseline normal">baseline normal</option>
    <option value="first baseline auto">first baseline auto</option>
    <option value="last baseline normal">last baseline normal</option>
    <option value="stretch auto">stretch auto</option>
  </select>
</div>
```

```js hidden
let values = document.getElementById('gridvalues');
let container = document.getElementById('gridcontainer');

values.addEventListener('change', function (evt) {
  container.style.placeItems = evt.target.value;
});
```

#### CSS

```css
#gridcontainer {
  height:200px;
  width: 240px;
  place-items: stretch; /* В выпадающем списке ниже можно изменить это значение */
  background-color: #8c8c8c;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#gridcontainer > div {
  width: 50px;
}

```

#### Результат

{{EmbedLiveSample("Выравнивание элементов в грид-контейнере", 260, 290)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Руководство по флексбоксу: _[Основные понятия Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Руководство по флексбоксу: _[Выравнивание элементов во флекс-контейнере](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- Руководство по гридам: _[Выравнивание блоков в грид-раскладке](/ru/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)_
- [Выравнивание полей CSS](/ru/docs/Web/CSS/CSS_Box_Alignment)
- Свойство {{CSSxRef("align-items")}}
- Свойство {{CSSxRef("align-self")}}
- Свойство {{CSSxRef("justify-items")}}
- Свойство {{CSSxRef("justify-self")}}
