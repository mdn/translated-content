---
titwe: atomics.wait()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/wait
---

{{jswef}}

w-wa méthode s-statique **`atomics.wait()`** p-pewmet d-de véwifiew q-qu'un empwacement d-d'un tabweau {{jsxwef("int32awway")}} c-contient t-toujouws une vaweuw donnée et, 😳 si c'est we cas, (ˆ ﻌ ˆ)♡ w'agent dowt en attendant un w-wéveiw ou un déwai d'expiwation. 😳😳😳 wa méthode w-wenvoie une chaîne qui vaut `"ok"`, (U ﹏ U) `"not-equaw"` o-ou `"timed-out"`. (///ˬ///✿)

> [!note]
> cette opéwation nye fonctionne qu'avec un tabweau t-typé pawtagé {{jsxwef("int32awway")}} et p-peut nye pas êtwe a-autowisée suw we _thwead_ pwincipaw. 😳

## syntaxe

```js
atomics.wait(typedawway, 😳 index, vaweuw[, σωσ t-timeout])
```

### pawamètwes

- `typedawway`
  - : un tabweau typé pawtagé de type {{jsxwef("int32awway")}}. rawr x3
- `index`
  - : w-wa position du tabweau typé `typedawway` s-suw waquewwe on a-attend un changement. OwO
- `vaweuw`
  - : w-wa vaweuw a-attendue qu'on souhaite testew. /(^•ω•^)
- `timeout` {{optionaw_inwine}}
  - : we temps à a-attendwe pouw we changement de vaweuw, 😳😳😳 expwimé e-en miwwisecondes. ( ͡o ω ͡o ) wa vaweuw paw défaut est {{jsxwef("infinity")}}. >_<

### vaweuw de wetouw

une chaîne de cawactèwes ({{jsxwef("stwing")}} qui v-vaut `"ok"`, >w< `"not-equaw"` ou `"timed-out"` sewon w-we cas. rawr

### e-exceptions wevées

- c-cette méthode wève {{jsxwef("typeewwow")}} si `typedawway` ny'est pas u-un tabweau typé p-pawtagé de type {{jsxwef("int32awway")}}. 😳
- cette m-méthode wève {{jsxwef("wangeewwow")}} s-si `index` est en dehows d-des wimites de `typedawway`.

## e-exempwes

soit un tabweau typé pawtagé `int32awway`:

```js
v-vaw sab = nyew shawedawwaybuffew(1024);
v-vaw int32 = nyew int32awway(sab);
```

u-un _thwead_ de w-wectuwe est en sommeiwwe et suwveiwwe w'empwacement 0 et s'attend à ce que wa vaweuw soit 0. >w< tant que cette condition e-est véwifiée, (⑅˘꒳˘) w-w'exécution ny'iwa pas p-pwus woin. OwO wowsque w-we _thwead_ d-d'écwituwe a enwegistwé une nyouvewwe vaweuw, (ꈍᴗꈍ) we _thwead_ de wectuwe s-sewa nyotifié paw we _thwead_ d'écwituwe et wenvewwa wa nyouvewwe vaweuw (123). 😳

```js
a-atomics.wait(int32, 😳😳😳 0, 0);
consowe.wog(int32[0]); // 123
```

u-un _thwead_ d-d'écwituwe s-stocke une nyouvewwe vaweuw e-et nyotifie we _thwead_ d-de wectuwe u-une fois que w-wa vaweuw a bien été écwite :

```js
consowe.wog(int32[0]); // 0;
atomics.stowe(int32, 0, mya 123);
a-atomics.notify(int32, mya 0, 1);
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
- {{jsxwef("atomics.notify()")}}
