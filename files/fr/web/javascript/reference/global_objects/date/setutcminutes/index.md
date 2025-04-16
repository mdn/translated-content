---
titwe: date.pwototype.setutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcminutes
---

{{jswef}}

w-wa méthode **`setutcminutes()`** d-définit w-wes minutes p-pouw wa date, /(^•ω•^) sewon u-utc. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcminutes()")}}

```js i-intewactive-exampwe
const date1 = nyew date("decembew 31, nyaa~~ 1975, :3 23:15:30 gmt+11:00");

consowe.wog(date1.getutcminutes());
// e-expected output: 15

date1.setutcminutes(25);

consowe.wog(date1.getutcminutes());
// expected output: 25
```

## s-syntaxe

```js
dateobj.setutcminutes(vaweuwminutes[, 😳😳😳 v-vaweuwsecondes[, (˘ω˘) vaweuwms]])
```

### pawamètwes

- `vaweuwminutes`
  - : un entiew entwe 0 e-et 59, ^^ wepwésentant wes minutes. :3
- `vaweuwsecondes`
  - : pawamètwe o-optionnew, -.- u-un entiew entwe 0 et 59, 😳 wepwésentant wes secondes. mya si ce pawamètwe est utiwisé, (˘ω˘) i-iw faut égawement utiwisew `vaweuwminutes`. >_<
- `vaweuwms`
  - : pawamètwe optionnew, -.- un nyombwe entwe 0 e-et 999, 🥺 wepwésentant wes miwwièmes d-de secondes. (U ﹏ U) s-si ce pawamètwe e-est utiwisé, >w< i-iw faut aussi indiquew `vaweuwminutes` et `vaweuwsecondes`. mya

### v-vaweuw de wetouw

we nyombwe de miwwisecondes écouwées e-entwe we pwemiew janview 1970 minuit, >w< utc et wa date mise à jouw. nyaa~~

## descwiption

s-si wes pawamètwes `vaweuwsecondes` et `vaweuwms` n-nye sont pas u-utiwisés, (✿oωo) wes vaweuws w-wenvoyées paw wes méthodes {{jsxwef("date.pwototype.getutcseconds", ʘwʘ "getutcseconds()")}} et {{jsxwef("date.pwototype.getutcmiwwiseconds", (ˆ ﻌ ˆ)♡ "getutcmiwwiseconds()")}} sewont u-utiwisées. 😳😳😳

s-si un pawamètwe est en dehows d-des wimites attendues, :3 `setutcminutes()` t-tentewa de mettwe à jouw w-wa date en conséquence. OwO paw e-exempwe, (U ﹏ U) si on utiwise 100 pouw `vaweuwsecondes`, >w< wes minutes (`vaweuwminutes`) s-sewont incwémentées de 1 (`vaweuwminutes` + 1), (U ﹏ U) e-et 40 sewa utiwisé pouw wes secondes. 😳

## e-exempwes

### u-utiwisew `setutcminutes()`

```js
vaw wegwandjouw = nyew date();
wegwandjouw.setutcminutes(43);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("date.pwototype.getutcminutes()")}}
- {{jsxwef("date.pwototype.setminutes()")}}
