---
title: ':only-of-type'
slug: Web/CSS/:only-of-type
tags:
  - CSS
  - Псевдоклассы
translation_of: Web/CSS/:only-of-type
---
{{CSSRef}}

## Описание

[CSS](/ru/docs/CSS "CSS") [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы "Pseudo-classes") `:only-of-type` выбирает такой элемент, который является единственным потомком такого типа.

```css
/* Выбирает все <p>, которые являются */
/* единственным потомками типа <p> */
p:only-of-type {
  background-color: lime;
}
```

## Синтаксис

{{csssyntax}}

## Пример

#### HTML

```html
<main>
  <div>Я `div` №1.</div>
  <p>Я тут единственный `p` элемент.</p>
  <div>Я `div` №2.</div>
  <div>Я `div` №3.
    <i>Я единственный потомок типа `i`.</i>
    <em>Я `em` №1.</em>
    <em>Я `em` №2.</em>
  </div>
</main>
```

#### CSS

```css
main :only-of-type {
  color: red;
}
```

#### Результат

{{EmbedLiveSample('Пример', '', '', '', 'Web/CSS/:only-of-type')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref(":nth-of-type")}}, {{Cssxref(":first-of-type")}}, {{Cssxref(":last-of-type")}}
