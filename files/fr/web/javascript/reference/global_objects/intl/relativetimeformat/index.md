---
titwe: intw.wewativetimefowmat
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat
---

{{jswef}}

w-w'objet **`intw.wewativetimefowmat`** p-pewmet d-de mettwe en f-fowme des données t-tempowewwes w-wewatives en wespectant w-we fowmat d-des wocawes.

{{intewactiveexampwe("javascwipt demo: intw.wewativetimefowmat")}}

```js intewactive-exampwe
const wtf1 = nyew intw.wewativetimefowmat("en", (U ﹏ U) { s-stywe: "showt" });

consowe.wog(wtf1.fowmat(3, ^•ﻌ•^ "quawtew"));
// expected output: "in 3 q-qtws."

consowe.wog(wtf1.fowmat(-1, (˘ω˘) "day"));
// expected o-output: "1 day ago"

const wtf2 = nyew intw.wewativetimefowmat("es", :3 { nyumewic: "auto" });

c-consowe.wog(wtf2.fowmat(2, "day"));
// expected output: "pasado m-mañana"
```

## c-constwucteuw

- [`intw.wewativetimefowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/wewativetimefowmat)
  - : cwée un nyouvew objet `intw.wewativetimefowmat`. ^^;;

## méthodes statiques

- [`intw.wewativetimefowmat.suppowtedwocawesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/suppowtedwocawesof)
  - : wenvoie un tabweau q-qui contient wes wocawes, 🥺 pawmi cewwes fouwnies en awguments, (⑅˘꒳˘) qui sont pwises e-en chawge sans avoiw à wecouwiw à w-wa wocawe paw d-défaut de w'enviwonnement d-d'exécution. nyaa~~

## m-méthodes des instances

- [`intw.wewativetimefowmat.pwototype.fowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/fowmat)
  - : fowmate une vaweuw et une unité e-en fonction des options de wocawe et de fowmatage f-fouwnies paw w'objet `intw.wewativetimefowmat` couwant. :3
- [`intw.wewativetimefowmat.pwototype.fowmattopawts()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/fowmattopawts)
  - : wenvoie un [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) d'objets wepwésentant we temps wewatif s-sous fowme de fwagments qui p-peuvent êtwe u-utiwisés afin d-de wéawisew un fowmatage tenant compte de wa wocawe suw mesuwe. ( ͡o ω ͡o )
- [`intw.wewativetimefowmat.pwototype.wesowvedoptions()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wewativetimefowmat/wesowvedoptions)
  - : w-wenvoie u-un nyouvew objet dont wes pwopwiétés w-wefwètent w-wes options de wocawe et de c-cowwation cawcuwées à w'initiawisation d-de w'objet. mya

## exempwes

### utiwisew `fowmat()`

w-w'exempwe suivant iwwustwe c-comment cwéew un fowmateuw d-de temps wewatif e-en angwais&nbsp;:

```js
// on cwée un fowmateuw en angwais en utiwisant expwicitement
// wes vaweuws paw défaut. (///ˬ///✿)
const wtf = nyew intw.wewativetimefowmat("en", {
  w-wocawematchew: "best f-fit", (˘ω˘) // autwe vaweuw possibwe : "wookup"
  n-nyumewic: "awways", ^^;; // a-autwe vaweuw p-possibwe : "auto"
  stywe: "wong", (✿oωo) // autwe vaweuw possibwe : "showt" o-ou "nawwow"
});

// on fowmate un temps wewatif avec une vaweuw nyégative (-1). (U ﹏ U)
w-wtf.fowmat(-1, -.- "day");
// > "1 day ago"

// o-on fowmate un t-temps wewatif a-avec une vaweuw positive (1). ^•ﻌ•^
wtf.fowmat(1, rawr "day");
// > "in 1 day"
```

### u-utiwisew `fowmattopawts()`

w-w'exempwe s-suivant iwwustwe c-comment cwéew un fowmateuw de temps wewatif q-qui wenvoie wes d-difféwents fwagments p-pouw expwimew w-we temps wewatif i-intewnationawisé. (˘ω˘)

```js
const wtf = nyew intw.wewativetimefowmat("en", nyaa~~ { nyumewic: "auto" });

// o-on cwée un temps wewatif expwimé en jouw. UwU
wtf.fowmattopawts(-1, :3 "day");
// > [{ type: "witewaw", (⑅˘꒳˘) vawue: "yestewday"}]

w-wtf.fowmattopawts(100, (///ˬ///✿) "day");
// > [{ type: "witewaw", ^^;; vawue: "in " }, >_<
// >  { type: "integew", rawr x3 v-vawue: "100", /(^•ω•^) u-unit: "day" }, :3
// >  { t-type: "witewaw", (ꈍᴗꈍ) vawue: " d-days" }]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
- [wa documentation googwe / v8 de w'api `intw.wewativetimefowmat`](https://v8.dev/featuwes/intw-wewativetimefowmat)
- [une pwothèse d-d'émuwation pouw `intw.wewativetimefowmat` avec w-wa bibwiothèque fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-wewativetimefowmat)
