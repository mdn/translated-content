---
title: flex-direction
slug: Web/CSS/flex-direction
---

{{ CSSRef("CSS Flexible Boxes") }}

## Резюме

`flex-direction` — [CSS](/ru/docs/CSS) свойство, указывающее на то, как flex-элементы располагаются во flex-контейнере по главной оси и направлению (normal или reversed).

Обратите внимание, что значения `row` и `row-reverse` зависят от направления flex-контейнера. Если его атрибут `dir` равен `ltr`, `row` представляет собой горизонтальную ось, ориентированную слева направо, а `row-reverse` — справа налево; если атрибут `dir` равен `rtl`, `row` представляет собой горизонтальную ось, ориентированную справа налево, а `row-reverse` — слева направо.

{{cssinfo}}

См. [Using CSS flexible boxes](/ru/docs/Web/Guide/CSS/Flexible_boxes) для детализации по свойствам и дополнительной информации.

## Синтаксис

```css
/* Направление, в котором блоки будут располагаться в строку */
flex-direction: row;

/* Как <row>, но наоборот */
flex-direction: row-reverse;

/* Направление, в котором блоки будут располагаться вертикально */
flex-direction: column;

/* Как <column>, но наоборот */
flex-direction: column-reverse;

/* Общие значения */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

### Значения

Может принимать следующие значения:

- `row`
  - : Главная ось flex-контейнера определена точно так же, как направление текста. Точки **main-start** и **main-end** совпадают с направлением контента.
- `row-reverse`
  - : Ведёт себя аналогично `row`, но точки **main-start** и **main-end** переставлены местами.
- `column`
  - : Главная ось flex-контейнера такая же, как ось блока (block-axis). Точки **main-start** и **main-end** такие же, как точки **before** и **after** режима записи (writing-mode).
- `column-reverse`
  - : Ведёт себя как `column`, но точки **main-start** и **main-end** переставлены местами.

### Формальный синтаксис

{{csssyntax}}

## Пример

```css
element {
  flex-direction: row-reverse;
}
```

## Спецификации

{{Specifications}}

## Поддержка браузеров

{{Compat}}

## Смотрите также

- [Using CSS flexible boxes](/ru/docs/CSS/Using_CSS_flexible_boxes)
