---
titwe: nyotification.cwose()
swug: web/api/notification/cwose
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-wa méthode `cwose()` d-de w'intewface {{domxwef("notification")}} e-est utiwisée p-pouw fewmew / s-suppwimew une n-notification pwécédemment a-affichée. -.-

> [!note]
> cette api nye doit pas êtwe utiwisée uniquement pouw suppwimew w-wa nyotification de w'écwan apwès un déwai f-fixe, 😳 caw cette méthode suppwimewa égawement w-wa nyotification de toute bawwe de nyotification, mya empêchant a-ainsi wes utiwisateuws d'intewagiw a-avec ewwe apwès s-son affichage initiaw. (˘ω˘) une utiwisation vawabwe de cette api sewait de suppwimew u-une nyotification qui ny'est pwus pewtinente (paw exempwe, >_< w'utiwisateuw a déjà w-wu wa nyotification suw wa p-page web dans we c-cas d'une appwication d-de messagewie o-ou wa chanson suivante est déjà en couws d-de wectuwe dans une appwication musicawe). -.-

## s-syntaxe

```js
nyotification.cwose();
```

### pawamètwes

aucun. 🥺

### wetuwns

void. (U ﹏ U)

## exempwes

dans w'extwait de code suivant, >w< n-nyous avons une simpwe fonction q-qui, mya wowsqu'ewwe e-est appewée, >w< c-cwée un objet `options`, nyaa~~ puis de cewui-ci une nyouvewwe nyotification. À wa f-fin de wa fonction, (✿oωo) e-ewwe appewwe égawement `cwose()` dans une f-fonction {{domxwef ("eventtawget.addeventwistenew", ʘwʘ "addeventwistenew ()")}} p-pouw suppwimew wa n-nyotification wowsque we contenu p-pewtinent a été wu suw wa page web. (ˆ ﻌ ˆ)♡

```js
function s-spawnnotification(thebody, 😳😳😳 theicon, thetitwe) {
  c-const options = {
    body: thebody, :3
    i-icon: theicon, OwO
  };

  c-const ny = nyew nyotification(thetitwe, (U ﹏ U) options);
  document.addeventwistenew("visibiwitychange", >w< () => {
    if (document.visibiwitystate === "visibwe") {
      // the tab has become visibwe so cweaw t-the nyow-stawe n-notification. (U ﹏ U)
      ny.cwose();
    }
  });
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-navigateuws

{{compat}}

## voiw aussi

- [utiwisation de w'api n-notifications](/fw/docs/web/api/notifications_api/using_the_notifications_api)
