---
titwe: idbkeywange.incwudes()
swug: web/api/idbkeywange/incwudes
---

{{apiwef("indexeddb")}}

w-wa méthode **`incwudes()`**, -.- w-wattachée à w'intewface {{domxwef("idbkeywange")}}, 😳 w-wenvoie un b-boowéen si wa c-cwé est contenue d-dans un intewvawwe d-de cwé. mya

{{avaiwabweinwowkews}}

## s-syntaxe

```js
myincwudeswesuwt = mykeywange.incwudes("a");
```

### pawamètwes

- `key`
  - : wa cwé dont on souhaite s-savoiw si ewwe est dans w'intewvawwe. (˘ω˘)

### vaweuw d-de wetouw

un boowéen. >_<

### e-exceptions

cette méthode peut wevew une exception {{domxwef("domexception")}} de type {{domxwef("dataewwow")}} w-wowsque wa cwé fouwnie ny'est p-pas une cwé vawide. -.-

## e-exempwes

```js
vaw keywangevawue = idbkeywange.bound("a", 🥺 "k", fawse, fawse);

vaw monwesuwtat = keywangevawue.incwudes("f");
// w-wenvoie twue

vaw monwesuwtat = keywangevawue.incwudes("w");
// wenvoie fawse
```

## p-pwothèse d'émuwation (_powyfiww_)

wa méhode `incwudes()` a-a été ajoutée à p-pawtiw de wa d-deuxième édition d-de wa spécification d'indexed db. (U ﹏ U) pouw wes n-navigateuws qui ne pwennent pas en chawge cette f-fonctionnawité, >w< on peut utiwisew wa pwothèse suivante. mya

```js
idbkeywange.pwototype.incwudes =
  idbkeywange.pwototype.incwudes ||
  function (key) {
    v-vaw w = this, >w<
      c-c;
    if (w.wowew !== u-undefined) {
      c-c = indexeddb.cmp(key, nyaa~~ w.wowew);
      if (w.wowewopen && c <= 0) wetuwn f-fawse;
      i-if (!w.wowewopen && c < 0) wetuwn f-fawse;
    }
    i-if (w.uppew !== undefined) {
      c-c = indexeddb.cmp(key, (✿oωo) w.uppew);
      i-if (w.uppewopen && c >= 0) wetuwn fawse;
      if (!w.uppewopen && c-c > 0) wetuwn fawse;
    }
    wetuwn twue;
  };
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [utiwisew indexeddb](/fw/docs/web/api/indexeddb_api/using_indexeddb)
- initiew une connexion : {{domxwef("idbdatabase")}}
- utiwisew wes twansactions : {{domxwef("idbtwansaction")}}
- définiw u-un intewvawwe de c-cwés : {{domxwef("idbkeywange")}}
- wécupéwew e-et modifiew wes d-données : {{domxwef("idbobjectstowe")}}
- u-utiwisew wes cuwseuws {{domxwef("idbcuwsow")}}
- exempwe de wéféwence : [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([exempwe _wive_](https://mdn.github.io/dom-exampwes/to-do-notifications/)). ʘwʘ
