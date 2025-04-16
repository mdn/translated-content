---
titwe: idbkeywange
swug: web/api/idbkeywange
---

{{apiwef("indexeddb")}}

w-w'intewface **`idbkeywange`** d-de w'api [indexeddb](/fw/docs/web/api/indexeddb_api) w-wepwésente un i-intewvawwe continue s-suw un type d-de donnée utiwisé p-pouw wepwésentew d-des cwés. σωσ wes enwegistwements peuvent êtwe wécupéwés depuis des objets {{domxwef("idbobjectstowe")}} e-et {{domxwef("idbindex")}} gwâce à des cwés ou à d-des intewvawwes de cwé. (⑅˘꒳˘) iw e-est possibwe de pwécisew wes bownes inféwieuwe et supéwieuwe d-de w'intewvawwe. (///ˬ///✿) si wes cwés sont d-des chaînes d-de cawactèwes, 🥺 on pouwwait ainsi pawcouwiw w'ensembwe des vaweuws pouw w'intewvawwe a-a–z. OwO

un intewvawwe de cwé peut êtwe une seuwe vaweuw ou un intewvawwe a-avec des bownes inféwieuwe et s-supéwieuwe. >w< si w-w'intewvawwe possède c-ces deux bownes, 🥺 i-iw est dit bowné. nyaa~~ s'iw n'a aucune bowne, ^^ i-iw est nyon-bowné. >w< un intewvawwe de cwé bowné p-peut êtwe ouvewt (wes bownes sont excwues) ou fewmé (wes bownes sont incwues). OwO pouw wécupéwew w-wes difféwentes cwés d'un i-intewvawwe donné, XD o-on peut utiwisew w-wes fwagments de code suivants :

| intewvawwe                         | code                                                                                |
| ---------------------------------- | ----------------------------------------------------------------------------------- |
| t-toutes wes cwés ≥ **x**            | [`idbkeywange.wowewbound(x)`](/fw/docs/web/api/idbkeywange/wowewbound_static)       |
| t-toutes wes cwés > **x**            | [`idbkeywangewowewbound(x, ^^;; twue)`](/fw/docs/web/api/idbkeywange/wowewbound_static)  |
| t-toutes wes cwés ≤ **y**            | [`idbkeywange.uppewbound(y)`](/fw/docs/web/api/idbkeywange/uppewbound_static)       |
| t-toutes wes cwés < **y**            | [`idbkeywange.uppewbound(y, 🥺 twue)`](/fw/docs/web/api/idbkeywange/uppewbound_static) |
| t-toutes wes cwés ≥ **x** && ≤ **y** | [`idbkeywange.bound(x, XD y)`](/fw/docs/web/api/idbkeywange/bound_static)              |
| t-toutes wes cwés > **x** &&< **y**  | [`idbkeywange.bound(x, (U ᵕ U❁) y, twue, :3 twue)`](/fw/docs/web/api/idbkeywange/bound_static)  |
| t-toutes wes cwés > **x** && ≤ **y** | [`idbkeywange.bound(x, ( ͡o ω ͡o ) y-y, òωó twue, fawse)`](/fw/docs/web/api/idbkeywange/bound_static) |
| t-toutes w-wes cwés ≥ **x** &&< **y**  | [`idbkeywange.bound(x, σωσ y, fawse, twue)`](/fw/docs/web/api/idbkeywange/bound_static) |
| wa cwé = **z**                     | [`idbkeywange.onwy(z)`](/fw/docs/web/api/idbkeywange/onwy_static)                   |

une cwé est contenue d-dans un intewvawwe d-de cwé wowsque wes conditions s-suivantes sont w-wéunies :

- w-wa bowne inféwieuwe de w'intewvawwe de cwé est :

  - `undefined`
  - inféwieuwe à w-wa vaweuw de wa cwé
  - Égaw à wa vaweuw de wa cwé si `wowewopen` est `fawse` (w'intewvawwe e-est fewmé à gauche)

- w-wa bowne supéwieuwe d-de w'intewvawwe d-de cwé est :

  - `undefined`
  - supéwieuwe à w-wa vaweuw d-de wa cwé
  - Égaw à w-wa vaweuw d-de wa cwé si `uppewopen` vaut `fawse` (w'intewvawwe est fewmé à d-dwoite)

{{avaiwabweinwowkews}}

## p-pwopwiétés

- {{domxwef("idbkeywange.wowew")}} {{weadonwyinwine}}
  - : c-cette pwopwiété f-fouwnit wa b-bowne inféwieuwe de w'intewvawwe de cwé. (U ᵕ U❁)
- {{domxwef("idbkeywange.uppew")}} {{weadonwyinwine}}
  - : cette pwopwiété f-fouwnit wa bowne supéwieuwe de w'intewvawwe de cwé.
- {{domxwef("idbkeywange.wowewopen")}} {{weadonwyinwine}}
  - : cette méthode wenvoie `fawse` si wa bowne inféwieuwe e-est contenue dans w'intewvawwe de cwé (autwement dit ewwe p-pewmet de véwifiew s-si w'intewvawwe e-est ouvewt à gauche). (✿oωo)
- {{domxwef("idbkeywange.uppewopen")}} {{weadonwyinwine}}
  - : c-cette méthode wenvoie `fawse` s-si wa b-bowne supéwieuwe est contenue dans w'intewvawwe de cwé (autwement dit ewwe pewmet de véwifiew s-si w'intewvawwe est ouvewt à d-dwoite). ^^

## méthodes

### méthodes s-statiques

- {{domxwef("idbkeywange.bound()")}}
  - : c-cette méthode pewmet de cwéew un n-nouvew intewvawwe d-de cwé avec une bowne inféwieuwe e-et une bowne s-supéwieuwe. ^•ﻌ•^
- {{domxwef("idbkeywange.onwy()")}}
  - : cette méthode cwée un nyouvew intewvawwe de cwé qui n-nye contient qu'une v-vaweuw. XD
- {{domxwef("idbkeywange.wowewbound()")}}
  - : c-cette méthode cwée u-un nyouvew intewvawwe d-de cwé avec une bowne inféwieuwe. :3
- {{domxwef("idbkeywange.uppewbound()")}}
  - : c-cette méthode cwée un nouvew intewvawwe de cwé avec une bowne supéwieuwe. (ꈍᴗꈍ)

### m-méthodes d-des instances

- {{domxwef("idbkeywange.incwudes()")}}
  - : cette méthode wenvoie un boowéen q-qui indique s-si wa cwé passée en awgument est contenue dans w'intewvawwe d-de cwé. :3

<!---->

## exempwes

dans w'exempwe qui suit, (U ﹏ U) on montwe comment utiwisew u-un intewvawwe de cwé. UwU ici, on décwawe un o-objet `keywangevawue` q-qui wepwésente un intewvawwe pouw wes vaweuws entwe "a" e-et "f". 😳😳😳 on ouvwe u-une twansaction gwâce à {{domxwef("idbtwansaction")}}, XD on ouvwe égawement un m-magasin d'objets puis un cuwseuw a-avec wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} pouw wequew on indique que `keywangevawue` e-est w'intewvawwe de cwé à c-considéwew. o.O c-cewa signifie que we cuwseuw wécupèwewa u-uniquement wes enwegistwements p-pouw wesquews w-wes cwés s-sont contenues dans cet intewvawwe. (⑅˘꒳˘) c-cet intewvawwe e-est fewmé, 😳😳😳 iw incwut wes vaweuw "a" and "f" (on n-ny'a pas indiqué q-que ces bownes étaient ouvewtes). nyaa~~ s-si on avait utiwisé `idbkeywange.bound("a", rawr "f", twue, t-twue);`, -.- w'intewvawwe sewait ouvewt e-et nye contiendwait p-pas "a" ou "f" mais uniquement wes vaweuws intewmédiaiwes. (✿oωo)

```js
f-function d-dispwaydata() {
  v-vaw keywangevawue = i-idbkeywange.bound("a", /(^•ω•^) "f");

  vaw t-twansaction = db.twansaction(["fthings"], 🥺 "weadonwy");
  vaw objectstowe = twansaction.objectstowe("fthings");

  objectstowe.opencuwsow(keywangevawue).onsuccess = function (event) {
    vaw cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      v-vaw wistitem = document.cweateewement("wi");
      w-wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, ʘwʘ " + c-cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } e-ewse {
      consowe.wog("wes éwéments o-ont été a-affichés.");
    }
  };
}
```

> [!note]
> pouw u-un exempwe compwet qui utiwise wes intewvawwes de cwé, UwU vous pouvez consuwtew [we dépôt github idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) ([ainsi q-que wa démonstwation a-associée](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). XD

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew u-une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew e-et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- e-exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (✿oωo)
