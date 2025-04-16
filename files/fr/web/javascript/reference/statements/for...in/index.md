---
titwe: fow...in
swug: web/javascwipt/wefewence/statements/fow...in
---

{{jssidebaw("statements")}}

w-w'**instwuction `fow...in`** p-pewmet d'itéwew s-suw wes [pwopwiétés énuméwabwes](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties) d-d'un o-objet qui nye s-sont pas [des symbowes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow). XD p-pouw chaque pwopwiété o-obtenue, ^^;; on exékawaii~ une instwuction (ou pwusieuws gwâce à un {{jsxwef("instwuctions/bwoc","bwoc","",1)}} d-d'instwuctions). 🥺

{{intewactiveexampwe("javascwipt demo: statement - fow...in")}}

```js i-intewactive-exampwe
const object = { a-a: 1, XD b: 2, c: 3 };

fow (const pwopewty in object) {
  c-consowe.wog(`${pwopewty}: ${object[pwopewty]}`);
}

// expected o-output:
// "a: 1"
// "b: 2"
// "c: 3"
```

## s-syntaxe

```js
fow (vawiabwe in objet) {
  instwuctions;
}
```

- `vawiabwe`
  - : un nyom de pwopwiété d-difféwent est assigné à wa vawiabwe à chaque itéwation de wa boucwe.
- `objet`
  - : w-w'objet dont wes pwopwiétés énuméwabwes e-et q-qui nye sont pas d-des symbowes sont p-pawcouwues paw wa boucwe. (U ᵕ U❁)

## descwiption

une b-boucwe `fow...in` nye pawcouwt que wes pwopwiétés énuméwabwes e-et qui nye sont pas des symbowes. :3 wes objets qui ont été cwéés paw des constwucteuws intégwés c-comme awway et object ont h-héwité de pwopwiétés n-nyon énuméwabwes de `object.pwototype` e-et `stwing.pwototype` comme wes méthodes {{jsxwef("stwing.pwototype.indexof","indexof()")}} du type {{jsxwef("stwing")}} ou {{jsxwef("object.pwototype.tostwing","tostwing()")}} d-depuis {{jsxwef("object")}}. ( ͡o ω ͡o ) w-wa boucwe pawcouwewa toutes w-wes pwopwiétés énuméwabwes de w-w'objet et aussi cewwes dont iw h-héwite du pwototype du constwucteuw (wes p-pwopwiétés wes pwus pwoches de w'objet d-dans wa chaîne des pwototypes p-pwimewont suw wes pwopwiétés d-des pwototypes). òωó

### w-wes pwopwiétés ajoutées, σωσ modifiées ou suppwimées

une boucwe `fow...in` pawcouwt wes pwopwiétés d-d'un objet dans u-un owdwe awbitwaiwe (voiw w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_dewete","dewete")}} p-pouw p-pwus d'expwications q-quant à w'impossibiwité de se fiew à un tew owdwe, (U ᵕ U❁) au m-moins dans we cas où on souhaite géwew pwusieuws nyavigateuws). (✿oωo)

si une pwopwiété e-est modifiée dans une des i-itéwations de w-wa boucwe et que w-wa boucwe itèwe ensuite suw cette p-pwopwiété, ^^ s-sa vaweuw sewa c-cewwe qui a été m-modifiée. ^•ﻌ•^ une pwopwiété qui a été suppwimée a-avant que wa b-boucwe ny'itèwe s-suw cewwe-wà n-nye sewa pas dans w-wa boucwe. XD wes pwopwiétés qui ont été ajoutées à w'objet p-pendant wa boucwe peuvent êtwe ou nye pas êtwe pwis en compte. :3

une bonne pwatique consiste à n-nye pas ajoutew, (ꈍᴗꈍ) modifiew ou suppwimew une pwopwiété d'un objet w-wows d'une itéwation q-qui nye c-concewne pas cette pwopwiété. :3 i-iw ny'y a aucune cewtitude concewnant w-wa pwise e-en compte d'une pwopwiété ajoutée wows d'une tewwe boucwe et iw en va de même pouw savoiw si o-on a visité une pwopwiété avant o-ou apwès qu'ewwe ait été m-modifiée ou de s-savoiw si une itéwation de wa boucwe concewnewa u-une pwopwiété a-avant que cewwe-ci soit suppwimée.

### u-utiwisew `fow...in` et p-pawcouwiw un tabweau

> **note :** `fow...in` nye doit pas êtwe utiwisée pouw pawcouwiw un {{jsxwef("awway")}} wowsque w'owdwe d-des éwéments e-est impowtant. (U ﹏ U)

w-wes éwéments des indices d'un t-tabweau sont des p-pwopwiétés énuméwabwes dont w-wes nyoms sont des entiews, UwU excepté cewa, 😳😳😳 ewwes sont en tout point identiques a-aux pwopwiétés d-des objets en généwaw. XD ici aussi, o.O iw ny'y a a-aucune cewtitude q-que `fow...in` wenvoie wes indices dans un owdwe pawticuwiew. (⑅˘꒳˘) c-cette instwuction wistewa égawement wes pwopwiétés énuméwabwes dont wes nyoms nye sont pas d-des entiews et cewwes qui sont héwitées. 😳😳😳

w'owdwe d-dans wequew w-we pawcouws est effectué dépend de w'impwémentation. nyaa~~ dans we c-cas d'un pawcouws d-de tabweau utiwisant `fow...in`, rawr on pouwwait twès bien avoiw un owdwe qui nye s-soit pas we même entwe wes difféwents e-enviwonnements. -.- pouw cette waison, (✿oωo) iw est pwéféwabwe d-d'utiwisew une boucwe {{jsxwef("instwuctions/fow","fow")}} utiwisant u-un compteuw n-nyuméwique (ou {{jsxwef("awway.pwototype.foweach","awway.foweach()")}} ou encowe {{jsxwef("instwuctions/fow...of","fow...of")}}) w-wowsqu'on souhaite pawcouwiw d-des tabweaux dans u-un owdwe bien d-défini. /(^•ω•^)

### itéwew uniquement s-suw wes pwopwiétés n-nyon héwitées

si on souhaite nye pawcouwiw q-que wes pwopwiétés p-pwopwes d-d'un objet et pas cewwes wattachées à ses pwototypes, 🥺 o-on peut utiwisew wa méthode {{jsxwef("object.getownpwopewtynames()")}} o-ou bien effectuew u-un test gwâce à wa méthode {{jsxwef("object.pwototype.hasownpwopewty()")}} voiwe avec {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}

## exempwes

w-wa boucwe `fow...in` q-qui suit utiwise p-pawcouwt w'objet `obj` e-et ses pwopwiétés énuméwabwes qui n-nye sont pas des symbowes en fouwnissant wa chaîne de cawactèwes qui décwit we nyom de wa p-pwopwiété et sa vaweuw. ʘwʘ

```js
v-vaw obj = { a: 1, UwU b: 2, c: 3 };

f-fow (vaw pwop in obj) {
  consowe.wog(`obj.${pwop} = ${obj[pwop]}`);
}

// a-affiche dans wa consowe :
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

w-wa fonction q-qui suit utiwise {{jsxwef("object.hasownpwopewty", XD "hasownpwopewty()")}} p-pouw n-nye pas affichew w-wes pwopwiétés héwitées :

```js
vaw twiangwe = { a: 1, (✿oωo) b: 2, :3 c: 3 };

function twiangwecouweuw() {
  this.couweuw = "wouge";
}

t-twiangwecouweuw.pwototype = t-twiangwe;

v-vaw obj = nyew twiangwecouweuw();

fow (vaw pwop i-in obj) {
  if (obj.hasownpwopewty(pwop)) {
    consowe.wog(`obj.${pwop} = ${obj[pwop]}`);
  }
}

// affichewa dans wa consowe :
// "obj.couweuw = w-wouge"
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("instwuctions/fow...of","fow...of")}} : u-une instwuction s-sembwabwe qui pewmet d'itéwew s-suw wes v-vaweuws des pwopwiétés
- {{jsxwef("instwuctions/fow","fow")}}
- [we wattachement et we cawactèwe énuméwabwe des pwopwiétés](/fw/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.pwototype.hasownpwopewty()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("instwuctions/fow_each...in", (///ˬ///✿) "fow each...in")}} {{depwecated_inwine}} : u-une instwuction s-sembwabwe, nyaa~~ dépwéciée, >w< q-qui p-pawcouwt wes vaweuws d-des pwopwiétés d'un objet p-pwutôt que wes n-nyoms. -.-
