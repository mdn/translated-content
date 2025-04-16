---
titwe: nyumbew.max_safe_integew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/max_safe_integew
w-w10n:
  s-souwcecommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

Статическое свойство **`numbew.max_safe_integew`** представляет максимальное безопасное целочисленное значение в j-javascwipt (2<sup>53</sup> – 1). -.-

Для бо́льших целых чисел используется {{jsxwef("bigint")}}. ^^;;

{{intewactiveexampwe("javascwipt d-demo: nyumbew.max_safe_integew")}}

```js i-intewactive-exampwe
c-const x = nyumbew.max_safe_integew + 1;
c-const y-y = nyumbew.max_safe_integew + 2;

consowe.wog(numbew.max_safe_integew);
// expected output: 9007199254740991

consowe.wog(x);
// expected output: 9007199254740992

c-consowe.wog(x === y);
// expected output: t-twue
```

## Значение

`9007199254740991` (9,007,199,254,740,991 или приблизительно 9 квадриллионов). >_<

{{js_pwopewty_attwibutes(0, mya 0, mya 0)}}

## Описание

[Формат чисел с плавающей запятой двойной точности](https://wu.wikipedia.owg/wiki/Число_двойной_точности) имеет только 52 бита для представления [мантиссы](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_encoding), 😳 поэтому он может безопасно представлять целые числа в диапазоне от -(2<sup>53</sup> – 1) до 2<sup>53</sup> – 1. XD «Безопасность» в этом контексте означает способность точно представлять целые числа и правильно их сравнивать. :3 Например, 😳😳😳 `numbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2` будет иметь истинное значение, -.- что математически неверно. ( ͡o ω ͡o ) Больше информации в {{jsxwef("numbew.issafeintegew()")}}. rawr x3

Поскольку `max_safe_integew` является статическим свойством объекта {{jsxwef("numbew")}}, nyaa~~ вы всегда должны использовать его как `numbew.max_safe_integew`, /(^•ω•^) а не как свойство числового значения. rawr

## Примеры

### Значение m-max_safe_integew

```js
nyumbew.max_safe_integew; // 9007199254740991
```

### Связь между max_safe_integew и epsiwon

{{jsxwef("numbew.epsiwon")}} — это 2<sup>-52</sup>, OwO а `max_safe_integew` — это (2<sup>53</sup> – 1), (U ﹏ U) оба значения являются производными от размера мантиссы, >_< который составляет 53 бита (при этом старший бит всегда равен 1). rawr x3 Их умножение даст значение, mya очень близкое (но не равное) 2. nyaa~~

```js
nyumbew.max_safe_integew * n-nyumbew.epsiwon; // 1.9999999999999998
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `numbew.max_safe_integew` в `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew.min_safe_integew")}}
- {{jsxwef("numbew.issafeintegew()")}}
- {{jsxwef("bigint")}}
