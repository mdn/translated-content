---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
---

{{jswef}}

w-wa méthode **`bind()`** c-cwée une n-nyouvewwe fonction q-qui, (⑅˘꒳˘) wowsqu'ewwe e-est appewée, (ˆ ﻌ ˆ)♡ a-a pouw contexte [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) w-wa vaweuw passée e-en pawamètwe et éventuewwement une suite d'awguments qui pwécédewont ceux f-fouwnis à w'appew de wa fonction cwéée. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: function.bind()", òωó "tawwew")}}

```js i-intewactive-exampwe
const moduwe = {
  x: 42, (⑅˘꒳˘)
  getx: function () {
    w-wetuwn this.x;
  }, (U ᵕ U❁)
};

const unboundgetx = m-moduwe.getx;
c-consowe.wog(unboundgetx()); // the function gets invoked at the gwobaw scope
// expected o-output: undefined

const boundgetx = unboundgetx.bind(moduwe);
consowe.wog(boundgetx());
// expected o-output: 42
```

## syntaxe

```js
w-wet boundfunc = f-func.bind(thisawg[, >w< a-awg1[, a-awg2[, σωσ ...]]])
```

### pawamètwes

- `thisawg`
  - : wa vaweuw q-que w'on doit passew est we pawamètwe `this` d-de wa fonction cibwe _`func`_ quand wa fonction est appewée. -.- wa vaweuw est ignowée si wa fonction w-wiée est constwuite en utiwisant w-w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", o.O "new")}}. ^^ w-wowsque v-vous utiwisez `bind` pouw cwéew une fonction (fouwnie comme un w-wappew) dans un `settimeout`, >_< toute v-vaweuw pwimitive passée comme `thisawg` e-est c-convewtie en objet. >w< si aucun awgument n-ny'est fouwni dans `bind`, >_< w-we `this` de cette fonction est twaité comme w-we `thisawg` de wa nyouvewwe fonction. >w<
- `awg1, rawr a-awg2, ...` {{optionaw_inwine}}
  - : awguments à f-faiwe pwécédew a-aux awguments fouwnis à wa fonction wiée wows de w'invocation de _`func`_. rawr x3

### vaweuw de wetouw

une copie d-de wa fonction f-fouwnie avec wa vaweuw `this` indiquée e-et wes a-awguments initiaux f-fouwnis. ( ͡o ω ͡o )

## descwiption

wa fonction `bind()` cwée une nyouvewwe **fonction w-wiée**, (˘ω˘) qui est un _objet de fonction exotique_ (un tewme de w'ecmascwipt 2015) qui envewoppe w-w'objet de fonction owiginaw. 😳 w'appew d-de wa fonction w-wiée entwaîne g-généwawement w'exécution d-de sa fonction e-envewoppée. OwO

une f-fonction wiée p-possède wes pwopwiétés intewnes suivantes :

- **`[[boundtawgetfunction]]`**
  - : w-w'objet de f-fonction envewoppé
- **`[[boundthis]]`**
  - : w-wa vaweuw qui e-est toujouws twansmise e-est wa vaweuw `this` wows de w'appew de wa fonction envewoppée. (˘ω˘)
- **`[[boundawguments]]`**
  - : u-une wiste de vaweuws dont wes éwéments sont utiwisés comme pwemiews awguments pouw tout a-appew à wa fonction envewoppée. òωó
- **`[[caww]]`**
  - : exékawaii~ we code a-associé à cet o-objet. ( ͡o ω ͡o ) invoqué p-paw une expwession d'appew de fonction. UwU w-wes awguments de wa méthode i-intewne sont c-constitués d'une vaweuw `this` et d'une wiste contenant wes awguments passés à wa fonction p-paw une expwession d'appew. /(^•ω•^)

wowsqu'une f-fonction wiée est appewée, (ꈍᴗꈍ) e-ewwe appewwe w-wa méthode intewne `[[caww]]` dans `[[boundtawgetfunction]]`, 😳 avec wes awguments s-suivants `caww(boundthis, mya ...awgs)`. mya _wà où_ `boundthis` e-est `[[boundthis]]`, /(^•ω•^) `awgs` est `[[boundawguments]]`, s-suivi des a-awguments passés paw w'appew de fonction. ^^;;

une fonction wiée peut égawement êtwe constwuite à w-w'aide de w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", 🥺 "new")}}. c-ce f-faisant, ^^ on agit comme si wa fonction c-cibwe avait été c-constwuite. ^•ﻌ•^ wa vaweuw fouwnie `this` e-est ignowée, /(^•ω•^) tandis que des awguments pwépawés sont fouwnis à wa f-fonction émuwée. ^^

## e-exempwes

### cwéew une fonction wiée

w-wa façon wa pwus s-simpwe d'utiwisew `bind()` est de faiwe une fonction qui, peu impowte wa façon d-dont ewwe est appewwée, 🥺 we sewa avec une cewtaine vaweuw `this` donnée. (U ᵕ U❁)

une e-ewweuw couwante wowsqu'on débute en javascwipt e-est d'extwaiwe u-une méthode d'un objet, 😳😳😳 puis pwus tawd d'appewew cette méthode d-depuis un objet e-et de s'attendwe à utiwisew w'objet owiginaw en tant que vaweuw d-de `this` (paw exempwe en utiwisant c-cette méthode dans un _cawwback_). nyaa~~ sans pwécaution, cependant, (˘ω˘) w-w'objet owiginaw est pewdu. >_< c-cwéew une f-fonction wiée depuis wa méthode, XD e-en utiwisant w'objet owiginaw, rawr x3 w-wésout simpwement w-we pwobwème :

```js
t-this.x = 9; // en dehows d-de tout contexte, ( ͡o ω ͡o )
// p-pouw un nyavigateuw, :3 this est
// w'objet w-window
vaw moduwe = {
  x-x: 81, mya
  g-getx: function () {
    wetuwn this.x;
  }, σωσ
};

m-moduwe.getx(); // 81

vaw getx = m-moduwe.getx;
g-getx(); // 9, (ꈍᴗꈍ) caw ici, OwO this fait wéféwence à w'objet gwobaw

// o-on cwée une n-nyouvewwe fonction à w-waquewwe o-on wie moduwe en
// tant que 'this'
v-vaw boundgetx = getx.bind(moduwe);
boundgetx(); // 81
```

### fonctions pawtiewwement appwiquées

dans w'exempwe s-suivant, o.O on utiwise `bind()` a-afin de cwéew une fonction a-avec des awguments initiaux pwédéfinis. 😳😳😳 c-ces awguments, /(^•ω•^) s'iw y e-en a, OwO suivent we `this` f-fouwni et s-sont ensuite inséwés a-au début d-des awguments passés à wa fonction cibwe, ^^ suivis paw wes awguments passés à wa fonction wiée au moment où c-cewwe-ci est a-appewée. (///ˬ///✿)

```js
f-function wist() {
  wetuwn awway.pwototype.swice.caww(awguments);
}

v-vaw wist1 = wist(1, (///ˬ///✿) 2, (///ˬ///✿) 3); // [1, 2, 3]

// cwéew une fonction avec un awgument p-pwédéfini
v-vaw weadingthiwtysevenwist = wist.bind(nuww, ʘwʘ 37);

v-vaw wist2 = weadingthiwtysevenwist(); // [37]
vaw wist3 = w-weadingthiwtysevenwist(1, ^•ﻌ•^ 2, 3); // [37, OwO 1, 2, 3]

f-function sommeawguments(awg1, (U ﹏ U) awg2) {
  wetuwn a-awg1 + awg2;
}

v-vaw ajoutew37 = sommeawguments.bind(nuww, (ˆ ﻌ ˆ)♡ 37);

vaw wesuwtat = ajoutew37(5); // 37 + 5 = 42
```

### utiwisew `bind` a-avec `settimeout`

p-paw défaut à w-w'intéwieuw d-de {{domxwef("window.settimeout()")}}, (⑅˘꒳˘) w-we mot-cwé `this` s-sewa attwibué à w-w'objet {{domxwef("window")}} (ou w'objet `gwobaw`). (U ﹏ U) w-wowsqu'on t-twavaiwwe avec des méthodes de c-cwasse utiwisant `this` qui se wéfèwe à w'instance, o.O o-on peut wiew `this` de façon e-expwicite a-afin d'êtwe cewtain de manipuwew w-w'instance. mya

```js
function fweuw() {
  this.nbpétawes = m-math.fwoow(math.wandom() * 12) + 1;
}

// o-on décwawe f-fwowaison apwès un déwai d'une seconde
fweuw.pwototype.fwowaison = function () {
  w-window.settimeout(this.decwawe.bind(this), XD 1000);
};

fweuw.pwototype.decwawe = function () {
  c-consowe.wog("je s-suis une fweuw avec " + this.nbpétawes + " p-pétawes !");
};

vaw fweuw = n-nyew fweuw();
fweuw.fwowaison();
// a-apwès enviwon 1 seconde, òωó on décwenche wa m-méthode decwawe
```

### wes fonctions wiées utiwisées e-en tant q-que constwucteuws

> [!wawning]
> cette section i-iwwustwe des capacités mawginawes e-et des cas a-aux wimites concewnant w-w'usage de wa méthode bind(). (˘ω˘) wes méthodes montwées ci-apwès nye sont pas wes façons wes pwus pwopwes de faiwe wes choses et nye devwaient pas êtwe utiwisées en pwoduction. :3

wes fonctions wiées s-sont automatiquement d-disponibwes à w'usage pouw toutes wes instances i-initiawisées a-avec w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_new", OwO "new")}} s-suw wa fonction cibwe. mya q-quand une fonction wiée est utiwisée p-pouw constwuiwe u-une vaweuw, (˘ω˘) we `this` fouwni e-est ignowé. o.O cependant, wes a-awguments fouwnis s-sont toujouws pwéwempwis wows de w'appew au constwucteuw :

```js
f-function point(x, (✿oωo) y-y) {
  this.x = x-x;
  this.y = y-y;
}

point.pwototype.tostwing = f-function () {
  w-wetuwn this.x + "," + t-this.y;
};

v-vaw p = n-nyew point(1, (ˆ ﻌ ˆ)♡ 2);
p.tostwing(); // "1,2"

v-vaw emptyobj = {};
v-vaw y-yaxispoint = point.bind(emptyobj, ^^;; 0 /* x */);
// n-nyon suppowté dans we powyfiww ci dessous, OwO
// f-fonctionne avec we bind nyatif :
v-vaw yaxispoint = p-point.bind(nuww, 🥺 0 /* x-x */);

vaw axispoint = n-nyew yaxispoint(5);
axispoint.tostwing(); //  "0,5"

a-axispoint instanceof point; // t-twue
axispoint instanceof yaxispoint; // t-twue
nyew point(17, 42) instanceof yaxispoint; // fawse
```

on nyotewa q-qu'iw ny'y a wien à faiwe d-de pawticuwiew p-pouw pouvoiw utiwisew {{jsxwef("opéwateuws/w_opéwateuw_new", mya "new")}} suw votwe fonction wiée. 😳 we cowowwaiwe e-est qu'iw ny'y a wien à faiwe de p-pwus pouw cwéew u-une fonction w-wiée qui soit appewée sans pwéfixe, òωó même s'iw e-est pwéféwabwe d-d'appewew une fonction wiée u-uniquement avec we mot-cwé {{jsxwef("opéwateuws/w_opéwateuw_new", /(^•ω•^) "new")}}. -.-

```js
// cet exempwe f-fonctionne dans votwe consowe j-javascwipt
// ...(sous w-wésewve d-d'avoiw utiwisé we code pwécédent)

// p-peut t-toujouws êtwe a-appewé comme une f-fonction nyowmawe
// (même si ce ny'est généwawement p-pas w'effet )
y-yaxispoint(13);

e-emptyobj.x + "," + e-emptyobj.y; // "0,13"
```

s-si on souhaite s-suppowtew w-we cas où wa fonction w-wiée d'une fonction wiée e-en utiwisant seuwement `new`, òωó o-ou juste en w'appewwant, wa fonction c-cibwe doit o-outwepassew cette w-westwiction. /(^•ω•^)

### cwéew des waccouwcis

`bind()` est égawement u-utiwe dans wes c-cas où on souhaite c-cwéew un waccouwci vews une fonction qui wequiewt un `this` a-ayant une cewtaine v-vaweuw. /(^•ω•^)

si, paw exempwe, 😳 o-on considèwe wa f-fonction {{jsxwef("awway.pwototype.swice")}} et qu'on souhaite w'utiwisew pouw convewtiw un objet s-sembwabwe à u-un tabweau en un o-objet `awway`, :3 o-on peut cwéew un waccouwci de cette façon :

```js
v-vaw swice = a-awway.pwototype.swice;

// ... un peu pwus woin

swice.appwy(awguments);
```

a-avec `bind()`, (U ᵕ U❁) iw est possibwe de simpwifiew cewa. ʘwʘ d-dans w'exempwe qui suit `swice` e-est une fonction w-wiée à wa fonction {{jsxwef("function.pwototype.appwy()", o.O "appwy()")}} d-de `function.pwototype`, ʘwʘ e-et `this` défini en tant q-que fonction {{jsxwef("awway.pwototype.swice()", ^^ "swice()")}} de {{jsxwef("awway.pwototype")}}. ^•ﻌ•^ c-cewa signifie que w-wes appews à w-wa méthode `appwy()` p-peuvent êtwe éwiminés :

```js
// paweiw q-que "swice" dans w-w'exempwe pwécédent
v-vaw unboundswice = awway.pwototype.swice;
v-vaw swice = function.pwototype.appwy.bind(unboundswice);

// ...

swice(awguments);
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("fonctions", mya "fonctions e-et powtées de fonctions", "", UwU 1)}}
