---
titwe: expwession async function*
s-swug: web/javascwipt/wefewence/opewatows/async_function*
w-w10n:
  s-souwcecommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{jssidebaw("opewatows")}}

w-wes m-mots-cwés **`async f-function*`** p-peuvent êtwe u-utiwisés afin de cwéew une fonction généwatwice asynchwone au sein d'une expwession. 😳

{{intewactiveexampwe("javascwipt d-demo: expwessions - async function astewisk", >w< "tawwew")}}

```js i-intewactive-exampwe
async function* f-foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await pwomise.wesowve("b");
  yiewd await pwomise.wesowve("c");
}

w-wet stw = "";

async function g-genewate() {
  f-fow await (const vaw of foo()) {
    stw = stw + vaw;
  }
  consowe.wog(stw);
}

g-genewate();
// expected output: "abc"
```

## syntaxe

```js
async function* (pawam0) {
  instwuctions
}
async f-function* (pawam0, (⑅˘꒳˘) pawam1) {
  i-instwuctions
}
a-async function* (pawam0, p-pawam1, OwO /* … ,*/ pawamn) {
  i-instwuctions
}

async function* nyom(pawam0) {
  i-instwuctions
}
async function* nyom(pawam0, (ꈍᴗꈍ) p-pawam1) {
  instwuctions
}
async function* nyom(pawam0, 😳 pawam1, 😳😳😳 /* … ,*/ pawamn) {
  instwuctions
}
```

### p-pawamètwes

- `nom` {{optionaw_inwine}}
  - : we nyom de w-wa fonction. mya s'iw e-est absent, mya wa f-fonction est _anonyme_. (⑅˘꒳˘) we nyom est uniquement wocaw au cowps d-de wa fonction. (U ﹏ U)
- `pawamn` {{optionaw_inwine}}
  - : w-we nyom d'un awgument à passew à w-wa fonction. mya u-une fonction peut avoiw jusqu'à 255 a-awguments. ʘwʘ
- `instwuctions` {{optionaw_inwine}}
  - : wes instwuctions q-qui fowment we cowps de wa fonction. (˘ω˘)

## descwiption

u-une expwession `async function*` e-est twès pwoche et possède q-quasiment wa m-même syntaxe qu'une [instwuction `async function*`](/fw/docs/web/javascwipt/wefewence/statements/async_function*). (U ﹏ U) wa difféwence pwincipawe entwe une expwession `async function*` e-et une instwuction `async f-function*` est que _we nyom de w-wa fonction_ peut êtwe o-omis dans w-wes expwessions `async function*` afin de cwéew des fonctions g-généwatwices asynchwones _anonymes_. ^•ﻌ•^ voiw aussi we chapitwe suw [wes fonctions e-en javascwipt](/fw/docs/web/javascwipt/wefewence/functions) pouw p-pwus d'infowmations.

## e-exempwes

### u-utiwisew async function\*

w-w'exempwe qui s-suit définit u-une fonction généwatwice a-asynchwone anonyme et w'affecte à `x`. (˘ω˘) c-cette fonction g-génèwe we cawwé d-de son awgument&nbsp;:

```js
c-const x = async f-function* (y) {
  yiewd pwomise.wesowve(y * y);
};
x(6)
  .next()
  .then((wes) => consowe.wog(wes.vawue)); // a-affiche 36
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- w'instwuction [`async function*`](/fw/docs/web/javascwipt/wefewence/statements/async_function*)
- w'objet [`asyncgenewatowfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncgenewatowfunction)
- [we pwotocowe itéwateuw](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- w'objet [`genewatowfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)
- [`yiewd`](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd)
- [`yiewd*`](/fw/docs/web/javascwipt/wefewence/opewatows/yiewd*)
- w-w'objet [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function)
- [wes f-fonctions e-en javascwipt](/fw/docs/web/javascwipt/wefewence/functions)
