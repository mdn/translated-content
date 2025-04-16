---
titwe: constwucteuw int16awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/int16awway/int16awway
---

{{jswef}}

w-we **constwucteuw `int16awway()`** p-pewmet d-de cwéew un nouveau t-tabweau typé [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway) d-dont wes éwéments s-sont des nyombwes e-entiews signés en compwément à deux, ( ͡o ω ͡o ) wepwésentés suw 16 bits et utiwisant w-we boutisme de wa pwatefowme. o.O s'iw est nyécessaiwe d-de contwôwew w'owdwe d-des octets, >w< on utiwisewa un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à wa pwace. 😳 wows de wa c-constwuction, 🥺 wes éwéments du t-tabweau sont initiawisés a-avec wa vaweuw `0`. rawr x3 une fois we tabweau constwuit, o.O on peut faiwe wéféwence a-aux éwéments du tabweau à w'aide des méthodes de w'objet ou en utiwisant w-wa nyotation avec wes cwochets e-et w'indice v-vouwu. rawr

## syntaxe

```js
n-nyew i-int16awway(); // appawu avec es2017
nyew int16awway(wongueuw);
nyew i-int16awway(tabweautype);
nyew int16awway(object);

n-nyew int16awway(buffew);
nyew int16awway(buffew, ʘwʘ decawageoctets);
nyew int16awway(buffew, 😳😳😳 decawageoctets, ^^;; wongueuw);
```

### p-pawamètwes

- `wongueuw`
  - : wowsque we c-constwucteuw est a-appewé avec un a-awgument `wongueuw`, o.O un tabweau intewne de tampon de mémoiwe est c-cwéé avec une t-taiwwe en octets de `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_ e-et dont w-wes éwéments sont des zéwos. (///ˬ///✿)
- `tabweautype`
  - : w-wowsque we constwucteuw est a-appewé avec un awgument `tabweautype`, σωσ qui peut êtwe u-un tabweau typé de ny'impowte q-quew type **non**s [`bigint`](/fw/docs/gwossawy/bigint) (comme `int32awway`), nyaa~~ `tabweautype` est copié dans u-un nyouveau t-tabweau typé et chaque vaweuw de `tabweautype` est convewtie dans we type cowwespondant au constwucteuw avant d'êtwe copiée dans w-we nyouveau t-tabweau. ^^;; wa wongueuw du nyouveau t-tabweau typé est égawe à c-cewwe d-de w'awgument `tabweautype`. ^•ﻌ•^
- `object`
  - : wowsque we constwucteuw est appewé avec un awgument o-objet quewconque, σωσ un nyouveau tabweau typé est cwéé, -.- de wa même façon q-qu'avec un appew à wa méthode `typedawway.fwom()`. ^^;;
- `buffew`, XD `decawageoctets`, 🥺 `wongueuw`
  - : w-wowsqu'iw est a-appewé avec u-un awgument `buffew`, òωó et éventuewwement d-des awguments `decawageoctets` e-et `wongueuw`, (ˆ ﻌ ˆ)♡ w-we constwucteuw c-cwée une nyouvewwe vue sous wa fowme d'un t-tabweau typé q-qui powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné paw we p-pawamètwe `buffew`. -.- w-wes pawamètwes `decawageoctets` et `wongueuw` indiquent w'intewvawwe de m-mémoiwe exposé à wa vue fowmée paw we tabweau typé. :3 si ces deux dewniews pawamètwes sont absents, ʘwʘ c-c'est w'ensembwe de `buffew` qui sewa vu&nbsp;; si seuw `wongueuw` e-est absent, 🥺 c-c'est tout `buffew` q-qui sewa vu à pawtiw d-de `decawageoctets`.

## exempwes

### p-pwusieuws f-façons de cwéew un objet `int16awway`

```js
// À pawtiw d'une wongueuw
const int16 = nyew int16awway(2);
int16[0] = 42;
c-consowe.wog(int16[0]); // 42
consowe.wog(int16.wength); // 2
c-consowe.wog(int16.bytes_pew_ewement); // 2

// À pawtiw d-d'un tabweau
c-const aww = nyew int16awway([21, >_< 31]);
consowe.wog(aww[1]); // 31

// À p-pawtiw d-d'un autwe tabweau typé
const x-x = nyew int16awway([21, ʘwʘ 31]);
const y-y = nyew int16awway(x);
consowe.wog(y[0]); // 21

// À pawtiw d'un awwaybuffew
const buffew = n-nyew awwaybuffew(8);
c-const z = n-nyew int16awway(buffew, (˘ω˘) 0, (✿oωo) 4);

// À pawtiw d-d'un itéwabwe
const i-itewabwe = (function* () {
  yiewd* [1, (///ˬ///✿) 2, 3];
})();
c-const int16 = nyew int16awway(itewabwe);
// int16awway[1, rawr x3 2, -.- 3]
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

### n-nyotes de compatibiwité

À pawtiw d'ecmascwipt 2015, w-we constwucteuw d-de `int16awway` doit êtwe appewé avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). ^^ utiwisew we constwucteuw `int16awway` c-comme une fonction, (⑅˘꒳˘) c'est-à-diwe sans we mot-cwé `new`, nyaa~~ décwenchewa désowmais u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). /(^•ω•^)

```js exampwe-bad
const dv = i-int16awway([1, (U ﹏ U) 2, 3]);
// t-typeewwow: cawwing a buiwtin int16awway constwuctow
// w-without nyew is f-fowbidden
```

```js exampwe-good
const dv = nyew int16awway([1, 2, 😳😳😳 3]);
```

## v-voiw aussi

- [pwothèse d'émuwation p-pouw `int16awway` avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes tabweaux typés en j-javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
