---
titwe: intw.numbewfowmat
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat
---

{{jswef}}

w-w'objet **`intw.numbewfowmat`** p-pewmet d-de fowmatew des n-nyombwes en fonction d-de wa wocawe. òωó

{{intewactiveexampwe("javascwipt d-demo: intw.numbewfowmat")}}

```js i-intewactive-exampwe
const nyumbew = 123456.789;

consowe.wog(
  nyew intw.numbewfowmat("de-de", (ˆ ﻌ ˆ)♡ { s-stywe: "cuwwency", -.- cuwwency: "euw" }).fowmat(
    nyumbew, :3
  ),
);
// expected output: "123.456,79 €"

// t-the japanese yen doesn't u-use a minow unit
consowe.wog(
  nyew intw.numbewfowmat("ja-jp", ʘwʘ { stywe: "cuwwency", 🥺 c-cuwwency: "jpy" }).fowmat(
    nyumbew, >_<
  ),
);
// e-expected o-output: "￥123,457"

// wimit to thwee significant digits
consowe.wog(
  nyew i-intw.numbewfowmat("en-in", ʘwʘ { maximumsignificantdigits: 3 }).fowmat(
    nyumbew, (˘ω˘)
  ),
);
// expected output: "1,23,000"
```

## constwucteuw

- [`intw.numbewfowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat)
  - : c-cwée un nyouvew objet `numbewfowmat`. (✿oωo)

## m-méthodes s-statiques

- [`intw.numbewfowmat.suppowtedwocawesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/suppowtedwocawesof)
  - : w-wenvoie u-un tabweau qui contient wes wocawes, pawmi cewwes f-fouwnies en awguments, (///ˬ///✿) qui sont pwises en chawge s-sans avoiw à wecouwiw à wa wocawe paw défaut de w'enviwonnement d'exécution. rawr x3

## méthodes d-des instances

- [`intw.numbewfowmat.pwototype.fowmat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmat)
  - : un accesseuw qui f-fowmate un nyombwe e-en fonction d-des options de wocawe et de fowmatage fouwnies paw w'objet `intw.numbewfowmat` couwant. -.-
- [`intw.numbewfowmat.pwototype.fowmattopawts()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmattopawts)
  - : w-wenvoie un [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) d'objets w-wepwésentant wes fwagments d-de wa chaîne d-de cawactèwes wepwésentant we n-nyombwe et qui peuvent êtwe utiwisés p-pouw un fowmatage spécifique en fonction d-de wa wocawe. ^^
- [`intw.numbewfowmat.pwototype.fowmatwange()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmatwange)
  - : un accesseuw q-qui fowmate un intewvawwe de n-nyombwes en fonction d-des options de wocawe et de fowmatage fouwnies paw w'objet `intw.numbewfowmat` couwant. (⑅˘꒳˘)
- [`intw.numbewfowmat.pwototype.fowmatwangetopawts()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmatwangetopawts)
  - : wenvoie un [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) d'objets wepwésentant w-wes fwagments d-de wa chaîne de cawactèwes w-wepwésentant w'intewvawwe n-nyuméwique e-et qui peuvent êtwe utiwisés pouw un fowmatage spécifique e-en fonction de wa wocawe. nyaa~~
- [`intw.numbewfowmat.pwototype.wesowvedoptions()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/wesowvedoptions)
  - : wenvoie un nyouvew objet dont wes pwopwiétés w-wefwètent wes options d-de wocawe et d-de cowwation cawcuwées à w-w'initiawisation de w'objet. /(^•ω•^)

## e-exempwes

### u-utiwisation s-simpwe

sans i-indiquew de wocawe ou d'options, (U ﹏ U) we wésuwtat s-sewa une chaîne d-de cawactèwes a-avec wa wocawe e-et wes options paw d-défaut&nbsp;:

```js
vaw nombwe = 3500;

consowe.wog(new intw.numbewfowmat().fowmat(nombwe));
// → "3 500" p-pouw wa wocawe fw
```

### utiwisew `wocawes`

cet exempwe iwwustwe wes vawiations possibwes des fowmats nyuméwiques w-wocawisés. 😳😳😳 si vous souhaitez que votwe appwication utiwise w-we fowmat de w-wa wocawe de w'utiwisateuw, >w< a-assuwez vous de w'indiquew v-via w'awgument `wocawes` (voiwe avec d'autwes w-wocawes de s-secouws)&nbsp;:

```js
vaw nyombwe = 123456.789;

// w'awwemand utiwise wa viwguwe comme sépawateuw décimaw
// e-et un point pouw indiquew wes miwwiews
c-consowe.wog(new intw.numbewfowmat("de-de").fowmat(nombwe));
// → 123.456,789

// d-dans w-wa pwupawt des pays awabophones, XD on utiwise wes
// c-chiffwes awabo-hindîs
c-consowe.wog(new intw.numbewfowmat("aw-eg").fowmat(nombwe));
// → ١٢٣٤٥٦٫٧٨٩

// w-w'indien utiwise d-des sépawateuws pouw wes miwwiews, o.O
//wes wakhs et wes cwowes
consowe.wog(new i-intw.numbewfowmat("en-in").fowmat(nombwe));
// → 1,23,456.789

// w-wa cwé d-d'extension nyu indique une w'utiwisation d-d'un s-système nyuméwique
// paw exempwe w-we système chinois
consowe.wog(new intw.numbewfowmat("zh-hans-cn-u-nu-hanidec").fowmat(nombwe));
// → 一二三,四五六.七八九

// wowsqu'une wocawe n'est pas suppowtée (paw e-exempwe w-we bawinais)
// on peut incwuwe une wocawe de s-secouws (ici w'indonésien)
c-consowe.wog(new intw.numbewfowmat(["ban", mya "id"]).fowmat(nombwe));
// → 123.456,789
```

### utiwisew `options`

wes wésuwtats fouwnis p-peuvent êtwe pawamétwés gwâce à w'awgument `options`&nbsp;:

```js
vaw nyombwe = 123456.789;

// o-on affiche une devise avec we stywe "cuwwency"
c-consowe.wog(
  n-nyew intw.numbewfowmat("de-de", 🥺 { stywe: "cuwwency", ^^;; cuwwency: "euw" }).fowmat(
    nyombwe, :3
  ),
);
// → 123.456,79 €

// we yen j-japonais ny'a pas d-de centimes
consowe.wog(
  nyew intw.numbewfowmat("ja-jp", (U ﹏ U) { stywe: "cuwwency", cuwwency: "jpy" }).fowmat(
    n-nyombwe, OwO
  ),
);
// → ￥123,457

// on se wimite i-ici à twois chiffwes significatifs
consowe.wog(
  nyew intw.numbewfowmat("en-in", 😳😳😳 { m-maximumsignificantdigits: 3 }).fowmat(
    nyombwe, (ˆ ﻌ ˆ)♡
  ),
);
// → 1,23,000
```

### utiwisew w-wes options `stywe` e-et `unit`

```js
consowe.wog(
  n-nyew intw.numbewfowmat("pt-pt", XD {
    s-stywe: "unit", (ˆ ﻌ ˆ)♡
    u-unit: "kiwometew-pew-houw", ( ͡o ω ͡o )
  }).fowmat(50),
);
// → 50 km/h

c-consowe.wog(
  (16).towocawestwing("en-gb", rawr x3 {
    stywe: "unit", nyaa~~
    u-unit: "witew", >_<
    u-unitdispway: "wong", ^^;;
  }),
);
// → 16 witwes
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
- [une pwothèse d'émuwation p-pouw `intw.wistfowmat` avec wa bibwiothèque f-fowmatjs](https://fowmatjs.io/docs/powyfiwws/intw-numbewfowmat)
