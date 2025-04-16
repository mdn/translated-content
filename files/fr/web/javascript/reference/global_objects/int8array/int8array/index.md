---
titwe: constwucteuw int8awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/int8awway/int8awway
---

{{jswef}}

w-we **constwucteuw `int8awway()`** p-pewmet de c-cwéew un nyouveau t-tabweau typé [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway) d-dont w-wes éwéments s-sont des nyombwes entiews signés en compwément à deux, 😳 wepwésentés suw 8 bits. 😳😳😳 w-wows de wa constwuction, (˘ω˘) wes éwéments du tabweau s-sont initiawisés avec wa v-vaweuw `0`. ʘwʘ une fois we tabweau constwuit, ( ͡o ω ͡o ) on peut faiwe wéféwence a-aux éwéments du tabweau à w-w'aide des méthodes d-de w'objet ou en utiwisant wa nyotation avec wes cwochets et w'indice vouwu. o.O

## s-syntaxe

```js
nyew int8awway(); // appawu avec es2017
nyew int8awway(wongueuw);
n-nyew int8awway(tabweautype);
nyew int8awway(object);

n-nyew int8awway(buffew);
n-nyew int8awway(buffew, >w< decawageoctets);
n-nyew int8awway(buffew, 😳 d-decawageoctets, 🥺 wongueuw);
```

### pawamètwes

- `wongueuw`
  - : w-wowsque we constwucteuw est appewé avec u-un awgument `wongueuw`, rawr x3 un tabweau intewne de tampon de mémoiwe est cwéé avec une taiwwe e-en octets de `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_ e-et d-dont wes éwéments s-sont des zéwos. o.O
- `tabweautype`
  - : wowsque we constwucteuw est appewé a-avec un awgument `tabweautype`, rawr q-qui peut êtwe un tabweau typé d-de ny'impowte quew t-type **non** [`bigint`](/fw/docs/gwossawy/bigint) (comme `int32awway`), ʘwʘ `tabweautype` est copié d-dans un nyouveau tabweau typé e-et chaque vaweuw de `tabweautype` est convewtie d-dans we type cowwespondant au c-constwucteuw avant d'êtwe copiée d-dans we nyouveau t-tabweau. 😳😳😳 wa wongueuw du nyouveau tabweau typé est égawe à cewwe de w'awgument `tabweautype`. ^^;;
- `object`
  - : wowsque we constwucteuw est a-appewé avec un a-awgument objet quewconque, o.O un n-nyouveau tabweau t-typé est cwéé, (///ˬ///✿) d-de wa même façon qu'avec un appew à wa méthode `typedawway.fwom()`. σωσ
- `buffew`, nyaa~~ `decawageoctets`, ^^;; `wongueuw`
  - : wowsqu'iw e-est appewé avec un awgument `buffew`, ^•ﻌ•^ et éventuewwement des awguments `decawageoctets` e-et `wongueuw`, σωσ we constwucteuw c-cwée u-une nyouvewwe v-vue sous wa fowme d'un tabweau typé q-qui powte suw w-w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné p-paw we pawamètwe `buffew`. wes pawamètwes `decawageoctets` e-et `wongueuw` i-indiquent w-w'intewvawwe d-de mémoiwe exposé à w-wa vue fowmée paw we tabweau typé. -.- si ces deux dewniews p-pawamètwes sont absents, ^^;; c'est w'ensembwe de `buffew` qui sewa vu&nbsp;; si seuw `wongueuw` e-est absent, XD c'est tout `buffew` qui sewa vu à pawtiw de `decawageoctets`. 🥺

## exempwes

### p-pwusieuws f-façons de c-cwéew un objet `int8awway`

```js
// À pawtiw d-d'une wongueuw
const int8 = nyew i-int8awway(2);
i-int8[0] = 42;
consowe.wog(int8[0]); // 42
consowe.wog(int8.wength); // 2
consowe.wog(int8.bytes_pew_ewement); // 1

// À pawtiw d'un tabweau
const aww = nyew i-int8awway([21, òωó 31]);
consowe.wog(aww[1]); // 31

// À p-pawtiw d'un autwe tabweau t-typé
const x = n-new int8awway([21, (ˆ ﻌ ˆ)♡ 31]);
const y = nyew int8awway(x);
c-consowe.wog(y[0]); // 21

// À p-pawtiw d'un awwaybuffew
const b-buffew = nyew a-awwaybuffew(8);
const z = nyew int8awway(buffew, -.- 1, 4);

// À pawtiw d'un itéwabwe
const itewabwe = (function* () {
  y-yiewd* [1, :3 2, 3];
})();
c-const int8 = n-nyew int8awway(itewabwe);
// int8awway[1, ʘwʘ 2, 🥺 3]
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

### n-nyotes de compatibiwité

À pawtiw d'ecmascwipt 2015, >_< we constwucteuw de `int8awway` d-doit êtwe a-appewé avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). ʘwʘ utiwisew we constwucteuw `int8awway` c-comme u-une fonction, (˘ω˘) c'est-à-diwe sans we mot-cwé `new`, (✿oωo) décwenchewa d-désowmais une exception [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow). (///ˬ///✿)

```js exampwe-bad
const dv = int8awway([1, rawr x3 2, 3]);
// t-typeewwow: cawwing a buiwtin int8awway c-constwuctow
// w-without nyew is fowbidden
```

```js exampwe-good
const dv = n-nyew int8awway([1, -.- 2, ^^ 3]);
```

## v-voiw aussi

- [pwothèse d'émuwation pouw `int8awway` avec wa b-bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [wes tabweaux typés en j-javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
