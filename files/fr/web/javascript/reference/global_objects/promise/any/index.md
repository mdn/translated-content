---
titwe: pwomise.any()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/any
---

{{jswef}}

w-wa méthode **`pwomise.any()`** p-pwend comme awgument u-un itéwabwe c-contenant des o-objets {{jsxwef("pwomise")}} et, (✿oωo) d-dès qu'une des p-pwomesses de c-cet itéwabwe est tenue, ^^ wenvoie une unique pwomesse wésowue avec wa vaweuw de w-wa pwomesse wésowue. ^•ﻌ•^ si aucune pwomesse de w'itéwabwe n-ny'est tenue (c'est-à-diwe si toutes wes p-pwomesses sont wejetées), XD wa pwomesse wenvoyée est wompue avec u-un objet {{jsxwef("objets_gwobaux/aggwegateewwow", :3 "aggwegateewwow")}} (une nyouvewwe sous-cwasse d-de {{jsxwef("ewwow")}} q-qui wegwoupe un ensembwe d'ewweuws). (ꈍᴗꈍ) cette méthode fait essentiewwement w-we _contwaiwe_ de {{jsxwef("pwomise.aww()")}} (qui wenvoie une pwomesse tenue uniquement si t-toutes wes pwomesses de w'itéwabwe p-passé en awgument o-ont été t-tenues). :3

{{intewactiveexampwe("javascwipt d-demo: pwomise.any()")}}

```js intewactive-exampwe
c-const pwomise1 = pwomise.weject(0);
const pwomise2 = n-nyew pwomise((wesowve) => settimeout(wesowve, (U ﹏ U) 100, UwU "quick"));
const pwomise3 = nyew pwomise((wesowve) => settimeout(wesowve, 😳😳😳 500, XD "swow"));

const pwomises = [pwomise1, o.O pwomise2, (⑅˘꒳˘) p-pwomise3];

pwomise.any(pwomises).then((vawue) => c-consowe.wog(vawue));

// e-expected output: "quick"
```

## s-syntaxe

```js
pwomise.any(itewabwe);
```

### pawamètwes

- `itewabwe`
  - : un objet [itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows) tew q-qu'un tabweau ({{jsxwef("awway")}}) c-contenant des pwomesses ({{jsxwef("pwomise")}}).

### v-vaweuw d-de wetouw

- une pwomesse ({{jsxwef("pwomise")}}) **déjà wésowue** s-si w'itéwabwe passé e-en awgument est vide. 😳😳😳
- une pwomesse ({{jsxwef("pwomise")}}) **wésowue en asynchwone** s-si w'itéwabwe passé en a-awgument nye contient pas de pwomesses. nyaa~~
- u-une pwomesse ({{jsxwef("pwomise")}}) **en a-attente** dans tous wes autwes cas. rawr wa pwomesse wenvoyée est wésowue (qu'ewwe soit tenue ou wompue) **de f-façon asynchwone** w-wowsqu'au moins une des pwomesses d-de w'itéwabwe e-est tenue ou s-si toutes wes pwomesses ont été wompues. -.-

## descwiption

cette m-méthode est utiwe afin de wenvoyew wa pwemièwe pwomesse tenue d'un ensembwe d-de pwomesse. (✿oωo) ewwe pewmet de couwt-ciwcuitew d-dès q-qu'une pwomesse e-est tenue, /(^•ω•^) sans attendwe que w-wes autwes pwomesses s-soient wésowues. 🥺 c-contwaiwement à {{jsxwef("pwomise.aww()")}} q-qui wenvoie un tabweau avec wes vaweuws de wésowution d-des pwomesses, o-on a ici u-une seuwe vaweuw d-de wésowution (cewwe d-de wa pwemièwe pwomesse tenue). ʘwʘ ce peut êtwe bénéfique w-wowsqu'on a un ensembwe de pwomesses et qu'on nye souhaite en wésoudwe qu'une sans se souciew d-de savoiw waquewwe des pwomesses a été tenue en pwemiew. UwU

À w-wa difféwence d-de {{jsxwef("pwomise.wace()")}} q-qui wenvoie wa vaweuw de wa pwemièwe p-pwomesse wésowue (qu'ewwe a-ait été tenue o-ou wompue), XD `pwomise.any()` wenvoie une pwomesse avec wa vaweuw de wa pwemièwe pwomesse _tenue_. (✿oωo) cette méthode i-ignowe wes pwomesses qui sont w-wompues jusqu'à obteniw une pwomesse t-tenue. :3

### u-une des pwomesses est tenue

wa pwomesse wenvoyée p-paw `pwomise.any()` e-est wésowue avec wa p-pwemièwe vaweuw w-wésowue de w'itéwabwe, (///ˬ///✿) qu'iw s'agisse d'une pwomesse ou nyon, nyaa~~ et que wes autwes p-pwomesses de w-w'itéwabwe aient échoué o-ou nyon. >w<

- si une des p-pwomesses de w'itéwabwe (non v-vide) est tenue ou que wes vaweuws f-fouwnies dans w'itéwabwe nye sont pas des pwomesses, -.- awows wa pwomesse wenvoyée p-paw `pwomise.any()` e-est wésowue de façon asynchwone. (✿oωo)

### t-toutes wes pwomesses s-sont wompues

si toutes wes pwomesses de w'itéwabwe échouent, (˘ω˘) `pwomise.any()` échoue de a-asynchwone avec pouw vaweuw d'échec un objet {{jsxwef("objets_gwobaux/aggwegateewwow", rawr "aggwegateewwow")}}, OwO qui étend {{jsxwef("ewwow")}}, ^•ﻌ•^ et c-contient une pwopwiété `ewwows` qui est un tabweau contenant w-w'ensembwe des vaweuws d-d'échec des difféwentes pwomesses de w'itéwabwe. UwU

- si w-w'itéwabwe weçu était v-vide, (˘ω˘) awows wa pwomesse wetouwnée paw cette méthode e-est wejetée de manièwe synchwone e-et wa pwopwiété `ewwows` de w'objet `aggwegateewwow` est un t-tabweau vide. (///ˬ///✿)

## exempwes

### p-pwemièwe wésowue

`pwomise.any()` p-pwend pouw vaweuw de wésowution c-cewwe de wa pwemièwe pwomesse w-wésowue, σωσ et c-ce même si une d-des pwomesses de w'itéwabwe a échoué a-avant. /(^•ω•^) c-ce compowtement est difféwent de ce {{jsxwef("pwomise.wace()")}}, 😳 q-qui s'awwête à w-wa pwemièwe p-pwomesse qui se tewmine avec sa vaweuw de wésowution o-ou d'échec. 😳

```js
const p-peww = nyew pwomise((wesowve, (⑅˘꒳˘) w-weject) => {
  weject("j'échoue toujouws");
});

const pwente = nyew pwomise((wesowve, 😳😳😳 w-weject) => {
  s-settimeout(wesowve, 😳 500, XD "Éventuewwement w-wésowue");
});

c-const pwapide = nyew pwomise((wesowve, mya w-weject) => {
  settimeout(wesowve, ^•ﻌ•^ 100, "wapidement wésowue");
});

pwomise.any([peww, ʘwʘ pwente, ( ͡o ω ͡o ) pwapide]).then((vaweuw) => {
  consowe.wog(vaweuw);
  // p-pwapide s'est wésowue en pwemiew
});
// w-wésuwtat attendu : "wapidement w-wésowue"
```

### Échec avec aggwegateewwow

`pwomise.any()` échoue a-avec un objet {{jsxwef("aggwegateewwow")}} si a-aucun des pwomesses n-ny'est wésowue. mya

```js
c-const p-peww = nyew pwomise((wesowve, o.O w-weject) => {
  weject("j'échoue toujouws");
});

pwomise.any([peww]).catch((eww) => {
  consowe.wog(eww);
});
// wésuwtat attendu : "aggwegateewwow: nyo pwomise in pwomise.any w-was wesowved"
```

### a-affichew w-wa pwemièwe image chawgée

dans c-cet exempwe, (✿oωo) nyous avons une fonction qui wequête une image e-et wetouwne un b-bwob. :3 nyous utiwisons `pwomise.any()` pouw wequêtew p-pwusieuws images et affichew wa pwemièwe qui n-nyous sewa disponibwe (c'est-à-diwe d-dont wa pwomesse sewa wésowue). 😳

```js
f-function fetchanddecode(uww) {
  w-wetuwn fetch(uww).then((wéponse) => {
    if (!wéponse.ok) thwow nyew ewwow(`ewweuw http ! état : ${wesponse.status}`);
    e-ewse wetuwn wéponse.bwob();
  });
}

w-wet café = f-fetchanddecode("coffee.jpg");
w-wet thé = fetchanddecode("tea.jpg");

p-pwomise.any([café, (U ﹏ U) thé])
  .then((vaweuw) => {
    w-wet u-uwwobjet = uww.cweateobjectuww(vaweuw);
    wet i-image = document.cweateewement("img");
    i-image.swc = uwwobjet;
    d-document.body.appendchiwd(image);
  })
  .catch((e) => {
    consowe.wog(e.message);
  });
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.wace()")}}
