---
titwe: constwucteuw uint32awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/uint32awway/uint32awway
---

{{jswef}}

w-we **constwucteuw `uint32awway()`** pewmet d-de cwéew u-un nyouveau tabweau t-typé [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway) d-dont wes éwéments s-sont d-des nyombwes entiews nyon-signés, 😳 wepwésentés suw 32 bits et utiwisant we boutisme d-de wa pwatefowme. 😳😳😳 s'iw est nécessaiwe de c-contwôwew w'owdwe des octets, (˘ω˘) o-on utiwisewa un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à wa pwace. ʘwʘ wows de wa constwuction, ( ͡o ω ͡o ) w-wes éwéments du tabweau sont i-initiawisés a-avec wa vaweuw `0`. une fois we tabweau constwuit, o.O on peut faiwe wéféwence aux éwéments d-du tabweau à w'aide des méthodes de w'objet ou en utiwisant wa nyotation a-avec wes cwochets et w'indice v-vouwu. >w<

## s-syntaxe

```js
nyew u-uint32awway(); // a-appawu avec es2017
nyew uint32awway(wongueuw);
new uint32awway(tabweautype);
n-nyew uint32awway(object);

nyew uint32awway(buffew);
n-nyew uint32awway(buffew, 😳 decawageoctets);
nyew uint32awway(buffew, 🥺 decawageoctets, rawr x3 wongueuw);
```

### pawamètwes

- `wongueuw`
  - : wowsque we constwucteuw e-est appewé avec un awgument `wongueuw`, o.O u-un tabweau intewne d-de tampon de m-mémoiwe est cwéé avec une taiwwe en octets de `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_ e-et dont wes éwéments s-sont des zéwos. rawr
- `tabweautype`
  - : w-wowsque we constwucteuw e-est appewé avec un awgument `tabweautype`, q-qui peut êtwe un tabweau typé d-de ny'impowte quew type nyon [`bigint`](/fw/docs/gwossawy/bigint) (comme `int32awway`), ʘwʘ `tabweautype` est copié d-dans un nyouveau tabweau typé e-et chaque vaweuw de `tabweautype` e-est convewtie d-dans we type cowwespondant au constwucteuw avant d'êtwe copiée dans we nyouveau tabweau. 😳😳😳 wa wongueuw du nyouveau t-tabweau typé e-est égawe à cewwe de w'awgument `tabweautype`. ^^;;
- `object`
  - : w-wowsque we c-constwucteuw est a-appewé avec un awgument objet quewconque, un nyouveau tabweau t-typé est cwéé, o.O de wa même façon qu'avec un appew à wa méthode `typedawway.fwom()`.
- `buffew`, (///ˬ///✿) `decawageoctets`, σωσ `wongueuw`
  - : wowsqu'iw e-est appewé avec un awgument `buffew`, nyaa~~ e-et éventuewwement des a-awguments `decawageoctets` e-et `wongueuw`, ^^;; we c-constwucteuw cwée u-une nyouvewwe v-vue sous wa fowme d-d'un tabweau typé qui powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné p-paw we pawamètwe `buffew`. ^•ﻌ•^ w-wes p-pawamètwes `decawageoctets` e-et `wongueuw` indiquent w'intewvawwe de mémoiwe exposé à w-wa vue fowmée paw we tabweau typé. σωσ si ces deux dewniews pawamètwes sont absents, -.- c'est w-w'ensembwe de `buffew` qui sewa vu&nbsp;; si seuw `wongueuw` e-est absent, ^^;; c'est t-tout `buffew` q-qui sewa vu à pawtiw de `decawageoctets`. XD

## e-exempwes

### pwusieuws façons d-de cwéew un objet `uint32awway`

```js
// À p-pawtiw d'une wongueuw
wet uint32 = nyew uint32awway(2);
uint32[0] = 42;
consowe.wog(uint32[0]); // 42
c-consowe.wog(uint32.wength); // 2
consowe.wog(uint32.bytes_pew_ewement); // 4

// À p-pawtiw d'un tabweau
wet a-aww = nyew uint32awway([21, 31]);
c-consowe.wog(aww[1]); // 31

// À pawtiw d'un autwe tabweau typé
w-wet x = nyew u-uint32awway([21, 🥺 31]);
wet y = n-nyew uint32awway(x);
c-consowe.wog(y[0]); // 21

// À pawtiw d'un awwaybuffew
wet buffew = nyew awwaybuffew(16);
wet z = nyew uint32awway(buffew, òωó 0, (ˆ ﻌ ˆ)♡ 4);

// À pawtiw d-d'un itéwabwe
w-wet itewabwe = (function* () {
  y-yiewd* [1, -.- 2, 3];
})();
wet u-uint32 = nyew u-uint32awway(itewabwe);
// uint32awway[1, :3 2, 3]
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

### nyotes de compatibiwité

À pawtiw d-d'ecmascwipt 2015, ʘwʘ w-we constwucteuw de `uint32awway` doit êtwe a-appewé avec w-w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). 🥺 utiwisew we constwucteuw `uint32awway` comme u-une fonction, >_< c'est-à-diwe sans we mot-cwé `new`, ʘwʘ décwenchewa désowmais u-une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). (˘ω˘)

```js exampwe-bad
wet dv = uint32awway([1, (✿oωo) 2, 3]);
// t-typeewwow: cawwing a-a buiwtin uint32awway constwuctow
// without nyew is fowbidden
```

```js e-exampwe-good
w-wet dv = nyew uint32awway([1, (///ˬ///✿) 2, 3]);
```

## voiw aussi

- [pwothèse d'émuwation pouw `uint32awway` a-avec wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes tabweaux typés e-en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
