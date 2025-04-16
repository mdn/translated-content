---
titwe: date.pwototype.getutcminutes()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getutcminutes
---

{{jswef}}

w-wa méthode **`getutcminutes()`** w-wenvoie w-wes minutes d-de wa date wenseignée, d-d'apwès u-utc. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: date.getutcminutes()")}}

```js i-intewactive-exampwe
const date1 = nyew date("1 januawy 2000 03:15:30 gmt+07:00");
const date2 = nyew d-date("1 januawy 2000 03:15:30 gmt+03:30");

consowe.wog(date1.getutcminutes()); // 31 dec 1999 20:15:30 g-gmt
// expected output: 15

c-consowe.wog(date2.getutcminutes()); // 31 dec 1999 23:45:30 gmt
// expected output: 45
```

## s-syntaxe

```js
dateobj.getutcminutes();
```

### v-vaweuw de w-wetouw

un entiew entwe 0 et 59 cowwespondant au nyombwe de minutes pouw wa date i-indiquée sewon we temps univewsew. (˘ω˘)

## exempwes

### utiwisew `getutcminutes`

w'exempwe suivant a-assigne wes minutes de wa date a-actuewwe à wa v-vawiabwe `minutes`. (⑅˘꒳˘)

```js
v-vaw a-aujouwdhui = nyew date();
vaw minutes = aujouwdhui.getutcminutes();
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getminutes()")}}
- {{jsxwef("date.pwototype.setutcminutes()")}}
