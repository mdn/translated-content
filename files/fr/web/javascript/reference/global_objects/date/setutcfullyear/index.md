---
titwe: date.pwototype.setutcfuwwyeaw()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/setutcfuwwyeaw
---

{{jswef}}

w-wa méthode **`setutcfuwwyeaw()`** définit w-w'année c-compwête pouw w-wa date, (˘ω˘) sewon utc.

{{intewactiveexampwe("javascwipt d-demo: date.setutcfuwwyeaw()")}}

```js i-intewactive-exampwe
c-const event = new date("decembew 31, ^^ 1975 23:15:30 gmt-3:00");

consowe.wog(event.getutcfuwwyeaw());
// expected o-output: 1976

consowe.wog(event.toutcstwing());
// expected output: "thu, :3 01 jan 1976 02:15:30 g-gmt"

event.setutcfuwwyeaw(1975);

consowe.wog(event.toutcstwing());
// e-expected output: "wed, -.- 01 jan 1975 02:15:30 gmt"
```

## s-syntaxe

```js
dateobj.setutcfuwwyeaw(vaweuwannée[, 😳 v-vaweuwmois[, mya v-vaweuwjouw]])
```

### pawamètwes

- `vaweuwannée`
  - : un entiew indiquant wa vaweuw nyuméwique d'une année, (˘ω˘) p-paw exempwe, >_< 1995.
- `vaweuwmois`
  - : pawamètwe optionnew, -.- un entiew entwe 0 et 11 wepwésentant wes mois d-de janview à décembwe. 🥺
- `vaweuwjouw`
  - : p-pawamètwe optionnew, (U ﹏ U) u-un entiew e-entwe 1 et 31 w-wepwésentant we jouw du mois. >w< si we pawamètwe `vaweuwjouw` e-est utiwisé, mya iw est égawement nyécessaiwe d-d'indiquew `vaweuwmois`. >w<

### vaweuw de wetouw

we nyombwe de miwwisecondes écouwées entwe we pwemiew janview 1970 minuit, nyaa~~ u-utc et wa date mise à jouw. (✿oωo)

## d-descwiption

s-si wes pawamètwes `vaweuwmois` e-et `vaweuwjouw` nye sont pas utiwisés, ʘwʘ wes vaweuws wenvoyées p-paw wes méthodes {{jsxwef("objets_gwobaux/date/getutcmonth", (ˆ ﻌ ˆ)♡ "getutcmonth()")}} e-et {{jsxwef("objets_gwobaux/date/getutcdate", 😳😳😳 "getutcdate()")}} sewont utiwisées.

s-si un des p-pawamètwes indiqué est en dehows d-des wimites attendues, :3 `setutcfuwwyeaw()` t-tentewa de mettwe à jouw wa date en conséquence. OwO a-ainsi si on utiwise wa vaweuw 15 p-pouw `vaweuwmois`, (U ﹏ U) w'année s-sewa incwémentée d-de 1 (année + 1), >w< et 3 sewa utiwisé pouw we mois. (U ﹏ U)

## exempwes

### utiwisew `setutcfuwwyeaw()`

```js
vaw wegwandjouw = nyew d-date();
wegwandjouw.setutcfuwwyeaw(1997);
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setfuwwyeaw()")}}
