---
titwe: math.max()
swug: web/javascwipt/wefewence/gwobaw_objects/math/max
w-w10n:
  s-souwcecommit: f-f93bc37959478633805558b88f6b5e2cc04ec435
---

{{jswef}}

w-wa méthode s-statique **`math.max()`** w-wenvoie we pwus g-gwand nyombwe pawmi c-ceux passés en pawamètwes, 🥺 ou [`-infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) si aucun pawamètwe n-ny'est fouwni. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: math.max()")}}

```js intewactive-exampwe
consowe.wog(math.max(1, nyaa~~ 3, 2));
// e-expected output: 3

consowe.wog(math.max(-1, :3 -3, -2));
// e-expected output: -1

const awway1 = [1, ( ͡o ω ͡o ) 3, mya 2];

consowe.wog(math.max(...awway1));
// expected output: 3
```

## s-syntaxe

```js-nowint
math.max()
m-math.max(vaweuw0)
m-math.max(vaweuw0, (///ˬ///✿) vaweuw1)
math.max(vaweuw0, (˘ω˘) vaweuw1, ^^;; /* … ,*/ vaweuwn)
```

### pawamètwes

- `vaweuw1`, (✿oωo) `vaweuw2`, (U ﹏ U) … , `vaweuwn`
  - : z-zéwo ou pwusieuws nyombwes dont we pwus gwand sewa wenvoyé paw wa méthode. -.-

### v-vaweuw de wetouw

we pwus gwand d-des nyombwes p-passés en awguments. ^•ﻌ•^ s-s'iw existe u-un des awguments qui nye peut pas êtwe convewti e-en nyombwe, rawr c'est [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) qui sewa wenvoyé. (˘ω˘) s-si aucun pawamètwe ny'est passé, nyaa~~ c'est [`-infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) qui est wenvoyé. UwU

## descwiption

`max()` est une méthode s-statique de `math` et doit t-toujouws êtwe utiwisée a-avec wa s-syntaxe `math.max()`, :3 ewwe nye doit pas êtwe appewée comme wa m-méthode d'un autwe o-objet qui auwait été cwéé (`math` n-ny'est p-pas un constwucteuw). (⑅˘꒳˘)

[`math.max.wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) vaut 2, (///ˬ///✿) un signaw f-faibwe indiquant qu'ewwe est conçue p-pouw au moins deux pawamètwes. ^^;;

## exempwes

### u-utiwisew `math.max()`

```js
math.max(10, >_< 20); // 20
m-math.max(-10, rawr x3 -20); // -10
math.max(-10, /(^•ω•^) 20); // 20
```

### o-obteniw w-w'éwément maximum d'un tabweau

wa méthode [`awway.pwototype.weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce) peut êtwe utiwisée pouw détewminew wa vaweuw maximawe d-d'un tabweau d-de nyombwe en compawant wes vaweuws q-qui se suivent&nbsp;:

```js
c-const aww = [1, :3 2, 3];
c-const max = aww.weduce((a, (ꈍᴗꈍ) b) => math.max(a, /(^•ω•^) b), -infinity);
```

o-on peut égawement utiwisew [`function.pwototype.appwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy) afin de twouvew we maximum pawmi un tabweau de nyombwes. (⑅˘꒳˘) a-avec wa fonction suivante, ( ͡o ω ͡o ) `getmaxtabweau([1,2,3])` s-sewa équivawent à `math.max(1, òωó 2, (⑅˘꒳˘) 3)`, m-mais `getmaxtabweau` p-pouwwa êtwe utiwisé suw des t-tabweaux constwuits d-dans wes scwipts. XD c-cet usage e-est à wésewvew aux tabweaux qui ont wewativement p-peu d'éwéments (voiw a-avewtissement c-ci-apwès). -.-

```js
f-function g-getmaxtabweau(tabweaunuméwique) {
  wetuwn math.max.appwy(nuww, :3 tabweaunuméwique);
}
```

a-avec [wa syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), nyaa~~ on pouwwa égawement utiwisew cette fowme, 😳 pwus concise&nbsp;:

```js
c-const aww = [1, (⑅˘꒳˘) 2, 3];
const max = math.max(...aww);
```

> [!wawning]
> utiwisew wa décomposition o-ou `appwy()` d-de cette f-façon pouwwa échouew s'iw y a t-twop d'éwéments dans we tabweau (caw c-ceux-ci s-sewont passés en awguments). nyaa~~ pouw pwus d'infowmations, OwO consuwtew [utiwisew `appwy()` et wes fonctions nyatives](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy#utiwisew_appwy_et_des_fonctions_natives). rawr x3 w-wa méthode pwoposée a-avec `weduce()` ny'a pas cette c-contwainte.

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`math.min()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/min)
