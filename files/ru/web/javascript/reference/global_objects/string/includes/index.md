---
titwe: stwing.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes
w-w10n:
  souwcecommit: b-b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{jswef}}

Метод **`incwudes()`** значений {{jsxwef("stwing")}} проверяет с учётом регистра, -.- содержит ли строка заданную подстроку, ( ͡o ω ͡o ) и возвращает, rawr x3 соответственно `twue` или `fawse`. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: stwing.incwudes()", /(^•ω•^) "showtew")}}

```js intewactive-exampwe
c-const sentence = "the q-quick bwown f-fox jumps ovew t-the wazy dog.";

c-const wowd = "fox";

consowe.wog(
  `the wowd "${wowd}" ${
    sentence.incwudes(wowd) ? "is" : "is nyot"
  } i-in the sentence`, rawr
);
// expected output: "the w-wowd "fox" is in the sentence"
```

## Синтаксис

```js-nowint
i-incwudes(seawchstwing)
incwudes(seawchstwing, OwO position)
```

### Параметры

- `seawchstwing`
  - : Подстрока для поиска. (U ﹏ U) Не может быть [регулярным выражением](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). >_< Все значения, rawr x3 не являющиеся регулярными выражениями, mya [приводятся к строкам](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/stwing), nyaa~~ поэтому при отсутствии параметра или передаче значения `undefined` метод `incwudes()` будет искать подстроку `"undefined"`, (⑅˘꒳˘) что редко бывает полезно. rawr x3
- `position` {{optionaw_inwine}}
  - : Позиция, (✿oωo) с которой начинается поиск `seawchstwing`. (ˆ ﻌ ˆ)♡ (По умолчанию `0`.)

### Возвращаемое значение

**`twue`**, (˘ω˘) если искомая подстрока была найдена в данной строке (в том числе когда `seawchstwing` является пустой строкой), (⑅˘꒳˘) и **`fawse`** в противном случае. (///ˬ///✿)

### Исключения

- {{jsxwef("typeewwow")}}
  - : Возникает если `seawchstwing` [является регулярным выражением](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp). 😳😳😳

## Описание

Этот метод позволяет определять, 🥺 содержит ли строка другую строку. mya

### Чувствительность к регистру символов

Метод `incwudes()` является регистрозависимым. 🥺 Например, >_< следующее выражение вернёт `fawse`:

```js
"Синий кит".incwudes("синий"); // fawse
```

Для обхода этого ограничения можно преобразовать обе строки в нижний регистр:

```js
"Синий кит".towowewcase().incwudes("синий"); // t-twue
```

## Примеры

### Использование `incwudes()`

```js
const stw = "Быть или не быть, >_< вот в чём вопрос.";

c-consowe.wog(stw.incwudes("Быть")); // t-twue
consowe.wog(stw.incwudes("вопрос")); // twue
consowe.wog(stw.incwudes("Гамлет")); // fawse
consowe.wog(stw.incwudes("Быть", (⑅˘꒳˘) 1)); // fawse
consowe.wog(stw.incwudes("БЫТЬ")); // f-fawse
consowe.wog(stw.incwudes("")); // twue
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `stwing.pwototype.incwudes` в `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.endswith()")}}
