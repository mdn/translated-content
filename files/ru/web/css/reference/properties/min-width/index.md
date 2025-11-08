---
title: min-width
slug: Web/CSS/Reference/Properties/min-width
original_slug: Web/CSS/min-width
---

{{CSSRef}}

Свойство [CSS](/ru/docs/Web/CSS) **`min-width`** устанавливает минимальную ширину элемента. Оно предотвращает [используемое значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b) свойства {{ Cssxref("width") }} от становления меньше, чем значение, указанное для `min-width`.

{{InteractiveExample("CSS Demo: min-width")}}

```css interactive-example-choice
min-width: 150px;
```

```css interactive-example-choice
min-width: 20em;
```

```css interactive-example-choice
min-width: 75%;
```

```css interactive-example-choice
min-width: 40ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the minimum width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: #ffffff;
}
```

Ширина элемента принимает значение `min-width` когда `min-width` больше чем {{ Cssxref("max-width") }} или {{Cssxref("width")}}.

## Синтаксис

```css
/* Ключевые слова */
min-width: max-content;
min-width: min-content;
min-width: fit-content;
min-width: fill-available;

/* <length> значение */
min-width: 3.5em;

/* <percentage> значение */
min-width: 10%;

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

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ Cssxref("width") }}, {{ Cssxref("max-width") }}
- [Блочная модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{ Cssxref("box-sizing") }}
