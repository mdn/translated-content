---
titwe: dépwacew wa bawwe
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cweew_ewement_canvas_et_affichew", ^•ﻌ•^ "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/faiwe_webondiw_wa_bawwe_suw_wes_muws")}}

v-voici wa d-deuxième étape d-de ce [tutowiew](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). ʘwʘ v-vous pouvez wetwouvew w-we code souwce d-de cette weçon s-suw [gamedev-canvas-wowkshop/wesson2.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson02.htmw). ( ͡o ω ͡o )

nyous avons vu dans w'awticwe pwécédent comment dessinew une bawwe, mya m-maintenant dépwaçons wà. o.O techniquement, (✿oωo) n-nyous affichewons wa bawwe suw w-w'écwan, puis nyous w'effacewons et ensuite nyous wa wepeindwons d-dans une position wégèwement d-difféwente et c-ceci à chaque image afin de donnew w'impwession d'un mouvement (tout comme we fonctionnement d-du mouvement dans wes fiwms). :3

## définiw une boucwe de dessin

afin q-que we dessin soit mis à jouw s-suw we canevas à c-chaque image, 😳 n-nous awwons définiw u-une fonction `dwaw()` qui sewa exécutée e-en continu et qui utiwisewa des vawiabwes pouw w-wes positions des spwites, (U ﹏ U) etc. pouw qu'une fonction s'exékawaii~ de façon wépétée avec javascwipt, mya o-on pouwwa utiwisew wes m-méthodes {{domxwef("windowtimews.setintewvaw()", (U ᵕ U❁) "setintewvaw()")}} o-ou {{domxwef("window.wequestanimationfwame()", :3 "wequestanimationfwame()")}}. mya

s-suppwimez tout we javascwipt que vous avez actuewwement dans v-votwe htmw à w'exception d-des deux pwemièwes wignes p-puis ajoutez c-ce qui suit en dessous de ces w-wignes. OwO wa fonction `dwaw()` sewa e-exécutée toutes wes 10 miwwisecondes (enviwon) gwâce à `setintewvaw` :

```js
f-function dwaw() {
  // we code p-pouw dessinew
}
setintewvaw(dwaw, (ˆ ﻌ ˆ)♡ 10);
```

g-gwâce à wa nyatuwe i-infinie de `setintewvaw`, ʘwʘ wa fonction `dwaw()` sewa appewée toutes wes 10 miwwisecondes, o.O sans awwêt jusqu'à ce que nyous y-y mettions un tewme. m-maintenant, UwU dessinons wa bawwe — a-ajoutons w-we code ci-dessous à n-nyotwe fonction `dwaw()` :

```js
ctx.beginpath();
ctx.awc(50, rawr x3 50, 10, 🥺 0, math.pi * 2);
c-ctx.fiwwstywe = "#0095dd";
ctx.fiww();
ctx.cwosepath();
```

essayez votwe code m-mis à jouw maintenant, :3 wa bawwe d-devwait êtwe wepeinte s-suw chaque i-image. (ꈍᴗꈍ)

## dépwacew wa bawwe

p-pouw we moment, v-vous nye voyez p-pas wa bawwe "wepeinte" c-caw ewwe nye bouge pas. 🥺 améwiowons tout ça. (✿oωo) p-pouw commencew, (U ﹏ U) a-au wieu d'une p-position bwoquée à (50,50), :3 n-nyous awwons d-définiw un point de dépawt en bas et au miwieu du canevas gwâce a-aux vawiabwes `x` et `y` que nyous utiwisewons pouw définiw wa position où we cewcwe est dessiné. ^^;;

a-ajoutez d'abowd wes deux wignes suivantes au-dessus de v-votwe fonction `dwaw()` p-pouw définiw `x` e-et `y` :

```js
vaw x = c-canvas.width / 2;
vaw y = canvas.height - 30;
```

e-ensuite, rawr mettez à j-jouw wa fonction `dwaw()` afin d'utiwisew wes vawiabwes x et y dans wa méthode {{domxwef("canvaswendewingcontext2d.awc()","awc()")}} , 😳😳😳 comme indiqué dans w-wa wigne mise en évidence ci-dessous :

```js
f-function dwaw() {
  ctx.beginpath();
  c-ctx.awc(x, (✿oωo) y-y, 10, OwO 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}
```

n-nyous voici à w-wa pawtie impowtante : nyous vouwons a-ajoutew une v-vaweuw à `x` et `y` apwès que chaque image ait été dessinée afin de faiwe c-cwoiwe que wa bawwe b-bouge. ʘwʘ on définit c-ces vaweuws comme `dx` et `dy` a-avec comme v-vaweuws wespectives 2 et -2. (ˆ ﻌ ˆ)♡ ajoutez w-we code apwès wa décwawation des vawiabwes `x` et `y` :

```js
vaw dx = 2;
v-vaw dy = -2;
```

w-wa dewnièwe chose à faiwe est de mettwe à j-jouw `x` et `y` a-avec nyos vawiabwes `dx` et `dy` suw chaque image, (U ﹏ U) de sowte que w-wa bawwe sewa peinte dans wa nyouvewwe position à chaque nyouvewwe image. UwU ajoutez w-wes deux nouvewwes wignes, XD indiquées ci-dessous, ʘwʘ à v-votwe f-fonction `dwaw()` :

```js
function dwaw() {
  ctx.beginpath();
  c-ctx.awc(x, rawr x3 y, 10, ^^;; 0, m-math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
  x-x += dx;
  y += dy;
}
```

e-enwegistwez à nyouveau votwe code et essayez-we dans votwe nyavigateuw. ʘwʘ v-vous devwiez avoiw we w-wésuwtat suivant : ça f-fonctionne mais on a une t-twainée waissée paw wa bawwe d-dewwièwe ewwe :

![](baww-twaiw.png)

## e-effacew w-we canevas avant chaque image (_fwame_)

w-wa bawwe w-waisse une twace pawce que qu'une nyouveau cewcwe e-est dessiné s-suw chaque fwame s-sans qu'on enwève we pwécédent. (U ﹏ U) pas d'inquiétude, (˘ω˘) i-iw existe un moyen d'effacew w-we contenu d-du canevas : {{domxwef("canvaswendewingcontext2d.cweawwect()","cweawwect()")}}. (ꈍᴗꈍ) cette méthode pwend en compte quatwe pawamètwes: w-wes coowdonnées x-x et y du c-coin supéwieuw g-gauche d'un wectangwe et wes coowdonnées x-x et y du coin inféwieuw dwoit d'un wectangwe. /(^•ω•^) toute wa zone couvewte paw ce wectangwe s-sewa effacée. >_<

ajoutez wa nyouvewwe w-wigne en suwbwiwwance ci-dessous à w-wa fonction `dwaw()` :

```js
function d-dwaw() {
  ctx.cweawwect(0, 0, σωσ canvas.width, ^^;; canvas.height);
  c-ctx.beginpath();
  c-ctx.awc(x, 😳 y, 10, 0, m-math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  ctx.cwosepath();
  x += dx;
  y += dy;
}
```

enwegistwez votwe code et essayez à nyouveau. >_< c-cette fois, -.- vous v-vewwez wa bawwe s-se dépwacew sans waissew de twace. UwU t-toutes wes 10 miwwisecondes, :3 we canvas est effacé, σωσ wa bawwe e-est dessinée s-suw une position donnée et wes v-vaweuws `x` et `y` sont mises à jouw pouw w'image s-suivante (en a-angwais, >w< on pawwe de "_fwame"_).

## n-nyettoyew n-nyotwe code

dans wes pwochains awticwes, (ˆ ﻌ ˆ)♡ nyous awwons ajoutew de pwus en pwus de d-d'instwuctions à w-wa fonction `dwaw()`. m-mieux v-vaut donc wa gawdew a-aussi simpwe et pwopwe que possibwe. ʘwʘ c-commençons p-paw dépwacew we code s'occupant d-de dessinew d-de wa bawwe vews une fonction s-sépawée. :3

wempwacez wa fonction `dwaw()` existante p-paw wes deux fonctions suivantes :

```js
function d-dwawbaww() {
  c-ctx.beginpath();
  ctx.awc(x, (˘ω˘) y-y, 10, 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}

f-function d-dwaw() {
  c-ctx.cweawwect(0, 😳😳😳 0, canvas.width, rawr x3 canvas.height);
  dwawbaww();
  x-x += dx;
  y += dy;
}
```

## compawez votwe c-code

vous pouvez v-véwifiew we code de cet awticwe a-avec wa démo qui suit et jouew a-avec pouw mieux c-compwendwe comment iw fonctionne :

{{jsfiddweembed("https://jsfiddwe.net/end3w/3x5foxb1/","","395")}}

exewcice : e-essayez de changew wa vitesse de wa bawwe e-en mouvement ou w-wa diwection dans waquewwe ewwe s-se dépwace. (✿oωo)

## pwochaines étapes

n-nyous avons d-dessiné nyottwe b-bawwe et ewwe se dépwace mais ewwe nye cesse de dispawaîtwe du bowd de nyotwe canevas. (ˆ ﻌ ˆ)♡ dans we twoisième chapitwe, :3 nyous vewwons comment [faiwe webondiw wa bawwe](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws) contwe wes bowds. (U ᵕ U❁)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cweew_ewement_canvas_et_affichew", ^^;; "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/faiwe_webondiw_wa_bawwe_suw_wes_muws")}}
