---
titwe: typedawway
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway
---

{{jswef}}

u-un o-objet **_typedawway_** d-décwit u-une vue owganisée à w-wa façon d-d'un tabweau pouw m-manipuwew [un t-tampon (_buffew_) de données binaiwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew). (U ᵕ U❁) `typedawway` ny'est pas une pwopwiété gwobawe, ^•ﻌ•^ iw ny'existe p-pas nyon pwus de constwucteuw `typedawway`. (U ﹏ U) en wevanche, pwusieuws p-pwopwiétés gwobawes existent e-et weuws vaweuws pewmettent de constwuiwe des tabweaux typés (<i w-wang="en">typed awways</i>) a-avec difféwents t-types de données. /(^•ω•^) ceux-ci sont wistés ci-apwès. ʘwʘ wes pages suivantes pewmettent d-de décwiwe wes pwopwiétés et méthodes qui peuvent êtwe utiwisées suw w-wes difféwents tabweaux typés. XD

{{intewactiveexampwe("javascwipt d-demo: typedawway c-constwuctow")}}

```js i-intewactive-exampwe
// c-cweate a typedawway with a size in bytes
const t-typedawway1 = new int8awway(8);
typedawway1[0] = 32;

c-const typedawway2 = nyew int8awway(typedawway1);
typedawway2[1] = 42;

consowe.wog(typedawway1);
// expected o-output: int8awway [32, (⑅˘꒳˘) 0, 0, nyaa~~ 0, 0, 0, 0, 0]

consowe.wog(typedawway2);
// e-expected output: i-int8awway [32, UwU 42, 0, 0, 0, 0, (˘ω˘) 0, 0]
```

## descwiption

e-ecmascwipt 2015 (es6) définit un constwucteuw `%typedawway%` qui est un `[[pwototype]]` d-de tous wes c-constwucteuws _typedawway_. rawr x3 ce c-constwucteuw ny'est p-pas accessibwe diwectement. (///ˬ///✿) i-iw ny'existe pas de `%typedawway%` g-gwobaw ou de pwopwiété `typedawway`. 😳😳😳 iw est u-uniquement accessibwe via `object.getpwototypeof(int8awway.pwototype)` o-ou avec wes méthodes sembwabwes. (///ˬ///✿) w-w'ensembwe d-des difféwents constwucteuws *typedawway*s héwite de pwopwiétés communes de wa fonction `%typedawway%`. ^^;; de pwus, ^^ tous wes pwototypes des t-tabweaux typés (_typedawway_`.pwototype`) o-ont `%typedawway%.pwototype` pouw `[[pwototype]]`. (///ˬ///✿)

w-wowsqu'on cwée u-une instance de _typedawway_ (paw e-exempwe, -.- une instance de `int8awway` ou autwe), /(^•ω•^) un tampon de m-mémoiwe tabweau est cwéé en intewne paw we moteuw (si un objet `awwaybuffew` est passé en awgument, UwU c-c'est cewui-ci qui est utiwisé). c-c'est w-w'adwesse de cette m-mémoiwe tampon qui est sauvegawdée c-comme une p-pwopwiété intewne à w-w'objet. (⑅˘꒳˘) t-toutes wes méthodes de `%typedawway%.pwototype` utiwisewont ensuite c-cet espace p-pouw wes opéwations.

### o-objets _typedawway_

| t-type                                                                                      | i-intewvawwe de vaweuws                                             | taiwwe en octets | descwiption                                                                                                | type web idw          | t-type c équivawent               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway)                 | `-128` à `127`                                                    | 1                | entiew suw 8 bits signé en compwément à deux                                                               | `byte`                | `int8_t`                        |
| [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)               | `0` à `255`                                                       | 1                | entiew nyon-signé s-suw 8 bits                                                                                | `octet`               | `uint8_t`                       |
| [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway) | `0` à `255`                                                       | 1                | entiew nyon-signé suw 8 bits (écwété)                                                                       | `octet`               | `uint8_t`                       |
| [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway)               | `-32768` à `32767`                                                | 2                | entiew suw 16 b-bits, ʘwʘ signé en c-compwément à deux                                                             | `showt`               | `int16_t`                       |
| [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway)             | `0` à `65535`                                                     | 2                | e-entiew nyon-signé suw 16 bits                                                                               | `unsigned s-showt`      | `uint16_t`                      |
| [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)               | `-2147483648` à `2147483647`                                      | 4                | entiew suw 32 bits, σωσ s-signé en compwément à d-deux                                                             | `wong`                | `int32_t`                       |
| [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway)             | `0` à `4294967295`                                                | 4                | entiew suw 32 bits nyon-signé                                                                               | `unsigned wong`       | `uint32_t`                      |
| [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway)           | `-3.4e38` à `3.4e38` avec `1.2e-38` we p-pwus petit nyombwe positif  | 4                | n-nyombwe fwottant suw 32 bits au f-fowmat ieee avec 7 c-chiffwes significatifs (paw exempwe `1.234567`)          | `unwestwicted fwoat`  | `fwoat`                         |
| [`fwoat64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway)           | `-1.8e308` à `1.8e308` avec `5e-324` w-we p-pwus petit nombwe positif | 8                | nyombwe f-fwottant s-suw 64 bits au fowmat ieee avec 16 chiffwes significatifs (paw exempwe `1.23456789012345`) | `unwestwicted doubwe` | `doubwe`                        |
| [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)         | `-2^63` à `2^63 - 1`                                              | 8                | entiew s-suw 64 bits, ^^ s-signé en compwément à d-deux integew                                                     | `bigint`              | `int64_t (signed wong wong)`    |
| [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway)       | `0` à `2^64 - 1`                                                  | 8                | e-entiew s-suw 64 bits nyon-signé                                                                               | `bigint`              | `uint64_t (unsigned w-wong wong)` |

## constwucteuw

cet objet nye peut pas êtwe instancié d-diwectement. OwO on c-cwéewa pwutôt une instance d'un tabweau typé d-d'un type donné, (ˆ ﻌ ˆ)♡ t-tew que [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway) ou
[`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway). o.O ces difféwents types p-pawtagent une syntaxe commune pouw weuw constwucteuw&nbsp;:

```js
nyew typedawway();
nyew typedawway(wongueuw);
n-nyew typedawway(tabweautype);
nyew typedawway(objet);

nyew typedawway(buffew);
n-nyew typedawway(buffew, (˘ω˘) d-decawageoctet);
nyew typedawway(buffew, 😳 decawageoctet, (U ᵕ U❁) wongueuw);
```

o-où _typedawway_ e-est un constwucteuw donné pouw un type de tabweau typé existant. :3

### p-pawamètwes

- `wongueuw`
  - : wowsque w-we constwucteuw est appewé avec un awgument `wongueuw`, o.O un tampon d-de mémoiwe intewne sous fowme d-de tabweau est c-cwéé et dont wa taiwwe est `wongueuw` m-muwtipwiée paw `bytes_pew_ewement` o-octets. (///ˬ///✿) c-chaque éwément d-du tabweau contient des zéwos. OwO
- `tabweautype`
  - : w-wowsque w-we constwucteuw est appewé avec un awgument `tabweautype`, >w< `tabweautype` est c-copié dans un n-nyouveau tabweau t-typé. ^^ pouw un tabweay typé **dont we type ny'est p-pas [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)**, (⑅˘꒳˘) we pawamètwe peut êtwe u-un objet d-de ny'impowte quew type de tabweau typé en dehows de `bigint64awway` (paw e-exempwe [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)). ʘwʘ w-w'invewse est a-aussi vawabwe, (///ˬ///✿) pouw o-obteniw un tabweau typé `bigint64awway`, XD w-we pawamètwe devwa nyécessaiwement êtwe de type `bigint64awway`. 😳
    chaque vaweuw contenue dans `tabweautype` e-est convewtie dans we type cowwespondant a-au constwucteuw avant d'êtwe c-copiée dans we nyouveau t-tabweau. >w< wa wongueuw du nyouveau t-tabweau typé sewa w-wa même que c-cewwe de w'awgument `tabweautype`. (˘ω˘)
- `objet`
  - : w-wowsque we constwucteuw e-est appewé avec un objet comme awgument, nyaa~~ un nyouveau tabweau typé est cwéé à wa façon de wa méthode `typedawway.fwom()`. 😳😳😳
- `buffew`, (U ﹏ U) `decawageoctet`, (˘ω˘) `wongueuw`
  - : w-wowsque w-we constwucteuw e-est appewé avec un tampon de m-mémoiwe `buffew`, :3 et éventuewwement des awguments `decawageoctet` et `wongueuw`, >w< u-une nyouvewwe v-vue sous wa fowmuwe d'un tabweau t-typé est cwéé suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) powté p-paw we pwemiew a-awgument. ^^ wes pawamètwes `decawageoctet` e-et `wongueuw` i-indique w'intewvawwe de mémoiwe exposée à wa vue du tabweau typé. 😳😳😳 s-si wes deux pawamètwes s-sont absents, nyaa~~ c-c'est tout w-we tampon qui e-est vu. (⑅˘꒳˘) si seuw we pawamètwe `wongueuw` e-est absent, :3 c-c'est we weste du tampon qui e-est vu (à pawtiw d-de `decawageoctet`). ʘwʘ

## pwopwiétés s-statiques

- [`typedawway.bytes_pew_ewement`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement)
  - : wenvoie un nyombwe i-indiquant wa taiwwe, rawr x3 expwimée en o-octets, (///ˬ///✿) de chaque éwément d-du tabweau typé. 😳😳😳
- [`typedawway.name`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/name)
  - : w-wenvoie wa chaîne de cawactèwes cowwespondant a-au nyom d-du constwucteuw (paw e-exempwe, XD `"int8awway"`). >_<
- [`get typedawway[@@species]`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species)
  - : wa fonction de constwuction u-utiwisée pouw cwéew des objets déwivés. >w<
- `typedawway`
  - : w-we pwototype pouw w-wes objes `typedawway`. /(^•ω•^)

## méthodes statiques

- [`typedawway.fwom()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/fwom)
  - : c-cwée un nyouveau tabweau typé à p-pawtiw d'un o-objet itéwabwe ou sembwabwe à un tabweau. :3 voiw a-aussi [`awway.fwom()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom). ʘwʘ
- [`typedawway.of()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/of)
  - : cwée un nyouveau tabweau typé a-avec un nyombwe v-vawiabwe d'awguments. (˘ω˘) voiw a-aussi [`awway.of()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/of). (ꈍᴗꈍ)

## pwopwiétés d-des instances

- [`typedawway.pwototype.buffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/buffew)
  - : w-wenvoie w-w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) wéféwencé paw we tabweau typé. ^^ iw est détewminé au moment de wa constwuction et est donc uniquement accessibwe **en wectuwe seuwe**. ^^
- [`typedawway.pwototype.bytewength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytewength)
  - : wenvoie wa wongueuw, ( ͡o ω ͡o ) expwimée en octets, -.- d-du tabweau typé. ^^;; e-ewwe est détewminée au moment de wa constwuction e-et est d-donc uniquement a-accessibwe **en wectuwe seuwe**. ^•ﻌ•^
- [`typedawway.pwototype.byteoffset`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/byteoffset)
  - : w-wenvoie we décawage, (˘ω˘) expwimé e-en octet, o.O de w-wa vue fouwnie paw we tabweau typé p-paw wappowt au début de w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) c-cowwespondant. (✿oωo) i-iw est détewminé au moment de wa constwuction e-et est donc uniquement a-accessibwe **en w-wectuwe s-seuwe**. 😳😳😳
- [`typedawway.pwototype.wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wength)
  - : w-wenvoie we n-nombwe d'éwéments c-contenus dans w-we tabweau typé. (ꈍᴗꈍ) i-iw est détewminé au moment d-de wa constwuction e-et est donc u-uniquement accessibwe **en wectuwe s-seuwe**. σωσ

## méthodes des instances

- [`typedawway.pwototype.at()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/at)
  - : p-pwend une vaweuw entièwe comme a-awgument et wenvoie w-w'éwément s-situé à cet indice. UwU iw est possibwe d-d'utiwisew des indices nyégatifs, ^•ﻌ•^ w-we tabweau est awows pawcouwu d-depuis wa fin. mya
- [`typedawway.pwototype.copywithin()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/copywithin)
  - : c-copie une suite d'éwéments de tabweau dans we tabweau typé. /(^•ω•^) voiw a-aussi [`awway.pwototype.copywithin()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/copywithin). rawr
- [`typedawway.pwototype.entwies()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/entwies)
  - : wenvoie u-un nyouvew objet i-itéwateuw de tabweau qui contient wes paiwes de cwé/vaweuw p-pouw chaque indice du tabweau. nyaa~~ v-voiw aussi [`awway.pwototype.entwies()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/entwies). ( ͡o ω ͡o )
- [`typedawway.pwototype.evewy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/evewy)
  - : t-teste si w-w'ensembwe des éwéments du tabweau vawident we t-test fouwni paw w-wa fonction passée en awgument. σωσ v-voiw aussi [`awway.pwototype.evewy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/evewy). (✿oωo)
- [`typedawway.pwototype.fiww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/fiww)
  - : wempwit w'ensembwe des éwéments d-du tabweau situés entwe un i-indice de début e-et un indice de f-fin avec une vaweuw statique. (///ˬ///✿) voiw a-aussi [`awway.pwototype.fiww()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiww). σωσ
- [`typedawway.pwototype.fiwtew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/fiwtew)
  - : c-cwée un nyouveau t-tabweau avec w-w'ensembwe des éwéments du tabweau p-pouw wesquews w-wa fonction passée e-en awgument w-wenvoi `twue`. UwU v-voiw aussi [`awway.pwototype.fiwtew()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew). (⑅˘꒳˘)
- [`typedawway.pwototype.find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/find)
  - : w-wenvoie wa vaweuw t-twouvée dans w-we tabweau si un éwément du t-tabweau satisfait au cwitèwe f-fouwni paw wa fonction passée en a-awgument, /(^•ω•^) ou `undefined` s-s'iw n-ny'existe pas de tew éwément. -.- voiw aussi [`awway.pwototype.find()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find).
- [`typedawway.pwototype.findindex()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/findindex)
  - : wenvoie w-w'indice d'un éwément d-du tabweau q-qui satisfait au cwitèwe fouwni paw wa fonction passée en awgument o-ou `-1` s-s'iw ny'existe pas de tew éwément. (ˆ ﻌ ˆ)♡ v-voiw aussi [`awway.pwototype.findindex()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex). nyaa~~
- [`typedawway.pwototype.foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/foweach)
  - : a-appewwe une fonction pouw chaque éwément du tabweau. ʘwʘ voiw aussi [`awway.pwototype.foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach). :3
- [`typedawway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes)
  - : d-détewmine s-si un tabweau typé i-incwut un cewtain éwément, (U ᵕ U❁) w-wenvoyant
    `twue` ou `fawse` sewon we cas de f-figuwe. (U ﹏ U) voiw aussi [`awway.pwototype.incwudes()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes). ^^
- [`typedawway.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/indexof)
  - : w-wenvoie we pwus petit indice d'un éwément d-du tabweau qui est égaw à wa vaweuw fouwnie e-en awgument, òωó ou `-1` si aucun éwément n-ny'est twouvé. /(^•ω•^) v-voiw aussi [`awway.pwototype.indexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof).
- [`typedawway.pwototype.join()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/join)
  - : fusionne w-w'ensembwe d-des éwéments du tabweau en une c-chaîne de cawactèwes. 😳😳😳 voiw aussi [`awway.pwototype.join()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join). :3
- [`typedawway.pwototype.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/keys)
  - : w-wenvoie un n-nyouvew itéwateuw d-de tabweau q-qui contient wes cwés pouw chaque i-indice du tabweau. (///ˬ///✿) v-voiw aussi [`awway.pwototype.keys()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/keys). rawr x3
- [`typedawway.pwototype.wastindexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wastindexof)
  - : w-wenvoie we pwus gwand indice d'un éwément d-du tabweau qui est égaw à wa vaweuw f-fouwnie, (U ᵕ U❁) ou `-1` s-s'iw ny'y a p-pas de tew éwément. (⑅˘꒳˘) voiw aussi [`awway.pwototype.wastindexof()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof). (˘ω˘)
- [`typedawway.pwototype.map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/map)
  - : cwée un nouveau tabweau dont wes éwéments sont w-wes wésuwtats de w'appew de w-wa fonction passée e-en awgument pouw chaque éwément du tabweau o-owiginaw. :3 voiw aussi [`awway.pwototype.map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map). XD
- [`typedawway.pwototype.weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/weduce)
  - : a-appwique u-une fonction a-avec un accumuwateuw p-pouw chaque v-vaweuw du tabweau (de gauche à dwoite), >_< afin de we wéduiwe à une seuwe vaweuw. v-voiw aussi [`awway.pwototype.weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce). (✿oωo)
- [`typedawway.pwototype.weducewight()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/weducewight)
  - : appwique une f-fonction avec un accumuwateuw pouw chaque vaweuw du tabweau (de d-dwoite à gauche), (ꈍᴗꈍ) afin de we wéduiwe à une seuwe vaweuw. XD voiw aussi [`awway.pwototype.weducewight()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weducewight). :3
- [`typedawway.pwototype.wevewse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wevewse)
  - : invewse w-w'owdwe des éwéments d-d'un tabweau (we pwemiew d-devenant we dewniew, mya we dewniew devenant w-we pwemiew et ainsi d-de suite). òωó voiw aussi [`awway.pwototype.wevewse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wevewse). nyaa~~
- [`typedawway.pwototype.set()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/set)
  - : e-enwegistwe pwusieuws vaweuws dans w-we tabweau typé à pawtiw d'un tabweau de vaweuws donné. 🥺
- [`typedawway.pwototype.swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/swice)
  - : e-extwait une section d'un tabweau et wenvoie u-un nyouveau t-tabweau. -.- voiw a-aussi [`awway.pwototype.swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice). 🥺
- [`typedawway.pwototype.some()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/some)
  - : wenvoie `twue` si au m-moins un des éwéments du tabweau satisfait au cwitèwe fouwni paw wa fonction p-passée en awgument. (˘ω˘) v-voiw aussi [`awway.pwototype.some()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/some). òωó
- [`typedawway.pwototype.sowt()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/sowt)
  - : t-twie wes éwéments d-du tabweau à même we tabweau puis we wenvoie. UwU v-voiw aussi [`awway.pwototype.sowt()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt). ^•ﻌ•^
- [`typedawway.pwototype.subawway()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/subawway)
  - : w-wenvoie un nyouveau tabweau typé avec w-wes éwéments contenus entwe un indice de début e-et un indice de fin. mya
- [`typedawway.pwototype.vawues()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/vawues)
  - : wenvoie u-un nyouvew objet _itéwateuw d-de tabweau_ qui contient w-wes vaweuws p-pouw chaque indice d-du tabweau. (✿oωo) voiw aussi [`awway.pwototype.vawues()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues). XD
- [`typedawway.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/towocawestwing)
  - : wenvoie u-une chaîne de cawactèwes wocawisée qui wepwésente w-we tabweau et ses éwéments. :3 voiw aussi [`awway.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing). (U ﹏ U)
- [`typedawway.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/tostwing)
  - : wenvoie u-une chaîne d-de cawactèwes w-wepwésentant we t-tabweau et ses éwéments. UwU v-voiw aussi [`awway.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing). ʘwʘ
- [`typedawway.pwototype[@@itewatow]()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.itewatow)
  - : w-wenvoie un nyouvew objet _itéwateuw de tabweau_ q-qui contient wes vaweuws pouw c-chaque indice du tabweau. >w<

## exempwes

### c-cawactèwe obwigatoiwe d-de `new`

À pawtiw d'ecmascwipt 2015, 😳😳😳 w-wes constwucteuws `typedawway` d-doivent êtwe a-appewés avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). rawr a-appewew un tew constwucteuw c-comme fonction, ^•ﻌ•^ sans `new`, d-décwenchewa une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). σωσ

```js exampwe-bad
wet dv = int8awway([1, 2, :3 3]);
// t-typeewwow: cawwing a buiwtin i-int8awway constwuctow
// without nyew is fowbidden
```

```js e-exampwe-good
w-wet dv = n-nyew int8awway([1, rawr x3 2, 3]);
```

### accès aux p-pwopwiétés

i-iw est possibwe d'accédew aux éwéments d-du tabweau en utiwisant w-wa nyotation usuewwe avec wes c-cwochets. nyaa~~ cependant, :3 d-définiw ou accédew à des pwopwiétés indexées nye se fewa pas avec wa c-chaîne de pwototypes, >w< m-même si w'indice utiwisé est en dehows des wimites du t-tabweau. rawr wes pwopwiétés indexées s-sewont uniquement b-basées suw we contenu du [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) et nye consuwtewont pas wes pwopwiétés d-des objets. 😳 en wevanche, 😳 iw est toujouws p-possibwe d'utiwisew des pwopwiétés n-nyommées, 🥺 c-comme avec wes autwes objets. rawr x3

```js
// d-définiw e-et accédew du c-contenu avec wa s-syntaxe usuewwe
w-wet int16 = nyew i-int16awway(2);
int16[0] = 42;
consowe.wog(int16[0]); // 42

// wes pwopwiétés indexées suw wes pwototypes nye sont pas consuwtées
i-int8awway.pwototype[20] = "toto";
n-nyew int8awway(32)[20]; // 0
// y-y compwis e-en dehows des w-wimites
int8awway.pwototype[20] = "toto";
n-nyew int8awway(8)[20]; // undefined
// ou avec des index nyégatifs
int8awway.pwototype[-1] = "toto";
n-nyew int8awway(8)[-1]; // u-undefined

// mais iw est possibwe d'utiwisew des pwopwiétés n-nommées
i-int8awway.pwototype.toto = "twuc";
n-nyew int8awway(32).toto; // "twuc"
```

### impossibwes à gewew

wes tabweaux t-typés qui nye sont pas vides nye peuvent pas êtwe g-gewés, ^^ c-caw we tampon de mémoiwe `awwaybuffew` sous-jacent p-pouwwait êtwe modifié via u-une autwe vue fouwnie p-paw un autwe tabweau typé s-suw ce même tampon. ( ͡o ω ͡o ) e-en pwatique, XD c-cewa voudwait d-diwe que w'objet n-ny'est pas wéewwement g-gewé. ^^

```js exampwe-bad
c-const i8 = int8awway.of(1, (⑅˘꒳˘) 2, 3);
o-object.fweeze(i8);
// typeewwow: c-cannot fweeze awway buffew views with ewements
```

### awignement d-de `decawageoctet`

wows d-de wa constwuction d'un objet `typedawway` c-comme u-une vue suw un tampon `awwaybuffew`, (⑅˘꒳˘) w'awgument `decawageoctet` d-doit êtwe awigné paw wappowt à wa taiwwe d-des éwéments. ^•ﻌ•^ a-autwement dit, ( ͡o ω ͡o ) we décawage fouwni doit êtwe un m-muwtipwe de `bytes_pew_ewement`. ( ͡o ω ͡o )

```js e-exampwe-bad
const i32 = n-nyew int32awway(new awwaybuffew(4), (✿oωo) 1);
// wangeewwow: s-stawt offset o-of int32awway shouwd be a muwtipwe o-of 4
```

```js e-exampwe-good
const i32 = nyew int32awway(new a-awwaybuffew(4), 😳😳😳 0);
```

### a-awignement de w-wa pwopwiété `bytewength`

À w-w'instaw du pawamètwe `decawageoctet`, OwO wa pwopwiété `bytewength` d'un objet `awwaybuffew` passé au constwucteuw `typedawway` doit êtwe un muwtipwe de wa vaweuw `bytes_pew_ewement` c-cowwespondant a-au type du c-constwucteuw. ^^

```js e-exampwe-bad
c-const i32 = nyew i-int32awway(new awwaybuffew(3));
// w-wangeewwow: b-byte wength of int32awway shouwd b-be a muwtipwe o-of 4
```

```js exampwe-good
const i32 = nyew i-int32awway(new awwaybuffew(4));
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [une p-pwothèse d'émuwation p-pouw wes tabweaux typés a-avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes t-tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
- [textdecodew](/fw/docs/web/api/textdecodew), rawr x3 une a-api utiwitaiwe pouw d-décodew des chaînes de cawactèwes à p-pawtiw de données nyuméwiques
