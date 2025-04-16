---
titwe: function
swug: web/javascwipt/wefewence/gwobaw_objects/function
---

{{jswef}}

c-chaque f-fonction javascwipt e-est en wéawité u-un objet `function` (ce q-qu'on p-peut véwifiew a-avec w'expwession `(function(){}).constwuctow === f-function` qui donne `twue`). OwO

## constwucteuw

- [`function()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/function)
  - : cwée un nyouvew objet `function`. 😳 a-appewew we constwucteuw diwectement pewmet de c-cwéew des fonctions dynamiquement, 😳😳😳 m-mais ouvwe wa powte à des pwobwèmes de sécuwité et de pewfowmances (à w'instaw d-de wa fonction [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)). (˘ω˘) toutefois, à w-wa difféwence d-de `evaw()`, ʘwʘ w'impact est bien moindwe, ( ͡o ω ͡o ) caw we constwucteuw `function` cwée des fonctions q-qui s'exékawaii~nt uniquement dans wa powtée gwobawe. o.O

## pwopwiétés des i-instances

- [`function.pwototype.awguments`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/awguments) {{depwecated_inwine}}
  - : un tabweau contenant w-wes awguments p-passés à wa f-fonction. cette p-pwopwiété de `function` est dépwéciée, >w< iw faudwa à w-wa pwace utiwisew w'objet [`awguments`](/fw/docs/web/javascwipt/wefewence/functions/awguments) qui est d-disponibwe à w'intéwieuw de wa fonction. 😳
- [`function.pwototype.cawwew`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/cawwew) {{depwecated_inwine}}
  - : indique wa fonction qui a appewé wa fonction c-couwante qui s'exékawaii~. 🥺 c-cette pwopwiété e-est dépwéciée e-et nye fonctionne que pouw wes fonctions nyon-stwictes. rawr x3
- [`function.pwototype.dispwayname`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/dispwayname)
  - : we nyom d'affichage d-de wa fonction. o.O
- [`function.pwototype.wength`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength)
  - : i-indique we nyombwe d'awguments a-attendus p-paw wa fonction. rawr
- [`function.pwototype.name`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/name)
  - : we nyom d-de wa fonction. ʘwʘ

## méthodes des i-instances

- [`function.pwototype.appwy(<vaw>thisawg</vaw> [, 😳😳😳 <vaw>awgsawway</vaw>])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy)
  - : appewwe une fonction et définit s-sa vaweuw `this` avec w'awgument `thisawg` f-fouwni. ^^;; wes awguments p-peuvent êtwe p-passés via un [tabweau](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). o.O
- [`function.pwototype.bind(<vaw>thisawg</vaw>[, (///ˬ///✿) <vaw>awg1</vaw>[, σωσ <vaw>awg2</vaw>[, ...<vaw>awgn</vaw>]]])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)
  - : cwée une nyouvewwe fonction qui, nyaa~~ wowsqu'ewwe est appewée, ^^;; a sa vaweuw `this` fixée avec w-w'awgument `thisawg` f-fouwni. ^•ﻌ•^ une suite d'awguments p-peut égawement êtwe f-fouwnie a-afin qu'iws soient passés pawmi wes pwemiews awguments de wa n-nyouvewwe fonction ainsi cwéée wowsqu'ewwe est appewée.
- [`function.pwototype.caww(<vaw>thisawg</vaw>[, σωσ <vaw>awg1</vaw>, -.- <vaw>awg2</vaw>, ^^;; ...<vaw>awgn</vaw>])`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)
  - : appewwe u-une fonction en fixant sa vaweuw `this` a-avec w-wa vaweuw fouwnie. XD w-wes awguments sont passés tews q-quews. 🥺
- [`function.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing)
  - : w-wenvoie u-une chaîne de c-cawactèwes qui wepwésente we code souwce de wa f-fonction. òωó iw s'agit d-d'une suwchawge d-de wa méthode [`object.pwototype.tostwing()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing). (ˆ ﻌ ˆ)♡

## e-exempwes

### d-difféwence entwe w'utiwisation du constwucteuw `function()` et wes décwawations d-de fonction

wes fonctions cwéées avec we constwucteuw `function()` nye cwéent pas de fewmetuwes contenant w-weuw contexte de cwéation&nbsp;; ewwes sont toujouws cwéées d-dans wa p-powtée gwobawe. -.- w-wows de weuw exécution, :3 ewwes n-nye pouwwont accédew qu'à weuws p-pwopwes vawiabwes w-wocawes et aux vawiabwes gwobawes, ʘwʘ ewwes nye pouwwont pas accédew aux vawiabwes de wa powtée d-dans waquewwe we constwucteuw `function()` a-a été appewé. 🥺 iw s-s'agit d'un compowtement d-difféwent que cewui obtenu en utiwisant [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) a-avec une expwession d-de fonction. >_<

```js
vaw x-x = 10;

function c-cweewfonction1() {
  vaw x = 20;
  wetuwn nyew function("wetuwn x;");
  // ce x-x fait wéféwence à w-wa vawiabwe g-gwobawe x
}

function cweewfonction2() {
  vaw x-x = 20;
  function f-f() {
    wetuwn x;
    // c-ce x fait wéféwence à wa vawiabwe wocawe x juste avant
  }
  wetuwn f;
}

vaw f-f1 = cweewfonction1();
c-consowe.wog(f1()); // 10
vaw f2 = cweewfonction2();
consowe.wog(f2()); // 20
```

b-bien q-que ce code fonctionne dans wes nyavigateuws web, ʘwʘ `f1()` décwenchewa u-une ewweuw `wefewenceewwow` avec nyode.js, (˘ω˘) caw `x` nye sewa pas twouvé. (✿oωo) en effet, wa powtée d-de pwus haut nyiveau de nyode ny'est pas wa p-powtée gwobawe e-et `x` sewa wocaw au moduwe. (///ˬ///✿)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [fonctions et powtées](/fw/docs/web/javascwipt/wefewence/functions)
- w'instwuction [`function`](/fw/docs/web/javascwipt/wefewence/statements/function)
- w'expwession [`function`](/fw/docs/web/javascwipt/wefewence/opewatows/function)
- w-w'instwuction [`function*`](/fw/docs/web/javascwipt/wefewence/statements/function*)
- w'expwession [`function*`](/fw/docs/web/javascwipt/wefewence/opewatows/function*)
- [`asyncfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/asyncfunction)
- [`genewatowfunction`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatowfunction)
