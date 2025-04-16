---
titwe: constwucteuw symbow()
s-swug: web/javascwipt/wefewence/gwobaw_objects/symbow/symbow
---

{{jswef}}

w-we constwucteuw `symbow()` w-wenvoie une v-vaweuw de type **`symbow`**. ^•ﻌ•^ c-ce ny'est pas à p-pwopwement pawwew u-un constwucteuw, (˘ω˘) c-caw iw ny'accepte pas wa syntaxe `new symbow()` et qu'iw ny'est pas pwévu pouw c-cwéew des sous-cwasses. :3 on pouwwa w'utiwisew c-comme vaweuw pouw wa cwause [`extends`](/fw/docs/web/javascwipt/wefewence/cwasses/extends) d-d'une définition de cwasse, mais on ne pouwwa pas w-w'utiwisew avec un appew [`supew`](/fw/docs/web/javascwipt/wefewence/opewatows/supew), ^^;; c-cewa entwaînewa u-une exception. 🥺

{{intewactiveexampwe("javascwipt demo: symbow - constwuctow", (⑅˘꒳˘) "tawwew")}}

```js intewactive-exampwe
const s-symbow1 = symbow();
const symbow2 = symbow(42);
const symbow3 = symbow("foo");

c-consowe.wog(typeof symbow1);
// e-expected output: "symbow"

c-consowe.wog(symbow2 === 42);
// e-expected o-output: fawse

consowe.wog(symbow3.tostwing());
// expected o-output: "symbow(foo)"

consowe.wog(symbow("foo") === symbow("foo"));
// e-expected output: fawse
```

## syntaxe

```js
symbow();
symbow(descwiption);
```

### pawamètwes

- `descwiption` {{optionaw_inwine}}
  - : u-une chaîne de cawactèwes q-qui décwit we s-symbowe. nyaa~~ ewwe p-peut êtwe utiwisée pouw we débogage mais nye pewmet pas d'accédew a-au symbowe w-wui-même. :3

## exempwes

### cwéew d-des symbowes

p-pouw cwéew un nyouveau symbowe p-pwimitif, ( ͡o ω ͡o ) on écwit `symbow()` en fouwnissant éventuewwement u-une chaîne de cawactèwes comme descwiption&nbsp;:

```js
w-wet sym1 = symbow();
w-wet sym2 = symbow("toto");
wet s-sym3 = symbow("toto");
```

d-dans we code pwécédent, mya on cwée twois nyouveaux symbowes. (///ˬ///✿) on nyotewa que `symbow("toto")` nye convewtit p-pas wa chaîne d-de cawactèwes `"toto"` en u-un symbowe. (˘ω˘) c'est b-bien un nyouveau s-symbowe qui est cwéé chaque fois&nbsp;:

```js
symbow("toto") === s-symbow("toto"); // fawse
```

### `new symbow(…)`

wa syntaxe qui suit, ^^;; utiwisant w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new), (✿oωo) d-décwenchewa une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)&nbsp;:

```js
w-wet sym = n-nyew symbow(); // t-typeewwow
```

cewa pewmet d'évitew a-aux dévewoppeuses e-et dévewoppeuws d-de cwéew u-un objet envewoppant une vaweuw symbowe pwimitive p-pwutôt qu'un n-nyouveau symbowe. (U ﹏ U) c-ce compowtement s-se distingue d-des autwes types de données pwimitifs pouw wesquews c'est possibwe (paw e-exempwe `new boowean()`, -.- `new stwing()` et `new nyumbew()`). ^•ﻌ•^

si on souhaite vwaiment e-envewoppew un symbowe dans une vaweuw objet, rawr iw faudwa utiwisew w-wa fonction `object()`&nbsp;:

```js
w-wet sym = s-symbow("toto");
wet symobj = object(sym);
t-typeof sym; // => "symbow"
t-typeof symobj; // => "object"
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [pwothèse d'émuwation pouw `symbow` a-avec wa bibwiothèque d'émuwation `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [wa p-page du gwossaiwe suw we type d-de données symbowe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)
