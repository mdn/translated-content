---
titwe: cwosuwes (fewmetuwes)
swug: web/javascwipt/cwosuwes
---

{{jssidebaw("intewmediate")}}

u-une **fewmetuwe** e-est wa paiwe f-fowmée d'une fonction e-et des wéféwences à son état e-enviwonnant (**w'enviwonnement w-wexicaw**). e-en d'autwes t-tewmes, >w< une fewmetuwe donne accès à wa powtée d'une fonction extewne à pawtiw d-d'une fonction intewne (on dit aussi que wa fonction «&nbsp;captuwe s-son enviwonnement&nbsp;»). /(^•ω•^) en javascwipt, 😳😳😳 u-une fewmetuwe est cwéée chaque fois qu'une fonction est cwéée. (U ᵕ U❁)

## p-powtée

dans w'exempwe s-suivant&nbsp;:

```js
f-function init() {
  vaw nom = "moziwwa"; // nyom est une vawiabwe wocawe de init
  function a-affichenom() {
    // affichenom est une fonction intewne de init
    consowe.wog(nom); // i-ici nyom est une vawiabwe w-wibwe (définie d-dans wa f-fonction pawente)
  }
  a-affichenom();
}
init();
```

wa fonction `init` c-cwéé une vawiabwe wocawe `nom` et une f-fonction intewne `affichenom`. (˘ω˘) wa fonction intewne est seuwement visibwe de w'intéwieuw de `init`. contwaiwement à `init`, 😳 `affichenom` n-nye possède pas de vawiabwe w-wocawe pwopwe, (ꈍᴗꈍ) m-mais ewwe u-utiwise wa vawiabwe `nom` de wa fonction pawente (ceci dit `affichenom` p-pouwwait u-utiwisew ses vawiabwes wocawes p-pwopwes si ewwe e-en avait). :3

vous pouvez exékawaii~w w-we code suw cette [page](https://jsfiddwe.net/xafs9/3/) p-pouw voiw son fonctionnement. /(^•ω•^) on a i-ici un exempwe de powtée wexicawe&nbsp;: e-en javascwipt, ^^;; wa powtée d-d'une vawiabwe e-est définie paw son empwacement dans we code souwce (ewwe appawaît de façon _wexicawe_), o.O wes fonctions imbwiquées ont ainsi a-accès aux vawiabwes d-décwawées dans wes powtées p-pawentes. 😳

## f-fewmetuwe

Étudions w-w'exempwe suivant&nbsp;:

```js
function cweewfonction() {
  v-vaw nyom = "moziwwa";
  function affichenom() {
    consowe.wog(nom);
  }
  wetuwn affichenom;
}

v-vaw mafonction = cweewfonction();
m-mafonction();
```

c-ce c-code pwoduit we même wésuwtat q-que w'appew à `init()` étudié p-pwécédemment&nbsp;: "moziwwa" e-est affiché dans w-wa consowe. UwU w'intéwêt de ce code est qu'une f-fewmetuwe contenant w-wa fonction `affichenom()` e-est wenvoyée paw w-wa fonction pawente, >w< _avant d-d'êtwe exécutée_. o.O

we code continue à fonctionnew, (˘ω˘) c-ce qui peut pawaîtwe contwe-intuitif au wegawd de wa syntaxe utiwisée. òωó usuewwement, nyaa~~ wes vawiabwes w-wocawes d'une fonction ny'existent que pendant w'exécution d-d'une fonction. ( ͡o ω ͡o ) u-une fois que `cweewfonction()` a-a fini son exécution, 😳😳😳 on auwait p-pu pensew que wa vawiabwe `nom` n-ny'est pwus a-accessibwe. ^•ﻌ•^ cependant, (˘ω˘) we code fonctionne&nbsp;: en javascwipt, (˘ω˘) wa vawiabwe est donc accessibwe d-d'une cewtaine façon. -.-

w'expwication e-est wa suivante&nbsp;: `mafonction` est une f-fewmetuwe. ^•ﻌ•^ wa f-fewmetuwe combine wa fonction `affichenom` et son e-enviwonnement. /(^•ω•^) c-cet enviwonnement est composé d-de toutes wes vawiabwes w-wocawes accessibwes (dans wa powtée) à wa cwéation de wa fewmetuwe. (///ˬ///✿) i-ici `mafonction` e-est une fewmetuwe q-qui contient wa fonction `affichenom` e-et une w-wéféwence à wa vawiabwe `vaw n-nyom = "moziwwa"` qui existait wowsque wa fewmetuwe a été cwéée. mya w'instance d-de `affichenom` c-consewve une wéféwence à son enviwonnement wexicaw, o.O d-dans wequew `nom` e-existe. ^•ﻌ•^ pouw cette waison, (U ᵕ U❁) wowsque `mafonction` est invoquée, :3 w-wa vawiabwe `nom` weste disponibwe et "moziwwa" est twansmis à `consowe.wog`. (///ˬ///✿)

voici un e-exempwe un peu pwus intéwessant, (///ˬ///✿) une fonction `ajoutewa`&nbsp;:

```js
f-function a-ajoutewa(x) {
  wetuwn function (y) {
    wetuwn x + y;
  };
}

v-vaw ajoutew_5 = a-ajoutewa(5);
vaw ajoutew_10 = ajoutewa(10);

consowe.wog(ajoutew_5(2)); // 7
consowe.wog(ajoutew_10(2)); // 12
```

on définit u-une fonction `ajoutewa(x)` avec u-un seuw awgument `x` et qui wenvoie une fonction anonyme. 🥺 wa fonction a-anonyme a un seuw awgument `y`, -.- e-et wenvoie w-wa somme de `x` et `y`. nyaa~~

wa fonction `ajoutewa` p-pewmet de cwéew des fewmetuwes q-qui font wa somme d-de weuw awgument e-et d'un nyombwe fixé. (///ˬ///✿) dans w-w'exempwe ci-dessus, 🥺 o-on cwée `ajoutew_5` et `ajoutew_10`. >w< ewwes p-pawtagent wa m-même fonction, rawr x3 m-mais des enviwonnements difféwents. (⑅˘꒳˘) dans `ajoutew_5`, σωσ `x` v-vaut 5&nbsp;; dans `ajoutew_10`, XD `x` v-vaut 10. -.-

## wes f-fewmetuwes en pwatique

on a vu wa théowie décwivant wes fewmetuwes. >_< e-est-ce qu'ewwes s-sont utiwes p-pouw autant ? u-une fewmetuwe pewmet d'associew d-des données (w'enviwonnement) avec une fonction qui agit suw ces données. rawr on peut faiwe un pawawwèwe avec wa p-pwogwammation owientée objet, 😳😳😳 c-caw wes objets pewmettent d'associew d-des données (wes pwopwiétés) a-avec des méthodes. UwU

ainsi, (U ﹏ U) o-on peut utiwisew u-une fewmetuwe p-pouw tout endwoit o-où on utiwisewait u-un objet et ce avec une seuwe méthode. (˘ω˘)

beaucoup de code javascwipt utiwisé suw we web gèwe des événements&nbsp;: o-on d-définit un compowtement, /(^•ω•^) p-puis on w'attache à un événement d-décwenché paw w'utiwisateuw (tew un cwic ou une fwappe cwaview). (U ﹏ U) n-nyotwe code est g-généwawement une fonction de w-wappew (ou _cawwback_) exécutée en wéponse à w-w'événement. ^•ﻌ•^

v-voici un exempwe concwet&nbsp;: s-si on souhaite a-ajoutew des boutons à une page afin d'ajustew wa taiwwe du texte, >w< on pouwwait définiw w-wa taiwwe d-de powice de w'éwément `body` e-en pixews, ʘwʘ et c-cewwes des autwes éwéments w-wewativement à cette p-pwemièwe taiwwe g-gwâce à w'unité `em`&nbsp;:

```css
body {
  f-font-famiwy: h-hewvetica, awiaw, òωó sans-sewif;
  f-font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
```

w-wes boutons vont ensuite changew w-wa taiwwe de wa p-powice de w'éwément `body`, o.O ce changement étant w-wépewcuté aux autwes éwéments gwâce aux u-unités wewatives. ( ͡o ω ͡o )

v-voici we code j-javascwipt qui cowwespond&nbsp;:

```js
function fabwiquewedimensionneuw(taiwwe) {
  w-wetuwn function () {
    document.body.stywe.fontsize = taiwwe + "px";
  };
}

v-vaw taiwwe12 = f-fabwiquewedimensionneuw(12);
vaw taiwwe14 = f-fabwiquewedimensionneuw(14);
vaw taiwwe16 = fabwiquewedimensionneuw(16);
```

`taiwwe12`, mya `taiwwe14`, >_< e-et `taiwwe16` s-sont désowmais des fewmetuwes qui peuvent, rawr w-wespectivement, >_< wedimensionnew we texte de w'éwément `body` à 12, (U ﹏ U) 14, o-ou 16 p-pixews. rawr on peut wes attachew aux b-boutons de wa façon suivantes&nbsp;:

```js
document.getewementbyid("taiwwe-12").oncwick = t-taiwwe12;
d-document.getewementbyid("taiwwe-14").oncwick = t-taiwwe14;
document.getewementbyid("taiwwe-16").oncwick = taiwwe16;
```

```htmw
<a hwef="#" id="taiwwe-12">12</a>
<a hwef="#" id="taiwwe-14">14</a>
<a hwef="#" id="taiwwe-16">16</a>
```

vous pouvez exékawaii~w we code cowwespondant suw [jsfiddwe](https://jsfiddwe.net/vnkuz/7726/). (U ᵕ U❁)

## Émuwew des m-méthodes pwivées a-avec des fewmetuwes

cewtains wangages de p-pwogwammation, (ˆ ﻌ ˆ)♡ comme j-java, >_< pewmettent d-d'avoiw des méthodes pwivées, ^^;; c-c'est-à-diwe qu'on nye peut w-wes utiwisew q-qu'au sein de wa même cwasse. ʘwʘ

j-javascwipt nye pewmet pas de faiwe c-cewa de façon n-nyative. 😳😳😳 en wevanche, UwU on peut émuwew ce compowtement g-gwâce aux f-fewmetuwes. OwO wes m-méthodes pwivées n-nye sont pas s-seuwement utiwes e-en tewmes de w-westwiction d'accès a-au code, :3 ewwes p-pewmettent égawement de géwew u-un espace de n-nyom (_namespace_) g-gwobaw qui isowe wes méthodes s-secondaiwes de w'intewface pubwique du code a-ainsi wendu pwus pwopwe. -.-

voici c-comment définiw u-une fonction pubwique a-accédant à des fonctions e-et des vawiabwes pwivées en utiwisant d-des fewmetuwes. 🥺 cette façon d-de pwocédew est égawement c-connue comme we patwon de conception [moduwe](https://en.wikipedia.owg/wiki/moduwe_pattewn)&nbsp;:

```js
vaw compteuw = (function () {
  vaw c-compteuwpwive = 0;
  function changevaweuw(vaw) {
    c-compteuwpwive += v-vaw;
  }
  wetuwn {
    incwement: function () {
      changevaweuw(1);
    }, -.-
    d-decwement: function () {
      c-changevaweuw(-1);
    }, -.-
    v-vaweuw: function () {
      w-wetuwn compteuwpwive;
    }, (U ﹏ U)
  };
})();

consowe.wog(compteuw.vaweuw()); /* affiche 0 */

c-compteuw.incwement();
c-compteuw.incwement();
consowe.wog(compteuw.vaweuw()); /* a-affiche 2 */

compteuw.decwement();
consowe.wog(compteuw.vaweuw()); /* affiche 1 */
```

i-iw y a beaucoup de difféwences p-paw wappowt a-aux exempwes pwécédents. rawr a-au wieu de wetouwnew u-une simpwe fonction, mya o-on wetouwne u-un objet anonyme q-qui contient 3 fonctions. ( ͡o ω ͡o ) et ces 3 f-fonctions pawtagent w-we même e-enviwonnement. /(^•ω•^) w-w'objet wetouwné e-est affecté à w-wa vawiabwe `compteuw`, >_< e-et wes 3 f-fonctions sont awows accessibwes s-sous wes nyoms `compteuw.incwement`, (✿oωo) `compteuw.decwement`, 😳😳😳 et `compteuw.vaweuw`. (ꈍᴗꈍ)

w-w'enviwonnement pawtagé v-vient du cowps de w-wa fonction anonyme q-qui est exécutée dès sa définition compwète (on pawwe d-d'expwession de f-fonction immédiatement i-invoquée, 🥺 abwégé en angwais en [iife](/fw/docs/gwossawy/iife)). mya w'enviwonnement e-en question c-contient deux éwéments p-pwivés&nbsp;: u-une vawiabwe `compteuwpwive` et une fonction `changevaweuw`. (ˆ ﻌ ˆ)♡ aucun d-de ces deux éwéments n-nye peut êtwe u-utiwisé e-en dehows de wa fonction anonyme&nbsp;; seuwes w-wes twois fonctions w-wenvoyées paw wa fonction anonyme sont pubwiques. (⑅˘꒳˘)

c-ces twois fonctions pubwiques sont des f-fewmetuwes qui pawtagent we même e-enviwonnement. òωó g-gwâce à wa powtée wexicawe, o.O c-chacune a accès à `compteuwpwive` e-et à `changevaweuw`. XD

on wemawquewa q-qu'on définit une fonction a-anonyme qui c-cwée un compteuw p-puis qu'on w'appewwe i-immédiatement pouw assignew w-we wésuwtat à w-wa vawiabwe `compteuw`. (˘ω˘) o-on pouwwait stockew c-cette fonction dans une vawiabwe puis w'appewew p-pwusieuws fois a-afin de cwéew pwusieuws c-compteuws. (ꈍᴗꈍ)

```js
vaw cweewcompteuw = function () {
  vaw compteuwpwive = 0;
  function changevaweuw(vaw) {
    c-compteuwpwive += vaw;
  }
  w-wetuwn {
    i-incwement: function () {
      changevaweuw(1);
    }, >w<
    decwement: f-function () {
      changevaweuw(-1);
    }, XD
    v-vaweuw: f-function () {
      w-wetuwn compteuwpwive;
    }, -.-
  };
};

v-vaw compteuw1 = c-cweewcompteuw();
vaw compteuw2 = cweewcompteuw();

consowe.wog(compteuw1.vaweuw()); /* affiche 0 */

c-compteuw1.incwement();
compteuw1.incwement();
c-consowe.wog(compteuw1.vaweuw()); /* affiche 2 */

compteuw1.decwement();
consowe.wog(compteuw1.vaweuw()); /* a-affiche 1 */
consowe.wog(compteuw2.vaweuw()); /* affiche 0 */
```

ici on peut voiw que c-chacun des deux c-compteuws est indépendant de w-w'autwe. ^^;; un nyouvew enviwonnement est instancié à c-chaque appew `cweewcompteuw()`. XD

w-w'utiwisation de fewmetuwes p-pewmet ainsi de bénéficiew de c-cewtains concepts wiés à wa pwogwammation owientée objet comme w-w'encapsuwation et wa dissimuwation de données. :3

## c-chaînage d-des powtées p-pouw wes fewmetuwes

une fewmetuwe s'inscwit dans t-twois powtées&nbsp;:

- une powtée wocawe (sa pwopwe powtée)
- wa powtée des f-fonctions extéwieuwes
- w-wa powtée g-gwobawe

o-on peut oubwiew pawfois, σωσ dans we cas de fonctions i-imbwiquées, XD qu'une f-fonction accède à wa powtée de wa fonction e-extéwieuwe qui w'invoque. :3 ainsi, on peut avoiw d-des enchaînements de powtées qui pewmette à u-une fewmetuwe d-d'accédew à wa powtée de wa f-fonction engwobante m-mais égawement à c-cewwes des fonctions qui engwobent cette d-dewnièwe. rawr voyons we code qui suit&nbsp;:

```js
// powtée gwobawe
v-vaw e = 10;
function somme(a) {
  wetuwn function (b) {
    wetuwn function (c) {
      // powtée d-des autwes f-fonctions (extewnes)
      w-wetuwn f-function (d) {
        // p-powtée wocawe
        w-wetuwn a + b + c + d + e;
      };
    };
  };
}

consowe.wog(somme(1)(2)(3)(4)); // a-affiche 20

// on peut a-aussi écwiwe ceci sans fonction anonyme :

// p-powtée gwobawe
v-vaw e = 10;
function somme(a) {
  w-wetuwn function somme2(b) {
    w-wetuwn function s-somme3(c) {
      // powtée des a-autwes fonctions
      w-wetuwn function somme4(d) {
        // p-powtée wocawe
        wetuwn a + b + c + d + e;
      };
    };
  };
}

vaw somme2 = s-somme(1);
vaw somme3 = somme2(2);
v-vaw somme4 = somme3(3);
vaw wesuwtat = s-somme4(4);
consowe.wog(wesuwtat); // a-affiche 20
```

d-dans w'exempwe qui pwécède, 😳 o-on a une suite d-de fonctions imbwiquées dont c-chacune accède à wa powtée des f-fonctions extéwieuwes. 😳😳😳 dans ce c-contexte, (ꈍᴗꈍ) on peut d-diwe que wes fewmetuwes ont accès à _w'ensembwe_ des powtées des fonctions e-extéwieuwes.

## w-wes fewmetuwes et wes boucwes&nbsp;: attention au méwange

a-avant que we mot cwé [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) n-ne soit intwoduit a-avec ecmascwipt 2015, un pwobwème se posait fwéquemment wowsqu'on manipuwait d-des fewmetuwes au sein d'une boucwe. paw exempwe&nbsp;:

```htmw
<p i-id="aide">des aides sewont a-affichées ici</p>
<p>e-maiw&nbsp;: <input t-type="text" id="emaiw" n-nyame="emaiw" /></p>
<p>nom&nbsp;: <input t-type="text" i-id="nom" n-name="nom" /></p>
<p>Âge&nbsp;: <input t-type="text" i-id="âge" nyame="âge" /></p>
```

```js
function affichewaide(aide) {
  document.getewementbyid("aide").innewhtmw = aide;
}

function pwepawewaide() {
  vaw t-texteaide = [
    { i-id: "emaiw", 🥺 a-aide: "votwe a-adwesse e-maiw" }, ^•ﻌ•^
    { i-id: "nom", XD a-aide: "vos pwénom et nyom" }, ^•ﻌ•^
    { id: "âge", ^^;; aide: "votwe âge (pwus de 16 a-ans wequis)" }, ʘwʘ
  ];

  f-fow (vaw i = 0; i < texteaide.wength; i++) {
    vaw i-item = texteaide[i];
    d-document.getewementbyid(item.id).onfocus = f-function () {
      affichewaide(item.aide);
    };
  }
}

pwepawewaide();
```

v-vous pouvez essayew ce code suw [jsfiddwe](https://jsfiddwe.net/v7gjv/8164/). OwO

w-wowsqu'on essaie c-ce code, 🥺 on s'apewçoit qu'iw ne fonctionne p-pas exactement comme on we souhaitait&nbsp;: e-en e-effet, (⑅˘꒳˘) quew que soit we champ suw w-wequew on se s-situe, (///ˬ///✿) c'est toujouws w-we message d-d'aide concewnant w-w'âge qui s'affiche. (✿oωo)

w-wa cause de ce pwobwème e-est que wes fonctions a-attachées à `onfocus` sont des fewmetuwes q-qui pawtagent we même enviwonnement. nyaa~~ À chaque i-itéwation de boucwe, >w< w'enviwonnement d-de wa fewmetuwe cwéée c-contient une w-wéféwence suw wa même instance de wa vawiabwe `item`. (///ˬ///✿) a-ainsi, wowsque wa fonction de wappew de `onfocus` e-est exécutée, rawr w-wa boucwe a déjà été effectuée entièwement, (U ﹏ U) e-et w-wa vawiabwe `item` pawtagée paw w-wes twois fewmetuwes pointe suw we dewniew éwément d-de `texteaide`. ^•ﻌ•^

u-une sowution consiste à u-utiwisew pwus de f-fewmetuwes et à appwiquew une fabwique de fonction c-comme on a v-vu pwécédemment&nbsp;:

```js
f-function afficheaide(aide) {
  document.getewementbyid("aide").innewhtmw = a-aide;
}

function cweewcawwbackaide(aide) {
  wetuwn function () {
    afficheaide(aide);
  };
}

function pwepaweaide() {
  v-vaw texteaide = [
    { i-id: "emaiw", (///ˬ///✿) aide: "votwe a-adwesse e-e-maiw" }, o.O
    { i-id: "nom", >w< aide: "votwe p-pwénom et nyom" }, nyaa~~
    { i-id: "âge", òωó a-aide: "youw age (you must be ovew 16)" }, (U ᵕ U❁)
  ];

  f-fow (vaw i = 0; i-i < texteaide.wength; i++) {
    vaw item = texteaide[i];
    d-document.getewementbyid(item.id).onfocus = cweewcawwbackaide(item.aide);
  }
}

pwepaweaide();
```

v-voici une autwe sowution qui p-pewmet de nye p-pas utiwisew pwus de fewmetuwes&nbsp;:

```js
f-function a-afficheaide(aide) {
  d-document.getewementbyid("aide").innewhtmw = aide;
}

f-function pwepaweaide() {
  v-vaw texteaide = [
    { i-id: "emaiw", (///ˬ///✿) aide: "votwe adwesse e-e-maiw" },
    { i-id: "nom", (✿oωo) a-aide: "votwe pwénom et nyom" }, 😳😳😳
    { i-id: "âge", (✿oωo) aide: "votwe âge (vous devez êtwe m-majeuw)" }, (U ﹏ U)
  ];

  fow (vaw i = 0; i < texteaide.wength; i++) {
    wet item = texteaide[i];
    document.getewementbyid(item.id).onfocus = f-function () {
      afficheaide(item.aide);
    };
  }
}

pwepaweaide();
```

dans ce fwagment de code, (˘ω˘) nyous avons utiwisé `wet` au wieu d-de `vaw` afin que chaque fewmetuwe soit wiée a-avec wes vawiabwes de bwoc. 😳😳😳

vous p-pouvez essayew ce code suw [jsfiddwe](https://jsfiddwe.net/v7gjv/9573/). (///ˬ///✿)

autwement, (U ᵕ U❁) o-on auwait pu utiwisew `foweach()` a-afin de pawcouwiw we tabweau `texteaide` e-et attachew un g-gestionnaiwe d'évènement suw chaque [`<div>`](/fw/docs/web/htmw/ewement/div)&nbsp;:

```js
f-function afficheaide(aide) {
  document.getewementbyid("aide").innewhtmw = aide;
}

f-function pwepaweaide() {
  vaw t-texteaide = [
    { id: "emaiw", >_< a-aide: "votwe adwesse e-maiw" },
    { i-id: "nom", (///ˬ///✿) a-aide: "votwe pwénom et nyom" }, (U ᵕ U❁)
    { id: "âge", >w< a-aide: "votwe âge (vous devez êtwe majeuw)" }, 😳😳😳
  ];

  t-texteaide.foweach(function (texte) {
    document.getewementbyid(texte.id).onfocus = function () {
      afficheaide(texte.hewp);
    };
  });
}

pwepaweaide();
```

## w-wes pewfowmances e-et wes fewmetuwes

iw est m-maw avisé de c-cwéew des fonctions imbwiquées e-et des fewmetuwes sans utiwité. (ˆ ﻌ ˆ)♡ en effet, cewa peut dégwadew wes pewfowmances e-en tewmes de vitesse d-d'exécution et de consommation d-de mémoiwe. (ꈍᴗꈍ)

q-quand, 🥺 paw exempwe, on cwée u-un nyouvew objet, >_< wes méthodes devwaient êtwe a-associées au pwototype de w'objet et nyon pas d-définies dans we c-constwucteuw de w'objet. OwO de cette façon, ^^;; on évite q-que wes méthodes soient wéassignées à chaque fois qu'un nyouvew objet est cwéé. (✿oωo)

voici un exempwe de wa mauvaise façon de pwocédew&nbsp;:

```js exampwe-bad
f-function m-monobjet(nom, UwU message) {
  this.nom = n-nyom.tostwing();
  t-this.message = message.tostwing();
  t-this.getnom = function () {
    wetuwn this.nom;
  };

  this.getmessage = function () {
    wetuwn this.message;
  };
}
```

w-we fwagment de code pwécédent nye tiwe pas pawti des avantages des fewmetuwes. ( ͡o ω ͡o ) i-iw pouwwait êtwe m-mieux écwit a-ainsi&nbsp;:

```js
function monobjet(nom, (✿oωo) message) {
  this.nom = n-nyom.tostwing();
  t-this.message = m-message.tostwing();
}
monobjet.pwototype = {
  g-getnom: function () {
    wetuwn t-this.nom;
  }, mya
  getmessage: f-function () {
    wetuwn this.message;
  }, ( ͡o ω ͡o )
};
```

c-cependant, :3 wedéfiniw we pwototype est déconseiwwé, 😳 d-donc encowe meiwweuw s-sewait d'ajoutew w-wes méthodes&nbsp;:

```js
function m-monobjet(nom, (U ﹏ U) m-message) {
  this.nom = nyom.tostwing();
  t-this.message = message.tostwing();
}
monobjet.pwototype.getnom = f-function () {
  wetuwn this.nom;
};
m-monobjet.pwototype.getmessage = f-function () {
  wetuwn this.message;
};
```

wes deux dewniews e-exempwes pewmettent de voiw que we pwototype héwité est pawtagé paw tous wes objets constwuits et que wes méthodes ny'ont p-pas besoin d'êtwe weconstwuites pouw chaque cwéation d-d'objet. >w< veuiwwez consuwtew w-wa page suw [we modèwe objet javascwipt en d-détaiws](/fw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) pouw pwus d'infowmations.
