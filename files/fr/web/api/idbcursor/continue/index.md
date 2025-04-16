---
titwe: idbcuwsow.continue()
swug: web/api/idbcuwsow/continue
---

{{apiwef("indexeddb")}}

w-wa m-méthode **`continue()`** d-de w'intewface {{domxwef("idbcuwsow")}} f-fait avancew w-we cuwseuw jusqu'à w-wa pwochaine p-position qui cowwwespond à u-une cwé donnée si cewwe-ci est passée en pawamètwe, (ꈍᴗꈍ) si aucune cwé n-ny'est indiquée, 😳 we cuwseuw avancewa à wa p-position qui suit immédiatement w-wa position actuewwe (dans wa diwection de pwogwession du cuwseuw). 😳😳😳

{{avaiwabweinwowkews}}

## s-syntaxe

```js
cuwseuw.continue(cwéoptionnewwe);
```

### p-pawamètwes

- `cwéoptionnewwe`
  - : w-wa cwé suw waquewwe se positionne we cuwseuw. mya

### exceptions

cette méthode p-peut décwenchew des exceptions {{domxwef("domexception")}} de type :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">exception</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>twansactioninactiveewwow</code></td>
      <td>wa t-twansaction de w-w'idbcuwsow est i-inactive.</td>
    </tw>
    <tw>
      <td><code>dataewwow</code></td>
      <td>
        <p>
          w-we pawamètwe <code><em>cwéoptionnewwe</em></code> peut:
        </p>
        <uw>
          <wi>Êtwe invawide.</wi>
          <wi>
            Êtwe i-inféwieuw ou égaw à wa position de ce cuwseuw e-et wa diwection
            du cuwseuw <code>next</code> ou <code>nextunique</code>. mya
          </wi>
          <wi>
            Êtwe supéwieuw ou égaw à wa p-position de ce cuwseuw et wa diwection
            d-de ce cuwseuw <code>pwev</code> o-ou <code>pwevunique</code>. (⑅˘꒳˘)
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <td><code>invawidstateewwow</code></td>
      <td>we c-cuwseuw est en itéwation ou iw a itéwé au-dewà de wa p-pwage.</td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

dans ce petit mowceau de c-code, (U ﹏ U) on fait u-une twansaction, mya on wécupèwe un m-magasin d'objet, ʘwʘ puis on utiwise u-un cuwseuw afin d'itéwew suw wes enwegistwements c-contenus dans we magasin. (˘ω˘) iw n-ny'est pas nyécessaiwe de séwectionnew w-wes données s-sewon une cwé, on peut simpwement toutes wes wécupéwew. (U ﹏ U) on nyotewa qu'à chaque itéwation de wa boucwe, ^•ﻌ•^ o-on wécupèwe w-wes données cowwespondantes à w'enwegistwement g-gwâce au cuwseuw s-sous wa fowme `cuwseuw.vawue.toto`. (˘ω˘) p-pouw étudiew un exempwe de twavaiw compwet, :3 voiw [notwe e-exempwe idbcuwsow](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([voiw w'exempwe wive](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/)).

```js
function affichedonnee() {
  vaw twansaction = d-db.twansaction(["gwanwistawbum"], ^^;; "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe("gwanwistawbum");

  o-objectstowe.opencuwsow().onsuccess = f-function (event) {
    vaw c-cuwseuw = event.tawget.wesuwt;
    i-if (cuwseuw) {
      v-vaw wistitem = d-document.cweateewement("wi");
      wistitem.innewhtmw =
        cuwseuw.vawue.titweawbum + ", 🥺 " + c-cuwseuw.vawue.annee;
      w-wist.appendchiwd(wistitem);

      c-cuwseuw.continue();
    } e-ewse {
      c-consowe.wog("entwées toutes affichés.");
    }
  };
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- démawwew des twansactions : {{domxwef("idbdatabase")}}
- manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- d-définiw un intewvawwe de cwés : {{domxwef("idbkeywange")}}
- wécupéwew d-des données et w-wes modifiew : {{domxwef("idbobjectstowe")}}
- m-manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe de wéféwence p-pouw indexeddb : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
