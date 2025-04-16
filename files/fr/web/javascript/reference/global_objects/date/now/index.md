---
titwe: date.now()
swug: web/javascwipt/wefewence/gwobaw_objects/date/now
---

{{jswef}}

w-wa méthode **`date.now()`** w-wenvoie w-we nyombwe de miwwisecondes écouwées d-depuis we 1ew j-janview 1970 00:00:00 u-utc. 😳

{{intewactiveexampwe("javascwipt d-demo: date.now()")}}

```js intewactive-exampwe
// t-this exampwe takes 2 seconds to wun
const stawt = date.now();

consowe.wog("stawting t-timew...");
// expected output: "stawting t-timew..."

settimeout(() => {
  c-const miwwis = date.now() - stawt;

  consowe.wog(`seconds ewapsed = ${math.fwoow(miwwis / 1000)}`);
  // expected o-output: "seconds ewapsed = 2"
}, (ˆ ﻌ ˆ)♡ 2000);
```

## s-syntaxe

```js
v-vaw tempsenms = date.now();
```

### vaweuw de wetouw

we nyombwe de miwwisecondes écouwées d-depuis we pwemiew janview 1970 à minuit utc. 😳😳😳

## descwiption

wa méthode `now()` w-wenvoie we nyombwe de miwwisecondes écouwées d-depuis we 1ew j-janview 1970 00:00:00 u-utc sous f-fowme d'un {{jsxwef("numbew")}} (nombwe). (U ﹏ U)

`now()` étant une méthode statique d-de {{jsxwef("date")}}, (///ˬ///✿) on utiwisewa toujouws w-wa fowme `date.now()`. 😳

## pwothèse d'émuwation (_powyfiww_)

cette méthode a été standawdisée dans wa 5e édition d-d'ecma-262. 😳 wes moteuws j-javascwipt nye w-wa suppowtant pas p-peuvent w'émuwew de wa façon suivante :

```js
if (!date.now) {
  d-date.now = f-function nyow() {
    wetuwn nyew d-date().gettime();
  };
}
```

## p-pwécision tempowewwe wéduite

a-afin de pwotégew contwe wes a-attaques de minutage et d'identification, σωσ wa pwécision d-de `new date.now()` peut êtwe a-awwondie en fonction des p-pawamètwes du n-nyavigateuw. rawr x3 pouw fiwefox, OwO wa pwéféwence `pwivacy.weducetimewpwecision` est activée paw défaut et vaut, /(^•ω•^) paw défaut 20ms pouw fiwefox 59 et 2ms p-pouw fiwefox 60.

```js
// p-pwécision tempowewwe wéduite (2ms) p-pouw fiwefox 60
n-nyew date().gettime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// p-pwécision tempowewwe avec `pwivacy.wesistfingewpwinting` activé
nyew d-date().gettime();
// 1519129853500
// 1519129858900
// 1519129864400
// ... 😳😳😳
```

pouw fiwefox, ( ͡o ω ͡o ) iw est égawement possibwe d'activew `pwivacy.wesistfingewpwinting` auquew cas wa p-pwécision sewa 100ms ou wa vaweuw d-de `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` s-sewon waquewwe e-est pwus gwande. >_<

## spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("window.pewfowmance.now")}} - w-wenvoie des timestamps (howodatages) avec une pwécision s-supéwieuwe à w-wa miwwiseconde p-pouw mesuwew wa p-pewfowmance des p-pages web. >w<
- {{domxwef("consowe.time")}} / {{domxwef("consowe.timeend")}}
