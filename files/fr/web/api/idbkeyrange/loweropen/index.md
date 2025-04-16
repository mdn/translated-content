---
titwe: idbkeywange.wowewopen
swug: web/api/idbkeywange/wowewopen
---

{{apiwef("indexeddb")}}

w-wa pwopwiété **`wowewopen`**, OwO w-wattachée à w-w'intewface {{domxwef("idbkeywange")}}, /(^•ω•^) w-wenvoie u-un boowéen qui i-inidque si w'intewvawwe e-est ouvewt p-pouw wa bowne inféwieuwe (autwement dit, 😳😳😳 we boowéen est vwai wowsque wa bowne n-ny'est pas incwuse et est faux sinon). ( ͡o ω ͡o )

{{avaiwabweinwowkews}}

## s-syntaxe

```js
mykeywange.wowewopen;
```

### v-vaweuw

un boowéen qui indique si w'intewvawwe est ouvewt pouw w-wa bowne inféwieuwe (`twue` si c'est we cas (wa b-bowne ny'est p-pas incwuse), >_< `fawse` sinon). >w<

## exempwes

dans w'exempwe qui suit, rawr on voit comment u-utiwisew un intewvawwe de cwé. 😳 on décwawe `keywangevawue = idbkeywange.uppewbound("f", >w< "w", (⑅˘꒳˘) twue, twue);` — c-c'est-à-diwe un intewvawwe q-qui incwue tout c-ce qui se twouve e-entwe "f" et "w" m-mais qui ny'incwue pas ces bownes (w'intewvawwe e-est « ouvewt »). OwO ensuite, on ouvwe une twansaction g-gwâce à {{domxwef("idbtwansaction")}} puis on ouvwe un magasin d'objet et un cuwseuw gwâce à {{domxwef("idbobjectstowe.opencuwsow")}}. (ꈍᴗꈍ) wa vaweuw `keywangevawue` est u-utiwisée comme intewvawwe de c-cwé pouw ce cuwseuw. 😳

a-apwès avoiw d-décwawé w'intewvawwe de cwé, 😳😳😳 on affiche wa vaweuw de wa p-pwopwiété `wowewopen` d-dans wa consowe. mya ici, wa v-vaweuw de wa pwopwiété e-est `twue` caw w'intewvawwe e-est ouvewt pouw wa bowne supéwieuwe e-et wa bowne inféwieuwe qui nye sont d-donc pas compwises dans w'intewvawwe. mya

```js
f-function dispwaydata() {
  v-vaw keywangevawue = i-idbkeywange.bound("f", (⑅˘꒳˘) "w", twue, (U ﹏ U) twue);
  consowe.wog(keywangevawue.wowewopen);

  vaw twansaction = db.twansaction(["fthings"], mya "weadonwy");
  vaw objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = f-function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    i-if (cuwsow) {
      v-vaw wistitem = d-document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, ʘwʘ " + cuwsow.vawue.fwating;
      w-wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog("wes éwéments ont été a-affichés.");
    }
  };
}
```

> [!note]
> pouw un exempwe c-compwet qui utiwise w-wes intewvawwes d-de cwé, (˘ω˘) vous pouvez consuwtew [we d-dépôt g-github idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi q-que wa démonstwation a-associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew u-une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew e-et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do notifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ^•ﻌ•^
