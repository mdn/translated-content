---
title: flex-direction
slug: Web/CSS/flex-direction
tags:
  - CSS
  - CSS Flexible Boxes
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.flex-direction
---
{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`flex-direction`**  определяет, как и в каком порядке (обычном или обратном) должны располагаться флекс-элементы внутри флекс-контейнера по главной оси.

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Обратите внимание, что значения `row` и `row-reverse` зависят от направления текста во флекс-контейнере. Если его атрибут {{HTMLAttrxRef("dir")}} равен `ltr`, то `row` представляет горизонтальную ось с направлением слева направо, а `row-reverse` — справа налево; if the `dir` attribute is `rtl`, `row` represents the axis oriented from the right to the left, and `row-reverse` from the left to the right.

## Синтаксис

```css
/* Элементы выстраиваются в ряд */
flex-direction: row;

/* То же, что и <row>, но элементы находятся в обратном порядке */
flex-direction: row-reverse;

/* Элементы располагаются в колонку */
flex-direction: column;

/* То же, что и <column>, но элементы находятся в обратном порядке */
flex-direction: column-reverse;

/* Глобальные значения */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Значения

Может быть одно из следующих значений:

- `row`
  - : Основная ось флекс-контейнера совпадает с направлением текста. Точки с **main-start** и **main-end** такие же, что и направления контента.
- `row-reverse`
  - : Аналогично `row`, но точки **main-start** и **main-end** находятся в противоположном направлении от контента.
- `column`
  - : Основная ось флекс-контейнера совпадает с осью блока. Точки **main-start** and **main-end** такие же, что у точек **before** и **after** режима письма.
- `column-reverse`
  - : Аналогично `column`, но точки **main-start** и **main-end** находятся в противоположном направлении от контента.

## Проблемы, связанные с доступностью

Использование свойства `flex-direction` со значениями `row-reverse` или `column-reverse` создаст диссонанс между визуальным представлением элементов и их порядком в DOM. Это негативно скажется на пользователях с ослабленным зрением, которые переходят по элементам с помощью вспомогательных технологий, например, скринридера. Если важен визуальный (CSS) порядок, то пользователи скринридеров прочитают контент элементов в неверном порядке.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](http://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.3_%e2%80%94_create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Колонки и ряды во флекс-контейнера в обратном порядке

#### HTML

```html
<h4>Демонстрация колонок в обратном порядке</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>Демонстрация рядов в обратном порядке</h4>
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

{{EmbedLiveSample('Колонки и ряды во флекс-контейнера в обратном порядке', '', '550')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Руководство по флексбоксу в CSS: _[Основные понятия Flexbox](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Руководство по флексбоксу в CSS: _[Порядок флекс-элементов](/ru/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
