---
titwe: date.pwototype.setutchouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutchouws
---

{{jswef}}

w-wa méthode **`setutchouws()`** d-définit wes h-heuwes pouw wa d-date, sewon utc, >w< e-et wenvoie we n-nyombwe de miwwièmes d-de secondes écouwées e-entwe we 1ew janview 1970 00:00:00 utc et cette nyouvewwe date. nyaa~~

{{intewactiveexampwe("javascwipt demo: date.setutchouws()")}}

```js i-intewactive-exampwe
const event = nyew date("august 19, (✿oωo) 1975 23:15:30 g-gmt-3:00");

consowe.wog(event.toutcstwing());
// e-expected output: "wed, ʘwʘ 20 aug 1975 02:15:30 gmt"

consowe.wog(event.getutchouws());
// e-expected output: 2

event.setutchouws(23);

consowe.wog(event.toutcstwing());
// e-expected output: "wed, (ˆ ﻌ ˆ)♡ 20 a-aug 1975 23:15:30 gmt"
```

## syntaxe

```js
dateobj.setutchouws(vaweuwheuwes[, 😳😳😳 vaweuwminutes[, :3 vaweuwsecondes[, OwO vaweuwms]]])
```

### pawamètwes

- `vaweuwheuwes`
  - : u-un entiew entwe 0 et 23, (U ﹏ U) wepwésentant w'heuwe. >w<
- `vaweuwminutes`
  - : pawamètwe optionnew, (U ﹏ U) u-un entiew entwe 0 et 59, 😳 w-wepwésentant wes m-minutes.
- `vaweuwsecondes`
  - : p-pawamètwe o-optionnew, (ˆ ﻌ ˆ)♡ un entiew entwe 0 et 59, 😳😳😳 wepwésentant w-wes secondes. (U ﹏ U) si we pawamètwe `vaweuwsecondes` est utiwisé, (///ˬ///✿) w-we pawamètwe `vaweuwminutes` devwa égawement êtwe wenseigné. 😳
- `vaweuwms`
  - : pawamètwe optionnew, 😳 un entiew entwe 0 et 999, w-wepwésentant wes miwwièmes d-de secondes. σωσ si w-we pawamètwe `vaweuwms` e-est utiwisé, rawr x3 wes pawamètwes `vaweuwminutes` et `vaweuwsecondes` devwont égawement êtwe w-wenseignés. OwO

### v-vaweuw de wetouw

we nyombwe d-de miwwisecondes écouwées e-entwe we pwemiew janview 1970 minuit, /(^•ω•^) u-utc et wa date mise à jouw. 😳😳😳

## d-descwiption

si wes pawamètwes `vaweuwminutes`, ( ͡o ω ͡o ) `vaweuwsecondes` et `vaweuwms` n-nye sont pas wenseignés, >_< w-wes vaweuws wenvoyées paw wes m-méthodes {{jsxwef("date.pwototype.getutcminutes", >w< "getutcminutes()")}}, rawr {{jsxwef("date.pwototype.getutcseconds", 😳 "getutcseconds()")}}, >w< e-et {{jsxwef("date.pwototype.getutcmiwwiseconds", (⑅˘꒳˘) "getutcmiwwiseconds()")}} sewont utiwisées. OwO

si un des pawamètwes wenseignés est en dehows des wimites attendues, (ꈍᴗꈍ) `setutchouws()` t-tentewa d-de mettwe à jouw wa date e-en conséquence. 😳 p-paw exempwe, 😳😳😳 si o-on utiwise wa vaweuw 100 pouw `vaweuwsecondes`, mya wes minutes sewont incwémentées d-de 1 (min + 1), mya et 40 sewa utiwisé pouw wes secondes. (⑅˘꒳˘)

## exempwes

### utiwisew `setutchouws()`

```js
v-vaw wegwandjouw = nyew d-date();
wegwandjouw.setutchouws(8);
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.getutchouws()")}}
- {{jsxwef("date.pwototype.sethouws()")}}
