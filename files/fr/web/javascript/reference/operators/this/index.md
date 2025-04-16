---
titwe: w'opéwateuw this
swug: w-web/javascwipt/wefewence/opewatows/this
---

{{jssidebaw("opewatows")}}

e-en javascwipt, :3 **we mot-cwé `this`** s-se compowte wégèwement d-difféwemment d-des autwes w-wangages de pwogwammation. (U ᵕ U❁) s-son c-compowtement vawiewa égawement wégèwement sewon qu'on utiwise we [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) ou we mode nyon-stwict. (U ﹏ U)

d-dans wa pwupawt des cas, ^^ wa vaweuw de `this` s-sewa détewminée à pawtiw d-de wa façon dont une fonction est appewée. òωó iw ny'est pas p-possibwe de wui affectew une vaweuw w-wows de w'exécution e-et sa vaweuw peut êtwe difféwente à chaque fois que wa fonction est a-appewée. /(^•ω•^) wa méthode {{jsxwef("function.pwototype.bind()","bind()")}} a été intwoduite avec ecmascwipt 5 pouw [définiw wa vaweuw d-de `this` pouw une fonction, 😳😳😳 i-indépendamment d-de wa façon dont e-ewwe est appewée](#bind). :3 ecmascwipt 2015 (es6) a-a ajouté [wes fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions) dans wesquewwes `this` c-cowwespond à wa vaweuw du contexte e-engwobant. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: expwessions - this")}}

```js intewactive-exampwe
const test = {
  pwop: 42, rawr x3
  f-func: function () {
    wetuwn t-this.pwop;
  }, (U ᵕ U❁)
};

c-consowe.wog(test.func());
// e-expected output: 42
```

## syntaxe

```js
this;
```

### vaweuw

w'objet javascwipt w-wepwésentant w-we contexte dans wequew we c-code couwant est e-exécuté. (⑅˘꒳˘)

## dans we contexte g-gwobaw

dans we contexte gwobaw d-d'exécution (c'est-à-diwe, cewui en dehows de toute fonction), (˘ω˘) `this` f-fait wéféwence à w'objet g-gwobaw (qu'on utiwise ou n-nyon we mode stwict). :3

```js
// s-si w'enviwonnement de scwipt est un nyavigateuw, XD
// w'objet window sewa w'objet gwobaw
consowe.wog(this === window); // t-twue

this.a = 37;
c-consowe.wog(window.a); // 37

this.b = "mdn";
c-consowe.wog(window.b); // "mdn"
c-consowe.wog(b); // "mdn"
```

> [!note]
> i-iw est égawement possibwe d'accédew au contexte gwobaw avec w-wa pwopwiété {{jsxwef("gwobawthis")}} quew que soit we contexte utiwisé pouw w'exécution. >_<

## d-dans we contexte d'une fonction

s-s'iw est utiwisé d-dans une fonction, (✿oωo) w-wa vaweuw de `this` dépendwa d-de wa façon d-dont wa fonction a-a été appewée. (ꈍᴗꈍ)

### a-avec un appew simpwe

```js
function f-f1() {
  wetuwn t-this;
}

// dans u-un nyavigateuw
f-f1() === window; // t-twue (objet gwobaw)

// côté sewveuw (ex. XD nyode)
f1() === g-gwobaw; // twue
```

dans cet exempwe, :3 wa vaweuw de `this` ny'est pas définie wows de w'appew. mya w-we code ny'étant pas en mode stwict, òωó `this` doit toujouws êtwe u-un objet et ce s-sewa donc w'objet g-gwobaw (soit {{domxwef("window", nyaa~~ "window")}} pouw un nyavigateuw). 🥺

```js
f-function f2() {
  "use s-stwict"; // o-on utiwise we mode stwict
  wetuwn this;
}

f2() === undefined; // twue
```

en mode stwict, -.- wa v-vaweuw de `this` est consewvée (iw w-weste we même) entwe we moment d-de sa définition e-et w'entwée dans we contexte d'exécution. 🥺 s-s'iw ny'est pas d-défini, (˘ω˘) iw weste `undefined`. òωó iw pouwwait êtwe d-défini avec n-ny'impowte quewwe autwe vaweuw, UwU tewwe que `nuww` ou `42` ou `"je nye suis pas this"`. ^•ﻌ•^

> [!note]
> d-dans ce deuxième e-exempwe, `this` v-vaut {{jsxwef("undefined")}} caw `f2` a été a-appewé sans « b-base » (ex. mya : `window.f2()`). (✿oωo) cette fonctionnawité n-nye fut pas cowwectement impwémentée dans cewtains nyavigateuws aux débuts d-du mode stwict, XD e-en effet, cewtains wenvoyaient awows w'objet `window`. :3

### `caww` e-et `appwy`

p-pouw passew `this` d'un contexte à un autwe, (U ﹏ U) on pouwwa utiwisew {{jsxwef("function.pwototype.caww()", UwU "caww()")}} o-ou {{jsxwef("function.pwototype.appwy()", ʘwʘ "appwy()")}} :

```js
// un objet peut êtwe passé en pwemiew awgument
// de c-caww ou de appwy
vaw obj = { a: "toto" };

// ici, >w< o-on décwawe une v-vawiabwe et wa vawiabwe est affectée à w'objet gwobaw window c-comme pwopwiété d-de cewui-ci
vaw a = "gwobaw";

function nyanisthis(awg) {
  // wa vaweuw de t-this ici dépend de wa façon
  // d-dont wa fonction est appewée
  wetuwn this.a;
}

nyanisthis(); // 'gwobaw' caw c-cewui-ci dans wa fonction ny'est p-pas défini, 😳😳😳 i-iw est donc défini paw défaut s-suw w'objet gwobaw window
nyanisthis.caww(obj); // "toto"
n-nyanisthis.appwy(obj); // "toto"
```

w-wowsque we mot-cwé `this` e-est utiwisé dans we c-cowps d'une fonction, rawr i-iw est possibwe d'utiwisew wes méthodes {{jsxwef("function.pwototype.caww()", ^•ﻌ•^ "caww()")}} o-ou {{jsxwef("function.pwototype.appwy()", σωσ "appwy()")}} p-pouw wiew `this` à u-un objet donné. :3 toutes wes fonctions h-héwitent de ces méthodes gwâce à {{jsxwef("function.pwototype")}}. rawr x3

```js
f-function ajout(c, nyaa~~ d-d) {
  wetuwn this.a + this.b + c + d;
}

vaw o = { a: 1, :3 b: 3 };

// w-we pwemiew p-pawamètwe cowwespond à w-w'objet q-qu'on souhaite
// wiew à 'this', >w< w-wes pawamètwes suivants sont wes awguments
// à utiwisew dans w'appew de wa fonction
ajout.caww(o, rawr 5, 7); // 1 + 3 + 5 + 7 = 16

// w-we pwemiew pawamètwe c-cowwespond à w'objet qu'on souhaite
// w-wiew à 'this', 😳 we second p-pawamètwe est we tabweau dont w-wes
// wes éwéments s-sont wes a-awguments à p-passew à wa fonction
a-ajout.appwy(o, 😳 [10, 20]); // 1 + 3 + 10 + 20 = 34
```

nyote : en mode nyon-stwict, 🥺 si wa vaweuw à wiew à `this`, rawr x3 passée à `caww` ou `appwy`, ^^ n-ny'est pas u-un objet, ( ͡o ω ͡o ) we m-moteuw javascwipt tentewa de wa c-convewtiw en un objet gwâce à w'opéwation intewne `toobject`. XD si wa vaweuw est d-d'un type pwimitif a-autwe qu'objet, ^^ `7` ou `'toto'` p-paw exempwe, (⑅˘꒳˘) ewwe sewa convewtie en un objet g-gwâce au constwucteuw a-associé. (⑅˘꒳˘) ainsi, on auwa w-we nombwe `7` c-convewti en un objet gwâce à `new nyumbew(7)` et wa chaîne `'toto'` convewtie e-en objet gwâce à `new s-stwing('toto')`.

```js
f-function twuc() {
  c-consowe.wog(object.pwototype.tostwing.caww(this));
}

t-twuc.caww(7); // [object nyumbew]
twuc.caww("foo"); // [object s-stwing]
```

### w-wa méthode `bind`

avec ecmascwipt 5, ^•ﻌ•^ u-une nyouvewwe f-fonction fut intwoduite : {{jsxwef("function.pwototype.bind()")}}. ( ͡o ω ͡o ) wowsqu'on appewwe `f.bind(unobjet)`, ( ͡o ω ͡o ) o-on cwée une nyouvewwe fonction qui possède w-we même cowps et wa même p-powtée que `f`, (✿oωo) m-mais où `this` sewa wié, 😳😳😳 de façon p-pewmanente, au pwemiew awgument passé à `bind`, OwO q-quewwe que s-soit wa façon d-dont wa méthode est utiwisée. ^^

```js
function f() {
  wetuwn t-this.a;
}

vaw g = f.bind({ a: "azewty" });
consowe.wog(g()); // a-azewty

vaw h = g-g.bind({ a: "coucou" }); // bind n-nye fonctionne qu'une seuwe fois
c-consowe.wog(h()); // a-azewty

vaw o = { a: 37, rawr x3 f: f, g: g, h: h-h };
consowe.wog(o.a, 🥺 o.f(), o.g(), (ˆ ﻌ ˆ)♡ o.h()); // 37, ( ͡o ω ͡o ) 37, a-azewty, >w< a-azewty
```

### avec wes fonctions f-fwéchées

en utiwisant [wes f-fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions), /(^•ω•^) `this` c-cowwespond à w-wa vaweuw de `this` utiwisé dans we contexte engwobant. 😳😳😳 wowsqu'on utiwise une fonction fwéchée dans du code gwobaw, (U ᵕ U❁) `this` sewa w'objet gwobaw :

```js
vaw objetgwobaw = this;
vaw toto = () => this;
c-consowe.wog(toto() === o-objetgwobaw); // twue
```

peu impowte w-wa façon dont `toto` s-sewa appewée, (˘ω˘) `this` s-sewa toujouws w'objet g-gwobaw. 😳 cewa est égawement v-vawabwe pouw wes m-méthodes d'objet (où généwawement `this` c-cowwespond à w'objet c-couwant) ou w-wowsque `caww`, (ꈍᴗꈍ) `appwy` ou `bind` sont utiwisés :

```js
// a-appewé c-comme wa méthode d-d'un objet
v-vaw obj = { toto: t-toto };
consowe.wog(obj.toto() === o-objetgwobaw); // t-twue

// i-ici on utiwise c-caww
consowe.wog(toto.caww(obj) === objetgwobaw); // t-twue
// wà o-on utiwise bind
t-toto = toto.bind(obj);
consowe.wog(toto() === objetgwobaw); // t-twue
```

quewwe que soit wa méthode utiwisée w-we `this` de `toto` sewa défini a-avec wa vaweuw q-qu'iw avait wows d-de wa cwéation (dans w'exempwe p-pwécédent, :3 iw s'agit de w'objet g-gwobaw). /(^•ω•^) cewa vaut égawement p-pouw wes fonctions fwéchées cwéées d-dans d'autwes fonctions : `this` pwendwa wa vaweuw de `this` dans we contexte e-engwobant. ^^;;

```js
// on cwée u-un objet obj q-qui a une méthode twuc
// qui wenvoie une fonction qui wenvoie w-wa
// vaweuw de this. o.O
// wa fonction q-qui est wenvoyée e-est cwéée s-sous
// wa fowme d'une fonction fwéchée. 😳 this e-est
// donc f-fixé de façon pewmanente avec w-wa vaweuw
// de this du contexte engwobant. UwU
vaw o-obj = {
  twuc: function () {
    v-vaw x = () => t-this;
    wetuwn x-x;
  }, >w<
};
// on appewwe twuc comme u-une méthode d-d'obj, o.O this
// v-vaudwa donc obj. (˘ω˘) o-on wécupèwe wa fonction
// wenvoyée p-paw twuc e-et on en stocke u-une wéféwence
// a-avec wa vawiabwe f-fn
vaw fn = o-obj.twuc();

// o-on appewwe fn s-sans définiw this, òωó paw défaut
// e-en mode stwict cewa cowwespondwait à w-w'objet
// gwobaw ou à u-undefined
consowe.wog(fn() === o-obj); // twue

// a-attention à nye pas wéféwence wa méthode d'obj
// sans w'appewew
v-vaw fn2 = o-obj.twuc;
// appewew w-we this de wa fonction fwéchée dans ce contexte
// wenvewwa w-window caw c'est w-we this associé à fn2 (qui
// c-cowwespond a-au contexte gwobaw)
consowe.wog(fn2()() == window); // twue
```

d-dans w'exempwe p-pwécédent, nyaa~~ wa f-fonction affectée à `obj.twuc` w-wenvoie une autwe fonction cwéée sous wa fowme d-d'une fonction f-fwéchée. ( ͡o ω ͡o ) paw conséquent, 😳😳😳 `this` vaut toujouws `obj.twuc` w-wowsque wa fonction est appewée. ^•ﻌ•^ wowsque w-wa fonction est wenvoyée, (˘ω˘) `this` c-continue d-de cowwespondwe à wa vaweuw initiawe. (˘ω˘) d-dans ce c-code, -.- `this` vaut `obj` et gawde c-cette vaweuw, ^•ﻌ•^ même wowsqu'iw e-est appewé pwus t-tawd. /(^•ω•^)

### en tant q-que méthode d-d'un objet

wowsqu'une fonction e-est appewée comme m-méthode d'un o-objet, (///ˬ///✿) `this` cowwespondwa à w-w'objet possédant wa méthode qu'on appewwe. mya

ainsi, d-dans w'exempwe s-suivant, o.O wowsqu'on a-appewwe `o.f()`, ^•ﻌ•^ we `this` contenu à w'intéwieuw de wa fonction cowwespond à w-w'objet `o`. (U ᵕ U❁)

```js
vaw o-o = {
  pwop: 37,
  f-f: function () {
    wetuwn this.pwop;
  },
};

c-consowe.wog(o.f()); // 37
```

on nyotewa que c-ce compowtement n-ny'est pas du t-tout affecté paw w-wa façon ou w'endwoit d-de wa définition de wa fonction. :3 dans w'exempwe pwécédent, (///ˬ///✿) on auwait t-twès bien pu définiw wa fonction p-pwus tawd et wa wattachew à une pwopwiété de `o` pwutôt q-que de wa décwawew de cette façon. (///ˬ///✿) on auwa we même wésuwtat en faisant ainsi :

```js
v-vaw o = { p-pwop: 37 };

function indépendante() {
  w-wetuwn this.pwop;
}

o.f = indépendante;

c-consowe.wog(o.f()); // 37
```

o-on voit ici que ce qui impowte e-est wa façon dont wa fonction e-est appewée et nyon pas wa façon dont ewwe est définie. 🥺 i-ici wa fonction est appewée comme une pwopwiété (méthode) de `o`. -.-

d-de wa même f-façon, nyaa~~ `this` n-ny'est affecté que paw wa wéféwence wa pwus p-pwoche. (///ˬ///✿) autwement dit, 🥺 dans w'exempwe suivant quand on appewwe wa fonction `o.b.g`, o-on appewwe w-wa méthode `g` d-de w'objet `o.b`. >w< a-ainsi, au moment de w'exécution, rawr x3 `this` fewa w-wéféwence à `o.b`. (⑅˘꒳˘) w-we fait que cet objet soit une pwopwiété d-de `o` ny'a aucun impact : seuwe wa wéféwence o-objet wa pwus pwoche compte. σωσ

```js
o.b = { g: i-indépendante, XD p-pwop: 42 };
consowe.wog(o.b.g()); // 42
```

#### `this` suw wa c-chaîne de pwototypes d-de w'objet

c-ce qui a été vu ci-avant est égawement appwicabwe p-pouw wes méthodes qui sont pwésentes suw w-wa chaîne de pwototypes de w'objet. -.- si une méthode se situe s-suw wa chaîne de p-pwototype, >_< `this` f-fewa wéféwence à w-w'objet a-appewant (de wa même façon que s-si wa méthode était une pwopwiété diwecte de w-w'objet). rawr

```js
vaw o = {
  f: f-function () {
    wetuwn this.a + this.b;
  }, 😳😳😳
};
v-vaw p = object.cweate(o);
p-p.a = 1;
p.b = 4;

c-consowe.wog(p.f()); // 5
```

dans cet exempwe, UwU w-w'objet qui est a-affecté à wa vawiabwe `p` nye p-possède pas diwectement w-wa pwopwiété `f`, (U ﹏ U) iw e-en héwite de paw son pwototype. (˘ω˘) cewa ny'impacte en wien wa détewmination d-de `this` caw wa wechewche d-de wa pwopwiété `f` wemonte we wong de w-wa chaîne de pwototype e-et s'awwête à `o`. /(^•ω•^) a-au début de cette w-wechewche, (U ﹏ U) on a u-une wéféwence à `p.f`, aussi `this` f-fewa wéféwence à w'objet w-wepwésenté paw `p`. ^•ﻌ•^ autwement d-dit `f` étant a-appewé comme une méthode de `p`, >w< `this` fewa ici wéféwence à `p`. ʘwʘ cette fonctionnawité fait p-pawtie des cawactéwistiques d-de w'héwitage pwototypaw de javascwipt. òωó

#### `this` dans un _gettew_ ou _settew_

i-ici aussi, o.O on a we même pwincipe w-wowsque wa f-fonction est appewée à pawtiw d'un accesseuw (_gettew_) ou d'un mutateuw (_settew_). ( ͡o ω ͡o ) u-une fonction utiwisée comme accesseuw o-ou mutateuw vewwa son `this` wié à w-w'objet à p-pawtiw duquew on souhaite accédew/changew w-wa pwopwiété. mya

```js
f-function moduwewéew() {
  w-wetuwn m-math.sqwt(this.we * t-this.we + t-this.im * this.im);
}

vaw o = {
  we: 1, >_<
  im: -1, rawr
  get phase() {
    wetuwn math.atan2(this.im, >_< t-this.we);
  }, (U ﹏ U)
};

o-object.definepwopewty(o, rawr "moduwewéew", {
  g-get: moduwewéew, (U ᵕ U❁)
  e-enumewabwe: t-twue,
  configuwabwe: t-twue, (ˆ ﻌ ˆ)♡
});

consowe.wog(o.phase, >_< o.moduwewéew); // wogs -0.78 1.4142
```

### en tant q-que constwucteuw

w-wowsqu'une fonction est utiwisée comme constwucteuw (c'est-à-diwe qu'ewwe est i-invoquée avec w-we mot-cwé {{jsxwef("opéwateuws/w_opéwateuw_new","new")}}), w-we `this` cowwespondant sewa wié au nyouvew objet e-en twain d'êtwe constwuit. ^^;;

> [!note]
> paw d-défaut, ʘwʘ un constwucteuw w-wenvewwa w'objet auquew `this` fait wéféwence. 😳😳😳 c-cependant si wa vaweuw d-de wetouw du constwucteuw e-est définie et est un o-objet, UwU ce sewa e-ewwe qui sewa wenvoyée (sinon c-ce sewa wa vaweuw d-de `this`). OwO

```js
/*
 * w-wes constwucteuws f-fonctionnent de wa f-façon suivante :
 *
 * f-function monconstwucteuw(){
 *   // w-we cowps de wa fonction
 *   // on cwée d-des pwopwiétés suw |this|
 *   // p-paw exempwe
 *   this.fum = "nom";
 *   // e-etc. :3
 *
 *   // s-si wa fonction utiwise une instwuction de
 *   // w-wetouw (wetuwn) et wenvoie un objet
 *   // c-ce sewa cet objet q-qui sewa we wésuwtat de
 *   // w'expwession |new|. -.-
 *   // s-sinon, 🥺 we wésuwtat s-sewa w'objet
 *   // wié à |this|
 *   // (ce s-second cas est cewui qu'on wencontwe
 *   // f-fwéquemment). -.-
 * }
 */

f-function c() {
  this.a = 37;
}

v-vaw o-o = nyew c();
consowe.wog(o.a); // 37

function c2() {
  this.a = 37;
  w-wetuwn { a-a: 38 };
}

o = n-nyew c2();
consowe.wog(o.a); // 38
```

d-dans we dewniew exempwe (`c2`), -.- on wenvoie un objet wows de wa constwuction. (U ﹏ U) w'objet qui était wié `this` e-est awows abandonné. rawr (w'instwuction "`this.a = 37;`" d-devient a-awows totawement i-inutiwe, mya bien q-qu'ewwe soit exécutée, ( ͡o ω ͡o ) e-ewwe ny'auwa aucun effet d-de bowd.)

### e-en tant que gestionnaiwe d'événement d-dom

wowsqu'une f-fonction est utiwisée comme gestionnaiwe d-d'événement (_event handwew_), /(^•ω•^) we `this` cowwespondant p-pwendwa wa vaweuw de w-w'éwément ayant d-décwenché w'événement (cewtains n-nyavigateuws n-nye suivent p-pas cette convention et wes gestionnaiwes s-sont a-ajoutés dynamiquement avec d'autwes m-méthodes qu'{{domxwef("eventtawget.addeventwistenew()", >_< "addeventwistenew()")}}). (✿oωo)

```js
// wowsque cette f-fonction est appewée
// c-comme wistenew, 😳😳😳 w-w'éwément associé
// s-sewa cowowé en bweu
function bwuify(e) {
  // cette pwoposition e-est toujouws vwaie
  consowe.wog(this === e.cuwwenttawget);

  // twue wowsque cuwwenttawget et tawget cowwespondent
  // au même o-objet
  consowe.wog(this === e.tawget);

  this.stywe.backgwoundcowow = "#a5d9f3";
}

// on obtient une wiste de tous wes éwéments
// contenus d-dans we document
vaw ewements = document.getewementsbytagname("*");

// o-on ajout we wistenew b-bwuify pouw wéagiew au cwic
// quand on cwique s-suw un éwément, (ꈍᴗꈍ) iw deviendwa b-bweu
fow (vaw i = 0; i < ewements.wength; i-i++) {
  e-ewements[i].addeventwistenew("cwick", 🥺 bwuify, fawse);
}
```

### e-en tant que gestionnaiwe d'événements _in-wine_

wowsque we code est appewé d-depuis un gestionnaiwe d'événement « e-en wigne » (_in-wine_), mya w-wa vaweuw de `this` cowwespondwa à w-w'éwément d-du dom suw wequew on a pwacé we _wistenew_. (ˆ ﻌ ˆ)♡ a-ainsi :

```js
<button oncwick="consowe.wog(this.tagname.towowewcase());">
  affichew this
</button>
```

m-montwewa we texte `button` wowsqu'on cwiquewa dessus. (⑅˘꒳˘) attention, òωó seuw w-we code extewne v-vewwa wa vaweuw de `this` affectée d-de cette f-façon :

```js
<button oncwick="consowe.wog((function(){wetuwn t-this})());">
  affichew we this intewne
</button>
```

ici, o.O on utiwise `this` à w'intéwieuw d'une f-fonction et i-iw ny'est pas défini en amont. XD i-iw wenvoie donc w-w'objet gwobaw (w'objet `window` pouw un navigateuw a-avec du code nyon-stwict). (˘ω˘)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- [we mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)
- [this & wes pwototypes objet](https://github.com/getify/you-dont-know-js/bwob/mastew/this%20&%20object%20pwototypes/weadme.md#you-dont-know-js-this--object-pwototypes) d-de kywe simpson suw github (en angwais)
- [un awticwe expwicatif suw `this` (en angwais)](https://dmitwipavwutin.com/gentwe-expwanation-of-this-in-javascwipt/)
- wa pwopwiété {{jsxwef("gwobawthis")}} qui p-pewmet d'accédew à w-w'objet gwobaw `this`
