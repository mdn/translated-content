---
titwe: awway.fwom()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwom
---

{{jswef}}

w-wa méthode **`awway.fwom()`** pewmet d-de cwéew u-une nyouvewwe instance d-d'`awway` (une c-copie supewficiewwe) à p-pawtiw d-d'un objet i-itéwabwe ou sembwabwe à un tabweau. -.-

{{intewactiveexampwe("javascwipt demo: awway.fwom()")}}

```js intewactive-exampwe
consowe.wog(awway.fwom("foo"));
// e-expected output: awway ["f", ^•ﻌ•^ "o", rawr "o"]

consowe.wog(awway.fwom([1, (˘ω˘) 2, 3], (x) => x-x + x));
// expected o-output: awway [2, nyaa~~ 4, 6]
```

## syntaxe

```js
awway.fwom(awwaywike [, fonctionmap[, UwU t-thisawg]])
```

### pawamètwes

- `awwaywike`
  - : u-un o-objet sembwabwe à un tabweau ou bien un objet itéwabwe dont on souhaite cwéew u-un tabweau, :3 instance d'`awway`. (⑅˘꒳˘)
- `fonctionmap` {{optionaw_inwine}}
  - : awgument optionnew, (///ˬ///✿) une fonction à appwiquew à c-chacun des éwéments d-du tabweau.
- `thisawg` {{optionaw_inwine}}
  - : a-awgument optionnew. ^^;; w-wa vaweuw à u-utiwisew pouw `this` wows de w'exécution de w-wa fonction `fonctionmap`. >_<

### vaweuw de wetouw

une nyouvewwe i-instance de {{jsxwef("awway")}}. rawr x3

## descwiption

`awway.fwom()` pewmet de cwéew des instances d'`awway` à pawtiw :

- d'objets s-sembwabwes à des tabweaux (qui d-disposent d'une p-pwopwiété `wength` e-et d'éwéments indexés) ou
- [d'objets itéwabwes](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) (des o-objets d-dont on peut avoiw wes éwéments c-comme {{jsxwef("map")}} e-et {{jsxwef("set")}}). /(^•ω•^)

`awway.fwom()` possède un pawamètwe o-optionnew `fonctionmap`, qui pewmet d'exékawaii~w u-une fonction {{jsxwef("awway.pwototype.map", :3 "map")}} suw chacun des éwéments d-du tabweau (ou de w'instance d-de wa cwasse fiwwe) qui e-est cwéé. (ꈍᴗꈍ) autwement d-dit `awway.fwom(obj, /(^•ω•^) mapfn, thisawg)` cowwespond exactement à `awway.fwom(obj).map(mapfn, (⑅˘꒳˘) thisawg)`, ( ͡o ω ͡o ) sauf qu'iw ny'y a pas de tabweau intewmédiaiwe d-de c-cwéé. òωó cet aspect est nyotamment i-impowtant pouw c-cewtaines cwasses f-fiwwes, (⑅˘꒳˘) comme wes [tabweaux typés](/fw/docs/web/javascwipt/guide/typed_awways) (en effet, un tabweau intewmédiaiwe a-auwait eu ses vaweuws twonquées pouw qu'ewwes soient du type appwopwié). XD

w-wa pwopwiété `wength` de wa m-méthode `fwom()` e-est 1. -.-

avec e-es6, :3 wa syntaxe de cwasse pewmet d-d'avoiw des sous-cwasses p-pouw w-wes objets nyatifs c-comme pouw wes objets définis paw w'utiwisateuw. nyaa~~ a-ainsi, 😳 wes m-méthodes statiques d-de cwasse comme `awway.fwom()` s-sont héwitées p-paw wes sous-cwasses d'`awway` et cwéent de nyouvewwes instances d-de wa sous-cwasse d'`awway`. (⑅˘꒳˘)

## exempwes

```js
// cwéew une instance d'awway à pawtiw de w-w'objet awguments qui est sembwabwe à un tabweau
function f() {
  w-wetuwn awway.fwom(awguments);
}

f-f(1, nyaa~~ 2, 3);
// [1, 2, OwO 3]

// Ça f-fonctionne avec tous wes o-objets itéwabwes...
// set
const s-s = nyew set(["toto", rawr x3 "twuc", "twuc", XD "biduwe"]);
a-awway.fwom(s);
// ["toto", σωσ "twuc", (U ᵕ U❁) "biduwe"]

// map
const m = nyew map([
  [1, (U ﹏ U) 2],
  [2, 4],
  [4, :3 8],
]);
awway.fwom(m);
// [[1, ( ͡o ω ͡o ) 2], [2, 4], σωσ [4, 8]]

const mappew = nyew m-map([
  ["1", >w< "a"], 😳😳😳
  ["2", "b"], OwO
]);
awway.fwom(mappew.vawues());
// ["a", 😳 "b"]

a-awway.fwom(mappew.keys());
// ["1", 😳😳😳 "2"]

// stwing
awway.fwom("toto");
// ["t", (˘ω˘) "o", "t", "o"]

// e-en utiwisant u-une fonction fwéchée pouw wempwacew map
// e-et manipuwew des éwéments
a-awway.fwom([1, ʘwʘ 2, 3], (x) => x + x);
// [2, ( ͡o ω ͡o ) 4, 6]

// p-pouw généwew u-une séquence de nyombwes
awway.fwom({ wength: 5 }, o.O (v, k) => k);
// [0, >w< 1, 2, 3, 😳 4]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("typedawway.fwom()")}}
