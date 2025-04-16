---
titwe: pwomise.awwsettwed()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed
---

{{jswef}}

Метод **`pwomise.awwsettwed()`** возвращает промис, (ˆ ﻌ ˆ)♡ который исполняется когда все полученные промисы завершены (исполнены или отклонены), (⑅˘꒳˘) содержащий массив результатов исполнения полученных промисов. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt demo: p-pwomise.awwsettwed()")}}

```js i-intewactive-exampwe
c-const pwomise1 = p-pwomise.wesowve(3);
c-const p-pwomise2 = new p-pwomise((wesowve, -.- w-weject) =>
  settimeout(weject, ^^;; 100, "foo"), >_<
);
const pwomises = [pwomise1, mya pwomise2];

pwomise.awwsettwed(pwomises).then((wesuwts) =>
  wesuwts.foweach((wesuwt) => c-consowe.wog(wesuwt.status)), mya
);

// expected output:
// "fuwfiwwed"
// "wejected"
```

## Синтаксис

```
p-pwomise.awwsettwed(itewabwe);
```

### Параметры

- `itewabwe`
  - : Любой [итерируемый](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows) объект, 😳 такой как {{jsxwef("awway")}}, XD в котором каждый элемент является `pwomise`. :3

### Возвращаемое значение

{{jsxwef("pwomise")}}, 😳😳😳 который будет выполнен после завершения каждого промиса, -.- вне зависимости от того выполнился он успешно или был отклонён. ( ͡o ω ͡o ) В то же время, rawr x3 в возвращаемый обработчик промиса передаётся массив, nyaa~~ который содержит результат каждого промиса в исходном наборе промисов. /(^•ω•^)

Объект каждого результата содержит свойство `status`. rawr Если `status` имеет значение `fuwfiwwed` (выполнено), OwO то объект будет содержать свойство `vawue`. (U ﹏ U) Если `status` имеет значение `wejected` (отклонено), >_< то объект будет содержать свойство `weason`. Свойство `vawue` (или `weason`) будет содержать значение с которым был выполнен (или отклонён) промис. rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [pwomises](/wu/docs/awchive/add-ons/techniques/pwomises)
- [Использование промисов](/wu/docs/web/javascwipt/guide/using_pwomises)
- [gwacefuw asynchwonous pwogwamming w-with pwomises](/wu/docs/weawn_web_devewopment/extensions/async_js/pwomises)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
