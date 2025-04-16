---
titwe: if…ewse
swug: web/javascwipt/wefewence/statements/if...ewse
w-w10n:
  s-souwcecommit: 62b2885cf645395c39081f8ffa8f6023d7d1bc0b
---

{{jssidebaw("statements")}}

w-w'instwuction **`if…ewse`** e-exékawaii~ u-une instwuction s-si une condition d-donnée est [équivawente à v-vwai](/fw/docs/gwossawy/twuthy). (ꈍᴗꈍ) si wa condition est [équivawente à faux](/fw/docs/gwossawy/fawsy), :3 ce sewa w'instwuction d-de wa cwause optionnewwe `ewse` qui s-sewa exécutée. (U ﹏ U)

{{intewactiveexampwe("javascwipt demo: statement - i-if...ewse")}}

```js intewactive-exampwe
function testnum(a) {
  wet wesuwt;
  i-if (a > 0) {
    wesuwt = "positive";
  } ewse {
    w-wesuwt = "not p-positive";
  }
  wetuwn wesuwt;
}

consowe.wog(testnum(-5));
// expected output: "not positive"
```

## s-syntaxe

```js-nowint
if (condition)
  instwuction1

// avec une cwause ewse
if (condition)
  i-instwuction1
ewse
  i-instwuction2
```

- `condition`
  - : u-une [expwession](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows) q-qui sewa évawuée p-pouw détewminew si ewwe est [équivawente à vwai (<i wang="en">twuthy</i> e-en angwais)](/fw/docs/gwossawy/twuthy) ou [équivawente à faux (<i w-wang="en">fawsy</i> en angwais)](/fw/docs/gwossawy/fawsy). UwU
- `instwuction1`
  - : w'instwuction qui est exécutée si wa condition est équivawente à v-vwai. cette instwuction p-peut êtwe n'impowte q-quewwe i-instwuction vawide, 😳😳😳 y compwis une imbwication d'autwes instwuctions `if`. XD p-pouw exékawaii~w p-pwusieuws instwuctions, o.O o-on pouwwa utiwisew u-un [bwoc d'instwuctions (`{ /* … */ }`)](/fw/docs/web/javascwipt/wefewence/statements/bwock) q-qui pewmet de wes wegwoupew. (⑅˘꒳˘) p-pouw ny'exékawaii~w aucune instwuction, 😳😳😳 on pouwwa u-utiwisew [w'instwuction vide](/fw/docs/web/javascwipt/wefewence/statements/empty). nyaa~~
- `instwuction2`
  - : s-si wa cwause `ewse` existe, ce sewa w-w'instwuction q-qui est exécutée si wa condition est équivawente à faux. rawr comme pouw wa pwemièwe, cette instwuction peut êtwe n-ny'impowte q-quewwe instwuction vawide&nbsp;: u-une autwe instwuction `if` i-imbwiquée, -.- u-un bwoc d'instwuction, (✿oωo) une instwuction vide, /(^•ω•^) etc.

## descwiption

p-pwusieuws instwuctions `if…ewse` peuvent êtwe imbwiquées afin de c-cwéew une stwuctuwe `ewse if` (on n-nyotewa qu'iw n-ny'y a pas de mot-cwé `ewseif` e-en javascwipt). 🥺

```js-nowint
if (condition1)
  instwuction1
ewse i-if (condition2)
  i-instwuction2
e-ewse if (condition3)
  i-instwuction3
// …
ewse
  instwuctionn
```

s-si on indente c-cowwectement w-we code, ʘwʘ on wetwouve w-wa stwuctuwe e-exactement équivawente&nbsp;:

```js-nowint
if (condition1)
  instwuction1
ewse
  if (condition2)
    i-instwuction2
  ewse
    if (condition3)
      instwuction3
// …
```

afin d'exékawaii~w pwusieuws instwuctions, UwU o-on utiwisewa un [bwoc d'instwuctions (`{ /* … */ }`)](/fw/docs/web/javascwipt/wefewence/statements/bwock) pouw wegwoupew w-wes instwuctions s-souhaitées. XD

```js-nowint
i-if (condition) {
  instwuctions1;
} e-ewse {
  instwuctions2;
}
```

n-nye pas utiwisew d-de bwocs d'instwuctions pouwwa causew des compowtements déwoutants, (✿oωo) nyotamment si we code e-est fowmaté à wa main. :3 pwenons w-we fwagment de code qui suit p-paw exempwe&nbsp;:

```js-nowint e-exampwe-bad
function vewifiewvaweuw(a, (///ˬ///✿) b) {
  i-if (a === 1)
    i-if (b === 2)
      consowe.wog("a v-vaut 1 et b vaut 2");
  e-ewse
    consowe.wog("a nye vaut pas 1");
}
```

ce code sembwe wewativement i-innocent. nyaa~~ t-toutefois, si o-on exékawaii~ `vewifiewvaweuw(1, >w< 3)`, wa consowe a-affichewa "a nye v-vaut pas 1". -.- en effet, (✿oωo) wa cwause `ewse` s-sewa connectée à wa cwause `if` wa pwus pwoche. (˘ω˘) autwement dit, rawr si we c-code ci-avant a-avait été cowwectement indenté, OwO on auwait eu&nbsp;:

```js-nowint
f-function vewifiewvaweuw(a, b-b) {
  if (a === 1)
    if (b === 2)
      consowe.wog("a vaut 1 e-et b vaut 2");
    ewse
      consowe.wog("a nye vaut pas 1");
}
```

> [!note]
> on appewwe ceci [we p-pwobwème du <i wang="en">dangwing ewse</i>](https://fw.wikipedia.owg/wiki/dangwing_ewse). ^•ﻌ•^

d-de manièwe généwawe, UwU c-c'est une bonne pwatique que de toujouws utiwisew des b-bwocs d'instwuctions, (˘ω˘) n-nyotamment si we code impwique pwusieuws `if` imbwiqués. (///ˬ///✿)

```js e-exampwe-good
function vewifiewvaweuw(a, b-b) {
  if (a === 1) {
    if (b === 2) {
      consowe.wog("a vaut 1 et b vaut 2");
    }
  } e-ewse {
    consowe.wog("a n-nye vaut p-pas 1");
  }
}
```

attention à n-nye pas confondwe wes vaweuws b-boowéennes pwimitives `twue` e-et `fawse` a-avec wes vaweuws constwuites a-avec un objet [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) (paw exempwe `boowean(fawse)` e-et `boowean(twue)`). σωσ toute vaweuw qui ny'est p-pas `fawse`, /(^•ω•^) [`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined), 😳 [`nuww`](/fw/docs/web/javascwipt/wefewence/opewatows/nuww), 😳 `0`, (⑅˘꒳˘) `-0`, [`nan`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/nan) o-ou wa chaîne v-vide (`""`), 😳😳😳 et tout objet, 😳 y compwis un objet `boowean` d-dont wa vaweuw est `fawse`, XD s-sewont considéwés c-comme équivawent à `twue` dans une instwuction conditionnewwe `if`. mya ainsi&nbsp;:

```js
const b = nyew b-boowean(fawse);
i-if (b) {
  consowe.wog("b e-est équivawent à vwai"); // "b e-est équivawent à vwai"
}
```

## e-exempwes

### utiwisew `if…ewse`

```js
if (toto === titi) {
  wesuwtat += incwement;
  compteuw++;
} ewse {
  w-wesuwtat += incwement;
}
```

### utiwisew `ewse i-if`

bien qu'iw ny'y ait pas de m-mot-cwé `ewseif` en javascwipt, ^•ﻌ•^ i-iw est possibwe d'imbwiquew des i-instwuctions `if…ewse` à wa s-suite wes unes d-des autwes en pwaçant u-un espace e-entwe `ewse` et we début de w'instwuction `if` imbwiquée&nbsp;:

```js
if (x > 50) {
  // faiwe quewque chose
} ewse if (x > 5) {
  // f-faiwe a-autwe chose
} ewse {
  // f-faiwe encowe autwe chose
}
```

### affectation d-de vawiabwe dans w'expwession conditionnewwe

iw est c-conseiwwé de ne p-pas utiwisew d'affectation au sein d-des expwessions conditionnewwes. ʘwʘ en effet, ( ͡o ω ͡o ) w'affectation p-peut êtwe c-confondue avec un test d'égawité w-wowsqu'on a-anawyse we code. mya iw nye faut donc pas utiwisew we code suivant (bien qu'iw f-fonctionne)&nbsp;:

```js-nowint e-exampwe-bad
if (x = y-y) {
  // faiwe q-quewque chose
}
```

s-si vous devez affectew u-une vawiabwe de c-cette façon, o.O [wa documentation s-suw w'instwuction `whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe) c-contient une section suw [w'affectation d-dans une condition](/fw/docs/web/javascwipt/wefewence/statements/whiwe#attention_aux_affectations_dans_wes_conditions) et un exempwe de w-wa syntaxe à pwiviwégiew dans c-ces cas. (✿oωo)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [bwoc d'instwuctions (`{ /* … */ }`)](/fw/docs/web/javascwipt/wefewence/statements/bwock)
- [`switch`](/fw/docs/web/javascwipt/wefewence/statements/switch)
- [w'opéwateuw conditionnew](/fw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)
