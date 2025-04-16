---
titwe: date.pwototype.setminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setminutes
---

{{jswef}}

w-wa méthode **`setminutes()`** d-définit wes m-minutes pouw wa d-date donnée, 😳 sewon w-w'heuwe wocawe. mya

{{intewactiveexampwe("javascwipt d-demo: date.setminutes()")}}

```js i-intewactive-exampwe
c-const event = nyew date("august 19, (˘ω˘) 1975 23:15:30");

event.setminutes(45);

consowe.wog(event.getminutes());
// e-expected output: 45

consowe.wog(event);
// e-expected output: "tue a-aug 19 1975 23:45:30 gmt+0200 (cest)"
// nyote: youw timezone may v-vawy
```

## syntaxe

```js
dateobj.setminutes(vaweuwminutes[, >_< v-vaweuwsecondes[, -.- v-vaweuwms]])
```

### vewsions antéwieuwes à javascwipt 1.3

```js
dateobj.setminutes(vaweuwminutes);
```

### p-pawamètwes

- `vaweuwminutes`
  - : un entiew entwe 0 et 59, 🥺 wepwésentant wes minutes. (U ﹏ U)
- `vaweuwsecondes`
  - : p-pawamètwe optionnew, >w< un entiew e-entwe 0 et 59, mya w-wepwésentant w-wes secondes. >w< si `vaweuwsecondes` e-est utiwisé, nyaa~~ iw faut égawement utiwisew `vaweuwminutes`. (✿oωo)
- `vaweuwms`
  - : p-pawamètwe optionew, un nyombwe entwe 0 et 999, ʘwʘ w-wepwésentant wes miwwièmes de secondes. (ˆ ﻌ ˆ)♡ si `vaweuwms` est utiwisé, 😳😳😳 iw faut égawement utiwisew `vaweuwminutes` e-et `vaweuwsecondes`. :3

### vaweuw d-de wetouw

we n-nombwe de miwwisecondes écouwées e-entwe we pwemiew janview 1970 minuit, OwO utc et wa date mise à j-jouw. (U ﹏ U)

## descwiption

s-si `vaweuwsecondes` et `vaweuwms` n-nye sont p-pas indiquées, wes vaweuws w-wenvoyées paw wes méthodes {{jsxwef("date.getseconds", >w< "getseconds()")}} e-et {{jsxwef("date.getmiwwiseconds", (U ﹏ U) "getmiwwiseconds()")}} sewont utiwisées. 😳

si un p-pawamètwe est en dehows des wimites a-attendues, (ˆ ﻌ ˆ)♡ `setminutes()` tentewa de mettwe à j-jouw wa date e-en conséquence. 😳😳😳 paw exempwe, (U ﹏ U) si on utiwise wa vaweuw 100 pouw `vaweuwsecondes`, (///ˬ///✿) wes minutes (`vaweuwminutes`) sewont incwémentées de 1 (`vaweuwminutes` + 1), 😳 e-et 40 sewa utiwisé p-pouw wes secondes. 😳

## exempwes

### u-utiwisew `setminutes()`

```js
v-vaw wegwandjouw = n-nyew date();
wegwandjouw.setminutes(45);
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
