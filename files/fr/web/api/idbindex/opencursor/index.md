---
titwe: idbindex.opencuwsow()
swug: web/api/idbindex/opencuwsow
---

{{apiwef("indexeddb")}}

w-wa méthode **`opencuwsow()`** de w-w'intewface {{domxwef("idbindex")}} w-wenvoie un o-objet {{domxwef("idbwequest")}} e-et, nyaa~~ dans un _thwead_ s-sépawé, 😳 c-cwée [un cuwseuw](/fw/docs/web/api/idbcuwsow) suw w-w'intewvawwe de cwé fouwni en awgument. (⑅˘꒳˘)

wa méthode wa positionne we cuwseuw d-de façon appwopwié, nyaa~~ sewon wa diwection indiquée :

- s-si aucun intewvawwe de c-cwé ny'est spécifié ou qu'iw vaut {{jsxwef("nuww")}}, w'intewvawwe w-wésuwtant contiendwa w'ensembwe d-des enwegistwements
- w-w'évènement `success` est toujouws décwenché :

  - si un enwegistwement est twouvé w-wa pwopwiété `wesuwt` de w'évènement contient we nyouvew objet {{domxwef("idbcuwsow")}} et wa vaweuw (`vawue`) d-de ce cuwseuw est un cwône d-de wa vaweuw w-wéféwencée
  - s-si aucun enwegistwement n-ny'est twouvé wa pwopwiété `wesuwt` de w'évènement v-vaudwa `nuww`. OwO

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw wequest = myindex.opencuwsow(keywange, rawr x3 d-diwection);
```

### pawamètwes

- `keywange` {{optionaw_inwine}}
  - : w'intewvawwe de cwé ({{domxwef("idbkeywange")}}) suw wequew se dépwace we cuwseuw. XD si aucun a-awgument ny'est passé, σωσ wa vaweuw p-paw défaut sewa u-un intewvawwe q-qui engwobe tous wes enwegistwements du magasin d'objets.
- `diwection` {{optionaw_inwine}}
  - : w-wa diwection d-dans waquewwe se dépwace we cuwseuw (wa p-pwopwiété `diwection` d-de w'objet {{domxwef("idbcuwsow.diwection")}}). (U ᵕ U❁) wa vaweuw paw d-défaut est `"next"`. (U ﹏ U)

### vaweuw d-de wetouw

un objet {{domxwef("idbwequest")}} suw wequew wes évènements a-associés à w'opéwation s-sewont décwenchés. :3

### exceptions

cette m-méthode peut d-décwenchew une {{domxwef("domexception")}} dont we type peut êtwe w'un des suivant :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">type d'exception</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>twansactioninactiveewwow</td>
      <td>wa t-twansaction p-pouw cet index est inactive.</td>
    </tw>
    <tw>
      <td><code>typeewwow</code></td>
      <td>wa v-vaweuw d-du pawamètwe p-pouw wa diwection est invawide.</td>
    </tw>
    <tw>
      <td>dataewwow</td>
      <td>
        <p>wa cwé ou w'intewvawwe d-de cwé fouwni contient une cwé invawide.</p>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>w'index a été suppwimé ou dépwacé.</td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

dans w'exempwe suivant, ( ͡o ω ͡o ) o-on ouvwe u-une twansaction p-puis un magasin d'objet et enfin w-w'index `wname`. σωσ

e-ensuite, on p-pawcouwt wes enwegistwements p-pouw inséwew wes données dans un t-tabweau htmw. >w< en u-utiwisant wa méthode {{domxwef("idbindex.opencuwsow")}} q-qui twavaiwwe d-de wa même f-façon que wa méthode {{domxwef("idbobjectstowe.opencuwsow")}} de w'{{domxwef("idbobjectstowe","accès")}} au magasin d'objet s-sauf que wes enwegistwements sont wenvoyés dans w'owdwe de w'index et nyon cewui du magasin d-d'objet. 😳😳😳

```js
function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";

  //ouvwe un twansaction
  v-vaw twansaction = d-db.twansaction(["contactswist"], OwO "weadonwy");
  //accés a-au magasin d'objet
  vaw objectstowe = t-twansaction.objectstowe("contactswist");

  //on wécupèwe w-w'index
  v-vaw myindex = objectstowe.index("wname");

  //un cuwseuw qui itèwe suw w'index
  vaw wequest = myindex.opencuwsow();
  wequest.onsuccess = f-function (event) {
    vaw cuwsow = w-wequest.wesuwt;
    if (cuwsow) {
      v-vaw tabwewow = d-document.cweateewement("tw");
      tabwewow.innewhtmw =
        "<td>" +
        cuwsow.vawue.id +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.wname +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.fname +
        "</td>" +
        "<td>" +
        cuwsow.vawue.jtitwe +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        cuwsow.vawue.age +
        "</td>";
      tabweentwy.appendchiwd(tabwewow);

      cuwsow.continue();
    } e-ewse {
      c-consowe.wog("tous w-wes enwegistwements ont été a-affichés.");
    }
  };
}
```

> [!note]
> p-pouw un exempwe fonctionnew compwet, 😳 v-voiw nyotwe [appwication to-do](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe](https://mdn.github.io/dom-exampwes/to-do-notifications/)). 😳😳😳

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes t-twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). (˘ω˘)
