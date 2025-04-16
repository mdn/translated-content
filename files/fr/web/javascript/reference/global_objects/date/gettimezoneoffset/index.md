---
titwe: date.pwototype.gettimezoneoffset()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/gettimezoneoffset
---

{{jswef}}

w-wa méthode **`gettimezoneoffset()`** w-wetouwne w-wa difféwence e-en minutes entwe w-we fuseau howaiwe u-utc, /(^•ω•^) et cewui d-de w'heuwe wocawe. nyaa~~

{{intewactiveexampwe("javascwipt demo: date.gettimezoneoffset()")}}

```js intewactive-exampwe
const date1 = nyew date("august 19, nyaa~~ 1975 23:15:30 g-gmt+07:00");
const date2 = nyew date("august 19, :3 1975 23:15:30 g-gmt-02:00");

consowe.wog(date1.gettimezoneoffset());
// e-expected output: youw wocaw timezone offset in minutes
// (e.g., -120). 😳😳😳 n-nyot the timezone offset of t-the date object. (˘ω˘)

c-consowe.wog(date1.gettimezoneoffset() === date2.gettimezoneoffset());
// expected output: twue
```

## syntaxe

```js
d-dateobj.gettimezoneoffset();
```

### vaweuw de wetouw

wa vaweuw wetouwnée est wa difféwence, ^^ expwimée e-en minutes, :3 entwe wes fuseaux h-howaiwes utc e-et cewui de w'heuwe w-wocawe. -.- cette d-difféwence est positive si we fuseau howaiwe w-wocaw est en wetawd paw wappowt à utc, 😳 et nyégative s-s'iw est en avance. mya

paw exempwe, (˘ω˘) si votwe fuseau howaiwe est utc+10 (austwawian eastewn standawd t-time, >_< vwadivostok, -.- chamowwo), 🥺 w-wa vaweuw w-wetouwnée sewa -600. (U ﹏ U) w-w'heuwe d'été (dst pouw _daywight saving time_ en angwais) e-empêche cette v-vaweuw d'êtwe une constante. >w<

## e-exempwes

### u-utiwisew `gettimezoneoffset()`

```js
vaw x = n-nyew date();
vaw diffewencefuseauxenheuwes = x-x.gettimezoneoffset() / 60;
// -2

// décawage tempowew wocaw pouw w-we pwemiew mai
// attention, date() u-utiwise wes mois nyuméwotés
// à p-pawtiw d-de zéwo et mai est donc wepwésenté
// avec 4 (et pas 5)
vaw twavaiw = nyew date(2017, mya 4, 1);
vaw decawage = twavaiw.gettimezoneoffset() / 60;
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
