---
title: flex-shrink
slug: Web/CSS/flex-shrink
---

{{CSSRef}}

**`flex-shrink`** — свойство [CSS](/ru/docs/CSS), которое определяет фактор сжатия flex-элемента. Flex-элементы будут заполнять контейнер в зависимости от значения `flex-shrink`, когда стандартная ширина flex-элементов шире, чем flex-контейнер.

flex-shrink используется вместе со свойствами flex {{cssxref("flex-grow")}} и {{cssxref("flex-basis")}}. Обычно определяется с помощью сокращения {{cssxref("flex")}}.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

## Синтаксис

```css
/* <number> значения */
flex-shrink: 2;
flex-shrink: 0.6;

/* Глобальное значение */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: unset;
```

`flex-shrink` свойство определятся одним [`<number>`](#number).

### Значения

- `<number>`
  - : Смотри {{cssxref("&lt;number&gt;")}}. Отрицательные значения не валидны.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<p>Ширина контента 500px; flex-basis для flex элементов 120px.</p>
<p>A, B, C имеют flex-shrink:1 значение. А у D и E - flex-shrink:2</p>
<p>Ширина D и E меньше других.</p>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box1" style="background-color:brown;">D</div>
  <div class="box1" style="background-color:lightgreen;">E</div>
</div>
```

### CSS

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0, 0, 0, 0.2);
}

.box {
  flex-shrink: 1;
}

.box1 {
  flex-shrink: 2;
}
```

### Результат

{{ EmbedLiveSample('Пример', '100%', '300') }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes)
