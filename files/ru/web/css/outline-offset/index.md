---
title: outline-offset
slug: Web/CSS/outline-offset
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

CSS-свойство **`outline-offset`** задаёт расстояние между [обводкой](/ru/docs/Web/CSS/outline) и краем или рамкой элемента.

{{EmbedInteractiveExample("pages/css/outline-offset.html")}}

## Синтаксис

```css
/* Значения <length> */
outline-offset: 3px;
outline-offset: 0.2em;

/* Глобальные значения */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### Значения

- `{{cssxref("&lt;length&gt;")}}`
  - : Размер расстояния между элементом и его обводкой. При отрицательном значении обводка располагается внутри элемента. Значение `0` размещает обводку вплотную к элементу.

## Описание

Обводка — это линия вокруг элемента за пределами рамки. Расстояние между элементом и его обводкой прозрачно. Другими словами, оно будет таким же, как и фон родительского элемента.

## Формальное определение

{{cssinfo}}

## Формальный синтаксис

{{csssyntax}}

## Примеры

### Расстояние обводки в пикселях

#### HTML

```html
<p>Gallia est omnis divisa in partes tres.</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### Результат

{{EmbedLiveSample('Расстояние обводки в пикселях')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
