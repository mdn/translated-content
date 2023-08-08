---
title: block-size
slug: Web/CSS/block-size
---

{{CSSRef}}{{SeeCompatTable}}

Свойство **`block-size`** [CSS](/ru/docs/Web/CSS) задаёт горизонтальный и вертикальный размер блока элемента, в зависимости от режима его записи (writing mode). Оно соответствует свойствам {{cssxref("width")}} и {{cssxref("height")}} и зависит от значения свойства {{cssxref("writing-mode")}}.

```css
/* <length> values */
block-size: 300px;
block-size: 25em;

/* <percentage> values */
block-size: 75%;

/* Keyword values */
block-size: 25em border-box;
block-size: 75% content-box;
block-size: max-content;
block-size: min-content;
block-size: available;
block-size: fit-content;
block-size: auto;

/* Global values */
block-size: inherit;
block-size: initial;
block-size: unset;
```

Если режим записи (writing mode) ориентирован по вертикали, то значение `block-size относится к ширине элемента; в противном случае это относится к высоте элемента. С данным свойством связано свойство {{cssxref("inline-size")}}, которое задаёт другое измерение элемента.`

`{{cssinfo}}`

## `Синтаксис`

### `Значения`

`Свойство block-size принимает те же значения, что и свойства {{cssxref("width")}}, {{cssxref("height")}}`

### `Формальный синтаксис`

```

{{csssyntax}}
```

## `Пример`

### `HTML`

```html
<p class="exampleText">Example text</p>
```

### `CSS`

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

`{{EmbedLiveSample("Пример")}}`

## `Спецификация`

| `Specification`                                                                         | `Status`                              | `Comment`            |
| --------------------------------------------------------------------------------------- | ------------------------------------- | -------------------- |
| `{{SpecName("CSS Logical Properties", "#logical-dimension-properties", "block-size")}}` | `{{Spec2("CSS Logical Properties")}}` | `Initial definition` |

## `Совместимость с браузерами`

`{{Compat}}`

## `Смотрите также`

- `Отображаемые физические свойства: {{cssxref("width")}} and {{cssxref("height")}}`
- `{{cssxref("writing-mode")}}`
