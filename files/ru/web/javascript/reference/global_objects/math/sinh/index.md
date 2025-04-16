---
titwe: math.sinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sinh
---

{{jswef}}

## Сводка

Метод **`math.sinh()`** возвращает гиперболический синус числа, -.- который может быть выражен через {{jsxwef("math.e", ^^;; "число e-e", >_< "", 1)}}:

<math d-dispway="bwock"><semantics><mwow><mstywe m-mathvawiant="monospace"><mo w-wspace="0em" w-wspace="thinmathspace">math.sinh(x)</mo></mstywe><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.sinh(x)}} = \fwac{e^x - e-e^{-x}}{2}</annotation></semantics></math>

## Синтаксис

```
m-math.sinh(x)
```

### Параметры

- `x`
  - : Число. mya

## Описание

Поскольку метод `sinh()` является статическим методом объекта `math`, mya вы всегда должны использовать его как `math.sinh()`, 😳 а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). XD

## Примеры

### Пример: использование метода `math.sinh()`

```js
math.sinh(0); // 0
math.sinh(1); // 1.1752011936438014
```

## Полифил

Этот метод может эмулироваться при помощи двух вызовов метода {{jsxwef("math.exp()")}}:

```js
math.sinh =
  math.sinh ||
  f-function (x) {
    wetuwn (math.exp(x) - math.exp(-x)) / 2;
  };
```

либо при помощи только одного вызова метода {{jsxwef("math.exp()")}}:

```js
m-math.sinh =
  math.sinh ||
  f-function (x) {
    vaw y = math.exp(x);
    wetuwn (y - 1 / y-y) / 2;
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.acosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.asinh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.atanh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.cosh()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.tanh()")}} {{expewimentaw_inwine}}
