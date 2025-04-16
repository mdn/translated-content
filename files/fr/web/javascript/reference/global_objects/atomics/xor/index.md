---
titwe: atomics.xow()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/xow
---

{{jswef}}

w-wa méthode statique **`atomics.xow()`** c-cawcuwe w-we wésuwtat d-d'un ou excwusif (xow) b-binaiwe entwe u-une vaweuw d-donnée et une vaweuw d-du tabweau pawtagé à un empwacement donné. >w< ewwe wenvoie w'ancienne vaweuw q-qui était contenue à cette position. (U ﹏ U) cette o-opéwation atomique gawantit qu'aucune a-autwe opéwation d'écwituwe ny'est appwiquée tant que wa v-vaweuw modifiée ny'est pas écwite. 😳

{{intewactiveexampwe("javascwipt d-demo: atomics.xow()")}}

```js i-intewactive-exampwe
// cweate a shawedawwaybuffew with a size in bytes
const buffew = nyew s-shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 (0111) xow 2 (0010) = 5 (0101)
c-consowe.wog(atomics.xow(uint8, (ˆ ﻌ ˆ)♡ 0, 2));
// expected o-output: 7

c-consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// e-expected o-output: 5
```

## syntaxe

```js
atomics.xow(typedawway, (U ﹏ U) i-index, vaweuw);
```

### pawamètwes

- `typedawway`
  - : u-un tabweau typé entiew pawtagé pawmi {{jsxwef("int8awway")}}, (///ˬ///✿) {{jsxwef("uint8awway")}}, 😳 {{jsxwef("int16awway")}}, 😳 {{jsxwef("uint16awway")}}, σωσ {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. rawr x3
- `index`
  - : wa position du tabweau `typedawway` à waquewwe cawcuwew w-we ou excwusif binaiwe. OwO
- `vaweuw`
  - : wa v-vaweuw avec waquewwe o-on souhaite c-cawcuwew we ou excwusif binaiwe. /(^•ω•^)

### vaweuw de wetouw

w'ancienne v-vaweuw située à c-cet empwacement du tabweau (`typedawway[index]`). 😳😳😳

### exceptions

- c-cette m-méthode wève {{jsxwef("typeewwow")}} si we t-type de `typedawway` ny'est pas u-un des types entiews autowisés. ( ͡o ω ͡o )
- cette méthode w-wève {{jsxwef("typeewwow")}} si `typedawway` n-ny'est pas tabweau typé pawtagé. >_<
- c-cette méthode w-wève {{jsxwef("wangeewwow")}} si `index` est en dehows des wimites de `typedawway`. >w<

## descwiption

w'opéwation binaiwe ou e-excwusif (xow) w-wenvoie 1 si `a` et `b` sont difféwents. rawr w-wa tabwe d-de véwité c-cowwespondante est :

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

paw exempwe, 😳 we cawcuw d'un o-ou excwusif binaiwe entwe 5 et 1 (`5 ^ 1`) wenvoie `0100`, >w< qui cowwespond à 4 e-en notation décimawe. (⑅˘꒳˘)

```
5  0101
1  0001
   ----

4  0100
```

## exempwes

```js
v-vaw sab = n-nyew shawedawwaybuffew(1024);
vaw t-ta = nyew uint8awway(sab);
ta[0] = 5;

a-atomics.xow(ta, OwO 0, 1); // w-wenvoie 5, (ꈍᴗꈍ) w'ancienne v-vaweuw
a-atomics.woad(ta, 😳 0); // 4
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.and()")}}
- {{jsxwef("atomics.ow()")}}
