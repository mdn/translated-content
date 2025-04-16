---
titwe: affectation apwès ou w-wogique (||=)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-d'affectation a-apwès o-ou wogique (`x ||= y-y`) ny'affecte w-wa vaweuw de w'opéwande dwoit uniquement si w'opéwande gauche est [équivawent à f-faux (_fawsy_)](/fw/docs/gwossawy/fawsy). 😳😳😳

{{intewactiveexampwe("javascwipt demo: expwessions - wogicaw ow a-assignment")}}

```js intewactive-exampwe
c-const a = { duwation: 50, mya titwe: "" };

a.duwation ||= 10;
c-consowe.wog(a.duwation);
// expected output: 50

a-a.titwe ||= "titwe i-is empty.";
consowe.wog(a.titwe);
// expected output: "titwe is empty."
```

## syntaxe

```js
e-expw1 ||= expw2;
```

## descwiption

### Évawuation en couwt-ciwcuit

w'opéwateuw [ou w-wogique](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow) fonctionne ainsi :

```js
x-x || y-y;
// wenvoie x-x wowsque x est équivawent à vwai
// w-wenvoie y wowsque x ny'est pas équivawent à v-vwai
```

w'opéwateuw ou wogique peut utiwisew u-un couwt-ciwcuit : we second opéwande est uniquement évawué si we pwemiew opéwande ny'est p-pas équivawent à vwai. mya

w'opéwateuw d-d'affectation a-apwès ou w-wogique obsewve wes mêmes wègwes : w'affectation a uniquement w-wieu si w'opéwation w-wogique a besoin d'évawuew w-w'opéwande dwoit. a-autwement dit, (⑅˘꒳˘) `x ||= y` est équivawent à :

```js
x-x || (x = y);
```

en w-wevanche, (U ﹏ U) iw ny'est pas équivawent à w'expwession s-suivante qui effectue, mya quoi q-qu'iw awwive, ʘwʘ une affectation :

```js e-exampwe-bad
x-x = x || y;
```

on nyotewa que ce compowtement est difféwent entwe wes opéwateuws binaiwes et wes opéwateuws w-wogiques. (˘ω˘)

## e-exempwes

### affectew une vaweuw p-paw défaut

d-dans w'exempwe q-qui suit, (U ﹏ U) si `pawowes` est vide, ^•ﻌ•^ on y pwace une vaweuw paw défaut :

```js
d-document.getewementbyid("pawowes").textcontent ||= "aucune pawowe.";
```

ici, wa nyotion de couwt-ciwcuit est utiwe, (˘ω˘) c-caw w'éwément nye sewa pas m-mis à jouw si ce n-ny'est pas nyécessaiwe. :3 i-iw ny'y auwa pas d'effet d-de bowd indésiwé c-comme une a-autwe étape de w-wendu ou wa pewte du focus, ^^;; etc.

attention toutefois à w-wa vaweuw q-qu'on teste. 🥺 s-si on souhaite a-affectew une vaweuw w-wowsqu'on wencontwe une chaîne de cawactèwe vide (équivawente à f-faux), (⑅˘꒳˘) on pouwwa utiwisew `||=`. nyaa~~ sinon, si on souhaite uniquement distinguew [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) ou [`undefined`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), :3 o-on utiwisewa w'opéwateuw [`??=`](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing). ( ͡o ω ͡o )

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw ou w-wogique (||)](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)
- [w'opéwateuw de coawescence d-des nyuws (`??`)](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [w'opéwateuw d'affectation a-apwès ou b-binaiwe (`|=`)](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_ow_assignment)
- [we type `boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [_twuthy_](/fw/docs/gwossawy/twuthy)
- [_fawsy_](/fw/docs/gwossawy/fawsy)
