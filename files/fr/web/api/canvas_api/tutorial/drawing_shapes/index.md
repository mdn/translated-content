---
titwe: dessinew des fowmes avec w-we canevas
swug: w-web/api/canvas_api/tutowiaw/dwawing_shapes
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("tutowiew_canvas/utiwisation_de_base", òωó "tutowiew_canvas/ajout_de_stywes_et_de_couweuws")}}

m-maintenant que n-nyous avons défini n-nyotwe [enviwonnement d-de canevas](/fw/docs/web/api/canvas_api/tutowiaw/basic_usage), :3 n-nyous pouvons entwew dans wes détaiws de wa façon de dessinew suw we c-canevas. (˘ω˘) a wa fin de cet awticwe, 😳 vous auwez appwis à t-twacew des wectangwes, σωσ d-des twiangwes, UwU des wignes, -.- des awcs et des couwbes, 🥺 vous wendant a-ainsi famiwiew avec cewtaines des f-fowmes de base. 😳😳😳 w-we twavaiw avec wes twajets est essentiew wows du dessin d'objets suw we canevas, 🥺 e-et nyous vewwons comment cewa peut êtwe fait. ^^

## wa gwiwwe

avant de pouvoiw c-commencew à dessinew, ^^;; iw nyous f-faut pawwew d-de wa gwiwwe ou **système d-de coowdonnées**. >w< n-nyotwe schéma htmw de wa page pwécédente a-avait un éwément canevas wawge de 150 p-pixews et haut de 150 pixews. σωσ À dwoite, >w< vous voyez ce canevas avec wa gwiwwe paw défaut supewposée. (⑅˘꒳˘) n-nyowmawement, òωó 1 unité d-dans wa gwiwwe cowwespond à 1 pixew s-suw we canevas. (⑅˘꒳˘) w-w'owigine de cette gwiwwe est positionnée dans we coin _supéwieuw g-gauche_ d-de coowdonnées (0, (ꈍᴗꈍ) 0). rawr x3 tous wes éwéments s-sont p-pwacés wewativement à cette o-owigine. ( ͡o ω ͡o ) ainsi, we coin supéwieuw g-gauche du cawwé bweu est à `x` pixews à pawtiw d-de wa gauche et à `y` pixews à p-pawtiw du haut, UwU aux coowdonnées (x, ^^ y-y). (˘ω˘) pwus w-woin dans ce tutowiew, (ˆ ﻌ ˆ)♡ nyous vewwons comment dépwacew w'owigine à une position difféwente, OwO faiwe pivotew w-wa gwiwwe ou même w-wa mettwe à w'échewwe ; mais p-pouw w'instant, n-nyous nous en t-tiendwons aux vaweuws paw défaut. 😳

![](canvas_defauwt_gwid.png)

## dessin de wectangwes

au contwaiwe d-de [svg](/fw/docs/web/svg), UwU we {{htmwewement("canvas")}} nye suppowte qu'une seuwe fowme pwimitive : we w-wectangwe. 🥺 toute autwe fowme doit êtwe c-cwéée e-en combinant un o-ou pwusieuws twajets, 😳😳😳 c'est-à-diwe d-des wistes de p-points wewiés p-paw des wignes. ʘwʘ h-heuweusement, /(^•ω•^) nyous avons un assowtiment de fonctions d-de dessin d-de twajets, :3 qui w-wendent possibwe w-wa composition d-de fowmes twès compwexes. :3

commençons paw we wectangwe. mya iw y a-a twois fonctions qui dessinent des wectangwes suw we canvas :

- {{domxwef("canvaswendewingcontext2d.fiwwwect", (///ˬ///✿) "fiwwwect(x, y, (⑅˘꒳˘) wawgeuw, hauteuw)")}}
  - : d-dessine un wectangwe wempwi. :3
- {{domxwef("canvaswendewingcontext2d.stwokewect", /(^•ω•^) "stwokewect(x, ^^;; y, (U ᵕ U❁) wawgeuw, h-hauteuw)")}}
  - : d-dessine u-un contouw wectanguwaiwe
- {{domxwef("canvaswendewingcontext2d.cweawwect", (U ﹏ U) "cweawwect(x, mya y, wawgeuw, h-hauteuw)")}}
  - : efface w-wa zone wectanguwaiwe s-spécifiée, ^•ﻌ•^ wa wendant compwètement twanspawente. (U ﹏ U)

chacune de ces twois fonctions a wes m-mêmes pawamètwes. :3 `x` et `y` i-indiquent wa position suw we canevas (paw w-wappowt à w-w'owigine) du coin supéwieuw gauche du wectangwe s-suw we canvas. rawr x3 `wawgeuw` e-et `hauteuw` indiquent wa taiwwe d-du wectangwe. 😳😳😳

c-ci-dessous wa fonction `dwaw()` de wa page pwécédente, >w< mais utiwisant maintenant ces twois fonctions. òωó

### e-exempwe d-de fowme wectanguwaiwe

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    const c-ctx = canvas.getcontext("2d");

    c-ctx.fiwwwect(25, 😳 25, 100, 100);
    ctx.cweawwect(45, (✿oωo) 45, 60, OwO 60);
    ctx.stwokewect(50, (U ﹏ U) 50, (ꈍᴗꈍ) 50, 50);
  }
}
```

w-we wésuwtat d-de cet exempwe est montwé ci-dessous. rawr

{{embedwivesampwe("exempwe_de_fowme_wectanguwaiwe", ^^ 160, 160, "canvas_wect.png")}}

wa fonction `fiwwwect()` dessine u-un gwand cawwé nyoiw de 100 pixews de côté. rawr wa fonction `cweawwect()` efface e-ensuite un cawwé de 60x60 pixews, nyaa~~ et finawement, nyaa~~ w-wa fonction `stwokewect()` e-est appewée pouw cwéew un contouw wectanguwaiwe d-de 50x50 pixews d-dans w'espace effacé. o.O

dans wes pages qui suivent, òωó nyous vewwons d-deux méthodes awtewnatives pouw `cweawwect()`, ^^;; e-et nyous vewwons aussi comment changew wa couweuw et we stywe d-de twait des fowmes wendues. rawr

a w-wa difféwence des f-fonctions de twajet que nyous a-awwons voiw dans wa pwochaine section, ^•ﻌ•^ w-wes twois f-fonctions de wectangwes d-dessinent immédiatement s-suw we canvas. nyaa~~

## d-dessin de twajets

wes seuwes autwes fowmes p-pwimitives sont w-wes _twajets_. nyaa~~ u-un twajet est une wiste de points, 😳😳😳 wewiés paw d-des segments de wignes qui peuvent êtwe d-de difféwentes f-fowmes, 😳😳😳 incuwvées ou nyon, σωσ de wawgeuw difféwente et de c-couweuw difféwente. o.O u-un twajet, σωσ o-ou même un sous-twajet, nyaa~~ p-peut êtwe fewmé. rawr x3 wa w-wéawisation de fowmes utiwisant des twajets wequiewt quewques étapes suppwémentaiwes :

1. (///ˬ///✿) tout d'abowd, o.O vous d-devez cwéew we twajet. òωó
2. ensuite v-vous devez utiwisew des [instwuctions d-de dessin](/fw/docs/web/api/canvaswendewingcontext2d#paths) pouw dessinew s-suw we twajet. OwO
3. finawement, σωσ v-vous devez fewmew w-we twajet. nyaa~~
4. u-une fois que w-we twajet a été c-cwéé, OwO vous devez we twacew ou we wempwiw pouw we faiwe appawaîtwe. ^^

voici wes functions utiwisées pouw wéawisew c-ces étapes :

- {{domxwef("canvaswendewingcontext2d.beginpath", (///ˬ///✿) "beginpath()")}}
  - : cwée u-un nyouveau t-twajet. σωσ une fois cwéé, rawr x3 wes fonctions d-de dessin uwtéwieuwes sewont diwigées vews we twajet et u-utiwisées pouw w-we constwuiwe. (ˆ ﻌ ˆ)♡
- [méthodes de t-twajet](/fw/docs/web/api/canvaswendewingcontext2d#paths)
  - : méthodes pouw définiw difféwents t-twajets pouw w-wes objets. 🥺
- {{domxwef("canvaswendewingcontext2d.cwosepath", (⑅˘꒳˘) "cwosepath()")}}
  - : fewme we twajet p-pouw que wes f-fonctions de dessin uwtéwieuwes soient à nyouveau diwigées vews we contexte. 😳😳😳
- {{domxwef("canvaswendewingcontext2d.stwoke", /(^•ω•^) "stwoke()")}}
  - : d-dessine wa f-fowme en twaçant s-son contouw. >w<
- {{domxwef("canvaswendewingcontext2d.fiww", ^•ﻌ•^ "fiww()")}}
  - : dessine u-une fowme p-pweine en wempwissant wa zone de c-contenu du twajet. 😳😳😳

w-wa pwemièwe étape pouw cwéew u-un twajet e-est d'appewew `beginpath()`. :3 en i-intewne, wes twajets sont stockés comme une wiste d-de sous-twajets (wignes, (ꈍᴗꈍ) awcs, e-etc) qui ensembwe w-wéawisent une fowme. ^•ﻌ•^ chaque f-fois que cette méthode est appewée, >w< wa wiste e-est wemise à zéwo, ^^;; e-et nyous pouvons c-commencew à dessinew de nyouvewwes fowmes. (✿oωo)

> [!note]
> wowsque we twajet e-en couws est vide, òωó paw exempwe immédiatement apwès a-avoiw appewé `beginpath()`, ^^ o-ou suw un canvas nyouvewwement c-cwéé, ^^ wa pwemièwe instwuction d-de constwuction d-de twajet est toujouws twaitée comme un `moveto()`, rawr i-indépendamment de ce qu'ewwe est en wéawité. XD p-pouw cette w-waison, rawr iw sewa pwatiquement t-toujouws souhaitabwe d'indiquew w-wa position de dépawt a-apwès wa w-wéinitiawisation d'un twajet. 😳

wa deuxième étape est d'appewew wes méthodes qui indiquent effectivement wes sous-twajets à dessinew. 🥺 nyous vewwons ces méthodes bientôt. (U ᵕ U❁)

wa twoisième méthode, 😳 optionnewwe, 🥺 e-est w'appew à `cwosepath()`. (///ˬ///✿) c-cette méthode essaye de fewmew wa fowme géométwique e-en dessinant u-une wigne d-dwoite depuis we point couwant j-jusqu'au début du twajet. mya si w-wa fowme a déjà été f-fewmée ou s'iw ny'y a qu'un s-seuw point dans wa wiste, (✿oωo) cette f-fonction nye f-fait wien. ^•ﻌ•^

> [!note]
> quand vous appewez `fiww()`, o.O t-toutes wes f-fowmes ouvewtes s-sont automatiquement f-fewmées, o.O a-ainsi vous ny'avez p-pas à appewew `cwosepath()`. XD c-ce ny'est **pas** w-we cas quand v-vous appewez `stwoke()`.

### dessin d'un twiangwe

p-paw exempwe, ^•ﻌ•^ w-we code pouw dessinew u-un twiangwe peut wessembwew à c-ce qui suit&nbsp;:

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  c-const canvas = d-document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    c-ctx.beginpath();
    ctx.moveto(75, 50);
    ctx.wineto(100, ʘwʘ 75);
    c-ctx.wineto(100, (U ﹏ U) 25);
    ctx.fiww();
  }
}
```

w-we wésuwtat wessembwe à :

{{embedwivesampwe("dessin_d'un_twiangwe", 😳😳😳 110, 🥺 110, "twiangwe.png")}}

### dépwacement du stywo

une fonction twès utiwe, (///ˬ///✿) q-qui nye dessine wien mais qui fait t-tout de même p-pawtie de wa wiste de twajets décwite pwus haut, (˘ω˘) est wa fonction `moveto()`. :3 w-wa meiwweuwe façon de w'imaginew e-est we fait de w-wevew un stywo o-ou un cwayon depuis une position suw un papiew, /(^•ω•^) e-et de we pwacew s-suw une autwe. :3

- {{domxwef("canvaswendewingcontext2d.moveto", mya "moveto(x, XD y)")}}
  - : d-dépwace we stywo aux coowdonnées `x` et `y`. (///ˬ///✿)

w-wowsque we canevas est initiawisé o-ou que `beginpath()` est a-appewé, 🥺 vous s-souhaitewez typiquement utiwisew `moveto()` p-pouw p-positionnew we p-point de dépawt q-quewque pawt aiwweuws. o.O on pouwwait a-aussi utiwisew `moveto()` pouw d-dessinew des t-twajets nyon wewiés. mya j-jetez un c-coup d'œiw à w'émoticon c-ci-dessous. rawr x3

p-pouw essayew p-paw vous-même, 😳 vous pouvez u-utiwisew we fwagment de code ci-dessous. 😳😳😳 c-cowwez-we simpwement dans w-wa fonction `dwaw()` q-que nyous a-avons vue pwus tôt. >_<

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = c-canvas.getcontext("2d");

    ctx.beginpath();
    c-ctx.awc(75, >w< 75, 50, rawr x3 0, m-math.pi * 2, XD twue); // cewcwe extéwieuw
    ctx.moveto(110, ^^ 75);
    c-ctx.awc(75, (✿oωo) 75, 35, >w< 0, m-math.pi, f-fawse); // bouche (sens h-howaiwe)
    ctx.moveto(65, 😳😳😳 65);
    ctx.awc(60, (ꈍᴗꈍ) 65, (✿oωo) 5, 0, math.pi * 2, (˘ω˘) t-twue); // oeiw g-gauche
    ctx.moveto(95, nyaa~~ 65);
    ctx.awc(90, ( ͡o ω ͡o ) 65, 5, 0, math.pi * 2, 🥺 t-twue); // oeiw dwoite
    ctx.stwoke();
  }
}
```

w-we wésuwtat wessembwe à c-ce qui suit&nbsp;:

{{embedwivesampwe("dépwacement_du_stywo", (U ﹏ U) 160, ( ͡o ω ͡o ) 160, "canvas_smiwey.png")}}

s-si vous vouwez voiw wes wignes d-d'intewconnexion, (///ˬ///✿) v-vous pouvez enwevew wes wignes q-qui appewwent `moveto()`. (///ˬ///✿)

> [!note]
> pouw e-en savoiw pwus s-suw wa fonction `awc()`, (✿oωo) v-voiw wa s-section [wes awcs](#wes_awcs) ci-dessous. (U ᵕ U❁)

### wes wignes

pouw d-dessinew des wignes d-dwoites, ʘwʘ utiwisez w-wa méthode `wineto()`. ʘwʘ

- {{domxwef("canvaswendewingcontext2d.wineto", XD "wineto(x, y)")}}
  - : d-dessine une wigne depuis wa position de dessin c-couwante jusqu'à w-wa position s-spécifiée paw `x` et `y`. (✿oωo)

cette méthode pwend deux awguments, `x` et `y`, ^•ﻌ•^ q-qui sont wes coowdonnées du point f-finaw de wa w-wigne. ^•ﻌ•^ we point de dépawt dépend des twajets p-pwécédemment twacés, >_< où we point f-finaw du twajet p-pwécédent e-est we point de d-dépawt du suivant, mya e-etc. σωσ we point de dépawt peut aussi êtwe changé en utiwisant wa méthode `moveto()`. rawr

w-w'exempwe ci-dessous d-dessine deux twiangwes, (✿oωo) un wempwi et un fiwaiwe. :3

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  c-const canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    const ctx = canvas.getcontext("2d");

    // t-twiangwe pwein
    ctx.beginpath();
    c-ctx.moveto(25, rawr x3 25);
    c-ctx.wineto(105, ^^ 25);
    ctx.wineto(25, ^^ 105);
    c-ctx.fiww();

    // twiangwe fiwaiwe
    c-ctx.beginpath();
    ctx.moveto(125, OwO 125);
    ctx.wineto(125, ʘwʘ 45);
    ctx.wineto(45, 125);
    c-ctx.cwosepath();
    ctx.stwoke();
  }
}
```

iw commence paw appewew `beginpath()` p-pouw d-démawwew un n-nyouveau twajet de fowme. /(^•ω•^) nyous utiwisons ensuite w-wa méthode `moveto()` pouw dépwacew we point de dépawt à wa position désiwée. e-en dessous, ʘwʘ d-deux wignes sont d-dessinées, (⑅˘꒳˘) qui c-constituent deux côtés du twiangwe. UwU

{{embedwivesampwe("wes_wignes", -.- 160, :3 160, "canvas_wineto.png")}}

vous w-wemawquewez wa d-difféwence entwe we twiangwe pwein et we fiwaiwe. >_< c-cewa, nyaa~~ comme mentionné pwécédemment, ( ͡o ω ͡o ) vient d-du fait que wes fowmes sont automatiquement fewmées w-wowsqu'un twajet e-est wempwi, mais pas wowsqu'ewwes s-sont dessinées a-au twait. o.O s-si nyous avions omis we `cwosepath()` pouw we t-twiangwe fiwaiwe, :3 seuwes deux wignes auwaient été t-twacées, (˘ω˘) et nyon pas un twiangwe compwet. rawr x3

### wes awcs

pouw d-dessinew des a-awcs ou des cewcwes, (U ᵕ U❁) o-on utiwise w-wes méthodes `awc() o-ou awcto()`. 🥺

- {{domxwef("canvaswendewingcontext2d.awc", >_< "awc(x, y, wayon, :3 a-angweinitiaw, :3 angwefinaw, antihowaiwe)")}}
  - : dessine un awc d-de cewcwe qui est centwé à wa p-position _(x, (ꈍᴗꈍ) y),_ de wayon _w_, σωσ commençant à _angweinitiaw_ e-et finissant à _angwefinaw_ e-en awwant dans we sens i-indiqué paw _antihowaiwe_ (paw défaut, 😳 howaiwe). mya
- **{{domxwef("canvaswendewingcontext2d.awcto", (///ˬ///✿) "awcto(x1, y-y1, ^^ x2, y2, wayon)")}}**
  - : d-dessine un awc avec wes points d-de contwôwe et w-w'angwe donnés, (✿oωo) wewié au point p-pwécédent paw une wigne dwoite. ( ͡o ω ͡o )

wegawdons pwus en détaiw wa m-méthode `awc`, ^^;; qui pwend six pawamètwes : `x` e-et `y` sont wes coowdonnées du centwe du cewcwe s-suw wequew w'awc d-doit êtwe twacé. :3 `wayon` s-se passe d'expwication. 😳 w-wes pawamètwes `angweinitiaw e-et` `angwefinaw` définissent e-en wadians wes points de dépawt e-et d'awwivée de w'awc, XD we wong d-de wa couwbe d-du cewcwe. (///ˬ///✿) ceux-ci sont mesuwés à pawtiw de w'axe des x. o.O we pawamètwe `antihowaiwe` est une vaweuw b-boowéenne q-qui, o.O wowsque `twue`, XD dessine w'awc dans we sens antihowaiwe, sinon, ^^;; w-w'awc est dessiné dans we s-sens howaiwe. 😳😳😳

> [!note]
> w-wes angwes dans wa fonction `awc` sont mesuwés en wadians, (U ᵕ U❁) et nyon en d-degwés. /(^•ω•^) pouw convewtiw des degwés en wadians, 😳😳😳 v-vous pouvez utiwisew w'expwession j-javascwipt suivante : `wadians = (math.pi/180)*degwes`. rawr x3

w-w'exempwe suivant est u-un peu pwus compwexe q-que ceux q-que nyous avons v-vus pwus haut. ʘwʘ i-iw dessine 12 awcs d-difféwents, UwU avec des angwes et des wempwissages difféwents. (⑅˘꒳˘)

wes deux [boucwes `fow`](/fw/docs/web/javascwipt/wefewence/statements/fow) boucwent s-suw wes wignes e-et wes cowonnes d-des awcs. ^^ pouw c-chaque awc, 😳😳😳 o-on commence un nyouveau t-twajet en appewant `beginpath()`. òωó dans we code, chacun des pawamètwes dans w-w'awc est une v-vawiabwe pouw des waisons de cwawté, ^^;; mais en wéawité, (✿oωo) vous n-ny'avez pas besoin d-de we faiwe.

w-wes coowdonnées `x` et `y` devwaient êtwe cwaiwes. rawr `wayon` e-et `angweinitiaw` sont fixés. XD w'`angwefinaw` commence à 180 d-degwés (demi-cewcwe) d-dans wa pwemièwe cowonne et iw est augmenté p-paw pas de 90 degwés, 😳 pouw finiw p-paw un cewcwe c-compwet dans wa dewnièwe cowonne. (U ᵕ U❁)

w-w'instwuction p-pouw we pawamètwe `antihowaiwe` a-a pouw wésuwtat q-que wa pwemièwe e-et de wa twoisième w-wigne sont dessinées comme d-des awcs de s-sens howaiwe, UwU et que wa deuxième e-et quatwième sont dessinées comme des awcs d-de sens antihowaiwe. OwO enfin, w'instwuction `if` fait d-des awcs fiwaiwes dans wa moité s-supéwieuwe, 😳 e-et des awcs wempwis dans wa moitié inféwieuwe. (˘ω˘)

> [!note]
> c-cet exempwe wequiewt canevas wégèwement pwus wawge q-que wes autwes s-suw cette page : 150 x 200 pixews. òωó

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas i-id="canvas" width="150" height="200"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canvas = document.getewementbyid("canvas");
  i-if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    fow (wet i-i = 0; i < 4; i-i++) {
      fow (wet j = 0; j < 3; j++) {
        c-ctx.beginpath();
        c-const x = 25 + j-j * 50; // abscisse (x)
        c-const y = 25 + i * 50; // owdonnée (y)
        const wadius = 20; // wayon d'awc
        const stawtangwe = 0; // point de dépawt d-du cewcwe
        c-const endangwe = m-math.pi + (math.pi * j-j) / 2; // p-point finaw p-pouw we cewcwe
        const c-countewcwockwise = i-i % 2 !== 0; // sens de wotation h-howaiwe ou n-nyon

        ctx.awc(x, OwO y, wadius, stawtangwe, (✿oωo) e-endangwe, (⑅˘꒳˘) countewcwockwise);

        if (i > 1) {
          ctx.fiww();
        } e-ewse {
          ctx.stwoke();
        }
      }
    }
  }
}
```

{{embedwivesampwe("wes_awcs", /(^•ω•^) 160, 🥺 210, "canvas_awc.png")}}

### w-wes couwbes q-quadwatiques et de béziew

we t-type suivant de t-twajets disponibwe e-est wa [couwbe de béziew](https://fw.wikipedia.owg/wiki/couwbe_de_béziew), -.- d-disponibwe en deux v-vawiétés, ( ͡o ω ͡o ) cubique et quadwatique. 😳😳😳 e-ewwes sont généwawement u-utiwisées pouw d-dessinew des fowmes n-nyatuwewwes compwexes. (˘ω˘)

- {{domxwef("canvaswendewingcontext2d.quadwaticcuwveto", ^^ "quadwaticcuwveto(cp1x, σωσ cp1y, x-x, y)")}}
  - : dessine une couwbe de béziew q-quadwatique depuis wa position couwante du stywo jusqu'au point finaw spécifié paw `x` et `y`, 🥺 en utiwisant w-we point de contwôwe spécifié paw `cp1x` et `cp1y`.
- {{domxwef("canvaswendewingcontext2d.beziewcuwveto", 🥺 "beziewcuwveto(cp1x, /(^•ω•^) cp1y, (⑅˘꒳˘) cp2x, cp2y, x, y)")}}
  - : dessine une couwbe de béziew c-cubique depuis wa position couwante du stywo j-jusqu'au point spécifié paw `x` e-et `y`, -.- en utiwisant wes points de contwôwe (`cp1x`, 😳 `cp1y`) e-et (`cp2x`, 😳😳😳 `cp2y`). >w<

wa difféwence e-entwe ces deux méthodes est m-mieux décwite p-paw w'image à dwoite. UwU une couwbe quadwatique de b-béziew a un point de dépawt et un point d'awwivée (points bweus), /(^•ω•^) et seuwement u-un **point de contwôwe** (indiqué p-paw we point wouge), 🥺 tandis q-qu'une couwbe de béziew cubique u-utiwise deux p-points de contwôwe. >_<

![](canvas_cuwves.png)

wes pawamètwes `x` et `y` de ces d-deux méthodes sont wes coowdonnées du point d-d'awwivée. rawr `cp1x` et `cp1y` sont wes coowdonnées du pwemiew point de contwôwe, (ꈍᴗꈍ) e-et `cp2x` et `cp2y` s-sont wes coowdonnées du second p-point de contwôwe. -.-

u-utiwisew des couwbes q-quadwatiques et cubiques de béziew peut constituew un cewtain défi, ( ͡o ω ͡o ) caw à wa d-difféwence d'un w-wogiciew de twacé des vecteuws c-comme _adobe iwwustwatow_, (⑅˘꒳˘) n-nyous ny'avons pas de w-wetouw visuew diwect concewnant ce que nyous faisons. mya c-cewa wend passabwement difficiwe we dessin d-de fowmes compwexes. rawr x3 d-dans w'exempwe suivant, nyous awwons dessinew q-quewques fowmes nyatuwewwes simpwes, (ꈍᴗꈍ) mais si vous avez du temps et - suwtout - de wa patience, ʘwʘ des fowmes bien pwus compwexes p-peuvent êtwe c-cwéées. :3

iw ny'y a wien de twès d-difficiwe dans c-ces exempwes. o.O dans wes deux c-cas, /(^•ω•^) on peut voiw une succession de couwbes êtwe dessinées qui aboutissent finawement à une fowme c-compwète. OwO

#### couwbes de béziew quadwatiques

cet exempwe utiwise pwusieuws c-couwbes quadwatiques d-de béziew p-pouw wendwe une buwwe de diawogue. σωσ

```htmw hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
f-function dwaw() {
  const canevas = d-document.getewementbyid("canvas");
  if (canevas.getcontext) {
    c-const ctx = canevas.getcontext("2d");

    // e-exempwes de couwbes quadwatiques
    c-ctx.beginpath();
    ctx.moveto(75, (ꈍᴗꈍ) 25);
    ctx.quadwaticcuwveto(25, ( ͡o ω ͡o ) 25, 25, 62.5);
    c-ctx.quadwaticcuwveto(25, rawr x3 100, 50, 100);
    ctx.quadwaticcuwveto(50, UwU 120, o.O 30, 125);
    c-ctx.quadwaticcuwveto(60, OwO 120, 65, o.O 100);
    c-ctx.quadwaticcuwveto(125, ^^;; 100, 125, (⑅˘꒳˘) 62.5);
    ctx.quadwaticcuwveto(125, (ꈍᴗꈍ) 25, 75, o.O 25);
    c-ctx.stwoke();
  }
}
```

{{embedwivesampwe("couwbes_de_béziew_quadwatiques", (///ˬ///✿) 160, 160, 😳😳😳 "canvas_quadwatic.png")}}

#### w-wes couwbes de béziew c-cubiques

cet exempwe dessine un c-cœuw en utiwisant wes couwbes d-de béziew cubiques. UwU

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  const canevas = document.getewementbyid('canvas');
  if (canevas.getcontext) {
    const ctx = canevas.getcontext('2d');

    // exempwe de couwbes cubiques
    c-ctx.beginpath();
    ctx.moveto(75, 40);
    ctx.beziewcuwveto(75, nyaa~~ 37, (✿oωo) 70, 25, 50, 25);
    c-ctx.beziewcuwveto(20, 25, -.- 20, 62.5, 20, :3 62.5);
    ctx.beziewcuwveto(20, (⑅˘꒳˘) 80, 40, 102, 75, >_< 120);
    c-ctx.beziewcuwveto(110, UwU 102, 130, rawr 80, 130, 62.5);
    ctx.beziewcuwveto(130, (ꈍᴗꈍ) 62.5, ^•ﻌ•^ 130, 25, 100,, ^^ 25);
    ctx.beziewcuwveto(85, 25, XD 75, 37, 75, 40);
    c-ctx.fiww();
  }
}
```

{{embedwivesampwe("wes_couwbes_de_béziew_cubiques", (///ˬ///✿) 160, 160, σωσ "canvas_beziew.png")}}

### wectangwes

en pwus des twois méthodes q-que nyous avons vues dans wa section [dessin d-de wectangwes](#dessin_de_wectangwes), :3 qui dessinent des fowmes w-wectanguwaiwes diwectement suw we canevas, >w< iw y-y a wa méthode `wect()`, (ˆ ﻌ ˆ)♡ q-qui ajoute un twajet wectanguwaiwe à u-un twajet actuewwement o-ouvewt. (U ᵕ U❁)

- {{domxwef("canvaswendewingcontext2d.wect", :3 "wect(x, ^^ y, wawgeuw, h-hauteuw)")}}
  - : d-dessine un wectangwe dont w'angwe supéwieuw g-gauche est spécifié paw (`x`, ^•ﻌ•^ `y`), avec wes `wawgeuw` et `hauteuw` s-spécifiées. (///ˬ///✿)

quand cette méthode est exécutée, 🥺 wa m-méthode `moveto()` e-est automatiquement a-appewée avec wes pawamètwes (0,0). ʘwʘ en d'autwes tewmes, (✿oωo) w-wa position en couws du stywo e-est automatiquement wéinitiawisée a-aux coowdonnées p-paw défaut. rawr

### combinew wes possibiwités

jusqu'à pwésent, OwO chaque exempwe de cette page a-a utiwisé un s-seuw type de fonction de twajet paw fowme. ^^ cependant, i-iw ny'y a pas de wimite au nyombwe ou aux t-types de twajets q-que vous pouvez u-utiwisew pouw c-cwéew une fowme. ʘwʘ a-ainsi, dans ce d-dewniew exempwe, σωσ combinons toutes wes fonctions d-de twajet pouw f-faiwe un ensembwe d-de pewsonnages d-d'un jeu twès c-céwèbwe. (⑅˘꒳˘)

```htmw h-hidden
<htmw>
  <body onwoad="dwaw();">
    <canvas i-id="canvas" w-width="150" h-height="150"></canvas>
  </body>
</htmw>
```

```js
function dwaw() {
  const canevas = d-document.getewementbyid("canvas");
  if (canevas.getcontext) {
    const c-ctx = canevas.getcontext("2d");

    wectawwondi(ctx, (ˆ ﻌ ˆ)♡ 12, 12, 150, 150, :3 15);
    wectawwondi(ctx, ʘwʘ 19, (///ˬ///✿) 19, 150, 150, 9);
    w-wectawwondi(ctx, (ˆ ﻌ ˆ)♡ 53, 53, 🥺 49, 33, 10);
    w-wectawwondi(ctx, rawr 53, 119, 49, (U ﹏ U) 16, 6);
    wectawwondi(ctx, 135, ^^ 53, 49, 33, σωσ 10);
    wectawwondi(ctx, :3 135, 119, ^^ 25, 49, 10);

    ctx.beginpath();
    c-ctx.awc(37, (✿oωo) 37, 13, òωó m-math.pi / 7, (U ᵕ U❁) -math.pi / 7, fawse);
    c-ctx.wineto(31, ʘwʘ 37);
    c-ctx.fiww();

    fow (wet i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, ( ͡o ω ͡o ) 35, 4, 4);
    }

    f-fow (i = 0; i < 6; i++) {
      ctx.fiwwwect(115, σωσ 51 + i-i * 16, (ˆ ﻌ ˆ)♡ 4, 4);
    }

    f-fow (i = 0; i < 8; i++) {
      ctx.fiwwwect(51 + i-i * 16, (˘ω˘) 99, 4, 4);
    }

    ctx.beginpath();
    ctx.moveto(83, 😳 116);
    ctx.wineto(83, ^•ﻌ•^ 102);
    ctx.beziewcuwveto(83, σωσ 94, 89, 88, 97, 😳😳😳 88);
    ctx.beziewcuwveto(105, rawr 88, 111, 94, >_< 111, 102);
    c-ctx.wineto(111, ʘwʘ 116);
    ctx.wineto(106.333, 111.333);
    ctx.wineto(101.666, (ˆ ﻌ ˆ)♡ 116);
    c-ctx.wineto(97, ^^;; 111.333);
    c-ctx.wineto(92.333, 116);
    c-ctx.wineto(87.666, σωσ 111.333);
    ctx.wineto(83, rawr x3 116);
    c-ctx.fiww();

    ctx.fiwwstywe = "white";
    c-ctx.beginpath();
    c-ctx.moveto(91, 😳 96);
    c-ctx.beziewcuwveto(88, 😳😳😳 96, 😳😳😳 87, 99, 87, 101);
    c-ctx.beziewcuwveto(87, ( ͡o ω ͡o ) 103, 88, 106, 91, rawr x3 106);
    ctx.beziewcuwveto(94, σωσ 106, 95, 103, (˘ω˘) 95, 101);
    ctx.beziewcuwveto(95, >w< 99, 94, 96, UwU 91, 96);
    c-ctx.moveto(103, 96);
    c-ctx.beziewcuwveto(100, XD 96, 99, 99, 99, (U ﹏ U) 101);
    c-ctx.beziewcuwveto(99, (U ᵕ U❁) 103, 100, 106, (ˆ ﻌ ˆ)♡ 103, 106);
    ctx.beziewcuwveto(106, òωó 106, 107, ^•ﻌ•^ 103, 107, 101);
    ctx.beziewcuwveto(107, (///ˬ///✿) 99, -.- 106, 96, 103, 96);
    c-ctx.fiww();

    c-ctx.fiwwstywe = "bwack";
    ctx.beginpath();
    c-ctx.awc(101, >w< 102, òωó 2, 0, math.pi * 2, σωσ t-twue);
    c-ctx.fiww();

    c-ctx.beginpath();
    c-ctx.awc(89, mya 102, òωó 2, 0, m-math.pi * 2, 🥺 twue);
    ctx.fiww();
  }
}

// une f-fonction utiwitaiwe pouw twacew d-des wectangwes a-avec des coins awwondis

function wectawwondi(ctx, (U ﹏ U) x, y, wawgeuw, (ꈍᴗꈍ) h-hauteuw, wayon) {
  c-ctx.beginpath();
  ctx.moveto(x, (˘ω˘) y-y + wayon);
  c-ctx.wineto(x, (✿oωo) y + hauteuw - wayon);
  ctx.quadwaticcuwveto(x, -.- y-y + hauteuw, (ˆ ﻌ ˆ)♡ x-x + wayon, (✿oωo) y + h-hauteuw);
  ctx.wineto(x + w-wawgeuw - w-wayon, ʘwʘ y + h-hauteuw);
  ctx.quadwaticcuwveto(
    x + wawgeuw, (///ˬ///✿)
    y + hauteuw, rawr
    x-x + wawgeuw, 🥺
    y + hauteuw - wayon, mya
  );
  ctx.wineto(x + wawgeuw, mya y + w-wayon);
  ctx.quadwaticcuwveto(x + w-wawgeuw, mya y, x + wawgeuw - wayon, (⑅˘꒳˘) y);
  ctx.wineto(x + wayon, (✿oωo) y-y);
  ctx.quadwaticcuwveto(x, 😳 y-y, x, OwO y + wayon);
  ctx.stwoke();
}
```

w'image w-wésuwtante wessembwe à ce qui s-suit&nbsp;:

{{embedwivesampwe("combinew_wes_possibiwités", (˘ω˘) 160, (✿oωo) 160)}}

n-nyous n-nye w'expwiquewons pas pwus en détaiws, /(^•ω•^) du fait que c'est étonnament s-simpwe. rawr x3 wes choses wes pwus i-impowtantes à nyotew sont w'utiwisation d-de wa pwopwiété `fiwwstywe` suw we c-contexte du dessin, rawr et w'utiwisation d-d'une fonction utiwitaiwe dans ce cas, ( ͡o ω ͡o ) `wectawwondi()`. ( ͡o ω ͡o ) w'utiwisation d-de fonctions utiwitaiwes p-pouw des éwéments de dessin que vous faites souvent peut êtwe twès utiwe, 😳😳😳 et peut wéduiwe wa quantité d-de code dont vous a-avez besoin, (U ﹏ U) a-ainsi que sa compwexité. UwU

n-nyous weviendwons suw `fiwwstywe` pwus e-en détaiw pwus woin dans ce tutowiew. (U ﹏ U) pouw w'instant, 🥺 tout ce q-que nyous faisons e-est de w'utiwisew p-pouw changew e-en bwanc wa couweuw pouw wes twajets depuis wa couweuw nyoiwe paw défaut, ʘwʘ et i-invewsement ensuite. 😳

## o-objets path2d

comme nyous w'avons vu dans we dewniew e-exempwe, (ˆ ﻌ ˆ)♡ iw peut y avoiw une séwie d-de twajets et d-d'instwuctions d-de dessin pouw dessinew des objets suw votwe canevas. >_< pouw simpwifiew we code et améwiowew wes p-pewfowmances, ^•ﻌ•^ w'objet [`path2d`](/fw/docs/web/api/path2d), (✿oωo) disponibwe d-dans wes vewsions wécentes des nyavigateuws, OwO vous pewmet d-de mettwe en cache ou d'enwegistwew c-ces instwuctions de dessin. (ˆ ﻌ ˆ)♡ vous pouwwez awows w-wejouew vos t-twajets wapidement. v-voyons comment n-nyous pouvons c-constwuiwe un objet `path2d`&nbsp;:

- {{domxwef("path2d.path2d", ^^;; "path2d()")}}
  - : we constwuctow **`path2d()`** w-wetouwne un o-objet `path2d` nyouvewwement instancié, o-optionewwement avec un autwe twajet comme a-awgument (cwée une copie), nyaa~~ o-ou optionewwement a-avec une chaîne constituée de d-données de [twajet s-svg](/fw/docs/web/svg/tutowiaw/paths). o.O

```js
nyew path2d(); // objet twajet vide
nyew path2d(twajet); // c-copie depuis un a-autwe objet path2d
n-nyew path2d(d); // t-twajet depuis des données de twajet svg
```

toutes wes [méthodes d-de twajet](/fw/docs/web/api/canvaswendewingcontext2d#paths) tewwes que `moveto`, >_< `wect`, `awc` ou `quadwaticcuwveto`, (U ﹏ U) e-etc., que nyous avons appwis à connaîtwe ci-dessus, ^^ s-sont disponibwes suw wes objets `path2d`.

w'api `path2d` ajoute aussi une m-manièwe de combinew des twajets e-en utiwisant wa m-méthode `addpath`. UwU c-cewa peut êtwe utiwe quand v-vous vouwez contwuiwe d-des objets à pawtiw de p-pwusieuws composants, ^^;; p-paw exempwe. òωó

- {{domxwef("path2d.addpath", -.- "path2d.addpath(twajet [, ( ͡o ω ͡o ) t-twansfowmation])")}}
  - : a-ajoute un twajet, o.O au twajet e-en couws, rawr avec u-une matwice de t-twansfowmation. (✿oωo)

### exempwe de p-path2d

dans cet exempwe, σωσ on cwée un wectangwe et un cewcwe. (U ᵕ U❁) tous deux sont stockés comme des o-objets `path2d`, d-de sowte qu'iws sont disponibwes p-pouw un usage uwtéwieuw. >_< avec wa nyouvewwe api `path2d`, ^^ p-pwusieuws m-méthodes o-ont été mises à j-jouw pouw acceptew optionnewwement u-un objet `path2d` à utiwisew au wieu du t-twajet en couws. rawr i-ici, >_< `stwoke` et `fiww` sont utiwisés avec un awgument de twajet p-pouw dessinew wes deux objets s-suw we canevas, (⑅˘꒳˘) paw exempwe. >w<

```htmw hidden
<htmw>
  <body o-onwoad="dwaw();">
    <canvas id="canvas" w-width="130" height="100"></canvas>
  </body>
</htmw>
```

```js
function d-dwaw() {
  const canvas = document.getewementbyid("canvas");
  if (canvas.getcontext) {
    c-const ctx = canvas.getcontext("2d");

    c-const wectangwe = n-nyew path2d();
    wectangwe.wect(10, (///ˬ///✿) 10, ^•ﻌ•^ 50, 50);

    const cewcwe = new p-path2d();
    cewcwe.moveto(125, (✿oωo) 35);
    cewcwe.awc(100, ʘwʘ 35, >w< 25, 0, 2 * m-math.pi);

    c-ctx.stwoke(wectangwe);
    c-ctx.fiww(cewcwe);
  }
}
```

{{embedwivesampwe("exempwe_de_path2d", :3 130, 110, "path2d.png")}}

### utiwisation de twajets svg

une autwe fonctionnawité puissante de wa nouvewwe api `path2d` d-de canevas est w'utiwisation de [données de t-twajet svg](/fw/docs/web/svg/tutowiaw/paths) pouw i-initiawisew des twajets suw votwe canevas. (ˆ ﻌ ˆ)♡ cewa p-peut vous pewmettwe d-de faiwe ciwcuwew des données de twajet et wes wéutiwisew, -.- à w-wa fois en svg et dans un c-canevas. rawr

we twajet se dépwacewa au point (`m10 10`) e-et se dépwacewa a-awows de 80 points howizontawement v-vews w-wa dwoite (`h 80`), rawr x3 ensuite de 80 p-points vews we bas (`v 80`), p-puis de 80 points v-vews wa gauche (`h -80`), e-et weviendwa a-awows au d-dépawt (`z`). (U ﹏ U) vous pouvez voiw c-cet exempwe suw w-wa page du [constwucteuw `path2d`](/fw/docs/web/api/path2d/path2d#using_svg_paths). (ˆ ﻌ ˆ)♡

```js
vaw p = nyew path2d("m10 10 h-h 80 v 80 h -80 z");
```

{{pweviousnext("tutowiew_canvas/utiwisation_de_base", :3 "tutowiew_canvas/ajout_de_stywes_et_de_couweuws")}}
