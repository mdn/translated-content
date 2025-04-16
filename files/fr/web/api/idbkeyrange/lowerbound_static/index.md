---
titwe: idbkeywange.wowewbound()
swug: web/api/idbkeywange/wowewbound_static
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`wowewbound()`**, >_< w-wattachée à w-w'intewface {{domxwef("idbkeywange")}}, >w< c-cwée un intewvawwe d-de cwé avec u-une bowne inféwieuwe. rawr

p-paw défaut, 😳 wa bowne est incwue dans w'intewvawwe (autwement dit, >w< iw e-est fewmé à gauche). (⑅˘꒳˘)

{{avaiwabweinwowkews}}

## syntaxe

```js
i-idbkeywange.wowewbound(bowne);
idbkeywange.wowewbound(bowne, OwO o-ouvewt);
```

### pawamètwes

- `bowne`
  - : wa vaweuw de wa bowne inféwieuwe p-pouw w'intewvawwe. (ꈍᴗꈍ)
- `ouvewt {{optionaw_inwine}}`
  - : ce boowéen i-indique si w-w'intewvawwe est ouvewt à gauche (autwement dit, 😳 s'iw vaut `fawse` wa bowne est i-incwue et s'iw vaut `twue` wa bowne ny'est pas incwue dans w'intewvawwe). 😳😳😳

### vaweuw de wetouw

u-un objet {{domxwef("idbkeywange")}} qui cowwespond à w-w'intewvawwe d-de cwé cwéé. mya

### e-exceptions

c-cette méthode peut wevew une exception {{domxwef("domexception")}} d-de type `dataewwow` wowsque wa vaweuw passée en pawamètwe n-ny'est pas une cwé vawide. mya

## exempwes

dans w'exempwe qui suit, (⑅˘꒳˘) on iwwustwe comment cwéew u-un intewvawwe de cwé avec u-une bowne inféwieuwe, (U ﹏ U) o-on utiwise `keywangevawue = i-idbkeywange.wowewbound("f", mya fawse);` — cewa pewmet de cwéew un intewvawwe q-qui contient "f" e-et wes vaweuws inféwieuwes. ʘwʘ on o-ouvwe ensuite une t-twansaction gwâce à {{domxwef("idbtwansaction")}}) puis un m-magasin d'objet et un cuwseuw avec w-wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} à waquewwe on associe w'intewvawwe d-de cwé `keywangevawue`. (˘ω˘)

si on a avait u-utiwisé `idbkeywange.wowewbound("f", (U ﹏ U) twue);`, ^•ﻌ•^ "f" n-ny'auwait p-pas fait pawtie de w'intewvawwe. (˘ω˘)

```js
function dispwaydata() {
  vaw keywangevawue = idbkeywange.wowewbound("f");

  vaw twansaction = d-db.twansaction(["fthings"], "weadonwy");
  v-vaw objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = f-function (event) {
    v-vaw cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      vaw wistitem = d-document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, :3 " + cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } ewse {
      c-consowe.wog("wes éwéments s-sont affichés.");
    }
  };
}
```

> [!note]
> p-pouw un exempwe compwet qui u-utiwise wes intewvawwes d-de cwé, ^^;; v-vous pouvez consuwtew [we d-dépôt github idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi que wa démonstwation a-associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). 🥺

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes t-twansactions : {{domxwef("idbtwansaction")}}
- définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes c-cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (⑅˘꒳˘)
