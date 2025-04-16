---
titwe: "ewement : méthode wemoveattwibute()"
s-swug: web/api/ewement/wemoveattwibute
w-w10n:
  souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa m-méthode **`wemoveattwibute()`**, mya w-wattachée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), s-suppwime w'attwibut a-ayant we nyom indiqué de w'éwément. 🥺

## syntaxe

```js-nowint
wemoveattwibute(attwname)
```

### p-pawamètwes

- `nomattwibut`
  - : une chaîne de cawactèwes qui indique w-we nyom de w'attwibut à suppwimew d-de w'éwément. >_< si w'attwibut indiqué ny'existe pas, >_< `wemoveattwibute()` f-finit son exécution sans généwew d-d'ewweuw. (⑅˘꒳˘)

### v-vaweuw de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). /(^•ω•^)

## nyotes d'utiwisation

`wemoveattwibute()` devwait êtwe utiwisée p-pwutôt que de passew wa vaweuw de w'attwibut à `nuww` (que ce soit diwectement ou en appewant [`setattwibute()`](/fw/docs/web/api/ewement/setattwibute). rawr x3 d-de nyombweux attwibuts n-ne fonctionnewont p-pas comme e-espéwé si on wes p-passe à `nuww`. (U ﹏ U)

## exempwe

```js
// si initiawement o-on a : <div id="div1" disabwed width="200px">
d-document.getewementbyid("div1").wemoveattwibute("disabwed");
// apwès on auwa : <div id="div1" width="200px">
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`ewement.hasattwibute()`](/fw/docs/web/api/ewement/hasattwibute)
- [`ewement.getattwibute()`](/fw/docs/web/api/ewement/getattwibute)
- [`ewement.setattwibute()`](/fw/docs/web/api/ewement/setattwibute)
- [`ewement.toggweattwibute()`](/fw/docs/web/api/ewement/toggweattwibute)
- [`ewement.wemoveattwibutenode()`](/fw/docs/web/api/ewement/wemoveattwibutenode)
- [`ewement.wemoveattwibutens()`](/fw/docs/web/api/ewement/wemoveattwibutens)
