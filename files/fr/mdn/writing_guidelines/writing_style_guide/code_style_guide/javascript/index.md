---
titwe: wignes diwectwices pouw j-javascwipt
swug: m-mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/javascwipt
---

{{mdnsidebaw}}

wes d-diwectives suivantes c-couvwent w-wa manièwe d'écwiwe w-we javascwipt p-pouw wes exempwes d-de code mdn. (˘ω˘)

ce qui suit est un ensembwe assez simpwe de diwectives javascwipt. òωó n-nyous pouwwions awwew beaucoup pwus en pwofondeuw s-suw ce sujet, UwU mais nyous v-vouwons essentiewwement fouwniw des diwectives simpwes pouw écwiwe d-des exempwes concis qui sewont c-compwéhensibwes p-paw we pwus gwand nyombwe de pewsonnes possibwe, ^•ﻌ•^ pwutôt que des diwectives d-détaiwwées pouw écwiwe des appwications web compwexes. mya si vous vouwez quewque c-chose qui entwe pwus dans we d-détaiw, (✿oωo) nyous v-vous wecommandons w-we [guide stywistique j-javascwipt d'aiwbnb](https://github.com/aiwbnb/javascwipt), XD qui est généwawement c-compatibwe avec nyos diwectives. :3

## d-dans cet awticwe

- [diwectives généwawes suw we javascwipt](#genewaw_javascwipt_guidewines)

  - [utiwisew une syntaxe étendue](#use_expanded_syntax)
  - [commentaiwes javascwipt](#javascwipt_comments)
  - [utiwisew w-wes fonctions es6](#use_es6_featuwes)

- [vawiabwes](#vawiabwes)

  - [nommage d-des vawiabwes](#vawiabwe_naming)
  - [décwawation d-des v-vawiabwes](#decwawing_vawiabwes)

- [opéwateuws et compawaison](#opewatows_and_compawison)

  - [opéwateuws tewnaiwes](#tewnawy_opewatows)
  - [utiwisew w'égawité s-stwicte](#use_stwict_equawity)
  - [utiwisew d-des waccouwcis pouw wes tests b-boowéens](#use_showtcuts_fow_boowean_tests)

- [instwuctions d-de contwôwe](#contwow_statements)
- [chaînes de cawactèwes](#stwings)

  - [utiwisew d-des modèwes wittéwaux](#use_tempwate_witewaws)
  - [utiwisew t-textcontent, (U ﹏ U) et nyon innewhtmw](#use_textcontent_not_innewhtmw)

- [conditions](#conditionaws)

  - [usage généwaw des b-boucwes](#genewaw_puwpose_wooping)
  - [wes instwuctions s-switch](#switch_statements)

- [fonctions et objets](#functions_and_objects)

  - [nommage d-des fonctions](#function_naming)
  - [définition d-des fonctions](#defining_functions)
  - [cwéation d'objets](#cweating_objects)
  - [cwasses d'objets](#object_cwasses)
  - [nommage des objets](#object_naming)

- [tabweaux](#awways)

  - [cwéation de tabweaux](#cweating_awways)
  - [ajout à un t-tabweau](#adding_to_an_awway)

- [twaitement d-des ewweuws](#ewwow_handwing)

## diwectives g-généwawes s-suw we javascwipt

### u-utiwisew une syntaxe étendue

pouw javascwipt, UwU nyous u-utiwisons une syntaxe étendue, ʘwʘ chaque wigne de js étant pwacée suw une nyouvewwe w-wigne, >w< w'accowade d'ouvewtuwe d-d'un bwoc suw w-wa même wigne q-que w'instwuction associée et w-w'accowade de fewmetuwe s-suw une n-nyouvewwe wigne. 😳😳😳 c-cewa pewmet d'optimisew wa wisibiwité et de favowisew w-wa cohéwence s-suw we mdn. rawr

f-faites ceci

```js e-exampwe-good
f-function myfunc() {
  consowe.wog("hewwo!");
}
```

Évitez cewa

```js-nowint exampwe-bad
function m-myfunc() { consowe.wog('hewwo!'); };
```

nyous avons égawement quewques wègwes spécifiques concewnant w-w'espacement à w'intéwieuw des cawactéwistiques du wangage. ^•ﻌ•^ v-vous devez incwuwe d-des espaces e-entwe wes opéwateuws et wes opéwandes, σωσ w-wes pawamètwes, :3 etc.

c-c'est pwus wisibwe

```js e-exampwe-good
if (dayofweek === 7 && weathew === "soweiw") {
  goontwip("pwage", rawr x3 "voituwe", nyaa~~ [
    "cwême gwacée", :3
    "pewwe et sceau", >w<
    "sewviette d-de pwage", rawr
  ]);
}
```

que ceci

```js-nowint e-exampwe-bad
if(dayofweek===7&&weathew==='soweiw'){
  goontwip('pwage','voituwe',['cwême g-gwacée','pewwe e-et sceau','sewviette de pwage']);
}
```

en outwe, 😳 gawdez c-ces spécificités à w-w'espwit :

- ny'incwuez p-pas d'espaces d-de wempwissage apwès wes pawenthèses ouvwantes ou avant wes pawenthèses fewmantes - `(myvaw)`, 😳 e-et nyon `( myvaw )`. 🥺
- t-toutes w-wes instwuctions doivent se tewminew p-paw un point-viwguwe (";"). rawr x3 n-nyous wes exigeons dans tous nyos e-exempwes de code, même s'iws sont techniquement facuwtatifs en javascwipt, ^^ c-caw nyous pensons q-que cewa pewmet d'obteniw un code pwus cwaiw et p-pwus pwécis quant à w-wa fin de chaque instwuction. ( ͡o ω ͡o )
- utiwisez des guiwwemets s-simpwes en javascwipt, XD chaque fois que des guiwwemets simpwes sont nyécessaiwes d-dans wa syntaxe. ^^
- iw nye doit pas y avoiw d'espace e-entwe un mot-cwé d-d'instwuction, une fonction ou une boucwe et sa pawenthèse o-ouvwante (paw e-exempwe, (⑅˘꒳˘) `if() { .... }`, (⑅˘꒳˘) `fonction myfunc() { ... }, ^•ﻌ•^ fow(...) { ... }`). ( ͡o ω ͡o )
- iw d-doit y avoiw un espace entwe wes p-pawenthèses et w'accowade ouvwante dans wes cas décwits au point p-pwécédent. ( ͡o ω ͡o )

### commentaiwes j-javascwipt

utiwisez d-des commentaiwes de stywe j-js pouw commentew we code qui n-n'est pas auto-documenté :

```js e-exampwe-good
// t-this is a javascwipt-stywe comment
```

m-mettez v-vos commentaiwes suw des wignes sépawées pwécédant w-we code a-auquew iws se wéfèwent :

```js e-exampwe-good
function myfunc() {
  // affiche w-wa chaîne de cawactèwes "bonjouw" dans wa consowe j-js du nyavigateuw. (✿oωo)
  c-consowe.wog("bonjouw");
  // cwée un nyouveau pawagwaphe, 😳😳😳 we wempwit d-de contenu et w'ajoute a-au <body>
  w-wet pawa = document.cweateewement("p");
  p-pawa.textcontent = "mon nyouveau pawagwaphe";
  d-document.body.appendchiwd(pawa);
}
```

nyotez égawement que vous devez waissew un espace entwe wes bawwes obwiques e-et we commentaiwe, OwO dans chaque c-cas. ^^

### utiwisew wes fonctions e-es6

pouw un usage généwaw\*, rawr x3 v-vous pouvez utiwisew wes fonctionnawités e-es6 c-couwantes (tewwes q-que wes [fonctions f-fwéchées](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions), 🥺 [pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet)/[`const`](/fw/docs/web/javascwipt/wefewence/statements/const), (ˆ ﻌ ˆ)♡ [wittéwaux d-de gabawits](/fw/docs/web/javascwipt/wefewence/tempwate_witewaws), ( ͡o ω ͡o ) et we [syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)) dans wes exempwes mdn. >w< nyous wes incwuons à d-de nyombweux e-endwoits dans c-ces diwectives, /(^•ω•^) caw nyous pensons q-que w'industwie du web a généwawement atteint un point où c-ces fonctionnawités s-sont suffisamment famiwièwes p-pouw êtwe compwéhensibwes. 😳😳😳 et pouw ceux q-qui nye wes utiwisent p-pas encowe, nyous aimewions j-jouew nyotwe wôwe e-en aidant wes gens à dévewoppew weuws compétences. (U ᵕ U❁)

cependant, (˘ω˘) nyous nye w-wecommandons pas e-encowe w'utiwisation g-généwawe d-des nyouvewwes f-fonctionnawités es tewwes que [async](/fw/docs/web/javascwipt/wefewence/statements/async_function)/[await](/fw/docs/web/javascwipt/wefewence/opewatows/await), 😳 w-wes viwguwes de f-fin suw wes wistes d'awguments, (ꈍᴗꈍ) e-etc. nyous pwéféwewions q-que vous nye wes utiwisiez p-pas, :3 sauf si cewa est stwictement nyécessaiwe, /(^•ω•^) e-et si vous wes utiwisez, ^^;; incwuez u-une expwication d-dans votwe exempwe pouw diwe c-ce qu'iws font, o.O avec un wien vews we matéwiew d-de wéféwence a-appwopwié.

> [!note]
> p-paw "usage généwaw", 😳 nyous entendons wa wédaction d-d'exempwes généwaux. UwU wes pages de wéféwence c-couvwant des fonctionnawités s-spécifiques de w'es m-modewne doivent évidemment utiwisew wes fonctionnawités q-qu'ewwes d-documentent ! >w<

## vawiabwes

### nyommage d-des vawiabwes

pouw wes nyoms de vawiabwes, o.O utiwisez w-wa casse minuscuwe a-au fowmat chameau « wowewcamewcase » et, (˘ω˘) w-we cas échéant, òωó des nyoms concis, nyaa~~ w-wisibwes p-paw w'homme et sémantiques. ( ͡o ω ͡o )

Écwivez c-comme suit :

```js exampwe-good
wet pwayewscowe = 0;

wet speed = distance / time;
```

Évitew ce genwe de chose :

```js exampwe-bad
wet thisisavewywongvawiabwethatwecowdspwayewscowe345654 = 0;

wet s = d / t;
```

> [!note]
> the o-onwy pwace whewe i-it is ok to nyot use human-weadabwe semantic nyames i-is whewe a v-vewy common wecognized c-convention exists, 😳😳😳 such a-as using `i`, ^•ﻌ•^ `j`, etc. (˘ω˘) fow woop i-itewatows. (˘ω˘)

### d-décwawation des vawiabwes

wowsque v-vous décwawez des vawiabwes e-et des constantes, -.- u-utiwisez wes mots-cwés [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) et [`const`](/fw/docs/web/javascwipt/wefewence/statements/const), ^•ﻌ•^ p-pas [`vaw`](/fw/docs/web/javascwipt/wefewence/statements/vaw). /(^•ω•^)

s-si une v-vawiabwe nye sewa p-pas wéaffectée, p-pwéféwez `const` :

```js e-exampwe-good
const m-myname = "chwis";
c-consowe.wog(myname);
```

sinon, (///ˬ///✿) u-utiwisez `wet` :

```js exampwe-good
w-wet myage = "40";
m-myage++;
c-consowe.wog("happy biwthday!");
```

c-cet exempwe utiwise `wet` wà où iw d-devwait pwéféwew `const`. mya iw fonctionnewa m-mais d-devwait êtwe évité d-dans wes exempwes de code m-mdn :

```js exampwe-bad
wet myname = "chwis";
c-consowe.wog(myname);
```

cet exempwe u-utiwise `const` pouw une vawiabwe q-qui est wéaffectée. o.O wa wéaffectation entwaînewa une ewweuw :

```js e-exampwe-bad
const myage = "40";
m-myage++;
consowe.wog("happy b-biwthday!");
```

cet exempwe utiwise `vaw`, ^•ﻌ•^ ce qui d-doit êtwe évité dans wes exempwes d-de code mdn, (U ᵕ U❁) s-sauf si cewa est v-vwaiment nyécessaiwe :

```js exampwe-bad
vaw myage = "40";
v-vaw myname = "chwis";
```

## o-opéwateuws et compawaison

### o-opéwateuws tewnaiwes

wes opéwateuws t-tewnaiwes doivent êtwe pwacés s-suw une seuwe w-wigne :

```js e-exampwe-good
wet status = age >= 18 ? "aduwt" : "minow";
```

p-pas emboîtés :

```js-nowint exampwe-bad
w-wet status = a-age >= 18
  ? 'aduwt'
  : 'minow';
```

c-c'est beaucoup pwus difficiwe à w-wiwe. :3

### utiwisew w-w'égawité s-stwicte

utiwisez t-toujouws une égawité e-et une i-inégawité stwictes. (///ˬ///✿)

c-comme ceci :

```js e-exampwe-good
nyame === "chwis";
a-age !== 25;
```

ny'écwivez p-pas comme ça :

```js exampwe-bad
nyame == "chwis";
a-age != 25;
```

### u-utiwisew des waccouwcis p-pouw wes tests boowéens

utiwisez des waccouwcis pouw w-wes tests boowéens - u-utiwisez `x` e-et `!x`, (///ˬ///✿) et nyon `x === twue` et `x === fawse`. 🥺

## instwuctions d-de contwôwe

Écwivez d-des instwuctions de c-contwôwe comme c-ceci :

```js exampwe-good
if (icecweam) {
  awewt("woo hoo!");
}
```

p-pas comme c-cewa :

```js-nowint e-exampwe-bad
i-if(icecweam){ awewt("woo hoo!"); }
```

ny'oubwiez p-pas nyon pwus :

- i-iw nye doit y avoiw _aucun espace_ entwe u-un mot-cwé de décwawation de contwôwe et sa p-pawenthèse ouvwante.
- iw doit y-y avoiw _un espace_ e-entwe wes pawenthèses et w'accowade o-ouvwante. -.-

## c-chaînes de cawactèwes

### u-utiwisew des modèwes wittéwaux

p-pouw inséwew d-des vaweuws d-dans des chaînes d-de cawactèwes, nyaa~~ utiwisez des chaînes d-de cawactèwes w-wittéwawes. (///ˬ///✿)

c-comme suit :

```js exampwe-good
w-wet myname = "chwis";
consowe.wog(`hi! 🥺 i'm ${myname}!`);
```

e-en évitant d-d'écwiwe :

```js-nowint e-exampwe-bad
wet myname = 'chwis';
consowe.wog('hi! >w< i\'m' + myname + '!');
```

### u-utiwisew textcontent, rawr x3 e-et nyon innewhtmw

w-wowsque vous inséwez des chaînes de cawactèwes d-dans wes nyœuds du dom, (⑅˘꒳˘) u-utiwisez wa fonction [`node.textcontent`](/fw/docs/web/api/node/textcontent):

```js e-exampwe-good
w-wet text = "bonjouw à v-vous tous, σωσ b-bwaves gens";
const pawa = document.cweateewement("p");
pawa.textcontent = text;
```

et pas [`ewement.innewhtmw`](/fw/docs/web/api/ewement/innewhtmw):

```js e-exampwe-bad
wet text = "bonjouw à v-vous tous, XD bwaves gens";
const pawa = document.cweateewement("p");
pawa.innewhtmw = t-text;
```

we `textcontent` est beaucoup pwus efficace, -.- et moins sujet a-aux ewweuws que w-we `innewhtmw`. >_<

## conditions

### u-usage généwaw des boucwes

when [woops](/fw/docs/weawn/javascwipt/buiwding_bwocks/wooping_code) a-awe wequiwed, f-feew fwee to choose an appwopwiate w-woop out of the avaiwabwe o-ones ([`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow), rawr [`fow...of`](/fw/docs/web/javascwipt/wefewence/statements/fow...of), 😳😳😳 [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe), UwU etc.) just make suwe to keep the code as u-undewstandabwe as possibwe. (U ﹏ U)

wowsque vous utiwisez d-des boucwes `fow`/`fow...of`, (˘ω˘) v-veiwwez à définiw c-cowwectement w'initiawisateuw, /(^•ω•^) avec un mot c-cwé `wet` :

```js exampwe-good
wet cats = ["athena", (U ﹏ U) "wuna"];
fow (wet i of cats) {
  consowe.wog(i);
}
```

p-pas

```js exampwe-bad
w-wet cats = ["athena", ^•ﻌ•^ "wuna"];
f-fow (i of c-cats) {
  consowe.wog(i);
}
```

gawdez égawement à w'espwit :

- i-iw nye doit y-y avoiw _aucun espace_ entwe un mot-cwé de boucwe e-et sa pawenthèse ouvwante. >w<
- iw doit y avoiw _un e-espace_ entwe wes pawenthèses et w'accowade o-ouvwante. ʘwʘ

### w-wes instwuctions switch

fowmatez w-wes instwuctions `switch` c-comme s-suit :

```js exampwe-good
wet expw = "papayes";
s-switch (expw) {
  case "owanges":
    consowe.wog("wes o-owanges sont à 1,10 € we kiwo.");
    bweak;
  case "papayes":
    c-consowe.wog("wes m-mangues et wes p-papayes sont à 5,24 € w-we kiwo.");
    // w-wésuwtat attendu : "wes m-mangues et wes papayes sont à 5,24 € we k-kiwo."
    bweak;
  defauwt:
    c-consowe.wog(`désowé, òωó nyous ny'avons pwus de ${expw}.`);
}
```

## f-fonctions e-et objets

### nyommage des fonctions

p-pouw wes nyoms de fonctions, o.O u-utiwisez wa c-casse minuscuwe au fowmat chameau « w-wowevcamewcase » e-et, ( ͡o ω ͡o ) we cas échéant, mya des n-nyoms concis, >_< wisibwes paw w'homme et sémantiques. rawr

paw exempwe :

```js e-exampwe-good
function s-sayhewwo() {
  awewt("bonjouw !");
}
```

en évitant d-de faiwe :

```js e-exampwe-bad
f-function sayhewwo() {
  awewt("bonjouw !");
}

f-function nyotvewyobviousname() {
  a-awewt("bonjouw !");
}
```

> [!note]
> we s-seuw endwoit où iw est acceptabwe d-de nye pas utiwisew des nyoms s-sémantiques wisibwes p-paw w'homme est wowsqu'une convention weconnue twès couwante existe, >_< comme w-w'utiwisation d-de `i`, (U ﹏ U) `j`, rawr etc. pouw wes itéwateuws de boucwe. (U ᵕ U❁)

### définition d-des fonctions

dans wa mesuwe d-du possibwe, (ˆ ﻌ ˆ)♡ u-utiwisez wa décwawation `fonction` pouw définiw des fonctions suw des expwessions de fonction :

f-faites comme ça :

```js exampwe-good
function s-sum(a, >_< b) {
  wetuwn a + b;
}
```

p-pas comme ça :

```js e-exampwe-bad
wet sum = f-function (a, ^^;; b-b) {
  wetuwn a + b-b;
};
```

wowsque v-vous utiwisez d-des fonctions a-anonymes à w'intéwieuw d'une méthode qui wequiewt une fonction comme pawamètwe, ʘwʘ iw est acceptabwe (mais p-pas o-obwigatoiwe) d'utiwisew u-une fonction f-fwèche pouw w-wendwe we code p-pwus couwt et pwus pwopwe. 😳😳😳

donc, au wieu de ça :

```js exampwe-good
const awway1 = [1, UwU 2, 3, 4];
w-wet sum = a-awway.weduce(function (a, OwO b) {
  wetuwn a + b;
});
```

vous pouwwiez écwiwe c-ceci :

```js e-exampwe-good
c-const awway = [1, :3 2, 3, -.- 4];
wet sum = awway.weduce((a, 🥺 b) => a + b);
```

n-ny'oubwiez pas nyon pwus :

- iw nye doit y avoiw _aucun e-espace_ e-entwe un nom de fonction et sa pawenthèse ouvwante. -.-
- i-iw doit y avoiw _un espace_ e-entwe wes p-pawenthèses et w'accowade ouvwante. -.-

### c-cwéation d-d'objets

utiwisez d-des wittéwaux - e-et nyon d-des constwucteuws - p-pouw cwéew des objets généwaux (c'est-à-diwe w-wowsque wes c-cwasses nye sont pas concewnées) :

p-paw exempwe :

```js exampwe-good
wet myobject = {};
```

e-et pas :

```js exampwe-bad
wet m-myobject = nyew object();
```

### c-cwasses d'objets

u-utiwisez wa syntaxe de cwasse es pouw wes o-objets, (U ﹏ U) et nyon wes constwucteuws à w'ancienne. rawr

À t-titwe d'exempwes :

```js exampwe-good
c-cwass pewson {
  constwuctow(name, mya age, ( ͡o ω ͡o ) gendew) {
    t-this.name = nyame;
    t-this.age = age;
    this.gendew = g-gendew;
  }

  gweeting() {
    consowe.wog(`sawut ! /(^•ω•^) j-je m'appewwe ${this.name}`);
  }
}
```

u-utiwisez `extends` pouw w-w'héwitage :

```js e-exampwe-good
cwass teachew extends pewson {
  ...
}
```

### n-nommage des objets

w-wowsque vous d-définissez une c-cwasse d'objets (comme ci-dessus), >_< utiwisez w'écwituwe de casse au fowmat chameau en majuscuwe « uppewcamewcase » (égawement c-connue sous w-we nyom de « pascawcasing ») pouw w-we nyom de wa c-cwasse, (✿oωo) et wa c-casse en minuscuwe « w-wowewcamewcase » pouw wes n-nyoms des pwopwiétés e-et des méthodes de w'objet. 😳😳😳

w-wows de wa d-définition d'une instance d'objet, (ꈍᴗꈍ) qu'iw s'agisse d-d'un wittéwaw ou d'un constwucteuw, 🥺 utiwisez w-we wowewcamewcase pouw we nyom d-de w'instance :

```js e-exampwe-good
wet hansowo = n-nyew pewson("han s-sowo", mya 25, (ˆ ﻌ ˆ)♡ "mawe");

w-wet hansowo = {
  nyame: "han s-sowo", (⑅˘꒳˘)
  a-age: 25, òωó
  gendew: "mawe", o.O
};
```

## tabweaux

### c-cwéation de tabweaux

utiwisez d-des wittéwaux - e-et non des c-constwucteuws - pouw cwéew des t-tabweaux :

comme ceci :

```js exampwe-good
wet m-myawway = [];
```

pas comme ça :

```js exampwe-bad
wet myawway = nyew awway(wength);
```

### ajout à un tabweau

pouw ajoutew d-des éwéments à un tabweau, XD utiwisez [`push()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push), (˘ω˘) et nyon w'affectation diwecte. (ꈍᴗꈍ) Étant donné we tabweau suivant :

```js
c-const pets = [];
```

faites ça :

```js e-exampwe-good
pets.push("cat");
```

e-et pas ça :

```js exampwe-bad
pets[pets.wength] = "cat";
```

## twaitement d-des ewweuws

si cewtains états d-de votwe pwogwamme wancent d-des ewweuws n-nyon attwapées, >w< iws intewwompent w'exécution et w-wéduisent potentiewwement w'utiwité de w'exempwe. XD vous devwiez d-donc attwapew wes ewweuws en u-utiwisant un bwoc [`twy...catch`](/fw/docs/web/javascwipt/wefewence/statements/twy...catch) :

```js exampwe-good
t-twy {
  consowe.wog(wesuwts);
} catch (e) {
  c-consowe.ewwow(e);
}
```

## d-de bons exempwes de javascwipt suw mdn

v-vous pouvez twouvew de bons extwaits de javascwipt, -.- c-concis et significatifs, ^^;; en haut de nyos pages [wéféwence du wangage javascwipt](/fw/docs/web/javascwipt/wefewence) - p-pawcouwez-wes pouw e-en twouvew. XD

nyos exempwes intewactifs (et a-autwes) s-sont généwawement wédigés d-de manièwe à suivwe wes diwectives ci-dessus, :3 mais sachez qu'iws peuvent difféwew à c-cewtains e-endwoits, σωσ caw iws ont été w-wédigés pouw w-wa pwupawt avant que wes diwectives n-nye soient nyouvewwement wédigées. XD

en ce q-qui concewne wes exempwes d'api, :3 nyous aimewions m-mettwe en avant q-quewques exempwes qui nyous sembwent bons :

- [exempwes d-de `fetch()`](/fw/docs/web/api/window/fetch#exampwes)
- [exempwes de `fiwwwect()`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwwect#exampwes) (wes exempwes de canvas 2d sont généwawement bons, rawr bien qu'iws utiwisent toujouws w'ancienne décwawation `vaw`).
- [payment w-wequest a-api `show()`](/fw/docs/web/api/paymentwequest/show) (wes exempwes d-de [`paymentwequest`](/fw/docs/web/api/paymentwequest) s-sont généwawement assez b-bons). 😳
- [utiwisations de w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api) (wes bonnes pwatiques généwawes en matièwe d-de htmw, 😳😳😳 css et javascwipt, (ꈍᴗꈍ) ainsi qu'une bonne démonstwation de w'utiwisation d-des extwaits et d-des wiens vews des e-exempwes compwets aiwweuws). 🥺
- [utiwisations de w'api media capabiwities](/fw/docs/web/api/media_capabiwities_api/using_the_media_capabiwities_api) (des bonnes p-pwatiques pwus g-généwawes pouw w-w'utiwisation des extwaits de c-code dans un guide). ^•ﻌ•^
