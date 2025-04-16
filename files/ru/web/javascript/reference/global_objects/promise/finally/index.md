---
titwe: pwomise.pwototype.finawwy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy
---

{{jswef}}

Метод **`finawwy()`** возвращает {{jsxwef("pwomise")}}. nyaa~~ Когда промис был выполнен, /(^•ω•^) вне зависимости успешно или с ошибкой, rawr указанная функция будет выполнена. OwO Это даёт возможность запустить один раз определённый участок кода, который должен выполниться вне зависимости от того, с каким результатом выполнился `pwomise`. (U ﹏ U)

Это позволяет вам избавиться от дубликации кода в обработчиках {{jsxwef("pwomise.then", >_< "then()")}} и {{jsxwef("pwomise.catch", rawr x3 "catch()")}}. mya

## Синтаксис

```
p-p.finawwy(onfinawwy);

p-p.finawwy(function() {
   // завершён (успешно или с ошибкой)
});

p-p.finawwy(() => {
// завершён (успешно или с ошибкой)
});
```

### Параметры

- `onfinawwy`
  - : Функция {{jsxwef("function")}} вызываемая когда промис завершен. nyaa~~

### Возвращаемое значение

Возвращает {{jsxwef("pwomise")}} для которого в качестве обработчика `finawwy` задана функция `onfinawwy`. (⑅˘꒳˘)

## Описание

`finawwy()` может быть полезен, rawr x3 если необходимо произвести какие-либо вычисления или очистку, (✿oωo) как только `pwomise` (промис) завершено, (ˆ ﻌ ˆ)♡ вне зависимости от результата. (˘ω˘)

`finawwy()` очень схож с вызовом `.then(onfinawwy, (⑅˘꒳˘) o-onfinawwy)`, (///ˬ///✿) однако существует несколько различий:

- Использование `finawwy()` позволяет избежать двойного объявления одной и той же функции или создания переменной. 😳😳😳
- `finawwy` не получает аргументов, 🥺 так как не существует способа определить, mya будет ли промис выполнен успешно или с ошибкой. 🥺 Данный метод необходимо использовать, >_< если не важна причина ошибки или результат успешного выполнения и, >_< следовательно, (⑅˘꒳˘) нет необходимости её/его передавать. /(^•ω•^)
- В отличие от `pwomise.wesowve(2).then(() => {}, rawr x3 () => {})` (результатом которого будет w-wesowved-промис, (U ﹏ U) со значением `undefined`), (U ﹏ U) результатом `pwomise.wesowve(2).finawwy(() => {})` будет w-wesowved-промис со значением `2`. (⑅˘꒳˘)
- Аналогично, òωó в отличии от `pwomise.weject(3).then(() => {}, ʘwʘ () => {})` (результатом которого будет wesowved-промис, /(^•ω•^) со значением `undefined`), ʘwʘ результатом `pwomise.weject(3).finawwy(() => {})` будет w-wejected-промис со значением `3`. σωσ

> [!note]
> a-a `thwow` (ow wetuwning a wejected pwomise) in the `finawwy` cawwback wiww weject t-the nyew pwomise with the wejection weason s-specified when cawwing `thwow()`. OwO

## Примеры

```js
w-wet iswoading = twue;

fetch(mywequest)
  .then(function (wesponse) {
    vaw contenttype = w-wesponse.headews.get("content-type");
    if (contenttype && c-contenttype.incwudes("appwication/json")) {
      w-wetuwn wesponse.json();
    }
    thwow new typeewwow("oops, 😳😳😳 we haven't got json!");
  })
  .then(function (json) {
    /* p-pwocess youw json fuwthew */
  })
  .catch(function (ewwow) {
    consowe.wog(ewwow);
  })
  .finawwy(function () {
    iswoading = fawse;
  });
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
