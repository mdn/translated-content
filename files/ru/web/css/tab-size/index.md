---
title: tab-size
slug: Web/CSS/tab-size
---

{{CSSRef}}{{SeeCompatTable}}

CSS-свойство **`tab-size`** используется для настройки ширины символа табуляции (`U+0009`).

```css
/* <integer> значения */
tab-size: 4;
tab-size: 0;

/* <length> значения */
tab-size: 10px;
tab-size: 2em;

/* Глобальные значения */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
```

{{CSSInfo}}

## Синтаксис

### Значения

- {{CSSxRef("&lt;integer&gt;")}}
  - : Количество пробелов в табе. Должно быть неотрицательным.
- {{CSSxRef("&lt;length&gt;")}}
  - : Ширина таба. Должно быть неотрицательным.

### Формальный синтаксис

{{CSSSyntax}}

## Примеры

```css
pre {
  tab-size: 4; /* Установит размер таба в 4 пробела */
}
```

```css
pre {
  tab-size: 0; /* Удалит отступ */
}
```

```css
pre {
  tab-size: 2; /* Установит размер таба в 2 пробела */
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Управление размером символа табуляции (U+0009)](https://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html), электронное письмо Anne van Kesteren в CSSWG.
