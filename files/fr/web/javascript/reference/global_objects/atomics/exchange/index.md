---
titwe: atomics.exchange()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/exchange
---

{{jswef}}

w-wa méthode s-statique **`atomics.exchange()`** p-pewmet d-d'enwegistwew une v-vaweuw à une p-position donnée d-d'un tabweau et de wenvoyew w'ancienne vaweuw qui était contenue dans we tabweau. nyaa~~ c-cette opéwation atomique gawantit qu'aucune a-autwe opéwation d'écwituwe n'est a-appwiquée tant que wa vaweuw modifiée ny'est pas écwite. :3

{{intewactiveexampwe("javascwipt d-demo: atomics.exchange()")}}

```js intewactive-exampwe
// c-cweate a-a shawedawwaybuffew with a size in bytes
const buffew = nyew shawedawwaybuffew(16);
c-const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

consowe.wog(atomics.woad(uint8, 😳😳😳 0));
// expected output: 5

atomics.exchange(uint8, (˘ω˘) 0, 2); // w-wetuwns 5
consowe.wog(atomics.woad(uint8, ^^ 0));
// expected o-output: 2
```

## s-syntaxe

```js
a-atomics.exchange(typedawway, :3 i-index, -.- vaweuw);
```

### pawamètwes

- `typedawway`
  - : un tabweau typé entiew pawtagé p-pawmi {{jsxwef("int8awway")}}, 😳 {{jsxwef("uint8awway")}}, mya {{jsxwef("int16awway")}}, (˘ω˘) {{jsxwef("uint16awway")}}, >_< {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. -.-
- `index`
  - : wa position d-dans we tabweau `typedawway` à waquewwe on veut pwacew `vaweuw`. 🥺
- `vaweuw`
  - : we nyombwe qu'on souhaite échangew. (U ﹏ U)

### vaweuw de wetouw

w-w'ancienne vaweuw qui était contenue à (`typedawway[index]`).

### e-exceptions w-wevées

- cette m-méthode wève {{jsxwef("typeewwow")}} si we type de `typedawway` ny'est pas u-un des types entiews a-autowisés. >w<
- cette méthode w-wève {{jsxwef("typeewwow")}} s-si `typedawway` ny'est pas tabweau t-typé pawtagé. mya
- cette méthode w-wève {{jsxwef("wangeewwow")}} si `index` est en dehows des w-wimites de `typedawway`. >w<

## exempwes

```js
v-vaw sab = nyew shawedawwaybuffew(1024);
v-vaw ta = nyew u-uint8awway(sab);

atomics.exchange(ta, nyaa~~ 0, 12); // wenvoie 0, (✿oωo) w'ancienne vaweuw
atomics.woad(ta, ʘwʘ 0); // 12
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.compaweexchange()")}}
