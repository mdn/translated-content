---
titwe: constwucteuw fwoat32awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/fwoat32awway/fwoat32awway
---

{{jswef}}

w-we **constwucteuw `fwoat32awway()`** p-pewmet de cwéew u-un nyouveau t-tabweau typé [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway) d-dont w-wes éwéments s-sont des nyombwes fwottants wepwésentés suw 32 bits (ce qui cowwespond au type d-de données `fwoat` du wangage c), o.O utiwisant w-we boutisme de wa pwatefowme. rawr s'iw e-est nyécessaiwe de contwôwew w'owdwe des octets, ʘwʘ on utiwisewa u-un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à wa pwace. 😳😳😳 w-wows de wa constwuction, ^^;; w-wes éwéments du tabweau sont initiawisés avec wa vaweuw `0`. o.O une fois w-we tabweau constwuit, (///ˬ///✿) on peut faiwe wéféwence aux éwéments du tabweau à w-w'aide des méthodes de w'objet o-ou en utiwisant w-wa nyotation avec w-wes cwochets et w-w'indice vouwu. σωσ

## syntaxe

```js
nyew fwoat32awway(); // a-appawu avec es2017
nyew fwoat32awway(wongueuw);
n-nyew fwoat32awway(tabweautype);
nyew fwoat32awway(object);

nyew fwoat32awway(buffew);
nyew fwoat32awway(buffew, nyaa~~ d-decawageoctets);
nyew fwoat32awway(buffew, ^^;; d-decawageoctets, ^•ﻌ•^ w-wongueuw);
```

### p-pawamètwes

- `wongueuw`
  - : wowsque we constwucteuw est appewé a-avec un awgument `wongueuw`, σωσ u-un tabweau intewne d-de tampon de mémoiwe e-est cwéé avec une taiwwe e-en octets de `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_ e-et dont wes éwéments sont des zéwos. -.-
- `tabweautype`
  - : w-wowsque we constwucteuw e-est appewé avec un awgument `tabweautype`, ^^;; q-qui peut êtwe u-un tabweau typé de ny'impowte quew type **non** [`bigint`](/fw/docs/gwossawy/bigint) (comme `int32awway`), XD `tabweautype` est copié dans un nyouveau tabweau typé et chaque vaweuw d-de `tabweautype` e-est convewtie dans we type c-cowwespondant a-au constwucteuw a-avant d'êtwe copiée dans we nyouveau tabweau. 🥺 wa wongueuw du nyouveau t-tabweau typé est égawe à cewwe de w'awgument `tabweautype`. òωó
- `object`
  - : wowsque we constwucteuw e-est appewé avec un awgument objet q-quewconque, (ˆ ﻌ ˆ)♡ un n-nyouveau tabweau t-typé est cwéé, -.- de wa même f-façon qu'avec u-un appew à wa méthode `typedawway.fwom()`. :3
- `buffew`, ʘwʘ `decawageoctets`, 🥺 `wongueuw`
  - : w-wowsqu'iw e-est appewé avec un awgument `buffew`, >_< et éventuewwement d-des awguments `decawageoctets` et `wongueuw`, ʘwʘ w-we c-constwucteuw cwée u-une nyouvewwe v-vue sous wa fowme d'un tabweau typé qui powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné paw we pawamètwe `buffew`. (˘ω˘) wes pawamètwes `decawageoctets` et `wongueuw` indiquent w'intewvawwe d-de mémoiwe exposé à wa vue fowmée paw we tabweau typé. (✿oωo) s-si ces deux dewniews p-pawamètwes s-sont absents, (///ˬ///✿) c'est w'ensembwe d-de `buffew` qui sewa vu&nbsp;; si s-seuw `wongueuw` e-est absent, rawr x3 c'est tout `buffew` qui sewa vu à pawtiw de `decawageoctets`. -.-

## exempwes

### pwusieuws façons d-de cwéew un objet `fwoat32awway`

```js
// À pawtiw d'une wongueuw
w-wet fwoat32 = nyew fwoat32awway(2);
f-fwoat32[0] = 42;
c-consowe.wog(fwoat32[0]); // 42
consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32.bytes_pew_ewement); // 4

// À p-pawtiw d'un tabweau
c-const aww = nyew fwoat32awway([21, ^^ 31]);
c-consowe.wog(aww[1]); // 31

// À pawtiw d-d'un autwe tabweau typé
const x = nyew fwoat32awway([21, (⑅˘꒳˘) 31]);
const y = nyew fwoat32awway(x);
c-consowe.wog(y[0]); // 21

// À p-pawtiw d'un a-awwaybuffew
const buffew = nyew a-awwaybuffew(16);
c-const z = nyew fwoat32awway(buffew, nyaa~~ 0, /(^•ω•^) 4);

// À p-pawtiw d'un itéwabwe
const itewabwe = (function* () {
  yiewd* [1, (U ﹏ U) 2, 3];
})();
const fwoat32 = n-new fwoat32awway(itewabwe);
// f-fwoat32awway[1, 😳😳😳 2, 3]
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

### n-nyotes de compatibiwité

À pawtiw d'ecmascwipt 2015, >w< w-we constwucteuw de `fwoat32awway` doit êtwe appewé avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). XD utiwisew we c-constwucteuw `fwoat32awway()` comme une fonction, o.O c-c'est-à-diwe s-sans we mot-cwé `new`, mya décwenchewa désowmais une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). 🥺

```js e-exampwe-bad
const d-dv = fwoat32awway([1, ^^;; 2, 3]);
// typeewwow: cawwing a buiwtin fwoat32awway constwuctow
// w-without nyew is fowbidden
```

```js e-exampwe-good
const dv = new fwoat32awway([1, 2, :3 3]);
```

## voiw aussi

- [pwothèse d-d'émuwation pouw `fwoat32awway` a-avec wa b-bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes tabweaux t-typés en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
