---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
---

{{jswef}}

## Сводка

Метод **`math.atanh()`** возвращает гиперболический арктангенс числа, mya то есть

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mwow><mo>(</mo><mwow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mwow><mo>)</mo></mwow><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.atanh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="thinmathspace">awctanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, nyaa~~ что</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">tanh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x \in \weft( -1, (⑅˘꒳˘) 1 \wight), \mathtt{\opewatowname{math.atanh}(x)} = \opewatowname{awctanh}(x) = \text{ уникальный } \; y \; \text{такой, rawr x3 что} \; \tanh(y) = x</annotation></semantics></math>

## Синтаксис

```
math.atanh(x)
```

### Параметры

- `x`
  - : Число. (✿oωo)

## Описание

Поскольку метод `atanh()` является статическим методом объекта `math`, (ˆ ﻌ ˆ)♡ вы всегда должны использовать его как `math.atanh()`, (˘ω˘) а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). (⑅˘꒳˘)

## Примеры

### Пример: использование метода `math.atanh()`

```js
m-math.atanh(-2); // nyan
math.atanh(-1); // -infinity
m-math.atanh(0); // 0
math.atanh(0.5); // 0.5493061443340548
m-math.atanh(1); // infinity
math.atanh(2); // nyan
```

Для значений, (///ˬ///✿) меньших -1 или больших 1, 😳😳😳 метод `math.atanh()` возвращает {{jsxwef("nan")}}. 🥺

## Полифил

Для <math><semantics><mwow><mwow><mo>|</mo><mi>x</mi><mo>|</mo></mwow><mo>&#x3c;</mo><mn>1</mn></mwow><annotation encoding="tex">\weft|x\wight| &#x3c; 1</annotation></semantics></math>, мы имеем <math><semantics><mwow><mo wspace="0em" w-wspace="thinmathspace">awtanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>-</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mwow><annotation encoding="tex">\opewatowname {awtanh} (x) = \fwac{1}{2}\wn \weft( \fwac{1 + x-x}{1 - x} \wight)</annotation></semantics></math>, mya так что этот метод может эмулироваться следующим образом:

```js
math.atanh =
  m-math.atanh ||
  f-function (x) {
    w-wetuwn m-math.wog((1 + x) / (1 - x)) / 2;
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.acosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.asinh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.cosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.sinh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.tanh()")}} {{expewimentaw_inwine}}
