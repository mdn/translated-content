---
title: inset
slug: Web/CSS/inset
---

{{CSSRef}}{{SeeCompatTable}}

Свойство [CSS](/ru/docs/Web/CSS) **`inset`** определяет логический блок и встроенные начальное и конечное смещения элемента, которые отображают физическое смещение, зависящее от способа записи, направления и ориентации текста. Оно соответствует свойствам {{cssxref("top")}} и {{cssxref("bottom")}}, или {{cssxref("right")}} и {{cssxref("left")}}, в зависимости от значений, определённых для {{cssxref("writing-mode")}}, {{cssxref("direction")}}, и {{cssxref("text-orientation")}}.

```css
/* <length> значения */
inset: 3px 10px 3px 10px;
inset: 2.4em 3em 3em 3em;
inset: 10px; /* значение применяется ко всем сторонам */

/* <percentage> от ширины или высоты внешнего блока */
inset: 10% 5% 5% 5%;

/* Ключевое значение */
inset: auto;

/* Глобальные значения */
inset: inherit;
inset: initial;
inset: unset;
```

{{cssinfo}}

## Синтаксис

### Значения

Свойство `inset` принимает значения, аналогичные значениям свойства {{cssxref("left")}}.

### Формальный синтаксис

{{csssyntax}}

## Пример

### HTML-содержимое

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

### CSS-содержимое

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset: 20px 50px 30px 10px;
  background-color: #c8c800;
}
```

{{EmbedLiveSample("Пример", 140, 140)}}

## Спецификация

{{Specifications}}

## Поддержка браузера

{{Compat}}

## Смотрите также

- Сопоставление физических свойств: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
