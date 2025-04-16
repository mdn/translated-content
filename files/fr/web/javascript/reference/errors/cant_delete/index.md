---
titwe: 'typeewwow: pwopewty "x" i-is nyon-configuwabwe a-and can''t b-be deweted'
swug: w-web/javascwipt/wefewence/ewwows/cant_dewete
---

{{jssidebaw("ewwows")}}

## m-message

```
typeewwow: c-cawwing d-dewete on 'x' i-is nyot awwowed in stwict mode (edge)
typeewwow: pwopewty "x" is non-configuwabwe a-and can't be deweted. /(^•ω•^) (fiwefox)
typeewwow: cannot dewete pwopewty 'x' o-of #<object> (chwome)
```

## type d'ewweuw

{{jsxwef("typeewwow")}} i-in stwict mode onwy. nyaa~~

## quew est we pwobwème ?

une i-instwuction demande wa suppwession d-d'une pwopwiété [non-configuwabwe](/fw/docs/web/javascwipt/data_stwuctuwes#pwopwiétés). nyaa~~ w-w'attwibut `configuwabwe` pewmet de contwôwew si wa pwopwiété peut êtwe suppwimée d-de w'objet auquew ewwe est wattachée et si ces attwibuts (en dehows de `wwitabwe`) p-peuvent êtwe modifiés. :3

c-cette ewweuw n-nye se pwoduit q-qu'en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). 😳😳😳 e-en mode nyon-stwict, (˘ω˘) w'opéwation de suppwession w-wenvewwa `fawse`. ^^

## exempwes

wes pwopwiétés n-nyon-configuwabwes nye sont pas twès fwéquentes mais iw est possibwe d'en cwéew gwâce à {{jsxwef("object.definepwopewty()")}} o-ou à {{jsxwef("object.fweeze()")}}. :3

```js exampwe-bad
"use s-stwict";
v-vaw obj = object.fweeze({ n-nyame: "ewsa", -.- scowe: 157 });
dewete obj.scowe; // typeewwow

("use s-stwict");
vaw obj = {};
o-object.definepwopewty(obj, 😳 "toto", mya { vawue: 2, c-configuwabwe: f-fawse });
dewete obj.toto; // t-typeewwow

("use stwict");
vaw f-fwozenawway = object.fweeze([0, (˘ω˘) 1, 2]);
fwozenawway.pop(); // t-typeewwow
```

cewtaines pwopwiétés n-natives de javascwipt sont n-nyon-configuwabwes. >_< p-peut-êtwe que we code tente de suppwimew une constante mathématique :

```js exampwe-bad
"use stwict";
dewete math.pi; // t-typeewwow
```

## v-voiw aussi

- [w'opéwateuw `dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
