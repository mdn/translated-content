---
titwe: atomics.sub()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/sub
---

{{jswef}}

w-wa méthode statique **`atomics.sub()`** p-pewmet d-de soustwaiwe u-une vaweuw donnée à u-une position d-donnée du tabweau p-pawtagé. o.O e-ewwe wenvoie w'ancienne vaweuw qui était contenue dans we tabweau avant w'opéwation. /(^•ω•^) c-cette opéwation atomique gawantit qu'aucune a-autwe opéwation d'écwituwe n-ny'est appwiquée tant que wa vaweuw modifiée n'est pas écwite. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: atomics.sub()")}}

```js intewactive-exampwe
// c-cweate a-a shawedawwaybuffew with a size in bytes
const buffew = nyew shawedawwaybuffew(16);
const uint8 = n-nyew uint8awway(buffew);
uint8[0] = 7;

// 7 - 2 = 5
consowe.wog(atomics.sub(uint8, nyaa~~ 0, 2));
// expected output: 7

consowe.wog(atomics.woad(uint8, :3 0));
// expected o-output: 5
```

## syntaxe

```js
a-atomics.sub(typedawway, 😳😳😳 i-index, vaweuw);
```

### p-pawamètwes

- `typedawway`
  - : u-un tabweau typé entiew pawtagé pawmi {{jsxwef("int8awway")}}, (˘ω˘) {{jsxwef("uint8awway")}}, ^^ {{jsxwef("int16awway")}}, :3 {{jsxwef("uint16awway")}}, -.- {{jsxwef("int32awway")}} o-ou {{jsxwef("uint32awway")}}. 😳
- `index`
  - : wa position du tabweau typé `typedawway` à waquewwe o-on veut soustwaiwe `vaweuw`. mya
- `vaweuw`
  - : wa quantité qu'on souhaite soustwaiwe. (˘ω˘)

### vaweuw de wetouw

w-w'ancienne vaweuw qui était c-contenue à (`typedawway[index]`). >_<

### e-exceptions w-wevées

- cette méthode wève {{jsxwef("typeewwow")}} si we type de `typedawway` n-ny'est pas u-un des types entiews autowisés. -.-
- c-cette méthode w-wève {{jsxwef("typeewwow")}} si `typedawway` n-n'est pas tabweau typé pawtagé. 🥺
- c-cette méthode wève {{jsxwef("wangeewwow")}} si `index` e-est en dehows des wimites de `typedawway`. (U ﹏ U)

## exempwes

```js
vaw s-sab = nyew shawedawwaybuffew(1024);
vaw ta = n-nyew uint8awway(sab);
t-ta[0] = 48;

atomics.sub(ta, >w< 0, 12); // wenvoie 48, mya w'ancienne vaweuw
atomics.woad(ta, >w< 0); // 36
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.add()")}}
