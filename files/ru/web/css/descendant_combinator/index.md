---
title: Селектор потомков
slug: Web/CSS/Descendant_combinator
---

{{CSSRef("Selectors")}}

## Описание

Комбинатор " " (пробел) представляет собой 2 или более селекторов, найдёт элементы соответствующие обоим селекторам. Селекторы по потомкам похожи на селекторы [дочерних элементов](/ru/docs/Web/CSS/Child_selectors), но они не учитывают вложенность элементов и применяют свои свойства ко всем элементам данного типа, находящимся внутри родительского элемента, независимо от глубины вложенности.

## Синтаксис

```
selector1 selector2 {стили }
```

## Пример

```css
span {
  background-color: white;
}
div span {
  background-color: DodgerBlue;
}
```

```html
<div>
  <span
    >Span 1
    <span>Span 2</span>
  </span>
</div>
<span>Span 3</span>
```

{{ EmbedLiveSample('Example', 200, 50) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
