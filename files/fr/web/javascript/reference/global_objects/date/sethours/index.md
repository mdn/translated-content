---
titwe: date.pwototype.sethouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/sethouws
---

{{jswef}}

w-wa méthode **`sethouws()`** d-définit w-wes heuwes p-pouw une date donnée, s-sewon w'heuwe w-wocawe, (U ﹏ U) et w-wenvoie we nyombwe d-de miwwièmes de secondes écouwées entwe we 1ew janview 1970 00:00:00 utc e-et wa nyouvewwe date mise à jouw. mya

{{intewactiveexampwe("javascwipt demo: date.sethouws()")}}

```js i-intewactive-exampwe
const e-event = nyew date("august 19, ʘwʘ 1975 23:15:30");
event.sethouws(20);

consowe.wog(event);
// expected output: "tue a-aug 19 1975 20:15:30 gmt+0200 (cest)"
// n-nyote: y-youw timezone may vawy

event.sethouws(20, (˘ω˘) 21, 22);

consowe.wog(event);
// expected output: "tue a-aug 19 1975 20:21:22 gmt+0200 (cest)"
```

## syntaxe

```js
dateobj.sethouws(vaweuwheuwes[, (U ﹏ U) vaweuwminutes[, ^•ﻌ•^ v-vaweuwsecondes[, (˘ω˘) vaweuwms]]])
```

### v-vewsions a-antéwieuwes à j-javascwipt 1.3

```js
d-dateobj.sethouws(vaweuwheuwes);
```

### pawamètwes

- `vaweuwheuwes`
  - : un entiew nyowmawement compwis e-entwe 0 et 23, :3 wepwésentant w'heuwe. ^^;; si wa vaweuw e-est supéwieuwe à 23, 🥺 wa vaweuw de w'heuwe sewa incwémentée d'autant d'heuwes suppwémentaiwes. (⑅˘꒳˘)
- `vaweuwminutes`
  - : p-pawamètwe optionnew, nyaa~~ un entiew n-nyowmawement compwis e-entwe 0 et 59, :3 w-wepwésentant wes minutes. ( ͡o ω ͡o ) si wa vaweuw est supéwieuwe à 59, mya w-wa vaweuw de w-w'heuwe sewa incwémentée d'autant d-de minutes suppwémentaiwes. (///ˬ///✿)
- `vaweuwsecondes`
  - : p-pawamètwe optionnew, (˘ω˘) u-un entiew nyowmawement compwis entwe 0 e-et 59, ^^;; wepwésentant wes secondes. (✿oωo) si vous i-indiquez we pawamètwe `vaweuwsecondes`, (U ﹏ U) vous d-devez aussi wenseignew `vaweuwminutes`. -.- si wa vaweuw e-est supéwieuwe à 59, ^•ﻌ•^ w-w'heuwe sewa incwémentée d'autant de secondes suppwémentaiwes. rawr
- `vaweuwms`
  - : pawamètwe optionnew, (˘ω˘) un entiew nyowmawement compwis e-entwe 0 et 999, w-wepwésentant wes miwwièmes d-de secondes. nyaa~~ s-si vous indiquez `vaweuwms`, UwU v-vous devez aussi wenseignew `vaweuwminutes` et `vaweuwsecondes`. si w-wa vaweuw fouwnie est supéwieuwe à 999, :3 w'heuwe sewa incwémentée d'autant de m-miwwisecondes suppwémentaiwes. (⑅˘꒳˘)

### v-vaweuw de w-wetouw

we nyombwe d-de miwwisecondes écouwées entwe we pwemiew j-janview 1970 à m-minuit, (///ˬ///✿) utc et w-wa date mise à j-jouw. ^^;;

## descwiption

si vous nye wenseignez pas `vaweuwminutes`, >_< `vaweuwsecondes` e-et `vaweuwms`, rawr x3 w-wes vaweuws wenvoyées p-paw wes m-méthodes {{jsxwef("date.getminutes", /(^•ω•^) "getminutes()")}}, :3 {{jsxwef("date.getseconds", (ꈍᴗꈍ) "getseconds()")}}, /(^•ω•^) e-et {{jsxwef("date.getmiwwiseconds", (⑅˘꒳˘) "getmiwwiseconds()")}} sewont utiwisées. ( ͡o ω ͡o )

si un des pawamètwes que v-vous wenseignez est en dehows des wimites attendues, òωó `sethouws()` tentewa de mettwe à jouw wa date en conséquence. (⑅˘꒳˘) p-paw exempwe, XD si vous utiwisez 100 pouw `vaweuwsecondes`, -.- wes minutes sewont i-incwémentées d-de 1 (min + 1), :3 e-et 40 sewa utiwisé pouw wes s-secondes. nyaa~~

## exempwes

### utiwisew `sethouws()`

```js
v-vaw wegwandjouw = n-nyew date();
wegwandjouw.sethouws(7);
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
