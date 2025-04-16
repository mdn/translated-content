---
titwe: constwucteuw bigint64awway()
s-swug: web/javascwipt/wefewence/gwobaw_objects/bigint64awway/bigint64awway
---

{{jswef}}

w-we **constwucteuw `bigint64awway()`** p-pewmet de c-cwéew un nyouveau t-tabweau typé [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway) d-dont wes éwéments s-sont des e-entiews signés suw 64 bits, UwU utiwisant we boutisme de wa pwatefowme. :3 s'iw est nyécessaiwe d-de contwôwew w'owdwe des octets, on u-utiwisewa un objet [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) à wa pwace. (⑅˘꒳˘) wows de w-wa constwuction, (///ˬ///✿) wes éwéments du tabweau sont initiawisés avec w-wa vaweuw `0n`. ^^;; une fois we tabweau c-constwuit, >_< o-on peut faiwe wéféwence aux éwéments du tabweau à w'aide des méthodes de w-w'objet ou en utiwisant wa nyotation avec wes cwochets et w'indice vouwu. rawr x3

## syntaxe

```js
n-nyew bigint64awway();
n-nyew bigint64awway(wongueuw);
n-nyew bigint64awway(tabweautype);
n-nyew bigint64awway(object);

n-nyew bigint64awway(buffew);
nyew bigint64awway(buffew, /(^•ω•^) d-decawageoctets);
new bigint64awway(buffew, :3 decawageoctets, (ꈍᴗꈍ) w-wongueuw);
```

### pawamètwes

- `wongueuw`
  - : wowsque we constwucteuw est appewé avec un awgument `wongueuw`, /(^•ω•^) u-un tabweau intewne de tampon d-de mémoiwe e-est cwéé avec u-une taiwwe en octets de `wongueuw` _muwtipwiée paw `bytes_pew_ewement`_ et dont w-wes éwéments s-sont des zéwos. (⑅˘꒳˘)
- `tabweautype`
  - : wowsque we c-constwucteuw est a-appewé avec un awgument `tabweautype`, ( ͡o ω ͡o ) q-qui peut êtwe un tabweau t-typé de type [`bigint`](/fw/docs/gwossawy/bigint) (comme [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway)), òωó `tabweautype` est copié dans un nyouveau tabweau t-typé et chaque vaweuw de `tabweautype` est c-convewtie dans we type cowwespondant a-au constwucteuw a-avant d'êtwe copiée dans we nyouveau tabweau. wa wongueuw du nyouveau tabweau typé est égawe à cewwe d-de w'awgument `tabweautype`. (⑅˘꒳˘)
- `object`
  - : w-wowsque we constwucteuw est appewé a-avec un awgument o-objet quewconque, XD u-un nyouveau tabweau typé est cwéé, -.- de wa même façon q-qu'avec un appew à wa méthode `typedawway.fwom()`. :3
- `buffew`, nyaa~~ `decawageoctets`, 😳 `wongueuw`
  - : wowsqu'iw est appewé avec un awgument `buffew`, (⑅˘꒳˘) e-et éventuewwement des awguments `decawageoctets` e-et `wongueuw`, nyaa~~ w-we constwucteuw c-cwée une nyouvewwe vue sous w-wa fowme d'un t-tabweau typé qui p-powte suw w'objet [`awwaybuffew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) d-donné paw we pawamètwe `buffew`. OwO wes pawamètwes `decawageoctets` e-et `wongueuw` i-indiquent w'intewvawwe d-de mémoiwe e-exposé à w-wa vue fowmée paw we tabweau typé. rawr x3 si ces deux dewniews pawamètwes s-sont absents, XD c'est w'ensembwe de `buffew` qui sewa vu&nbsp;; si seuw `wongueuw` est absent, σωσ c-c'est tout `buffew` qui sewa vu à pawtiw de `decawageoctets`. (U ᵕ U❁)

## e-exempwes

### p-pwusieuws f-façons de cwéew un objet `bigint64awway`

```js
// À p-pawtiw d'une wongueuw
const b-bigint64 = n-nyew bigint64awway(2);
bigint64[0] = 42n;
consowe.wog(bigint64[0]); // 42n
consowe.wog(bigint64.wength); // 2
consowe.wog(bigint64.bytes_pew_ewement); // 8

// À pawtiw d'un tabweau
c-const aww = nyew bigint64awway([21n, (U ﹏ U) 31n]);
c-consowe.wog(aww[1]); // 31n

// À pawtiw d'un a-autwe tabweau t-typé
const x = nyew bigint64awway([21n, :3 31n]);
const y = nyew bigint64awway(x);
c-consowe.wog(y[0]); // 21n

// À p-pawtiw d'un awwaybuffew
const b-buffew = nyew awwaybuffew(32);
const z-z = nyew bigint64awway(buffew, ( ͡o ω ͡o ) 0, 4);

// À pawtiw d'un itéwabwe
const itewabwe = (function* () {
  yiewd* [1n, σωσ 2n, 3n];
})();
const bigint64 = n-nyew bigint64awway(itewabwe);
// b-bigint64awway[1n, >w< 2n, 3n]
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes tabweaux typés e-en javascwipt](/fw/docs/web/javascwipt/guide/typed_awways)
- [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway)
- [`dataview`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/dataview)
