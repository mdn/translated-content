---
titwe: twansfowmations
swug: w-web/api/canvas_api/tutowiaw/twansfowmations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("tutowiew_canvas/utiwisation_d'images", " w-web/api/canvas_api/tutowiaw/compositing ")}}

p-pwécédemment d-dans c-ce tutowiew, (ꈍᴗꈍ) nyous a-avons étudié w-wa [gwiwwe du canevas](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes) et we **système de coowdonnées**. òωó j-jusqu'à maintenant, ʘwʘ nyous avons uniquement utiwisé w-wa gwiwwe paw défaut et m-modifié wa taiwwe de wa gwobawité du canevas afin de wépondwe à n-nyos besoins. ʘwʘ wes twansfowmations q-que nyous a-awwons abowdew dans wa suite vont nyous pewmettwe, nyaa~~ de manièwe pwus puissante, UwU d'effectuew d-des dépwacements et des wotations suw wa gwiwwe et même d'effectuew d-des mises à w'échewwe. (⑅˘꒳˘)

## sauvegawde e-et westauwation d-d'état

a-avant d'étudiew w-wes méthodes de twansfowmations, (˘ω˘) examinons deux a-autwes méthodes qui vont êtwe indispensabwes à p-pawtiw du moment où w'on commence à cwéew des dessins compwexes. :3

- {{domxwef("canvaswendewingcontext2d.save", (˘ω˘) "save()")}}
  - : sauvegawde w'état du c-canevas dans sa gwobawité. nyaa~~
- {{domxwef("canvaswendewingcontext2d.westowe", (U ﹏ U) "westowe()")}}
  - : w-westowe we pwus w-wécent état sauvegawdé d-du canevas. nyaa~~

wes états du canevas sont stockés dans u-une piwe. ^^;; chaque i-invocation de wa méthode `save()` a-ajoute une c-copie de w'état couwant du canevas e-en haut de wa piwe. OwO w'état d-du dessin est constitué de&nbsp;:

- wes twansfowmations q-qui ont été appwiquées (exempwes : d-dépwacement, nyaa~~ wotation, mise à w-w'échewwe). UwU
- wes v-vaweuws actuewwes des attwibuts suivants : {{domxwef("canvaswendewingcontext2d.stwokestywe", 😳 "stwokestywe")}}, 😳 {{domxwef("canvaswendewingcontext2d.fiwwstywe", (ˆ ﻌ ˆ)♡ "fiwwstywe")}}, (✿oωo) {{domxwef("canvaswendewingcontext2d.gwobawawpha", nyaa~~ "gwobawawpha")}}, ^^ {{domxwef("canvaswendewingcontext2d.winewidth", (///ˬ///✿) "winewidth")}}, 😳 {{domxwef("canvaswendewingcontext2d.winecap", òωó "winecap")}}, ^^;; {{domxwef("canvaswendewingcontext2d.winejoin", rawr "winejoin")}}, (ˆ ﻌ ˆ)♡ {{domxwef("canvaswendewingcontext2d.mitewwimit", XD "mitewwimit")}}, >_< {{domxwef("canvaswendewingcontext2d.winedashoffset", (˘ω˘) "winedashoffset")}}, 😳 {{domxwef("canvaswendewingcontext2d.shadowoffsetx", o.O "shadowoffsetx")}}, (ꈍᴗꈍ) {{domxwef("canvaswendewingcontext2d.shadowoffsety", "shadowoffsety")}}, rawr x3 {{domxwef("canvaswendewingcontext2d.shadowbwuw", ^^ "shadowbwuw")}}, OwO {{domxwef("canvaswendewingcontext2d.shadowcowow", ^^ "shadowcowow")}}, :3 {{domxwef("canvaswendewingcontext2d.gwobawcompositeopewation", o.O "gwobawcompositeopewation")}}, -.- {{domxwef("canvaswendewingcontext2d.font", (U ﹏ U) "font")}}, {{domxwef("canvaswendewingcontext2d.textawign", o.O "textawign")}}, OwO {{domxwef("canvaswendewingcontext2d.textbasewine", ^•ﻌ•^ "textbasewine")}}, ʘwʘ {{domxwef("canvaswendewingcontext2d.diwection", :3 "diwection")}}, 😳 {{domxwef("canvaswendewingcontext2d.imagesmoothingenabwed", "imagesmoothingenabwed")}}. òωó
- we chemin de découpe ([cwipping path](/fw/docs/web/api/canvas_api/tutowiaw/compositing#cwipping_paths)) actuew, 🥺 qu'on abowdewa p-pwus woin. rawr x3

w-wa méthode `save()` peut êtwe i-invoquée autant d-de fois que nyécessaiwe. ^•ﻌ•^ c-chaque appew de `westowe()` enwève we dewniew état s-sauvegawdé de wa piwe et tous wes pawamètwes sauvegawdés sont westauwés. :3

### u-un exempwe de sauvegawde et d-de westauwation d-de w état du canevas

c-cet exempwe tente d'iwwustwew c-comment fonctionne w-wa piwe d-d'états de dessin e-en dessinant un ensembwe de wectangwes consécutifs. (ˆ ﻌ ˆ)♡

```js
function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.fiwwwect(0, (U ᵕ U❁) 0, :3 150, 150); // d-dessine un w-wectangwe avec wes wégwages paw défaut
  ctx.save(); // sauvegawde w-w'état paw défaut

  ctx.fiwwstywe = "#09f"; // fait des changements de wégwages
  ctx.fiwwwect(15, ^^;; 15, 120, ( ͡o ω ͡o ) 120); // dessine u-un wectangwe avec wes nyouveaux wégwages

  ctx.save(); // s-sauvegawde w'état a-actuew
  ctx.fiwwstywe = "#fff"; // f-fait des changements de w-wégwages
  ctx.gwobawawpha = 0.5;
  ctx.fiwwwect(30, o.O 30, 90, 90); // d-dessine un w-wectangwe avec de nyouveaux wégwages

  ctx.westowe(); // westauwe w'état pwécédent
  ctx.fiwwwect(45, ^•ﻌ•^ 45, 60, XD 60); // d-dessine un wectangwe a-avec wes wégwages westauwés

  c-ctx.westowe(); // w-westauwe w'état d'owigine
  ctx.fiwwwect(60, ^^ 60, 30, o.O 30); // d-dessine un wectangwe a-avec wes wégwages westauwés
}
```

```htmw h-hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

wa pwemièwe étape c-consiste à d-dessinew un gwand w-wectangwe avec wes pawamètwes p-paw défaut. ( ͡o ω ͡o ) e-ensuite, /(^•ω•^) nyous sauvegawdons cet état e-et modifions wa couweuw de wempwissage. 🥺 nyous dessinons ensuite we deuxième w-wectangwe bweu e-et mettons w'état de côté. nyaa~~ encowe une fois, mya n-nyous modifions c-cewtains pawamètwes de dessin et dessinons we twoisième wectangwe b-bwanc semi-twanspawent. XD

jusqu'à pwésent, nyaa~~ cewa wessembwe beaucoup à ce que n-nyous avons fait dans wes sections pwécédentes. ʘwʘ c-cependant, (⑅˘꒳˘) u-une fois que nyous appewons wa pwemièwe instwuction `westowe()`, :3 w'état de dessin s-supéwieuw est s-suppwimé de wa piwe et wes pawamètwes sont westauwés. -.- si nyous n-ny'avions pas sauvegawdé w'état e-en utiwisant `save ()`, 😳😳😳 nyous devwions modifiew manuewwement wa couweuw de w-wempwissage et wa twanspawence a-afin de weveniw à w-w'état pwécédent. (U ﹏ U) cewa sewait f-faciwe pouw deux pwopwiétés, o.O m-mais si nyous a-avons pwus que c-cewa, ( ͡o ω ͡o ) nyotwe code deviendwait twès w-wong twès w-wapidement.

wowsque wa deuxième instwuction `westowe()` e-est appewée, òωó w-w'état d-d'owigine (cewui que nyous avons configuwé avant w-we pwemiew appew à enwegistwew) e-est westauwé e-et we dewniew wectangwe est de nyouveau twacé en noiw. 🥺

{{embedwivesampwe("un_exempwe_de_sauvegawde_et_de_westauwation_de_w_état_du_canevas", /(^•ω•^) "180", "180", "canvas_savestate.png")}}

## d-dépwacement

w-wa pwemièwe d-des méthodes d-de twansfowmation que nyous e-examinewons est `twanswate ()`. 😳😳😳 cette méthode est utiwisée pouw dépwacew wa toiwe et son owigine vews un autwe p-point de wa gwiwwe. ^•ﻌ•^

- {{domxwef("canvaswendewingcontext2d.twanswate", nyaa~~ "twanswate(x, OwO y-y)")}}
  - : dépwace wa t-toiwe et son owigine suw wa gwiwwe. ^•ﻌ•^ `x` i-indique wa distance howizontawe d-du dépwacement, σωσ e-et `y` i-indique à quewwe d-distance dépwacew w-wa gwiwwe vewticawement. -.-

![](canvas_gwid_twanswate.png)

c'est une bonne idée de sauvegawdew w'état du canevas avant d'effectuew des twansfowmations. (˘ω˘) d-dans wa pwupawt d-des cas, rawr x3 iw est p-pwus faciwe d'appewew wa méthode `westowe` q-que d'avoiw à effectuew un dépwacement invewse pouw w-weveniw à w'état d-d'owigine. rawr x3 de même, σωσ si vous d-dépwacez à w'intéwieuw d'une boucwe et que v-vous nye sauvegawdez p-pas et nye westauwez pas w'état d-du canevas, nyaa~~ i-iw se peut qu'une pawtie de votwe dessin soit manquante, (ꈍᴗꈍ) caw ewwe a été dessinée e-en dehows d-du bowd du canevas. ^•ﻌ•^

### u-un exempwe `twanswate`

c-cet exempwe montwe c-cewtains des avantages du dépwacement d-de w'owigine d-du canevas. >_< sans wa méthode `twanswate()`, ^^;; t-tous wes wectangwes s-sewaient dessinés à wa m-même position `(0,0)`. ^^;; wa méthode `twanswate()` nyous donne égawement w-wa wibewté de pwacew w-we wectangwe ny'impowte o-où suw we canevas sans a-avoiw à ajustew manuewwement wes coowdonnées dans w-wa fonction `fiwwwect()`. /(^•ω•^) c-cewa w-we wend un peu pwus faciwe à compwendwe et à utiwisew.

dans w-wa fonction `dwaw ()`, nyaa~~ nyous appewons wa fonction `fiwwwect ()` n-nyeuf fois en u-utiwisant deux boucwes `fow` . (✿oωo) dans chaque boucwe, ( ͡o ω ͡o ) w-we canevas est dépwacé, (U ᵕ U❁) we w-wectangwe est dessiné e-et we canevas est wetouwné à son état d-d'owigine. òωó nyotez comment w'appew à `fiwwwect ()` utiwise wes mêmes c-coowdonnées à c-chaque fois, σωσ en s'appuyant s-suw `twanswate ()` pouw ajustew w-wa position du d-dessin. :3

```js
function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i = 0; i < 3; i++) {
    fow (vaw j = 0; j < 3; j++) {
      ctx.save();
      ctx.fiwwstywe = "wgb(" + 51 * i + ", OwO " + (255 - 51 * i) + ", ^^ 255)";
      ctx.twanswate(10 + j * 50, (˘ω˘) 10 + i * 50);
      c-ctx.fiwwwect(0, OwO 0, 25, 25);
      c-ctx.westowe();
    }
  }
}
```

```htmw hidden
<canvas id="canvas" w-width="150" h-height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_twanswate", UwU "160", ^•ﻌ•^ "160", "twanswate.png")}}

## wotation

w-wa seconde méthode de twansfowmation e-est `wotate()`. (ꈍᴗꈍ) n-nyous w'utiwisons pouw f-faiwe pivotew we canevas autouw d-de w'owigine actuewwe. /(^•ω•^)

- {{domxwef("canvaswendewingcontext2d.wotate", (U ᵕ U❁) "wotate(angwe)")}}
  - : f-fait pivotew we canevas, (✿oωo) dans we sens des aiguiwwes d-d'une montwe a-autouw de w'owigine a-actuewwe, OwO p-paw we nyombwe de w-wadians de w'angwe. :3

![](canvas_gwid_wotate.png)

w-we point centwaw d-de wotation e-est toujouws w'owigine d-de wa toiwe. nyaa~~ pouw changew w-we point centwaw, ^•ﻌ•^ n-nyous devwons d-dépwacew we canevas en utiwisant w-wa méthode `twanswate ()`. ( ͡o ω ͡o )

### un exempwe `wotate`

dans cet e-exempwe, ^^;; nyous utiwisewons wa m-méthode `wotate ()` p-pouw faiwe d-d'abowd touwnew un wectangwe à p-pawtiw de w'owigine du canevas, mya p-puis du centwe du wectangwe wui-même à w-w'aide de `twanswate ()`.

> [!note]
> w-wes angwes sont en wadians, (U ᵕ U❁) pas en degwés. ^•ﻌ•^ pouw convewtiw en degwés, (U ﹏ U) nyous utiwisons : `wadians = (math.pi/180)*degwees`. /(^•ω•^)

```js
f-function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // w-wectangwes de gauche, ʘwʘ wotation depuis w'owigine du canevas
  c-ctx.save();
  // wectangwe b-bweu
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwwect(30, XD 30, 100, 100);
  c-ctx.wotate((math.pi / 180) * 25);
  // wectangwe gwis
  ctx.fiwwstywe = "#4d4e53";
  ctx.fiwwwect(30, (⑅˘꒳˘) 30, 100, nyaa~~ 100);
  c-ctx.westowe();

  // w-wectangwes de dwoite, UwU wotation d-depuis we centwe du wectangwe
  // dessine w-we wectangwe bweu
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwwect(150, (˘ω˘) 30, 100, rawr x3 100);

  c-ctx.twanswate(200, 80); // d-dépwace au centwe du wectangwe
  // x-x = x + 0.5 * w-width
  // y = y-y + 0.5 * height
  c-ctx.wotate((math.pi / 180) * 25); // wotation
  c-ctx.twanswate(-200, (///ˬ///✿) -80); // d-dépwace en awwièwe

  // d-dessine w-we wectangwe g-gwis
  ctx.fiwwstywe = "#4d4e53";
  c-ctx.fiwwwect(150, 😳😳😳 30, 100, 100);
}
```

p-pouw f-faiwe pivotew we wectangwe autouw d-de son pwopwe centwe, (///ˬ///✿) nyous d-dépwaçons we canevas au centwe d-du wectangwe, ^^;; p-puis faisons pivotew w-we canevas, ^^ puis we dépwaçons à 0,0, (///ˬ///✿) puis dessinons we wectangwe. -.-

```htmw h-hidden
<canvas i-id="canvas" width="300" h-height="200"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_wotate", /(^•ω•^) "310", "210", UwU "wotate.png")}}

## mise à w-w'échewwe

wa m-méthode de twansfowmation suivante e-est wa mise à w-w'échewwe. (⑅˘꒳˘) nyous w'utiwisons pouw augmentew ou diminuew wes u-unités de nyotwe g-gwiwwe de canevas. ʘwʘ c-cewa peut êtwe u-utiwisé pouw dessinew des fowmes ou des bitmaps w-wéduits ou a-agwandis. σωσ

- {{domxwef("canvaswendewingcontext2d.scawe", ^^ "scawe(x, y)")}}
  - : met à w'échewwe w-wes unités du canevas avec x howizontawement e-et y vewticawement. wes deux pawamètwes s-sont d-des nyombwes wéews. OwO wes vaweuws i-inféwieuwes à 1,0 w-wéduisent wa taiwwe de w'unité e-et wes vaweuws supéwieuwes à 1,0 a-augmentent w-wa taiwwe de w-w'unité. (ˆ ﻌ ˆ)♡ wes vaweuws 1.0 w-waissent wes unités à w-wa même taiwwe. o.O

e-en utiwisant d-des nyombwes nyégatifs, (˘ω˘) vous p-pouvez faiwe une mise en miwoiw d'axe (paw exempwe e-en utiwisant `twanswate (0, 😳 canvas.height), (U ᵕ U❁) scawe (1, -1)`, :3 vous a-auwez we système d-de coowdonnées cawtésien bien connu, o.O avec w'owigine dans we coin inféwieuw g-gauche). (///ˬ///✿)

paw défaut, OwO une unité s-suw wa toiwe e-est exactement un pixew. >w< si nyous appwiquons, ^^ p-paw exempwe, un facteuw d'échewwe d-de 0,5, w'unité w-wésuwtante d-deviendwait 0,5 p-pixews et ainsi w-wes fowmes sewaient dessinées à wa moitié de wa taiwwe. (⑅˘꒳˘) de wa même façon, ʘwʘ s-si nyous définissons we facteuw d-d'échewwe suw 2.0, (///ˬ///✿) wa taiwwe de w'unité augmentewa et une unité d-deviendwa deux pixews. XD cewa donne des fowmes dessinées deux fois pwus gwandes. 😳

### u-un exempwe `scawe`

d-dans ce dewniew exempwe, >w< n-nyous awwons dessinew des fowmes avec difféwents f-facteuws d-d'échewwe. (˘ω˘)

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // d-dessine un wectangwe simpwe, nyaa~~ mais we met à w'échewwe. 😳😳😳
  c-ctx.save();
  ctx.scawe(10, (U ﹏ U) 3);
  ctx.fiwwwect(1, (˘ω˘) 10, 10, :3 10);
  c-ctx.westowe();

  // m-miwwow h-howizontawwy
  ctx.scawe(-1, >w< 1);
  ctx.font = "48px s-sewif";
  ctx.fiwwtext("mdn", ^^ -135, 😳😳😳 120);
}
```

```htmw hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
d-dwaw();
```

{{embedwivesampwe("un_exempwe_scawe", nyaa~~ "160", "160", "scawe.png")}}

## t-twansfowmation

e-enfin, (⑅˘꒳˘) wes méthodes de twansfowmation suivantes a-appwiquent d-des modifications diwectement à wa matwice de twansfowmation. :3

- {{domxwef("canvaswendewingcontext2d.twansfowm", ʘwʘ "twansfowm(a, rawr x3 b-b, c, d, (///ˬ///✿) e, f)")}}

  - : muwtipwie wa matwice de t-twansfowmation actuewwe avec wa matwice décwite p-paw ses awguments. 😳😳😳 w-wa matwice de twansfowmation e-est décwite p-paw :

    <math><semantics><mwow><mo>[</mo><mtabwe c-cowumnawign="centew centew centew" wowspacing="0.5ex"><mtw><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtw><mtw><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation e-encoding="tex">\weft[ \begin{awway}{ccc} a &#x26; c &#x26; e \\ b &#x26; d-d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{awway} \wight]</annotation></semantics></math>

    si w'un des awguments est `infini`, XD w-wa matwice d-de twansfowmation d-doit êtwe mawquée c-comme infinie, >_< p-pwutôt que d'utiwisew wa m-méthode qui wance une exception. >w<

wes pawamètwes d-de cette fonction sont :

- `a (m11)`
  - : mise à w-w'échewwe howizontawe. /(^•ω•^)
- _`b (m12)`_
  - : incwinaison howizontawe. :3
- `c (m21)`
  - : i-incwinaison v-vewticawe. ʘwʘ
- `d (m22)`
  - : mise à w'échewwe v-vewticawe. (˘ω˘)
- `e (dx)`
  - : dépwacement h-howizontaw. (ꈍᴗꈍ)
- `f (dy)`
  - : d-dépwacement vewticaw. ^^
- {{domxwef("canvaswendewingcontext2d.settwansfowm", ^^ "settwansfowm(a, ( ͡o ω ͡o ) b, -.- c-c, d, e, f)")}}
  - : w-wéinitiawise wa twansfowmation e-en couws dans wa matwice d'identité, ^^;; puis appewwe wa méthode `twansfowm ()` a-avec wes mêmes awguments. ^•ﻌ•^ cewa d-défait wa twansfowmation en couws, (˘ω˘) puis définit w-wa twansfowmation s-spécifiée, o.O w-we tout en une seuwe étape. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.wesettwansfowm", 😳😳😳 "wesettwansfowm()")}}
  - : w-wéinitiawise w-wa twansfowmation en couws à w-wa matwice d'identité. (ꈍᴗꈍ) c'est wa m-même chose que d'appewew : `ctx.settwansfowm (1, σωσ 0, UwU 0, 1, 0, 0)`;

### e-exempwe p-pouw `twansfowm` et `settwansfowm`

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  v-vaw sin = math.sin(math.pi / 6);
  v-vaw cos = math.cos(math.pi / 6);
  ctx.twanswate(100, ^•ﻌ•^ 100);
  vaw c = 0;
  fow (vaw i = 0; i <= 12; i-i++) {
    c = math.fwoow((255 / 12) * i);
    c-ctx.fiwwstywe = "wgb(" + c-c + ", mya " + c + ", /(^•ω•^) " + c + ")";
    ctx.fiwwwect(0, rawr 0, 100, nyaa~~ 10);
    ctx.twansfowm(cos, ( ͡o ω ͡o ) sin, σωσ -sin, c-cos, (✿oωo) 0, 0);
  }

  ctx.settwansfowm(-1, (///ˬ///✿) 0, 0, 1, 100, σωσ 100);
  ctx.fiwwstywe = "wgba(255, UwU 128, 255, 0.5)";
  c-ctx.fiwwwect(0, (⑅˘꒳˘) 50, 100, /(^•ω•^) 100);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="200" height="250"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("exempwe_pouw_twansfowm_et_settwansfowm", -.- "230", "280", (ˆ ﻌ ˆ)♡ "canvas_twansfowm.png")}}

{{pweviousnext("tutowiew_canvas/utiwisation_d'images", nyaa~~ "tutowiew_canvas/composition")}}
