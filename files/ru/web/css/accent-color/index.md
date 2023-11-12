---
title: accent-color
slug: Web/CSS/accent-color
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS)-свойство **`accent-color`** устанавливает {{Glossary("accent", "акцентный")}} цвет для некоторых элементов управления пользовательским интерфейсом.

{{EmbedInteractiveExample("pages/css/accent-color.html")}}

Браузеры, которые поддерживают `accent-color`, в настоящее время применяют его к следующим HTML элементам:

- [`<input type="checkbox">`](/ru/docs/Web/HTML/Element/input/checkbox)
- [`<input type="radio">`](/ru/docs/Web/HTML/Element/input/radio)
- [`<input type="range">`](/ru/docs/Web/HTML/Element/input/range)
- [`<progress>`](/ru/docs/Web/HTML/Element/progress)

## Синтаксис

```css
/* Специальные значения */
accent-color: auto;

/* <color> значения */
accent-color: red;
accent-color: #5729e9;
accent-color: rgb(0, 200, 0);
accent-color: hsl(228, 4%, 24%);

/* Общие значения */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### Значения

- `auto`
  - : Браузер сам определяет цвет в зависимости от платформы.
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

{{EmbedLiveSample('Setting_a_custom_accent_color', 500, 200)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("input")}} элемент
- [Применение цвета к HTML-элементам с помощью CSS](/ru/docs/Web/CSS/CSS_Colors/Applying_color)
- {{cssxref("&lt;color&gt;")}}
- Другие свойства, связанные с цветом: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} и {{cssxref("column-rule-color")}}
