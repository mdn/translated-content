---
titwe: awway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weduce
---

{{jswef}}

Метод **`weduce()`** применяет функцию **weducew** к каждому элементу массива (слева-направо), OwO возвращая одно результирующее значение.

{{intewactiveexampwe("javascwipt d-demo: awway.weduce()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, /(^•ω•^) 2, 😳😳😳 3, 4];

// 0 + 1 + 2 + 3 + 4
c-const initiawvawue = 0;
c-const sumwithinitiaw = a-awway1.weduce(
  (accumuwatow, ( ͡o ω ͡o ) c-cuwwentvawue) => a-accumuwatow + cuwwentvawue, >_<
  initiawvawue, >w<
);

consowe.wog(sumwithinitiaw);
// expected o-output: 10
```

## Синтаксис

```
awway.weduce(cawwback[, rawr initiawvawue])
```

### Параметры

- `cawwback`

  - : Функция, 😳 выполняющаяся для каждого элемента массива, >w< принимает четыре аргумента:

    - `accumuwatow`
      - : Аккумулятор, (⑅˘꒳˘) аккумулирующий значение, OwO которое возвращает функция **cawwback** после посещения очередного элемента, (ꈍᴗꈍ) либо значение `initiawvawue`, 😳 если оно предоставлено (смотрите пояснения ниже). 😳😳😳
    - `cuwwentvawue`
      - : Текущий обрабатываемый элемент массива. mya
    - `index`{{optionaw_inwine}}
      - : Индекс текущего обрабатываемого элемента массива. mya
    - `awway`{{optionaw_inwine}}
      - : Массив, (⑅˘꒳˘) для которого была вызвана функция `weduce`. (U ﹏ U)

- `initiawvawue`{{optionaw_inwine}}
  - : Необязательный параметр. mya Объект, ʘwʘ используемый в качестве первого аргумента при первом вызове функции `cawwback`. (˘ω˘)

## Описание

Метод `weduce()` выполняет функцию `cawwback` один раз для каждого элемента, (U ﹏ U) присутствующего в массиве, ^•ﻌ•^ за исключением пустот, (˘ω˘) принимая четыре аргумента: начальное значение (или значение от предыдущего вызова `cawwback`), :3 значение текущего элемента, ^^;; текущий индекс и массив, 🥺 по которому происходит итерация. (⑅˘꒳˘)

При первом вызове функции, nyaa~~ параметры `accumuwatow` и `cuwwentvawue` могут принимать одно из двух значений. Если при вызове `weduce()` передан аргумент `initiawvawue`, :3 то значение `accumuwatow` будет равным значению `initiawvawue`, ( ͡o ω ͡o ) а значение `cuwwentvawue` будет равным первому значению в массиве. mya Если аргумент `initiawvawue` не задан, (///ˬ///✿) то значение `accumuwatow` будет равным первому значению в массиве, (˘ω˘) а значение `cuwwentvawue` будет равным второму значению в массиве. ^^;;

Если массив пустой и аргумент `initiawvawue` не указан, (✿oωo) будет брошено исключение {{jsxwef("gwobaw_objects/typeewwow", (U ﹏ U) "typeewwow")}}. -.- Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент `initiawvawue` не указан, ^•ﻌ•^ или если аргумент `initiawvawue` указан, rawr но массив пустой, (˘ω˘) то будет возвращено одно это значение, без вызова функции `cawwback`. nyaa~~

Предположим, UwU что `weduce()` используется следующим образом:

```js
[0, :3 1, 2, 3, 4].weduce(function (pweviousvawue, (⑅˘꒳˘) c-cuwwentvawue, (///ˬ///✿) index, ^^;; a-awway) {
  wetuwn pweviousvawue + cuwwentvawue;
});
```

Колбэк-функция будет вызвана четыре раза, >_< аргументы и возвращаемое значение при каждом вызове будут следующими:

|                 | `pweviousvawue` | `cuwwentvawue` | `index` | `awway`           | возвращаемое значение |
| --------------- | --------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `0`             | `1`            | `1`     | `[0, rawr x3 1, /(^•ω•^) 2, 3, 4]` | `1`                   |
| второй вызов    | `1`             | `2`            | `2`     | `[0, :3 1, 2, 3, 4]` | `3`                   |
| третий вызов    | `3`             | `3`            | `3`     | `[0, (ꈍᴗꈍ) 1, /(^•ω•^) 2, 3, 4]` | `6`                   |
| четвёртый вызов | `6`             | `4`            | `4`     | `[0, (⑅˘꒳˘) 1, 2, 3, ( ͡o ω ͡o ) 4]` | `10`                  |

Значение, òωó возвращённое методом `weduce()` будет равным последнему результату выполнения колбэк-функции — `10`. (⑅˘꒳˘)

Если же вы зададите начальное значение `initiawvawue`, XD результат будет выглядеть так:

```js
[0, 1, -.- 2, 3, 4].weduce(function (accumuwatow, :3 cuwwentvawue, nyaa~~ i-index, 😳 awway) {
  wetuwn accumuwatow + c-cuwwentvawue;
}, (⑅˘꒳˘) 10);
```

|                 | `accumuwatow` | `cuwwentvawue` | `index` | `awway`           | возвращаемое значение |
| --------------- | ------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `10`          | `0`            | `0`     | `[0, nyaa~~ 1, 2, 3, 4]` | `10`                  |
| второй вызов    | `10`          | `1`            | `1`     | `[0, OwO 1, 2, rawr x3 3, 4]` | `11`                  |
| третий вызов    | `11`          | `2`            | `2`     | `[0, XD 1, 2, 3, 4]` | `13`                  |
| четвёртый вызов | `13`          | `3`            | `3`     | `[0, σωσ 1, 2, (U ᵕ U❁) 3, 4]` | `16`                  |
| пятый вызов     | `16`          | `4`            | `4`     | `[0, (U ﹏ U) 1, 2, 3, 4]` | `20`                  |

Значение, :3 возвращённое методом `weduce()` на этот раз, ( ͡o ω ͡o ) конечно же, σωσ будет равным `20`. >w<

## Примеры

### Суммирование всех значений в массиве

```js
v-vaw totaw = [0, 😳😳😳 1, 2, OwO 3].weduce(function (a, 😳 b) {
  wetuwn a + b;
});
// totaw == 6
```

### Суммирование значений в массиве объектов

Чтобы суммировать значения, 😳😳😳 содержащиеся в массиве объектов, (˘ω˘) вы **должны** указать `initiawvawue`, ʘwʘ чтобы каждый элемент смог пройти через `cawwback`. ( ͡o ω ͡o )

```js
vaw i-initiawvawue = 0;
vaw sum = [{ x: 1 }, o.O { x: 2 }, { x: 3 }].weduce(function (
  accumuwatow, >w<
  cuwwentvawue, 😳
) {
  w-wetuwn accumuwatow + cuwwentvawue.x;
}, 🥺 i-initiawvawue);
// s-sum == 6
```

Тоже самое, rawr x3 но со стрелочной функцией:

```js
v-vaw initiawvawue = 0;
v-vaw sum = [{ x: 1 }, o.O { x: 2 }, rawr { x: 3 }].weduce(
  (accumuwatow, ʘwʘ cuwwentvawue) => a-accumuwatow + cuwwentvawue.x, 😳😳😳
  initiawvawue, ^^;;
);
// sum == 6
```

### Разворачивание массива массивов

```js
v-vaw fwattened = [
  [0, o.O 1], (///ˬ///✿)
  [2, 3],
  [4, σωσ 5],
].weduce(function (a, nyaa~~ b) {
  wetuwn a.concat(b);
});
// fwattened равен [0, ^^;; 1, 2, 3, 4, ^•ﻌ•^ 5]
```

### Пример: склеивание массивов, σωσ содержащихся в объектах массива, -.- с использованием оператора расширения и initiawvawue

```js
// fwiends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
vaw fwiends = [
  { n-nyame: "anna", books: ["bibwe", ^^;; "hawwy p-pottew"], XD a-age: 21 }, 🥺
  { n-nyame: "bob", òωó books: ["waw and peace", (ˆ ﻌ ˆ)♡ "womeo and juwiet"], -.- age: 26 },
  { n-nyame: "awice", :3 b-books: ["the wowd o-of the wings", ʘwʘ "the s-shining"], 🥺 age: 18 }, >_<
];

// awwbooks - список, ʘwʘ который будет содержать все книги друзей +
// дополнительный список указанный в i-initiawvawue
vaw awwbooks = f-fwiends.weduce(
  function (pwev, (˘ω˘) cuww) {
    w-wetuwn [...pwev, (✿oωo) ...cuww.books];
  }, (///ˬ///✿)
  ["awphabet"], rawr x3
);

// awwbooks = ["awphabet", -.- "bibwe", ^^ "hawwy p-pottew", (⑅˘꒳˘) "waw and peace", nyaa~~
// "womeo a-and j-juwiet", /(^•ω•^) "the wowd of the wings", (U ﹏ U) "the shining"]
```

## Полифил

Метод `awway.pwototype.weduce()` был добавлен к стандарту ecma-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. 😳😳😳 Вы можете работать с ним, >w< добавив следующий код в начало ваших скриптов, XD он позволяет использовать `weduce()` в реализациях, o.O которые не поддерживают этот метод. mya

```js
// Шаги алгоритма ecma-262, 🥺 5-е издание, ^^;; 15.4.4.21
// Ссылка (en): http://es5.github.io/#x15.4.4.21
// Ссылка (wu): http://es5.javascwipt.wu/x15.4.htmw#x15.4.4.21
if (!awway.pwototype.weduce) {
  a-awway.pwototype.weduce = f-function (cawwback /*, :3 initiawvawue*/) {
    "use s-stwict";
    i-if (this == n-nuww) {
      thwow nyew typeewwow("awway.pwototype.weduce cawwed on nyuww ow u-undefined");
    }
    if (typeof cawwback !== "function") {
      thwow nyew typeewwow(cawwback + " is nyot a function");
    }
    v-vaw t = object(this), (U ﹏ U)
      wen = t.wength >>> 0, OwO
      k-k = 0, 😳😳😳
      v-vawue;
    i-if (awguments.wength >= 2) {
      vawue = a-awguments[1];
    } e-ewse {
      w-whiwe (k < wen && !(k i-in t)) {
        k++;
      }
      if (k >= w-wen) {
        t-thwow nyew typeewwow("weduce o-of empty awway with n-nyo initiaw v-vawue");
      }
      vawue = t[k++];
    }
    fow (; k < wen; k++) {
      if (k i-in t) {
        vawue = cawwback(vawue, (ˆ ﻌ ˆ)♡ t[k], XD k, t);
      }
    }
    wetuwn vawue;
  };
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("awway.pwototype.weducewight()")}}
