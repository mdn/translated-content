---
title: max-height
slug: Web/CSS/max-height
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`max-height`** устанавливает максимальную высоту элемента. Оно предотвращает [используемое значение](/ru/docs/Web/CSS/used_value) свойства {{ Cssxref("height") }} от становления больше, чем значение, указанное для `max-height`.

{{EmbedInteractiveExample("pages/css/max-height.html")}}

{{ Cssxref("max-height") }} перекрывает {{cssxref("height")}}, но {{ Cssxref("min-height") }} перекрывает {{ Cssxref("max-height") }}.

## Синтаксис

```css
/* <length> значения */
max-height: 3.5em;

/* <percentage> значения */
max-height: 75%;

/* Значения-ключевые слова */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

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

## Проблемы доступности

Убедитесь, что элементы с `max-height` не обрезаются и / или не закрывают другой контент, когда страница увеличена для увеличения размера текста.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Блочная модель](/ru/docs/CSS/box_model)
- {{ Cssxref("max-width") }}, {{ Cssxref("box-sizing") }}, {{ Cssxref("height") }}, {{ Cssxref("min-height") }}
