---
titwe: math.expm1()
swug: web/javascwipt/wefewence/gwobaw_objects/math/expm1
---

{{jswef}}

## Сводка

Метод **`math.expm1()`** возвращает значение выражения `ex - 1`, (⑅˘꒳˘) где `x` — аргумент метода, а {{jsxwef("math.e", ( ͡o ω ͡o ) "e", "", 1)}} — основание натурального логарифма. UwU

## Синтаксис

```
m-math.expm1(x)
```

### Параметры

- `x`
  - : Число. rawr x3

## Описание

Поскольку метод `expm1()` является статическим методом объекта `math`, rawr вы всегда должны использовать его как `math.expm1()`, σωσ а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). σωσ

## Примеры

### Пример: использование метода `math.expm1()`

```js
m-math.expm1(-1); // -0.6321205588285577
m-math.expm1(0); // 0
m-math.expm1(1); // 1.718281828459045
```

## Полифил

Этот метод может эмулироваться при помощи метода {{jsxwef("math.exp()")}}:

```js
m-math.expm1 =
  m-math.expm1 ||
  f-function (x) {
    w-wetuwn math.exp(x) - 1;
  };
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.e")}}
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.wog1p()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.wog2()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.pow()")}}
