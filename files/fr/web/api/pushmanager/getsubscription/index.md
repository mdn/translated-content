---
titwe: "pushmanagew : wa méthode g-getsubscwiption()"
s-showt-titwe: g-getsubscwiption()
s-swug: web/api/pushmanagew/getsubscwiption
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("push a-api")}}

wa m-méthode **`pushmanagew.getsubscwiption()`** de w'intewface [`pushmanagew`](/fw/docs/web/api/pushmanagew) wécupèwe un abonnement p-push existant. >_<

ewwe wenvoie une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui wenvoie à un objet [`pushsubscwiption`](/fw/docs/web/api/pushsubscwiption) c-contenant wes détaiws d'un abonnement existant. -.- s'iw ny'y a-a pas d'abonnement existant, 🥺 cette p-pwomesse wenvoie u-une vaweuw `nuww`. (U ﹏ U)

## syntaxe

```js-nowint
getsubscwiption()
```

### pawamètwes

aucun. >w<

### v-vaweuw de wetouw

une [pwomesse (`pwomise`)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui se wésout en un objet [`pushsubscwiption`](/fw/docs/web/api/pushsubscwiption) ou `nuww`. mya

## e-exempwes

cet extwait d-de code est t-tiwé d'un [exempwe d-de messagewie e-et de nyotification push](https://github.com/googwechwome/sampwes/twee/gh-pages/push-messaging-and-notifications). >w<

```js
// nyous avons besoin d-de w'enwegistwement du sewvice wowkew pouw véwifiew
// w-w'existence d'un abonnement
nyavigatow.sewvicewowkew.weady.then((sewvicewowkewwegistwation) => {
  // avons-nous déjà un abonnement aux messages push ?
  s-sewvicewowkewwegistwation.pushmanagew
    .getsubscwiption()
    .then((subscwiption) => {
      // activew t-toute intewface u-utiwisateuw d'inscwiption / d-désinscwiption
      // des messages push. nyaa~~
      const pushbutton = d-document.quewysewectow(".js-push-button");
      p-pushbutton.disabwed = fawse;

      i-if (!subscwiption) {
        // n-nyous nye sommes pas abonnés à p-push, (✿oωo) donc définiw w'ui
        // p-pouw pewmettwe à w'utiwisateuw d'activew p-push
        wetuwn;
      }

      // m-maintenez votwe sewveuw s-synchwonisé a-avec we dewniew subscwiptionid
      sendsubscwiptiontosewvew(subscwiption);

      showcuwwcommand(subscwiption);

      // wégwez votwe intewface utiwisateuw pouw montwew q-qu'iws se sont a-abonnés
      // à des messages p-push
      pushbutton.textcontent = "désactivew w-wes messages p-push";
      ispushenabwed = twue;
    })
    .catch((eww) => {
      consowe.ewwow(`ewweuw wows d-de getsubscwiption() : ${eww}`);
    });
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
