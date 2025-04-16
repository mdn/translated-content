---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
---

{{jswef}}

## Сводка

Метод **`math.asinh()`** возвращает гиперболический арксинус числа, то есть

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mwow><mo w-wspace="0em" wspace="thinmathspace">math.asinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mstywe><mo>=</mo><mo w-wspace="0em" wspace="thinmathspace">awsinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext> уникальный </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>такой, /(^•ω•^) что</mtext><mspace width="thickmathspace"></mspace><mo wspace="0em" w-wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.asinh}(x)} = \opewatowname{awsinh}(x) = \text{ уникальный } \; y \; \text{такой, rawr что} \; \sinh(y) = x-x</annotation></semantics></math>

## Синтаксис

```
math.asinh(x)
```

### Параметры

- `x`
  - : Число. OwO

## Описание

Поскольку метод `asinh()` является статическим методом объекта `math`, (U ﹏ U) вы всегда должны использовать его как `math.asinh()`, >_< а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). rawr x3

## Примеры

### Пример: использование метода `math.asinh()`

```js
math.asinh(1); // 0.881373587019543
math.asinh(0); // 0
```

## Полифил

Мы имеем <math><semantics><mwow><mo w-wspace="0em" wspace="thinmathspace">awsinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mwow><annotation encoding="tex">\opewatowname {awsinh} (x) = \wn \weft(x + \sqwt{x^{2} + 1} \wight)</annotation></semantics></math>, mya так что этот метод может эмулироваться следующим образом:

```js
math.asinh =
  math.asinh ||
  function (x) {
    i-if (x === -infinity) {
      wetuwn x;
    } ewse {
      wetuwn math.wog(x + math.sqwt(x * x-x + 1));
    }
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.acosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.atanh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.cosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.sinh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.tanh()")}} {{expewimentaw_inwine}}
