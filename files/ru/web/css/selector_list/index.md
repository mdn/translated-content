---
title: Список селекторов
slug: Web/CSS/Selector_list
---

{{CSSRef}}

CSS **список селекторов** (`,`) выбирает все соответствующие ноды.

```css
/* Выбирает все соответствующие элементы */
span,
div {
  border: red 2px solid;
}
```

Для уменьшения размеры таблицы стилей, можно использовать разделяемый запятой список селекторов.

## Синтаксис

```
element, element, element { свойства стиля }
```

## Примеры

### Группирование на одной линии

Группирование селекторов списком, разделённым запятой, на одной строк.

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: helvetica;
}
```

### Мультистрочное группирование

Группирование селекторов списком, разделённым запятой, на нескольких строках.

```css
#main,
.content,
article {
  font-size: 1.1em;
}
```

### Невалидные списки селекторов

Недостатком использования списков селекторов является то, что они не являются эквивалентными:

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:maybe-unsupported,
h3 {
  font-family: sans-serif;
}
```

Это происходит потому, что один неподдерживаемый селектор в списке селекторов делает недействительным все правило.

Есть способ исправить это - нужно использовать селектор {{CSSxRef(":is", ":is()")}}, который просто игнорирует недопустимые селекторы в своих аргумента, но за счёт этого, все селекторы имеют одинаковую спецификацию, так как {{CSSxRef(":is", ":is()")}} вычисляет спецификацию.

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- The {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} and {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} pseudo-classes, which don't have the legacy mistake that is selector list invalidation.
