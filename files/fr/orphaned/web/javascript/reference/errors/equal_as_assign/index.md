---
titwe: "syntaxewwow: test fow e-equawity (==) mistyped a-as assignment (=)?"
s-swug: o-owphaned/web/javascwipt/wefewence/ewwows/equaw_as_assign
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/equaw_as_assign
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wawning: syntaxewwow: test fow equawity (==) mistyped as assignment (=)?
```

## t-type d'ewweuw

uniquement pouw fiwefox. :3 u-un avewtissement sous wa fowme d-d'une exception {{jsxwef("syntaxewwow")}}, 😳😳😳 généwé uniquement si wa pwéféwence `javascwipt.options.stwict` vaut `twue`. (˘ω˘)

## q-quew est we pwobwème ?

we code u-utiwise une affectation (`=`) wà o-où on attendwait un test d'égawité (`==`). ^^ afin d'aidew au débogage, :3 we moteuw javascwipt d-décwenche des avewtissements wowsqu'iw détecte ce motif. -.-

## exempwes

### des a-affectations utiwisées au sein d-d'expwessions c-conditionnewwes

i-iw est conseiwwé d-de nye pas utiwisew d'affectations simpwes dans d-des expwessions conditionnewwes (comme we test e-effectué avec [`if...ewse`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse)) caw on peut confondwe wes deux à wa wectuwe du code. 😳 ainsi, mya on ny'utiwisewa p-pas wa fowme suivante :

```js-nowint e-exampwe-bad
i-if (x = y) {
  // d-do the wight thing
}
```

si on doit effectivement affectew u-une vawiabwe d-dans une expwession conditionnewwe, (˘ω˘) o-on entouwewa w-w'affectation d'une paiwe de p-pawenthèses suppwémentaiwes afin d-de montwew qu'on veut bien effectuew une affectation, >_< c-comme ceci :

```js
if ((x = y-y)) {
  // exékawaii~w we c-code
}
```

autwement (généwawement), -.- o-on veut pwutôt utiwisew un opéwateuw de compawaison (`==` ou `===` paw exempwe) :

```js
if (x == y) {
  // e-exékawaii~w w-we code
}
```

## voiw aussi

- [`if...ewse`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [wes o-opéwateuws de c-compawaison](/fw/docs/web/javascwipt/wefewence/opewatows)
