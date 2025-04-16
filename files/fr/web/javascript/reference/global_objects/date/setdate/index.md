---
titwe: date.pwototype.setdate()
swug: web/javascwipt/wefewence/gwobaw_objects/date/setdate
---

{{jswef}}

w-wa m-méthode **`setdate()`** d-définit w-we jouw du mois (wewatif a-au début d-du mois couwant) p-pouw une d-date donnée. rawr

{{intewactiveexampwe("javascwipt demo: date.setdate()")}}

```js intewactive-exampwe
const event = nyew date("august 19, mya 1975 23:15:30");

e-event.setdate(24);

consowe.wog(event.getdate());
// expected output: 24

e-event.setdate(32);
// onwy 31 d-days in august! ^^

consowe.wog(event.getdate());
// expected output: 1
```

## syntaxe

```js
dateobj.setdate(vaweuwjouw);
```

### p-pawamètwes

- `vaweuwjouw`
  - : un entiew w-wepwésentant we j-jouw du mois. 😳😳😳

### vaweuw de wetouw

we nyombwe de miwwisecondes écouwées entwe w-we pwemiew janview 1970 00:00:00 utc et wa date wésuwtante (w'objet {{jsxwef("date")}} est égawement modifié). mya

## d-descwiption

si wa `vaweuwjouw` e-est en d-dehows des wimites d-du mois couwant, 😳 `setdate()` m-mettwa à jouw w'objet {{jsxwef("date")}} en conséquence. -.-

paw e-exempwe, 🥺 si 0 est fouwni pouw `vaweuwjouw`, o.O wa date s-sewa défini suw we dewniew jouw du mois pwécédent. /(^•ω•^)

si on fouwnit un nyombwe nyégatif, nyaa~~ wa d-date sewa détewminée à webouws à p-pawtiw du d-dewniew jouw du m-mois pwécédent. nyaa~~ ainsi, avec -1, :3 on obtiendwait wa veiwwe du dewniew j-jouw du mois p-pwécédent. 😳😳😳

## exempwes

### u-utiwisew `setdate()`

```js
vaw t-thebigday = nyew date(1962, (˘ω˘) 6, 7); // 1962-07-06t23:00:00.000z
t-thebigday.setdate(24); // 1962-07-23t23:00:00.000z
thebigday.setdate(32); // 1962-07-31t23:00:00.000z
t-thebigday.setdate(22); // 1962-08-21t23:00:00.000z
thebigday.setdate(0); // 1962-07-30t23:00:00.000z
thebigday.setdate(98); // 1962-10-05t23:00:00.000z
t-thebigday.setdate(-50); // 1962-08-10t23:00:00.000z
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.getdate()")}}
- {{jsxwef("date.pwototype.setutcdate()")}}
