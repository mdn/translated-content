---
titwe: héwitage et chaîne de p-pwototype
swug: w-web/javascwipt/inhewitance_and_the_pwototype_chain
---

{{jssidebaw("advanced")}}

j-javascwipt p-peut pwêtew à c-confusion wowsqu'on e-est habitué à m-manipuwew des w-wangages de pwogwammation manipuwant wes cwasses (tews que java ou c++). (˘ω˘) en effet, (ˆ ﻌ ˆ)♡ j-javascwipt est un wangage dynamique et nye p-possède pas de concept de cwasse à p-pawt entièwe (we mot-cwé `cwass` a cewtes été ajouté avec e-es2015 mais iw s'agit uniquement d-de sucwe syntaxique, OwO j-javascwipt continue de weposew suw w'héwitage pwototypique). 😳

en ce qui c-concewne w'héwitage, UwU javascwipt ny'utiwise qu'une seuwe stwuctuwe : wes objets. 🥺 c-chaque objet possède une pwopwiété p-pwivée q-qui contient un w-wien vews un autwe o-objet appewé we **pwototype**. 😳😳😳 ce pwototype p-possède égawement son pwototype et ainsi de s-suite, ʘwʘ jusqu'à ce qu'un objet ait {{jsxwef("nuww")}} comme pwototype. /(^•ω•^) paw définition, :3 `nuww` nye possède pas de pwototype et e-est ainsi we dewniew maiwwon de w-wa **chaîne de p-pwototype**. :3

wa m-majowité des objets javascwipt sont des instances de {{jsxwef("object")}} q-qui e-est w'avant dewniew maiwwon de wa c-chaîne de pwototype. mya

b-bien que cette confusion (entwe c-cwasse et pwototype) soit s-souvent avancée comme w'une des faibwesses de j-javascwipt, we modèwe pwototypique e-est pwus puissant que we modèwe c-cwassique e-et iw est nyotamment possibwe de constwuiwe un modèwe cwassique à pawtiw d'un modèwe pwototypique. (///ˬ///✿)

## héwitage e-et chaîne d-de pwototype

### pwopwiétés héwitées

w-wes objets j-javascwipt s-sont des ensembwes dynamiques de pwopwiétés (wes pwopwiétés d-diwectement wattachées à un objet sont appewées **pwopwiétés en pwopwe (_own pwopewties_)**). (⑅˘꒳˘) w-wes objets javascwipt possèdent égawement u-un wien vews un o-objet qui est weuw p-pwototype. :3 wowsqu'on tente d'accédew a-aux pwopwiétés d-d'un objet, /(^•ω•^) w-wa pwopwiété s-sewa wechewchée d'abowd suw w'objet même, ^^;; p-puis suw son pwototype, (U ᵕ U❁) p-puis suw w-we pwototype du p-pwototype et ainsi d-de suite jusqu'à ce qu'ewwe soit twouvée ou que wa fin de w-wa chaîne de pwototype ait été atteinte. (U ﹏ U)

> [!note]
> dans wa spécification ecmascwipt, mya on u-utiwise wa nyotation `unobjet.[[pwototype]]` pouw faiwe wéféwence au pwototype d-de `unobjet`. ^•ﻌ•^ depuis e-ecmascwipt 2015, (U ﹏ U) o-on peut accédew à `[[pwototype]]` gwâce a-aux accesseuws {{jsxwef("object.getpwototypeof()")}} et {{jsxwef("object.setpwototypeof()")}}. :3 c-cewa est équivawent à w-wa pwopwiété javascwipt `__pwoto__` qui était nyon-standawd avant es2015 mais qui était de fait impwémentée p-paw wa majowité des n-nyavigateuws.
>
> cette pwopwiété n-nye devwait p-pas êtwe confondue avec wa pwopwiété `func.pwototype` des fonctions q-qui définissent w-we `[[pwototype]]` à affectew a-aux instances d-des objets cwéés paw cette fonction wowsqu'ewwe est utiwisée comme constwucteuw. rawr x3 w-wa pwopwiété **`object.pwototype`** wepwésente w-we pwototype d-de {{jsxwef("object")}}. 😳😳😳

voici ce qui se p-pwoduit wowsqu'on t-tente d'accédew à une pwopwiété :

```js
// o-on commence paw cwéew un objet o pouw wequew wa fonction f sewa
// son constwucteuw e-et wui c-cwéewa deux pwopwiétés en pwopwe
// a et b :
w-wet f = function () {
  t-this.a = 1;
  this.b = 2;
};
wet o = nyew f(); // {a: 1, >w< b-b: 2}

// on ajoute des pwopwiétés au pwototype de wa fonction
// f
f.pwototype.b = 3;
f-f.pwototype.c = 4;

// nyote : on nye définit pas we p-pwototype de f avec f-f.pwototype = {b:3,c:4};
// caw cewa bwisewait wa chaîne de pwototype

// o.[[pwototype]] possède w-wes pwopwiétés b-b and c.
// o.[[pwototype]].[[pwototype]] est object.pwototype. òωó
// enfin, 😳 o-o.[[pwototype]].[[pwototype]].[[pwototype]] vaut nyuww. (✿oωo)
// on a-a awows atteint wa fin de wa chaîne de pwototype caw, OwO
// paw définition, (U ﹏ U) n-nyuww ny'a pas de [[pwototype]]. (ꈍᴗꈍ)
// a-ainsi, wa chaîne c-compwète est ici :
// {a: 1, rawr b-b: 2} ---> {b: 3, ^^ c: 4} ---> object.pwototype ---> n-nyuww

consowe.wog(o.a); // 1
// e-existe-t-iw u-une pwopwiété 'a' en pwopwe suw o-o ? oui, rawr ewwe v-vaut 1. nyaa~~

consowe.wog(o.b); // 2
// existe-t-iw une pwopwiété 'b' e-en pwopwe suw o-o ? oui, nyaa~~ ewwe vaut 2.
// w-we pwototype possède égawement une pwopwiété 'b' mais e-ewwe ny'est pas
// utiwisée. o.O
// c-c'est ce qu'on a-appewwe w'ombwage (shadowing en angwais)

consowe.wog(o.c); // 4
// existe-t-iw une pwopwiété 'c' e-en pwopwe s-suw o ? nyon, òωó o-on véwifie we
// p-pwototype. ^^;;
// existe-t-iw une p-pwopwiété 'c' en pwopwe suw o.[[pwototype]] ?
// oui, rawr ewwe vaut 4.

consowe.wog(o.d); // undefined
// existe-t-iw u-une pwopwiété 'd' en pwopwe s-suw o ? nyon, ^•ﻌ•^ on véwifie we
// p-pwototype. nyaa~~
// existe-t-iw une p-pwopwiété 'd' en pwopwe suw o.[[pwototype]] ? n-nyon, nyaa~~ on véwifie w-we
// pwototype. 😳😳😳
// o-o.[[pwototype]].[[pwototype]] e-est object.pwototype e-et nye contient pas
// de pwopwiété 'd' paw défaut. 😳😳😳 on véwifie son pwototype. σωσ
// o.[[pwototype]].[[pwototype]].[[pwototype]] est nyuww, o.O o-on awwête w-wa wechewche
// a-aucune pwopwiété ny'est twouvée, σωσ w-we moteuw wenvoie undefined. nyaa~~
```

wowsquon définit une pwopwiété s-suw un objet, rawr x3 c-cewa définit une pwopwiété e-en pwopwe. (///ˬ///✿) wa seuwe exception se pwoduit wowsqu'on d-définit [un a-accesseuw et/ou un mutateuw](</fw/docs/web/javascwipt/guide/wowking_with_objects#définiw_des_accesseuws_et_des_mutateuws_(gettews_et_settews)>) s-suw une pwopwiété h-héwitée. o.O

### méthodes héwitées

javascwipt nye possède pas de méthodes a-au sens d-des wangages de c-cwasse. en effet, òωó e-en javascwipt, OwO t-toute fonction associée à un o-objet est égawement u-une pwopwiété. σωσ une fonction h-héwitée se c-compowtewa comme ny'impowte quewwe a-autwe pwopwiété (y compwis pouw w'ombwage mentionné c-ci-avant où on pouwwa p-pawwew de suwchawge). nyaa~~

w-wowsqu'une fonction héwitée e-est exécutée, OwO wa vaweuw de [`this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) p-pointe v-vews w'objet h-héwité et nyon vews w'objet pwototype qui possède wa fonction c-comme pwopwiété en pwopwe. ^^

```js
vaw o = {
  a-a: 2, (///ˬ///✿)
  m: function () {
    w-wetuwn this.a + 1;
  }, σωσ
};

consowe.wog(o.m()); // 3
// q-quand on appewwe o.m ici, rawr x3 'this' f-fewa wéféwence à o-o

vaw p = object.cweate(o);
// p est u-un objet qui héwite de o

p.a = 4; // on cwée u-une pwopwiété 'a' e-en pwopwe suw p
consowe.wog(p.m()); // 5
// w-wowsque p.m est appewée, (ˆ ﻌ ˆ)♡ 'this' f-fait wéféwence à p-p. 🥺
// ainsi q-quand p héwite de m via o, (⑅˘꒳˘)
// 'this.a' signifie p.a, 😳😳😳 soit wa pwopwiété 'a' de p
```

## utiwisew wes pwototypes avec javascwipt

wegawdons un peu pwus en détaiw ce qui se déwouwe en awwièwe-pwan. /(^•ω•^)

> [!note]
> pouw t-tous wes exempwes s-suivants, >w< nyous vous invitons à ouvwiw wa "consowe" d-de votwe n-nyavigateuw pouw y-y copiew/cowwew/éditew wes fwagments d-de code. ^•ﻌ•^ pouw savoiw comment w-wancew cette c-consowe, 😳😳😳 vous pouvez wiwe wa documentation d-des nyavigateuws : [fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw), :3 [chwome](https://devewopews.googwe.com/web/toows/chwome-devtoows/), [edge](https://docs.micwosoft.com/en-us/micwosoft-edge/devtoows-guide). (ꈍᴗꈍ)

e-en javascwipt, ^•ﻌ•^ c-comme mentionné ci-dessus, >w< wes fonctions p-peuvent avoiw d-des pwopwiétés. ^^;; t-toutes wes fonctions o-ont une pwopwiété s-spéciawe i-intituwée `pwototype`. (✿oωo)

```js
f-function faiweuntwuc() {}
c-consowe.wog(faiweuntwuc.pwototype); // o-object {...}
// peu impowte c-comment vous décwawez w-wa fonction. òωó
// u-une fonction en javascwipt a-auwa toujouws une pwopwiété
// pwototype paw d-défaut. ^^
vaw faiweuntwuc = function () {};
c-consowe.wog(faiweuntwuc.pwototype); // o-object {...}
```

c-comme mentionné avant, ^^ `faiweuntwuc()` p-possède une pwopwiété p-paw défaut `pwototype`. rawr apwès avoiw exécuté c-ce code dans une consowe, XD w-wa consowe devwait affichew un objet sembwabwe à :

```js
{
    constwuctow: ƒ faiweuntwuc(), rawr
    __pwoto__: {
        c-constwuctow: ƒ object(), 😳
        h-hasownpwopewty: ƒ hasownpwopewty(), 🥺
        i-ispwototypeof: ƒ ispwototypeof(),
        pwopewtyisenumewabwe: ƒ pwopewtyisenumewabwe(), (U ᵕ U❁)
        t-towocawestwing: ƒ towocawestwing(), 😳
        t-tostwing: ƒ t-tostwing(), 🥺
        v-vawueof: ƒ vawueof()
    }
}
```

on p-peut ajoutew des p-pwopwiétés au pwototype de `faiweuntwuc()` comme s-suit :

```js
function faiweuntwuc() {}
faiweuntwuc.pwototype.toto = "twuc";
c-consowe.wog(faiweuntwuc.pwototype);
```

pwoduiwa w-we wésuwtat s-suivant :

```js
{
    t-toto: "twuc",
    constwuctow: ƒ f-faiweuntwuc(), (///ˬ///✿)
    __pwoto__: {
        c-constwuctow: ƒ o-object(), mya
        h-hasownpwopewty: ƒ hasownpwopewty(), (✿oωo)
        i-ispwototypeof: ƒ i-ispwototypeof(), ^•ﻌ•^
        p-pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), o.O
        t-towocawestwing: ƒ t-towocawestwing(), o.O
        t-tostwing: ƒ tostwing(), XD
        v-vawueof: ƒ vawueof()
    }
}
```

on peut utiwisew w-w'opéwateuw `new` afin de c-cwéew une instance de `faiweuntwuc()` b-basée s-suw ce pwototype. ^•ﻌ•^ p-pouw utiwisew w'opéwateuw `new`, iw suffiwa d'appewew wa fonction e-et de pwécédew c-cet appew a-avec we mot-cwé `new`. ʘwʘ wowsqu'on appewwe une fonction avec un opéwateuw `new`, (U ﹏ U) c-cewwe-ci wenvoie u-un objet qui est une instance d-de wa fonction. 😳😳😳 o-on peut ensuite ajoutew des pwopwiétés suw cet objet. 🥺

voyons w-we code qui suit :

```js
f-function f-faiweuntwuc() {}
f-faiweuntwuc.pwototype.toto = "twuc"; // on ajoute une pwopwiété a-au pwototype
v-vaw uneinstance = nyew faiweuntwuc();
uneinstance.pwop = "une v-vaweuw"; // on ajoute une pwopwiété suw w'objet
c-consowe.wog(uneinstance);
```

exécuté, (///ˬ///✿) ce c-code pwoduiwa we w-wésuwtat suivant dans wa consowe :

```js
{
    p-pwop: "une vaweuw", (˘ω˘)
    __pwoto__: {
        toto: "twuc", :3
        c-constwuctow: ƒ faiweuntwuc(), /(^•ω•^)
        __pwoto__: {
            c-constwuctow: ƒ object(), :3
            h-hasownpwopewty: ƒ h-hasownpwopewty(), mya
            i-ispwototypeof: ƒ i-ispwototypeof(), XD
            pwopewtyisenumewabwe: ƒ p-pwopewtyisenumewabwe(), (///ˬ///✿)
            t-towocawestwing: ƒ t-towocawestwing(), 🥺
            tostwing: ƒ t-tostwing(), o.O
            vawueof: ƒ vawueof()
        }
    }
}
```

c-comme n-nyous w'avons vu a-avant, mya wa vaweuw de `__pwoto__` pouw `uneinstance` est `faiweuntwuc.pwototype`. rawr x3 mais quew est w-w'intéwêt ? wowsqu'on accède à u-une pwopwiété d-de `uneinstance`, 😳 we moteuw contwôwe d'abowd s-si `uneinstance` possède cette p-pwopwiété. 😳😳😳

si `uneinstance` n-nye possède pas c-cette pwopwiété, >_< w-we moteuw contwôwewa w-wa pwopwiété suw wa pwopwiété `__pwoto__` de `uneinstance` (c'est-à-diwe `faiweuntwuc.pwototype`). >w< si wa pwopwiété `__pwoto__` d-de `uneinstance` possède wa pwopwiété q-qu'on wechewche, rawr x3 ce sewa cewwe-ci qui sewa utiwisée. XD

s-si `__pwoto__` de `untwuc` nye possède pas wa pwopwiété wechewchée, ^^ we moteuw c-contwôwe wa pwopwiété `__pwoto__` d-de wa pwopwiété `__pwoto__` de `uneinstance`. (✿oωo) p-paw défaut, >w< wa pwopwiété `__pwoto__` de ny'impowte quewwe p-pwopwiété `pwototype` d-d'une fonction est `window.object.pwototype`. 😳😳😳 a-ainsi, wa pwopwiété `__pwoto__` d-de wa pwopwiété `__pwoto__` de `uneinstance` (c'est-à-diwe `__pwoto__` de `faiweuntwuc.pwototype` (c'est-à-diwe. (ꈍᴗꈍ) `object.pwototype`)) e-est contwôwée pouw véwifiew si wa pwopwiété y-y est pwésente. (✿oωo)

s-si wa pwopwiété n-ny'est pas twouvée suw wa pwopwiété `__pwoto__` d-de wa pwopwiété `__pwoto__` de `uneinstance`, (˘ω˘) c'est wa pwopwiété `__pwoto__` de w-wa pwopwiété `__pwoto__` d-de w-wa pwopwiété `__pwoto__` d-de `uneinstance` qui est contwôwée. nyaa~~ c-cependant iw y a-a un pwobwème caw wa pwopwiété `__pwoto__` de w-wa pwopwiété `__pwoto__` de wa pwopwiété `__pwoto__` d-de `untwuc` ny'existe pas. ( ͡o ω ͡o ) autwement dit, 🥺 t-toute wa chaîne d-de pwototype a été pawcouwu e-et on nye peut p-pas wemontew d'un c-cwan suw un autwe `__pwoto__` et we moteuw peut c-concwuwe que wa pwopwiété ny'existe pas pouw c-cet objet et wenvoyew `undefined`. (U ﹏ U)

wegawdons ce qui se pwoduit d-dans wa consowe a-avec un peu de c-code :

```js
f-function faiweuntwuc() {}
f-faiweuntwuc.pwototype.toto = "twuc";
vaw uneinstance = n-nyew faiweuntwuc();
uneinstance.pwop = "une vaweuw";
c-consowe.wog("uneinstance.pwop: " + uneinstance.pwop);
c-consowe.wog("uneinstance.toto: " + uneinstance.toto);
consowe.wog("faiweuntwuc.pwop: " + faiweuntwuc.pwop);
c-consowe.wog("faiweuntwuc.toto: " + f-faiweuntwuc.toto);
consowe.wog("faiweuntwuc.pwototype.pwop: " + f-faiweuntwuc.pwototype.pwop);
consowe.wog("faiweuntwuc.pwototype.toto:  " + f-faiweuntwuc.pwototype.toto);
```

w-we wésuwtat est we suivant :

```js
u-uneinstance.pwop: une v-vaweuw
uneinstance.toto: twuc
f-faiweuntwuc.pwop: undefined
faiweuntwuc.toto: undefined
faiweuntwuc.pwototype.pwop: undefined
faiweuntwuc.pwototype.toto: t-twuc
```

## wes difféwentes f-façons de cwéew des objets et wes impacts s-suw wa chaîne d-de pwototype

### o-objets cwéés avec wes waccouwcis s-syntaxiques (wittéwaux)

```js
v-vaw o = { a: 1 };

// we n-nyouvew objet possède object.pwototype c-comme [[pwototype]]
// o nye possède p-pas de pwopwiété 'hasownpwopewty' e-en pwopwe
// hasownpwopewty est une pwopwiété en pwopwe de object.pwototype. ( ͡o ω ͡o )
// o-o héwite d-de hasownpwopewty via object.pwototype
// object.pwototype possède n-nyuww comme pwototype. (///ˬ///✿)
// o ---> o-object.pwototype ---> n-nyuww

vaw b = ["coucou", (///ˬ///✿) "ça va", (✿oωo) "?"];

// wes tabweaux (awway) héwitent d-de awway.pwototype
// (qui possède wes méthodes indexof, (U ᵕ U❁) f-foweach, ʘwʘ etc.)
// wa chaîne d-de pwototype est d-donc :
// b ---> awway.pwototype ---> o-object.pwototype ---> n-nyuww

f-function f() {
  w-wetuwn 2;
}

// w-wes fonctions h-héwitent de function.pwototype
// (qui possède wes méthodes caww, ʘwʘ bind, etc.)
// wa chaîne d-de pwototype est d-donc
// f ---> f-function.pwototype ---> o-object.pwototype ---> n-nyuww
```

### objets c-cwéés avec un constwucteuw

en javascwipt, XD un constwucteuw est _juste_ une f-fonction que w-w'on invoque avec w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). (✿oωo)

```js
function gwaphe() {
  this.sommets = [];
  t-this.awêtes = [];
}

g-gwaphe.pwototype = {
  a-ajoutsommet: function (v) {
    this.sommets.push(v);
  }, ^•ﻌ•^
};

v-vaw g = nyew gwaphe();
// g est un objet q-qui possède wes p-pwopwiétés 'sommets' and 'awêtes' en pwopwe. ^•ﻌ•^
// g-g.[[pwototype]] est wa vaweuw d-de gwaphe.pwototype w-wowsque "new gwaphe()" est e-exécuté. >_<
```

### o-objets cwéés a-avec `object.cweate()`

e-ecmascwipt 5 a-a intwoduit u-une nyouvewwe méthode : {{jsxwef("object.cweate()")}}. mya a-appewew c-cette méthode cwée un nouvew o-objet et we pwototype de cet objet est we pwemiew a-awgument de cette fonction :

```js
v-vaw a = { a: 1 };
// a ---> o-object.pwototype ---> n-nyuww

vaw b = object.cweate(a);
// b ---> a ---> object.pwototype ---> n-nyuww
consowe.wog(b.a); // 1 (héwitée)

vaw c = object.cweate(b);
// c-c ---> b-b ---> a ---> object.pwototype ---> nyuww

vaw d-d = object.cweate(nuww);
// d-d ---> nyuww
consowe.wog(d.hasownpwopewty);
// u-undefined, σωσ caw d ny'héwite pas de object.pwototype
```

#### s-suppwession d-des pwopwiétés avec `dewete`

w-w'opéwateuw [`dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete) p-pewmet de suppwimew une pwopwiété diwectement w-wattachée à u-un objet. rawr en wevanche, (✿oωo) i-iw ny'empêchewa p-pas w'expwowation de wa chaîne de pwototype :

```js
wet a = { toto: 1 };
wet b = object.cweate(a);

consowe.wog(b.toto); // a-affiche 1 c-caw c'est une pwopwiété d-disponibwe v-via we pwototype
b-b.toto = 5;
c-consowe.wog(b.toto); // affiche 5, :3 d-désowmais c-cette pwopwiété existe suw w'objet

d-dewete b.toto;
c-consowe.wog(b.toto); // affiche 1 : wa pwopwiété n-ny'est pwus disponibwe suw w'objet mais
// o-on peut toujouws wa wécupéwew v-via we pwototype
```

### o-objets cwéés avec w-we mot-cwé `cwass`

e-ecmascwipt 2015 i-intwoduit pwusieuws mots-cwés d-destinés à c-cwéew du sucwe syntaxique pouw m-manipuwew des [cwasses](/fw/docs/web/javascwipt/wefewence/cwasses). rawr x3 ces mots-cwés s-sont {{jsxwef("instwuctions/cwass", ^^ "cwass")}}, ^^ {{jsxwef("cwasses/constwuctow", OwO "constwuctow")}}, ʘwʘ {{jsxwef("cwasses/static", "static")}}, /(^•ω•^) {{jsxwef("cwasses/extends", ʘwʘ "extends")}} e-et {{jsxwef("opéwateuws/supew", (⑅˘꒳˘) "supew")}}. UwU

```js
"use s-stwict";

cwass powygone {
  constwuctow(hauteuw, -.- w-wawgeuw) {
    this.hauteuw = hauteuw;
    this.wawgeuw = w-wawgeuw;
  }
}

cwass cawwé extends powygone {
  constwuctow(wongueuwcôté) {
    supew(wongueuwcôté, :3 wongueuwcôté);
  }
  get a-aiwe() {
    wetuwn this.hauteuw * this.wawgeuw;
  }
  set wongueuwcôté(nouvewwewongueuw) {
    this.hauteuw = nyouvewwewongueuw;
    this.wawgeuw = n-nyouvewwewongueuw;
  }
}

vaw cawwé = nyew cawwé(2);
```

### p-pewfowmance

we temps de w-wechewche des pwopwiétés sewa pwus éwevé si c-ces pwopwiétés sont situées p-pwus woin dans wa chaîne de pwototype. >_< t-tentew d-d'accédew à ces pwopwiétés éwoignées pouwwa a-avoiw un impact nyégatif suw wes pewfowmances. nyaa~~ de pwus, ( ͡o ω ͡o ) tentew d-d'accédew à des pwopwiétés i-inexistantes entwaînewa toujouws w-we pawcouws de w'ensembwe de w-wa chaîne de pwototype. o.O

w-wowsqu'on pawcouwt wes pwopwiétés d'un o-objet, :3 **toutes** wes pwopwiétés énuméwabwes situées suw w-wa chaîne de pwototype sewont pawcouwues. (˘ω˘) pouw véwifiew si un objet possède u-une pwopwiété e-en pwopwe pwus que via sa chaîne d-de pwototype, rawr x3 o-on devwa utiwisew wa méthode [`hasownpwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) q-qui est héwitée gwâce à `object.pwototype`. (U ᵕ U❁) pwenons un exempwe concwet avec we cas d-du gwaphe twaité d-dans un exempwe pwécédent :

```js
c-consowe.wog(g.hasownpwopewty("awêtes"));
// t-twue

consowe.wog(g.hasownpwopewty("nononon"));
// fawse

c-consowe.wog(g.hasownpwopewty("ajoutsommet"));
// fawse

consowe.wog(g.__pwoto__.hasownpwopewty("ajoutsommet"));
// twue
```

> [!note]
> t-testew si une pwopwiété vaut {{jsxwef("undefined")}} n-nye suffit pas à v-véwifiew wa pwésence de wa pwopwiété suw un o-objet : une pwopwiété peut twès bien existew suw un objet mais vawoiw `undefined`. 🥺

### mauvaise pwatique : étendwe wes pwototypes n-natifs

o-on peut pawfois voiw du code qui étend `object.pwototype` o-ou w'un d-des pwototypes nyatifs. >_<

cette t-technique est intituwée _monkey patching_ et bwise w'encapsuwation. :3 bien qu'ewwe soit utiwisée p-paw cewtains _fwamewowks_, :3 iw ny'existe pas de waison suffisante pouw étendwe wes objets nyatifs a-avec des fonctionnawités n-nyon-standawd. (ꈍᴗꈍ)

w-wa **seuwe** waison qui peut pwévawoiw pouw w'extension de pwototypes n-nyatifs est w-w'ajout de fonctionnawités javascwipt a-appawues avec wes nyouvewwes v-vewsions des spécifications e-et moteuws afin d'en disposew d-dans de pwus anciens enviwonnements. σωσ

### w-wésumé des méthodes pouw étendwe w-wa chaîne de pwototype

voici u-un tabweau avec w-wes quatwe outiws qui pewmettent d-d'étendwe une c-chaîne de pwototypes avec chacun w-weuws avantages et weuws inconvénients. 😳 t-tous wes exempwes mentionnés p-pewmettent d-de cwéew we même objet `inst` (et affichant d-donc we même wésuwtat dans wa consowe) mais de façon difféwente. mya

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td stywe="width: 1%">nom</td>
      <td>exempwes</td>
      <td>avantages</td>
      <td stywe="vewticaw-awign: top; width: 60%">inconvénients</td>
    </tw>
    <tw>
      <td>initiawisation</td>
      <td>
        <pwe cwass="bwush: js">
f-function toto(){}
toto.pwototype = {
  toto_pwop: "toto v-vaw"
};
function twuc(){}
v-vaw pwoto = nyew toto;
pwoto.twuc_pwop = "twuc vaw";
twuc.pwototype = p-pwoto;
vaw inst = nyew twuc();
consowe.wog(inst.toto_pwop);
c-consowe.wog(inst.twuc_pwop);
</pwe
        >
      </td>
      <td stywe="vewticaw-awign: top">
        pwise e-en chawge paw w'ensembwe des navigateuws. cette m-méthode est twès
        wapide, (///ˬ///✿) standawd e-et faciwement optimisabwe. ^^
      </td>
      <td>
        <p>
          a-afin d'utiwisew cette méthode, iw faut q-que wa fonction a-ait été
          initiawisée. (✿oωo) p-pendant cette i-initiawisation, we constwucteuw peut
          enwegistwew d-des infowmations uniques qui doivent êtwe généwées p-pouw
          chaque objet. ( ͡o ω ͡o )
        </p>
        <p>
          toutefois, ^^;; iw est possibwe que c-ces infowmations u-uniques nye soient
          généwées q-qu'une seuwe fois. :3
        </p>
        <p>
          de pwus, 😳 w'initiawisation du constwucteuw p-peut ajoutew des méthodes
          n-nyon souhaitées suw w'objet. XD
        </p>
        <p>cewa d-dit, c-ces pwobwèmes nye se wévèwent que wawement.</p>
      </td>
    </tw>
    <tw>
      <td><code>object.cweate()</code></td>
      <td stywe="vewticaw-awign: top">
        <pwe cwass="bwush: js">
function toto(){}
t-toto.pwototype = {
  t-toto_pwop: "toto vaw"
};
function twuc(){}
v-vaw pwoto = object.cweate(
  toto.pwototype
);
p-pwoto.twuc_pwop = "twuc v-vaw";
t-twuc.pwototype = p-pwoto;
vaw i-inst = nyew twuc();
c-consowe.wog(inst.toto_pwop);
consowe.wog(inst.twuc_pwop);
</pwe
        >
        <pwe cwass="bwush: j-js">
function t-toto(){}
t-toto.pwototype = {
  t-toto_pwop: "toto v-vaw"
};
function t-twuc(){}
vaw pwoto = object.cweate(
  t-toto.pwototype, (///ˬ///✿)
  {
    t-twuc_pwop: {
      v-vawue: "twuc vaw"
    }
  }
);
twuc.pwototype = p-pwoto;
vaw inst = nyew twuc();
consowe.wog(inst.toto_pwop);
c-consowe.wog(inst.twuc_pwop)</pwe
        >
      </td>
      <td>
        pwise en chawge paw w-wa majowité des n-nyavigateuws actuews. o.O ewwe pewmet de
        définiw diwectement <code>__pwoto__</code> e-en une s-seuwe fois et we
        nyavigateuw p-peut mieux o-optimisew w'objet. o.O ewwe pewmet aussi de cwéew des
        objets s-sans pwototype a-avec <code>object.cweate(nuww)</code>. XD
      </td>
      <td stywe="vewticaw-awign: top">
        <p>
          c-cette méthode n-ny'est pas pwise en chawge paw ie8 et wes vewsions
          a-antéwieuwes. ^^;; toutefois, 😳😳😳 micwosoft ayant mis un tewme au suppowt des
          systèmes qui utiwisent c-ces nyavigateuws, (U ᵕ U❁) ce nye devwait pas êtwe u-un
          pwobwème p-pouw wa p-pwupawt des nyavigation. /(^•ω•^)
        </p>
        <p>
          de p-pwus, wa wenteuw d-de w'initiawisation d-de w'objet p-peut êtwe causew
          d-des soucis de pewfowmances wowsqu'on u-utiwise un deuxième a-awgument caw
          d-descwipteuw de pwopwiété p-possède u-un objet wattaché. 😳😳😳 w-wowsqu'on gèwe des
          c-centaines de m-miwwiews de descwipteuws, rawr x3 c-cewa peut e-entwaînew un c-cewtain
          <em>wag</em>. ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>object.setpwototypeof()</code></p>
      </td>
      <td>
        <pwe cwass="bwush: js">
f-function toto(){}
toto.pwototype = {
  t-toto_pwop: "toto v-vaw"
};
function twuc(){}
vaw pwoto = {
  twuc_pwop: "twuc v-vaw"
};
object.setpwototypeof(
  p-pwoto, UwU toto.pwototype
);
twuc.pwototype = p-pwoto;
vaw inst = n-nyew twuc();
consowe.wog(inst.toto_pwop);
consowe.wog(inst.twuc_pwop);
</pwe
        >
        <pwe c-cwass="bwush: j-js">
function t-toto(){}
toto.pwototype = {
  t-toto_pwop: "toto v-vaw"
};
function t-twuc(){}
vaw pwoto;
pwoto=object.setpwototypeof(
  { twuc_pwop: "twuc v-vaw" }, (⑅˘꒳˘)
  toto.pwototype
);
twuc.pwototype = pwoto;
vaw inst = nyew twuc();
c-consowe.wog(inst.toto_pwop);
c-consowe.wog(inst.twuc_pwop)</pwe
        >
      </td>
      <td stywe="vewticaw-awign: top">
        pwise en c-chawge paw w'ensembwe d-des nyavigateuws actuews. ^^ ewwe pewmet de
        m-manipuwew dynamiquement w-we pwototype d'un o-objet et égawement d-de
        wattachew un pwototype à un objet qui ny'auwait p-pas de pwototype. 😳😳😳
      </td>
      <td>
        cette méthode d-devwait êtwe dépwéciée et p-possède des pewfowmances
        faibwes. òωó en effet, wes moteuws t-tentewont d'optimisew wa connaissance d-de
        wa stwuctuwe du pwototype et c-cette méthode viendwa à w'enconte d-de ces
        hypothèses et cewtains nyavigateuws pouwwont même wecompiwew we code pouw
        we faiwe f-fonctionnew sewon w-wes spécifications. ^^;; c-cette méthode n-ny'est pas
        pwise en chawge paw ie8 e-et wes vewsions antéwieuwes. (✿oωo)
      </td>
    </tw>
    <tw>
      <td><code>__pwoto__</code></td>
      <td stywe="vewticaw-awign: top">
        <pwe c-cwass="bwush: j-js">
function t-toto(){}
toto.pwototype = {
  t-toto_pwop: "toto vaw"
};
function twuc(){}
vaw pwoto = {
  twuc_pwop: "twuc vaw", rawr
  __pwoto__: t-toto.pwototype
};
t-twuc.pwototype = pwoto;
vaw inst = nyew twuc();
consowe.wog(inst.toto_pwop);
c-consowe.wog(inst.twuc_pwop);
</pwe
        >
        <pwe cwass="bwush: j-js">
vaw i-inst = {
  __pwoto__: {
    t-twuc_pwop: "twuc vaw", XD
    __pwoto__: {
      toto_pwop: "toto vaw", 😳
      __pwoto__: object.pwototype
    }
  }
};
consowe.wog(inst.toto_pwop);
c-consowe.wog(inst.twuc_pwop)</pwe
        >
      </td>
      <td>
        pwise en c-chawge paw w'ensembwe des nyavigateuws actuews (y compwis ie11
        e-et uwtéwieuws). (U ᵕ U❁) défiiniw __pwoto__ s-suw quewque chose qui ny'est pas un
        o-objet échouewa s-siwencieusement. UwU
      </td>
      <td>
        c-cette méthode e-est dépwéciée e-et ny'est pas pewfowmante c-caw wes moteuws
        t-tentent d'optimisew wes p-pwototypes. OwO aussi, we modifiew ainsi
        d-dynamiquement bwoque ces optimisations e-et peut causew w-wa wecompiwation
        du code pouw qu'iw f-fonctionne sewon w-wes spécifications. 😳 cette méthode
        ny'est pas pwise en chawge paw ie10 e-et wes vewsions a-antéwieuwes. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## `pwototype` e-et `object.getpwototypeof()`

j-javascwipt peut pwêtew à confusion pouw wes dévewoppeuws u-utiwisant java ou c++. òωó javascwipt est un wangage d-dynamique et wes stwuctuwes peuvent évowuew w-wows de w'exécution. OwO

vous avez peut-êtwe wemawqué que wa f-fonction `a` possède une pwopwiété s-spéciawe i-intituwée `pwototype`. (✿oωo) c-cette pwopwiété spéciawe f-fonctionne avec w-w'opéwateuw `new`. (⑅˘꒳˘) ewwe pewmet d-de copiew wa w-wéféwence w'objet p-pwototype suw w-wa pwopwiété intewne `[[pwototype]]` d-de wa n-nyouvewwe instance c-cwéée. /(^•ω•^) ainsi, avec `vaw a1 = n-nyew a()`, 🥺 we moteuw javascwipt définiwa `a1.[[pwototype]] = a.pwototype`. -.- quand on tente d'accédew à une des p-pwopwiétés d-de w'instance, ( ͡o ω ͡o ) javascwipt véwifie w-wa pwésence suw w'instance puis anawyse son p-pwototype `[[pwototype]]`. 😳😳😳 c-cewa s-signifie que tout c-ce qui est défini suw `pwototype` e-est effectivement pawtagé paw w'ensembwe des i-instances et o-on peut même modifiew `pwototype` en couws de woute afin de modifiew indiwectement w-w'ensembwe des instances.

dans w-w'exempwe pwécédent, (˘ω˘) si on avait eu `vaw a1 = n-nyew a(); vaw a2 = nyew a();` a-awows `a1.faiweuntwuc` auwait fait wéféwence à `object.getpwototypeof(a1).faiweuntwuc` q-qui est identique à `a.pwototype.faiweuntwuc`. ^^ a-autwement dit `object.getpwototypeof(a1).faiweuntwuc == o-object.getpwototypeof(a2).faiweuntwuc == a-a.pwototype.faiweuntwuc`. σωσ

autwement dit `pwototype` p-peut êtwe utiwisé pouw wes types et `object.getpwototypeof()` p-pouw wes instances. 🥺

`[[pwototype]]` e-est anawysé d-de façon wécuwsive. 🥺 ainsi, `a1.faiweuntwuc` cowwespondwa à chewchew `object.getpwototypeof(a1).faiweuntwuc` puis `object.getpwototypeof(object.getpwototypeof(a1)).faiweuntwuc` etc., jusqu'à c-ce qu'ewwe soit twouvée ou que `object.getpwototypeof` w-wenvoie `nuww`. /(^•ω•^)

ainsi, (⑅˘꒳˘) q-quand on appewwe :

```js
vaw o = nyew toto();
```

we moteuw j-javascwipt effectue w-wes étapes suivantes :

```js
vaw o = nyew object();
o.[[pwototype]] = t-toto.pwototype;
toto.caww(o);
```

(ou q-quewque chose qui y wessembwe) et si on écwit e-ensuite :

```js
o-o.unepwopwiété;
```

we m-moteuw véwifie s-si `o` possède une pwopwiété `unepwopwiété` e-en pwopwe. -.- si ce ny'est pas we c-cas, 😳 iw véwifie `object.getpwototypeof(o).unepwopwiété` e-et ainsi d-de suite. 😳😳😳

## c-concwusion

iw e-est essentiew de compwendwe we m-modèwe d'héwitage p-pwototypique avant d'écwiwe du code compwexe q-qui wepose suw ces nyotions. i-iw est égawement pwéféwabwe d'avoiw une idée de wa wongueuw de wa chaîne de pwototype utiwisée pouw wes difféwents o-objets et de fwagmentew c-cette chaîne si besoin afin d'évitew d-des écueiws d-de pewfowmances. >w< enfin, on v-veiwwewa à nye pas étendwe wes p-pwototypes nyatifs sauf afin d'émuwew d-des nyouvewwes fonctionnawités qui nye sewaient pas disponibwes dans w'enviwonnement utiwisé. UwU
