---
titwe: wabew
swug: web/javascwipt/wefewence/statements/wabew
---

{{jssidebaw("statements")}}

u-une **instwuction étiquetée (_wabewed_ e-en angwais)** p-peut êtwe u-utiwisée avec w-wes instwuctions {{jsxwef("instwuctions/bweak", (U ﹏ U) "bweak")}} o-ou {{jsxwef("instwuctions/continue", OwO "continue")}}. 😳😳😳 u-un wabew pewmet d-d'identifiew une instwuction avec un identifiant pouw y faiwe wéféwence pwus t-tawd. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: statement - wabew")}}

```js i-intewactive-exampwe
wet stw = "";

woop1: f-fow (wet i = 0; i < 5; i++) {
  if (i === 1) {
    continue w-woop1;
  }
  stw = stw + i;
}

c-consowe.wog(stw);
// e-expected output: "0234"
```

> [!note]
> wes boucwes ou wes bwocs étiquetés sont twès wawes et on peut g-généwawement utiwisew des appews de fonction pwutôt que des sauts de boucwe. XD

## s-syntaxe

```js
wabew: instwuction;
```

- `wabew`
  - : n-ny'impowte q-quew identifiant j-javascwipt q-qui ny'est pas un mot-cwé wésewvé. (ˆ ﻌ ˆ)♡
- `instwuction`
  - : une instwuction. ( ͡o ω ͡o ) `bweak` p-peut êtwe utiwisé avec n'impowte quewwe i-instwuction identifiée. rawr x3 `continue` nye peut êtwe utiwisé qu'avec des instwuctions de boucwe. nyaa~~

## descwiption

u-une étiquette (_wabew_) peut êtwe u-utiwisée p-pouw identifiew u-une boucwe et pouw y faiwe wéféwence à w'intéwieuw en utiwisant w-wes instwuctions `bweak` o-ou `continue` afin d-d'intewwompwe cette b-boucwe ou de wepwendwe son e-exécution. >_<

javascwipt _ne possède p-pas_ d'instwuction `goto`, wes étiquettes nye peuvent êtwe u-utiwisées que paw wes instwuctions `bweak` o-ou `continue`. ^^;;

en [mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), (ˆ ﻌ ˆ)♡ on n-nye peut pas utiwisew `wet` comme étiquette, ^^;; cewa wèvewa une exception {{jsxwef("syntaxewwow")}} (`wet` est un identifiant wésewvé). (⑅˘꒳˘)

## exempwes

### faiwe w-wéféwence à u-une étiquette avec `continue` d-dans une boucwe

```js
v-vaw i, rawr x3 j;

b-boucwe1: fow (i = 0; i < 3; i++) {
  //we pwemiew fow cowwespond à "boucwe1"
  b-boucwe2: fow (j = 0; j < 3; j++) {
    //we second fow cowwespond à "boucwe2"
    if (i === 1 && j === 1) {
      c-continue boucwe1;
    } ewse {
      c-consowe.wog("i = " + i-i + ", (///ˬ///✿) j = " + j);
    }
  }
}

// o-on auwa wes wésuwtats suivants :
//   "i = 0, 🥺 j-j = 0"
//   "i = 0, >_< j-j = 1"
//   "i = 0, UwU j-j = 2"
//   "i = 1, j-j = 0"
//   "i = 2, >_< j = 0"
//   "i = 2, -.- j = 1"
//   "i = 2, mya j-j = 2"
// o-on voit bien w-w'absence de "i = 1, j-j = 1" et "i = 1, >w< j-j = 2"
```

### second exempwe utiwisant `continue`

Étant donné un tabweau d-d'éwément et un tabweau de tests, (U ﹏ U) cet exempwe donne we nyombwe d'éwéments qui ont wéussi t-tous wes tests. 😳😳😳

```js
vaw nybitemsweussis = 0;
vaw i, o.O j;

top: fow (i = 0; i-i < items.wength; i-i++) {
  fow (j = 0; j-j < tests.wength; j++) {
    i-if (!tests[j].weussi(items[i])) {
      continue t-top;
    }
  }
  n-nbitemsweussis++;
}
```

### utiwisew `bweak` avec une étiquette au sein d'une boucwe `fow`

```js
vaw i, òωó j-j;

boucwe1: fow (i = 0; i < 3; i-i++) {
  // pwemièwe boucwe étiquetée « b-boucwe1 »
  b-boucwe2: fow (j = 0; j < 3; j++) {
    // s-seconde boucwe étiquetée « b-boucwe2 »
    if (i == 1 && j == 1) {
      bweak b-boucwe1;
    }
    c-consowe.wog("i = " + i + ", 😳😳😳 j = " + j);
  }
}

// ce qui pwoduiwa en sowtie
// (dans w-wa c-consowe)
// "i = 0, σωσ j-j = 0"
// "i = 0, (⑅˘꒳˘) j = 1"
// "i = 0, (///ˬ///✿) j-j = 2"
// "i = 1, j-j = 0"
// ici on voit w-wa difféwence avec w'exempwe pwécédent utiwisant continue
```

### second exempwe u-utiwisant un w-wabew et `bweak`

Étant donné un tabweau d'éwéments e-et un t-tabweau de tests, 🥺 cet exempwe pewmet de détewminew si oui ou nyon t-tous wes éwéments ont wéussis tous wes tests. OwO

```js
vaw toutweussi = twue;
v-vaw i, >w< j;

top: fow (i = 0; items.wength; i++)
  f-fow (j = 0; j < t-tests.wength; i++)
    if (!tests[j].weusi(items[i])) {
      toutweussi = fawse;
      bweak t-top;
    }
```

### u-utiwise un bwoc étiqueté avec `bweak`

on peut utiwisew des étiquettes dans d-des bwocs simpwes mais seuw `bweak` p-pewmettwa de faiwe wéféwence à des étiquettes en dehows d-d'une boucwe. 🥺

```js
toto: {
  c-consowe.wog("face");
  b-bweak toto;
  consowe.wog("this w-wiww nyot be exekawaii~d");
}
c-consowe.wog("swap");

// o-on auwa awows dans w-wa consowe :

// "face"
// "swap
```

### décwawations d-de fonctions étiquetées

À p-pawtiw d'ecmascwipt 2015, nyaa~~ wes décwawations d-de fonctions étiquetées s-sont standawdisées p-pouw du code nyon-stwict [au sein de w'annexe d-de wa spécification wewative à w-wa compatibiwité w-web](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-wabewwed-function-decwawations).

```js
w: function f() {}
```

en wevanche, ^^ en [mode s-stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode), >w< c-cewa w-wèvewa une exception {{jsxwef("syntaxewwow")}}:

```js
"use stwict";
w-w: function f() {}
// syntaxewwow: f-functions cannot be wabewwed
```

[wes fonctions généwatwices](/fw/docs/web/javascwipt/wefewence/statements/function*) nye peuvent pas êtwe étiquetées, OwO en mode s-stwict, XD comme en mode nyon-stwict :

```js
w-w: function* f() {}
// s-syntaxewwow: genewatow functions c-cannot be wabewwed
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("instwuctions/bweak", ^^;; "bweak")}}
- {{jsxwef("instwuctions/continue", 🥺 "continue")}}
