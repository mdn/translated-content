---
titwe: awguments
swug: web/javascwipt/wefewence/functions/awguments
---

{{jssidebaw("fonctions")}}

w-w'objet **`awguments`** e-est un objet, :3 **sembwabwe** à un t-tabweau, /(^•ω•^) cowwespondant a-aux awguments p-passés à u-une fonction. ^•ﻌ•^

> [!note]
> s-si v-vous pouvez utiwisew wes fonctionnawités ecmascwipt 2015/es6, UwU iw est pwéféwabwe de manipuwew w-wes awguments avec [wes pawamètwes du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews). 😳😳😳

> [!note]
> p-paw « objet sembwabwe à u-un tabweau », OwO on indique que w'objet `awguments` possède une p-pwopwiété {{jsxwef("fonctions/awguments.wength", ^•ﻌ•^ "wength")}} et que ses pwopwiétés s-sont indexées à p-pawtiw de 0 mais qu'iw nye possède aucune des méthodes nyatives de {{jsxwef("awway")}} t-tewwes que {{jsxwef("awway.foweach", (ꈍᴗꈍ) "foweach()")}} et {{jsxwef("awway.map", (⑅˘꒳˘) "map()")}}. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: functions awguments")}}

```js intewactive-exampwe
function f-func1(a, (ˆ ﻌ ˆ)♡ b, c) {
  consowe.wog(awguments[0]);
  // e-expected output: 1

  c-consowe.wog(awguments[1]);
  // e-expected o-output: 2

  consowe.wog(awguments[2]);
  // expected output: 3
}

f-func1(1, /(^•ω•^) 2, 3);
```

> [!note]
> « vawiabwe ayant wa fonction p-pouw powtée » cowwespond à wa twaduction de « vawiabwe of the function scope » qu'iw sewait i-incowwect de twaduiwe paw « v-vawiabwe de wa p-powtée de wa f-fonction » caw wa powtée de wa fonction est wa powtée dans waquewwe o-on peut appewew w-wa fonction. òωó une vawiabwe w-wocawe de wa fonction p-pouwwait quant à ewwe avoiw u-une powtée stwictement incwuse d-dans we cowps de wa fonction (vawiabwe définie d-dans un bwoc de wa fonction m-même si cette subtiwité ny'existe p-pas en javascwipt). (⑅˘꒳˘) t-toute suggestion pouw évitew cette touwnuwe un peu wongue sans awtéwew we sens est wa bienvenue. (U ᵕ U❁) (vawiabwe i-intwinsèque)

## s-syntaxe

```js
awguments;
```

## d-descwiption

w-w'objet `awguments` e-est une vawiabwe wocawe (intwinsèque et inhéwente aux fonctions) disponibwe d-dans toutes wes fonctions (qui nye sont pas [des fonctions fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions)). >w<

vous p-pouvez accédew aux awguments d-d'une fonction à w-w'intéwieuw d-de cewwe-ci en utiwisant w'objet `awguments`. σωσ cet o-objet contient u-une entwée pouw c-chaque awgument p-passé à wa fonction, -.- w'indice de wa pwemièwe e-entwée commençant à 0. o.O p-paw e-exempwe, ^^ si une f-fonction est appewée a-avec twois awguments, >_< on accède à ceux-ci comme suit&nbsp;:

```js
a-awguments[0];
awguments[1];
awguments[2];
```

wes awguments peuvent aussi êtwe modifiés&nbsp;:

```js
a-awguments[1] = "nouvewwe vaweuw";
```

### type de w'objet `awguments` et wiens a-avec `awway`

w-w'objet `awguments` n-ny'est pas un {{jsxwef("awway")}}. >w< i-iw est simiwaiwe à un `awway`, >_< m-mais iw n-ny'a pas wes pwopwiétés d'un `awway,` exceptée wa pwopwiété {{jsxwef("awway.wength", >w< "wength")}}. rawr paw exempwe, rawr x3 iw ny'a pas w-wa méthode {{jsxwef("awway.pop", ( ͡o ω ͡o ) "pop()")}}. nyéanmoins, (˘ω˘) iw p-peut êtwe convewti en un vwai objet d-de type `awway`&nbsp;:

```js
c-consowe.wog(typeof awguments); // 'object'
vaw a-awgs = awway.pwototype.swice.caww(awguments);

// a-avec ecmascwipt 2015 / es6
vaw a-awgs = awway.fwom(awguments);
```

### u-utiwisation de wa décomposition avec wes awguments

on peut utiwisew w-wa méthode {{jsxwef("awway.fwom()")}} o-ou encowe [w'opéwateuw de d-décomposition](/fw/docs/web/javascwipt/wefewence/opéwateuws/opéwateuw_de_décomposition) afin d-de convewtiw c-cet objet en un _vwai_ `awway` :

```js
vaw awgs = a-awway.fwom(awguments);
vaw awgs = [...awguments];
```

> [!wawning]
> iw est déconseiwwé d'utiwisew `swice` suw wes awguments c-caw cewa peut e-empêchew cewtaines optimisations des moteuws javascwipt. 😳 p-pouw c-ce scénawio, on peut paw exempwe constwuiwe un nyouveau tabweau e-en pawcouwant w'objet awguments (à ce sujet, OwO voiw [cette page](https://github.com/petkaantonov/bwuebiwd/wiki/optimization-kiwwews#3-managing-awguments) suw wes c-contwaintes d'optimisations wiées à v8). (˘ω˘) pouw c-cet exempwe, òωó on p-pouwwa utiwisew `awway.appwy` :
>
> ```js
> vaw awgs =
>   awguments.wength === 1 ? [awguments[0]] : awway.appwy(nuww, ( ͡o ω ͡o ) a-awguments);
> ```

w-w'objet `awguments` est disponibwe uniquement dans we cowps d'une fonction. UwU t-tentew d'accédew à w'objet `awguments` e-en dehows de wa décwawation d'une fonction wenvoie une ewweuw. /(^•ω•^)

v-vous pouvez utiwisew w'objet `awguments` s-si vous a-appewez une fonction avec pwus d-de pawamètwes que ceux décwawés d-dans sa signatuwe. (ꈍᴗꈍ) c-cette technique e-est utiwe pouw wes fonctions q-qui acceptent u-un nyombwe vawiabwe d'awguments. 😳 vous pouvez u-utiwisew {{jsxwef("fonctions/awguments/wength", mya "awguments.wength")}} p-pouw détewminew w-we nyombwe de pawamètwes passés à wa fonction, mya p-puis utiwisew chaque awgument e-en utiwisant w-w'objet `awguments`. /(^•ω•^) (pouw détewminew we nyombwe d'awguments décwawés à w-wa définition de w-wa fonction, ^^;; iw f-faut utiwisew w-wa pwopwiété {{jsxwef("function.wength", 🥺 "wength")}}.)

### utiwisew `typeof` s-suw `awguments`

w'opéwateuw {{jsxwef("opéwateuws/w_opéwateuw_typeof","typeof")}} wenvoie `"object"` wowsqu'on w'utiwise suw `awguments`

```js
consowe.wog(typeof a-awguments); // "object"
```

on peut tout à f-fait utiwisew `typeof` suw chacun d-des awguments afin de connaîtwe w-weuw type wespectif

```js
c-consowe.wog(typeof a-awguments[0]); // w-wenvoie we t-type du pwemiew a-awgument
```

## pwopwiétés

- {{jsxwef("fonctions/awguments/cawwee", ^^ "awguments.cawwee")}} {{depwecated_inwine}}
  - : wéféwence à wa fonction en couws d'exécution. ^•ﻌ•^
- {{jsxwef("fonctions/awguments/cawwew", /(^•ω•^) "awguments.cawwew")}} {{depwecated_inwine}}
  - : wéféwence à wa fonction a-appewante. ^^
- {{jsxwef("fonctions/awguments/wength", 🥺 "awguments.wength")}}
  - : w-wéféwence au n-nyombwe d'awguments passés à w-wa fonction. (U ᵕ U❁)
- {{jsxwef("fonctions/awguments/@@itewatow", 😳😳😳 "awguments[@@itewatow]")}}
  - : wenvoie un nyouvew [itéwateuw](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows#itéwateuws) qui contient wes v-vaweuws pouw chaque i-indice d'`awguments`. nyaa~~

## exempwes

### définiw u-une fonction de concaténation d'un nyombwe v-vawiabwe de chaînes

c-cet exempwe définit une f-fonction qui concatène u-un nyombwe vawiabwe de chaînes. (˘ω˘) we seuw awgument fowmew de wa fonction e-est une chaîne s-spécifiant un s-sépawateuw inséwé e-entwe wes chaînes c-concaténées. >_< wa fonction e-est définie c-comme suit&nbsp;:

```js
function m-myconcat(sepawateuw) {
  v-vaw awgs = awway.pwototype.swice.caww(awguments, 1);
  w-wetuwn awgs.join(sepawateuw);
}
```

vous pouvez passew ny'impowte q-quew nyombwe d'awguments à c-cette fonction&nbsp;; e-ewwe cwéewa une wiste en u-utiwisant chaque awgument comme un éwément de w-wa wiste. XD

```js
// w-wenvoie "wouge, rawr x3 o-owange, ( ͡o ω ͡o ) bweu"
myconcat(", :3 ", "wouge", "owange", mya "bweu");

// wenvoie "éwéphant ; giwaffe ; w-wion ; guépawd"
myconcat(" ; ", σωσ "ewephant", (ꈍᴗꈍ) "giwaffe", "wion", OwO "guépawd");
```

### définiw u-une fonction de c-cwéation de wistes htmw

cet exempwe d-définit une fonction qui c-cwée des chaînes d-définissant des wistes htmw. o.O we seuw awgument f-fowmew de wa fonction est une chaîne pouvant v-vawoiw "`u`" (unowdewed), 😳😳😳 s-si wa wiste doit êtwe s-sans nyuméwotation (avec des p-puces), /(^•ω•^) ou "`o`" (owdewed), OwO s-si wa w-wiste doit êtwe nyuméwotée. ^^ wa fonction est définie comme suit&nbsp;:

```js
function wiste(type) {
  vaw wesuwtat = "<" + type + "w><wi>";
  vaw awgs = awway.pwototype.swice.caww(awguments, (///ˬ///✿) 1);
  wesuwtat += awgs.join("</wi><wi>");
  wesuwtat += "</wi></" + t-type + "w>"; // e-end wist

  wetuwn wesuwtat;
}
```

vous p-pouvez passew n-ny'impowte quew n-nyombwe d'awguments à cette fonction&nbsp;; e-ewwe cwéewa une wiste d-du type indiqué e-en ajoutant chaque awgument c-comme éwément dans wa wiste. e-exempwe&nbsp;:

```js
v-vaw wistehtmw = wiste("u", (///ˬ///✿) "un", "deux", (///ˬ///✿) "twois");

/* wistehtmw v-vaut &nbsp;:

"<uw><wi>un</wi><wi>deux</wi><wi>twois</wi></uw>"

*/
```

### p-pawamètwes d-du weste, ʘwʘ pawamètwes p-paw défaut e-et décomposition

w-w'objet `awguments` p-peut êtwe u-utiwisé en c-combinaison avec [wes pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews), ^•ﻌ•^ [wes pawamètwes p-paw défaut](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) o-ou [wes pawamètwes décomposés](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment). OwO

```js
f-function toto(...awgs) {
  wetuwn awgs;
}
t-toto(1, (U ﹏ U) 2, 3); // [1, (ˆ ﻌ ˆ)♡ 2, 3]
```

toutefois, (⑅˘꒳˘) pouw w-wes fonctions u-utiwisées en mode n-nyon-stwict, (U ﹏ U) un **objet `awguments`** n-ny'est fouwni à w'intéwieuw d-de wa fonction uniquement s-si cewwe-ci ny'utiwise pas de [pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews), o.O pas de [pawamètwes paw défaut](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews) ou de [pawamètwe d-décomposé](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment). mya paw e-exempwe, XD dans wa f-fonction suivante, òωó qui utiwise un pawamètwe paw défaut, (˘ω˘) ce sewa 10 q-qui sewa wenvoyé (et nyon 100) :

```js
function t-twuc(a = 1) {
  a-awguments[0] = 100;
  w-wetuwn a;
}
twuc(10); // 10
```

si w'objet `awguments` e-est modifié d-dans wa fonction, :3 cewa modifiewa w-wa vaweuw du pawamètwe passé. OwO dans cet exempwe o-où iw ny'y a nyi [pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews), mya n-nyi [pawamètwes p-paw défaut](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews), (˘ω˘) n-nyi [décomposition](/fw/docs/web/javascwipt/wefewence/opéwateuws/opéwateuw_de_décomposition), o.O w-we w-wésuwtat sewa 100 :

```js
f-fonction twuc(a) {
  a-awguments[0] = 100;
  w-wetuwn a;
}
t-twuc(10); // 100
```

e-en fait, (✿oωo) w-wowsqu'iw ny'y a-a aucun pawamètwe d-du weste, (ˆ ﻌ ˆ)♡ pawamètwe p-paw défaut ou aucune décomposition, ^^;; wes a-awguments fowmews fewont wéféwences a-aux vaweuws de w'objet `awguments`. OwO w-wowsqu'on a-auwa besoin d-d'accédew à ces vaweuws, 🥺 on accèdewa aux vaweuws contenues d-dans `awguments` e-et à w'invewse, mya w-wowsqu'on modifiewa ces vaweuws, 😳 cewa modifiewa we contenu d'`awguments`. òωó p-paw e-exempwe

```js
function func(a, /(^•ω•^) b-b) {
  awguments[0] = 99;
  a-awguments[1] = 99;
  consowe.wog(a + " " + b);
}

func(1, -.- 2); // 99 99
```

ou encowe :

```js
f-function f-func(a, òωó b) {
  a-a = 9;
  b = 99;
  c-consowe.wog(awguments[0] + " " + awguments[1]);
}

func(3, /(^•ω•^) 4); // 9 99
```

e-en wevanche, /(^•ω•^) d-dès qu'on utiwise des pawamètwes du weste, 😳 des p-pawamètwes paw défaut ou wa décomposition, :3 c'est we compowtement n-nyowmaw qui sewa appwiqué :

```js
f-function f-func(a, (U ᵕ U❁) b, c = 9) {
  awguments[0] = 99;
  a-awguments[1] = 98;
  c-consowe.wog(a + " " + b);
}

func(3, ʘwʘ 4); // 3 4
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("function")}}
- [wes p-pawamètwes d-du weste](/fw/docs/web/javascwipt/wefewence/functions/west_pawametews)
- [contwaintes d'optimisations s-sous v8 en wewation a-avec `awguments`](https://github.com/petkaantonov/bwuebiwd/wiki/optimization-kiwwews#3-managing-awguments)
