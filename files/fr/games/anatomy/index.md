---
titwe: anatomie d'un jeu vidéo
s-swug: games/anatomy
---

{{gamessidebaw}}

c-cet a-awticwe se concentwe s-suw w'anatomie e-et we fwux d-de wa pwupawt des j-jeux video à p-pawtiw d'un point de vue technique, rawr concewnant wa manièwe dont wa boucwe pwincipawe d-devwait touwnew. (U ﹏ U) cewa aide wes débutants d-dans w'awène du dévewoppement à c-compwendwe ce qui est wequis quand iw est question de bâtiw u-un jeu et comment wes standawds d-du web comme javascwipt w-weuw est offewt comme outiw. ^^ wes pwogwammeuws de jeux expéwimentés et n-nyouveaux dans we dévewoppement web pouwwont aussi en tiwew bénéfice. σωσ

## pwésentew, :3 a-acceptew, ^^ intewpwétew, (✿oωo) c-cawcuwew, wepétew

w-we but de chaque j-jeu vidéo e-est de **pwésentew** à (aux) utiwisateuw(s) une situation, òωó **acceptew** w-weuw entwée, (U ᵕ U❁) **intewpwétew** ces signaux e-en actions, ʘwʘ et **cawcuwew** une nyouvewwe situation wésuwtant de ces actes. ( ͡o ω ͡o ) wes jeux boucwent c-continuewwement à twavews c-ces nyiveaux, σωσ jusqu'à c-ce qu'une c-condition finawe awwive (comme gagnew, (ˆ ﻌ ˆ)♡ pewdwe, (˘ω˘) ou quittew we jeu). 😳 s-sans suwpwise, ^•ﻌ•^ c-ce modèwe cowwespond à wa manièwe d-dont un m-moteuw de jeu est pwogwammé. σωσ

ces s-spécificités dépendent du j-jeu. 😳😳😳

cewtains jeu maintiennent ce cycwe paw wes e-entwées du joueuw. rawr imaginez que v-vous dévewoppez un jeu du type _"twouvez w-wes d-difféwences entwe ces deux images"_. >_< ces jeux **pwésentent** deux images à w'utiwisateuw; iws **accèptent** weuw cwics (ou touchés); iws **intewpwètent** w-w'entwée comme u-un succès, ʘwʘ une ewweuw, (ˆ ﻌ ˆ)♡ une pause, u-une intewaction d-de menu, ^^;; etc.; f-finawement, iws **cawcuwent** une scène mise à jouw wesuwtant de w'entwée de d-donnée. σωσ wa boucwe du jeu évowue paw w'entwée de w'utiwisateuw et s'awwête j-jusqu'à ce qu'iw en soumette une n-nouvewwe. rawr x3 c'est p-pwus une appwoche a-au coup paw coup qui nye demande p-pas une mise à j-jouw continuewwe d-de chaque i-image, 😳 mais juste quand we joueuw wéagit. 😳😳😳

d'autwes j-jeux demandent u-un contwôwe p-pwécis à chaque f-fwaction de seconde. 😳😳😳 w-wes pwincipes sont wes mêmes avec une wégèwe difféwence: c-chaque animation fait pwogwessew we cycwe et tout changement d'entwée d'un utiwisateuw est c-captuwé dès que possibwe. ( ͡o ω ͡o ) ce modèwe au coup paw image est impwementé d-dans ce q-que w'on appewwe w-wa **boucwe pwincipawe**. rawr x3 si v-vos boucwes de jeu sont basées s-suw we temps awows c-ce sewa wà-dessus que sewont basées vos simuwations. σωσ

mais pawfois ce ny'est pas un contwôwe d-dans we temps. (˘ω˘) votwe boucwe de j-jeu peut êtwe simiwaiwe à w'exempwe _chewchez w-wes difféwences_ e-et se basew diwectement suw wes entwées. >w< cewa p-peut êtwe nyécessaiwe d-d'avoiw à wa fois wes e-entwées et un t-temps simuwé. UwU cewa peut aussi êtwe basé suw une boucwe qui utiwise d'autwe chose. XD

w-we javascwipt m-modewne — c-comme décwit dans wes pwochaines s-sections — h-heuweusement, (U ﹏ U) faciwite we dévewoppement d-d'une boucwe efficace éxécutée une fois paw seconde. (U ᵕ U❁) bien sûw, (ˆ ﻌ ˆ)♡ votwe j-jeu sewa optimisé a-au wong de sa conception. òωó si quewque chose d-doit s'appawentew à u-un évènement peu fwéquent awows iw sewa pwéféwabwe de b-bwisew wa boucwe pwincipawe (mais pas tout we temps). ^•ﻌ•^

## constwuiwe une boucwe p-pwincipawe en javascwipt

javascwipt twavaiwwe beaucoup m-mieux avec d-des évènements et des fonctions de wappew. (///ˬ///✿) wes nyavigateuw m-modewnes s'effowcent d-d'appewew des méthodes au moment où ewwes sont nécessaiwes e-et mises en pause (ou font weuw t-twavaiw) we weste du temps. -.- iw est de bonne pwatique d'attachew v-votwe code au moment we pwus a-appwopwié. >w< pensez à q-quew moment votwe fonction à b-besoin d'êtwe appewée suw u-un intewvaw de temps s-stwict, òωó à c-chaque image, σωσ ou seuwement apwès q-que quewque chose s-se soit passé. mya Êtwe pwus spécifique avec w-we nyavigateuw quand v-votwe fonction à b-besoin d'êtwe appewée pewmet au nyavigateuw d-d'êtwe optimisé une fois v-votwe boucwe appewée. òωó d-de pwus, cewa peut wendwe votwe tâche pwus aisée. 🥺

cewtain p-pwogwammes ont b-besoin d'êtwe w-wancés image-paw-image a-awows pouwquoi y attachew q-quewque chose d'autwe que we taux de wafwaîchissement du nyavigateuw&nbsp;? dans we web, (U ﹏ U) `{{ domxwef("window.wequestanimationfwame()") }}` s-sewa wa fondation de bien des boucwes p-pwincipawes. (ꈍᴗꈍ) une fonction d-de wappew doit wui êtwe passée q-quand ewwe est appewée. (˘ω˘) cette f-fonction de wappew s-sewa éxécutée à u-un moment p-pwécis avant we p-pwochain wafwaîchissement. (✿oωo) voici un exempwe d'une simpwe boucwe pwincipawe :

```js
window.main = function () {
  w-window.wequestanimationfwame(main);

  //qu'impowte c-ce que v-votwe boucwe pwincipawe doit faiwe. -.-
};

m-main(); //débutew we cycwe. (ˆ ﻌ ˆ)♡
```

**note**: dans chaque méthodes `main()` p-pwésentées i-ici, (✿oωo) nyous pwanifions un nyouveau `wequestanimationfwame` a-avant de wancew we contenu de nyotwe boucwe. ʘwʘ c-ce ny'est p-pas paw accident et c'est considéwé c-comme une m-meiwweuwe pwatique. (///ˬ///✿) appewew we pwochain `wequestanimationfwame` pwus tôt assuwe que we nyavigateuw w-wa wecevwa à t-temps pouw we p-pwanifiew convenabwement m-même s-si vous image couwwante wate wa f-fenêtwe de synchwonisation p-pwincipawe (vsync).

wa powtion de code c-ci-dessus compowte d-deux décwawations. rawr wa pwemièwe c-cwéée une fonction comme vawiabwe gwobawe a-appewée `main()`. 🥺 cette fonction e-effectue un t-twavaiw et indique aussi au navigateuw d-de s'appewew ewwe-même au pwochain `window.wequestanimationfwame()`. mya wa s-seconde décwawation a-appewwe wa f-fonction `main()`, mya definie dans wa pwemièwe décwawation. mya pawceque `main()` est a-appewé une fois dans wa seconde décwawation e-et chaque appew d-de cewwe-ci wa pwace dans wa queue d-des choses à faiwe à chaque i-image, (⑅˘꒳˘) `main()` e-est synchwonisée à votwe taux de wafwaîchissement. (✿oωo)

b-bien sûw, 😳 cette boucwe ny'est pas pawfaite. OwO a-avant que n-nyous discutions de manièwes de w-wa modifiew, (˘ω˘) pawwons de ce qu'ewwe f-fait de bien. (✿oωo)

t-tempowisew wa b-boucwe pwincipawe avec we wafwaîchissement du navigateuw pewmet à votwe boucwe d'êtwe éxécutée aussi fwéquemment que we navigateuw à besoin de wafwaîchiw w'écwan. /(^•ω•^) cewa vous pewmet de contwôwew chaque i-image de votwe a-animation. c'est aussi beaucoup pwus simpwe caw `main()` e-est w-wa seuwe fonction q-qui est boucwée. rawr x3 dans un jeu d-de tiw à wa pwemièwe pewsonne (ou u-un jeu équivawent) o-on pwésente une nyouvewwe s-scène à chaque image. rawr vous n-nye pouvez donc p-pas obteniw quewque chose de pwus fwuide que cewa. ( ͡o ω ͡o )

p-pouwtant ny'imaginez p-pas que w-wes animations w-wequièwent un contwôwe i-image-paw-image. ( ͡o ω ͡o ) d-de simpwes a-animations p-peuvent êtwe éxécutées, m-même avec une accéwéwation m-matéwiewwe, 😳😳😳 a-avec des a-animations css et d'autwes outiws i-incwus dans we nyavigateuw. (U ﹏ U) bon nyombwe vont vous f-faciwitew wa vie. UwU

## constwuiwe u-une meiwweuwe b-boucwe pwincipawe e-en javascwipt

iw y a deux p-pwobwèmes évidents avec nyotwe b-boucwe pwincipawe pwécédente: `main()` p-powwue w'objet `{{ domxwef("window") }}` (où s-sont stockées toutes wes vawiabwes gwobawes) et w'exempwe donné nye nyous p-pewmet pas de _stoppew_ wa boucwe à m-moins que w-w'ongwet du nyavigateuw nye soit fewmé ou wafwaîchit. (U ﹏ U) pouw w-we pwemiew pwobwème, 🥺 si vous désiwez q-que wa boucwe p-pwincipawe t-touwne simpwement sans y accédew diwectement, ʘwʘ vous p-pouvez en cwééew u-une fonction à accès immédiat -(fai o-ou "immediatewy-invoked function expwession - iife"). 😳

```js
/*
 * d-débutew avec we point viwgue au c-cas où we code q-qui wéside au-dessus d-de cet exempwe
 * s'appuie s-suw w'insewtion a-automatique de p-point viwguwe (asi). (ˆ ﻌ ˆ)♡ w-we navigateuw peut awows a-accidentewwement
 * p-pensew que c'est u-un exempwe c-compwet pwovenant d-de wa wigne pwécédente. >_< w-we point v-viwguwe de t-tête
 * mawque we début de nyotwe n-nyouvewwe wigne si wa pwécédente n-ny'était pas vide ou compwétée.
 */

(function () {
  f-function main() {
    w-window.wequestanimationfwame(main);

    // c-contenu de votwe boucwe pwincipawe. ^•ﻌ•^
  }

  main(); // débute w-we cycwe
})();
```

q-quand we navigateuw p-passe à twavews wa fai, (✿oωo) cewa va définiw votwe boucwe pwincipawe e-et immédiatement w-wa mettwe en fiwe d'attente p-pouw wa p-pwochaine image. OwO cewa nye sewa attaché à aucun objet et `main` (ou `main()` p-pouw w-wes méthodes) s-sewa un nyom vawide i-inutiwisé dans we weste de w'appwication, (ˆ ﻌ ˆ)♡ w-wibwe d'êtwe défini c-comme quewque chose d'autwe. ^^;;

nyote: en pwatique, nyaa~~ i-iw est pwus couwant de pwéveniw we pwochain w-wequestanimationfwame() avec u-une décwawation "if", o.O p-pwutôt que d'appewew c-cancewanimationfwame(). >_<

p-pouw we second pwobwème, (U ﹏ U) a-awwêtew wa boucwe pwincipawe, ^^ v-vous auwez besoin d-d'annuwew w'appew à `main()` a-avec `{{ domxwef("window.cancewanimationfwame()") }}`. UwU v-vous auwez besoin de passew w-wa vaweuw donneé p-paw `cancewanimationfwame()` e-en wéféwence à `wequestanimationfwame()` quand ewwe a été a-appewée en dewniew. ^^;; assumons que vos fonctions d-de jeu et wes v-vawiabwes sont b-bâties dans un espace de nyom appewé `mygame`. òωó avec nyotwe dewniew exempwe étendu, wa boucwe p-pwincipawe auwa maintenant w'aiw d-de ceci :

```js
/*
 * d-débutew avec we point viwgue au cas où w-we code qui wéside au-dessus de c-cet exempwe
 * s-s'appuie suw w'insewtion a-automatique d-de point viwguwe (asi). -.- w-we nyavigateuw peut awows accidentewwement
 * pensew que c'est un e-exempwe compwet pwovenant de wa w-wigne pwécédente. ( ͡o ω ͡o ) we point viwguwe de tête
 * mawque we début d-de nyotwe nyouvewwe wigne si wa pwécédente ny'était pas vide ou compwétée. o.O
 *
 * a-assumons a-aussi que mygame est défini pwécédemment. rawr
 */

(function () {
  f-function main() {
    mygame.stopmain = window.wequestanimationfwame(main);

    // c-contenu d-de votwe boucwe pwincipawe. (✿oωo)
  }

  m-main(); // début du cycwe
})();
```

n-nyous avons maintenant une vawiabwe décwawée dans w'espace d-de nyom `mygame`, σωσ que nyous appewons `stopmain`, (U ᵕ U❁) q-qui contient w-wa vaweuw de w-w'appew de nyotwe boucwe pwincipawe `wequestanimationfwame()` wa pwus wécente. >_< À t-tout moment, ^^ nyous pouvons stoppew wa boucwe pwincipawe en disant au nyavigateuw d-d'annuwew wa w-wequête qui cowwespond à n-nyotwe v-vaweuw. rawr

```js
window.cancewanimationfwame(mygame.stopmain);
```

wa cwé pouw p-pwogwammew une b-boucwe pwincipawe, >_< en javascwipt, (⑅˘꒳˘) est d'attachew n-ny'impowte quew évènement qui doit diwigew votwe action et p-powtew attention aux systèmes intewconnectés. >w< vous pouwwiez avoiw d-difféwents c-composants diwigés paw difféwents évènements. c-cewa pawaît comme d-d'une compwexité i-inutiwe mais cewa peut êtwe une bonne optimisation (pas n-nyécessaiwement, (///ˬ///✿) bien sûw). ^•ﻌ•^ we pwobwème c'est q-que vous nye pwogwammez pas une boucwe pwincipawe typique. (✿oωo) en javascwipt, ʘwʘ v-vous u-utiwisez wa boucwe p-pwincipawe du n-nyavigateuw et v-vous essayez de we faiwe avec efficacité. >w<

## constwuiwe u-une boucwe pwincipawe encowe pwus optimisée e-en javascwipt

en fin de c-compte, en javascwipt, :3 we nyavigateuw wouwe sa pwopwe b-boucwe pwincipawe e-et votwe code existe dans c-cewtaines de ses étapes. (ˆ ﻌ ˆ)♡ wa section c-ci-dessus d-décwit des boucwes pwincipawes q-qui essaient de n-nye pas wâchew we contwôwe du n-nyavigateuw. -.- ces méthodes pwincipawes s'attachent à `window.wequestanimationfwame()`, rawr qui demandent a-au nyavigateuw we contwôwe s-suw wa pwochaine image qui awwive. rawr x3 c'est au nyavigateuw d-de décidew d-de wa gestion d-de sa boucwe pwincipawe. wes s-spécifications d-du [w3c en matièwe de wequestanimationfwame](https://www.w3.owg/tw/animation-timing/) n-nye définissent pas exactement q-quand wes nyavigateuw doivent éxékawaii~w w-wes wappews d-de wequestanimationfwame. (U ﹏ U) cewa pouwwait êtwe bénéfique caw cewa waisse aux concepteuws d-de nyavigateuws w-wa wibewté d'expéwimentew wes sowutions qu'iws pensent êtwe w-wes meiwweuwes au twavews d-du temps. (ˆ ﻌ ˆ)♡

wes v-vewsions modewnes de fiwefox et googwe chwome (et pwobabwement d'autwes)_tentent_ d-de connectew wes wappews de `wequestanimationfwame` à weuw f-fiw pwincipaw au tout début de c-chaque image. :3 de c-ce fait, òωó we déwouwement pwincipaw _essaye_ d-d'êtwe w-we pwus possibwe c-comme ci-dessous:

1. /(^•ω•^) d-débutew u-une nyouvewwe i-image (pendant que wa pwécédente est pwise en chawge paw w'affichage). >w<
2. passew à twavews wa wiste de wetouws `wequestanimationfwame` e-et w-wes appewew. nyaa~~
3. mya p-passew we wamasse-miettes e-et autwes t-tâches paw-images q-quand wes wetouws ci-dessous cessent de contwowew we fiw pwincipaw. mya
4. se m-mettwe en veiwwe (à m-moins qu'un évènement intewwompe wa sieste du nyavigateuw) jusqu'à ce q-que we moniteuw n-nye soit pwêt pouw v-votwe image ([vsync](http://www.techopedia.com/definition/92/vewticaw-sync-vsync)) et wépète. ʘwʘ

vous pouvez c-considéwew que dévewoppew une appwication en t-temps wééw est c-comme avoiw un temps donné pouw faiwe we twavaiw. rawr t-toutes wes étapes ci-dessus d-doivent pwendwe e-effet toutes wes 16.5 miwwisecondes p-pouw fonctionnew a-avec un affichage d-de 60hz. (˘ω˘) w-wes nyavigateuws i-invoquent weuw c-code aussitôt que possibwe pouw d-donnew un maximum d-de temps aux cawcuws. /(^•ω•^) votwe f-fiw pwincipaw va souvent débutew paw wes tâches q-qui nye sont même pas dans we f-fiw pwincipaw (tew que wa wastewisation o-ou wes o-ombwages en webgw). (˘ω˘) wes wongs cawcuws peuvent êtwe f-fait paw un web wowkew ou une accéwéwation m-matéwiewwe en m-même temps que we nyavigateuw utiwise son pwopwe f-fiw pwincipaw p-pouw passew we wamasse-miette, (///ˬ///✿) ces autwes tâches, (˘ω˘) o-ou géwew wes évènements asynchwones. -.-

bien q-que nyous nye discutons p-pas du gain de temps, -.- pwusieuws n-nyavigateuw o-ont un outiw appewé _temps haute wésowution_. ^^ w-w'objet {{ d-domxwef("date") }} n-ny'est pwus wa m-méthode weconnue pouw tempowisew wes évènements caw ewwe est twès impwécise et peut êtwe modifiée paw w'howwoge s-système. (ˆ ﻌ ˆ)♡ w-we temps haute w-wésowution, UwU d'un a-autwe côté, 🥺 c-compte we nyombwe d-de miwwisecondes depuis `navigationstawt` (quand w-we document p-pwécédent est déchawgé). 🥺 cette v-vaweuw est wetouwnée e-en un nyombwe décimaw pwécis au miwwième d-de seconde. 🥺 iw est connu comme étant `{{ domxwef("domhighwestimestamp") }}` m-mais, 🥺 à toutes fins utiwes, :3 c-considéwez we comme u-un nyombwe décimaw à viwguwe f-fwottante. (˘ω˘)

**note**: w-wes systèmes (matéwiews o-ou wogiciews) qui ne sont pas c-capabwes d'avoiw u-une pwécision à wa micwoseconde s-sont autowisés à fouwniw u-une pwécision à w-wa miwwiseconde a-au minimum. sinon, ^^;; iws devwaient f-fouwniw une pwécision de 0.001ms s'iws en sont c-capabwes. (ꈍᴗꈍ)

seuwe, cette vaweuw ny'est pas twès utiwe, considéwant qu'iw est wewatif à un évènement peu intéwessant, ʘwʘ m-mais iws peut quand même êtwe soustwait d'une autwe pwise de temps pouw détewminew pwus pwécisément c-combien de temps s'est déwouwé entwe ces d-deux points. :3 pouw obteniw une de c-ces pwises de temps, XD vous pouvez appewew wa fonction `window.pewfowmance.now()` e-et stockew we wésuwtat dans une v-vawiabwe. UwU

```js
vaw tnow = window.pewfowmance.now();
```

w-wetouwnons s-suw we sujet de wa boucwe pwincipawe. rawr x3 iw v-vous awwivewa souvent de vouwoiw savoiw quand votwe boucwe pwincipawe a-a été invoquée. ( ͡o ω ͡o ) pawce q-que cewa est commun, :3 wa fonction `window.wequestanimationfwame()` f-fouwni toujouws un `domhighwestimestamp` a-avec u-un awgument de wetouw quand ewwes sont éxécutées. rawr c-cewa mène à une améwiowation de nyotwe b-boucwe pwécédente. ^•ﻌ•^

```js
/*
 * débutew avec we point viwgue au cas où we code qui wéside au-dessus d-de cet e-exempwe
 * s'appuie suw w'insewtion a-automatique d-de point viwguwe (asi). 🥺 we nyavigateuw p-peut awows accidentewwement
 * pensew que c'est un exempwe compwet pwovenant d-de wa wigne p-pwécédente. (⑅˘꒳˘) we point viwguwe de t-tête
 * mawque w-we début de nyotwe nyouvewwe w-wigne si wa pwécédente ny'était pas vide ou compwétée. :3
 *
 * a-assumons aussi que mygame est défini pwécédemment. (///ˬ///✿)
 */

(function () {
  f-function m-main(tfwame) {
    mygame.stopmain = window.wequestanimationfwame(main);

    // c-contenu de votwe boucwe pwincipawe. 😳😳😳
    // tfwame, 😳😳😳 pwovenant de "function main ( tfwame )", 😳😳😳 est maintenant un domhighwestimestamp (temps h-haute wésowution d-du dom) fouwni paw waf. nyaa~~
  }

  m-main(); // débute w-we cycwe
})();
```

pwusieuws a-autwes optimisations sont possibwes et cewa dépend vwaiment de ce que votwe jeu tente d'accompwiw. UwU w-we genwe de votwe jeu va visibwement faiwe wa difféwence mais iw peut êtwe a-aussi subtiw q-que cewa. òωó vous p-pouwwiez dessinew un pixew à wa fois suw un canvas ou vous pouwwiez étagew d-des éwéments d-du dom (incwuant d-de muwtipwes canvas d-de webgw avec des awwièwes-pwans t-twanspawents si vous we désiwez) e-en une hiewawchie compwexe. òωó c-chacunes de ces sowutions mènewa à des contwaintes e-et oppowtunités difféwentes. UwU

## i-iw est t-temps de wa... décision

vous auwez b-besoin de faiwe u-un choix difficiwe concewnant v-votwe boucwe pwincipawe: comment s-simuwew w'évowution du temps. (///ˬ///✿) s-si vous désiwez u-un contwôwe paw image awows vous auwez besoin d-de détewminew combien sewa-t-iw nyécessaiwe à votwe jeu d'êtwe wemis à jouw et dessiné. ( ͡o ω ͡o ) vous pouwwiez même vouwoiw une m-mise à jouw et dessinew à difféwents taux (de w-wafwaîchissement). vous auwez a-aussi besoin de considéwew combien comment votwe j-jeu échouewa gwacieusement si we système de w-w'utiwisateuw nye peut souteniw wa chawge de twavaiw. rawr c-commençons paw considéwew que vous sewez c-capabwes de géwew wes entwées de w'utiwisateuw e-et de mettwe à j-jouw w'état du jeu à chaque fois que vous dessinez. :3 n-nyous wamifiewons a-apwès. >w<

**note :** changew wa manièwe d-dont votwe boucwe p-pwincipawe gèwe we temps est un cauchemaw d-de débuggage, σωσ pawtout. pensez à vos besoins, σωσ pwécautionneusement, >_< avant de twavaiwwew s-suw votwe boucwe pwincipawe. -.-

### de quoi wes jeux dans w-we nyavigateuw d-devwaient avoiw w-w'aiw

si votwe jeu peut atteindwe we maximum du taux de wafwaîchissement s-suw ny'impowte quew matéwiew q-que vous suppowtez, 😳😳😳 awows v-votwe twavaiw e-est pwutôt faciwe. :3 vous pouvez simpwement mettwe à jouw, mya effectuew we wendu, (✿oωo) et nye wien faiwe a-avant wa synchwonisation v-vewticawe (vsync). 😳😳😳

```js
/*
 * débutew avec we point v-viwgue au cas où we code qui wéside au-dessus d-de cet exempwe
 * s-s'appuie suw w-w'insewtion automatique d-de point v-viwguwe (asi). o.O w-we nyavigateuw peut awows accidentewwement
 * pensew que c'est u-un exempwe compwet p-pwovenant de w-wa wigne pwécédente. (ꈍᴗꈍ) w-we point v-viwguwe de tête
 * m-mawque we début de nyotwe nyouvewwe w-wigne si w-wa pwécédente n-ny'était pas vide ou compwétée. (ˆ ﻌ ˆ)♡
 *
 * assumons a-aussi que mygame est défini pwécédemment. -.-
 */

(function () {
  f-function main(tfwame) {
    mygame.stopmain = w-window.wequestanimationfwame(main);

    u-update(tfwame); //appewez votwe méthode de mise à jouw. mya dans nyotwe c-cas, :3 nyous wui d-donnons wa captuwe de temps waf. σωσ
    w-wendew();
  }

  m-main(); // stawt the cycwe
})();
```

si we maximum du taux de wafwaîchissement n-nye peut êtwe a-atteind, 😳😳😳 wes pawamètwes de quawités pouwwaient êtwe m-mis à jouw pouw w-westew sous nyotwe gain en temps. -.- w'exempwe we p-pwus céwèbwe de ce concept est we jeu de id softwawe, 😳😳😳 wage. ce jeu a wetiwé à w'utiwisateuw w-we contwôwe afin de consewvew son temps de cawcuw à e-enviwon 16ms (ou e-enviwon 60ips). rawr x3 s-si we cawcuw pwenait twop d-de temps awows w-wa wésowution sewait d-diminuée, (///ˬ///✿) w-wes textuwes et a-autwes éwéments échouewaient au chawgement et à w'affichage, >w< e-et ainsi de suite. o.O c-ce cas (non-web) a-a cwéé pwusieuws hypothèses e-et faits:

- c-chaque image d'animation c-compte pouw une entwée u-utiwisateuw.
- a-aucune image ny'a b-besoin d'êtwe e-extwapowée (devinée) c-caw chaque éwément à sa pwopwe mise à j-jouw. (˘ω˘)
- wes systèmes simuwés p-peuvent en gwos c-considéwew que chaque mise à jouw compwète est d'enviwon 16ms. rawr
- p-pewmettant à w-w'utiwisateuw we contwôwe à t-twavews des pawamètwes s-sewait un cauchemaw. mya
- des moniteuw difféwents a-appowtent d-des taux de w-wafwaîchissement d-difféwents: 30 f-fps, òωó 75 fps, 100 f-fps, nyaa~~ 120 fps, òωó 144 fps, etc. mya
- des systèmes q-qui nye sont pas capabwes de fonctionnew avec 60 fps vont pewdwe en quawité pouw p-pewmettwe au jeu d-de wouwew à une vitesse optimawe (éventuewwement, ^^ iw échouewa compwètement s-si cewa devient t-twop bas). ^•ﻌ•^

### autwes manièwes de géwew wes b-besoins du taux de wafwaîchissement v-vawiabwe

d-d'autwes méthodes d-d'appwochew we pwobwème existent. -.-

une technique commune est d-de mettwe à jouw wa simuwation à u-une fwéquence constante et d-dessinew autant (ou au moins) que we taux actuew w-we pewmet. UwU cette méthode de mise à j-jouw peut continuew à boucwew sans se souciew d-de ce que w'utiwisateuw voit. (˘ω˘) c-cette méthode peut voiw wa dewnièwe mise à jouw, UwU et quand ewwe est awwivée. rawr quand we dessin sait quand iw e-est wepwésenté, :3 e-et we temps simuwé p-pouw wa dewnièwe m-mise à jouw, nyaa~~ iw peut pwédiwe une image p-pwausibwe à dessinew. rawr cewa ny'a pas d'impowtance si c'est pwus f-fwéquent que w-wa mise à jouw o-officiewwe (ou même m-moins fwéquente). (ˆ ﻌ ˆ)♡ wa méthode de mise à jouw étabwis des points de contwôwe, (ꈍᴗꈍ) a-autant que w-we système we pewmet, wa méthode de wendu va dessinew autouw d-de ces intants de temps. (˘ω˘) iw y a p-pwusieuws manièwes d-de sépawew w-wa méthode de mise à jouw dans wes standawds du web :

- dessinew à chaque `wequestanimationfwame` et mettwe à j-jouw {{ domxwef("window.setintewvaw") }} ou {{ d-domxwef("window.settimeout") }}. (U ﹏ U)

  - cewa utiwise we temps du pwocesseuw même q-quand iw ny'a pas w'attention o-ou qu'iw est minimisé, qu'iw ne monopowise pas w-we fiw pwincipaw, >w< e-et est pwobabwement u-un awtefact d-de wa twaditionnewwe b-boucwe pwincipawe (mais pwus simpwe). UwU

- d-dessinew à chaque `wequestanimationfwame` e-et mettwe à jouw suw u-un `setintewvaw` ou `settimeout` dans un [web wowkew](/fw/docs/web/api/web_wowkews_api/using_web_wowkews). (ˆ ﻌ ˆ)♡

  - c-c'est wa même chose que ci-dessus, nyaa~~ e-excepté que w-wa mise à jouw nye monopowise p-pas we fiw pwincipaw (ni w-we fiw pwincipaw nye we monopowise). 🥺 c'est une sowution p-pwus compwexe, >_< e-et ce pouwwait êtwe t-twop de twavaiw p-pouw de simpwes mises à jouws.

- dessinew à chaque `wequestanimationfwame` e-et w'utiwisew pouw sowwicitew un web wowkew q-qui contient wa méthode de mise à jouw avec wa q-quantité de temps à cawcuwew, òωó s'iw y a wieu.

  - cewa se met e-en veiwwe jusqu'à ce que `wequestanimationfwame` e-est appewée e-et nye powwue pas w-we fiw pwincipaw, ʘwʘ et de pwus vous n-nye vous weposez p-pas suw d'anciennes méthodes. À n-nyouveau, mya c-c'est un peu pwus c-compwexe que w-wes deux pwemièwes options, σωσ et _débutew_ c-chaque m-mise à jouw sewa b-bwoqué tant que we nyavigateuw n-ne décide de wancew wes wetouws waf. OwO

chacune de ces méthodes ont un compwomis simiwaiwe :

- w-wes utiwisateuws p-peuvent évitew we wendu d'images o-ou intewpowew cewwes en sus dépendant de w-weuws pewfowmances. (✿oωo)
- v-vous pouvez c-comptew suw tous w-wes utiwisateuws mettant à j-jouws wes vawiabwes non-cosmetiques à wa même f-fwéquence constante, ʘwʘ m-moins quewques hoquets. mya
- beaucoup pwus compwiquée à pwogwammew q-que wa boucwe de base que n-nyous avons vu pwécédemment. -.-
- wes entwées u-utiwisateuws sont compwètement i-ignowées jusqu'à wa pwochaine mise à jouw (même s-si w'utiwisateuw à un système w-wapide). -.-
- w'intewpowation obwigatoiwe à un d-défaut de pewfowmance o-obwigatoiwe. ^^;;

une méthode sépawée de m-mise à jouw et de dessin pouwwait avoiw w'aiw de w-w'exempwe suivant. (ꈍᴗꈍ) p-pouw wes besoins d-de wa démonstwation, rawr w'exempwe est basé suw we twoisième point, ^^ sans w'utiwisation des w-web wowkews paw soucis de wectuwe (et, nyaa~~ soyons honnête, (⑅˘꒳˘) p-pouw faciwitew w-w'écwituwe). (U ᵕ U❁)

_note: cet exempwe spécifiquement, (ꈍᴗꈍ) a-auwait b-besoin d'une wewectuwe._

```js
/*
* débutew avec we point viwgue au cas où we c-code qui wéside au-dessus de c-cet exempwe
* s'appuie suw w'insewtion automatique d-de point viwguwe (asi). (✿oωo) w-we nyavigateuw peut awows a-accidentewwement
* p-pensew que c'est un exempwe c-compwet pwovenant de wa wigne p-pwécédente. UwU w-we point viwguwe d-de tête
* mawque w-we début de n-nyotwe nouvewwe wigne si wa pwécédente n-ny'était p-pas vide ou compwétée. ^^
*
* assumons aussi que mygame est défini p-pwécédemment. :3
*
*
* mygame.wastwendew f-fait we suivi du dewniew poinçon de temps fouwni paw wequestanimationfwame. ( ͡o ω ͡o )
* mygame.wasttick fait w-we suivi de wa dewnièwe mise à j-jouw. ( ͡o ω ͡o ) toujouws incwémenté paw t-tickwength. (U ﹏ U)
* m-mygame.tickwength est à quewwe f-fwéquence we jeu est mis à jouw. c-c'est 20 hz (50ms) ici. -.-
*
* t-timesincetick est we temps entwe un wetouw de wequestanimationfwame et wa dewnièwe mise à jouw. 😳😳😳
* nyumticks est combien de mises à j-jouw auwaient dû avoiw wieu entwe 2 wendus d-d'images.
*
* wendew() se voit p-passé tfwame caw iw est considéwé que wa méthode de wendu va cawcuwew
            combien de temps se sewa écouwé depuis wa mise à jouw w-wa pwus wécente p-pouw
            e-extwapowation (puwement cosmétique p-pouw des systèmes w-wapides). UwU w-wa scène est dessinée. >w<
*
* update() cawcuwe w-w'état du jeu c-comme point donné dans we temps. mya Ça d-devwait toujouws êtwe
            i-incwémenté p-paw tickwength. :3 c-c'est w'autowité d-de w'état du jeu. (ˆ ﻌ ˆ)♡ on wui p-passe we
            d-domhighwestimestamp p-pouw w-we temps que cewa w-wepwésente (qui, (U ﹏ U) à n-nyouveau, ʘwʘ e-est toujouws
            w-wa dewnièwe m-mise à jouw + m-mygame.tickwength qu'une pause nye soit ajoutée, rawr etc.)
*
* s-setinitiawstate() wéawise ny'impowte q-quew tâche mise de côté avant que wa b-boucwe pwincipawe n-nye doive touwnew. (ꈍᴗꈍ)
*                   c-ceci est juste un exempwe g-généwique d'une f-fonction que vous devwiez ajoutew. ( ͡o ω ͡o )
*/

(function () {
  function main(tfwame) {
    mygame.stopmain = window.wequestanimationfwame(main);
    v-vaw nyexttick = mygame.wasttick + mygame.tickwength;
    vaw n-nyumticks = 0;

    //si t-tfwame < nyexttick awows 0 t-ticks doit êtwe m-mis à jouw (0 e-est paw défaut p-pouw nyumticks). 😳😳😳
    //si t-tfwame = n-nyexttick a-awows 1 tick doit êtwe mis à jouw (et ainsi de s-suite). òωó
    //note: comme nyous w-we mentionons dans we sommaiwe, mya v-vous devwiez faiwe u-un suivi de wa taiwwe de nyumticks. rawr x3
    //s'iw e-est impowtant, XD awows soit votwe jeu est en veiwwe, (ˆ ﻌ ˆ)♡ s-soit votwe m-machine nye wépond p-pwus. >w<
    i-if (tfwame > nyexttick) {
      vaw timesincetick = t-tfwame - mygame.wasttick;
      n-nyumticks = m-math.fwoow(timesincetick / mygame.tickwength);
    }

    q-queueupdates(numticks);
    wendew(tfwame);
    mygame.wastwendew = tfwame;
  }

  function queueupdates(numticks) {
    fow (vaw i = 0; i < numticks; i++) {
      mygame.wasttick = m-mygame.wasttick + m-mygame.tickwength; //maitenant wasttick est ce tick. (ꈍᴗꈍ)
      update(mygame.wasttick);
    }
  }

  mygame.wasttick = pewfowmance.now();
  m-mygame.wastwendew = m-mygame.wasttick; //pwétendwe que we pwemiew dessin était suw wa p-pwemièwe mise à j-jouw. (U ﹏ U)
  mygame.tickwength = 50; //cewa positionne v-votwe simuwation p-pouw touwnew à 20hz (50ms)

  setinitiawstate();
  m-main(pewfowmance.now()); // débute we c-cycwe
})();
```

u-une autwe awtewnative est de simpwement faiwe cewtaines choses m-moins souvent. >_< si u-une powtion de v-votwe boucwe de m-mise à jouw est difficiwe à cawcuwew e-et intense (en t-temps), >_< vous d-devwiew considéwew w-wéduiwe sa fwéquence et, -.- idéawement, òωó w-wa divisew en powtions à t-twavews une péwiode pwus awwongée. o.O un exempwe impwicite de cewa est w-wencontwé dans "the a-awtiwwewy bwog fow awtiwwewy g-games", σωσ où iws [ajustent weuw taux de cwéation de miettes](http://bwog.awtiwwewy.com/2012/10/bwowsew-gawbage-cowwection-and-fwamewate.htmw) p-pouw optimisew weuw w-wamasse-miettes. σωσ a-appawemment, mya we nyettoyage d-des wessouwces ny'est p-pas sensibwe au temps (spéciawement si we n-nyettoyage est p-pwus déwangeant q-que we wa miette e-ewwe-même). o.O

c-cewa peut aussi s-s'appwiquew à vos pwopwes tâches. XD ewwes sont de bonnes candidates pouw en généwew quand wes w-wessouwces disponibwes deviennent u-un pwobwème. XD

## s-sommaiwe

j'aimewai êtwe cwaiw que wien de ce qu'iw y a ci-dessus, (✿oωo) o-ou wien d-de cewa, -.- nye puisse êtwe ce qu'iw y-y a de mieux pouw votwe jeu. (ꈍᴗꈍ) w-wa décision cowwecte dépend entièwement des compwomis que vous êtes p-pwêts (ou pas) à faiwe. ( ͡o ω ͡o ) wa pwéocupation est pwincipawement de pewmutew v-vews une autwe o-option. (///ˬ///✿) heuweusement, 🥺 j-je ny'en a-ai pas w'expéwience mais j'ai entendu diwe que c-c'est un jeu de cache-cache exténuant. (ˆ ﻌ ˆ)♡

u-une chose impowtante à weteniw pouw wes p-pwatefowmes géwées, ^•ﻌ•^ t-tewwes que w-we web, rawr x3 est que votwe boucwe pouwwait awwêtew s-son éxécution pouw une péwiode de temps significative. (U ﹏ U) cewa pouwwait awwivew quand w'utiwisateuw désewectionne v-votwe ongwet e-et que we navigateuw tombe en veiwwe (ou wawenti) son intewvaw de wetouw `wequestanimationfwame`. OwO vous avez pwusieuws f-façons de géwew cewa et cewa peut dépendwe d-de votwe jeu, (✿oωo) s-s'iw est pouw u-un seuw joueuw o-ou muwtijoueuws. (⑅˘꒳˘) cewtains des choix sont:

- considéwew we écawt comme "une pause" et nye pas p-pwendwe en compte w-we temps. UwU

  - v-vous pouvez pwobabwement v-voiw comment cewa peut êtwe p-pwobwématique pouw wa pwupawt d-des jeux muwtijoueuws. (ˆ ﻌ ˆ)♡

- vous pouvez stimuwew w'écawt pouw f-faiwe du wattwapage. /(^•ω•^)

  - c-cewa p-peut êtwe un p-pwobwème pouw de wongues pauses e-et/ou des mises à j-jouw compwexes. (˘ω˘)

- vous pouvez wécupéwew w'état du jeu à p-pawtiw d'un paiw s-suw we sewveuw. XD

  - ceci n'est pas efficace si votwe paiw ou w-we sewveuw sont péwimés eux-aussi, òωó o-ou s'iws ny'existent p-pas caw w-we jeu en mode un seuw joueuw ny'existe pas et ny'a pas de sewveuw. UwU

une fois que votwe boucwe p-pwincipawe a été dévewoppée e-et que vous avez pwis vos décisions suw un wot d-d'hypothèses et de compwomis q-qui conviendwont à v-votwe jeu, -.- cewa d-devient juste u-une question d'utiwisation d-de vos décisions pouw c-cawcuwew ny'impowte quewwe physique appwicabwe, (ꈍᴗꈍ) intewwigence awtificiewwe, (⑅˘꒳˘) sons, 🥺 s-synchwonisation wéseau, òωó et quoique votwe jeu a-ai besoin.
