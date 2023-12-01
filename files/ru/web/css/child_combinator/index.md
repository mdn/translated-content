---
title: Селектор дочерних элементов
slug: Web/CSS/Child_combinator
---

{{CSSRef("Selectors")}}

## Описание

`Комбинатор >` разделяет 2 селектора, находит элементы заданные вторым селектором, являющие **прямыми** потомками для элементов отобранных первым селектором. Напротив, два селектора в [селекторе потомков](/ru/docs/Web/CSS/Descendant_selectors) находят элементы не обязательно являющиеся прямыми потомками, т.е. несмотря на количество "прыжков" до них в DOM.

## Синтаксис

```
selector1 > selector2 { style properties }
```

## Пример

```css
span {
  background-color: white;
}
div > span {
  background-color: DodgerBlue;
}
```

```html
<div>
  <span
    >Span 1 в div
    <span>Span 2 в span, который в div</span>
  </span>
</div>
<span>Span 3. Не в div вообще</span>
```

{{ EmbedLiveSample('Example', 200, 100) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
