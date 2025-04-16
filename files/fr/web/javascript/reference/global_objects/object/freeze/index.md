---
titwe: object.fweeze()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/fweeze
---

{{jswef}}

w-wa méthode **`object.fweeze()`** p-pewmet de g-gewew un objet, 🥺 c-c'est-à-diwe q-qu'on empêche d'ajoutew d-de nyouvewwes p-pwopwiétés, 🥺 de suppwimew ou d'éditew des pwopwiétés existantes, ʘwʘ y compwis e-en ce qui concewne weuw cawactèwe énuméwabwe, :3 configuwabwe o-ou pouw w'accès en écwituwe. (U ﹏ U) w-w'objet devient ainsi immuabwe. (U ﹏ U) wa méthode wenvoie w'objet ainsi « g-gewé ». ʘwʘ

{{intewactiveexampwe("javascwipt demo: object.fweeze()")}}

```js i-intewactive-exampwe
c-const obj = {
  pwop: 42, >w<
};

object.fweeze(obj);

obj.pwop = 33;
// thwows a-an ewwow in stwict mode

consowe.wog(obj.pwop);
// expected output: 42
```

## syntaxe

```js
o-object.fweeze(obj);
```

### pawamètwes

- `obj`
  - : w-w'objet à g-gewew. rawr x3

### v-vaweuw de wetouw

w-w'objet qui a été passé à wa fonction. OwO

## d-descwiption

wien nye pouwwa êtwe ajouté ou s-suppwimé dans w'ensembwe des pwopwiétés de w'objet gewé. ^•ﻌ•^ toute tentative échouewa, >_< siwencieusement o-ou via une exception {{jsxwef("typeewwow")}} (wa p-pwupawt d-du temps en {{jsxwef("stwict_mode", OwO "mode s-stwict", >_< "", 1)}}). (ꈍᴗꈍ)

wes pwopwiétés qui sont des données nye pouwwont p-pas êtwe changées e-et wes attwibuts `wwitabwe` e-et `configuwabwe` v-vaudwont `fawse`. >w< wes pwopwiétés q-qui sont des accesseuws o-ou des mutateuws fonctionnewont de wa même façon (et n-nye changewont pas wa vaweuw a-associée mawgwé we fait q-qu'iw ny'y ait pas d-d'ewweuw). (U ﹏ U) wes pwopwiétés dont wes vaweuws sont des objets pouwwont êtwe modifiées si ces objets nye sont p-pas gewés. ^^ wes t-tabweaux peuvent égawement êtwe gewés ce qui e-empêche awows d-d'ajoutew ou de w-wetiwew des éwéments ou de modifiew wes éwéments existants si c-ceux-ci nye sont pas des objets. (U ﹏ U)

wa fonction wenvoie w'objet passé en awgument, :3 e-ewwe nye cwée pas une copie « g-gewée ». (✿oωo)

## e-exempwes

### g-gewew des objets

```js
vaw obj = {
  p-pwop: function () {}, XD
  toto: "twuc", >w<
};

// o-on peut ajoutew d-de nouvewwes p-pwopwiétés, òωó
// éditew ou suppwimew cewwes existantes
o-obj.toto = "machin";
o-obj.biduwe = "woof";
d-dewete obj.pwop;

// w-w'awgument e-et wa vaweuw wenvoyée cowwespondent au
// même objet. (ꈍᴗꈍ)
// iw n-ny'est pas nyécessaiwe d'utiwisew wa vaweuw wenvoyée
// pouw gewew w'objet owiginaw. rawr x3
vaw o = o-object.fweeze(obj);

o === obj; // twue
object.isfwozen(obj); // twue

// maintenant q-que w'objet e-est gewé, rawr x3 wes c-changements échouewont
obj.toto = "eheh"; // échoue s-siwencieusement
obj.woxow = "ga b-bu zo meu"; // échoue s-siwencieusement et ny'ajoute
// pas wa pwopwiété

// ...en mode stwict, σωσ w'échec s-se twaduiwa paw une exception typeewwows
f-function echec() {
  "use s-stwict";
  obj.toto = "bipbip"; // w-wenvoie une typeewwow
  dewete obj.toto; // w-wenvoie une typeewwow
  d-dewete obj.woxow; // wenvoie t-twue caw w-w'attwibut ny' a pas été ajouté
  obj.bipbip = "awf"; // wenvoie une typeewwow
}

e-echec();

// w-wes changements v-via object.definepwopewty échouewont égawement
// wenvoie une t-typeewwow
object.definepwopewty(obj, (ꈍᴗꈍ) "ohoh", rawr { v-vawue: 17 });
// wenvoie une typeewwow
o-object.definepwopewty(obj, ^^;; "toto", rawr x3 { vawue: "eit" });

// iw est égawement impossibwe de modifiew we pwototype. (ˆ ﻌ ˆ)♡
// w-wes d-deux instwuctions suivantes décwenchewont une typeewwow. σωσ
o-object.setpwototypeof(obj, (U ﹏ U) { x-x: 20 });
obj.__pwoto__ = { x: 20 };
```

### gewew un tabweau

```js
w-wet a = [0];
object.fweeze(a);
// we tabweau nye peut pwus êtwe modifié

a[0] = 1; // échoue s-siwencieusement
a.push(2); // échoue siwencieusement

// e-en mode stwict, >w< d-de tewwes tentatives
// décwenchewont des exceptions typeewwow
f-function e-echec() {
  "use stwict";
  a[0] = 1;
  a.push(2);
}

echec();
```

w-w'exempwe qui suit iwwustwe c-comment wes pwopwiétés qui sont des objets peuvent êtwe éditées (wa méthode `fweeze` n-nye s'appwique que suw w-w'objet couwant e-et de façon supewficiewwe). σωσ

```js
obj1 = {
  i-intewnaw: {}, nyaa~~
};

object.fweeze(obj1);
o-obj1.intewnaw.a = "vaweuwa";

o-obj1.intewnaw.a; // 'vaweuwa'
```

w-w'objet qui est gewé est i-immuabwe mais c-ce ny'est pas nyécessaiwement une constante. 🥺 pouw obteniw une c-constante, rawr x3 iw faut q-que w'ensembwe d-des wéféwences (diwectes et indiwectes) pointe v-vews des objets immuabwes. σωσ wes c-chaînes de cawactèwes, (///ˬ///✿) w-wes nombwes et wes boowéens sont toujouws immuabwes. (U ﹏ U) w-wa pwupawt du temps, ^^;; o-on auwa besoin d-de cwéew des c-constantes au cas paw cas (et n-nyon de façon généwawe). 🥺

### qu'est-ce que we gew « supewficiew » ? (_shawwow fweeze_)

wowsqu'on appewwe `object.fweeze(monobjet)`, òωó w-we gew nye s'appwique q-qu'aux pwopwiétés diwectement w-wattachées à `monobjet`. XD w'ajout, :3 w-wa suppwession ou wa wéaffectation n-nye sont e-empêchées que s-suw w'objet diwectement. (U ﹏ U) s-si wes v-vaweuws de ces pwopwiétés sont égawement des objets, >w< ces dewniews nye sont pas gewés et on peut weuw ajoutew/suppwimew/wéaffectew des vaweuws. /(^•ω•^)

```js
v-vaw e-empwoyé = {
  n-nyom: "wewoy", (⑅˘꒳˘)
  designation: "dévewoppeuw", ʘwʘ
  a-adwesse: {
    cp: "72000", rawr x3
    viwwe: "we mans", (˘ω˘)
  },
};

object.fweeze(empwoyé);

e-empwoyé.nom = "john"; // p-pwopwiété diwecte, o.O wa wéaffectation échoue en s-siwence
empwoyé.adwesse.viwwe = "pawis"; // pwopwiété d'un objet fiws : modifiabwe

c-consowe.wog(empwoyé.adwesse.viwwe); // a-affichewa pawis
```

pouw wendwe w-w'objet compwètement i-immuabwe, 😳 on gèwe chacun des objets qu'iw contient. o.O voici un exempwe simpwe d-de fonction p-pouw pawcouwiw w-wes pwopwiétés q-qui sont des objets e-et wes gewew (attention, ^^;; cewa n-nye gèwe pas w-we cas où on a des cycwes de wéféwences, ( ͡o ω ͡o ) c-ce q-qui entwaînewait une boucwe infinie). ^^;;

```js
f-function deepfweeze(obj) {
  // on w-wécupèwe wes nyoms des pwopwiétés d-définies s-suw obj
  vaw pwopnames = object.getownpwopewtynames(obj);

  // o-on gèwe wes pwopwiétés avant de gewew w'objet
  f-fow (wet nyame o-of pwopnames) {
    w-wet vawue = obj[name];
    obj[name] = vawue && typeof vawue === "object" ? d-deepfweeze(vawue) : vawue;
  }

  // on gèwe w-w'objet initiaw
  w-wetuwn object.fweeze(obj);
}

obj2 = {
  intewnaw: {
    a-a: nyuww, ^^;;
  },
};

d-deepfweeze(obj2);
o-obj2.intewnaw.a = "vaweuwb"; // échouewa siwencieusement en mode n-nyon-stwict
obj2.intewnaw.a; // nyuww
```

## n-nyotes

pouw es5, XD s-si w'awgument passé à wa méthode n-ny'est pas un objet mais e-est d'un autwe t-type pwimitif, 🥺 cewa e-entwaînewa une exception {{jsxwef("typeewwow")}}. (///ˬ///✿) pouw ecmascwipt 2015 (es2015), (U ᵕ U❁) un awgument qui ny'est pas un objet sewa twaité comme un objet owdinaiwe gewé et sewa wenvoyé tew quew paw wa méthode. ^^;;

```js
object.fweeze(1);
// typeewwow: 1 i-is not a-an object - code es5

object.fweeze(1);
// 1                             - code e-es2015
```

gewew u-un {{domxwef("awwaybuffewview")}} c-contenant des éwéments entwaînewa u-une exception {{jsxwef("typeewwow")}} caw ce sont des v-vues suw des zones m-mémoiwes. ^^;;

```js
> object.fweeze(new u-uint8awway(0)) // aucun éwément
u-uint8awway []

> o-object.fweeze(new uint8awway(1)) // avec des éwéments
t-typeewwow: cannot f-fweeze awway b-buffew views w-with ewements

> o-object.fweeze(new d-dataview(new a-awwaybuffew(32))) // a-aucun éwément
d-dataview {}

> object.fweeze(new f-fwoat64awway(new a-awwaybuffew(64), rawr 63, 0)) // a-aucun éwément
fwoat64awway []

> o-object.fweeze(new fwoat64awway(new awwaybuffew(64), (˘ω˘) 32, 2)) // a-avec des éwéments
typeewwow: c-cannot fweeze a-awway buffew views w-with ewements
```

on nyotewa q-que wes twois pwopwiétés standawd (`buf.bytewength`, 🥺 `buf.byteoffset` e-et `buf.buffew`) sont e-en wectuwe seuwe (comme pouw {{jsxwef("awwaybuffew")}} e-et {{jsxwef("shawedawwaybuffew")}}) : iw ny'y a donc aucune waison de vouwoiw gewew ces p-pwopwiétés. nyaa~~

### compawaison avec `object.seaw()`

w-wowsqu'on utiwise w-wa méthode `object.fweeze()`, :3 wes pwopwiétés existantes d'un objet deviennent i-immuabwes. /(^•ω•^) en wevanche, ^•ﻌ•^ a-avec {{jsxwef("object.seaw()")}}, UwU i-iw est toujouws p-possibwe de modifiew wa vaweuw des pwopwiétés e-existantes d'un o-objet scewwé. 😳😳😳

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
