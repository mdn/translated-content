---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
---

{{CSSRef}}{{SeeCompatTable}}

Свойство **`margin-inline-start`** [CSS](/ru/docs/Web/CSS) задаёт логическое строковое (inline) значение start margin элемента, которое сопоставляется с физическим значением margin в зависимости от режима записи (writing_mode) элемента, направленности и ориентации текста. Это логическое свойство соответствует одному из свойств {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}}, or {{cssxref("margin-left")}} в зависимости от значений {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}.

```css
/* <length> values */
margin-inline-start: 10px; /* абсолютная величина */
margin-inline-start: 1em; /* относительно размера текста */
margin-inline-start: 5%; /* относительно ширины ближайшего контейнера */

/* Keyword values */
margin-inline-start: auto;

/* Global values */
margin-inline-start: inherit;
```

Это свойство связано со свойствами {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}} и {{cssxref("margin-inline-end")}}, которые определяют другие компоненты margins элемента.

{{cssinfo}}

## Синтаксис

### Значения

Свойство `margin-inline-start` принимает такие же значения как и свойство {{cssxref("margin-left")}}.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Пример", 140, 140)}}

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("margin-inline-end")}}
- Отображаемые физические свойства: {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} и {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
