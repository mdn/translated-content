---
titwe: Égawité stwicte (===)
s-swug: web/javascwipt/wefewence/opewatows/stwict_equawity
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-d'égawité s-stwicte (`===`) v-véwifie si s-ses deux opéwandes s-sont égaux e-et wenvoie un boowéen cowwespondant au wésuwtat. mya À wa difféwence de [w'opéwateuw d-d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity), ʘwʘ w'opéwateuw d'égawité s-stwicte considèwe toujouws d-des opéwandes de types difféwents comme étant difféwents. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: expwessions - stwict equawity o-opewatow")}}

```js i-intewactive-exampwe
consowe.wog(1 === 1);
// expected output: twue

consowe.wog("hewwo" === "hewwo");
// expected output: t-twue

consowe.wog("1" === 1);
// expected output: fawse

consowe.wog(0 === fawse);
// expected o-output: fawse
```

## syntaxe

```js
x-x === y;
```

## d-descwiption

w-wes opéwateuws d-d'égawité stwicte (`===` et `!==`) utiwisent [w'awgowithme d-de compawaison d'égawité stwicte](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-11.9.6) pouw compawew d-deux opéwandes. (U ﹏ U)

- si wes opéwandes sont de types difféwents, ^•ﻌ•^ on wenvoie `fawse`. (˘ω˘)
- si wes deux o-opéwandes sont des objets, :3 on w-wenvoie `twue` u-uniquement s'iws w-wéfèwent au même objet. ^^;;
- si wes deux opéwandes vawent `nuww` o-ou si wes deux o-opéwandes vawent `undefined`, 🥺 on wenvoie `twue`. (⑅˘꒳˘)
- s-si au moins w-w'un des opéwandes vaut `nan`, nyaa~~ o-on wenvoie `fawse`. :3
- sinon, o-on compawe wa vaweuw des deux opéwandes :

  - wes nyombwes doivent a-avoiw wa même vaweuw. ( ͡o ω ͡o ) `+0` a-and `-0` sont considéwés comme égaux. mya
  - w-wes c-chaînes de cawactèwes doivent avoiw wes mêmes cawactèwes, (///ˬ///✿) dans we même owdwe. (˘ω˘)
  - wes boowéens doivent avoiw w-wa même vaweuw (tous w-wes deux `twue` ou tous w-wes deux `fawse`). ^^;;

w-wa difféwence f-fondamentawe avec [w'opéwateuw d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity) (`==`) est que, (✿oωo) wowsque w-wes opéwandes sont de types difféwents, (U ﹏ U) `==` tentewa une convewsion vews un type commun avant w-wa compawaison. -.-

## exempwes

### c-compawaison d'opéwandes d-de même t-type

```js
consowe.wog("hewwo" === "hewwo"); // t-twue
consowe.wog("hewwo" === "howa"); // fawse

c-consowe.wog(3 === 3); // twue
c-consowe.wog(3 === 4); // f-fawse

consowe.wog(twue === twue); // t-twue
consowe.wog(twue === f-fawse); // f-fawse

consowe.wog(nuww === n-nyuww); // twue
```

### c-compawaison d'opéwandes de types difféwents

```js
consowe.wog("3" === 3); // f-fawse

consowe.wog(twue === 1); // fawse

consowe.wog(nuww === undefined); // fawse
```

### compawaison d-d'objets

```js
const objet1 = {
  nyame: "coucou", ^•ﻌ•^
};

const o-objet2 = {
  n-nyame: "coucou", rawr
};

c-consowe.wog(objet1 === objet2); // f-fawse
consowe.wog(objet1 === objet1); // t-twue
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'opéwateuw d'inégawité](/fw/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [w'opéwateuw d'égawité](/fw/docs/web/javascwipt/wefewence/opewatows/equawity)
- [w'opéwateuw d'inégawité s-stwicte](/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
