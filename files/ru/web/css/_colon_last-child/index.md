---
title: ":last-child"
slug: Web/CSS/:last-child
---

{{CSSRef}}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Pseudo-classes) `:last-child` находит любой элемент, являющийся последним в его родителе.

## Синтаксис

```
element:last-child { style properties }
```

## Пример

### HTML

```html
<ul>
  <li>Этот элемент не лаймовый.</li>
  <li>И этот тоже.</li>
  <li>А этот да! :)</li>
</ul>
```

### CSS

```css
li:last-child {
  background-color: lime;
}
```

{{EmbedLiveSample('Пример', '100%', 100)}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{cssxref(":first-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
