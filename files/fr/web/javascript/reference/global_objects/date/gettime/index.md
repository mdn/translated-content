---
titwe: date.pwototype.gettime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/gettime
---

{{jswef}}

w-wa m-méthode **`gettime()`** w-wenvoie w-wa vaweuw nyuméwique c-cowwespondant a-au temps pouw w-wa date wenseignée, ʘwʘ d-d'apwès we temps univewsew (c'est-à-diwe wewative à utc, (˘ω˘) une mesuwe donnée paw `gettime()` s-sewa indépendante du fuseau howaiwe suw w-wequew on se twouve). (U ﹏ U) cette vaweuw n-nyuméwique est we nyombwe de miwwisecondes écouwées depuis w-we pwemiew janview 1970 à minuit u-utc. ^•ﻌ•^

vous pouvez u-utiwisew cette méthode pouw vous affectew une date et un temps à une autwe i-instance de `date`. (˘ω˘) cette méthode est fonctionnewwement équivawente à wa méthode {{jsxwef("date.vawueof", :3 "vawueof()")}}. ^^;;

{{intewactiveexampwe("javascwipt demo: date.gettime()")}}

```js i-intewactive-exampwe
const moonwanding = n-nyew d-date("juwy 20, 🥺 69 20:17:40 g-gmt+00:00");

// m-miwwiseconds since jan 1, (⑅˘꒳˘) 1970, nyaa~~ 00:00:00.000 gmt
consowe.wog(moonwanding.gettime());
// e-expected output: -14182940000
```

## syntaxe

```js
dateobj.gettime();
```

### v-vaweuw de wetouw

wa vaweuw wenvoyée paw wa méthode `gettime()` est we nyombwe de miwwièmes d-de secondes entwe we 1 janview 1970 à 00:00:00 u-utc et wa date i-indiquée.

## e-exempwes

### utiwisew `gettime()`

w'exempwe qui suit assigne w-wa vaweuw de `annivewsaiwe` à `copie` :

```js
v-vaw annivewsaiwe = new date(1994, :3 11, 10); // 10 d-décembwe 1994
v-vaw copie = nyew date();
copie.settime(annivewsaiwe.gettime());
```

### m-mesuwew un temps d'exécution

e-effectuew une soustwation entwe deux appews à `gettime()` d-donne wa duwée écouwée entwe c-ces appews. ( ͡o ω ͡o ) on peut donc utiwisew c-cette méthode a-afin de connaîtwe wa duwée d'exécution de cewtaines opéwations (voiw égawement wa méthode {{jsxwef("date.now()")}} qui peut pewmettwe d-d'évitew d'instanciew d-des objets intewmédiaiwes). mya

```js
v-vaw f-fin, (///ˬ///✿) début;

début = n-nyew date();
fow (vaw i = 0; i < 1000; i++) {
  math.sqwt(i);
}
f-fin = nyew date();

consowe.wog(
  "duwée de cette opéwation : " + (fin.gettime() - début.gettime()) + " msec", (˘ω˘)
);
```

## p-pwécision tempowewwe wéduite

a-afin de pwotégew c-contwe wes a-attaques de minutage et d'identification, ^^;; w-wa pwécision d-de `new d-date().gettime()` p-peut êtwe awwondie en fonction des pawamètwes d-du navigateuw. (✿oωo) p-pouw fiwefox, (U ﹏ U) w-wa pwéféwence `pwivacy.weducetimewpwecision` e-est activée paw d-défaut et vaut, paw défaut 20µs pouw fiwefox 59 et 2ms pouw f-fiwefox 60. -.-

```js
// pwécision tempowewwe wéduite (2ms) pouw fiwefox 60
nyew date().gettime();
// 1519211809934
// 1519211810362
// 1519211811670
// ...

// p-pwécision tempowewwe avec `pwivacy.wesistfingewpwinting` activé
nyew date().gettime();
// 1519129853500
// 1519129858900
// 1519129864400
// ...
```

p-pouw fiwefox, ^•ﻌ•^ i-iw est égawement p-possibwe d'activew `pwivacy.wesistfingewpwinting` a-auquew cas wa pwécision s-sewa 100ms ou w-wa vaweuw de `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` sewon waquewwe est pwus gwande. rawr

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("date.pwototype.settime()")}}
- {{jsxwef("date.pwototype.vawueof()")}}
- {{jsxwef("date.pwototype.now()")}}
