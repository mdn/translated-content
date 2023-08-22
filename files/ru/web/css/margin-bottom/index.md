---
title: margin-bottom
slug: Web/CSS/margin-bottom
---

{{CSSRef}}

Свойство [CSS](/ru/docs/CSS) **`margin-bottom`** устанавливает внешний отступ внизу элемента. Положительное значение увеличивает расстояние между соседними элементами, тогда как отрицательное - сокращает.

{{EmbedInteractiveExample("pages/css/margin-bottom.html")}}

![Влияние CSS-свойства margin-bottom на блок элемента](margin-bottomru.png)

Это свойство не имеет воздействия на незамещаемые элементы, такие как {{HTMLElement("span")}} или {{HTMLElement("code")}}.

## Синтаксис

```css
/* числовые значения */
margin-bottom: 10px; /* Абсолютная длина */
margin-bottom: 1em; /* относительно размера текста */
margin-bottom: 5%; /* относительно длины родительского блока */

/* Значения-ключевые слова */
margin-bottom: auto;

/* Глобальные значения */
margin-bottom: inherit;
margin-bottom: initial;
margin-bottom: unset;
```

Свойство `margin-bottom` может быть выражено как ключевое слово `auto`, или как `<число>`, или как `<процент>`. Значение может быть положительным, нулевым или отрицательным.

### Значения

- {{cssxref("&lt;length&gt;")}}
  - : Размер отступа - фиксированная величина.
- {{cssxref("&lt;percentage&gt;")}}
  - : Размер отступа в процентах - размер относительно длины родительского блока.
- `auto`
  - : Браузер сам выбирает, какое значение использовать. Смотрите {{cssxref("margin")}}.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div class="container">
  <div class="box0">Блок 0</div>
  <div class="box1">Блок 1</div>
  <div class="box2">Отрицательное значение margin Блока 1 тянет меня вверх</div>
</div>
```

### CSS

CSS устанавливает нижний отступ и высоту для элементов `div`.

```css
.box0 {
  margin-bottom: 1em;
  height: 3em;
}
.box1 {
  margin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  border: 1px dashed black;
  border-width: 1px 0;
  margin-bottom: 2em;
}
```

Несколько дополнений к свойствам элемента `div` и элемента класса container сделают более наглядным эффект использования свойства `margin`.

```css
.container {
  background-color: orange;
  width: 320px;
  border: 1px solid black;
}
div {
  width: 320px;
  background-color: gold;
}
```

{{ EmbedLiveSample('Example',350,200) }}

## Спецификации

{{Specifications}}

{{cssinfo}}

## Поддержка браузерами

{{Compat}}
