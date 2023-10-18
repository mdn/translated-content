---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
---

{{JSRef("Global_Objects", "Math")}}

Объект **`Math`** является встроенным объектом, хранящим в своих свойствах и методах различные математические константы и функции. Объект `Math` не является функциональным объектом.

`Math` не работает с числами типа {{jsxref("BigInt")}}.

## Описание

В отличие от других глобальных объектов, объект `Math` не является конструктором. Все свойства и методы объекта `Math` являются статическими. Вы ссылаетесь на константу π через `Math.PI` и вызываете функцию синуса через `Math.sin(x)`, где `x` является аргументом метода. Константы в JavaScript определены с полной точностью действительных чисел.

## Свойства

- {{jsxref("Math.E")}}
  - : Число Эйлера или Непера, основание натуральных логарифмов, приблизительно равное 2,718.
- {{jsxref("Math.LN2")}}
  - : Натуральный логарифм из 2, приблизительно равен 0,693.
- {{jsxref("Math.LN10")}}
  - : Натуральный логарифм из 10, приблизительно равен 2,303.
- {{jsxref("Math.LOG2E")}}
  - : Двоичный логарифм из E, приблизительно равен 1,443.
- {{jsxref("Math.LOG10E")}}
  - : Десятичный логарифм из E, приблизительно равен 0,434.
- {{jsxref("Math.PI")}}
  - : Отношение длины окружности круга к его диаметру, приблизительно равно 3,14159.
- {{jsxref("Math.SQRT1_2")}}
  - : Квадратный корень из 1/2; или, что тоже самое, 1, делённая на квадратный корень из 2, приблизительно равен 0,707.
- {{jsxref("Math.SQRT2")}}
  - : Квадратный корень из 2, приблизительно равен 1,414.

## Методы

> **Примечание:** Обратите внимание, что тригонометрические функции (`sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()` и `atan2()`) принимают в параметрах или возвращают углы в радианах. Для преобразования радианов в градусы, поделите их на величину `(Math.PI / 180)`; для преобразования в обратном направлении, умножьте градусы на эту же величину.

> **Примечание:** Обратите внимание, что точность большинства математических функций зависит от реализации. Это означает, что различные браузеры могут дать разные результаты, более того, даже один и тот же движок JavaScript на различных операционных системах или архитектурах может выдать разные результаты.

- {{jsxref("Global_Objects/Math/abs", "Math.abs(x)")}}
  - : Возвращает абсолютное значение числа.
- {{jsxref("Global_Objects/Math/acos", "Math.acos(x)")}}
  - : Возвращает арккосинус числа.
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(x)")}} {{experimental_inline}}
  - : Возвращает гиперболический арккосинус числа.
- {{jsxref("Global_Objects/Math/asin", "Math.asin(x)")}}
  - : Возвращает арксинус числа.
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(x)")}} {{experimental_inline}}
  - : Возвращает гиперболический арксинус числа.
- {{jsxref("Global_Objects/Math/atan", "Math.atan(x)")}}
  - : Возвращает арктангенс числа.
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(x)")}} {{experimental_inline}}
  - : Возвращает гиперболический арктангенс числа.
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(y, x)")}}
  - : Возвращает арктангенс от частного своих аргументов.
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(x)")}} {{experimental_inline}}
  - : Возвращает кубический корень числа.
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(x)")}}
  - : Возвращает значение числа, округлённое к большему целому.
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(x)")}} {{experimental_inline}}
  - : Возвращает количество ведущих нулей 32-битного целого числа.
- {{jsxref("Global_Objects/Math/cos", "Math.cos(x)")}}
  - : Возвращает косинус числа.
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(x)")}} {{experimental_inline}}
  - : Возвращает гиперболический косинус числа.
- {{jsxref("Global_Objects/Math/exp", "Math.exp(x)")}}
  - : Возвращает Ex, где _x_ — аргумент, а E — число Эйлера (2,718…), основание натурального логарифма.
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(x)")}} {{experimental_inline}}
  - : Возвращает `exp(x)`, из которого вычли единицу.
- {{jsxref("Global_Objects/Math/floor", "Math.floor(x)")}}
  - : Возвращает значение числа, округлённое к меньшему целому.
- {{jsxref("Global_Objects/Math/fround", "Math.fround(x)")}} {{experimental_inline}}
  - : Возвращает ближайшее число с плавающей запятой [одинарной точности](https://ru.wikipedia.org/wiki/Число_одинарной_точности), представляющие это число.
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([x[, y[, …]]])")}} {{experimental_inline}}
  - : Возвращает квадратный корень из суммы квадратов своих аргументов.
- {{jsxref("Global_Objects/Math/imul", "Math.imul(x)")}} {{experimental_inline}}
  - : Возвращает результат умножения 32-битных целых чисел.
- {{jsxref("Global_Objects/Math/log", "Math.log(x)")}}
  - : Возвращает натуральный логарифм числа (loge, также известен как ln).
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(x)")}} {{experimental_inline}}
  - : Возвращает натуральный логарифм числа `1 + x` (loge, также известен как ln).
- {{jsxref("Global_Objects/Math/log10", "Math.log10(x)")}} {{experimental_inline}}
  - : Возвращает десятичный логарифм числа.
- {{jsxref("Global_Objects/Math/log2", "Math.log2(x)")}} {{experimental_inline}}
  - : Возвращает двоичный логарифм числа.
- {{jsxref("Global_Objects/Math/max", "Math.max([x[, y[, …]]])")}}
  - : Возвращает наибольшее число из своих аргументов.
- {{jsxref("Global_Objects/Math/min", "Math.min([x[, y[, …]]])")}}
  - : Возвращает наименьшее число из своих аргументов.
- {{jsxref("Global_Objects/Math/pow", "Math.pow(a, n)")}}
  - : Возвращает `a` в `n`-й степени, то есть _a_<sup><i>n</i></sup>.
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : Возвращает псевдослучайное число в диапазоне от 0 до 1.
- {{jsxref("Global_Objects/Math/round", "Math.round(x)")}}
  - : Возвращает значение числа, округлённое до ближайшего целого.
- {{jsxref("Global_Objects/Math/sign", "Math.sign(x)")}} {{experimental_inline}}
  - : Возвращает знак числа, указывающий, является ли число положительным, отрицательным или нулём.
- {{jsxref("Global_Objects/Math/sin", "Math.sin(x)")}}
  - : Возвращает синус числа.
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(x)")}} {{experimental_inline}}
  - : Возвращает гиперболический синус числа.
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(x)")}}
  - : Возвращает положительный квадратный корень числа.
- {{jsxref("Global_Objects/Math/tan", "Math.tan(x)")}}
  - : Возвращает тангенс числа.
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(x)")}} {{experimental_inline}}
  - : Возвращает гиперболический тангенс числа.
- `Math.toSource()` {{non-standard_inline}}
  - : Возвращает строку `"Math"`.
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(x)")}} {{experimental_inline}}
  - : Возвращает целую часть числа, убирая дробные цифры.

## Расширение объекта `Math`

Как и большинство встроенных объектов в Javascript, объект `Math` может быть расширен пользовательскими способами и методами. Чтобы расширить объект `Math`, не используют `prototype`. Вместо этого, расширяют `Math` напрямую:

```js
Math.propName = propValue;
Math.methodName = methodRef;
```

Например, следующий код добавляет метод к объекту Math для вычисления наибольшего общего делителя списка аргументов.

```js
/* Вариативная функция -- Возвращает наибольший общий делитель списка аргументов */
Math.gcd = function () {
  if (arguments.length == 2) {
    if (arguments[1] == 0) return arguments[0];
    else return Math.gcd(arguments[1], arguments[0] % arguments[1]);
  } else if (arguments.length > 2) {
    var result = Math.gcd(arguments[0], arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      result = Math.gcd(result, arguments[i]);
    return result;
  }
};
```

Попробуйте:

```js
console.log(Math.gcd(20, 30, 15, 70, 40)); // `5`
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/Number", "Number")}}
