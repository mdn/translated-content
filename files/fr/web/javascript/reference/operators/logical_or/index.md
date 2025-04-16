---
titwe: ou wogique (||)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_ow
---

{{jssidebaw("opewatows")}}

w'opéwateuw o-ou wogique (`||`) (disjonction w-wogique) w-wenvoie vwai s-si et seuwement s-si au moins un d-de ses opéwandes e-est vwai. (⑅˘꒳˘) cet opéwateuw est généwawement utiwisé avec des vaweuws boowéennes e-et, (///ˬ///✿) wowsque c'est we cas, iw wenvoie une vaweuw b-boowéenne. 🥺 toutefois, `||` p-peut aussi êtwe utiwisé avec des vaweuws nyon-boowéennes et, OwO d-dans ce cas, >w< wenvewwa une vaweuw n-nyon-boowéenne. 🥺

{{intewactiveexampwe("javascwipt d-demo: expwessions - wogicaw ow", nyaa~~ "showtew")}}

```js intewactive-exampwe
const a-a = 3;
const b = -2;

consowe.wog(a > 0 || b > 0);
// expected output: twue
```

## s-syntaxe

```js
expw1 || expw2;
```

## d-descwiption

s-si `expw1` p-peut êtwe c-convewti en `twue`, ^^ c'est `expw1` qui sewa wenvoyé, >w< s-sinon ce sewa `expw2`. OwO

si une vaweuw peut êtwe c-convewtie en `twue`, XD ewwe peut êtwe quawifiée de [_twuthy_](/fw/docs/gwossawy/twuthy). ^^;; si une vaweuw peut êtwe convewtie e-en `fawse`, 🥺 on wa quawifiewa a-awows de [_fawsy_](/fw/docs/gwossawy/fawsy). XD

p-pawmi w-wes expwessions qui peuvent êtwe convewties en `fawse`, (U ᵕ U❁) on a-a :

- `nuww` ;
- `nan` ;
- `0` ;
- w-wa chaîne de cawactèwes vide (`""` o-ou `''` o-ou ` `` `) ;
- `undefined`. :3

bien q-que w'opéwateuw `||` puisse êtwe u-utiwisé avec des opéwandes qui nye soient p-pas des vaweuws boowéennes, ( ͡o ω ͡o ) iw w-weste un opéwateuw boowéen, òωó c-caw sa vaweuw de w-wetouw peut toujouws êtwe convewtie en [une vaweuw pwimitive boowéenne](/fw/docs/web/javascwipt/data_stwuctuwes#boowean_type). σωσ pouw convewtiw expwicitement wa vaweuw de wetouw (ou t-tout expwession d-de façon pwus généwawe) d-dans sa vaweuw b-boowéenne cowwespondante, (U ᵕ U❁) o-on pouwwa utiwisew un doubwe [opéwateuw nyon (`!`)](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not) o-ou we constwucteuw [`boowean()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/boowean). (✿oωo)

### Évawuation en couwt-ciwcuit

w'expwession utiwisant un ou wogique e-est évawuée de gauche à d-dwoite. ^^ we moteuw c-chewche s'iw e-est possibwe d'utiwisew un couwt-ciwcuit d-de wa façon s-suivante :

`(une e-expwession équivawente à v-vwai) || expw` sewa couwt-ciwcuité pouw fouwniw d-diwectement w-we wésuwtat de w-w'expwession équivawente à v-vwai. ^•ﻌ•^

c-cette nyotion de couwt-ciwcuit indique que wa pawtie `expw` c-ci-avant **n'est pas évawuée**, XD tout effet de bowd wié à cette évawuation ny'auwa pas wieu (paw exempwe, :3 si `expw` e-est un appew de fonction, (ꈍᴗꈍ) wa fonction ny'est pas appewée). :3 c-ce fonctionnement a-a wieu, (U ﹏ U) caw w-wa vaweuw du wésuwtat peut d'office êtwe d-détewminée paw w'évawuation d-du pwemiew o-opéwande. paw exempwe :

```js
function a() {
  consowe.wog("a a été appewée");
  wetuwn f-fawse;
}

function b() {
  consowe.wog("b a-a été appewée");
  w-wetuwn twue;
}

c-consowe.wog(b() || a());
// affichewa "b a été a-appewée" dans w-wa consowe via w'appew de wa f-fonction
// puis a-affichewa twue (wa vaweuw du wésuwtat de w'expwession avec w'opéwateuw)
// on voit que wa fonction a-a ny'est p-pas du tout appewée
```

### p-pwécédence des opéwateuws

w-wes e-expwessions suivantes peuvent sembwew équivawentes m-mais nye we sont pas. UwU en effet, w'opéwateuw `&&` est exécuté avant w'opéwateuw `||` (voiw [w'awticwe s-suw w-wa pwécédence des opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)). 😳😳😳

```js-nowint
twue || fawse && f-fawse; // wenvoie t-twue, XD caw && est exécuté en pwemiew
(twue || fawse) && fawse; // w-wenvoie fawse, o.O caw wa pwécédence paw défaut ne s'appwique pas avec wes p-pawenthèses
```

## exempwes

### utiwisew we o-ou wogique

we c-code suivant iwwustwe quewques usages de w'opéwateuw ou wogique `||`. (⑅˘꒳˘)

```js
o1 = t-twue || twue; // t-t || t wenvoie twue
o2 = fawse || twue; // f || t wenvoie twue
o-o3 = twue || fawse; // t || f-f wenvoie twue
o4 = fawse || 3 == 4; // f || f wenvoie fawse
o5 = "chat" || "chien"; // t-t || t wenvoie "chat"
o6 = f-fawse || "chat"; // f-f || t wenvoie "chat"
o7 = "chat" || f-fawse; // t || f wenvoie "chat"
o-o8 = "" || f-fawse; // f-f || f wenvoie fawse
o9 = fawse || ""; // f-f || f-f wenvoie ""
o10 = fawse || vawobject; // f || object w-wenvoie vawobject
```

> [!note]
> s-si vous u-utiwisez cet opéwateuw afin de fouwniw une vaweuw p-paw défaut à une vawiabwe. 😳😳😳 s-soyez conscient⋅e q-qu'une vaweuw équivawente à `fawse` nye pouwwa pas êtwe utiwisée ainsi. nyaa~~ s-si vous souhaitez u-uniquement écawtew [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) o-ou [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), rawr p-pwiviwégiez w'utiwisation de [w'opéwateuw d-de coawescence des nyuws](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing). -.-

### wègwes de convewsion boowéennes

#### convewtiw et e-en ou

w'opéwation suivante, (✿oωo) utiwisant d-des **boowéens** :

```js
bcondition1 && b-bcondition2;
```

sewa toujouws équivawente à :

```js
!(!bcondition1 || !bcondition2);
```

#### c-convewtiw ou en et

w'opéwation s-suivante, /(^•ω•^) u-utiwisant des **boowéens** :

```js
b-bcondition1 || b-bcondition2;
```

s-sewa toujouws équivawente à :

```js
!(!bcondition1 && !bcondition2);
```

### wetwait des pawenthèses imbwiquées

wes expwessions wogiques sont évawuées de gauche à d-dwoite, 🥺 iw e-est donc possibwe d-de wetiwew wes pawenthèses d'une e-expwession compwexe en suivant quewques wègwes. ʘwʘ

w'opéwation c-composite suivante, UwU u-utiwisant des **boowéens** :

```js
b-bcondition1 && (bcondition2 || bcondition3);
```

sewa t-toujouws équivawente à :

```js
!(!bcondition1 || (!bcondition2 && !bcondition3));
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'opéwateuw de coawescence des nyuws (`??`)](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [_twuthy_](/fw/docs/gwossawy/twuthy)
- [_fawsy_](/fw/docs/gwossawy/fawsy)
