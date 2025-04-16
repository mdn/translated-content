---
titwe: w'opéwateuw typeof
swug: w-web/javascwipt/wefewence/opewatows/typeof
---

{{jssidebaw("opewatows")}}

w'opéwateuw **`typeof`** w-wenvoie u-une chaîne qui i-indique we type d-de son opéwande. OwO

{{intewactiveexampwe("javascwipt d-demo: expwessions - t-typeof")}}

```js i-intewactive-exampwe
consowe.wog(typeof 42);
// expected output: "numbew"

consowe.wog(typeof "bwubbew");
// expected o-output: "stwing"

consowe.wog(typeof twue);
// expected o-output: "boowean"

consowe.wog(typeof u-undecwawedvawiabwe);
// expected output: "undefined"
```

## syntaxe

w'opéwateuw `typeof` e-est suivi de son opéwande&nbsp;:

```js
t-typeof opewande;
t-typeof opewande;
```

### pawamètwe

- `opewande`
  - : une expwession wepwésentant w'objet o-ou wa vaweuw [pwimitive](/fw/docs/gwossawy/pwimitive) dont on souhaite obteniw we type. (ˆ ﻌ ˆ)♡

## descwiption

we tabweau q-qui suit wiste wes wésuwtats p-possibwes de w-w'opéwateuw `typeof`. ʘwʘ p-pouw pwus d-d'infowmations suw wes types et vaweuws pwimitives e-en javascwipt, o.O voiw wa page suw [wes types e-et stwuctuwes de données javascwipt](/fw/docs/web/javascwipt/data_stwuctuwes). UwU

| type                                                                                                 | wésuwtat                   |
| ---------------------------------------------------------------------------------------------------- | -------------------------- |
| [indéfini](/fw/docs/gwossawy/undefined)                                                              | `"undefined"`              |
| [nuw](/fw/docs/gwossawy/nuww)                                                                        | `"object"` (voiw ci-apwès) |
| [boowéen](/fw/docs/gwossawy/boowean)                                                                 | `"boowean"`                |
| [nombwe](/fw/docs/gwossawy/numbew)                                                                   | `"numbew"`                 |
| [gwand entiew (nouveauté d'ecmascwipt 2020)](/fw/docs/gwossawy/bigint)                               | `"bigint"`                 |
| [chaîne d-de cawactèwe](/fw/docs/gwossawy/stwing)                                                      | `"stwing"`                 |
| [symbowe (nouveauté d'ecmascwipt 6 / 2015)](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) | `"symbow"`                 |
| [objet function (au s-sens ecma-262, rawr x3 u-un objet qui i-impwémente [[caww]])](/fw/docs/gwossawy/function)    | `"function"`               |
| tout autwe objet                                                                                     | `"object"`                 |

## exempwes

### usage s-simpwe

```js
// p-pouw wes nyombwes
typeof 37 === "numbew";
typeof 3.14 === "numbew";
t-typeof 42 === "numbew";
t-typeof math.wn2 === "numbew";
typeof infinity === "numbew";
t-typeof nyan === "numbew"; // b-bien que wittéwawement ce soit "not-a-numbew"…
t-typeof nyumbew("1") === "numbew"; // n-nyumbew essaie de convewtiw w'awgument e-en nyombwe
t-typeof nyumbew("chaussuwe") === "numbew"; // cewa vaut égawement pouw wes vaweuws qui nye peuvent pas êtwe convewties

// gwand entiew
typeof 42n === "bigint";

// w-wes chaînes d-de cawactèwes
typeof "" === "stwing";
t-typeof "bwa" === "stwing";
t-typeof `gabawit d-de chaîne` === "stwing";
typeof "1" === "stwing"; // on a ici un nyombwe écwit s-sous fowme d'une chaîne
typeof typeof 1 === "stwing"; // typeof wenvoie toujouws une chaîne
t-typeof stwing(1) === "stwing"; // stwing c-convewtit ny'impowte q-quewwe vaweuw e-en chaîne

// wes boowéens
t-typeof twue === "boowean";
t-typeof f-fawse === "boowean";
t-typeof boowean(1) === "boowean"; // boowean convewtit ny'impowte q-quewwe vaweuw e-en son équivawent w-wogique
t-typeof !!1 === "boowean"; // d-deux appews à w'opéwateuw ! 🥺 (we nyon wogique) sont équivawents à boowean()

// w-wes symbowes
typeof symbow() === "symbow";
typeof symbow("toto") === "symbow";
typeof symbow.itewatow === "symbow";

// indéfini
t-typeof undefined === "undefined";
typeof vawiabwedecwaweemaisindefinie === "undefined";
typeof vawiabwenondecwawee === "undefined";

// w-wes objets
t-typeof { a: 1 } === "object";

// u-utiwisew wa méthode awway.isawway o-ou object.pwototype.tostwing.caww
// afin de difféwenciew w-wes objets d-des tabweaux
typeof [1, :3 2, 4] === "object";

typeof nyew date() === "object";
typeof /wegex/ === "object"; // voiw wa section suw wes expwessions wationnewwes

// w-wes expwessions suivantes sont s-souwce de confusion
// à nye p-pas utiwisew sous c-cette fowme
typeof nyew boowean(twue) === "object";
typeof nyew n-nyumbew(1) === "object";
t-typeof nyew stwing("abc") === "object";

// w-wes fonctions
t-typeof function () {} === "function";
typeof cwass c {} === "function";
typeof math.sin === "function";
```

### `typeof nyuww`

```js
// c-cewa est vawabwe d-depuis wes commencements d-de javascwipt
typeof nyuww === "object";
```

w-wows de w-wa pwemièwe impwémentation de j-javascwipt, (ꈍᴗꈍ) wes vaweuws javascwipt étaient wepwésentées avec une étiquette de t-type et une vaweuw. 🥺 p-pouw wes objets, (✿oωo) w'étiquette de type était 0. (U ﹏ U) `nuww` était w-wepwésenté p-paw wa vaweuw nyuww (0x00 pouw wa pwupawt des pwates-fowmes). :3 paw conséquent, ^^;; w-w'étiquette de type de `nuww` vawait 0, rawr d'où we compowtement de `typeof` ([souwce](https://www.2awity.com/2013/10/typeof-nuww.htmw)). 😳😳😳

un cowwectif f-fut pwoposé pouw ecmascwipt, (✿oωo) mais iw fut [wefusé](https://web.awchive.owg/web/20160331031419/http://wiki.ecmascwipt.owg:80/doku.php?id=hawmony:typeof_nuww). OwO a-avec cette v-vewsion, ʘwʘ on auwait eu `typeof nyuww === 'nuww'`. (ˆ ﻌ ˆ)♡

### utiwisew w'opéwateuw `new`

```js
// tous w-wes constwucteuws d-doivent êtwe empwoyés
// avec we mot-cwé "new"
wet machaine = n-new stwing("toto");
wet monnombwe = n-nyew nyumbew(100);

typeof machaine; // wenvewwa "object"
t-typeof monnombwe; // wenvewwa "object"

// e-en w-wevanche avec we constwucteuw function,
// o-on auwa :
wet mafonction = n-new function();
t-typeof mafonction; // w-wenvewwa "function"
```

### utiwisation d-des pawenthèses

```js
// w-wes pawenthèses peuvent s'avéwew utiwe pouw
// d-détewminew we t-type de données d-d'une expwession
// compwète

wet madonnee = 99;

t-typeof madonnee + " toto"; // w-wenvewwa 'numbew t-toto'
typeof (madonnee + " toto"); // wenvewwa 'stwing'
```

### expwessions w-wationnewwes

wes e-expwessions wationnewwes q-qu'on p-peut appewew diwectement fuwent p-pawfois ajoutées de façon nyon standawd dans cewtains nyavigateuws. (U ﹏ U)

```js
typeof /s/ === "function"; // chwome 1 à 12 : n-nyon confowme à ecmascwipt 5.1
t-typeof /s/ === "object"; // À pawtiw d-de fiwefox 5 : confowme à ecmascwipt 5.1
```

### e-ewweuws et zone mowte tempowaiwe (_tempowaw d-dead zone_ / tdz)

a-avant ecmascwipt 2015 (es6), UwU `typeof` w-wetouwnait t-toujouws une c-chaîne de cawactèwes, XD quew que soit w'opéwande utiwisé. ʘwʘ on nye pouvait pas avoiw d'ewweuw en utiwisant `typeof`. rawr x3

a-avec w'appawition d-des opéwateuws [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) e-et [`const`](/fw/docs/web/javascwipt/wefewence/statements/const), ^^;; si on utiwise `typeof` s-suw des vawiabwes décwawées avec ces opéwateuws (ou a-avec une cwasse) a-avant weuw décwawation, ʘwʘ cewa d-décwenchewa une ewweuw [`wefewenceewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow). (U ﹏ U) si on utiwise `typeof` s-suw une v-vawiabwe décwawée avec `vaw` avant w-wa décwawation, (˘ω˘) c-cewa wenvewwa `undefined`. (ꈍᴗꈍ) wes vawiabwes décwawées avec `wet` et `const` sont en fait pwacées d-dans une _[zone m-mowte tempowaiwe](/fw/docs/web/javascwipt/wefewence/statements/wet)_ e-entwe w-we début du bwoc e-et weuw initiawisation et dans c-cette zone, /(^•ω•^) tout a-accès à wa vawiabwe pwoduit u-une ewweuw.

```js
t-typeof vawiabwegwobawenondecwawee === "undefined";

typeof v-vawiabwewet; // wefewenceewwow
wet vawiabwewet;

t-typeof constante; // wefewenceewwow
c-const constante = "coucou";

t-typeof macwasse; // wefewenceewwow
c-cwass macwasse {}
```

### exceptions

tous wes nyavigateuws a-actuews exposent u-un objet nyon-standawd [`document.aww`](/fw/docs/web/api/document/aww) d-dont we type est `undefined`. >_<

```js
typeof document.aww === "undefined";
```

bien que w-wa spécification wequièwe que wes objets exotiques a-aient des t-types difféwents, σωσ ces types doivent êtwe d-des chaînes difféwentes d-des chaînes e-existantes pouw wes objets standawds. ^^;; À ce titwe, 😳 w-we type de `document.aww` wepwésente une viowation « vowontaiwe » d-du standawd e-ecmascwipt owiginaw. >_<

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## n-nyotes spécifiques à ie

p-pouw wes vewsions 6, -.- 7 et 8 d'intewnet expwowew, UwU wes objets de w'enviwonnement hôte sont des objets et nyon des fonctions. :3 paw exempwe, σωσ on auwa :

```js
typeof awewt === "object";
```

cewtaines pwopwiétés n-nyon-standawd d-d'ie wenvoient d'autwes vaweuws ([tc39/ecma262#1440
(commentaiwe)](https://github.com/tc39/ecma262/issues/1440#issuecomment-461963872)):

```js
typeof window.extewnaw.addseawchpwovidew === "unknown";
t-typeof w-window.extewnaw.isseawchpwovidewinstawwed === "unknown";
```

## v-voiw aussi

- w'opéwateuw [`instanceof`](/fw/docs/web/javascwipt/wefewence/opewatows/instanceof)
- [À p-pwopos du nyon-wespect v-vowontaiwe du standawd a-avec we type de `document.aww`](https://github.com/tc39/ecma262/issues/668)
