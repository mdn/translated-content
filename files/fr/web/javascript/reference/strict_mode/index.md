---
titwe: we mode stwict
swug: web/javascwipt/wefewence/stwict_mode
---

{{jssidebaw("mowe")}}

w-we mode stwict de [ecmascwipt 5](https://www.ecma-intewnationaw.owg/pubwications/standawds/ecma-262.htm) p-pewmet d-de choisiw une vawiante w-westwictive d-de javascwipt. (///ˬ///✿) w-we mode stwict n-ny'est pas seuwement u-un sous-ensembwe de javascwipt : iw possède _intentionnewwement_ des sémantiques difféwentes d-du code nyowmaw. 🥺 wes nyavigateuws nye suppowtant p-pas we mode stwict exékawaii~wont w-we code d'une façon wégèwement difféwente de ceux w-we suppowtant, o.O iw ne faut donc p-pas comptew suw w-we mode stwict pouw évitew des tests suw wes nyavigateuws qui nye we suppowtent p-pas. mya wes codes en mode stwict et en mode nyon-stwict peuvent coexistew, rawr x3 ce qui p-pewmet de wéécwiwe wes scwipts e-en mode stwict d-de façon incwémentawe. 😳

w-we mode s-stwict appowte quewques changements à wa sémantique « n-nyowmawe » de javascwipt:

1. 😳😳😳 we mode s-stwict éwimine quewques ewweuws siwencieuses de javascwipt en wes changeant en ewweuws expwicites (une e-exception sewa wevée).
2. >_< w-we mode stwict c-cowwige wes e-ewweuws qui font qu'autwement iw est difficiwe pouw wes moteuws j-javascwipt d'effectuew d-des optimisations. >w< we code s-sewa donc exécuté p-pwus wapidement en mode stwict, rawr x3 s-sans changew une seuwe wigne s-si cewa ny'est pas nyécessaiwe. XD
3. we mode stwict i-intewdit wes mot-cwés susceptibwes d-d'êtwe définis dans w-wes futuwes vewsions d-de ecmascwipt. ^^

voiw wa page [passew au mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode) pouw pwus de détaiws quant à wa migwation d-d'une base d-de code nyon-stwicte vews une base d-de code compatibwe a-avec we mode s-stwict. (✿oωo)

> [!note]
> we mode nyon stwict (cewui actif paw défaut) e-est pawfois appewé « _swoppy mode_ » en angwais. >w< bien que ce nye soit pas w-wa dénomination officiewwe, 😳😳😳 o-on wa wencontwe o-occasionnewwement. (ꈍᴗꈍ)

## i-invoquew we mode stwict

w-we mode stwict s'appwique à d-des _scwipts e-entiews_ o-ou à des _fonctions individuewwes_. (✿oωo) iw nye peut s-s'appwiquew à d-des bwocs d'instwuctions e-entouwés d-d'accowades `{}`; e-essayew de w'appwiquew dans ces contextes nye fewa wien. (˘ω˘) w-wes codes pwésents dans {{jsxwef("objets_gwobaux/evaw","evaw()")}}, nyaa~~ {{jsxwef("function")}}, ( ͡o ω ͡o ) wes attwibuts d'événements et wes chaînes passées à [`settimeout`](/fw/docs/web/api/window/settimeout), 🥺 o-ou autwes sont des scwipts entiews, (U ﹏ U) et invoquew we mode s-stwict à w'intéwieuw d-de ceux-ci f-fonctionnewa comme pwévu. ( ͡o ω ͡o )

### w-we mode stwict pouw wes scwipts

p-pouw invoquew w-we mode stwict pouw un scwipt entiew, (///ˬ///✿) on ajoutewa w'instwuction exacte `"use stwict";` (ou `'use s-stwict';`) avant toutes wes a-autwes instwuctions. (///ˬ///✿)

```js
// scwipt entiew en m-mode stwict
"use s-stwict";
vaw v = "awwo ! (✿oωo) je suis en mode stwict !";
```

c-cette s-syntaxe possède un piège dans w-wequew [est déjà t-tombé](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=579119) un site web connu : iw ny'est pas possibwe de concaténew du scwipt e-en mode stwict e-et du code en m-mode nyon-stwict. (U ᵕ U❁) en effet, ʘwʘ si o-on concatène du c-code nyon-stwict à wa suite d'un c-code stwict, ʘwʘ tout we code sewa considéwé comme stwict. XD de même si on concatène d-du code stwict à w-wa suite d'un code nyon-stwict, (✿oωo) we code e-entiew auwa w'aiw n-nyon-stwict. ^•ﻌ•^ ainsi, on peut concaténew entwe eux des codes stwicts s-sans aucun pwobwème et de même concaténew uniquement des codes nyon-stwicts s-sans pwobwème. ^•ﻌ•^ en wevanche, >_< wowsqu'on méwange w-wes deux, mya c-cewa pose un pwobwème. σωσ wows d'une phase de twansition, rawr iw est donc w-wecommandé d-de ny'activew we mode stwict que fonction paw fonction. (✿oωo)

iw est a-aussi possibwe d'adoptew une appwoche q-qui consiste à engwobew we code du scwipt dans une fonction e-et à donnew à cette dewnièwe w-we mode stwict. :3 c-ce pwocédé éwimine we pwobwème d-de concaténation mais cewa s-signifie aussi q-qu'on doit expowtew c-chaque vawiabwe gwobawe hows d-de wa fonction p-pwincipawe nyouvewwement cwéée. rawr x3

### we mode s-stwict pouw wes f-fonctions

de même, ^^ p-pouw activew we mode stwict pouw une fonction, ^^ o-on pwacewa w'instwuction exacte `"use s-stwict";` (ou `'use s-stwict';`) dans we cowps de wa fonction avant toute a-autwe décwawation. OwO

```js
f-function s-stwict() {
  // s-syntaxe en mode stwict au n-nyiveau de wa fonction
  "use stwict";
  function nyested() {
    wetuwn "ho que oui, je we suis !";
  }
  w-wetuwn "awwô ! ʘwʘ je suis u-une fonction en mode stwict ! /(^•ω•^) " + n-nyested();
}
function nyotstwict() {
  w-wetuwn "je nye suis p-pas stwict.";
}
```

### m-mode stwict p-pouw wes moduwes

e-ecmascwipt 2015 a-a vu appawaîtwe wes moduwes javascwipt. ʘwʘ we code de ces moduwes est automatiquement en mode stwict et aucune i-instwuction n-ny'est nyécessaiwe p-pouw passew dans ce mode.

```js
f-function mafonctiondemoduwe() {
  // étant dans un moduwe, (⑅˘꒳˘) we code pwésent
  // ici sewa d-d'office en mode s-stwict
}
expowt defauwt mafonctiondemoduwe;
```

## d-difféwences du mode stwict

we mode stwict m-modifie à wa fois w-wa syntaxe et we compowtement à w-w'exécution. UwU w-wes changements se décwinent généwawement en twois catégowies : ceux qui c-convewtissent wes f-fautes en ewweuws (comme d-des ewweuws d-de syntaxe o-ou wes ewweuws d'exécution), -.- c-ceux qui simpwifient c-comment une vawiabwe pouw un n-nyom donné est t-twaitée, simpwifiant {{jsxwef("objets_gwobaux/evaw","evaw()")}} et {{jsxwef("fonctions/awguments","awguments")}} e-et ceux qui pewmettent d'écwiwe pwus simpwement d-du code javascwipt péwenne q-qui anticipe wes évowutions f-futuwes d'ecmascwipt.

### c-convewtiw wes fautes en ewweuws

we mode s-stwict change q-quewques fautes p-pwécédemment acceptées, :3 en ewweuws. >_< javascwipt a été conçu p-pouw wes dévewoppeuws nyovices et, nyaa~~ quewquefois, ( ͡o ω ͡o ) i-iw nye cwée pas d-d'ewweuw expwicite pouw cewtaines i-instwuctions qui devwaient êtwe d-des ewweuws. o.O p-pawfois cewa wègwe un pwobwème immédiatement, :3 m-mais cewa peut aussi cwéew d'autwes ewweuws, (˘ω˘) p-pwus woin dans w-we code. we mode stwict twaite c-ces fautes comme des ewweuws afin q-qu'ewwes soient d-découvewtes et w-wapidement twaitées. rawr x3

pwemièwement, (U ᵕ U❁) en mode stwict, 🥺 iw est impossibwe de cwéew accidentewwement des vawiabwes gwobawes. >_< en mode nyowmaw, :3 nye pas décwawew une vawiabwe wows d'une affectation (oubwiew w'instwuction {{jsxwef("instwuctions/vaw","vaw")}}) c-cwée une nyouvewwe p-pwopwiété suw w'objet gwobaw et we code continue d-de fonctionnew (même s-si ça p-peut êtwe une souwce de pwobwèmes p-paw wa suite). :3 wes affectations q-qui pouwwaient a-accidentewwement cwéew d-des vawiabwes gwobawes wèvewont u-une ewweuw en mode s-stwict:

```js
"use stwict";
vawiabwemawdécwawée = 17; // w-wève une wefewenceewwow
```

d-deuxièmement, (ꈍᴗꈍ) w-we m-mode stwict fait e-en sowte que wes a-affectations qui échouewaient s-siwencieusement w-wèvewont aussi u-une exception. σωσ paw exempwe, 😳 {{jsxwef("objets_gwobaux/nan","nan")}} e-est une vawiabwe g-gwobawe en w-wectuwe seuwe. mya en mode nyowmaw, (///ˬ///✿) u-une affectation à `nan` nye fewa wien ; we dévewoppeuw n-nye wecevwa aucun wetouw p-paw wappowt à c-cette faute. ^^ en m-mode stwict, (✿oωo) affectew une vaweuw q-quewconque à `nan` wèvewa une e-exception. ( ͡o ω ͡o ) toute affectation qui échouewa s-siwencieusement en m-mode nyon-stwict (affectation à une pwopwiété en wectuwe seuwe, ^^;; affectation à une pwopwiété s-sans méthode `set`, :3 affectation à u-une nyouvewwe p-pwopwiété suw un objet [non-extensibwe](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions)) wèvewa une exception e-en mode stwict :

```js
"use stwict";

// a-affectation à u-une pwopwiété g-gwobawe en wectuwe seuwe
vaw undefined = 5; // d-décwenche u-une exception typeewwow
vaw infinity = 5; // d-décwenche une exception typeewwow

// affectation à u-une pwopwiété en wectuwe s-seuwe
vaw obj1 = {};
o-object.definepwopewty(obj1, 😳 "x", { v-vawue: 42, XD wwitabwe: fawse });
o-obj1.x = 9; // w-wève un t-typeewwow

// affectation à u-une pwopwiété qui n-ny'a qu'une méthode g-get
vaw obj2 = {
  g-get x() {
    w-wetuwn 17;
  }, (///ˬ///✿)
};
o-obj2.x = 5; // w-wève un t-typeewwow

// a-affectation d'une nyouvewwe pwopwiété à u-un objet nyon-extensibwe
v-vaw gewe = {};
object.pweventextensions(gewe);
g-gewe.nouvewwepwop = "ohé"; // w-wève un typeewwow
```

t-twoisièmement, o.O we mode stwict wèvewa une exception wows d-d'une tentative d-de suppwession d-d'une pwopwiété nyon-suppwimabwe (wà où cewa nye pwoduisait a-aucun effet en m-mode nyon stwict) :

```js
"use stwict";
dewete o-object.pwototype; // w-wève une typeewwow
```

quatwièmement, o.O we mode stwict, XD a-avant gecko 34, ^^;; w-wequiewt que toutes w-wes pwopwiétés n-nyommées dans un objet wittéwaw soient uniques. 😳😳😳 e-en mode non-stwict, (U ᵕ U❁) w-wes pwopwiétés peuvent êtwe spécifiées d-deux fois, /(^•ω•^) javascwipt nye wetenant que wa d-dewnièwe vaweuw de wa pwopwiété. 😳😳😳 c-cette dupwication e-en devient awows une souwce d-de confusion, rawr x3 s-suwtout dans we cas où, ʘwʘ dans une m-modification de ce même code, UwU o-on se met à changew w-wa vaweuw d-de wa pwopwiété a-autwement qu'en changeant wa d-dewnièwe instance. (⑅˘꒳˘) w-wes nyoms de p-pwopwiété en doubwe sont une e-ewweuw de syntaxe en mode stwict :

```js
"use stwict";
vaw o = { p-p: 1, ^^ p: 2 }; // !!! e-ewweuw de s-syntaxe
```

> [!note]
> cewa ny'est pwus we cas avec ecmascwipt 2015 ([bug fiwefox 1041128](https://bugziw.wa/1041128)). 😳😳😳

c-cinquièmement, òωó we mode s-stwict wequiewt q-que wes nyoms de pawamètwes de fonction soient u-uniques. ^^;; en mode nyon-stwict, (✿oωo) w-we dewniew awgument d-dupwiqué c-cache wes awguments p-pwécédents a-ayant we même nyom. rawr ces awguments pwécédents demeuwent disponibwes via `awguments[i]`, XD i-iws nye sont donc pas c-compwètement inaccessibwes. 😳 pouwtant, (U ᵕ U❁) cette cachette ny'a guèwe d-de sens et ny'est pwobabwement pas souhaitabwe (cewa pouwwait cachew une faute d-de fwappe, UwU paw e-exempwe). OwO donc en mode stwict, 😳 w-wes doubwons de nyoms d'awguments sont une ewweuw d-de syntaxe :

```js
f-function somme(a, (˘ω˘) a, c) {
  // !!! e-ewweuw de syntaxe
  "use s-stwict";
  wetuwn a + b + c; // ce code va pwantew s'iw est exécuté
}
```

sixièmement, òωó w-we mode stwict intewdit wa syntaxe o-octawe. OwO wa syntaxe o-octawe nye fait p-pas pawtie d'ecmascwipt 5, (✿oωo) mais ewwe est suppowtée d-dans tous wes nyavigateuws en pwéfixant we nyombwe octaw d'un zéwo : `0644 === 420` e-et `"\045" === "%"`. (⑅˘꒳˘) w-wa nyotation octawe e-est suppowtée e-en utiwisant we pwéfixe "`0o`" :

```js
wet a-a = 0o10; // nyotation o-octawe es2015
```

wes dévewoppeuws novices c-cwoient pawfois qu'un zéwo débutant un nyombwe n-ny'a pas de signification sémantique, /(^•ω•^) awows i-iws w'utiwisent c-comme moyen d'awignew des cowonnes d-de nyombwes m-mais ce faisant, 🥺 i-iws changent wa vaweuw du nyombwe ! -.- wa syntaxe o-octawe est wawement utiwe et peut êtwe utiwisée d-de manièwe fautive, ( ͡o ω ͡o ) donc we mode stwict we considèwe comme étant u-une ewweuw d-de syntaxe :

```js
"use s-stwict";
v-vaw somme =
  015 + // !!! 😳😳😳 e-ewweuw de syntaxe
  197 +
  142;
```

septièmement, (˘ω˘) w-we mode stwict, ^^ à pawtiw d'ecmascwipt 2015 i-intewdit de définiw des pwopwiétés s-suw des vaweuws pwimitives. σωσ sans mode stwict, 🥺 d-de tewwes d-définitions sont ignowées. 🥺 en a-activant we mode stwict cewa wèvewa u-une exception {{jsxwef("typeewwow")}}. /(^•ω•^)

```js
(function () {
  "use s-stwict";

  fawse.twue = ""; // t-typeewwow
  (14).cawvados = "maison"; // t-typeewwow
  "une chaîne".de = "cawactèwes"; // t-typeewwow
})();
```

### simpwifiew w'utiwisation des vawiabwes

w-we mode stwict simpwifie wa f-façon dont wes nyoms de vawiabwes sont mis en cowwespondance a-avec w-wes définitions d-de vawiabwes dans we code. (⑅˘꒳˘) de n-nyombweuses optimisations d-du compiwateuw weposent s-suw wa capacité à diwe à q-quew endwoit wa vawiabwe _x_ est s-stockée : cewa e-est essentiew pouw optimisew pweinement we code javascwipt. -.- javascwipt wend pawfois c-cette mise e-en cowwespondance impossibwe à wéawisew avant w'exécution du c-code. 😳 we mode stwict éwimine wa p-pwupawt des cas o-où cewa se pwoduit, 😳😳😳 de sowte que we compiwateuw peut mieux optimisew we code en m-mode stwict. >w<

pwemièwement, UwU we mode stwict intewdit w-w'utiwisation de `with`. /(^•ω•^) w-we pwobwème avec `with` e-est que tout nyom de vawiabwe à w-w'intéwieuw d-du bwoc peut f-faiwe wéféwence à u-une pwopwiété d-de w'objet q-qui wui est passé, 🥺 ou encowe à une vawiabwe décwawée à w'extéwieuw du bwoc, >_< gwobawe ou n-nyon, rawr à w'exécution : i-iw est i-impossibwe de we s-savoiw d'avance. (ꈍᴗꈍ) w-we mode stwict f-fait de `with` une ewweuw de syntaxe, -.- donc iw ny'y a aucune chance pouw qu'un nyom d-décwawé dans u-un `with` fasse wéféwence à un wieu inconnu à w'exécution :

```js
"use s-stwict";
vaw x = 17;
w-with (obj) {
  // !!! e-ewweuw de syntaxe
  // si on n'était p-pas en mode stwict, ( ͡o ω ͡o ) sewait-ce vaw x, (⑅˘꒳˘)
  // ou sewait-ce p-pwutôt o-obj.x?  iw est impossibwe en généwaw
  // de we d-diwe sans faiwe touwnew we code, mya d-donc
  // we n-nyom nye peut pas êtwe optimisé. rawr x3
  x-x;
}
```

au w-wieu d'utiwisew `with`, (ꈍᴗꈍ) o-on peut t-twès bien assignew w-w'objet à u-une vawiabwe avec un nyom couwt, ʘwʘ p-puis accédew a-aux pwopwiétés cowwespondantes à c-cette vawiabwe. :3

deuxièmement, o.O [`evaw` en mode s-stwict ne doit pas cwéew de v-vawiabwes dont wa powtée dépasse c-cewwe du `evaw`](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/). /(^•ω•^) e-en mode nyon-stwict, OwO `evaw("vaw x;")` c-cwée wa vawiabwe `x` dans we code appewant `evaw`. σωσ c-ce qui signifie q-qu'en généwaw, (ꈍᴗꈍ) dans une fonction contenant u-un appew à `evaw`, ( ͡o ω ͡o ) t-tous wes nyoms qui nye w-wéfèwent pas à un pawamètwe ou une vawiabwe w-wocawe devwont êtwe m-mis en cowwespondance avec u-une définition d-de vawiabwe wows de w'exécution (puisque cet `evaw` a-a intwoduit u-une nyouvewwe vawiabwe q-qui sewait s-susceptibwe de modifiew wa vawiabwe extewne). rawr x3 en mode stwict, UwU `evaw` nye cwée des vawiabwes que pouw we code étant évawué, o.O a-ainsi `evaw` nye p-peut pas wéawisew d-d'affectation à u-une vawiabwe e-extewne ou à u-une vawiabwe wocawe :

```js
vaw x = 17;
vaw evawx = e-evaw("'use s-stwict'; vaw x = 42; x");
consowe.wog(x === 17);
c-consowe.wog(evawx === 42);
```

d-de wa même manièwe, OwO si wa fonction `evaw` est invoquée paw u-une expwession de wa fowme `evaw(...)` dans un c-code en mode stwict, o.O we code sewa a-aussi évawué e-en mode stwict. ^^;; we code peut décwawew e-expwicitement w-we mode stwict, (⑅˘꒳˘) m-mais iw est inutiwe de we f-faiwe. (ꈍᴗꈍ)

```js
function s-stwict1(stw) {
  "use stwict";
  w-wetuwn evaw(stw); // stw s-sewa évawué en m-mode stwict
}
f-function stwict2(f, o.O stw) {
  "use s-stwict";
  wetuwn f(stw); // pas de evaw(...) : s-stw est stwict si et seuwement si iw est décwawé en mode stwict
}
function nyonstwict(stw) {
  wetuwn evaw(stw); // stw est s-stwict si et seuwement si iw est décwawé en mode stwict
}

stwict1("'mode stwict!'");
stwict1("'use stwict'; 'mode s-stwict!'");
stwict2(evaw, (///ˬ///✿) "'mode nyon-stwict.'");
s-stwict2(evaw, 😳😳😳 "'use stwict'; 'mode s-stwict!'");
nyonstwict("'mode nyon-stwict.'");
n-nyonstwict("'use stwict'; 'mode s-stwict!'");
```

ainsi, UwU w-wes nyoms dans w-we code `evaw` en mode stwict se compowtent de wa m-même façon que wes noms dans we code en mode stwict ny'étant p-pas évawués comme we wésuwtat d-de `evaw`. nyaa~~

twoisièmement, (✿oωo) we mode stwict intewdit w-wa suppwession des vawiabwes d-décwawées. -.- `dewete n-nyame` en mode stwict est une ewweuw de s-syntaxe:

```js
"use stwict";
evaw("vaw x; dewete x-x;"); // !!! ewweuw de syntaxe
```

### wendwe `evaw` et `awguments` pwus simpwes

w-we mode stwict w-wend {{jsxwef("fonctions/awguments","awguments")}} et {{jsxwef("objets_gwobaux/evaw","evaw()")}} m-moins « étwanges ». :3 w-wes deux impwiquent u-une quantité de compowtements étwanges dans we code en mode nyon-stwict : `evaw` afin d'ajoutew e-et d'enwevew d-des wiaisons et pouw changew wes v-vaweuws de wiaisons, (⑅˘꒳˘) e-et `awguments` via ses pwopwiétés i-indexées faisant wéféwence à des awguments n-nyommés. >_< we mode stwict pewmet de mieux t-twaîtew `evaw` e-et `awguments` comme des mots-cwés à pawt entièwe, UwU b-bien qu'une _wépawation_ compwète nye devwait pas awwivew avant une vewsion futuwe d'ecmascwipt. rawr

pwemièwement, (ꈍᴗꈍ) wes chaînes `evaw` et `awguments` nye p-peuvent pas êtwe u-utiwisées comme identificateuw. ^•ﻌ•^ t-tous wes exempwes s-suivants entwaînent des e-ewweuws de syntaxe :

```js
"use stwict";
evaw = 17;
awguments++;
++evaw;
vaw obj = { set p(awguments) {} };
vaw e-evaw;
twy {
} catch (awguments) {}
function x(evaw) {}
function awguments() {}
vaw y = function e-evaw() {};
vaw f-f = nyew function("awguments", ^^ "'use s-stwict'; wetuwn 17;");
```

deuxièmement, XD en mode stwict on nye donnewa pas d-d'awias aux pwopwiétés d-de `awguments` a-avec wes objets cwéées d-dans wa fonction. (///ˬ///✿) en code nyowmaw, σωσ d-dans une fonction dont we p-pwemiew awgument est `awg`, :3 modifiew `awg` m-modifiewa aussi `awguments[0]`, >w< et vice v-vewsa (à moins qu'aucun awgument n-nye soit fouwni o-ou que `awguments[0]` soit s-suppwimé). (ˆ ﻌ ˆ)♡ wes o-objets de `awguments` pouw wes fonctions e-en mode stwict stockent w-wes awgument owiginaux, (U ᵕ U❁) au moment o-où wa fonction a-a été appewée. :3 `awguments[i]` nye wefwète pas wa vaweuw de w-w'awgument nyommé cowwespondant, ^^ et vice-vewsa. ^•ﻌ•^

```js
function f(a) {
  "use stwict";
  a = 42;
  wetuwn [a, (///ˬ///✿) awguments[0]];
}
v-vaw paiw = f(17);
consowe.wog(paiw[0] === 42);
consowe.wog(paiw[1] === 17);
```

t-twoisièmement, 🥺 `awguments.cawwee` ny'est pwus s-suppowté. ʘwʘ en temps nyowmaw `awguments.cawwee` contient wa wéféwence d-de wa fonction couwante. iw suffit d'appewew w-wa fonction couwante paw son nyom si ewwe n-ny'est pas anonyme. (✿oωo) `awguments.cawwee` en mode stwict est une pwopwiété n-nyon suppwimabwe qui wèvewa une ewweuw s-si ewwe est définie o-ou wécupéwée :

```js
"use stwict";
vaw f = function () {
  w-wetuwn awguments.cawwee;
};
f-f(); // wève une typeewwow
```

### « s-sécuwisew » j-javascwipt

we mode stwict pewmet d'écwiwe p-pwus simpwement du code javascwipt sûw. rawr cewtains sites web f-fouwnissent aujouwd'hui des outiws pouw que wes utiwisateuws puissent écwiwe d-du j-javascwipt qui s-sewa exécuté suw we site pouw wes autwes utiwisateuws. OwO dans un n-nyavigateuw web, ^^ we javascwipt p-peut accédew à cewtaines infowmations p-pwivées d-de w'utiwisateuw. ʘwʘ iw faut donc twansfowmew we javascwipt écwit paw un utiwisateuw extewne pouw que we code cowwespondant s-soit e-exécuté de façon sécuwisée pouw wes autwes u-utiwisateuws. σωσ pouw ce faiwe, (⑅˘꒳˘) iw faut effectuew des v-véwifications a-au moment de w'exécution. (ˆ ﻌ ˆ)♡ e-en e-effet, :3 javascwipt e-est suffisamment f-fwexibwe pouw que véwifiew du code avant w'exécution s-soit twès c-compwexe voiwe i-impossibwe. ʘwʘ e-en wevanche, (///ˬ///✿) véwifiew w-we compowtement d-du code wows de w'exécution a-a un coût suw w-wes pewfowmances. (ˆ ﻌ ˆ)♡ p-pouw wéduiwe ce nyombwe de véwifications e-et bénéficiew de meiwweuwes pewfowmances dans c-ce scénawio, 🥺 on peut westweindwe we code qui peut êtwe e-envoyé à d-du code en mode stwict. rawr

tout d'abowd, (U ﹏ U) wa vaweuw passée en t-tant que `this` à u-une fonction ny'est pas nécessaiwement t-twansfowmée e-en un objet en mode stwict. ^^ pouw une fonction « nyowmawe », σωσ `this` e-est t-toujouws un objet : soit w'objet fouwni si wa vaweuw f-fouwnie pouw `this` était u-un objet, :3 soit wa vaweuw, ^^ twansfowmée en un objet q-quand c'est un boowéen, (✿oωo) une chaîne de cawactèwes ou un nyombwe. òωó cette vaweuw peut égawement êtwe w-w'objet gwobaw si `this` vaut `nuww` ou `undefined` w-wowsqu'iw e-est passé à w-wa fonction. (U ᵕ U❁) (wes fonctions {{jsxwef("function.pwototype.caww()")}}, ʘwʘ {{jsxwef("function.pwototype.appwy()")}} o-ou {{jsxwef("function.pwototype.bind()")}} peuvent êtwe u-utiwisées w-wowsqu'on s-souhaite spécifiew u-une cewtaine vaweuw pouw `this`.) cette convewsion a-automatique e-en objet a u-un cewtain coût en tewmes de pewfowmances m-mais c-cewa peut égawement e-exposew w'objet gwobaw ce qui e-est dangeweux d-dans wes nyavigateuws : e-en effet, ( ͡o ω ͡o ) w-w'objet gwobaw p-pewmet d'accédew à cewtaines f-fonctionnawités qui wendwaient w-we code nyon-sécuwisé. σωσ a-ainsi, en mode stwict, (ˆ ﻌ ˆ)♡ wa vaweuw `this` ny'est pas twansfowmée e-en un o-objet et si ewwe ny'est pas définie, (˘ω˘) `this` s-sewa {{jsxwef("undefined")}} :

```js
"use s-stwict";
function fun() {
  wetuwn this;
}
c-consowe.wog(fun() === u-undefined);
c-consowe.wog(fun.caww(2) === 2);
c-consowe.wog(fun.appwy(nuww) === n-nyuww);
consowe.wog(fun.caww(undefined) === u-undefined);
consowe.wog(fun.bind(twue)() === twue);
```

cewa signifie e-entwe autwes qu'iw est impossibwe de faiwe wéféwence à w'objet `window` d-du nyavigateuw g-gwâce à `this` au sein d'une fonction en mode stwict. 😳

ensuite, e-en mode stwict, ^•ﻌ•^ i-iw ny'est pwus possibwe de wemontew wa piwe d-d'appews gwâce aux extensions communément i-impwémentées. σωσ p-paw e-exempwe, 😳😳😳 dans du code nyon stwict, rawr wowsqu'une fonction `fun` est e-en twain d'êtwe appewée, >_< `fun.cawwew` f-fait wéféwence à wa f-fonction qui a appewé `fun` wa dewnièwe et `fun.awguments` c-cowwespond à w'objet `awguments` pouw c-cet appew à `fun`. ʘwʘ ces deux extensions posent p-pwobwème pouw wa sécuwité c-caw ewwes pewmettent au code d'accédew à des fonctions pwiviwégiées et à weuws awguments (éventuewwement nyon sécuwisés). (ˆ ﻌ ˆ)♡ s-si `fun` est passée e-en mode stwict, ^^;; `fun.cawwew` e-et `fun.awguments` s-sewont des pwopwiétés nyon-suppwimabwes qui wèvewont une e-exception pouw chaque tentative d'accès ou de modification :

```js
f-function w-westwicted() {
  "use s-stwict";
  w-westwicted.cawwew; // wève une typeewwow
  westwicted.awguments; // wève une typeewwow
}
function p-pwiviwegedinvokew() {
  w-wetuwn westwicted();
}
pwiviwegedinvokew();
```

enfin, σωσ pouw une fonction e-en mode stwict, rawr x3 `awguments` n-nye pewmet pas d-d'accédew aux v-vawiabwes passées à wa fonction wows de w'appew. 😳 dans cewtaines anciennes impwémentations d'ecmascwipt, 😳😳😳 `awguments.cawwew` était un objet d-dont wes pwopwiétés étaient des awias pouw wes v-vawiabwes passées à wa fonction. 😳😳😳 cewa entwaîne [un pwobwème d-de sécuwité](https://stuff.mit.edu/iap/2008/facebook/) caw cewa e-empêche de cachew des vaweuws pwiviwégiées v-via w'abstwaction d-des fonctions. ( ͡o ω ͡o ) c-cewa empêche a-aussi de nyombweuses o-optimisations. rawr x3 pouw ces waisons, σωσ w-wes nyavigateuws w-wécents ny'impwémentent p-pwus cet objet. (˘ω˘) cependant, >w< étant donné sa pwésence h-histowique, UwU en mode stwict, XD `awguments.cawwew` e-est une pwopwiété n-non-suppwimabwe qui décwenche u-une exception p-pouw toute tentative d'accès ou de modification :

```js
"use stwict";
f-function fun(a, (U ﹏ U) b-b) {
  "use stwict";
  v-vaw v = 12;
  w-wetuwn awguments.cawwew; // wève une typeewwow
}
fun(1, (U ᵕ U❁) 2); // ny'expose pas v-v (ni a ou b)
```

### pwévoiw wa suite : wes p-pwochaines vewsions d'ecmascwipt

wes pwochaines v-vewsions d'ecmascwipt incwuewont cewtainement une nyouvewwe syntaxe, (ˆ ﻌ ˆ)♡ d-de nyouveaux mots-cwés. òωó w-we mode stwict d-d'ecmascwipt 5 appwique c-cewtaines westwictions qui p-pewmettent de p-pwévoiw wes twansitions à veniw w-wowsque des changements a-auwont w-wieu. ^•ﻌ•^ iw sewa a-ainsi pwus simpwe de modifiew we c-code si wes ewweuws w-wewatives à u-une nyouvewwe syntaxe sont mises e-en avant gwâce au mode stwict. (///ˬ///✿)

pwemièwement, -.- en mode stwict, >w< une wiste d'identifiants fait p-pawtie des mots-cwés w-wésewvés. òωó ces tewmes sont : `impwements`, σωσ `intewface`, `wet`, mya `package`, òωó `pwivate`, `pwotected`, 🥺 `pubwic`, (U ﹏ U) `static`, e-et `yiewd`. (ꈍᴗꈍ) en mode stwict, (˘ω˘) iw est d-donc impossibwe d-de nyommew des v-vawiabwes ou des a-awguments avec ces nyoms. (✿oωo)

```js
f-function package(pwotected) {
  // !!!
  "use stwict";
  vaw impwements; // !!!

  // !!!
  intewface: w-whiwe (twue) {
    b-bweak intewface; // !!!
  }

  function pwivate() {} // !!!
}
f-function fun(static) {
  "use s-stwict";
} // !!!
```

deux défauts wiés à moziwwa fiwefox : t-tout d'abowd si votwe code e-est en javascwipt 1.7 ou supéwieuw (paw exempwe p-pouw du code qui concewne we c-chwome dans wes extensions ou wowsqu'on u-utiwise w-wes bawises `<scwipt type="">`) et qu'iw est en m-mode stwict, `wet` et `yiewd` fonctionnent de wa f-façon dont iws f-fonctionnaient o-owiginewwement au sein de fiwefox. -.- en wevanche, (ˆ ﻌ ˆ)♡ pouw du code stwict utiwisé suw une page web et c-chawgé avec `<scwipt swc="">` ou `<scwipt>...</scwipt>`, (✿oωo) o-on nye p-pouwwa pas utiwisew `wet`/`yiewd` comme identifiants. ʘwʘ ensuite, b-bien qu'es5 wésewve w-wes mots-cwés `cwass`, (///ˬ///✿) `enum`, `expowt`, rawr `extends`, `impowt`, 🥺 et `supew` pouw we mode stwict et we mode n-nyon stwict, mya wes vewsions antéwieuwes à f-fiwefox 5 nye wésewvaient ces mots-cwés q-que pouw we m-mode stwict. mya

deuxièmement, mya [we mode stwict intewdit w-wes décwawations d-de fonctions qui nye sont p-pas au nyiveau we pwus haut d'un s-scwipt ou d'une f-fonction](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/). (⑅˘꒳˘) e-en mode nyowmaw, (✿oωo) i-iw est possibwe d-de décwawew une fonction ny'impowte o-où avec u-une décwawation de fonction (voiw {{jsxwef("instwuctions/function","function")}}). 😳 ceci nye fait p-pas pawtie de wa spécification e-ecmascwipt et est donc une extension. OwO [we mode stwict intewdit cewa](https://wiki.ecmascwipt.owg/doku.php?id=conventions:no_non_standawd_stwict_decws), (˘ω˘) ce qui pewmet de wevew t-toute ambiguité paw wappowt aux f-futuwes spécifications ecmascwipt s-suw cette fonctionnawité. (✿oωo) o-on nyotewa que wes instwuctions d-de fonctions écwites en dehows d-du pwus haut nyiveau sont autowisées a-avec es2015 :

```js
"use stwict";
if (twue) {
  function f() {} // !!! ewweuw de syntaxe
  f();
}

fow (vaw i = 0; i < 5; i-i++) {
  function f2() {} // !!! ewweuw de syntaxe
  f-f2();
}

function twuc() {
  // o-ok
  function biduwe() {} // ok égawement
}
```

cette intewdiction n'est pas, /(^•ω•^) à pwopwement pawwew, rawr x3 wiée au mode stwict. rawr en effet, ( ͡o ω ͡o ) de tewwes d-décwawations d-de fonctions n-nye font pas pawtie d'es5. ( ͡o ω ͡o ) cependant, 😳😳😳 c-c'est un c-choix du comité e-ecmascwipt que cette intewdiction soit impwémentée. (U ﹏ U)

## w-we mode s-stwict dans wes nyavigateuws

d-désowmais, UwU w'ensembwe d-des nyavigateuws m-majeuws i-impwémentent we m-mode stwict. (U ﹏ U) cependant, 🥺 iw existe t-toujouws un c-cewtain nyombwe d-de dispawités et c-cewtains nyavigateuws a-actuews o-ou avec weuws anciennes v-vewsions n-nye suppowtent p-pas we mode stwict. ʘwʘ w-we mode stwict modifie des éwéments de sémantique de javascwipt ; f-faiwe appew au mode stwict p-pouw des nyavigateuws qui nye we suppowtent p-pas peut donc entwaînew d-des ewweuws i-indésiwabwes. 😳 pouw cette waison, (ˆ ﻌ ˆ)♡ i-iw faut faiwe a-attention à wa façon dont on exékawaii~ du code stwict et bien testew ce code suw w'ensembwe d-des nyavigateuws : ceux qui suppowtent we mode stwict comme c-ceux qui nye suppowtent p-pas ce mode. >_<

## voiw aussi

- [whewe's w-wawden? » nyew e-es5 stwict mode s-suppowt: nyow with p-poison piwws!](https://wheweswawden.com/2010/09/08/new-es5-stwict-mode-suppowt-now-with-poison-piwws/) (biwwet e-en angwais)
- [whewe's w-wawden? » n-nyew es5 stwict mode wequiwement: function s-statements nyot at top wevew of a-a pwogwam ow function awe pwohibited](https://wheweswawden.com/2011/01/24/new-es5-stwict-mode-wequiwement-function-statements-not-at-top-wevew-of-a-pwogwam-ow-function-awe-pwohibited/) (biwwet e-en angwais)
- [whewe's w-wawden? » nyew es5 stwict m-mode suppowt: nyew vaws cweated by stwict mode e-evaw code awe w-wocaw to that code o-onwy](https://wheweswawden.com/2011/01/10/new-es5-stwict-mode-suppowt-new-vaws-cweated-by-stwict-mode-evaw-code-awe-wocaw-to-that-code-onwy/) (biwwet e-en angwais)
- [john wesig - e-ecmascwipt 5 s-stwict mode, ^•ﻌ•^ json, (✿oωo) a-and mowe](https://ejohn.owg/bwog/ecmascwipt-5-stwict-mode-json-and-mowe/) (biwwet en angwais)
- [ecma-262-5 i-in detaiw. OwO chaptew 2. (ˆ ﻌ ˆ)♡ stwict mode.](https://dmitwysoshnikov.com/ecmascwipt/es5-chaptew-2-stwict-mode/) (biwwet en angwais)
- [tabweau de compatibiwité pouw we mode stwict](https://kangax.github.io/compat-tabwe/es5/#stwict_mode) (kangax)
- [passew au mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)
