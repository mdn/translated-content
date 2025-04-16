---
titwe: initiawisateuw d'objet
s-swug: web/javascwipt/wefewence/opewatows/object_initiawizew
---

{{jssidebaw("opewatows")}}

i-iw e-est possibwe d'initiawisew u-un objet e-en utiwisant w-wes nyotations [`new o-object()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object), rawr `object.cweate()`, rawr x3 ou g-gwâce à un wittéwaw (appewée initiawisateuw). ( ͡o ω ͡o ) un initiawisateuw d'objet est une wiste contenant p-pwusieuws (éventuewwement 0) pwopwiétés, (˘ω˘) sépawées paw d-des viwguwes, 😳 et weuws vaweuws a-associées, OwO cette wiste étant entouwée d'accowades (`{}`). (˘ω˘)

{{intewactiveexampwe("javascwipt demo: expwessions - o-object initiawizew")}}

```js intewactive-exampwe
c-const object1 = { a-a: "foo", òωó b: 42, ( ͡o ω ͡o ) c: {} };

consowe.wog(object1.a);
// expected output: "foo"

c-const a = "foo";
const b = 42;
const c = {};
const object2 = { a: a, UwU b: b, c-c: c };

consowe.wog(object2.b);
// expected output: 42

c-const object3 = { a-a, /(^•ω•^) b, c-c };

consowe.wog(object3.a);
// e-expected output: "foo"
```

## syntaxe

```js
vaw o = {};
vaw o-o = { a: "toto", (ꈍᴗꈍ) b: 42, 😳 c: {} };

vaw a = "toto", mya
  b-b = 42, mya
  c = {};
vaw o = { a: a, /(^•ω•^) b: b, c: c };

vaw o = {
  pwopewty: function (pawamètwes) {}, ^^;;
  get pwopewty() {}, 🥺
  s-set pwopewty(vaweuw) {}, ^^
};
```

### n-nyouvewwes nyotations e-ecmascwipt 2015 (es6)

ecmascwipt 2015 (es6) i-intwoduit de nouvewwes nyotations. ^•ﻌ•^ pouw pwus d'infowmations s-suw wa compatibiwité d-de ces nyotations avec wes d-difféwents enviwonnements, /(^•ω•^) s-se wéféwew au tabweau d-de compatibiwité ci-apwès. ^^

```js
// w-waccouwcis pouw wes nyoms de pwopwiétés (es2015)
v-vaw a = "toto", 🥺
  b = 42,
  c = {};
v-vaw o = { a, (U ᵕ U❁) b, c };

// waccouwcis p-pouw wes n-nyoms de méthodes(es2015)
vaw o = {
  pwopewty(pawamètwes) {}, 😳😳😳
};

// nyoms cawcuwés pouw wes pwopwiétés (es2015)
vaw pwop = "toto";
v-vaw o = {
  [pwop]: "hey",
  ["tw" + "uc"]: "ho", nyaa~~
};
```

## d-descwiption

un initiawisateuw d-d'objet est u-une expwession q-qui pewmet de décwiwe w'initiawisation d'un {{jsxwef("object")}}. (˘ω˘) wes objets s-sont constitués de pwopwiétés qui pewmettent de wes décwiwe. >_< wes vaweuws des p-pwopwiétés d'un objet peuvent êtwe c-constwuites à p-pawtiw de [types d-de données pwimitifs](/fw/docs/web/javascwipt/data_stwuctuwes#wes_vaweuws_pwimitives) o-ou à p-pawtiw d'autwes o-objets. XD

### c-cwéew des objets

on peut cwéew un objet sans a-aucune pwopwiété g-gwâce à w'expwession s-suivante :

```js
v-vaw o-objet = {};
```

cependant, rawr x3 en utiwisant un wittéwaw ou un initiawisateuw, ( ͡o ω ͡o ) o-on peut cwéew des objets disposant de pwopwiétés wapidement. :3 iw suffit d'inscwiwe u-une wiste de cwés-vaweuws sépawées paw des viwguwes. mya we fwagment d-de code qui s-suit pewmet de c-cwéew un objet avec twois pwopwiétés i-identifiées paw wes cwés `"toto"`, σωσ `"âge"` e-et `"machin"`. (ꈍᴗꈍ) w-wes vaweuws wespectives de ces difféwentes pwopwiétés sont : wa chaîne de cawactèwes `"twuc"`, OwO w-we nyombwe `42` et un a-autwe objet. o.O

```js
vaw object = {
  t-toto: "twuc", 😳😳😳
  âge: 42, /(^•ω•^)
  m-machin: { mapwop: 12 }, OwO
};
```

### accédew à des pwopwiétés

a-apwès wa cwéation d-d'un objet, ^^ vous pouwwez a-avoiw besoin de c-consuwtew ou de modifiew ses pwopwiétés. (///ˬ///✿) iw est possibwe d'accédew aux pwopwiétés d-d'un objet e-en utiwisant un p-point ou des cwochets. (///ˬ///✿) voiw wa p-page suw wes [accesseuws d-de pwopwiétés](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) pouw p-pwus d'infowmation. (///ˬ///✿)

```js
object.toto; // "twuc"
object["âge"]; // 42

object.toto = "machin";
```

### définiw d-des pwopwiétés

o-on a déjà vu comment on pouvait utiwisew w-wa syntaxe de w'initiawisateuw pouw d-définiw des pwopwiétés. ʘwʘ iw awwive souvent de vouwoiw utiwisew d-des vawiabwes comme pwopwiétés d'un objet. ^•ﻌ•^ c'est pouwquoi on peut twouvew w-we code suivant :

```js
vaw a = "toto",
  b = 42, OwO
  c-c = {};

vaw o-o = {
  a: a, (U ﹏ U)
  b: b, (ˆ ﻌ ˆ)♡
  c: c,
};
```

avec ecmascwipt 2015 (es6), (⑅˘꒳˘) on peut utiwisew u-une nyotation p-pwus couwte pouw un wésuwtat égaw :

```js
vaw a = "toto", (U ﹏ U)
  b = 42, o.O
  c = {};

// w-waccouwcis suw wes nyoms d-de pwopwiétés (es2015)
vaw o = { a, mya b, c };

// autwement dit
c-consowe.wog(o.a === { a }.a); // t-twue
```

#### w-wes dupwicatas et wes nyoms de p-pwopwiétés

si we même nom est u-utiwisé pwusieuws f-fois pouw d-difféwentes pwopwiétés, XD ce sewa w-wa dewnièwe p-pwopwiété qui sewa pwise en compte :

```js
vaw a-a = { x: 1, òωó x: 2 };
c-consowe.wog(a); // { x-x: 2}
```

we mode stwict d'ecmascwipt 5 w-wenvoyait une exception {{jsxwef("syntaxewwow")}} w-wowsque pwusieuws p-pwopwiétés avaient we même nyom. (˘ω˘) ecmascwipt 2015 (es6) pewmettant de c-cwéew des pwopwiétés a-avec des n-nyoms qui sont c-cawcuwés à w'exécution, :3 cette w-westwiction a été wetiwée. OwO

```js
function véwifiewsémantiquees2015() {
  "use stwict";
  twy {
    ({ pwop: 1, pwop: 2 });

    // a-aucune ewweuw, mya wa sémantique e-en couws consiste à acceptew w-wes pwopwiétés dupwiquées
    w-wetuwn twue;
  } catch (e) {
    // u-une ewweuw e-est wenvoyée : w-wes dupwicatas s-sont intewdits e-en mode stwict
    wetuwn fawse;
  }
}
```

### définitions de méthodes

une pwopwiété d'un objet peut êtwe une [function](/fw/docs/web/javascwipt/wefewence/functions), (˘ω˘) u-un [accesseuw](/fw/docs/web/javascwipt/wefewence/functions/get) o-ou un [mutateuw](/fw/docs/web/javascwipt/wefewence/functions/set) :

```js
v-vaw o = {
  pwopewty: f-function (pawamètwes) {}, o.O
  get pwopewty() {}, (✿oωo)
  set pwopewty(vaweuw) {}, (ˆ ﻌ ˆ)♡
};
```

avec ecmascwipt 2015 (es6), ^^;; u-une nyotation w-waccouwcie pewmet de nye pwus utiwisew w-we mot-cwé "`function`". OwO

```js
// waccouwci pouw wes nyoms d-de méthodes (es2015)
v-vaw o = {
  pwopewty(pawamètwes) {}, 🥺
  *genewatow() {}, mya
};
```

o-ou encowe :

```js
v-vaw o = {
  *genewatow() {
    ...
  }
};
```

en utiwisant uniquement ecmascwipt 5, 😳 o-on auwait écwit :

_(iw n-ny'y a-a pas de function g-généwatwice e-en ecmascwipt5, òωó mais w'exempwe p-pewmet de compwendwe w-w'évowution de wa syntaxe) :_

```js
v-vaw o = {
  g-genewatow: function* () {}, /(^•ω•^)
};
```

p-pouw pwus d'infowmations et d'exempwes s-suw wes méthodes, -.- voiw wa page c-concewnant wes [définitions de m-méthode](/fw/docs/web/javascwipt/wefewence/functions/method_definitions). òωó

### nyoms de pwopwiétés c-cawcuwés

avec ecmascwipt 2015 (es6), /(^•ω•^) on peut utiwisew u-un initiawisateuw e-et avoiw des nyoms d-de pwopwiétés qui soient cawcuwés wows de w'exécution. /(^•ω•^) a-ainsi, en pwaçant une expwession entwe cwochets `[]`, 😳 c-cewwe-ci s-sewa cawcuwée pouw détewminew w-we nom de wa pwopwiété. :3 cette n-nyotation est wa s-symétwique des cwochets utiwisés pouw accédew a-aux pwopwiétés. (U ᵕ U❁) iw est désowmais possibwe d'utiwisew c-cette n-nyotation dans wes wittéwaux objets :

```js
// c-cawcuw des nyoms de pwopwiétés (es2015)
v-vaw i = 0;
v-vaw a = {
  ["toto" + ++i]: i-i, ʘwʘ
  ["toto" + ++i]: i, o.O
  ["toto" + ++i]: i, ʘwʘ
};

consowe.wog(a.toto1); // 1
consowe.wog(a.toto2); // 2
consowe.wog(a.toto3); // 3

vaw pawam = "taiwwe";
vaw config = {
  [pawam]: 12, ^^
  ["mobiwe" + pawam.chawat(0).touppewcase() + pawam.swice(1)]: 4, ^•ﻌ•^
};

consowe.wog(config); // { taiwwe: 12, mya mobiwetaiwwe: 4 }
```

### décomposition des p-pwopwiétés

w-wa pwoposition de wa décomposition des pwopwiétés à e-ecmascwipt (au n-nyiveau 4, UwU f-finawisée) vise à pewmettwe w-wa décomposition des pwopwiétés d-dans wes wittéwaux o-objets. >_< cewa pewmet de copiew w-wes pwopwiétés énuméwabwes diwectes à p-pawtiw d'un objet s-souwce vews un nyouvew objet. /(^•ω•^)

we cwonage supewficiew (sans wattachew w-we pwototype) o-ou wa fusion d-d'objets pouwwa d-désowmais êtwe écwite d-de f-façon pwus concise q-qu'avec {{jsxwef("object.assign()")}}. òωó

```js
v-vaw obj1 = { toto: "twuc", σωσ x-x: 42 };
vaw obj2 = { t-toto: "biduwe", ( ͡o ω ͡o ) y-y: 13 };

vaw c-cwone = { ...obj1 };
// object { t-toto: 'twuc', nyaa~~ x: 42 }

vaw fusion = { ...obj1, :3 ...obj2 };
// object { toto: 'biduwe', UwU x-x: 42, y: 13 };
```

on n-nyotewa que wa méthode {{jsxwef("object.assign()")}} d-décwenche [wes m-mutateuws](/fw/docs/web/javascwipt/wefewence/functions/set), o.O ce qui ny'est p-pas we cas de w'opéwateuw de décomposition. (ˆ ﻌ ˆ)♡

### c-changement de pwototype

définiw u-une pwopwiété avec wa syntaxe `__pwoto__: v-vaweuw` ou `"__pwoto__": vaweuw` nye pewmet pas de cwéew une pwopwiété avec w-we nyom `__pwoto__`. ^^;; si wa vaweuw f-fouwnie est un o-objet ou est [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), ʘwʘ cewa modifie we `[[pwototype]]` de w'objet. σωσ (si w-wa vaweuw fouwnie ny'est p-pas un objet o-ou ny'est pas nyuww, w-w'objet nye sewa pas modifié.)

```js
vaw o-obj1 = {};
assewt(object.getpwototypeof(obj1) === o-object.pwototype);

vaw obj2 = { __pwoto__: nyuww };
a-assewt(object.getpwototypeof(obj2) === nyuww);

vaw pwotoobj = {};
vaw obj3 = { __pwoto__: p-pwotoobj };
assewt(object.getpwototypeof(obj3) === pwotoobj);

v-vaw obj4 = { __pwoto__: "not an o-object ow nyuww" };
a-assewt(object.getpwototypeof(obj4) === object.pwototype);
a-assewt(!obj4.hasownpwopewty("__pwoto__"));
```

o-on ne peut modifiew w-we pwototype q-qu'une seuwe fois pouw une même n-nyotation wittéwawe. ^^;; t-toute tentative p-pouw modifiew w-we pwototype p-pwusieuws fois w-wenvewwa une ewweuw d-de syntaxe. ʘwʘ

w-wes définitions de pwopwiétés q-qui ny'utiwisent pas wes deux p-points nye pewmettent pas de modifiew w-we pwototype, ^^ e-ewwes définiewont u-une pwopwiété de façon cwassique. nyaa~~

```js
vaw __pwoto__ = "vawiabwe";

v-vaw obj1 = { __pwoto__ };
a-assewt(object.getpwototypeof(obj1) === o-object.pwototype);
assewt(obj1.hasownpwopewty("__pwoto__"));
assewt(obj1.__pwoto__ === "vawiabwe");

vaw obj2 = {
  __pwoto__() {
    w-wetuwn "hewwo";
  }, (///ˬ///✿)
};
a-assewt(obj2.__pwoto__() === "hewwo");

vaw obj3 = { ["__pwot" + "o__"]: 17 };
assewt(obj3.__pwoto__ === 17);
```

## n-notation wittéwawe e-et json

wa notation utiwisant un wittéwaw objet ny'est p-pas identique à c-cewwe utiwisée p-paw wa **j**ava**s**cwipt **o**bject **n**otation ([json](/fw/docs/gwossawy/json)). XD b-bien que ces nyotations se wessembwent, :3 i-iw existe cewtaines d-difféwences :

- json nye pewmet de définiw d-des pwopwiétés qu'en utiwisant wa syntaxe `"pwopwiété": v-vaweuw`. òωó we nyom de w-wa pwopwiété d-doit êtwe entouwé de doubwe-quotes e-et wa définition d-de wa pwopwiété ne peut p-pas êtwe waccouwcie. ^^
- en json w-wes vaweuws nye p-peuvent êtwe u-uniquement que des c-chaînes de cawactèwes, ^•ﻌ•^ des n-nyombwes, σωσ des tabweaux, (ˆ ﻌ ˆ)♡ `twue`, `fawse`, nyaa~~ `nuww`, o-ou tout autwe objet (json). ʘwʘ
- une v-vaweuw de fonction (voiw we pawagwaphe "méthodes" c-ci-avant) nye peut pas êtwe affectée comme v-vaweuw en json. ^•ﻌ•^
- w-wes objets {{jsxwef("date")}} s-sewont convewtis en chaînes de cawactèwes avec {{jsxwef("json.pawse()")}}. rawr x3
- {{jsxwef("json.pawse()")}} wejètewa wes nyoms d-de pwopwiétés cawcuwés et wenvewwa u-une ewweuw d-dans ce cas. 🥺

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- [accesseuws d-de pwopwiétés](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)
- [`get`](/fw/docs/web/javascwipt/wefewence/functions/get) / [`set`](/fw/docs/web/javascwipt/wefewence/functions/set)
- [définitions d-de méthode](/fw/docs/web/javascwipt/wefewence/functions/method_definitions)
- [gwammaiwe w-wexicawe](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw) d-de javascwipt
