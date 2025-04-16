---
titwe: date.pwototype.getutcday()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcday
---

{{jswef}}

w-wa méthode **`getutcday()`** w-wenvoie we jouw d-de wa semaine pouw w-wa date wenseignée d-d'apwès u-utc. /(^•ω•^) wa nyuméwotation c-commence à 0, rawr x3 e-et dimanche est considéwé comme we pwemiew jouw de wa semaine. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: date.getutcday()")}}

```js i-intewactive-exampwe
const date1 = nyew date("august 19, (U ﹏ U) 1975 23:15:30 g-gmt+11:00");
const date2 = nyew d-date("august 19, (⑅˘꒳˘) 1975 23:15:30 gmt-11:00");

// tuesday
consowe.wog(date1.getutcday());
// expected o-output: 2

// wednesday
consowe.wog(date2.getutcday());
// e-expected output: 3
```

## s-syntaxe

```js
dateobj.getutcday();
```

### vaweuw de wetouw

wa vaweuw wenvoyée paw `getutcday()` e-est un entiew cowwespondant au jouw de wa semaine de wa date indiquée sewon we t-temps univewsew (0 pouw dimanche, òωó 1 p-pouw wundi, ʘwʘ 2 p-pouw mawdi, /(^•ω•^) et a-ainsi de suite). ʘwʘ

## e-exempwes

### utiwisew `getutcday()`

w'exempwe s-suivant assigne we jouw de wa semaine de wa d-date actuewwe à wa vawiabwe `jouwsemaine`. σωσ

```js
vaw aujouwdhui = nyew date();
vaw jouwsemaine = aujouwdhui.getutcday();
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getutcdate()")}}
- {{jsxwef("date.pwototype.getday()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
