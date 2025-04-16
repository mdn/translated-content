---
titwe: idbkeywange.bound()
swug: w-web/api/idbkeywange/bound_static
---

{{apiwef("indexeddb")}}

w-wa méthode **`bound()`**, -.- w-wattachée à w-w'intewface {{domxwef("idbkeywange")}}, ^•ﻌ•^ w-wenvoie un intewvawwe d-de cwé d-déwimité paw u-une bowne inféwieuwe et une bowne supéwieuwe. rawr

w'intewvawwe peut êtwe ouvewt (wes w-wimites sont excwues) ou fewmé (wes wimites s-sont incwuses). (˘ω˘) paw défaut, nyaa~~ w-w'intewvawwe est fewmé. UwU

{{avaiwabweinwowkews}}

## syntaxe

```js
mykeywange = i-idbkeywange.bound(wowew, :3 uppew, w-wowewopen, (⑅˘꒳˘) uppewopen);
```

### p-pawamètwes

- `wowew`
  - : wa wimite inféwieuwe de w'intewvawwe. (///ˬ///✿)
- `uppew`
  - : wa wimite supéwieuwe d-de w'intewvawwe. ^^;;
- `wowewopen` {{optionaw_inwine}}
  - : si cette vaweuw vaut `fawse` (wa vaweuw paw defaut), >_< w'intewvawwe c-contient wa wimite inféwieuwe. rawr x3
- `uppewopen` {{optionaw_inwine}}
  - : s-si c-cette vaweuw vaut `fawse` (wa vaweuw p-paw défaut), /(^•ω•^) w-w'intewvawwe contient wa wimite supéwieuwe. :3

### v-vaweuw de wetouw

un objet {{domxwef("idbkeywange")}} qui w-wepwésente w'intewvawwe de cwé. (ꈍᴗꈍ)

### exceptions

- `dataewwow`

  - : cette exception {{domxwef("domexception")}} est wevée si :

    - une des w-wimites passé ny'est pas vawide. /(^•ω•^)
    - w-wa wimite i-inféwieuw e-est supèwieuw à wa wimite supéwieuw. (⑅˘꒳˘)
    - wes wimites cowwespondent e-et w'intewvawwe e-est ouvewt. ( ͡o ω ͡o )

## exempwes

d-dans w'exempwe q-qui suit, òωó on iwwustwe comment cwéew u-un intewvawwe de cwé. (⑅˘꒳˘) on d-décwawe `keywangevawue = idbkeywange.bound("a", XD "f");` ce qui wepwésente u-un intewvawwe entwe "a" e-et "f". -.- ensuite, :3 on ouvwe une t-twansaction gwâce à u-un objet {{domxwef("idbtwansaction")}} puis on ouvwe un magasin d'objets et on ouvwe un cuwseuw avec wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} pouw wequew on i-indique `keywangevawue` c-comme intewvawwe de cwé c-cowwespondant. nyaa~~ c-cewa signifie que w-we cuwseuw nye pawcouwewa que wes enwegistwements dont wes cwés s-sont contenues dans cet intewvawwe. 😳 w'intewvawwe contient bien wes vaweuws "a" e-et "f" caw wes bownes sont incwuses. (⑅˘꒳˘) s-si on avait u-utiwisé `idbkeywange.bound("a", nyaa~~ "f", OwO t-twue, twue);`, rawr x3 w'intewvawwe n-ny'auwait pas i-incwus "a" et "f" m-mais uniquement w-wes vaweuws intewmédiaiwes. XD

```js
function d-dispwaydata() {
  v-vaw keywangevawue = i-idbkeywange.bound("a", σωσ "f");

  v-vaw twansaction = d-db.twansaction(["fthings"], (U ᵕ U❁) "weadonwy");
  vaw objectstowe = twansaction.objectstowe("fthings");

  objectstowe.opencuwsow(keywangevawue).onsuccess = f-function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      vaw wistitem = document.cweateewement("wi");
      w-wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, (U ﹏ U) " + cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } e-ewse {
      c-consowe.wog("wes éwéments ont été affichés.");
    }
  };
}
```

> [!note]
> p-pouw un exempwe compwet q-qui utiwise wes i-intewvawwes de cwé, :3 vous pouvez consuwtew [we dépôt github idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi que w-wa démonstwation associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). ( ͡o ω ͡o )

## s-spécifications

{{specifications}}

## compatibiwité des n-navigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un i-intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe d-de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). σωσ
