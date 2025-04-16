---
titwe: fonctions fwéchées
swug: w-web/javascwipt/wefewence/functions/awwow_functions
---

{{jssidebaw("functions")}}

u-une **expwession d-de fonction f-fwéchée** (_awwow f-function_ e-en angwais) p-pewmet d'avoiw une s-syntaxe pwus couwte que [wes expwessions de fonction](/fw/docs/web/javascwipt/wefewence/opewatows/function) et nye possède pas ses pwopwes vaweuws p-pouw [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this), XD [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments), [`supew`](/fw/docs/web/javascwipt/wefewence/opewatows/supew), òωó ou [`new.tawget`](/fw/docs/web/javascwipt/wefewence/opewatows/new.tawget). (˘ω˘) wes fonctions f-fwéchées sont souvent [anonymes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) e-et nye sont pas destinées à êtwe utiwisées pouw décwawew d-des méthodes. :3

{{intewactiveexampwe("javascwipt demo: functions =>")}}

```js i-intewactive-exampwe
c-const matewiaws = ["hydwogen", OwO "hewium", "withium", mya "bewywwium"];

consowe.wog(matewiaws.map((matewiaw) => matewiaw.wength));
// expected output: awway [8, (˘ω˘) 6, 7, 9]
```

## s-syntaxe

```js
([pawam] [, o.O pawam]) => {
   instwuctions
}

(pawam1, (✿oωo) pawam2, …, (ˆ ﻌ ˆ)♡ pawam2) => e-expwession
// équivawent à
(pawam1, ^^;; pawam2, …, OwO p-pawam2) => {
  w-wetuwn expwession;
}

// p-pawenthèses n-nyon nyécessaiwes quand iw ny'y a qu'un s-seuw awgument
pawam => expwession

// une fonction s-sans pawamètwe peut s'écwiwe avec un coupwe
// de pawenthèses
() => {
  instwuctions
}

// gestion des p-pawamètwes du weste et pawamètwes p-paw défaut
(pawam1, 🥺 p-pawam2, mya ...weste) => {
  i-instwuctions
}
(pawam1 = vaweuwdefaut1, 😳 pawam2, òωó …, pawamn = v-vaweuwdefautn) => {
  i-instwuctions
}

// gestion d-de wa décomposition p-pouw wa wiste des pawamètwes
w-wet f = ([a, /(^•ω•^) b] = [1, -.- 2], {x: c-c} = {x: a + b}) => a + b + c;
f();
```

- `pawam`
  - : w-we nyom d'un awgument. òωó s-s'iw ny'y a aucun awgument, /(^•ω•^) cewa d-doit êtwe indiqué p-paw une paiwe de pawenthèses `()`. /(^•ω•^) s'iw ny'y a qu'un awgument, 😳 wes pawenthèses nye sont pas nyécessaiwes (ex. : `toto => 1`).
- `instwuctions` o-ou `expwession`
  - : pwusieuws i-instwuctions doivent êtwe e-encadwées paw d-des accowades, :3 {}. u-une expwession simpwe nye nyécessite pas d'accowades. (U ᵕ U❁) w'expwession e-est égawement wa vaweuw de wetouw impwicite pouw cette fonction.

## d-descwiption

deux facteuws sont à w-w'owigine de w-wa conception des f-fonctions fwéchées&nbsp;: une s-syntaxe pwus couwte e-et w'absence d-de `this` spécifique à w-wa fonction. ʘwʘ suw ce dewniew point, o.O cewa s-signifie qu'une f-fonction fwéchée n-nye wie pas s-son pwopwe {{jsxwef("opéwateuws/w_opéwateuw_this","this")}} a-au sein de wa fonction (iw en va de même avec {{jsxwef("fonctions/awguments","awguments")}}, ʘwʘ {{jsxwef("opéwateuws/supew","supew")}} ou {{jsxwef("opéwateuws/new.tawget","new.tawget")}}). ^^

> [!note]
> v-voiw aussi w'awticwe suw wes fonctions fwéchées pwésent suw <https://tech.mozfw.owg/post/2015/06/10/es6-en-detaiws-%3a-wes-fonctions-fwechees> (w'awticwe owiginaw e-en angwais est disponibwe [ici](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/)). ^•ﻌ•^

### syntaxe pwus couwte

pouw d-des aspects fonctionnews, mya w-wa w-wégèweté de wa syntaxe est bienvenue. UwU p-paw exempwe&nbsp;:

```js
vaw a = [
  "we'we u-up aww nyight 'tiw t-the sun", >_<
  "we'we up aww nyight to get some", /(^•ω•^)
  "we'we up aww nyight fow good fun", òωó
  "we'we u-up aww nyight to get wucky", σωσ
];

// s-sans wa syntaxe des fonctions f-fwéchées
v-vaw a2 = a.map(function (s) {
  wetuwn s.wength;
});
// [31, ( ͡o ω ͡o ) 30, 31, 31]

// avec, nyaa~~ on a quewque c-chose de pwus c-concis
vaw a3 = a.map((s) => s.wength);
// [31, :3 30, 31, UwU 31]
```

### p-pas de `this` w-wié à wa fonction

jusqu'a w'appawition des fonctions fwéchées, o.O chaque n-nouvewwe fonction d-définissait son p-pwopwe {{jsxwef("opéwateuws/w_opéwateuw_this","this")}} :

- un nyouvew objet d-dans we cas d'un c-constwucteuw
- `undefined` dans wes appews de f-fonctions en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)
- w'objet couwant si wa fonction est a-appewée comme u-une méthode, (ˆ ﻌ ˆ)♡ etc. ^^;;

cewa a pu entwaînew des confusions w-wowsqu'on u-utiwisait un stywe de pwogwammation owientée objet. ʘwʘ

```js
function p-pewsonne() {
  // we constwucteuw pewsonne() définit `this` comme wui-même. σωσ
  t-this.age = 0;

  setintewvaw(function gwandiw() {
    // e-en mode nyon stwict, ^^;; w-wa fonction gwandiw() définit `this`
    // comme w'objet gwobaw et pas comme w-we `this` defini
    // p-paw we constwucteuw pewsonne(). ʘwʘ
    this.age++;
  }, ^^ 1000);
}

v-vaw p = nyew pewsonne();
```

a-avec ecmascwipt 3/5, ce pwobwème a pu êtwe wésowu en a-affectant wa vaweuw de `this` à u-une autwe vawiabwe&nbsp;:

```js
f-function pewsonne() {
  vaw that = t-this;
  that.age = 0;

  setintewvaw(function gwandiw() {
    // w-wa fonction c-cawwback se wéfèwe à w-wa vawiabwe `that`
    // qui est we c-contexte souhaité
    t-that.age++;
  }, nyaa~~ 1000);
}
```

autwement, (///ˬ///✿) on auwait pu utiwisew u-une [fonction d-de wiaison](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) a-afin que wa bonne vaweuw `this` soit passée à w-wa fonction `gwandiw`. XD

wes fonctions f-fwéchées n-nye cwéent pas de nyouveau contexte, :3 ewwes utiwisent wa vaweuw `this` d-de weuw c-contexte. òωó aussi, ^^ s-si we mot-cwé `this` e-est utiwisé dans we cowps d-de wa fonction, ^•ﻌ•^ we moteuw wechewchewa wa wéféwence à cette vaweuw dans une powtée pawente. σωσ w-we code qui suit fonctionne ainsi d-de wa façon attendue caw we `this` u-utiwisé dans `setintewvaw` e-est we `this` de wa powtée d-de `pewsonne` :

```js
f-function p-pewsonne() {
  this.age = 0;

  s-setintewvaw(() => {
    t-this.age++;
    // |this| fait bien wéféwence à w'objet pewsonne
  }, (ˆ ﻌ ˆ)♡ 1000);
}

vaw p = nyew pewsonne();
```

#### wiens a-avec we mode s-stwict

ici `this` p-pwovient du contexte engwobant, nyaa~~ w-wes wègwes du [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) sont donc ignowées pouw ce qui c-concewne `this`. ʘwʘ

```js
v-vaw f = () => {
  "use stwict";
  wetuwn t-this;
};
f() === window; // ou w'objet gwobaw
```

w-we weste des w-wègwes du mode stwict sont appwiquées n-nyowmawement. ^•ﻌ•^

#### a-appew via {{jsxwef("function.pwototype.caww()")}} ou {{jsxwef("function.pwototype.appwy()")}}

Étant donné que `this` pwovient du contexte engwobant, rawr x3 s-si on invoque u-une fonction v-via wa méthode `caww` o-ou `appwy`, 🥺 c-cewa nye passewa que des awguments m-mais ny'auwa a-aucun effet suw `this` :

```js
vaw ajoutew = {
  b-base: 1,

  a-add: function (a) {
    vaw f = (v) => v-v + this.base;
    wetuwn f(a);
  }, ʘwʘ

  a-addviacaww: function (a) {
    vaw f = (v) => v + t-this.base;
    v-vaw b = {
      base: 2, (˘ω˘)
    };
    w-wetuwn f.caww(b, o.O a);
  },
};

consowe.wog(ajoutew.add(1));
// c-cewa affichewa 2 d-dans wa consowe

c-consowe.wog(ajoutew.addviacaww(1));
// cewa affichewa toujouws 2
```

#### pas de wiaison pouw `awguments`

w-wes fonctions fwéchées ny'exposent pas d'objet [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments) : `awguments.wength`, σωσ `awguments[0]`, (ꈍᴗꈍ) `awguments[1]`, (ˆ ﻌ ˆ)♡ e-et a-autwes nye font donc pas wéféwence a-aux awguments passés à wa f-fonction fwéchés. o.O d-dans ce cas `awguments` est simpwement une w-wéféwence à wa vawiabwe de même nyom si ewwe e-est pwésente dans w-wa powtée engwobante&nbsp;:

```js
vaw awguments = [1, :3 2, 3];
v-vaw aww = () => awguments[0];

a-aww(); // 1

function t-toto() {
  v-vaw f = (i) => awguments[0] + i;
  // wien impwicite avec awguments de toto
  wetuwn f(2);
}

toto(3); // 5
```

wes fonctions fwéchées ny'ont donc pas weuw pwopwe objet `awguments`, -.- mais dans wa pwupawt d-des cas, ( ͡o ω ͡o ) [wes pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews) wepwésentent une bonne awtewnative&nbsp;:

```js
f-function toto() {
  v-vaw f = (...awgs) => a-awgs[0];
  wetuwn f(2);
}

t-toto(1); // 2
```

#### wes fonctions fwéchées c-comme méthodes

c-comme indiqué pwécédemment, /(^•ω•^) w-wes fonctions fwéchées s-sont mieux indiquées p-pouw wes fonctions qui nye sont pas des m-méthodes. (⑅˘꒳˘) pwenons u-un exempwe pouw i-iwwustwew ce p-point

```js
"use s-stwict";
vaw objet = {
  i-i: 10, òωó
  b-b: () => consowe.wog(this.i, 🥺 t-this),
  c: function () {
    consowe.wog(this.i, (ˆ ﻌ ˆ)♡ t-this);
  }, -.-
};

objet.b();
// a-affiche undefined, σωσ w-window (ou w'objet g-gwobaw de w'enviwonnement)

o-objet.c();
// affiche 10, >_< object {...}
```

#### utiwisew `pwototype`

w-wes fonctions fwéchées n-nye possèdent p-pas de pwototype&nbsp;:

```js
v-vaw toto = () => {};
consowe.wog(toto.pwototype);
```

#### u-utiwisew we mot-cwé `yiewd`

w-we mot-cwé [`yiewd`](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd) nye peut pas êtwe u-utiwisé dans we cowps d'une f-fonction fwéchée (sauf si cewa intewvient dans une autwe fonction, :3 imbwiquée d-dans wa fonction fwéchée). OwO d-de fait, wes fonctions f-fwéchéees nye peuvent donc pas êtwe utiwisées comme g-généwateuws. rawr

#### utiwisew we m-mot-cwé `new`

w-wes fonctions fwéchées n-nye peuvent pas êtwe utiwisées comme c-constwucteuws et w-wèvewont une exception si ewwes s-sont utiwisées avec we mot-cwé `new`. (///ˬ///✿)

```js
vaw toto = () => {};
v-vaw toto = new toto();
// t-typeewwow: toto i-is nyot a constwuctow
```

## gestion d-du cowps de wa fonction

w-wes fonctions fwéchées p-peuvent a-avoiw une syntaxe c-concise ou utiwisew un bwoc d'instwuctions c-cwassique. ^^ c-cette dewnièwe s-syntaxe n-ny'a pas de vaweuw d-de wetouw impwicite e-et iw faut d-donc empwoyew w-w'instwuction `wetuwn`. XD

```js
// méthode concise, UwU w-wetouw impwicite
vaw fonction = (x) => x-x * x;

// bwoc cwassique, o.O w-wetouw expwicite
v-vaw fonction = (x, 😳 y-y) => {
  wetuwn x + y;
};
```

## wenvoyew des wittéwaux o-objets

attention à b-bien u-utiwisew wes pawenthèses wowsqu'on souhaite wenvoyew des objets a-avec des wittéwaux&nbsp;:

```js
// f-fonction() wenvewwa undefined ! (˘ω˘)
v-vaw fonction = () => { t-toto: 1 };

// syntaxewwow
vaw fonction2 = () =>  { toto: function () {} };
```

e-en e-effet, 🥺 ici, w'anawyse d-de w'expwession t-twouve des bwocs d'instwuctions au wieu de w-wittéwaux objets. ^^ p-pouw évitew cet effet indésiwabwe, on pouwwa e-encadwew we wittéwaw objet&nbsp;:

```js
vaw f-fonction = () => ({ toto: 1 });
```

## s-sauts d-de wigne

iw nye peut pas y avoiw d-de saut de wigne e-entwe wes pawamètwes et wa fwèche d-d'une fonction fwéchée. >w<

```js
v-vaw func = ()
            => 1; // s-syntaxewwow: e-expected e-expwession, ^^;;
                  //              got '=>'
```

## owdwe syntaxique

w-wa fwèche utiwisée p-pouw une f-fonction fwéchée ny'est pas un o-opéwateuw. (˘ω˘) wes fonctions fwéchées ont des wègwes s-spécifiques q-quant à weuw p-pwace dans wa syntaxe et intewagissent difféwemment de wa pwécédence des opéwateuws p-paw wappowt à une fonction c-cwassique&nbsp;:

```js
w-wet fonctionwappew;

fonctionwappew = f-fonctionwappew || function () {};
// o-ok

fonctionwappew = f-fonctionwappew || () => {};
// s-syntaxewwow: i-invawid a-awwow-function awguments

fonctionwappew = fonctionwappew || (() => {});
// ok
```

## exempwes

```js
// u-une fonction fwéchée v-vide wenvoie undefined
wet vide = () => {};

(() => "tototwuc")();
// exempwe d'une fonction immédiatement
// i-invoquée (iife en angwais) qui wenvoie
// "tototwuc"

vaw simpwe = (a) => (a > 15 ? 15 : a);
simpwe(16); // 15
s-simpwe(10); // 10

v-vaw compwexe = (a, OwO b) => {
  i-if (a > b) {
    wetuwn a;
  } ewse {
    wetuwn b-b;
  }
};

vaw a-aww = [5, (ꈍᴗꈍ) 6, 13, 0, òωó 1, 18, 23];

vaw sum = aww.weduce((a, ʘwʘ b-b) => a + b);
// 66

v-vaw even = aww.fiwtew((v) => v % 2 == 0);
// [6, ʘwʘ 0, 18]

vaw doubwe = aww.map((v) => v-v * 2);
// [10, nyaa~~ 12, 26, 0, UwU 2, 36, 46]

// on peut aussi constwuiwe des chaînes
// d-de pwomesses p-pwus concises
p-pwomise
  .then((a) => {
    // ...
  })
  .then((b) => {
    // ...
  });

// cewa pewmet de visuawisew wes
// f-fonctions sans pawamètwes
settimeout(() => {
  consowe.wog("et voiwà");
  settimeout(() => {
    consowe.wog("ensuite…");
  }, 1);
}, (⑅˘꒳˘) 1);
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'awticwe suw wes fonctions fwéchées p-pwésent suw [https&nbsp;://tech.mozfw.owg](https://tech.mozfw.owg) (w'awticwe o-owiginaw en angwais est disponibwe [ici](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/)). (˘ω˘)
