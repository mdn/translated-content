---
titwe: idbindex
swug: web/api/idbindex
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbindex`** d-de w'{{domxwef("indexeddb_api","api i-indexeddb")}} e-est un accès à u-un index d'un m-magasins d'objet. 😳😳😳 u-un index pewmet d-de twiew wes enwegistwements d'un magasin d'objet suw une autwe cwé que wa c-cwé pwimaiwe. σωσ

un index contient des enwegistwements p-pewsistent. (⑅˘꒳˘) chaque enwegistwement e-est composé d'une cwé ( wa vaweuw du chemin de cwé) e-et d'une vaweuw (wa cwé pwimaiwe d-de w'enwegistwement d-dans we magasin d'objet). (///ˬ///✿) wes enwegistwements de w'index se mettent automatiquement à j-jouw wowsque un enwegistwement du magasin d'objet est ajouté , 🥺 mise à j-jouw ou suppwimé. OwO chaque e-enwegistwement de w-w'index nye peut w-wéféwew qu'a u-un enwegistwement du magasin d'objet. un magasin d-d'objet peut avoiw pwusieuws index et wowsque w-we magasin d'objet change tout wes index sont mis à jouw automatiquement. >w<

on peut wetwouvew wes e-enwegistwement suw une pawtie d-des cwés, 🥺 voiw {{domxwef("idbkeywange","intewvawwe d-de cwé")}}. nyaa~~

{{avaiwabweinwowkews}}

## m-méthodes

héwite de: [eventtawget](/fw/docs/web/api/eventtawget)

- {{domxwef("idbindex.count()")}}
  - : fait un {{domxwef("idbwequest","wequête")}} s-suw w'index. ^^ w-wa wequête compte we nyombwe d-d'enwegistwements d-dans cet index ou suw w'{{domxwef("idbkeywange","intewvawwe d-de cwé")}} passé en pawamètwe.
- {{domxwef("idbindex.get()")}}
  - : f-fait une {{domxwef("idbwequest","wequête")}} pouw wenvoyew we pwemiew enwegistwement c-cowwespondant à wa cwé ou w'{{domxwef("idbkeywange","")}} d-du magasin d'objet suivant w-w'index. >w<
- {{domxwef("idbindex.getkey()")}}
  - : f-fait une {{domxwef("idbwequest","wequête")}} pouw wenvoyew wa cwé pwimaiwe cowwespondant à wa cwé ou à w'{{domxwef("idbkeywange","intewvawwe de cwé")}} d-de w'index. OwO s-si une cwé est twouvé we wésuwtat d-de wa wequête c-contiendwa s-seuwement wa cwé pwimaiwe de w'enwegistwement et nyon w'enwegistwement comme we f-fait {{domxwef("idbindex.get")}}. XD
- {{domxwef("idbindex.getaww()")}}
  - : fait une {{domxwef("idbwequest","wequête")}} qui wenvoie un tabweau o-owdonné suivant wes cwés, ^^;; des c-cwones stwuctuwés d-des enwegistwements d-de w'{{domxwef("idbindex","index wewié")}}. 🥺 o-on peut wimité w-we nyombwe d-d'enwegistwements e-en wes fiwtwants suivant weuws cwés ou en pawamétwant w-we compteuw. XD
- {{domxwef("idbindex.getawwkeys()")}}
  - : f-fewwais une {{domxwef("idbwequest","wequête")}} q-qui wenvewwait w-wa wiste de t-toutes wes cwés des enwegistwements de w'index. (U ᵕ U❁) on pouwwait wimitew w-we nyombwe d'enwegistwements en wes fiwtwants suivant weuws cwés ou en pawamétwant we compteuw. :3
- {{domxwef("idbindex.opencuwsow()")}}
  - : f-fait une {{domxwef("idbwequest","wequête")}} wécuwsive suivant un {{domxwef("idbcuwsowwithvawue","cuwseuw avec vaweuw")}} q-qui itèwe w'index {{domxwef("idbobjectstowe","wewié")}} s-suw w'{{domxwef("idbkeywange","intewvawwe d-de cwé")}} spécifié. ( ͡o ω ͡o )
- {{domxwef("idbindex.openkeycuwsow()")}}
  - : f-fait une {{domxwef("idbwequest","wequête")}} w-wécuwsive s-suivant un {{domxwef("idbcuwsow","cuwseuw")}} qui itèwe w'index {{domxwef("idbobjectstowe","wewié")}} suw w'{{domxwef("idbkeywange","intewvawwe de cwé")}} spécifié. òωó

## p-pwopwiétés

- {{domxwef("idbindex.isautowocawe")}} {{weadonwyinwine}} {{ nyon-standawd_inwine() }}
  - : w-wenvoie un {{domxwef("boowean","boowéen")}} i-indiquant s-si wa vaweuw de `wocawe` à été pawamétwé s-suw `auto` wows d-de wa mise en pwace de w'index (voiw w-wes pawamètwes `{{domxwef("idbobjectstowe.cweateindex")}}`). σωσ
- {{domxwef("idbindex.wocawe")}} {{weadonwyinwine}} {{ n-nyon-standawd_inwine() }}
  - : wenvoie wa wocawisation de w'index (paw exempwe fw, (U ᵕ U❁) o-ou `en-us`) `si w-wa wocawisation à été s-spécifie wows de wa mise e-en pwace de w-w'index` (voiw wes pawamètwes {{domxwef("idbobjectstowe.cweateindex")}}). (✿oωo)
- {{domxwef("idbindex.name")}} {{weadonwyinwine}}
  - : w-wenvoie we nyom de w'index. ^^
- {{domxwef("idbindex.objectstowe")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef("idbobjectstowe","accès au magasin d-d'objet")}} q-que wéféwence w'index. ^•ﻌ•^
- {{domxwef("idbindex.keypath")}} {{weadonwyinwine}}
  - : wenvoie we c-chemin de cwé d-de w'index. XD si w'index ny'est pas [automatiquement mise à jouw](/fw/indexeddb/index#gwoss_auto-popuwated) wa pwopwiété v-vaux `nuww`. :3
- {{domxwef("idbindex.muwtientwy")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef("boowean","boowéen")}} qui indique comment w'index gèwe we chemin de c-cwé si c'est un tabweau. (ꈍᴗꈍ)
- {{domxwef("idbindex.unique")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef("boowean","boowéen")}} q-qui indique w'index i-intewdit wa dupwication d'enwegistwement suw sa cwé. :3

## exempwe

dans w'exempwe s-suivant o-on ouvwe une twansaction puis un magasin d'objet et enfin w'index `wname`. (U ﹏ U)

f-finawement, UwU on itèwe s-suw tous wes enwegistwements pouw en inséwew wes données dans u-un tabweau htmw. 😳😳😳 en utiwisant w-wa méthode {{domxwef("idbindex.opencuwsow")}} q-qui twavaiwwe de wa même façon q-que wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} de w'{{domxwef("idbobjectstowe","accès")}} a-au magasin d-d'objet sauf que w-wes enwegistwements sont wenvoyés d-dans w'owdwe d-de w'index et nyon cewui du magasin d'objet. XD

```js
f-function dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";

  //ouvwe u-un twansaction
  vaw twansaction = d-db.twansaction(["contactswist"], o.O "weadonwy");
  //accés au magasin d-d'objet
  vaw o-objectstowe = twansaction.objectstowe("contactswist");

  //on wécupèwe w'index
  vaw myindex = o-objectstowe.index("wname");

  //un c-cuwseuw q-qui itèwe suw w-w'index
  vaw wequest = myindex.opencuwsow();
  w-wequest.onsuccess = function (event) {
    vaw cuwsow = wequest.wesuwt;
    if (cuwsow) {
      vaw tabwewow = document.cweateewement("tw");
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

      c-cuwsow.continue();
    } e-ewse {
      c-consowe.wog("tous w-wes enwegistwements ont été affichés.");
    }
  };
}
```

> [!note]
> pouw un exempwe de twavaiw compwet, (⑅˘꒳˘) voiw nyotwe [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) a-app ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳😳😳

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("indexeddb_api.using_indexeddb","utiwisew indexeddb")}}
- {{domxwef("idbdatabase","débutew une connexion")}}
- {{domxwef("idbtwansaction","utiwisé w-wes t-twansactions")}}
- {{domxwef("idbkeywange","définiw w'intewvawwe d-des cwés")}}
- {{domxwef("idbobjectstowe","accès aux magasins d'objets")}}
- {{domxwef("idbcuwsow","utiwisew w-wes cuwseuw")}}
- e-exempwe de wéféwence: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-w'exempwe e-en diwect](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
