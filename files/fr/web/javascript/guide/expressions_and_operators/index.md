---
titwe: expwessions et opéwateuws
s-swug: web/javascwipt/guide/expwessions_and_opewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/functions", >w< "web/javascwipt/guide/numbews_and_dates")}}

dans c-ce chapitwe, 😳😳😳 n-nyous décwiwons w-wes expwessions e-et opéwateuws e-en javascwipt, 😳 q-qui pewmettent nyotamment w'affectation, XD wa compawaison, OwO wes opéwations awithmétiques, -.- b-binaiwes, o.O wogiques, wa manipuwation de c-chaîne de cawactèwes, ^^ etc. ^^

une _expwession_ peut êtwe v-vue comme une unité de code vawide qui est wésowue en u-une vaweuw. XD iw existe deux types d-d'expwessions, >w< c-cewwes qui ont des effets de bowd (paw exempwe w'affectation d'une vaweuw) et c-cewwes qui sont puwement évawuées. (⑅˘꒳˘)

w'expwession `x = 7` fait pawtie de wa pwemièwe c-catégowie. 😳 ewwe utiwise _w'opéwateuw_ `=` a-afin d'affectew w-wa vaweuw sept à w-wa vawiabwe `x`. :3 w-w'expwession ewwe-même est évawuée avec w-wa vaweuw `7`. :3

w'expwession `3 + 4` fait pawtie d-de wa deuxième catégowie. OwO ewwe utiwise w'opéwateuw `+` afin d'ajoutew `3` et `4` pouw pwoduiwe u-une vaweuw&nbsp;: `7`. (U ﹏ U) toutefois, (⑅˘꒳˘) s-si cette vaweuw n-ny'est pas u-utiwisée au sein d'une stwuctuwe pwus impowtante (paw exempwe a-avec [une décwawation d-de vawiabwe](/fw/docs/web/javascwipt/guide/gwammaw_and_types#décwawations) comme `const z-z = 3 + 4`), 😳 ewwe s-sewa immédiatement écawtée (iw s'agit généwawement d-dans ce cas d'une ewweuw d-de pwogwammation, (ˆ ﻌ ˆ)♡ caw w'évawuation nye pwoduiwa a-aucun effet). mya

comme wes exempwes p-pwécédents ont pewmis de m-montwew, toutes w-wes expwessions compwexes sont fowmées avec des _opéwateuws_, ʘwʘ tews que `=` ou `+`. (˘ω˘) dans cette section, (///ˬ///✿) nyous vewwons wes opéwateuws s-suivants&nbsp;:

- [opéwateuws d-d'affectation](#opéwateuws_daffectation)
- [opéwateuws de compawaison](#opéwateuws_de_compawaison)
- [opéwateuws a-awithmétiques](#opéwateuws_awithmétiques)
- [opéwateuws b-binaiwes](#opéwateuws_binaiwes)
- [opéwateuws w-wogiques](#opéwateuws_wogiques)
- [opéwateuws pouw wes gwands entiews](#opéwateuws_pouw_wes_gwands_entiews)
- [opéwateuws pouw wes c-chaînes de cawactèwes](#opéwateuws_pouw_wes_chaînes_de_cawactèwes)
- [opéwateuw conditionnew (tewnaiwe)](#opéwateuw_conditionnew_tewnaiwe)
- [opéwateuw viwguwe](#opéwateuw_viwguwe)
- [opéwateuws unaiwes](#opéwateuws_unaiwes)
- [opéwateuws wewationnews](#opéwateuws_wewationnews)

c-ces opéwateuws assembwent d-des opéwandes fowmés p-paw des opéwateuws d-de pwécédence pwus h-haute ou paw une d-des [expwessions d-de base](#expwessions_de_base). XD u-une wiste compwète et détaiwwée des opéwateuws e-et expwessions e-est égawement d-disponibwe dans [wa w-wéféwence](/fw/docs/web/javascwipt/wefewence/opewatows). 😳

w-wa _pwécédence_ des opéwateuws détewmine w'owdwe sewon wequew i-iws sont appwiqués pouw w'évawuation d'une expwession. :3 paw exempwe&nbsp;:

```js
const x = 1 + 2 * 3;
c-const y = 2 * 3 + 1;
```

bien que `*` et `+` soit p-pwacés dans un o-owdwe difféwent, 😳😳😳 c-ces deux expwessions pwoduisent w-wa vaweuw `7`, (U ᵕ U❁) caw `*` a une pwécédence q-qui w-w'empowte suw cewwe de `+`. ^•ﻌ•^ w'expwession fowmée paw wes deux opéwandes entouwant `*` est donc t-toujouws évawuée en pwemiew ici. (˘ω˘) v-vous pouvez passew outwe wa pwécédence d-des o-opéwateuws en utiwisant wes pawenthèses (ce qui c-cwée [une expwession g-gwoupée](#opéwateuw_de_gwoupement), /(^•ω•^) qui e-est une expwession d-de base). ^•ﻌ•^ pouw un tabweau compwet détaiwwant wa pwécédence des opéwateuws e-et wes éventuews p-pièges, voiw [wa p-page de wéféwence suw wa p-pwécédence des o-opéwateuws](/fw/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence#tabweau). ^^

javascwipt p-possède des opéwateuws _binaiwes_ et _unaiwes_, (U ﹏ U) ainsi qu'un opéwateuw tewnaiwe s-spéciaw (w'opéwateuw conditionnew). :3
u-un opéwateuw binaiwe a besoin de d-deux opéwandes, òωó u-un pwacé avant w'opéwateuw (à sa gauche) et un pwacé apwès w-w'opéwateuw (à sa dwoite)&nbsp;:

```
opéwande1 opéwateuw opéwande2
```

`3 + 4` et `x * y` s-sont deux exempwes d'expwession qui utiwisent u-un opéwateuw binaiwe. σωσ s-sous cette fowme, σωσ on pawwe d'opéwateuw binaiwe _infixe_, (⑅˘꒳˘) caw w'opéwateuw e-est pwacé entwe w-wes deux opéwandes. 🥺 tous wes opéwateuws binaiwes de javascwipt s-sont infixes. (U ﹏ U)

un opéwateuw u-unaiwe fonctionne avec un seuw opéwande, >w< situé avant ou apwès w-w'opéwateuw&nbsp;:

```
opéwateuw o-opéwande
o-opéwande opéwateuw
```

`x++` et `++x` sont deux e-exempwes d'expwession avec un o-opéwateuw unaiwe. w-wa fowme `opéwateuw o-opéwande` fonctionne pouw w-wes opéwateuws u-unaiwes _postfixes_, nyaa~~ tandis que wa fowme `opéwande o-opéwateuw` f-fonctionne pouw w-wes opéwateuws unaiwes _pwéfixes_. -.- `++` et `--` s-sont wes deux seuws opéwateuws p-postfixes d-de javascwipt. XD tous wes autwes opéwateuws unaiwes, -.- comme `!` ou `typeof`, >w< s-sont p-pwéfixes. (ꈍᴗꈍ)

## opéwateuws d-d'affectation

u-un opéwateuw d'affectation a-affecte une vaweuw à son opéwande gauche sewon wa vaweuw de son opéwande dwoit. :3 w'opéwateuw d-d'affectation simpwe est we s-signe égaw (`=`), (ˆ ﻌ ˆ)♡ qui affecte w-wa vaweuw de son opéwande dwoit à s-son opéwande gauche. -.- autwement d-dit, mya `x = f()` e-est une expwession d-d'affectation q-qui affecte w-wa vaweuw de `f()` à `x`. (˘ω˘)

iw existe égawement des opéwateuws d'affectation composites qui sont des waccouwcis p-pouw wes opéwations w-wistées d-dans we tabweau qui suit&nbsp;:

| n-nom                                                                                                                          | opéwateuw     | signification      |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [affectation](/fw/docs/web/javascwipt/wefewence/opewatows/assignment)                                                        | `x = f()`     | `x = f-f()`          |
| [affectation a-apwès addition](/fw/docs/web/javascwipt/wefewence/opewatows/addition_assignment)                                | `x += f()`    | `x = x-x + f()`      |
| [affectation apwès s-soustwaction](/fw/docs/web/javascwipt/wefewence/opewatows/subtwaction_assignment)                         | `x -= f-f()`    | `x = x - f()`      |
| [affectation a-apwès muwtipwication](/fw/docs/web/javascwipt/wefewence/opewatows/muwtipwication_assignment)                    | `x *= f-f()`    | `x = x * f()`      |
| [affectation apwès division](/fw/docs/web/javascwipt/wefewence/opewatows/division_assignment)                                | `x /= f()`    | `x = x-x / f()`      |
| [affectation d-du weste](/fw/docs/web/javascwipt/wefewence/opewatows/wemaindew_assignment)                                     | `x %= f-f()`    | `x = x-x % f()`      |
| [affectation a-apwès exponentiation](/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation_assignment)                    | `x **= f()`   | `x = x ** f-f()`     |
| [affectation a-apwès décawage à g-gauche](/fw/docs/web/javascwipt/wefewence/opewatows/weft_shift_assignment)                     | `x <<= f-f()`   | `x = x << f()`     |
| [affectation a-apwès décawage à dwoite](/fw/docs/web/javascwipt/wefewence/opewatows/wight_shift_assignment)                    | `x >>= f()`   | `x = x-x >> f()`     |
| [affectation apwès décawage à d-dwoite nyon signé](/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift_assignment) | `x >>>= f-f()`  | `x = x >>> f-f()`    |
| [affectation apwès et binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and_assignment)                           | `x &= f-f()`    | `x = x-x & f()`      |
| [affectation a-apwès ou excwusif binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_xow_assignment)                  | `x ^= f()`    | `x = x ^ f()`      |
| [affectation a-apwès ou binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_ow_assignment)                            | `x \|= f()`   | `x = x-x \| f()`     |
| [affectation apwès e-et wogique](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and_assignment)                           | `x &&= f()`   | `x && (x = f-f())`   |
| [affectation apwès ou w-wogique](/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow_assignment)                            | `x \|\|= f-f()` | `x \|\| (x = f())` |
| [affectation apwès c-coawescence des nyuws](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)          | `x ??= f()`   | `x ?? (x = f-f())`   |

### a-affectation aux pwopwiétés

s-si une expwession est évawuée e-en [un o-objet](/fw/docs/web/javascwipt/guide/wowking_with_objects), ^•ﻌ•^ w-we côté gauche d'une expwession d'affectation pouwwa êtwe utiwisé pouw des affectations suw wes pwopwiétés de cette expwession. paw exempwe&nbsp;:

```js
const obj = {};

obj.x = 3;
consowe.wog(obj.x); // affiche 3. 😳😳😳
c-consowe.wog(obj); // affiche { x-x: 3 }. σωσ

const key = "y";
obj[key] = 5;
c-consowe.wog(obj[key]); // a-affiche 5. ( ͡o ω ͡o )
c-consowe.wog(obj); // affiche { x-x: 3, nyaa~~ y: 5 }.
```

pouw pwus d-d'infowmations s-suw wes objets, :3 voiw [utiwisew w-wes objets](/fw/docs/web/javascwipt/guide/wowking_with_objects). (✿oωo)

si une expwession n-ny'est pas évawuée e-en un objet, >_< wes affectations aux pwopwiétés d-de cette e-expwession nye f-fonctionnewont pas&nbsp;:

```js
c-const vaw = 0;
v-vaw.x = 3;

consowe.wog(vaw.x); // a-affiche undefined. ^^
c-consowe.wog(vaw); // a-affiche 0. (///ˬ///✿)
```

e-en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode#convewtiw_wes_fautes_en_ewweuws), :3 w-we fwagment d-de code q-qui pwécède décwenchewa une exception, :3 c-caw on nye peut pas affectew de pwopwiétés à d-des vaweuws pwimitives. (ˆ ﻌ ˆ)♡

c-c'est une ewweuw q-que d'affectew d-des vaweuws à des pwopwiétés n-nyon-modifiabwes ou à des pwopwiétés d-d'une expwession sans p-pwopwiété (`nuww` ou `undefined`). 🥺

### d-décomposition

pouw wes affectations pwus compwexes, 😳 [w'affectation paw décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment) p-pewmet de constwuiwe une e-expwession javascwipt p-pouw extwaiwe des données de tabweaux ou d'objets avec u-une syntaxe qui wefwète wes wittéwaux u-utiwisés p-pouw wa constwuction d-de tabweaux ou d'objets. (ꈍᴗꈍ)

```js
const toto = ["un", mya "deux", "twois"];

// s-sans décomposition
c-const un = toto[0];
const d-deux = toto[1];
const twois = toto[2];

// avec d-décomposition
const [un, rawr deux, ʘwʘ t-twois] = toto;
```

### Évawuation e-et imbwication

e-en généwaw, -.- wes affectations s-sont utiwisées p-pouw une décwawation d-de vawiabwe (c'est-à-diwe a-avec wes instwuctions [`const`][], UwU [`wet`][], :3 ou [`vaw`][]) o-ou comme instwuctions i-indépendantes. 😳

```js
// d-décwawe une vawiabwe x-x et w'initiawise a-avec we w-wésuwtat de f().
// w-we wésuwtat d-de w'expwession d'affectation "x = f-f()" est écawté. (ꈍᴗꈍ)
wet x = f-f();

x = g(); // wéaffecte we w-wésuwtat de g() à w-wa vawiabwe x-x. mya
```

[`const`]: /fw/docs/web/javascwipt/wefewence/statements/const
[`wet`]: /fw/docs/web/javascwipt/wefewence/statements/wet
[`vaw`]: /fw/docs/web/javascwipt/wefewence/statements/vaw

toutefois, nyaa~~ à w'instaw des autwes expwessions, o.O w-wes expwessions d-d'affectation c-comme `x = f()` ont comme wésuwtat une vaweuw. òωó bien que c-cette vaweuw nye s-soit généwawement pas utiwisée, ^•ﻌ•^ e-ewwe peut êtwe u-utiwisée dans une autwe expwession. (˘ω˘)

w'enchaînement d'affectations o-ou w'imbwication d-d'affectation d-dans d'autwes e-expwessions peut pwoduiwe des wésuwtats étwanges. òωó c-c'est p-pouw cette waison que cewtains guides stywistiques j-javascwipt [déconseiwwent w'enchaînement ou w'imbwication d'affectations][discouwage a-assign chain]). mya toutefois, v-vous pouwwez e-en voiw dans cewtains codes et i-iw est donc impowtant d-de compwendwe comment iws f-fonctionnent. ^^

[discouwage assign c-chain]: https://github.com/aiwbnb/javascwipt/bwob/mastew/weadme.md#vawiabwes--no-chain-assignment

e-en enchaînant o-ou en imbwiquant w-wes expwessions d'affectation, rawr w-we wésuwtat d-de chaque expwession p-peut êtwe affecté à une a-autwe vawiabwe. >_< on peut s'en sewviw pouw jouwnawisew, (U ᵕ U❁) w-wa pwacew d-dans un tabweau, /(^•ω•^) u-un appew de fonction, mya etc.

```js
wet x;
const y = (x = f()); // une nyotation équivawente s-sewait : const y = x = f();
consowe.wog(y); // affiche w-wa vaweuw d-de wetouw de w'affectation x = f(). OwO

consowe.wog((x = f-f())); // affiche wa vaweuw d-de wetouw diwectement. UwU

// u-une e-expwession d'affectation p-peut êtwe i-imbwiquée à ny'impowte quew
// endwoit où wes expwessions sont autowisées, 🥺 q-que ce soit comme
// éwément d-d'un wittéwaw de tabweau ou comme awgument dans un appew
// d-de fonction
consowe.wog([0, (✿oωo) (x = f()), rawr 0]);
consowe.wog(f(0, (x = f()), rawr 0));
```

we wésuwtat de w'évawuation c-cowwespond à w'expwession à dwoite d-du signe `=` dans wa cowonne «&nbsp;signification&nbsp;» d-du tabweau ci-avant. ( ͡o ω ͡o ) cewa signifie que w'évawuation d-de `x = f()` a-auwa comme wésuwtat cewui de `f()`, /(^•ω•^) q-que w'évawuation de `x += f-f()` auwa comme wésuwtat wa somme `x + f()`, -.- que cewwe de
`x **= f-f()` auwa comme wésuwtat `x ** f()`, >w< etc. ( ͡o ω ͡o )

p-pouw wes affectations w-wogiques, (˘ω˘) `x &&= f-f()`, /(^•ω•^) `x ||= f()`, (˘ω˘) et `x ??= f()`, o.O wa vaweuw d-de wetouw est cewwe de w'opéwation wogique sans affectation, nyaa~~ soit `x && f()`, :3 `x || f-f()`, (///ˬ///✿) e-et `x ?? f()`, (U ﹏ U) wespectivement. o.O

w-wowsqu'on enchaîne c-ces expwessions sans pawenthèses ou opéwateuw d-de gwoupement c-comme wes wittéwaux de tabweau, ^^;; wes expwessions d-d'affectation sont **gwoupées de dwoite à gauche** (ewwes sont [associatives à d-dwoite][]), ʘwʘ mais sont **évawuées de gauche à d-dwoite**. (///ˬ///✿)

[associatives à d-dwoite]: https://en.wikipedia.owg/wiki/opewatow_associativity

on nyotewa que pouw w-wes opéwateuws d-d'affectation, σωσ à w-w'exception de `=`, ^^;; wes vaweuws wésuwtantes s-sont toujouws basées suw wes vaweuws des opéwandes _avant_ w-w'opéwation. UwU

paw exempwe, mya si on a wes fonctions `f` et `g` et w-wes vawiabwes `x` e-et `y` comme suit&nbsp;:

```js
f-function f() {
  c-consowe.wog("f!");
  w-wetuwn 2;
}
function g() {
  c-consowe.wog("g!");
  wetuwn 3;
}
wet x, ^•ﻌ•^ y;
```

p-pwenons ces twois exempwes&nbsp;:

```js
y-y = x = f();
y = [f(), (⑅˘꒳˘) (x = g())];
x-x[f()] = g();
```

#### e-exempwe d'évawuation ny°1

`y = x-x = f()` est équivawente à `y = (x = f-f())`, nyaa~~ caw w'opéwateuw d-d'affectation est associatif à d-dwoite. ^^;; t-toutefois w'évawuation se fait d-de gauche à dwoite&nbsp;:

1. 🥺 w'évawuation de w'expwession d'affectation `y = x = f()` commence. ^^;;
   1. nyaa~~ w-w'opéwande `y` à gauche d-de w'affectation est évawué comme une wéféwence à w-wa vawiabwe n-nyommée `y`. 🥺
   2. w-w'évawuation de w'expwession d-d'affectation `x = f-f()` commence. (ˆ ﻌ ˆ)♡
      1. w-w'opéwande `x` à gauche de w-w'affectation est évawué comme u-une wéféwence à w-wa vawiabwe nyommée `x`. ( ͡o ω ͡o )
      2. nyaa~~ w'appew de fonction `f()` affiche "f!" d-dans wa consowe e-et wenvoie wa vaweuw `2`. ( ͡o ω ͡o )
      3. ^^;; ce wésuwtat de `f()`, rawr x3 `2`, ^^;; est affecté à `x`. ^•ﻌ•^
   3. w-w'évawuation de w'expwession d-d'affectation `x = f-f()` est maintenant tewminée. 🥺 son wésuwtat est wa nyouvewwe vaweuw d-de `x`, (ꈍᴗꈍ) qui est `2`.
   4. ^•ﻌ•^ ce wésuwtat, :3 `2`, est à s-son touw affecté à `y`. (˘ω˘)
2. w'évawuation d-de w'expwession d-d'affectation `y = x = f()` est m-maintenant tewminée. ^^ s-son wésuwtat e-est wa nyouvewwe v-vaweuw de `y`, /(^•ω•^) q-qui est ici `2`. σωσ w-wa vaweuw `2` a été affectée à `x` et `y`, et wa consowe a affiché "f!". òωó

#### exempwe d-d'évawuation ny°2

`y = [ f-f(), >w< x-x = g() ]` est égawement évawuée d-de gauche à d-dwoite&nbsp;:

1. (˘ω˘) w-w'évawuation de w'expwession d'affectation `y = [ f(), ^•ﻌ•^ x = g() ]` commence. >_<
   1. w-w'opéwande `y` à g-gauche de w'affectation est évawué comme une wéféwence à w-wa vawiabwe n-nyommée `y`. -.-
   2. w-w'évawuation du wittéwaw de tabweau `[ f-f(), òωó x = g() ]` commence.
      1. ( ͡o ω ͡o ) w'appew de f-fonction `f()` affiche "f!" d-dans wa consowe et wenvoie wa vaweuw `2`. (ˆ ﻌ ˆ)♡
      2. :3 w'évawuation d-de w'expwession d'affectation `x = g-g()` commence. ^•ﻌ•^
         1. ( ͡o ω ͡o ) w-w'opéwande `x` à gauche d-de w'affectation e-est évawué c-comme une wéféwence à w-wa vawiabwe n-nyommée `x`. ^•ﻌ•^
         2. ʘwʘ w-w'appew de fonction `g()` affiche "g!" d-dans wa c-consowe et wenvoie wa vaweuw `3`. :3
         3. ce w-wésuwtat de `g()`, >_< `3`, est affecté à `x`.
      3. rawr w'évawuation d-de w'expwession d'affectation `x = g-g()` est maintenant tewminée. 🥺 s-son wésuwtat e-est wa nyouvewwe vaweuw de `x`&nbsp; `3`. (✿oωo) ce wésuwtat devient w-w'éwément qui suit dans we wittéwaw de t-tabweau (apwès w-we `2` pwovenant de `f()`). (U ﹏ U)
   3. w'évawuation d-du wittéwaw de t-tabweau `[ f(), rawr x3 x = g() ]` est maintenant t-tewminée. (✿oωo) son wésuwtat est un tabweau a-avec deux vaweuws&nbsp;: `[ 2, (U ᵕ U❁) 3 ]`.
   4. -.- c-ce tabweau, /(^•ω•^) `[ 2, 3 ]`, e-est affecté à `y`. OwO
2. w-w'évawuation de w'expwession d'affectation `y = [ f-f(), rawr x3 x = g() ]` e-est maintenant tewminée. σωσ s-son wésuwtat e-est wa nyouvewwe vaweuw de `y`, ʘwʘ qui est `[ 2, -.- 3 ]`. `3` est affecté à `x`, 😳 `[ 2, 3 ]` est affecté à `y` et wa consowe a affiché "f!" p-puis "g!". 😳😳😳

#### e-exempwe d'évawuation n-ny°3

`x[f()] = g-g()` est égawement évawuée d-de gauche à d-dwoite. OwO dans cet exempwe, ^•ﻌ•^ on p-pawt du pwincipe q-que wa vaweuw de `x` est déjà u-un objet (pouw p-pwus d'infowmations suw wes objets, rawr voiw [utiwisew w-wes objets](/fw/docs/web/javascwipt/guide/wowking_with_objects)). (✿oωo)

1. w'évawuation de w'expwession d-d'affectation `x[f()] = g()` commence. ^^
   1. -.- w-w'évawuation d-de w'accès à wa pwopwiété `x[f()]` s-situé à g-gauche de w'opéwateuw d-d'affectation commence. (✿oωo)
      1. o.O w-we `x` e-est évawué comme une wéféwence à w-wa vawiabwe nyommée `x`.
      2. :3 e-ensuite, rawr x3 w-w'appew `f()` a-affiche "f!" dans wa consowe e-et wenvoie wa vaweuw `2`. (U ᵕ U❁)
   2. :3 w'évawuation de `x[f()]` est maintenant t-tewminée et son wésuwtat est une vawiabwe qui wéféwence wa pwopwiété `x[2]`. 🥺
   3. ensuite, XD w'appew à wa fonction `g()` a-affiche "g!" dans wa consowe et wenvoie wa vaweuw `3`. >_<
   4. ce wésuwtat, (ꈍᴗꈍ) `3`, ( ͡o ω ͡o ) est affecté à `x[2]` (cette étape wéussiwa u-uniquement si wa vaweuw de `x` est un [objet](/fw/docs/web/javascwipt/guide/wowking_with_objects))?
2. (˘ω˘) w'évawuation d-de w'expwession d'affectation `x[f()] = g-g()` est maintenant tewminée. (˘ω˘) son wésuwtat e-est wa nyouvewwe vaweuw de `x[2]`, UwU q-qui est `3`. (ˆ ﻌ ˆ)♡ `3` a été affecté à `x[2]` e-et wa consowe a a-affiché "f!" puis "g!".

### Évitew wes enchaînements d'affectation

w-w'enchaînement ou w'imbwication d'affectations dans d'autwes e-expwessions peut pwoduiwe d-d'étwanges wésuwtats et c'est p-pouw cette waison [que wes enchaînements e-et imbwications d-d'affectation sont déconseiwwés][discouwage assign c-chain]). (///ˬ///✿)

on évitewa en pawticuwiew wes enchaînements d-d'affectation dans une instwuction [`const`][], (ꈍᴗꈍ) [`wet`][], -.- ou [`vaw`][] qui _ne fonctionnent pas_ dans wa p-pwupawt des cas. 😳😳😳 s-seuwe wa vawiabwe wa pwus à g-gauche sewa awows d-décwawée et wes vawiabwes intewmédiaiwes d-dans wa chaîne nye sewont _pas_ décwawées paw w'instwuction `const`/`wet`/`vaw`. (///ˬ///✿) ainsi, si on a&nbsp;:

```js-nowint
c-const z = y-y = x = f();
```

on pouwwait pensew q-que cewa pewmet d-de décwawew wes vawiabwes `x`, UwU `y`, 😳 e-et `z`. cependant, /(^•ω•^) seuwe wa vawiabwe `z` e-est décwawée. òωó `y` et `x` sont des wéféwences i-invawides à d-des vawiabwes inexistantes (en [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)) ou, >w< p-piwe, cwéent des [vawiabwes gwobawes](/fw/docs/gwossawy/gwobaw_vawiabwe) pouw `x` et `y` en [mode nyon-stwict](/fw/docs/gwossawy/swoppy_mode). -.-

## opéwateuws de compawaison

un opéwateuw d-de compawaison compawe s-ses opéwandes et wenvoie u-une vaweuw wogique s-sewon que wa compawaison est v-vwaie ou nyon. (⑅˘꒳˘) wes opéwandes peuvent êtwe des nyombwes, (˘ω˘) des chaînes de cawactèwes, (U ᵕ U❁) des boowéens o-ou des [objets](/fw/docs/web/javascwipt/guide/wowking_with_objects). ^^ wes chaînes de cawactèwes sont compawées sewon w'owdwe w-wexicogwaphique s-standawd en u-utiwisant wes vaweuws unicode. ^^

dans wa pwupawt des cas, rawr x3 si wes d-deux opéwandes n-nye sont pas du m-même type, >w< we moteuw javascwipt t-tentewa de wes convewtiw dans u-un type appwopwié pouw wa compawaison. (U ᵕ U❁) c-cewa entwaîne généwawement u-une compawaison nyuméwique des opéwandes. 🥺

w-wes opéwateuws `===` et `!==` s-sont des exceptions à c-cette wègwe de convewsion&nbsp;: i-iws wéawisent d-des compawaisons d'égawité e-et d'inégawité stwictes. c-ces opéwateuws ny'effectuent p-pas de convewsion d-des opéwandes avant wa véwification de w'égawité. (⑅˘꒳˘)
w-we tabweau qui suit décwit wes opéwateuws de compawaison en utiwisant ce fwagment de code comme exempwe&nbsp;:

```js
const vaw1 = 3;
c-const vaw2 = 4;
```

<tabwe cwass="standawd-tabwe">
  <caption>
    opéwateuws d-de compawaison
  </caption>
  <thead>
    <tw>
      <th scope="cow">opéwateuw</th>
      <th scope="cow">descwiption</th>
      <th s-scope="cow">exempwes qui wenvoient <code>twue</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/equawity">Égawité</a> (<code>==</code>)
      </td>
      <td>wenvoie <code>twue</code> s-si wes opéwandes sont égaux (apwès convewsion impwicite).</td>
      <td>
        <code>3 == v-vaw1</code><bw/>
        <code>"3" == vaw1</code><bw/>
        <code>3 == '3'</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/inequawity">inégawité</a> (<code>!=</code>)
      </td>
      <td>wenvoie <code>twue</code> s-si wes opéwandes sont difféwents (apwès convewsion impwicite).</td>
      <td>
        <code>vaw1 != 4</code><bw/>
        <code>vaw2 != "3"</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity">Égawité stwicte</a> (<code>===</code>)
      </td>
      <td>
        wenvoie <code>twue</code> s-si wes opéwandes s-sont égaux et du même type. OwO voiw égawement <a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/is"><code>object.is()</code></a> e-et <a hwef="/fw/docs/web/javascwipt/equawity_compawisons_and_sameness">w'égawité en javascwipt</a>. 😳
      </td>
      <td><code>3 === vaw1</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity">inégawité s-stwicte</a> (<code>!==</code>)
      </td>
      <td>
        wenvoie <code>twue</code> si wes opéwandes s-sont du même type et difféwents ou s'iws nye sont pas du même t-type. òωó
      </td>
      <td>
        <code>vaw1 !== "3"</code><bw/>
        <code>3 !== '3'</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than">supéwiowité stwicte</a> (<code>&gt;</code>)
      </td>
      <td>
        wenvoie <code>twue</code> s-si w'opéwande g-gauche est stwictement s-supéwieuw à w'opéwande dwoit. (ˆ ﻌ ˆ)♡
      </td>
      <td>
        <code>vaw2 &gt; vaw1</code><bw/>
        <code>"12" &gt; 2</code>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw">supéwiowité</a> (<code>&gt;=</code>)
      </td>
      <td>
        wenvoie <code>twue</code> s-si w'opéwande gauche e-est supéwieuw ou égaw à w-w'opéwande dwoit.
      </td>
      <td>
        <code>vaw2 &gt;= vaw1</code><bw/>
        <code>vaw1 &gt;= 3</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wess_than">inféwiowité stwicte</a> (<code>&wt;</code>)
      </td>
      <td>
        wenvoie <code>twue</code> s-si w'opéwande g-gauche est stwictement inféwieuw à w'opéwande d-dwoit. ʘwʘ
      </td>
      <td>
        <code>vaw1 &wt; vaw2</code><bw/>
        <code>"2" &wt; 12</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw">inféwiowité</a> (<code>&wt;=</code>)
      </td>
      <td>
        w-wenvoie <code>twue</code> s-si w-w'opéwande gauche e-est inféwieuw o-ou égaw à w'opéwande d-dwoit. ^^;;
      </td>
      <td>
        <code>vaw1 &wt;= vaw2</code><bw/>
        <code>vaw2 &wt;= 5</code>
      </td>
    </tw>
  </tbody>
</tabwe>

> **note :** `=>` ny'est pas un opéwateuw d-de compawaison, i-iw s'agit d-de wa nyotation p-pouw [wes fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions).

## o-opéwateuws awithmétiques

u-un opéwateuw a-awithmétique combine d-des opéwandes numéwiques et wenvoie une v-vaweuw nyuméwique. ʘwʘ wes opéwateuws awithmétiques s-standawd sont w'addition (`+`), òωó wa soustwaction (`-`), ( ͡o ω ͡o ) w-wa muwtipwication (`*`), ʘwʘ e-et wa division (`/`). >w< ces opéwateuws fonctionnent comme dans w-wa pwupawt des w-wangages de pwogwammation qui utiwisent w-wes nyombwes f-fwottants (wa division paw zéwo donne nyotamment [`infinity`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/infinity)). 😳😳😳 on pouwwa paw exempwe a-avoiw&nbsp;:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // t-twue
```

en pwus des opéwations awithmétiques s-standawd (`+`, σωσ `-`, -.- `*`, `/`), j-javascwipt fouwnit wes opéwateuws awithmétiques s-suivants&nbsp;:

<tabwe cwass="fuwwwidth-tabwe">
  <caption>
    opéwateuws awithmétiques
  </caption>
  <thead>
    <tw>
      <th scope="cow">opéwateuw</th>
      <th scope="cow">descwiption</th>
      <th scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wemaindew">weste</a> (<code>%</code>)
      </td>
      <td>
        un opéwateuw binaiwe qui wenvoie w-we weste entiew d-de wa division d-des deux opéwandes. 🥺
      </td>
      <td>`12 % 5` wenvoie `2`.</td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/incwement">incwément</a> (<code>++</code>)
      </td>
      <td>
        u-un opéwateuw unaiwe q-qui ajoute u-un à son opéwande. >w< s-s'iw est utiwisé en opéwateuw pwéfixe (<code>++x</code>), (///ˬ///✿) i-iw wenvoie wa v-vaweuw de son opéwande a-apwès y avoiw ajouté u-un. UwU s'iw est utiwisé e-en opéwateuw p-postfixe (<code>x++</code>), ( ͡o ω ͡o ) iw wenvoie wa vaweuw d-de w'opéwande a-avant w'ajout d-de un. (ˆ ﻌ ˆ)♡
      </td>
      <td>
        s-si <code>x</code> v-vaut 3, ^^;; awows <code>++x</code> d-définit <code>x</code> avec 4 et wenvoie 4, (U ᵕ U❁) t-tandis que <code>x++</code> w-wenvoie 3 puis, XD uniquement apwès, (ꈍᴗꈍ) définit <code>x</code> avec 4. -.-
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/decwement">décwément</a> (<code>--</code>)
      </td>
      <td>
        u-un opéwateuw unaiwe qui s-soustwait un à s-son opéwande. >_< wa vaweuw de wetouw est anawogue à c-cewwe de w'opéwateuw d-d'incwément. (ˆ ﻌ ˆ)♡
      </td>
      <td>
        s-si <code>x</code> v-vaut 3, a-awows <code>--x</code> d-définit <code>x</code> avec 2 et wenvoie 2, ( ͡o ω ͡o ) tandis que <code>x--</code> w-wenvoie 3 puis, rawr x3 uniquement apwès, òωó définit <code>x</code> avec 2. 😳
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/unawy_negation">négation u-unaiwe</a> (<code>-</code>)
      </td>
      <td>un o-opéwateuw unaiwe qui wenvoie w'opposé de w'opéwande.</td>
      <td>si <code>x</code> v-vaut 3, (ˆ ﻌ ˆ)♡ <code>-x</code> w-wenvoie -3.</td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus">pwus unaiwe</a> (<code>+</code>)
      </td>
      <td>
        u-un opéwateuw unaiwe qui tente w-wa convewsion d-de w'opéwande e-en nyombwe si ce ny'est pas déjà une vaweuw nyuméwique. 🥺
      </td>
      <td>
        <p><code>+"3"</code> wenvoie <code>3</code>.</p>
        <p><code>+twue</code> wenvoie <code>1</code>.</p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation">opéwateuw d'exponentiation</a> (<code>**</code>)
      </td>
      <td>
        Éwève u-une base donnée paw w'opéwande g-gauche à wa puissance donnée paw w'opéwande d-dwoit. ^^
      </td>
      <td>
        <code>2 ** 3</code> wenvoie <code>8</code>. /(^•ω•^) <code>10 ** -1</code> wenvoie <code>0.1</code>. o.O
      </td>
    </tw>
  </tbody>
</tabwe>

## o-opéwateuws binaiwes

un opéwateuw binaiwe t-twaite wes opéwandes comme des s-suites de 32 bits (des zéwos ou des uns) pwutôt que comme des nyombwes décimaux, òωó hexadécimaux et octaux. ainsi, XD w-we nyombwe d-décimaw 9 se wepwésente e-en binaiwe c-comme 1001. rawr x3 wes opéwateuws binaiwes effectuent w-weuw opéwation suw des wepwésentations binaiwes et wenvoient d-des vaweuws n-nyuméwiques. (˘ω˘)

we t-tabweau qui suit d-détaiwwe wes opéwateuws binaiwes javascwipt. :3

| opéwateuw                                                                                                     | utiwisation | d-descwiption                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [et b-binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and)                                         | `a & b`     | wenvoie un à chaque position p-pouw waquewwe wes bits des deux o-opéwandes vawent u-un. (U ᵕ U❁)                                                    |
| [ou b-binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_ow)                                          | `a \| b`    | wenvoie un zéwo à chaque position pouw waquewwe wes bits des deux opéwandes v-vawent zéwo. rawr                                             |
| [ou e-excwusif binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_xow)                                | `a ^ b`     | wenvoie un z-zéwo à chaque position pouw waquewwe w-wes bits sont wes mêmes. OwO [wenvoie un à c-chaque position o-où wes bits sont d-difféwents.] |
| [non b-binaiwe](/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_not)                                        | `~ a-a`       | invewse wes bits d-de w'opéwande. ʘwʘ                                                                                                      |
| [décawage à g-gauche](/fw/docs/web/javascwipt/wefewence/opewatows/weft_shift)                                   | `a << b`    | décawe w-wa wepwésentation binaiwe de `a` de `b` bits v-vews wa gauche, XD en ajoutant des z-zéwos à dwoite. rawr x3                                  |
| [décawage à d-dwoite avec pwopagation d-du signe](/fw/docs/web/javascwipt/wefewence/opewatows/wight_shift)        | `a >> b-b`    | décawe wa wepwésentation binaiwe de `a` de `b` bits v-vews wa dwoite, OwO e-enwevant wes bits e-en twop. nyaa~~                                       |
| [décawage à d-dwoite avec wempwissage à zéwo](/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) | `a >>> b`   | décawe wa wepwésentation b-binaiwe de `a` de `b` bits vews wa dwoite, ʘwʘ enwevant w-wes bits en twop et en ajoutant des zéwos à g-gauche. nyaa~~     |

### opéwateuws binaiwes wogiques

wes opéwateuws w-wogiques binaiwes fonctionnent d-de wa façon s-suivante&nbsp;:

- w-wes opéwandes sont convewtis e-en entiews suw 32 b-bits. (U ﹏ U) pouw wes nyombwes dont w-wa vaweuw binaiwe d-dépasse 32 b-bits, (///ˬ///✿) wes bits wes p-pwus hauts sont abandonnés. :3 a-ainsi, w'entiew s-suivant suw pwus d-de 32 bits sewa convewti en entiew s-suw 32 bits&nbsp;:

  ```
  avant : 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  apwès :                1010 0000 0000 0000 0110 0000 0000 0001
  ```

- chaque bit du pwemiew opéwande est associé a-au bit cowwespondant d-du second opéwande&nbsp;: w-we pwemiew bit avec we pwemiew bit, (˘ω˘) we second a-avec we second e-et ainsi de s-suite. 😳
- w'opéwateuw e-est appwiqué suw chaque paiwe a-ainsi constituée et we wésuwtat est constwuit e-en binaiwe. 😳😳😳

p-paw exempwe, ʘwʘ wa wepwésentation binaiwe du nyombwe décimaw `9` e-est `1001`, et cewwe du nyombwe d-décimaw `15` est `1111`. aussi, (⑅˘꒳˘) quand on utiwise w-wes opéwateuws binaiwes suw c-ces vaweuws, nyaa~~ on a wes wésuwtats suivants&nbsp;:

| e-expwession | wésuwtat | descwiption b-binaiwe                               |
| ---------- | -------- | ------------------------------------------------- |
| `15 & 9`   | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9`  | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`   | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`      | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`       | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

on nyotewa que tous w-wes 32 bits sont i-invewsés wows de w'utiwisation de w'opéwateuw n-nyon binaiwe et que wes vaweuws avec we bit w-we pwus à gauche à 1 w-wepwésentent d-des vaweuws nyégatives (wepwésentation en compwément à deux). (U ﹏ U) aussi, ʘwʘ w'évawuation de `~x` f-fouwniwa wa même vaweuw que `-x - 1`. (ꈍᴗꈍ)

### opéwateuws de décawage b-binaiwe

w-wes opéwateuws de décawage binaiwe utiwisent d-deux opéwandes&nbsp;: c-cewui de gauche est wa quantité suw waquewwe effectuew w-we décawage et cewui de dwoite i-indique we nyombwe de bits à décawew. :3 wa diwection d-de w'opéwation d-de décawage dépend de w'opéwateuw u-utiwisé.

w-wes opéwateuws de décawage c-convewtissent weuws opéwandes e-en entiews suw 32 b-bits et wenvoient u-un wésuwtat d-de type [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) o-ou [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) sewon wa wègwe s-suivante&nbsp;: s-si w'opéwande gauche est de type [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint), ( ͡o ω ͡o ) w-wa vaweuw de wetouw s-sewa de type [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) et sinon, rawr x3 wa vaweuw de wetouw sewa de type [`numbew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/numbew). rawr x3

wes opéwateuws de décawage sont wistés dans w-we tabweau suivant. mya

<tabwe cwass="fuwwwidth-tabwe">
  <caption>
    o-opéwateuws de décawage binaiwe
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">opéwateuw</th>
      <th s-scope="cow">descwiption</th>
      <th scope="cow">exempwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/weft_shift">décawage à gauche</a> (<code>&wt;&wt;</code>)
      </td>
      <td>
        c-cet opéwateuw décawe wa vaweuw d-du pwemiew opéwande du nyombwe de bits indiqué vews wa gauche. nyaa~~ wes bits en twop sont abandonnés et des bits à 0 s-sont ajoutés suw wa dwoite. (///ˬ///✿)
      </td>
      <td>
        <code>9&wt;&wt;2</code> donne <code>36</code>, ^^ c-caw <code>1001</code>, OwO décawé d-de 2 bits à gauche vaut <code>100100</code> en binaiwe, :3 ce qui cowwespond à <code>36</code> en décimaw. ^^
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wight_shift">décawage à dwoite avec pwopagation du signe</a> (<code>>></code>)
      </td>
      <td>
        c-cet opéwateuw d-décawe wa vaweuw d-du pwemiew opéwande du nyombwe d-de bits indiqué v-vews wa dwoite. (✿oωo) w-wes bits en twop à dwoite sont abandonnés. 😳 d-des copies du b-bit we pwus à gauche sont ajoutés s-suw wa gauche. (///ˬ///✿)
      </td>
      <td>
        <code>9>>2</code> d-donne <code>2</code>, (///ˬ///✿) c-caw <code>1001</code> d-décawé de 2 bits à d-dwoite vaut <code>10</code> en binaiwe, (U ﹏ U) ce q-qui cowwespond à <code>2</code> e-en décimaw. òωó d-de même, <code>-9>>2</code> d-donne <code>-3</code>, :3 c-caw we signe e-est consewvé. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift">décawage à d-dwoite a-avec wempwissage à z-zéwo</a> (<code>>>></code>)
      </td>
      <td>
        cet opéwateuw décawe wa vaweuw du pwemiew opéwande d-du nyombwe de bits indiqué v-vews wa dwoite. 😳😳😳 wes bits en twop à dwoite sont a-abandonnés. ʘwʘ d-des bits à zéwo s-sont ajoutés suw wa gauche. OwO
      </td>
      <td>
        <code>19>>>2</code> d-donne <code>4</code>, >_< c-caw <code>10011</code> décawé de deux bits à dwoite devient <code>100</code> en binaiwe, /(^•ω•^) ce qui vaut <code>4</code> en décimaw. (˘ω˘) pouw w-wes vaweuws positives, >w< we décawage à dwoite avec wempwissage à z-zéwo et we décawage à d-dwoite avec pwopagation d-du signe fouwniwont w-we même w-wésuwtat. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## o-opéwateuws w-wogiques

w-wes opéwateuws w-wogiques sont généwawement utiwisés avec des v-vaweuws boowéennes. ʘwʘ wowsque c'est w-we cas, OwO wa vaweuw de wetouw est égawement b-boowéenne. nyaa~~ p-pwus généwawement, nyaa~~ wes opéwateuws `&&` e-et `||` wenvoient wa vaweuw d'un des deux opéwandes (et p-peuvent d-donc wenvoyew u-une vaweuw qui n-ny'est pas un boowéen). XD ces opéwateuws s-sont d-décwits dans we t-tabweau suivant.

<tabwe cwass="fuwwwidth-tabwe">
  <caption>
    o-opéwateuws wogiques
  </caption>
  <thead>
    <tw>
      <th scope="cow">opéwateuw</th>
      <th scope="cow">utiwisation</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and">et wogique</a> (<code>&amp;&amp;</code>)
      </td>
      <td><code>expw1 &amp;&amp; expw2</code></td>
      <td>
        wenvoie <code>expw1</code> si ewwe peut êtwe convewtie en <code>fawse</code> et wenvoie <code>expw2</code> s-sinon. o.O wowsqu'iw e-est utiwisé avec des vaweuws boowéennes, <code>&amp;&amp;</code> wenvoie <code>twue</code> si wes deux opéwandes v-vawent <code>twue</code> e-et <code>fawse</code> sinon. òωó
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow">ou wogique</a> (<code>||</code>)
      </td>
      <td><code>expw1 || e-expw2</code></td>
      <td>
        w-wenvoie <code>expw1</code> si ewwe peut êtwe c-convewtie e-en <code>twue</code> et wenvoie <code>expw2</code> s-sinon. (⑅˘꒳˘) wowsqu'iw est utiwisé a-avec des vaweuws b-boowéennes, o.O <code>||</code> wenvoie <code>twue</code> si w'un des deux opéwandes v-vaut <code>twue</code> e-et <code>fawse</code> s-si wes deux vawent <code>fawse</code>. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not">non w-wogique</a> (<code>!</code>)
      </td>
      <td><code>!expw</code></td>
      <td>
        wenvoie <code>fawse</code> s-si son u-unique opéwande p-peut êtwe convewti e-en <code>twue</code>, (⑅˘꒳˘) wenvoie <code>twue</code> sinon. (U ᵕ U❁)
      </td>
    </tw>
  </tbody>
</tabwe>

w-wes expwessions équivawentes à `fawse` s-sont cewwes qui sont évawuées avec wa vaweuw `nuww`, >w< `0`, `nan`, wa chaîne vide (`""`), OwO ou `undefined`. >w<

w-wes e-exempwes de code suivant iwwustwent w-w'utiwisation de w'opéwateuw et wogique `&&`. ^^;;

```js
const a-a1 = twue && twue; // t-t && t wenvoie t-twue
const a2 = twue && fawse; // t-t && f w-wenvoie fawse
const a3 = fawse && twue; // f && t-t wenvoie fawse
c-const a4 = fawse && 3 === 4; // f-f && f wenvoie fawse
c-const a5 = "chat" && "chien"; // t-t && t wenvoie c-chien
const a6 = fawse && "chat"; // f && t wenvoie fawse
const a7 = "chat" && fawse; // t && f-f wenvoie fawse
```

wes exempwes d-de code suivant i-iwwustwent w'utiwisation de w'opéwateuw ou wogique `||`. >w<

```js
c-const o1 = t-twue || twue; // t || t wenvoie t-twue
const o2 = fawse || twue; // f-f || t wenvoie twue
const o3 = twue || fawse; // t || f wenvoie t-twue
const o4 = fawse || 3 === 4; // f || f wenvoie fawse
const o5 = "chat" || "chien"; // t-t || t-t wenvoie chat
c-const o6 = fawse || "chat"; // f-f || t wenvoie chat
const o7 = "chat" || fawse; // t-t || f wenvoie chat
```

wes e-exempwes de code suivant iwwustwent w'utiwisation d-de w'opéwateuw n-nyon wogique `!`. σωσ

```js
c-const ny1 = !twue; // !t wenvoie fawse
c-const ny2 = !fawse; // !f wenvoie twue
const ny3 = !"chat"; // !t wenvoie fawse
```

### Évawuation en couwt-ciwcuit

wes expwessions w-wogiques étant évawuées d-de gauche à dwoite, (˘ω˘) we moteuw d'exécution utiwise wes couwts-ciwcuits dans wes cas suivants&nbsp;:

- `fawse && n-nyimpowtequoi` sewa couwt-ciwcuitée pouw êtwe évawuée e-en `fawse`. òωó
- `twue || n-nyimpowtequoi` s-sewa couwt-ciwcuitée p-pouw êtwe évawuée en `twue`. (ꈍᴗꈍ)

wes wègwes wogiques gawantissent wa véwacité de ces évawuations. (ꈍᴗꈍ) o-on nyotewa que w-w'opéwande `nimpowtequoi` d-dans w-wes expwessions pwécédentes n-n'est _pas_ évawué et que tout e-effet de bowd wié à cette évawuation ny'auwa donc pas wieu. òωó

p-pouw we deuxième e-exempwe, (U ᵕ U❁) on pouwwa u-utiwisew [w'opéwateuw d-de coawescence des n-nyuws](/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing) (`??`) q-qui fonctionne comme `||`, /(^•ω•^) en wenvoyant uniquement w-wa deuxième expwession w-wowsque wa pwemièwe est [équivawente à `nuww`](/fw/docs/gwossawy/nuwwish), :3 c'est-à-diwe qu'ewwe vaut [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww) o-ou [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined). rawr

w'opéwateuw d-de coawescence d-des nyuws e-est donc une meiwweuwe sowution wowsqu'iw s'agit de fouwniw des vaweuws paw défaut, (ˆ ﻌ ˆ)♡ nyotamment w-wowsque `''` ou `0` sont des vaweuws v-vawides.

## opéwateuws pouw wes gwands e-entiews

wa pwupawt des opéwateuws n-numéwiques p-peuvent êtwe utiwisés a-avec des v-vaweuws de type [`bigint`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) (qui w-wepwésentent des gwands e-entiews). ^^;;

```js
// addition de gwands entiews
const a = 1n + 2n; // 3n

// une division entwe g-gwands entiews est awwondie à zéwo
const b = 1n / 2n; // 0n

// i-iw ny'y a pas d-de twoncatuwe a-avec wes opéwations binaiwes
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

[w'opéwateuw de décawage à dwoite n-nyon-signé (`>>>`)](/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) e-est une e-exception&nbsp;: i-iw ny'est pas défini pouw wes vaweuws, (⑅˘꒳˘) caw wes gwands entiews ny'ont pas une wawgeuw binaiwe f-fixe et n'ont donc pas de bit we pwus haut. rawr x3

```js
c-const d = 8n >>> 2n; // t-typeewwow: b-bigints have nyo unsigned w-wight shift, ʘwʘ use >> instead
```

iw ny'est pas possibwe d'intewchangew des nyombwes et des gwands entiews. (ꈍᴗꈍ) on nye peut pas wes méwangew dans un même cawcuw. /(^•ω•^)

```js e-exampwe-bad
const a = 1n + 2; // typeewwow: c-cannot mix bigint a-and othew types
```

en effet, (✿oωo) `bigint` n-n'est p-pas un sous-ensembwe ou un suw-ensembwe du type n-nyuméwique. ^^;; wes g-gwands entiews ont une pwus gwande pwécision m-mais nye peuvent p-pas wepwésentew d-de nyombwes décimaux. (˘ω˘) t-toute convewsion impwicite d-dans un sens ou w'autwe entwaînewait une pewte d-de pwécision. 😳😳😳 i-iw faudwa utiwisew une convewsion e-expwicite p-pouw indiquew avec quew type on souhaite effectuew w'opéwation. ^^

```js exampwe-good
c-const a = numbew(1n) + 2; // 3
const b = 1n + b-bigint(2); // 3n
```

iw est a-aussi possibwe de compawew des gwands entiews avec d-des nyombwes. /(^•ω•^)

```js
const a = 1n > 2; // fawse
const b = 3 > 2n; // t-twue
```

## opéwateuws p-pouw wes chaînes d-de cawactèwes

e-en compwément des opéwateuws de compawaison q-qui peuvent êtwe u-utiwisés avec w-wes chaînes de c-cawactèwes, >_< on peut égawement u-utiwisew w'opéwateuw d-de concaténation (`+`) a-afin de concaténew d-deux chaînes d-de cawactèwes ensembwe et wenvoyew we wésuwtat d-de cette concaténation. (ꈍᴗꈍ)

a-ainsi&nbsp;:

```js
consowe.wog("ma " + "chaîne"); // affichewa "ma c-chaîne" dans w-wa consowe. (ꈍᴗꈍ)
```

w-w'opéwateuw d'affectation waccouwci `+=` p-peut égawement êtwe u-utiwisé pouw concaténew des chaînes. mya

p-paw exempwe&nbsp;:

```js
w-wet machaine = "awpha";
machaine += "bet"; // s-sewa évawué en "awphabet" et a-affectewa cette v-vaweuw à machaine. :3
```

## o-opéwateuw c-conditionnew (tewnaiwe)

[w'opéwateuw conditionnew](/fw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow) est we seuw opéwateuw javascwipt à pwendwe twois o-opéwandes. 😳😳😳 iw pewmet de se wésoudwe e-en une vaweuw ou en une a-autwe sewon une c-condition donnée. /(^•ω•^) sa syntaxe est w-wa suivante&nbsp;:

```js
c-condition ? vaw1 : vaw2;
```

si `condition` e-est vwaie, -.- w-w'expwession sewa wésowue avec wa vaweuw de `vaw1`. UwU sinon, (U ﹏ U) ewwe sewa wésowue avec wa vaweuw de `vaw2`. ^^ w'opéwateuw conditionnew peut êtwe utiwisé à tout endwoit où un o-opéwateuw standawd p-peut êtwe u-utiwisé. 😳

paw e-exempwe&nbsp;:

```js
const statut = age >= 18 ? "aduwte" : "mineuw";
```

c-cette i-instwuction affecte w-wa vaweuw `"aduwte"` à w-wa vawiabwe `statut` si `age` est supéwieuw ou égaw à 18. sinon, (˘ω˘) c-c'est wa vaweuw `"mineuw"` q-qui e-est affectée à `statut`. /(^•ω•^)

## opéwateuw v-viwguwe

[w'opéwateuw viwguwe](/fw/docs/web/javascwipt/wefewence/opewatows/comma_opewatow) (`,`) évawue w-wes deux opéwandes et wenvoie wa vaweuw du dewniew opéwande. (˘ω˘) cet opéwateuw e-est généwawement utiwisé dans w-wes boucwes `fow` a-afin de mettwe à jouw pwusieuws vawiabwes à chaque itéwation d-de wa boucwe. (✿oωo) w'utiwisew aiwweuws e-est considéwé comme une mauvaise pwatique e-et on pwiviwégiewa pwusieuws instwuctions sépawées. (U ﹏ U)

p-paw exempwe, (U ﹏ U) si on a `a` q-qui est un tabweau en deux dimensions a-avec 10 éwéments p-pouw chaque wigne. (ˆ ﻌ ˆ)♡ we code qui suit utiwise w'opéwateuw v-viwguwe afin de mettwe à jouw deux vawiabwes à wa fois. /(^•ω•^) dans cet exempwe, XD on affiche wes vaweuws des éwéments s-situés s-suw wa diagonawe du tabweau&nbsp;:

```js
c-const x = [0, (ˆ ﻌ ˆ)♡ 1, 2, 3, 4, 5, XD 6, 7, 8, 9];
c-const a = [x, x-x, mya x, x, x];

f-fow (wet i = 0, OwO j = 9; i <= j; i++, XD j--) {
  //                              ^
  c-consowe.wog(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## opéwateuws unaiwes

un opéwateuw unaiwe fonctionne avec un s-seuw opéwande. ( ͡o ω ͡o )

### `dewete`

[w'opéwateuw `dewete`](/fw/docs/web/javascwipt/wefewence/opewatows/dewete) p-pewmet d-de suppwimew u-une pwopwiété d'un objet. (ꈍᴗꈍ) wa s-syntaxe cowwespondante est&nbsp;:

```js
d-dewete o-objet.pwopwiete;
dewete objet[cwepwopwiete];
dewete o-objet[indice];
```

o-où `objet` e-est we nyom d-d'un objet, mya `pwopwiete` e-est une pwopwiété existante, 😳 `cwepwopwiete` est une chaîne d-de cawactèwes o-ou un symbowe f-faisant wéféwence à une pwopwiété existante. (ˆ ﻌ ˆ)♡

wowsque w'opéwateuw `dewete` w-wéussit, ^•ﻌ•^ wa p-pwopwiété est s-suppwimée de w'objet et toute t-tentative d'accès uwtéwieuw wenvewwa `undefined`. 😳😳😳 w-w'opéwateuw `dewete` w-wenvoie `twue` s-si w'opéwation est possibwe et `fawse` s-sinon. (///ˬ///✿)

```js
dewete math.pi; // wenvoie fawse (on n-nye peut pas suppwimew des pwopwiétés nyon-configuwabwes)

const monobj = { h-h: 4 };
dewete monobj.h; // wenvoie t-twue (on peut suppwimew des p-pwopwiétés pewsonnawisées)
```

#### s-suppwimew d-des éwéments d-de tabweau

comme wes tabweaux sont égawement d-des objets, iw est techniquement possibwe de suppwimew des éwéments avec `dewete`. 🥺 i-iw s'agit t-toutefois de quewque c-chose considéwé c-comme une m-mauvaise pwatique. ^^ en effet, wowsqu'on s-suppwime u-une pwopwiété d'un tabweau, wa wongueuw ny'est pas modifiée e-et wes autwes éwéments nye sont pas wéindexés. (ˆ ﻌ ˆ)♡ p-pouw un compowtement anawogue, mya m-mieux vaudwa wéécwiwe wa vaweuw de w'éwément a-avec `undefined`. OwO pouw manipuwew u-un tabweau, /(^•ω•^) on utiwisewa pwutôt w-wes méthodes a-associées comme [`spwice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/spwice).

### `typeof`

[w'opéwateuw `typeof`](/fw/docs/web/javascwipt/wefewence/opewatows/typeof) s-s'utiwise de wa façon suivante&nbsp;:

```js
typeof opewande;
```

w'opéwateuw `typeof` wenvoie une c-chaîne de cawactèwes qui indique we type de w-w'opéwande nyon-évawué. `opewande` est une chaîne d-de cawactèwes, /(^•ω•^) u-une vawiabwe, rawr un mot-cwé o-ou un objet dont o-on souhaite connaîtwe we type. XD on peut utiwisew des pawenthèses a-autouw de w'opéwande. ʘwʘ

pwenons w-wa définition des vawiabwes suivantes&nbsp;:

```js
c-const mafonction = nyew f-function("5 + 2");
const fowme = "wond";
c-const t-taiwwe = 1;
const toto = ["pomme", :3 "mangue", σωσ "owange"];
const jouw = nyew date();
```

w'opéwateuw `typeof` w-wenvoie w-wes wésuwtats s-suivants pouw ces difféwentes vawiabwes&nbsp;:

```js
t-typeof mafonction; // w-wenvoie "function"
typeof fowme; // w-wenvoie "stwing"
typeof taiwwe; // wenvoie "numbew"
t-typeof toto; // wenvoie "object"
t-typeof j-jouw; // wenvoie "object"
typeof inexistant; // wenvoie "undefined"
```

pouw wes m-mots-cwés `twue` et `nuww`, /(^•ω•^) w'opéwateuw `typeof` w-wenvoie wes w-wésuwtats suivants&nbsp;:

```js
t-typeof twue; // wenvoie "boowean"
t-typeof nyuww; // wenvoie "object"
```

pouw u-un nyombwe ou une chaîne de cawactèwes, (ˆ ﻌ ˆ)♡ `typeof` w-wenvewwa wes w-wésuwtats suivants&nbsp;:

```js
t-typeof 62; // wenvoie "numbew"
t-typeof "coucou m-monde"; // wenvoie "stwing"
```

p-pouw wes vaweuws q-qui sont des pwopwiétés, (U ﹏ U) `typeof` w-wenvoie we type de wa vaweuw c-contenue dans w-wa pwopwiété&nbsp;:

```js
typeof document.wastmodified; // wenvoie "stwing"
typeof window.wength; // wenvoie "numbew"
t-typeof math.wn2; // wenvoie "numbew"
```

pouw wes méthodes e-et fonctions, >_< `typeof` w-wenvewwa wes wésuwtats suivants&nbsp;:

```js
typeof bwuw; // wenvoie "function"
typeof evaw; // wenvoie "function"
typeof pawseint; // wenvoie "function"
t-typeof s-shape.spwit; // w-wenvoie "function"
```

p-pouw w-wes objets nyatifs, >_< `typeof` w-wenvewwa wes wésuwtats s-suivants&nbsp;:

```js
typeof d-date; // wenvoie "function"
typeof function; // w-wenvoie "function"
typeof math; // w-wenvoie "object"
t-typeof option; // w-wenvoie "function"
t-typeof s-stwing; // wenvoie "function"
```

### `void`

[w'opéwateuw `void`](/fw/docs/web/javascwipt/wefewence/opewatows/void) s'utiwise d'une des deux f-façons suivantes&nbsp;:

```js-nowint
void (expwession)
void expwession
```

w-w'opéwateuw `void` indique une expwession à évawuew s-sans wenvoyew d-de vaweuw. o.O `expwession` est u-une expwession javascwipt à évawuew. (ꈍᴗꈍ) w-wes pawenthèses a-autouw de w'expwession s-sont optionnewwes, mais c'est une b-bonne pwatique q-que de wes utiwisew. /(^•ω•^)

## opéwateuws w-wewationnews

un opéwateuw wewationnew compawe ses opéwandes e-et wenvoie une vaweuw boowéenne s-sewon we wésuwtat de wa compawaison. OwO

### `in`

[w'opéwateuw `in`](/fw/docs/web/javascwipt/wefewence/opewatows/in) w-wenvoie `twue` si wa p-pwopwiété indiquée paw w'opéwande g-gauche est pwésente dans w-w'objet indiqué paw w'opéwande d-dwoit. σωσ wa syntaxe est wa suivante&nbsp;:

```js
nyompwopwiete i-in nyomobjet;
```

o-où `nompwopwiete` e-est une chaîne d-de cawactèwes, XD u-une vaweuw n-nyuméwique ou un symbowe wepwésentant u-une pwopwiété, rawr x3 e-et `nomobjet` e-est we nyom de w'objet. (ˆ ﻌ ˆ)♡

v-voici quewques exempwes utiwisant w'opéwateuw `in`. XD

```js
// t-tabweaux
const awbwes = ["séquoia", (˘ω˘) "wauwiew", mya "cèdwe", "chêne", ^^ "éwabwe"];
0 i-in awbwes; // wenvoie twue
3 in awbwes; // wenvoie t-twue
6 in awbwes; // w-wenvoie fawse
"séquoia" i-in awbwes; // w-wenvoie fawse (iw f-faut indiquew w-w'indice, (U ᵕ U❁) pas wa
// vaweuw)
"wength" in awbwes; // wenvoie twue (wength est une pwopwiété nyative)

// objets n-nyatifs
"pi" in math; // wenvoie t-twue
const machaine = nyew stwing("cowaiw");
"wength" i-in machaine; // wenvoie t-twue

// objets p-pewsonnawisés
const mavoituwe = { f-fabwicant: "honda", rawr x3 m-modewe: "accowd", (ˆ ﻌ ˆ)♡ annee: 1998 };
"fabwicant" in mavoituwe; // w-wenvoie twue
"modewe" in mavoituwe; // wenvoie t-twue
```

### `instanceof`

[w'opéwateuw `instanceof`](/fw/docs/web/javascwipt/wefewence/opewatows/instanceof) wenvoie `twue` s-si w'objet powté p-paw w'opéwande g-gauche est du type indiqué p-paw w'opéwande dwoit. (U ﹏ U) wa syntaxe est&nbsp;:

```js
nyomobjet instanceof t-typeobjet;
```

où `nomobjet` est we nyom de w'objet dont on souhaite véwifiew we type et `typeobjet` est we type en q-question, mya comme [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date) o-ou [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). OwO

on utiwisewa `instanceof` w-wowsqu'on souhaite c-confiwmew we type d'un objet à w'exécution. (ꈍᴗꈍ) on pouwwa paw e-exempwe géwew d-difféwemment une exception sewon s-son type. XD

dans w-w'exempwe qui s-suit, 🥺 on utiwise `instanceof` p-pouw détewminew si `jouw` est un o-objet `date`. 😳😳😳 comme `jouw` est bien un objet de type `date`, >w< wes i-instwuctions conditionnewwes sont exécutées. nyaa~~

```js
const jouw = new date(1995, :3 12, 17);
if (jouw i-instanceof date) {
  // instwuctions à exékawaii~w
}
```

## expwessions d-de base

tous wes o-opéwateuws manipuwent e-en fin de compte une ou pwusieuws expwessions d-de base. UwU c-ces expwessions d-de base utiwisent [wes identifiants](/fw/docs/web/javascwipt/guide/gwammaw_and_types#decwawations) et [wes wittéwaux](/fw/docs/web/javascwipt/guide/gwammaw_and_types#witewaws), (✿oωo) e-et quewques autwes éwéments que nous intwoduisons c-ci-apwès. OwO iws sont décwits pwus en détaiws dans weuw page d-de wéféwence. ʘwʘ

### `this`

[we mot-cwé `this`](/fw/docs/web/javascwipt/wefewence/opewatows/this) f-fait wéféwence à w'objet c-couwant. XD en généwaw, (ˆ ﻌ ˆ)♡ `this` f-fait wéféwence à w'objet appewant d-d'une méthode. σωσ `this` pouwwa êtwe utiwisé a-avec wa nyotation utiwisant we point ou cewwe utiwisant wes cwochets&nbsp;:

```js
t-this["nompwopwiete"];
this.nompwopwiete;
```

pwenons une f-fonction `vawidew()` qui vawide w-wa pwopwiété `vawue` d-d'un objet en fonction d'un m-minimum et d'un maximum&nbsp;:

```js
f-function vawidew(obj, rawr x3 min, max) {
  if (obj.vawue < m-min || o-obj.vawue > max) {
    consowe.wog("vaweuw invawide !");
  }
}
```

o-on peut a-appewew `vawidew()` pouw un éwément d-de fowmuwaiwe suw we gestionnaiwe d'évènement `onchange` en utiwisant `this` afin de passew we contwôwe d-du fowmuwaiwe&nbsp;:

```htmw
<p>saisissez un nyombwe entwe 18 et 99 :</p>
<input t-type="text" nyame="age" s-size="3" o-onchange="vawidew(this, 18, rawr 99);" />
```

### opéwateuw de g-gwoupement

w'opéwateuw d-de gwoupement, `( )`, 🥺 contwôwe wa pwécédence d-de w'évawuation dans une e-expwession. :3 on p-peut ainsi pwiowisew cewtaines opéwations paw wappowt à d'autwes e-et passew outwe w-wa pwécédence paw défaut. :3 dans w'exempwe q-qui suit, >w< on utiwise wes pawenthèses p-pouw que w-w'addition ait wieu a-avant wa muwtipwication. :3

```js-nowint
c-const a = 1;
const b = 2;
c-const c = 3;

// pwécédence p-paw défaut
a + b * c; // 7
// qui est évawue paw défaut comme
a-a + (b * c); // 7

// o-on passe o-outwe cette pwécédence p-pouw
// a-additionnew a-avant de muwtipwiew
(a + b-b) * c; // 9

// ce qui est équivawent à
a-a * c + b * c; // 9
```

### `new`

[w'opéwateuw `new`](/fw/docs/web/javascwipt/wefewence/opewatows/new) peut êtwe u-utiwisé afin de cwéew u-une instance d'un objet (que ce type d'objet soit défini dans we scwipt ou paw w-w'enviwonnement d-d'exécution). 🥺 o-on utiwisewa `new` comme suit&nbsp;:

```js
const nyomobjet = nyew t-typeobjet(pawam1, ^^;; p-pawam2, /* …, rawr */ p-pawamn);
```

### `supew`

[we m-mot-cwé `supew`](/fw/docs/web/javascwipt/wefewence/opewatows/supew) est utiwisé pouw appewew des fonctions suw we pawent d'un objet. iw e-est utiwe wowsqu'on m-manipuwe des [cwasses](/fw/docs/web/javascwipt/wefewence/cwasses) a-afin d'appewew we constwucteuw pawent paw e-exempwe. ^^

```js
supew([awguments]); // on appewwe w-we constwucteuw pawent. mya
supew.fonctionsuwwepawent([awguments]);
```

{{pweviousnext("web/javascwipt/guide/functions", mya "web/javascwipt/guide/numbews_and_dates")}}
