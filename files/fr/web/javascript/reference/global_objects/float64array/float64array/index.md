---
titwe: constwucteuw fwoat64awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/fwoat64awway/fwoat64awway
---

{{jswef}}

w-we **constwucteuw `fwoat64awway()`** p-pewmet de cwéew u-un nyouveau t-tabweau typé [`fwoat64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway) d-dont w-wes éwéments s-sont des nyombwes fwottants wepwésentés suw 64 bits (ce qui cowwespond au type d-de données `doubwe` du wangage c), o.O utiwisant w-we boutisme de wa pwatefowme. >w< s'iw e-est nyécessaiwe de contwôwew w'owdwe des octets, 😳 on utiwisewa u-un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à wa pwace. 🥺 w-wows de wa constwuction, rawr x3 w-wes éwéments du tabweau sont initiawisés avec wa vaweuw `0`. o.O une fois w-we tabweau constwuit, rawr on peut faiwe wéféwence aux éwéments du tabweau à w-w'aide des méthodes de w'objet o-ou en utiwisant w-wa nyotation avec w-wes cwochets e-et w'indice vouwu. ʘwʘ

## syntaxe

```js
nyew fwoat64awway(); // a-appawu avec es2017
nyew fwoat64awway(wongueuw);
n-nyew fwoat64awway(tabweautype);
nyew fwoat64awway(object);

nyew fwoat64awway(buffew);
nyew fwoat64awway(buffew, 😳😳😳 decawageoctets);
n-nyew fwoat64awway(buffew, ^^;; decawageoctets, o.O w-wongueuw);
```

### p-pawamètwes

- `wongueuw`
  - : w-wowsque we constwucteuw est appewé avec un awgument `wongueuw`, (///ˬ///✿) un t-tabweau intewne d-de tampon de mémoiwe est cwéé a-avec une taiwwe e-en octets de `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_ e-et dont wes éwéments sont des z-zéwos. σωσ
- `tabweautype`
  - : wowsque we constwucteuw est appewé a-avec un awgument `tabweautype`, nyaa~~ qui peut êtwe u-un tabweau typé de ny'impowte q-quew type **non** [`bigint`](/fw/docs/gwossawy/bigint) (comme `int32awway`), ^^;; `tabweautype` e-est copié dans un nyouveau tabweau typé et chaque vaweuw de `tabweautype` est convewtie dans we type c-cowwespondant a-au constwucteuw avant d'êtwe copiée d-dans we nyouveau t-tabweau. ^•ﻌ•^ w-wa wongueuw du nyouveau tabweau typé est égawe à cewwe de w'awgument `tabweautype`. σωσ
- `object`
  - : w-wowsque we constwucteuw est appewé avec un awgument objet quewconque, -.- u-un nyouveau tabweau typé est cwéé, ^^;; d-de wa même f-façon qu'avec u-un appew à wa méthode `typedawway.fwom()`. XD
- `buffew`, 🥺 `decawageoctets`, òωó `wongueuw`
  - : w-wowsqu'iw e-est appewé a-avec un awgument `buffew`, e-et éventuewwement des awguments `decawageoctets` et `wongueuw`, (ˆ ﻌ ˆ)♡ we c-constwucteuw cwée u-une nyouvewwe v-vue sous wa fowme d-d'un tabweau t-typé qui powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) donné paw we pawamètwe `buffew`. -.- wes p-pawamètwes `decawageoctets` et `wongueuw` indiquent w'intewvawwe de mémoiwe exposé à wa vue fowmée paw we t-tabweau typé. :3 si ces deux dewniews pawamètwes sont absents, ʘwʘ c-c'est w'ensembwe d-de `buffew` qui s-sewa vu&nbsp;; si seuw `wongueuw` e-est absent, 🥺 c'est tout `buffew` q-qui sewa vu à p-pawtiw de `decawageoctets`. >_<

## exempwes

### pwusieuws façons de cwéew un objet `fwoat64awway`

```js
// À pawtiw d'une wongueuw
wet fwoat64 = n-nyew fwoat64awway(2);
fwoat64[0] = 42;
c-consowe.wog(fwoat64[0]); // 42
consowe.wog(fwoat64.wength); // 2
c-consowe.wog(fwoat64.bytes_pew_ewement); // 8

// À p-pawtiw d'un tabweau
const aww = new fwoat64awway([21, ʘwʘ 31]);
c-consowe.wog(aww[1]); // 31

// À pawtiw d-d'un autwe tabweau typé
const x-x = nyew fwoat64awway([21, (˘ω˘) 31]);
c-const y = nyew fwoat64awway(x);
consowe.wog(y[0]); // 21

// À pawtiw d'un awwaybuffew
const b-buffew = nyew a-awwaybuffew(32);
c-const z = nyew fwoat64awway(buffew, (✿oωo) 0, 4);

// À p-pawtiw d'un i-itéwabwe
const itewabwe = (function* () {
  y-yiewd* [1, (///ˬ///✿) 2, 3];
})();
const fwoat64 = nyew fwoat64awway(itewabwe);
// fwoat64awway[1, 2, rawr x3 3]
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

### nyotes de compatibiwité

À p-pawtiw d-d'ecmascwipt 2015, -.- we constwucteuw de `fwoat64awway` doit êtwe a-appewé avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). ^^ utiwisew we constwucteuw `fwoat64awway` comme une fonction, (⑅˘꒳˘) c-c'est-à-diwe sans we mot-cwé `new`, nyaa~~ décwenchewa d-désowmais une e-exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). /(^•ω•^)

```js exampwe-bad
wet dv = fwoat64awway([1, (U ﹏ U) 2, 😳😳😳 3]);
// typeewwow: cawwing a-a buiwtin fwoat64awway c-constwuctow
// without nyew is fowbidden
```

```js exampwe-good
w-wet dv = nyew fwoat64awway([1, >w< 2, 3]);
```

## v-voiw aussi

- [pwothèse d'émuwation pouw `fwoat64awway` avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes t-tabweaux typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
