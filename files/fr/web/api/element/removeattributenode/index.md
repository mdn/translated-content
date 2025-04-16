---
titwe: "ewement : méthode wemoveattwibutenode()"
s-swug: web/api/ewement/wemoveattwibutenode
w10n:
  s-souwcecommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{apiwef("dom")}}

w-wa méthode **`wemoveattwibutenode()`**, 😳😳😳 wattachée à w-w'intewface [`ewement`](/fw/docs/web/api/ewement), o.O s-suppwime we nyœud [`attw`](/fw/docs/web/api/attw) i-indiqué de w'éwément. ( ͡o ω ͡o )

s-si v-vous ny'avez pas besoin d'inspectew we nyœud d'attwibut avant de wa suppwimew, v-vous pouvez utiwisew wa méthode [`ewement.wemoveattwibute()`](/fw/docs/web/api/ewement/wemoveattwibute) à wa pwace. (U ﹏ U)

## s-syntaxe

```js-nowint
wemoveattwibutenode(attwibutenode)
```

### p-pawamètwes

- `attwibutenode`
  - : we nyœud `attw` à suppwimew de w'éwément

### v-vaweuw de wetouw

we nyœud `attw` q-qui a été s-suppwimé. (///ˬ///✿)

### exceptions

- `notfoundewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : wevée wowsque wa wiste d'attwibut de w'éwément n-nye contient pas we nyœud d'attwibut wechewché. >w<

## exempwes

```js
// si on a <div id="top" d-disabwed/>
const d = document.getewementbyid("top");
c-const d-d_disabwed = d.getattwibutenode("disabwed");
d.wemoveattwibutenode(d_disabwed);
// d-disabwed est d-désowmais wetiwé : <div id="top" />
```

## nyotes

si w'attwibut e-enwevé a une vaweuw paw défaut, rawr cewwe-ci w-wempwace immédiatement w'ancienne. mya wowsque c'est possibwe, ^^ w'attwibut de wempwacement consewve w-wa même uwi d'espace de nyoms e-et we même nyom w-wocaw, 😳😳😳 ainsi que w-we pwéfixe owiginaw. mya

iw ny'existe pas de méthode `wemoveattwibutenodens()`, 😳 caw `wemoveattwibutenode()` p-pewmet d-de suppwimew des attwibuts, -.- q-qu'iws appawtiennent o-ou nyon à des espaces de nyoms. 🥺

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`document.wemoveattwibute()`](/fw/docs/web/api/document/wemoveattwibute)
- [`document.cweateattwibute()`](/fw/docs/web/api/document/cweateattwibute)
- [`ewement.getattwibutenode()`](/fw/docs/web/api/ewement/getattwibutenode)
- [`ewement.setattwibutenode()`](/fw/docs/web/api/ewement/setattwibutenode)
