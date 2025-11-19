---
title: max-height
slug: Web/CSS/Reference/Properties/max-height
original_slug: Web/CSS/max-height
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`max-height`** устанавливает максимальную высоту элемента. Оно предотвращает [используемое значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b) свойства {{ Cssxref("height") }} от становления больше, чем значение, указанное для `max-height`.

{{InteractiveExample("CSS Demo: max-height")}}

```css interactive-example-choice
max-height: 150px;
```

```css interactive-example-choice
max-height: 7em;
```

```css interactive-example-choice
max-height: 75%;
```

```css interactive-example-choice
max-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the maximum height. <br />This will limit
    how tall the box can be, potentially causing an overflow.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

{{ Cssxref("max-height") }} перекрывает {{cssxref("height")}}, но {{ Cssxref("min-height") }} перекрывает {{ Cssxref("max-height") }}.

## Синтаксис

```css
/* Ключевые слова */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

/* Значения длины */
max-height: 3.5em;

/* <percentage> значения */
max-height: 75%;

/* Глобальные значения */
max-height: inherit;
max-height: initial;
max-height: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Максимальная высота выражается как {{cssxref("&lt;length&gt;")}}.
- {{cssxref("&lt;percentage&gt;")}}
  - : Максимальная высота выражается как {{cssxref("&lt;percentage&gt;")}} от высоты родительского блока.

#### Значения-ключевые слова

- `none`
  - : Высота не имеет максимального значения.
- `max-content`{{experimental_inline()}}
  - : Внутренняя предпочтительная высота.
- `min-content`{{experimental_inline()}}
  - : Внутренняя минимальная высота.
- `fill-available`{{experimental_inline()}}
  - : Высота родительского блока минус вертикальные `margin`, `border`, и `padding`. (Обратите внимание, что некоторые браузеры реализуют устаревшее имя для этого ключевого слова., `available`.)
- `fit-content`{{experimental_inline()}}
  - : То же что и `max-content.`

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## Доступность

Убедитесь, что элементы с `max-height` не обрезаются и / или не закрывают другой контент, когда страница увеличена для увеличения размера текста.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{ Cssxref("max-width") }}, {{ Cssxref("box-sizing") }}, {{ Cssxref("height") }}, {{ Cssxref("min-height") }}
