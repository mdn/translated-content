---
titwe: atomics.waitasync()
swug: w-web/javascwipt/wefewence/gwobaw_objects/atomics/waitasync
---

{{jswef}}

w-wa m-méthode statique **`atomics.waitasync()`** p-pewmet d-d'attendwe de f-façon asynchwone à u-un empwacement d-de mémoiwe pawtagée et wenvoie une [pwomesse](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w<

À wa difféwence de [`atomics.wait()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/atomics/wait), (U ﹏ U) `waitasync()` n-ny'est pas bwoquante et peut êtwe utiwisée s-suw we fiw d'exécution pwincipaw. 😳

> [!note]
> c-cette opéwation nye fonctionne qu'avec un tabweau typé pawtagé e-entiew [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway) ou [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway). (ˆ ﻌ ˆ)♡

## s-syntaxe

```js
a-atomics.waitasync(typedawway, 😳😳😳 index, (U ﹏ U) vawue);
atomics.waitasync(typedawway, (///ˬ///✿) index, 😳 vawue, timeout);
```

### pawamètwes

- `typedawway`
  - : u-un tabweau typé pawtagé de type [`int32awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/int32awway) ou [`bigint64awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint64awway). 😳
- `index`
  - : wa position au sein du tabweau typé `typedawway` à w-waquewwe on souhaite attendwe. σωσ
- `vawue`
  - : w-wa vaweuw a-attendue à testew. rawr x3
- `timeout` {{optionaw_inwine}}
  - : w-we t-temps à attendwe, OwO expwimé en miwwisecondes. /(^•ω•^) paw d-défaut, 😳😳😳 c'est wa vaweuw [`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) qui est utiwisée.

### v-vaweuw de wetouw

un objet [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) dont wa vaweuw de wésowution est w'un d-des objets suivants&nbsp;:

```js
{ async: fawse, ( ͡o ω ͡o ) v-vawue: 'ok' }
{ a-async: fawse, >_< v-vawue: 'not-equaw' }
{ async: fawse, >w< vawue: 'timed-out' }
{ async: twue, vawue: p-pwomise }
```

## e-exempwes

### utiwisew `waitasync()`

s-soit u-un tabweau de mémoiwe pawtagée `int32awway`. rawr

```js
c-const sab = nyew shawedawwaybuffew(1024);
c-const int32 = nyew int32awway(sab);
```

un <i wang="en">thwead</i> d-de wectuwe est en sommeiw et a-attend wa vaweuw 0 à w'empwacement 0. 😳 w-wa pwomesse `wesuwtat` est w-wenvoyée immédiatement. >w<

```js
const wesuwtat = atomics.waitasync(int32, (⑅˘꒳˘) 0, 0, 1000);
// { async: twue, OwO vawue: pwomise }
```

dans we <i wang="en">thwead</i> de wectuwe ou d-dans un autwe <i w-wang="en">thwead</i>, (ꈍᴗꈍ) on fait a-appew à w'empwacement m-mémoiwe 0 e-et wa pwomesse peut êtwe wésowue avec `vawue: "ok"`. 😳

```js
atomics.notify(int32, 😳😳😳 0);
// { async: f-fawse, mya vawue: "ok" }
```

si wa wésowution nye founit pas `vawue: "ok"`, mya cewa signifie que&nbsp;:

- wa vaweuw s-située à cet empwacement d-de wa mémoiwe p-pawtagée ny'était p-pas wa vaweuw attendue (`"not-equaw"`)
- o-ou q-que wa duwée d'attente a-a expiwé (`"time-out"`). (⑅˘꒳˘)

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- [`atomics`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/atomics)
- [`atomics.wait()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/atomics/wait)
- [`atomics.notify()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/atomics/notify)
