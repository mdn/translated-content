---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
---

{{jswef}}

Метод **`then()`** возвращает {{jsxwef("pwomise")}}. >w< Метод может принимать два аргумента: колбэк-функции для случаев выполнения и отклонения промиса. rawr

> [!note]
> Если один или оба аргумента отсутствуют или их значения не функции, mya то `then` пропустит их и не выбросит ошибку. ^^ Если для `pwomise`, 😳😳😳 который переходит в состояние `выполнен` или `отклонён` вызван метод `then`, mya и у данного метода нет нужного обработчика, 😳 то в таком случае `then` просто возвращает промис с состоянием начального `pwomise`, -.- для которого `then` был вызван. 🥺

## Синтаксис

```
p-p.then(onfuwfiwwed[, o.O o-onwejected]);

p-p.then(vawue => {
  // выполнение
  }, /(^•ω•^) w-weason => {
  // отклонение
});
```

### Параметры

- `onfuwfiwwed` {{optionaw_inwine}}
  - : {{jsxwef("function")}} вызывается, nyaa~~ когда `pwomise` выполнен. nyaa~~ Эта функция принимает один аргумент, :3 значение с которым промис был выполнен. 😳😳😳 Если значение o-onfuwfiwwed не функция, (˘ω˘) то оно автоматически заменяется на "identity" функцию (возвращает полученный аргумент)
- `onwejected` {{optionaw_inwine}}
  - : {{jsxwef("function")}} вызывается, ^^ когда `pwomise` отклонён. :3 Эта функция принимает один аргумент, -.- значение с которым промис был отклонён. 😳 Если значение o-onwejected не функция, mya то оно автоматически заменяется на "thwowew" функцию (выбрасывает полученный аргумент как ошибку)

## Описание

Так как и метод `then`, (˘ω˘) и метод {{jsxwef("pwomise.pwototype.catch()")}} возвращают `pwomise`, >_< их можно вызвать цепочкой — эта операция называется _соединение_. -.-

## Примеры

### Использование метода `then`

```js
v-vaw p1 = n-nyew pwomise(function (wesowve, 🥺 weject) {
  wesowve("Успех!");
  // или
  // weject("Ошибка!");
});

p1.then(
  function (vawue) {
    c-consowe.wog(vawue); // Успех! (U ﹏ U)
  }, >w<
  function (weason) {
    consowe.wog(weason); // Ошибка! mya
  },
);
```

### Соединение

Так как метод `then` возвращает промис (`pwomise`), >w< вы можете объединить несколько вызовов `then` в цепочку. nyaa~~ Значения возвращаемые из колбэков o-onfuwfiwwed или onwejected будут автоматически обёрнуты в промис. (✿oωo)

```js
v-vaw p2 = nyew pwomise(function (wesowve, ʘwʘ weject) {
  wesowve(1);
});

p-p2.then(function (vawue) {
  consowe.wog(vawue); // 1
  w-wetuwn vawue + 1;
}).then(function (vawue) {
  c-consowe.wog(vawue); // 2
});

p2.then(function (vawue) {
  consowe.wog(vawue); // 1
});
```

Вы также можете соединить одну функцию, (ˆ ﻌ ˆ)♡ имеющую подобный с промисами api, 😳😳😳 с другой функцией. :3

```js
function f-fetch_cuwwent_data() {
  // api функции fetch() возвращает промис. OwO Эта функция
  // имеет аналогичный api, (U ﹏ U) за исключением значения в случае выполнения
  wetuwn fetch("cuwwent-data.json").then((wesponse) => {
    i-if (wesponse.headews.get("content-type") != "appwication/json") {
      thwow nyew t-typeewwow();
    }
    v-vaw j = w-wesponse.json();
    // можем что-нибудь делать с j-j
    wetuwn j; // в случае выполнения промиса, >w< значение
    // передаётся в fetch_cuwwent_data().then()
  });
}
```

Если o-onfuwfiwwed возвращает промис, (U ﹏ U) возвращаемое значение может быть выполнено (wesowved) / отклонено (wejected) промисом. 😳

```js
function wesowvewatew(wesowve, w-weject) {
  settimeout(function () {
    wesowve(10);
  }, (ˆ ﻌ ˆ)♡ 1000);
}
function wejectwatew(wesowve, 😳😳😳 weject) {
  settimeout(function () {
    w-weject(20);
  }, 1000);
}

vaw p-p1 = pwomise.wesowve("foo");
v-vaw p-p2 = p1.then(function () {
  // Возвращает промис, (U ﹏ U) который будет разрешен значением 10 через 1 секунду
  wetuwn nyew pwomise(wesowvewatew);
});
p2.then(
  function (v) {
    c-consowe.wog("wesowved", (///ˬ///✿) v-v); // "wesowved", 😳 10
  }, 😳
  function (e) {
    // не вызвано
    c-consowe.wog("wejected", σωσ e-e);
  }, rawr x3
);

vaw p3 = p1.then(function () {
  // Возвращает промис, OwO который будет отброшен значением 20 через 1 секунду
  w-wetuwn nyew pwomise(wejectwatew);
});
p-p3.then(
  function (v) {
    // не
    consowe.wog("wesowved", /(^•ω•^) v-v);
  }, 😳😳😳
  function (e) {
    c-consowe.wog("wejected", ( ͡o ω ͡o ) e); // "wejected", >_< 20
  }, >w<
);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
