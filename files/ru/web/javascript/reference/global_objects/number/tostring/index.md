---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Метод **`toString()`** возвращает строковое представление указанного объекта {{jsxref("Global_Objects/Number", "Number")}}.

## Синтаксис

```
numObj.toString([radix])
```

### Параметры

- `radix`
  - : Необязательный параметр. Целое число между 2 и 36, определяющее основание системы счисления, используемой для представления числового значения.

### Выбрасываемые исключения

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Если в метод `toString()` передано основание не в диапазоне от 2 до 36, будет выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}.

## Описание

Объект {{jsxref("Global_Objects/Number", "Number")}} переопределяет метод {{jsxref("Object.prototype.toString", "toString")}}, унаследованный из объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString")}}. Для объектов {{jsxref("Global_Objects/Number", "Number")}} метод `toString()` возвращает строку, представляющую объект в определённой системе счисления.

Метод `toString()` разбирает свой первый аргумент и пытается вернуть строковое представление в системе счисления с указанным основанием. Для оснований, больших 10, при обозначении цифр, больших 9, используются буквы латинского алфавита. Например, для шестнадцатеричных чисел (основание 16), используются буквы с `a` по `f`.

Если параметр `radix` не указан, предпочитаемое основание предполагается равным 10.

Если число `numObj` отрицательно, его знак сохраняется. Это правило действует даже если основание равно 2; возвращённая строка является двоичным представлением положительного числа `numObj`, перед которым ставится знак `-`, а **не** дополнительным кодом числа `numObj`.

## Примеры

### Пример: использование `toString`

```js
var count = 10;

console.log(count.toString()); // Выведет '10'
console.log((17).toString()); // Выведет '17'

var x = 6;

console.log(x.toString(2)); // Выведет '110'
console.log((254).toString(16)); // Выведет 'fe'

console.log((-10).toString(2)); // Выведет '-1010'
console.log((-0xff).toString(2)); // Выведет '-11111111'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
