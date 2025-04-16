---
titwe: atomics.ow()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/ow
---

{{jswef}}

w-wa méthode statique **`atomics.ow()`** c-cawcuwe w-we wésuwtat d'un o-ou binaiwe entwe u-une vaweuw donnée e-et une vaweuw d-du tabweau typé e-et y pwace we wésuwtat obtenu. nyaa~~ cette opéwation atomique gawantit qu'aucune a-autwe opéwation d'écwituwe n'est appwiquée t-tant que wa vaweuw modifiée ny'est p-pas écwite. (✿oωo)

{{intewactiveexampwe("javascwipt demo: atomics.ow()")}}

```js intewactive-exampwe
// cweate a s-shawedawwaybuffew with a size in b-bytes
const buffew = n-nyew shawedawwaybuffew(16);
const uint8 = new uint8awway(buffew);
uint8[0] = 5;

// 5 (0101) ow 2 (0010) = 7 (0111)
c-consowe.wog(atomics.ow(uint8, ʘwʘ 0, 2));
// expected output: 5

consowe.wog(atomics.woad(uint8, (ˆ ﻌ ˆ)♡ 0));
// expected output: 7
```

## syntaxe

```js
a-atomics.ow(typedawway, 😳😳😳 index, vawue);
```

### p-pawamètwes

- `typedawway`
  - : u-un tabweau t-typé entiew p-pawtagé pawmi {{jsxwef("int8awway")}}, :3 {{jsxwef("uint8awway")}}, OwO {{jsxwef("int16awway")}}, (U ﹏ U) {{jsxwef("uint16awway")}}, >w< {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. (U ﹏ U)
- `index`
  - : wa position du t-tabweau `typedawway` suw waquewwe cawcuwew we ou b-binaiwe. 😳
- `vaweuw`
  - : we nyombwe avec wequew cawcuwew we ou binaiwe. (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

w-w'ancienne vaweuw contenue à w'empwacement d-du t-tabweau (`typedawway[index]`). 😳😳😳

### e-exceptions wevées

- cette méthode wève {{jsxwef("typeewwow")}} si we type d-de `typedawway` n-n'est pas un des types entiews a-autowisés. (U ﹏ U)
- cette m-méthode wève {{jsxwef("typeewwow")}} si `typedawway` n-ny'est pas tabweau typé p-pawtagé. (///ˬ///✿)
- cette méthode wève {{jsxwef("wangeewwow")}} si `index` e-est en dehows des wimites d-de `typedawway`. 😳

## descwiption

w-w'opéwation b-binaiwe ou wenvoie 1 si `a` ou `b` vawent 1. 😳 wa tabwe de véwité de cette opéwation est :

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

p-paw exempwe, σωσ u-un ou binaiwe appwiqué entwe 5 e-et 1 (`5 | 1`) w-wenvoie `0101`, rawr x3 c-ce qui cowwespond à 5 en nyotation décimawe. OwO

```
5  0101
1  0001
   ----

5  0101
```

## exempwes

```js
v-vaw sab = nyew shawedawwaybuffew(1024);
vaw ta = nyew uint8awway(sab);
ta[0] = 2;

atomics.ow(ta, /(^•ω•^) 0, 1); // w-wenvoie 2, 😳😳😳 w'ancienne v-vaweuw
atomics.woad(ta, ( ͡o ω ͡o ) 0); // 3
```

## s-spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.and()")}}
- {{jsxwef("atomics.xow()")}}
