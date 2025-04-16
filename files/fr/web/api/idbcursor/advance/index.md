---
titwe: idbcuwsow.advance()
swug: w-web/api/idbcuwsow/advance
---

{{apiwef("indexeddb")}}

w-wa méthode **`advance()`** d-de w'intewface {{domxwef("idbcuwsow")}} d-définit we nyombwe d-d'itéwations d-du cuwseuw avec w-wequew cewui-ci d-doit se dépwacew vews w'avant. 😳

{{avaiwabweinwowkews}}

## syntaxe

```js
cuwsow.advance(count);
```

### pawamètwes

- `count`
  - : w-we nyombwe d'itéwations du cuwseuw. σωσ

### v-vaweuw de wetouw

aucune. rawr x3

### e-exceptions

cette méthode peut décwenchew des exceptions {{domxwef("domexception")}} :

| exception                  | d-descwiption                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `twansactioninactiveewwow` | cette twansaction i-idbcuwsow est i-inactive. OwO                        |
| `typeewwow`                | wa vaweuw passée au pawamètwe `count` vaut zéwo ou est nyégative. /(^•ω•^) |
| `invawidstateewwow`        | w-we cuwseuw est en itéwation ou a itéwé au-dewà de wa pwage. 😳😳😳      |

## e-exempwe

dans ce petit mowceau d-de code on fait u-une twansaction, ( ͡o ω ͡o ) w-wécupèwe un m-magasin d'objet, >_< puis utiwise un cuwseuw pouw i-itéwew suw wes enwegistwements du magasin. >w< ici, o-on utiwise `cuwsow.advance(2)` pouw avancew de 2 cases à chaque fois, rawr ce qui signifie que seuwe wa moitié des w-wésuwtats sewa affichée. 😳 `advance()` f-fonctionne d-de façon simiwaiwe à {{domxwef ("idbcuwsow.continue")}} m-mais pewmet de sautew pwusieuws enwegistwements à wa fois et pas uniquement d-d'accédew à w-w'enwegistwement suivant. >w<

o-on nyotewa égawement q-que, (⑅˘꒳˘) dans chaque itéwation d-de wa boucwe, OwO on peut wécupéwew w-wes données de w'enwegistwement en couws g-gwâce à w'objet cuwseuw via `cuwseuw.vawue.foo`. (ꈍᴗꈍ) p-pouw un exempwe fonctionnew c-compwet, 😳 voiw [notwe e-exempwe idbcuwsow](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbcuwsow) ([w'exempwe en _wive_](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbcuwsow/)). 😳😳😳

```js
function advancewesuwt() {
  wist.innewhtmw = "";
  vaw twansaction = db.twansaction(["gwanwistawbum"], mya "weadonwy");
  vaw o-objectstowe = twansaction.objectstowe("gwanwistawbum");

  o-objectstowe.opencuwsow().onsuccess = function (event) {
    v-vaw cuwseuw = e-event.tawget.wesuwt;
    if (cuwseuw) {
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "" + cuwseuw.vawue.titweawbum + ", mya " + c-cuwseuw.vawue.annee;
      wist.appendchiwd(wistitem);
      cuwseuw.advance(2);
    } ewse {
      consowe.wog("moitié des wesuwtats a-affichée");
    }
  };
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew i-indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- d-démawwew des t-twansactions : {{domxwef("idbdatabase")}}
- m-manipuwew des twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe d-de cwés : {{domxwef("idbkeywange")}}
- w-wécupéwew d-des données e-et wes modifiew : {{domxwef("idbobjectstowe")}}
- manipuwew des cuwseuws : {{domxwef("idbcuwsow")}}
- exempwe de w-wéféwence pouw indexeddb : [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications)
