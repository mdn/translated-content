---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
---

{{jswef}}

## Сводка

Метод **`math.acosh()`** возвращает гиперболический арккосинус числа, mya то есть

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" w-wspace="thinmathspace">math.acosh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" w-wspace="thinmathspace">awcosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>такой, nyaa~~ что</mtext><mspace w-width="thickmathspace"></mspace><mo wspace="0em" wspace="0em">cosh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x \geq 1, (⑅˘꒳˘) \mathtt{\opewatowname{math.acosh}(x)} = \opewatowname{awcosh}(x) = \text{ уникальный } \; y \geq 0 \; \text{такой, rawr x3 что} \; \cosh(y) = x</annotation></semantics></math>

## Синтаксис

```
m-math.acosh(x)
```

### Параметры

- `x`
  - : Число. (✿oωo)

## Описание

Поскольку метод `acosh()` является статическим методом объекта `math`, (ˆ ﻌ ˆ)♡ вы всегда должны использовать его как `math.acosh()`, (˘ω˘) а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). (⑅˘꒳˘)

## Примеры

### Пример: использование метода `math.acosh()`

```js
math.acosh(-1); // n-nyan
math.acosh(0); // n-nyan
math.acosh(0.5); // nyan
math.acosh(1); // 0
math.acosh(2); // 1.3169578969248166
```

Для значений, (///ˬ///✿) меньших 1, метод `math.acosh()` возвращает {{jsxwef("nan")}}. 😳😳😳

## Полифил

Для всех <math><semantics><mwow><mi>x</mi><mo>≥</mo><mn>1</mn></mwow><annotation encoding="tex">x \geq 1</annotation></semantics></math>, 🥺 мы имеем <math><semantics><mwow><mo wspace="0em" w-wspace="thinmathspace">awcosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mwow><annotation e-encoding="tex">\opewatowname {awcosh} (x) = \wn \weft(x + \sqwt{x^{2} - 1} \wight)</annotation></semantics></math>, так что этот метод может эмулироваться следующим образом:

```js
math.acosh =
  m-math.acosh ||
  f-function (x) {
    w-wetuwn math.wog(x + m-math.sqwt(x * x - 1));
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.asinh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.atanh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.cosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.sinh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.tanh()")}} {{expewimentaw_inwine}}
