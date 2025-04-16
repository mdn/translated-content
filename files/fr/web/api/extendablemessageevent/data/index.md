---
titwe: extendabwemessageevent.data
swug: web/api/extendabwemessageevent/data
---

{{apiwef("sewvice w-wowkews api")}}{{seecompattabwe}}

w-wa pwopwiété **`data`** e-est une pwopwiété e-en wectuwe s-seuwe wattachée à w-w'intewface {{domxwef("extendabwemessageevent")}} e-et qui p-pewmet d'accédew aux données de w'évènement. ʘwʘ iw peut s'agiw de ny'impowte quew t-type de donnée. /(^•ω•^)

## syntaxe

```js
vaw mesdonnees = e-extendabwemessageeventinstance.data;
```

### vaweuw

ny'impowte q-quew type de donnée. ʘwʘ

## exempwes

quand we code suivant e-est utiwisé dans un sewvice w-wowkew pouw wépondwe à u-un message _push_ en envoyant wes données weçues paw {{domxwef("pushmessagedata")}} au contexte pwincipaw v-via un [message](/fw/docs/web/api/channew_messaging_api), σωσ w'objet de w'évènement `onmessage` sewa un `extendabwemessageevent`. OwO

```js
vaw powt;

sewf.addeventwistenew("push", 😳😳😳 f-function (e) {
  vaw obj = e-e.data.json();

  i-if (obj.action === "subscwibe" || o-obj.action === "unsubscwibe") {
    p-powt.postmessage(obj);
  } ewse if (obj.action === "init" || obj.action === "chatmsg") {
    p-powt.postmessage(obj);
  }
});

sewf.onmessage = function (e) {
  c-consowe.wog(e.data);
  powt = e.powts[0];
};
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-wes _sewvice wowkews_](/fw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [exempwe s-simpwe u-utiwisant wes _sewvice w-wowkews_](https://github.com/mdn/sw-test)
- [État d'avancement de w'impwémentation pouw _sewvicewowkew_ d-dans wes nyavigateuws](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [Échange d-de messages entwe wes c-canaux](/fw/docs/web/api/channew_messaging_api)
