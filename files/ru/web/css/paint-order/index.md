---
title: paint-order
slug: Web/CSS/paint-order
---

{{CSSRef}}

[CSS-свойство](/ru/docs/Web/CSS) **`paint-order`** позволяет вам контролировать порядок, в котором отрисовываются заливка и обводка (и нарисованные маркеры) текстового содержимого и фигур.

## Синтаксис

```css
/* Нормальный */
paint-order: normal;

/* Единичное значение */
paint-order: stroke; /* отрисовывает сначала обводку, затем заливку и маркеры */
paint-order: markers; /* отрисовывает сначала маркеры, затем заливку и обводку */

/* Множественные значения */
paint-order: stroke fill; /* отрисовывает сначала обводку, затем заливку, затем маркеры */
paint-order: markers stroke fill; /* отрисовывает маркеры, затем обводку, затем заливку */

/* Глобальные значения */
paint-order: inherit;
paint-order: initial;
paint-order: revert;
paint-order: unset;
```

Если значение не указано, значением по умолчанию является следующий порядок `fill`, `stroke`, `markers`.

Когда указано одно значение, то сначала отрисовывается оно, затем два других в обычном порядке друг относительно друга. Когда указано два значения, они будут отрисованы в указанном порядке, а затем будет отрисовано неопределённое значение.

> **Note:** в контексте этого свойства, маркеры отрисовываются только при рисовании форм SVG, включающих использование свойств `marker-*` (например [`marker-start`](/ru/docs/Web/SVG/Attribute/marker-start)) и элемента [`<marker>`](/ru/docs/Web/SVG/Element/marker). Они не применяются к тексту HTML, в этом случае вы можете определить только порядок `stroke` и `fill`.

### Значения

- `normal`
  - : Окрасит различные части в обычном порядке.
- `stroke`,
  `fill`,
  `markers`
  - : Указываются некоторые или все эти значения в том порядке, в котором вы хотите увидеть отрисовку.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Изменение порядка отрисовки обводки и заливки на противоположный

#### SVG

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <text x="10" y="75">stroke in front</text>
  <text x="10" y="150" class="stroke-behind">stroke behind</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
  font-size: 50px;
  font-weight: bold;
  fill: black;
  stroke: red;
  stroke-width: 4px;
}

.stroke-behind {
  paint-order: stroke fill;
}
```

#### Результат

{{EmbedLiveSample("Изменение_порядка_отрисовки_обводки_и_заливки_на_противоположный", "100%", 165)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [CSS Tricks: paint-order](https://css-tricks.com/almanac/properties/p/paint-order/)
