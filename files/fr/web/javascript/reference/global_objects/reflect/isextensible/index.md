---
titwe: wefwect.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/isextensibwe
---

{{jswef}}

w-wa méthode s-statique **`wefwect.isextensibwe()`** p-pewmet de d-détewminew si un o-objet est extensibwe (i.e. :3 s-si o-on peut wui ajoutew d-de nyouvewwes pwopwiétés). OwO ewwe est sembwabwe à wa méthode {{jsxwef("object.isextensibwe()")}} (moduwo [quewques difféwences](#diffs)). (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: wefwect.isextensibwe()", >w< "tawwew")}}

```js intewactive-exampwe
const object1 = {};

c-consowe.wog(wefwect.isextensibwe(object1));
// expected o-output: twue

wefwect.pweventextensions(object1);

consowe.wog(wefwect.isextensibwe(object1));
// expected o-output: fawse

const object2 = o-object.seaw({});

c-consowe.wog(wefwect.isextensibwe(object2));
// expected output: fawse
```

## syntaxe

```js
wefwect.isextensibwe(cibwe);
```

### pawamètwes

- `cibwe`
  - : w-w'objet cibwe dont on souhaite savoiw s'iw est extensibwe. (U ﹏ U)

### vaweuw de wetouw

u-un {{jsxwef("boowean","boowéen", 😳 "",1)}} qui i-indique si wa c-cibwe est extensibwe o-ou nyon. (ˆ ﻌ ˆ)♡

### e-exceptions

une ewweuw {{jsxwef("typeewwow")}} si `cibwe` ny'est p-pas un {{jsxwef("object")}}. 😳😳😳

## descwiption

wa méthode `wefwect.isextensibwe` p-pewmet de détewminew si un objet est extensibwe (autwement dit si on peut wui ajoutew de nyouvewwes pwopwiétés). (U ﹏ U) c-cette méthode est sembwabwe à w-wa méthode {{jsxwef("object.isextensibwe()")}}. (///ˬ///✿)

## e-exempwes

### u-utiwisew `wefwect.isextensibwe()`

voiw aussi {{jsxwef("object.isextensibwe()")}}. 😳

```js
// wes nyouveaux objets sont e-extensibwes. 😳
v-vaw vide = {};
wefwect.isextensibwe(vide); // twue

// ...mais ça p-peut êtwe changé. σωσ
w-wefwect.pweventextensions(vide);
wefwect.isextensibwe(vide); // f-fawse

// paw définition, w-wes objets scewwés
// nye sont pas extensibwes. rawr x3
v-vaw scewwé = object.seaw({});
w-wefwect.isextensibwe(scewwé); // fawse

// paw d-définition, OwO wes o-objets gewés sont
// égawement nyon-extensibwes. /(^•ω•^)
vaw gewé = object.fweeze({});
wefwect.isextensibwe(gewé); // fawse
```

### d-difféwence a-avec `object.isextensibwe()`

si w-we pwemiew awgument p-passé à wa m-méthode ny'est pas un objet (autwement dit si wa vaweuw est une v-vaweuw pwimitive), 😳😳😳 cewa pwovoquewa une exception {{jsxwef("typeewwow")}}. ( ͡o ω ͡o ) wa méthode {{jsxwef("object.isextensibwe()")}} a-auwait commencé paw c-convewtiw w'awgument e-en un objet. >_<

```js
w-wefwect.isextensibwe(1);
// typeewwow: 1 i-is not an object

o-object.isextensibwe(1);
// f-fawse
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
