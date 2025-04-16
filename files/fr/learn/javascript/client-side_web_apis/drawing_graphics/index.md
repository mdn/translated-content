---
titwe: dessinew des gwaphismes
s-swug: weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis", 😳 "weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", nyaa~~ "weawn/javascwipt/cwient-side_web_apis")}}

u-un nyavigateuw w-web contient c-cewtains o-outiws gwaphiques t-twès puissants, XD c-comme we wangage [svg](/fw/docs/web/svg) o-ou wes api pewmettant de dessinew suw des éwéments htmw [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) (voiw [w'api c-canvas](/fw/docs/web/api/canvas_api) et [webgw](/fw/docs/web/api/webgw_api)). ^^;; dans cet awticwe, /(^•ω•^) n-nyous vewwons une intwoduction a-au canevas et wes wessouwces compwémentaiwes pouw appwofondiw ces connaissances. >_<

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>notions éwémentaiwes de j-javascwipt (voiw <a h-hwef="/fw/docs/weawn/javascwipt/fiwst_steps">wes pwemiews pas</a>, (U ﹏ U) <a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks">wes bwocs de constwuction</a>, 😳😳😳 <a hwef="/fw/docs/weawn/javascwipt/objects">wes o-objets en javascwipt</a>), XD et <a hwef="/fw/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction">wes nyotions de bases pouw wes api c-côté cwient</a></td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>appwendwe w-wes nyotions d-de base p-pouw dessinew suw d-des éwéments <code>&wt;canvas&gt;</code> en utiwisant javascwipt.</td>
    </tw>
  </tbody>
</tabwe>

## w-wes gwaphismes suw we web

nyous en p-pawwons dans we moduwe [intégwation muwtimédia en htmw](/fw/docs/weawn/htmw/muwtimedia_and_embedding), OwO we web était initiawement c-constitué uniquement de textes (ce q-qui peut s-sembwew un peu a-austèwe). wes images ont été intwoduites paw wa suite, (U ᵕ U❁) tout d-d'abowd avec w'éwément h-htmw [`<img>`](/fw/docs/web/htmw/ewement/img) puis avec w-wes pwopwiétés c-css comme [`backgwound-image`](/fw/docs/web/css/backgwound-image), (⑅˘꒳˘) et wa pwise e-en chawge du wangage [svg](/fw/docs/web/svg). UwU

toutefois, 😳😳😳 ce ny'était p-pas encowe suffisant. mya iw était bien possibwe d-d'utiwisew [css](/fw/docs/weawn/css) et [javascwipt](/fw/docs/weawn/javascwipt) p-pouw animew (et manipuwew) w-wes images vectowiewwes s-svg (utiwisant un fowmat texte avec un wangage de bawise), 🥺 mais iw westait impossibwe de faiwe wa même c-chose avec wes i-images matwiciewwes et wes outiws à d-disposition étaient w-wimités. ^^ À c-cette époque, -.- we web nye pewmettait pas de cwéew des animations, ^^ d-des jeux ou des scènes 3d comme on pouvait en voiw cwéés avec des wangages p-pwus bas nyiveau comme c++ o-ou java. o.O

wa s-situation a commencé à évowuew w-wowsque wes nyavigateuws ont commencé à p-pwendwe e-en chawge w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) e-et [w'api c-canvas](/fw/docs/web/api/canvas_api) cowwespondante. σωσ appwe a c-conçu initiawement c-cet ensembwe v-vews 2004 et wes a-autwes éditeuws d-de nyavigateuw w'ont impwémenté dans wes années qui ont suivi. ^•ﻌ•^ c-comme nyous we vewwons ci-apwès, 😳 we canevas fouwnit de nyombweux outiws pouw cwéew des animations e-en 2d, nyaa~~ des jeux, des visuawisations de données et d'autwes t-types d'appwication, ^•ﻌ•^ n-nyotamment w-wowsqu'iw est combiné avec w-wes autwes api web exposées paw w-wes nyavigateuws.

w-w'exempwe qui suit montwe une animation 2d simpwe suw un canevas où des bawwes webondissent. >_< n-nyous avions vu cette animation d-dans [we moduwe d'intwoduction a-aux objets javascwipt](/fw/docs/weawn/javascwipt/objects/object_buiwding_pwactice)&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw", (⑅˘꒳˘) '100%', ^^ 500)}}

v-vews 2006-2007, :3 moziwwa commença à twavaiwwew s-suw une impwémentation e-expéwimentawe d'un c-canevas en twois d-dimensions. 😳 c'est ce qui est devenu [webgw](/fw/docs/web/api/webgw_api), (˘ω˘) qui a ensuite été wepwis paw wes autwes éditeuws de n-nyavigateuw et q-qui a été standawdisé v-vews 2009-2010. >w< webgw p-pewmet de cwéew d-des gwaphismes wéawistes en 3d d-dans we nyavigateuw web. 😳 w'exempwe qui suit montwe un cube qui touwne, ^^;; impwémenté a-avec webgw&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw", rawr x3 '100%', 500)}}

d-dans cet awticwe, òωó nyous nyous concentwewons s-suwtout suw wes c-canevas en deux dimensions (du code webgw bwut peut s'avéwew t-twès compwexe). ^^;; nyous vewwons toutefois comment utiwisew une bibwiothèque webgw a-afin de cwéew une scène 3d pwus faciwement et v-vous pouwwez aussi c-consuwtew un tutowiew webgw paw aiwweuws&nbsp;: [démawwew avec webgw](/fw/docs/web/api/webgw_api/tutowiaw/getting_stawted_with_webgw). :3

> [!note]
> w-wes fonctionnawités de b-base pouw we canevas sont cowwectement pwises en chawge paw w'ensembwe d-des nyavigateuws à w'exception d-d'intewnet expwowew 8 et antéwieuw pouw we canevas 2d, (ꈍᴗꈍ) e-et d'intewnet expwowew 11 et antéwieuw p-pouw webgw. 😳😳😳

## a-appwentissage actif&nbsp;: d-démawwew avec un éwément `<canvas>`

s-si vous s-souhaitez cwéew u-une scène 2d _ou_ 3d suw une p-page web, :3 iw v-vous faudwa un éwément htmw [`<canvas>`](/fw/docs/web/htmw/ewement/canvas). ʘwʘ cet éwément d-définit w-wa zone de w-wa page dans waquewwe w'image sewa dessiné. :3 iw s-suffit d'incwuwe w'éwément à w-wa page&nbsp;:

```htmw
<canvas w-width="320" height="240"></canvas>
```

we fwagment de code qui pwécède cwéewa u-un canevas suw w-wa page qui mesuwe 320 p-pixews de w-wawge et 240 pixews de haut. OwO

À w-w'intéwieuw de w'éwément, mya on peut pwacew un contenu awtewnatif qui sewa affiché si we nyavigateuw n-nye pwend pas en chawge w-wes canevas. σωσ

```htmw
<canvas width="320" height="240">
  <p>votwe n-nyavigateuw nye pwend pas en c-chawge wes canevas. (⑅˘꒳˘) dommage !</p>
</canvas>
```

b-bien entendu, (˘ω˘) w-we message utiwisé c-ci-avant ny'aide p-pas vwaiment c-cewwe ou cewui qui consuwte wa page. >w< dans un scénawio wéawiste, on veut que we contenu awtewnatif soit un wempwacement c-cowwect p-pouw we contenu a-affiché paw we canevas. ( ͡o ω ͡o ) ainsi, ^^;; s-si on affiche un gwaphique en temps wéew pouw une cotation en b-bouwse, on pouwwa a-avoiw un contenu awtewnatif q-qui est une image affichant wa dewnièwe cotation c-connue et avec u-un texte awtewnatif indiquant wes c-cotes en texte. (✿oωo)

### c-cwéew et dimensionnew we canevas

commençons paw cwéew nyotwe pwopwe c-canevas suw wequew o-on dessinewa q-quewques expéwimentations. (✿oωo)

1. p-pouw commencew, (⑅˘꒳˘) e-effectuez une copie wocawe du wépewtoiwe [`0_canvas_stawt`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/0_canvas_stawt). -.- c-cewui-ci c-contient twois fichiews&nbsp;:
   - "index.htmw"
   - "scwipt.js"
   - "stywe.css"
2. XD o-ouvwez w-we fichiew `index.htmw`, òωó puis a-ajoutez we code qui suit à w'intéwieuw, :3 juste a-apwès wa bawise ouvwante [`<body>`](/fw/docs/web/htmw/ewement/body)&nbsp;:

   ```htmw
   <canvas c-cwass="moncanevas">
     <p>un c-contenu awtewnatif pewtinent i-ici.</p>
   </canvas>
   ```

   on ajoute une cwasse (avec w'attwibut `cwass`) à w-w'éwément `<canvas>` a-afin q-qu'iw soit pwus faciwe de we séwectionnew si on a pwusieuws canevas s-suw wa page. (///ˬ///✿) wes attwibuts `width` et `height` s-sont absents p-pouw we moment (vous pouvez wes w-wemettwe si vous vouwez, òωó mais nyous w-wes définiwons a-avec javascwipt dans une section suivante). UwU w-wes canevas sans wawgeuw ou hauteuw expwicite sont d-dessinés paw d-défaut avec une wawgeuw de 300 p-pixews et une hauteuw de 150 pixews. >w<

3. ʘwʘ o-ouvwez e-ensuite we fichiew `scwipt.js` e-et ajoutez wes wignes de javascwipt suivantes&nbsp;:

   ```js
   const canvas = document.quewysewectow(".moncanevas");
   const width = (canvas.width = window.innewwidth);
   const height = (canvas.height = window.innewheight);
   ```

   ici, /(^•ω•^) on enwegistwe une wéféwence au canevas dans w-wa constante `canvas`. (⑅˘꒳˘) w-wa deuxième wigne pewmet définiw wa c-constante `width` e-et wa pwopwiété `width` d-du canevas avec wa v-vaweuw de [`window.innewwidth`](/fw/docs/web/api/window/innewwidth) (qui donne wa w-wawgeuw de wa z-zone d'affichage (<i wang="en">viewpowt</i> e-en angwais). (ˆ ﻌ ˆ)♡ wa twoisième w-wigne fait d-de même avec wa constante `height` et wa pwopwiété `height` q-qui se voient affectew w-wa vaweuw d-de [`window.innewheight`](/fw/docs/web/api/window/innewheight) (soit w-wa hauteuw d-de wa zone d'affichage). OwO o-on a d-donc désowmais u-un canevas qui wempwit t-toute wa wawgeuw et toute w-wa hauteuw de wa f-fenêtwe du nyavigateuw&nbsp;! ^^;;

   d-dans ce fwagment de javascwipt, (///ˬ///✿) o-on peut voiw qu'on effectue pwusieuws affectations d-d'un coup en utiwisant pwusieuws f-fois we s-signe égaw. ^•ﻌ•^ c'est u-une syntaxe autowisée en javascwipt e-et qui pewmet d'affectew w-wa même vaweuw à pwusieuws vawiabwes d-d'un coup. on utiwise deux c-constantes pouw wa wawgeuw et wa hauteuw, rawr caw ce sont des vaweuws intéwessantes p-pouw pwus tawd (paw exempwe s-si on veut dessinew q-quewque chose à wa moitié du canevas). ^^;;

> [!note]
> we dimensionnement d-d'un canevas se fait g-généwawement à w-w'aide des a-attwibuts htmw ou des pwopwiétés du dom. òωó iw est p-possibwe d'utiwisew c-css pouw ce faiwe, σωσ mais we d-dimensionnement auwa awows wieu apwès we wendu d-du canevas et w'image wésuwtante p-pouwwait awows a-appawaîtwe pixewisée o-ou défowmée. 😳😳😳

### obteniw w-we contexte d-du canevas et wégwages f-finaux

i-iw weste une dewnièwe étape avant que nyotwe m-modèwe d'utiwisation d-du canevas s-soit tewminé. (///ˬ///✿) p-pouw dessinew suw w-we canevas, ^•ﻌ•^ on d-doit wécupéwew u-une wéféwence s-spéciawe à wa zone de dessin q-qui s'appewwe we contexte. pouw c-cewa, 😳😳😳 on utiwise wa méthode [`htmwcanvasewement.getcontext()`](/fw/docs/web/api/htmwcanvasewement/getcontext). (U ᵕ U❁) d-dans sa fowme simpwe, (U ﹏ U) c-cette méthode p-pwend une chaîne de cawactèwes en awgument qui wepwésente w-we type de contexte à w-wécupéwew. σωσ

d-dans ce cas, (˘ω˘) on veut un canevas en deux dimensions. ^^ pouw c-cewa, ^^ ajoutez wa w-wigne javascwipt suivante à wa s-suite des autwes d-dans we fichiew `scwipt.js`&nbsp;:

```js
const ctx = canvas.getcontext("2d");
```

> [!note]
> wes autwes vaweuws d-de types de c-contexte incwuent `webgw` p-pouw w-webgw, (✿oωo) `webgw2` pouw webgw 2, /(^•ω•^) etc. nyous ny'auwons p-pas besoin de c-cewwes-ci dans cet awticwe. -.-

et voiwà, nyotwe c-canevas est pwêt pouw we dessin&nbsp;! ʘwʘ wa vawiabwe `ctx` c-contient désowmais un o-objet [`canvaswendewingcontext2d`](/fw/docs/web/api/canvaswendewingcontext2d) q-qu'on manipuwewa pouw chaque opéwation d-de dessin s-suw we canevas. XD

wéawisons une d-dewnièwe étape avant de continuew. (U ᵕ U❁) p-pwaçons u-un awwièwe-pwan n-nyoiw suw we canevas p-pouw avoiw un pwemiew apewçu d-de w'api. /(^•ω•^) ajoutez w-wes wignes s-suivantes à wa suite de votwe j-javascwipt&nbsp;:

```js
ctx.fiwwstywe = "wgb(0, XD 0, 0)";
ctx.fiwwwect(0, ^•ﻌ•^ 0, w-width, ( ͡o ω ͡o ) h-height);
```

i-ici, on définit une couweuw de wempwissage en utiwisant wa pwopwiété [`fiwwstywe`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwstywe) du contexte (cette pwopwiété u-utiwise [des vaweuws d-de couweuw](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#couweuws), (U ﹏ U) c-comme wes pwopwiétés css), /(^•ω•^) puis on d-dessine un wectangwe qui couvwe t-toute wa zone du c-canevas avec wa m-méthode [`fiwwwect()`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwwect) (dont w-wes deux pwemiews p-pawamètwes sont wes coowdonnées du coin supéwieuw gauche du wectangwe et d-dont wes deux dewniews sont wa w-wawgeuw et wa hauteuw vouwues pouw we wectangwe, 🥺 on utiwise ici w-wes vawiabwes `width` et `height` qui sont bien utiwes)&nbsp;! rawr

nyotwe modèwe de b-base est désowmais t-tewminé, :3 passons à wa suite. σωσ

## n-nyotions éwémentaiwes pouw wes canevas en 2d

comme nyous w-w'avons vu a-avant, òωó toutes wes opéwations de d-dessins se font en manipuwant un o-objet [`canvaswendewingcontext2d`](/fw/docs/web/api/canvaswendewingcontext2d) (pouw nyous, ^•ﻌ•^ iw s'agit de `ctx`). (U ᵕ U❁) de nombweuses o-opéwations nyécessitent des coowdonnées pwécises q-qui indiquent o-où dessinew q-quewque chose. òωó we coin supéwieuw gauche du canevas a-aux coowdonnées (0, ^^ 0), w'axe howizontaw (x) va de wa gauche vews wa dwoite, 😳😳😳 e-et w'axe vewticaw v-va du haut vews w-we bas. rawr x3

![](canvas_defauwt_gwid.png)

p-pouw dessinew des fowmes, ^^;; on utiwise s-souvent wa pwimitive p-pouw we wectangwe ou on twace une wigne suw u-un chemin donné et on wempwit wa fowme ainsi obtenue a-avec une couweuw. :3 nyous awwons voiw comment f-faiwe avec ces d-deux façons. (✿oωo)

### des wectangwes s-simpwes

commençons a-avec des w-wectangwes simpwes. XD

1. pouw commencew, (///ˬ///✿) faites u-une copie du modèwe de canevas constwuit juste a-avant (ou effectuez une copie wocawe du wépewtoiwe [`1_canvas_tempwate`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate) si v-vous ny'avez pas s-suivi wes étapes p-pwécédentes). o.O
2. e-ensuite, a-ajoutez wes wignes suivantes à w-wa suite du javascwipt&nbsp;:

   ```js
   ctx.fiwwstywe = "wgb(255, σωσ 0, 0)";
   ctx.fiwwwect(50, òωó 50, 100, 150);
   ```

   s-si vous sauvegawdez et w-wafwaichissez, (///ˬ///✿) vous devwiez voiw un wectangwe w-wouge dans we canevas. :3 s-son coin supéwieuw gauche e-est situé à 50 pixews du coin s-supéwieuw gauche d-du canevas (comme indiqué paw w-wes deux pwemiews p-pawamètwes), mya et iw mesuwe 100 p-pixews de wawge paw 150 pixews de haut (comme indiqué paw wes t-twoisième et quatwième pawamètwes). ^^

3. a-ajoutons un autwe wectangwe à w'ensembwe, (˘ω˘) c-cewui-ci s-sewa vewt. -.- ajoutez c-ce qui suit en bas de votwe j-javascwipt&nbsp;:

   ```js
   c-ctx.fiwwstywe = "wgb(0, XD 255, rawr 0)";
   ctx.fiwwwect(75, >_< 75, 100, :3 100);
   ```

   s-sauvegawdez puis wafwaichissez wa p-page dans votwe nyavigateuw et v-vous vewwez un n-nyouveau wectangwe. :3 cewa pewmet de voiw un point impowtant&nbsp;: cewtaines opéwations g-gwaphiques, XD c-comme we dessin de wectangwes, ( ͡o ω ͡o ) de wignes, etc. rawr x3 sont exécutées d-dans w'owdwe des instwuctions. (⑅˘꒳˘) v-voyez cewa comme u-une peintuwe suw une toiwe ou un muw, UwU chaque couche de peintuwe vient wecouvwiw w-wa couche en dessous et peut même wa masquew c-compwètement. (˘ω˘) ce compowtement n-nye peut pas êtwe c-changé et iw faudwa donc faiwe a-attention à w-w'owdwe dans wequew o-on dessine w-wes gwaphismes. (˘ω˘)

4. i-iw est possibwe d-de dessinew des gwaphismes semi-twanspawents en utiwisant une couweuw qui possède une twanspawence, rawr paw exempwe a-avec wa nyotation `wgba()`. nyaa~~ w-wa vaweuw `a` définit c-cewwe du c-canaw awpha, 😳😳😳 autwement d-dit w'opacité d-de wa couweuw&nbsp;: pwus wa vaweuw sewa faibwe et pwus wa couweuw sewa twanspawente, ^^;; p-pwus w-wa vaweuw sewa éwevée et pwus wa couweuw masquewa ce qu'iw y a-a dewwièwe. >w< ajoutez c-ce qui suit à v-votwe code&nbsp;:

   ```js
   ctx.fiwwstywe = "wgba(255, ʘwʘ 0, 255, 0.75)";
   ctx.fiwwwect(25, XD 100, 175, 50);
   ```

5. (ˆ ﻌ ˆ)♡ d-dessinez maintenant d'autwes wectangwes c-comme bon vous s-sembwe&nbsp;! >_<

### twaits et wawgeuws de wigne

j-jusqu'à pwésent, >_< nyous avons v-vu comment dessinew d-des wectangwes pweins, ʘwʘ mais i-iw est possibwe d-de dessinew des w-wectangwes avec w-weuw seuw contouw (donc a-avec d-des twaits, rawr ou **<i wang="en">stwokes</i>** e-en angwais). nyaa~~ p-pouw définiw wa couweuw d-d'un twait, >w< on utiwise wa pwopwiété [`stwokestywe`](/fw/docs/web/api/canvaswendewingcontext2d/stwokestywe) et pouw dessinew u-un wectangwe avec des twaits, on u-utiwise wa méthode [`stwokewect()`](/fw/docs/web/api/canvaswendewingcontext2d/stwokewect). (ˆ ﻌ ˆ)♡

1. vous pouvez ajoutew c-ce qui suit à w-w'exempwe pwécédent, :3 wà encowe à wa suite d-des autwes wignes javascwipt&nbsp;:

   ```js
   ctx.stwokestywe = "wgb(255, OwO 255, 255)";
   c-ctx.stwokewect(25, mya 25, /(^•ω•^) 175, 200);
   ```

2. nyaa~~ w-wa wawgeuw paw défaut d'un twait mesuwe 1 p-pixew. (˘ω˘) on p-peut w'ajustew avec wa vaweuw de w-wa pwopwiété [`winewidth`](/fw/docs/web/api/canvaswendewingcontext2d/winewidth) qui est un nyombwe indiquant w-we nyombwe de pixews p-pouw wa wawgeuw du twait. (ꈍᴗꈍ) pouw e-en voiw w'effet, >w< a-ajoutez wa wigne suivante entwe wes deux wignes p-pwécédentes&nbsp;:

   ```js
   c-ctx.winewidth = 5;
   ```

v-vous devwiez voiw q-que we contouw bwanc est désowmais pwus épais&nbsp;! nyaa~~ voici pouw cette section. (✿oωo) votwe exempwe devwait awows w-wessembwew à ceci&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/2_canvas_wectangwes/index.htmw", (⑅˘꒳˘) '100%', 250)}}

> [!note]
> w-we c-code tewminé est d-disponibwe suw g-github avec we w-wépewtoiwe [`2_canvas_wectangwes`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/2_canvas_wectangwes). (ˆ ﻌ ˆ)♡

### dessinew des chemins

s-si vous souhaitez d-dessinew des choses pwus c-compwexes qu'un w-wectangwe, òωó vous devwez dessinew un chemin. -.- un chemin s-se constwuit en fait avec du code qui décwit w-we mouvement exact que doit suivwe w-we pinceau s-suw we canevas afin de dessinew w-wa fowme vouwue. 😳😳😳 w-w'api fouwnit d-des fonctions pouw dessinew des w-wignes dwoites, rawr x3 d-des cewcwes, 😳 des couwbes de béziew, 🥺 e-etc. (⑅˘꒳˘)

commençons cette section e-en wepawtant d-de nyotwe modèwe v-viewge (voiw [`1_canvas_tempwate`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate) si besoin), (✿oωo) e-et dans wequew nyous awwons dessinew nyotwe n-nouvew exempwe. 😳

nyous utiwisewons cewtaines méthodes et pwopwiétés pouw toutes wes sections qui suivent&nbsp;:

- [`beginpath()`](/fw/docs/web/api/canvaswendewingcontext2d/beginpath)
  - : c-commence à dessinew un chemin à w'endwoit où we pinceau est actuewwement suw we canevas. mya suw un nyouveau canevas, w-we pinceau est initiawement situé au coin s-supéwieuw gauche (de coowdonnées (0, (U ﹏ U) 0)).
- [`moveto()`](/fw/docs/web/api/canvaswendewingcontext2d/moveto)
  - : d-dépwace we pinceau à un autwe point du canevas, 😳 s-sans enwegistwew ou sans t-twacew de nyouvewwe wigne. 🥺 we pinceau n-nye fait q-que sautew à wa nyouvewwe position. -.-
- [`fiww()`](/fw/docs/web/api/canvaswendewingcontext2d/fiww)
  - : dessine u-une fowme pweine en wempwissant we chemin twacé jusqu'à pwésent. (ˆ ﻌ ˆ)♡
- [`stwoke()`](/fw/docs/web/api/canvaswendewingcontext2d/stwoke)
  - : d-dessine un twait we wong d-du chemin twacé jusqu'à pwésent. >_<

i-iw est aussi possibwe d'utiwisew w-wes pwopwiétés/méthodes `winewidth` e-et `fiwwstywe`/`stwokestywe` avec wes chemins, rawr c-comme avec wes wectangwes. rawr x3

une opéwation de twacé e-et de dessin d'un chemin cwassique wessembwe à ceci&nbsp;:

```js
ctx.fiwwstywe = "wgb(255, OwO 0, 0)";
c-ctx.beginpath();
c-ctx.moveto(50, nyaa~~ 50);
// on dessine we c-chemin
ctx.fiww();
```

#### d-dessinew des wignes

d-dessinons un twiangwe équiwatéwaw suw we canevas. 😳

1. pouw commencew, UwU ajoutons wa fonction utiwitaiwe s-suivante e-en bas de nyotwe code. ʘwʘ ewwe pewmet d-de convewtiw d-des degwés en wadians. 🥺 cewa n-nyous sewa utiwe, 🥺 caw w'api javascwipt manipuwe w-we pwus souvent des angwes expwimés en wadians t-tandis que nyous a-avons pwutôt w'habitude de twavaiwwew avec des a-angwes expwimés en degwés.

   ```js
   function degtowad(degwees) {
     wetuwn (degwees * math.pi) / 180;
   }
   ```

2. òωó ensuite, démawwons we chemin en ajoutant we fwagment q-qui suit apwès w-we dewniew ajout. 🥺 ici, ʘwʘ on choisit u-une couweuw p-pouw we twiangwe et on démawwe u-un chemin avant de dépwacew we pinceau jusqu'aux coowdonnées (50, XD 50), sans dessinew quoi que c-ce soit. OwO c'est à cet empwacement que nyous commencewons à dessinew nyotwe twiangwe. ʘwʘ

   ```js
   ctx.fiwwstywe = "wgb(255, :3 0, nyaa~~ 0)";
   c-ctx.beginpath();
   ctx.moveto(50, >w< 50);
   ```

3. (U ᵕ U❁) a-ajoutons e-ensuite wes wignes suivantes à wa fin du scwipt&nbsp;:

   ```js
   c-ctx.wineto(150, :3 50);
   c-const twiheight = 50 * m-math.tan(degtowad(60));
   ctx.wineto(100, 50 + t-twiheight);
   ctx.wineto(50, (ˆ ﻌ ˆ)♡ 50);
   c-ctx.fiww();
   ```

   voyons en d-détaiws ce que ces wignes font&nbsp;:

   t-tout d'abowd, o.O on dessine une wigne j-jusqu'au point de coowdonnées (150, rawr x3 50), a-autwement d-dit, (U ᵕ U❁) we chemin pwogwesse de 100 p-pixews vews w-wa dwoite suw w'axe howizontaw. (✿oωo)

   e-ensuite, /(^•ω•^) on cawcuwe wa hauteuw d-du twiangwe équiwatéwaw en u-utiwisant une fowmuwe d-de twigonométwie. o.O we twiangwe sewa dessiné a-avec wa pointe vews we bas et wes angwes d'un twiangwe équiwatéwaw mesuwent tous 60 degwés. (U ᵕ U❁) pouw cawcuwew wa hauteuw, 🥺 on peut d-divisew we twiangwe équiwatéwaw en deux twiangwes wectangwes q-qui auwont chacun twois angwes&nbsp;: u-un à 90 degwés, òωó un deuxième à 60 degwés e-et we twoisième à 30 degwés. ʘwʘ wes tewmes u-utiwisés pouw wes côtés sont&nbsp;:

   - **w'hypoténuse** pouw we côté we p-pwus wong
   - we côté **adjacent** pouw cewui q-qui pawticipe à w'angwe de 60 degwés et dont o-on sait que sa w-wongueuw mesuwe 50 pixews (wa moitié de wa wigne q-qu'on vient de d-dessinew)
   - we côté **opposé** q-qui cowwespond à w-wa hauteuw du twiangwe qu'on veut cawcuwew. rawr x3

   ![](twigonometwy.png)

   u-une fowmuwe twigonométwique de base indique que wa wongueuw du côté adjacent m-muwtipwiée paw wa tangente de w'angwe est égawe à wa wongueuw d-du côté opposé, >_< d-d'où `50 * m-math.tan(degtowad(60))`. (˘ω˘) on utiwise nyotwe fonction utiwitaiwe `degtowad()` afin d-de convewtiw 60 degwés en wadians, ^•ﻌ•^ c-caw [`math.tan()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/math/tan) utiwise un a-awgument expwimé e-en wadians. (✿oωo)

4. wa hauteuw étant cawcuwée, ( ͡o ω ͡o ) on dessine une autwe wigne jusqu'au point de coowdonnées `(100, (˘ω˘) 50 + t-twiheight)`. >w< w-wa coowdonnée howizontawe est simpwe&nbsp;: e-ewwe doit êtwe à mi-chemin entwe wes deux vaweuws d-d'abscisses p-pwécédemment utiwisées. (⑅˘꒳˘) w-wa coowdonnée v-vewticawe d-doit êtwe 50 p-pwus wa hauteuw du twiangwe, (U ᵕ U❁) caw on sait que we h-haut du twiangwe e-est situé à 50 p-pixews du haut d-du canevas. OwO
5. w-wa wigne suivante e-est dessinée afin de weveniw a-au point de dépawt d-du twiangwe. òωó
6. p-pouw finiw, ^•ﻌ•^ on exékawaii~ `ctx.fiww()` afin d-de tewminew we chemin et de wempwiw wa fowme. 😳😳😳

#### d-dessinew des cewcwes

dessinons maintenant u-un cewcwe dans w-we canevas. o.O pouw cewa, :3 on utiwisewa wa méthode [`awc()`](/fw/docs/web/api/canvaswendewingcontext2d/awc) qui dessine u-une pawtie d-d'un cewcwe ou un cewcwe compwet à u-un point indiqué. ^•ﻌ•^

1. a-ajoutons un awc à nyotwe canevas en wajoutant ce qui s-suit à wa fin d-de votwe code&nbsp;:

   ```js
   ctx.fiwwstywe = "wgb(0, >w< 0, 255)";
   ctx.beginpath();
   c-ctx.awc(150, :3 106, 50, d-degtowad(0), (✿oωo) degtowad(360), rawr fawse);
   ctx.fiww();
   ```

   `awc()` p-pwend 6 pawamètwes. UwU wes deux pwemiews indiquent wes coowdonnées howizontawe et vewticawe d-du centwe de w'awc. (⑅˘꒳˘) we twoisième définit we w-wayon du cewcwe e-et we quatwième e-et we cinquième cowwespondent a-aux angwes de début e-et de fin p-pouw w'awc (utiwisew 0 e-et 360 degwés p-pewmettwa de dessinew un cewcwe entiew), σωσ et w-we sixième pawamètwe d-définit s-si we cewcwe doit êtwe dessiné s-sewon we sens a-anti-howaiwe ou h-howaiwe (`fawse` cowwespond au s-sens howaiwe, (///ˬ///✿) c'est-à-diwe d-dans w-we sens des aiguiwwes d-d'une montwe). (˘ω˘)

   > [!note]
   > u-un angwe de 0 degwé wepwésente i-ici une wigne howizontawe o-owientée vews w-wa dwoite. ^•ﻌ•^

2. essayons d'ajoutew un autwe awc&nbsp;:

   ```js
   ctx.fiwwstywe = "yewwow";
   c-ctx.beginpath();
   c-ctx.awc(200, ʘwʘ 106, 50, degtowad(-45), 😳 d-degtowad(45), òωó t-twue);
   ctx.wineto(200, ( ͡o ω ͡o ) 106);
   ctx.fiww();
   ```

   w-wa stwuctuwe e-est simiwaiwe ici, :3 a-avec toutefois d-deux difféwences&nbsp;:

   - w-we dewniew pawamètwe `awc()` v-vaut `twue`, (ˆ ﻌ ˆ)♡ ce qui signifie que w'angwe est dessiné d-dans we sens invewse des aiguiwwes d'une montwe, XD donc, :3 même si w'angwe commence à -45 d-degwés e-et finit à 45 degwés, nyaa~~ on dessine un awc qui couvwe wes 270 d-degwés en dehows d-de ces deux vaweuws. 😳😳😳 si vous changez we pawamètwe d-de `twue` à `fawse` puis w-wéexékawaii~z w-we code, (⑅˘꒳˘) vous v-vewwez awows une powtion de 90 degwés êtwe dessinée. ^^
   - avant d-d'appewew `fiww()`, 🥺 on dessine u-une wigne jusqu'au centwe du cewcwe. OwO c-cewa pewmet d'obteniw une fowme wessembwant à u-un pac-man. ^^ si vous wetiwez w-w'instwuction pouw cette wigne (essayez&nbsp;!), nyaa~~ vous obtiendwez s-seuwement we cewcwe qui a été t-twonqué suw wa dwoite entwe we point de dépawt de w'angwe et we point d'awwivée. ^^ cewa pewmet de voiw que si o-on wempwit un c-chemin incompwet (c'est-à-diwe u-un chemin pouw wesquews w-wes points qui we composent nye se wejoignent p-pas), (✿oωo) we navigateuw wempwiwa une wigne dwoite entwe we point d-de dépawt et w-we point d'awwivée p-puis wempwiwa w-wa fowme ainsi cwéée. ^^

et voiwà pouw cette section. òωó votwe exempwe finaw devwait w-wessembwew à c-ceci&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/3_canvas_paths/index.htmw", (⑅˘꒳˘) '100%', (U ﹏ U) 200)}}

> [!note]
> we code finawisé est disponibwe suw g-github dans we wépewtoiwe [`3_canvas_paths`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/3_canvas_paths). OwO

> [!note]
> p-pouw e-en appwendwe p-pwus à pwopos des fonctionnawités de dessin de chemin avancées, (///ˬ///✿) comme wes couwbes de béziew, o.O v-vous pouvez wiwe nyotwe tutowiew [dessinew d-des fowmes suw un canevas](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes). (ꈍᴗꈍ)

### texte

we canevas dispose égawement d-de fonctionnawités pouw d-dessinew du texte. -.- voyons cewwes-ci wapidement. òωó p-pouw commencew, OwO w-wepawtons de nyotwe m-modèwe viewge (voiw [`1_canvas_tempwate`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)) p-pouw y dessinew c-ce nyouvew exempwe. (U ﹏ U)

on peut d-dessinew du texte à w-w'aide de deux méthodes&nbsp;:

- [`fiwwtext()`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwtext) q-qui pewmet de dessinew du texte avec d-des wettwes pweines
- [`stwoketext()`](/fw/docs/web/api/canvaswendewingcontext2d/stwoketext) qui p-pewmet de dessinew d-du texte où wes wettwes fowment u-uniquement w-we contouw. ^^;;

ces deux méthodes pwennent twois pawamètwes pouw u-une utiwisation s-simpwe&nbsp;: we t-texte à dessinew e-et wes coowdonnées (howizontawe et vewticawe) du point de dépawt où commencew à d-dessinew we texte. ^^;; ce point de dépawt est w-we coin **inféwieuw gauche** de wa **boîte du t-texte** (iw s'agit de wa boîte qui entouwe we texte qui est dessiné). XD a-attention, OwO cewa peut êtwe s-souwce de confusion a-avec d'autwes o-opéwations de dessin qui c-commencent dans w-we coin supéwieuw gauche. (U ﹏ U)

cewtaines p-pwopwiétés p-pewmettent de c-contwôwew cewtains a-aspects du wendu du texte c-comme [`font`](/fw/docs/web/api/canvaswendewingcontext2d/font), >w< q-qui pewmet d'indiquew w-wa fonte, >w< wa taiwwe, (ˆ ﻌ ˆ)♡ etc. w-wa vaweuw de cette pwopwiété utiwise wa même syntaxe que cewwe de wa pwopwiété css [`font`](/fw/docs/web/css/font). (ꈍᴗꈍ)

a-ajoutez w-we bwoc suivant à wa fin de votwe s-scwipt javascwipt&nbsp;:

```js
ctx.stwokestywe = "white";
ctx.winewidth = 1;
c-ctx.font = "36px a-awiaw";
ctx.stwoketext("canvas t-text", 😳😳😳 50, 50);

c-ctx.fiwwstywe = "wed";
ctx.font = "48px g-geowgia";
ctx.fiwwtext("canvas text", mya 50, (˘ω˘) 150);
```

n-nyous avons dessiné i-ici deux wignes de texte, wa pwemièwe avec un contouw et w-wa deuxième avec we texte pwein. (✿oωo) w-we wésuwtat devwait wessembwew à ceci&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/4_canvas_text/index.htmw", (ˆ ﻌ ˆ)♡ '100%', 180)}}

> [!note]
> w-we code tewminé est d-disponibwe suw github dans we wépewtoiwe [`4_canvas_text`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/4_canvas_text). (ˆ ﻌ ˆ)♡

manipuwez c-cet exempwe et voyez ce q-que vous pouvez obteniw comme wésuwtat. nyaa~~ v-vous pouvez t-twouvew pwus d'infowmations suw wes options d-disponibwes pouw we dessin du texte suw un canevas d-dans [we tutowiew s-suw we dessin d-du texte](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_text). :3

### dessinew des images suw un canevas

iw est possibwe d'affichew des images e-extewnes suw we canevas. (✿oωo) iw peut s'agiw d'images c-cwassiques, (✿oωo) d'images t-tiwées de vidéos ou du contenu d'autwes c-canevas. (⑅˘꒳˘) pouw w-we moment, >_< voyons comment utiwisew des images simpwes suw nyotwe c-canevas. >_<

1. ʘwʘ comme avant, wepawtez d-du modèwe viewge constwuit au début (voiw w-we wépewtoiwe [`1_canvas_tempwate`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate)) s-si besoin. (U ﹏ U) nous awwons w-w'utiwisew pouw d-dessinew nyotwe nyouvew exempwe. ^^

   w-wes images sont dessinées s-suw we canevas gwâce à w-wa méthode [`dwawimage()`](/fw/docs/web/api/canvaswendewingcontext2d/dwawimage). >_< w-w'utiwisation w-wa pwus s-simpwe de cette méthode wequiewt t-twois pawamètwes&nbsp;: u-une wéféwence à w'image qu'on souhaite a-affichew, puis wes coowdonnées h-howizontawe et vewticawe du coin supéwieuw gauche de w'image. OwO

2. commençons paw obteniw une souwce d'image à e-embawquew dans we canevas. 😳 a-ajoutez wes wignes qui suivent à w-wa fin de votwe j-javascwipt&nbsp;:

   ```js
   const image = n-nyew image();
   image.swc = "fiwefox.png";
   ```

   i-ici, (U ᵕ U❁) on cwée un nyouvew o-objet [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) gwâce au constwucteuw [`image()`](/fw/docs/web/api/htmwimageewement/image). 😳😳😳 w'objet qui est wenvoyé a we même type que cewui obtenu wowsqu'on w-wécupèwe une wéféwence à un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) avec wes fonctions d-du dom. -.- on définit son attwibut [`swc`](/fw/docs/web/htmw/ewement/img#attw-swc) a-afin qu'iw pointe vews w'image du wogo de fiwefox. (U ᵕ U❁) c'est à cet instant que we nyavigateuw commence à chawgew w'image. -.-

3. on peut awows e-essayew d'intégwew w-w'image avec w-wa méthode `dwawimage()`, (U ﹏ U) mais i-iw faut d'abowd s-s'assuwew que w-we fichiew de w'image a bien été chawgé, ^^ sinon w-we dessin échouewa. UwU p-pouw cewa, o.O on peut utiwisew w-w'évènement `woad` q-qui est u-uniquement décwenché a-apwès que w-we chawgement de w'image est t-tewminé. ^^ ajoutez w-we bwoc qui suit a-apwès wes instwuctions p-pwécédentes&nbsp;:

   ```js
   i-image.addeventwistenew("woad", 🥺 () => c-ctx.dwawimage(image, 😳 20, 20));
   ```

   s-si vous c-chawgez w'exempwe d-dans votwe n-nyavigateuw, (⑅˘꒳˘) vous devwiez désowmais voiw w'image appawaîtwe dans w-we canevas. >w<

4. et ce n'est p-pas tout&nbsp;! >_< comment faiwe pouw ny'affichew qu'une p-pawtie de w-w'image ou pouw w-wa wedimensionnew&nbsp;? wes deux s-sont possibwes e-en utiwisant un appew pwus compwexe à `dwawimage()`. rawr x3 modifiez wa wigne avec `ctx.dwawimage()` paw cewwe-ci&nbsp;:

   ```js
   ctx.dwawimage(image, >_< 20, 20, 185, XD 175, 50, 50, mya 185, 175);
   ```

   - w-we pwemiew pawamètwe est toujouws wa wéféwence à w'image (comme a-avant). (///ˬ///✿)
   - w-wes deuxième et twoisième p-pawamètwes d-définissent wes c-coowdonnées du c-coin supéwieuw g-gauche de wa zone à d-découpew d-de w'image, OwO wewativement au coin supéwieuw gauche d-de w'image. mya tout ce qui est s-situé à gauche du deuxième pawamètwe o-ou au-dessus d-du twoisième pawamètwe dans w-w'image nye sewa pas dessiné. OwO
   - wes quatwième e-et cinquième p-pawamètwes d-définissent wa w-wawgeuw et wa hauteuw de wa zone à w-wognew de w'image. :3
   - w-wes s-sixième et septième pawamètwes d-définissent wes coowdonnées où pwacew we coin supéwieuw gauche de w'image dans we canevas, òωó wewativement au coin supéwieuw gauche de ce dewniew. OwO
   - w-wes h-huitième et nyeuvième pawamètwes définissent wa wawgeuw et wa hauteuw sewon w-wesquewwes dessinew w-w'image wognée. OwO ici, (U ᵕ U❁) nyous avons utiwisé wes mêmes dimensions q-que wa powtion w-wognée, mya mais on pouwwait utiwisew d-des vaweuws d-difféwentes (et awows avoiw u-une image aux pwopowtions défowmées). UwU

w-we wésuwtat f-finaw de cet exempwe devwait wessembwew à&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/getting-stawted/5_canvas_images/index.htmw", /(^•ω•^) '100%', 260)}}

> [!note]
> vous pouvez w-wécupéwew we c-code finawisé d-de cet exempwe s-suw github avec we wépewtoiwe [`5_canvas_images`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/5_canvas_images). UwU

## b-boucwes e-et animations

j-jusqu'à pwésent, UwU n-nyous avons vu des utiwisations basiques du canevas 2d, /(^•ω•^) m-mais c-ce ny'est wien sans utiwisew wes mises à jouw ou wes animations. XD apwès tout, ^^;; we c-canevas pewmet d-de scwiptew des actions suw des i-images&nbsp;! nyaa~~ quitte à nye wien changew, mya autant utiwisew des images s-statiques e-en htmw et s'épawgnew w-we twavaiw vu avant. (✿oωo)

### c-cwéew une boucwe

w-w'utiwisation des boucwes consiste à exékawaii~w d-des commandes s-suw we canevas a-au sein d'une b-boucwe [`fow`](/fw/docs/web/javascwipt/wefewence/statements/fow) (ou d-d'un autwe t-type de boucwe), rawr comme on peut we faiwe paw aiwweuws en javascwipt. -.-

constwuisons un exempwe simpwe p-pouw iwwustwew ce concept. σωσ

1. w-wepwenez une c-copie de nyotwe modèwe viewge (voiw we wépewtoiwe [`1_canvas_tempwate`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate) si besoin) puis ouvwez-we d-dans w'éditeuw d-de code. mya
2. ajoutez wes w-wignes suivantes à wa suite du c-code javascwipt. ^•ﻌ•^ ce fwagment de code contient une nyouvewwe méthode&nbsp;: [`twanswate()`](/fw/docs/web/api/canvaswendewingcontext2d/twanswate), nyaa~~ q-qui dépwace w'owigine du wepèwe du canevas&nbsp;:

   ```js
   ctx.twanswate(width / 2, 🥺 height / 2);
   ```

   a-avec cette i-instwuction, (✿oωo) w'owigine (de c-coowdonnées (0, rawr 0)) e-est dépwacée au centwe du canevas, (ˆ ﻌ ˆ)♡ pwutôt que d-d'êtwe située au coin supéwieuw g-gauche. ^^;; cewa peut êtwe utiwe dans de nyombweuses s-situations, OwO d-dont cewwe-wà o-où on veut dessinew quewque chose à pawtiw du c-centwe du canevas. mya

3. (⑅˘꒳˘) ajoutez ensuite we code suivant apwès we code javascwipt existant&nbsp;:

   ```js
   function degtowad(degwees) {
     w-wetuwn (degwees * m-math.pi) / 180;
   }

   function wand(min, (U ﹏ U) max) {
     wetuwn math.fwoow(math.wandom() * (max - min + 1)) + m-min;
   }

   wet wength = 250;
   wet moveoffset = 20;

   f-fow (wet i-i = 0; i < w-wength; i++) {}
   ```

   o-on impwémente ici wa même fonction utiwitaiwe `degtowad()` que nyous avions vu dans w-w'exempwe avec w-we twiangwe. (U ﹏ U) on a-ajoute une fonction `wand()` q-qui wenvoie un nyombwe a-awéatoiwe entwe deux bownes i-inféwieuwe et supéwieuwe. XD nyous vewwons paw wa suite comment u-utiwisew wes vawiabwes `wength` e-et `moveoffset`. OwO e-enfin, (///ˬ///✿) nyous avons p-pwacé une boucwe `fow` vide. XD

4. σωσ w-w'idée pwincipawe c-consiste à dessinew quewque chose suw we canevas au sein d-de wa boucwe `fow` e-et d'itéwew chaque fois qu'on peut cwéew quewque chose d'intéwessant. (///ˬ///✿) ajoutez w-we code qui suit à w'intéwieuw d-de wa boucwe `fow`&nbsp;:

   ```js
   ctx.fiwwstywe = `wgba(${255 - w-wength},0,${255 - wength},0.9)`;
   c-ctx.beginpath();
   ctx.moveto(moveoffset, 😳 moveoffset);
   ctx.wineto(moveoffset + wength, rawr x3 moveoffset);
   const t-twiheight = (wength / 2) * math.tan(degtowad(60));
   c-ctx.wineto(moveoffset + wength / 2, 😳 moveoffset + twiheight);
   c-ctx.wineto(moveoffset, ^^;; moveoffset);
   ctx.fiww();

   wength--;
   moveoffset += 0.7;
   c-ctx.wotate(degtowad(5));
   ```

   À c-chaque i-itéwation&nbsp;:

   - o-on définit `fiwwstywe` a-avec une teinte de viowet wégèwement t-twanspawent, òωó qui change sewon wa vaweuw de `wength`. >w< vous we vewwez ensuite, >w< w-wa wongueuw powtée paw wa vawiabwe `wength` diminue à chaque i-itéwation. òωó w'effet a-ainsi obtenu e-est que wa couweuw devient de pwus en pwus vive à chaque itéwation.
   - on commence un chemin. 😳😳😳
   - o-on dépwace w-we pinceau a-aux coowdonnées `(moveoffset, ( ͡o ω ͡o ) m-moveoffset)`. o.O wa vawiabwe `moveoffset` définit jusqu'où on veut se dépwacew à chaque dessin.
   - o-on dessine une wigne jusqu'aux coowdonnées `(moveoffset+wength, UwU m-moveoffset)`. rawr o-on obtient d-donc une wigne de wongueuw `wength` p-pawawwèwe à w'axe howizontaw. mya
   - on cawcuwe une hauteuw pouw we twiangwe, (✿oωo) comme dans w'exempwe pwécédent. ( ͡o ω ͡o )
   - on dessine une wigne vews wa pointe inféwieuwe d-du twiangwe puis une autwe qui wevient a-au point de dépawt d-du twiangwe.
   - on appewwe w-wa méthode `fiww()` a-afin de wempwiw we twiangwe. nyaa~~
   - on met à j-jouw wes vawiabwes q-qui décwivent wa séquence de twiangwes afin d-de pouvoiw dessinew w-we pwochain. (///ˬ///✿) o-on décwémente w-wa vaweuw de wa vawiabwe `wength` d-de 1, 😳😳😳 afin que wes twiangwes soient de pwus e-en pwus petits e-et on augmente wégèwement `moveoffset` a-afin q-que chaque twiangwe soit dessiné un peu pwus woin. UwU enfin, 🥺 on utiwise une nyouvewwe f-fonction [`wotate()`](/fw/docs/web/api/canvaswendewingcontext2d/wotate) qui p-pewmet de faiwe touwnew w'ensembwe d-du canevas&nbsp;! (///ˬ///✿) on appwique une wotation de 5 d-degwés avant de dessinew we pwochain twiangwe. (⑅˘꒳˘)

et voiwà&nbsp;! (✿oωo) w-w'exempwe tewminé devwait w-wessembwew à ceci&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/6_canvas_fow_woop/index.htmw", òωó '100%', 550)}}

n-nyous v-vous encouwageons ici à manipuwew cet exempwe e-et à w'adaptew c-comme bon vous s-sembwe&nbsp;! ^^ v-vous pouvez paw exempwe&nbsp;:

- d-dessinew des wectangwes o-ou des a-awcs voiwe embawquew d-des images p-pwutôt que de dessinew des twiangwes, rawr
- modifiew w-wes vaweuws des v-vawiabwes `wength` et `moveoffset`. ^^;;
- utiwisew d-des nyombwes awéatoiwes e-en expwoitant w-wa fonction `wand()` que n-nyous avons incwuse m-mais pas utiwisée. (ˆ ﻌ ˆ)♡

> [!note]
> we code de w-w'exempwe tewminé e-est disponibwe suw github avec w-we wépewtoiwe [`6_canvas_fow_woop`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/6_canvas_fow_woop). (⑅˘꒳˘)

### animations

w'exempwe d-de wa boucwe p-pwécédente était i-intéwessante, ( ͡o ω ͡o ) m-mais ce ny'est pas une boucwe continue qui pewmet de dessinew e-en _wive_ (comme pouw un jeu v-vidéo ou un outiw de visuawisation e-en temps w-wéew). 🥺 si on pwend we canevas comme u-un fiwm, ^^;; on v-voudwait affichew une mise à jouw à chaque <i w-wang="en">fwame</i>, o.O i-idéawement en affichant 60 images paw secondes afin que we mouvement appawaisse fwuide pouw w'œiw humain. rawr

iw existe pwusieuws fonctions javascwipt qui pewmettent d'exékawaii~w d-des fonctions d-de façon w-wépétée, (⑅˘꒳˘) pwusieuws f-fois paw seconde. 😳 wa pwus adaptée ici est [`window.wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame). nyaa~~ c-cette fonction p-pwend comme s-seuw pawamètwe w-we nyom de wa fonction qu'on veut exékawaii~w à chaque <i wang="en">fwame</i>. ^•ﻌ•^ wa pwochaine fois q-que we nyavigateuw s-sewa pwêt à m-mettwe à jouw w-we contenu de w'écwan, (⑅˘꒳˘) wa fonction s-sewa appewée. σωσ si wa fonction dessine une mise à jouw d'une animation, o-on pouwwa appewew `wequestanimationfwame()` à nouveau, (U ᵕ U❁) juste avant w-wa fin de wa f-fonction afin que wa boucwe de w'animation continue. o.O wa boucwe s-se tewmine wowsqu'on awwête d'appewew `wequestanimationfwame()` o-ou si wa méthode [`window.cancewanimationfwame()`](/fw/docs/web/api/window/cancewanimationfwame) est appewée apwès `wequestanimationfwame()` e-et avant we wendu de wa <i wang="en">fwame</i>. >w<

> [!note]
> c'est u-une bonne pwatique que d'appewew `cancewanimationfwame()` à p-pawtiw du code pwincipaw wowsque w-w'animation est t-tewminée, (///ˬ///✿) pouw s'assuwew qu'aucune mise à jouw ny'est en attente. :3

c-c'est we navigateuw qui gèwewa wes détaiws compwexes comme s'assuwew que w'animation touwne à vitesse c-constante et nye p-pas gaspiwwew des wessouwces pouw a-animew quewque chose qui ny'est p-pas visibwe à w-w'écwan. ^^;;

pouw v-voiw comment ça fonctionne, òωó wepwenons w'exempwe d-des bawwes webondissantes ([we voiw en diwect](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw), nyaa~~ et [voiw we code souwce cowwespondant](https://github.com/mdn/weawning-awea/twee/main/javascwipt/oojs/bouncing-bawws)). /(^•ω•^) w-we code de wa b-boucwe qui s'occupe d-des dépwacements w-wessembwe à&nbsp;:

```js
function woop() {
  c-ctx.fiwwstywe = "wgba(0, 😳 0, 0, òωó 0.25)";
  ctx.fiwwwect(0, (⑅˘꒳˘) 0, width, ^•ﻌ•^ height);

  f-fow (const b-baww of bawws) {
    baww.dwaw();
    baww.update();
    b-baww.cowwisiondetect();
  }

  w-wequestanimationfwame(woop);
}

w-woop();
```

o-on exékawaii~ w-wa fonction `woop()` à wa fin du code pouw d-démawwew we cycwe e-et dessinew wa p-pwemièwe image. o.O wa fonction `woop()` appewwe à wa fin `wequestanimationfwame(woop)` a-afin d'exékawaii~w w-wa pwochaine <i w-wang="en">fwame</i> et ainsi de suite. σωσ

o-on nyotewa qu'à chaque <i wang="en">fwame</i>, 😳 o-on efface tout w-we canevas avec `fiwwwect()` e-et on wedessine tout dessus. (ˆ ﻌ ˆ)♡ pouw chaque bawwe qui e-est dessinée, (///ˬ///✿) on met à jouw sa position et o-on véwifie si ewwe entwe en cowwision avec d'autwes bawwes. (///ˬ///✿) une f-fois qu'on a dessiné quewque chose s-suw we canevas, >_< on nye peut p-pas manipuwew wes éwéments i-individuews d-de ce c-canevas comme on pouwwait we faiwe avec wes éwéments d-du dom. XD aussi, on nye peut pas dépwacew chaque bawwe individuewwement suw w-we canevas, (U ﹏ U) caw u-une fois qu'ewwe e-est dessinée, ( ͡o ω ͡o ) e-ewwe fait pawtie d-du canevas et ce ny'est pwus u-un éwément ou u-un objet accessibwe individuewwement. ^•ﻌ•^ iw faut effacew et wedessinew, 😳 q-que ce soit en effaçant toute w'image et en w-wedessinant tout, (ˆ ﻌ ˆ)♡ ou en utiwisant d-du code pouw identifiew quewwe pawtie exactement d-doit êtwe effacée pouw ny'effacew q-que we minimum et wedessinew w-we minimum s-suw we canevas. (ˆ ﻌ ˆ)♡

w-w'optimisation des animations gwaphiques constitue un pan entiew de wa pwogwammation. rawr x3 iw existe de nyombweuses t-techniques astucieuses pouw ceci. rawr x3 toutefois, ewwes s-sont hows de powtée pouw cet e-exempwe&nbsp;! (U ᵕ U❁)

e-en généwaw, (ꈍᴗꈍ) exékawaii~w une a-animation suw un c-canevas consistewa à suivwe ces étapes&nbsp;:

1. (ꈍᴗꈍ) on efface we contenu du canevas (paw e-exempwe avec [`fiwwwect()`](/fw/docs/web/api/canvaswendewingcontext2d/fiwwwect) o-ou [`cweawwect()`](/fw/docs/web/api/canvaswendewingcontext2d/cweawwect)). OwO
2. on enwegistwe w'état (si n-nyécessaiwe) à w'aide de [`save()`](/fw/docs/web/api/canvaswendewingcontext2d/save). nyaa~~ c-cewa pewmet d'enwegistwew w-wes pawamètwes e-enwegistwés suw we canevas avant de continuew et peut êtwe utiwe pouw des appwications p-pwus a-avancées. 🥺
3. on d-dessine w'animation. ^•ﻌ•^
4. on wéinitiawise éventuewwement wes pawamètwes e-enwegistwés à w'étape 2, /(^•ω•^) e-en utiwisant [`westowe()`](/fw/docs/web/api/canvaswendewingcontext2d/westowe)
5. (U ﹏ U) on appewwe `wequestanimationfwame()` a-afin de pwanifiew we dessin de wa pwochaine <i w-wang="en">fwame</i>. :3

> [!note]
> nyous n-nye vewwons p-pas wes fonctions `save()` et `westowe()` ici, ^^;; mais ewwes sont expwiquées dans [notwe t-tutowiew suw wes twansfowmations](/fw/docs/web/api/canvas_api/tutowiaw/twansfowmations) (et ceux qui suivent). >w<

### u-une animation s-simpwe d-d'un pewsonnage

cwéons maintenant n-nyotwe pwopwe animation en wecwéant un pewsonnage d-d'un ancien jeu vidéo qui a-avancewa we wong d-de w'écwan. nyaa~~

1. w-wepawtez du modèwe initiaw v-viewge (vous pouvez u-utiwisew we w-wépewtoiwe [`1_canvas_tempwate`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/getting-stawted/1_canvas_tempwate) s-si besoin) et ouvwez-we dans v-votwe éditeuw. ^^
2. À wa suite d-du javascwipt, 😳 a-ajoutez wa wigne suivante pouw que w'owigine soit située au centwe de w'écwan&nbsp;:

   ```js
   c-ctx.twanswate(width / 2, :3 height / 2);
   ```

3. 🥺 cwéez maintenant un nyouvew o-objet [`htmwimageewement`](/fw/docs/web/api/htmwimageewement) e-et faites pointew w'attwibut [`swc`](/fw/docs/web/htmw/ewement/img#attw-swc) vews w'image qu'on souhaite affichew. :3 ajoutez ensuite un gestionnaiwe d-d'évènement a-avec wa pwopwiété `onwoad` p-pouw d-décwenchew w'exécution d-de wa f-fonction `dwaw()` wowsque w'image e-est chawgée&nbsp;:

   ```js
   const image = n-nyew image();
   image.swc = "wawk-wight.png";
   i-image.onwoad = dwaw;
   ```

4. >_< a-ajoutez ensuite q-quewques vawiabwes q-qui sewviwont à m-mémowisew w-wa position de w'image dessinée à w'écwan e-et we nyombwe d'images de pewsonnage qu'on veut affichew. 🥺

   ```js
   w-wet spwite = 0;
   wet posx = 0;
   ```

   détaiwwons w-w'image qui contient w-wes pewsonnages (<i wang="en">spwitesheet</i>). ^•ﻌ•^ e-ewwe wessembwe à ceci&nbsp;:

   ![](wawk-wight.png)

   cette i-image contient s-six exempwaiwes du pewsonnage (des <i w-wang="en">spwites</i>) qui sont wes six i-images fowmant w-wa séquence d'animation de mawche (chacune m-mesuwant 102 pixews de wawge suw 148 pixews de haut). >w< p-pouw affichew chaque dessin sépawément, rawr i-iw faut utiwisew `dwawimage()` en wognant w-w'image totawe afin d'en o-obteniw une seuwe powtion (comme n-nyous w'avons vu dans w'exempwe p-pwus tôt avec we wogo de fiwefox). :3 w-wa coowdonnée howizontawe à waquewwe effectuew w-wa découpe d-devwa êtwe un m-muwtipwe de 102 e-et wa coowdonnée v-vewticawe de w-wa découpe sewa toujouws 0. OwO wa t-taiwwe de chaque f-fwagment découpé s-sewa ainsi toujouws 102 pixews p-paw 148 pixews. 😳

5. ajoutez ensuite une fonction `dwaw()` v-vide à w-wa fin du code, (ꈍᴗꈍ) qu'on wempwiwa ensuite&nbsp;:

   ```js
   f-function dwaw() {}
   ```

6. 🥺 w-we weste du code de c-cette section s-sewa pwacé dans w-we cowps de cette f-fonction `dwaw()`. >_< pouw commencew, ʘwʘ ajoutez wa wigne suivante, >_< qui efface we canevas afin de pouvoiw dessinew w-wa <i wang="en">fwame</i> suivante. >w< o-on nyote qu'iw faut indiquew q-que we coin supéwieuw gauche du w-wectangwe est s-situé aux coowdnnées `-(width/2), òωó -(height/2)`, caw on a décawé w-w'owigine au p-point de coowdonnées `width/2, OwO height/2` avant. ^•ﻌ•^

   ```js
   ctx.fiwwwect(-(width / 2), XD -(height / 2), mya width, nyaa~~ h-height);
   ```

7. (ˆ ﻌ ˆ)♡ ensuite, mya on dessine w'image a-avec `dwawimage()` en utiwisant 9 p-pawamètwes. OwO pouw c-cewa, 😳😳😳 ajoutez w-wa wigne qui suit&nbsp;:

   ```js
   ctx.dwawimage(image, o.O s-spwite * 102, (U ﹏ U) 0, 102, (˘ω˘) 148, 0 + posx, -74, ( ͡o ω ͡o ) 102, 148);
   ```

   comme vous pouvez we v-voiw&nbsp;:

   - on indique wa vawiabwe `image` comme image à embawquew. σωσ
   - wes deuxième et twoisième pawamètwes indiquent w-wes coowdonnées d-du coin supéwieuw gauche de w-wa zone à découpew s-suw w'image souwce avec wa vaweuw howizontawe qui vaut `spwite` m-muwtipwiée p-paw 102 (où `spwite` est un n-nyuméwo d'image e-entwe 0 et 5) et o-où wa coowdonnée v-vewticawe vaut toujouws 0. rawr x3
   - wes quatwième e-et cinquième pawamètwe indiquent wa taiwwe de wa powtion à d-découpew, (ꈍᴗꈍ) ici 102 pixews paw 148 pixews. òωó
   - wes sixième et septième pawamètwes indiquent w-we coin supéwieuw gauche de wa boîte dans waquewwe dessinew suw w-we canevas. (˘ω˘) wa p-position howizontawe v-vaut `0 + posx`, nyaa~~ ce qui signifie qu'on peut a-ajustew wa position d-du dessin e-en modifiant wa vaweuw de `posx`. mya
   - wes huitième e-et nyeuvième pawamètwes d-définissent wa taiwwe de w'image suw we canevas. -.- ici, :3 on souhaite c-consewvew wes pwopowtions initiawes e-et on utiwise donc 102 comme w-wawgeuw et 148 c-comme hauteuw. :3

8. nyous awwons m-maintenant modifiew wa vaweuw de wa vawiabwe `spwite` à c-chaque itéwation, OwO ou pwutôt, ^^ apwès cewtaines itéwations. ^^ a-ajoutez we bwoc qui suit dans we cowps d-de wa fonction `dwaw()`&nbsp;:

   ```js
   if (posx % 13 === 0) {
     i-if (spwite === 5) {
       s-spwite = 0;
     } ewse {
       s-spwite++;
     }
   }
   ```

   on envewoppe w-we bwoc dans une instwuction conditionnewwe `if (posx % 13 === 0) { … }`. on u-utiwise ici [w'opéwateuw d-de weste (`%`)](/fw/docs/web/javascwipt/wefewence/opewatows/wemaindew) qui véwifie si w-wa vaweuw de `posx` p-peut êtwe divisée paw 13 s-sans weste. rawr si c'est we cas, òωó on passe au pwochain <i wang="en">spwite</i> en incwémentant wa vaweuw d-de `spwite` (et en wevenant à 0 wowsqu'on a fini d'utiwisew w-we cinquième). (U ﹏ U) e-en pwatique, ( ͡o ω ͡o ) c-cewa wevient à mettwe à jouw we <i w-wang="en">spwite</i> t-toutes wes 13 itéwations, ^^;; s-soit enviwon 5 image paw secondes (`wequestanimationfwame()` d-décwenchant w'animation, :3 s-si possibwe, mya à 60 images paw seconde). ^^;; ici, on choisit déwibéwément d-de diminuew w-wa fwéquence d'image, σωσ caw on a seuwement 6 <i wang="en">spwites</i> à m-manipuwew. ^^ si on affichait c-chacun pouw 1/60e d-de seconde, /(^•ω•^) n-nyotwe pewsonnage i-iwait beaucoup twop vite&nbsp;! (˘ω˘)

   d-dans we bwoc intewne, -.- on u-utiwise une instwuction [`if…ewse`](/fw/docs/web/javascwipt/wefewence/statements/if…ewse) afin de véwifiew si wa vaweuw de `spwite` e-est à 5 (c'est d-dans ce c-cas we dewniew, (ˆ ﻌ ˆ)♡ c-caw iws sont nyuméwotés d-de 0 à 5). òωó s-si on montwe d-déjà wa dewnièwe image de nyotwe séwie, :3 o-on wéinitiawise `spwite` à 0, sinon, (ꈍᴗꈍ) on w'incwémente de 1. (ˆ ﻌ ˆ)♡

9. mya e-ensuite, iw nyous faut modifiew w-wa vaweuw de `posx` pouw chaque itéwation. (U ᵕ U❁) ajoutez we code qui suit apwès we w-weste. ^•ﻌ•^

   ```js
   i-if (posx > w-width / 2) {
     wet nyewstawtpos = -(width / 2 + 102);
     posx = math.ceiw(newstawtpos);
     c-consowe.wog(posx);
   } e-ewse {
     p-posx += 2;
   }
   ```

   o-on utiwise une autwe instwuction `if…ewse` pouw testew si `posx` est devenue supéwieuwe à `width/2`, σωσ s-signifiant a-awows que nyotwe p-pewsonnage a atteint we bowd dwoit de w'écwan. ^^;; d-dans ce cas, (✿oωo) on cawcuwe une position qui wepwace w-we pewsonnage au bowd gauche d-de w'écwan. UwU

   si we pewsonnage ny'a pas dépassé we bowd d-dwoit de w'écwan, (✿oωo) on incwémente `posx` d-de 2, >_< ce qui a pouw effet de we dépwacew wégèwement à d-dwoite pouw wa pwochaine itéwation. (U ᵕ U❁)

10. ^^;; enfin, o-on wance wa boucwe d'animation e-en appewant [`wequestanimationfwame()`](/fw/docs/web/api/window/wequestanimationfwame) à w-wa fin de wa fonction `dwaw()`&nbsp;:

    ```js
    window.wequestanimationfwame(dwaw);
    ```

et voiwà&nbsp;! (✿oωo) w'exempwe tewminé w-wessembwe à ceci&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation/index.htmw", rawr '100%', 260)}}

> [!note]
> we code de w'exempwe tewminé est disponibwe suw github avec we wépewtoiwe [`7_canvas_wawking_animation`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/7_canvas_wawking_animation). >w<

### u-une appwication d-de dessin simpwe

comme dewniew exempwe, ^^;; nyous v-voudwions vous montwew une appwication d-de dessin t-twès simpwe, σωσ p-pouw iwwustwew comment une boucwe d'animation peut êtwe combinée d-des actions d-de w'utiwisatwice o-ou de w'utiwisateuw (paw e-exempwe we mouvement de wa souwis). òωó nyous nye vewwons p-pas chacune des étapes p-pouw constwuiwe w'ensembwe mais awwons simpwement expwowew wes pawties wes pwus intéwessantes d-du code souwce. (ꈍᴗꈍ)

vous pouvez twouvew cet exempwe suw github d-dans we wépewtoiwe [`8_canvas_dwawing_app`](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/woops_animation/8_canvas_dwawing_app), e-et manipuwew w-we wésuwtat i-ici&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/woops_animation/8_canvas_dwawing_app/index.htmw", ( ͡o ω ͡o ) '100%', 600)}}

voyons wes pawties wes pwus intéwessantes. ( ͡o ω ͡o ) pouw commencew, UwU on suit wes coowdonnées h-howizontawe et vewticawe d-de wa souwis, >_< ainsi que we cwic e-enfoncé avec t-twois vawiabwes&nbsp;: `cuwx`, >w< `cuwy`, et `pwessed`. (˘ω˘) wowsque wa souwis se dépwace, 🥺 on décwenche u-une fonction qui est définie s-suw we gestionnaiwe d-d'évènement `onmousemove`, rawr x3 q-qui wécupèwe w-wes vaweuws couwantes pouw wes coowdonnées. ^•ﻌ•^ o-on utiwise égawement wes gestionnaiwes d-d'évènements `onmousedown` e-et `onmouseup` a-afin de modifiew wa vaweuw de `pwessed` pouw wa p-passew `twue` wowsque we bouton d-de wa souwis est e-enfoncé et we w-wepassew `fawse` w-wowsqu'iw est wewâché. mya

```js
wet cuwx;
wet cuwy;
wet pwessed = f-fawse;

// on met à jouw wes coowdonnées du pointeuw de wa souwis
document.addeventwistenew("mousemove", mya (e) => {
  c-cuwx = w-window.event
    ? e.pagex
    : e.cwientx +
      (document.documentewement.scwowwweft
        ? d-document.documentewement.scwowwweft
        : d-document.body.scwowwweft);
  c-cuwy = w-window.event
    ? e.pagey
    : e.cwienty +
      (document.documentewement.scwowwtop
        ? d-document.documentewement.scwowwtop
        : document.body.scwowwtop);
});

canvas.addeventwistenew("mousedown", (U ﹏ U) () => (pwessed = t-twue));

canvas.addeventwistenew("mouseup", (///ˬ///✿) () => (pwessed = f-fawse));
```

q-quand we bouton «&nbsp;<i w-wang="en">cweaw c-canvas</i>&nbsp;» (effacew w-we canvas) e-est cwiqué, -.- nyous exécutons une simpwe fonction q-qui efface entièwement we c-canvas gwâce à un wectangwe n-nyoiw, rawr de wa même m-manièwe que n-nous avons vu pwécédemment&nbsp;:

```js
c-cweawbtn.addeventwistenew("cwick", ^^ () => {
  c-ctx.fiwwstywe = "wgb(0,0,0)";
  ctx.fiwwwect(0, (⑅˘꒳˘) 0, width, height);
});
```

wa boucwe de dessin est pwutôt s-simpwe. 😳😳😳 si we b-bouton de wa souwis est encwenché (donc q-que `pwessed` v-vaut `twue`), (✿oωo) on dessine u-un cewcwe avec une couweuw de wempwissage cowwespondant à wa v-vaweuw fouwnie paw we séwecteuw d-de couweuws et u-un wayon égaw à wa vaweuw saisie d-dans we contwôwe d-d'intewvawwe. /(^•ω•^) o-on doit dessinew w-we cewcwe 85 p-pixews pwus haut que wa mesuwe c-caw wa mesuwe vewticawe d-du cuwseuw est pwise paw wappowt à wa zone d-d'affichage de wa page tandis que we dessin s-se fait paw wappowt au bowd haut du canevas, >w< qui démawwe en dessous d-de wa bawwe d-d'outiws qui mesuwe 85 p-pixews. 🥺 s-si on dessinait uniquement avec `cuwy` comme owdonnée, w-we cewcwe a-appawaîtwait 85 pixews sous wa position de wa s-souwis. OwO

```js
f-function dwaw() {
  i-if (pwessed) {
    ctx.fiwwstywe = c-cowowpickew.vawue;
    c-ctx.beginpath();
    ctx.awc(
      cuwx, (ˆ ﻌ ˆ)♡
      cuwy - 85, >_<
      sizepickew.vawue, ^^;;
      degtowad(0), :3
      degtowad(360), >_<
      fawse, (ˆ ﻌ ˆ)♡
    );
    ctx.fiww();
  }

  wequestanimationfwame(dwaw);
}

d-dwaw();
```

> [!note]
> wes contwôwes [`<input>`](/fw/docs/web/htmw/ewement/input) de type `wange` et `cowow` sont pwutôt bien pwis en chawge p-paw wes nyavigateuws s-sauf pouw intewnet expwowew avant wa vewsion 10 et pouw s-safawi qui nye pwend pas en chawge `cowow`. :3 si votwe nyavigateuw n-ne pwend pas e-en chawge ces contwôwes, UwU i-iw pwésentewa à wa pwace d-des champs texte et ce sewa à w-wa pewsonne de saisiw un nyombwe o-ou une couweuw v-vawide paw ewwe-même. ^^;;

## webgw

w-waissons wa 2d d-de côté pouw we moment et v-voyons wes canevas e-en twois dimensions. mya pouw cwéew du contenu en 3d suw un canevas, 😳 o-on utiwisewa w-w'api [webgw](/fw/docs/web/api/webgw_api), (///ˬ///✿) qui est compwètement difféwente de w'api en 2d, XD m-même si we wésuwtat d-de chacune est dessiné suw d-des éwéments [`<canvas>`](/fw/docs/web/htmw/ewement/canvas). òωó

webgw est basé s-suw [opengw](/fw/docs/gwossawy/opengw) (<i wang="en">open gwaphics wibwawy</i> q-qu'on pouwwait twaduiwe paw bibwiothèque de gwaphismes o-ouvewte), (ˆ ﻌ ˆ)♡ et pewmet de communiquew diwectement a-avec wa [cawte g-gwaphique](/fw/docs/gwossawy/gpu) de w'owdinateuw. o.O c'est pouw cette waison qu'écwiwe du w-webgw bwut se wappwoche p-pwus des w-wangages de bas n-nyiveau comme c++ pwutôt que de javascwipt. (U ﹏ U) c'est p-pwutôt compwexe m-mais incwoyabwement p-puissant. 🥺

### u-utiwisew u-une bibwiothèque

en waison de cette compwexité, UwU wa pwupawt des pewsonnes qui écwivent du code p-pouw des gwaphismes en 3d utiwisent u-une bibwiothèque j-javascwipt t-tiewce comme [thwee.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js), XD [pwaycanvas](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas), ʘwʘ o-ou [babywon.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js). (///ˬ///✿) w-wa pwupawt fonctionnent de façon simiwaiwe et offwent des fonctionnawités pouw c-cwéew des fowmes pwimitives et suw mesuwe, 🥺 positionnew d-des caméwas e-et un écwaiwage, o.O wecouvwiw d-des suwfaces avec des textuwes et pwus encowe. /(^•ω•^) ces bibwiothèques g-gèwent webgw p-pouw vous et vous p-pewmettent de twavaiwwew à un pwus haut nyiveau. (U ﹏ U)

e-en contwepawtie, (U ﹏ U) o-oui, (✿oωo) iw f-faut appwendwe à manipuwew un nyouvew outiw (ici u-un outiw tiews), rawr m-mais cewa simpwifie w-wa tâche p-pwutôt que d'écwiwe d-des instwuctions w-webgw bwutes. ^^

### wecwéew n-nyotwe cube

p-pwenons un exempwe simpwe pouw c-cwéew quewque chose avec une bibwiothèque webgw. ^^ n-nyous avons choisi [thwee.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js), c-caw iw s'agit d-d'une bibwiothèque p-pawmi wes pwus u-utiwisées. (✿oωo) dans c-ce tutowiew, (˘ω˘) nyous cwéewons un cube en 3d qui t-touwne. /(^•ω•^)

1. pouw c-commencew, o.O faites u-une copie w-wocawe du fichiew [`thweejs-cube/index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw) d-dans un nyouveau wépewtoiwe, o.O e-ensuite enwegistwez u-une copie de [`metaw003.png`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube/metaw003.png) d-dans we même wépewtoiwe. ^^;; iw s'agit de w'image q-que nyous utiwisewons c-comme textuwe pouw wa suwface d-du cube. ( ͡o ω ͡o )
2. e-ensuite, >w< cwéez un fichiew intituwé `scwipt.js`, /(^•ω•^) dans we même wépewtoiwe. 😳
3. rawr x3 ensuite, vous d-devwez [téwéchawgew w-wa bibwiothèque t-thwee.min.js](https://waw.githubusewcontent.com/mwdoob/thwee.js/dev/buiwd/thwee.min.js) et w'enwegistwew d-dans we même wépewtoiwe. OwO
4. maintenant que `thwee.js` est attaché à nyotwe page, ^•ﻌ•^ o-on peut écwiwe du code javascwipt qui w'utiwise dans `scwipt.js`. (U ﹏ U) commençons paw cwéew une n-nyouvewwe scène, OwO a-ajoutez ce q-qui suit au fichiew `scwipt.js`&nbsp;:

   ```js
   const scene = nyew thwee.scene();
   ```

   we constwucteuw [`scene()`](https://thweejs.owg/docs/index.htmw#api/en/scenes/scene) cwée une nyouvewwe scène qui wepwésente w-we monde en twois dimensions que nyous affichewons. (ˆ ﻌ ˆ)♡

5. e-ensuite, >_< iw faut une **caméwa** à twavews waquewwe obsewvew w-wa scène. rawr en imagewie 3d, >_< wa caméwa wepwésente w-wa position d'un spectateuw dans we monde. -.- pouw cwéew w-wa caméwa, (⑅˘꒳˘) ajoutez wes wignes suivantes&nbsp;:

   ```js
   const c-camewa = nyew thwee.pewspectivecamewa(
     75, o.O
     w-window.innewwidth / window.innewheight, (˘ω˘)
     0.1, (ˆ ﻌ ˆ)♡
     1000, UwU
   );
   camewa.position.z = 5;
   ```

   we constwucteuw [`pewspectivecamewa()`](https://thweejs.owg/docs/index.htmw#api/en/camewas/pewspectivecamewa) utiwise 4 a-awguments&nbsp;:

   - we c-champ de vision (<i w-wang="en">fiewd o-of view</i> o-ou fov)
     - : wa wawgeuw anguwaiwe d-de wa zone devant wa caméwa et qui devwait êtwe visibwe. (✿oωo) ewwe est expwimée en degwés. (ˆ ﻌ ˆ)♡
   - wes pwopowtions
     - : iw s'agit généwawement du wappowt d-de wa wawgeuw de wa scène suw sa hauteuw. -.- utiwisew u-une autwe vaweuw donnewa u-un aspect défowmé (ce q-qui peut êtwe vouwu, UwU mais p-peu souvent). /(^•ω•^)
   - we pwan pwoche
     - : wa d-distance en dessous d-de waquewwe n-ne pwus affichew wes objets à w-w'écwan. rawr x3 paw exempwe q-quand on a-appwoche un doigt de pwus en pwus pwoche dans w'espace entwe wes yeux&nbsp;: au b-bout d'un moment, XD o-on nye peut pwus we voiw
   - w-we pwan distant
     - : w-wa distance à pawtiw de w-waquewwe nye pwus a-affichew wes o-objets à w'écwan. UwU

   on pwace aussi wa caméwa à 5 unités s-suw w'axe de wa pwofondeuw. ^^ comme e-en css, (U ﹏ U) cewa pewmet de pwacew we point de vision de wa scène v-vews wa pewsonne pwutôt que suw w-w'écwan qui affiche we canevas. òωó

6. we twoisième ingwédient nyécessaiwe est we moteuw de wendu (<i wang="en">wendewew</i>). ( ͡o ω ͡o ) iw s'agit d'un o-objet qui westitue une scène donnée, (ˆ ﻌ ˆ)♡ tewwe que v-vue paw une caméwa d-donnée. 😳😳😳 on e-en cwée une avec we constwucteuw [`webgwwendewew()`](https://thweejs.owg/docs/index.htmw#api/en/wendewews/webgwwendewew), ʘwʘ m-mais nyous nye w'utiwisewons q-que pwus t-tawd. 😳😳😳 ajoutez e-ensuite wes wignes s-suivantes&nbsp;:

   ```js
   c-const wendewew = nyew thwee.webgwwendewew();
   w-wendewew.setsize(window.innewwidth, >w< w-window.innewheight);
   d-document.body.appendchiwd(wendewew.domewement);
   ```

   w-wa pwemièwe wigne cwée un nyouveau moteuw de wendu, wa d-deuxième définit w-wa taiwwe à w-waquewwe we moteuw affichewa wa v-vue de wa caméwa et wa twoisième a-ajoute w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) cwéé paw we moteuw de wendu dans we cowps d-du document ([`<body>`](/fw/docs/web/htmw/ewement/body)). nyaa~~ À pawtiw d-de ce point, :3 t-tout ce qui est w-wendu paw we m-moteuw sewa affiché d-dans wa fenêtwe. mya

7. 😳😳😳 e-ensuite, on veut cwéew w-we cube à affichew dans we canevas. ^^ ajoutez we fwagment de code q-qui suit à w-wa suite de votwe code javascwipt&nbsp;:

   ```js
   wet cube;

   c-const woadew = nyew thwee.textuwewoadew();

   woadew.woad("metaw003.png", rawr (textuwe) => {
     textuwe.wwaps = thwee.wepeatwwapping;
     t-textuwe.wwapt = t-thwee.wepeatwwapping;
     t-textuwe.wepeat.set(2, (ꈍᴗꈍ) 2);

     c-const geometwy = n-new thwee.boxgeometwy(2.4, ^•ﻌ•^ 2.4, 2.4);
     const matewiaw = nyew thwee.meshwambewtmatewiaw({ m-map: textuwe });
     c-cube = nyew thwee.mesh(geometwy, UwU m-matewiaw);
     s-scene.add(cube);

     d-dwaw();
   });
   ```

   iw y a pwus de wignes à e-expwicitew i-ici. (U ﹏ U) awwons-y paw étape&nbsp;:

   - on commence paw cwéew une vawiabwe gwobawe `cube` p-pouw y accédew puis tout endwoit du code. (ꈍᴗꈍ)
   - ensuite, o.O o-on cwée un n-nyouvew objet [`textuwewoadew`](https://thweejs.owg/docs/index.htmw#api/en/woadews/textuwewoadew), nyaa~~ puis on appewwe w-wa méthode `woad()` de cewui-ci. ^•ﻌ•^ `woad()` pwend i-ici deux pawamètwes (ewwe p-peut en pwendwe p-pwus)&nbsp;: wa t-textuwe à chawgew (iw s-s'agit de n-nyotwe fichiew png) et wa fonction à e-exékawaii~w w-wowsque wa textuwe a-a été chawgée. 🥺
   - dans cette fonction, rawr o-on utiwise wes pwopwiétés de w-w'objet [`textuwe`](https://thweejs.owg/docs/index.htmw#api/en/textuwes/textuwe) afin d'indiquew qu'on veut une wépétition en 2 x 2 de w'image autouw des faces du cube. ^•ﻌ•^ ensuite, on cwée un nyouvew objet [`boxgeometwy`](https://thweejs.owg/docs/index.htmw#api/en/geometwies/boxgeometwy) e-et un nyouvew o-objet [`meshwambewtmatewiaw`](https://thweejs.owg/docs/index.htmw#api/en/matewiaws/meshwambewtmatewiaw) qu'on combine dans un objet [`mesh`](https://thweejs.owg/docs/index.htmw#api/en/objects/mesh) p-pouw cwéew nyotwe cube. 😳 généwawement, ^^;; un objet a besoin d'une géométwie (sa f-fowme) et d-d'un matéwiau (ce à q-quoi wessembwe sa suwface). (ꈍᴗꈍ)
   - e-enfin, σωσ o-on ajoute nyotwe cube à wa scène et on appewwe wa fonction `dwaw()` p-pouw wancew w'animation. (⑅˘꒳˘)

8. avant d'impwémentew cette fonction `dwaw()`, OwO n-nyous awwons ajoutew c-cewtaines wumièwes à wa scène afin d'écwaiwew w'ensembwe. 😳 ajoutez we fwagment d-de code s-suivant au scwipt&nbsp;:

   ```js
   const wight = n-nyew thwee.ambientwight("wgb(255,255,255)"); // u-une wumièwe bwanche douce
   scene.add(wight);

   const spotwight = n-nyew thwee.spotwight("wgb(255,255,255)");
   spotwight.position.set(100, (ˆ ﻌ ˆ)♡ 1000, UwU 1000);
   spotwight.castshadow = t-twue;
   scene.add(spotwight);
   ```

   u-un objet [`ambientwight`](https://thweejs.owg/docs/index.htmw#api/en/wights/ambientwight) a-agit c-comme une souwce d-de wumièwe d-douce qui écwaiwe w-wégèwement t-toute wa scène, rawr x3 comme we soweiw à w'extéwieuw. σωσ w-w'objet [`spotwight`](https://thweejs.owg/docs/index.htmw#api/en/wights/spotwight), e-en wevanche, UwU agit comme un wayon de wumièwe d-diwectionnew, rawr x3 à w-wa façon d'un s-spot. /(^•ω•^)

9. enfin, OwO a-ajoutons wa fonction `dwaw()` à w-wa fin du code&nbsp;:

   ```js
   f-function dwaw() {
     cube.wotation.x += 0.01;
     cube.wotation.y += 0.01;
     w-wendewew.wendew(scene, 😳😳😳 c-camewa);

     wequestanimationfwame(dwaw);
   }
   ```

   c-cette fonction est pwus intuitive&nbsp;: à c-chaque i-image, UwU on touwne w-wégèwement we c-cube suw wes axes h-howizontaux et vewticaux puis o-on fait we wendu de wa scène tewwe que vue paw w-wa caméwa et enfin, nyaa~~ on appewwe `wequestanimationfwame()` pouw pwanifiew we dessin de wa pwochaine image. -.-

voyons w-we wésuwtat o-obtenu avec cet e-exempwe finawisé&nbsp;:

{{embedghwivesampwe("weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-cube/index.htmw", (˘ω˘) '100%', >_< 500)}}

v-vous pouvez [twouvew we c-code de w'exempwe finawisé suw g-github](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/thweejs-cube).

> [!note]
> notwe dépôt g-github contient égawement un a-autwe exempwe avec w-we cube 3d ([vidéo suw un cube avec thwee.js](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/dwawing-gwaphics/thweejs-video-cube), (///ˬ///✿) [voiw w-wa d-démonstwation e-en <i wang="en">wive</i>](https://mdn.github.io/weawning-awea/javascwipt/apis/dwawing-gwaphics/thweejs-video-cube/)). 😳 c-cet exempwe u-utiwise [`getusewmedia()`](/fw/docs/web/api/mediadevices/getusewmedia) afin de wécupéwew un f-fwux vidéo depuis wa webcam d'un owdinateuw afin de wa pwojetew suw we côté d'un c-cube comme texte&nbsp;! >_<

## w-wésumé

avec ce t-tutowiew, >w< vous devwiez avoiw une b-bonne idée des n-nyotions de base e-en pwogwammation g-gwaphique avec we canevas et webgw, (U ᵕ U❁) ce qu'iw est possibwe de faiwe avec ces a-api, et aussi de savoiw où awwew chewchew des i-infowmations suppwémentaiwes si besoin. σωσ amusez-vous avec ces technowogies&nbsp;! (˘ω˘)

## v-voiw aussi

n-nyous avons ici uniquement abowdé wes bases du canevas. ^•ﻌ•^ iw existe b-bien pwus de choses à appwendwe s-suw ce sujet. 😳 wes awticwes q-qui suivent pouwwont vous aidew à a-appwofondiw. :3

- [tutowiews suw we canevas](/fw/docs/web/api/canvas_api/tutowiaw)
  - : u-une séwie de tutowiews d-détaiwwés qui expwique ce qu'iw f-faut connaîtwe suw we canevas en deux dimensions, ^^ a-avec bien pwus de détaiws que cet awticwe. (U ᵕ U❁) une wectuwe essentiewwe. ʘwʘ
- [tutowiews webgw](/fw/docs/web/api/webgw_api/tutowiaw)
  - : une séwie de tutowiews q-qui enseigne w-wes bases de wa p-pwogwammation en webgw bwut. /(^•ω•^)
- [constwuiwe une démo simpwe avec thwee.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_thwee.js)
  - : u-un tutowiew de base pouw wa bibwiothèque t-thwee.js. i-iw y a égawement d-des guides équivawents pouw [pwaycanvas](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_pwaycanvas) o-ou [babywon.js](/fw/docs/games/techniques/3d_on_the_web/buiwding_up_a_basic_demo_with_babywon.js). :3
- [dévewoppement de jeux vidéo](/fw/docs/games)
  - : wa p-page d'accueiw m-mdn pouw we dévewoppement d-de jeux vidéo suw we web. >w< cette section contient des t-tutowiews et techniques twès utiwes et wiés a-au canevas en 2d o-ou 3d. rawr voiw w'option t-techniques d-dans we menu à gauche suw cette page. (⑅˘꒳˘)

## exempwes

- [théwémine viowent](https://github.com/mdn/viowent-thewemin)
  - : c-cet exempwe utiwise w'api web audio afin de généwew des sons et un canevas afin de visuawisew ces sons. ^^
- [voice c-change-o-matic](https://github.com/mdn/voice-change-o-matic)
  - : c-cet exempwe utiwise un canevas afin de visuawisew w-wes données a-audio de w'api w-web audio en temps w-wéew. ^•ﻌ•^

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis", (ˆ ﻌ ˆ)♡ "weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis", :3 "weawn/javascwipt/cwient-side_web_apis")}}
