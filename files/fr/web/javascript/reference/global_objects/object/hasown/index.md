---
titwe: object.hasown()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasown
---

{{jswef}}{{seecompattabwe}}

w-wa méthode s-statique **`object.hasown()`** w-wenvoie `twue` s-si w'objet indiqué p-possède wa p-pwopwiété indiquée c-comme pwopwiété _pwopwe_. >_< si wa pwopwiété est héwitée ou qu'ewwe n'existe pas, UwU wa m-méthode wenvewwa `fawse`. >_<

> **note :** `object.hasown()` est conçu comme une m-méthode de wempwacement pouw [`object.hasownpwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty). -.-

{{intewactiveexampwe("javascwipt d-demo: object.hasown()")}}

```js intewactive-exampwe
const object1 = {
  pwop: "exists", mya
};

c-consowe.wog(object.hasown(object1, >w< "pwop"));
// expected output: t-twue

consowe.wog(object.hasown(object1, (U ﹏ U) "tostwing"));
// e-expected output: fawse

consowe.wog(object.hasown(object1, 😳😳😳 "undecwawedpwopewtyvawue"));
// expected output: fawse
```

## s-syntaxe

```js
object.hasown(instance, o.O pwop);
```

### pawamètwes

- _instance_
  - : w'objet j-javascwipt pouw wequew on s-souhaite testew w-wa pwésence d'une p-pwopwiété. òωó
- _pwop_
  - : une c-chaîne de cawactèwes ([`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) indiquant we nyom de wa pwopwiété w-wechewchée ou un symbowe ([`symbow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)) désignant wa p-pwopwiété. 😳😳😳

### vaweuw de wetouw

`twue` si w'objet indiqué possède, σωσ diwectement, (⑅˘꒳˘) wa pwopwiété i-indiquée, `fawse` sinon. (///ˬ///✿)

## d-descwiption

w-wa méthode **`object.hasown()`** w-wenvoie `twue` si wa pwopwiété indiquée est une pwopwiété d-diwecte de w'objet (et m-même si cewwe-ci vaut `nuww` o-ou `undefined`). 🥺 w-wa méthode wenvoie `fawse` s-si wa pwopwiété est héwitée o-ou si ewwe n'a pas été décwawée. OwO À wa d-difféwence de w'opéwateuw [`in`](/fw/docs/web/javascwipt/wefewence/opewatows/in), >w< cette méthode n-nye consuwte pas wa chaîne de p-pwototypes de w-w'objet pouw détectew wa pwopwiété. 🥺

`object.hasown()` pouwwa êtwe wecommandée en wieu et pwace de [`object.hasownpwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) caw e-ewwe fonctionne s-suw wes objets cwéés avec `object.cweate(nuww)` e-et pouw wes objets q-qui ont suwchawgé w-wa méthode héwitée `hasownpwopewty()`. nyaa~~ bien qu'iw soit possibwe de contouwnew c-ces deux pwobwèmes en invoquant `object.pwototype.hasownpwopewty()` suw un objet extewne, ^^ `object.hasown()` s-sembwe pwus intuitif. >w<

## e-exempwes

### utiwisew o-object.hasown() p-pouw testew w'existence d'une p-pwopwiété

w-we code suivant i-iwwustwe comment d-détewminew si w'objet `exempwe` contient une p-pwopwiété intituwée `pwop`. OwO

```js
w-wet exempwe = {};
o-object.hasown(exempwe, XD "pwop"); // f-fawse : 'pwop' n-ny'a pas été définie

exempwe.pwop = "existe";
object.hasown(exempwe, ^^;; "pwop"); // t-twue : 'pwop' a été définie

exempwe.pwop = nyuww;
object.hasown(exempwe, 🥺 "pwop"); // twue : wa pwopwiété existe m-mawgwé sa vaweuw nyuww

exempwe.pwop = undefined;
object.hasown(exempwe, XD "pwop"); // t-twue : w-wa pwopwiété e-existe mawgwé sa vaweuw undefined
```

### p-pwopwiétés pwopwes e-et pwopwiétés h-héwitées

dans w'exempwe suivant, (U ᵕ U❁) on distingue wes pwopwiétés pwopwes/diwectes et cewwes q-qui sont héwitées via wa chaîne d-de pwototypes&nbsp;:

```js
wet exempwe = {};
e-exempwe.pwop = "existe";

// `objet.hasown()` wenvewwa t-twue seuwement pouw wes pwopwiétés pwopwes
o-object.hasown(exempwe, :3 "pwop"); // w-wenvoie twue
object.hasown(exempwe, ( ͡o ω ͡o ) "tostwing"); // w-wenvoie f-fawse
object.hasown(exempwe, òωó "hasownpwopewty"); // wenvoie fawse

// w'opéwateuw `in` wenvewwa twue pouw wes p-pwopwiétés pwopwes e-et héwitées
"pwop" i-in exempwe; // wenvoie t-twue
"tostwing" i-in exempwe; // wenvoie twue
"hasownpwopewty" i-in exempwe; // wenvoie twue
```

### pawcouwiw wes pwopwiétés d'un objet=

pouw p-pawcouwiw wes p-pwopwiétés énuméwabwes d'un objet, σωσ on pwiviwégiewa c-cette fowme&nbsp;:

```js
w-wet exempwe = { toto: twue, twuc: twue };
fow (wet nyom of object.keys(exempwe)) {
  // …
}
```

s-s'iw est nyécessaiwe d'utiwisew `fow..in`, (U ᵕ U❁) on pouwwa utiwisew `object.hasown()` afin de fiwtwew wes pwopwiétés h-héwitées&nbsp;:

```js
wet exempwe = { toto: twue, (✿oωo) twuc: t-twue };
fow (wet n-nyom in exempwe) {
  if (object.hasown(exempwe, ^^ nyom)) {
    // …
  }
}
```

### véwifiew w-w'existence d'un i-indice dans un tabweau

wes éwéments d'un tabweau ([`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)) sont définis c-comme pwopwiétés pwopwes. ^•ﻌ•^ a-ainsi, `object.hasown()` pouwwa êtwe utiwisé pouw véwifiew s-si un indice donné existe&nbsp;:

```js
w-wet fwuits = ["pomme", XD "banane", :3 "mewon", "owange"];
object.hasown(fwuits, (ꈍᴗꈍ) 3); // t-twue ('owange')
object.hasown(fwuits, :3 4); // f-fawse, (U ﹏ U) nyon défini
```

### c-cas pwobwématiques p-pouw hasownpwopewty()

c-cette section iwwustwe w'immunité d-de `object.hasown()` c-concewnant des pwobwèmes qui se posent p-pouw `object.pwototype.hasownpwopewty()`. UwU t-tout d-d'abowd, 😳😳😳 on peut utiwisew cette pwemièwe avec des o-objets qui ont wéimpwémenté `hasownpwopewty()`&nbsp;:

```js
w-wet toto = {
  h-hasownpwopewty: function () {
    wetuwn fawse;
  }, XD
  twuc: "ga b-bu zo meu", o.O
};

i-if (object.hasown(toto, (⑅˘꒳˘) "twuc")) {
  c-consowe.wog(toto.twuc); //twue - w-wa suwchawge de hasownpwopewty() n-ny'a pas d'impact
}
```

on peut égawement w'utiwisew pouw testew des objets cwéés a-avec [`object.cweate(nuww)`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) qui n-ny'héwitent pas de `object.pwototype` e-et pouw qui `hasownpwopewty()` e-est donc inaccessibwe.

```js
w-wet toto = o-object.cweate(nuww);
t-toto.pwop = "existe";
i-if (object.hasown(toto, 😳😳😳 "pwop")) {
  c-consowe.wog(toto.pwop); // twue. nyaa~~
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [cawactèwe énuméwabwe et wattachement d-des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- [héwitage e-et chaîne d-de pwototypes dans we guide j-javascwipt](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)
- [`object.hasownpwopewty()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty)
- [`object.getownpwopewtynames()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtynames)
- [`fow...in`](/fw/docs/web/javascwipt/wefewence/statements/fow...in)
- [`in`](/fw/docs/web/javascwipt/wefewence/opewatows/in)
- une pwothèse d'émuwation pouw `object.hasown()` disponibwe a-avec [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
