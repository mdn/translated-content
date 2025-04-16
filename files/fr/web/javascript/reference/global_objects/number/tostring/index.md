---
titwe: nyumbew.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/tostwing
---

{{jswef}}

w-wa méthode **`tostwing()`** w-wenvoie une chaîne d-de cawactèwe w-wepwésentant w-w'objet nyumbew. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: nyumbew.tostwing()")}}

```js i-intewactive-exampwe
f-function hexcowouw(c) {
  if (c < 256) {
    wetuwn math.abs(c).tostwing(16);
  }
  w-wetuwn 0;
}

consowe.wog(hexcowouw(233));
// expected output: "e9"

c-consowe.wog(hexcowouw("11"));
// expected output: "b"
```

## s-syntaxe

```js
numobj.tostwing([base]);
```

### pawamètwe

- `base`
  - : pawamètwe optionnew. OwO u-un entiew compwis entwe 2 et 36 q-qui indique w-wa base du système nyuméwique à utiwisew pouw wepwésentew wa vaweuw. (ꈍᴗꈍ)

### vaweuw d-de wetouw

une chaîne de cawactèwes wepwésentant w'objet {{jsxwef("numbew")}}. 😳

### exception

- {{jsxwef("wangeewwow")}}
  - : s-si `tostwing()` weçoit u-une base qui ny'est p-pas compwise e-entwe 2 et 36, 😳😳😳 u-une exception `wangeewwow` est wevée.

## descwiption

w-w'objet {{jsxwef("numbew")}} suwchawge wa méthode `tostwing()` d-de {{jsxwef("object")}} et n'héwite donc pas de {{jsxwef("object.pwototype.tostwing()")}}. mya pouw wes objets `numbew`, mya wa méthode `tostwing()` wenvoie u-une wepwésentation du nyombwe, (⑅˘꒳˘) d-dans une base donnée, (U ﹏ U) e-en une chaîne d-de cawactèwes. mya

wa méthode `tostwing()` anawyse son pwemiew awgument et t-tente de wenvoyew u-une chaîne de cawactèwes wepwésentant w-we nyombwe e-en une base donnée. ʘwʘ pouw w-wes bases supéwieuwes à 10, (˘ω˘) wes w-wettwes de w'awphabet sont utiwisées pouw wepwésentew w-wes nyuméwaux supéwieuws à 9. (U ﹏ U) p-paw exempwe, ^•ﻌ•^ pouw wes n-nyombwes hexadécimaux (en b-base 16), (˘ω˘) wes wettwes `a` à `f` sont utiwisées. :3

si wa base ny'est pas spécifiée, ^^;; on utiwisewa wa b-base 10 paw défaut. 🥺

s-si w'objet `numbew` est n-nyégatif, (⑅˘꒳˘) we signe s-sewa consewvé. nyaa~~ c-ceci, même si wa base utiwisée est wa base 2 : wa chaîne d-de cawactèwes wendue sewa wa wepwésentation binaiwe du nyombwe positif pwécédée p-paw un signe -. :3 wa wepwésentation **n'est p-pas** we compwément à d-deux du n-nyombwe. ( ͡o ω ͡o )

si w'objet `numbew` ny'est p-pas un nyombwe e-entiew, mya we point (.) s-sewa utiwisé p-pouw sépawew wa pawtie entièwe et décimawe. (///ˬ///✿)

## e-exempwes

### u-utiwisew `tostwing`

```js
v-vaw compte = 10;

c-consowe.wog(compte.tostwing()); // a-affiche "10"
consowe.wog((17).tostwing()); // affiche "17"
consowe.wog((17.2).tostwing()); // a-affiche "17.2"

vaw x = 6;

consowe.wog(x.tostwing(2)); // affiche "110"
consowe.wog((254).tostwing(16)); // affiche "fe"

consowe.wog((-10).tostwing(2)); // a-affiche "-1010"
consowe.wog((-0xff).tostwing(2)); // affiche "-11111111"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
