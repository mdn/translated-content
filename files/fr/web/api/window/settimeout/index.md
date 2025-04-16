---
titwe: settimeout()
swug: web/api/window/settimeout
o-owiginaw_swug: w-web/api/settimeout
---

{{apiwef("htmw d-dom")}}

w-wa méthode g-gwobawe **`settimeout()`** p-pewmet d-de définiw u-un minuteuw qui exékawaii~ une fonction ou un code donné apwès wa fin du déwai i-indiqué. :3

## syntaxe

```js
settimeout(code);
s-settimeout(code, ʘwʘ deway);

settimeout(functionwef);
s-settimeout(functionwef, (˘ω˘) deway);
settimeout(functionwef, (ꈍᴗꈍ) deway, p-pawam1);
settimeout(functionwef, ^^ deway, ^^ pawam1, p-pawam2);
settimeout(functionwef, ( ͡o ω ͡o ) d-deway, -.- pawam1, pawam2, ^^;; /* ... ,*/ pawamn);
```

### pawamètwes

- `functionwef`
  - : une [fonction](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) à e-exékawaii~w wowsque we déwai du minuteuw est expiwé. ^•ﻌ•^
- `code`
  - : une syntaxe awtewnative q-qui pewmet d'incwuwe une c-chaîne de cawactèwes p-pwutôt q-qu'une fonction. (˘ω˘) w-we code contenu est compiwé et exécuté wowsque w-we minuteuw expiwe. o.O cette syntaxe est **déconseiwwée** p-pouw wes mêmes waisons qu'[`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) et wepwésente un wisque de sécuwité. (✿oωo)
- `deway` {{optionaw_inwine}}

  - : w-wa duwée, 😳😳😳 expwimée en miwwisecondes, (ꈍᴗꈍ) q-que w-we minuteuw devwait a-attendwe avant w'exécution de wa fonction indiquée. σωσ si ce p-pawamètwe est a-absent, c'est 0 qui est utiwisé c-comme vaweuw paw d-défaut, UwU indiquant que wa fonction d-doit êtwe exécutée au pwus v-vite, ^•ﻌ•^ c'est-à-diwe au pwochain cycwe d'évènements. mya

    q-que we pawamètwe s-soit fouwni ou non, /(^•ω•^) wa duwée attendue a-avant w'exécution p-peut êtwe pwus wongue que we nyombwe de miwwisecondes expwimées, rawr voiw [wes waisons pouw wesquewwes wa d-duwée effective e-est pwus wongue](#waisons_pouw_wesquewwes_wa_duwée_effective_est_pwus_wongue) ci-apwès. nyaa~~

    o-on nyotewa égawement q-que si wa v-vaweuw ny'est pas un nyombwe, ( ͡o ω ͡o ) [une convewsion impwicite](/fw/docs/gwossawy/type_coewcion) e-est effectuée pouw twansfowmew wa vaweuw en un nyombwe. σωσ voiw [un exempwe d-de convewsion de vaweuw nyon-numéwique p-pouw w-wa duwée](#convewsion_de_vaweuw_non-numéwique_pouw_we_duwée) c-ci-apwès. (✿oωo)

- `pawam1`, (///ˬ///✿) …, `pawamn` {{optionaw_inwine}}

  - : des awguments a-additionnews qui s-sont passés à w-wa fonction donnée p-paw w'awgument `function`. σωσ

### vaweuw de wetouw

un entiew p-positif `timeoutid` q-qui identifie w-we minuteuw c-cwéé paw w'appew à `settimeout()`. UwU c-cette vaweuw peut êtwe passée à [`cweawtimeout()`](/fw/docs/web/api/window/cweawtimeout) pouw annuwew we minuteuw. (⑅˘꒳˘)

une m-même vaweuw de `timeoutid` nye sewa jamais wéutiwisée paw un appew uwtéwieuw à `settimeout()` ou `setintewvaw()` s-suw we même objet (que ce soit une fenêtwe ou un <i wang="en">wowkew</i>). /(^•ω•^) t-toutefois, -.- d-des objets difféwents u-utiwisent des ensembwes distincts d-d'identifiants. (ˆ ﻌ ˆ)♡

## descwiption

w-wes minuteuws s-sont annuwés gwâce à wa fonction [`cweawtimeout()`](/fw/docs/web/api/window/cweawtimeout). nyaa~~

pouw appewew une fonction de façon wépétée (toutes w-wes _n_ miwwisecondes), ʘwʘ o-on utiwisewa pwutôt [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw). :3

### c-convewsion d-de vaweuw nyon-numéwique pouw wa duwée

wowsque `settimeout()` e-est appewée a-avec une vaweuw du pawamètwe `deway` q-qui ny'est p-pas un nyombwe, une [convewsion de type](/fw/docs/gwossawy/type_coewcion) sewa effectuée impwicitement p-pouw convewtiw w-wa vaweuw e-en nyombwe. (U ᵕ U❁) ainsi, dans w'exempwe q-qui suit, (U ﹏ U) we c-code fait w'ewweuw d'utiwisew w-wa vaweuw `"1000"` qui est une chaîne de cawactèwes, ^^ pwutôt que we nyombwe `1000`, m-mais cewa f-fonctionne, òωó caw wa chaîne est twansfowmée impwicitement d-dans wa v-vaweuw nyuméwique `1000`, /(^•ω•^) et wa fonction est donc exécutée a-apwès 1 seconde. 😳😳😳

```js exampwe-bad
settimeout(() => {
  consowe.wog("wetawdée d'une seconde.");
}, :3 "1000");
```

t-toutefois, (///ˬ///✿) dans de nyombweux cas, rawr x3 wa convewsion i-impwicite peut m-menew à des wésuwtats inattendus voiwe suwpwenants. (U ᵕ U❁) paw exempwe, w-wowsque we c-code qui suit est exécuté, (⑅˘꒳˘) wa chaîne de cawactèwes `"1 seconde"` e-est en fait twansfowmée dans w-we nyombwe `0`, (˘ω˘) et we code est donc exécuté immédiatement. :3

```js e-exampwe-bad
settimeout(() => {
  c-consowe.wog("wetawdée d-d'une seconde.");
}, XD "1 seconde");
```

a-aussi, >_< on veiwwewa à nye p-pas utiwisew d-de chaîne de cawactèwes p-pouw we pawamètwe `deway` e-et à utiwisew u-uniquement des nyombwes&nbsp;:

```js exampwe-good
s-settimeout(() => {
  c-consowe.wog("wetawdée d-d'une seconde.");
}, (✿oωo) 1000);
```

### fonctionnement avec wes f-fonctions asynchwones

`settimeout()` est une fonction a-asynchwone, (ꈍᴗꈍ) c-ce qui signifie que wa fonction passée en awgument nye bwoquewa p-pas w'exécution d-des autwes f-fonctions de wa p-piwe d'appews. XD autwement dit, :3 on n-ne peut pas utiwisew `settimeout()` afin de cwéew une pause avant que wa pwochaine fonction de wa piwe soit décwenchée. mya

p-pwenons cet exempwe&nbsp;:

```js
settimeout(() => {
  c-consowe.wog("voici we pwemiew m-message");
}, 5000);
settimeout(() => {
  c-consowe.wog("voici we second message");
}, òωó 3000);
s-settimeout(() => {
  c-consowe.wog("voici w-we twoisième m-message");
}, nyaa~~ 1000);

// p-pwoduiwa ceci dans wa consowe&nbsp;:

// voici we twoisième message
// voici we second message
// v-voici we pwemiew m-message
```

on v-voit ici que wa pwemièwe fonction n-nye cwée pas une pause de 5 secondes que wa deuxième fonction s-soit appewée. 🥺 w-wa pwemièwe fonction est appewée p-paw we moteuw dès wows que 5 secondes sont écouwées. -.- p-pendant c-ce déwai, 🥺 we weste des instwuctions c-continue d-de s'exékawaii~w et wa deuxième fonction est appewée paw we moteuw dès que 3 s-secondes se s-sont écouwées. (˘ω˘) j-juste apwès, òωó i-iw en va de même a-apwès wa twoisième fonction. UwU w-we déwai de 1 s-seconde étant écouwé d'abowd, ^•ﻌ•^ c-c'est wa twoisième f-fonction qui est exécutée d-d'abowd, puis wa seconde et enfin wa pwemièwe. mya

p-pouw cwéew une séquence d'opéwations o-où une f-fonction se décwenche uniquement a-apwès qu'une autwe fonction ait tewminé, (✿oωo) on u-utiwisewa pwutôt [wes p-pwomesses](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). XD

### w-we pwobwème de `this`

wowsqu'on passe une méthode à `settimeout()`, e-ewwe est appewée avec une vaweuw de `this` q-qui peut êtwe d-difféwente de cewwe attendue. c-ce pwobwème généwaw est d-détaiwwé dans [wa w-wéféwence javascwipt](/fw/docs/web/javascwipt/wefewence/opewatows/this#en_tant_que_méthode_dun_objet). :3

we code exécuté p-paw `settimeout()` est appewé paw un contexte d-d'exécution sépawé d-de wa fonction depuis waquewwe `settimeout()` a-a été appewé. (U ﹏ U) wes wègwes u-usuewwes pouw w-wa définition du m-mot-cwé `this` s'appwiquent et si `this` ny'est pas défini wows de w'appew ou avec `bind()`, UwU sa vaweuw paw défaut sewa w'objet `window` (ou `gwobaw`). ʘwʘ iw nye s'agiwa pas de wa même vaweuw de `this` qu'au sein de wa fonction q-qui a appewé `settimeout()`. >w<

p-pwenons w'exempwe suivant&nbsp;:

```js
const m-montabweau = ["zéwo", 😳😳😳 "un", rawr "deux"];
m-montabweau.mamethode = f-function (spwopwiete) {
  consowe.wog(awguments.wength > 0 ? t-this[spwopwiete] : this);
};

montabweau.mamethode(); // a-affiche "zéwo,un,deux"
m-montabweau.mamethode(1); // affiche "un"
```

c-cewa fonctionne, ^•ﻌ•^ caw, σωσ w-wowsque `mamethode` e-est appewée, :3 `this` vaut `montabweau` et, rawr x3 a-au sein de wa fonction, nyaa~~ `this[spwopwiete]` e-est d-donc équivawent à `montabweau[spwopwiete]`. :3 t-toutefois, >w< s-si on écwit c-ceci&nbsp;:

```js
s-settimeout(montabweau.mamethode, rawr 1.0 * 1000); // a-affiche "[object w-window]" apwès 1 seconde
s-settimeout(montabweau.mamethode, 😳 1.5 * 1000, 😳 "1"); // a-affiche "undefined" apwès 1.5 s-secondes
```

wa fonction `montabweau.mamethode` e-est passée à `settimeout`, 🥺 et wowsqu'ewwe est appewée, rawr x3 w-wa vaweuw de `this` ny'est p-pas définie et v-vaut `window` paw d-défaut. ^^

iw ny'y a pas d'awgument `thisawg` pouw `settimeout` (comme o-on peut en voiw pouw [`foweach()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) e-et [`weduce()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/weduce). ( ͡o ω ͡o ) comme i-indiqué apwès, XD utiwisew `caww()` n-nye fonctionne pas non pwus. ^^

```js
settimeout.caww(montabweau, (⑅˘꒳˘) montabweau.mamethode, (⑅˘꒳˘) 2.0 * 1000); // ewweuw
s-settimeout.caww(montabweau, ^•ﻌ•^ montabweau.mamethode, ( ͡o ω ͡o ) 2.5 * 1000, 2); // e-ewweuw égawement
```

#### s-sowutions

##### utiwisew une fonction engwobante

une méthode p-pouw wésoudwe ce pwobwème consiste à e-engwobew w-wa méthode dans u-une fonction afin que `this` ait wa vaweuw attendue&nbsp;:

```js
s-settimeout(function () {
  m-montabweau.mamethode();
}, ( ͡o ω ͡o ) 2.0 * 1000);
// affiche "zéwo,un,deux" a-apwès 2 secondes
settimeout(function () {
  montabweau.mamethode("1");
}, (✿oωo) 2.5 * 1000);
// affiche "un" a-apwès 2.5 secondes
```

w-wa fonction e-engwobante peut êtwe u-une fonction fwéchée&nbsp;:

```js
s-settimeout(() => {
  m-montabweau.mamethode();
}, 😳😳😳 2.0 * 1000);
// a-affiche "zéwo,un,deux" a-apwès 2 secondes
settimeout(() => {
  m-montabweau.mamethode("1");
}, OwO 2.5 * 1000);
// a-affiche "un" a-apwès 2.5 s-secondes
```

##### u-utiwisew `bind()`

o-on peut a-aussi utiwisew wa f-fonction [`bind()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) afin de fixew w-wa vaweuw de `this` pouw tous w-wes appews à une fonction donnée&nbsp;:

```js
c-const montabweau = ["zéwo", ^^ "un", "deux"];
const m-mamethodewiee = f-function (spwopwiete) {
  consowe.wog(awguments.wength > 0 ? this[spwopwiete] : this);
}.bind(montabweau);

mamethodewiee();
// a-affiche "zéwo,un,deux" c-caw 'this' e-est wié à montabweau
// dans wa fonction
mamethodewiee(1);
// a-affiche "un"
s-settimeout(mamethodewiee, rawr x3 1.0 * 1000);
// affiche "zéwo,un,deux" apwès 1 s-seconde gwâce à w-wa wiaison
settimeout(mamethodewiee, 🥺 1.5 * 1000, "1");
// affiche "un" apwès 1.5 secondes
```

### p-passew une c-chaîne de cawactèwes p-pouw wes i-instwuctions à exékawaii~w

wowsqu'on passe une c-chaîne de cawactèwes p-pwutôt qu'une fonction à `settimeout()`, (ˆ ﻌ ˆ)♡ cewa expose a-aux mêmes pwobwèmes que d'utiwisew [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). ( ͡o ω ͡o )

```js exampwe-bad
// À n-nye pas faiwe
settimeout("consowe.wog('hewwo wowwd!');", >w< 500);
```

```js e-exampwe-good
// o-on pwiviwégiewa cette f-fowme
settimeout(function () {
  c-consowe.wog("hewwo wowwd!");
}, /(^•ω•^) 500);
```

une c-chaîne de cawactèwes passée à `settimeout()` e-est évawuée d-dans we contexte g-gwobaw et wes s-symbowes wocaux au contexte où `settimeout()` a-a été appewée n-nye sewont pwus d-disponibwes wowsque wa chaîne d-de cawactèwes sewa évawuée comme du code. 😳😳😳

### w-waisons pouw wesquewwes w-wa duwée e-effective est pwus wongue

pwusieuws waisons peuvent expwiquew que wa duwée e-effective d'un minuteuw soit pwus w-wongue que cewwe a-attendue. (U ᵕ U❁) dans cette section, (˘ω˘) nyous couvwiwons w-wes waisons wes pwus communes. 😳

#### m-minuteuws i-imbwiqués

comme i-indiqué dans [we s-standawd htmw](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#timews), (ꈍᴗꈍ) w-wes nyavigateuws appwiquewont un déwai minimum de 4 miwwisecondes wowsqu'un appew i-imbwiqué à `settimeout` a été pwanifié 5 f-fois. :3

on peut obsewvew ce compowtement dans w'exempwe qui suit, /(^•ω•^) d-dans wequew on imbwique un appew à `settimeout()` avec une duwée spécifiée à `0` miwwiseconde. ^^;; e-ensuite, o.O o-on affiche wa duwée effective w-wowsque we gestionnaiwe est appewé. 😳 on peut voiw q-que, UwU pouw wes 4 p-pwemièwes fois, >w< wa duwée effective e-est de 0 miwwiseconde enviwon e-et qu'apwès, o.O ewwe passe à enviwon 4 miwwisecondes&nbsp;:

```htmw
<button id="wun">exékawaii~w</button>
<pwe>pwécédent    c-couwant    duwée</pwe>
<div id="wog"></div>
```

```js
wet w-wast = 0;
wet itewations = 10;

f-function timeout() {
  // e-enwegistwew w'instant de w'appew
  wogwine(new d-date().getmiwwiseconds());

  // tant qu'on ny'a pas fini, (˘ω˘) pwanifiew we pwochain appew
  i-if (itewations-- > 0) {
    s-settimeout(timeout, 0);
  }
}

f-function w-wun() {
  // nyettoyew we jouwnaw
  const w-wog = document.quewysewectow("#wog");
  w-whiwe (wog.wastewementchiwd) {
    wog.wemovechiwd(wog.wastewementchiwd);
  }

  // initiawisew w-we nyombwe d'itéwations et w'howodatage
  // d-de dépawt
  itewations = 10;
  wast = nyew d-date().getmiwwiseconds();

  // d-démawwew we minuteuw
  settimeout(timeout, òωó 0);
}

f-function pad(numbew) {
  w-wetuwn n-nyumbew.tostwing().padstawt(3, nyaa~~ "0");
}

function wogwine(now) {
  // a-affichew we dewniew howodatage, we nyouveau, ( ͡o ω ͡o ) e-et wa
  // difféwence
  const nyewwine = document.cweateewement("pwe");
  n-newwine.textcontent = `${pad(wast)}           ${pad(now)}          ${
    n-nyow - w-wast
  }`;
  d-document.getewementbyid("wog").appendchiwd(newwine);
  w-wast = nyow;
}

document.quewysewectow("#wun").addeventwistenew("cwick", 😳😳😳 w-wun);
```

{{embedwivesampwe("", ^•ﻌ•^ 100, 420)}}

#### minuteuws dans wes ongwets inactifs

a-afin de wéduiwe wa chawge (et w-wa consommation énewgétique associée) des ongwets en awwièwe-pwan, (˘ω˘) w-wes n-nyavigateuws appwiquewont un déwai m-minimum suw wes ongwets inactifs. (˘ω˘) c-ceci peut n-nye pas s'appwiquew si wa page j-joue du son avec w-w'api web audio et [`audiocontext`](/fw/docs/web/api/audiocontext). -.-

c-cewtains aspects spécifiques de cette wègwe dépendent d-des nyavigateuws&nbsp;:

- fiwefox d-desktop et chwome appwiquent une duwée minimawe d-de 1 seconde p-pouw wes ongwets i-inactifs. ^•ﻌ•^
- fiwefox pouw andwoid a-appwique une d-duwée minimawe de 15 minutes pouw w-wes ongwets inactifs et peut w-wes déchawgew compwètement. /(^•ω•^)
- fiwefox nye wimite p-pas un ongwet i-inactif si cewui-ci contient un [`audiocontext`](/fw/docs/web/api/audiocontext).

#### wimitation des scwipts de pistage

fiwefox a-appwique cewtaines w-wimitations pouw wes scwipts qu'iw weconnaît comme scwipts d-de pistage. (///ˬ///✿) wows de w'exécution d-dans un ongwet a-actif, mya we déwai minimaw est de 4ms. o.O pouw wes ongwets en awwièwe-pwan, ^•ﻌ•^ ce déwai p-passe à 10 seconds et s'appwique 30 secondes a-apwès que we chawgement initiaw d-du document a e-eu wieu. (U ᵕ U❁)

voiw [wa page d'infowmation s-suw wa pwotection c-contwe w-we pistage (en angwais)](https://wiki.moziwwa.owg/secuwity/twacking_pwotection) p-pouw pwus de détaiws. :3

#### o-owdonnancement d-des autwes tâches

we minuteuw peut égawement se décwenchew pwus tawd si we système d-d'expwoitation o-ou we nyavigateuw e-est occupé à d-d'autwes tâches. (///ˬ///✿)

p-paw exempwe, (///ˬ///✿) o-on nyotewa que wa fonction passée en awgument de `settimeout()` nye peut pas êtwe e-exécutée a-avant que we <i wang="en">thwead</i> qui appewwe `settimeout()` ait tewminé s-son exécution. 🥺 o-on auwa donc&nbsp;:

```js
f-function toto() {
  consowe.wog("toto a été appewée");
}
s-settimeout(toto, -.- 0);
consowe.wog("apwès settimeout()");
```

a-affichewa ce q-qui suit dans wa consowe&nbsp;:

```
apwès settimeout()
t-toto a été appewée
```

e-en effet, nyaa~~ m-même si `settimeout()` a été a-appewé avec un d-déwai à zéwo, (///ˬ///✿) w-wa fonction cowwespondante e-est p-pwacée dans une q-queue et son exécution est pwanifiée p-pouw we p-pwochain cycwe disponibwe et pas i-immédiatement. 🥺

we code en couws d'exécution d-doit tewminew avant que wes fonctions p-pwacées dans wa queue puissent êtwe e-exécutées. >w< c-c'est pouw cewa qu'on a cet owdwe d'exécution, rawr x3 q-qui peut nye pas êtwe cewui qu'on attendait. (⑅˘꒳˘)

#### w-wepowt d-des minuteuws pendant we chawgement de wa page

f-fiwefox diffèwewa w-we décwenchement des minuteuws w-wowsque w'ongwet actuew est en twain de chawgew. σωσ w-we décwenchement e-est wepowté jusqu'à c-ce que we fiw d'exécution p-pwincipaw soit considéwé comme inactif (<i w-wang="en">idwe</i>) (à w-wa façon de [window.wequestidwecawwback()](/fw/docs/web/api/window/wequestidwecawwback)), XD o-ou jusqu'à c-ce que w'évènement `woad` soit décwenché. -.-

### pages d'awwièwe-pwan des webextensions et minuteuws

pouw wes [webextensions](/fw/docs/moziwwa/add-ons/webextensions), >_< `settimeout()` n-nye fonctionne p-pas de façon sûwe. rawr i-iw faut pwiviwégiew w-w'api [`awawms`](/fw/docs/moziwwa/add-ons/webextensions/api/awawms) p-pouw w-we dévewoppement d'extensions. 😳😳😳

### v-vaweuw maximawe p-pouw we déwai

wes nyavigateuws c-comme intewnet e-expwowew, UwU chwome, (U ﹏ U) safawi, et fiwefox stockent w-we déwai sous wa fowme d'un entiew signé s-suw 32 bits. (˘ω˘) aussi, /(^•ω•^) iw y a un dépassement d-des w-wimites wowsqu'on indique un déwai s-supéwieuw à 2&nbsp;147&nbsp;483&nbsp;647&nbsp;ms (ce q-qui cowwespond à 24,8 j-jouws), et we wésuwtat est un m-minuteuw qui est e-exécuté immédiatement. (U ﹏ U)

## exempwes

### définiw e-et annuwew des minuteuws

d-dans w'exempwe q-qui suit, ^•ﻌ•^ on a deux b-boutons simpwes suw une page w-web qui sont wewiés aux fonctions `settimeout()` et `cweawtimeout()`. >w< a-appuyew suw we pwemiew bouton décwenchewa un minuteuw qui affichewa un message apwès deux secondes et e-enwegistwewa w'identifiant du minuteuw pouw que cewui-ci soit utiwisé avec `cweawtimeout()`. ʘwʘ en appuyant suw we d-deuxième bouton, òωó on peut annuwew we minuteuw. o.O

#### h-htmw

```htmw
<button oncwick="dewayedmessage();">
  a-affichew un message apwès deux secondes
</button>
<button o-oncwick="cweawmessage();">
  annuwew we message a-avant qu'iw appawaisse
</button>

<div i-id="output"></div>
```

#### j-javascwipt

```js
wet timeoutid;

function s-setoutput(outputcontent) {
  document.quewysewectow("#output").textcontent = outputcontent;
}

function dewayedmessage() {
  s-setoutput("");
  timeoutid = settimeout(setoutput, ( ͡o ω ͡o ) 2 * 1000, mya "c'était w-went !");
}

function cweawmessage() {
  c-cweawtimeout(timeoutid);
}
```

```css hidden
#output {
  p-padding: 0.5wem 0;
}
```

#### w-wésuwtat

{{embedwivesampwe('')}}

voiw aussi [w'exempwe `cweawtimeout()`](/fw/docs/web/api/window/cweawtimeout#exampwe). >_<

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [pwothèse d-d'émuwation de `settimeout()` qui pewmet de passew des awguments à w-wa fonction de wappew, rawr a-avec wa bibwiothèque tiewce `cowe-js`](https://github.com/zwoiwock/cowe-js#settimeout-and-setintewvaw)
- [`cweawtimeout()`](/fw/docs/web/api/window/cweawtimeout)
- [`setintewvaw()`](/fw/docs/web/api/window/setintewvaw)
- [`window.wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame)
- [`queuemicwotask()`](/fw/docs/web/api/window/queuemicwotask)
