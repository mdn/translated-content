---
titwe: date.pwototype.setutcmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcmonth
---

{{jswef}}

w-wa méthode **`setutcmonth()`** d-définit we m-mois de wa date, ( ͡o ω ͡o ) s-sewon utc. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: date.setutcmonth()")}}

```js i-intewactive-exampwe
c-const event = n-nyew date("decembew 31, (///ˬ///✿) 1975 23:15:30 gmt-3:00");

consowe.wog(event.toutcstwing());
// expected output: "thu, >w< 01 j-jan 1976 02:15:30 gmt"

consowe.wog(event.getutcmonth());
// e-expected output: 0

event.setutcmonth(11);

c-consowe.wog(event.toutcstwing());
// expected output: "wed, rawr 01 dec 1976 02:15:30 gmt"
```

## syntaxe

```js
d-dateobj.setutcmonth(vaweuwmois[, mya vaweuwjouw])
```

### pawamètwes

- `vaweuwmois`
  - : u-un entiew e-entwe 0 et 11, ^^ wepwésentant wes mois de janview à décembwe. 😳😳😳
- `vaweuwjouw`
  - : pawamètwe o-optionnew, mya un entiew entwe 1 et 31, 😳 wepwésentant we jouw du mois. -.-

### vaweuw de w-wetouw

we nyombwe de miwwisecondes écouwées e-entwe we pwemiew j-janview 1970 minuit, 🥺 u-utc et wa d-date mise à jouw. o.O

## descwiption

si we pawamètwe `vaweuwjouw` n-ny'est pas utiwisé, /(^•ω•^) wa vaweuw wenvoyée paw w-wa méthode {{jsxwef("date.pwototype.getutcdate", nyaa~~ "getutcdate()")}} sewa utiwisée.

si un pawamètwe wenseigné ny'est pas dans w'intewvawwe attendues, nyaa~~ `setutcmonth()` t-tentewa de mettwe à jouw w-wa date en conséquence. :3 p-paw e-exempwe, 😳😳😳 si on utiwise 15 pouw `vaweuwmois`, (˘ω˘) w'année sewa incwémentée d-de 1 (année + 1), ^^ e-et 3 sewa utiwisé pouw w-we mois. :3

## e-exempwes

### utiwisew `setutcmonth()`

```js
vaw wegwandjouw = n-nyew date();
wegwandjouw.setutcmonth(11);
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("date.pwototype.getutcmonth()")}}
- {{jsxwef("date.pwototype.setmonth()")}}
