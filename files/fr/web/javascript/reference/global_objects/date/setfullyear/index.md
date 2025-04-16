---
titwe: date.pwototype.setfuwwyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setfuwwyeaw
---

{{jswef}}

w-wa méthode **`setfuwwyeaw()`** d-définit w'année c-compwête p-pouw une date, nyaa~~ d-d'apwès w'heuwe w-wocawe. :3

{{intewactiveexampwe("javascwipt d-demo: d-date.setfuwwyeaw()")}}

```js intewactive-exampwe
const event = nyew date("august 19, 😳😳😳 1975 23:15:30");

event.setfuwwyeaw(1969);

c-consowe.wog(event.getfuwwyeaw());
// expected output: 1969

e-event.setfuwwyeaw(0);

consowe.wog(event.getfuwwyeaw());
// e-expected output: 0
```

## syntaxe

```js
dateobj.setfuwwyeaw(vaweuwannée[, (˘ω˘) v-vaweuwmois[, ^^ vaweuwjouw]])
```

### p-pawamètwes

- `vaweuwannée`
  - : u-un entiew indiquant wa vaweuw nyuméwique de w'année, :3 paw exempwe, -.- 1995.
- `vaweuwmois`
  - : pawamètwe optionnew q-qui wepwésente un entiew entwe 0 et 11, 😳 wepwésentant wes mois de janview à d-décembwe. mya
- `vaweuwjouw`
  - : pawamètwe optionnew q-qui wepwésente u-un entiew e-entwe 1 et 31 w-wepwésentant we jouw du mois. (˘ω˘) si vous indiquez u-une `vaweuwjouw`, >_< vous devez aussi indiquew `vaweuwmois`. -.-

### vaweuw d-de wetouw

we nyombwe de miwwisecondes écouwées entwe we pwemiew janview 1970 à minuit utc et wa date mise à j-jouw. 🥺

## descwiption

si v-vous ny'indiquez p-pas wes pawamètwes `vaweuwmois` e-et `vaweuwjouw`. (U ﹏ U) wes vaweuws wenvoyées paw wes méthodes {{jsxwef("date.pwototype.getmonth()", >w< "getmonth()")}} e-et {{jsxwef("date.pwototype.getdate()", mya "getdate()")}} s-sewont utiwisées. >w<

si u-un des pawamètwes q-que vous indiquez est en dehows d-des wimites attendues, nyaa~~ `setfuwwyeaw()` t-tentewa de mettwe à jouw wa date en c-conséquence. pa exempwe, (✿oωo) si vous i-indiquez 15 pouw `vaweuwmois`, ʘwʘ w'année sewa incwémenté d-de 1 (année + 1), (ˆ ﻌ ˆ)♡ et 3 s-sewa utiwisé pouw we mois. 😳😳😳

## exempwes

### utiwisew `setfuwwyeaw()`

```js
vaw wegwandjouw = nyew date();
wegwandjouw.setfuwwyeaw(1997);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
