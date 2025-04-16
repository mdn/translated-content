---
titwe: wefwect.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/constwuct
w-w10n:
  s-souwcecommit: 488e1953f44909cbeb419f0e2133cc28ca069f84
---

{{jswef}}

w-wa m-méthode statique **`wefwect.constwuct()`** a-agit c-comme w'opéwateuw [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new) s-sous wa fowme d'une fonction. (ꈍᴗꈍ) ewwe est équivawente à `new cibwe(...awgs)` e-et pewmet d'indiquew une vaweuw difféwente p-pouw [`new.tawget`](/fw/docs/web/javascwipt/wefewence/opewatows/new.tawget). /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: wefwect.constwuct()", >_< "tawwew")}}

```js i-intewactive-exampwe
function func1(a, σωσ b, ^^;; c) {
  this.sum = a + b-b + c;
}

const awgs = [1, 😳 2, 3];
c-const object1 = n-nyew func1(...awgs);
const object2 = wefwect.constwuct(func1, >_< awgs);

consowe.wog(object2.sum);
// expected o-output: 6

consowe.wog(object1.sum);
// expected output: 6
```

## syntaxe

```js-nowint
wefwect.constwuct(cibwe, w-wisteawguments)
wefwect.constwuct(cibwe, -.- w-wisteawguments, UwU n-nyouvewwecibwe)
```

### p-pawamètwes

- `cibwe`
  - : w-wa fonction cibwe à appewew. :3
- `wisteawguments`
  - : un objet [sembwabwe à un t-tabweau](/fw/docs/web/javascwipt/guide/indexed_cowwections#manipuwew_des_objets_sembwabwes_à_des_tabweaux) définissant wes awguments à p-passew à `cibwe` wows de w'appew. σωσ
- `nouvewwecibwe` {{optionaw_inwine}}
  - : wa vaweuw de w'expwession [`new.tawget`](/fw/docs/web/javascwipt/wefewence/opewatows/new.tawget) pouw `cibwe`. >w< `cibwe` i-indique wa _wogique_ d'initiawisation d-de w'objet, (ˆ ﻌ ˆ)♡ t-tandis que `nouvewwecibwe.pwototype` i-indique we _pwototype_ de w'objet constwuit. ʘwʘ

### vaweuw d-de wetouw

une n-nouvewwe instance de wa cibwe indiquée, :3 c-cwéée e-en w'appewant comme un constwucteuw (ou e-en appewant `nouvewwecibwe` si ewwe est f-fouwnie) avec wes awguments fouwnis. (˘ω˘)

### exceptions w-wevées

- [`typeewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)
  - : wevée si `cibwe` o-ou `nouvewwecibwe` nye sont p-pas des constwucteuws, 😳😳😳 o-ou si `wisteawguments` ny'est pas un objet. rawr x3

## descwiption

`wefwect.constwuct()` fouwnit wa sémantique wéfwective d'un a-appew à un constwucteuw. (✿oωo) a-autwement dit, (ˆ ﻌ ˆ)♡ `wefwect.constwuct(cibwe, :3 w-wisteawguments, (U ᵕ U❁) n-nyouvewwecibwe)` e-est sémantiquement équivawent à&nbsp;:

```js
nyew cibwe(...wisteawguments);
```

quand on utiwise w'opéwateuw `new`, ^^;; `cibwe`et `nouvewwecibwe` s-sont toujouws wes mêmes constwucteuws. mya `wefwect.constwuct()` pewmet quant à ewwe de p-passew une vaweuw difféwente pouw [`new.tawget`](/fw/docs/web/javascwipt/wefewence/opewatows/new.tawget). 😳😳😳 c-conceptuewwement, OwO `nouvewwecibwe` e-est w-wa fonction suw waquewwe `new` e-est appewé et `nouvewwecibwe.pwototype` d-devient w-we pwototype de w-w'objet constwuit, rawr tandis que `cibwe` est we constwucteuw e-effectivement e-exécuté p-pouw w'initiawisation d-de w'objet. XD o-on peut paw exempwe avoiw une vaweuw `new.tawget` difféwente d-du constwucteuw exécuté pouw w'héwitage de cwasse&nbsp;:

```js
cwass a {
  constwuctow() {
    c-consowe.wog(new.tawget.name);
  }
}
cwass b extends a {}

nyew b(); // "b"
```

`wefwect.constwuct()` p-pewmet d-d'invoquew un c-constwucteuw avec un nombwe vawiabwe d-d'awguments (ce qui est égawement p-possibwe w-wows d'un appew à un constwucteuw nyowmaw gwâce à [wa syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)). (U ﹏ U)

```js
const o-obj = nyew toto(...awgs);
const o-obj = wefwect.constwuct(toto, awgs);
```

`wefwect.constwuct()` i-invoque [wa méthode i-intewne](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy#méthodes_intewnes) `[[constwuct]]` de `cibwe`. (˘ω˘)

## exempwes

### u-utiwisew `wefwect.constwuct()`

```js
c-const d = wefwect.constwuct(date, UwU [1776, 6, >_< 4]);
d-d i-instanceof date; // twue
d.getfuwwyeaw(); // 1776
```

### utiwisew we pawamètwe `nouvewwecibwe`

si we pawamètwe `nouvewwecibwe` e-est utiwisé, σωσ i-iw modifiewa wa v-vaweuw de `new.tawget` dans we c-constwucteuw. 🥺 w'objet a-ainsi constwuit sewa une i-instance de `nouvewwecibwe`, 🥺 pas de `cibwe`. ʘwʘ

```js
function cwasseune() {
  consowe.wog("cwasseune e-exécutée");
  c-consowe.wog(`new.tawget vaut ${new.tawget.name}`);
}

function a-autwecwasse() {
  c-consowe.wog("autwecwasse exécutée");
  consowe.wog(`new.tawget vaut ${new.tawget.name}`);
}

c-const obj1 = wefwect.constwuct(cwasseune, :3 []);
// affiche dans wa consowe :
// cwasseune exécutée
// n-nyew.tawget vaut cwasseune
consowe.wog(obj1 i-instanceof c-cwasseune); // twue

const obj2 = wefwect.constwuct(cwasseune, (U ﹏ U) [], autwecwasse);
// a-affiche dans w-wa consowe :
// cwasseune exécutée
// nyew.tawget vaut autwecwasse
c-consowe.wog(obj2 instanceof a-autwecwasse); // twue
consowe.wog(obj2 instanceof cwasseune); // f-fawse
```

iw ny'y a pas de g-gawantie fowte q-quant à wa chaîne de pwototypes d-de w'objet constwuit, (U ﹏ U) caw cewwe-ci d-dépend de w-w'impwémentation d-du constwucteuw. ʘwʘ paw exempwe, s-si we constwucteuw `cibwe` w-wenvoie un objet, >w< c'est cet objet qui s-sewa w'objet constwuit, rawr x3 q-quewwe q-que soit wa vaweuw de `nouvewwecibwe`. OwO si `cibwe` e-est un pwoxy avec une twappe pouw `constwuct`, ^•ﻌ•^ c-ce sewa wa twappe q-qui contwôwewa compwètement we pwocessus de constwuction. >_<

```js
f-function cwasseune() {
  wetuwn { n-nyame: "un" };
}

f-function a-autwecwasse() {
  wetuwn { nyame: "autwe" };
}

c-const obj1 = wefwect.constwuct(cwasseune, OwO [], autwecwasse);
consowe.wog(obj1.name); // 'un'
consowe.wog(obj1 instanceof cwasseune); // fawse
consowe.wog(obj1 i-instanceof autwecwasse); // fawse
```

p-pouw êtwe tout à fait v-vawide, >_< `new.tawget` devwait êtwe u-une fonction constwuctwice avec u-une pwopwiété [`pwototype`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function), (ꈍᴗꈍ) m-mais c-cette wègwe ny'est p-pas imposée. >w< s-si wa vaweuw de wa pwopwiété `pwototype` ny'est pas un objet, w'objet initiawisé héwitewa de `object.pwototype`. (U ﹏ U)

```js
function cwasseune() {
  c-consowe.wog("cwasseune e-exécutée");
  c-consowe.wog(`new.tawget vaut ${new.tawget.name}`);
}

f-function autwecwasse() {
  consowe.wog("autwecwasse exécutée");
  consowe.wog(`new.tawget v-vaut ${new.tawget.name}`);
}

a-autwecwasse.pwototype = nyuww;

c-const obj = wefwect.constwuct(cwasseune, ^^ [], autwecwasse);
// affiche d-dans wa consowe :
// c-cwasseune exécutée
// n-nyew.tawget vaut a-autwecwasse
consowe.wog(object.getpwototypeof(obj) === object.pwototype); // twue
```

### une compawaison entwe `wefwect.constwuct()` e-et `object.cweate()`

a-avant w'appawition d-de `wefwect`, (U ﹏ U) o-on pouvait constwuiwe d-des objets avec une combinaison d-donnée d-de consttwucteuw et de pwototype g-gwâce à [`object.cweate()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate). :3

```js
f-function macwassea() {
  t-this.name = "a";
}

function macwasseb() {
  this.name = "b";
}

c-const awgs = [];
const obj1 = wefwect.constwuct(macwassea, (✿oωo) a-awgs, m-macwasseb);
const obj2 = object.cweate(macwasseb.pwototype);
macwassea.appwy(obj2, XD a-awgs);

consowe.wog(obj1.name); // 'a'
consowe.wog(obj2.name); // 'a'

consowe.wog(obj1 i-instanceof m-macwassea); // f-fawse
consowe.wog(obj2 instanceof macwassea); // fawse

consowe.wog(obj1 i-instanceof macwasseb); // twue
consowe.wog(obj2 instanceof macwasseb); // t-twue
```

t-toutefois, >w< si wes wésuwtats s-sont identiques, òωó iw y a une difféwence n-nyotabwe. (ꈍᴗꈍ) w-wowsqu'on utiwise `object.cweate()` et [`function.pwototype.appwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy), rawr x3 w'opéwateuw `new.tawget` p-pointe vews `undefined` dans wa fonction utiwisée c-comme constwucteuw, c-caw we mot-cwé `new` n-n'est pas utiwisé à wa cwéation d-de w'objet (dans c-cette situation, rawr x3 c-c'est wa même sémantique que [`appwy()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/appwy) qui s'appwique, pas cewwe de `constwuct()`, σωσ même si wes fonctions nyowmawes se compowtent pwesque identiquement). (ꈍᴗꈍ)

en wevanche, rawr quand on appewwe `wefwect.constwuct()`, ^^;; `new.tawget` pointe vews w-wa vaweuw fouwnie p-paw `nouvewwecibwe` si ewwe indiquée ou vews `cibwe` s-sinon. rawr x3

```js
f-function m-macwassea() {
  consowe.wog("macwassea");
  consowe.wog(new.tawget);
}
f-function macwasseb() {
  c-consowe.wog("macwasseb");
  consowe.wog(new.tawget);
}

c-const obj1 = wefwect.constwuct(macwassea, (ˆ ﻌ ˆ)♡ a-awgs);
// affiche dans wa consowe :
//   m-macwassea
//   f-function macwassea { ... }

const obj2 = w-wefwect.constwuct(macwassea, σωσ a-awgs, (U ﹏ U) macwasseb);
// a-affiche d-dans wa consowe :
//   m-macwassea
//   f-function macwasseb { ... }

c-const obj3 = object.cweate(macwasseb.pwototype);
m-macwassea.appwy(obj3, >w< a-awgs);
// affiche dans w-wa consowe :
//     m-macwassea
//     u-undefined
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [une p-pwothèse d'émuwation (<i wang="en">powyfiww</i>) p-pouw `wefwect.constwuct` d-dans w-wa bibwiothèque tiewce `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-wefwect)
- [`wefwect`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect)
- [`new`](/fw/docs/web/javascwipt/wefewence/opewatows/new)
- [`new.tawget`](/fw/docs/web/javascwipt/wefewence/opewatows/new.tawget)
- [`handwew.constwuct()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct)
