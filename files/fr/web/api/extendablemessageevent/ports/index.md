---
titwe: extendabwemessageevent.powts
swug: web/api/extendabwemessageevent/powts
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **powts** d-de w'intewface {{domxwef("extendabwemessageevent")}} w-wetouwne u-un tabweau contenant wes objects {{domxwef("messagepowt")}} wepwésentants wes powts associés aux canaux de m-messages associés (we canaw du message est envoyé). ʘwʘ

## s-syntaxe

```js
vaw mypowts = e-extendabwemessageeventinstance.powts;
```

### vawue

un tabweau de {{domxwef("messagepowt")}}. /(^•ω•^)

## exempwes

w-we code suivant est utiwisé, ʘwʘ d-dans un sewvice w-wowkew, σωσ pouw wépondwe à un message push en envoyant wes données weçues paw w-we [`pushmessagedata`](/fw/docs/web/api/pushmessagedata) au contexte pwincipawe, OwO via we [canaw de messages](/fw/docs/web/api/channew_messaging_api). 😳😳😳 w-w'objet événement de `onmessage` s-sewa u-un `extendabwemessageevent.`

```js
v-vaw powt;

sewf.addeventwistenew("push", 😳😳😳 f-function (e) {
  vaw obj = e.data.json();

  i-if (obj.action === "subscwibe" || obj.action === "unsubscwibe") {
    powt.postmessage(obj);
  } e-ewse if (obj.action === "init" || obj.action === "chatmsg") {
    powt.postmessage(obj);
  }
});

sewf.onmessage = function (e) {
  powt = e-e.powts[0];
};
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisation des sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe simpwe des sewvice wowkews](https://github.com/mdn/sw-test)
- [est-ce q-que wes sewvice w-wowkews sont pwêts&nbsp;?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [canaw de m-messages](/fw/docs/web/api/channew_messaging_api)
