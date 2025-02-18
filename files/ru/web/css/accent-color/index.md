---
title: accent-color
slug: Web/CSS/accent-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`accent-color`** устанавливает {{Glossary("accent", "акцентный цвет")}} для некоторых элементов управления пользовательским интерфейсом.

{{EmbedInteractiveExample("pages/css/accent-color.html")}}

Браузеры, которые поддерживают `accent-color`, в настоящее время применяют его к следующим HTML-элементам:

- [`<input type="checkbox">`](/ru/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/ru/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/ru/docs/Web/HTML/Element/input/range)
- [`<progress>`](/ru/docs/Web/HTML/Element/progress)

Во всех пользовательских агентах есть акцентный цвет для обеспечения читаемости и контрастности. Этот цвет используется не в каждом элементе управления пользовательского интерфейса и не в каждом состоянии элемента. `accent-color` применяется только к тем элементам управления и только в тех состояниях, где он применим.

## Синтаксис

```css
/* Ключевые слова */
accent-color: auto;

/* Значения <color> */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* Глобальные значения */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### Значения

- `auto`
  - : Цвет будет выбран пользовательским агентом и должен соответствовать акцентному цвету платформы, если таковой имеется.
- {{cssxref("&lt;color&gt;")}}
  - : Задает цвет, который будет использован в качестве акцентного.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Установка пользовательского акцентного цвета

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### Результат

{{EmbedLiveSample("Установка_пользовательского_акцентного_цвета", 500, 200)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие свойства, связанные с цветом: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("caret-color")}}, {{cssxref("color")}}, {{cssxref("column-rule-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}
- {{cssxref("&lt;color&gt;")}} — связанный тип данных
- {{HTMLElement("input")}} — связанный HTML-элемент
