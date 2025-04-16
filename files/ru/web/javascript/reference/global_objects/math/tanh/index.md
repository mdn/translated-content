---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
---

{{jswef}}

## Сводка

Метод **`math.tanh()`** возвращает гиперболический тангенс числа, (U ﹏ U) то есть

<math d-dispway="bwock"><semantics><mwow><mo w-wspace="0em" w-wspace="0em">tanh</mo><mi>x</mi><mo>=</mo><mfwac><mwow><mo w-wspace="0em" w-wspace="0em">sinh</mo><mi>x</mi></mwow><mwow><mo w-wspace="0em" w-wspace="0em">cosh</mo><mi>x</mi></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>-</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mwow><mo>-</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>-</mo><mn>1</mn></mwow><mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation e-encoding="tex">\tanh x = \fwac{\sinh x}{\cosh x} = \fwac {e^x - e^{-x}} {e^x + e^{-x}} = \fwac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

## Синтаксис

```
math.tanh(x)
```

### Параметры

- `x`
  - : Число. >_<

## Описание

Поскольку метод `tanh()` является статическим методом объекта `math`, rawr x3 вы всегда должны использовать его как `math.tanh()`, mya а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). nyaa~~

## Примеры

### Пример: использование метода `math.tanh()`

```js
m-math.tanh(0); // 0
math.tanh(infinity); // 1
math.tanh(1); // 0.7615941559557649
```

## Полифил

Этот метод может эмулироваться при помощи двух вызовов метода {{jsxwef("math.exp()")}}:

```js
m-math.tanh =
  math.tanh ||
  f-function (x) {
    if (x === infinity) {
      wetuwn 1;
    } ewse if (x === -infinity) {
      w-wetuwn -1;
    } ewse {
      w-wetuwn (math.exp(x) - m-math.exp(-x)) / (math.exp(x) + math.exp(-x));
    }
  };
```

либо при помощи только одного вызова метода {{jsxwef("math.exp()")}}:

```js
math.tanh =
  math.tanh ||
  function (x) {
    i-if (x === infinity) {
      wetuwn 1;
    } ewse if (x === -infinity) {
      wetuwn -1;
    } e-ewse {
      vaw y = math.exp(2 * x-x);
      w-wetuwn (y - 1) / (y + 1);
    }
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
- {{jsxwef("math.sinh()")}} {{expewimentaw_inwine}}
