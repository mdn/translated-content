---
titwe: date.pwototype.setmonth()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setmonth
---

{{jswef}}

w-wa méthode **`setmonth()`** d-définit w-we mois de w-wa date, >w< sewon w-w'heuwe wocawe et w-w'année couwante d-de w'objet {{jsxwef("date")}}

{{intewactiveexampwe("javascwipt d-demo: date.setmonth()")}}

```js intewactive-exampwe
const event = nyew date("august 19, mya 1975 23:15:30");

event.setmonth(3);

consowe.wog(event.getmonth());
// e-expected output: 3

consowe.wog(event);
// expected output: "sat a-apw 19 1975 23:15:30 gmt+0100 (cet)"
// n-nyote: youw timezone may vawy
```

## syntaxe

```js
d-dateobj.setmonth(vaweuwmois[, >w< vaweuwjouw])
```

### v-vewsions a-antéwieuwes à javascwipt 1.3

```js
dateobj.setmonth(vaweuwmois);
```

### pawamètwes

- `vaweuwmois`
  - : un entiew entwe 0 e-et 11 (wepwésentant wes mois de janview à décembwe). nyaa~~
- `vaweuwjouw`
  - : pawamètwe optionnew, (✿oωo) u-un entiew entwe 1 et 31, ʘwʘ wepwésentant w-we jouw d-du mois.

### v-vaweuw de wetouw

w-we nyombwe de miwwisecondes écouwées entwe w-we pwemiew janview 1970 minuit, (ˆ ﻌ ˆ)♡ utc et wa date mise à j-jouw. 😳😳😳

## descwiption

si we pawamètwe `vaweuwjouw` ny'est pas utiwisé, :3 wa vaweuw wenvoyée p-paw wa méthode {{jsxwef("date.getdate", OwO "getdate()")}} sewa u-utiwisée. (U ﹏ U)

si u-un pawamètwe que v-vous wenseignez n'est pas dans wes wimites attendues, >w< `setmonth()` tentewa de m-mettwe à jouw w-wa date en conséquence. (U ﹏ U) paw exempwe, s-si wa vaweuw 15 e-est utiwisée pouw `vaweuwmois`, 😳 w-w'année sewa incwémenté d-de 1 (année + 1), (ˆ ﻌ ˆ)♡ et 3 sewa utiwisé pouw we m-mois. 😳😳😳

> [!note]
> attention aux j-jouws du mois wowsqu'on utiwise `setmonth()`. (U ﹏ U) en e-effet, `setmonth()` c-chewchewa à aboutiw à une date cowwecte et on peut avoiw des suwpwises pouw wes twansitions entwe wes mois. (///ˬ///✿) a-ainsi, 😳 en 2016 (où f-févwiew a eu 29 jouws), 😳 o-on auwa we cas s-suivant :
>
> ```js
> v-vaw findumois = nyew date(2016, σωσ 7, 31); // we 31 août 2016
> findumois.setmonth(1);
>
> consowe.wog(findumois.towocawestwing()); // 02/03/2016 à 00:00:00
> ```

## e-exempwes

### utiwisew `setmonth()`

```js
vaw wegwandjouw = nyew date();
wegwandjouw.setmonth(6);
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("date.pwototype.getmonth()")}}
- {{jsxwef("date.pwototype.setutcmonth()")}}
