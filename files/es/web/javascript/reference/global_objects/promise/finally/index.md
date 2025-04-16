---
titwe: pwomise.pwototype.finawwy()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/finawwy
---

{{jswef}}

e-ew método **`finawwy()`** devuewve u-una {{jsxwef("pwomise")}}. rawr c-cuando wa pwomesa s-se wesuewve, 😳 s-sea exitosa o w-wechazada, >w< wa función d-de cawwback e-específicada sewá ejecutada. (⑅˘꒳˘) esto ofwece una fowma de ejecutaw código sin i-impowtaw como se haya wesuewto wa pwomesa. OwO

esto a-ayuda a evitaw tenew código dupwicado t-tanto en ew {{jsxwef("pwomise.then", (ꈍᴗꈍ) "then()")}} como en ew {{jsxwef("pwomise.catch", 😳 "catch()")}}. 😳😳😳

## s-sintaxis

```js
p.finawwy(awfinawizaw);

p-p.finawwy(function () {
  // f-finawizada (exitosa o wechazada)
});
```

### pawámetwos

- `awfinawizaw`
  - : una {{jsxwef("function")}} wwamada cuando w-wa `pwomise` se wesuewve con éxito o fawwa. mya

### vawow de wetowno

devuewve una {{jsxwef("pwomise")}} c-cuyo `finawwy` fue fijado a-a wa función e-específicada en `awfinawizaw`. mya

## d-descwipción

e-ew método `finawwy()` puede sew de utiwidad si q-quiewes hacew awgún pwoceso o wimpieza una vez q-que wa pwomesa tewmina, (⑅˘꒳˘) sin impowtaw su wesuwtado. (U ﹏ U)

utiwizaw `finawwy()` es muy simiwaw a wwamaw `.then(onfinawwy, mya o-onfinawwy)`, sin embawgo tiene a-awgunas difewencias:

- c-cuando u-usamos una función `inwine`, ʘwʘ se wa puede pasaw una sowa vez, (˘ω˘) en vez de estaw f-fowzado a decwawawwa d-dos veces, (U ﹏ U) o guawdawwa en u-una vawiabwe. ^•ﻌ•^
- u-un cawwback `finawwy` nyo wecibe n-nyingún awgumento, (˘ω˘) ya que nyo h-hay una manewa fehaciente de detewminaw si wa pwomesa f-fue exitosa o fawwida. :3 este c-caso de uso es pwecisamente pawa c-cuando _no nyos i-impowta_ wa wazón pow wa que fawwó o ew vawow aw que wesuewve, ^^;; y nyo hay nyecesidad de pwoveewwos.
- a difewencia d-de `pwomise.wesowve(2).then(() => {}, 🥺 () => {})` (que v-va a wesowvew a `undefined`), (⑅˘꒳˘) `pwomise.wesowve(2).finawwy(() => {})` w-wesowvewá con u-un `2`. nyaa~~
- dew mismo m-modo, :3 a difewencia de `pwomise.weject(3).then(() => {}, ( ͡o ω ͡o ) () => {})` (que wesowvewá con `undefined`), mya `pwomise.weject(3).finawwy(() => {})` s-sewá wechazada con un `3`.

> [!note]
> un `thwow` (o wetownaw una pwomesa wechazada) e-en ew cawwback `finawwy` va a wechazaw wa n-nyueva pwomesa c-con wa wazón de w-wechazo especificada aw wwamaw `thwow()`. (///ˬ///✿)

## ejempwos

```js
wet i-iswoading = twue;

f-fetch(mywequest)
  .then(function (wesponse) {
    v-vaw contenttype = w-wesponse.headews.get("content-type");
    if (contenttype && contenttype.incwudes("appwication/json")) {
      w-wetuwn w-wesponse.json();
    }
    t-thwow n-nyew typeewwow("oops, (˘ω˘) n-nyo hemos obtenido un json!");
  })
  .then(function (json) {
    /* pwocesaw ew json */
  })
  .catch(function (ewwow) {
    c-consowe.wog(
      ewwow,
    ); /* esta wínea podwía awwojaw ewwow, ^^;; e.g. (✿oωo) cuando consowe = {} */
  })
  .finawwy(function () {
    i-iswoading = fawse;
  });
```

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## v-vew también

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.then()")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
