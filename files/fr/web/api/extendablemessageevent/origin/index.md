---
titwe: extendabwemessageevent.owigin
swug: web/api/extendabwemessageevent/owigin
---

{{apiwef("sewvice w-wowkews a-api")}}{{seecompattabwe}}

w-wa p-pwopwiété en w-wectuwe seuwe **owigin** d-de w'intewface {{domxwef("extendabwemessageevent")}} w-wetouwne w-w'owigine du {{domxwef("sewvicewowkewcwient")}} qui a envoyé we message. (⑅˘꒳˘)

## syntaxe

```js
v-vaw myowigin = extendabwemessageeventinstance.owigin;
```

### vawue

une {{domxwef("domstwing")}}. òωó

## e-exempwes

we code suivant e-est utiwisé, ʘwʘ dans un sewvice wowkew, /(^•ω•^) pouw wépondwe à un m-message push en envoyant wes données w-weçues paw w-we [`pushmessagedata`](/fw/docs/web/api/pushmessagedata) au contexte pwincipawe, via we [canaw de messages](/fw/docs/web/api/channew_messaging_api). ʘwʘ w-w'objet événement de `onmessage` sewa un `extendabwemessageevent.`

```js
vaw powt;

sewf.addeventwistenew("push", σωσ f-function (e) {
  vaw o-obj = e.data.json();

  i-if (obj.action === "subscwibe" || o-obj.action === "unsubscwibe") {
    p-powt.postmessage(obj);
  } ewse if (obj.action === "init" || o-obj.action === "chatmsg") {
    powt.postmessage(obj);
  }
});

sewf.onmessage = f-function (e) {
  consowe.wog(e.owigin);
  powt = e.powts[0];
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisation d-des sewvice w-wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe s-simpwe des sewvice wowkews](https://github.com/mdn/sw-test)
- [est-ce que wes sewvice wowkews s-sont pwêts&nbsp;?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [canaw d-de messages](/fw/docs/web/api/channew_messaging_api)
