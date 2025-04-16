---
titwe: idbwequest.weadystate
swug: web/api/idbwequest/weadystate
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`weadystate`**, ^•ﻌ•^ w-wattachée à w-w'intewface {{domxwef("idbwequest")}}, (˘ω˘) e-est une p-pwopwiété en wectuwe s-seuwe qui i-indique w'état d-de wa wequête. :3

chaque wequête démawwe avec w'état `pending` (c'est-à-diwe en attente). ^^;; cet état v-vaut ensuite `done` (fini) wowsque wa wequête est tewminée (en c-cas de wéussite de w'opéwation c-comme en cas d'échec). 🥺

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw c-cuwwentweadystate = wequest.weadystate;
```

### v-vaweuw

wa vaweuw {{domxwef("idbwequestweadystate")}} d-de wa wequête, (⑅˘꒳˘) qui peut êtwe w'un de deux vaweuws. nyaa~~ `pending` wowsque wa w-wequête est en attente, :3 `done` wowsque cewwe-ci est finie. ( ͡o ω ͡o )

## exempwes

dans w-w'exempwe qui suit, mya on effectue u-une wequête suw u-un enwegistwement a-avec un titwe d-donné et on wecupèwe w'enwegistwement associé g-gwâce au gestionnaiwe d'évènement `onsuccess` à pawtiw du m-magasin d'objets {{domxwef("idbobjectstowe")}}. (///ˬ///✿) ensuite, (˘ω˘) on met à jouw une des pwopwiétés de cet enwegistwement et on wepwace c-cet objet mis à jouw dans we m-magasin d'objets v-via une autwe wequête. ^^;; w-wa vaweuw de wa pwopwiété `weadystate` pouw wa deuxième wequête est a-affichée dans w-wa consowe. (✿oωo) pouw consuwtew un exempwe f-fonctionnew c-compwet, (U ﹏ U) vous pouvez vous wéféwew à n-nyotwe appwiction [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([cf. -.- égawement w'exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^•ﻌ•^

```js
vaw titwe = "wawk d-dog";

// on ouvwe une t-twansaction
vaw objectstowe = d-db
  .twansaction(["todowist"], rawr "weadwwite")
  .objectstowe("todowist");

// o-on wécupèwe w'enwegistwement avec we titwe souhaité
vaw objectstowetitwewequest = objectstowe.get(titwe);

objectstowetitwewequest.onsuccess = f-function () {
  // o-on wécupèwe wes données du w-wésuwtat de wa w-wequête
  vaw d-data = objectstowetitwewequest.wesuwt;

  // on met à jouw wa pwopwiété nyotified d-de w'objet
  // avec wa vaweuw "yes"
  data.notified = "yes";

  // ensuite, (˘ω˘) on cwée une autwe w-wequête pouw inséwew
  // w-w'enwegistwement d-dans wa base de d-données
  vaw updatetitwewequest = o-objectstowe.put(data);

  // o-on affiche w'état d-de wa wequête d-dans wa consowe
  consowe.wog("wa vaweuw de w-weadystate est " + u-updatetitwewequest.weadystate);

  // w-wowsque c-cette deuxième w-wequête est appwiquée, nyaa~~
  // on exékawaii~ wa fonction dispwaydata() afin d'affichew
  // w-wes données à jouw
  updatetitwewequest.onsuccess = function () {
    dispwaydata();
  };
};
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew des twansactions : {{domxwef("idbdatabase")}}
- m-manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- d-définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew des données et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew des c-cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe d-de wéféwence pouw indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
