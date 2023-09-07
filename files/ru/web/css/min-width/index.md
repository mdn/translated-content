---
title: min-width
slug: Web/CSS/min-width
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`min-width`** устанавливает минимальную ширину элемента. Оно предотвращает [используемое значение](/ru/docs/Web/CSS/used_value) свойства {{ Cssxref("width") }} от становления меньше, чем значение, указанное для `min-width`.

{{EmbedInteractiveExample("pages/css/min-width.html")}}

Ширина элемента принимает значение `min-width` когда `min-width` больше чем {{ Cssxref("max-width") }} или {{Cssxref("width")}}.

## Синтаксис

```css
/* <length> значение */
min-width: 3.5em;

/* <percentage> значение */
min-width: 10%;

/* Значения-ключевые слова */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fill-available;

/* Глобальные значения */
min-width: inherit;
min-width: initial;
min-width: unset;
```

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Минимальная ширина выражается как {{cssxref("&lt;length&gt;")}}. Отрицательные значения делают свойство недействительным.
- {{cssxref("&lt;percentage&gt;")}}
  - : Минимальная ширина выражается как {{cssxref("&lt;percentage&gt;")}} от ширины родительского блока. Отрицательные значения делают свойство недействительным.

#### Значения-ключевые слова

- `auto`
  - : Минимальная ширина для flex-элементов по умолчанию, предоставляет более разумное значение по умолчанию, чем 0 для других способов разметки.
- `max-content` {{ experimental_inline() }}
  - : Внутренняя предпочтительная ширина.
- `min-content` {{ experimental_inline() }}
  - : Внутренняя минимальная ширина.
- `fill-available`{{ experimental_inline() }}
  - : Ширина родительского блока минус горизонтальные `margin`, `border`, и `padding`. (Обратите внимание, что некоторые браузеры реализуют устаревшее имя для этого ключевого слова., `available`.)
- `fit-content` {{ experimental_inline() }}
  - : Определяет как `min(max-content, max(min-content, fill-available))`.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
table {
  min-width: 75%;
}

form {
  min-width: 0;
}
```

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## See also

- {{ Cssxref("width") }}, {{ Cssxref("max-width") }}
- [Блочная модель](/ru/docs/CSS/box_model), {{ Cssxref("box-sizing") }}
