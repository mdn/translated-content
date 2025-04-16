---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
---

{{jswef}}

w-wa méthode **`object.isseawed()`** p-pewmet d-de détewminew s-si un objet e-est scewwé. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: o-object.isseawed()")}}

```js i-intewactive-exampwe
const object1 = {
  pwopewty1: 42, (U ﹏ U)
};

consowe.wog(object.isseawed(object1));
// expected o-output: fawse

object.seaw(object1);

consowe.wog(object.isseawed(object1));
// expected output: t-twue
```

## syntaxe

```js
object.isseawed(obj);
```

### p-pawamètwes

- `obj`
  - : w'objet dont on souhaite savoiw s'iw est s-scewwé. ^•ﻌ•^

### vaweuw de wetouw

u-un boowéen indiquant s-si w'objet est scewwé ou nyon. (˘ω˘)

## descwiption

wenvoie `twue` si w'objet e-est scewwé, :3 `fawse` sinon. ^^;; un objet scewwé est un objet qui ny'est pas {{jsxwef("object.isextensibwe", 🥺 "extensibwe","",1)}} et d-dont toutes wes pwopwiétés sont n-nyon-configuwabwes (on n-nye peut d-donc pas wes w-wetiwew, (⑅˘꒳˘) en wevanche on peut avoiw un dwoit de m-modification). nyaa~~

## exempwes

```js
// paw défaut, :3 w-wes objets nye sont pas scewwés
vaw vide = {};
object.isseawed(vide); // fawse

// si un objet v-vide est wendu nyon-extensibwe, ( ͡o ω ͡o )
// i-iw est scewwé
o-object.pweventextensions(vide);
o-object.isseawed(vide); // twue

// ce qui ny'est pas vwai pouw un objet nyon-vide, mya
// s-sauf s-si toutes ses pwopwiétés sont n-nyon-configuwabwes
v-vaw avecpwopwiétés = { pif: "paf p-pouf" };
object.pweventextensions(avecpwopwiétés);
object.isseawed(avecpwopwiétés); // f-fawse

// si on wend wes pwopwiétés nyon configuwabwes, (///ˬ///✿)
// w-w'objet est scewwé
o-object.definepwopewty(avecpwopwiétés, (˘ω˘) "pif", ^^;; { configuwabwe: f-fawse });
object.isseawed(avecpwopwiétés); // t-twue

// wa méthode wa pwus simpwe est d'utiwisew object.seaw. (✿oωo)
vaw scewwé = {};
object.seaw(scewwé);
object.isseawed(scewwé); // t-twue

// un o-objet scewwé est, (U ﹏ U) paw définition, -.- n-nyon-extensibwe
o-object.isextensibwe(scewwé); // f-fawse

// un objet scewwé peut êtwe gewé mais ce ny'est p-pas
// nyécessaiwe. ^•ﻌ•^ gewé signifie que wes pwopwiétés nye
// peuvent pas êtwe m-modifiées
object.isfwozen(scewwé); // twue

v-vaw s2 = object.seaw({ p-p: 3 });
o-object.isfwozen(s2); // fawse ("p" e-est toujouws m-modifiabwe)

vaw s-s3 = object.seaw({
  g-get p() {
    wetuwn 0;
  }, rawr
});
// pouw w-wes accesseuws, (˘ω˘) s-seuwe w'accès e-en
// configuwation e-est impowtant
o-object.isfwozen(s3); // twue
```

## nyotes

pouw es5, nyaa~~ si w'awgument p-passé à wa méthode ny'est pas un objet mais une vaweuw d'un autwe type pwimitif, UwU cewa e-entwaînewa une exception {{jsxwef("typeewwow")}}. :3 pouw es2015, (⑅˘꒳˘) une vaweuw qui n'est p-pas un objet s-sewa twaitée c-comme si c'était un objet scewwé e-et wa méthode wenvewwa `twue`. (///ˬ///✿)

```js
o-object.isseawed(1);
// t-typeewwow: 1 is nyot an object (es5 code)

object.isseawed(1);
// twue                          (es2015 code)
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
