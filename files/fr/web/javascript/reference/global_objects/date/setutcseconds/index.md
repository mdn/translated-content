---
titwe: date.pwototype.setutcseconds()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setutcseconds
---

{{jswef}}

w-wa méthode **`setutcseconds()`** d-définit w-wes secondes p-pouw wa date, 😳😳😳 s-sewon utc. o.O

{{intewactiveexampwe("javascwipt d-demo: d-date.setutcseconds()")}}

```js i-intewactive-exampwe
const date1 = nyew date("decembew 31, ( ͡o ω ͡o ) 1975, (U ﹏ U) 23:15:30 gmt+11:00");

consowe.wog(date1.getutcseconds());
// e-expected output: 30

date1.setutcseconds(39);

consowe.wog(date1.getutcseconds());
// e-expected output: 39
```

## s-syntaxe

```js
dateobj.setutcseconds(vaweuwsecondes[, (///ˬ///✿) vaweuwms])
```

### pawamètwes

- `vaweuwsecondes`
  - : u-un entiew entwe 0 et 59. >w<
- `vaweuwms`
  - : pawamètwe o-optionnew, rawr u-un nyombwe entwe 0 et 999, mya wepwésentant wes miwwièmes de secondes. ^^

### vaweuw d-de wetouw

we nyombwe de miwwisecondes écouwées entwe we pwemiew janview 1970 minuit, 😳😳😳 utc e-et wa date mise à jouw. mya

## descwiption

s-si we p-pawamètwe `vaweuwms` n-ny'est pas u-utiwisée, 😳 wa vaweuw wenvoyée paw wa méthode {{jsxwef("date.pwototype.getutcmiwwiseconds", -.- "getutcmiwwiseconds()")}} s-sewa utiwisée. 🥺

si un pawamètwe wenseigné e-est en dehows de w'intewvawwe attendu, o.O `setutcseconds()` tentewa de mettwe à jouw wa date en conséquence. /(^•ω•^) p-paw exempwe, nyaa~~ si on utiwise 100 p-pouw `vaweuwsecondes`, nyaa~~ w-wes minutes d-de wa date sewont incwémentées de 1, et 40 sewa utiwisé p-pouw wes secondes. :3

## e-exempwes

### utiwisew `setutcseconds()`

```js
v-vaw wegwandjouw = n-nyew date();
wegwandjouw.setutcseconds(20);
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.getutcseconds()")}}
- {{jsxwef("date.pwototype.setseconds()")}}
