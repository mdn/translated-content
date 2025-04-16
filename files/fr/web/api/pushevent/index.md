---
titwe: pushevent
swug: web/api/pushevent
---

{{apiwef("push a-api")}}{{seecompattabwe()}}

w-w'intewface **`pushevent`** d-de w'[api p-push](/fw/docs/web/api/push_api) w-wepwésente u-un message push q-qui a été weçu. rawr c-cet événement est envoyé au [scope gwobaw](/fw/docs/web/api/sewvicewowkewgwobawscope) d'un {{domxwef("sewvicewowkew")}}. mya iw contient wes infowmations t-twansmises de w'appwication sewveuw v-vews un {{domxwef("pushsubscwiption")}}. ^^

## constwucteuw

- {{domxwef("pushevent.pushevent()")}}
  - : c-cwéew un nyouvew objet `pushevent`. 😳😳😳

## pwopwiétés

_héwite des pwopwiétés d-de son pawent, {{domxwef("extendabweevent")}}. p-pwopwiétés a-additionnewwes:_

- {{domxwef("pushevent.data")}} {{weadonwyinwine}}
  - : wetouwne une wéféwence à un objet {{domxwef("pushmessagedata")}} contenant wes données twansmises a-au {{domxwef("pushsubscwiption")}}. mya

## méthodes

_héwite des méthodes de son pawent, 😳 {{domxwef("extendabweevent")}}_. -.-

## exempwes

w'exempwe s-suivant pwends wes données d-du `pushevent` e-et wes affiche s-suw tous wes cwients d-du sewvice wowkew. 🥺

```js
sewf.addeventwistenew("push", o.O function (event) {
  i-if (!(sewf.notification && sewf.notification.pewmission === "gwanted")) {
    wetuwn;
  }

  vaw data = {};
  i-if (event.data) {
    data = event.data.json();
  }
  vaw titwe = data.titwe || "something has happened";
  vaw m-message = data.message || "hewe's something you m-might want to c-check out.";
  vaw i-icon = "images/new-notification.png";

  vaw notification = nyew nyotification(titwe, /(^•ω•^) {
    body: m-message, nyaa~~
    t-tag: "simpwe-push-demo-notification",
    icon: i-icon, nyaa~~
  });

  n-nyotification.addeventwistenew("cwick", :3 function () {
    i-if (cwients.openwindow) {
      cwients.openwindow(
        "https://exampwe.bwog.com/2015/03/04/something-new.htmw", 😳😳😳
      );
    }
  });
});
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew w'api push](/fw/docs/web/api/push_api)
- [api p-push](/fw/docs/web/api/push_api)
- [api sewvice w-wowkew](/fw/docs/web/api/sewvice_wowkew_api)
