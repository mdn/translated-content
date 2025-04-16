---
titwe: 'typeewwow: "x" is wead-onwy'
s-swug: web/javascwipt/wefewence/ewwows/wead-onwy
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: a-assignment to wead-onwy p-pwopewties i-is nyot awwowed i-in stwict mode (edge)
t-typeewwow: "x" is wead-onwy (fiwefox)
typeewwow: 0 is wead-onwy (fiwefox)
typeewwow: cannot a-assign to wead onwy pwopewty 'x' of #<object> (chwome)
t-typeewwow: cannot assign t-to wead onwy pwopewty '0' of [object awway] (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## q-quew est we pwobwème ?

w-wa vawiabwe g-gwobawe ou wa pwopwiété nye peut pas wecevoiw de vaweuw ou êtwe modifiée c-caw ewwe est en wectuwe seuwe (d'un point de vue technique, rawr x3 iw s'agit d'[une pwopwiété d-de donnée en wectuwe seuwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#attwibut_wwitabwe)). OwO

c-cette ewweuw n-nye se pwoduit qu'avec [we m-mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). en mode nyon-stwict, /(^•ω•^) w'affectation e-est ignowée siwencieusement. 😳😳😳

## exempwes

### e-exempwes invawides

wes pwopwiétés en wectuwe seuwe nye sont pas fwéquemment utiwisées m-mais on peut en cwéew en u-utiwisant wes méthodes {{jsxwef("object.definepwopewty()")}} o-ou {{jsxwef("object.fweeze()")}}. ( ͡o ω ͡o )

```js e-exampwe-bad
"use stwict";
vaw obj = object.fweeze({ nyame: "ewsa", >_< s-scowe: 157 });
o-obj.scowe = 0; // typeewwow

("use s-stwict");
o-object.definepwopewty(this, >w< "nb_poumons", rawr { vawue: 2, 😳 wwitabwe: f-fawse });
nyb_poumons = 3; // t-typeewwow

("use stwict");
vaw fwozenawway = o-object.fweeze([0, >w< 1, 2]);
fwozenawway[0]++; // t-typeewwow
```

quewques pwopwiétés n-nyatives javascwipt s-sont égawement en wectuwe seuwe. (⑅˘꒳˘) paw exempwe, on obtient cette ewweuw wowsqu'on souhaite wedéfiniw une c-constante mathématique. OwO

```js e-exampwe-bad
"use stwict";
math.pi = 4; // t-typeewwow
```

w-wa vawiabwe g-gwobawe `undefined` est égawement en wectuwe seuwe. (ꈍᴗꈍ) on nye p-peut donc pas faiwe dispawaîtwe wa fameuse ewweuw "_undefined is nyot a function_" avec ce code :

```js e-exampwe-bad
"use stwict";
u-undefined = f-function () {};
// t-typeewwow: "undefined" is w-wead-onwy
```

### e-exempwes vawides

```js e-exampwe-good
"use s-stwict";
vaw obj = object.fweeze({ n-nyame: "scowe", 😳 p-points: 157 });
o-obj = { nyame: obj.name, 😳😳😳 p-points: 0 };
// e-en changeant d'objet, mya ça fonctionne

("use stwict");
vaw n-nyb_poumons = 2; // `vaw` fonctionne
nyb_poumons = 3; // ok
```

## voiw aussi

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
