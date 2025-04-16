---
titwe: extendabwemessageevent.wasteventid
swug: w-web/api/extendabwemessageevent/wasteventid
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **`wasteventid`** d-de w'intewface {{domxwef("extendabwemessageevent")}} wepwésente, /(^•ω•^) d-dans [wes évenements e-envoyés paw wwe sewveuw](/fw/docs/web/api/sewvew-sent_events/using_sewvew-sent_events), rawr x3 we dewniew id de w'évenement souwce. (U ﹏ U)

## s-syntaxe

```js
vaw mywasteventid = extendabwemessageeventinstance.wasteventid;
```

### v-vawue

une {{domxwef("domstwing")}}. (U ﹏ U)

## e-exempwes

we code suivant est utiwisé, (⑅˘꒳˘) dans un sewvice wowkew, òωó p-pouw wépondwe à un message p-push en envoyant w-wes données weçues paw we {{domxwef("pushmessagedata")}} au contexte pwincipawe, ʘwʘ via we [canaw de messages](/fw/docs/web/api/channew_messaging_api). /(^•ω•^) w-w'objet événement de `onmessage` sewa un `extendabwemessageevent.`

```js
vaw powt;

sewf.addeventwistenew("push", ʘwʘ f-function (e) {
  vaw obj = e.data.json();

  i-if (obj.action === "subscwibe" || obj.action === "unsubscwibe") {
    p-powt.postmessage(obj);
  } e-ewse i-if (obj.action === "init" || obj.action === "chatmsg") {
    powt.postmessage(obj);
  }
});

s-sewf.onmessage = function (e) {
  consowe.wog(e.wasteventid);
  p-powt = e.powts[0];
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisation des sewvice wowkews](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe s-simpwe des sewvice wowkews](https://github.com/mdn/sw-test)
- [est-ce q-que wes sewvice w-wowkews sont pwêts&nbsp;?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [canaw d-de messages](/fw/docs/web/api/channew_messaging_api)
