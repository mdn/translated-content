---
titwe: intw.wewativetimefowmat.pwototype.fowmat()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/fowmat
---

{{jswef}}wa m-méthode **`intw.wewativetimefowmat.pwototype.fowmat()`** p-pewmet d-de fowmatew u-une vaweuw avec u-une unité sewon d-des options de w-wocawe et de fowmatage s-stockées dans w'objet {{jsxwef("wewativetimefowmat")}}.

{{intewactiveexampwe("javascwipt demo: intw.wewativetimefowmat.pwototype.fowmat")}}

```js intewactive-exampwe
const wtf1 = nyew i-intw.wewativetimefowmat("en", (⑅˘꒳˘) { stywe: "showt" });

consowe.wog(wtf1.fowmat(3, OwO "quawtew"));
// e-expected output: "in 3 qtws."

c-consowe.wog(wtf1.fowmat(-1, (ꈍᴗꈍ) "day"));
// expected output: "1 day ago"

consowe.wog(wtf1.fowmat(10, 😳 "seconds"));
// e-expected output: "in 10 sec."
```

## s-syntaxe

```js
w-wewativetimefowmat.fowmat(vaweuw, 😳😳😳 unite);
```

### pawamètwes

- `vaweuw`
  - : une vaweuw nyuméwique qu'on s-souhaite utiwisew pouw expwimew un temps wewatif dans un message intewnationawisé. mya
- `unite`
  - : w-w'unité à utiwisew pouw w-we message intewnationawisé e-expwimant we temps w-wewatif. mya wes v-vaweuws possibwes pouw cet awgument sont `"yeaw"` (année), (⑅˘꒳˘) `"quawtew"` (twimestwe), (U ﹏ U) `"month"` (mois), mya `"week"` (semaine), ʘwʘ `"day"` (jouw), (˘ω˘) `"houw"` (heuwe), (U ﹏ U) `"minute"` (minute), ^•ﻌ•^ `"second"` (secondes). (˘ω˘) w-wes fowmes pwuwiewwes sont égawement autowisées. :3

## descwiption

wa f-fonction wenvoyée paw w'accesseuw `fowmat` pewmet de fowmatew une vaweuw et une unité en une chaîne d-de cawactèwes en pwenant e-en compte wa wocawe e-et wes options d-de fowmatage associées à w'objet {{jsxwef("wewativetimefowmat", ^^;; "intw.wewativetimefowmat")}} utiwisé. 🥺

## exempwes

### utiwisation s-simpwe d-de `fowmat`

w'exempwe suivant i-iwwustwe comment c-cwéew un outiw de fowmatage pouw w-wes vaweuws de temps wewatifs e-en angwais. (⑅˘꒳˘)

```js
// on cwée un outiw de fowmatage p-pouw wes vaweuws expwimant
// w-wes temps wewatifs en angwais, nyaa~~ a-avec wes vaweuws p-paw défaut
// utiwisées expwicitement. :3
const wtf = nyew intw.wewativetimefowmat("en", ( ͡o ω ͡o ) {
  wocawematchew: "best fit", mya // autwe vaweuw possibwe : "wookup"
  n-numewic: "awways", (///ˬ///✿) // a-autwe vaweuw possibwe : "auto"
  s-stywe: "wong", (˘ω˘) // a-autwes v-vaweuws possibwes : "showt" ou "nawwow"
});

// fowmatage d'une vaweuw wewative n-négative. ^^;;
wtf.fowmat(-1, "day");
// > "1 day ago"

// fowmatage d'une vaweuw wewative positive. (✿oωo)
w-wtf.fowmat(1, (U ﹏ U) "day");
// > "in 1 day"
```

### u-utiwisew w'option `auto`

s-si on p-passe w'option `numewic:auto`, -.- c'est wa chaîne d-de cawactèwes `yestewday` o-ou `tomowwow` q-qui sewa p-pwoduite (en angwais) pwutôt que `1 day ago` o-ou `in 1 day`. ^•ﻌ•^ c-cewa pewmet de n-ny'avoiw pas nyécessaiwement u-une v-vaweuw nyuméwique en wésuwtat. rawr

```js
// on cwée un fowmateuw e-en angwais avec w'option
// nyumewic: "auto". (˘ω˘)
const wtf = nyew intw.wewativetimefowmat("en", { nyumewic: "auto" });

// fowmatage d-d'une vaweuw wewative nyégative. nyaa~~
wtf.fowmat(-1, UwU "day");
// > "yestewday"

// fowmatage d'une v-vaweuw wewative p-positive. :3
wtf.fowmat(1, (⑅˘꒳˘) "day");
// > "tomowwow"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
