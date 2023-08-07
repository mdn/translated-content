---
title: letter-spacing
slug: Web/CSS/letter-spacing
---

{{CSSRef}}

Свойство **`letter-spacing`** определяет межбуквенное расстояние в тексте.

{{EmbedInteractiveExample("pages/css/letter-spacing.html")}}

## Синтаксис

```css
/* Значения - ключевые слова */
letter-spacing: normal;

/* Значения <length> */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Глобальные значения */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: unset;
```

### Значения

- `normal`
  - : Стандартное межбуквенное расстояние для текущего шрифта. В отличие от значения `0`, это ключевое слово позволяет {{glossary("User Agent", "агенту пользователя")}} изменить расстояние между буквами для выравнивания текста.
- {{cssxref("&lt;length&gt;")}}
  - : Определяет дополнительное расстояние между буквами _добавляющееся_ к стандартному расстоянию между символами. Значение может быть отрицательным, но при этом могут быть ограничения, зависящие от конкретной реализации. Агент пользователя может не увеличивать или уменьшать межбуквенное расстояние для выравнивания текста.

### Формальный синтаксис

{{csssyntax}}

## Примеры

### HTML

```html
<p class="normal">letter spacing</p>
<p class="em-wide">letter spacing</p>
<p class="em-wider">letter spacing</p>
<p class="em-tight">letter spacing</p>
<p class="px-wide">letter spacing</p>
```

### CSS

```css
.normal {
  letter-spacing: normal;
}
.em-wide {
  letter-spacing: 0.4em;
}
.em-wider {
  letter-spacing: 1em;
}
.em-tight {
  letter-spacing: -0.05em;
}
.px-wide {
  letter-spacing: 6px;
}
```

### Результат

{{ EmbedLiveSample('Примеры', 440, 185) }}

## Проблемы доступности

Большие положительные или отрицательные значения свойства `letter-spacing` могут сделать текст, к которому применяется форматирование, нечитаемым. При очень больших положительных значениях этого свойства, буквы в тексте будут настолько далеко друг от друга, что не будут восприниматься как цельные слова. При очень больших отрицательных значениях буквы будут перекрываться друг другом до такой степени, что слова могут стать неразличимы.

Межбуквенное расстояние должно быть определено индивидуально для каждого случая, так как в разных семействах шрифтов ширина символов различна. Нет какого-то универсального значения, которое может быть применено для наилучшего отображения во всех семействах шрифтов.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Спецификации

{{Specifications}}

{{cssinfo}}

## Браузерная совместимость

{{Compat}}

## Смотрите также

- {{cssxref("font-kerning")}}
