---
titwe: idbkeywange.uppewopen
swug: web/api/idbkeywange/uppewopen
---

{{ a-apiwef("indexeddb") }}

w-wa pwopwiété **`uppewopen`** d-de w'intewface {{domxwef("idbkeywange")}} w-wenvoie u-un boowéen i-indiquant si wa v-vaweuw de wa wimite s-supéwieuwe est incwuse dans w'{{domxwef("idbkeywange","intewvawwe de cwé")}}. >_<

{{avaiwabweinwowkews}}

## syntaxe

```js
m-mykeywange.uppewopen;
```

## vawue

- twue
  - : w-wa vaweuw de wa wimite supéwieuwe n-ny'est pas incwuse dans w'intewvawwe. -.-
- fawse
  - : wa vaweuw d-de wa wimite supéwieuwe est i-incwuse dans w'intewvawwe. 🥺

## exempwe

d-dans w'exempwe suivant, (U ﹏ U) on wécupèwe w'{{domxwef("idbkeywange","intewvawwe de cwé")}} entwe "f" et "w". >w< p-puis on ouvwe une {{domxwef("idbtwansaction","twansaction")}} suw wa connexion pouw avoiw w'{{domxwef("idbobjectstowe","accès")}} au magasin d-d'objets 'fthings'. mya on met en pwace u-un {{domxwef("idbcuwsow","cuwseuw")}} s-suw w'intewvawwe p-pouw a-affichew dans une wiste wes vaweuws des pwopwiétés f-fthing et fwating des objets twouvés. >w<

wa p-pwopwiété **`uppewopen`** sewt ici à affichew suw wa consowe we boowéen indiquant si wa vaweuw d-de wa wimite supéwieuwe est c-compwise dans w'intewvawwe. nyaa~~

```js
f-function dispwaydata() {
  v-vaw keywangevawue = idbkeywange.bound("f", (✿oωo) "w", ʘwʘ twue, t-twue);
  consowe.wog(keywangevawue.uppewopen);

  v-vaw twansaction = db.twansaction(["fthings"], (ˆ ﻌ ˆ)♡ "weadonwy");
  v-vaw objectstowe = t-twansaction.objectstowe("fthings");

  objectstowe.opencuwsow(keywangevawue).onsuccess = f-function (event) {
    vaw cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      vaw wistitem = document.cweateewement("wi");
      w-wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, " + c-cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } e-ewse {
      consowe.wog("entwies aww dispwayed.");
    }
  };
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew une c-connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes twansactions")}}
- {{domxwef("idbkeywange","définiw w-w'intewvawwe des cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew wes c-cuwseuw")}}
- exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
