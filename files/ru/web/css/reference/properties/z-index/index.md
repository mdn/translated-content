---
title: z-index
slug: Web/CSS/Reference/Properties/z-index
original_slug: Web/CSS/z-index
---

{{CSSRef}}

CSS-свойство **`z-index`** определяет положение [позиционированного](/ru/docs/Web/CSS/Reference/Properties/position) элемента и его дочерних элементов или флекс-элементов по оси z. Перекрывающие элементы с большим значением z-index будут накладываться поверх элементов с меньшим z-index.

{{InteractiveExample("CSS Demo: z-index")}}

```css interactive-example-choice
z-index: auto;
```

```css interactive-example-choice
z-index: 1;
```

```css interactive-example-choice
z-index: 3;
```

```css interactive-example-choice
z-index: 5;
```

```css interactive-example-choice
z-index: 7;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div id="example-element">Change my z-index</div>
  <div class="block blue position1">z-index: 6</div>
  <div class="block blue position2">z-index: 4</div>
  <div class="block blue position3">z-index: 2</div>
  <div class="block red position4">z-index: auto</div>
  <div class="block red position5">z-index: auto</div>
  <div class="block red position6">z-index: auto</div>
</section>
```

```css interactive-example
#example-element {
  top: 15px;
  left: 15px;
  width: 180px;
  height: 230px;
  position: absolute;
  /* center the text so it is visible even when z-index is set to auto */
  line-height: 215px;
  font-family: monospace;
  background-color: #fcfbe5;
  border: solid 5px #e3e0a1;
  z-index: auto;
  color: black;
}

.container {
  display: inline-block;
  width: 250px;
  position: relative;
}

.block {
  width: 150px;
  height: 50px;
  position: absolute;
  font-family: monospace;
  color: black;
}

.blue {
  background-color: #e5e8fc;
  border: solid 5px #112382;
  /* move text to the bottom of the box */
  line-height: 55px;
}

.red {
  background-color: #fce5e7;
  border: solid 5px #e3a1a7;
}

.position1 {
  top: 0;
  left: 0;
  z-index: 6;
}

.position2 {
  top: 30px;
  left: 30px;
  z-index: 4;
}

.position3 {
  top: 60px;
  left: 60px;
  z-index: 2;
}

.position4 {
  top: 150px;
  left: 0;
  z-index: auto;
}

.position5 {
  top: 180px;
  left: 30px;
  z-index: auto;
}

.position6 {
  top: 210px;
  left: 60px;
  z-index: auto;
}
```

Для позиционированного элемента (т.е. если у него задано свойство `position` со значением, отличающимся от `static`) свойство `z-index` отвечает за:

1. Порядок наложения в текущем [контексте наложения](/ru/docs/Web/CSS/CSS_positioned_layout/Stacking_context).
2. Возможность создания локального контекста наложения.

## Синтаксис

```css
/* Ключевые слова */
z-index: auto;

/* Значения типа <integer> */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Отрицательные значения понижают приоритет */

/* Глобальные значения */
z-index: inherit;
z-index: initial;
z-index: revert;
z-index: revert-layer;
z-index: unset;
```

Значением свойства `z-index` может быть либо `auto`, либо целое число (`<integer>`).

### Значения

- `auto`
  - : Элемент не будет создавать нового локального контекста наложения. Порядок наложения блока в текущим контексте наложения будет равен `0`.
- `<integer>`
  - : Порядок наложения блока, заданный в виде целого числа ({{cssxref("&lt;integer&gt;")}}) в текущем контексте наложения. При этом элемент создаёт новый локальный контекст наложения. Таким образом значения z-index дочерних элементов внутри нового контекста наложения не будут сравниваться со значениями z-index элементов за пределами этого блока.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Визуальное наложение элементов

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Пунктирный блок</div>
  <div class="gold-box">Блок золотого цвета</div>
  <div class="green-box">Зелёный блок</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* помещаем .gold-box поверх .green-box и .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* помещаем .green-box поверх .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Результат

{{ EmbedLiveSample('Визуальное наложение элементов', '550', '200', '') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- CSS-свойство {{Cssxref("position")}}
- [Понимание CSS z-index](/ru/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index)
