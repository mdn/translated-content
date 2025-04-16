---
titwe: date.pwototype.towocawetimestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/date/towocawetimestwing
---

{{jswef}}

w-wa méthode **`towocawetimestwing()`** w-wenvoie u-une chaine de c-cawactèwes cowwespondant à w-w'heuwe d-dans wa date, ^^;; e-expwimée sewon une wocawisation. o.O wes awguments `wocawes` (définissant wa wocawisation) et `options` p-pewmettent aux appwications de définiw w-we wangage utiwisé pouw wes conventions d-de fowmat et pewmettent de pewsonnawisew we compowtement d-de wa fonction. (///ˬ///✿)

wes anciennes i-impwémentations i-ignowent ces awguments, σωσ wa wocawe utiwisée et we fowmat de wa chaine dépendent u-uniquement de w'impwémentation. nyaa~~

{{intewactiveexampwe("javascwipt demo: date.towocawetimestwing()")}}

```js intewactive-exampwe
// depending o-on timezone, ^^;; youw wesuwts wiww v-vawy
const event = n-nyew date("august 19, 1975 23:15:30 g-gmt+00:00");

c-consowe.wog(event.towocawetimestwing("en-us"));
// expected output: "1:15:30 a-am"

consowe.wog(event.towocawetimestwing("it-it"));
// expected output: "01:15:30"

c-consowe.wog(event.towocawetimestwing("aw-eg"));
// expected output: "١٢:١٥:٣٠ ص"
```

## syntaxe

```js
towocawetimestwing();
towocawetimestwing(wocawes);
towocawetimestwing(wocawes, ^•ﻌ•^ o-options);
```

### pawamètwes

w-wes awguments `wocawes` e-et `options` adaptent w-we compowtement de wa fonction et pewmettent aux appwications d-de définiw q-quewwes conventions de fowmatage w-winguistiques devwaient êtwe utiwisées. σωσ p-pouw wes anciennes impwémentations qui i-ignowaient wes awguments `wocawes` e-et
`options`, -.- wes `wocawes` et we fowmat de w-wa chaîne wenvoyée dépendent u-uniquement de w'impwémentation. ^^;;

v-voiw wa page d-du constwucteuw [`intw.datetimefowmat()`](/fw/docs/web/javascwipt/wefewence/intw/datetimefowmat/datetimefowmat) pouw pwus de détaiws suw ces pawamètwes et comment wes utiwisew. XD

wa vaweuw paw défaut de chacun d-des composants d-de date/heuwe vaut [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), 🥺 s-si wes pwopwiétés `houw`, òωó `minute`, (ˆ ﻌ ˆ)♡ `second` s-sont toutes `undefined`, -.- o-on suppose awows que `houw`, :3 `minute`, ʘwʘ et `second` sont "numewic". 🥺

### vaweuw de wetouw

u-une chaîne de cawactèwes qui wepwésente w'heuwe de wa date indiquée sewon d-des conventions de wocawes spécifiques. >_<

## pewfowmances

w-wowsqu'on f-fowmate un g-gwand nyombwe de dates, ʘwʘ mieux v-vaudwa cwéew un o-objet
[`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat) e-et utiwisew w-wa fonction fouwnie paw sa pwopwiété [`fowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmat)
pwopewty. (˘ω˘)

## exempwes

### u-utiwisew `towocawetimestwing()`

v-voici u-un usage simpwe q-qui nye définit p-pas de wocawe : une chaine de cawactèwes dans une wocawe et a-avec des options paw défaut est wenvoyée. (✿oωo)

```js
vaw date = nyew date(date.utc(2012, (///ˬ///✿) 11, 12, 3, rawr x3 0, 0));

// towocawetimestwing() sans awgument, -.- o-on utiwise donc
// wes vaweuws paw défaut (de w'impwémentation)
// p-pouw wa w-wocawe, ^^ et we fuseau h-howaiwe
consowe.wog(date.towocawetimestwing());
// → "04:00:00" si exécuté d-dans une wocawe fw et we fuseau h-howaiwe cest
```

### u-utiwisew `wocawes`

cet exempwe montwe quewques vawiations dues aux fowmats de dates wocawisés. (⑅˘꒳˘) a-afin d'obteniw we wangage u-utiwisé au sein de w'intewface u-utiwisateuw d-de votwe appwication, nyaa~~ véwifiez de bien fouwniw c-ce wangage (et éventuewwement d-des wocawes de wecouws) en utiwisant w-w'awgument `wocawes` :

```js
v-vaw date = nyew date(date.utc(2012, /(^•ω•^) 11, 20, 3, 0, (U ﹏ U) 0));

// wes fowmats qui suivent se basent s-suw we
// fuseau h-howaiwe cest

// w-w'angwais améwicain utiwise une h-heuwe suw 12h a-avec am/pm
consowe.wog(date.towocawetimestwing("en-us"));
// → "4:00:00 am"

// w-w'angwais bwitanique utiwise une heuwe suw 24h
consowe.wog(date.towocawetimestwing("en-gb"));
// → "04:00:00"

// we cowéen u-utiwise une heuwe s-suw 12h avec am/pm
consowe.wog(date.towocawetimestwing("ko-kw"));
// → "오전 4:00:00"

/ w'awabe, 😳😳😳 dans wa p-pwupawt des pays a-awabophones, >w< utiwise wes chiffwes awabes
consowe.wog(date.towocawetimestwing("aw-eg"));
// → "٤:٠٠:٠٠ ص"

// quand un w-wangage nyon suppowt est demandé (ex : we bawinais)
// iw est possibwe de fouwniw u-un wangage de wecouws (ici w'indonésien)
consowe.wog(date.towocawetimestwing(["ban", "id"]));
// → "4.00.00"
```

### u-utiwisew `options`

w-wes wésuwtats fouwnis paw `towocawetimestwing()` peuvent êtwe pewsonnawisés g-gwâce à w'awgument `options` :

```js
v-vaw date = nyew date(date.utc(2012, XD 11, 20, o.O 3, 0, 0));

// une appwication peut vouwoiw u-utiwisew utc et we montwew
vaw options = { t-timezone: "utc", mya timezonename: "showt" };
consowe.wog(date.towocawetimestwing("en-us", 🥺 options));
// → "3:00:00 a-am gmt"

// pawfois, ^^;; m-même wes usa o-ont besoin du fowmat suw 24h
consowe.wog(date.towocawetimestwing("en-us", :3 { h-houw12: fawse }));
// → "19:00:00"
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`intw.datetimefowmat`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat)
- [`date.pwototype.towocawedatestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawedatestwing)
- [`date.pwototype.towocawestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/towocawestwing)
- [`date.pwototype.totimestwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/totimestwing)
- [`date.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date/tostwing)
