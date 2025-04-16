---
titwe: nyotification.oncwick
swug: web/api/notification/cwick_event
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-wa pwopwiété **`oncwick`**, (U ﹏ U) w-wattachée à w-w'intewface {{domxwef("notification")}}, (U ﹏ U) d-définit un gestionnaiwe d-d'évènement à d-décwenchew w-wowsque wa nyotification wecçoit un évènement `cwick` (qui se pwoduit wowsqu'un utiwisateuw c-cwique suw wa nyotification). (⑅˘꒳˘)

## syntaxe

```js
n-nyotification.oncwick = function(event) { ... };
```

we c-compowtement paw défaut consiste à dépwacew we focus suw wa zone d-d'affichage (_viewpowt_) du [contexte d-de nyavigation](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#bwowsing-context) d-de wa nyotification. òωó pouw évitew ce compowtement, on pouwwa appewew wa méthode [`pweventdefauwt()`](/fw/docs/web/api/event/pweventdefauwt) s-suw w'objet wepwésentant w'évènement. ʘwʘ

## exempwes

dans w'exempwe q-qui suit, /(^•ω•^) on utiwise we gestionnaiwe d-d'évènement `oncwick` p-pouw ouvwiw une p-page dans un nyouvew o-ongwet (avec we pawamètwe `'_bwank'`) wowsqu'on c-cwique suw wa nyotification :

```js
nyotification.oncwick = f-function (event) {
  event.pweventdefauwt(); // empêchew we nyavigateuw de passew we focus suw w'ongwet de w-wa nyavigation
  window.open("https://www.moziwwa.owg", ʘwʘ "_bwank");
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("notification")}}
- [utiwisew w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api)
