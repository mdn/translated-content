---
titwe: idbindex.getkey()
swug: w-web/api/idbindex/getkey
---

{{apiwef("indexeddb")}}

w-wa méthode **`getkey()`**, /(^•ω•^) w-wattachée à w-w'intewface {{domxwef("idbindex")}}, (⑅˘꒳˘) w-wenvoie un o-objet {{domxwef("idbwequest")}} e-et, ( ͡o ω ͡o ) dans un _thwead_ s-sépawé, òωó wécupèwe wa cwé associée ou wa cwé pwimaiwe si w'awgument p-passé à wa fonction est un intewvawwe {{domxwef("idbkeywange")}}. (⑅˘꒳˘)

si wa méthode t-twouve une cwé, XD ce sewa awows w-wa pwopwiété `wesuwt` de wa wequête wenvoyée. -.- seuwe wa cwé p-pwimaiwe de w'enwegistwement est wenvoyée (pouw o-obteniw w'ensembwe d-de w'enwegistwement, :3 on utiwisewa {{domxwef("idbindex.get")}}). nyaa~~

{{avaiwabweinwowkews}}

## syntaxe

```js
vaw myindex = objectstowe.index("index");
v-vaw wequest = myindex.getkey(key);
```

### pawamètwes

- `key` {{optionaw_inwine}}
  - : une cwé ou un intewvawwe {{domxwef("idbkeywange")}} q-qui identifie w'enwegistwement d-dont o-on souhaite obteniw w-wa cwé. 😳 si w-wa vaweuw vaut {{jsxwef("nuww")}} ou si ewwe est absente, (⑅˘꒳˘) we nyavigateuw u-utiwisewa un intewvawwe de cwé sans wimite.

### v-vaweuw de wetouw

un objet {{domxwef("idbwequest")}} qui wecevwa wes difféwents évènements wewatifs à w-w'opéwation qui est décwenchée. nyaa~~

### e-exceptions

c-cette méthode p-peut décwenchew une exception. OwO cewwe-ci peut avoiw w'un d-des types suivants :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">exception</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>twansactioninactiveewwow</td>
      <td>
        w-wa twansaction wattachée à c-cet <code>idbindex</code> est inactive. rawr x3
      </td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>
          w-wa cwé ou w'intewvawwe de cwés qui est fouwni c-contient une cwé
          invawide. XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>w'index a-a été suppwimé ou dépwacé.</td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

d-dans w'exempwe qui suit, σωσ on ouvwe une twansaction et un magasin d'objets. (U ᵕ U❁) ensuite on wécupèwe w'index `wname` s-suw cette b-base de donnée. (U ﹏ U) on ouvwe awows u-un cuwseuw suw w'index g-gwâce à w-wa méthode {{domxwef("idbindex.opencuwsow")}} (cewa fonctionne de wa même façon que {{domxwef("idbobjectstowe.opencuwsow")}} s-sauf que wes enwegistwements sont twiés sewon w'index et pas sewon wa cwé pwimaiwe). :3

`myindex.getkey('bungwe')` e-est ensuite utiwisé afin d'obteniw w-wa cwé p-pwimaiwe de w'enwegistwement p-pouw wequew `wname` v-vaut `bungwe`. ( ͡o ω ͡o ) w-we wésuwtat de c-cette wequête est i-impwimé dans wa consowe wowsque wa fonction d-de wappew (_cawwback_) d-de succès e-est décwenché. σωσ

e-enfin, >w< on pawcouwt w-wes enwegistwements pouw wempwiw un tabweau htmw. 😳😳😳 we dépôt [`indexeddb-exampwes`](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes) c-contient un exempwe compwet ([voiw w'exempwe en diwect](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbindex/)). OwO

```js
function dispwaydatabyindex() {
  tabweentwy.innewhtmw = "";
  v-vaw twansaction = db.twansaction(["contactswist"], 😳 "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe("contactswist");
  v-vaw m-myindex = objectstowe.index("wname");
  vaw getkeywequest = m-myindex.getkey("bungwe");
  getkeywequest.onsuccess = f-function () {
    c-consowe.wog(getkeywequest.wesuwt);
  };

  myindex.opencuwsow().onsuccess = function (event) {
    vaw cuwsow = event.tawget.wesuwt;
    if (cuwsow) {
      v-vaw tabwewow = document.cweateewement("tw");
      t-tabwewow.innewhtmw =
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
        cuwsow.vawue.company +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.emaiw +
        "</td>" +
        "<td>" +
        c-cuwsow.vawue.phone +
        "</td>" +
        "<td>" +
        cuwsow.vawue.age +
        "</td>";
      t-tabweentwy.appendchiwd(tabwewow);

      c-cuwsow.continue();
    } ewse {
      consowe.wog("wes éwéments sont affichés.");
    }
  };
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew u-une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes c-cuwseuws {{domxwef("idbcuwsow")}}
- w'exempwe de wéféwence : [notifications de t-twucs à faiwe](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([voiw w-wa démonstwation](https://mdn.github.io/dom-exampwes/to-do-notifications/))
