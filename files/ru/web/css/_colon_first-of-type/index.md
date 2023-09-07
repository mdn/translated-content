---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

## Описание

[CSS](/ru/docs/CSS) [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:first-of-type` находит первого потомка своего типа среди детей родителя.

## Синтаксис

```css
element:first-of-type {
  /* стили */
}
```

## Пример

Этот пример показывает, как применится универсальный селектор, если простой селектор не написан.

```css
div :first-of-type {
  background-color: lime;
}
```

```html
<div>
  <span>Это span первый!</span>
  <span>Это span нет. :(</span>
  <span>что насчёт этого <em>вложенного элемента</em>?</span>
  <strike>Это другой тег</strike>
  <span>Грустно, это тоже нет...</span>
</div>
```

...сработает так:

{{EmbedLiveSample('Пример','100%', '120')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref(":nth-of-type")}}, {{Cssxref(":last-of-type")}}
