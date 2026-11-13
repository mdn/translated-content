---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Метод **`includes()`** значений {{jsxref("String")}} проверяет с учётом регистра, содержит ли строка заданную подстроку, и возвращает, соответственно `true` или `false`.

{{InteractiveExample("JavaScript Demo: String.includes()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"
```

## Синтаксис

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Параметры

- `searchString`
  - : Подстрока для поиска. Не может быть [регулярным выражением](/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Все значения, не являющиеся регулярными выражениями, [приводятся к строкам](/ru/docs/Web/JavaScript/Reference/Global_Objects/String), поэтому при отсутствии параметра или передаче значения `undefined` метод `includes()` будет искать подстроку `"undefined"`, что редко бывает полезно.
- `position` {{optional_inline}}
  - : Позиция, с которой начинается поиск `searchString`. (По умолчанию `0`.)

### Возвращаемое значение

**`true`**, если искомая подстрока была найдена в данной строке (в том числе когда `searchString` является пустой строкой), и **`false`** в противном случае.

### Исключения

- {{jsxref("TypeError")}}
  - : Возникает если `searchString` [является регулярным выражением](/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

## Описание

Этот метод позволяет определять, содержит ли строка другую строку.

### Чувствительность к регистру символов

Метод `includes()` является регистрозависимым. Например, следующее выражение вернёт `false`:

```js
"Синий кит".includes("синий"); // false
```

Для обхода этого ограничения можно преобразовать обе строки в нижний регистр:

```js
"Синий кит".toLowerCase().includes("синий"); // true
```

## Примеры

### Использование `includes()`

```js
const str = "Быть или не быть, вот в чём вопрос.";

console.log(str.includes("Быть")); // true
console.log(str.includes("вопрос")); // true
console.log(str.includes("Гамлет")); // false
console.log(str.includes("Быть", 1)); // false
console.log(str.includes("БЫТЬ")); // false
console.log(str.includes("")); // true
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Полифил `String.prototype.includes` в `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
