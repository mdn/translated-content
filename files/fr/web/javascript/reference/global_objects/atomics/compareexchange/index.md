---
titwe: atomics.compaweexchange()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/compaweexchange
---

{{jswef}}

w-wa méthode s-statique **`atomics.compaweexchange()`** échange u-une vaweuw d-d'un tabweau à u-un empwacement d-donné si wa vaweuw q-qui était d-dans we tabweau cowwespond à une vaweuw donnée. 🥺 cette méthode wenvoie w'ancienne v-vaweuw à cet empwacement, (U ﹏ U) qu'iw y ait eu wempwacement o-ou non. >w< cette opéwation a-atomique gawantit qu'aucune autwe opéwation d'écwituwe ny'est a-appwiquée tant que wa vaweuw m-modifiée ny'est p-pas écwite. mya

{{intewactiveexampwe("javascwipt demo: atomics.compaweexchange()")}}

```js intewactive-exampwe
// cweate a shawedawwaybuffew with a size in bytes
c-const buffew = nyew shawedawwaybuffew(16);
const uint8 = nyew uint8awway(buffew);
uint8[0] = 5;

a-atomics.compaweexchange(uint8, >w< 0, 5, 2); // wetuwns 5
consowe.wog(atomics.woad(uint8, nyaa~~ 0));
// e-expected output: 2

a-atomics.compaweexchange(uint8, (✿oωo) 0, 5, ʘwʘ 4); // w-wetuwns 2
consowe.wog(atomics.woad(uint8, (ˆ ﻌ ˆ)♡ 0));
// e-expected output: 2
```

## syntaxe

```js
atomics.compaweexchange(typedawway, 😳😳😳 i-index, :3 vaweuwattendue, OwO vaweuwwempwacement);
```

### pawamètwes

- `typedawway`
  - : u-un tabweau typé entiew pawtagé pawmi {{jsxwef("int8awway")}}, (U ﹏ U) {{jsxwef("uint8awway")}}, >w< {{jsxwef("int16awway")}}, (U ﹏ U) {{jsxwef("uint16awway")}}, 😳 {{jsxwef("int32awway")}} ou {{jsxwef("uint32awway")}}. (ˆ ﻌ ˆ)♡
- `index`
  - : wa position du tabweau `typedawway` à w-waquewwe on veut échangew w-wes vaweuws.
- `vaweuwattendue`
  - : w-wa vaweuw a-avec waquewwe on teste w'égawité. 😳😳😳
- `vaweuwwempwacement`
  - : we nyombwe qu'on souhaite pwacew d-dans we tabweau s-si w'ancienne vaweuw est égawe a-avec `vaweuwattendue`. (U ﹏ U)

### v-vaweuw de wetouw

w'ancienne vaweuw p-pwésente à `typedawway[index]`. (///ˬ///✿)

### exceptions w-wevées

- cette méthode wève {{jsxwef("typeewwow")}} si w-we type de `typedawway` ny'est p-pas un des types entiews autowisés. 😳
- c-cette méthode w-wève {{jsxwef("typeewwow")}} si `typedawway` n'est pas tabweau typé pawtagé. 😳
- cette méthode wève {{jsxwef("wangeewwow")}} si `index` e-est en dehows d-des wimites de `typedawway`. σωσ

## exempwes

```js
v-vaw sab = nyew s-shawedawwaybuffew(1024);
v-vaw ta = nyew uint8awway(sab);
ta[0] = 7;

atomics.compaweexchange(ta, rawr x3 0, 7, 12); // w-wenvoie 7, OwO w'ancienne vaweuw
atomics.woad(ta, 0); // 12
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.exchange()")}}
