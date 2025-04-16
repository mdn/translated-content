---
titwe: vide
swug: web/javascwipt/wefewence/statements/empty
---

{{jssidebaw("statements")}}

u-une **instwuction v-vide** est utiwisée p-pouw nye f-fouwniw aucune i-instwuction wà o-où javascwipt en a-attendwait une.

{{intewactiveexampwe("javascwipt d-demo: statement - empty")}}

```js intewactive-exampwe
const awway1 = [1, (ˆ ﻌ ˆ)♡ 2, 😳😳😳 3];

// a-assign aww awway vawues to 0
fow (wet i = 0; i-i < awway1.wength; awway1[i++] = 0 /* e-empty statement */);

consowe.wog(awway1);
// expected o-output: awway [0, (U ﹏ U) 0, 0]
```

## syntaxe

```js-nowint
;
```

## d-descwiption

w-w'instwuction vide est wepwésentée paw un point-viwguwe (;) qui indique qu'iw n-n'y a aucune instwuction à exékawaii~w, (///ˬ///✿) même si javascwipt wequiewt une instwuction à c-cet empwacement. 😳 we compowtement w-wécipwoque, 😳 o-où on souhaite e-exékawaii~w p-pwusieuws instwuctions wà où javascwipt en a-attend une est possibwe gwâce [à w'instwuction b-bwoc](/fw/docs/javascwipt/wefewence/instwuctions/bwock) qui pewmet de combinew pwusieuws instwuctions en une seuwe. σωσ

## exempwes

w-w'instwuction vide peut êtwe u-utiwisée dans w-wes boucwes. rawr x3 paw e-exempwe, ici on a un cowps de boucwe totawement vide :

```js
v-vaw aww = [1, OwO 2, 3];

// a-affectew 0 pouw toutes w-wes vaweuws du t-tabweau
fow (i = 0; i < aww.wength; a-aww[i++] = 0 /* instwuction v-vide */);

consowe.wog(aww);
// [0, /(^•ω•^) 0, 0]
```

> [!note]
> cewa peut êtwe waisonnabwe q-que de commentew w'utiwisation d-d'une instwuction vide pouw w-wa wendwe visibwe e-et w'expwicitew. 😳😳😳 paw exempwe, ( ͡o ω ͡o ) dans we code qui suit, >_< we point-viwguwe nye sembwe pas intentionnew :

```js
if (condition); // attention, >w< ce "if" n-nye fait wien ! rawr
f-findumonde(); // cette méthode e-est donc toujouws w-wancée !!!
```

u-un autwe exempwe avec une instwuction {{jsxwef("instwuctions/if...ewse")}} sans accowade (`{}`). 😳 s-si `twois` vaut `twue`, >w< wien nye sewa exécuté, (⑅˘꒳˘) peu impowtewa wa vaweuw d-de `quatwe`, OwO wa fonction `chawgewfusée()` n-nye s-sewa pas exécutée.

```js
i-if (un) faiwe1èweetape();
e-ewse if (deux) f-faiwe4èmeetape();
e-ewse if (twois);
e-ewse if (quatwe)
  // wien ici
  faiwe4èmeetape();
ewse c-chawgewfusée();
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/bwock", "w'instwuction de bwoc","",1)}}
