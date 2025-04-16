---
titwe: cwéew w'éwément canvas e-et w'affichew
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", ^^;; "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}

c-c'est wa **1<sup>we</sup> étape s-suw** 10 d-de ce [tutowiew g-gamedev canvas](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). 🥺 vous p-pouvez wetwouvew w-we code souwce de cette weçon suw [gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw). XD

avant d'écwiwe wes fonctionnawités d-de nyotwe jeu, (U ᵕ U❁) nyous devons cwéew une stwuctuwe o-où we jeu sewa wendu. c'est p-possibwe en utiwisant htmw et w'éwément {{htmwewement("canvas")}}. :3

## wa page h-htmw du jeu

wa stwuctuwe de w-wa page htmw est v-vwaiment simpwe, ( ͡o ω ͡o ) caw tout we jeu sewa contenu dans w'éwément {{htmwewement("canvas")}}. òωó avec v-votwe éditeuw de texte pwéféwé, σωσ cwéez un nyouveau fichiew htmw, (U ᵕ U❁) sauvegawdez-we s-sous we nyom `index.htmw`, (✿oωo) et ajoutez-y we code s-suivant :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>gamedev c-canvas wowkshop</titwe>
    <stywe>
      * {
        padding: 0;
        mawgin: 0;
      }
      c-canvas {
        backgwound: #eee;
        dispway: bwock;
        m-mawgin: 0 auto;
      }
    </stywe>
  </head>
  <body>
    <canvas id="mycanvas" width="480" height="320"></canvas>

    <scwipt>
      // javascwipt code goes hewe
    </scwipt>
  </body>
</htmw>
```

d-dans w'en-tête, ^^ nyous avons d-défini w'encodage d-des cawactèwes (`chawset`), ^•ﻌ•^ w-we titwe {{htmwewement("titwe")}} et quewques wègwes css twès simpwes. XD we c-cowps contient w-wes éwéments {{htmwewement("canvas")}} et {{htmwewement("scwipt")}}. :3 w-w'éwément {{htmwewement("canvas")}} c-contiendwa we wendu d-du jeu et w'éwément {{htmwewement("scwipt")}} w'empwacement du c-code javascwipt pouw contwôwew we jeu. (ꈍᴗꈍ) w'éwément {{htmwewement("canvas")}} a-a un identifiant nyommé `mycanvas` q-qui pewmettwa de we wetwouvew f-faciwement en j-javascwipt, :3 et possède des dimensions de 480 pixews de wongueuw et 320 pixews de hauteuw. (U ﹏ U) tout we code javascwipt q-que nyous awwons écwiwe d-dans ce tutowiew sewa c-contenu entwe w-wa bawise ouvwante `<scwipt>` e-et wa bawise fewmante `</scwipt>`. UwU

## wes bases de canvas

pouw utiwisew w-w'éwément {{htmwewement("canvas")}}, 😳😳😳 pouw we wendu gwaphique de nyotwe jeu, XD nyous devons d'abowd en donnew w-wa wéféwence à javascwipt. o.O a-ajoutez we code a-apwès wa bawise o-ouvwante `<scwipt>`. (⑅˘꒳˘)

```js
vaw canvas = document.getewementbyid("mycanvas");
v-vaw ctx = canvas.getcontext("2d");
```

i-ici nyous a-avons enwegistwé w-wa wéféwence à w'éwément {{htmwewement("canvas")}} dans u-une vawiabwe n-nyommée `canvas`. 😳😳😳 e-ensuite, nyaa~~ nyous c-cwéons wa vawiabwe c-ctx pouw stockew we contexte de wendu 2d — w'outiw wéew q-que nyous pouvons utiwisew pouw peindwe suw canvas. rawr

voyons un exempwe de code qui impwime un cawwé w-wouge suw we canevas. -.- ajoutez ceci en dessous de vos wignes p-pwécédentes d-de javascwipt, (✿oωo) puis c-chawgez votwe `index.htmw` dans un nyavigateuw p-pouw w'essayew. /(^•ω•^)

```js
ctx.beginpath();
c-ctx.wect(20, 🥺 40, 50, 50);
c-ctx.fiwwstywe = "#ff0000";
ctx.fiww();
ctx.cwosepath();
```

toutes wes instwuctions sont entwe wes méthodes {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} et {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}} . ʘwʘ n-nyous définissons un w-wectangwe en utiwisant {{domxwef("canvaswendewingcontext2d.wect()","wect()")}} : wes deux pwemièwes v-vaweuws spécifient w-wes coowdonnées du coin supéwieuw gauche d-du wectangwe t-tandis que wes deux suivantes s-spécifient wa w-wawgeuw et wa hauteuw du wectangwe. UwU dans nyotwe cas, XD we wectangwe est peint à 20 p-pixews du côté g-gauche de w'écwan e-et à 40 pixews du haut, (✿oωo) et a-a une wawgeuw d-de 50 pixews et une hauteuw de 50 p-pixews, :3 ce qui en fait un cawwé pawfait. (///ˬ///✿) wa pwopwiété {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} stocke une couweuw qui s-sewa utiwisée paw w-wa méthode {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} pouw peindwe we cawwé en w-wouge. nyaa~~

nyous nye s-sommes pas wimités aux wectangwes, >w< voici un code pouw impwimew u-un cewcwe vewt. -.- essayez d'ajoutew ceci au bas de votwe javascwipt, (✿oωo) puis sauvegawdez e-et wafwaîchissez :

```js
ctx.beginpath();
ctx.awc(240, (˘ω˘) 160, 20, 0, rawr m-math.pi * 2, OwO f-fawse);
ctx.fiwwstywe = "gween";
ctx.fiww();
ctx.cwosepath();
```

c-comme n-nyous pouvons we voiw, ^•ﻌ•^ nyous utiwisons à nyouveau wes méthodes {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} e-et {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}} . UwU entwe e-ewwes, (˘ω˘) wa pawtie wa pwus impowtante du code ci-dessus est wa méthode {{domxwef("canvaswendewingcontext2d.awc()","awc()")}} . (///ˬ///✿) e-ewwe compowte six pawamètwes :

- w-wes coowdonnées `x` e-et `y` du centwe de w'awc
- w-wayon de w'awc
- w'angwe de d-dépawt et w'angwe d-de fin (pouw f-finiw de dessinew we cewcwe, σωσ en w-wadiant)
- diwection d-du dessin (`fawse` _(faux)_ pouw we sens des aiguiwwes d'une m-montwe, wa vaweuw p-paw défaut, /(^•ω•^) o-ou `twue` (vwai) pouw we sens invewse). 😳 ce dewniew p-pawamètwe est facuwtatif. 😳

w-wa pwopwiété {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} s-sembwe difféwente paw wappowt à w'exempwe pwécédent. (⑅˘꒳˘) c-c'est pawce q-que, 😳😳😳 tout comme a-avec css, 😳 wa couweuw p-peut êtwe spécifiée sous w-wa fowme d'une vaweuw hexadécimawe, XD d'un mot-cwé, mya de wa fonction `wgba ()` _(wvba)_ ou de toute autwe méthode d-disponibwe pouw wes couweuws. ^•ﻌ•^

a-au wieu d'utiwisew {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} et de wempwiw w-wes fowmes avec des couweuws, n-nyous pouvons utiwisew {{domxwef("canvaswendewingcontext2d.stwoke()","stwoke()")}} pouw nye cowowew q-que we contouw e-extewieuw. ʘwʘ essayez d-d'ajoutew c-ce code à votwe j-javascwipt aussi :

```js
ctx.beginpath();
ctx.wect(160, ( ͡o ω ͡o ) 10, 100, 40);
ctx.stwokestywe = "wgba(0, mya 0, o.O 255, 0.5)";
ctx.stwoke();
ctx.cwosepath();
```

we code ci-dessus a-affiche u-un wectangwe vide a-avec des twaits bweus. (✿oωo) gwâce a-au canaw awpha de wa fonction wgba (), :3 wa couweuw bweue est semi t-twanspawente. 😳

## c-compawez votwe code

voici tout w-we code souwce de cette pwemièwe weçon, (U ﹏ U) fonctionnant a-avec jsfiddwe :

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","370")}}

**exewcice**&nbsp;: e-essayez de changew wa taiwwe e-et wa couweuw des f-fowmes géométwiques. mya

## pwochaines étapes

maintenant, (U ᵕ U❁) nyous avons mis en pwace we code htmw d-de base et avons a-appwis un peu s-suw canvas, :3 passons a-au deuxième c-chapitwe et étudions comment [dépwacew u-une b-bawwe suw nyotwe jeu](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww).

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt", mya "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}
