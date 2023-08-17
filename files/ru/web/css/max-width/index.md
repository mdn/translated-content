---
title: max-width
slug: Web/CSS/max-width
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`max-width`** устанавливает максимальную ширину элемента. Оно предотвращает [используемое значение](/ru/docs/Web/CSS/used_value) свойства {{ Cssxref("width") }} от становления больше, чем значение, указанное для `max-width`.

{{EmbedInteractiveExample("pages/css/max-width.html")}}

{{ Cssxref("max-width") }} перекрывает {{cssxref("width")}}, но {{ Cssxref("min-width") }} перекрывает {{ Cssxref("max-width") }}.

## Синтаксис

```css
/* <length> значение */
max-width: 3.5em;

/* <percentage> значение */
max-width: 75%;

/* Значения-ключевые слова */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fill-available;

/* Глобальные значения */
max-width: inherit;
max-width: initial;
max-width: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Максимальная ширина выражается как {{cssxref("&lt;length&gt;")}}.
- {{cssxref("&lt;percentage&gt;")}}
  - : Максимальная ширина выражается как {{cssxref("&lt;percentage&gt;")}} от ширины родительского блока.

#### Значения-ключевые слова

- `none`
  - : Ширина не имеет максимального значения. (по умолчанию)
- `max-content`{{experimental_inline()}}
  - : Внутренняя предпочтительная ширина.
- `min-content`{{experimental_inline()}}
  - : Внутренняя минимальная ширина.
- `fill-available`{{experimental_inline()}}
  - : Ширина родительского блока минус горизонтальные `margin`, `border`, и `padding`. (Обратите внимание, что некоторые браузеры реализуют устаревшее имя для этого ключевого слова., `available`.)
- `fit-content`{{experimental_inline()}}
  - : То же что и `max-content.`

### Формальный синтаксис

{{csssyntax}}

## Примеры

В этом примере, "child" будет иметь ширину 150 пикселей или ширину "parent", в зависимости от того, что меньше:

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

{{EmbedLiveSample("basic-max-width-demo", 350, 100)}}

Значение `fit-content` можно использовать для установки ширины элемента на основе внутреннего размера, требуемого его содержимым:

```html
<div id="parent">
  <div id="child">Child Text</div>
</div>
```

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: -moz-fit-content;
  max-width: -webkit-fit-content;
}
```

{{EmbedLiveSample("fit-content-demo", 400, 100)}}

## Проблемы доступности

Убедитесь, что элементы с `max-width` не обрезаются и / или не закрывают другой контент, когда страница увеличена для увеличения размера текста.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{ Cssxref("width") }}, {{ Cssxref("min-width") }}, {{ Cssxref("max-height") }}
- [Блочная модель](/ru/docs/CSS/box_model), {{ Cssxref("box-sizing") }}
