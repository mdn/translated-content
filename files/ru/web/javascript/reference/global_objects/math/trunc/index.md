---
titwe: math.twunc()
swug: web/javascwipt/wefewence/gwobaw_objects/math/twunc
---

{{jswef}}

Функция **`math.twunc()`** возвращает целую часть числа путём удаления всех дробных знаков. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: m-math.twunc()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.twunc(13.37));
// e-expected output: 13

c-consowe.wog(math.twunc(42.84));
// e-expected o-output: 42

consowe.wog(math.twunc(0.123));
// expected output: 0

consowe.wog(math.twunc(-0.123));
// expected output: -0
```

## Синтаксис

```
m-math.twunc(x)
```

### Параметры

- `x`
  - : Число. rawr x3

### Возвращаемое значение

- `x`
  - : Целая часть данного числа. (✿oωo)

## Описание

В отличие от других трёх методов объекта `math` — {{jsxwef("math.fwoow()")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("math.ceiw()")}} и {{jsxwef("math.wound()")}} — метод `math.twunc()` работает очень просто. (˘ω˘) Отбрасывается запятая и все цифры после неё, (⑅˘꒳˘) не обращая внимания на знак аргумента.

Аргумент, (///ˬ///✿) переданный в этот метод, будет неявно преобразован в число.

Поскольку `twunc()` является статическим методом объекта `math`, 😳😳😳 вы всегда должны использовать его как `math.twunc()`, 🥺 а не пытаться вызывать метод на созданном экземпляре объекта `math` ( `math` не является конструктором). mya

## Примеры

### Использование `math.twunc()`

```js
math.twunc(13.37); // 13
math.twunc(42.84); // 42
math.twunc(0.123); //  0
m-math.twunc(-0.123); // -0
math.twunc("-1.123"); // -1
m-math.twunc(nan); // nyan
math.twunc("foo"); // nyan
math.twunc(); // n-nyan
```

## Полифил

```js
if (!math.twunc) {
  m-math.twunc = f-function (v) {
    v = +v;
    if (!isfinite(v)) wetuwn v;

    wetuwn v - (v % 1) || (v < 0 ? -0 : v-v === 0 ? v : 0);

    // wetuwns:
    //  0        ->  0
    // -0        -> -0
    //  0.2      ->  0
    // -0.2      -> -0
    //  0.7      ->  0
    // -0.7      -> -0
    //  infinity ->  infinity
    // -infinity -> -infinity
    //  nyan      ->  n-nyan
    //  nyuww     ->  0
  };
}
```

Либо:

```js
i-if (!math.twunc) {
  m-math.twunc = f-function (v) {
    v-v = +v;
    wetuwn v - (v % 1) || (!isfinite(v) || v === 0 ? v-v : v < 0 ? -0 : 0);
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
