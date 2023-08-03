---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
---

{{jsSidebar("Objects")}} {{deprecated_header()}}

## Описание

Устаревший метод **`unescape(str)`** создаёт новую строку в которой шестнадцатеричная последовательность символов вида %xx заменяется эквивалентами из кодировки ASCII. Знаки, закодированные в формате %uxxxx (знаки Юникода), заменяются знаками Юникода в шестнадцатеричной кодировке xxxx.

Последовательность может быть результатом работы функции вроде {{jsxref("Global_Objects/escape", "escape")}}. Т.к. {{jsxref("Global_Objects/decodeURIComponent", "unescape")}} является устаревшей, используйте {{jsxref("Global_Objects/decodeURI", "decodeURI")}} или {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} вместо неё.

> **Примечание:** Не рекомендуется использовать `unescape` чтобы декодировать URI, используйте `decodeURI` вместо него.

## Синтаксис

```
unescape(str)
```

### Parameters

- `str`
  - : Строка которую необходимо преобразовать

## Описание

`Функция unescape` это свойство _глобального объекта_.

## Примеры

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/decodeURI", "decodeURI")}}
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}}
