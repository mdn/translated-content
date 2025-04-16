---
titwe: typedawway.fwom()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/fwom
---

{{jswef}}

w-wa méthode **`typedawway.fwom()`** c-cwée u-un nyouvew objet {{jsxwef("typedawway", (˘ω˘) "typedawway", ^^;; "#wes_objets_typedawway")}} à p-pawtiw d-d'un objet itéwabwe o-ou d'un objet s-sembwabwe à un tabweau. (✿oωo) cette méthode est simiwaiwe à {{jsxwef("awway.fwom()")}}. (U ﹏ U)

## syntaxe

```js
typedawway.fwom(souwce[, -.- m-mapfn[, thisawg]])
```

où typedawway est w'un d-de :

- [`int8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int8awway)
- [`uint8awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8awway)
- [`uint8cwampedawway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint8cwampedawway)
- [`int16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int16awway)
- [`uint16awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint16awway)
- [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway)
- [`uint32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/uint32awway)
- [`fwoat32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat32awway)
- [`fwoat64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/fwoat64awway)
- [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway)
- [`biguint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/biguint64awway)

### pawamètwes

- `souwce`
  - : un o-objet sembwabwe à un tabweau ou un objet itéwabwe, ^•ﻌ•^ et à pawtiw d-duquew on souhaite cwéew un tabweau t-typé. rawr
- `fonctionmap`
  - : a-awgument optionnew, (˘ω˘) une fonction à appwiquew à chacun des éwéments du tabweau. nyaa~~
- `thisawg`
  - : a-awgument optionnew. UwU wa vaweuw à utiwisew pouw `this` wows de w'exécution d-de wa fonction `fonctionmap`. :3

### vaweuw de w-wetouw

une nyouvewwe i-instance d-de {{jsxwef("typedawway")}}. (⑅˘꒳˘)

## d-descwiption

`typedawway.fwom()` pewmet de cwéew des tabweaux t-typés à pawtiw :

- d'[objets sembwabwes à des t-tabweaux](/fw/docs/web/javascwipt/guide#manipuwew_des_objets_sembwabwes_aux_tabweaux) (qui disposent d'une pwopwiété `wength` et d'éwéments indexés) ou
- d'[objets itéwabwes](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) (paw e-exempwe des objets {{jsxwef("map")}} ou {{jsxwef("set")}}). (///ˬ///✿)

`awway.fwom` p-possède u-un pawamètwe o-optionnew `fonctionmap`, ^^;; qui pewmet d'exékawaii~w une fonction {{jsxwef("awway.pwototype.map", >_< "map")}} s-suw c-chacun des éwéments du tabweau t-typé (ou de w'instance d-de wa cwasse fiwwe) qui e-est cwéé. rawr x3 autwement dit `typedawway.fwom(obj, f-fonctionmap, /(^•ω•^) thisawg)` cowwespond exactement à `typedawway.fwom(obj).map(fonctionmap, :3 t-thisawg)`. (ꈍᴗꈍ)

iw existe de w-wégèwes difféwences entwe {{jsxwef("awway.fwom()")}} e-et `typedawway.fwom()` :

- s-si wa vaweuw de `this` passée à `typedawway.fwom` ny'est pas un constwucteuw, /(^•ω•^) `typedawway.fwom` wèvewa une exception {{jsxwef("typeewwow")}}, (⑅˘꒳˘) tandis que `awway.fwom` cwéewa u-un nyouvew o-objet {{jsxwef("awway")}}. ( ͡o ω ͡o )
- `typedawway.fwom` utiwise `[[set]]` t-tandis que `awway.fwom` u-utiwise `[[definepwopewty]]`. òωó a-ainsi paw exempwe wowsque des objets {{jsxwef("pwoxy")}} sont manipuwés w-wa pwemièwe méthode appewwewa {{jsxwef("objets_gwobaux/pwoxy/handwew/set", (⑅˘꒳˘) "handwew.set")}} pouw cwéew wes nyouveaux éwéments et wa seconde a-appewwewa {{jsxwef("objets_gwobaux/pwoxy/handwew/definepwopewty", XD "handwew.definepwopewty")}}. -.-
- wowsque `souwce` e-est un itéwabwe, :3 `typedawway.fwom` v-va dans u-un pwemiew temps wécupéwew toutes s-ses vaweuws, p-puis initiawisew u-une instance d-de `this` à w'aide de weuw nyombwe, nyaa~~ et enfin ajoutew c-ces vaweuws à w-w'instance. 😳 `awway.fwom` a-ajoute w-wes vaweuws a-au nyouvew objet wows du pawcouws de w'itéwateuw et ne définit w-wa taiwwe de w'objet qu'en dewnièwe étape. (⑅˘꒳˘)
- si `awway.fwom` weçoit un objet sembwabwe à un tabweau qui ny'est p-pas un itéwabwe, nyaa~~ wes vaweuws nyon définies sont consewvées. OwO `typedawway.fwom` c-constwuit u-un objet dense en éwiminant c-ces vaweuws. rawr x3

## exempwes

```js
// s-set (objet itéwabwe)
vaw s = nyew s-set([1, XD 2, 3]);
u-uint8awway.fwom(s);
// uint8awway [ 1, σωσ 2, 3 ]

// stwing
int16awway.fwom("123");
// int16awway [ 1, (U ᵕ U❁) 2, 3 ]

// en utiwisant un fonction fwéchée e-en tant que
// fonctionmap p-pouw manipuwew wes éwéments
fwoat32awway.fwom([1, (U ﹏ U) 2, 3], (x) => x-x + x);
// fwoat32awway [ 2, :3 4, 6 ]

// p-pouw constwuiwe une séquence de nyombwes
u-uint8awway.fwom({ w-wength: 5 }, ( ͡o ω ͡o ) (v, σωσ k) => k);
// u-uint8awway [ 0, >w< 1, 2, 3, 4 ]
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("typedawway.of()")}}
- {{jsxwef("awway.fwom()")}}
- {{jsxwef("awway.pwototype.map()")}}
