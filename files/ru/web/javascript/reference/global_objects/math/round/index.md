---
title: Math.round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
---

{{JSRef("Global_Objects", "Math")}}

## Сводка

Метод **`Math.round()`** возвращает число, округлённое к ближайшему целому.

## Синтаксис

```
Math.round(x)
```

### Параметры

- `x`
  - : Число.

## Описание

Если дробная часть числа больше, либо равна 0,5, аргумент будет округлён до ближайшего большего целого. Если дробная часть числа меньше 0,5, аргумент будет округлён до ближайшего меньшего целого.

Поскольку метод `round()` является статическим методом объекта `Math`, вы всегда должны использовать его как `Math.round()`, а не пытаться вызывать метод на созданном экземпляре объекта `Math` (поскольку объект `Math` не является конструктором).

## Примеры

### Пример: использование метода `Math.round()`

```js
// Вернёт значение 20
x = Math.round(20.49);

// Вернёт значение 21
x = Math.round(20.5);

// Вернёт значение -20
x = Math.round(-20.5);

// Вернёт значение -21
x = Math.round(-20.51);

// Вернёт значение 1 (!)
// Обратите внимание на ошибку округления из-за неточности арифметики с плавающей запятой
// Сравните этот результат с результатом Math.round(1.005, -2) из следующего примера
x = Math.round(1.005 * 100) / 100;
```

### Пример: корректировка округления десятичных дробей

```js
// Замыкание
(function () {
  /**
   * Корректировка округления десятичных дробей.
   *
   * @param {String}  type  Тип корректировки.
   * @param {Number}  value Число.
   * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
   * @returns {Number} Скорректированное значение.
   */
  function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
    // Обратный сдвиг
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }

  // Десятичное округление к ближайшему
  if (!Math.round10) {
    Math.round10 = function (value, exp) {
      return decimalAdjust("round", value, exp);
    };
  }
  // Десятичное округление вниз
  if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
      return decimalAdjust("floor", value, exp);
    };
  }
  // Десятичное округление вверх
  if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
      return decimalAdjust("ceil", value, exp);
    };
  }
})();

// Округление к ближайшему
Math.round10(55.55, -1); // 55.6
Math.round10(55.549, -1); // 55.5
Math.round10(55, 1); // 60
Math.round10(54.9, 1); // 50
Math.round10(-55.55, -1); // -55.5
Math.round10(-55.551, -1); // -55.6
Math.round10(-55, 1); // -50
Math.round10(-55.1, 1); // -60
Math.round10(1.005, -2); // 1.01 -- сравните этот результат с результатом Math.round(1.005*100)/100 выше
// Округление вниз
Math.floor10(55.59, -1); // 55.5
Math.floor10(59, 1); // 50
Math.floor10(-55.51, -1); // -55.6
Math.floor10(-51, 1); // -60
// Округление вверх
Math.ceil10(55.51, -1); // 55.6
Math.ceil10(51, 1); // 60
Math.ceil10(-55.59, -1); // -55.5
Math.ceil10(-59, 1); // -50
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
- {{jsxref("Math.trunc()")}} {{experimental_inline}}
