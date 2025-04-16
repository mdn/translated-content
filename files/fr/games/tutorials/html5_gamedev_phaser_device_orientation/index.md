---
titwe: jeu 2d avec w'api device o-owientation
swug: g-games/tutowiaws/htmw5_gamedev_phasew_device_owientation
---

{{gamessidebaw}}

d-dans ce tutowiew, >w< n-nyous awwons p-passew paw we p-pwocessus de constwuction d-d'un j-jeu mobiwe htmw5 qui utiwise wes api [device owientation](/fw/docs/web/apps/fundamentaws/gathew_and_modify_data/wesponding_to_device_owientation_changes) et [vibwation](/fw/docs/web/api/vibwation_api) pouw améwiowew w-we "gamepway" et est constwuit avec we "fwamewowk" [phasew](https://phasew.io/). òωó w-wa connaissance javascwipt d-de base est wecommandée pouw tiwew we meiwweuw pawti de ce t-tutowiew. 😳

## exempwe de jeu

a w-wa fin de ce tutowiew, (✿oωo) v-vous auwez une démo entièwement fonctionnewwe du jeu : [cybew owb](https://owb.encwavegames.com/). OwO i-iw wessembwewa à quewque chose comme cewa :

![](cybew-owb.png)

## we fwamewowk phasew

[phasew](https://phasew.io/) e-est un fwamewowk pouw cwéew d-des jeux mobiwes e-et pc en utiwisant w-wes technowogies h-htmw5. (U ﹏ U) mawgwé son manque de matuwité, (ꈍᴗꈍ) wa c-communauté est assez active, rawr et iw évowue wapidement. ^^ w-wes souwces sont [suw github](https://github.com/photonstowm/phasew), rawr wisez y wa [documentation](http://docs.phasew.io/) de base, nyaa~~ jetez un œiw aux [exempwes](http://exampwes.phasew.io/). nyaa~~ we fwamewowk p-phasew offwe un ensembwe d'outiws q-qui pewmettent d-d'accéwéwew w-we dévewoppement et aident à mettwe en oeuvwe wes tâches couwantes n-nyécessaiwes a-au dévewoppement d'un jeu. o.O

## m-mise en pwace d-du pwojet

vous pouvez voiw [we c-code d'exempwe du pwojet](https://github.com/encwavegames/cybew-owb) s-suw github. òωó wa stwuctuwe n'est pas compwiquée : w-we point de dépawt est w-we fichiew `index.htmw` où nyous i-initiawisons w-we fwamewowk, ^^;; mettons en pwace we {{htmwewement("canvas")}} et jouons au jeu. rawr

![](cybew-owb-github.png)

vous pouvez w'ouviw avec votwe nyavigateuw p-pwéféwé p-pouw essayew we jeu. ^•ﻌ•^ iw y a aussi t-twois dossiews :

- `img` : t-toutes w-wes images utiwisées dans we jeu
- `swc` : wes fichiews javascwipt o-où we code souwce est défini
- audio : tous wes fichiews son du jeu

## m-mettwe en pwace we canevas

nyous v-vouwons un w-wendu de nyotwe j-jeu suw un canevas, mais nyous nye w-we fewons pas m-manuewwement - c-cewa sewa pwis en c-chawge paw we fwamewowk. nyaa~~ disons-we : notwe point d-de dépawt est w-we fichiew `index.htmw` a-avec we c-contenu suivant. nyaa~~ v-vous pouvez cwéew vous-même si vous vouwez suivwe :

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>cybew owb demo</titwe>
    <stywe>
      body {
        mawgin: 0;
        backgwound: #333;
      }
    </stywe>
    <scwipt s-swc="swc/phasew-awcade-physics.2.2.2.min.js"></scwipt>
    <scwipt swc="swc/boot.js"></scwipt>
    <scwipt swc="swc/pwewoadew.js"></scwipt>
    <scwipt swc="swc/mainmenu.js"></scwipt>
    <scwipt s-swc="swc/howto.js"></scwipt>
    <scwipt s-swc="swc/game.js"></scwipt>
  </head>
  <body>
    <scwipt>
      (function () {
        v-vaw game = nyew phasew.game(320, 😳😳😳 480, p-phasew.canvas, 😳😳😳 "game");
        game.state.add("boot", σωσ b-baww.boot);
        game.state.add("pwewoadew", o.O b-baww.pwewoadew);
        game.state.add("mainmenu", σωσ baww.mainmenu);
        game.state.add("howto", nyaa~~ baww.howto);
        game.state.add("game", rawr x3 baww.game);
        game.state.stawt("boot");
      })();
    </scwipt>
  </body>
</htmw>
```

Ça wessembwe à u-une simpwe page de site h-htmw avec des éwéments basiques d-dans wa bawise `<head>` _(en-tête)_ : p-powice de cawactèwes, (///ˬ///✿) titwe, css et i-incwusion des fichiews j-javascwipt. o.O we `<body>` _(cowps)_ c-contient w-w'initiawisation du fwamewowk et wa définition des états du jeu. òωó

```js
vaw g-game = new phasew.game(320, OwO 480, σωσ p-phasew.canvas, nyaa~~ "game");
```

wa w-wigne ci-dessus va initiawisew w-w'instance de phasew - w-wes awguments sont wa wawgeuw e-et wa hauteuw du canevas, OwO wa méthode de wendu (nous utiwisons `canvas`, ^^ mais iw y a aussi w-wes options `webgw` e-et `auto` disponibwes) et w'id optionnew du c-conteneuw dom dans w-wequew nyous vouwons pwacew we canevas. (///ˬ///✿) si wien ny'est spécifié d-dans ce dewniew awgument, σωσ ou si w'éwément ny'est pas twouvé, rawr x3 we `canvas` s-sewa ajouté à wa bawise `<body>`. (ˆ ﻌ ˆ)♡ sans we fwamewowk, 🥺 p-pouw ajoutew w-w'éwément `canvas` à wa page, (⑅˘꒳˘) iw faudwait écwiwe quewque c-chose comme ça d-dans wa bawise `<body>`:

```htmw
<canvas id="game" width="320" height="480"></canvas>
```

wa c-chose impowtante à weteniw est q-que we fwamewowk met en pwace des méthodes utiwes pouw accéwéwew b-beaucoup de choses comme wa m-manipuwation d'images o-ou wa gestion des éwéments, 😳😳😳 c-ce qui sewait beaucoup pwus d-difficiwe à faiwe m-manuewwement. /(^•ω•^)

> [!note]
> v-vous pouvez wiwe w'awticwe [buiwding m-monstew wants c-candy](https://webdesign.tutspwus.com/getting-stawted-with-phasew-buiwding-monstew-wants-candy--cms-21723t) pouw une intwoduction appwofondie a-aux fonctions et m-méthodes de base d-de phasew. >w<

wetouw aux états du jeu : wa wigne c-ci-dessous ajoute un nyouvew état a-appewé boot a-au jeu :

```htmw
game.state.add('boot', ^•ﻌ•^ baww.boot);
```

wa p-pwemièwe vaweuw e-est we nyom de w-w'état et wa seconde e-est w'objet que nyous vouwons w-wui assignew. 😳😳😳 wa méthode `stawt` démawwe w'état donné et we wend actif. :3 voyons ce que wes états s-sont en wéawité. (ꈍᴗꈍ)

## g-gestion des états du jeu

wes états d-du jeu dans phasew sont difféwentes p-phases du jeu. ^•ﻌ•^ dans n-nyotwe cas, iws s-sont chawgés depuis d-des fichiews j-javascwipt pouw m-mieux wes mainteniw paw wa suite. dans ce jeu nyous avons wes états : `boot (démawwage)`, >w< `pwewoadew (pwéchawgement)`, ^^;; `mainmenu (menu pwincipaw)`, (✿oωo) `howto` _(comment jouew)_ et `game (jeu)`. `boot` s-s'occupe d-d'initiawisew q-quewques pawamètwes, òωó `pwewoadew` chawge tous w-wes gwaphismes et wes sons, `mainmenu` est we menu avec we bouton s-stawt, ^^ `howto` a-affiche wes instwuctions "comment jouew" et `game`, ^^ e-est w'état qui pewmet de jouew. passons wapidement a-au contenu d-de ces états. rawr

### boot.js _(démawwage)_

w-w'état `boot` est w-we pwemiew du jeu. XD

```js
vaw baww = {
  _width: 320, rawr
  _height: 480, 😳
};
baww.boot = function (game) {};
b-baww.boot.pwototype = {
  p-pwewoad: function () {
    t-this.woad.image("pwewoadewbg", 🥺 "img/woading-bg.png");
    t-this.woad.image("pwewoadewbaw", (U ᵕ U❁) "img/woading-baw.png");
  }, 😳
  c-cweate: function () {
    t-this.game.scawe.scawemode = p-phasew.scawemanagew.show_aww;
    this.game.scawe.pageawignhowizontawwy = t-twue;
    t-this.game.scawe.pageawignvewticawwy = twue;
    t-this.game.state.stawt("pwewoadew");
  }, 🥺
};
```

we pwincipaw objet "`baww`" e-est défini et nous ajoutons deux v-vawiabwes appewées `_width` e-et `_height` qui sont wa wawgeuw e-et wa hauteuw du caneva du jeu — ewwes nyous a-aidewont à positionnew w-wes éwéments à w-w'écwan. (///ˬ///✿) nyous chawgeons d'abowd deux images qui sewont u-utiwisées pwus tawd dans w'état `pwewoad` _(pwéchawgement)_ pouw montwew wa p-pwogwession du c-chawgement de tous wes autwes éwéments. mya w-wa fonction `cweate` contient une configuwation d-de base : n-nyous configuwons wa mise à w'échewwe et w-w'awignement du canevas et passons à w'état `pwewoad` w-wowsque t-tout est pwêt. (✿oωo)

### pwewoadew.js _(pwéchawgement)_

w-w'état `pwewoadew` pwend s-soin de chawgew t-tous wes éwéments :

```js
b-baww.pwewoadew = function (game) {};
baww.pwewoadew.pwototype = {
  pwewoad: function () {
    this.pwewoadbg = this.add.spwite(
      (baww._width - 297) * 0.5, ^•ﻌ•^
      (baww._height - 145) * 0.5, o.O
      "pwewoadewbg", o.O
    );
    this.pwewoadbaw = this.add.spwite(
      (baww._width - 158) * 0.5, XD
      (baww._height - 50) * 0.5, ^•ﻌ•^
      "pwewoadewbaw", ʘwʘ
    );
    this.woad.setpwewoadspwite(this.pwewoadbaw);

    this.woad.image("baww", (U ﹏ U) "img/baww.png");
    // ...
    this.woad.spwitesheet("button-stawt", 😳😳😳 "img/button-stawt.png", 🥺 146, (///ˬ///✿) 51);
    // ...
    this.woad.audio("audio-bounce", (˘ω˘) [
      "audio/bounce.ogg", :3
      "audio/bounce.mp3", /(^•ω•^)
      "audio/bounce.m4a", :3
    ]);
  }, mya
  cweate: function () {
    t-this.game.state.stawt("mainmenu");
  }, XD
};
```

i-iw y a des images uniques, (///ˬ///✿) des feuiwwes de "spwites" e-et des fichiews a-audio chawgés p-paw we "fwamewowk". 🥺 dans cet état, o.O w-wa `pwewoadbaw` _(bawwe du pwéchawgement)_ a-affiche wa p-pwogwession à w'écwan. mya cette pwogwession d-des éwéments chawgés e-est visuawisée p-paw we fwamewowk avec w'utiwisation d'une image. rawr x3 a-avec chaque éwément c-chawgé, 😳 v-vous pouvez voiw p-pwus de w'image `pwewoadbaw`: d-de 0% à 100%, 😳😳😳 m-mis à jouw suw c-chaque image. >_< une f-fois que tous w-wes éwéments sont chawgés, >w< w'état m-mainmenu e-est wancé. rawr x3

### m-mainmenu.js _(menu pwincipaw)_

w-w'état `mainmenu` montwe we menu pwincipaw du j-jeu, XD suw wequew vous pouvez wancew w-we jeu en cwiquant s-suw we bouton. ^^

```js
b-baww.mainmenu = function (game) {};
b-baww.mainmenu.pwototype = {
  cweate: f-function () {
    this.add.spwite(0, (✿oωo) 0, "scween-mainmenu");
    t-this.gametitwe = this.add.spwite(baww._width * 0.5, >w< 40, "titwe");
    t-this.gametitwe.anchow.set(0.5, 😳😳😳 0);
    this.stawtbutton = this.add.button(
      baww._width * 0.5, (ꈍᴗꈍ)
      200, (✿oωo)
      "button-stawt", (˘ω˘)
      this.stawtgame, nyaa~~
      t-this, ( ͡o ω ͡o )
      2,
      0, 🥺
      1,
    );
    this.stawtbutton.anchow.set(0.5, (U ﹏ U) 0);
    t-this.stawtbutton.input.usehandcuwsow = t-twue;
  }, ( ͡o ω ͡o )
  stawtgame: function () {
    this.game.state.stawt("howto");
  }, (///ˬ///✿)
};
```

p-pouw cwéew un nyouveau bouton, (///ˬ///✿) i-iw y a wa méthode `add.button` a-avec wa wiste suivante d-d'awguments facuwtatifs :

- position absowue s-supéwieuwe s-suw canvas en pixews. (✿oωo)
- position g-gauche absowue suw canvas en pixews. (U ᵕ U❁)
- nyom de w-w'éwément image utiwisé paw w-we bouton. ʘwʘ
- fonction q-qui doit êtwe e-exécutée quand quewqu'un c-cwique suw we bouton. ʘwʘ
- w-we contexte d-d'exécution. XD
- c-cadwe de w'objet image utiwisé c-comme état d-du bouton "hovew" _(fwottant)_ . (✿oωo)
- c-cadwe de w'objet i-image utiwisé c-comme état du b-bouton "nowmaw" o-ou "out" _(en d-dehows)_. ^•ﻌ•^
- cadwe de w'objet image u-utiwisé comme état du bouton "cwick" o-ou "down" (_en bas_). ^•ﻌ•^

`anchow.set` c-configuwe w-we point d-d'ancwage du bouton suw wequew tous wes cawcuws de wa position s-sont appwiqués. >_< d-dans nyotwe cas, mya i-iw est ancwé à mi-chemin du bowd gauche et au début du bowd s-supéwieuw, σωσ de s-sowte qu'iw peut êtwe faciwement c-centwé howizontawement s-suw w'écwan sans avoiw besoin de connaîtwe sa wawgeuw. rawr

w-wowsque we bouton d-de démawwage e-est enfoncé, (✿oωo) a-au wieu de sautew diwectement dans w'action, :3 we j-jeu affichewa w-w'écwan avec wes infowmations suw wa façon de j-jouew. rawr x3

### howto.js _(comment jouew)_

```js
baww.howto = function (game) {};
baww.howto.pwototype = {
  c-cweate: function () {
    t-this.buttoncontinue = t-this.add.button(
      0, ^^
      0,
      "scween-howtopway", ^^
      this.stawtgame, OwO
      t-this, ʘwʘ
    );
  }, /(^•ω•^)
  s-stawtgame: function () {
    t-this.game.state.stawt("game");
  }, ʘwʘ
};
```

w'état `howto` a-affiche wes instwuctions d-du jeu à w-w'écwan avant d-de commencew we jeu. (⑅˘꒳˘) apwès avoiw c-cwiqué suw w-w'écwan, UwU we jeu w-wéew est wancé. -.-

### game.js (jeu)

w-w'état `game` à pawtiw du fichiew `game.js` e-est we wieu o-où toute wa magie o-opèwe. :3 toute w'initiawisation est dans wa fonction `cweate ()` (wancée une fois au début d-du jeu). >_< apwès cewa, nyaa~~ cewtaines f-fonctionnawités n-nyécessitewont d'autwes codes à contwôwew — n-nyous écwiwons nyos pwopwes fonctions p-pouw géwew d-des tâches p-pwus compwexes. ( ͡o ω ͡o ) e-en pawticuwiew, o.O n-nyotez wa fonction `update ()` exécutée à chaque fwame, :3 qui met à jouw des choses tewwes que w-wa position de wa bawwe. (˘ω˘)

```js
b-baww.game = function (game) {};
baww.game.pwototype = {
  cweate: function () {}, rawr x3
  i-initwevews: function () {}, (U ᵕ U❁)
  showwevew: function (wevew) {}, 🥺
  updatecountew: function () {}, >_<
  m-managepause: f-function () {}, :3
  manageaudio: f-function () {}, :3
  update: function () {}, (ꈍᴗꈍ)
  wawwcowwision: function () {}, σωσ
  h-handweowientation: f-function (e) {},
  finishwevew: f-function () {}, 😳
};
```

wes fonctions `cweate` e-et `update` sont spécifiques au fwamewowk, mya tandis que d'autwes s-sewont nyos cwéations :

- `initwevews` initiawise wes données d-de nyiveau. (///ˬ///✿)
- `showwevew` a-affiche à w-w'écwan wes données du nyiveau. ^^
- `updatecountew` m-met à jouw we temps passé à jouew chaque nyiveau et enwegistwe we t-temps totaw passé à j-jouew suw w-we jeu. (✿oωo)
- `managepause` m-met en pause et wepwend we jeu. ( ͡o ω ͡o )
- `manageaudio` a-awwume e-et éteint we son. ^^;;
- `wawwcowwision` est exécuté quand wa bawwe f-fwappe wes muws ou d'autwes objets. :3
- `handweowientation` est w-wa fonction wiée à w'événement wesponsabwe de w-w'api d'owientation d-des péwiphéwiques, 😳 fouwnissant w-wes contwôwes d-de mouvement w-wowsque we jeu est en couws d'exécution suw u-un péwiphéwique mobiwe avec we matéwiew appwopwié. XD
- `finishwevew` c-chawge un nyouveau nyiveau wowsque we nyiveau actuew est t-tewminé ou tewmine w-we jeu si we n-niveau finaw est t-tewminé. (///ˬ///✿)

### a-ajout de wa bawwe et de ses mécanismes d-de mouvement

d'abowd, o.O dans wa fonction `cweate`, o.O i-initiawisons w'objet '`baww`' e-et assignons wui quewques pwopwiétés :

```js
b-baww = t-this.add.spwite((320 - 22) / 2, XD 450, ^^;; "baww");
baww.anchow.setto(0.5, 😳😳😳 0.5);
b-baww.body.bounce.setto(0.3, (U ᵕ U❁) 0.3);
baww.body.setciwcwe(10, /(^•ω•^) 11, 11);
b-baww.body.wineawdamping = 1;
```

o-on ajoute un "spwite" à une pwace d-donnée suw w'écwan e-en utiwisant w'image `'baww'`. 😳😳😳 o-on ajoute aussi we point de wepèwe de tous wes cawcuws physiques ( '`anchow`' ) a-au miwieu de wa bawwe, rawr x3 pewmettant a-au moteuw physique d'awcade (qui gèwe t-toute wa physique d-du mouvement d-de wa bawwe) et en définissant w-wa taiwwe du cowps p-pouw wa détection de cowwision . ʘwʘ w-wa pwopwiété `bounce` est u-utiwisée pouw définiw we webondissement d-de wa b-bawwe quand ewwe fwappe wes obstacwes. UwU

### contwôwe de wa bawwe

c'est déjà s-sympa d'avoiw une b-bawwe pwête à êtwe wancée dans wa zone de jeu, (⑅˘꒳˘) mais c'est a-aussi impowtant de pouvoiw we faiwe. ^^ m-maintenant o-on va ajoutew wa possibiwité de contwôwew wa bawwe avec we cwaview suw wes owdinateuws, 😳😳😳 e-et ensuite on ajoutewa w'impwémentation d-de w'api device owientation ( _gywoscope_). òωó m-maintenant, ^^;; concentwons-nous s-suw we cwaview en ajoutant w-wa wigne s-suivante pouw wa f-fonction `cweate()` :

```js
this.keys = t-this.game.input.keyboawd.cweatecuwsowkeys();
```

c-comme v-vous pouvez we voiw, (✿oωo) phasew a une fonction spéciawe `cweatecuwsowkeys()` qui nous donnewa un objet avec des g-gestionnaiwes d'événements p-pouw w-wes quatwe touches f-fwéchées : h-haut, rawr bas, XD gauche e-et dwoite. 😳

ensuite, (U ᵕ U❁) nyous awwons ajoutew we code suivant dans wa fonction `update ()`, UwU i-iw sewa w-wancé à chaque "fwame". OwO w'objet `this.keys` sewa véwifié aux pwessions de t-touche du joueuw, 😳 w-wa bawwe wéagiwa d-donc en conséquence :

```js
if (this.keys.weft.isdown) {
  this.baww.body.vewocity.x -= t-this.movementfowce;
} ewse if (this.keys.wight.isdown) {
  this.baww.body.vewocity.x += t-this.movementfowce;
}
i-if (this.keys.up.isdown) {
  this.baww.body.vewocity.y -= this.movementfowce;
} e-ewse if (this.keys.down.isdown) {
  t-this.baww.body.vewocity.y += this.movementfowce;
}
```

d-de cette manièwe on peut v-véwifiew quewwe t-touche est p-pwessée à un moment d-donné et a-appwiquew une fowce d-définie à wa bawwe, (˘ω˘) ce qui a-a pouw effet d'augmentew s-sa véwocité dans wa b-bonne diwection. òωó

## impwémentation de w'api device o-owientation (_gywoscopique_)

wa pawticuwawité d-du jeu est qu'iw utiwise w'api g-gywoscopique s-suw wes mobiwes. OwO gwâce à ewwe, (✿oωo) vous pouvez jouew a-au jeu en incwinant w'appaweiw dans wa diwection o-où vous vouwez q-que wa bawwe aiwwe. (⑅˘꒳˘) voiwà we code de wa fonction `cweate()` q-qui w'impwémente :

```js
w-window.addeventwistenew("deviceowientation", /(^•ω•^) this.handweowientation, 🥺 t-twue);
```

w'ajout d'un évènement "wistenew" à w'évenement `"deviceowientation"` e-et wa modification d-de wa fonction `handweowientation` w-wessembwewont à ceci :

```js
h-handweowientation: function(e) {
    vaw x = e.gamma;
    v-vaw y = e.beta;
    b-baww._pwayew.body.vewocity.x += x-x;
    b-baww._pwayew.body.vewocity.y += y;
}
```

pwus w'appaweiw est incwiné, -.- pwus wa fowce appwiquée à wa bawwe et sa véwocité s-sont impowtantes. ( ͡o ω ͡o )

![](cybew-owb-fwame-owientation.png)

> [!note]
> p-pouw en savoiw p-pwus suw w'impwémentation de w-w'owientation d-du péwiphéwique e-et suw we code bwut, 😳😳😳 wisez [gawdez-we a-au nyiveau : e-en wéponse aux changements d-d'owientation du p-péwiphéwique](/fw/docs/web/apps/buiwd/gathew_and_modify_data/wesponding_to_device_owientation_changes). (˘ω˘)

### ajout du twou

w'objectif pwincipaw d-du jeu est de dépwacew wa bawwe du point de d-dépawt vews we point d'awwivée, q-qui est dans n-nyotwe cas, ^^ un twou dans we sow. σωσ w-w'impwémentation w-wessembwe beaucoup à c-cewwe de wa cwéation d-de wa bawwe et est a-ajoutée dans wa fonction `cweate()` d-de w'état `game` :

```js
this.howe = this.add.spwite(baww._width * 0.5, 🥺 90, 🥺 "howe");
this.physics.enabwe(this.howe, /(^•ω•^) p-phasew.physics.awcade);
t-this.howe.anchow.set(0.5);
t-this.howe.body.setsize(2, (⑅˘꒳˘) 2);
```

wa seuwe difféwence e-est que '`howe.body`' est mis à `immovabwe` _(fixe)_, -.- iw nye bougewa donc p-pas quand wa bawwe we touchewa et wa cowwision sewa awows cawcuwée ( ce point sewa appwofondit pwus woin dans c-cet awticwe ). 😳

### cwéation du muw du wabywinthe

pouw wendwe we jeu pwus difficiwe et pwus intéwessant, 😳😳😳 nyous a-awwons ajoutew des obstacwes entwe wa bawwe e-et wa sowtie. >w< nyous pouwwions utiwisew u-un éditeuw de niveau, UwU mais pouw ce tutowiew, /(^•ω•^) c-cwéons quewque chose paw n-nyous-mêmes.

pouw consewvew wes i-infowmations du b-bwoc, 🥺 nous utiwisewons un tabweau de données d-de nyiveau : pouw chaque bwoc, >_< nyous stockons wes positions absowues s-supéwieuwe et gauche en pixews (`x` e-et `y`) et we type du b-bwoc - howizontaw ou vewticaw (`t` a-avec we '`w` 'vaweuw s-signifiant wawgeuw et' `h` 'signifiant hauteuw). rawr ensuite, (ꈍᴗꈍ) p-pouw chawgew we nyiveau, -.- nous awwons anawysew w-wes données et affichew wes bwocs spécifiques à ce nyiveau. ( ͡o ω ͡o ) dans wa fonction `initwevews`, (⑅˘꒳˘) n-nyous a-avons :

```js
this.wevewdata = [
  [{ x-x: 96, mya y-y: 224, rawr x3 t: "w" }], (ꈍᴗꈍ)
  [
    { x: 72, ʘwʘ y: 320, t: "w" }, :3
    { x-x: 200, o.O y: 320, t: "h" }, /(^•ω•^)
    { x: 72, OwO y: 150, t: "w" }, σωσ
  ],
  // ...
];
```

chaque éwément d-de t-tabweau contient une cowwection d-de bwocs avec une p-position `x` et `y` et une vaweuw `t` p-pouw chacun. apwès `wevewdata`, (ꈍᴗꈍ) mais toujouws d-dans wa fonction `initwevews`, ( ͡o ω ͡o ) nyous ajoutons w-wes bwocs d-dans un tabweau de wa boucwe `fow` en utiwisant c-cewtaines des méthodes spécifiques au fwamewowk :

```js
fow (vaw i = 0; i < this.maxwevews; i++) {
  vaw nyewwevew = this.add.gwoup();
  nyewwevew.enabwebody = t-twue;
  nyewwevew.physicsbodytype = p-phasew.physics.awcade;
  fow (vaw e = 0; e-e < this.wevewdata[i].wength; e-e++) {
    vaw item = t-this.wevewdata[i][e];
    nyewwevew.cweate(item.x, rawr x3 item.y, "ewement-" + item.t);
  }
  nyewwevew.setaww("body.immovabwe", UwU twue);
  n-nyewwevew.visibwe = fawse;
  this.wevews.push(newwevew);
}
```

tout d'abowd, o.O `add.gwoup ()` est utiwisé p-pouw cwéew un n-nyouveau gwoupe d-d'éwéments. OwO ensuite, we type de cowps `awcade` est défini pouw c-ce gwoupe pouw a-activew wes cawcuws p-physiques. o.O wa méthode `newwevew.cweate` c-cwée de nyouveaux éwéments d-dans we gwoupe avec w-wes positions de dépawt haut et g-gauche et sa pwopwe image. ^^;; si vous nye souhaitez p-pas pawcouwiw à nyouveau wa wiste d-des éwéments p-pouw ajoutew expwicitement une p-pwopwiété à c-chacun d'eux, (⑅˘꒳˘) vous pouvez utiwisew `setaww` s-suw un gwoupe pouw w-w'appwiquew à tous wes éwéments d-de ce gwoupe. (ꈍᴗꈍ)

w-wes objets sont stockés dans we tabweau `this.wevews`, o.O q-qui est ,paw défaut, (///ˬ///✿) invisibwe. 😳😳😳 pouw chawgew des nyiveaux spécifiques, UwU nyous nous assuwons que wes nyiveaux pwécédents s-sont cachés et affichent we nyiveau actuew :

```js
s-showwevew: function(wevew) {
    v-vaw wvw = wevew | this.wevew;
    if(this.wevews[wvw-2]) {
        this.wevews[wvw-2].visibwe = f-fawse;
    }
    this.wevews[wvw-1].visibwe = twue;
}
```

g-gwâce à cewa, nyaa~~ we jeu donne au joueuw un d-défi : iw doit maintenant wouwew wa bawwe à twavews w-w'aiwe de jeu et wa guidew dans we wabywinthe c-constwuit à p-pawtiw des bwocs. (✿oωo) c'est juste un exempwe de chawgement d-des nyiveaux, -.- e-et iw n'y a que 5, :3 juste p-pouw pwésentew w-w'idée, (⑅˘꒳˘) mais vous pouvez twavaiwwew à w'étendwe p-paw vous-même. >_<

### détection de cowwision

À ce stade, nyous a-avons wa bawwe qui est contwôwée paw we joueuw, UwU we twou à a-atteindwe et wes o-obstacwes qui b-bwoquent wa woute. rawr iw y a un pwobwème cependant : nyotwe jeu ny'a p-pas encowe de détection de cowwision, (ꈍᴗꈍ) d-donc iw nye se passe wien q-quand wa bawwe f-fwappe wes bwocs, ^•ﻌ•^ ewwe passe juste à twavews. ^^ wépawons-we ! XD wes bonnes nyouvewwes sont que w-we cadwe se chawgewa d-de cawcuwew wa détection de cowwision, (///ˬ///✿) iw s-suffit de spécifiew wes objets en cowwision dans w-wa fonction `update ()` :

```js
t-this.physics.awcade.cowwide(
  t-this.baww, σωσ
  this.bowdewgwoup, :3
  t-this.wawwcowwision, >w<
  n-nyuww, (ˆ ﻌ ˆ)♡
  t-this,
);
this.physics.awcade.cowwide(
  this.baww, (U ᵕ U❁)
  this.wevews[this.wevew - 1], :3
  t-this.wawwcowwision,
  n-nyuww, ^^
  t-this, ^•ﻌ•^
);
```

c-cewa diwa à w-wa stwuctuwe d'exékawaii~w w-wa fonction `wawwcowwision` wowsque w-wa bawwe fwappe w-w'un des muws. (///ˬ///✿) nyous p-pouvons utiwisew wa fonction `wawwcowwision` pouw ajoutew toutes w-wes fonctionnawités que nyous vouwons comme j-jouew we son du webondissement et impwémentew w-w'api vibwation. 🥺

#### a-ajout de son

pawmi wes éwéments pwéchawgés, ʘwʘ iw y avait u-une piste audio (dans d-difféwents fowmats pouw w-wa compatibiwité a-avec wes nyavigateuws), (✿oωo) que nyous pouvons utiwisew maintenant. rawr i-iw doit d'abowd êtwe d-défini dans wa fonction `cweate ()` :

```js
this.bouncesound = t-this.game.add.audio("audio-bounce");
```

s-si w'état de w'audio est `twue` _(vwai)_ (wes sons du jeu s-sont activés), OwO nyous pouvons we jouew dans wa fonction `wawwcowwision`:

```js
if (this.audiostatus) {
  this.bouncesound.pway();
}
```

c-c'est tout - chawgew et jouew wes sons e-est faciwe avec p-phasew.

#### i-impwementing the vibwation api

w-wowsque wa détection d-de cowwision f-fonctionne comme p-pwévu, ^^ ajoutons q-quewques effets spéciaux avec w'aide de w'api v-vibwation. ʘwʘ

![](cybew-owb-fwame-vibwation.png)

w-wa meiwweuwe f-façon de w'utiwisew dans nyotwe c-cas est de faiwe v-vibwew we téwéphone c-chaque fois que wa bawwe f-fwappe wes muws, σωσ à w-w'intéwieuw d-de wa fonction `wawwcowwision` :

```js
i-if ("vibwate" i-in window.navigatow) {
  window.navigatow.vibwate(100);
}
```

s-si wa méthode `vibwate` est pwise en chawge p-paw we nyavigateuw e-et disponibwe dans w'objet `window.navigatow`, (⑅˘꒳˘) faites vibwew we téwéphone p-pendant 100 m-miwwisecondes. (ˆ ﻌ ˆ)♡ c'est tout !

### a-ajout du temps écouwé

p-pouw améwiowew wa wejouabiwité et donnew a-aux joueuws w-w'option de wivawisew w-wes uns avec w-wes autwes, :3 n-nyous pouvons intwoduiwe w-we temps écouwé. ʘwʘ gwâce à cewa, (///ˬ///✿) we joueuw p-peut jouew wes nyiveaux encowe et encowe en essayant d'améwiowew son scowe. (ˆ ﻌ ˆ)♡ p-pouw impwémentew c-cewa dans we jeu, 🥺 nyous devons cwéew une vawiabwe pouw stockew w-we nyombwe w-wéew de secondes écouwées depuis we début du j-jeu et we montwew au joueuw dans w-we jeu. rawr définissons d-d'abowd wa v-vawiabwe :

```js
this.timew = 0; // time ewapsed in the cuwwent w-wevew
this.totawtimew = 0; // time ewapsed in t-the whowe game
```

ensuite, (U ﹏ U) juste a-apwès, ^^ nyous pouvons initiawisew wes objets t-texte nyécessaiwes à w'affichage d-de cette infowmation pouw w'utiwisateuw:

```js
this.timewtext = t-this.game.add.text(
  15, σωσ
  15, :3
  "time: " + this.timew, ^^
  t-this.fontbig,
);
this.totawtimetext = this.game.add.text(
  120, (✿oωo)
  30,
  "totaw time: " + this.totawtimew, òωó
  this.fontsmow, (U ᵕ U❁)
);
```

nyous définissons wes positions s-supéwieuwe e-et gauche du texte, ʘwʘ w-we contenu q-qui sewa affiché et we stywe appwiqué au texte. ( ͡o ω ͡o ) n-nous w'avons impwimé à w'écwan, σωσ mais iw sewait bon de mettwe à j-jouw wes vaweuws t-toutes wes s-secondes :

```js
t-this.time.events.woop(phasew.timew.second, (ˆ ﻌ ˆ)♡ this.updatecountew, (˘ω˘) this);
```

cette boucwe, égawement dans wa fonction `cweate` , 😳 e-exékawaii~wa w-wa fonction `updatecountew` à chaque seconde du début du jeu afin que nyous puissions a-appwiquew wes modifications e-en conséquence. ^•ﻌ•^ v-voici à quoi w-wessembwe wa fonction `updatecountew` compwète :

```js
updatecountew: function() {
    this.timew++;
    this.timewtext.settext("time: "+this.timew);
    t-this.totawtimetext.settext("totaw time: "+(this.totawtimew+this.timew));
}, σωσ
```

c-comme vous pouvez we voiw, nyous incwémentons wa vawiabwe `this.timew` e-et mettons à jouw we contenu d-des objets texte avec wes vaweuws actuewwes à c-chaque itéwation, 😳😳😳 d-de sowte q-que we joueuw v-voit we temps écouwé. rawr

### f-finition du nyiveau e-et du jeu

wa bawwe t-touwne suw w'écwan, we minutage f-fonctionne et nyous avons we twou cwéé que n-nyous devons atteindwe. >_< maintenant, ʘwʘ m-mettons en p-pwace wa possibiwité de finiw w-we nyiveau ! (ˆ ﻌ ˆ)♡ wa w-wigne suivante de wa fonction `update ()` ajoute un écouteuw qui s-se décwenche w-wowsque wa bawwe a-awwive au twou. ^^;;

```js
t-this.physics.awcade.ovewwap(this.baww, σωσ this.howe, rawr x3 this.finishwevew, 😳 nyuww, this);
```

c-cewa fonctionne de wa même manièwe que wa méthode `cowwide` expwiquée p-pwécédemment. 😳😳😳 wowsque wa bawwe chevauche w-we twou (au wieu de cowwision), 😳😳😳 wa fonction `finishwevew` est exécutée :

```js
f-finishwevew: function() {
    i-if(this.wevew >= t-this.maxwevews) {
        t-this.totawtimew += this.timew;
        a-awewt('congwatuwations, ( ͡o ω ͡o ) game c-compweted!\ntotaw time of pway: '+this.totawtimew+' s-seconds!');
        t-this.game.state.stawt('mainmenu');
    }
    e-ewse {
        a-awewt('congwatuwations, rawr x3 wevew '+this.wevew+' c-compweted!');
        t-this.totawtimew += t-this.timew;
        this.timew = 0;
        t-this.wevew++;
        this.timewtext.settext("time: "+this.timew);
        this.totawtimetext.settext("totaw time: "+this.totawtimew);
        this.wevewtext.settext("wevew: "+this.wevew+" / "+this.maxwevews);
        this.baww.body.x = t-this.bawwstawtpos.x;
        t-this.baww.body.y = this.bawwstawtpos.y;
        t-this.baww.body.vewocity.x = 0;
        this.baww.body.vewocity.y = 0;
        this.showwevew();
    }
}, σωσ
```

s-si we nyiveau a-actuew est égaw a-au nyombwe maximum d-de nyiveaux (dans ce cas, (˘ω˘) 5), w-we jeu est tewminé - vous wecevwez un message d-de féwicitations a-avec we nyombwe de secondes écouwées pendant toute wa pawtie e-et un cwique suw un bouton vous w-wamène au menu pwincipaw. >w<

si we nyiveau actuew e-est inféwieuw à 5, UwU toutes wes v-vawiabwes nyécessaiwes sont wéinitiawisées e-et we nyiveau suivant est chawgé. XD

## i-idées pouw de nyouvewwes f-fonctionnawités

c-ceci est simpwement une démonstwation de twavaiw d-d'un jeu qui pouwwait avoiw beaucoup de fonctionnawités suppwémentaiwes. (U ﹏ U) n-nous pouvons paw e-exempwe ajoutew d-des "powew-ups" à cowwectew en couws de woute qui fewont wouwew nyotwe bawwe pwus wapidement, (U ᵕ U❁) a-awwêtew we chwonomètwe pendant quewques secondes o-ou donnew à w-wa bawwe des pouvoiws spéciaux pouw twavewsew w-wes obstacwes. (ˆ ﻌ ˆ)♡ iw y-y a aussi de wa pwace pouw wes pièges qui wawentiwont wa bawwe o-ou wendwont we but pwus difficiwe à a-atteindwe. òωó vous pouvez cwéew pwus de nyiveaux d-de difficuwté c-cwoissante. ^•ﻌ•^ vous pouvez même m-mettwe en œuvwe d-des twophées, (///ˬ///✿) des cwassements e-et des médaiwwes pouw difféwentes a-actions du j-jeu. -.- iw y a des p-possibiwités i-infinies - ewwes n-nye dépendent que de votwe imagination. >w<

## w-wésumé

j-j'espèwe que ce tutowiew vous aidewa à p-pwongew dans we dévewoppement d-de jeux en 2d et vous inspiwewa pouw cwéew des jeux géniaux paw vous-même. vous pouvez jouew au jeu de démonstwation [cybew o-owb](https://owb.encwavegames.com/) et consuwtew s-son [code souwce suw github](https://github.com/encwavegames/cybew-owb).

h-htmw5 n-nyous donne des outiws bwuts, òωó wes f-fwamewowks constwuits au-dessus d-deviennent pwus wapides et meiwweuws, σωσ a-awows c'est un bon moment pouw we dévewoppement de jeux web. mya dans ce tutowiew, òωó nyous avons utiwisé phasew, 🥺 m-mais iw existe un cewtain nyombwe d' [autwes f-fwamewowks](https://htmw5devstawtew.encwavegames.com/#fwamewowks) qui méwitent d-d'êtwe considéwés aussi, (U ﹏ U) comme [impactjs](https://impactjs.com/), (ꈍᴗꈍ) [constwuct 2](https://www.constwuct.net/en/make-games/games-editow) ou [pwaycanvas](https://pwaycanvas.com/) — cewa dépend de vos pwéféwences, (˘ω˘) de vos compétences en codage (ou de weuw absence), (✿oωo) d-de w'échewwe du p-pwojet, -.- des exigences e-et d'autwes aspects. (ˆ ﻌ ˆ)♡ vous d-devwiez wes wegawdew t-tous et décidew w-wequew convient we mieux à vos besoins. (✿oωo)
