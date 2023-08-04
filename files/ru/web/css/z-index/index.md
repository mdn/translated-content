---
title: z-index
slug: Web/CSS/z-index
---

{{CSSRef}}

CSS-свойство **`z-index`** определяет положение [позиционированного](/ru/docs/Web/CSS/position) элемента и его дочерних элементов или флекс-элементов по оси z. Перекрывающие элементы с большим значением z-index будут накладываться поверх элементов с меньшим z-index.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Для позиционированного элемента (т.е. если у него задано свойство `position` со значением, отличающимся от `static`) свойство `z-index` отвечает за:

1. Порядок наложения в текущем [контексте наложения](/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
2. Возможность создания локального контекста наложения.

## Синтаксис

```css
/* Ключевое слово */
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

{{ EmbedLiveSample('Visually_layering_elements', '550', '200', '') }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- CSS-свойство {{Cssxref("position")}}
- [Понимание CSS z-index](/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
