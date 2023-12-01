---
title: column-rule-color
slug: Web/CSS/column-rule-color
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) свойство **`column-rule-color`** устанавливает цвет линии, расположенной между колонками при мультиколоночной вёрстке.

{{EmbedInteractiveExample("pages/css/column-rule-color.html")}}

## Синтаксис

```css
/* Значения <color>  */
column-rule-color: red;
column-rule-color: rgb(192, 56, 78);
column-rule-color: transparent;
column-rule-color: hsla(0, 100%, 50%, 0.6);

/* Глобальные значения */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: unset;
```

Свойство `column-rule-color` указывает одиночное значение `<color>`.

### Значения

- {{cssxref("&lt;color&gt;")}}
  - : Цвет линий, разделяющих столбцы.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<p>
  This is a bunch of text split into three columns. The `column-rule-color`
  property is used to change the color of the line that is drawn between
  columns. Don't you think that's wonderful?
</p>
```

### CSS

```css
p {
  column-count: 3;
  column-rule-style: solid;
  column-rule-color: blue;
}
```

### Результат

{{EmbedLiveSample("Пример")}}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- The {{cssxref("&lt;color&gt;")}} data type
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, and {{cssxref("caret-color")}}
- [Applying color to HTML elements using CSS](/ru/docs/Web/HTML/Applying_color)
