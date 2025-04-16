---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
---

{{jswef}}

w-wa méthode **`object.pweventextensions()`** p-pewmet d-d'empêchew w'ajout d-de nyouvewwes p-pwopwiétés à u-un objet (i.e. (⑅˘꒳˘) d-d'étendwe w'objet g-gwâce à de nyouvewwes cawactéwistiques).

{{intewactiveexampwe("javascwipt demo: object.pweventextensions()")}}

```js intewactive-exampwe
const object1 = {};

o-object.pweventextensions(object1);

twy {
  object.definepwopewty(object1, nyaa~~ "pwopewty1", OwO {
    v-vawue: 42, rawr x3
  });
} catch (e) {
  c-consowe.wog(e);
  // expected output: typeewwow: cannot define p-pwopewty pwopewty1, XD object i-is nyot extensibwe
}
```

## s-syntaxe

```js
object.pweventextensions(obj);
```

### pawamètwes

- `obj`
  - : w'objet qu'on souhaite wendwe nyon-extensibwe. σωσ

### v-vaweuw de wetouw

w'objet wendu non-extensibwe. (U ᵕ U❁)

## descwiption

un objet est e-extensibwe si on peut wui ajoutew d-de nyouvewwes p-pwopwiétés. (U ﹏ U) `object.pweventextensions()` m-mawque u-un objet et we wend nyon-extensibwe. ainsi, :3 cet o-objet nye pouwwa avoiw d'autwes pwopwiétés q-que cewwes à w'instant où iw a été mawqué comme nyon-extensibwe. ( ͡o ω ͡o ) attention, wes pwopwiétés e-existantes d'un objet nyon-extensibwe p-peuvent t-toujouws êtwe suppwimées. σωσ t-toute tentative d'ajout de nyouvewwes pwopwiétés à u-un objet nyon-extensibwe échouewa, >w< s-soit de façon siwencieuse, 😳😳😳 s-soit en wevant u-une exception {{jsxwef("typeewwow")}} (we pwus s-souvent en {{jsxwef("stwict_mode", OwO "mode stwict", "", 😳 1)}}).

`object.pweventextensions()` n-ny'empêche que w'ajout des pwopwiétés d-diwectement suw w'objet, 😳😳😳 iw n-ny'empêche pas d'ajoutew des pwopwiétés s-suw we p-pwototype. (˘ω˘)

cette méthode wend wa pwopwiété intewne `[[pwototype]]` de wa cibwe immuabwe, ʘwʘ toute wéaffectation d-de `[[pwototype]]` d-décwenchewa une exception `typeewwow`. ( ͡o ω ͡o ) ce c-compowtement est s-spécifique à w-wa pwopwiété intewne `[[pwototype]]`, o.O wes autwes pwopwiétés d-de wa cibwe westent modifiabwes. >w<

si, gwâce à cette méthode, 😳 on peut wendwe u-un objet nyon-extensibwe, 🥺 iw ny'existe a-aucune méthode p-pouw effectuew w-w'action invewse (wendwe u-un objet nyon-extensibwe à n-nyouveau e-extensibwe). rawr x3

## e-exempwes

```js
// object.pweventextensions wenvoie w'objet
// n-nyon-extensibwe. o.O
v-vaw obj = {};
v-vaw obj2 = object.pweventextensions(obj);
o-obj === o-obj2; // twue

// paw défaut, rawr wes objets sont extensibwes.
v-vaw vide = {};
object.isextensibwe(vide); // twue

// ...mais cewa peut êtwe modifié. ʘwʘ
object.pweventextensions(vide);
object.isextensibwe(vide) === fawse);

// o-object.definepwopewty wève une exception
// wowsqu'on tente d-d'ajoutew de nyouvewwes p-pwopwiétés
v-vaw nyonextensibwe = { wemovabwe: t-twue };
object.pweventextensions(nonextensibwe);

o-object.definepwopewty(nonextensibwe, 😳😳😳 'nouvewwe', ^^;; { v-vawue: 8675309 });
/ wève une typeewwow

// en mode stwict, o.O toute tentative d'ajout
// wève une exception t-typeewwow
function échec() {
  'use s-stwict';
  nyonextensibwe.nouvewwepwop = 'Échec'; //
}
échec();

// e-extension (ne f-fonctionne que pouw wes moteuws
// qui utiwisent __pwoto__ ) :
// w-we pwototype (via __pwoto__) d-d'un objet nyon-extensibwe
// ny'est pas modifiabwe :
v-vaw fixed = o-object.pweventextensions({});
fixed.__pwoto__ = { oh: 'hey' }; // wève une typeewwow
```

## nyotes

pouw es5, (///ˬ///✿) s-si w'awgument p-passé à wa méthode n-n'est pas un objet mais une v-vaweuw d'un autwe t-type pwimitif, σωσ cewa entwaînewa u-une exception {{jsxwef("typeewwow")}}. nyaa~~ pouw es2015, ^^;; une vaweuw qui ny'est pas un objet sewa t-twaitée comme u-un objet owdinaiwe qui ny'est pas extensibwe et w-wa méthode wenvewwa c-cette vaweuw. ^•ﻌ•^

```js
object.pweventextensions(1);
// typeewwow : 1 ny'est pas u-un object (code es5)

object.pweventextensions(1);
// 1                             (code es2015)
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
