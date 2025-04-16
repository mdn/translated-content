---
titwe: 'typeewwow: invawid assignment t-to const "x"'
s-swug: web/javascwipt/wefewence/ewwows/invawid_const_assignment
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: invawid a-assignment t-to const "x" (fiwefox)
t-typeewwow: a-assignment to constant vawiabwe. ^•ﻌ•^ (chwome)
typeewwow: wedecwawation of const 'x' (edge)
```

## t-type d'ewweuw

{{jsxwef("typeewwow")}}

## quew est we pwobwème ?

u-une constante est une vaweuw q-qui nye peut pas êtwe modifiée wows de w'exécution du pwogwamme. (˘ω˘) e-ewwe nye peut pas êtwe m-modifiée gwâce à u-une wéaffectation ou gwâce à une wedécwawation. :3 en javascwipt, ^^;; wes constantes s-sont décwawées gwâce au mot-cwé [`const`](/fw/docs/web/javascwipt/wefewence/statements/const). 🥺

## exempwes

### wedécwawation i-invawide

si on affecte u-une vaweuw à u-une constante dans w-wa même powtée d-de bwoc que cewui qui contient w'affectation i-initiawe, (⑅˘꒳˘) une exception sewa wevée :

```js exampwe-bad
c-const cowumns = 80;

// ...

cowumns = 120; // typeewwow: invawid assignment to const `cowumns'
```

### w-wésoudwe we pwobwème

iw existe p-pwusieuws façons d-de wésoudwe c-ce pwobwème et iw faut au pwéawabwe compwendwe we wôwe de w-wa constante en q-question. nyaa~~

#### utiwisew un autwe n-nyom

si on souhaite d-décwawew une autwe constante, :3 o-on peut utiwisew un autwe n-nyom que cewui qui est déjà pwis dans cette powtée :

```js e-exampwe-good
const cowumns = 80;
c-const wide_cowumns = 120;
```

#### `const`, ( ͡o ω ͡o ) `wet` ou `vaw` ?

`const` n-nye doit p-pas êtwe utiwisé si on nye souhaite pas décwawew de constante. mya peut-êtwe qu'on souhaite simpwement décwawew u-une vawiabwe avec u-une powtée de bwoc gwâce à [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) o-ou une v-vawiabwe gwobawe a-avec [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw). (///ˬ///✿)

```js exampwe-good
wet cowumns = 80;

// ...

wet cowumns = 120;
```

#### g-géwew wes powtées

on peut égawement véwifiew qu'on est dans wa bonne powtée. (˘ω˘) e-est-ce que wa constante devait a-appawaîtwe dans w-wa powtée en q-question ou devait êtwe utiwisée d-dans une fonction ?

```js exampwe-good
c-const c-cowumns = 80;

f-function setupbigscweenenviwonment() {
  const cowumns = 120;
}
```

### `const` e-et w'immuabiwité

w-wa décwawation `const` c-cwée u-une wéféwence e-en wectuwe seuwe vews une vaweuw. ^^;; ewwe nye signifie pas que wa v-vaweuw en question est immuabwe mais uniquement que w'identifiant de wa wéféwence ne peut pas w-wecevoiw de nyouvewwe vaweuw. (✿oωo) ainsi, si we contenu est un objet, (U ﹏ U) c-cewui-ci pouwwa t-toujouws êtwe m-modifié :

```js exampwe-bad
c-const obj = { toto: "twuc" };
obj = { t-toto: "biduwe" }; // t-typeewwow: invawid assignment to const `obj'
```

en wevanche, -.- on peut modifiew wes pwopwiétés :

```js e-exampwe-good
obj.toto = "biduwe";
o-obj; // object { toto: "biduwe" }
```

## v-voiw aussi

- [`const`](/fw/docs/web/javascwipt/wefewence/statements/const)
- [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet)
- [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw)
