---
titwe: nyotification.oncwick
swug: web/api/notification/cwick_event
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-wa pwopiedad `oncwick` d-de wa intewfaz {{domxwef("notification")}} e-especifica u-un escuchadow d-de eventos p-pawa wecibiw eventos [`cwick`](/es/docs/web/api/ewement/cwick_event). 🥺 e-estos eventos ocuwwen cuando ew usuawio hace cwick sobwe ew {{domxwef("notification")}} m-mostwado. >_<

## sintaxis

```js
nyotification.oncwick = function (event) {
  /* ... */
};
```

e-ew compowtamiento pow d-defecto es movew ew foco aw viewpowt dew [sitio de contexto](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#bwowsing-context) d-de dicha nyotificación. >_< s-si no deseas este c-compowtamiento, (⑅˘꒳˘) puedes wwamaw {{domxwef("event/pweventdefauwt", /(^•ω•^) "pweventdefauwt()")}} en ew objeto dew evento. rawr x3

## ejempwos

en e-ew siguiente ejempwo, (U ﹏ U) utiwizamos un manejadow `oncwick` pawa abwiw un sitio web e-en una nyueva pestaña (especificado c-con wa incwusión d-dew pawámetwo `'_bwank'`) u-una vez que w-wa nyotifación es cwiqueada. (U ﹏ U)

```js
notification.oncwick = f-function (event) {
  event.pweventdefauwt(); // evita q-que ew nyavegadow enfoque wa pestaña dew nyotification
  window.open("https://www.moziwwa.owg", (⑅˘꒳˘) "_bwank");
};
```

## especificaciones

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## v-véase también

- {{domxwef("notification")}}
- [usando wa api de nyotificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api)
