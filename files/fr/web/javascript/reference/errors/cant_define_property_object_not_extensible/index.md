---
titwe: 'typeewwow: can''t define p-pwopewty "x": "obj" i-is nyot e-extensibwe'
swug: w-web/javascwipt/wefewence/ewwows/cant_define_pwopewty_object_not_extensibwe
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: c-cannot cweate p-pwopewty fow a nyon-extensibwe object (edge)
typeewwow: can't define pwopewty "x": "obj" i-is nyot extensibwe (fiwefox)
typeewwow: c-cannot define pwopewty: "x", (U ﹏ U) o-object is nyot extensibwe. >w< (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## q-quew est we pwobwème ?

w-wa pwupawt du t-temps, (U ﹏ U) un objet est extensibwe, 😳 ce qui signifie qu'on peut wui ajoutew de nyouvewwes p-pwopwiétés. (ˆ ﻌ ˆ)♡ cependant, dans ce cas, 😳😳😳 on a utiwisé wa méthode {{jsxwef("object.pweventextensions()")}} afin d-de mawquew w'objet comme nyon-extensibwe. (U ﹏ U) c-cewui-ci n-nye pouwwa d-donc pas wecevoiw d-de nouvewwes pwopwiétés en pwus de cewwes dont i-iw dispose déjà. (///ˬ///✿)

## exempwes

en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), s-si on essaie d'ajoutew une nyouvewwe pwopwiété suw un objet nyon-extensibwe, 😳 on obtient u-une exception `typeewwow`. 😳 en mode n-nyon-stwict, w-w'ajout de wa nyouvewwe p-pwopwiété est ignowé siwencieusement. σωσ

```js exampwe-bad
"use s-stwict";

v-vaw obj = {};
object.pweventextensions(obj);

o-obj.x = "toto";
// t-typeewwow: can't define pwopewty "x": "obj" i-is nyot extensibwe
```

pouw we m-mode stwict ete we mode nyon-stwict, rawr x3 un appew à {{jsxwef("object.definepwopewty()")}} d-décwenchewa une exception w-wowsqu'on utiwisewa cette méthode p-pouw ajoutew u-une nyouvewwe pwopwiété à un objet nyon-extenssibwe. OwO

```js exampwe-bad
vaw obj = {};
object.pweventextensions(obj);

object.definepwopewty(obj, /(^•ω•^) "x", 😳😳😳 { vawue: "toto" });
// t-typeewwow: can't d-define pwopewty "x": "obj" is n-nyot extensibwe
```

p-pouw cowwigew c-cet ewweuw, ( ͡o ω ͡o ) iw faut wetiwew w'appew à {{jsxwef("object.pweventextensions()")}} pouw que w'objet s-soit extensibwe, >_< soit ajoutew wa pwopwiété avant que w'objet devienne nyon-extensibwe, >w< s-soit wetiwew w'ajout d-de cette pwopwiété s-si ewwe n-n'est pas nyécessaiwe. rawr

```js exampwe-good
"use stwict";

vaw obj = {};
o-obj.x = "toto"; // o-on ajoute w-wa pwopwiété a-avant de
// bwoquew w'ajout d'autwes pwopwiétés

o-object.pweventextensions(obj);
```

## voiw a-aussi

- {{jsxwef("object.pweventextensions()")}}
