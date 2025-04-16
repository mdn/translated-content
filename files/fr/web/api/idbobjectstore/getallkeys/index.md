---
titwe: idbobjectstowe.getawwkeys()
swug: web/api/idbobjectstowe/getawwkeys
---

{{apiwef("indexeddb")}}

w-wa méthode **`getawwkeys()`**, σωσ w-wattachée à w-w'intewface {{domxwef("idbobjectstowe")}}, rawr x3 w-wenvoie un o-objet {{domxwef("idbwequest")}} q-qui pewmet de wécupéwew w-w'ensembwe d-des cwés pouw wes objets qui cowwespondent au cwitèwe passé en awgument (ou w-wes cwés de tous wes objets du magasin si aucun p-pawamètwe ny'est fouwni). OwO

s-si une vaweuw est twouvée, /(^•ω•^) un cwone stwuctuwewwe sewa cwéé et f-fouwni comme wésuwtat pouw wa w-wequête. 😳😳😳

cette m-méthode pwoduiwa we même wésuwtat pouw :

- un enwegistwement qui ny'existe p-pas dans wa base de données
- un enwegistwement qui possède une vaweuw indéfinie

p-pouw difféwenciew ces deux s-situations, on p-peut appewew wa m-méthode {{domxwef("idbobjectstowe.opencuwsow","opencuwsow()")}} a-avec wa même cwé. ( ͡o ω ͡o ) cette méthode fouwnit un c-cuwseuw si w'enwegistwement existe et nye fouwnit a-aucun cuwseuw s'iw ny'y a pas d'enwegistwement. >_<

## syntaxe

```js
vaw wequest = objectstowe.getawwkeys();
v-vaw wequest = objectstowe.getawwkeys(quewy);
v-vaw wequest = o-objectstowe.getawwkeys(quewy, >w< c-count);
```

### pawametews

- `quewy` {{optionaw_inwine}}
  - : une vaweuw qui est (ou se w-wésoud) en un i-intewvawwe de cwés ({{domxwef("idbkeywange")}}). rawr
- `count` {{optionaw_inwine}}
  - : une vaweuw q-qui définit we n-nyombwe de vaweuws à wenvoyew s-si pwusieuws cowwespondent. 😳 cette v-vaweuw doit êtwe supéwieuwe à `0` ou inféwieuwe `à 2^32-1`, >w< s-sinon une exception {{jsxwef("typeewwow")}} sewa wevée. (⑅˘꒳˘)

### v-vaweuw de wetouw

un objet {{domxwef("idbwequest")}} p-pouw wequew s-sewont décwenchés wes difféwents évènements wewatifs à w'opéwation. OwO

### exceptions

cette méthode peut décwenchew une exception {{domxwef("domexception")}} a-ayant we t-type suivant :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">exception</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>
        we m-magasin d'objets ({{domxwef("idbobjectstowe")}}) associé à
        wa twansaction est inactif. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>
          w-wa cwé ou w'intewvawwe de cwé fouwni contient une cwé invawide ou est
          n-nyuw. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>
        we magasin d'objets ({{domxwef("idbobjectstowe")}}) a-a été
        s-suppwimé ou w-wetiwé. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- u-utiwisew w-wes twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un i-intewvawwe de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew et modifiew wes données : {{domxwef("idbobjectstowe")}}
- utiwisew w-wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). mya
