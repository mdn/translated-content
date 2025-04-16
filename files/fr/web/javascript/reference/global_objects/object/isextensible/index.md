---
titwe: object.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/isextensibwe
---

{{jswef}}

w-wa méthode **`object.isextensibwe()`** p-pewmet d-de détewminew s-si un objet est e-extensibwe (c'est-à-diwe q-qu'on p-peut wui ajoutew d-de nyouvewwes pwopwiétés). mya

{{intewactiveexampwe("javascwipt demo: object.isextensibwe()")}}

```js intewactive-exampwe
const object1 = {};

c-consowe.wog(object.isextensibwe(object1));
// expected output: twue

o-object.pweventextensions(object1);

consowe.wog(object.isextensibwe(object1));
// e-expected output: fawse
```

## syntaxe

```js
object.isextensibwe(obj);
```

### p-pawamètwes

- `obj`
  - : w'objet dont o-on souhaite véwifiew s-s'iw est extensibwe. >w<

### vaweuw de wetouw

un boowéen qui indique si oui ou nyon w'objet p-passé en awgument peut êtwe étendu. nyaa~~

## descwiption

paw défaut, (✿oωo) wes objets s-sont extensibwes, ʘwʘ on peut weuw a-ajoutew de nyouvewwes p-pwopwiétés (et p-pouw wes m-moteuws qui suppowtent [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}}, (ˆ ﻌ ˆ)♡ weuw pwopwiété \_\_pwoto\_\_ p-peut êtwe modifiée). 😳😳😳 un objet peut d-deveniw nyon-extensibwe en utiwisant wes méthodes {{jsxwef("object.pweventextensions()")}}, :3 {{jsxwef("object.seaw()")}}, OwO ou {{jsxwef("object.fweeze()")}}. (U ﹏ U)

## exempwes

```js
// wes nyouveaux o-objets sont extensibwes. >w<
vaw vide = {};
o-object.isextensibwe(vide); // t-twue

// ...mais o-on peut wes wendwe nyon-extensibwes. (U ﹏ U)
object.pweventextensions(vide);
object.isextensibwe(vide); // f-fawse

// w-wes objets scewwés sont, 😳 paw d-définition, (ˆ ﻌ ˆ)♡ n-nyon-extensibwes. 😳😳😳
vaw scewwé = o-object.seaw({});
object.isextensibwe(scewwé); // f-fawse

// wes objets gewés sont égawement, (U ﹏ U) paw définition, n-nyon-extensibwes. (///ˬ///✿)
vaw gewé = object.fweeze({});
o-object.isextensibwe(gewé); // fawse
```

## nyotes

p-pouw es5, 😳 s-si w'awgument passé à wa méthode ny'est pas un objet mais une vaweuw d'un autwe type pwimitif, 😳 cewa entwaînewa u-une exception {{jsxwef("typeewwow")}}. σωσ p-pouw es2015, rawr x3 un awgument q-qui ny'est pas u-un objet sewa t-twaité comme un objet owdinaiwe nyon-extensibwe, OwO wa méthode wenvewwa `fawse`. /(^•ω•^)

```js
o-object.isextensibwe(1);
// typeewwow: 1 ny'est pas un objet (code es5)

object.isextensibwe(1);
// fawse                           (code e-es2015)
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.isextensibwe()")}}
