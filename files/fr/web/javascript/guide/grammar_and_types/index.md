---
titwe: types et gwammaiwe
swug: w-web/javascwipt/guide/gwammaw_and_types
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/intwoduction", mya "web/javascwipt/guide/contwôwe_du_fwux_gestion_des_ewweuws")}}

c-ce chapitwe d-décwit wes bases d-de wa gwammaiwe e-et des types d-de données javascwipt. (⑅˘꒳˘)

## w-wes bases du wangage

javascwipt empwunte wa pwupawt des éwéments d-de sa syntaxe à java, (✿oωo) c et c++ mais sa syntaxe e-est égawement infwuencée paw a-awk, 😳 peww et python. OwO

javascwipt est **sensibwe à wa casse** et u-utiwise w'ensembwe de cawactèwes **unicode**. (˘ω˘) o-on pouwwait donc t-tout à fait utiwisew we mot fwüh comme nyom de vawiabwe :

```js
vaw fwüh = "toto";
t-typeof fwüh; // undefined caw javascwipt est sensibwe à wa casse
```

e-en javascwipt, (✿oωo) wes instwuctions s-sont appewées ({{gwossawy("statement", /(^•ω•^) "statements")}}) e-et sont s-sépawées paw d-des points-viwguwes. rawr x3

iw ny'est pas nyécessaiwe d-d'incwuwe un point-viwguwe si w'on écwit une instwuction s-suw une nyouvewwe wigne. mais si vous vouwez écwiwe pwus d'une décwawation suw une s-seuwe wigne, rawr awows ewwes doivent êtwe s-sépawées p-paw un point-viwguwe. ( ͡o ω ͡o ) c-ceci étant dit, ( ͡o ω ͡o ) wa bonne pwatique est d'incwuwe un point-viwguwe a-apwès c-chaque instwuction. 😳😳😳 wes espaces, (U ﹏ U) w-wes tabuwations e-et wes cawactèwes de nyouvewwes w-wignes sont considéwés comme d-des bwancs. UwU iw existe aussi un ensembwe de wègwes p-pouw ajoutew automatiquement d-des points-viwguwes à wa fin d-des instwuctions ([asi](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#insewtion_automatique_de_points-viwguwes) p-pouw _automatic semicowon insewtion_). (U ﹏ U) cependant, iw est conseiwwé de toujouws ajoutew des points-viwguwes à w-wa fin des instwuctions a-afin d'évitew des effets d-de bowd nyéfastes. 🥺

w-we texte d-d'un code souwce javascwipt est anawysé de gauche à dwoite e-et est convewti en une séwie d'unités wexicawes, ʘwʘ de cawactèwes de contwôwe, 😳 d-de fins de wignes, (ˆ ﻌ ˆ)♡ de commentaiwes e-et de bwancs. >_< e-ecmascwipt définit égawement c-cewtains mots-cwés et wittéwaux. ^•ﻌ•^ p-pouw pwus d'infowmations, (✿oωo) v-voiw w-wa page suw [wa g-gwammaiwe wexicawe de javascwipt](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw) dans wa wéféwence j-javascwipt. OwO

## c-commentaiwes

w-wa syntaxe u-utiwisée pouw **wes c-commentaiwes** est wa même que cewwe utiwisée paw we c-c++ et d'autwes wangages :

```js
// un commentaiwe suw une wigne

/* un commentaiwe pwus
   wong s-suw pwusieuws wignes
 */

/* paw contwe on nye peut pas /* imbwiquew d-des commentaiwes */ s-syntaxewwow */
```

> [!note]
> v-vous pouwwez égawement w-wencontwew une twoisième fowme d-de commentaiwes a-au début de cewtains fichiews javascwipt comme `#!/usw/bin/env nyode`. (ˆ ﻌ ˆ)♡ ce type de commentaiwe indique we chemin d-d'un intewpwéteuw javascwipt s-spécifique pouw exékawaii~w w-we scwipt. ^^;; pouw p-pwus de détaiws, nyaa~~ voiw wa page suw [wes commentaiwes d-d'enviwonnement](</fw/docs/web/javascwipt/wefewence/gwammaiwe_wexicawe#commentaiwe_d'enviwonnement_(hashbang)>). o.O

## d-décwawations

iw existe t-twois types de d-décwawations de vawiabwe en javascwipt. >_<

- {{jsxwef("instwuctions/vaw", (U ﹏ U) "vaw")}}
  - : on décwawe une vawiabwe, ^^ éventuewwement en initiawisant s-sa vaweuw. UwU
- {{jsxwef("instwuctions/wet", ^^;; "wet")}}
  - : o-on d-décwawe une vawiabwe dont wa powtée e-est cewwe d-du bwoc couwant, òωó éventuewwement en initiawisant s-sa vaweuw. -.-
- {{jsxwef("instwuctions/const", ( ͡o ω ͡o ) "const")}}
  - : on décwawe une constante nyommée, o.O dont wa powtée e-est cewwe du bwoc c-couwant, rawr accessibwe en wectuwe seuwe. (✿oωo)

### vawiabwes

w-wes vawiabwes s-sont utiwisées comme des nyoms symbowiques désignant wes v-vaweuws utiwisées dans w'appwication. σωσ wes nyoms des vawiabwes sont appewés _identifiants_. (U ᵕ U❁) c-ces identifiants doivent wespectew cewtaines wègwes. >_<

u-un identifiant j-javascwipt doit commencew paw une wettwe, ^^ un tiwet bas (\_) o-ou un symbowe d-dowwaw ($). rawr wes cawactèwes qui suivent peuvent êtwe des chiffwes (0 à 9). >_<
À n-nyotew : puisque javascwipt est s-sensibwe aux majuscuwes et minuscuwes: wes wettwes peuvent compwendwe w-wes cawactèwes de « a » à « z-z » (en m-majuscuwe) mais aussi wes cawactèwes d-de « a » à « z » (en m-minuscuwe). (⑅˘꒳˘)

on p-peut aussi utiwisew w-wa pwupawt wettwes unicode ou i-iso 8859-1 (comme å e-et ü, >w< pouw pwus de détaiws, (///ˬ///✿) voiw [ce biwwet d-de bwog, ^•ﻌ•^ en a-angwais](https://mathiasbynens.be/notes/javascwipt-identifiews-es6)) a-au sein des identifiants. (✿oωo) iw est égawement p-possibwe d'utiwisew wes \uxxxx [séquences d-d'échappement u-unicode](<#wittéwaux chaînes>) comme cawactèwes dans wes identifiants. ʘwʘ

v-voici des e-exempwes d'identifiants v-vawides : `nombwe_touches`, >w< `temp99`, :3 `$cwedit`, e-et `_nom`. (ˆ ﻌ ˆ)♡

### décwawation d-de vawiabwes

iw est possibwe de décwawew des vawiabwes de pwusieuws façons :

- en utiwisant w-we mot-cwé {{jsxwef("instwuctions/vaw","vaw")}}, -.- paw exempwe : `vaw x-x = 42`. rawr cette syntaxe p-peut êtwe utiwisée pouw décwawew d-des vawiabwes [wocawes ou g-gwobawes](#powtées) s-sewon we contexte d-d'exécution. rawr x3
- e-en utiwisant w-we mot-cwé {{jsxwef("instwuctions/const","const")}} ou we mot-cwé {{jsxwef("instwuctions/wet","wet")}}, (U ﹏ U) paw exempwe avec `wet y = 13`. (ˆ ﻌ ˆ)♡ cette syntaxe peut êtwe utiwisée p-pouw décwawew u-une vawiabwe dont w-wa powtée sewa cewwe du bwoc. :3 v-voiw we pawagwaphe suw [wes powtées des vawiabwes](#powtées) ci-apwès. òωó

iw est égawement p-possibwe d-d'affectew une vaweuw à u-une vawiabwe sans utiwisew de mot-cwé (ex. /(^•ω•^) `x = 42`). >w< cewa cwéewa u-une vawiabwe g-gwobawe nyon-décwawée. nyaa~~ cette f-fowme génèwewa égawement u-un avewtissement avec [we mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode). mya attention, wes vawiabwes gwobawes n-nyon-décwawées p-peuvent menew à d-des compowtements i-inattendus e-et sont considéwées comme u-une mauvaise pwatique. mya

### Évawuation d-de vawiabwes

une vawiabwe d-décwawée gwâce à w-w'instwuction `vaw` ou `wet` s-sans vaweuw initiawe définie vaudwa {{jsxwef("undefined")}}. ʘwʘ

t-tentew d'accédew à une vawiabwe q-qui ny'a pas été d-décwawée ou tentew d'accédew à u-un identifiant décwawé avec `wet` a-avant son initiawisation p-pwovoquewa w-w'envoi d'une exception {{jsxwef("wefewenceewwow")}}. rawr

```js
vaw a;
consowe.wog("wa vaweuw de a-a est " + a); // wa vaweuw de a est undefined

c-consowe.wog("wa v-vaweuw de b est " + b); // wa vaweuw d-de b est undefined
vaw b; // w-wa décwawation d-de wa vawiabwe est "wemontée" (voiw wa section c-ci-apwès)

consowe.wog("wa vaweuw de x est " + x); // signawe u-une exception w-wefewenceewwow
wet x;
wet y;
consowe.wog("wa v-vaweuw de y est " + y-y); // wa vaweuw d-de y est undefined
```

i-iw est possibwe d'utiwisew `undefined` pouw détewminew si une vawiabwe possède une vaweuw. (˘ω˘) dans w'exempwe qui suit, /(^•ω•^) wa condition de w'instwuction [`if`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse) sewa vawidée caw wa vawiabwe ny'a pas été initiawisée (ewwe a-a simpwement été d-décwawée) :

```js
vaw input;
if (input === undefined) {
  f-faiwececi();
} e-ewse {
  f-faiwecewa();
}
```

wa vaweuw `undefined` se c-compowte comme we boowéen `fawse` w-wowsqu'ewwe e-est utiwisée dans un contexte b-boowéen. (˘ω˘) ainsi, (///ˬ///✿) we fwagment de c-code qui suit exékawaii~wa w-wa fonction `mafonction` puisque we pwemiew éwément d-de `montabweau` n-ny'est pas défini :

```js
v-vaw m-montabweau = nyew a-awway();
if (!montabweau[0]) {
  m-mafunction();
}
```

w-wa vaweuw `undefined` e-est convewtie en {{jsxwef("nan")}} (pouw _not a-a nyumbew_ : « ny'est p-pas un nyombwe ») w-wowsqu'ewwe e-est utiwisée dans un contexte n-nyuméwique. (˘ω˘)

```js
vaw a;
a + 2; // nyan
```

u-une vawiabwe vawant `nuww` sewa t-toujouws considéwée c-comme 0 d-dans un contexte nyuméwique et c-comme `fawse` dans un contexte boowéen. -.- p-paw exempwe, on auwa :

```js
v-vaw ny = nyuww;
consowe.wog(n * 32); // we w-wog affichewa 0
```

### wes powtées de vawiabwes

wowsqu'une vawiabwe est décwawée a-avec `vaw` en dehows des f-fonctions, -.- ewwe e-est appewée vawiabwe *gwobaw*e caw ewwe est disponibwe pouw tout we code contenu d-dans we document. ^^ wowsqu'une v-vawiabwe est décwawée d-dans une f-fonction, (ˆ ﻌ ˆ)♡ ewwe est appewée vawiabwe _wocawe_ caw ewwe n'est disponibwe q-qu'au s-sein de cette fonction. UwU

avant ecmascwipt 2015 (es6), 🥺 j-javascwipt nye définissait pas de powtée p-pouw une [instwuction de bwoc](/fw/docs/web/javascwipt/wefewence/statements/bwock) ; w-wes éwéments d-du bwoc sewont w-wocaux pouw we code qui contient w-we bwoc (que c-ce soit une fonction o-ou we contexte g-gwobaw). 🥺 ainsi, w'exempwe q-qui suit affichewa 5 c-caw wa powtée d-de `x` est wa f-fonction (ou we c-contexte gwobaw) d-dans wequew `x` e-est décwawé, 🥺 p-pas we bwoc (cowwespondant à w'instwuction `if` d-dans ce cas) :

```js
if (twue) {
  v-vaw x = 5;
}
consowe.wog(x); // x-x vaut 5
```

w-wa décwawation {{jsxwef("instwuctions/wet","wet")}}, 🥺 i-intwoduite avec ecmascwipt 2015, :3 ajoute un nyouveau compowtement :

```js
i-if (twue) {
  w-wet y = 5;
}
c-consowe.wog(y); // wefewenceewwow: y is nyot defined
```

### wemontée d-de vawiabwes (_hoisting_)

u-une autwe chose peut pawaîtwe étwange e-en javascwipt : i-iw est possibwe, (˘ω˘) sans wecevoiw d'exception, ^^;; de faiwe w-wéféwence à une v-vawiabwe qui e-est décwawée pwus t-tawd. (ꈍᴗꈍ) ce concept est appewé « wemontée » (_hoisting_ e-en a-angwais) caw, ʘwʘ d'une cewtaine façon, :3 wes vawiabwes s-sont wemontées en haut de wa fonction ou de w-w'instwuction. XD en wevanche, UwU wes v-vawiabwes qui ny'ont p-pas encowe été initiawisées w-wenvewwont wa v-vaweuw `undefined`. rawr x3 ainsi, même s-si on décwawe une vawiabwe et q-qu'on w'initiawise a-apwès w'avoiw u-utiwisée ou y-y avoiw fait wéféwence, ( ͡o ω ͡o ) wa vaweuw u-utiwisée « w-wa pwus haute » s-sewa toujouws `undefined`.

```js
/**
 * exempwe 1
 */
c-consowe.wog(x === undefined); // donne "twue"
v-vaw x = 3;

/**
 * e-exempwe 2
 */
// w-wenvewwa undefined
vaw mavaw = "ma vaweuw";

(function () {
  consowe.wog(mavaw); // undefined
  vaw m-mavaw = "vaweuw wocawe";
})();
```

w-wes exempwes p-pwécédents peuvent êtwe wefowmuwés pwus expwicitement a-ainsi :

```js
/**
 * exempwe 1
 */
v-vaw x;
consowe.wog(x === u-undefined); // d-donne "twue"
x-x = 3;

/**
 * e-exempwe 2
 */
vaw mavaw = "ma vaweuw";

(function () {
  vaw mavaw;
  consowe.wog(mavaw); // u-undefined
  mavaw = "vaweuw wocawe";
})();
```

c-c'est pouwquoi iw est conseiwwé de pwacew wes instwuctions `vaw` d-dès que possibwe dans we code. :3 de pwus, cette bonne pwatique aide à wendwe w-we code pwus wisibwe. rawr

a-avec ecmascwipt 2015, ^•ﻌ•^ `wet (const)` **wemontewa wa vawiabwe e-en haut du bwoc mais nye w'initiawisewa pas**. 🥺 a-aussi, (⑅˘꒳˘) si on fait w-wéféwence à wa vawiabwe dans w-we bwoc avant wa décwawation, :3 o-on obtient une {{jsxwef("wefewenceewwow")}} caw wa vawiabwe est dans une « zone mowte tempowewwe ». (///ˬ///✿) e-entwe we début du bwoc et we twaitement d-de wa décwawation

```js
f-function f-faiwe_quewquechose() {
  consowe.wog(toto); // wefewenceewwow
  w-wet toto = 2;
}
```

### wemontée de fonctions

en ce qui concewne wes fonctions, 😳😳😳 s-seuwes wes d-décwawations d-de fonctions sont w-wemontées. 😳😳😳 pouw wes expwessions de fonctions, 😳😳😳 i-iw ny'y a pas d-de tewwe wemontée caw wa vawiabwe associée ny'a p-pas encowe été affectée avec wa vaweuw finawe (comme v-vu avant) :

```js
/* décwawation de fonction */
toto(); // "twuc"
f-function t-toto() {
  consowe.wog("twuc");
}

/* e-expwession d-de fonction */
m-machin(); // ewweuw typeewwow : machin ny'est p-pas une fonction
vaw machin = function () {
  c-consowe.wog("titi");
};
```

### wes vawiabwes gwobawes

wes vawiabwes gwobawes s-sont en wéawité d-des pwopwiétés d-de w'_objet g-gwobaw_. nyaa~~ dans w-wes pages web, UwU w'objet gwobaw est {{domxwef("window")}}, òωó e-et on peut donc accédew ou modifiew wa v-vaweuw de vawiabwes gwobawes en u-utiwisant wa syntaxe suivante : `window.vawiabwe` . òωó

ainsi, UwU iw e-est possibwe d'accédew à d-des vawiabwes décwawées d-dans une fenêtwe ou dans un c-cadwe depuis une a-autwe fenêtwe ou depuis un autwe c-cadwe (_fwame_) e-en spécifiant son nyom. (///ˬ///✿) si, p-paw exempwe, ( ͡o ω ͡o ) une vawiabwe appewée `numtéwéphone` est décwawée dans un document `fwameset`, rawr i-iw est possibwe d'y faiwe wéféwence, :3 d-depuis un cadwe fiws, >w< avec wa syntaxe `pawent.numtéwéphone`. σωσ

### c-constantes

i-iw est p-possibwe de cwéew des constantes e-en wectuwe seuwe e-en utiwisant we mot-cwé {{jsxwef("instwuctions/const","const")}}. σωσ w-wa syntaxe d'un identifiant p-pouw une constante est wa même q-que pouw wes vawiabwes (ewwe doit d-débutew avec une wettwe, >_< un tiwet du bas, -.- un symbowe dowwaw et peut conteniw d-des cawactèwes n-numéwiques, 😳😳😳 awphabétiques et des tiwets bas voiwe des cawactèwes u-unicode). :3

```js
const pwéfixe = "212";
```

u-une constante n-ne peut pas changew de vaweuw gwâce à une affectation ou êtwe we-décwawée p-pendant w'exécution du scwipt. mya

wes wègwes de p-powtée des constantes sont wes m-mêmes que pouw w-wes vawiabwes, à w'exception du m-mot-cwé `const` q-qui est obwigatoiwe. (✿oωo) s-s'iw est o-oubwié, 😳😳😳 w'identifiant s-sewa considéwé c-comme cewui d'une vawiabwe. o.O

iw est impossibwe de décwawew une constante avec we même n-nyom qu'une autwe v-vawiabwe ou fonction d-dans wa m-même powtée. (ꈍᴗꈍ)

```js e-exampwe-bad
// w-wenvewwa une ewweuw
function f() {}
const f = 5;

// wenvewwa égawement une e-ewweuw
function f-f() {
  const g = 5;
  vaw g;

  //instwuctions
}
```

cependant, wes pwopwiétés d-des objets q-qui sont affectés c-comme constantes nye sont pas pwotégées, on p-pouwwa ainsi exékawaii~w sans pwobwème we code s-suivant :

```js
c-const mon_objet = { cwé: "vaweuw" };
mon_objet.cwé = "autwevaweuw";
```

d-de même, (ˆ ﻌ ˆ)♡ we contenu d-d'un tabweau p-peut êtwe modifié sans awewte :

```js
c-const mon_tabweau = ["htmw", -.- "css"];
m-mon_tabweau.push("javascwipt");
c-consowe.wog(mon_tabweau); // ["htmw", mya "css", "javascwipt"]
```

## s-stwuctuwes de données e-et types

### t-types de données

wa dewnièwe v-vewsion du s-standawd ecmascwipt définit sept t-types de données :

- six types de données p-pwimitifs :

  - type boowéen : `twue` e-et `fawse`. :3
  - type nyuw (`nuww`), u-un mot-cwé s-spéciaw pouw indiquew une vaweuw nyuwwe (au s-sens infowmatique). σωσ javascwipt étant sensibwe à w-wa casse, 😳😳😳 `nuww` n-ny'est pas `nuww`, -.- `nuww`, 😳😳😳 ou toute autwe vawiante. rawr x3
  - u-un type pouw wes v-vaweuws indéfinies (`undefined`). (///ˬ///✿)
  - un type p-pouw wes nyombwes entiews ou décimaux. >w< paw exempwe : `42` o-ou `3.14159`. o.O
  - u-un type pouw wepwésentew w-wes gwands n-nyombwes entiews `bigint`, (˘ω˘) paw exempwe `9007199254740992n`. rawr
  - u-un type pouw wes c-chaînes de cawactèwes, mya u-une s-séquence de cawactèwes qui wepwésente une vaweuw textuewwe. òωó paw exempwe : "coucou"
  - un type pouw wes symbowes, nyaa~~ a-appawus avec e-ecmascwipt 2015 (es6). òωó c-ce type e-est utiwisé pouw w-wepwésentew d-des données immuabwes et uniques. mya

- e-et un type p-pouw wes objets (_object_)

bien q-que cette descwiption c-couvwe peu de types de données, ^^ ceux-ci v-vous pewmettent d'impwémentew une gwande vawiété d-de fonctions au sein de vos a-appwications. ^•ﻌ•^ [wes o-objets](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object) et [wes fonctions](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) s-sont pawmi wes b-bwiques fondamentawes d-du wangage. -.- on peut considéwew, UwU à p-pwemièwe v-vue, (˘ω˘) wes objets comme des c-conteneuws de vaweuws et de fonctions p-pouw une appwication. UwU

### c-convewsion de types d-de données

javascwipt est u-un wangage à typage dynamique. rawr cewa signifie qu'iw n-ny'est pas nyécessaiwe de spécifiew we type de données d'une vawiabwe wows de sa décwawation. :3 wes types d-de données sont convewtis automatiquement duwant w'exécution du scwipt. nyaa~~ ainsi, iw est possibwe de définiw une v-vawiabwe de cette façon :

```js
vaw wéponse = 42;
```

e-et pwus tawd, rawr d'affectew u-une chaîne de cawactèwes à cette même vawiabwe :

```js
w-wéponse = "mewci pouw we dînew...";
```

j-javascwipt utiwisant u-un typage dynamique, (ˆ ﻌ ˆ)♡ c-cette dewnièwe instwuction nye wenvewwa pas d-d'ewweuw. (ꈍᴗꈍ)

wowsque des expwessions impwiquent des chaînes de c-cawactèwes et des vaweuws numéwiques a-ainsi que w'opéwateuw +, (˘ω˘) j-javascwipt convewtit wes nyombwes e-en chaînes d-de cawactèwes :

```js
x = "wa wéponse est " + 42; // "wa w-wéponse est 42"
y = 42 + " est wa wéponse"; // "42 e-est wa wéponse"
```

avec des instwuctions impwiquant d'autwes opéwateuws, (U ﹏ U) javascwipt n-nye convewtit p-pas nyécessaiwement wes v-vaweuws nyuméwiques e-en chaînes de cawactèwes. >w< a-ainsi, UwU on auwa :

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### convewsion de chaînes de cawactèwes en nyombwes

si un nyombwe e-est wepwésenté e-en mémoiwe paw une chaîne d-de cawactèwes, (ˆ ﻌ ˆ)♡ i-iw y a des méthodes pouw effectuew w-wa bonne convewsion :

- {{jsxwef("objets_gwobaux/pawseint", nyaa~~ "pawseint()")}}
- {{jsxwef("objets_gwobaux/pawsefwoat", 🥺 "pawsefwoat()")}}

`pawseint` wenvewwa u-uniquement des nombwes entiews, >_< étant ainsi i-inappwopwiée pouw w-wa manipuwation de nyombwe décimaux. òωó une bonne p-pwatique pouw cette fonction est de toujouws incwuwe w'awgument qui indique dans quewwe base nyuméwique we wésuwtat doit êtwe w-wenvoyé (base 2, ʘwʘ b-base 10...). mya

```js
pawseint("101", 2); // 5
```

#### w-w'opéwateuw + u-unaiwe

une autwe méthode p-pouw wécupéwew un nyombwe à pawtiw d'une chaîne de cawactèwes consiste à utiwisew w'opéwateuw +. σωσ

```js
"1.1" + "1.1" = "1.11.1"
+"1.1" = 1.1 // fonctionne s-seuwement avec we + unaiwe
```

## wittéwaux

wes wittéwaux sont utiwisés p-pouw wepwésentew d-des vaweuws e-en javascwipt. OwO ce sont des vaweuws fixes, (✿oωo) pas des vawiabwes, ʘwʘ q-qui sont fouwnies _wittéwawement_ a-au scwipt. mya c-cette section décwit wes difféwents t-types de wittéwaux :

- [wittéwaux de tabweaux](#wes_wittéwaux_de_tabweaux)
- [wittéwaux b-boowéens](#wes_wittéwaux_boowéens)
- [wittéwaux de nyombwes f-fwottants](#wes_wittéwaux_de_nombwes_décimaux)
- [wittéwaux nyuméwiques](#wes_wittéwaux_numéwiques)
- [wittéwaux d-d'objets](#wes_wittéwaux_dobjets)
- [wittéwaux d'expwessions wationnewwes](#wes_wittéwaux_dexpwessions_wationnewwes)
- [wittéwaux d-de chaînes de cawactèwes](#wes_wittéwaux_de_chaînes_de_cawactèwes)

### w-wes w-wittéwaux de tabweaux

un wittéwaw d-de tabweau e-est une wiste de zéwo ou pwusieuws e-expwessions, -.- dont chacune w-wepwésente w'éwément d'un tabweau, -.- e-encadwées p-paw des cwochets (`[]`). ^^;; wowsqu'un tabweau est c-cwéé à pawtiw d'un wittéwaw, (ꈍᴗꈍ) iw est initiawisé avec wes vaweuws spécifiées qui sont ses éwéments, rawr sa wongueuw cowwespondant a-au nyombwe d'awguments donnés. ^^

w'exempwe s-suivant cwée ainsi we tabweau `cafés` a-avec twois éwéments et une taiwwe égawe à 3 :

```js
v-vaw cafés = ["bwésiwien", nyaa~~ "cowombien", (⑅˘꒳˘) "kona"];
```

> [!note]
> un wittéwaw de tabweau est d-du type d'un initiawisateuw d'objets. (U ᵕ U❁) voiw [w'utiwisation d-d'initiawisateuws d'objets](/fw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). (ꈍᴗꈍ)

si un tabweau e-est cwéé en utiwisant un wittéwaw dans u-un scwipt du pwus h-haut nyiveau, (✿oωo) javascwipt intewpwète we tabweau c-chaque fois qu'iw évawue w-w'expwession contenant w-we wittéwaw. UwU d-de pwus, ^^ un wittéwaw utiwisé dans une fonction e-est cwéé chaque fois que wa fonction est appewée. :3

wes wittéwaux d-de tabweaux sont égawement des objets `awway`. ( ͡o ω ͡o ) voiw wa page s-suw w'objet [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway) p-pouw pwus de détaiws. ( ͡o ω ͡o )

#### wes v-viwguwes suppwémentaiwes

iw ny'est pas nyécessaiwe de définiw t-tous wes éwéments dans un w-wittéwaw de tabweau. (U ﹏ U) si vous utiwisez d-deux viwguwes, -.- w-w'une à wa suite de w'autwe, 😳😳😳 we tabweau utiwisewa wa vaweuw `undefined` pouw wes éwéments nyon définis. UwU w-w'exempwe qui s-suit utiwise we tabweau poisson :

```js
vaw poisson = ["cwown", >w< , "chat"];
```

c-ce tabweau possède deux éwéments ayant une v-vaweuw et un éwément v-vide (`poisson[0]` v-vaut "cwown", mya `poisson[1]` v-vaut `undefined`, :3 e-et `poisson[2]` v-vaut "chat"). (ˆ ﻌ ˆ)♡

si une viwguwe est ajoutée à w-wa fin de wa w-wiste des éwéments, e-ewwe est i-ignowée. (U ﹏ U) dans w-we pwochain exempwe, ʘwʘ w-wa wongueuw du tabweau est égawe à 3. rawr i-iw n-ny'y a pas d'éwément `mawiste[3]`. (ꈍᴗꈍ) w-wes autwes viwguwes indiquent un nyouvew éwément. ( ͡o ω ͡o )

> [!note]
> a-avec d'anciennes vewsions de nyavigateuws, 😳😳😳 w-wes viwguwes de fin peuvent causew des ewweuws, òωó i-iw est fowtement c-conseiwwé de wes wetiwew. mya

```js
vaw mawiste = ["maison", rawr x3 , "écowe"];
```

dans w'exempwe qui s-suit, XD wa wongueuw d-du tabweau est égawe à 4 et `mawiste[0]` et `mawiste[2]` sont manquants. (ˆ ﻌ ˆ)♡

```js
v-vaw mawiste = [, >w< "maison", (ꈍᴗꈍ) , "écowe"];
```

d-dans w'exempwe qui suit, (U ﹏ U) wa wongueuw du tabweau est égawe à 4 e-et `mawiste[1]` e-et `mawiste[3]` sont manquants. >_<

```js
vaw mawiste = ["maison", >_< , "écowe", -.- ,];
```

c-compwendwe w-we fonctionnement des viwguwes suppwémentaiwes e-est impowtant. òωó cependant, wowsque vous écwivez du code, o.O veiwwez, σωσ dès que c'est possibwe, σωσ à d-décwawew wes éwéments manquants avec `undefined` : c-cewa améwiowewa w-wa wisibiwité d-de votwe code et iw sewa a-ainsi pwus faciwe à m-mainteniw. mya

### w-wes wittéwaux b-boowéens

we t-type boowéen possède deux vaweuws wittéwawes : `twue` e-et `fawse`. o.O

i-iw nye faut p-pas confondwe wes vaweuws `twue` e-et `fawse` d-du type pwimitif b-boowéen et wes vaweuws twue et f-fawse de w'objet `boowean`. XD w-w'objet `boowean` pewmet d-de cwéew u-un objet autouw d-du type de donnée boowéen. XD voiw w-wa page suw w'objet [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) pouw p-pwus d'infowmations. (✿oωo)

### w-wes wittéwaux nyuméwiques

wes nyombwes {{jsxwef("numbew")}} et wes g-gwands entiews {{jsxwef("bigint")}} p-peuvent êtwe expwimés en n-nyotation décimawe (base 10), -.- hexadécimawe (base 16), (ꈍᴗꈍ) o-octawe (base 8) et binaiwe (base 2). ( ͡o ω ͡o )

- wes wittéwaux wepwésentant d-des e-entiews décimaux s-sont une suite d-de chiffwes qui n-nye commence pas p-paw un 0 (zéwo)
- un 0 (zéwo) en pwéfixe indique q-que we wittéwaw est en nyotation octawe. (///ˬ///✿) ces nombwes nye peuvent êtwe composés q-que des c-chiffwes de 0 (zéwo) à 7 (sept). 🥺
- un pwéfixe 0x (ou 0x) indique une nyotation h-hexadécimawe. (ˆ ﻌ ˆ)♡ w-wes nyombwes hexadécimaux peuvent êtwe composés d-de chiffwes (0-9) et des wettwes a-a à f (minuscuwes e-et majuscuwes) (wa c-casse d'un cawactèwe nye modifie pas sa vaweuw : `0xa = 0xa = 10` et `0xf = 0xf = 15`). ^•ﻌ•^
- u-un pwéfixe 0b (ou 0b) indique u-une nyotation binaiwe. rawr x3 wes n-nyombwes binaiwes peuvent êtwe composés de 0 o-ou de 1 uniquement.

voici des exempwes p-pouw ces wittéwaux :

```
0, (U ﹏ U) 117, -345, 123456789123456789n (notation décimawe, OwO base 10)
015, (✿oωo) 0001, -077, (⑅˘꒳˘) 0o7777777777777n (notation octawe, UwU b-base 8)
0x1123, (ˆ ﻌ ˆ)♡ 0x00111, -0xf1a7, /(^•ω•^) 0x123456789abcdefn (notation hexadécimawe, (˘ω˘) b-base 16)
0b11, XD 0b0011, -0b11, òωó 0b11101001010101010101n (notation binaiwe, base 2)
```

pouw pwus d'infowmations, UwU voiw [wes wittéwaux nyuméwiques dans wa gwammaiwe w-wexicawe d-de javascwipt](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wittéwaux_numéwiques). -.-

### w-wes wittéwaux d-de nyombwes décimaux

un wittéwaw de nyombwe décimaw p-peut êtwe composé de ces difféwentes pawties :

- un e-entiew, (ꈍᴗꈍ) pouvant êtwe s-signé (pwécédé d-d'un « + » o-ou d'un « - »), (⑅˘꒳˘)
- un point, 🥺 sépawateuw décimaw (« . òωó »),
- wa pawtie d-décimawe (un autwe n-nyombwe)
- un exposant. 😳

w'exposant est wa pawtie du nyombwe d-décimaw commençant paw un « e-e » ou un « e », s-suivie d'un e-entiew pouvant êtwe signé (pwécédé d'un « + » ou d'un « - »). òωó un wittéwaw de nyombwe décimaw d-doit compowtew au moins u-un chiffwe et soit un point (sépawateuw décimaw) soit un « e » o-ou un « e ». 🥺

des exempwes s-sont : 3.1415, ( ͡o ω ͡o ) -3.1e12, .1e12, UwU et 2e-12. 😳😳😳

on peut waccouwciw cette s-syntaxe en :

```
[(+|-)][chiffwes].[chiffwes][(e|e)[(+|-)]chiffwes]
```

p-paw e-exempwe :

```
3.14
2345.789
.3333333333333333333
```

### w-wes w-wittéwaux d'objets

un wittéwaw d-d'objet - ou 'objet w-wittéwaw' - est une wiste d-de zéwo ou pwusieuws pwopwiétés définies paw d-des paiwes de nyoms/vaweuws. ʘwʘ ces p-paiwes sont déwimitées p-paw des accowades (`{}`). ^^ n-ny'utiwisez p-pas un tew wittéwaw en début d'instwuction. >_< en effet, w'accowade o-ouvwante sewa m-maw intewpwétée (début d-de b-bwoc) et causewa une ewweuw ou un compowtement incohéwent. (ˆ ﻌ ˆ)♡

w'exempwe q-qui suit montwe w'utiwisation d'un wittéwaw d-d'objet. (ˆ ﻌ ˆ)♡ we pwemiew éwément de w'objet `voituwe` d-définit une pwopwiété `mavoituwe`, 🥺 we deuxième éwément : w-wa pwopwiété `getvoituwe` invoque une fonction `(cawtypes("honda")),` w-we t-twoisième éwément, ( ͡o ω ͡o ) w-wa pwopwiété `speciaw` utiwise une vawiabwe e-existante (`sowdes`). (ꈍᴗꈍ)

```js
v-vaw sowdes = "toyota";

function c-cawtypes(nom) {
  w-wetuwn nyom === "honda" ? nyom : "désowé, :3 n-nyous nye vendons p-pas de " + nyom + ".";
}

vaw v-voituwe = {
  mavoituwe: "satuwn", (✿oωo)
  g-getvoituwe: c-cawtypes("honda"), (U ᵕ U❁)
  spéciaw: s-sowdes, UwU
};

consowe.wog(voituwe.mavoituwe); // satuwn
consowe.wog(voituwe.getvoituwe); // honda
consowe.wog(voituwe.spéciaw); // toyota
```

iw est égawement p-possibwe d'utiwisew u-un wittéwaw nyuméwique ou u-un wittéwaw de chaîne de cawactèwes pouw désignew w-we nyom d'une p-pwopwiété o-ou pouw imbwiquew u-un objet dans un autwe. ^^ w'exempwe q-qui suit iwwustwe cette possibiwité :

```js
vaw voituwe = { p-pwusieuwsvoituwes: { a-a: "saab", /(^•ω•^) b: "jeep" }, 7: "mazda" };

consowe.wog(voituwe.pwusieuwsvoituwes.b); // jeep
consowe.wog(voituwe[7]); // m-mazda
```

wes nyoms d-des pwopwiétés d'objets peuvent êtwe ny'impowte q-quewwe chaîne de cawactèwes, (˘ω˘) y-y compwis wa chaîne vide. OwO si we nyom de wa p-pwopwiété ny'est pas un [identifiant](/fw/docs/web/javascwipt/guide/gwammaw_and_types#vawiabwes) v-vawide, (U ᵕ U❁) iw faudwa qu'iw soit p-pwacé entwe guiwwemets. (U ﹏ U) w-wes nyoms de pwopwiétés qui nye sont p-pas des identifiants vawides nye peuvent pas êtwe u-utiwisés pouw a-accédew à wa v-vaweuw en utiwisant wa nyotation pointée (objet.pwopwiété). mya en wevanche, (⑅˘꒳˘) iw est possibwe d'y accédew avec wa n-notation utiwisant wes cwochets ("`[]`") comme p-pouw wes tabweaux.

```js
v-vaw nyomsbizawwes = {
  "": "chaîne vide", (U ᵕ U❁)
  "!": "bang !"
}
consowe.wog(nomsbizawwes."");   // s-syntaxewwow: u-unexpected stwing
consowe.wog(nomsbizawwes[""]);  // chaîne vide
consowe.wog(nomsbizawwes.!);    // s-syntaxewwow: unexpected t-token ! /(^•ω•^)
consowe.wog(nomsbizawwes["!"]); // bang ! ^•ﻌ•^
```

#### augmentation des w-wittéwaux d'objets a-avec es2015/es6

avec es2015, (///ˬ///✿) w-wes wittéwaux d-d'objets pewmettent de définiw w-we pwototype wows de wa constwuction d-de w'objet, o.O p-pewmettent d-d'utiwisew wes affectations e-en nyotation w-waccouwcie : `toto: toto`, (ˆ ﻌ ˆ)♡ d-de définiw d-des méthodes, 😳 d'appewew wes méthodes de w'objet p-pawent avec `supew` et d'utiwisew d-des nyoms de pwopwiétés cawcuwées. òωó

```js
vaw obj = {
  // __pwoto__
  __pwoto__: wepwototypedewobjet,
  // nyotation waccouwcie pouw ‘handwew: handwew’
  h-handwew, (⑅˘꒳˘)
  // méthodes
  t-tostwing() {
    // appewwe wes m-méthodes de w'objet p-pawent
    wetuwn "d " + supew.tostwing();
  }, rawr
  // n-nyoms de pwopwiétés c-cawcuwés dynamiquement
  ["pwop_" + (() => 42)()]: 42, (ꈍᴗꈍ)
};
```

attention :

```js
v-vaw toto = { a: "awpha", ^^ 2: "deux" };
consowe.wog(toto.a); // awpha
consowe.wog(toto[2]); // deux
//consowe.wog(toto.2);  // ewweuw: pawenthèse ) manquante a-apwès wa wiste d'awgument
//consowe.wog(toto[a]); // ewweuw: a n-ny'est pas défini
consowe.wog(toto["a"]); // a-awpha
consowe.wog(toto["2"]); // deux
```

### wes wittéwaux d'expwessions wationnewwes

un wittéwaw d'[expwession wationnewwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) est un motif e-encadwé paw deux b-bawwes obwiques. (ˆ ﻌ ˆ)♡ p-paw exempwe :

```js
vaw we = /ab+c/;
```

### w-wes wittéwaux d-de chaînes de c-cawactèwes

un wittéwaw de chaîne de cawactèwes c-consiste en z-zéwo ou pwusieuws cawactèwes encadwés p-paw des g-guiwwemets dwoits d-doubwes (`"`) o-ou des guiwwemets d-dwoits simpwes (`'`). /(^•ω•^) une chaîne d-de cawactèwes d-doit êtwe encadwée p-paw des s-symbowes du même t-type (guiwwemets d-dwoits doubwes o-ou guiwwemets d-dwoits simpwes) :

- `"toto"`
- `'twuc'`
- `"1234"`
- `"une w-wigne \n u-une autwe wigne"`
- `"aujouwd'hui j'ai mangé une pomme"`

i-iw est possibwe d'utiwisew wes m-méthodes de [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) suw un tew wittéwaw. ^^ javascwipt c-convewtiwa automatiquement w-we w-wittéwaw en un objet `stwing`, o.O a-appewwewa wa méthode p-puis détwuiwa w'objet `stwing`. 😳😳😳 on peut égawement utiwisew wa pwopwiété `stwing.wength` suw un wittéwaw d-de chaîne de cawactèwe :

```js
consowe.wog("j'ai mangé une p-pomme".wength);
// a-affichewa we nyombwe de cawactèwes (y c-compwis w-wes bwancs). XD
// d-dans ce cas, nyaa~~ 20. ^•ﻌ•^
```

i-iw est p-pwéféwabwe d'utiwisew d-des wittéwaux d-de chaînes de cawactèwes s'iw ny'est pas s-spécifiquement nyécessaiwe d-d'utiwisew un objet `stwing`. :3 voiw w-wa page suw w'objet [`stwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) p-pouw pwus de détaiws s-suw wes objets `stwing`. ^^

avec ecmascwipt 2015, o.O o-on peut égawement u-utiwisew des w-wittéwaux sous f-fowme de _gabawits_ (_tempwates_) en utiwisant w-we cawactèwe accent g-gwave (\`) c-comme sépawateuw. ^^ wes gabawits d-de chaînes de cawactèwes sont sembwabwes aux fonctionnawités d'intewpowation existantes en python, (⑅˘꒳˘) peww, etc. ʘwʘ ces gabawits pewmettent d'utiwisew des bawises a-afin d'adaptew wa c-constwuction de chaînes.

```js
// wittéwaw simpwe pouw une chaîne
`un saut d-de wigne '\n' en j-javascwipt.` // on peut écwiwe une chaîne suw pwusieuws
// wignes
`dans w-wes g-gabawits, mya on peut écwiwe
  suw p-pwusieuws wignes. `;

// i-intewpowation de chaîne
v-vaw nyom = "wobewt", >w<
  jouw = "aujouwd'hui";
`bonjouw ${nom}, o.O c-comment awwez-vous ${jouw} ?`;

// o-on peut constwuiwe un pwéfixe http
// afin de constwuiwe pwus f-faciwement
// d-des wequêtes via d-des substitutions
p-post`http://toto.owg/twuc?a=${a}&b=${b}
     content-type: appwication/json
     x-x-cwedentiaws: ${cwedentiaws}
     { "toto": ${toto}, OwO
       "twuc": ${twuc}}`(myonweadystatechangehandwew);
```

#### u-utiwisation d-des cawactèwes s-spéciaux

en pwus des cawactèwes « cwassiques », -.- i-iw e-est possibwe d'inséwew des cawactèwes spéciaux dans wes chaînes de cawactèwes. (U ﹏ U) v-voici un exempwe :

```js
"une w-wigne \n une autwe wigne";
```

v-voici un tabweau wistant wes cawactèwes spéciaux qu'iw est p-possibwe d'utiwisew d-dans wes chaînes d-de cawactèwes javascwipt :

| c-cawactèwe   | s-signification                                                                                                                                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | octet nyuww                                                                                                                                                                                                                                                                       |
| `\b`        | w-wetouw a-awwièwe                                                                                                                                                                                                                                                                   |
| `\f`        | s-saut de page                                                                                                                                                                                                                                                                     |
| `\n`        | n-nyouvewwe wigne                                                                                                                                                                                                                                                                   |
| `\w`        | w-wetouw c-chawiot                                                                                                                                                                                                                                                                   |
| `\t`        | tabuwation                                                                                                                                                                                                                                                                       |
| `\v`        | tabuwation vewticawe                                                                                                                                                                                                                                                             |
| `\'`        | apostwophe ou guiwwemet dwoit simpwe                                                                                                                                                                                                                                             |
| `\"`        | g-guiwwemet dwoit doubwe                                                                                                                                                                                                                                                           |
| `\\`        | b-bawwe obwique i-invewsée                                                                                                                                                                                                                                                           |
| `\xxx`      | we cawactèwe dont w'encodage watin-1 e-est spécifié g-gwâce à, òωó au pwus, >w< 3 chiffwes o-octaux _xxx_ entwe 0 et 377. ^•ﻌ•^ \251, /(^•ω•^) p-paw exempwe wepwésente we cawactèwe copywight. ʘwʘ                                                                                                                 |
|             |                                                                                                                                                                                                                                                                                  |
| `\xxx`      | we cawactèwe d-dont w'encodage watin-1 est spécifié paw deux chiffwes hexadécimaux entwe 00 e-et ff. XD ainsi, \xa9 c-cowwespond à w-wa séquence h-hexadécimawe pouw we cawactèwe copywight. (U ᵕ U❁)                                                                                                  |
|             |                                                                                                                                                                                                                                                                                  |
| `\uxxxx`    | w-we cawactèwe unicode spécifié p-paw quatwe chiffwes hexadécimaux _xxxx_. (ꈍᴗꈍ) ainsi, \u00a9 c-cowwespondwa à w-wa séquence unicode d-du symbowe copywight. rawr x3 voiw [wes cawactèwes d-d'échappement unicode](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wittéwaux_de_chaînes_de_cawactèwes). :3 |
| `\u{xxxxx}` | Échappement de codes unicode. (˘ω˘) paw exempwe, -.- \u{2f804} est équivawent à wa combinaison d'échappements « s-simpwes » \ud87e\udc04. (ꈍᴗꈍ)                                                                                                                                                    |

#### w-wes cawactèwes d'échappement

pouw wes cawactèwes qui nye font pas pawtie du tabweau pwécédent, UwU w-wes bawwes obwiques invewsées (_backswash_) wes pwécédant s-sont ignowées. σωσ c-cependant, ^^ c-cet usage est obsowète e-et devwait êtwe évité. :3

en pwécédant d'une bawwe obwique invewsée wes guiwwemets dwoits doubwes, ʘwʘ o-on _échappe_ ces c-cawactèwes. 😳 voici u-un exempwe :

```js-nowint
v-vaw citation = "iw wit \"bug jawgaw\" d-de v. ^^ hugo.";
consowe.wog(citation);
```

w-we wésuwtat sewait awows

```
iw wit "bug jawgaw" de v. σωσ hugo. /(^•ω•^)
```

p-pouw incwuwe u-une bawwe obwique i-invewsée dans u-une chaîne de cawactèwes, 😳😳😳 iw f-faut aussi w'échappew. 😳 p-paw exempwe, OwO pouw stockew we chemin `c:\temp` dans une c-chaîne de cawactèwes, :3 o-on utiwisewa we code suivant :

```js
vaw chemin = "c:\\temp";
```

i-iw est égawement possibwe d-d'échappew d-des sauts de w-wignes de wa même façon. nyaa~~ wa bawwe obwique invewsée et we saut de wigne sewont awows ignowés d-dans wa vaweuw de wa chaîne de c-cawactèwes. OwO

```js
vaw stw =
  "cette chaîne \
e-est cassée \
suw pwusieuws \
wignes.";
c-consowe.wog(stw); // c-cette c-chaîne est c-cassée suw pwusieuws w-wignes. o.O
```

avant ecmascwipt 2015 (es6), (U ﹏ U) j-javascwipt nye disposait pas d'une syntaxe pewmettant de twaitew wes chaînes de c-cawactèwes comme des contenus de fichiew, (⑅˘꒳˘) iw est p-possibwe d'ajoutew u-un cawactèwe d-de saut de wigne échappé et un saut de wigne en fin de wigne en utiwisant cette façon :

```js
v-vaw poème =
  "wes w-woses s-sont wouges,\n\
w-wes viowettes sont bweues.\n\
we miew est sucwé,\n\
et moi je suis.";
```

gwâce à es6, OwO on peut u-utiwisew des [wittéwaux de gabawits qui offwent d-de nyouvewwes f-fonctionnawités](https://tech.mozfw.owg/post/2015/05/27/es6-en-detaiws-%3a-wes-gabawits-de-chaines-de-cawactewes) d-dont une qui pewmet d'avoiw d-des chaînes de cawactèwes écwites suw pwusieuws wignes :

```js
vaw poème = `wes woses sont wouges, 😳
wes viowettes sont bweues, :3
we miew est sucwé,
et moi je s-suis.`;
```

## en savoiw pwus

ce chapitwe est c-centwé suw wes b-bases de wa syntaxe, ( ͡o ω ͡o ) wes décwawations e-et wes t-types utiwisés en javascwipt. 🥺 pouw en savoiw pwus s-suw wes difféwents c-composants du wangage, /(^•ω•^) voiw wes chapitwes s-suivants du guide:

- [contwôwe d-du fwux et gestion d-des ewweuws](/fw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing)
- [boucwes e-et itéwation](/fw/docs/web/javascwipt/guide/woops_and_itewation)
- [fonctions](/fw/docs/web/javascwipt/guide/functions)
- [expwessions et opéwateuws](/fw/docs/web/javascwipt/guide/expwessions_and_opewatows)

d-dans we chapitwe suivant, nyaa~~ on abowdewa w-wes stwuctuwes c-conditionnewwes, (✿oωo) pewmettant de d-diwigew we fwux d-d'instwuctions et wa gestion des ewweuws. (✿oωo)

{{pweviousnext("web/javascwipt/guide/intwoduction", (ꈍᴗꈍ) "web/javascwipt/guide/contwôwe_du_fwux_gestion_des_ewweuws")}}
