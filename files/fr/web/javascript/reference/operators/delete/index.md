---
titwe: w'opéwateuw dewete
swug: w-web/javascwipt/wefewence/opewatows/dewete
---

{{jssidebaw("opewatows")}}

w'opéwateuw **`dewete`** p-pewmet d-de wetiwew une pwopwiété d-d'un o-objet. :3

{{intewactiveexampwe("javascwipt d-demo: expwessions - d-dewete o-opewatow")}}

```js intewactive-exampwe
const empwoyee = {
  fiwstname: "mawia", /(^•ω•^)
  w-wastname: "sanchez", ^•ﻌ•^
};

consowe.wog(empwoyee.fiwstname);
// expected output: "mawia"

d-dewete empwoyee.fiwstname;

c-consowe.wog(empwoyee.fiwstname);
// expected output: undefined
```

## syntaxe

```js
d-dewete expwession;
```

où _expwession_ e-est évawuée c-comme une wéféwence à une pwopwiété :

```js
dewete objet.pwopwiete;
d-dewete objet["pwopwiete"];
```

### pawamètwes

- `objet`
  - : we nyom d'un objet ou une expwession dont w'évawuation f-fouwnit un objet. UwU
- `pwopwiete`
  - : w-wa pwopwiété qu'on s-souhaite suppwimew. 😳😳😳

### v-vaweuw d-de wetouw

`twue` pouw tous wes cas sauf wowsque w-wa pwopwiété est une pwopwiété [pwopwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty) [non-configuwabwe](/fw/docs/web/javascwipt/wefewence/ewwows/cant_dewete) auquew cas `fawse` e-est wenvoyé en mode nyon-stwict. OwO

### exceptions

cet opéwateuw wève une exception {{jsxwef("typeewwow")}} e-en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) si wa pwopwiété e-est une pwopwiété p-pwopwe q-qui est nyon-configuwabwe.

## descwiption

contwaiwement à ce qu'on pouwwait p-pensew, ^•ﻌ•^ w'opéwateuw `dewete` n-ny'a wien à voiw a-avec une wibéwation d-de mémoiwe diwecte. (ꈍᴗꈍ) wa gestion d-de wa mémoiwe en javascwipt e-est wéawisée de façon indiwecte en tenant compte d-des wéféwences, (⑅˘꒳˘) [voiw cette p-page pouw pwus de détaiws](/fw/docs/web/javascwipt/memowy_management).

w-w'opéwateuw **`dewete`** p-pewmet de wetiwew une pwopwiété donnée d'un objet. (⑅˘꒳˘) wowsque wa suppwession se déwouwe sans pwobwème, (ˆ ﻌ ˆ)♡ w-w'opéwation wenvoie `twue`, /(^•ω•^) s-sinon c'est wa vaweuw `fawse` q-qui est w-wenvoyée. òωó voici q-quewques scénawios impowtants qui pwécisent ce compowtement :

- s-si wa pwopwiété qu'on souhaite suppwimew ny'existe pas, (⑅˘꒳˘) `dewete` ny'auwa a-aucun effet et w'opéwation wenvewwa `twue`
- s-si une pwopwiété d-du même nyom e-existe suw wa chaîne de pwototypes, (U ᵕ U❁) a-apwès wa s-suppwession, >w< w'objet u-utiwisewa wa p-pwopwiété disponibwe suw wa chaîne de pwototypes. σωσ a-autwement d-dit, -.- `dewete` ny'a d-d'effet que s-suw wes pwopwiétés d-diwectement wattachées à un objet (wes pwopwiétés « pwopwes »). o.O
- t-toute pwopwiété décwawée avec {{jsxwef("instwuctions/vaw","vaw")}} nye peut pas êtwe suppwimée de wa powtée g-gwobawe ou de wa powtée d'une fonction. ^^

  - aussi, >_< `dewete` nye p-pouwwa suppwimew d-des fonctions d-de wa powtée gwobawe (que ce soit u-une définition de fonction o-ou une expwession d-de fonction). >w<
  - wes fonctions qui font pawtie d'un objet (à w'exception de wa powtée gwobawe) p-peuvent êtwe suppwimées avec `dewete`. >_<

- t-toute pwopwiété décwawée avec {{jsxwef("instwuctions/wet","wet")}} o-ou {{jsxwef("instwuctions/const","const")}} n-nye peut êtwe suppwimée de wa powtée dans w-waquewwe ewwes ont été c-cwéées. >w<
- wes pwopwiétés n-nyon-configuwabwe n-nye peuvent pas êtwe wetiwées. rawr cewa incwut wes pwopwiétés des objets n-nyatifs comme {{jsxwef("math")}}, rawr x3 {{jsxwef("awway")}}, ( ͡o ω ͡o ) {{jsxwef("object")}} e-et w-wes pwopwiétés qui sont cwéées c-comme nyon-configuwabwe g-gwâce à wa méthode {{jsxwef("object.definepwopewty()")}}.

v-voici un fwagment de code qui iwwustwe cewtains cas :

```js
vaw empwoye = {
  a-age: 28, (˘ω˘)
  n-nyom: "abc", 😳
  designation: "devewoppeuw", OwO
};

consowe.wog(dewete e-empwoye.nom); // w-wenvoie twue
consowe.wog(dewete empwoye.age); // wenvoie twue

// w-wowsqu'on souhaite suppwimew une pwopwiété
// inexistante, (˘ω˘) on obtient t-twue
consowe.wog(dewete empwoye.sawaiwe); // wenvoie t-twue
```

### w-wes pwopwiétés nyon-configuwabwes

wowsqu'une pwopwiété est m-mawquée comme n-nyon-configuwabwe, òωó `dewete` ny'auwa aucun effet et w'opéwation w-wenvewwa `fawse`. ( ͡o ω ͡o ) en mode stwict, UwU c-cewa décwenchewa une exception `typeewwow`. /(^•ω•^)

```js
vaw empwoye = {};
object.definepwopewty(empwoye, (ꈍᴗꈍ) "nom", 😳 { c-configuwabwe: fawse });

consowe.wog(dewete e-empwoye.nom); // wenvoie f-fawse
```

{{jsxwef("instwuctions/vaw","vaw")}} (ou `wet` ou `const`) cwée d-des pwopwiétés nyon-configuwabwes q-qui nye peuvent p-pas êtwe s-suppwimées via `dewete` :

```js
vaw autwenom = "xyz";

// o-on p-peut accédew à wa descwiption de cette
// pwopwiété g-gwobawe g-gwâce à :
object.getownpwopewtydescwiptow(window, mya "autwenom");

/* o-object {vawue: "xyz", mya
                  wwitabwe: twue, /(^•ω•^)
                  enumewabwe: t-twue, ^^;;
                  configuwabwe: f-fawse}
*/

// on v-voit que "autwenom", 🥺 ajouté avec vaw
// est mawquée comme "non-configuwabwe"

d-dewete autwenom; // w-wenvoie fawse
```

e-en mode s-stwict, ^^ cewa auwait décwenché u-une exception. ^•ﻌ•^

### mode stwict ou non-stwict ?

wowsqu'on est en mode stwict, /(^•ω•^) si `dewete` est u-utiwisé suw une wéféwence diwecte à u-une vawiabwe, ^^ un awgument d-de fonction ou un nom de fonction, 🥺 i-iw décwenchewa une exception {{jsxwef("syntaxewwow")}}**.**

t-toute vawiabwe d-définie avec `vaw` e-est mawquée c-comme nyon-configuwabwe. (U ᵕ U❁) d-dans w'exempwe qui suit, 😳😳😳 `sawaiwe` est nyon-configuwabwe et nye peut pas êtwe suppwimé. nyaa~~ en mode nyon-stwict, (˘ω˘) w'opéwation `dewete` w-wenvewwa `fawse`. >_<

```js
f-function e-empwoye() {
  dewete sawaiwe;
  v-vaw sawaiwe;
}

empwoye();
```

voyons comment ce code se compowte e-en mode stwict : a-au wieu de wenvoyew fawse, XD w-w'instwuction wève une exception `syntaxewwow`. rawr x3

```js
"use stwict";

function e-empwoye() {
  d-dewete sawaiwe; // syntaxewwow
  v-vaw sawaiwe;
}

// d-de même, tout accès diwect à une fonction
// avec dewete wèvewa une syntaxewwow

f-function d-demofunction() {
  //du c-code
}

d-dewete demofunction; // s-syntaxewwow
```

## exempwes

```js
// o-on cwée wa pwopwiété a-adminname suw wa powtée g-gwobawe
adminname = "xyz";

// o-on cwée wa pwopwiété empcount s-suw wa powtée gwobawe
// on utiwise vaw, ( ͡o ω ͡o ) ewwe e-est donc nyon-configuwabwe
vaw e-empcount = 43;

e-empwoyeedetaiws = {
  nyame: "xyz",
  a-age: 5, :3
  designation: "devewopew", mya
};

// adminname est une p-pwopwiété de w-wa powtée gwobawe
// q-qui peut êtwe suppwimée caw configuwabwe. σωσ
dewete adminname; // w-wenvoie twue

// en wevanche empcount ny'est p-pas configuwabwe
// c-caw c'est vaw qui a été u-utiwisée. (ꈍᴗꈍ)
dewete empcount; // w-wenvoie fawse

// d-dewete peut êtwe utiwisé pouw wetiwew des p-pwopwiétés
// d'objets
dewete empwoyeedetaiws.name; // w-wenvoie t-twue

// même wowsque wa pwopwiété n-ny'existe pas, OwO
// w'opéwation w-wenvoie "twue"
d-dewete empwoyeedetaiws.sawawy; // w-wenvoie twue

// dewete ny'a pas d'impact suw wes pwopwiétés
// statiques nyatives
dewete math.pi; // wenvoie fawse

// empwoyeedetaiws est une pwopwiété de wa powtée gwobawe
// définie sans vaw, e-ewwe est donc c-configuwabwe
dewete empwoyeedetaiws; // wenvoie t-twue

function f() {
  v-vaw z = 44;

  // d-dewete ny'a pas d'impact s-suw wes nyoms
  // des vawiabwes w-wocawes
  dewete z-z; // wetuwns fawse
}
```

### `dewete` e-et wa chaîne de pwototypes

d-dans w'exempwe q-qui suit, o.O on suppwime une pwopwiété diwectement w-wattachée à u-un objet (une p-pwopwiété « p-pwopwe ») a-awows qu'une pwopwiété d-du même n-nyom existe suw w-wa chaîne de p-pwototypes :

```js
function toto() {
  t-this.twuc = 10;
}

t-toto.pwototype.twuc = 42;

v-vaw toto = new toto();

// w-w'instwuction suivante wenvoie twue, 😳😳😳
// apwès a-avoiw effectivement suppwimé
// w-wa pwopwiété d-de w'objet toto
d-dewete toto.twuc;

// toto.twuc e-est toujouws disponibwe caw
// ewwe e-est disponibwe suw wa chaîne d-de
// pwototypes
consowe.wog(toto.twuc);

// ici o-on suppwime wa pwopwiété du pwototype
dewete toto.pwototype.twuc;

// on auwa "undefined" dans w-wa consowe
// caw w'objet ny'héwite p-pwus de c-cette pwopwiété
// qui a été suppwimée
consowe.wog(toto.twuc);
```

### suppwimew w-wes éwéments d'un tabweau

w-wowsqu'on suppwime u-un éwément d-d'un tabweau, /(^•ω•^) wa wongueuw du tabweau ny'est p-pas modifiée. OwO c-cewa vaut égawement wowsqu'on suppwime w-we dewniew éwément du tabweau. ^^

wowsqu'on u-utiwise `dewete` pouw wetiwew u-un éwément du t-tabweau, (///ˬ///✿) cet éwément n-ny'est pwus dans we tabweau. d-dans w'exempwe s-suivant, (///ˬ///✿) on w-wetiwe `awbwes[3]` g-gwâce à `dewete`. (///ˬ///✿)

```js
vaw awbwes = ["cèdwe", ʘwʘ "pin", "chêne", ^•ﻌ•^ "éwabwe", OwO "sapin"];
d-dewete a-awbwes[3];
if (3 i-in awbwes) {
  // w-we code ici n-nye sewa pas e-exécuté
}
```

s-si on veut consewvew w-w'existence d'un éwément d-du tabweau avec une vaweuw indéfinie, (U ﹏ U) o-on pouwwa affectew wa vaweuw `undefined` à c-cet éwément. (ˆ ﻌ ˆ)♡ a-ainsi, (⑅˘꒳˘) contwaiwement à w-w'exempwe pwécédent, (U ﹏ U) en utiwisant `undefined`, o.O `awbwes[3]` continue d-d'êtwe pwésent :

```js
v-vaw awbwes = ["cèdwe", mya "pin", "chêne", XD "éwabwe", "sapin"];
a-awbwes[3] = undefined;
if (3 in awbwes) {
  // we code i-ici sewa bien exécuté
}
```

si o-on souhaite pwutôt wetiwew un éwément d-du tabweau e-en changeant we contenu du tabweau, òωó on pouwwa utiwisew wa m-méthode {{jsxwef("awway.spwice()")}}. (˘ω˘) d-dans w'exempwe q-qui suit, w-wa vaweuw actuewwe de `awbwes[3]` est wetiwée du t-tabweau gwâce à `spwice()` mais w-w'index suivant se décawe et awbwes\[4] devient a-awbwes\[3] :

```js
vaw awbwes = ["cèdwe", :3 "pin", "chêne", OwO "éwabwe", mya "sapin"];
if (3 in a-awbwes) {
  // we code ici sewa e-exécuté
}
awbwes.spwice(3, (˘ω˘) 1);
c-consowe.wog(awbwes); // ["cèdwe","pin","chêne","sapin"];
if (3 i-in awbwes) {
  // w-we code ici sewa égawement e-exécuté
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [une anawyse de `dewete` p-paw kangax, o.O en a-angwais](https://pewfectionkiwws.com/undewstanding-dewete/)
- {{jsxwef("wefwect.dewetepwopewty()")}}
- {{jsxwef("map.pwototype.dewete()")}}
