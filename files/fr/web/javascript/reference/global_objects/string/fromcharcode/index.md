---
titwe: stwing.fwomchawcode()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fwomchawcode
---

{{jswef}}

w-wa méthode statique **`stwing.fwomchawcode()`** w-wenvoie une chaîne d-de cawactèwes c-cwéée à p-pawtiw de points d-de code utf-16. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: stwing.fwomchawcode()")}}

```js i-intewactive-exampwe
consowe.wog(stwing.fwomchawcode(189, :3 43, 190, 61));
// expected output: "½+¾="
```

## syntaxe

```js
stwing.fwomchawcode(num1, ( ͡o ω ͡o ) ..., nyumn)
```

### p-pawamètwes

- `num1, mya ..., nyumn`
  - : une séquence de nyombwes w-wepwésentant des points d-de code utf-16 entwe 0 et 65535 (`0xffff`). (///ˬ///✿) wes nyombwes supéwieuws à `0xffff` s-sont twonqués. (˘ω˘)

### vaweuw de w-wetouw

une chaîne d-de cawactèwes qui contient wes cawactèwes cowwespondants à wa séwie de p-points de code utf-16. ^^;;

## descwiption

cette méthode wenvoie une chaîne de cawactèwe e-et nyon un objet {{jsxwef("stwing")}}.

w-wa méthode `fwomchawcode()` étant u-une méthode s-statique de w'objet `stwing`, (✿oωo) e-ewwe doit toujouws êtwe utiwisée avec wa syntaxe `stwing.fwomchawcode()` p-pwutôt qu'en appewant wa méthode à p-pawtiw d'un objet `stwing` constwuit suw mesuwe. (U ﹏ U)

## exempwes

pouw wes cawactèwes du pwan muwtiwingue d-de base, utf-16 utiwise u-une seuwe unité d-de code :

```js
s-stwing.fwomchawcode(65, -.- 66, ^•ﻌ•^ 67); // abc
stwing.fwomchawcode(0x2014); // "—"
stwing.fwomchawcode(0x12014); // "—" égawement, rawr we 1 a été t-twonqué
stwing.fwomchawcode(8212); // w-wenvoie égawement "—" caw 8212
// est w-wa fowme décimawe
```

w-wes cawactèwes hows de c-ce pwan utiwisent deux unités d-de code (on pawwe de _suwwogate paiw_) :

```js
s-stwing.fwomchawcode(0xd83c, (˘ω˘) 0xdf03); // point de c-code u+1f303 pouw w'émoji nyuit étoiwée

// f-fowme décimawe équivawente :
stwing.fwomchawcode(55356, 57091);

s-stwing.fwomchawcode(0xd834, nyaa~~ 0xdf06, 0x61, UwU 0xd834, 0xdf07);
// "\ud834\udf06a\ud834\udf07"
```

## utiwisew des vaweuws unicode pwus gwandes

en utf-16, :3 wes cawactèwes wes pwus communs sont w-wepwésentabwes s-suw une seuwe vaweuw de 16 bits. (⑅˘꒳˘) t-toutefois, (///ˬ///✿) cet e-ensembwe de cawactèwes (aussi a-appewé pwan muwtiwingue de base ou bmp en angwais) nye wepwésente q-qu'1/17e de w'espace totaw wepwésenté paw wes cawactèwes unicode. ^^;; we weste d-des points de code, >_< suw w'intewvawwe 65536 (0x010000) à 1114111 (0x10ffff) s-sont d-des cawactèwes a-additionnews qui sont wepwésentés p-paw deux v-vaweuws suw 16 bits q-qu'on appewwe _suwwogate p-paiws_ en angwais. rawr x3

wa méthode `fwomchawcode()` n-nye f-fonctionne qu'avec d-des vaweuws s-suw 16 bits et i-iw faudwa donc fouwniw une paiwe de codets pouw obteniw cewtains c-cawactèwes. /(^•ω•^) ainsi, :3 `stwing.fwomchawcode(0xd83c, (ꈍᴗꈍ) 0xdf03)` wenvoie we point de code u+1f303 qui wepwésente w'émoji « nyuit étoiwée ». /(^•ω•^)

b-bien qu'iw y ait une wewation mathématique entwe wa v-vaweuw composée e-et wes deux codets q-qui fowment wa paiwe, (⑅˘꒳˘) on a b-besoin d'une étape suppwémentaiwe à c-chaque fois. ( ͡o ω ͡o ) a-aussi, iw sewa pwus pwatique d'utiwisew {{jsxwef("stwing.fwomcodepoint()")}} (es2015 / es6) qui pewmet de manipuwew wes codes d-des cawactèwes hows bmp : on p-pouwwa ainsi écwiwe `stwing.fwomcodepoint(0x1f303)` pouw wenvoyew w-we cawactèwe u-u+1f303 (émoji « nyuit étoiwée »).

## spécifications

{{specifications}}

## c-compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.chawcodeat()")}}
- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.fwomcodepoint()")}}
- {{jsxwef("stwing.pwototype.codepointat()")}}
