---
title: width
slug: Web/CSS/width
---

{{CSSRef}}

Свойство CSS **`width`** устанавливает ширину элемента. По умолчанию она равняется ширине [внутренней области](/ru/docs/Web/CSS/box_model#content), но если {{cssxref("box-sizing")}} имеет значение `border-box`, то она будет равняться ширине [области рамки](/ru/docs/Web/CSS/box_model#border).

{{EmbedInteractiveExample("pages/css/width.html")}}

Свойства {{cssxref("min-width")}} и {{cssxref("max-width")}} перекрывают {{cssxref("width")}}.

## Синтаксис

```css
/* <length> значения */
width: 300px;
width: 25em;

/* <percentage> значения */
width: 75%;

/* Значения-ключевые слова */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Глобальные значения */
width: inherit;
width: initial;
width: unset;
```

Свойство `width` указывается как:

- одно из следующих ключевых слов: [`available`](#available), [`min-content`](#min-content), [`max-content`](#max-content), [`fit-content`](#fit-content), [`auto`](#auto).
- [`<length>`](#length) или [`<percentage>`](#percentage). За ними так же могут быть указаны одни из следующих ключевых слов: [`border-box`](#border-box), [`content-box`](#content-box).

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Ширина - фиксированная величина.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ширина в процентах - размер относительно ширины родительского блока.
- `border-box`{{experimental_inline}}
  - : Если присутствует, то предшествующие {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} применяются к области рамки элемента.
- `content-box`{{experimental_inline}}
  - : Если присутствует, то предшествующие {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} применяются к внутренней области элемента.
- `auto`
  - : Браузер рассчитает и выберет ширину для указанного элемента.
- `fill`{{experimental_inline}}
  - : Использует `fill-available` размер строки или `fill-available` размер блока, в зависимости от способа разметки.
- `max-content`{{experimental_inline}}
  - : Внутренняя максимальная предпочтительная ширина.
- `min-content`{{experimental_inline}}
  - : Внутренняя минимальная ширина.
- `available`{{experimental_inline}}
  - : Ширина содержащего блока минус горизонтальные `margin`, `border` и `padding`.
- `fit-content`{{experimental_inline}}
  - : Наибольшее из:
    - внутренняя минимальная ширина
    - меньшая из внутренней предпочтительной ширины и доступной ширины

### Формальный синтаксис

{{csssyntax}}

## Примеры

### Ширина по умолчанию

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">Сообщество Mozilla производит множество отличного ПО.</p>
```

{{EmbedLiveSample('Ширина_по_умолчанию', '500px', '64px')}}

### Пиксели и em

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Ширина в пикселях</div>
<div class="em_length">Ширина в em</div>
```

{{EmbedLiveSample('Пиксели_и_em', '500px', '64px')}}

### Проценты

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Ширина в процентах</div>
```

{{EmbedLiveSample('Проценты', '500px', '64px')}}

### max-content

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit используют нестандартное имя */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">Сообщество Mozilla производит множество отличного ПО.</p>
```

{{EmbedLiveSample('max-content_2', '500px', '64px')}}

### min-content

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">Сообщество Mozilla производит множество отличного ПО.</p>
```

{{EmbedLiveSample('min-content_2', '500px', '155px')}}

## Проблемы доступности

Убедитесь, что элементы с `width` не обрезаются и / или не затеняют другое содержимое, когда страница масштабируется для увеличения размера текста.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Спецификации

{{Specifications}}{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Блочная модель](/ru/docs/Web/CSS/box_model), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}
