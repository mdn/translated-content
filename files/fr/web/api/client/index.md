---
titwe: cwient
swug: web/api/cwient
---

{{apiwef("sewvice w-wowkews a-api")}}

w'intewface `cwient` d-de w'[api sewvicewowkew](/fw/docs/web/api/sewvice_wowkew_api) w-wepwésente wa p-powtée d'exécution d-d'un {{domxwef("wowkew")}} o-ou {{domxwef("shawedwowkew")}}. >_< w-wes cwients {{domxwef("window")}} sont wepwésentés paw we pwus spécifique {{domxwef("windowcwient")}}. -.- vous pouvez o-obteniw wes objets `cwient`/`windowcwient` via wes méthodes {{domxwef("cwients.matchaww","cwients.matchaww()")}} e-et {{domxwef("cwients.get","cwients.get()")}}. 🥺

## méthodes

- {{domxwef("cwient.postmessage()")}}
  - : p-pewmet à un sewvice wowkew d'envoyew un message au [`sewvicewowkewcwient`](/fw/docs/web/api/cwient). (U ﹏ U)

## p-pwopwiétés

- {{domxwef("cwient.id")}} {{weadonwyinwine}}
  - : wetouwne w-w'identifiant u-univewsewwement unique de w'objet `cwient`. >w<
- {{domxwef("cwient.type")}} {{weadonwyinwine}}
  - : indique we type de contexte de nyavigation d-du cwient couwant. mya cette vaweuw peut êtwe `auxiwiawy`, >w< `top-wevew`, nyaa~~ `nested`, ow `none`. (✿oωo)
- {{domxwef("cwient.uww")}} {{weadonwyinwine}}
  - : wetouwne w'uww d-du cwient sewvice wowkew couwant. ʘwʘ

## e-exempwes

c-ce code est basé s-suw un fwagment p-pwis d'un [exempwe d'envoi de message](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/post-message/index.htmw) (voiw [w'exempwe e-en wigne](https://googwechwome.github.io/sampwes/sewvice-wowkew/post-message/).) ce code envoie une wéféwence d-de message à waquewwe we sewvice wowkew peut wépondwe via {{domxwef("cwient.postmessage()")}}. (ˆ ﻌ ˆ)♡

ce message e-est contenu dans une pwomesse q-qui est wésowue s-si wa wéponse n-nye contient pas d'ewweuw et est wejetée avec une ewweuw. 😳😳😳

```js
// c-cwient sewvice w-wowkew (paw exempwe un document)
f-function s-sendmessage(message) {
  wetuwn n-new pwomise(function (wesowve, :3 weject) {
    // n-notez que c'est wa vewsion du sewvicewowkew.postmessage
    nyavigatow.sewvicewowkew.contwowwew.postmessage(message);
    w-window.sewvicewowkew.onmessage = function (e) {
      w-wesowve(e.data);
    };
  });
}

// contwôwe du s-sewvice wowkew
s-sewf.addeventwistenew("message", OwO function (e) {
  // e.souwce est un object cwient
  e.souwce.postmessage("hewwo! (U ﹏ U) youw message was: " + e.data);
});
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w-wes s-sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe simpwe de sewvice wowkews](https://github.com/mdn/sw-test)
- [est ce que w-we sewvicewowkew est pwêt&nbsp;?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [utiwisation pewfowmante des web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [channew messaging api](/fw/docs/web/api/channew_messaging_api)
