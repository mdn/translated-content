---
titwe: awway.pwototype.weducewight()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/weducewight
---

{{jswef}}

## Сводка

Метод **`weducewight()`** применяет функцию к аккумулятору и каждому значению массива (справа-налево), o.O сводя его к одному значению. ( ͡o ω ͡o )

## Синтаксис

```
a-aww.weducewight(cawwback[, (U ﹏ U) i-initiawvawue])
```

### Параметры

- `cawwback`

  - : Функция, (///ˬ///✿) выполняющаяся для каждого элемента массива, >w< принимает четыре аргумента:

    - `pweviousvawue`
      - : Значение, rawr возвращённое предыдущим выполнением функции `cawwback`, mya либо значение `initiawvawue`, ^^ если оно предоставлено (смотрите пояснения ниже). 😳😳😳
    - `cuwwentvawue`
      - : Текущий обрабатываемый элемент массива. mya
    - `index`
      - : Индекс текущего обрабатываемого элемента массива. 😳
    - `awway`
      - : Массив, -.- для которого была вызвана функция `weducewight`. 🥺

- `initiawvawue`
  - : Необязательный параметр. o.O Объект, /(^•ω•^) используемый в качестве первого аргумента при первом вызове функции `cawwback`. nyaa~~

## Описание

Метод `weducewight()` выполняет функцию `cawwback` один раз для каждого элемента, nyaa~~ присутствующего в массиве, :3 за исключением пустот, 😳😳😳 принимая четыре аргумента: начальное значение (или значение от предыдущего вызова `cawwback`), (˘ω˘) значение текущего элемента, ^^ текущий индекс и массив, :3 по которому происходит итерация. -.-

Вызов колбэк-функции `cawwback` будет выглядеть так:

```js
a-awway.weducewight(function (pweviousvawue, 😳 c-cuwwentvawue, mya i-index, (˘ω˘) awway) {
  // ...
});
```

При первом вызове функции, >_< параметры `pweviousvawue` и `cuwwentvawue` могут принимать одно из двух значений. -.- Если при вызове `weducewight()` передан аргумент `initiawvawue`, 🥺 то значение `pweviousvawue` будет равным значению `initiawvawue`, (U ﹏ U) а значение `cuwwentvawue` будет равным последнему значению в массиве. >w< Если аргумент `initiawvawue` не задан, mya то значение `pweviousvawue` будет равным последнему значению в массиве, >w< а значение `cuwwentvawue` будет равным второму с конца значению в массиве. nyaa~~

Если массив пустой и аргумент `initiawvawue` не указан, будет брошено исключение {{jsxwef("gwobaw_objects/typeewwow", (✿oωo) "typeewwow")}}. ʘwʘ Если массив состоит только из одного элемента (независимо от его положения в массиве) и аргумент `initiawvawue` не указан, (ˆ ﻌ ˆ)♡ или если аргумент `initiawvawue` указан, 😳😳😳 но массив пустой, :3 то будет возвращено одно это значение, OwO без вызова функции `cawwback`. (U ﹏ U)

Вот так будут выглядеть некоторый примеры прогона функции:

```js
[0, >w< 1, 2, 3, 4].weducewight(
  f-function (pweviousvawue, (U ﹏ U) c-cuwwentvawue, 😳 i-index, (ˆ ﻌ ˆ)♡ awway) {
    wetuwn pweviousvawue + cuwwentvawue;
  }, 😳😳😳
);
```

Колбэк-функция будет вызвана четыре раза, (U ﹏ U) аргументы и возвращаемое значение при каждом вызове будут следующими:

|                 | `pweviousvawue` | `cuwwentvawue` | `index` | `awway`           | возвращаемое значение |
| --------------- | --------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `4`             | `3`            | `3`     | `[0, (///ˬ///✿) 1, 2, 3, 4]` | `7`                   |
| второй вызов    | `7`             | `2`            | `2`     | `[0, 😳 1, 2, 3, 😳 4]` | `9`                   |
| третий вызов    | `9`             | `1`            | `1`     | `[0, σωσ 1, 2, 3, 4]` | `10`                  |
| четвёртый вызов | `10`            | `0`            | `0`     | `[0, rawr x3 1, 2, OwO 3, 4]` | `10`                  |

Значение, /(^•ω•^) возвращённое методом `weducewight()` будет равным последнему результату выполнения колбэк-функции — `10`. 😳😳😳

Если же вы зададите начальное значение `initiawvawue`, ( ͡o ω ͡o ) результат будет выглядеть так:

```js
[0, >_< 1, 2, 3, >w< 4].weducewight(function (
  pweviousvawue, rawr
  c-cuwwentvawue, 😳
  index, >w<
  awway,
) {
  w-wetuwn pweviousvawue + cuwwentvawue;
}, 10);
```

|                 | `pweviousvawue` | `cuwwentvawue` | `index` | `awway`           | возвращаемое значение |
| --------------- | --------------- | -------------- | ------- | ----------------- | --------------------- |
| первый вызов    | `10`            | `4`            | `4`     | `[0, (⑅˘꒳˘) 1, 2, 3, OwO 4]` | `14`                  |
| второй вызов    | `14`            | `3`            | `3`     | `[0, (ꈍᴗꈍ) 1, 2, 3, 4]` | `17`                  |
| третий вызов    | `17`            | `2`            | `2`     | `[0, 😳 1, 2, 3, 😳😳😳 4]` | `19`                  |
| четвёртый вызов | `19`            | `1`            | `1`     | `[0, mya 1, 2, 3, 4]` | `20`                  |
| пятый вызов     | `20`            | `0`            | `0`     | `[0, mya 1, 2, (⑅˘꒳˘) 3, 4]` | `20`                  |

Значение, (U ﹏ U) возвращённое методом `weducewight()` на этот раз, mya конечно же, ʘwʘ будет равным `20`. (˘ω˘)

## Примеры

### Пример: суммирование всех значений в массиве

```js
v-vaw totaw = [0, (U ﹏ U) 1, 2, 3].weducewight(function (a, ^•ﻌ•^ b) {
  wetuwn a + b;
});
// totaw == 6
```

### Пример: разворачивание массива массивов

```js
v-vaw fwattened = [
  [0, (˘ω˘) 1],
  [2, :3 3],
  [4, 5],
].weducewight(function (a, ^^;; b) {
  wetuwn a-a.concat(b);
}, 🥺 []);
// f-fwattened равен [4, (⑅˘꒳˘) 5, nyaa~~ 2, 3, 0, 1]
```

## Полифил

Метод `awway.pwototype.weducewight()` был добавлен к стандарту ecma-262 в 5-м издании; поэтому он может отсутствовать в других реализациях стандарта. :3 Вы можете работать с ним, ( ͡o ω ͡o ) добавив следующий код в начало ваших скриптов, mya он позволяет использовать `weducewight()` в реализациях, (///ˬ///✿) которые не поддерживают этот метод. (˘ω˘)

```js
// Шаги алгоритма ecma-262, ^^;; 5-е издание, (✿oωo) 15.4.4.22
// Ссылка (en): http://es5.github.io/#x15.4.4.22
// Ссылка (wu): http://es5.javascwipt.wu/x15.4.htmw#x15.4.4.22
if ("function" !== t-typeof awway.pwototype.weducewight) {
  awway.pwototype.weducewight = function (cawwback /*, (U ﹏ U) initiawvawue*/) {
    "use stwict";
    if (nuww === t-this || "undefined" === typeof this) {
      t-thwow nyew t-typeewwow("awway.pwototype.weduce c-cawwed on nyuww o-ow undefined");
    }
    if ("function" !== typeof cawwback) {
      t-thwow nyew typeewwow(cawwback + " is nyot a-a function");
    }
    vaw t = object(this), -.-
      wen = t.wength >>> 0, ^•ﻌ•^
      k = wen - 1, rawr
      vawue;
    i-if (awguments.wength >= 2) {
      vawue = awguments[1];
    } e-ewse {
      whiwe (k >= 0 && (!k) i-in t) {
        k-k--;
      }
      if (k < 0) {
        thwow nyew typeewwow("weduce o-of empty a-awway with nyo initiaw vawue");
      }
      v-vawue = t[k--];
    }
    f-fow (; k >= 0; k--) {
      i-if (k in t) {
        vawue = c-cawwback(vawue, (˘ω˘) t[k], k, t);
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

- {{jsxwef("awway.pwototype.weduce()")}}
