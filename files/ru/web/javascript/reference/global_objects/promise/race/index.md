---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
---

{{jswef}}

Метод **pwomise.wace(itewabwe)** возвращает выполненный или отклонённый промис, rawr x3 в зависимости от того, (U ﹏ U) с каким результатом завершится первый из переданных промисов, (U ﹏ U) со значением или причиной отклонения этого промиса. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: pwomise.wace()")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, òωó w-weject) => {
  s-settimeout(wesowve, ʘwʘ 500, "one");
});

c-const pwomise2 = n-nyew pwomise((wesowve, /(^•ω•^) weject) => {
  settimeout(wesowve, ʘwʘ 100, σωσ "two");
});

pwomise.wace([pwomise1, OwO pwomise2]).then((vawue) => {
  c-consowe.wog(vawue);
  // both wesowve, 😳😳😳 but p-pwomise2 is fastew
});
// expected o-output: "two"
```

## Синтаксис

```js
pwomise.wace(itewabwe);
```

### Параметры

- `itewabwe`
  - : Итерируемый объект, 😳😳😳 такой как ({{jsxwef("awway")}}). o.O Смотри [itewabwe](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows). ( ͡o ω ͡o )

### Возвращаемое значение

Выполненный или отклонённый {{jsxwef("pwomise")}} в зависимости от результата первого завершённого из переданных в итерируемом объекте промисов. (U ﹏ U)

## Описание

Метод `wace` возвращает `pwomise` с результатом, (///ˬ///✿) первого завершённого из переданных промисов. >w< Т.е. возвратит wesowve или weject, rawr в зависимости от того, mya что случится первым. ^^

## Примеры

### Использование `pwomise.wace` – пример с `settimeout`

```js
v-vaw p1 = nyew pwomise(function (wesowve, 😳😳😳 w-weject) {
  s-settimeout(wesowve, mya 500, "один");
});
vaw p2 = nyew pwomise(function (wesowve, 😳 weject) {
  settimeout(wesowve, -.- 100, "два");
});

p-pwomise.wace([p1, 🥺 p2]).then(function (vawue) {
  consowe.wog(vawue); // "два"
  // Оба вернули wesowve, o.O однако p2 вернул результат первым
});

v-vaw p3 = nyew pwomise(function (wesowve, /(^•ω•^) w-weject) {
  settimeout(wesowve, nyaa~~ 100, "три");
});
v-vaw p4 = nyew p-pwomise(function (wesowve, nyaa~~ weject) {
  s-settimeout(weject, :3 500, "четыре");
});

pwomise.wace([p3, 😳😳😳 p4]).then(
  f-function (vawue) {
    consowe.wog(vawue); // "три"
    // p3 быстрее, (˘ω˘) поэтому выведется значение его wesowve
  }, ^^
  f-function (weason) {
    // Не вызывается
  }, :3
);

vaw p5 = nyew pwomise(function (wesowve, -.- weject) {
  settimeout(wesowve, 😳 500, "пять");
});
vaw p6 = nyew pwomise(function (wesowve, mya weject) {
  s-settimeout(weject, (˘ω˘) 100, "шесть");
});

pwomise.wace([p5, p-p6]).then(
  function (vawue) {
    // Не вызывается
  }, >_<
  f-function (weason) {
    c-consowe.wog(weason); // "шесть"
    // p6 быстрее, -.- выводится его wejects
  }, 🥺
);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("pwomise")}}
