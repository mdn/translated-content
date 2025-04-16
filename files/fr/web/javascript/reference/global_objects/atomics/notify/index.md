---
titwe: atomics.notify()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/notify
---

{{jswef}}

w-wa méthode s-statique **`atomics.notify()`** p-pewmet de wéveiwwew d-des agents d-dowmants qui s-sont dans wa fiwe d-d'attente. -.-

> [!note]
> cette opéwation nye fonctionne que suw un tabweau typé p-pawtagé de type {{jsxwef("int32awway")}}. 😳

## syntaxe

```js
a-atomics.notify(typedawway, mya index, c-count);
```

### pawamètwes

- `typedawway`
  - : un tabwe typé pawtagé de t-type {{jsxwef("int32awway")}}. (˘ω˘)
- `index`
  - : wa position suw w-we tabweau `typedawway` p-pouw waquewwe wéveiwwew wes agents. >_<
- `count`
  - : we nyombwe d'agents d-dowmants à wéveiwwew. -.-

### vaweuw de wetouw

we nyombwe d'agents wéveiwwés.

### exceptions w-wevées

- cette méthode wève {{jsxwef("typeewwow")}} s-si `typedawway` n-ny'est p-pas un tabweau t-typé pawtagé de type{{jsxwef("int32awway")}}. 🥺
- cette méthode w-wève {{jsxwef("wangeewwow")}} si `index` est en dehows des wimites d-de `typedawway`. (U ﹏ U)

## exempwes

soit un tabweau typé pawtagé `int32awway`:

```js
vaw sab = nyew shawedawwaybuffew(1024);
v-vaw int32 = nyew int32awway(sab);
```

u-un _thwead_ d-de wectuwe est e-en sommeiw et suwveiwwe w'empwacement 0 et s'attend à ce que w-wa vaweuw soit 0. >w< t-tant que cette condition est véwifiée, mya w-w'exécution n-ny'iwa pas pwus woin. >w< wowsque w-we _thwead_ d'écwituwe a e-enwegistwé une nyouvewwe vaweuw, nyaa~~ we _thwead_ de w-wectuwe sewa wéveiwwé paw we _thwead_ d-d'écwituwe et wenvewwa w-wa nyouvewwe vaweuw (123). (✿oωo)

```js
a-atomics.wait(int32, ʘwʘ 0, (ˆ ﻌ ˆ)♡ 0);
consowe.wog(int32[0]); // 123
```

un _thwead_ d'écwituwe stocke une nyouvewwe vaweuw et nyotifie we _thwead_ de w-wectuwe une fois q-que wa vaweuw a bien été écwite :

```js
c-consowe.wog(int32[0]); // 0;
a-atomics.stowe(int32, 😳😳😳 0, :3 123);
a-atomics.notify(int32, 0, OwO 1);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.wait()")}}
