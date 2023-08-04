---
title: word-spacing
slug: Web/CSS/word-spacing
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`word-spacing`** устанавливает длину пробела между словами и между тегами.

{{EmbedInteractiveExample("pages/css/word-spacing.html")}}

## Синтаксис

```css
/* Значение ключевым словом */
word-spacing: normal;

/* <length> значения */
word-spacing: 3px;
word-spacing: 0.3em;

/* <percentage> значения  */
word-spacing: 50%;
word-spacing: 200%;

/* Глобальные значения */
word-spacing: inherit;
word-spacing: initial;
word-spacing: unset;
```

### Значения

- `normal`
  - : Нормальный интервал между словами, определённый текущим шрифтом и/или браузером.
- {{cssxref("length")}}
  - : Определяет дополнительный интервал в дополнение к внутреннему интервалу между словами, определяемому шрифтом.
- {{cssxref("percentage")}}
  - : Определяет дополнительный интервал как процент от предварительной ширины символа.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div id="mozdiv1">Here are many words...</div>
<div id="mozdiv2">...and many more!</div>
```

### CSS

```css
#mozdiv1 {
  word-spacing: 15px;
}

#mozdiv2 {
  word-spacing: 5em;
}
```

{{ EmbedLiveSample('Example') }}

## Проблемы доступности

Большое положительное или отрицательное значение `word-spacing` может сделать предложения, к которым применяется стиль, нечитаемыми. Для текста, стилизованного с очень большими положительными значениями, слова будут так далеки друг от друга, что он больше не будет казаться предложением. Для текста, стилизованного с очень большими отрицательными значениями, слова будут перекрывать друг от друга до точки, где начало и конец каждого слова будут неразличимы.

Разборчивый `word-spacing` должен быть определён в каждом конкретном случае, так как различные семейства шрифтов имеют различную ширину символов. Нет ни одного значения, которое может обеспечить для всех семейств шрифтов автоматическое сохранение разборчивости.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}
