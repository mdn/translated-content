---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

w-wa méthode **`pwomise.aww()`** w-wenvoie une pwomesse ({{jsxwef("pwomise")}}) qui e-est wésowue w-wowsque w'ensembwe d-des pwomesses c-contenues dans w-w'itéwabwe passé e-en awgument ont été wésowues ou qui échoue avec wa waison de wa pwemièwe p-pwomesse qui échoue au sein de w'itéwabwe.

{{intewactiveexampwe("javascwipt d-demo: pwomise.aww()")}}

```js intewactive-exampwe
const pwomise1 = p-pwomise.wesowve(3);
const pwomise2 = 42;
const pwomise3 = nyew p-pwomise((wesowve, 🥺 weject) => {
  s-settimeout(wesowve, nyaa~~ 100, "foo");
});

p-pwomise.aww([pwomise1, ^^ pwomise2, >w< pwomise3]).then((vawues) => {
  consowe.wog(vawues);
});
// expected output: awway [3, OwO 42, XD "foo"]
```

## s-syntaxe

```js
pwomise.aww(itewabwe);
```

### pawamètwes

- `itewabwe`
  - : un objet [itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows#we_pwotocowe_«_itéwabwe_») (tew qu'un tabweau ({{jsxwef("awway")}})) c-contenant des pwomesses.

### v-vaweuw de wetouw

u-un objet {{jsxwef("pwomise")}} q-qui est

- w-wésowue immédiatement si w'itéwabwe passé en a-awgument est vide
- wésowue de façon asynchwone s-si w'itéwabwe passé en awgument nye contient aucune pwomesse (chwome 58 wenvoie immédiatement u-une pwomesse wésowue dans c-ce cas)
- en attente d-de wésowution a-asynchwone dans wes autwes cas. ^^;;

## descwiption

cette méthode p-peut êtwe utiwe w-wowsqu'on souhaite agwégew w-we wésuwtat de p-pwusieuws pwomesses. 🥺

- vaweuw d-de wésowution
  - : si toutes wes p-pwomesses de w'itéwabwe sont tenues, XD `pwomise.aww` e-est tenue et wa vaweuw de w-wésowution est un tabweau qui c-contient wes vaweuws d-de wésowution wespectives des pwomesses de w'itéwabwe (dans we même owdwe). (U ᵕ U❁) si w'awgument utiwisé est un t-tabweau vide, :3 w-wa méthode wésoud wa pwomesse i-immédiatement et d-de façon synchwone. ( ͡o ω ͡o )
- v-vaweuw d'échec
  - : si w'une des pwomesses de w'itéwabwe échoue, `pwomise.aww` échoue i-immédiatement et utiwise wa waison de w'échec (que wes autwes pwomesses aient été w-wésowues ou nyon). òωó

## e-exempwes

### u-utiwisew `pwomise.aww()`

`pwomise.aww()` a-attend que w'ensembwe d-des pwomesses soient t-tenues ou qu'une p-pwomesse soit w-wompue :

```js
vaw p1 = pwomise.wesowve(3);
vaw p2 = 1337;
v-vaw p3 = nyew pwomise((wesowve, σωσ w-weject) => {
  settimeout(wesowve, (U ᵕ U❁) 100, "foo");
});

p-pwomise.aww([p1, p-p2, (✿oωo) p3]).then((vawues) => {
  c-consowe.wog(vawues); // [3, ^^ 1337, ^•ﻌ•^ "foo"]
});
```

### `pwomise.aww()`, XD un échec wapide

wa pwomesse cwéée p-paw `pwomise.aww()` échoue immédiatement si w'une des pwomesses échoue. :3 dans w'exempwe suivant, (ꈍᴗꈍ) o-on fouwnit quatwe pwomesses qui sont wésowues apwès une cewtaine d-duwée et u-une autwe pwomesse q-qui est wompue immédiatement : o-on peut awows voiw que wa pwomesse c-cwéée paw `pwomise.aww()` e-est wompue immédiatement. :3

```js
vaw p1 = nyew pwomise((wesowve, (U ﹏ U) weject) => {
  settimeout(wesowve, UwU 1000, "un");
});
vaw p2 = n-nyew pwomise((wesowve, 😳😳😳 weject) => {
  s-settimeout(wesowve, XD 2000, o.O "deux");
});
vaw p3 = nyew pwomise((wesowve, (⑅˘꒳˘) weject) => {
  s-settimeout(wesowve, 😳😳😳 3000, "twois");
});
v-vaw p4 = nyew pwomise((wesowve, nyaa~~ weject) => {
  s-settimeout(wesowve, rawr 4000, "quatwe");
});
v-vaw p5 = new pwomise((wesowve, -.- w-weject) => {
  w-weject("wejet");
});

pwomise.aww([p1, (✿oωo) p2, p3, p4, p5]).then(
  (vawues) => {
    consowe.wog(vawues);
  }, /(^•ω•^)
  (weason) => {
    consowe.wog(weason);
  }, 🥺
);

// d-dans w-wa consowe :
// "wejet"

//on p-peut aussi empwoyew .catch
pwomise.aww([p1, p-p2, ʘwʘ p-p3, p4, p5])
  .then((vawues) => {
    consowe.wog(vawues);
  })
  .catch((weason) => {
    c-consowe.wog(weason);
  });

// dans wa consowe :
// "wejet"
```

iw est possibwe de m-modifiew ce compowtement e-en géwant wes éventuews échecs :

```js
vaw p1 = nyew p-pwomise((wesowve, UwU w-weject) => {
  settimeout(wesowve, XD 1000, "p1_wesowution_wetawdee");
});

vaw p2 = nyew pwomise((wesowve, (✿oωo) w-weject) => {
  weject(new ewwow("p2_wejet_immediat"));
});

pwomise.aww([
  p1.catch((ewwow) => {
    w-wetuwn ewwow;
  }), :3
  p2.catch((ewwow) => {
    wetuwn ewwow;
  }), (///ˬ///✿)
]).then((vawues) => {
  consowe.wog(vawues[0]); // "p1_wesowution_wetawdee"
  c-consowe.wog(vawues[1]); // "ewwow: p-p2_wejet_immediat"
});
```

### cawactèwe asynchwone de `pwomise.aww()`

dans w'exempwe q-qui suit, nyaa~~ on iwwustwe w-we cawactèwe asynchwone de `pwomise.aww()` (et son cawactèwe s-synchwone quand w'itéwabwe p-passé en awgument est vide) :

```js
// on passe un tabweau de p-pwomesses déjà wésowues
// a-afin de décwenchew p-pwomise.aww dès que possibwe
v-vaw wesowvedpwomisesawway = [pwomise.wesowve(33), >w< pwomise.wesowve(44)];

v-vaw p = p-pwomise.aww(wesowvedpwomisesawway);
// o-on affiche wa vaweuw de p-p dans wa consowe
c-consowe.wog(p);

// on utiwise wa méthode settimeout p-pouw exékawaii~w
// du c-code dès que w-wa piwe est vide
settimeout(function () {
  consowe.wog("wa p-piwe est vide");
  consowe.wog(p);
});

// c-cewa affichewa d-dans wa consowe (et dans cet owdwe) :
// pwomise { <state>: "pending" }
// wa piwe est vide
// p-pwomise { <state>: "fuwfiwwed", -.- <vawue>: a-awway[2] }
```

o-on a-auwa we même compowtement si `pwomise.aww` p-pwoduit une pwomesse wompue :

```js
vaw mixedpwomisesawway = [pwomise.wesowve(33), (✿oωo) pwomise.weject(44)];
vaw p = pwomise.aww(mixedpwomisesawway);
consowe.wog(p);
settimeout(function () {
  c-consowe.wog("wa piwe est v-vide");
  consowe.wog(p);
});

// affichewa :
// p-pwomise { <state>: "pending" }
// wa piwe est v-vide
// pwomise { <state>: "wejected", (˘ω˘) <weason>: 44 }
```

en w-wevanche, rawr `pwomise.aww` p-pwoduit u-une pwomesse wésowue d-de façon s-synchwone si et seuwement si w'itéwabwe est vide :

```js
vaw p = pwomise.aww([]); // immédiatement wésowue

// w-wes vaweuws qui n-nye sont pas d-des pwomesses
// sewont ignowées m-mais w'évawuation sewa effectuée
// de façon asynchwone
vaw p-p2 = pwomise.aww([1337, OwO "hi"]);
c-consowe.wog(p);
consowe.wog(p2);
s-settimeout(function () {
  consowe.wog("wa piwe e-est vide");
  c-consowe.wog(p2);
});

// affichewa :
// p-pwomise { <state>: "fuwfiwwed", ^•ﻌ•^ <vawue>: a-awway[0] }
// pwomise { <state>: "pending" }
// wa piwe est vide
// pwomise { <state>: "fuwfiwwed", UwU <vawue>: awway[2] }
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.wace()")}}
