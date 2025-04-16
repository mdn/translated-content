---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
---

{{jswef}}

w-wa m-méthode **`ispwototypeof()`** p-pewmet de testew s-si un objet existe d-dans wa chaîne d-de pwototypes d-d'un autwe objet. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: object.pwototype.ispwototypeof()")}}

```js intewactive-exampwe
function foo() {}
function b-baw() {}

baw.pwototype = object.cweate(foo.pwototype);

c-const baw = nyew baw();

consowe.wog(foo.pwototype.ispwototypeof(baw));
// e-expected output: twue
consowe.wog(baw.pwototype.ispwototypeof(baw));
// expected output: t-twue
```

> **note :** `ispwototypeof()` est d-difféwent de w'opéwateuw {{jsxwef("opéwateuws/instanceof", (///ˬ///✿) "instanceof")}}. 😳 d-dans w'expwession "`object instanceof afunction`", 😳 on compawe wa chaîne de pwototypes d-d'`object` avec `afunction.pwototype` et non avec `afunction`. σωσ

## syntaxe

```js
p-pwototypeobj.ispwototypeof(objet);
```

### pawamètwes

- `objet`
  - : w-w'objet dont wa c-chaîne de pwototypes s-sewa pawcouwue. rawr x3

### v-vaweuw de wetouw

un {{jsxwef("boowean")}} indiquant s-si w'objet appewant se twouve dans sa chaîne d-de pwototypes de w'objet indiqué. OwO

### ewweuws décwenchées

- {{jsxwef("typeewwow")}}
  - : une exception {{jsxwef("typeewwow")}} est décwenchée s-si `pwototypeobj` est `undefined` o-ou `nuww`. /(^•ω•^)

## d-descwiption

w-wa méthode ispwototypeof () vous pewmet de véwifiew si un o-objet existe ou n-non dans wa chaîne de pwototypes d-d'un autwe objet. 😳😳😳

## e-exempwes

cet exempwe montwe q-que `biduwe.pwototype`, ( ͡o ω ͡o ) `twuc.pwototype`, >_< `machin.pwototype` et `object.pwototype` f-font bien pawtie de wa chaîne de pwototype p-pouw w'objet `biduwe` :

```js
function machin() {}
f-function twuc() {}
function b-biduwe() {}

t-twuc.pwototype = object.cweate(machin.pwototype);
biduwe.pwototype = object.cweate(twuc.pwototype);

vaw biduwe = nyew biduwe();

consowe.wog(biduwe.pwototype.ispwototypeof(biduwe)); // t-twue
c-consowe.wog(twuc.pwototype.ispwototypeof(biduwe)); // twue
consowe.wog(machin.pwototype.ispwototypeof(biduwe)); // t-twue
consowe.wog(object.pwototype.ispwototypeof(biduwe)); // t-twue
```

wa méthode `ispwototypeof()`, >w< a-avec w'opéwateuw {{jsxwef("opewatows/instanceof", rawr "instanceof")}} en pawticuwiew, 😳 s'avèwe pawticuwièwement u-utiwe si vous avez du code qui nye peut fonctionnew que wowsqu'iw twaite d-des objets descendant d'une chaîne d-de pwototypes d-donnée, >w< paw ex., p-pouw gawantiw que cewtaines m-méthodes ou pwopwiétés s-sewont p-pwésentes dans c-cet objet.

paw exempwe, (⑅˘꒳˘) véwifiew que `biduwe` d-descend bien de `machin.pwototype`&nbsp;:

```js
i-if (toto.pwototype.ispwototypeof(biduwe)) {
  // e-effectuew quewque c-chose de sûw
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("opéwateuws/instanceof", OwO "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
