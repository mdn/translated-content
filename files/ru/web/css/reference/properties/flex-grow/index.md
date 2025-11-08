---
title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
original_slug: Web/CSS/flex-grow
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`flex-grow`** определяет как много свободного пространства во flex-контейнере должно быть назначено текущему элементу (flex grow factor — «коэффициент увеличения flex»). Свободное пространство — разница между размером flex-контейнера и размером всех его flex-элементов вместе. Если все sibling-элементы (sibling items — элементы одного уровня вложенности, состоящие по отношению друг к другу в родственной связи как брат или сестра), имеют одинаковый коэффициент flex-grow, то все они получат одинаковую долю свободного пространства, в противном случае оно распределяется в соответствии с соотношением, определённым различными коэффициентами flex-grow.

На практике flex-grow используется вместе с другими flex-свойствами {{cssxref("flex-shrink")}} и {{cssxref("flex-basis")}}, и обычно определяется с помощью сокращения (shorthand) {{cssxref("flex")}}, чтобы убедиться, что все значения заданы.

{{InteractiveExample("CSS Demo: flex-grow")}}

```css interactive-example-choice
flex-grow: 1;
```

```css interactive-example-choice
flex-grow: 2;
```

```css interactive-example-choice
flex-grow: 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">I grow</div>
  <div>Item Two</div>
  <div>Item Three</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
```

## Синтаксис

```css
/* Значения типа <number>*/
flex-grow: 3;
flex-grow: 0.6;

/* Глобальные значения */
flex-grow: inherit;
flex-grow: initial;
flex-grow: unset;
```

Свойство `flex-grow` указывается одним числом — значением типа [`<number>`](#number).

### Значения

- `<number>`
  - : См. {{cssxref("&lt;number&gt;")}}. Отрицательные значения недопустимы. По умолчанию 0.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<h4>Это — Flex-Grow</h4>
<h5>
  A,B,C и F имеют коэффициент увеличения flex-grow:1, а D и E — flex-grow:2 .
</h5>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
  <div class="box" style="background-color:brown;">F</div>
</div>
```

### CSS

```css
#content {
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;

  -webkit-justify-content: space-around;
  justify-content: space-around;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-align-items: stretch;
  align-items: stretch;
}

.box {
  flex-grow: 1;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box1 {
  flex-grow: 2;
  border: 3px solid rgba(0, 0, 0, 0.2);
}
```

### Результат

{{ EmbedLiveSample('Пример', '100%', '300') }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Руководство по CSS Flexbox: _[Basic Concepts of Flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- Руководство по CSS Flexbox: _[Controlling Ratios of flex items along the main axis](/ru/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)_
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) статья Мануэля Матузовича (Manuel Matuzovic) на CSS-Tricks, которая показывает как работает flex-grow
