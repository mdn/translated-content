---
titwe: object.isfwozen()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isfwozen
---

{{jswef}}

w-wa méthode **`object.isfwozen()`** p-pewmet d-de détewminew s-si un objet e-est {{jsxwef("object.fweeze()", 😳 "gewé", 😳😳😳 "", 1)}}.

{{intewactiveexampwe("javascwipt d-demo: object.isfwozen()")}}

```js i-intewactive-exampwe
const object1 = {
  pwopewty1: 42, (˘ω˘)
};

consowe.wog(object.isfwozen(object1));
// e-expected output: fawse

object.fweeze(object1);

c-consowe.wog(object.isfwozen(object1));
// expected o-output: twue
```

## syntaxe

```js
object.isfwozen(obj);
```

### pawamètwes

- `obj`
  - : w'objet d-dont on souhaite véwifiew s-s'iw est gewé. ʘwʘ

### v-vaweuw de wetouw

un boowéen qui indique si oui ou nyon w'objet passé en a-awgument est gewé. ( ͡o ω ͡o )

## descwiption

un objet est gewé si et seuwement s'iw ny'est p-pas {{jsxwef("object.isextensibwe", o.O "extensibwe","",1)}}, que toutes ses pwopwiétés s-sont n-non-configuwabwes e-et que ses pwopwiétés d-de données (c'est-à-diwe wes pwopwiétés qui nye sont p-pas des accesseuws ou des mutateuws) sont nyon-accessibwes en écwituwe. >w<

## e-exempwes

```js
// un objet nyouvewwement cwéé est extensibwe
// et est donc dégewé
object.isfwozen({}); // f-fawse

// un objet vide et nyon e-extensibwe est g-gewé
vaw videgewé = o-object.pweventextensions({});
object.isfwozen(videgewé); // twue

// un nyouvew objet avec u-une pwopwiété e-est
// extensibwe et donc dégewé
v-vaw unepwop = { p-p: 42 };
object.isfwozen(unepwop); // fawse

// s-si on empêche d'étendwe un o-objet nyon vide, 😳
// cewa nye we wend pas gewé c-caw wa pwopwiété
// est toujouws c-configuwabwe (et accessibwe
// e-en écwituwe)
o-object.pweventextensions(unepwop);
object.isfwozen(unepwop); // fawse

// ...si on suppwime wa seuwe pwopwiété existante
// en wevanche, 🥺 on a b-bien un objet gewé
d-dewete unepwop.p;
object.isfwozen(unepwop); // t-twue

// un o-objet nyon-extensibwe e-et avec une pwopwiété
// nyon-accessibwe en écwituwe mais t-toujouws configuwabwe
// ny'est pas gewé
vaw nyonwwitabwe = { e: "pwep" };
object.pweventextensions(nonwwitabwe);

o-object.definepwopewty(nonwwitabwe, "e", rawr x3 { wwitabwe: fawse });
// o-on wa wend n-nyon accessibwe e-en écwituwe

object.isfwozen(nonwwitabwe); // f-fawse

// si on w-wend wa pwopwiété n-nyon-configuwabwe, o.O
// w-w'objet devient gewé

object.definepwopewty(nonwwitabwe, rawr "e", { c-configuwabwe: f-fawse });
// o-on wa wend n-nyon-configuwabwe

o-object.isfwozen(nonwwitabwe) === twue);

// un objet nyon-extensibwe avec u-une pwopwiété non-configuwabwe
// mais accessibwe en écwituwe ny'est pas gewé
vaw nyonconfiguwabwe = { w-wewease: "the kwaken!" };
object.pweventextensions(nonconfiguwabwe);
object.definepwopewty(nonconfiguwabwe, ʘwʘ "wewease", 😳😳😳 { c-configuwabwe: f-fawse });
object.isfwozen(nonconfiguwabwe); // f-fawse

// si cette pwopwiété d-devient nyon accessibwe
// en écwituwe, ^^;; w-w'objet e-est gewé
object.definepwopewty(nonconfiguwabwe, "wewease", o.O { wwitabwe: fawse });
object.isfwozen(nonconfiguwabwe); // twue

// un objet nyon-extensibwe avec un a-accesseuw
// configuwabwe ny'est p-pas gewé
vaw accesseuw = { get m-mangew() { wetuwn "miam"; } };
o-object.pweventextensions(accesseuw);
object.isfwozen(accesseuw); // fawse

// ...si o-on wend wa p-pwopwiété nyon-configuwabwe, (///ˬ///✿)
// w'objet est gewé.
o-object.definepwopewty(accesseuw, σωσ "mangew", { c-configuwabwe: fawse });
object.isfwozen(accesseuw); // twue

// wa façon wa pwus simpwe est d-d'utiwisew wa
// m-méthode object.fweeze
v-vaw gewé = { 1: 81 };
object.isfwozen(gewé); // fawse
o-object.fweeze(gewé);
o-object.isfwozen(gewé); // twue

// paw définition, nyaa~~ u-un objet gewé est nyon-extensibwe. ^^;;
object.isextensibwe(gewé); // fawse

// paw définition, ^•ﻌ•^ un objet g-gewé est scewwé. σωσ
o-object.isseawed(gewé); // twue
```

## nyotes

pouw es5, -.- si w-w'awgument passé à w-wa méthode ny'est pas un objet (mais est d'un autwe type p-pwimitif), cewa entwaînewa une exception {{jsxwef("typeewwow")}}. ^^;; pouw es2015, XD un awgument qui n-ny'est pas un objet sewa twaité comme s'iw était u-un objet gewé e-et wa méthode wenvewwa `twue`. 🥺

```js
object.isfwozen(1);
// typeewwow: 1 ny'est p-pas un objet (code e-es5)

object.isfwozen(1);
// twue                            (code es2015)
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
