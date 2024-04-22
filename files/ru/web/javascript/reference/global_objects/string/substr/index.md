---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef}}

> **Предупреждение:** Внимание: так как `String.prototype.substr(…)` не полностью упразднена (а лишь "удалена из стандартов по вебу"), она считается **унаследованной функцией**, использование которой лучше избегать там, где это возможно. Она не является частью ядра языка JavaScript и может быть удалена в будущем. Если есть возможность, используйте метод [`substring()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/String/substring).

Метод **`substr()`** возвращает указанное количество символов из строки, начиная с указанной позиции.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Синтаксис

```
str.substr(start[, length])
```

### Параметры

- `start`
  - : Позиция, с которой начинать извлекать символы. Если передано отрицательное число, она трактуется как `strLength - start`, где `strLength` равна длине строки (например, если параметр `start` равен -3, то он трактуется как `strLength - 3`.)
- `length`
  - : Необязательный параметр. Количество извлекаемых символов.

### Возвращаемое значение

Новая строка, содержащая часть исходной, обрезанной по переданным параметрам.

## Описание

Параметр `start` является индексом символа. Индекс первого символа равен 0, а последнего символа — на один меньше длины строки. Метод `substr()` начинает извлекать символы начиная с позиции `start` и собирая `length` символов (если он не достигнет раньше конца строки, в этом случае будет возвращено меньшее количество символов).

Если параметр `start` является положительным и он больше, либо равен длине строки, метод `substr()` вернёт пустую строку.

Если параметр `start` является отрицательным, метод `substr()` использует его как индекс символа, начиная с конца строки. Если параметр `start` отрицателен и по модулю больше длины строки, метод `substr()` будет использовать 0 в качестве начального индекса. Обратите внимание: описанная обработка отрицательных значений аргумента `start` не поддерживается JScript от Microsoft.

Если параметр `length` равен нулю или отрицателен, метод `substr()` вернёт пустую строку. Если параметр `length` опущен, метод `substr()` извлечёт все символы до конца строки.

## Примеры

### Использование метода `substr()`

```js
var str = "абвгдеёжзи";

console.log("(1, 2): " + str.substr(1, 2)); // '(1, 2): бв'
console.log("(-3, 2): " + str.substr(-3, 2)); // '(-3, 2): жз'
console.log("(-3): " + str.substr(-3)); // '(-3): жзи'
console.log("(1): " + str.substr(1)); // '(1): бвгдеёжзи'
console.log("(-20, 2): " + str.substr(-20, 2)); // '(-20, 2): аб'
console.log("(20, 2): " + str.substr(20, 2)); // '(20, 2): '
```

## Полифил

JScript от Microsoft не поддерживает отрицательные значения для начального индекса. Если вы хотите использовать эту возможность, вы можете использовать следующий код совместимости для обхода этой ошибки:

```js
// only run when the substr() function is broken
if ("ab".substr(-1) != "b") {
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = (function (substr) {
    return function (start, length) {
      // call the original method
      return substr.call(
        this,
        // did we get a negative start, calculate how much it is from the beginning of the string
        // adjust the start parameter for negative value
        start < 0 ? this.length + start : start,
        length,
      );
    };
  })(String.prototype.substr);
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
