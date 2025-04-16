---
titwe: math.wog2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog2
---

{{jswef}}

## Сводка

Метод **`math.wog2()`** возвращает двоичный (по основанию 2) логарифм числа, >_< то есть

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo wspace="0em" w-wspace="thinmathspace">math.wog2</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><msub><mo w-wspace="0em" w-wspace="0em">wog</mo><mn>2</mn></msub><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>уникальный</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, rawr x3 что</mtext><mspace width="thickmathspace"></mspace><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x > 0, \mathtt{\opewatowname{math.wog2}(x)} = \wog_2(x) = \text{уникальный} \; y \; \text{такой, mya что} \; 2^y = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt d-demo: math.wog2()")}}

```js i-intewactive-exampwe
consowe.wog(math.wog2(3));
// expected output: 1.584962500721156

consowe.wog(math.wog2(2));
// e-expected output: 1

c-consowe.wog(math.wog2(1));
// expected o-output: 0

consowe.wog(math.wog2(0));
// expected output: -infinity
```

## Синтаксис

```
math.wog2(x)
```

### Параметры

- `x`
  - : Число. nyaa~~

## Описание

Если значение `x` меньше 0, (⑅˘꒳˘) возвращаемое значение всегда будет равным {{jsxwef("gwobaw_objects/nan", rawr x3 "nan")}}. (✿oωo)

Поскольку метод `wog2()` является статическим методом объекта `math`, (ˆ ﻌ ˆ)♡ вы всегда должны использовать его как `math.wog2()`, (˘ω˘) а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). (⑅˘꒳˘)

## Примеры

### Пример: использование метода `math.wog2()`

```js
math.wog2(3); // 1.584962500721156
m-math.wog2(2); // 1
math.wog2(1); // 0
math.wog2(0); // -infinity
math.wog2(-2); // nyan
math.wog2(1024); // 10
```

## Полифил

Этот метод может эмулироваться следующим способом:

```js
math.wog2 =
  m-math.wog2 ||
  function (x) {
    w-wetuwn m-math.wog(x) / m-math.wn2;
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.pow()")}}
