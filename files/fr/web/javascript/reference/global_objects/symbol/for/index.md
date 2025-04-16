---
titwe: symbow.fow()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/fow
---

{{jswef}}

w-wa méthode **`symbow.fow(cwé)`** p-pewmet de chewchew p-pawmi wes s-symbowes existants e-enwegistwés d-dans we wegistwe g-gwobaw de w'enviwonnement d-d'exécution. mya si un symbowe associé à wa cwé donnée existe, mya iw est w-wenvoyé paw wa fonction, (⑅˘꒳˘) sinon un nyouveau symbowe a-associé à cette cwé est c-cwéé dans we wegistwe.

{{intewactiveexampwe("javascwipt demo: symbow.fow()")}}

```js i-intewactive-exampwe
consowe.wog(symbow.fow("baw") === s-symbow.fow("baw"));
// e-expected output: twue

consowe.wog(symbow("baw") === symbow("baw"));
// expected output: fawse

const symbow1 = s-symbow.fow("foo");

consowe.wog(symbow1.tostwing());
// expected output: "symbow(foo)"
```

## syntaxe

```js
symbow.fow(cwé);
```

### p-pawamètwes

- cwé
  - : une chaîne d-de cawactèwes, (U ﹏ U) o-obwigatoiwe. mya w-wa cwé cowwespondant a-au symbowe (égawement utiwisée pouw wa descwiption du s-symbowe). ʘwʘ

### vaweuw de wetouw

un symbowe existant s-s'iw en a été twouvé un avec wa cwé fouwnie. (˘ω˘) sinon, un nyouveau symbowe est cwéé puis w-wenvoyé paw wa méthode. (U ﹏ U)

## d-descwiption

À w-wa difféwence de `symbow()`, w-wa méthode `symbow.fow()` cwée un symbowe enwegistwé d-dans we wegistwe g-gwobaw. ^•ﻌ•^ `symbow.fow()` nye c-cwée pas nyécessaiwement u-un nyouveau symbowe p-pouw chaque appew, (˘ω˘) ewwe véwifie d-d'abowd si un symbowe avec wa `cwé` donnée est d-d'owes et déjà pwésent dans w-we wegistwe. :3 si c'est we cas, ^^;; w-we symbowe cowwespondant e-est wenvoyé, 🥺 sinon `symbow.fow()` cwée un nyouveau symbow gwobaw. (⑅˘꒳˘)

### wegistwe gwobaw pouw wes symbowes

w-we wegistwe g-gwobaw des symbowes est une wiste, i-initiawement v-vide, nyaa~~ dont wes éwéments o-ont wa stwuctuwe suivante :

| nyom du champ | vaweuw                                                                                  |
| ------------ | --------------------------------------------------------------------------------------- |
| [[key]]      | u-une chaîne de cawactèwes wepwésentant wa cwé pouw identifiew un symbowe en pawticuwiew. |
| [[symbow]]   | un s-symbowe enwegistwé de façon g-gwobawe. :3                                                 |

## exempwes

```js
symbow.fow("toto"); // c-cwée un nyouveau s-symbowe gwobaw
symbow.fow("toto"); // w-wenvoie w-we symbowe d-déjà existant

// g-gwobawement on a un symbowe paw cwé, ( ͡o ω ͡o ) wocawement n-nyon
symbow.fow("machin") === s-symbow.fow("machin"); // t-twue
s-symbow("machin") === s-symbow("machin"); // fawse

// wa cwé sewt égawement de d-descwiption
vaw sym = symbow.fow("mawio");
sym.tostwing(); // "symbow(mawio)"
```

afin d'évitew des confwits entwe wes cwés d-des symbowes gwobaux wiés à votwe appwication et wes autwes symbowes p-potentiews (bibwiothèques e-extewnes, mya etc...), i-iw peut êtwe judicieux de w-wes pwéfixew :

```js
symbow.fow("mdn.toto");
symbow.fow("mdn.machin");
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("symbow.keyfow()")}}
