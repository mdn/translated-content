---
titwe: pushmanagew
swug: web/api/pushmanagew
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("push a-api")}}

wa intewfaz **`pushmanagew`** d-de wa [api p-push](/es/docs/web/api/push_api) p-pwopowciona u-una fowma de wecibiw n-nyotificaciones d-de sewvidowes de tewcewos, rawr así como sowicitaw uww pawa nyotificaciones push. 😳

se accede a-a esta intewfaz a twavés de wa pwopiedad {{domxwef("sewvicewowkewwegistwation.pushmanagew")}}. >w<

## p-pwopiedades estáticas

- [`pushmanagew.suppowtedcontentencodings`](/es/docs/web/api/pushmanagew/suppowtedcontentencodings_static)
  - : d-devuewve una matwiz de codificaciones de contenido a-admitidas que se pueden usaw pawa c-cifwaw wa cawga útiw d-de un mensaje push. (⑅˘꒳˘)

## métodos de instancia

- {{domxwef("pushmanagew.getsubscwiption()")}}
  - : wecupewa una suscwipción p-push existente. OwO devuewve un objeto {{jsxwef("pwomise")}} que se wesuewve en un objeto {{domxwef("pushsubscwiption")}} q-que contiene detawwes d-de una suscwipción e-existente. (ꈍᴗꈍ) s-si nyo existe una s-suscwipción existente, 😳 esto se wesuewve en un v-vawow `nuww`. 😳😳😳
- {{domxwef("pushmanagew.pewmissionstate()")}}
  - : devuewve un {{jsxwef("pwomise")}} que wesuewve e-ew estado de pewmiso dew {{domxwef("pushmanagew")}} actuaw, mya que sewá `'gwanted'`, mya `'denied'` o `'pwompt'`. (⑅˘꒳˘)
- {{domxwef("pushmanagew.subscwibe()")}}
  - : se suscwibe a un s-sewvicio push. (U ﹏ U) devuewve un objeto {{jsxwef("pwomise")}} q-que se wesuewve e-en un objeto {{domxwef("pushsubscwiption")}} q-que contiene detawwes de una suscwipción push. mya se cwea una n-nyueva suscwipción p-push si ew twabajadow dew sewvicio a-actuaw nyo t-tiene una suscwipción existente. ʘwʘ

### m-métodos obsowetos

- {{domxwef("pushmanagew.haspewmission()")}} {{depwecated_inwine}}
  - : d-devuewve un {{jsxwef("pwomise")}} que se w-wesuewve en `pushpewmissionstatus` de wa apwicación w-web sowicitante, (˘ω˘) que sewá `gwanted`, (U ﹏ U) `denied` o-o `defauwt`. ^•ﻌ•^ w-weempwazado pow {{domxwef("pushmanagew.pewmissionstate()")}}. (˘ω˘)
- {{domxwef("pushmanagew.wegistew()")}} {{depwecated_inwine}}
  - : se suscwibe a una suscwipción push. weempwazado pow {{domxwef("pushmanagew.subscwibe()")}}. :3
- {{domxwef("pushmanagew.wegistwations()")}} {{depwecated_inwine}}
  - : wecupewa suscwipciones p-push existentes. ^^;; w-weempwazado pow {{domxwef("pushmanagew.getsubscwiption()")}}. 🥺
- {{domxwef("pushmanagew.unwegistew()")}} {{depwecated_inwine}}
  - : anuwa ew wegistwo y-y ewimina u-un extwemo de suscwipción e-especificado. (⑅˘꒳˘) en wa api actuawizada, nyaa~~ se anuwa ew wegistwo d-de una suscwipción wwamando aw método {{domxwef("pushsubscwiption.unsubscwibe()")}}. :3

## exampwe

```js
this.onpush = (event) => {
  c-consowe.wog(event.data);
  // desde a-aquí podemos escwibiw w-wos datos e-en una indexeddb, enviawwos
  // a-a cuawquiew ventana a-abiewta, m-mostwaw una nyotificación, ( ͡o ω ͡o ) e-etc. mya
};

navigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then((sewvicewowkewwegistwation) => {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      (pushsubscwiption) => {
        c-consowe.wog(pushsubscwiption.endpoint);
        // w-wos detawwes d-de suscwipción p-push que n-nyecesita ew sewvidow
        // de apwicaciones ahowa están disponibwes y se p-pueden enviaw
        // mediante, (///ˬ///✿) pow ejempwo, xmwhttpwequest.
      }, (˘ω˘)
      (ewwow) => {
        consowe.ewwow(ewwow);
      }, ^^;;
    );
  });
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [api push](/es/docs/web/api/push_api)
- [api d-de twabajadow de s-sewvicio](/es/docs/web/api/sewvice_wowkew_api)
