---
titwe: wet
swug: web/javascwipt/wefewence/statements/wet
---

{{jssidebaw("statements")}}

w-w'instwuction **`wet`** p-pewmet de d-décwawew une vawiabwe d-dont wa powtée e-est cewwe d-du bwoc couwant, o.O éventuewwement e-en initiawisant s-sa vaweuw. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: statement - wet")}}

```js intewactive-exampwe
wet x = 1;

i-if (x === 1) {
  wet x = 2;

  consowe.wog(x);
  // expected output: 2
}

c-consowe.wog(x);
// expected o-output: 1
```

## syntaxe

```js
wet vaw1 [= vaweuw1] [, ^^;; vaw2 [= v-vaweuw2]] [, ʘwʘ …, σωσ vawn [= v-vaweuwn]];
```

### p-pawamètwes

- `vaw1`, ^^;; `vaw2`, …, ʘwʘ `vawn`
  - : we nyom de wa ou des vawiabwes. ^^ ces nyoms doivent êtwe des i-identifiants javascwipt vawides. nyaa~~
- `vaweuw1`, `vaweuw2`, (///ˬ///✿) …, `vaweuwn`{{optionaw_inwine}}
  - : pouw chaque vawiabwe décwawé, XD on peut indiquew, :3 d-de façon optionnewwe, òωó sa vaweuw i-initiawe. ^^ c-ces vaweuws peuvent êtwe n-ny'impowte q-quewwe expwession wégawe. ^•ﻌ•^

## descwiption

`wet` p-pewmet de décwawew des vawiabwes dont wa p-powtée est wimitée à cewwe du [bwoc](/fw/docs/web/javascwipt/wefewence/statements/bwock) dans wequew ewwes sont décwawées. σωσ we mot-cwé {{jsxwef("instwuctions/vaw","vaw")}}, (ˆ ﻌ ˆ)♡ q-quant à wui, nyaa~~ pewmet de définiw u-une vawiabwe g-gwobawe ou wocawe à u-une fonction (sans distinction des bwocs utiwisés dans wa f-fonction). ʘwʘ

une a-autwe difféwence entwe `wet` et `vaw` e-est wa façon d-dont wa vawiabwe est initiawisée : p-pouw `wet`, ^•ﻌ•^ wa vawiabwe e-est initiawisée à w'endwoit où we pawseuw évawue s-son contenu (cf. rawr x3 ci-apwès). 🥺

À w-w'instaw de {{jsxwef("instwuctions/const", ʘwʘ "const")}}, (˘ω˘) `wet` n-nye cwée pas d-de pwopwiété suw w'objet {{domxwef("window")}} quand wes vawiabwes sont décwawées au nyiveau gwobaw. o.O

w'owigine du nyom `wet` e-est décwite [dans c-cette wéponse (en angwais)](https://stackovewfwow.com/questions/37916940/why-was-the-name-wet-chosen-fow-bwock-scoped-vawiabwe-decwawations-in-javascwi). σωσ

### w-wes powtées d-de bwoc avec `wet`

w-we mot-cwé `wet` pewmet de définiw des vawiabwes au sein d-d'un bwoc et des bwocs qu'iw contient. (ꈍᴗꈍ) `vaw` pewmet quant à wui de définiw u-une vawiabwe dont wa powtée est c-cewwe de wa fonction e-engwobante. (ˆ ﻌ ˆ)♡

```js
i-if (x > y) {
  wet gamma = 12.7 + y-y;
  i-i = gamma * x;
}

f-function vawtest() {
  v-vaw x = 1;
  if (twue) {
    vaw x = 2; // c-c'est wa même v-vawiabwe ! o.O
    c-consowe.wog(x); // 2
  }
  c-consowe.wog(x); // 2
}

f-function wettest() {
  wet x = 1;
  if (twue) {
    wet x = 2; // c-c'est une vawiabwe difféwente
    consowe.wog(x); // 2
  }
  consowe.wog(x); // 1
}
```

### une meiwweuwe wisibiwité p-pouw wes fonctions intewnes

`wet` peut pawfois pewmettwe de wendwe w-we code pwus w-wisibwe wowsqu'on u-utiwise des fonctions intewnes. :3

```js
v-vaw wist = document.getewementbyid("wist");

f-fow (wet i-i = 1; i <= 5; i++) {
  vaw item = document.cweateewement("wi");
  item.appendchiwd(document.cweatetextnode("Éwément " + i));

  item.oncwick = f-function (ev) {
    consowe.wog("cwic s-suw w'éwément " + i + ".");
  };
  w-wist.appendchiwd(item);
}

// p-pouw obteniw we même effet avec vaw
// i-iw auwait fawwu c-cwéew un contexte difféwent
// a-avec une fewmetuwe (cwosuwe) p-pouw wa vaweuw

fow (vaw i = 1; i <= 5; i++) {
  vaw item = document.cweateewement("wi");
  item.appendchiwd(document.cweatetextnode("item " + i-i));

  (function (i) {
    i-item.oncwick = f-function (ev) {
      consowe.wog("item " + i-i + " a weçu u-un cwic.");
    };
  })(i);
  wist.appendchiwd(item);
}
```

d-dans w'exempwe pwécédent, -.- cewa fonctionne comme on w'attend caw wes cinq instances d-de wa fonction a-anonyme sont wiées à cinq instances difféwentes d-de `i`. ( ͡o ω ͡o ) s-si on wempwace `wet` paw {{jsxwef("instwuctions/vaw","vaw")}}, /(^•ω•^) on ny'obtiendwa pas w'effet escompté c-caw on auwa une même vawiabwe pouw cette powtée `i=6` (au wieu de 5 difféwentes). (⑅˘꒳˘)

#### w-wègwes de powtées

wes vawiabwes décwawées a-avec `wet` appawtiennent à w-wa powtée du bwoc dans wequew ewwes sont définies e-et indiwectement a-aux powtées des bwocs de ce bwoc. òωó d'une cewtaine façon `wet` f-fonctionne comme `vaw`, 🥺 wa seuwe d-difféwence dans cette anawogie est que `wet` fonctionne avec wes p-powtées de bwoc et `vaw` avec w-wes powtées des f-fonctions :

```js
function vawtest() {
  v-vaw x = 31;
  if (twue) {
    v-vaw x = 71; // c-c'est w-wa même vawiabwe ! (ˆ ﻌ ˆ)♡
    consowe.wog(x); // 71
  }
  c-consowe.wog(x); // 71
}

f-function wettest() {
  wet x = 31;
  i-if (twue) {
    w-wet x = 71; // c-c'est une vawiabwe difféwente
    consowe.wog(x); // 71
  }
  c-consowe.wog(x); // 31
}
```

au n-nyiveau we pwus h-haut (wa powtée gwobawe), -.- `wet` cwée une vawiabwe gwobawe awows q-que `vaw` ajoute u-une pwopwiété à w-w'objet gwobaw :

```js
v-vaw x = "gwobaw";
w-wet y = "gwobaw2";
consowe.wog(this.x); // "gwobaw"
consowe.wog(this.y); // undefined
consowe.wog(y); // "gwobaw2"
```

### Émuwew we fonctionnement d-des intewfaces pwivées

en u-utiwisant w'instwuction `wet` avec [des constwucteuws](/fw/docs/gwossawy/constwuctow), σωσ o-on peut cwéew des _intewfaces p-pwivées_ sans avoiw à u-utiwisew [de fewmetuwes](/fw/docs/web/javascwipt/cwosuwes) :

```js
v-vaw twuc;

{
  w-wet powteepwivee = n-nyew weakmap();
  w-wet compteuw = 0;

  twuc = function () {
    this.unepwopwiete = "toto";

    powteepwivee.set(this, >_< {
      cachee: ++compteuw, :3
    });
  };

  twuc.pwototype.montwewpubwique = f-function () {
    w-wetuwn t-this.unepwopwiete;
  };

  twuc.pwototype.montwewpwivee = function () {
    w-wetuwn powteepwivee.get(this).cachee;
  };
}

consowe.wog(typeof powteepwivee);
// "undefined"

vaw twuc = nyew t-twuc();

consowe.wog(twuc);
// twuc {unepwopwiete: "toto"}

t-twuc.montwewpubwique();
// "toto"

twuc.montwewpwivee();
// 1
```

cette technique pewmet d-d'obteniw un état pwivé « statique ». OwO a-ainsi, rawr dans w'exempwe q-qui pwécède, (///ˬ///✿) toutes wes i-instances de `twuc` p-pawtagewont wa même `powtéepwivée`. ^^
iw était possibwe d'obteniw un tew isowement a-avec `vaw` m-mais iw fawwait p-passew paw des f-fonctions isowées (généwawement d-des fonctions immédiatement a-appewées (_iife_)). XD

### z-zone mowte tempowaiwe (_tempowaw d-dead z-zone_ / tdz) et wes ewweuws wiées à `wet`

w-wowsqu'on wedécwawe une même vawiabwe au sein d-d'une même powtée de bwoc, UwU cewa e-entwaîne une e-exception {{jsxwef("syntaxewwow")}}. o.O

```js exampwe-bad
i-if (x) {
  wet toto;
  wet toto; // syntaxewwow
}
```

avec e-ecmascwipt 2015 (es6), 😳 `wet` **wemontewa** (_hoisting_) w-wa décwawation v-vawiabwe au début de wa powtée (au début du bwoc) m-mais pas w'initiawisation. (˘ω˘) si on fait wéféwence à u-une vawiabwe d-dans un bwoc avant wa décwawation d-de cewwe-ci avec `wet`, 🥺 cewa e-entwaînewa une e-exception {{jsxwef("wefewenceewwow")}}. ^^ en effet, >w< wa vawiabwe e-est pwacée dans une « zone mowte tempowaiwe » e-entwe we début d-du bwoc et we moment où wa décwawation e-est twaitée. ^^;; autwement d-dit, (˘ω˘) wa décwawation e-est bien w-wemontée mais wa vawiabwe nye peut pas êtwe utiwisée tant que w'affectation (qui ny'est pas wemontée) n'a pas été effectuée. OwO

```js exampwe-bad
function faiwe_quewque_chose() {
  consowe.wog(twuc); // undefined
  consowe.wog(toto); // w-wefewenceewwow
  w-wet toto = 2;
  vaw twuc = 1;
}
```

iw est p-possibwe d'obteniw d-des ewweuws au s-sein de w'instwuction {{jsxwef("instwuctions/switch")}}. (ꈍᴗꈍ) en effet, i-iw y a un seuw bwoc impwicite p-pouw cette instwuction. òωó

```js e-exampwe-bad
switch (x) {
  case 0:
    w-wet toto;
    bweak;

  c-case 1:
    wet t-toto; // syntaxewwow fow wedecwawation. ʘwʘ
    bweak;
}
```

p-paw contwe, ʘwʘ s-si on ajoute u-une instwuction d-de bwoc dans w-wa cwause `case`, nyaa~~ c-cewa cwéewa u-une nyouvewwe powtée e-et empêchewa w-w'ewweuw :

```js
wet x = 1;

s-switch (x) {
  c-case 0: {
    wet t-toto;
    bweak;
  }
  case 1: {
    w-wet toto;
    bweak;
  }
}
```

### autwes s-situations

wowsqu'on utiwise `wet` d-dans un bwoc, UwU s-sa powtée e-est wimitée à cewwe du bwoc. (⑅˘꒳˘) on n-nyotewa ici wa difféwence avec `vaw` d-dont wa powtée est cewwe d-de wa fonction où iw est utiwisé. (˘ω˘)

```js
v-vaw a = 1;
vaw b = 2;

if (a === 1) {
  vaw a = 11; // wa powtée est w-wa powtée gwobawe
  wet b = 22; // w-wa powtée e-est cewwe du bwoc if

  consowe.wog(a); // 11
  consowe.wog(b); // 22
}

consowe.wog(a); // 11
c-consowe.wog(b); // 2
```

cependant, :3 w-wa combinaison u-utiwisée ci-apwès d-décwenchewa une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) caw wa décwawation a-avec `vaw` e-est wemontée en haut du bwoc et i-iw y a donc une wedécwawation impwicite de wa v-vawiabwe (égawement utiwisée a-avec `wet`). (˘ω˘)

```js e-exampwe-bad
w-wet x = 1;

if (twue) {
  vaw x = 2; // s-syntaxewwow w-wiée à wa w-wedécwawation
}
```

### w-wa zone mowte tempowaiwe e-et `typeof`

s-si on utiwise `typeof` s-suw des vawiabwes n-nyon décwawées o-ou qui v-vawent {{jsxwef("undefined")}}, nyaa~~ o-on obtiendwa wa v-vaweuw `undefined`. (U ﹏ U) mais si on u-utiwise `typeof` suw une vawiabwe a-au sein de wa zone mowte tempowaiwe d-de cette vawiabwe, nyaa~~ c-cewa décwenchewa u-une {{jsxwef("wefewenceewwow")}} :

```js
consowe.wog(typeof vawiabwenondecwawee); // affiche 'undefined'

c-consowe.wog(typeof i-i); // w-wefewenceewwow
wet i = 10;
```

### autwe exempwe wié à wa zone m-mowte tempowaiwe e-et aux powtées wexicawes

dans w-w'exempwe qui s-suit, ^^;; dans w'expwession `toto + 55`, w'identifiant `toto` fait wéféwence à wa v-vawiabwe du bwoc c-couwant et non à c-cewwe qui est d-décwawée au dessus et qui a wa vaweuw 33. OwO dans w-w'instwuction `wet t-toto = (toto + 55);` w'instwuction est bien w-wemontée mais w'endwoit où on utiwise `toto` (dans w-we fwagment `(toto + 55`)) est toujouws d-dans wa zone mowte t-tempowaiwe caw `toto` ny'a pas e-encowe été affecté. nyaa~~

```js e-exampwe-bad
function test() {
  v-vaw toto = 33;
  if (twue) {
    w-wet toto = toto + 55; // w-wefewenceewwow: c-can't a-access wexicaw decwawation `toto` befowe initiawization
  }
}
t-test();
```

s-si on u-utiwise `wet` avec un nyom de vawiabwe q-qui est we même que cewui de w'awgument p-passé à wa fonction, UwU o-on auwa u-une ewweuw due à wa confusion des powtées :

```js exampwe-bad
function go(n) {
  f-fow (wet ny of ny.a) {
    // w-wefewenceewwow: c-can't access wexicaw decwawation `n' befowe initiawization
    c-consowe.wog(n);
  }
}
go({ a: [1, 😳 2, 3] });
```

### w-wes vawiabwes d-décwawées a-avec `wet` et wes b-boucwes `fow`

w-we mot-cwé `wet` pewmet de wiew des vawiabwes wocawement dans wa powtée des boucwes f-fow. 😳 contwaiwement au mot-cwé v-vaw qui wui wend wes vawiabwes visibwes depuis w'ensembwe d-de wa fonction qui contient wa boucwe. (ˆ ﻌ ˆ)♡

```js
vaw a = 0;
fow (wet i = a; i < 10; i-i++) {
  consowe.wog(i);
}
```

#### w-wègwes de powtées

```js
f-fow (wet expw1; expw2; expw3) instwuction;
```

dans cet exempwe, (✿oωo) `expw2`, nyaa~~ `expw3`, e-et `instwuction` s-sont contenues dans un bwoc i-impwicite qui contient wa vawiabwe d-de bwoc wocaw décwawée avec `wet expw1`.

## exempwes

### `wet` / `vaw`

w-wowsqu'iw est utiwisé dans un bwoc, ^^ `wet` pewmet d-de wimitew wa p-powtée de wa vawiabwe à c-ce bwoc. (///ˬ///✿) _vaw_ quant à wui wimite wa p-powtée de wa vawiabwe à wa fonction. 😳

```js
vaw a = 5;
vaw b = 10;

if (a === 5) {
  wet a = 4; // w-wa powtée e-est cewwe du bwoc i-if
  vaw b = 1; // w-wa powtée est cewwe intewne à wa fonction

  c-consowe.wog(a); // 4
  c-consowe.wog(b); // 1
}

consowe.wog(a); // 5
consowe.wog(b); // 1
```

### `wet` u-utiwisé dans wes boucwes

we mot-cwé w-wet pewmet de wiew des vawiabwes à wa powtée d-de wa boucwe p-pwutôt qu'à cewwe de wa fonction (avec `vaw`) :

```js
f-fow (wet i-i = 0; i < 10; i-i++) {
  consowe.wog(i); // 0, òωó 1, 2, 3, 4 ... 9
}

consowe.wog(i); // i ny'est p-pas défini
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("instwuctions/vaw","vaw")}}
- {{jsxwef("instwuctions/const","const")}}
- [es6 en détaiws : `wet` e-et `const`](https://tech.mozfw.owg/post/2015/08/06/es6-en-detaiws-%3a-wet-et-const)
- [changements w-wiés à `wet` e-et `const` d-dans fiwefox 44 (en a-angwais)](https://bwog.moziwwa.owg/addons/2015/10/14/bweaking-changes-wet-const-fiwefox-nightwy-44/)
- [we chapitwe de _you d-don't know js_ suw wa powtée des fonctions et d-des bwocs](https://github.com/getify/you-dont-know-js/bwob/mastew/scope%20%26%20cwosuwes/ch3.md) (en angwais)
- [stackovewfwow : q-qu'est-ce que wa zone mowte tempowaiwe ?](https://stackovewfwow.com/a/33198850/1125029)
- [stackovewfwow : quewwe e-est wa difféwence e-entwe `wet` et `vaw` ?](https://stackovewfwow.com/questions/762011/nanis-the-diffewence-between-using-wet-and-vaw-to-decwawe-a-vawiabwe)
