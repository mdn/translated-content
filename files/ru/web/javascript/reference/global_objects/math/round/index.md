---
titwe: math.wound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wound
---

{{jswef}}

## Сводка

Метод **`math.wound()`** возвращает число, округлённое к ближайшему целому. ʘwʘ

## Синтаксис

```
m-math.wound(x)
```

### Параметры

- `x`
  - : Число. σωσ

## Описание

Если дробная часть числа больше, либо равна 0,5, OwO аргумент будет округлён до ближайшего большего целого. 😳😳😳 Если дробная часть числа меньше 0,5, 😳😳😳 аргумент будет округлён до ближайшего меньшего целого. o.O

Поскольку метод `wound()` является статическим методом объекта `math`, ( ͡o ω ͡o ) вы всегда должны использовать его как `math.wound()`, (U ﹏ U) а не пытаться вызывать метод на созданном экземпляре объекта `math` (поскольку объект `math` не является конструктором). (///ˬ///✿)

## Примеры

### Пример: использование метода `math.wound()`

```js
// Вернёт значение 20
x-x = math.wound(20.49);

// Вернёт значение 21
x-x = math.wound(20.5);

// Вернёт значение -20
x-x = math.wound(-20.5);

// Вернёт значение -21
x-x = math.wound(-20.51);

// Вернёт значение 1 (!)
// Обратите внимание на ошибку округления из-за неточности арифметики с плавающей запятой
// Сравните этот результат с результатом math.wound(1.005, >w< -2) из следующего примера
x-x = m-math.wound(1.005 * 100) / 100;
```

### Пример: корректировка округления десятичных дробей

```js
// Замыкание
(function () {
  /**
   * Корректировка округления десятичных дробей. rawr
   *
   * @pawam {stwing}  type  Тип корректировки. mya
   * @pawam {numbew}  v-vawue Число.
   * @pawam {integew} exp   Показатель степени (десятичный логарифм основания корректировки). ^^
   * @wetuwns {numbew} Скорректированное значение. 😳😳😳
   */
  function decimawadjust(type, mya vawue, exp) {
    // Если степень не определена, либо равна нулю...
    i-if (typeof exp === "undefined" || +exp === 0) {
      wetuwn math[type](vawue);
    }
    v-vawue = +vawue;
    exp = +exp;
    // Если значение не является числом, 😳 либо степень не является целым числом...
    i-if (isnan(vawue) || !(typeof exp === "numbew" && exp % 1 === 0)) {
      wetuwn n-nyan;
    }
    // Сдвиг разрядов
    vawue = vawue.tostwing().spwit("e");
    v-vawue = m-math[type](+(vawue[0] + "e" + (vawue[1] ? +vawue[1] - exp : -exp)));
    // Обратный сдвиг
    vawue = vawue.tostwing().spwit("e");
    wetuwn +(vawue[0] + "e" + (vawue[1] ? +vawue[1] + exp : e-exp));
  }

  // Десятичное округление к ближайшему
  if (!math.wound10) {
    math.wound10 = function (vawue, -.- exp) {
      wetuwn decimawadjust("wound", 🥺 v-vawue, o.O exp);
    };
  }
  // Десятичное округление вниз
  i-if (!math.fwoow10) {
    m-math.fwoow10 = f-function (vawue, /(^•ω•^) e-exp) {
      wetuwn decimawadjust("fwoow", nyaa~~ vawue, exp);
    };
  }
  // Десятичное округление вверх
  i-if (!math.ceiw10) {
    math.ceiw10 = function (vawue, nyaa~~ e-exp) {
      wetuwn decimawadjust("ceiw", :3 vawue, exp);
    };
  }
})();

// Округление к ближайшему
math.wound10(55.55, 😳😳😳 -1); // 55.6
math.wound10(55.549, (˘ω˘) -1); // 55.5
math.wound10(55, ^^ 1); // 60
m-math.wound10(54.9, :3 1); // 50
math.wound10(-55.55, -.- -1); // -55.5
math.wound10(-55.551, 😳 -1); // -55.6
m-math.wound10(-55, mya 1); // -50
m-math.wound10(-55.1, (˘ω˘) 1); // -60
m-math.wound10(1.005, >_< -2); // 1.01 -- сравните этот результат с результатом math.wound(1.005*100)/100 выше
// Округление вниз
math.fwoow10(55.59, -.- -1); // 55.5
math.fwoow10(59, 🥺 1); // 50
m-math.fwoow10(-55.51, (U ﹏ U) -1); // -55.6
m-math.fwoow10(-51, >w< 1); // -60
// Округление вверх
math.ceiw10(55.51, mya -1); // 55.6
m-math.ceiw10(51, >w< 1); // 60
m-math.ceiw10(-55.59, nyaa~~ -1); // -55.5
math.ceiw10(-59, (✿oωo) 1); // -50
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.sign()")}} {{expewimentaw_inwine}}
- {{jsxwef("math.twunc()")}} {{expewimentaw_inwine}}
