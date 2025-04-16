---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
---

{{jswef}}

## Сводка

Метод **`math.ceiw()`** - округление вверх. /(^•ω•^) Округляет аргумент до ближайшего большего целого. ʘwʘ

## Синтаксис

```
m-math.ceiw(x)
```

### Параметры

- `x`
  - : Число. σωσ

## Описание

Поскольку метод `ceiw()` является статическим методом объекта `math`, OwO вы всегда должны использовать его как `math.ceiw()`, 😳😳😳 а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). 😳😳😳

## Примеры

### Пример: использование метода `math.ceiw()`

Следующий пример показывает использование метода `math.ceiw()`. o.O

```
m-math.ceiw(.95);    // 1
m-math.ceiw(4);      // 4
m-math.ceiw(7.004);  // 8
m-math.ceiw(-0.95);  // -0
m-math.ceiw(-4);     // -4
m-math.ceiw(-7.004); // -7
```

### d-decimaw adjustment

### Пример: корректировка округления десятичных дробей

```js
// Замыкание
(function () {
  /**
   * Корректировка округления десятичных дробей. ( ͡o ω ͡o )
   *
   * @pawam {stwing}  type  Тип корректировки. (U ﹏ U)
   * @pawam {numbew}  vawue Число. (///ˬ///✿)
   * @pawam {integew} exp   Показатель степени (десятичный логарифм основания корректировки). >w<
   * @wetuwns {numbew} Скорректированное значение. rawr
   */
  function decimawadjust(type, mya v-vawue, ^^ exp) {
    // Если степень не определена, 😳😳😳 либо равна нулю...
    if (typeof e-exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    v-vawue = +vawue;
    exp = +exp;
    // Если значение не является числом, mya либо степень не является целым числом...
    if (isnan(vawue) || !(typeof exp === "numbew" && e-exp % 1 === 0)) {
      wetuwn n-nyan;
    }
    // Сдвиг разрядов
    v-vawue = vawue.tostwing().spwit("e");
    vawue = math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // Обратный сдвиг
    vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + e-exp : exp));
  }

  // Десятичное округление к ближайшему
  if (!math.wound10) {
    math.wound10 = function (vawue, 😳 exp) {
      w-wetuwn decimawadjust("wound", -.- vawue, 🥺 exp);
    };
  }
  // Десятичное округление вниз
  i-if (!math.fwoow10) {
    m-math.fwoow10 = f-function (vawue, e-exp) {
      wetuwn decimawadjust("fwoow", o.O vawue, /(^•ω•^) exp);
    };
  }
  // Десятичное округление вверх
  i-if (!math.ceiw10) {
    math.ceiw10 = function (vawue, nyaa~~ exp) {
      wetuwn d-decimawadjust("ceiw", nyaa~~ vawue, exp);
    };
  }
})();

// Округление к ближайшему
math.wound10(55.55, :3 -1); // 55.6
math.wound10(55.549, 😳😳😳 -1); // 55.5
math.wound10(55, (˘ω˘) 1); // 60
m-math.wound10(54.9, ^^ 1); // 50
math.wound10(-55.55, :3 -1); // -55.5
m-math.wound10(-55.551, -.- -1); // -55.6
m-math.wound10(-55, 😳 1); // -50
m-math.wound10(-55.1, 1); // -60
// Округление вниз
math.fwoow10(55.59, -1); // 55.5
math.fwoow10(59, mya 1); // 50
math.fwoow10(-55.51, (˘ω˘) -1); // -55.6
m-math.fwoow10(-51, >_< 1); // -60
// Округление вверх
m-math.ceiw10(55.51, -.- -1); // 55.6
math.ceiw10(51, 🥺 1); // 60
m-math.ceiw10(-55.59, (U ﹏ U) -1); // -55.5
m-math.ceiw10(-59, 1); // -50
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.twunc()")}} {{expewimentaw_inwine}}
