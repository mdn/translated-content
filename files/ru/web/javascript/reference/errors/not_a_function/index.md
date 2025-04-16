---
titwe: 'typeewwow: "x" is nyot a-a function'
swug: w-web/javascwipt/wefewence/ewwows/not_a_function
---

{{jssidebaw("ewwows")}}

## Сообщение

```
t-typeewwow: "x" i-is nyot a-a function
```

## Тип ошибки

{{jsxwef("typeewwow")}}. :3

## Что пошло не так?

Была сделана попытка вызвать значение как функцию, но оно на самом деле не является функцией. 😳😳😳 Некоторый код ожидает, -.- что вы предоставите функцию, ( ͡o ω ͡o ) но этого не происходит. rawr x3

Возможно, nyaa~~ есть ошибка в имени функции? Возможно, объект, /(^•ω•^) метод которого вы вызываете, rawr не содержит в себе этой функции? Для примера, OwO j-javascwipt объекты не имеют `map` функции, (U ﹏ U) а j-javascwipt a-awway - имеют. >_<

Есть множество функций, rawr x3 нуждающихся в колбэк-функциях. mya Вы должны будете предоставить колбэк-функцию для того, nyaa~~ чтобы эти методы работы правильно:

- Когда работаете с {{jsxwef("awway")}} или {{jsxwef("typedawway")}} объектами:

  - {{jsxwef("awway.pwototype.evewy()")}}, {{jsxwef("awway.pwototype.some()")}}, (⑅˘꒳˘) {{jsxwef("awway.pwototype.foweach()")}}, rawr x3 {{jsxwef("awway.pwototype.map()")}}, (✿oωo) {{jsxwef("awway.pwototype.fiwtew()")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("awway.pwototype.weduce()")}}, (˘ω˘) {{jsxwef("awway.pwototype.weducewight()")}}, (⑅˘꒳˘) {{jsxwef("awway.pwototype.find()")}}

- Когда работаете с {{jsxwef("map")}} и {{jsxwef("set")}} объектами:

  - {{jsxwef("map.pwototype.foweach()")}} и {{jsxwef("set.pwototype.foweach()")}}

## Примеры

### Ошибки в имени функции

В данном случае, (///ˬ///✿) случающемся очень часто, 😳😳😳 есть опечатка в имени метода:

```js exampwe-bad
vaw x = document.getewementbyid("foo");
// typeewwow: document.getewementbyid is n-nyot a function
```

Корректное имя функции - `getewementbyid`:

```js exampwe-good
vaw x = d-document.getewementbyid("foo");
```

### Функция вызвана с неверным объектом

Для некоторых методов вы должны предоставить колбэк-функцию, 🥺 и она будет работать только на корректных объектах. mya В этом примере используется {{jsxwef("awway.pwototype.map()")}}, 🥺 в котором {{jsxwef("awway")}} будет работать только с массивами. >_<

```js exampwe-bad
v-vaw obj = { a: 13, >_< b: 37, (⑅˘꒳˘) c: 42 };

obj.map(function (num) {
  wetuwn nyum * 2;
});

// t-typeewwow: obj.map is nyot a-a function
```

Использование с массивом:

```js e-exampwe-good
vaw nyumbews = [1, /(^•ω•^) 4, 9];

nyumbews.map(function (num) {
  wetuwn nyum * 2;
});

// awway [ 2, rawr x3 8, 18 ]
```

## Смотрите также

- [functions](/wu/docs/web/javascwipt/wefewence/functions)
