---
title: Селектор по типу
slug: Web/CSS/Type_selectors
---

{{CSSRef("Selectors")}}

## Краткое описание

CSS селекторы по типу выбирают элементы по имени узла. Используются отдельно, поэтому, селектор типа для конкретного имени тега выбирает все элементы этого типа, то есть с этим именем узла в документе.

## Синтаксис

```
element { style properties }
```

## Пример

### CSS

```css
span {
  background-color: DodgerBlue;
  color: #ffffff;
}
```

### HTML

```html
<span>Здесь тег span с каким-то текстом.</span>
<p>Здесь тег p с каким-то текстом.</p>
```

### Результат

{{ EmbedLiveSample('Example', 200, 100) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
