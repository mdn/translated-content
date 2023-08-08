---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`Object.is()`** определяет, являются ли два значения [одинаковыми значениями](/ru/docs/Web/JavaScript/Guide/Sameness).

## Синтаксис

```
var isSame = Object.is(value1, value2);
```

### Параметры

- `value1`
  - : Первое сравниваемое значение.
- `value2`
  - : Второе сравниваемое значение.

## Описание

Метод `Object.is()` определяет, являются ли два значения [одинаковыми значениями](/ru/docs/Web/JavaScript/Guide/Sameness). Два значения являются одинаковыми в следующих случаях:

- оба равны {{jsxref("undefined")}}
- оба равны {{jsxref("null")}}
- оба равны `true`, либо оба равны `false`
- оба являются строками с одинаковой длиной и одинаковыми символами
- оба являются одним и тем же объектом
- оба являются числами и

  - оба равны `+0`
  - оба равны `-0`
  - оба равны {{jsxref("NaN")}}
  - либо оба не равны нулю или {{jsxref("NaN")}} и оба имеют одинаковое значение

Поведение этого метода _не_ аналогично оператору {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}. Оператор {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} использует приведение типов обоих операндов (если они имеют различный тип) перед проверкой на равенство (в результате получается, что проверка `"" == false` даёт `true`), а метод `Object.is` приведение типов не выполняет.

Поведение этого метода _не_ аналогично оператору {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}. Оператор {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} (также как и оператор {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}) считает числовые значения `-0` и `+0` равными, а значение {{jsxref("Number.NaN")}} не равным самому себе.

## Примеры

```js
Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var test = { a: 1 };
Object.is(test, test); // true

Object.is(null, null); // true

// Специальные случаи
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
```

## Полифил

Метод `Object.is` предложен в дополнение к стандарту ECMA-262; поэтому он может быть недоступен в некоторых браузерах. Это можно обойти, вставив приведённый ниже фрагмент кода в начало ваших скриптов. Он позволит вам использовать метод `Object.is` в случаях, когда он не имеет родной поддержки браузером.

```
if (!Object.is) {
  Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Руководство по JavaScript: одинаковость](/ru/docs/Web/JavaScript/Guide/Sameness) — сравнение всех трёх встроенных способов проверки на одинаковость
