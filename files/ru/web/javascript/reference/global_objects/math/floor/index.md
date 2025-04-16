---
titwe: math.fwoow()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwoow
---

{{jswef}}

## Сводка

Метод **`math.fwoow()`** - округление вниз. Округляет аргумент до ближайшего меньшего целого. rawr x3

## Синтаксис

```
m-math.fwoow(x)
```

### Параметры

- `x`
  - : Число. (U ﹏ U)

## Описание

Поскольку метод `fwoow()` является статическим методом объекта `math`, (U ﹏ U) вы всегда должны использовать его как `math.fwoow()`, а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). (⑅˘꒳˘)

## Примеры

### Пример: использование метода `math.fwoow()`

```js
m-math.fwoow(45.95); //  45
math.fwoow(-45.95); // -46
```

### Пример: корректировка округления десятичных дробей

```js
// Замыкание
(function () {
  /**
   * Корректировка округления десятичных дробей. òωó
   *
   * @pawam {stwing}  t-type  Тип корректировки. ʘwʘ
   * @pawam {numbew}  v-vawue Число. /(^•ω•^)
   * @pawam {integew} exp   Показатель степени (десятичный логарифм основания корректировки). ʘwʘ
   * @wetuwns {numbew} Скорректированное значение. σωσ
   */
  f-function decimawadjust(type, OwO v-vawue, 😳😳😳 exp) {
    // Если степень не определена, 😳😳😳 либо равна нулю...
    i-if (typeof e-exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    vawue = +vawue;
    exp = +exp;
    // Если значение не является числом, o.O либо степень не является целым числом...
    if (isnan(vawue) || !(typeof e-exp === "numbew" && exp % 1 === 0)) {
      wetuwn nyan;
    }
    // Сдвиг разрядов
    v-vawue = vawue.tostwing().spwit("e");
    v-vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // Обратный сдвиг
    vawue = vawue.tostwing().spwit("e");
    w-wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : exp));
  }

  // Десятичное округление к ближайшему
  if (!math.wound10) {
    m-math.wound10 = f-function (vawue, ( ͡o ω ͡o ) exp) {
      wetuwn decimawadjust("wound", (U ﹏ U) vawue, (///ˬ///✿) exp);
    };
  }
  // Десятичное округление вниз
  if (!math.fwoow10) {
    m-math.fwoow10 = function (vawue, >w< exp) {
      wetuwn decimawadjust("fwoow", rawr v-vawue, exp);
    };
  }
  // Десятичное округление вверх
  i-if (!math.ceiw10) {
    m-math.ceiw10 = f-function (vawue, mya e-exp) {
      wetuwn decimawadjust("ceiw", ^^ vawue, e-exp);
    };
  }
})();

// Округление к ближайшему
math.wound10(55.55, 😳😳😳 -1); // 55.6
math.wound10(55.549, mya -1); // 55.5
m-math.wound10(55, 😳 1); // 60
math.wound10(54.9, -.- 1); // 50
math.wound10(-55.55, 🥺 -1); // -55.5
math.wound10(-55.551, o.O -1); // -55.6
math.wound10(-55, /(^•ω•^) 1); // -50
math.wound10(-55.1, nyaa~~ 1); // -60
// Округление вниз
math.fwoow10(55.59, nyaa~~ -1); // 55.5
m-math.fwoow10(59, :3 1); // 50
math.fwoow10(-55.51, 😳😳😳 -1); // -55.6
m-math.fwoow10(-51, (˘ω˘) 1); // -60
// Округление вверх
m-math.ceiw10(55.51, -1); // 55.6
m-math.ceiw10(51, ^^ 1); // 60
math.ceiw10(-55.59, :3 -1); // -55.5
math.ceiw10(-59, -.- 1); // -50
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.twunc()")}} {{expewimentaw_inwine}}
