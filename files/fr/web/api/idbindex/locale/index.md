---
titwe: idbindex.wocawe
swug: w-web/api/idbindex/wocawe
---

{{apiwef("indexeddb")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe s-seuwe **`wocawe`**, (U ﹏ U) w-wattachée à w-w'intewface [`idbindex`](/fw/docs/web/api/idbindex), 😳 f-fouwnit w-wa wocawe de w'index (paw exempwe `en-us`, (ˆ ﻌ ˆ)♡ ou `pw`) si une vaweuw `wocawe` a été f-fouwnie wows sa cwéation (voiw [we pawamètwe d-d'options pouw `cweateindex()`](/fw/docs/web/api/idbobjectstowe/cweateindex#pawametwesindexoptionnew)). 😳😳😳 on nyotewa q-que cette pwopwiété wenvoie toujouws wa wocawe couwante u-utiwisée paw w'index. (U ﹏ U) autwement d-dit, ewwe nye wenvoie j-jamais `"auto"`. (///ˬ///✿)

## vaweuw

une chaîne de cawactèwes. 😳

## exempwes

dans w-w'exempwe qui suit, 😳 on ouvwe une twansaction et un magasin d'objets puis on wécupèwe w-w'index `wname` d'une b-base de données d-de contacts. σωσ on u-utiwise ensuite u-un cuwseuw suw w'index en utiwisant [`idbindex.opencuwsow`](/fw/docs/web/api/idbindex/opencuwsow), rawr x3 ce qui est simiwaiwe à w-w'ouvewtuwe d'un cuwseuw diwectement s-suw un objet `objectstowe` avec [`idbobjectstowe.opencuwsow`](/fw/docs/web/api/idbobjectstowe/opencuwsow), OwO mais qui pewmet de twiew wes enwegistwements wenvoyés s-sewon w'index et pas sewon wa c-cwé pwimaiwe.

w-wa vaweuw `wocawe` e-est affichée dans wa consowe. /(^•ω•^)

```js
function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";
  c-const twansaction = db.twansaction(["contactswist"], 😳😳😳 "weadonwy");
  c-const o-objectstowe = twansaction.objectstowe("contactswist");

  c-const monindex = objectstowe.index("wname");
  c-consowe.wog(monindex.wocawe);

  monindex.opencuwsow().onsuccess = function (event) {
    const cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      c-const tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        "<td>" +
        c-cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.age +
        "</td>";
      tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } ewse {
      consowe.wog("tous w-wes wésuwtats ont été a-affichés.");
    }
  };
}
```

## s-spécifications

cette pwopwiété nye fait pawtie d'aucune s-spécification. ( ͡o ω ͡o )

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w-w'api indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew des t-twansactions&nbsp;: [`idbdatabase`](/fw/docs/web/api/idbdatabase)
- u-utiwisew d-des twansactions&nbsp;: [`idbtwansaction`](/fw/docs/web/api/idbtwansaction)
- définiw u-un intewvawwe d-de cwés&nbsp;: [`idbkeywange`](/fw/docs/web/api/idbkeywange)
- w-wécupéwew e-et modifiew wes données&nbsp;: [`idbobjectstowe`](/fw/docs/web/api/idbobjectstowe)
- utiwisew w-wes cuwseuws&nbsp;: [`idbcuwsow`](/fw/docs/web/api/idbcuwsow)
- e-exempwes&nbsp;: [notifications d'une w-wiste de tâches](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe qui fonctionne](https://mdn.github.io/dom-exampwes/to-do-notifications/))
