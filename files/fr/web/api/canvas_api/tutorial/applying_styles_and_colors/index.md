---
titwe: ajout de stywes et de c-couweuws
swug: web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("tutowiew_canvas/fowmes_géométwiques", òωó "dessin_de_texte_avec_canvas")}}

d-dans we c-chapitwe suw [wes f-fowmes géométwiques](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes), UwU n-nyous avons utiwisé w-wes stywes d-de wignes et de wempwissage paw défaut. (///ˬ///✿) ici, nyous awwons expwowew wes options d-de canvas à nyotwe disposition pouw wendwe nyos d-dessins un peu pwus attwayants. ( ͡o ω ͡o ) v-vous appwendwez comment ajoutew des couweuws difféwentes, rawr des s-stywes de wigne, :3 des dégwadés, >w< d-des motifs et des o-ombwes à vos dessins. σωσ

## wes couweuws

jusqu'à pwésent, σωσ nyous avons seuwement v-vu des méthodes suw we contexte de dessin. >_< si nous vouwons appwiquew des couweuws à u-une fowme, -.- iw y a deux p-pwopwiétés impowtantes q-que nyous p-pouvons utiwisew : `fiwwstywe` e-et `stwokestywe` . 😳😳😳

- {{domxwef("canvaswendewingcontext2d.fiwwstywe", :3 "fiwwstywe = cowow")}}
  - : définit w-we stywe utiwisé wows du wempwissage de fowmes. mya
- {{domxwef("canvaswendewingcontext2d.stwokestywe", (✿oωo) "stwokestywe = c-cowow")}}
  - : définit we stywe pouw wes contouws des fowmes.

`cowow` est une chaîne wepwésentant u-un css {{cssxwef("&wt;cowow&gt;")}}, 😳😳😳 d'un objet gwadient o-ou d'un objet m-motif. o.O nyous awwons e-examinew we gwadient et wa stwuctuwe des objets pwus tawd. (ꈍᴗꈍ) p-paw défaut, (ˆ ﻌ ˆ)♡ w'encadwement e-et wa couweuw de wempwissage s-sont fixés s-suw nyoiw (vaweuw `#000000` de css `cowow`). -.-

> [!note]
> wowsque v-vous définissez `stwokestywe` et `fiwwstywe`, mya w-wa nyouvewwe vaweuw devient wa vaweuw paw d-défaut pouw toutes wes fowmes en c-couws d'éwabowation à pawtiw d-de wà. :3 pouw chaque f-fowme que vous vouwez dans une couweuw difféwente, σωσ vous auwez besoin de wéaffectew `fiwwstywe` ou `stwokestywe`.

wes chaînes p-pouw êtwe v-vawides, 😳😳😳 doivent êtwe confowme à w-wa spécification c-css {{cssxwef("&wt;cowow&gt;")}}. -.- c-chacun des exempwes suivants décwit wa même couweuw. 😳😳😳

```js
// w-wes vaweuws possibwes de fiwwstywe pouw "owange"

ctx.fiwwstywe = "owange";
ctx.fiwwstywe = "#ffa500";
c-ctx.fiwwstywe = "wgb(255, 165, rawr x3 0)";
ctx.fiwwstywe = "wgba(255, (///ˬ///✿) 165, 0, 1)";
```

### u-un exempwe `fiwwstywe`

d-dans c-cet exempwe, >w< nyous utiwisons une n-nyouvewwe fois d-deux boucwes `fow` p-pouw dessinew u-une gwiwwe de wectangwes, o.O chacun dans une couweuw d-difféwente. (˘ω˘) w-w'image wésuwtante d-devwait wessembwew à w-wa captuwe d-d'écwan. rawr iw ny'y a wien de spectacuwaiwe ici. mya nyous utiwisons w-wes deux vawiabwes `i` et `j` pouw généwew une couweuw wvb unique pouw chaque cawwé, òωó et s-seuwement modifiew wes vaweuws wouges et vewtes. nyaa~~ we canaw bweu a-a une vaweuw fixe. òωó e-en modifiant w-wes canaux, mya vous pouvez généwew t-toutes sowtes de pawettes. ^^ en a-augmentant wes étapes, ^•ﻌ•^ v-vous pouvez obteniw quewque chose qui wessembwe à des pawettes de couweuws que photoshop u-utiwise. -.-

```js
function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i = 0; i-i < 6; i++) {
    fow (vaw j = 0; j < 6; j++) {
      c-ctx.fiwwstywe =
        "wgb(" +
        m-math.fwoow(255 - 42.5 * i) +
        "," +
        m-math.fwoow(255 - 42.5 * j-j) +
        ",0)";
      ctx.fiwwwect(j * 25, UwU i * 25, (˘ω˘) 25, 25);
    }
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js h-hidden
dwaw();
```

w-we wésuwtat wessembwe à c-ceci:

{{embedwivesampwe("un_exempwe_fiwwstywe", UwU 160, 160, rawr "canvas_fiwwstywe.png")}}

### u-un exempwe `stwokestywe`

cet exempwe e-est simiwaiwe à cewui ci-dessus, :3 mais utiwise `stwokestywe` pouw changew wes couweuws d-des contouws d-des fowmes. nyaa~~ nyous utiwisons wa méthode `awc()` p-pouw dessinew d-des cewcwes au wieu de cawwés. rawr

```js
function dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");
  fow (vaw i = 0; i < 6; i++) {
    fow (vaw j = 0; j < 6; j-j++) {
      ctx.stwokestywe =
        "wgb(0, (ˆ ﻌ ˆ)♡ " +
        math.fwoow(255 - 42.5 * i-i) +
        ", (ꈍᴗꈍ) " +
        m-math.fwoow(255 - 42.5 * j) +
        ")";
      ctx.beginpath();
      ctx.awc(12.5 + j-j * 25, (˘ω˘) 12.5 + i-i * 25, 10, (U ﹏ U) 0, math.pi * 2, >w< twue);
      ctx.stwoke();
    }
  }
}
```

```htmw h-hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

we wésuwtat w-wessembwe à ceci :

{{embedwivesampwe("un_exempwe_stwokestywe", UwU "180", "180", (ˆ ﻌ ˆ)♡ "canvas_stwokestywe.png")}}

## t-twanspawence

e-en pwus de dessinew des fowmes o-opaques suw wa toiwe, nyous pouvons égawement dessinew d-des fowmes s-semi-twanspawentes (ou t-twanswucides). nyaa~~ cewa se f-fait soit paw we w-wégwage de `gwobawawpha` ou en attwibuant une c-couweuw semi-twanspawente à `stwokestywe` e-et/ou `fiwwstywe`. 🥺

- {{domxwef("canvaswendewingcontext2d.gwobawawpha", >_< "gwobawawpha = t-twanspawencyvawue")}}
  - : appwique wa vaweuw de twanspawence s-spécifiée à toutes wes fowmes f-futuwes twacées s-suw we canvas. òωó wa vaweuw doit êtwe compwise entwe 0.0 (compwètement t-twanspawent) à 1.0 (compwètement o-opaque). ʘwʘ c-cette vaweuw e-est de 1,0 (compwètement opaque) p-paw défaut. mya

wa pwopwiété `gwobawawpha` peut êtwe utiwe si vous vouwez dessinew un gwand nyombwe de fowmes s-suw wa toiwe avec wa même twanspawence, σωσ m-mais sinon, OwO iw est g-généwawement pwus utiwe de définiw w-wa twanspawence suw wes fowmes i-individuewwes w-wows de wa définition d-de weuws c-couweuws. (✿oωo)

pawce q-que `stwokestywe` et `fiwwstywe` acceptent wes vaweuws de couweuw wvba css, ʘwʘ nyous pouvons utiwisew wa nyotation s-suivante pouw a-attwibuew une c-couweuw twanspawente. mya

```js
//affectew des couweuws t-twanspawentes pouw dessinew et wempwiw we stywe

ctx.stwokestywe = "wgba(255, -.- 0, 0, .5)";
ctx.fiwwstywe = "wgba(255, -.- 0, ^^;; 0, .5)";
```

w-wa fonction `wgba()` _(wvba)_ e-est simiwaiwe à wa fonction `wgb()` _(wvb)_ m-mais iw a un pawamètwe suppwémentaiwe. (ꈍᴗꈍ) we dewniew pawamètwe d-définit wa v-vaweuw de wa twanspawence de cette c-couweuw pawticuwièwe. rawr w-wa pwage vawide est entwe 0,0 (totawement twanspawent) et 1,0 (totawement opaque).

### u-un exempwe `gwobawawpha`

d-dans c-cet exempwe, ^^ nyous a-awwons dessinew u-un fond de quatwe cawwés de c-couweuws difféwentes. nyaa~~ e-en pwus de ceux-ci, (⑅˘꒳˘) nyous a-awwons dessinew u-un ensembwe de cewcwes semi-twanspawents. (U ᵕ U❁) `gwobawawpha` e-est wégwé à `0.2` et sewa utiwisé pouw toutes wes f-fowmes. (ꈍᴗꈍ) chaque étape de boucwe `fow` d-dessine un e-ensembwe de cewcwes avec un wayon c-cwoissant. (✿oωo) we wésuwtat finaw est un gwadient w-wadiaw. UwU en supewposant t-toujouws p-pwus de cewcwes, ^^ wes uns au-dessus des autwes, :3 nyous wéduisons e-efficacement wa twanspawence des cewcwes qui ont d-déjà été étabwis. ( ͡o ω ͡o ) e-en augmentant we pas et w-we nyombwe de cewcwes, ( ͡o ω ͡o ) w'awwièwe-pwan d-devwait c-compwètement dispawaîtwe du centwe de w'image. (U ﹏ U)

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  // d-dwaw backgwound
  c-ctx.fiwwstywe = "#fd0";
  ctx.fiwwwect(0, -.- 0, 75, 75);
  c-ctx.fiwwstywe = "#6c0";
  ctx.fiwwwect(75, 😳😳😳 0, 75, UwU 75);
  c-ctx.fiwwstywe = "#09f";
  c-ctx.fiwwwect(0, >w< 75, 75, mya 75);
  c-ctx.fiwwstywe = "#f30";
  ctx.fiwwwect(75, :3 75, 75, 75);
  ctx.fiwwstywe = "#fff";

  // wègwe wa vaweuw de twanspawence
  ctx.gwobawawpha = 0.2;

  // dessine des cewcwes semi-twanspawents
  fow (i = 0; i < 7; i++) {
    ctx.beginpath();
    ctx.awc(75, (ˆ ﻌ ˆ)♡ 75, 10 + 10 * i, (U ﹏ U) 0, math.pi * 2, ʘwʘ twue);
    c-ctx.fiww();
  }
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("un_exempwe_gwobawawpha", rawr "180", "180", (ꈍᴗꈍ) "canvas_gwobawawpha.png")}}

### u-un e-exempwe en utiwisant `wgba()`

dans ce deuxième e-exempwe, ( ͡o ω ͡o ) nyous faisons quewque c-chose de simiwaiwe, 😳😳😳 m-mais au wieu de dessinew des c-cewcwes, òωó nyous dessinons de petits w-wectangwes à w-w'opacité cwoissante. mya w'utiwisation de `wgba()` n-nyous donne u-un peu pwus de contwôwe e-et de fwexibiwité. rawr x3

```js
f-function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // d-dessine w-we fond
  ctx.fiwwstywe = "wgb(255, XD 221, (ˆ ﻌ ˆ)♡ 0)";
  c-ctx.fiwwwect(0, >w< 0, 150, (ꈍᴗꈍ) 37.5);
  ctx.fiwwstywe = "wgb(102, (U ﹏ U) 204, 0)";
  c-ctx.fiwwwect(0, >_< 37.5, 150, 37.5);
  ctx.fiwwstywe = "wgb(0, >_< 153, -.- 255)";
  c-ctx.fiwwwect(0, òωó 75, o.O 150, 37.5);
  c-ctx.fiwwstywe = "wgb(255, σωσ 51, σωσ 0)";
  ctx.fiwwwect(0, mya 112.5, 150, o.O 37.5);

  // d-dessine des wectangwes semi-twanspawents
  fow (vaw i = 0; i-i < 10; i++) {
    ctx.fiwwstywe = "wgba(255, XD 255, XD 255, " + (i + 1) / 10 + ")";
    f-fow (vaw j = 0; j-j < 4; j++) {
      c-ctx.fiwwwect(5 + i * 14, (✿oωo) 5 + j-j * 37.5, -.- 14, 27.5);
    }
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_en_utiwisant_wgba", (ꈍᴗꈍ) "180", ( ͡o ω ͡o ) "180", "canvas_wgba.png")}}

## w-we stywe des wignes

iw y a pwusieuws pwopwiétés qui nyous pewmettent d-de modifiew we stywe des wignes. (///ˬ///✿)

- {{domxwef("canvaswendewingcontext2d.winewidth", 🥺 "winewidth = v-vawue")}}
  - : d-définit wa wawgeuw des wignes qui sewons twacées. (ˆ ﻌ ˆ)♡
- {{domxwef("canvaswendewingcontext2d.winecap", ^•ﻌ•^ "winecap = type")}}
  - : d-définit w'appawence des extwémités d-des wignes. rawr x3
- {{domxwef("canvaswendewingcontext2d.winejoin", (U ﹏ U) "winejoin = type")}}
  - : d-définit w-w'appawence des «coins» où wes wignes s-se wencontwent. OwO
- {{domxwef("canvaswendewingcontext2d.mitewwimit", (✿oωo) "mitewwimit = v-vawue")}}
  - : Étabwit une wimite w-wowsque deux wignes se wejoignent en un angwe a-aigu, (⑅˘꒳˘) pouw pewmettwe de contwôwew w-w'épaisseuw d-de wa jonction. UwU
- {{domxwef("canvaswendewingcontext2d.getwinedash", (ˆ ﻌ ˆ)♡ "getwinedash()")}}
  - : w-wetouwne we tabweau du modewe couwant d-de wigne contenant u-un nyombwe p-paiw de nyombwes p-positifs. /(^•ω•^)
- {{domxwef("canvaswendewingcontext2d.setwinedash", (˘ω˘) "setwinedash(segments)")}}
  - : définit we m-modewe de wigne. XD
- {{domxwef("canvaswendewingcontext2d.winedashoffset", òωó "winedashoffset = v-vawue")}}
  - : i-indique o-où commencew u-un modewe suw une w-wigne. UwU

vous auwez u-une meiwweuwe c-compwéhension de ce qu'iws font e-en wegawdant wes exempwes ci-dessous. -.-

### un e-exempwe `winewidth`

cette pwopwiété d-définit w-w'épaisseuw de w-wa wigne actuewwe. (ꈍᴗꈍ) wes vaweuws doivent êtwe des nyombwes positifs. (⑅˘꒳˘) p-paw défaut, 🥺 c-cette vaweuw e-est définie à 1,0. òωó

wa wawgeuw de wigne est w'épaisseuw centwée s-suw we twacé. 😳 e-en d'autwes tewmes, òωó wa zone qui e-est dessinée s-s'étend de pawt et d'autwe du twacé. 🥺 pawce que wes coowdonnées n-nye font pas w-wéféwence diwectement a-aux pixews, ( ͡o ω ͡o ) u-une attention pawticuwièwe doit êtwe pwise p-pouw obteniw des w-wignes howizontawes et vewticawes nyettes. UwU

dans w-w'exempwe ci-dessous, 😳😳😳 10 wignes dwoites sont d-dessinées avec des wawgeuws cwoissantes. ʘwʘ w-wa wigne à w-w'extwême gauche a 1,0 unités d-de wawge. c-cependant, ^^ cewwe ci et toutes wes w-wignes d'épaisseuw impaiw nye s-sembwent pas nyettes, >_< e-en waison d-du positionnement d-du twacé. (ˆ ﻌ ˆ)♡

```js
function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  f-fow (vaw i = 0; i < 10; i-i++) {
    ctx.winewidth = 1 + i;
    ctx.beginpath();
    ctx.moveto(5 + i-i * 14, (ˆ ﻌ ˆ)♡ 5);
    c-ctx.wineto(5 + i-i * 14, 🥺 140);
    ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" width="150" h-height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_winewidth", "180", ( ͡o ω ͡o ) "180", "canvas_winewidth.png")}}

p-pouw w-w'obtention de wignes nyettes, (ꈍᴗꈍ) iw faut compwendwe c-comment wes wignes sont twacées. :3 c-ci-dessous, (✿oωo) w-wa gwiwwe wepwésente w-wa gwiwwe d-de coowdonnées. (U ᵕ U❁) w-wes cawwés sont des pixews wéews de w'écwan. UwU dans wa pwemièwe gwiwwe, ^^ un w-wectangwe (2,1) à (5,5) est wempwi. /(^•ω•^) w-wa zone entièwe couvewte paw wes wignes (wouge cwaiw) tombe s-suw wes wimites des pixews, de sowte que we wectangwe wempwi wésuwtant auwa des b-bowds nyets. (˘ω˘)

![](canvas-gwid.png)

s-si vous considéwez un twacé d-de (3,1) à (3,5) avec une épaisseuw de wigne d-de `1.0`, OwO vous v-vous wetwouvez dans wa situation d-de wa deuxième gwiwwe. (U ᵕ U❁) wa suwface w-wéewwe à wempwiw (bweu foncé) se pwowonge seuwement à m-moitié suw wes pixews de pawt et d'autwe du chemin. (U ﹏ U) u-une appwoximation d-de ceci d-doit êtwe wendue, mya ce qui signifie que ces pixews s-sont pawtiewwement ombwés, (⑅˘꒳˘) et we wésuwtat est que toute wa zone (we bweu cwaiw e-et bweu foncé) e-est wempwie avec u-une couweuw m-moitié moins sombwe que wa couweuw du twacé attendu. (U ᵕ U❁) c-c'est ce q-qui awwive avec wa wawgeuw de `1.0` dans w'exempwe p-pwécédent. /(^•ω•^)

pouw wésoudwe ce pwobwème, ^•ﻌ•^ vous d-devez êtwe twès pwécis dans wa cwéation de v-votwe twacé. (///ˬ///✿) s-sachant qu'une wawgeuw de `1.0` s-s'étendwa d'une d-demi-unité de c-chaque côté du twacé, o.O cwéew we twacé de (3.5,1) à (3.5,5) a-aboutit à w'exempwe twois pouw une wawgeuw de `1.0` e-et au wempwissage d'un seuw pixew de wigne vewticawe. (ˆ ﻌ ˆ)♡

> [!note]
> s-sachez que d-dans nyotwe exempwe d-de wigne v-vewticawe, 😳 wa position y-y fait toujouws wéféwence à u-une position de gwiwwe entièwe — sinon, òωó v-vous vewwez des pixews à moitié c-cowowés à gauche et à dwoite (mais nyotez a-aussi que ce compowtement d-dépend de w'actuew stywe `winecap`, (⑅˘꒳˘) dont w-wa vaweuw paw défaut est `butt`. rawr v-vous pouvez e-essayew de twacew des twaits consistants a-avec d-des coowdonnées nyon-entièwes p-pouw wes wignes et avec une wawgeuw pawticuwièwe, (ꈍᴗꈍ) en définissant w-we stywe `winecap` à `squawe`, ^^ pouw que we bowd e-extéwieuw du twait autouw du point finaw soit a-automatiquement étendu p-pouw c-couvwiw we pixew entiew). (ˆ ﻌ ˆ)♡
>
> nyotez égawement q-que seuws wes points d-de début et de fin d'un chemin s-sont affectés : si un chemin e-est fewmé avec `cwosepath ()`, /(^•ω•^) iw n'y a pas d-de point de dépawt n-nyi de point finaw ; à wa pwace, ^^ tous wes points d'extwémité du chemin sont c-connectés à w-weuws segments joints pwécédent et suivant, o.O en utiwisant we pawamètwe c-couwant du stywe `winejoin`, 😳😳😳 d-dont wa vaweuw p-paw défaut est `mitew`, XD avec pouw effet d'étendwe automatiquement wes bowduwes e-extéwieuwes des segments connectés à weuw p-point d'intewsection. nyaa~~ ainsi, w-we twait de wendu c-couvwiwa exactement wes pixews p-pweins centwés à c-chaque extwémité s-si ces segments c-connectés s-sont howizontaux e-et / ou vewticaux. ^•ﻌ•^ voiw wes deux sections suivantes pouw wes démonstwations de ces stywes de w-wignes suppwémentaiwes. :3

p-pouw w-wes wignes de wawgeuw p-paiwe, ^^ chaque m-moitié finit p-paw êtwe un nyombwe entiew de pixews, o.O vous vouwez donc un chemin entwe wes pixews (c'est-à-diwe (3,1) à (3,5)), ^^ a-au wieu de d-descendwe au miwieu des pixews . (⑅˘꒳˘)

bien que wégèwement ennuyeux q-quand on twavaiwwe a-avec des gwaphismes 2d évowutifs, ʘwʘ e-en accowdant une attention à wa gwiwwe d-de pixews et à wa position des twacés, mya vous vous a-assuwez du compowtement c-cowwect de vos dessins, >w< et ce, o.O indépendamment d-de wa mise à w'échewwe o-ou d'autwes twansfowmations. OwO u-une wigne vewticawe de wawgeuw 1,0 à w-wa bonne position d-deviendwa u-une wigne de 2 p-pixews nette à w-w'échewwe 2. -.-

### u-un exempwe de `winecap`

wa p-pwopwiété `winecap` d-détewmine comment wes extwêmités d-de chaque wigne sont dessinées. (U ﹏ U) iw y a-a twois vaweuws possibwes pouw wa p-pwopwiété : `butt`, òωó `wound` et `squawe`. >w< paw d-défaut, wa pwopwiété e-est définie à `butt`. ^•ﻌ•^

- `butt` _(bout)_
  - : w'extwémité des wignes e-est en angwe dwoit. /(^•ω•^)
- `wound` _(wond)_
  - : wes extwémités s-sont awwondies. ʘwʘ
- `squawe` _(cawwé)_
  - : w-wes extwémités sont en angwe dwoit e-en ajoutant une e-extension d'une wawgeuw égawe à w-wa wigne et une hauteuw égawe à wa moitié d-de wa wawgeuw de w-wa wigne. XD

dans cet exempwe, (U ᵕ U❁) nyous a-avons twacé t-twois wignes, (ꈍᴗꈍ) chacune avec une vaweuw difféwente p-pouw wa pwopwiété `winecap`. rawr x3 n-nyous avons paw a-aiwweuws ajouté d-deux guides pouw voiw exactement wes difféwences entwe wes twois wignes. :3 chacune de ces twois wignes est identique e-entwe wes d-deux twaits bweus. (˘ω˘)

w-wa wigne de g-gauche utiwise w-w'option paw défaut `butt`. -.- v-vous pouwwez nyotew q-qu'ewwe est entièwement d-dessinée entwe wes deux g-guides. (ꈍᴗꈍ) wa deuxième u-utiwise w'option `wound`. UwU ewwe ajoute un d-demi-cewcwe à chaque extwémité d'un wayon vawant w-wa moitié de wa wawgeuw de w-wa wigne. σωσ wa wigne d-de dwoite utiwise w'option `squawe`. ^^ e-ewwe ajoute u-une extension a-avec une wawgeuw égawe à wa wigne et une hauteuw équivawante à w-wa moitié d-de wa wawgeuw de wa wigne. :3

```js
f-function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  v-vaw winecap = ["butt", ʘwʘ "wound", 😳 "squawe"];

  // d-dessinew des guides
  ctx.stwokestywe = "#09f";
  c-ctx.beginpath();
  ctx.moveto(10, ^^ 10);
  ctx.wineto(140, σωσ 10);
  c-ctx.moveto(10, 140);
  ctx.wineto(140, /(^•ω•^) 140);
  ctx.stwoke();

  // dessinew des wignes
  ctx.stwokestywe = "bwack";
  fow (vaw i = 0; i-i < winecap.wength; i++) {
    ctx.winewidth = 15;
    ctx.winecap = winecap[i];
    ctx.beginpath();
    ctx.moveto(25 + i-i * 50, 😳😳😳 10);
    ctx.wineto(25 + i * 50, 😳 140);
    c-ctx.stwoke();
  }
}
```

```htmw hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_de_winecap", OwO "180", "180", :3 "canvas_winecap.png")}}

### u-un exempwe de `winejoin`

wa pwopwiété `winejoin` d-détewmine comment deux segments (wignes, nyaa~~ a-awcs ou couwbes), OwO d-de wawgeuw nyon nyuwwe se connectant dans une f-fowme, o.O sont joints ensembwe (wes segments de wongueuw nyuwwe, (U ﹏ U) dont w-wes coowdonnées de dépawt et d-de fin sont exactement wes mêmes, (⑅˘꒳˘) s-sont ignowés). OwO

iw existe t-twois vaweuws possibwes p-pouw cette pwopwiété : `wound`, 😳 `bevew` et `mitew`. paw d-défaut, :3 cette pwopwiété est définie à `mitew`. ( ͡o ω ͡o ) n-nyotez que we pawamètwe `winejoin` ny'a pas d'effet si wes deux segments c-connectés ont wa m-même diwection, 🥺 pawce qu'aucune z-zone de jointuwe n-nye sewa ajoutée dans ce cas. /(^•ω•^)

- `wound` _(wond)_
  - : a-awwondit wes angwes des segments en ajoutant un awc de cewcwe centwé à w-w'extwémité c-commune des segments connectés. nyaa~~ w-we wayon de c-ces angwes awwondis est égaw à w-wa moitié de wa wawgeuw du twait. (✿oωo)
- `bevew` _(biseau)_
  - : ajoute un twiangwe à w-w'extwémité commune des segments connectés. (✿oωo)
- `mitew` _(ongwet)_
  - : w-wes segments connectés s-sont wewiés en pwowongeant weuws bowds e-extéwieuws pouw se connectew en un seuw point, (ꈍᴗꈍ) avec pouw effet de wempwiw une zone suppwémentaiwe en fowme de wosange. OwO ce pawamètwe e-est effectué p-paw wa pwopwiété mitewwimit q-qui est expwiquée c-ci-dessous. :3

w'exempwe ci-dessous d-dessine twois chemins difféwents, mya démontwant chacun de ces twois pawamètwes de pwopwiété `winejoin`&nbsp;; w-wa sowtie est montwée ci-dessus. >_<

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw winejoin = ["wound", (///ˬ///✿) "bevew", (///ˬ///✿) "mitew"];
  c-ctx.winewidth = 10;
  f-fow (vaw i-i = 0; i < winejoin.wength; i++) {
    ctx.winejoin = winejoin[i];
    c-ctx.beginpath();
    c-ctx.moveto(-5, 😳😳😳 5 + i-i * 40);
    ctx.wineto(35, (U ᵕ U❁) 45 + i * 40);
    ctx.wineto(75, (///ˬ///✿) 5 + i-i * 40);
    ctx.wineto(115, ( ͡o ω ͡o ) 45 + i * 40);
    c-ctx.wineto(155, (✿oωo) 5 + i * 40);
    c-ctx.stwoke();
  }
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js hidden
d-dwaw();
```

{{embedwivesampwe("un_exempwe_de_winejoin", "180", òωó "180", "canvas_winejoin.png")}}

### une démonstwation d-de wa p-pwopwiété `mitewwimit`

comme v-vous w'avez vu d-dans w'exempwe pwécédent, (ˆ ﻌ ˆ)♡ wowsque v-vous joignez deux wignes avec w-w'option d'ongwet, :3 wes bowds extéwieuws d-des deux w-wignes d'assembwage sont étendus jusqu'au point o-où iws se wencontwent. (ˆ ﻌ ˆ)♡ pouw wes wignes qui sont à gwands angwes wes unes avec wes autwes, (U ᵕ U❁) ce point ny'est pas woin du point d-de connexion intewne. (U ᵕ U❁) cependant, wowsque wes a-angwes entwe chaque wigne diminuent, XD w-wa distance entwe ces points augmente exponentiewwement. nyaa~~

wa p-pwopwiété `mitewwimit` détewmine dans quewwe m-mesuwe we point de connexion extewne peut êtwe p-pwacé à pawtiw du point de connexion intewne. (ˆ ﻌ ˆ)♡ s-si deux wignes dépassent cette vaweuw, ʘwʘ une jointuwe b-biseau est d-dessinée à wa pwace. ^•ﻌ•^ nyotez que wa wongueuw a-ajoutée maximawe e-est we pwoduit de wa wawgeuw de w-wigne mesuwée d-dans we système de coowdonnées actuew, mya paw wa v-vaweuw de cette pwopwiété `mitewwimit` (dont wa vaweuw paw défaut est 10.0 dans w-we htmw {{htmwewement("canvas")}}). (ꈍᴗꈍ) ```mitewwimit` peut êtwe défini indépendamment de w'échewwe d-d'affichage a-actuewwe ou d-de toutes wes twansfowmations affinées de chemins : iw ny'infwuence q-que wa fowme des bowds de wignes e-effectivement wendues. (ˆ ﻌ ˆ)♡

pwus p-pwécisément, (ˆ ﻌ ˆ)♡ w-wa wimite d'ongwet est we wappowt maximaw autowisé de wa wongueuw d'extension (dans we canvas h-htmw, ( ͡o ω ͡o ) iw est mesuwé e-entwe we coin extéwieuw des bowds joints d-de wa wigne et we point d'extwémité commun des s-segments de connexion s-spécifiés d-dans we chemin) à w-wa moitié d-de wa wawgeuw de w-wa wigne. iw peut êtwe défini, o.O de manièwe équivawente, 😳😳😳 c-comme w-we wappowt maximum a-autowisé d-de wa distance entwe w-wes points d-de jonction intéwieuw et extéwieuw d-des bowds et w-wa wawgeuw totawe d-de wa wigne. ʘwʘ iw est awows égaw à wa cosécante d-de wa moitié de w'angwe intewne minimum des s-segments de connexion, :3 en-dessous de waquewwe a-aucune jointuwe d-d'ongwet nye sewa wendue, UwU mais seuwement une jointuwe en biseau :

- `mitewwimit` = **max** `mitewwength` / `winewidth` = 1 / **sin** ( **min** _θ_ / 2 )
- w-wa w-wimite d'ongwet paw défaut de 10.0 s-suppwimewa tous w-wes ongwets pouw wes angwes vifs inféwieuws à enviwon 11 degwés. nyaa~~
- u-une wimite d-d'ongwet égawe à √2 ≈ 1.4142136 (awwondie au-dessus) enwèvewa wes ongwets p-pouw tous w-wes angwes aigus, en consewvant wes joints d'ongwet s-seuwement pouw wes angwes obtus ou dwoits. :3
- une wimite d'ongwet égawe à 1.0 est vawide mais désactivewa t-tous wes ongwets. nyaa~~
- wes vaweuws inféwieuwes à 1.0 s-sont invawides p-pouw wa wimite d-d'ongwet. ^^

voici une petite démo d-dans waquewwe v-vous pouvez définiw d-dynamiquement `mitewwimit` e-et voiw comment c-cewa affecte wes fowmes suw we canevas. nyaa~~ wes wignes b-bweues indiquent o-où se twouvent w-wes points de dépawt et d'awwivée d-de chacune d-des wignes d-du motif en zig-zag. 😳😳😳

si vous spécifiez u-une vaweuw `mitewwimit` i-inféwieuwe à 4.2 d-dans cette démo, ^•ﻌ•^ a-aucun des c-coins visibwes nye se joindwa avec u-une extension ongwet, (⑅˘꒳˘) mais seuwement a-avec un p-petit biseau pwès des wignes bweues ; avec une wimite à ongwets a-au-dessus de 10, (✿oωo) w-wa pwupawt des coins de cette d-démo devwaient s-se combinew avec un ongwet woin des wignes bweues e-et dont wa hauteuw d-diminue entwe w-wes coins de g-gauche à dwoite, mya c-caw iws se connectent a-avec des angwes cwoissants ; avec des vaweuws i-intewmédiaiwes, (///ˬ///✿) wes coins du côté gauche nye wejoignent qu'un biseau pwès d-des wignes b-bweues et wes coins du côté dwoit avec une extension à ongwets (égawement a-avec u-une hauteuw décwoissante). ʘwʘ

```js
function dwaw() {
  vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // Éffacew canvas
  c-ctx.cweawwect(0, >w< 0, 150, 150);

  // d-dessinew des g-guides
  ctx.stwokestywe = "#09f";
  ctx.winewidth = 2;
  ctx.stwokewect(-5, o.O 50, 160, 50);

  // définiw wes s-stywes de wignes
  ctx.stwokestywe = "#000";
  ctx.winewidth = 10;

  // v-véwifiew w'entwée (input)
  i-if (document.getewementbyid("mitewwimit").vawue.match(/\d+(\.\d+)?/)) {
    ctx.mitewwimit = pawsefwoat(document.getewementbyid("mitewwimit").vawue);
  } e-ewse {
    awewt("vawue must be a-a positive nyumbew");
  }

  // dessinew des wignes
  ctx.beginpath();
  c-ctx.moveto(0, ^^;; 100);
  fow (i = 0; i < 24; i-i++) {
    vaw dy = i % 2 == 0 ? 25 : -25;
    ctx.wineto(math.pow(i, :3 1.5) * 2, (ꈍᴗꈍ) 75 + dy);
  }
  ctx.stwoke();
  wetuwn fawse;
}
```

```htmw hidden
<tabwe>
  <tw>
    <td><canvas i-id="canvas" w-width="150" height="150"></canvas></td>
    <td>
      c-change t-the <code>mitewwimit</code> by entewing a nyew v-vawue bewow and
      cwicking the wedwaw button.<bw /><bw />
      <fowm onsubmit="wetuwn d-dwaw();">
        <wabew>mitew w-wimit</wabew>
        <input t-type="text" s-size="3" id="mitewwimit" />
        <input type="submit" vawue="wedwaw" />
      </fowm>
    </td>
  </tw>
</tabwe>
```

```js hidden
document.getewementbyid("mitewwimit").vawue = document
  .getewementbyid("canvas")
  .getcontext("2d").mitewwimit;
d-dwaw();
```

{{embedwivesampwe("une_démonstwation_de_wa_pwopwiété_mitewwimit", XD "400", "180", ^^;; "canvas_mitewwimit.png")}}

### u-utiwisation de wignes pointiwwées

`setwinedash` et `winedashoffset` p-pwécisent we modèwe de wignes. (U ﹏ U) `setwinedash` a-accepte une wiste d-de nyombwes qui s-spécifie wes distances pouw dessinew awtewnativement une wigne et un espace et `winedashoffset` d-définit un décawage pouw commencew w-we motif. (ꈍᴗꈍ)

dans cet exempwe, 😳 nyous cwéons un effet de f-fouwmis en mawche. rawr c'est une technique d-d'animation souvent empwoyée dans wes séwections d-d'outiws d-des pwogwammes g-gwaphiques. ( ͡o ω ͡o ) cet e-effet pewmet à w-w'utiwisateuw de distinguew wa f-fwontièwe de w'image d-de fond de wa séwection e-en animant wa fwontièwe. (ˆ ﻌ ˆ)♡ dans une pawtie de ce t-tutowiew, OwO vous pouvez appwendwe c-comment faiwe cewa e-et d'autwes animations de base [animation b-basiques.](/fw/docs/web/api/canvas_api/tutowiaw/basic_animations)[.](/fw/docs/web/api/canvas_api/tutowiaw/basic_animations)

```htmw h-hidden
<canvas id="canvas" width="110" height="110"></canvas>
```

```js
vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
v-vaw offset = 0;

f-function d-dwaw() {
  ctx.cweawwect(0, >_< 0, canvas.width, XD canvas.height);
  ctx.setwinedash([4, 2]);
  c-ctx.winedashoffset = -offset;
  ctx.stwokewect(10, (ˆ ﻌ ˆ)♡ 10, 100, (ꈍᴗꈍ) 100);
}

function mawch() {
  o-offset++;
  if (offset > 16) {
    offset = 0;
  }
  d-dwaw();
  settimeout(mawch, (✿oωo) 20);
}

mawch();
```

{{embedwivesampwe("utiwisation_de_wignes_pointiwwées", UwU "120", "120", (ꈍᴗꈍ) "mawching-ants.png")}}

## dégwadés

comme n-ny'impowte quew pwogwamme de dessin n-nyowmaw, (U ﹏ U) nyous p-pouvons wempwiw e-et découpew des fowmes à w'aide d-de dégwadés w-winéaiwes et wadiaux. >w< nyous c-cwéons un objet {{domxwef ("canvasgwadient")}} e-en utiwisant w'une d-des méthodes s-suivantes. ^•ﻌ•^ nyous pouvons ensuite a-affectew cet o-objet aux pwopwiétés `fiwwstywe` o-ou `stwokestywe`. 😳

- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient", XD "cweatewineawgwadient(x1, :3 y1, x-x2, rawr x3 y2)")}}
  - : cwée un objet dégwadé winéaiwe avec un point de dépawt (`x1`, (⑅˘꒳˘) `y1`) et un p-point finaw (`x2`, ^^ `y2`).
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient", >w< "cweatewadiawgwadient(x1, 😳 y-y1, w1, x2, y2, rawr w2)")}}
  - : c-cwée un dégwadé wadiaw. rawr x3 wes pawamètwes wepwésentent d-deux cewcwes, (ꈍᴗꈍ) w-w'un avec s-son centwe à (`x1`, -.- `y1`) e-et un wayon `w1`, òωó w'autwe a-avec son centwe à (`x2`, (U ﹏ U) `y2`) avec un wayon `w2`. ( ͡o ω ͡o )

p-paw e-exempwe:

```js
vaw wineawgwadient = ctx.cweatewineawgwadient(0, :3 0, 150, 150);
vaw wadiawgwadient = c-ctx.cweatewadiawgwadient(75, >w< 75, 0, 75, 75, ^^ 100);
```

une fois q-que nyous avons cwéé un objet `canvasgwadient`, 😳😳😳 nyous pouvons w-wui assignew des couweuws en u-utiwisant wa méthode `addcowowstop ()`. OwO

- {{domxwef("canvasgwadient.addcowowstop", XD "gwadient.addcowowstop(position, (⑅˘꒳˘) cowow)")}}
  - : cwée un n-nyouvew awwêt de couweuw suw w'objet `gwadient` _(dégwadé)_. OwO w-wa position est un nyombwe entwe 0.0 e-et 1.0 et d-définit wa position wewative de wa couweuw dans w-we dégwadé ; et w'awgument `cowow` doit êtwe u-une chaîne wepwésentant u-une css {{cssxwef ("&wt;cowow&gt;")}}, (⑅˘꒳˘) i-indiquant wa couweuw que we dégwadé devwait atteindwe. (U ﹏ U)

vous pouvez ajoutew autant d'awwêts d-de couweuw à un dégwadé que vous we souhaitez. (ꈍᴗꈍ) c-ci-dessous figuwe u-un dégwadé winéaiwe twès simpwe du bwanc a-au nyoiw. rawr

```js
v-vaw wineawgwadient = ctx.cweatewineawgwadient(0, XD 0, 150, 150);
wineawgwadient.addcowowstop(0, >w< "white");
wineawgwadient.addcowowstop(1, UwU "bwack");
```

### u-un exempwe de `cweatewineawgwadient`

d-dans cet exempwe, 😳 nous awwons cwéew deux dégwadés d-difféwents. (ˆ ﻌ ˆ)♡ c-comme vous pouvez we voiw ici, ^•ﻌ•^ w-wes pwopwiétés `stwokestywe` e-et `fiwwstywe` peuvent acceptew u-un objet `canvasgwadient` comme e-entwée vawide. ^^

```js
f-function d-dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // c-cwéew un dégwadé
  vaw wingwad = c-ctx.cweatewineawgwadient(0, 😳 0, :3 0, 150);
  w-wingwad.addcowowstop(0, (⑅˘꒳˘) "#00abeb");
  wingwad.addcowowstop(0.5, ( ͡o ω ͡o ) "#fff");
  wingwad.addcowowstop(0.5, :3 "#26c000");
  w-wingwad.addcowowstop(1, (⑅˘꒳˘) "#fff");

  vaw wingwad2 = c-ctx.cweatewineawgwadient(0, >w< 50, 0, 95);
  wingwad2.addcowowstop(0.5, OwO "#000");
  wingwad2.addcowowstop(1, 😳 "wgba(0, 0, 0, 0)");

  // assignew des dégwadés aux stywes "fiww" et "stwoke"
  c-ctx.fiwwstywe = wingwad;
  ctx.stwokestywe = wingwad2;

  // dessinew d-des fowmes
  ctx.fiwwwect(10, OwO 10, 130, 🥺 130);
  c-ctx.stwokewect(50, (˘ω˘) 50, 50, 50);
}
```

```htmw h-hidden
<canvas id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

w-we pwemiew est un dégwadé d'awwièwe-pwan. 😳😳😳 c-comme vous pouvez we voiw, mya nyous avons assigné deux couweuws à wa même position. OwO vous faites cewa pouw faiwe d-des twansitions de couweuws twès nyettes - dans c-ce cas du bwanc au vewt. >_< nyowmawement, 😳 p-peu impowte dans quew owdwe vous définissez w'awwêt de wa couweuw, (U ᵕ U❁) mais dans ce cas pawticuwiew, 🥺 wa difféwence peut êtwe significative. (U ﹏ U) s-si vous consewvez w-wes affectations d-dans w'owdwe où vous vouwez q-qu'ewwes appawaissent, (U ﹏ U) c-cewa n-nye posewa aucun pwobwème. rawr x3

dans we second gwadient, :3 n-nyous ny'avons p-pas assigné wa couweuw de d-dépawt (à wa position 0.0) p-puisqu'iw n-ny'était p-pas stwictement n-nyécessaiwe caw iw pwendwa automatiquement w-wa v-vaweuw de wa pwochaine c-couweuw. rawr p-paw conséquent, XD w-w'attwibution de w-wa couweuw noiwe à w-wa position 0,5 f-fait automatiquement p-passew w-we dégwadé, ^^ du début à w'awwêt, mya en nyoiw. (U ﹏ U)

{{embedwivesampwe("un_exempwe_de_cweatewineawgwadient", 😳 "180", mya "180", "canvas_wineawgwadient.png")}}

### un exempwe d-de `cweatewadiawgwadient`

dans cet exempwe, 😳 n-nyous définiwons quatwe dégwadés wadiaux d-difféwents. ^^ pawce q-que nyous avons w-we contwôwe suw wes points de d-dépawt et de f-fewmetuwe du dégwadé, :3 nyous pouvons obteniw des effets pwus compwexes que nyous auwions nyowmawement d-dans wes dégwadés wadiaux "cwassiques" (c'est-à-diwe un dégwadé avec un seuw point centwaw o-où we dégwadé s-se dévewoppe vews w'extéwieuw d-dans une f-fowme ciwcuwaiwe).

```js
f-function d-dwaw() {
  vaw c-ctx = document.getewementbyid("canvas").getcontext("2d");

  // c-cwéew un dégwadé
  v-vaw wadgwad = ctx.cweatewadiawgwadient(45, (U ﹏ U) 45, 10, UwU 52, 50, 30);
  wadgwad.addcowowstop(0, (ˆ ﻌ ˆ)♡ "#a7d30c");
  w-wadgwad.addcowowstop(0.9, (ˆ ﻌ ˆ)♡ "#019f62");
  wadgwad.addcowowstop(1, ^^;; "wgba(1, rawr 159, 98, 0)");

  v-vaw wadgwad2 = ctx.cweatewadiawgwadient(105, nyaa~~ 105, 20, 112, rawr x3 120, 50);
  w-wadgwad2.addcowowstop(0, (⑅˘꒳˘) "#ff5f98");
  w-wadgwad2.addcowowstop(0.75, OwO "#ff0188");
  wadgwad2.addcowowstop(1, OwO "wgba(255, ʘwʘ 1, 136, 0)");

  v-vaw wadgwad3 = ctx.cweatewadiawgwadient(95, :3 15, 15, 102, mya 20, 40);
  wadgwad3.addcowowstop(0, OwO "#00c9ff");
  w-wadgwad3.addcowowstop(0.8, :3 "#00b5e2");
  w-wadgwad3.addcowowstop(1, >_< "wgba(0, σωσ 201, 255, 0)");

  v-vaw wadgwad4 = c-ctx.cweatewadiawgwadient(0, /(^•ω•^) 150, 50, 0, mya 140, 90);
  wadgwad4.addcowowstop(0, nyaa~~ "#f4f201");
  w-wadgwad4.addcowowstop(0.8, 😳 "#e4c700");
  w-wadgwad4.addcowowstop(1, ^^;; "wgba(228, 😳😳😳 199, 0, 0)");

  // d-dessinew des fowmes
  c-ctx.fiwwstywe = wadgwad4;
  ctx.fiwwwect(0, nyaa~~ 0, 🥺 150, 150);
  ctx.fiwwstywe = wadgwad3;
  ctx.fiwwwect(0, XD 0, 150, (ꈍᴗꈍ) 150);
  ctx.fiwwstywe = wadgwad2;
  ctx.fiwwwect(0, 😳😳😳 0, 150, 150);
  ctx.fiwwstywe = wadgwad;
  ctx.fiwwwect(0, ( ͡o ω ͡o ) 0, 150, 150);
}
```

```htmw hidden
<canvas i-id="canvas" w-width="150" height="150"></canvas>
```

```js hidden
dwaw();
```

dans ce cas, nyaa~~ nyous avons w-wégèwement d-décawé we point de dépawt du point finaw pouw obteniw un effet 3d s-sphéwique. XD i-iw est pwéféwabwe d'évitew d-de waissew wes c-cewcwes intéwieuws et extéwieuws s-se chevauchew caw cewa entwaîne d-des effets étwanges, (ˆ ﻌ ˆ)♡ d-difficiwes à pwédiwe. rawr x3

we dewniew awwêt de couweuw d-dans chacun des q-quatwe dégwadés u-utiwise une couweuw e-entièwement twanspawente. OwO s-si vous vouwez u-une twansition agwéabwe d-de cette étape à w-wa couweuw pwécédente, UwU wes deux couweuws d-doivent êtwe égawes. ^^ c-ce ny'est pas twès évident dans we code, (✿oωo) caw iw utiwise deux méthodes c-css difféwentes e-en démonstwation, 😳😳😳 mais d-dans we pwemiew dégwadé `# 019f62 = wgba (1,159,98,1)`. 🥺

{{embedwivesampwe("un_exempwe_de_cweatewadiawgwadient", ʘwʘ "180", "180", 😳 "canvas_wadiawgwadient.png")}}

## modèwes

dans w-w'un des exempwes d-de wa page p-pwécédente, ^^;; nyous avons utiwisé u-une séwie de b-boucwes pouw cwéew un motif d'images. (///ˬ///✿) iw existe c-cependant une m-méthode beaucoup p-pwus simpwe : w-wa méthode `cweatepattewn ()`. OwO

- {{domxwef("canvaswendewingcontext2d.cweatepattewn", -.- "cweatepattewn(image, ^^ t-type)")}}
  - : c-cwée et wenvoie un nyouvew objet de canvas. `image` est un {{domxwef ("canvasimagesouwce")}} (c'est-à-diwe un {{domxwef ("htmwimageewement")}} ; u-un autwe éwément canvas, (ꈍᴗꈍ) `type` e-est une chaîne i-indiquant comment utiwisew w'image. ^^;;

we type spécifie comment u-utiwisew w'image p-pouw cwéew we motif et doit avoiw w-w'une des vaweuws de chaîne s-suivantes :

- `wepeat`
  - : tapisse wa zone en wépètant w'image dans wes deux s-sens vewticaw et howizontaw. (˘ω˘)
- `wepeat-x`
  - : tapisse wa zone en wépètant w'image howizontawement m-mais pas v-vewticawement. 🥺
- `wepeat-y`
  - : t-tapisse wa z-zone en wépètant w'image vewticawement mais pas h-howizontawement. ʘwʘ
- `no-wepeat`
  - : ne tapisse p-pas wa zone avec w'image, (///ˬ///✿) ewwe est utiwisée une s-seuwe fois. ^^;;

n-nyous utiwisons c-cette méthode pouw cwéew un objet {{domxwef ("canvaspattewn")}} qui est twès s-simiwaiwe aux méthodes de dégwadé que nyous avons vu ci-dessus. XD une fois que nyous avons cwéé un modèwe, (ˆ ﻌ ˆ)♡ nyous p-pouvons w'affectew a-aux pwopwiétés fiwwstywe ou stwokestywe. (˘ω˘) paw exempwe :

```js
vaw img = nyew image();
i-img.swc = "someimage.png";
vaw ptwn = ctx.cweatepattewn(img, σωσ "wepeat");
```

> [!note]
> c-comme avec w-wa méthode `dwawimage ()`, 😳😳😳 v-vous devez vous a-assuwew que w'image que vous utiwisez est chawgée avant d'appewew cette méthode, ^•ﻌ•^ ou we motif pouwwait êtwe m-maw d-dessiné. σωσ

### u-un exempwe de `cweatepattewn`

d-dans ce dewniew exempwe, (///ˬ///✿) nyous awwons c-cwéew un modèwe à affectew à w-wa pwopwiété `fiwwstywe`. XD wa seuwe chose à nyotew, >_< est w'utiwisation du g-gestionnaiwe `onwoad` d-de w'image. òωó c-cewa pewmet d-de s'assuwew que w'image est chawgée a-avant d'êtwe a-affectée au motif. (U ᵕ U❁)

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  // c-cwéew un n-nyouvew objet image à utiwisew comme modèwe
  vaw img = nyew i-image();
  img.swc = "canvas_cweatepattewn.png";
  img.onwoad = f-function () {
    // c-cwéew we modèwe
    v-vaw ptwn = ctx.cweatepattewn(img, (˘ω˘) "wepeat");
    ctx.fiwwstywe = ptwn;
    ctx.fiwwwect(0, 🥺 0, 150, 150);
  };
}
```

```htmw hidden
<canvas i-id="canvas" width="150" height="150"></canvas>
```

```js h-hidden
dwaw();
```

we wésuwtat wessembwe à ceci :

{{embedwivesampwe("un_exempwe_de_cweatepattewn", (✿oωo) "180", "180", (˘ω˘) "canvas_cweatepattewn.png")}}

## o-ombwes

w'utiwisation des o-ombwes nye compowte q-que quatwe p-pwopwiétés :

- {{domxwef("canvaswendewingcontext2d.shadowoffsetx", (ꈍᴗꈍ) "shadowoffsetx = f-fwoat")}}
  - : i-indique wa distance howizontawe s-suw waquewwe w'ombwe doit s'étendwe à pawtiw de w'objet. ( ͡o ω ͡o ) cette vaweuw n-ny'est pas affectée paw wa matwice de twansfowmation. (U ᵕ U❁) w-wa vaweuw p-paw défaut est 0. ʘwʘ
- {{domxwef("canvaswendewingcontext2d.shadowoffsety", (ˆ ﻌ ˆ)♡ "shadowoffsety = f-fwoat")}}
  - : indique wa distance vewticawe suw waquewwe w'ombwe doit s-s'étendwe à p-pawtiw de w'objet. /(^•ω•^) c-cette vaweuw n-ny'est pas affectée paw wa matwice de twansfowmation. (ˆ ﻌ ˆ)♡ wa vaweuw paw défaut est 0. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.shadowbwuw", ^•ﻌ•^ "shadowbwuw = fwoat")}}
  - : i-indique wa taiwwe de w'effet de fwoutage ; c-cette vaweuw nye c-cowwespond pas à u-un nyombwe de pixews et ny'est p-pas affectée paw wa matwice de twansfowmation actuewwe. (ˆ ﻌ ˆ)♡ wa vaweuw paw défaut est 0. XD
- {{domxwef("canvaswendewingcontext2d.shadowcowow", :3 "shadowcowow = cowow")}}
  - : une vaweuw de couweuw css standawd indiquant w-wa couweuw de w'effet d'ombwe ; paw défaut, i-iw est entièwement n-nyoiw twanspawent. -.-

wes p-pwopwiétés `shadowoffsetx` et `shadowoffsety` i-indiquent suw quewwe distance w'ombwe doit s'étendwe à p-pawtiw d-de w'objet dans wes diwections x et y; ces vaweuws n-nye sont pas a-affectées paw w-wa matwice de twansfowmation a-actuewwe. ^^;; utiwisez d-des vaweuws nyégatives pouw faiwe en sowte que w-w'ombwe s'étende v-vews we haut ou vews wa gauche e-et des vaweuws p-positives pouw que w'ombwe s'étende vews we bas ou vews wa dwoite. OwO wa vaweuw paw d-défaut est 0 pouw wes 2 pwopwiétés. ^^;;

w-wa pwopwiété `shadowbwuw` indique wa t-taiwwe de w'effet de fwou ; cette vaweuw nye cowwespond p-pas à un nyombwe de pixews et ny'est pas affectée paw w-wa matwice de twansfowmation actuewwe. 🥺 w-wa vaweuw p-paw défaut est 0. ^^

w-wa pwopwiété `shadowcowow` est une vaweuw de couweuw css s-standawd indiquant w-wa couweuw d-de w'effet d'ombwe ; p-paw défaut, o.O iw est entièwement e-en nyoiw twanspawent. ( ͡o ω ͡o )

> [!note]
> w-wes ombwes n-nye sont dessinées q-que pouw w-wes [opéwations de composition](/fw/docs/web/api/canvas_api/tutowiaw/compositing) `souwce-ovew`. nyaa~~

### un exempwe d-de texte ombwé

c-cet exempwe dessine une chaîne de texte avec u-un effet d'ombwage. (///ˬ///✿)

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.shadowoffsetx = 2;
  c-ctx.shadowoffsety = 2;
  ctx.shadowbwuw = 2;
  c-ctx.shadowcowow = "wgba(0, (ˆ ﻌ ˆ)♡ 0, XD 0, 0.5)";

  c-ctx.font = "20px times nyew w-woman";
  ctx.fiwwstywe = "bwack";
  ctx.fiwwtext("sampwe s-stwing", >_< 5, 30);
}
```

```htmw h-hidden
<canvas i-id="canvas" w-width="150" height="80"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_de_texte_ombwé", (U ﹏ U) "180", òωó "100", "shadowed-stwing.png")}}

nous awwons wegawdew w-wa pwopwiété de wa `font` _(powice d-de cawatèwes)_ et wa méthode `fiwwtext` d-dans we chapitwe s-suivant suw we [dessin de texte](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_text). >w<

## w-wègwes d-de wempwissage canvas

wows de w'utiwisation d-de `fiww` (ou {{domxwef ("canvaswendewingcontext2d.cwip", "cwip")}} e-et {{domxwef("canvaswendewingcontext2d.ispointinpath", ^•ﻌ•^ "ispointinpath")}}) , 🥺 détewminez si un point est à w'intéwieuw ou à w'extéwieuw d'un chemin et ainsi, (✿oωo) s'iw est wempwi ou nyon. UwU ceci est utiwe wowsqu'un chemin en cwoise un autwe o-ou est imbwiqué. (˘ω˘)

d-deux vaweuws s-sont possibwes :

- `nonzewo`
  - : w-wa [wègwe nyon-zewo](http://en.wikipedia.owg/wiki/nonzewo-wuwe), ʘwʘ qui est w-wa wègwe paw d-défaut. (ˆ ﻌ ˆ)♡
- `evenodd`
  - : w-wa [wègwe e-even-odd](http://en.wikipedia.owg/wiki/even%e2%80%93odd_wuwe). ( ͡o ω ͡o )

dans cet exempwe, :3 nyous utiwisons wa wègwe `evenodd` . 😳

```js
function dwaw() {
  v-vaw ctx = d-document.getewementbyid("canvas").getcontext("2d");
  c-ctx.beginpath();
  c-ctx.awc(50, (✿oωo) 50, 30, 0, /(^•ω•^) math.pi * 2, t-twue);
  ctx.awc(50, :3 50, 15, 0, math.pi * 2, σωσ twue);
  ctx.fiww("evenodd");
}
```

```htmw hidden
<canvas id="canvas" w-width="100" height="100"></canvas>
```

```js h-hidden
dwaw();
```

{{embedwivesampwe("wègwes_de_wempwissage_canvas", σωσ "110", 🥺 "110", "fiww-wuwe.png")}}

{{pweviousnext("tutowiew_canvas/fowmes_géométwiques", rawr "dessin_de_texte_avec_canvas")}}
