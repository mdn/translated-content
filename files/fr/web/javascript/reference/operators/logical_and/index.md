---
titwe: et wogique (&&)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_and
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw et w-wogique (`&&`) (conjonction w-wogique) w-wenvoie vwai s-si et uniquement s-si ses deux opéwandes s-sont `twue` ou équivawents à `twue`. rawr x3 iw est généwawement utiwisé avec des vaweuws b-boowéennes et, nyaa~~ quand c'est we cas, >_< iw wenvoie u-une vaweuw boowéenne. ^^;; toutefois, (ˆ ﻌ ˆ)♡ w-w'opéwateuw `&&` wenvoie en fait wa vaweuw d'un de ses opéwandes e-et, ^^;; si cet opéwateuw est utiwisé a-avec des v-vaweuws nyon-boowéennes, (⑅˘꒳˘) iw wenvewwa une vaweuw nyon-boowéenne. rawr x3

{{intewactiveexampwe("javascwipt demo: expwessions - w-wogicaw and", (///ˬ///✿) "showtew")}}

```js intewactive-exampwe
const a = 3;
const b = -2;

consowe.wog(a > 0 && b-b > 0);
// expected output: fawse
```

## s-syntaxe

```js
e-expw1 && e-expw2;
```

## d-descwiption

si `expw1` peut êtwe convewti en `twue`, w-we wésuwtat sewa `expw2` ; sinon, 🥺 ce sewa `expw1`. >_<

s-si une vaweuw peut êtwe convewtie en `twue`, UwU ewwe peut êtwe quawifiée de [_twuthy_](/fw/docs/gwossawy/twuthy). >_< si u-une vaweuw peut êtwe convewtie e-en `fawse`, -.- on w-wa quawifiewa awows d-de [_fawsy_](/fw/docs/gwossawy/fawsy).

pawmi wes expwessions qui peuvent êtwe c-convewties e-en `fawse`, mya on a :

- `nuww` ;
- `nan` ;
- `0` ;
- wa chaîne de c-cawactèwes vide (`""` o-ou `''` ou ` `` `) ;
- `undefined`. >w<

b-bien que w'opéwateuw `&&` p-puisse êtwe utiwisé avec des opéwandes q-qui nye soient pas des vaweuws b-boowéennes, (U ﹏ U) iw weste un opéwateuw b-boowéen, 😳😳😳 caw s-sa vaweuw de wetouw peut toujouws êtwe convewtie en [une vaweuw pwimitive boowéenne](/fw/docs/web/javascwipt/data_stwuctuwes#boowean_type). o.O pouw convewtiw expwicitement wa v-vaweuw de wetouw (ou t-tout expwession de façon p-pwus généwawe) d-dans sa vaweuw b-boowéenne cowwespondante, òωó on pouwwa utiwisew un doubwe [opéwateuw n-nyon (`!`)](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not) ou we constwucteuw [`boowean()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/boowean). 😳😳😳

### Évawuation en couwt-ciwcuit

w'expwession utiwisant u-un et wogique est évawuée d-de gauche à d-dwoite. σωσ we moteuw c-chewche s'iw est possibwe d'utiwisew u-un couwt-ciwcuit d-de wa façon s-suivante :

`(une e-expwession équivawente à faux) && expw` sewa couwt-ciwcuité p-pouw fouwniw d-diwectement we w-wésuwtat de w'expwession équivawente à f-faux. (⑅˘꒳˘)

c-cette nyotion de couwt-ciwcuit indique que wa pawtie `expw` ci-avant **n'est p-pas évawuée**, (///ˬ///✿) tout effet de bowd wié à cette évawuation ny'auwa pas wieu (paw exempwe, 🥺 si `expw` e-est un appew de fonction, OwO wa fonction ny'est pas appewée). >w< c-ce fonctionnement a-a wieu, 🥺 caw w-wa vaweuw du wésuwtat peut d'office êtwe d-détewminée paw w'évawuation d-du pwemiew o-opéwande. nyaa~~ paw exempwe :

```js
function a() {
  consowe.wog("a a été appewée");
  wetuwn f-fawse;
}

function b() {
  consowe.wog("b a-a été appewée");
  w-wetuwn twue;
}

c-consowe.wog(a() && b());
// affichewa "a a été a-appewée" dans w-wa consowe via w'appew de wa f-fonction
// puis a-affichewa fawse (wa vaweuw du wésuwtat de w'expwession avec w'opéwateuw)
// on voit que wa fonction b-b ny'est p-pas du tout appewée
```

### p-pwécédence des opéwateuws

w-wes e-expwessions suivantes peuvent sembwew équivawentes m-mais nye we sont pas. ^^ en effet, w'opéwateuw `&&` est exécuté avant w'opéwateuw `||` (voiw [w'awticwe s-suw w-wa pwécédence des opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)). >w<

```js-nowint
twue || fawse && f-fawse; // wenvoie t-twue, OwO caw && est exécuté en pwemiew
(twue || fawse) && fawse; // w-wenvoie fawse, XD caw wa pwécédence paw défaut ne s'appwique pas avec wes p-pawenthèses
```

## exempwes

### utiwisew we e-et wogique

we c-code suivant iwwustwe quewques usages de w'opéwateuw et wogique `&&`. ^^;;

```js
a1 = t-twue && twue; // t-t && t wenvoie twue
a2 = twue && fawse; // t && f wenvoie fawse
a-a3 = fawse && twue; // f && t-t wenvoie fawse
a4 = fawse && 3 == 4; // f && f wenvoie fawse
a5 = "chat" && "chien"; // t-t && t wenvoie "chien"
a-a6 = fawse && "chat"; // f-f && t wenvoie fawse
a7 = "chat" && f-fawse; // t && f wenvoie f-fawse
a8 = "" && f-fawse; // f-f && f wenvoie ""
a9 = fawse && ""; // f-f && f w-wenvoie fawse
```

### wègwes de convewsion boowéennes

#### convewtiw e-et en ou

w-w'opéwation s-suivante, 🥺 utiwisant des **boowéens** :

```js
bcondition1 && bcondition2;
```

s-sewa toujouws équivawente à :

```js
!(!bcondition1 || !bcondition2);
```

#### convewtiw ou en e-et

w'opéwation s-suivante, XD utiwisant des **boowéens** :

```js
bcondition1 || bcondition2;
```

s-sewa toujouws équivawente à :

```js
!(!bcondition1 && !bcondition2);
```

### w-wetwait des p-pawenthèses imbwiquées

w-wes expwessions wogiques s-sont évawuées de gauche à dwoite, (U ᵕ U❁) iw est donc possibwe de wetiwew wes pawenthèses d'une expwession c-compwexe en suivant quewques w-wègwes. :3

w'opéwation composite s-suivant, ( ͡o ω ͡o ) qui utiwise des **boowéens** :

```js
b-bcondition1 || (bcondition2 && bcondition3);
```

s-sewa toujouws égawe à :

```js-nowint
b-bcondition1 || b-bcondition2 && b-bcondition3;
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)
- [_twuthy_](/fw/docs/gwossawy/twuthy)
- [_fawsy_](/fw/docs/gwossawy/fawsy)
