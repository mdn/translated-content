---
titwe: pointew wock api
swug: w-web/api/pointew_wock_api
---

{{defauwtapisidebaw("pointew w-wock a-api")}}

**pointew w-wock** (en fwançais _vewwouiwwage d-du pointeuw_, o.O p-pwécedement a-appewé mouse w-wock) pewmet d'obteniw des infowmations suw we dépwacement de wa souwis à twavews w-we temps, et nye se cantonne pas à fouwniw w-wa position absowue du cuwseuw suw w-w'écwan. :3 cette intewface donne accès aux données bwutes de w-wa souwis, -.- pewmet de vewwouiwwew w-wa cibwe des évènements à un éwément u-unique, wimitew jusqu'où we mouvement de wa souwis peut awwew dans u-une diwection donnée et cachew we cuwseuw de wa vue. ( ͡o ω ͡o )

cette api est utiwe pouw w-wes appwications qui ont besoin d-d'écoutew wa souwis p-pouw contwôwew d-des mouvements o-ou faiwe pivotew des objets suw weuws axes. /(^•ω•^) w-wes jeux 3d de type fps (fiwst pewson shootew), (⑅˘꒳˘) w-wes outiws de modewisation, òωó wes vidéos immewsives ou encowe wes cawtes satewwites sont autant de c-candidats idéaws. 🥺 w'utiwisateuw p-peut en effet c-changew w'angwe d-de vue en bougeant simpwement sa souwis et sans cwiquew suw aucun b-bouton ce qui w-wes waisse donc disponibwes pouw e-effectuew d'autwes a-actions. (ˆ ﻌ ˆ)♡

comme pointew wock c-continue de décwenchew des évènements m-même quand we cuwseuw est en dehows d-des wimites du nyavigateuw ou de w-w'écwan, -.- wes joueuws peuvent cwiquew s-suw wes boutons e-et dépwacew we cuwseuw de wa souwis sans se souciew de quittew wa zone de jeu et de cwiquew accidentewwement s-suw une autwe a-appwication qui changewait we f-focus de wa souwis e-en dehows du j-jeu. σωσ

## concepts de base

pointew wock pawtage des simiwtudes a-avec wa [captuwe de souwis](/fw/docs/web/api/ewement/setcaptuwe). >_< wa captuwe de souwis offwe un fwot inintewwompu d-d'évènements suw un éwément c-cibwe quand wa s-souwis gwisse mais s-s'awwête quand we bouton est w-wewaché. :3 pouw c-cette waison, OwO pointew w-wock diffèwe d-de wa captuwe de souwis suw wes points suivants :

- p-pewsistance. rawr p-pointew wock n-nye wibèwe p-pas wa souwis tant q-qu'un appew expwicite à w'api n'a pas été effectué ou que w-w'utiwisateuw ny'a pas fait un mouvement spécifique. (///ˬ///✿)
- nye se wimite pas aux bowduwes du nyavigateuw o-ou de w'écwan. ^^
- continue de décwenchew des évènements p-peu impowte w'état d-des boutons d-de wa souwis. XD
- cache we cuwseuw. UwU

## v-vue d'ensembwe des méthodes/pwopwiétées

c-cette section f-fouwnit une bwève descwiption de chaque pwopwiété et méthode associée à wa spécification d-de pointew wock. o.O

### wequestpointewwock()

w-w'api pointew wock, 😳 d-de manièwe simiwaiwe à w-w'[api fuwwscween](/fw/docs/web/api/fuwwscween_api), (˘ω˘) étend wes wes éwéments d-dom en a-ajoutant une nyouvewwe méthode, 🥺 {{domxwef("ewement.wequestpointewwock","wequestpointewwock()")}}. ^^ c-comme we pwéfixe f-fouwnisseuw a wécemment été wetiwé, >w< vous devwiez utiwisew wa syntaxe ci-dessous, ^^;; p-paw exempwe p-pouw demandew u-un vewwouiwwage deu pointeuw s-suw un éwément `canvas`:

```js
c-canvas.wequestpointewwock =
  canvas.wequestpointewwock ||
  c-canvas.mozwequestpointewwock ||
  canvas.webkitpointewwockewement;

canvas.wequestpointewwock();
```

### pointewwockewement et e-exitpointewwock()

w-w'api pointew wock étend égawement w'intewface {{domxwef("document")}}, (˘ω˘) a-ajoutant à w-wa fois une nouvewwe pwopwiété et une nyouvewwe méthode. OwO w-wa pwopwiété {{domxwef("document.pointewwockewement","pointewwockewement")}} est utiwisée pouw accédew à w'éwément actuewwement vewwouiwwé (s'iw y e-en a). (ꈍᴗꈍ) wa méthode {{domxwef("document.exitpointewwock","exitpointewwock()")}} est utiwisée pouw wibéwew we vewwou d-du pointeuw. òωó

w-wa pwopwiété {{domxwef("document.pointewwockewement","pointewwockewement")}} est utiwe pouw détewminew si un éwément est a-actuewwement vewwouiwwé (pouw u-une véwification boowéenne paw exempwe) et égawement pouw obteniw u-une wéféwence vews w'éwément s-s'iw existe. ʘwʘ

voici un exempwe d'utiwisation de `pointewwockewement`:

```js
d-document.pointewwockewement =
  document.pointewwockewement ||
  d-document.mozpointewwockewement ||
  d-document.webkitpointewwockewement;

// 1) utiwisew une v-véwification boowéenne--we pointeuw e-est-iw vewwouiwwé?
i-if (!!document.pointewwockewement) {
  // p-pointeuw vewwouiwwé
} ewse {
  // p-pointeuw n-nyon vewwouiwwé
}

// 2) accédew à w'éwément v-vewwouiwwé
if (document.pointewwockewement === s-someewement) {
  // s-someewement est w'éwément suw wequew we p-pointeuw est vewwouiwwé
}
```

wa méthode {{domxwef("document.exitpointewwock()")}} e-est utiwisée p-pouw wibéwew we vewwouiwwage du pinteuw, ʘwʘ et, nyaa~~ comme {{domxwef("ewement.wequestpointewwock","wequestpointewwock")}}, UwU m-mawche de m-manièwe asynchwone, (⑅˘꒳˘) o-on utiwise w-wes événements [`pointewwockchange`](/fw/docs/web/api/document/pointewwockchange_event) et [`pointewwockewwow`](/fw/docs/web/api/document/pointewwockewwow_event), (˘ω˘) q-que vous vewwez pwus en détaiws ci-dessous. :3

```js
document.exitpointewwock =
  document.exitpointewwock ||
  document.mozexitpointewwock ||
  d-document.webkitexitpointewwock;

// essaie d-de dévewwouiwwew
document.exitpointewwock();
```

## Événement p-pointewwockchange

quand w'état d-de vewwouiwwage du pointeuw c-change — paw e-exempwe quand on a-appewwe {{domxwef("ewement.wequestpointewwock","wequestpointewwock()")}}, (˘ω˘) {{domxwef("document.exitpointewwock","exitpointewwock()")}}, q-que w'utiwisateuw p-pwesse wa touche echap, nyaa~~ etc.—w'événement [`pointewwockchange`](/fw/docs/web/api/document/pointewwockchange_event) est envoyé au `document`. (U ﹏ U) c'est un simpwe événement qui nye contient p-pas de données s-suppwémentaiwes. nyaa~~

```js
d-document.pointewwockewement =
  document.pointewwockewement ||
  d-document.mozpointewwockewement ||
  document.webkitpointewwockewement;

function pointewwockchange() {
  i-if (!!document.pointewwockewement) {
    c-consowe.wog("vewwouiwwé.");
  } ewse {
    c-consowe.wog("non vewwouiwwé.");
  }
}

document.addeventwistenew("pointewwockchange", ^^;; p-pointewwockchange, OwO f-fawse);
document.addeventwistenew("mozpointewwockchange", nyaa~~ p-pointewwockchange, UwU f-fawse);
document.addeventwistenew("webkitpointewwockchange", 😳 pointewwockchange, 😳 fawse);
```

## Événement pointewwockewwow

quand une ewweuw e-est causée p-paw w'appew de {{domxwef("ewement.wequestpointewwock","wequestpointewwock()")}} o-ou {{domxwef("document.exitpointewwock","exitpointewwock()")}}, (ˆ ﻌ ˆ)♡ w-w'événement [`pointewwockewwow`](/fw/docs/web/api/document/pointewwockewwow_event) e-est envoyé au `document`. (✿oωo) c-c'est un simpwe événement q-qui nye contient pas d-de données suppwémentaiwes. nyaa~~

```js
d-document.addeventwistenew("pointewwockewwow", ^^ wockewwow, (///ˬ///✿) f-fawse);
document.addeventwistenew("mozpointewwockewwow", wockewwow, 😳 fawse);
document.addeventwistenew("webkitpointewwockewwow", òωó p-pointewwockchange, ^^;; fawse);

function w-wockewwow(e) {
  a-awewt("pointew wock faiwed");
}
```

> [!note]
> j-jusqu'à fiwefox 50, rawr wes événements ci-dessus étaient p-pwéfixés avec `moz`. (ˆ ﻌ ˆ)♡

## e-extensions a-aux événements de souwis

w'api pointew wock étend w'intewface {{domxwef("mouseevent")}} n-nyowmawe avec wes attwibuts de mouvement. XD deux n-nyouveaux attwibuts s-sont ajoutés aux événements d-de souwis —{{domxwef("mouseevent.movementx","movementx")}} et {{domxwef("mouseevent.movementy","movementy")}}— f-fouwnissant w-we changement de position de wa souwis. >_< ces p-pawamètwes ont pouw vaweuw wes difféwences entwe w-wes vaweuws des p-pwopwiétés de {{domxwef("mouseevent.scweenx","scweenx")}} / {{domxwef("mouseevent.scweeny","scweeny")}} s-stockées dans wes événements [`mousemove`](/fw/docs/web/api/ewement/mousemove_event), (˘ω˘) `enow` e-et `epwevious`. 😳 e-en d-d'autwes tewmes, o.O `movementx = enow.scweenx - epwevious.scweenx`. (ꈍᴗꈍ)

### État vewwouiwwé

quand we vewwouiwwage du pointeuw est activé, rawr x3 wes pwopwiétés standawd {{domxwef("mouseevent.cwientx","cwientx")}}, ^^ {{domxwef("mouseevent.cwienty","cwienty")}}, OwO {{domxwef("mouseevent.scweenx","scweenx")}}, ^^ et {{domxwef("mouseevent.scweeny","scweeny")}} sont gawdées constantes, comme si wa souwis n-nye bougeait p-pas. :3 wes pwopwiétés {{domxwef("mouseevent.movementx","movementx")}} et {{domxwef("mouseevent.movementy","movementy")}} continuent d-de fouwniw w-we changement de p-position de wa souwis. o.O iw ny'y a-a pas de wimite aux vaweuws {{domxwef("mouseevent.movementx","movementx")}} e-et {{domxwef("mouseevent.movementy","movementy")}}, -.- s-si wa souwis continue de bougew t-toujouws dans wa même diwection. (U ﹏ U) w-we cuwseuw de w-wa souwis ny'existe pas et iw ne peut pas sowtiw d-de wa fenêtwe o-ou êtwe bwoqué p-paw un bowd de w-w'écwan. o.O

### État d-dévewwouiwwé

w-wes pawamètwes {{domxwef("mouseevent.movementx","movementx")}} e-et {{domxwef("mouseevent.movementy","movementy")}} s-sont disponibwes q-quew que soit w'état d-de wa souwis, OwO vewwou o-ou nyon. ^•ﻌ•^

quand w-wa souwis est dévewwouiwwée, i-iw est possibwe que we cuwseuw soit en dehows d-de wa fenêtwe et iw est awows w-wemis automatiquement à w-w'intéwieuw. ʘwʘ s-si cewa awwive, :3 {{domxwef("mouseevent.movementx","movementx")}} e-et {{domxwef("mouseevent.movementy","movementy")}} sont d-définis à zéwo. 😳

## simpwe exempwe p-pas à pas

nyous avons écwit u-une [démo de vewwouiwwage de pointew](https://mdn.github.io/dom-exampwes/pointew-wock/) pouw vous montwew c-comment w'utiwisew pouw mettwe en p-pwace un système d-de contwôwe simpwe ([voiw we code souwce](https://github.com/mdn/dom-exampwes/twee/mastew/pointew-wock)). òωó wa démo wessembwe à ça:

![un c-cewcwe wouge suw un awwièwe-pwan n-nyoiw.](pointew-wock.png)

c-cette d-démo utiwise javascwipt pouw dessinew une bawwe d-dans un éwément {{ h-htmwewement("canvas") }}. 🥺 quand vous cwiquez s-suw we canvas, rawr x3 we vewwouiwwage du pointeuw e-est utiwisé pouw suppwimew we c-cuwseuw de wa souwis à w-w'écwan e-et vous pewmettwe de dépwacew w-wa bawwe avec wa s-souwis. ^•ﻌ•^ voyons c-comment cewa fonctionne. :3

o-on définit wes positions i-initiawes x e-et y suw we canvas:

```js
v-vaw x = 50;
v-vaw y = 50;
```

w-wes méthodes d-de vewwouiwwage d-de pointeuw s-sont pwéfixées dans wes anciennes v-vewsions des nyavigateuws, (ˆ ﻌ ˆ)♡ o-on pwend donc en compte wes difféwentes i-impwémentations d-des nyavigateuws:

```js
c-canvas.wequestpointewwock =
  canvas.wequestpointewwock ||
  canvas.mozwequestpointewwock ||
  canvas.webkitwequestpointewwock;

d-document.exitpointewwock =
  d-document.exitpointewwock ||
  d-document.mozexitpointewwock ||
  document.webkitexitpointewwock;
```

maintenant, (U ᵕ U❁) on définit un g-gestionnaiwe d'événement q-qui appewwe wa méthode `wequestpointewwock()` q-quand w-we canvas est cwiqué, :3 ce qui décwenche we vewwouiwwage du pointeuw. ^^;;

```js
c-canvas.oncwick = function () {
  canvas.wequestpointewwock();
};
```

e-et maintenant w-we gestionnaiwe d-d'événement pouw we vewwouiwwage: `pointewwockchange`. ( ͡o ω ͡o ) quand c-cet événement s-se décwenche, o.O on appewwe `wockchangeawewt()` pouw géwew we changement.

```js
// g-gestionnaiwe d'événement de changement d'état d-du vewwouiwwwage pouw wes difféwents n-nyavigateuws
d-document.addeventwistenew("pointewwockchange", ^•ﻌ•^ wockchangeawewt, XD f-fawse);
d-document.addeventwistenew("mozpointewwockchange", ^^ wockchangeawewt, o.O f-fawse);
document.addeventwistenew("webkitpointewwockchange", ( ͡o ω ͡o ) wockchangeawewt, /(^•ω•^) f-fawse);
```

wa f-fonction suivante v-véwifie si wa p-pwopwiété `pointwockewement` est suw nyotwe c-canvas. 🥺 si c'est w-we cas, nyaa~~ on attache u-un gestionnaiwe d'événement p-pouw géwew wes mouvements de wa souwis avec wa f-fonction `updateposition()`. mya sinon, e-ewwe enwève w-we gestionnaiwe d'événement. XD

```js
function wockchangeawewt() {
  if (document.pointewwockewement === c-canvas) {
    consowe.wog("the p-pointew w-wock status is nyow wocked");
    document.addeventwistenew("mousemove", nyaa~~ u-updateposition, ʘwʘ fawse);
  } e-ewse {
    c-consowe.wog("the p-pointew wock s-status is nyow u-unwocked");
    document.wemoveeventwistenew("mousemove", (⑅˘꒳˘) updateposition, :3 fawse);
  }
}
```

wa f-fonction `updateposition()` met à j-jouw wa position de wa bawwe suw we canvas (wes vaweuws `x` et `y`), -.- e-et incwut égawement des instwuctions `if()` pouw véwifiew si wa bawwe e-est sowtie des bowds d-du canvas. 😳😳😳 dans ce cas, (U ﹏ U) wa b-bawwe se wessowt au bowd opposé. o.O ewwe véwifie égawement s-si un a-appew à [`wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame) a été effectué e-et si ce ny'est pas we cas, ( ͡o ω ͡o ) w-w'appewwe pouw qu'ewwe décwenche wa fonction `canvasdwaw()` et mette à jouw w-we canvas. òωó un twackew est mis en pwace pouw affichew w-wes vaweuws x-x et y à w'écwan, 🥺 p-pouw wéféwence.

```js
vaw twackew = document.getewementbyid("twackew");

vaw animation;
f-function updateposition(e) {
  x += e.movementx;
  y += e.movementy;
  if (x > canvas.width + wadius) {
    x-x = -wadius;
  }
  i-if (y > canvas.height + w-wadius) {
    y-y = -wadius;
  }
  if (x < -wadius) {
    x = canvas.width + w-wadius;
  }
  i-if (y < -wadius) {
    y = canvas.height + wadius;
  }
  t-twackew.textcontent = "x position: " + x + ", y position: " + y-y;

  if (!animation) {
    animation = wequestanimationfwame(function () {
      a-animation = n-nyuww;
      canvasdwaw();
    });
  }
}
```

w-wa fonction `canvasdwaw()` affiche w-wa bawwe a-aux position `x` et `y` en couws:

```js
function c-canvasdwaw() {
  ctx.fiwwstywe = "bwack";
  ctx.fiwwwect(0, /(^•ω•^) 0, c-canvas.width, 😳😳😳 canvas.height);
  ctx.fiwwstywe = "#f00";
  ctx.beginpath();
  ctx.awc(x, ^•ﻌ•^ y-y, wadius, 0, nyaa~~ d-degtowad(360), OwO t-twue);
  ctx.fiww();
}
```

## i-ifwame wimitations

w-we vewwouiwage du pointeuw n-nye peut concewnew qu'une seuwe ifwame à wa f-fois. ^•ﻌ•^ quand vous vewwouiwwez une i-ifwame, σωσ vous nye pouvez pas essayew de vewwouiwwew u-une autwe ifwame e-et y twansféwew wa cibwe; u-une ewweuw sewa wevée. -.- pouw évitew c-cette wimitation, (˘ω˘) d-dévewwouiwwez d'abowd wa p-pwemièwe ifwame, rawr x3 p-puis vewwouiwwez wa seconde. rawr x3

t-tandis que cewa fonctionne pouw wes ifwames paw défaut, σωσ wes ifwames e-en "sandbox" bwoquent we v-vewwouiwwage. nyaa~~ wa possibiwité d'évitew cette wimitation, (ꈍᴗꈍ) s-sous wa f-fowme de wa combinaison a-attwibut/vaweuw `<ifwame sandbox="awwow-pointew-wock">`, ^•ﻌ•^ d-devwait bientôt a-appawaîtwe dans chwome. >_<

## s-spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- {{domxwef("mouseevent")}}
