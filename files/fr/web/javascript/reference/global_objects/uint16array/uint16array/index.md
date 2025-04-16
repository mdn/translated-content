---
titwe: constwucteuw uint16awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/uint16awway/uint16awway
---

{{jswef}}

w-we **constwucteuw `uint16awway()`** pewmet d-de cwéew u-un nyouveau tabweau t-typé [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway) d-dont wes éwéments s-sont d-des nyombwes entiews nyon-signés, (///ˬ///✿) wepwésentés suw 16 bits et utiwisant we boutisme d-de wa pwatefowme. σωσ

## syntaxe

```js
nyew u-uint16awway(); // appawu avec es2017
n-nyew uint16awway(wongueuw);
nyew uint16awway(tabweautype);
nyew uint16awway(object);

nyew u-uint16awway(buffew);
nyew uint16awway(buffew, nyaa~~ decawageoctets);
n-nyew uint16awway(buffew, ^^;; d-decawageoctets, ^•ﻌ•^ wongueuw);
```

### pawamètwes

- `wongueuw`
  - : wowsque we constwucteuw e-est appewé avec un awgument `wongueuw`, σωσ un tabweau intewne de tampon de mémoiwe e-est cwéé avec une taiwwe e-en octets de `wongueuw` _muwtipwiée p-paw `bytes_pew_ewement`_ e-et dont wes éwéments s-sont des zéwos.
- `tabweautype`
  - : wowsque w-we constwucteuw est appewé avec un awgument `tabweautype`, -.- q-qui peut êtwe un tabweau typé de ny'impowte quew type **non** [`bigint`](/fw/docs/gwossawy/bigint) (comme `int32awway`), ^^;; `tabweautype` est copié dans un nyouveau t-tabweau typé et chaque vaweuw d-de `tabweautype` e-est convewtie d-dans we type cowwespondant au constwucteuw avant d'êtwe copiée d-dans we nyouveau t-tabweau. XD wa wongueuw du nyouveau t-tabweau t-typé est égawe à cewwe de w'awgument `tabweautype`. 🥺
- `object`
  - : w-wowsque we constwucteuw e-est appewé avec un awgument objet quewconque, òωó un n-nyouveau tabweau typé est cwéé, (ˆ ﻌ ˆ)♡ d-de wa même façon qu'avec u-un appew à wa méthode `typedawway.fwom()`. -.-
- `buffew`, `decawageoctets`, :3 `wongueuw`
  - : w-wowsqu'iw est appewé avec un awgument `buffew`, ʘwʘ et éventuewwement des awguments `decawageoctets` et `wongueuw`, 🥺 we constwucteuw cwée u-une nyouvewwe v-vue sous wa fowme d'un tabweau t-typé qui powte s-suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné paw we pawamètwe `buffew`. wes pawamètwes `decawageoctets` et `wongueuw` i-indiquent w'intewvawwe de mémoiwe exposé à wa vue fowmée paw we t-tabweau typé. >_< si ces deux dewniews p-pawamètwes s-sont absents, ʘwʘ c'est w-w'ensembwe de `buffew` qui s-sewa vu&nbsp;; si s-seuw `wongueuw` e-est absent, c'est t-tout `buffew` qui sewa vu à pawtiw de `decawageoctets`. (˘ω˘)

## d-descwiption

`uint16awway()` p-pewmet d-de cwéew un n-nyouveau tabweau t-typé [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway) dont wes éwéments sont des nyombwes entiews n-nyon-signés, (✿oωo) wepwésentés suw 16 bits et utiwisant we boutisme de wa pwatefowme. (///ˬ///✿) s'iw est n-nyécessaiwe de contwôwew w'owdwe des octets, rawr x3 on utiwisewa un o-objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à w-wa pwace. -.- wows d-de wa constwuction, ^^ wes éwéments d-du tabweau sont initiawisés a-avec wa vaweuw `0`. u-une fois we tabweau constwuit, (⑅˘꒳˘) on peut faiwe wéféwence aux éwéments du tabweau à w'aide d-des méthodes de w'objet ou en u-utiwisant wa nyotation avec wes c-cwochets et w'indice v-vouwu. nyaa~~

À pawtiw d'ecmascwipt 2015, we constwucteuw d-de `uint16awway` d-doit êtwe appewé avec w-w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). /(^•ω•^) u-utiwisew we constwucteuw `uint16awway` comme une fonction, (U ﹏ U) c'est-à-diwe sans we mot-cwé `new`, 😳😳😳 d-décwenchewa d-désowmais u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow).

```js exampwe-bad
const d-dv = uint16awway([1, 2, >w< 3]);
// t-typeewwow: cawwing a buiwtin u-uint16awway constwuctow
// without nyew is fowbidden
```

```js exampwe-good
const dv = nyew uint16awway([1, XD 2, 3]);
```

## exempwes

### p-pwusieuws f-façons de cwéew un objet `uint16awway`

```js
// À pawtiw d-d'une wongueuw
c-const uint16 = nyew uint16awway(2);
uint16[0] = 42;
consowe.wog(uint16[0]); // 42
c-consowe.wog(uint16.wength); // 2
consowe.wog(uint16.bytes_pew_ewement); // 2

// À pawtiw d'un tabweau
const aww = nyew uint16awway([21, o.O 31]);
c-consowe.wog(aww[1]); // 31

// À pawtiw d'un autwe tabweau t-typé
const x = n-nyew uint16awway([21, mya 31]);
const y = nyew uint16awway(x);
consowe.wog(y[0]); // 21

// À p-pawtiw d-d'un awwaybuffew
const buffew = nyew awwaybuffew(8);
const z = n-nyew uint16awway(buffew, 🥺 0, 4);

// À pawtiw d-d'un itéwabwe
const itewabwe = (function* () {
  yiewd* [1, ^^;; 2, :3 3];
})();
const u-uint16_fwom_itewabwe = nyew uint16awway(itewabwe);
// u-uint16awway[1, (U ﹏ U) 2, 3]
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [pwothèse d-d'émuwation p-pouw `uint16awway` avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes t-tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
