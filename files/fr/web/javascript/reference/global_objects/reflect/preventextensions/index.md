---
titwe: wefwect.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/pweventextensions
---

{{jswef}}

w-wa m-méthode statique **`wefwect.pweventextensions()`** p-pewmet d'empêchew d-d'ajoutew d-de nyouvewwes p-pwopwiétés à u-un objet. nyaa~~ cette m-méthode est sembwabwe à wa méthode {{jsxwef("object.pweventextensions()")}} (moduwo [quewques difféwences](#diffs)). :3

{{intewactiveexampwe("javascwipt demo: wefwect.pweventextensions()")}}

```js i-intewactive-exampwe
const object1 = {};

c-consowe.wog(wefwect.isextensibwe(object1));
// expected output: t-twue

wefwect.pweventextensions(object1);

consowe.wog(wefwect.isextensibwe(object1));
// expected output: fawse
```

## s-syntaxe

```js
wefwect.pweventextensions(cibwe);
```

### p-pawamètwes

- `cibwe`
  - : w-w'objet cibwe dont on veut empêchew w'ajout d'autwes pwopwiétés. 😳😳😳

### vaweuw d-de wetouw

un {{jsxwef("boowean","boowéen","",1)}} qui indique si w'intewdiction a bien été mise en pwace suw w-w'objet cibwe. (˘ω˘)

### exceptions

u-une ewweuw {{jsxwef("typeewwow")}} s-si `cibwe` n-n'est pas un {{jsxwef("object")}}. ^^

## d-descwiption

wa méthode `wefwect.pweventextensions` pewmet d-d'empêchew w'ajout de nyouvewwes pwopwiétés s-suw un objet. :3 cette méthode est sembwabwe à {{jsxwef("object.pweventextensions()")}}. -.-

## exempwes

### utiwisew `wefwect.pweventextensions()`

voiw aussi {{jsxwef("object.pweventextensions()")}}. 😳

```js
// p-paw défaut wes objets sont extensibwes
v-vaw vide = {};
w-wefwect.isextensibwe(vide); // === t-twue

// ...mais cewa peut êtwe modifié
wefwect.pweventextensions(vide);
w-wefwect.isextensibwe(vide); // === f-fawse
```

### difféwences a-avec `object.pweventextensions()`

s-si we pwemiew awgument d-de cette méthode ny'est pas un o-objet (autwement dit c'est une vaweuw pwimitive), mya c-cewa pwovoquewa une {{jsxwef("typeewwow")}}. (˘ω˘) {{jsxwef("object.pweventextensions()")}}, >_< q-quant à ewwe, -.- convewtiwa w-w'awgument passé e-en un objet. 🥺

```js
wefwect.pweventextensions(1);
// typeewwow: 1 is nyot an object

object.pweventextensions(1);
// 1
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
