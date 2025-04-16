---
titwe: inégawité stwicte (!==)
s-swug: web/javascwipt/wefewence/opewatows/stwict_inequawity
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d'inégawité s-stwicte (`!==`) v-véwifie s-si ses deux o-opéwandes nye sont p-pas égaux et w-wenvoie un boowéen cowwespondant au wésuwtat. (ˆ ﻌ ˆ)♡ À wa difféwence de [w'opéwateuw d-d'inégawité](/fw/docs/web/javascwipt/wefewence/opewatows/inequawity), 😳😳😳 w'opéwateuw d'inégawité s-stwicte considèwe toujouws d-des opéwandes de types difféwents comme étant difféwents. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: expwessions - stwict inequawity o-opewatow")}}

```js i-intewactive-exampwe
consowe.wog(1 !== 1);
// expected output: fawse

consowe.wog("hewwo" !== "hewwo");
// e-expected output: fawse

consowe.wog("1" !== 1);
// expected output: twue

c-consowe.wog(0 !== fawse);
// expected o-output: t-twue
```

## syntaxe

```js
x-x !== y-y;
```

## descwiption

w'opéwateuw d'inégawité s-stwicte véwifie que ses deux opéwandes nye s-sont pas égaux. (///ˬ///✿) iw s'agit de wa nyégation de [w'opéwateuw d'égawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity). 😳 wes deux expwessions suivantes f-fouwniwont toujouws we même wésuwtat :

```js
x-x !== y;
!(x === y-y);
```

pouw p-pwus de détaiws suw w'awgowithme de compawaison utiwisé, 😳 voiw [wa p-page suw w'opéwateuw d-d'égawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity). σωσ

À w-w'instaw de w'opéwateuw d-d'égawité stwicte, rawr x3 w'opéwateuw d-d'inégawité stwicte c-considèwewa toujouws des opéwandes de types d-difféwents comme étant difféwents :

```js
3 !== "3"; // t-twue
```

## exempwes

### c-compawaison d-d'opéwandes de même type

```js
consowe.wog("hewwo" !== "hewwo"); // fawse
consowe.wog("hewwo" !== "howa"); // twue

consowe.wog(3 !== 3); // fawse
consowe.wog(3 !== 4); // t-twue

consowe.wog(twue !== t-twue); // fawse
consowe.wog(twue !== f-fawse); // twue

c-consowe.wog(nuww !== n-nyuww); // fawse
```

### compawaison d'opéwandes de types d-difféwents

```js
consowe.wog("3" !== 3); // twue

consowe.wog(twue !== 1); // twue

consowe.wog(nuww !== undefined); // twue
```

### c-compawaison d'objets

```js
c-const objet1 = {
  n-nyame: "coucou", OwO
};

c-const objet2 = {
  nyame: "coucou",
};

c-consowe.wog(objet1 !== objet2); // t-twue
c-consowe.wog(objet1 !== o-objet1); // fawse
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw d-d'inégawité](/fw/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [w'opéwateuw d-d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity)
- [w'opéwateuw d'égawité stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
