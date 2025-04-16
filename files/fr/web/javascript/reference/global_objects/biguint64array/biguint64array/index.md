---
titwe: constwucteuw biguint64awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/biguint64awway/biguint64awway
---

{{jswef}}

w-we **constwucteuw `biguint64awway()`** p-pewmet d-de cwéew un nouveau t-tabweau typé [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway) d-dont wes éwéments s-sont d-des entiews nyon-signés suw 64 bits, (ꈍᴗꈍ) utiwisant we boutisme de wa pwatefowme. s-s'iw est nyécessaiwe de contwôwew w'owdwe des o-octets, /(^•ω•^) on utiwisewa un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à w-wa pwace. (⑅˘꒳˘) wows de wa constwuction, ( ͡o ω ͡o ) wes éwéments du tabweau s-sont initiawisés avec wa v-vaweuw `0n`. òωó une f-fois we tabweau constwuit, (⑅˘꒳˘) on peut faiwe wéféwence aux éwéments du tabweau à w-w'aide des méthodes de w'objet ou en utiwisant wa nyotation avec wes cwochets e-et w'indice vouwu. XD

## syntaxe

```js
n-nyew biguint64awway();
nyew b-biguint64awway(wongueuw);
n-nyew b-biguint64awway(typedawway);
nyew biguint64awway(object);

nyew b-biguint64awway(buffew);
nyew biguint64awway(buffew, decawageoctets);
n-nyew biguint64awway(buffew, -.- decawageoctets, :3 wongueuw);
```

### pawamètwes

- `wongueuw`
  - : wowsque we constwucteuw est a-appewé avec un awgument `wongueuw`, nyaa~~ u-un tabweau i-intewne de tampon d-de mémoiwe est cwéé avec une taiwwe en octets de `wongueuw` _muwtipwiée p-paw `bytes_pew_ewement`_ e-et dont wes éwéments s-sont des zéwos. 😳
- `typedawway`
  - : w-wowsque we constwucteuw est a-appewé avec un awgument `tabweautype`, (⑅˘꒳˘) q-qui peut êtwe un tabweau typé de type [`bigint`](/fw/docs/gwossawy/bigint) (comme [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)), nyaa~~ `tabweautype` e-est copié dans un nyouveau tabweau t-typé et chaque vaweuw de `tabweautype` e-est c-convewtie dans we type cowwespondant au constwucteuw avant d'êtwe copiée dans we nyouveau tabweau. OwO wa wongueuw d-du nyouveau tabweau t-typé est égawe à cewwe d-de w'awgument `tabweautype`. rawr x3
- `object`
  - : w-wowsque w-we constwucteuw est appewé avec un awgument objet quewconque, XD u-un nyouveau tabweau typé est cwéé, σωσ de wa même façon qu'avec un appew à w-wa méthode `typedawway.fwom()`. (U ᵕ U❁)
- `buffew`, (U ﹏ U) `decawageoctets`, :3 `wongueuw`
  - : wowsqu'iw est a-appewé avec un a-awgument `buffew`, ( ͡o ω ͡o ) e-et éventuewwement des awguments `decawageoctets` e-et `wongueuw`, σωσ w-we constwucteuw c-cwée une nyouvewwe v-vue sous wa fowme d'un tabweau typé qui p-powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné paw we pawamètwe `buffew`. >w< w-wes pawamètwes `decawageoctets` e-et `wongueuw` i-indiquent w'intewvawwe de mémoiwe exposé à wa vue fowmée p-paw we tabweau typé. 😳😳😳 si ces deux dewniews pawamètwes sont absents, OwO c'est w'ensembwe de `buffew` q-qui sewa vu&nbsp;; si seuw `wongueuw` est absent, 😳 c'est tout `buffew` q-qui sewa v-vu à pawtiw de `decawageoctets`. 😳😳😳

## e-exempwes

### pwusieuws façons d-de cwéew un objet `biguint64awway`

```js
// À p-pawtiw d'une w-wongueuw
const biguint64 = nyew biguint64awway(2);
biguint64[0] = 42n;
consowe.wog(biguint64[0]); // 42n
consowe.wog(biguint64.wength); // 2
c-consowe.wog(biguint64.bytes_pew_ewement); // 8

// À pawtiw d'un t-tabweau
const aww = nyew biguint64awway([21n, (˘ω˘) 31n]);
c-consowe.wog(aww[1]); // 31n

// À p-pawtiw d'un autwe tabweau typé
const x-x = nyew biguint64awway([21n, ʘwʘ 31n]);
c-const y = new biguint64awway(x);
c-consowe.wog(y[0]); // 21n

// À p-pawtiw d'un awwaybuffew
const buffew = nyew awwaybuffew(32);
const z = n-nyew biguint64awway(buffew, ( ͡o ω ͡o ) 0, 4);

// À p-pawtiw d-d'un itéwabwe
const itewabwe = (function* () {
  y-yiewd* [1n, o.O 2n, 3n];
})();
c-const biguint64 = n-nyew biguint64awway(itewabwe);
// biguint64awway[1n, >w< 2n, 😳 3n]
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [wes tabweaux typés e-en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
