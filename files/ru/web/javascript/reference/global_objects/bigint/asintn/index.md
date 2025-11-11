---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
---

{{JSRef}}

**`BigInt.asIntN`** — это статический метод, который позволяет перенести BigInt-значение в целое число со знаком между -2ширина-1 and 2ширина-1-1.

{{InteractiveExample("JavaScript Demo: BigInt.asIntN()")}}

```js interactive-example
const I64_CEIL = 2n ** 63n;

console.log(BigInt.asIntN(64, I64_CEIL - 1n));
// 9223372036854775807n (2n ** 64n - 1n, the maximum non-wrapping value)
console.log(BigInt.asIntN(64, I64_CEIL));
// -9223372036854775808n (wraps to min value)
console.log(BigInt.asIntN(64, I64_CEIL + 1n));
// -9223372036854775807n (min value + 1n)
console.log(BigInt.asIntN(64, I64_CEIL * 2n));
// 0n (wrapped around to zero)
console.log(BigInt.asIntN(64, -I64_CEIL * -42n));
// 0n (also wraps on negative multiples)
```

## Синтаксис

```
BigInt.asIntN(width, bigint);
```

### Аргументы

- `width`
  - : Количество битов, доступных для целочисленного размера.
- `bigint`
  - : Целое число для зажима, чтобы соответствовать поставляемым битам.

### Возвращаемое значение

Значение `bigint` по модулю 2`width` как целое число со знаком.

## Примеры

### Пребывание в 64-битных диапазонах

Метод `BigInt.asIntN()` может быть полезен, чтобы оставаться в диапазоне 64-битной арифметики.

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775807n
// отрицательное число из-за переполнения
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
