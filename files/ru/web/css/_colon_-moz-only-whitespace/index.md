---
title: ":blank"
slug: Web/CSS/:-moz-only-whitespace
---

{{CSSRef}}{{SeeCompatTable}}

[CSS псевдо класс](/ru/docs/Web/CSS) **`:blank`** находит элементы, у которых либо вообще нет дочерних узлов, либо только пустые текстовые узлы, либо только текстовые узлы, содержащие только пробельные символы.

## Syntax

{{CSSSyntax}}

## Пример

### HTML

```html
<div></div>
```

### CSS

```css hidden
:root {
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
}

div {
  background-color: #ccc;
  box-sizing: border-box;
  height: 100vh;
  min-height: 16px;
  min-height: 1rem;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

```css
div {
  border: 4px solid red;
}

:blank {
  border-color: lime;
}
```

### Результат

{{EmbedLiveSample("Пример", "100%", "50")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{CSSxRef(":empty")}}
