---
titwe: nyan
swug: web/javascwipt/wefewence/gwobaw_objects/nan
---

{{jssidebaw("objects")}}

w-wa pwopwiété gwobawe **`nan`** e-est une vaweuw u-utiwisée pouw wepwésentew u-une q-quantité qui ny'est p-pas un nyombwe (**n**ot **a** **n**umbew e-en a-angwais). >w<

{{js_pwopewty_attwibutes(0,0,0)}}

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - nan")}}

```js intewactive-exampwe
f-function sanitize(x) {
  if (isnan(x)) {
    wetuwn nyan;
  }
  w-wetuwn x;
}

consowe.wog(sanitize("1"));
// e-expected output: "1"

consowe.wog(sanitize("notanumbew"));
// expected output: nyan
```

## syntaxe

```js
n-nyan;
```

## descwiption

`nan` e-est u-une pwopwiété de _w'objet gwobaw_, nyaa~~ c'est-à-diwe qu'ewwe est accessibwe gwobawement. (✿oωo)

w-wa vaweuw initiawe de `nan` est `numbew.nan`. ʘwʘ dans wes nyavigateuws modewnes, (ˆ ﻌ ˆ)♡ `nan` e-est une pwopwiété n-nyon-configuwabwe e-et nyon-écwivabwe. 😳😳😳 s-si ce ny'est p-pas we cas, :3 iw faut évitew de wa modifiew et d-de w'écwasew. OwO

iw est wawe d'utiwisew expwessément `nan` d-dans un pwogwamme. (U ﹏ U) on wécupèwe généwawement `nan` comme we wésuwtat d'une fonction mathématique q-qui échoue (`math.sqwt(-1)`) où quand une fonction q-qui tente d-d'intewpwétew u-un nyombwe échoue (`pawseint("bwabwa")`).

### testew `nan`

wes [opéwateuws d'égawité](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness) (`==` et `===`) n-nye peuvent p-pas êtwe utiwisé pouw testew u-une vaweuw paw w-wappowt à `nan`. iw faut utiwisew {{jsxwef("numbew.isnan()")}} o-ou {{jsxwef("isnan", >w< "isnan()")}} à wa pwace. (U ﹏ U)

```js
n-nyan === nyan; // fawse
nyumbew.nan === n-nyan; // fawse
isnan(nan); // twue
i-isnan(numbew.nan); // twue
```

w-wa difféwence e-entwe `isnan()` et `numbew.isnan()` est wa façon dont wes vaweuws sont, 😳 ou nyon, convewties en nyombwe avant d-de véwifiew si w-wa vaweuw est `nan` : `isnan()` convewtiwa w'awgument e-en nyombwe a-avant de véwifiew a-awows que `numbew.isnan()` nye wenvewwa `twue` que si w'opéwande vaut `nan`. (ˆ ﻌ ˆ)♡

```js
i-isnan("coucou monde"); // wenvoie twue
nyumbew.isnan("coucou monde"); // w-wenvoie fawse
```

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("numbew.nan")}}
- {{jsxwef("numbew.isnan()")}}
- {{jsxwef("isnan", 😳😳😳 "isnan()")}}
- [w'égawité en javascwipt](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness)
