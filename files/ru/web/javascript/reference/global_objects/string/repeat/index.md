---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
---

{{JSRef}}Метод **`repeat()`** конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

## Синтаксис

```
str.repeat(count)
```

### Параметры

- `count`
  - : Целое число от 0 до +∞: \[0, +∞), определяющее число повторений строки во вновь создаваемой и возвращаемой строке.

### Возвращаемое значение

Новая строка, содержащая указанное количество копий строки, для которой был вызван метод.

### Исключения

- {{jsxref("Errors/Negative_repetition_count", "RangeError")}}: число повторений не должно быть отрицательным.
- {{jsxref("Errors/Resulting_string_too_large", "RangeError")}}: число повторений должно быть меньше бесконечности и не должно превышать максимально допустимую длину строки.

<!---->

## Примеры

```js
"абв".repeat(-1); // RangeError
"абв".repeat(0); // ''
"абв".repeat(1); // 'абв'
"абв".repeat(2); // 'абвабв'
"абв".repeat(3.5); // 'абвабвабв' (количество будет преобразовано в целое число)
"абв".repeat(1 / 0); // RangeError

({ toString: () => "абв", repeat: String.prototype.repeat }).repeat(2);
// 'абвабв' (метод repeat() является обобщённым методом)
```

## Полифил

Этот метод был добавлен к спецификации ECMAScript 2015 и может быть доступен ещё не во всех реализациях JavaScript. Однако, вы можете легко эмулировать этот метод при помощи следующего кода:

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    "use strict";
    if (this == null) {
      throw new TypeError("can't convert " + this + " to object");
    }
    var str = "" + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError("repeat count must be non-negative");
    }
    if (count == Infinity) {
      throw new RangeError("repeat count must be less than infinity");
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return "";
    }
    // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
    // соптимизировать главную часть функции. Впрочем, большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
    if (str.length * count >= 1 << 28) {
      throw new RangeError(
        "repeat count must not overflow maximum string size",
      );
    }
    var rpt = "";
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
