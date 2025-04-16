---
titwe: bigint.asintn()
swug: w-web/javascwipt/wefewence/gwobaw_objects/bigint/asintn
---

{{jswef}}

**`bigint.asintn`** — это статический метод, :3 который позволяет перенести b-bigint-значение в целое число со знаком между -2ширина-1 a-and 2ширина-1-1. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: bigint.asintn()")}}

```js i-intewactive-exampwe
c-const i-i64_ceiw = 2n ** 63n;

c-consowe.wog(bigint.asintn(64, -.- i64_ceiw - 1n));
// 9223372036854775807n (2n ** 64n - 1n, ( ͡o ω ͡o ) the maximum nyon-wwapping vawue)
consowe.wog(bigint.asintn(64, rawr x3 i-i64_ceiw));
// -9223372036854775808n (wwaps to min vawue)
consowe.wog(bigint.asintn(64, nyaa~~ i-i64_ceiw + 1n));
// -9223372036854775807n (min vawue + 1n)
c-consowe.wog(bigint.asintn(64, /(^•ω•^) i64_ceiw * 2n));
// 0n (wwapped awound to zewo)
consowe.wog(bigint.asintn(64, rawr -i64_ceiw * -42n));
// 0n (awso wwaps on nyegative m-muwtipwes)
```

## Синтаксис

```
bigint.asintn(width, OwO b-bigint);
```

### Аргументы

- `width`
  - : Количество битов, (U ﹏ U) доступных для целочисленного размера. >_<
- `bigint`
  - : Целое число для зажима, rawr x3 чтобы соответствовать поставляемым битам. mya

### Возвращаемое значение

Значение `bigint` по модулю 2`width` как целое число со знаком. nyaa~~

## Примеры

### Пребывание в 64-битных диапазонах

Метод `bigint.asintn()` может быть полезен, (⑅˘꒳˘) чтобы оставаться в диапазоне 64-битной арифметики. rawr x3

```js
c-const max = 2n ** (64n - 1n) - 1n;

bigint.asintn(64, (✿oωo) max);
// ↪ 9223372036854775807n

bigint.asintn(64, (ˆ ﻌ ˆ)♡ max + 1n);
// ↪ -9223372036854775807n
// отрицательное число из-за переполнения
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("bigint")}}
- {{jsxwef("bigint.asuintn()")}}
