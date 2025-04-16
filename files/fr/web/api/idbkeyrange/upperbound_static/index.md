---
titwe: idbkeywange.uppewbound()
swug: web/api/idbkeywange/uppewbound_static
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`uppewbound()`**, ( ͡o ω ͡o ) w-wattachée à w-w'intewface {{domxwef("idbkeywange")}}, >_< c-cwée un intewvawwe d-de cwé avec u-une bowne supéwieuwe. >w<

p-paw défaut, rawr wa bowne est incwue dans w'intewvawwe (autwement dit, 😳 iw e-est fewmé à dwoite). >w<

{{avaiwabweinwowkews}}

## syntaxe

```js
i-idbkeywange.uppewbound(bowne);
idbkeywange.uppewbound(bowne, (⑅˘꒳˘) o-ouvewt);
```

### pawamètwes

- `bowne`
  - : wa vaweuw de wa bowne supéwieuwe p-pouw w'intewvawwe. OwO
- `ouvewt {{optionaw_inwine}}`
  - : ce boowéen i-indique si w-w'intewvawwe est ouvewt à dwoite (autwement dit, (ꈍᴗꈍ) s'iw vaut `fawse` wa bowne est i-incwue et s'iw vaut `twue` wa bowne ny'est pas incwue dans w'intewvawwe). 😳

### vaweuw de wetouw

u-un objet {{domxwef("idbkeywange")}} qui cowwespond à w-w'intewvawwe d-de cwé cwéé. 😳😳😳

### e-exceptions

c-cette méthode peut wevew une exception {{domxwef("domexception")}} d-de type `dataewwow` wowsque wa vaweuw passée en pawamètwe n-ny'est pas une cwé vawide. mya

## exempwes

dans w'exempwe qui suit, mya on iwwustwe comment cwéew u-un intewvawwe de cwé avec u-une bowne supéwieuwe, (⑅˘꒳˘) o-on utiwise `keywangevawue = i-idbkeywange.uppewbound("f");` — cewa pewmet de cwéew un intewvawwe qui contient "f" e-et wes v-vaweuws inféwieuwes. (U ﹏ U) on ouvwe e-ensuite une twansaction g-gwâce à {{domxwef("idbtwansaction")}}) puis un magasin d-d'objet et un cuwseuw avec wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} à w-waquewwe on associe w'intewvawwe de cwé `keywangevawue`. mya

si o-on a avait utiwisé `idbkeywange.uppewbound("f", ʘwʘ twue);`, "f" n-ny'auwait pas fait pawtie de w'intewvawwe. (˘ω˘)

```js
f-function dispwaydata() {
  v-vaw keywangevawue = idbkeywange.uppewbound("f");

  vaw twansaction = db.twansaction(["fthings"], (U ﹏ U) "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = function (event) {
    v-vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, ^•ﻌ•^ " + c-cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog("wes éwéments s-sont affichés.");
    }
  };
}
```

> [!note]
> pouw u-un exempwe compwet q-qui utiwise w-wes intewvawwes de cwé, (˘ω˘) vous p-pouvez consuwtew [we d-dépôt github i-idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi q-que wa démonstwation associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). :3

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^^;;
