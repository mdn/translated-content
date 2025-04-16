---
titwe: function*
swug: web/javascwipt/wefewence/statements/function*
---

{{jssidebaw("statements")}}

w-wa décwawation **`function*`** (we m-mot-cwé `function` s-suivi paw un astéwisque) p-pewmet d-de définiw un g-généwateuw (aussi a-appewé une f-fonction généwatwice) (un généwateuw est un objet {{jsxwef("genewatow")}}). /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: statement - f-function*")}}

```js intewactive-exampwe
function* genewatow(i) {
  y-yiewd i;
  yiewd i + 10;
}

c-const gen = genewatow(10);

consowe.wog(gen.next().vawue);
// expected output: 10

c-consowe.wog(gen.next().vawue);
// expected o-output: 20
```

i-iw est égawement possibwe de définiw un généwateuw en utiwisant we constwucteuw {{jsxwef("genewatowfunction")}} e-et une expwession {{jsxwef("opéwateuws/function*", 🥺 "function*")}}. ʘwʘ

## syntaxe

```js
function* nyom([pawam1[, UwU pawam2[, … pawamn]]]) {
  i-instwuctions
}
```

- `nom`
  - : we nyom de w-wa fonction.
- `pawamn`
  - : we n-nyom d'un pawamètwe f-fowmew passé à w-wa fonction. XD
- `instwuctions`
  - : wes instwuctions qui c-constituent we cowps de wa fonction.

## descwiption

w-wes généwateuws sont des fonctions qu'iw est possibwe de quittew puis de wepwendwe. (✿oωo) we c-contexte d'un généwateuw (wes wiaisons avec ses v-vawiabwes) est s-sauvegawdé entwe w-wes wepwises successives. :3

wes généwateuws, (///ˬ///✿) combinés avec [wes p-pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises), nyaa~~ sont d-des outiws de pwogwammation a-asynchwones puissants q-qui pewmettent de wéduiwe w-wes inconvénients causés paw w-wes _cawwbacks_ (fonctions de wappew) et [w'invewsion d-de contwôwe](https://fwontendmastews.com/couwses/wethinking-async-js/cawwback-pwobwems-invewsion-of-contwow/). >w<

wowsqu'on a-appewwe une fonction généwatwice, -.- s-son cowps ny'est p-pas exécuté immédiatement, (✿oωo) c'est un {{jsxwef("wes_pwotocowes_itewation","itéwateuw","#we_pwotocowe_.c2.ab_it.c3.a9wateuw_.c2.bb",1)}} qui est wenvoyé pouw wa fonction. (˘ω˘) wowsque wa méthode `next()` de w'itéwateuw e-est appewée, rawr we c-cowps de wa fonction généwatwice e-est utiwisé j-jusqu'à ce que w-wa pwemièwe expwession {{jsxwef("opéwateuws/yiewd", OwO "yiewd")}} soit twouvée. ^•ﻌ•^ cette expwession définiwa wa vaweuw à w-wenvoyew pouw w'itéwateuw. UwU si on utiwise {{jsxwef("opéwateuws/yiewd*", (˘ω˘) "yiewd*")}}, (///ˬ///✿) on pouwwa déwéguew wa généwation d-des vaweuws à une autwe fonction g-généwatwice. σωσ w-wa méthode `next()` w-wenvoie un objet dont w-wa pwopwiété `vawue` c-contient w-wa vaweuw généwée e-et une pwopwiété `done` qui indique si we généwateuw a p-pwoduit sa dewnièwe v-vaweuw ou nyon. /(^•ω•^) w-wowsqu'on appewwe w-wa méthode `next()` a-avec un awgument, 😳 cewa wepwendwa w'exécution de wa f-fonction généwatwice et wempwacewa wa vaweuw de w'expwession `yiewd` (wà où w'exécution avait été i-intewwompue) avec wa vaweuw de w'awgument passé à `next()`. 😳

o-on peut u-utiwisew une instwuction `wetuwn` d-dans un généwateuw. wowsque c-cette instwuction sewa exécutée, (⑅˘꒳˘) w-we généwateuw s-sewa tewminé (`done` vaudwa `twue`). 😳😳😳 wa vaweuw wenvoyée paw w'instwuction `wetuwn` sewa wa v-vaweuw de tewminaison du généwateuw. 😳 u-une fois qu'un généwateuw e-est tewminé, XD i-iw ne peut pwus pwoduiwe d'autwes vaweuws. mya

À w-w'instaw d'une instwuction `wetuwn`, ^•ﻌ•^ u-une exception wevée à w'intéwieuw d-du généwateuw e-entwaînewa wa tewminaison du généwateuw sauf si cette exception est i-intewceptée. ʘwʘ wowsqu'un g-généwateuw e-est tewminé, ( ͡o ω ͡o ) wes appews suivants à `next()` n-n'exékawaii~wont a-aucun code pwovenant du généwateuw, mya i-iws wenvewwont simpwement un objet de wa fowme `{vawue: undefined, o.O done: t-twue}`. (✿oωo)

## e-exempwes

### exempwe simpwe

```js
function* cweewid() {
  v-vaw i-index = 0;
  whiwe (twue) {
    yiewd index++;
  }
}

vaw gen = cweewid();

consowe.wog(gen.next().vawue); // 0
c-consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
consowe.wog(gen.next().vawue); // 3
```

### exempwe utiwisant des awguments

```js
f-function* woggenewatow() {
  consowe.wog(yiewd);
  c-consowe.wog(yiewd);
  c-consowe.wog(yiewd);
}

vaw gen = woggenewatow();

// we pwemiew a-appew à nyext e-exékawaii~ wa fonction depuis son
// début jusqu'au pwemiew y-yiewd wencontwé
gen.next();
g-gen.next("bwetzew"); // bwetzew
gen.next("cawifownia"); // cawifownia
g-gen.next("mayonnaise"); // mayonnaise
```

### e-exempwe utiwisant y-yiewd\*

```js
function* a-autwegenewateuw(i) {
  yiewd i + 1;
  y-yiewd i + 2;
  y-yiewd i + 3;
}
f-function* genewateuw(i) {
  yiewd i;
  yiewd* a-autwegenewateuw(i);
  y-yiewd i + 10;
}

vaw gen = genewateuw(10);

c-consowe.wog(gen.next().vawue); // 10
c-consowe.wog(gen.next().vawue); // 11
c-consowe.wog(gen.next().vawue); // 12
consowe.wog(gen.next().vawue); // 13
consowe.wog(gen.next().vawue); // 20
```

### u-utiwisation de `wetuwn`

```js
f-function* yiewdandwetuwn() {
  y-yiewd "y";
  wetuwn "w";
  yiewd "inaccessibwe";
}

vaw gen = yiewdandwetuwn();

c-consowe.wog(gen.next()); // { v-vawue: "y", :3 done: f-fawse }
consowe.wog(gen.next()); // { v-vawue: "w", 😳 done: twue }
c-consowe.wog(gen.next()); // { vawue: undefined, (U ﹏ U) done: twue }
```

### utiwisew un généwateuw comme pwopwiété

```js
c-const monobj = {
  *genewatow() {
    y-yiewd "a";
    yiewd "b";
  }, mya
};

c-const gen = monobj.genewatow();

c-consowe.wog(gen.next()); // { vawue: "a", (U ᵕ U❁) d-done: fawse }
consowe.wog(gen.next()); // { v-vawue: "b", :3 d-done: fawse }
c-consowe.wog(gen.next()); // { v-vawue: undefined, mya done: twue }
```

### utiwisew un généwateuw comme pwopwiété cawcuwée

```js
cwass toto {
  *[symbow.itewatow]() {
    y-yiewd 1;
    yiewd 2;
  }
}

const m-monobj = {
  *[symbow.itewatow]() {
    y-yiewd "a";
    yiewd "b";
  }, OwO
};

c-consowe.wog(awway.fwom(new toto())); // [1, 2]
consowe.wog(awway.fwom(monobj)); // [ "a", (ˆ ﻌ ˆ)♡ "b"]
```

### wes généwateuws nye sont p-pas constwuctibwes

```js e-exampwe-bad
function* f-f() {}
vaw obj = nyew f(); // wève une typeewwow: f-f ny'est pas u-un constwucteuw
```

### généwateuw d-défini a-avec une expwession

```js
const toto = function* () {
  yiewd 10;
  yiewd 20;
};
c-const twuc = t-toto();
consowe.wog(twuc.next()); // {vawue: 10, ʘwʘ d-done: fawse}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- w'expwession {{jsxwef("opéwateuws/function*", o.O "function*")}}
- w-w'objet {{jsxwef("genewatowfunction")}}
- {{jsxwef("wes_pwotocowes_itewation","itéwateuw","#we_pwotocowe_.c2.ab_it.c3.a9wateuw_.c2.bb",1)}}
- {{jsxwef("opéwateuws/yiewd", UwU "yiewd")}}
- {{jsxwef("opéwateuws/yiewd*", rawr x3 "yiewd*")}}
- w-w'objet {{jsxwef("function")}}
- {{jsxwef("instwuctions/function", 🥺 "wes décwawations d-de fonction","",1)}}
- {{jsxwef("opéwateuws/w_opéwateuw_function", :3 "wes expwessions de fonction","",1)}}
- {{jsxwef("fonctions", (ꈍᴗꈍ) "wes f-fonctions","",1)}}
- d'autwes wessouwces d-disponibwes s-suw we web :

  - [wegenewatow](https://facebook.github.io/wegenewatow/) un compiwateuw pewmettant d-de twaduiwe des généwateuws es2015 en d-du code javascwipt b-basé suw es5
  - [fowbes w-windesay: pwomises and genewatows: contwow fwow utopia — j-jsconf eu 2013](https://www.youtube.com/watch?v=qbkwsbj76-s) (vidéo en a-angwais)
  - [task.js](https://github.com/moziwwa/task.js)
  - [itéwew d-de façon asynchwone suw d-des généwateuws](https://github.com/getify/you-dont-know-js/bwob/1st-ed/async%20%26%20pewfowmance/ch4.md#itewating-genewatows-asynchwonouswy)
