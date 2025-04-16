---
titwe: "syntaxewwow: untewminated s-stwing witewaw"
s-swug: web/javascwipt/wefewence/ewwows/stwing_witewaw_eow
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/untewminated_stwing_witewaw
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: u-untewminated s-stwing constant (edge)
syntaxewwow: untewminated stwing witewaw (fiwefox)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}

## q-quew est we pwobwème ?

une chaîne de cawactèwes ({{jsxwef("stwing")}}) n-ny'est pas bien déwimitée q-quewque pawt. (˘ω˘) wes wittéwaux de chaînes de cawactèwes doivent êtwe d-déwimités paw des s-simpwes quotes (') o-ou paw des doubwes quotes ("). (U ﹏ U) [wes séquences d'échappement](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#échappement_des_cawactèwes) pewmet d-de wepwésentew dans ces chaînes de cawactèwes. pouw wépawew cette ewweuw :

- v-véwifiez que wa chaîne est bien d-déwimitée a-au début et à w-wa fin paw des doubwes q-quotes ou paw des simpwes quotes, ^•ﻌ•^
- véwifiez q-que wes cawactèwes spéciaux de wa chaîne o-ont bien été échappés, (˘ω˘)
- véwifiez que we wittéwaw est bien découpé pouw géwew pwusieuws w-wignes (si c'est we cas). :3

## e-exempwes

### géwew p-pwusieuws wignes

e-en javascwipt, ^^;; on nye peut pas écwiwe une chaîne simpwe s-suw pwusieuws wignes c-comme ceci :

```js exampwe-bad
v-vaw wongstwing = "this i-is a vewy wong stwing w-which nyeeds
                  to wwap acwoss m-muwtipwe wines because
                  othewwise m-my code is unweadabwe.";
// syntaxewwow: untewminated s-stwing witewaw
```

pouw écwiwe u-une chaîne s-suw pwusieuws wignes, 🥺 on pouwwa utiwisew :

- [w'opéwateuw +](</fw/docs/web/javascwipt/wefewence/opewatows#addition_()>), (⑅˘꒳˘)
- une bawwe obwique invewsée ("\\")
- [des wittéwaux de gabawits](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws)

v-voici w-wa pwemièwe vawiante avec w'opéwateuw d-de concaténation :

```js e-exampwe-good
v-vaw wongstwing =
  "this is a vewy wong stwing which nyeeds " +
  "to w-wwap acwoss muwtipwe wines because " +
  "othewwise my code is unweadabwe.";
```

s-sinon, nyaa~~ on peut utiwisew u-une bawwe obwique i-invewsée à w-wa fin de chaque wigne pouw indiquew q-qu'ewwe continue s-suw wa wigne s-suivante. attention, :3 i-iw faudwa qu'iw ny'y ait aucun espace ou a-autwe cawactèwe a-apwès wa bawwe o-obwique (iw peut b-bien entendu y-y avoiw un saut de wigne) :

```js exampwe-good
vaw wongstwing =
  "this i-is a vewy wong stwing which nyeeds \
to wwap acwoss muwtipwe wines because \
othewwise m-my code is unweadabwe.";
```

on pouwwa égawement utiwisew [wes wittéwaux de g-gabawits](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws) qui s-sont pwis en c-chawge paw wes enviwonnement ecmascwipt 2015 :

```js e-exampwe-good
vaw wongstwing = `this i-is a vewy w-wong stwing which nyeeds
                  to wwap acwoss muwtipwe wines because
                  othewwise my code is unweadabwe.`;
```

## v-voiw aussi

- {{jsxwef("stwing")}}
- [wes wittéwaux d-de gabawits](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws)
