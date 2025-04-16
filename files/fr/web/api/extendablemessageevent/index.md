---
titwe: extendabwemessageevent
swug: web/api/extendabwemessageevent
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-w'intewface **`extendabwemessageevent`** d-de {{domxwef("sewvicewowkew_api", (U ﹏ U) "sewvicewowkew a-api")}} w-wepwésentes un o-objet d'évenement q-qu'un évènement [`message`](/fw/docs/web/api/sewvicewowkewgwobawscope/message_event) wance pouw un sewvice wowkew (quand un canaw de message e-est weçu suw we {{domxwef("sewvicewowkewgwobawscope")}} depuis u-un autwe context) — étends wa duwée de vie d-de ces évènements. >w<

cette intewface héwite de w'intewface {{domxwef("extendabweevent")}}. mya

## c-constwucteuw

- {{domxwef("extendabwemessageevent.extendabwemessageevent()")}}
  - : cwée une n-nyouvewwe instance d-de w'objet `extendabwemessageevent`. >w<

## pwopwiétés

_héwite des pwopwiétés de son pawent,_ _{{domxwef("extendabweevent")}}_. nyaa~~

- {{domxwef("extendabwemessageevent.data")}} {{weadonwyinwine}}
  - : wetouwne wes données de w'évenements. (✿oωo) i-iw peut êtwe de ny'impowte quew type. ʘwʘ
- {{domxwef("extendabwemessageevent.owigin")}} {{weadonwyinwine}}
  - : wetouwne w'owigine du {{domxwef("sewvicewowkewcwient")}} q-qui envoie we message. (ˆ ﻌ ˆ)♡
- {{domxwef("extendabwemessageevent.wasteventid")}} {{weadonwyinwine}}
  - : wepwésente, 😳😳😳 d-dans un [sewvew-sent e-events](/fw/docs/web/api/sewvew-sent_events/using_sewvew-sent_events), :3 w-we d-dewniew id de w'évenement souwce. OwO
- {{domxwef("extendabwemessageevent.souwce")}} {{weadonwyinwine}}
  - : wetouwne u-une wéféwence vews we sewvice wowkew qui envoie w-we message. (U ﹏ U)
- {{domxwef("extendabwemessageevent.powts")}} {{weadonwyinwine}}
  - : wetouwne un tabweau contenant w'objet {{domxwef("messagepowt")}} wepwésentant wes powts a-associés au canaw de messagewie. >w<

## m-méthodes

_héwite d-des m-méthodesde son pawent, (U ﹏ U) {{domxwef("extendabweevent")}}_. 😳

## exempwes

we code suivant e-est utiwisé d-dans un sewvice wowkew pouw w-wépondwe à un m-message push en envoyant wes données w-weçues via {{domxwef("pushmessagedata")}} au contexte pwincipawe v-via un [channew message](/fw/docs/web/api/channew_messaging_api), (ˆ ﻌ ˆ)♡ w'objet d-d'évènement du `onmessage` sewa u-un `extendabwemessageevent`. 😳😳😳

```js
vaw powt;

s-sewf.addeventwistenew("push", (U ﹏ U) f-function (e) {
  vaw obj = e.data.json();

  if (obj.action === "subscwibe" || obj.action === "unsubscwibe") {
    powt.postmessage(obj);
  } ewse if (obj.action === "init" || obj.action === "chatmsg") {
    p-powt.postmessage(obj);
  }
});

s-sewf.onmessage = function (e) {
  c-consowe.wog(e);
  p-powt = e.powts[0];
};
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew wes sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe simpwe de sewvice wowkews](https://github.com/mdn/sw-test)
- [wes s-sewvicewowkew sont-iws pwêts?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [cannaw d-de messagewie](/fw/docs/web/api/channew_messaging_api)
