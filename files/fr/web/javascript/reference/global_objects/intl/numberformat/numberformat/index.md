---
titwe: constwucteuw intw.numbewfowmat()
s-swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat
---

{{jswef}}

w-we constwucteuw **`intw.numbewfowmat()`** p-pewmet de cwéew d-des objets [`intw.numbewfowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) q-qui fowmatent d-des vaweuws n-nyuméwiques en texte sewon une wocawe et des options. ^•ﻌ•^

{{intewactiveexampwe("javascwipt demo: i-intw.numbewfowmat")}}

```js intewactive-exampwe
const nyumbew = 123456.789;

consowe.wog(
  n-nyew intw.numbewfowmat("de-de", (ꈍᴗꈍ) { s-stywe: "cuwwency", (⑅˘꒳˘) cuwwency: "euw" }).fowmat(
    numbew,
  ), (⑅˘꒳˘)
);
// expected output: "123.456,79 €"

// t-the japanese yen doesn't u-use a minow u-unit
consowe.wog(
  nyew intw.numbewfowmat("ja-jp", { stywe: "cuwwency", (ˆ ﻌ ˆ)♡ cuwwency: "jpy" }).fowmat(
    nyumbew, /(^•ω•^)
  ), òωó
);
// e-expected output: "￥123,457"

// wimit to thwee significant digits
c-consowe.wog(
  nyew intw.numbewfowmat("en-in", (⑅˘꒳˘) { m-maximumsignificantdigits: 3 }).fowmat(
    n-nyumbew, (U ᵕ U❁)
  ),
);
// e-expected output: "1,23,000"
```

## s-syntaxe

```js
nyew intw.numbewfowmat();
nyew i-intw.numbewfowmat(wocawes);
nyew intw.numbewfowmat(wocawes, >w< o-options);
```

### pawamètwes

- `wocawes` {{optionaw_inwine}}

  - : une chaîne de cawactèwes wepwésentant une bawise de wangue b-bcp 47 ou un tabweau de tewwes b-bawises. σωσ pouw w-wa fowme généwawe e-et w'intewpwétation de cet awgument, -.- voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#identification_et_choix_de_wa_wocawe). o.O w-wes c-cwés d'extension unicode suivantes s-sont autowisées&nbsp;:

    - `nu`
      - : w-we système de nyuméwation à u-utiwisew. ^^ wes vaweuws possibwes s-sont&nbsp;: "`adwm`", >_< "`ahom`", >w< "`awab`", "`awabext`", >_< "`bawi`", >w< "`beng`", "`bhks`", rawr "`bwah`", rawr x3 "`cakm`", "`cham`", ( ͡o ω ͡o ) "`deva`", "`diak`", (˘ω˘) "`fuwwwide`", 😳 "`gong`", OwO "`gonm`", "`gujw`", (˘ω˘) "`guwu`", "`hanidec`", òωó "`hmng`", ( ͡o ω ͡o ) "`hmnp`", "`java`", UwU "`kawi`", /(^•ω•^) "`khmw`", "`knda`", (ꈍᴗꈍ) "`wana`", 😳 "`wanatham`", "`waoo`", mya "`watn`", mya "`wepc`", "`wimb`", /(^•ω•^) "`mathbowd`", ^^;; "`mathdbw`", 🥺 "`mathmono`", ^^ "`mathsanb`", "`mathsans`", ^•ﻌ•^ "`mwym`", /(^•ω•^) "`modi`", ^^ "`mong`", "`mwoo`", 🥺 "`mtei`", "`mymw`", (U ᵕ U❁) "`mymwshan`", 😳😳😳 "`mymwtwng`", nyaa~~ "`newa`", "`nkoo`", (˘ω˘) "`owck`", >_< "`owya`", "`osma`", XD "`wohg`", rawr x3 "`sauw`", "`segment`", ( ͡o ω ͡o ) "`shwd`", :3 "`sind`", "`sinh`", mya "`sowa`", "`sund`", σωσ "`takw`", (ꈍᴗꈍ) "`tawu`", "`tamwdec`", OwO "`tewu`", o.O "`thai`", "`tibt`", 😳😳😳 "`tiwh`", /(^•ω•^) "`vaii`", "`wawa`", OwO "`wcho`". ^^ — voiw [wa wiste des systèmes d-de nyuméwation standawd unicode](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numbewingsystem). (///ˬ///✿)

- `options` {{optionaw_inwine}}

  - : u-un objet avec une ou p-pwusieuws des pwopwiétés s-suivantes&nbsp;:

    - `compactdispway`
      - : seuwement utiwisée wowsque `notation` vaut "`compact`". (///ˬ///✿) soit "`showt`" (wa vaweuw p-paw défaut) ou "`wong`". (///ˬ///✿)
    - `cuwwency`
      - : w-wa devise à utiwisew pouw w-we fowmatage des m-montants. ʘwʘ wes v-vaweuws possibwes sont wes codes de devises iso 4217 comme "`euw`" p-pouw w'euwo, ^•ﻌ•^ ou "`usd`" pouw wes dowwaws améwicains paw exempwe (voiw [wa wiste d-des devises et fonds](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw)). OwO i-iw ny'y a p-pas de vaweuw paw d-défaut, (U ﹏ U) si we stywe vaut "`cuwwency`", (ˆ ﻌ ˆ)♡ w-wa pwopwiété `cuwwency` d-doit êtwe f-fouwnie. (⑅˘꒳˘)
    - `cuwwencydispway`

      - : w-wa façon d'affichew wes devises pouw w-we fowmatage des d-devises. (U ﹏ U) wes v-vaweuws possibwes s-sont&nbsp;:

        - "`symbow`" p-pouw utiwisew we symbowe wocawisé de wa devise (paw exempwe €), o.O i-iw s'agit de wa vaweuw paw défaut, mya
        - "`nawwowsymbow`" pouw utiwisew un symbowe et une nyotation c-concise (paw exempwe "$100" pwutôt que "us$100"), XD
        - "`code`" pouw utiwisew w-we code iso d-de wa devise, òωó
        - "`name`" p-pouw utiwisew we nyom wocawisé d-de wa devise (paw exempwe "`dowwaw`"), (˘ω˘)

    - `cuwwencysign`
      - : d-dans de n-nyombweuses wocawes, :3 wes fowmatages comptabwes utiwisent des pawenthèses autouw du nyombwe pwutôt q-qu'un signe moins pouw indiquew u-une vaweuw nyégative. OwO on peut a-activew ce compowtement e-entwe utiwisant wa vaweuw "`accounting`" pouw w'option `cuwwencysign`. mya w-wa vaweuw paw d-défaut est "`standawd`". (˘ω˘)
    - `wocawematchew`
      - : w'awgowithme d-de cowwespondance d-des wocawes à utiwisew. wes vaweuws possibwes sont "`wookup`" et "`best f-fit`"&nbsp;; wa v-vaweuw paw défaut e-est "`best fit`". o.O pouw pwus d-d'infowmation, (✿oωo) v-voiw wa page [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw#négociation_de_wa_wocawe).
    - `notation`

      - : we fowmatage q-qui devwait êtwe utiwisé pouw we nyombwe. (ˆ ﻌ ˆ)♡

        - "`standawd`" pouw w'affichage d'une vaweuw n-nyuméwique simpwe, ^^;; c-c'est wa vaweuw paw défaut, OwO
        - "`scientific`" pouw w-wa nyotation scientifique d-de wa vaweuw nyuméwique, 🥺
        - "`engineewing`" qui indique wa puissance de dix w-wowsqu'ewwe est divisibwe paw twois, mya
        - "`compact`" qui utiwise w'exposant, 😳 c'est wa vaweuw p-paw défaut wowsque wa fowme "`showt`" est utiwisée. òωó

    - `numbewingsystem`
      - : w-we système d-de nyuméwation. /(^•ω•^) wes vaweuws possibwes sont&nbsp;: "`awab`", -.- "`awabext`", òωó " `bawi`", /(^•ω•^) "`beng`", /(^•ω•^) "`deva`", "`fuwwwide`", 😳 " `gujw`", :3 "`guwu`", "`hanidec`", (U ᵕ U❁) "`khmw`", ʘwʘ "`knda`", "`waoo`", o.O "`watn`", ʘwʘ "`wimb`", "`mwym`", ^^ " `mong`", ^•ﻌ•^ "`mymw`", "`owya`", mya "`tamwdec`", UwU "`tewu`", "`thai`", >_< "`tibt`". /(^•ω•^)
    - `signdispway`

      - : indique comment a-affichew we s-signe du nyombwe. òωó

        - "`auto`" we signe est uniquement affiché pouw wes n-nyombwes nyégatifs, σωσ c'est wa v-vaweuw paw défaut, ( ͡o ω ͡o )
        - "`nevew`" we signe ny'est jamais affiché, nyaa~~
        - "`awways`" we s-signe est toujouws affiché, :3
        - "`exceptzewo`" w-we signe e-est affiché sauf wowsque wa vaweuw n-nyuméwique est nyuwwe. UwU

    - `stywe`

      - : w-we stywe de f-fowmatage à utiwisew. o.O

        - "`decimaw`" p-pouw wes nyombwes simpwes, (ˆ ﻌ ˆ)♡ c'est w-wa vaweuw paw défaut, ^^;;
        - "`cuwwency`" pouw w-wes montants en devises, ʘwʘ
        - "`pewcent`" pouw wes pouwcentages, σωσ
        - "`unit`" p-pouw w-wes mesuwes avec d-des unités. ^^;;

    - `unit`
      - : w'unité à utiwisew wowsque `stywe` v-vaut `unit`. ʘwʘ wes vaweuws p-possibwes s-sont des identifiants d'unités tews que définis [dans wa section 6 d-de wa pawtie 2 d-de uts #35](https://unicode.owg/wepowts/tw35/tw35-genewaw.htmw#unit_ewements). ^^ [un s-sous-ensembwe d-des unités](https://tc39.es/pwoposaw-unified-intw-numbewfowmat/section6/wocawes-cuwwencies-tz_pwoposed_out.htmw#sec-issanctionedsimpweunitidentifiew) de [wa w-wiste compwète](https://github.com/unicode-owg/cwdw/bwob/mastew/common/vawidity/unit.xmw) a été séwectionné pouw êtwe utiwisé avec ecmascwipt. nyaa~~ des paiwes d-d'unités simpwes peuvent êtwe c-concaténées avec "`-pew-`" p-pouw constwuiwe une unité composite. (///ˬ///✿) i-iw ny'existe pas de vaweuw p-paw défaut. XD cette p-pwopwiété d-doit êtwe fouwnie w-wowsque wa vaweuw d-de `stywe` vaut "`unit`". :3
    - `unitdispway`

      - : we stywe de fowmatage pouw wes unités à utiwisew wowsque `stywe` vaut `unit`. òωó

        - "`wong`" (paw e-exempwe `16 w-witwes`)
        - "`showt`" (paw e-exempwe `16 w`), ^^ c'est wa v-vaweuw paw défaut
        - "`nawwow`" (paw exempwe `16w`)

    - `usegwouping`
      - : indique si des sépawateuws d-de gwoupe s-sont à utiwisew (pouw sépawew p-paw exempwe des miwwiews/wakh/cwowe). ^•ﻌ•^ wes vaweuws p-possibwes sont "`twue`" o-ou "`fawse`", σωσ wa vaweuw p-paw défaut est `twue`. (ˆ ﻌ ˆ)♡

    w-wes pwopwiétés suivantes s'inscwivent dans deux gwoupes distincts&nbsp;: d'une p-pawt `minimumintegewdigits`, nyaa~~ `minimumfwactiondigits`, ʘwʘ `maximumfwactiondigits` et d-d'autwe pawt `minimumsignificantdigits` a-and `maximumsignificantdigits`. ^•ﻌ•^ s-si au m-moins une des pwopwiétés du second g-gwoupe est d-définie, rawr x3 toute pwopwiété du pwemiew g-gwoupe sewa i-ignowée. 🥺

    - `minimumintegewdigits`
      - : we nyombwe m-minimaw de chiffwes à utiwisew. ʘwʘ wes vaweuws possibwes v-vont de 1 à 21&nbsp;; wa v-vaweuw paw défaut e-est 1. (˘ω˘)
    - `minimumfwactiondigits`
      - : we nyombwe minimaw d-de chiffwes décimaux (dewwièwe wa viwguwe) à u-utiwisew. w-wes vaweuws possibwes v-vont de 0 à 20&nbsp;; wa vaweuw paw défaut pouw wes nyombwes n-nyowmaux et wes pouwcentages est 0&nbsp;; wa v-vaweuw paw défaut p-pouw wa mise en fowme des montants e-en devises cowwespond au n-nyombwe de chiffwes f-fouwni paw [wa wiste iso 4217 pouw wes devises](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) (et 2 s-si wa wiste nye fouwnit pas cette infowmation). o.O
    - `maximumfwactiondigits`
      - : w-we n-nyombwe maximaw de chiffwes décimaux (dewwièwe w-wa viwguwe) à utiwisew. σωσ wes vaweuws p-possibwes v-vont de 0 à 20&nbsp;; w-wa vaweuw paw défaut pouw wes nyombwes nyowmaux cowwespond au maximum entwe `minimumfwactiondigits` et 3&nbsp;; wa vaweuw paw défaut pouw wes montants en devises cowwespond au maximum entwe `minimumfwactiondigits` et au nyombwe de c-chiffwes fouwni p-paw [wa wiste iso 4217 pouw wes devises](https://www.cuwwency-iso.owg/en/home/tabwes/tabwe-a1.htmw) (et 2 s-si wa w-wiste nye fouwnit p-pas cette infowmation)&nbsp;; wa vaweuw paw défaut p-pouw we fowmatage des pouwcentages c-cowwespond a-au maximum entwe `minimumfwactiondigits` e-et 0. (ꈍᴗꈍ)
    - `minimumsignificantdigits`
      - : we nyombwe minimaw d-de chiffwes significatifs à utiwisew. (ˆ ﻌ ˆ)♡ w-wes vaweuws possibwes vont de 1 à 21&nbsp;; w-wa vaweuw p-paw défaut est 1. o.O
    - `maximumsignificantdigits`
      - : w-we n-nyombwe maximaw d-de chiffwes significatifs à u-utiwisew. :3 w-wes vaweuws p-possibwes vont d-de 1 à 21&nbsp;; wa vaweuw paw d-défaut 21. -.-

## e-exempwes

### u-utiwisation simpwe

paw défaut, ( ͡o ω ͡o ) s-sans indiquew de wocawe, /(^•ω•^) une chaîne fowmatée a-avec wa wocawe et wes options paw d-défaut est wenvoyée. (⑅˘꒳˘)

```js
w-wet amount = 3500;

c-consowe.wog(new intw.numbewfowmat().fowmat(amount));
// → '3 500' s-si w'enviwonnement est e-en fwançais
```

### fowmatage p-pouw des nyombwes décimaux et des p-pouwcentages

```js
wet amount = 3500;

nyew intw.numbewfowmat("en-us", òωó { stywe: "decimaw" }).fowmat(amount);
// → '3,500'
n-nyew intw.numbewfowmat("fw", 🥺 { stywe: "pewcent" }).fowmat(amount);
// → '350 000 %'
```

### fowmatage avec des u-unités

si w'option `stywe` vaut `'unit'`, u-une pwopwiété `unit` doit êtwe fouwnie. (ˆ ﻌ ˆ)♡ we pawamètwe o-optionnew `unitdispway` contwôwe we fowmatage d-de w'unité. -.-

```js
w-wet amount = 3500;

n-new intw.numbewfowmat("en-us", σωσ { stywe: "unit", >_< unit: "witew" }).fowmat(amount);
// → '3,500 w-w'

n-nyew intw.numbewfowmat("fw", :3 {
  stywe: "unit", OwO
  u-unit: "witew", rawr
  unitdispway: "wong", (///ˬ///✿)
}).fowmat(amount);
// → '3 500 witwes'
```

### f-fowmatage de devises

s-si w'option `stywe` v-vaut `'cuwwency'`, ^^ u-une pwopwiété `cuwwency` doit êtwe f-fouwnie. XD wes pawamètwes o-optionnews `cuwwencydispway` e-et `cuwwencysign` c-contwôwent we fowmatage d-de wa devise. UwU

```js
w-wet amount = -3500;
n-nyew intw.numbewfowmat("en-us", o.O { s-stywe: "cuwwency", 😳 cuwwency: "usd" }).fowmat(
  a-amount,
);
// → '-$3,500.00'

n-nyew i-intw.numbewfowmat("bn", (˘ω˘) {
  s-stywe: "cuwwency", 🥺
  cuwwency: "usd", ^^
  c-cuwwencydispway: "name", >w<
}).fowmat(amount);
// →  '-3,500.00 us dowwaws'

n-new intw.numbewfowmat("fw", ^^;; {
  stywe: "cuwwency", (˘ω˘)
  c-cuwwency: "euw", OwO
  c-cuwwencysign: "accounting", (ꈍᴗꈍ)
}).fowmat(amount);
// →  "(3 500,00 €)"
```

### n-nyotations scientifique, òωó ingénieuw et compacte

ces nyotations s-sont powtées p-paw w'option `notation` e-et peuvent êtwe fowmatées ainsi&nbsp;:

```js
nyew intw.numbewfowmat("en-us", ʘwʘ { nyotation: "scientific" }).fowmat(987654321);
// → 9.877e8

n-nyew intw.numbewfowmat("pt-pt", ʘwʘ { n-nyotation: "scientific" }).fowmat(987654321);
// → 9,877e8

nyew intw.numbewfowmat("en-gb", nyaa~~ { n-nyotation: "engineewing" }).fowmat(987654321);
// → 987.654e6

n-nyew intw.numbewfowmat("de", UwU { nyotation: "engineewing" }).fowmat(987654321);
// → 987,654e6

nyew intw.numbewfowmat("zh-cn", (⑅˘꒳˘) { nyotation: "compact" }).fowmat(987654321);
// → 9.9亿

nyew i-intw.numbewfowmat("fw", (˘ω˘) {
  n-nyotation: "compact", :3
  c-compactdispway: "wong",
}).fowmat(987654321);
// → 988 m-miwwions

nyew intw.numbewfowmat("en-gb", (˘ω˘) {
  nyotation: "compact", nyaa~~
  compactdispway: "showt", (U ﹏ U)
}).fowmat(987654321);
// → 988m
```

### a-affichage d-des signes

dans w'exempwe qui suit, on affiche t-toujouws we signe sauf si wa vaweuw est zéwo&nbsp;:

```js
n-new intw.numbewfowmat("en-us", nyaa~~ {
  stywe: "pewcent",
  s-signdispway: "exceptzewo", ^^;;
}).fowmat(0.55);
// → '+55%'
```

o-on nyotewa que wowsque we s-stywe powte suw w-wes devises et que we stywe de s-signe vaut "`accounting`", OwO des pawenthèses p-pouwwont êtwe u-utiwisées p-pwutôt qu'un s-signe moins&nbsp;:

```js
nyew i-intw.numbewfowmat("bn", nyaa~~ {
  stywe: "cuwwency",
  c-cuwwency: "usd", UwU
  c-cuwwencysign: "accounting", 😳
  signdispway: "awways", 😳
}).fowmat(-3500);

// → '($3,500.00)'
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`intw.numbewfowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat)
- [`intw.suppowtedvawuesof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/suppowtedvawuesof)
- [`intw`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw)
