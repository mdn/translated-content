---
title: minmax()
slug: Web/CSS/minmax
---

**`minmax()`** это [CSS](/ru/docs/Web/CSS) функция, определяющая диапазон размеров, который больше или равен _min_ и меньше или равен _max_. Используется в [CSS Grids](/ru/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes).

```css
/* <inflexible-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* <fixed-breadth>, <track-breadth> values */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* <inflexible-breadth>, <fixed-breadth> values */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

## Синтаксис

Функция принимает два параметра, _min_ и _max_.

Каждый параметр может быть значением `<length>`, либо `<percentage>`, либо `<flex>`, или одним из ключевых слов `max-content`, `min-content`, или `auto`.

Если _max_ < _min_, то _max_ игнорируется и `minmax(min,max)` обрабатывается как _min_. As a maximum, a {{cssxref("flex_value","&lt;flex&gt;")}} value sets the flex factor of a grid track; it is invalid as a minimum.

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : A non-negative length.
- {{cssxref("&lt;percentage&gt;")}}
  - : A non-negative percentage relative to the inline size of the grid container in column grid tracks, and the block size of the grid container in row grid tracks. If the size of the grid container depends on the size of its tracks, then the `<percentage>` must be treated as `auto`. The {{glossary("user agent")}} may adjust the intrinsic size contributions of the track to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.
- {{cssxref("&lt;flex&gt;")}}
  - : A non-negative dimension with the unit `fr` specifying the track's flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.
- `max-content`
  - : Represents the largest max-content contribution of the grid items occupying the grid track.
- `min-content`
  - : Represents the largest min-content contribution of the grid items occupying the grid track.
- `auto`
  - : As a maximum, identical to `max-content`. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.

### Формальный синтаксис

{{csssyntax}}

## Пример

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(max-content, 300px) minmax(200px, 1fr) 150px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>
    Item as wide as the content,<br />
    but at most 300 pixels.
  </div>
  <div>Item with flexible width but a minimum of 200 pixels.</div>
  <div>Inflexible item of 150 pixels width.</div>
</div>
```

### Результат

{{EmbedLiveSample("Пример", "100%", 200)}}

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## Смотрите также

- Grid Layout Guide: _[Basic concepts of grid layout - track sizing with minmax()](</ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Track_sizing_and_minmax()>)_
- Video tutorial: _[Introducing minmax()](http://gridbyexample.com/video/series-minmax/)_
