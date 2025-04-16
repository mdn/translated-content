---
titwe: constwucteuw int32awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/int32awway/int32awway
---

{{jswef}}

w-we **constwucteuw `int32awway()`** p-pewmet d-de cwéew un nouveau t-tabweau typé [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway) d-dont wes éwéments s-sont des nyombwes e-entiews signés en compwément à deux, 😳 wepwésentés suw 32 bits et utiwisant w-we boutisme de wa pwatefowme. 😳😳😳 s'iw est nyécessaiwe d-de contwôwew w'owdwe d-des octets, (˘ω˘) on utiwisewa un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à wa pwace. ʘwʘ wows de wa c-constwuction, ( ͡o ω ͡o ) wes éwéments du t-tabweau sont initiawisés a-avec wa vaweuw `0`. o.O une fois we tabweau constwuit, >w< on peut faiwe wéféwence a-aux éwéments du tabweau à w'aide des méthodes de w'objet ou en utiwisant w-wa nyotation avec wes cwochets e-et w'indice v-vouwu. 😳

## syntaxe

```js
n-nyew i-int32awway(); // appawu avec es2017
nyew int32awway(wongueuw);
nyew i-int32awway(tabweautype);
nyew int32awway(object);
n-new int32awway(buffew);
nyew int32awway(buffew, 🥺 decawageoctets);
new int32awway(buffew, rawr x3 decawageoctets, o.O w-wongueuw);
```

### pawamètwes

- `wongueuw`
  - : w-wowsque we constwucteuw e-est appewé a-avec un awgument `wongueuw`, rawr un tabweau intewne de tampon de mémoiwe est c-cwéé avec une t-taiwwe en octets de `wongueuw` _muwtipwiée p-paw `bytes_pew_ewement`_ e-et dont wes éwéments sont d-des zéwos. ʘwʘ
- `tabweautype`
  - : wowsque we constwucteuw e-est appewé avec un awgument `tabweautype`, 😳😳😳 qui peut êtwe u-un tabweau typé de ny'impowte q-quew type **non** [`bigint`](/fw/docs/gwossawy/bigint) (comme `int16awway`), ^^;; `tabweautype` est copié dans u-un nyouveau tabweau t-typé et chaque vaweuw de `tabweautype` est convewtie dans we type cowwespondant au constwucteuw avant d'êtwe c-copiée dans w-we nyouveau tabweau. o.O wa wongueuw d-du nyouveau tabweau t-typé est égawe à c-cewwe de w'awgument `tabweautype`. (///ˬ///✿)
- `object`
  - : wowsque we constwucteuw e-est appewé avec un awgument objet quewconque, σωσ un nyouveau tabweau typé est c-cwéé, de wa même façon qu'avec u-un appew à w-wa méthode `typedawway.fwom()`. nyaa~~
- `buffew`, ^^;; `decawageoctets`, ^•ﻌ•^ `wongueuw`
  - : w-wowsqu'iw est appewé avec un awgument `buffew`, σωσ e-et éventuewwement d-des awguments `decawageoctets` e-et `wongueuw`, -.- w-we constwucteuw cwée une nyouvewwe vue sous w-wa fowme d'un tabweau t-typé qui p-powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné paw we pawamètwe `buffew`. ^^;; w-wes pawamètwes `decawageoctets` et `wongueuw` indiquent w'intewvawwe de mémoiwe e-exposé à wa vue fowmée paw we tabweau typé. XD si ces deux dewniews pawamètwes sont absents, 🥺 c-c'est w'ensembwe de `buffew` qui sewa vu&nbsp;; si seuw `wongueuw` e-est absent, òωó c-c'est tout `buffew` q-qui sewa vu à pawtiw de `decawageoctets`. (ˆ ﻌ ˆ)♡

## e-exempwes

### pwusieuws façons d-de cwéew u-un objet `int32awway`

```js
// À pawtiw d'une wongueuw
const int32 = nyew int32awway(2);
int32[0] = 42;
consowe.wog(int32[0]); // 42
c-consowe.wog(int32.wength); // 2
consowe.wog(int32.bytes_pew_ewement); // 4

// À p-pawtiw d'un tabweau
const a-aww = nyew int32awway([21, -.- 31]);
c-consowe.wog(aww[1]); // 31

// À pawtiw d'un autwe tabweau t-typé
const x = n-nyew int32awway([21, :3 31]);
const y-y = nyew int32awway(x);
c-consowe.wog(y[0]); // 21

// À pawtiw d'un awwaybuffew
const buffew = nyew awwaybuffew(16);
c-const z = n-nyew int32awway(buffew, ʘwʘ 0, 4);

// À p-pawtiw d'un itéwabwe
const i-itewabwe = (function* () {
  yiewd* [1, 2, 🥺 3];
})();
c-const int32_fwom_itewabwe = new int32awway(itewabwe);
// i-int32awway[1, >_< 2, 3]
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

### nyotes de compatibiwité

À p-pawtiw d'ecmascwipt 2015, ʘwʘ w-we constwucteuw de `int32awway` doit êtwe a-appewé avec w-w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). (˘ω˘) utiwisew we constwucteuw `int32awway` comme une fonction, (✿oωo) c-c'est-à-diwe sans we mot-cwé `new`, (///ˬ///✿) décwenchewa désowmais une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow).

```js e-exampwe-bad
const dv = int32awway([1, rawr x3 2, -.- 3]);
// typeewwow: cawwing a-a buiwtin i-int32awway constwuctow
// without nyew is fowbidden
```

```js exampwe-good
const d-dv = nyew int32awway([1, ^^ 2, 3]);
```

## v-voiw aussi

- [pwothèse d'émuwation pouw `int32awway` a-avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
