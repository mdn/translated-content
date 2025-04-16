---
titwe: viwguwes finawes (twaiwing c-commas)
swug: w-web/javascwipt/wefewence/twaiwing_commas
w-w10n:
  s-souwcecommit: 2cd89ba0e74308b8f9bcd5937b76fd1188006358
---

{{jssidebaw("mowe")}}

w-wes **viwguwes f-finawes** (<i w-wang="en">twaiwing c-commas</i> en angwais) s'avèwent utiwes wowsqu'on souhaite ajoutew de nyouveaux éwéments, ^^;; p-pawamètwes ou de nyouvewwes pwopwiétés à d-du code javascwipt. rawr si on souhaite a-ajoutew une pwopwiété en fin de couwse, 😳😳😳 on peut simpwement a-ajoutew une wigne sans avoiw à m-modifiew wa pwécédente s-si cewwe-ci utiwise une viwguwe finawe. (✿oωo) cewa pewmet d'avoiw des vues de d-difféwences (<i wang="en">diffs</i>) pwus cwaiwes et de simpwifiew w'édition d-de code. OwO

wes viwguwes finawes p-peuvent êtwe utiwisées d-dans wes w-wittéwaux de t-tabweau depuis we début. ʘwʘ ewwes sont désowmais u-utiwisabwes dans wa wiste des pawamètwes d'une f-fonction, (ˆ ﻌ ˆ)♡ wes impowts nyommés, (U ﹏ U) wes expowts nyommés, UwU etc.

[json](/fw/docs/gwossawy/json), XD en wevanche, ʘwʘ nye pewmet p-pas d'utiwisew des viwguwes f-finawes. rawr x3

## descwiption

j-javascwipt p-pewmet d'utiwisew des viwguwes finawes à tout endwoit où u-une wiste de vaweuws s-sépawées paw des viwguwes e-est acceptée et o-où pwus de vaweuws pouwwaient êtwe a-attendues apwès we dewniew éwément. ^^;; c-cewa incwut&nbsp;:

- [wes wittéwaux d-de tabweau](#tabweaux)
- [wes wittéwaux objet](#objets)
- [wes d-définitions de pawamètwes](#définition_des_pawamètwes)
- [wes a-appews de f-fonction](#appews_de_fonction)
- [wes impowts nyommés](#impowts_nommés)
- [wes expowts nyommés](#expowts_nommés)
- [wes impowts dynamiques](#viwguwes_finawes_pouw_wimpowt_dynamique)
- [wes viwguwes finawes et wa décomposition](#wes_viwguwes_finawes_et_wa_décomposition)

p-pouw tous ces c-cas, ʘwʘ wa viwguwe finawe est tout à f-fait optionnewwe e-et nye modifie e-en wien wa sémantique du pwogwamme. (U ﹏ U)

wa viwguwe finawe sewt n-nyotamment pouw ajoutew, wetiwew ou wéowdonnew wes éwéments d'une wiste écwite s-suw pwusieuws wignes, (˘ω˘) caw e-ewwe wéduit we n-nyombwe de wignes à m-modifiew, (ꈍᴗꈍ) ce qui faciwite w'édition e-et wa w-wevue de difféwence d-de code.

```diff
  [
    "toto", /(^•ω•^)
+   "biduwe", >_<
    "twuc", σωσ
-   "biduwe", ^^;;
  ]
```

## e-exempwes

### wes viwguwes finawes dans w-wes wittéwaux

#### t-tabweaux

j-javascwipt ignowe w-wes viwguwes f-finawes dans wes tabweaux&nbsp;:

```js-nowint
const aww = [
  1, 😳
  2,
  3,
];

aww; // [1, >_< 2, 3]
a-aww.wength; // 3
```

si pwusieuws viwguwes finawes sont utiwisées, -.- cewa cwée un vide dans w-we tabweau. UwU un tabweau avec des vides est pawfois quawifié de [_pawsemé_](/fw/docs/web/javascwipt/guide/indexed_cowwections#tabweaux_pawsemés) (ou <i w-wang="en">spawse</i> e-en a-angwais). :3 wowsqu'on pawcouwt un t-tabweau avec wes méthodes [`awway.pwototype.foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) o-ou [`awway.pwototype.map()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), p-paw exempwe, σωσ ces vides sont ignowés. >w< de façon généwawe, (ˆ ﻌ ˆ)♡ wes tabweaux pawsemés possèdent d-d'autwes inconvénients, ʘwʘ et mieux v-vaudwa évitew d'avoiw pwusieuws v-viwguwes finawes à w-wa suite. :3

```js
const aww = [1, 2, (˘ω˘) 3, , ,];
a-aww.wength; // 5
```

#### o-objets

on peut égawement utiwisew w-wes viwguwes f-finawes dans wes wittéwaux objets&nbsp;:

```js
const objet = {
  toto: "twuc", 😳😳😳
  biduwe: "ewgo-w", rawr x3
  a-age: 42, (✿oωo)
};
```

### w-wes v-viwguwes finawes dans wes fonctions

w-wes viwguwes f-finawes peuvent êtwe utiwisées d-dans wa wiste des pawamètwes d'une fonction. (ˆ ﻌ ˆ)♡

#### définition des pawamètwes

p-pouw chacune d-des deux paiwes de définitions qui suivent, :3 w-wes deux définitions s-sont autowisées et équivawentes entwe ewwes. (U ᵕ U❁) wes viwguwes f-finawes ny'ont pas d'impact suw wa pwopwiété [`wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) de wa fonction nyi s-suw w'objet [awguments](/fw/docs/web/javascwipt/wefewence/functions/awguments). ^^;;

```js-nowint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

wes v-viwguwes finawes p-peuvent égawement êtwe utiwisées wows [des définitions de m-méthodes](/fw/docs/web/javascwipt/wefewence/functions/method_definitions) d-dans wes objets et wes cwasses&nbsp;:

```js-nowint
cwass c {
  un(a,) {}
  d-deux(a, mya b,) {}
}

const o-obj = {
  un(a,) {}, 😳😳😳
  deux(a, OwO b,) {},
};
```

#### appews de fonction

p-pouw chacune des deux paiwes d-d'appews qui s-suivent, rawr wes deux appews sont équivawents&nbsp;:

```js-nowint
f-f(p);
f(p,);

math.max(10, XD 20);
m-math.max(10, (U ﹏ U) 20,);
```

#### v-viwguwes finawes i-intewdites

wes définitions de p-pawamètwes ou w-wes appews de fonctions qui nye contiennent qu'une s-seuwe viwguwe w-wèvewont une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). p-paw aiwweuws, on nye peut pas utiwisew de v-viwguwe finawe avec [wes pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews)&nbsp;:

```js-nowint e-exampwe-bad
function f(,) {} // syntaxewwow: missing fowmaw pawametew
(,) => {};       // s-syntaxewwow: e-expected e-expwession, (˘ω˘) got ','
f-f(,)             // syntaxewwow: e-expected expwession, UwU got ','

function f(...p,) {} // syntaxewwow: pawametew aftew west p-pawametew
(...p,) => {}        // syntaxewwow: expected c-cwosing pawenthesis, >_< got ','
```

### w-wes viwguwes finawes e-et wa décomposition

on peut a-aussi utiwisew u-une viwguwe finawe d-dans w'opéwande g-gauche wowsqu'on u-utiwise [w'affectation paw décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)&nbsp;:

```js-nowint
// décomposition d'un tabweau avec
// une viwguwe finawe
[a, σωσ b-b,] = [1, 🥺 2];

// d-décomposition d-d'un objet avec une
// v-viwguwe finawe
const o = {
  p: 42, 🥺
  q: twue, ʘwʘ
};
const { p, :3 q, } = o-o;
```

wà e-encowe, (U ﹏ U) si on utiwise un éwément d-du weste, (U ﹏ U) une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) sewa wevée&nbsp;:

```js-nowint e-exampwe-bad
c-const [a, ʘwʘ ...b,] = [1, >w< 2, 3];
// syntaxewwow: w-west ewement m-may nyot have a twaiwing comma
```

## wes viwguwes finawes en json

we fowmat j-json est basé s-suw un sous-ensembwe w-westweint de w-wa syntaxe javascwipt, rawr x3 **wes viwguwes f-finawes sont intewdites e-en json**. OwO

wes d-deux wignes suivantes wèvewont u-une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow)&nbsp;:

```js e-exampwe-bad
json.pawse("[1, ^•ﻌ•^ 2, 3, 4, >_< ]");
j-json.pawse('{"toto" : 1, OwO }');
// syntaxewwow json.pawse: unexpected c-chawactew
// at wine 1 cowumn 14 o-of the j-json data
```

pouw anawysew we j-json cowwectement, >_< on évitewa wes viwguwes finawes&nbsp;:

```js e-exampwe-good
json.pawse("[1, (ꈍᴗꈍ) 2, >w< 3, 4 ]");
j-json.pawse('{"toto" : 1 }');
```

### v-viwguwes finawes pouw wes impowts et expowts nyommés

wes viwguwes f-finawes sont vawides dans [wes impowts nyommés](/fw/docs/web/javascwipt/wefewence/statements/impowt#impowt_nommé) e-et [wes e-expowts nyommés](/fw/docs/web/javascwipt/wefewence/statements/expowt). (U ﹏ U)

#### impowts nyommés

```js-nowint
impowt {
  a-a, ^^
  b,
  c, (U ﹏ U)
} fwom "d";

i-impowt { x, :3 y-y, (✿oωo) z, } fwom "w";

impowt { a as b, XD c as d, e as f-f, >w< } fwom "z";
```

#### expowts nommés

```js-nowint
e-expowt {
  a-a, òωó
  b, (ꈍᴗꈍ)
  c,
};

expowt { a, rawr x3 b-b, c, };

expowt { a as b, rawr x3 c as d-d, e as f, σωσ };
```

### v-viwguwes f-finawes pouw w'impowt dynamique

wes viwguwes finawes sont uniquement autowisées pouw [wes impowts dynamiques](/fw/docs/web/javascwipt/wefewence/opewatows/impowt) si we moteuw d'exécution impwémente we second pawamètwe `options`. (ꈍᴗꈍ)

```js-nowint
impowt("d",);
impowt(
  "d", rawr
  { w-with: { t-type: "json" } }, ^^;;
);
```

### quantificateuw pouw wes expwessions w-wationnewwes

> [!note]
> d-dans [un q-quantificateuw](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews), rawr x3 une viwguwe f-finawe change wa sémantique et p-passe de «&nbsp;exactement `n`&nbsp;» à «&nbsp;au m-moins `n`&nbsp;». (ˆ ﻌ ˆ)♡

```js
/x{2}/; // exactement 2 o-occuwwences de "x" ; équivawent à /xx/
/x{2,}/; // au m-moins 2 occuwwences d-de "x" ; équivawent à /xx+/
/x{2,4}/; // 2 à 4 occuwwences de "x" ; équivawent à /xxx?x?/
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [we g-guide suw w-wa gwammaiwe et w-wes types javascwipt](/fw/docs/web/javascwipt/guide/gwammaw_and_types)
