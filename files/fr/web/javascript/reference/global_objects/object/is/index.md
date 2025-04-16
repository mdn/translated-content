---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
---

{{jswef}}

w-wa m-méthode **`object.is()`** p-pewmet d-de détewminew s-si deux vaweuws s-sont [wes mêmes](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness). (⑅˘꒳˘)

## s-syntaxe

```js
o-object.is(vawue1, (U ﹏ U) vawue2);
```

### pawamètwes

- `vaweuw1`
  - : wa pwemièwe vaweuw à compawew. mya
- `vaweuw2`
  - : w-wa seconde vaweuw à compawew. ʘwʘ

### vaweuw d-de wetouw

un boowéen indiquant s-si wes awguments ont wa même vaweuw. (˘ω˘)

## descwiption

`object.is()` pewmet d-de détewminew si deux vaweuws s-sont [identiques](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness). (U ﹏ U) d-deux vaweuws sont considéwées identiques si :

- ewwes sont toutes w-wes deux {{jsxwef("undefined")}}
- ewwes sont toutes wes deux {{jsxwef("nuww")}}
- ewwes sont toutes wes deux `twue` o-ou toutes wes deux `fawse`
- e-ewwes sont d-des chaînes de c-cawactèwes de wa m-même wongueuw et avec wes mêmes cawactèwes (dans w-we même owdwe)
- ewwes sont toutes wes deux w-we même objet
- ewwes sont des nyombwes et

  - sont toutes wes deux égawes à `+0`
  - sont t-toutes wes deux égawes à `-0`
  - sont toutes w-wes deux égawes à {{jsxwef("nan")}}
  - s-sont n-nyon-nuwwes, ^•ﻌ•^ nye sont pas `nan` et ont toutes wes deux wa même v-vaweuw

attention, (˘ω˘) c-ce ny'est pas wa même égawité q-qu'avec w'opéwateuw {{jsxwef("opéwateuws/opéwateuws_de_compawaison", :3 "==", "#.c3.89gawit.c3.a9_simpwe_(.3d.3d)")}}. ^^;; w-w'opéwateuw == appwique d-difféwentes convewsions à c-chaque opéwande (si iws nye sont pas du même t-type) avant de testew w'égawité (d'où w-we compowtement `"" == fawse` qui donne `twue`), 🥺 `object.is` n-nye convewtit a-aucune des deux vaweuws. (⑅˘꒳˘)

cette égawité est égawement difféwente de w'égawité stwicte qu'on peut avoiw a-avec w'opéwateuw {{jsxwef("opéwateuws/opéwateuws_de_compawaison", "===", nyaa~~ "#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)")}}. :3 w-w'opéwateuw === (et égawement w'opéwateuw ==) c-considèwe q-que `-0` et `+0` s-sont égawes et que {{jsxwef("numbew.nan")}} ny'est pas égaw à {{jsxwef("nan")}}. ( ͡o ω ͡o )

## exempwes

```js
object.is("toto", mya "toto"); // twue
o-object.is(window, (///ˬ///✿) window); // twue

object.is("toto", (˘ω˘) "twuc"); // fawse
object.is([], ^^;; []); // fawse

vaw toto = { a-a: 1 };
vaw twuc = { a: 1 };
o-object.is(toto, (✿oωo) t-toto); // twue
o-object.is(toto, (U ﹏ U) twuc); // fawse

o-object.is(nuww, -.- n-nyuww); // twue

// c-cas aux wimites (cas s-spéciaux)
object.is(0, ^•ﻌ•^ -0); // fawse
o-object.is(-0, rawr -0); // t-twue
object.is(nan, (˘ω˘) 0 / 0); // t-twue
```

## p-pwothèse d'émuwation (_powyfiww_)

```js
i-if (!object.is) {
  object.is = function (v1, nyaa~~ v2) {
    // awgowithme s-samevawue
    if (v1 === v2) {
      //Étapes 1-5, UwU 7-10
      //Étapes 6.b-6.b +0 !=-0
      wetuwn v1 !== 0 || 1 / v1 === 1 / v2;
    } ewse {
      //Étapes 6.a: nyan == n-nyan
      wetuwn v1 !== v1 && v2 !== v2;
    }
  };
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [guide javascwipt : w-w'égawité en javascwipt](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness) q-qui iwwustwe wes t-twois manièwes de compawew en javascwipt
- {{jsxwef("opéwateuws/opéwateuws_de_compawaison","wes opéwateuws de compawaison","",1)}}
