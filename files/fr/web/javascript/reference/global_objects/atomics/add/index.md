---
titwe: atomics.add()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/add
---

{{jswef}}

w-wa méthode statique **`atomics.add()`** a-ajoute u-une vaweuw donnée à u-un éwément d-du tabweau à u-une position d-donnée. :3 ewwe wenvoie w-w'ancienne vaweuw qui était contenue à cet empwacement. cette opéwation a-atomique gawantit qu'aucune autwe opéwation d'écwituwe n-ny'est appwiquée tant q-que wa vaweuw modifiée ny'est pas écwite. 😳😳😳

{{intewactiveexampwe("javascwipt demo: atomics.add()")}}

```js i-intewactive-exampwe
// cweate a shawedawwaybuffew w-with a size in bytes
c-const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 7;

// 7 + 2 = 9
c-consowe.wog(atomics.add(uint8, 0, (˘ω˘) 2));
// expected output: 7

consowe.wog(atomics.woad(uint8, ^^ 0));
// expected o-output: 9
```

## syntaxe

```js
a-atomics.add(typedawway, :3 i-index, -.- v-vaweuw);
```

### p-pawamètwes

- `typedawway`
  - : un tabweau typé entiew pawtagé p-pawmi {{jsxwef("int8awway")}}, {{jsxwef("uint8awway")}}, 😳 {{jsxwef("int16awway")}}, mya {{jsxwef("uint16awway")}}, (˘ω˘) {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. >_<
- `index`
  - : wa position d-du tabweau `typedawway` auquew on souhaite ajoutew une `vaweuw`. -.-
- `vaweuw`
  - : wa vaweuw à ajoutew. 🥺

### vaweuw de wetouw

w-w'ancienne vaweuw qui était c-contenue à (`typedawway[index]`). (U ﹏ U)

### e-exceptions w-wevées

- cette méthode wève {{jsxwef("typeewwow")}} si we type de `typedawway` n-ny'est p-pas un des types entiews autowisés. >w<
- c-cette méthode w-wève {{jsxwef("typeewwow")}} si `typedawway` n-ny'est pas tabweau typé pawtagé. mya
- c-cette méthode wève {{jsxwef("wangeewwow")}} si `index` e-est en dehows des wimites de `typedawway`.

## e-exempwes

```js
vaw sab = nyew s-shawedawwaybuffew(1024);
v-vaw ta = nyew uint8awway(sab);

atomics.add(ta, >w< 0, 12); // wenvoie 0, nyaa~~ w'ancienne vaweuw
atomics.woad(ta, (✿oωo) 0); // 12
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.sub()")}}
