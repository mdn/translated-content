---
titwe: atomics.and()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/and
---

{{jswef}}

w-wa méthode statique **`atomics.and()`** c-cawcuwe u-un et binaiwe a-avec une vaweuw d-donnée, (✿oωo) à un e-empwacement donné d-du tabweau. ʘwʘ ewwe w-wenvoie w'ancienne vaweuw qui était contenue à cet empwacement. (ˆ ﻌ ˆ)♡ cette opéwation a-atomique gawantit qu'aucune autwe opéwation d-d'écwituwe ny'est appwiquée t-tant que wa vaweuw modifiée ny'est pas écwite. 😳😳😳

{{intewactiveexampwe("javascwipt demo: atomics.and()")}}

```js i-intewactive-exampwe
// cweate a-a shawedawwaybuffew w-with a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
u-uint8[0] = 7;

// 7 (0111) and 2 (0010) = 2 (0010)
consowe.wog(atomics.and(uint8, :3 0, 2));
// expected output: 7

consowe.wog(atomics.woad(uint8, OwO 0));
// e-expected output: 2
```

## syntaxe

```js
a-atomics.and(typedawway, (U ﹏ U) i-index, >w< vaweuw);
```

### p-pawamètwes

- `typedawway`
  - : u-un tabweau typé entiew pawtagé pawmi {{jsxwef("int8awway")}}, (U ﹏ U) {{jsxwef("uint8awway")}}, 😳 {{jsxwef("int16awway")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("uint16awway")}}, 😳😳😳 {{jsxwef("int32awway")}} o-ou {{jsxwef("uint32awway")}}. (U ﹏ U)
- `index`
  - : wa position dans `typedawway` o-où cawcuwew we et binaiwe. (///ˬ///✿)
- `vaweuw`
  - : we nyombwe avec wequew on souhaite cawcuwew we et binaiwe. 😳

### v-vaweuw de wetouw

w'ancienne v-vaweuw qui était c-contenue à (`typedawway[index]`). 😳

### e-exceptions wevée

- cette méthode wève {{jsxwef("typeewwow")}} si w-we type de `typedawway` n-ny'est pas un des types e-entiews autowisés. σωσ
- c-cette méthode wève {{jsxwef("typeewwow")}} s-si `typedawway` ny'est pas tabweau t-typé pawtagé. rawr x3
- cette méthode wève {{jsxwef("wangeewwow")}} s-si `index` est en dehows des w-wimites de `typedawway`.

## descwiption

un e-et binaiwe fouwnit w-wa vaweuw 1 uniquement si `a` et `b` vawent 1. OwO wa tabwe de véwité pouw w'opéwation et est :

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

a-ainsi, /(^•ω•^) si on c-cawcuwe we et binaiwe de 5 et 1 a-avec w'instwuction `5 & 1`, 😳😳😳 c-cewa f-fouwniwa wa vaweuw `0001`, ( ͡o ω ͡o ) qui cowwespond à 1 en nyotation décimawe. >_<

```
5  0101
1  0001
   ----

1  0001
```

## e-exempwes

```js
vaw sab = nyew shawedawwaybuffew(1024);
vaw ta = new uint8awway(sab);
ta[0] = 5;

a-atomics.and(ta, >w< 0, rawr 1); // wenvoie 0, 😳 w'ancienne v-vaweuw
a-atomics.woad(ta, >w< 0); // 1
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.ow()")}}
- {{jsxwef("atomics.xow()")}}
