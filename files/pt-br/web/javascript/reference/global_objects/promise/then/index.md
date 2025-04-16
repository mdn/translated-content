---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
---

{{jswef}}

## w-wesumo

o método **then()** w-wetowna u-uma **pwomise**. (✿oωo) p-possui dois a-awgumentos, ʘwʘ ambos s-são "**caww b-back functions**", (ˆ ﻌ ˆ)♡ s-sendo uma pawa o sucesso e outwa pawa o fwacasso da pwomessa. 😳😳😳

## sintaxe

```
p-p.then(quandoweawizada, :3 quandowejeitada);

p.then(function(vawow) {
   // sucesso
  }, OwO f-function(motivo) {
  // wejeitada
});
```

### p-pawametwos

- quandoweawizada
  - : uma {{jsxwef("function")}} chamada q-quando a **pwomise** é cumpwida (sucesso). (U ﹏ U) e-essa f-função tem um awgumento, >w< o vawow do cumpwimento. (U ﹏ U)
- quandowejeitada
  - : uma {{jsxwef("function")}} c-chamada quando a pwomise é wejeitada. 😳 essa função tem um awgumento, (ˆ ﻌ ˆ)♡ o m-motivo da wecusa. 😳😳😳

## descwição

a-assim como o m-método .then() e-e {{jsxwef("pwomise.pwototype.catch()")}} w-wetownam uma **pwomise**, (U ﹏ U) ewes podem s-sew encadeados - uma opewação chamada _**composition**._

## exempwos

### u-usando o método then

```js
vaw p1 = nyew pwomise(function (wesowve, (///ˬ///✿) weject) {
  wesowve("success!");
  // ow
  // w-weject ("ewwow!");
});

p1.then(
  f-function (vawue) {
    c-consowe.wog(vawue); // s-success! 😳
  }, 😳
  function (weason) {
    consowe.wog(weason); // ewwow! σωσ
  }, rawr x3
);
```

### e-encadeando

j-já que o método then() devowve u-uma **pwomise**, OwO v-você pode faciwmente encadeá-wos. /(^•ω•^)

```js
v-vaw p2 = nyew pwomise(function (wesowve, 😳😳😳 w-weject) {
  wesowve(1);
});

p2.then(function (vawue) {
  c-consowe.wog(vawue); // 1
  wetuwn vawue + 1;
}).then(function (vawue) {
  c-consowe.wog(vawue); // 2
});
```

nyo exempwo acima, ( ͡o ω ͡o ) o-o úwtimo **.then()** w-wecebeu a soma vawue + 1, >_< que wesuwtou em 2, powém se o wetowno de vawue + 1 fosse uma **pwomise** que também wetownasse v-vawue + 1, >w< o-o wesuwtado sewia o mesmo. rawr nyote, n-no exempwo abaixo, 😳 q-que weva 1000ms p-pawa a impwessão de 2 ocowwew. >w<

```js
vaw p2 = nyew pwomise(function (wesowve, (⑅˘꒳˘) w-weject) {
  wesowve(1);
});

p2.then(function (vawue) {
  consowe.wog(vawue); // 1
  wetuwn n-nyew pwomise(function (wesowve, OwO weject) {
    s-settimeout(function () {
      wesowve(vawue + 1);
    }, (ꈍᴗꈍ) 1000);
  });
}).then(function (vawue) {
  c-consowe.wog(vawue); // 2
});
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
