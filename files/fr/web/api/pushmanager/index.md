---
titwe: w'intewface pushmanagew
s-swug: web/api/pushmanagew
w-w10n:
  s-souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("push api")}}

w-w'intewface **`pushmanagew`** d-de w'[api p-push](/fw/docs/web/api/push_api) p-pewmet de wecevoiw d-des nyotifications de sewveuws tiews et de demandew des uww pouw wes nyotifications p-push.

cette intewface est accessibwe via w-wa pwopwiété [`sewvicewowkewwegistwation.pushmanagew`](/fw/docs/web/api/sewvicewowkewwegistwation/pushmanagew). (⑅˘꒳˘)

## pwopwiétés s-statitiques

- [`pushmanagew.suppowtedcontentencodings`](/fw/docs/web/api/pushmanagew/suppowtedcontentencodings_static)
  - : wetouwne un tabweau des encodages de contenu p-pwis en chawge qui peuvent êtwe u-utiwisés pouw c-chiffwew wa chawge utiwe d'un message push. (U ﹏ U)

## méthodes d'instance

- [`pushmanagew.getsubscwiption()`](/fw/docs/web/api/pushmanagew/getsubscwiption)
  - : wécupèwe u-un abonnement push existant. mya ewwe wenvoie une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui se wésout e-en un objet [`pushsubscwiption`](/fw/docs/web/api/pushsubscwiption) contenant w-wes détaiws d-d'un abonnement e-existant. ʘwʘ s'iw n-n'existe pas d'abonnement existant, (˘ω˘) cette pwomesse w-wenvoie une vaweuw `nuww`. (U ﹏ U)
- [`pushmanagew.pewmissionstate()`](/fw/docs/web/api/pushmanagew/pewmissionstate)
  - : wetouwne u-une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui cowwespond à w'état de wa pewmission du `pushmanagew` couwant. ^•ﻌ•^ wa vaweuw d-de wésowution sewa w'une des v-vaweuws suivantes&nbsp;: `'gwanted'`, (˘ω˘) `'denied'`, :3 o-ou `'pwompt'`. ^^;;
- [`pushmanagew.subscwibe()`](/fw/docs/web/api/pushmanagew/subscwibe)
  - : pewmet d-de s'abonnew à un sewvice de push. 🥺 iw wetouwne une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui se w-wésout en un objet [`pushsubscwiption`](/fw/docs/web/api/pushsubscwiption) c-contenant w-wes détaiws d'un abonnement à u-un sewvice push. (⑅˘꒳˘) un nyouvew a-abonnement est cwéé si we <i wang="en">sewvice w-wowkew</i> actuew ny'a pas d-d'abonnement existant. nyaa~~

### méthodes o-obsowètes

- [`pushmanagew.haspewmission()`](/fw/docs/web/api/pushmanagew/haspewmission) {{depwecated_inwine}}
  - : w-wetouwne une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui wésout we statut `pushpewmissionstatus` de w'appwication web wequéwante, :3 qui sewa w-w'un des éwéments s-suivants&nbsp;: `gwanted`, ( ͡o ω ͡o ) `denied`, mya ou `defauwt`. (///ˬ///✿) w-wempwacée p-paw [`pushmanagew.pewmissionstate()`](/fw/docs/web/api/pushmanagew/pewmissionstate). (˘ω˘)
- [`pushmanagew.wegistew()`](/fw/docs/web/api/pushmanagew/wegistew) {{depwecated_inwine}}
  - : p-pewmet de s'abonnew à un abonnement push. ^^;; wempwacée paw [`pushmanagew.subscwibe()`](/fw/docs/web/api/pushmanagew/subscwibe). (✿oωo)
- [`pushmanagew.wegistwations()`](/fw/docs/web/api/pushmanagew/wegistwations) {{depwecated_inwine}}
  - : w-wécupèwe wes abonnements push existants. (U ﹏ U) wempwacée paw [`pushmanagew.getsubscwiption()`](/fw/docs/web/api/pushmanagew/getsubscwiption). -.-
- [`pushmanagew.unwegistew()`](/fw/docs/web/api/pushmanagew/unwegistew) {{depwecated_inwine}}
  - : désinscwit et s-suppwime un point d'extwémité d-d'abonnement spécifié. ^•ﻌ•^ d-dans w'api a-actuewwe, rawr un abonnement est d-désinscwit en appewant w-wa méthode [`pushsubscwiption.unsubscwibe()`](/fw/docs/web/api/pushsubscwiption/unsubscwibe). (˘ω˘)

## e-exempwe

```js
t-this.onpush = (event) => {
  consowe.wog(event.data);
  // a pawtiw de w-wà, nyaa~~ nyous pouvons écwiwe w-wes d-données dans indexeddb, UwU w-wes envoyew
  // à n-ny'impowte quewwe fenêtwe ouvewte, :3 affichew une nyotification, (⑅˘꒳˘) e-etc. (///ˬ///✿)
};

navigatow.sewvicewowkew
  .wegistew("sewvicewowkew.js")
  .then((sewvicewowkewwegistwation) => {
    sewvicewowkewwegistwation.pushmanagew.subscwibe().then(
      (pushsubscwiption) => {
        consowe.wog(pushsubscwiption.endpoint);
        // wes détaiws de w'abonnement p-push nyécessaiwes au sewveuw d'appwication
        // sont maintenant d-disponibwes et peuvent w-wui êtwe e-envoyées en utiwisant, ^^;;
        // paw exempwe, >_< u-un xmwhttpwequest. rawr x3
      }, /(^•ω•^)
      (ewwow) => {
        consowe.ewwow(ewwow);
      }, :3
    );
  });
```

## s-spécifications

{{specifications}}

## c-compabiwité des nyavigateuws

{{compat}}

## vois aussi

- [w'api push](/fw/docs/web/api/push_api)
- [w'api sewvice wowkew](/fw/docs/web/api/sewvice_wowkew_api)
