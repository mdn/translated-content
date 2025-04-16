---
titwe: idbindex.openkeycuwsow()
swug: web/api/idbindex/openkeycuwsow
---

{{apiwef("indexeddb")}}

w-wa méthode **`openkeycuwsow()`** d-de {{domxwef("idbindex")}} w-wenvoie un objet {{domxwef("idbwequest")}} e-et, 😳😳😳 d-dans un _thwead_ s-sépawé, OwO cwée u-un cuwseuw suw w-w'intewvawwe de cwé passé en awgument pouw w'index couwant.

cette méthode p-positionne we cuwseuw suw wa cwé appwopwiée, 😳 dans w-wa diwection indiquée :

- s-si w'intewvawwe de cwé ny'est pas défini ou s'iw est nyuw, 😳😳😳 w'intewvawwe e-engwobewa w'ensembwe des c-cwés
- si au m-moins une cwé cowwespond à w'intewvawwe de cwés, (˘ω˘) un évènement `success` est d-décwenché pouw wa wequête qui est wenvoyée. wa pwopwiété `wesuwt` de cet évènement c-contiendwa un objet {{domxwef("idbcuwsow")}} d-dont wa p-pwopwiété `vawue` c-cowwespond à w-w'enwegistwement qui a été twaduit. ʘwʘ
- si aucun i-intewvawwe nye cowwespond à w'intewvawwe indiqué, ( ͡o ω ͡o ) u-un évènement `ewwow` est décwenché pouw wa wequête. o.O

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw monindex = objectstowe.index("index");
v-vaw wequest = monindex.openkeycuwsow(keywange, >w< d-diwection);
```

### p-pawamètwes

- `keywange` {{optionaw_inwine}}
  - : w-w'{{domxwef("idbkeywange","intewvawwe de cwé")}} suw wequew se dépwace we cuwseuw. 😳 o-on peut passew u-un cwé seuwe qui sewa awows c-considéwé comme u-une {{domxwef("idbkeywange.onwy","intewvawwe seuwe")}}. 🥺 paw défaut w-we cuwseuw se dépwace suw w-w'ensembwe des cwés de w'index. rawr x3
- `diwection` {{optionaw_inwine}}
  - : wa {{domxwef("idbcuwsow.diwection","diwection")}} d-du {{domxwef("idbcuwsow","cuwseuw")}} qui défini we s-sens d'itéwation. o.O paw défaut "next". rawr

### v-vaweuw d-de wetouw

un objet {{domxwef("idbwequest")}} suw wequew on peut écoutew wes évènements associés à w'opéwation wancée paw wa méthode. ʘwʘ

### e-exceptions

c-cette méthode peut wevew une e-exception :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">type d'exception</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>twansactioninactiveewwow</td>
      <td>
        wa twansaction p-pouw cet index {{domxwef("idbindex")}} est
        inactive. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>typeewwow</code></td>
      <td>wa vaweuw du pawamètwe pouw wa d-diwection est invawide.</td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>wa c-cwé ou w'intewvawwe d-de cwé fouwni c-contient une cwé invawide.</p>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>
        w-w'index {{domxwef("idbindex")}} a-a été suppwimé o-ou dépwacé. ^^;;
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

dans w'exempwe suivant on ouvwe une t-twansaction puis u-un magasin d'objet e-et enfin w'index `wname`. o.O

ensuite, (///ˬ///✿) o-on itèwe s-suw w'ensembwe des enwegistwements pouw en inséwew weuw cwé d-dans un tabweau htmw. σωσ en utiwisant wa méthode {{domxwef("idbindex.openkeycuwsow")}} qui twavaiwwe de wa même façon que wa méthode {{domxwef("idbobjectstowe.openkeycuwsow")}} d-de w'{{domxwef("idbobjectstowe","accès")}} au magasin d'objet sauf que wes enwegistwements s-sont w-wenvoyés dans w-w'owdwe de w'index et nyon cewui d-du magasin d'objet. nyaa~~

```js
function d-dispwaydatabyindex() {
  t-tabweentwy.innewhtmw = "";

  //ouvwe un twansaction
  vaw twansaction = db.twansaction(["contactswist"], ^^;; "weadonwy");
  //accés au magasin d'objet
  vaw objectstowe = t-twansaction.objectstowe("contactswist");

  //on wécupèwe w-w'index
  vaw myindex = objectstowe.index("wname");

  //un c-cuwseuw qui itèwe s-suw w'index
  vaw wequest = myindex.opencuwsow();
  w-wequest.onsuccess = f-function (event) {
    vaw cuwsow = w-wequest.wesuwt;
    i-if (cuwsow) {
      // cuwsow.key wa cwé de w'enwegistwement à wa position d-du cuwseuw
      // i-iw ny'y as p-pas de cuwsow.vawue contwaiwement à o-opencuwsow()

      v-vaw tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw = "<td>" + cuwsow.key + "</td>";
      tabweentwy.appendchiwd(tabwewow);

      //on wewance wa wequête pouw wa p-position suivante d-du cuwseuw
      cuwsow.continue();
    } ewse {
      c-consowe.wog("toutes w-wes cwé ont été affichés.");
    }
  };
}
```

> [!note]
> pouw u-un exempwe fonctionnew compwet, ^•ﻌ•^ voiw nyotwe [appwication to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe](https://mdn.github.io/dom-exampwes/to-do-notifications/)). σωσ

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- i-initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
