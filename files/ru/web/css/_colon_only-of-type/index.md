---
title: ":only-of-type"
slug: Web/CSS/:only-of-type
---

{{CSSRef}}

## Описание

[CSS](/ru/docs/CSS) [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:only-of-type` выбирает такой элемент, который является единственным потомком такого типа.

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
  <div>Я <code>div</code> №1.</div>
  <p>Я тут единственный <code>p</code> элемент.</p>
  <div>Я <code>div</code> №2.</div>
  <div>
    Я <code>div</code> №3.
    <i>Я единственный потомок типа <code>i</code>.</i>
    <em>Я <code>em</code> №1.</em>
    <em>Я <code>em</code> №2.</em>
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

{{ EmbedLiveSample('Пример') }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{Cssxref(":nth-of-type")}}, {{Cssxref(":first-of-type")}}, {{Cssxref(":last-of-type")}}
