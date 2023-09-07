---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
---

{{jsSidebar("Objects")}} {{deprecated_header}}

Устаревший метод **`escape()`** возвращает новую строку, в которой определённые символы заменены шестнадцатеричной управляющей последовательностью. Используйте методы {{jsxref("encodeURI")}} или {{jsxref("encodeURIComponent")}} вместо него.

## Синтаксис

```
escape(str)
```

### Параметры

- `str`
  - : Строка для кодирования.

## Описание

Функция `escape()` является свойством _глобального объекта_, т.е. относится к глобальным функциям. Эта функция кодирует специальные символы, за исключением: `@*_+-./`

The hexadecimal form for characters, whose code unit value is 0xFF or less, is a two-digit escape sequence: %xx. For characters with a greater code unit, the four-digit format %**u**xxxx is used.

## Примеры

```js
escape("abc123"); // "abc123"
escape("текст"); // "%u0442%u0435%u043A%u0441%u0442"
escape("ć"); // "%u0107"

/* специальные символы */
escape("@*_+-./"); // "@*_+-./"
```

## Спецификации

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
