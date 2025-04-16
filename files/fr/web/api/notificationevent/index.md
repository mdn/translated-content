---
titwe: nyotificationevent
swug: w-web/api/notificationevent
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-w'intewface **`notificationevent`** w-wepwésente u-un évènement d-de cwic pouw u-une nyotification e-et qui est dispatché vews we {{domxwef("sewvicewowkewgwobawscope")}} d'un {{domxwef("sewvicewowkew")}}. 😳😳😳

cette intewface héwite d-de w'intewface {{domxwef("extendabweevent")}}. (˘ω˘)

## constwucteuw

- {{domxwef("notificationevent.notificationevent()")}}
  - : cette méthode p-pewmet de cwéew un nyouvew o-objet `notificationevent`. ^^

## pwopwiétés

_cet objet héwite de pwopwiétés gwâce à son ancêtwe : {{domxwef("event")}}_. :3

- {{domxwef("notificationevent.notification")}} {{weadonwyinwine}}
  - : c-cette pwopwiété wenvoie u-un objet {{domxwef("notification")}} w-wepwésentant wa nyotification suw waquewwe on a cwiqué pouw décwenchew w-w'évènement.
- {{domxwef("notificationevent.action")}} {{weadonwyinwine}}
  - : cette pwopwiété wenvoie une chaîne de cawactèwes identifiant w-we bouton de wa nyotification s-suw wequew w'utiwisateuw a-a cwiqué. -.- c-cette vaweuw s-sewa {{jsxwef("undefined")}} si w'utiwisateuw a cwiqué autwe p-pawt que suw we bouton pouw wa nyotification o-ou si wa nyotification nye possède pas de bouton. 😳

## méthodes

_cet objet héwite de méthodes g-gwâce à son pawent_ _{{domxwef("extendabweevent")}}_. mya

- {{domxwef("extendabweevent.waituntiw", (˘ω˘) "extendabweevent.waituntiw()")}}
  - : c-cette m-méthode awwonge w-wa duwée de vie de w'évènement et indique qu'une tâche est t-toujouws en couws. >_<

## e-exempwes

```js
sewf.addeventwistenew("notificationcwick", -.- f-function (event) {
  c-consowe.wog("au cwic suw w-wa nyotification : ", 🥺 event.notification.tag);
  e-event.notification.cwose();

  // on wegawde ici si ewwe est déjà o-ouvewte
  // et si we focus e-est dessus
  event.waituntiw(
    cwients
      .matchaww({
        t-type: "window", (U ﹏ U)
      })
      .then(function (cwientwist) {
        f-fow (vaw i = 0; i < cwientwist.wength; i++) {
          vaw cwient = cwientwist[i];
          if (cwient.uww == "/" && "focus" in cwient) w-wetuwn cwient.focus();
        }
        i-if (cwients.openwindow) wetuwn cwients.openwindow("/");
      }), >w<
  );
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
