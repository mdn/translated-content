---
title: flex-direction
slug: Web/CSS/flex-direction
l10n:
  sourceCommit: 1a07a1f7f623d94a8454414d1a4df9add04ddd5e
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство `flex-direction` указывает, как flex-элементы располагаются во flex-контейнере по главной оси и направлению (обычном или обратном).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Обратите внимание, что значения `row` и `row-reverse` зависят от направления flex-контейнера. Если его атрибут [`dir`](/ru/docs/Web/HTML/Global_attributes#dir) равен `ltr`, то `row` представляет собой горизонтальную ось, направленную слева направо, а `row-reverse` — справа налево; если атрибут `dir` равен `rtl`, то `row` представляет собой горизонтальную ось, ориентированную справа налево, а `row-reverse` — слева направо.

## Синтаксис

```css
/* Направление, в котором блоки будут располагаться в строку */
flex-direction: row;

/* Как <row>, но наоборот */
flex-direction: row-reverse;

/* Направление, в котором блоки будут располагаться в виде столбца */
flex-direction: column;

/* Как <column>, но наоборот */
flex-direction: column-reverse;

/* Общие значения */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Значения

Может принимать следующие значения:

- `row`
  - : Главная ось flex-контейнера определена точно так же, как направление текста. Точки **main-start** и **main-end** совпадают с направлением контента.
- `row-reverse`
  - : Ведёт себя аналогично `row`, но точки **main-start** и **main-end** переставлены местами.
- `column`
  - : Главная ось flex-контейнера такая же, как ось блока (block-axis). Точки **main-start** и **main-end** такие же, как точки **before** и **after** режима записи (writing-mode).
- `column-reverse`
  - : Ведёт себя как `column`, но точки **main-start** и **main-end** переставлены местами.

## Доступность

Использование свойства `flex-direction` со значениями `row-reverse` и `column-reverse` создаст различие между визуальным представлением содержимого и его порядком в DOM. Это отрицательно влияет на пользователей с плохим зрением, использующих навигацию с помощью вспомогательных технологий, таких как программы чтения с экрана. Если визуальный порядок важен, пользователи программ чтения с экрана не будут иметь доступа к правильному порядку.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](https://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

### Формальное определение

{{cssinfo}}

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Использование column-reverse и row-reverse

#### HTML

```html
<h4>Пример flex-direction: column-reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>Пример flex-direction: row-reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

#### Результат

{{EmbedLiveSample('Использование column-reverse и row-reverse', '', '550')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- CSS {{CSSXRef("flex-flow")}} — краткая запись CSS-свойств `flex-direction` и {{CSSXRef("flex-wrap")}}.
- Руководство по CSS Flexbox: _[Основные идеи Flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)_
- Руководство по CSS Flexbox: _[Упорядочивание flex-элементов](/ru/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)_
