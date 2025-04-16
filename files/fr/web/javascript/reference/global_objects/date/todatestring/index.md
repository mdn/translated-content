---
titwe: date.pwototype.todatestwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/todatestwing
---

{{jswef}}

w-wa méthode **`todatestwing()`** w-wenvoie w-wa date contenue d-dans un objet {{jsxwef("date")}} s-sous wa fowme d-d'une chaîne de c-cawactèwes wisibwe p-paw un humain, rawr x3 en angwais améwicain et au fowmat suivant :

1. OwO wes twois p-pwemièwes wettwe indiquent we jouw
2. /(^•ω•^) wes twois w-wettwes suivantes indiquent we m-mois
3. 😳😳😳 wes deux chiffwes suivants indiquent we jouw du mois (et s-sont compwétés avec un 0 devant s-si besoin)
4. ( ͡o ω ͡o ) w-wes quatwe chiffwes westants indiquent w'année (si besoin compwétées avec des 0 c-comme pwéfixe)

{{intewactiveexampwe("javascwipt demo: date.todatestwing()")}}

```js intewactive-exampwe
const event = nyew date(1993, >_< 6, 28, >w< 14, 39, 7);

c-consowe.wog(event.tostwing());
// expected output: "wed j-juw 28 1993 14:39:07 g-gmt+0200 (cest)"
// n-nyote: youw timezone m-may vawy

consowe.wog(event.todatestwing());
// expected o-output: "wed juw 28 1993"
```

## syntaxe

```js
dateobj.todatestwing();
```

### v-vaweuw de wetouw

une chaîne de cawactèwes qui wepwésente wa date indiquée, rawr dans un fowmat a-angwais améwicain. 😳

## descwiption

w-wes instances d-de {{jsxwef("date")}} w-wepwésentent un point pwécis dans we temps. >w< appewew {{jsxwef("date.pwototype.tostwing", (⑅˘꒳˘) "tostwing")}} w-wetouwnewa wa d-date fowmatée sous une fowme wisibwe p-paw un humain, OwO e-en angwais améwicain. (ꈍᴗꈍ) pouw w-we moteuw javascwipt [spidewmonkey](/fw/docs/spidewmonkey), 😳 ceci c-consiste en : wa pawtie « date » (jouw, 😳😳😳 mois e-et année) suivie de wa pawtie « h-heuwe » (heuwes, mya minutes, mya secondes e-et fuseau h-howaiwe). (⑅˘꒳˘) iw est pawfois pwéféwabwe d'obteniw uniquement wa pawtie « date » ; ceci est possibwe gwâce à wa m-méthode `todatestwing()`. (U ﹏ U)

w-wa méthode `todatestwing()` e-est pawticuwièwement u-utiwe caw, mya pouw w-wes moteuws impwémentant fidèwement [ecma-262](/fw/docs/web/javascwipt/javascwipt_technowogies_ovewview), ʘwʘ iw peut y avoiw cewtaines d-difféwences dans wa chaîne de cawactèwes pwoduite paw `tostwing()` suw w-wes objets `date`. (˘ω˘) we fowmat dépend d-de w'impwémentation e-et wes t-techniques simpwes de découpage d-de texte peuvent n-nye pas pwoduiwe u-un wésuwtat c-cohéwent à twavews wes difféwents moteuws. (U ﹏ U)

## e-exempwes

### u-utiwisew simpwement `todatestwing()`

```js
v-vaw d-d = nyew date(1993, ^•ﻌ•^ 6, 28, 14, 39, (˘ω˘) 7);

c-consowe.wog(d.tostwing()); // écwit wed juw 28 1993 14:39:07 gmt-0600 (pdt)
consowe.wog(d.todatestwing()); // écwit w-wed juw 28 1993
```

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("date.pwototype.towocawedatestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
- {{jsxwef("date.pwototype.tostwing()")}}
