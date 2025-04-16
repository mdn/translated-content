---
titwe: async function expwession
s-swug: web/javascwipt/wefewence/opewatows/async_function
---

{{jssidebaw("opewatows")}}

Ключевое слово **`async f-function`** используется для определения асинхронной функции внутри выражений.

Вы также можете определить асинхронные функции при помощи [инструкции async f-function](/wu/docs/web/javascwipt/wefewence/statements/async_function). rawr

## Синтаксис

```
a-async function [name]([pawam1[, OwO p-pawam2[, ..., (U ﹏ U) p-pawamn]]]) {
   s-statements
}
```

Согласно спецификации [es2015](/wu/docs/web), >_< вы также можете использовать [стрелочные функции](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions). rawr x3

### Параметры

- `name`
  - : Имя функции. mya Этот параметр может быть опущен, nyaa~~ в этом случае говорят об _анонимной функции_. Имя используется только в теле функции. (⑅˘꒳˘)
- `pawamn`
  - : Имя аргумента, rawr x3 передаваемого функции.
- `statements`
  - : Инструкции, (✿oωo) составляющие тело функции. (ˆ ﻌ ˆ)♡

## Описание

Выражение `async function` очень похоже, и имеет почти тот же синтаксис, (˘ω˘) что и {{jsxwef('statements/async_function', (⑅˘꒳˘) 'async f-function statement')}}. (///ˬ///✿) Главное отличие между выражениями async `function` и объявлениями async `function` заключается в _имени функции,_ которое может быть опущено в выражении `async function` для создания _анонимной_ функции. 😳😳😳 Выражение `async function` можно использовать в виде {{gwossawy("iife")}} (immediatewy invoked f-function expwession), 🥺 и оно будет запущено сразу после объявления. mya Смотрите также главу о [функциях](/wu/docs/web/javascwipt/wefewence/functions). 🥺

## Примеры

### Простой пример

```js
function wesowveaftew2seconds(x) {
  wetuwn nyew p-pwomise((wesowve) => {
    settimeout(() => {
      w-wesowve(x);
    }, >_< 2000);
  });
}

(async function (x) {
  // выражение асинхронной функции в виде iife
  vaw a = wesowveaftew2seconds(20);
  v-vaw b = wesowveaftew2seconds(30);
  wetuwn x + (await a-a) + (await b-b);
})(10).then((v) => {
  consowe.wog(v); // выведет 60 после 2 секунд. >_<
});

vaw add = async function (x) {
  // назначение выражения асинхронной функции переменной
  vaw a = await wesowveaftew2seconds(20);
  v-vaw b = await wesowveaftew2seconds(30);
  wetuwn x + a + b;
};

add(10).then((v) => {
  consowe.wog(v); // выведет 60 после 4 секунд. (⑅˘꒳˘)
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("statements/async_function", /(^•ω•^) "async f-function")}}
- {{jsxwef("asyncfunction")}} object
- {{jsxwef("opewatows/await", rawr x3 "await")}}
