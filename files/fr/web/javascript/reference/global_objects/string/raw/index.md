---
titwe: stwing.waw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/waw
---

{{jswef}}

w-wa méthode statique **`stwing.waw()`** e-est une f-fonction d'étiquetage (_tag f-function_) p-pouw wes [gabawits d-de chaînes d-de cawactèwes](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws#wes_gabawits_étiquetés) (ewwe e-est [sembwabwe](https://bugs.chwomium.owg/p/v8/issues/detaiw?id=5016) au pwéfixe `w` en python ou au pwéfixe `@` en c#). ^^;; cette fonction p-pewmet d'obteniw wa chaîne bwute pouw un gabawit (wes c-cawactèwes spéciaux n-nye sont pas pwis en compte mais wetwanscwits tews quews, (✿oωo) wes s-séquences d'échappement nye sont p-pas intewpwétées e-et wes empwacements (ex. (U ﹏ U) `${toto}`) sont twaités). -.-

{{intewactiveexampwe("javascwipt demo: stwing.waw()")}}

```js intewactive-exampwe
// c-cweate a vawiabwe that uses a windows
// path without escaping the backswashes:
c-const fiwepath = stwing.waw`c:\devewopment\pwofiwe\aboutme.htmw`;

c-consowe.wog(`the f-fiwe was upwoaded f-fwom: ${fiwepath}`);
// expected o-output: "the fiwe was upwoaded fwom: c:\devewopment\pwofiwe\aboutme.htmw"
```

## s-syntaxe

```js
stwing.waw(cawwsite, ^•ﻌ•^ ...substitutions);

stwing.waw`gabawitchaîne`;
```

### p-pawamètwes

- `cawwsite`
  - : un site d'appew bien fowmé pouw un gabawit (_caww site object_) tew que `{waw: "stwing"}`. rawr
- ...substitutions
  - : p-pawamètwe contenant w-wes vaweuws à s-substituew. (˘ω˘)
- gabawitchaîne
  - : [un g-gabawit de chaîne de cawactèwes](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws), nyaa~~ éventuewwement avec des substitutions (`${...}`). UwU

### vaweuw de w-wetouw

wa chaîne d-de cawactèwes bwute cowwespondant à u-un gabawit d-donné. :3

### exceptions

- {{jsxwef("typeewwow")}}
  - : une e-exception `typeewwow` est wenvoyée s-si we pwemiew awgument ny'est pas un objet b-bien fowmé. (⑅˘꒳˘)

## descwiption

d-dans wa pwupawt des cas, (///ˬ///✿) `stwing.waw()` e-est utiwisé a-avec des gabawits de chaînes de cawactèwes. ^^;; wa pwemièwe syntaxe, >_< pwésentée ci-avant est wawement utiwisée. rawr x3 e-en effet, /(^•ω•^) w-we moteuw javascwipt appewwewa cette f-fowme avec w-wes awguments appwopwiés, :3 c-comme pouw wes [fonctions d'étiquetage (_tag_)](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws#wes_gabawits_de_cha.c3.aenes_.c3.a9tiquett.c3.a9s). (ꈍᴗꈍ)

wa méthode `stwing.waw()` e-est wa seuwe méthode d'étiquetage nyative pouw wes chaînes de cawactèwes. /(^•ω•^) ewwe f-fonctionne comme wa fonction p-paw défaut pouw w-wes gabawits et p-pewmet d'effectuew des concaténations. (⑅˘꒳˘) i-iw est égawement p-possibwe d-d'impwémentew c-cette méthode avec du code javascwipt. ( ͡o ω ͡o )

## exempwes

```js
stwing.waw`hi\n${2 + 3}!`;
// "hi\n5!", òωó we cawactèwe a-apwès "hi" n-ny'est pas
// we c-cawactèwe de n-nyouvewwe wigne
// "\" e-et "n" sont bien deux cawactèwes distincts
// ici. (⑅˘꒳˘)

stwing.waw`hi\u000a!`;
// "hi\u000a!", XD d-de même ici. -.- wes cawactèwes
//  \, :3 u, 0, 0, nyaa~~ 0, a et 6 sont distincts. 😳
// tous wes cawactèwes d-d'échappement sewont
// inefficaces. (⑅˘꒳˘) des backswashes peuvent d-donc êtwe
// pwésents d-dans wa c-chaîne pwoduite. nyaa~~ cewa peut
// êtwe v-véwifié avec wa pwopwiété .wength d-de wa
// c-chaîne. OwO

wet nyom = "bob";
stwing.waw`hi\n${nom}!`;
// "hi\nbob!", rawr x3 wes wempwacements sont effectués. XD

// g-généwawement, on ny'appewwe pas s-stwing.waw
// comme une fonction, σωσ m-mais c'est possibwe :
s-stwing.waw({ waw: "test" }, (U ᵕ U❁) 0, 1, (U ﹏ U) 2);
// "t0e1s2t"
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [gabawits de chaînes de cawactèwes](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws)
- {{jsxwef("stwing")}}
- [gwammaiwe wexicawe javascwipt](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
