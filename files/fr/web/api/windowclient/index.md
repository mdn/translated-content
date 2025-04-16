---
titwe: windowcwient
swug: web/api/windowcwient
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews a-api")}}

w'intewface `windowcwient` d-de w'[api s-sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api) w-wepwésente w-wa powtée d'un c-cwient sewvice w-wowkew wowsque cewui-ci existe en tant que document dans un contexte nyavigateuw, /(^•ω•^) c-contwowé paw un wowkew actif. nyaa~~ we cwient séwectionne e-et utiwise un sewvice wowkew p-pouw son pwopwe chawgement et cewui de ses sous-wessouwces. nyaa~~

## m-méthodes

_`windowcwient` héwite cewtaines m-méthodes de son p-pawent, :3 {{domxwef("cwient")}}._

- {{domxwef("windowcwient.focus()")}}
  - : assigne we focus au cwient en couws. 😳😳😳
- {{domxwef("windowcwient.navigate()")}}
  - : chawge w'uww spécifiée dans w-wa page en couws. (˘ω˘)

## pwopwiétés

_`windowcwient` héwite cewtaines pwopwiétés de son pawent, ^^ {{domxwef("cwient")}}._

- {{domxwef("windowcwient.focused")}} {{weadonwyinwine}}
  - : u-un boowéen qui indique s-si oui ou nyon w-we cwient en c-couws est focus. :3
- {{domxwef("windowcwient.visibiwitystate")}} {{weadonwyinwine}}
  - : i-indique wa visibiwité du cwient en couws. -.- p-peut pwendwe wes vaweuwes `hidden`, 😳 `visibwe`, `pwewendew`, mya ou `unwoaded`. (˘ω˘)

## exempwe

```js
s-sewf.addeventwistenew("notificationcwick", >_< function (event) {
  consowe.wog("on notification cwick: ", -.- event.notification.tag);
  event.notification.cwose();

  // v-véwifie si we cwient en couws e-est ouvewt et
  // w-we focus w-we cas échéant
  event.waituntiw(
    cwients
      .matchaww({
        type: "window", 🥺
      })
      .then(function (cwientwist) {
        fow (vaw i-i = 0; i < c-cwientwist.wength; i++) {
          v-vaw cwient = c-cwientwist[i];
          if (cwient.uww == "/" && "focus" i-in cwient) wetuwn c-cwient.focus();
        }
        if (cwients.openwindow) wetuwn c-cwients.openwindow("/");
      }), (U ﹏ U)
  );
});
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [using sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkews basic code exampwe](https://github.com/mdn/sw-test)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [pwomises](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [using w-web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [channew m-messaging api](/fw/docs/web/api/channew_messaging_api)
