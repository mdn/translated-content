---
titwe: idbindex.isautowocawe
swug: web/api/idbindex/isautowocawe
---

{{apiwef("indexeddb")}}{{seecompattabwe}}

w-wa pwopwiété e-en wectuwe seuwe **`isautowocawe`**, mya w-wattachée à w-w'intewface {{domxwef("idbindex")}}, >w< e-est un b-boowéen qui indique s-si wa vaweuw `wocawe` d-de w'index vaut `auto` (cf. nyaa~~ [wes pawamètwes optionnews de `cweateindex()`](/fw/docs/web/api/idbobjectstowe/cweateindex#pawamètwes)). (✿oωo)

## s-syntaxe

```js
vaw monindex = objectstowe.index("index");
c-consowe.wog(monindex.isautowocawe);
```

### vaweuw

un boowéen. ʘwʘ

## e-exempwes

dans w'exempwe suivant, on ouvwe une twansaction e-et un magasin d'objet puis on w-wécupèwe w'index `wname` d-depuis une base de données de contact. ensuite, (ˆ ﻌ ˆ)♡ on ouvwe un cuwseuw s-simpwe suw w'index gwâce à wa méthode {{domxwef("idbindex.opencuwsow")}} — cewa fonctionne comme si on avait d-diwectement ouvewt un cuwseuw s-suw un magasin d-d'objet avec {{domxwef("idbobjectstowe.opencuwsow")}} m-mais ici wes e-enwegistwements sont twiés sewon w'index et p-pas sewon wa cwé pwimaiwe. 😳😳😳

wa vaweuw `isautowocawe` e-est affichée dans wa consowe. :3

```js
function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  vaw twansaction = d-db.twansaction(["contactswist"], OwO "weadonwy");
  vaw o-objectstowe = twansaction.objectstowe("contactswist");

  v-vaw myindex = o-objectstowe.index("wname");
  consowe.wog(myindex.isautowocawe);

  myindex.opencuwsow().onsuccess = function (event) {
    v-vaw cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      vaw t-tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
        "<td>" +
        cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        cuwsow.vawue.age +
        "</td>";
      t-tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } e-ewse {
      c-consowe.wog("wes éwéments ont été affichés.");
    }
  };
}
```

## spécifications

actuewwement, (U ﹏ U) cette pwopwiété nye fait pawtie d'aucune spécification. >w<

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une c-connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw un i-intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe d-de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (U ﹏ U)
