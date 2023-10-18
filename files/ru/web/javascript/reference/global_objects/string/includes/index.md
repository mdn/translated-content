---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

Метод **`includes()`** проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно `true` или `false`.

## Синтаксис

```
str.includes(searchString[, position])
```

### Параметры

- `searchString`
  - : Строка для поиска в данной строке.
- `position` {{optional_inline}}
  - : Позиция в строке, с которой начинать поиск строки `searchString`, по умолчанию 0.

### Возвращаемое значение

**`true`**, если искомая строка была найдена в данной строке; иначе **`false`**.

## Описание

Этот метод позволяет вам определять, содержит ли строка другую строку.

### Чувствительность к регистру символов

Метод `includes()` является регистрозависимым. Например, следующее выражение вернёт `false`:

```js
"Синий кит".includes("синий"); // вернёт false
```

## Примеры

### Использование `includes()`

```js
var str = "Быть или не быть вот в чём вопрос.";

console.log(str.includes("Быть")); // true
console.log(str.includes("вопрос")); // true
console.log(str.includes("несуществующий")); // false
console.log(str.includes("Быть", 1)); // false
console.log(str.includes("БЫТЬ")); // false
```

## Полифил

Этот метод был добавлен в спецификации ECMAScript 2015 и может быть недоступен в некоторых реализациях JavaScript. Однако, можно легко эмулировать этот метод:

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## String.prototype.contains

В Firefox с версии 18 по версию 39, этот метод назывался «contains». Он был переименован в «includes» в замечании {{bug(1102219)}} по следующей причине:

Как было [сообщено](https://bugzilla.mozilla.org/show_bug.cgi?id=789036), некоторые сайты, использующие MooTools 1.2, ломаются в Firefox 17. Эта версия MooTools проверяет существование метода `String.prototype.contains()` и, если он не существует, добавляет свой собственный. С введением этого метода в Firefox 17, поведение этой проверки изменилось таким образом, что реализация `String.prototype.contains()`, основанная на MooTools, сломалась. В результате это изменение было [отключено](https://hg.mozilla.org/releases/mozilla-aurora/rev/086db97198a8) в Firefox 17. Метод `String.prototype.contains()` доступен в следующей версии Firefox — Firefox 18.

MooTools 1.3 принудительно использует свою собственную версию метода `String.prototype.contains()`, так что использующие его веб-сайты не должны ломаться. Тем не менее, следует отметить, что [сигнатура метода в MooTools 1.3](http://mootools.net/core/docs/1.3.2/Types/String#String-method:-contains) отличается от сигнатуры метода в ECMAScript 2015 (во втором аргументе). [В MooTools 1.5+ сигнатура изменена для соответствия стандарту ES2015.](https://github.com/mootools/mootools-core/blob/master/Docs/Types/String.md#note)

В Firefox 48, метод `String.prototype.contains()` был удалён. Следует использовать только `String.prototype.includes()`.

## Смотрите также

- {{jsxref("Array.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("TypedArray.prototype.includes()")}} {{experimental_inline}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
