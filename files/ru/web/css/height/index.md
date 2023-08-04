---
title: height
slug: Web/CSS/height
---

{{CSSRef}}

CSS атрибут **`height`** позволят обозначать высоту элемента. По умолчанию, свойство определяет высоту [внутренней области](/ru/docs/Web/CSS/box_model#content). Если {{cssxref("box-sizing")}} имеет значение `border-box`, то свойство будет определять высоту [области рамки](/ru/docs/Web/CSS/box_model#border).

{{EmbedInteractiveExample("pages/css/height.html")}}

Атрибуты {{cssxref("min-height")}} и {{cssxref("max-height")}} при добавлении меняют значение {{Cssxref("height")}}.

## Синтаксис

```css
/* Значения-ключевые слова */
height: auto;

/* <length> значения */
height: 120px;
height: 10em;

/* <percentage> значения */
height: 75%;

/* Глобальные значения */
height: inherit;
height: initial;
height: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Высота - фиксированная величина.
- {{cssxref("&lt;percentage&gt;")}}
  - : Высота в процентах - размер относительно высоты родительского блока.
- `border-box` {{experimental_inline}}
  - : Если присутствует, то предшествующие {{cssxref("&lt;length&gt;")}} или {{cssxref("&lt;percentage&gt;")}} применяются к области рамки элемента.
- `content-box` {{experimental_inline}}
  - : Если присутствует, то предшествующие {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} применяются к внутренней области элемента.
- `auto`
  - : Браузер рассчитает и выберет высоту для указанного элемента.
- `fill` {{experimental_inline}}
  - : Использует `fill-available` размер строки или `fill-available` размер блока, в зависимости от способа разметки.
- `max-content` {{experimental_inline}}
  - : Внутренняя максимальная предпочтительная высота.
- `min-content` {{experimental_inline}}
  - : Внутренняя минимальная предпочтительная высота.
- `available` {{experimental_inline}}
  - : Высота содержащего блока минус вертикальные `margin`, border и `padding`.
- `fit-content` {{experimental_inline}}
  - : Наибольшее из:
    - внутренняя минимальная высота
    - меньшая из внутренней предпочтительной высоты и доступной высоты

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div id="taller">Я 50 пикселей в высоту.</div>
<div id="shorter">Я 25 пикселей в высоту.</div>
<div id="parent">
  <div id="child">Моя высота - половина от высоты родителя.</div>
</div>
```

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

### Результат

{{EmbedLiveSample('Пример', 'auto', 240)}}

## Проблемы доступности

Убедитесь, что элементы с `height` не обрезаются и / или не затеняют другое содержимое, когда страница масштабируется для увеличения размера текста.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Блочная модель](/ru/docs/Web/CSS/box_model), {{cssxref("width")}}, {{cssxref("box-sizing")}}, {{cssxref("min-height")}}, {{cssxref("max-height")}}
