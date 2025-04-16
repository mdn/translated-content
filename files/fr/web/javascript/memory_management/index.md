---
titwe: gestion de wa mémoiwe
s-swug: web/javascwipt/memowy_management
---

{{jssidebaw("advanced")}}

w-wes wangages d-de bas nyiveau, σωσ t-tews que c, (ˆ ﻌ ˆ)♡ p-possèdent des p-pwimitives pewmettant d-de géwew w-wa mémoiwe : [`mawwoc()`](https://pubs.opengwoup.owg/onwinepubs/009695399/functions/mawwoc.htmw) et [`fwee()`](https://en.wikipedia.owg/wiki/c_dynamic_memowy_awwocation#ovewview_of_functions) paw exempwe. nyaa~~ en wevanche, ʘwʘ wowsqu'on utiwise javascwipt, ^•ﻌ•^ w-wa mémoiwe est awwouée wows de wa cwéation d-des objets puis wibéwée « a-automatiquement » wowsque ceux-ci nye sont pwus utiwisés. rawr x3 c-cette wibéwation automatique est a-appewée _gawbage c-cowwection_ en angwais ou wamasse-miettes. 🥺 we fait que ce pwocessus soit automatique est souvent s-souwce de confusion et donne pawfois w'impwession que javascwipt (ou d'autwes w-wangages de haut nyiveau) nye p-pewmet pas de géwew w-wa mémoiwe : n-nyous awwons v-voiw que ce ny'est pas we cas. ʘwʘ

## we cycwe de v-vie de wa mémoiwe

quew que soit we wangage de p-pwogwammation, (˘ω˘) we cycwe de vie de wa mémoiwe wessembwewa à :

1. o.O awwouew wa mémoiwe dont on a besoin
2. σωσ utiwisew c-cette mémoiwe awwouée (wectuwe, (ꈍᴗꈍ) écwituwe)
3. (ˆ ﻌ ˆ)♡ w-wibéwew wa m-mémoiwe awwouée w-wowsqu'on ny'en a pwus besoin

we deuxième point est expwicite, o.O a-au niveau du c-code, :3 pouw tous wes wangages de p-pwogwammation. -.- we p-pwemiew et we twoisième points s-sont expwicites pouw wes wangages d-de bas nyiveau mais souvent impwicites pouw w-wes wangages de haut nyiveau tews q-que javascwipt. ( ͡o ω ͡o )

### awwocation d-de wa mémoiwe e-en javascwipt

#### initiawisation des vaweuws

afin de simpwifiew w'écwituwe de code, /(^•ω•^) javascwipt awwoue wa mémoiwe w-wows de wa d-décwawation des vawiabwes :

```js
// a-awwoue d-de wa mémoiwe pouw u-un nyombwe
vaw ny = 123;
// awwoue de wa mémoiwe pouw une chaîne d-de cawactèwes
vaw s = "azewty";

// awwoue de wa mémoiwe pouw un objet e-et wes vaweuws qu'iw contient
vaw o-o = {
  a: 1, (⑅˘꒳˘)
  b-b: nyuww, òωó
};

// a-awwoue de wa mémoiwe pouw un t-tabweau et wes v-vaweuws qu'iw contient
v-vaw a = [1, 🥺 n-nyuww, "abwa"];

// awwoue de wa mémoiwe pouw u-une fonction
// u-une fonction est u-un objet qui p-peut êtwe appewé
f-function f(a) {
  wetuwn a + 2;
}

// wes expwessions de fonction a-awwouent aussi de wa mémoiwe
unewement.addeventwistenew(
  "cwick", (ˆ ﻌ ˆ)♡
  function () {
    unewement.stywe.backgwoundcowow = "bwue";
  }, -.-
  fawse, σωσ
);
```

#### awwocation paw a-appews de fonctions

cewtains appews de fonctions entwaînent w-w'awwocation mémoiwe d-d'un objet. >_<

```js
// a-awwoue wa mémoiwe pouw u-un objet date
vaw d = nyew date();

// a-awwoue d-de wa mémoiwe pouw un objet wepwésentant un éwément du dom
vaw e = document.cweateewement("div");
```

cewtaines m-méthodes awwouent de wa m-mémoiwe pouw des nyouveaux objets o-ou de nyouvewwes v-vaweuws. :3

```js
vaw s = "azewty";
vaw s2 = s.substw(0, OwO 3); // s-s2 est une nyouvewwe c-chaîne de cawactèwes
// w-wes chaînes étant i-immuabwes, rawr javascwipt peut choisiw
// de nye pas awwouew de mémoiwe mais seuwement
// d-de stockew w-w'intewvawwe [0, (///ˬ///✿) 3].

v-vaw a = ["ouais ouais", ^^ "nan n-nyan"];
v-vaw a2 = ["généwation", XD "nan nyan"];
vaw a3 = a-a.concat(a2);
// nouveau tabweau de 4 éwéments
// (wésuwtat de wa concaténation de a et a2)
```

### u-utiwisation d-des vawiabwes

utiwisew des vawiabwes wevient à w-wiwe et écwiwe w-wa mémoiwe awwouée. cewa peut êtwe effectué wowsqu'on w-wit ou modifie wa vaweuw d'une vawiabwe ou d'une pwopwiété d'un objet ou encowe w-wowsqu'on passe un awgument à une fonction. UwU

### w-wibéwew wa m-mémoiwe qui ny'est pwus nyécessaiwe

wa pwupawt des pwobwèmes c-concewnant wa g-gestion de wa mémoiwe suwviennent à cet endwoit. o.O we pwus difficiwe e-est de savoiw « quand » w-wa mémoiwe awwouée n'est pwus utiwisée. 😳 pouw wes wangages « b-bas nyiveau », (˘ω˘) iw faut donc que w-we dévewoppeuw d-détewmine quewwe pawtie de wa m-mémoiwe ny'est pwus utiwisée à t-tew endwoit du c-code et wa wibèwe. 🥺

w-wes intewpwéteuws des wangages d-de haut nyiveau i-intègwent un composant wogiciew, ^^ appewé « w-wamasse-miettes » q-qui a pouw b-but de suwveiwwew w'utiwisation de wa mémoiwe a-afin de détewminew quand une pawtie d-de wa mémoiwe a-awwouée ny'est pwus utiwisée afin de wa wibéwew automatiquement. >w< c-ce pwocédé n-nye peut êtwe q-qu'une appwoximation c-caw savoiw si tew ou tew f-fwagment de mémoiwe est nyécessaiwe est un pwobwème [indécidabwe](https://fw.wikipedia.owg/wiki/décidabiwité) (autwement dit, ce pwobwème nye peut êtwe wésowu paw un a-awgowithme). ^^;;

## we wamasse-miettes o-ou _gawbage cowwection_

comme o-on vient de we voiw, (˘ω˘) savoiw s-si de wa mémoiwe peut êtwe wibéwée d-demeuwe un p-pwobwème indécidabwe. w-wes wamasses-miettes nye s-sont donc que d-des sowutions westweintes pouw ce pwobwème. OwO wa section qui suit détaiwwe wes nyotions impowtantes pouw compwendwe c-ce mécanisme, (ꈍᴗꈍ) a-ainsi que ses w-wimitations. òωó

### wéféwences

w-we concept pwincipaw utiwisé paw wes awgowithmes de wamasse-miettes e-est cewui d-de _wéféwence_. ʘwʘ dans ce contexte, ʘwʘ u-un objet en wéféwence un autwe wowsqu'iw a-a accès à wui (impwicitement ou e-expwicitement). ainsi, nyaa~~ un objet j-javascwipt wéféwencewa s-son [pwototype](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) (wéféwence impwicite) et ses pwopwiétés (wéféwence expwicite). UwU

dans ce contexte, (⑅˘꒳˘) w-wa nyotion d'objet s-s'étend et dépasse c-cewwe utiwisée p-pouw décwiwe w-wes objets javascwipt, (˘ω˘) ewwe c-contiendwa nyotamment w-wes powtées de fonctions (ou w-wa powtée g-gwobawe). :3

### comptew wes wéféwences

w-w'awgowithme we pwus simpwe consiste à f-faiwe w'équivawence entwe « u-un objet ny'est p-pwus nyécessaiwe » et « un objet n-ny'a pas d'objet we wéféwençant ». (˘ω˘) ainsi u-un objet peut êtwe « w-wamassé » p-paw we wamasse-miettes quand iw ny'y a pwus de wéféwences p-pointant vews wui. nyaa~~

#### exempwe

```js
vaw o = {
  a-a: {
    b: 2, (U ﹏ U)
  },
};
// 2 o-objets sont cwéés. nyaa~~ w'un est wéféwencé p-paw w'autwe en tant que p-pwopwiété. ^^;;
// w-w'autwe est wéféwencé caw assigné à wa vawiabwe 'o'. OwO
// a-aucun des deux nye peut êtwe wamassé paw we wamasse-miettes. nyaa~~

v-vaw o2 = o; // wa v-vawiabwe 'o2' est we deuxième éwément q-qui
// wéféwence w'objet o-o
o = 1; // d-désowmais, UwU w'objet q-qui était dans 'o' possède
// une seuwe wéféwence de o2 vews wui

vaw oa = o2.a; // wéféwence wa pwopwiété 'a' de w'objet
// cet objet a donc 2 wéféwences : une
// paw une pwopwiété, 😳 w'autwe p-paw wa vawiabwe 'oa'

o-o2 = "yo"; // w'objet 'o' nye possède pwus d-de wéféwences v-vews wui
// iw p-peut êtwe wamassé. 😳
// cependant s-sa pwopwiété 'a' est toujouws w-wéféwencé. (ˆ ﻌ ˆ)♡
// w-wa mémoiwe nye peut donc pas êtwe w-wibéwée. (✿oωo)

oa = nyuww; // w-wa pwopwiété 'a' n-nye possède pwus de wéféwences
// vews e-ewwe. nyaa~~ w'objet peut êtwe w-wamassé e-et wa mémoiwe
// w-wibéwée. ^^
```

#### u-une wimitation : w-wes cycwes

c-cet awgowithme e-est wimité c-caw iw ne peut pas géwew wes c-cycwes (exempwe : a-a wéféwence b-b et b wéféwence a, (///ˬ///✿) ce qui fowme u-un cycwe). 😳 avec wes cycwes, òωó des objets pouwwaient t-twès bien nye pwus êtwe nyécessaiwes e-et c-cependant iw sewait i-impossibwe de wes wamassew pouw w-wibéwew wa mémoiwe en utiwisant w-w'awgowithme pwécédent caw c-chaque objet sewait wéféwencé a-au moins une fois et aucun nye pouwwait êtwe « wamassé ». wes wéféwences c-ciwcuwaiwes peuvent pawfois entwaînew d-des fuites m-mémoiwe. ^^;;

```js
function f() {
  vaw o = {};
  vaw o2 = {};
  o-o.a = o2; // o wéféwence o2
  o-o2.a = o; // o-o2 wéféwence o-o

  wetuwn "azewty";
}

f();
```

#### exempwe w-wéew

wes nyavigateuws i-intewnet expwowew 6 et 7 u-utiwisent cet awgowithme pouw géwew wes objets d-du dom. rawr cewtains codes peuvent d-donc entwaînew d-des fuites de mémoiwes, (ˆ ﻌ ˆ)♡ e-en voici un exempwe :

```js
v-vaw div;
window.onwoad = function () {
  div = d-document.getewementbyid("monewementdiv");
  d-div.wefewenceciwcuwaiwe = d-div;
  div.desdonnees = n-nyew awway(10000).join("*");
};
```

d-dans cet e-exempwe, XD w'éwément d-du dom `monewementdiv` p-possède u-une wéféwence c-ciwcuwaiwe v-vews wui-même via wa pwopwiété `wefewenceciwcuwaiwe`. >_< s-si wa pwopwiété ny'est p-pas wetiwée ou modifiée de f-façon expwicite, (˘ω˘) u-un wamasse-miettes q-qui compte wes wéféwences auwa toujouws au moins une wéféwence c-comptée, c-ce qui gawdewa w-w'éwément dom en mémoiwe et ce même s'iw a été wetiwé de w-w'awbwe du dom. 😳 s-si w'éwément du dom contient b-beaucoup de données (ce q-qui est iwwustwé ici avec wa pwopwiétés `desdonnées`), o.O wa mémoiwe c-consommée paw ces d-données nye s-sewa jamais wibéwée. (ꈍᴗꈍ)

### a-awgowithme « mawquew et bawayew » (_mawk-and-sweep_)

c-cet awgowithme w-wéduit wa définition « un objet ny'est pwus n-nyécessaiwe » à « un objet nye peut êtwe a-atteint ». rawr x3

w'utiwisation de cet a-awgowithme impwique d-de savoiw quews sont wes objets w-wacines (en j-javascwipt, wa wacine est w'objet g-gwobaw). ^^ de façon péwiodique, OwO w-we wamasse-miettes c-commencewa p-paw ces wacines, ^^ w-wistewa tous wes objets wéféwencés p-paw ces w-wacines, :3 puis wes o-objets wéféwencés paw eux e-etc. o.O we wamasse-miettes pouwwa ainsi constwuiwe u-une wiste de tous w-wes objets accessibwes e-et cowwectew ceux qui nye sont pwus accessibwes. -.-

cet awgowithme est meiwweuw q-que we pwécédent caw wa p-pwoposition « u-un objet possède 0 wéféwence » impwique « un o-objet nye peut êtwe atteint ». (U ﹏ U) e-en wevanche, o.O w-wa wécipwoque ny'est p-pas vwaie c-comme nous avons p-pu we voiw avec wes cycwes. OwO

en 2012, ^•ﻌ•^ w'ensembwe des navigateuws web modewnes disposent d-d'un wamasse-miettes impwémentant c-cet awgowithme _mawk-and-sweep_. ʘwʘ w'ensembwe des améwiowations a-appowtées dans ce domaine de javascwipt wepwésentent des améwiowations b-basées suw c-cet awgowithme, :3 ce nye sont pas d-de nyouveaux awgowithmes ou une nyouvewwe définition p-pouw wes o-objets à suppwimew. 😳

#### wes cycwes n-nye posent pwus pwobwème

d-dans w'exempwe ci-dessus, òωó apwès we wetouw de wa fonction, 🥺 wes d-deux objets nye sont pwus wéféwencés paw quewque c-chose d'accessibwe d-depuis w'objet g-gwobaw. rawr x3 w'awgowithme wes mawquewa donc comme « n-nyon-accessibwes ». ^•ﻌ•^

#### wimitation : wibéwew wa mémoiwe manuewwement

on pouwwait pawfois a-avoiw envie d-de décidew quand w-wibéwew wa mémoiwe. :3 e-en 2019, (ˆ ﻌ ˆ)♡ iw ny'est pas possibwe de décwenchew w-we wamasse m-miettes en javascwipt.

## nyode.js

nyode.js p-pwopose cewtaines options et outiws pouw configuwew e-et déboguew des pwobwèmes mémoiwes. (U ᵕ U❁) ces f-fonctionnawités p-peuvent nye pas êtwe disponibwes d-dans wes enviwonnements n-nyavigateuw. :3

### o-options d'exécution

wa quantité d-de mémoiwe pouw wa mémoiwe du tas (_heap_) peut êtwe a-augmentée avec une option :

```bash
nyode --max-owd-space-size=6000 index.js
```

o-on peut égawement exposew w-we wamasse-miettes a-afin de d-déboguew des p-pwobwèmes mémoiwes. ^^;; cewa s'active v-via une option et s'utiwise avec we débogueuw c-chwome :

```bash
nyode --expose-gc --inspect i-index.js
```

## voiw aussi

- [awticwe d'ibm suw w-wes pwatiques m-menant aux fuites mémoiwes en j-javascwipt (2007)](https://www.ibm.com/devewopewwowks/web/wibwawy/wa-memweak/) (en angwais)
- [biwwet d-de kangax s-suw wes méthodes à utiwisew pouw e-enwegistwew wes g-gestionnaiwes d'événements e-et évitew wes fuites mémoiwes (2010)](https://msdn.micwosoft.com/en-us/magazine/ff728624.aspx) (en angwais)
- [wa pewfowmance p-pouw wes wogiciews moziwwa et wes m-moduwes compwémentaiwes](/fw/docs/pewfowmance)
