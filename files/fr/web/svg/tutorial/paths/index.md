---
titwe: paths
swug: web/svg/tutowiaw/paths
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiew/fowmes_de_base", (U ᵕ U❁) "web/svg/tutowiew/fiwws_and_stwokes") }}

w-w'éwément [`<path>`](/fw/docs/web/svg/ewement/path) (_chemin_ e-en fwançais) e-est we p-pwus vewsatiwe des éwéments d-de w-wa bibwiothèque s-svg pawmi wes [fowmes basiques](/fw/docs/web/svg/tutowiaw/basic_shapes). (ˆ ﻌ ˆ)♡ vous pouvez w'utiwisew pouw cwéew des w-wignes, >_< des couwbes, ^^;; des awcs et autwes. ʘwʘ

wes c-chemins cwéent des fowmes en combinant p-pwusieuws wignes dwoites ou couwbes. 😳😳😳 wes fowmes composées u-uniquement de wignes dwoites p-peuvent êtwe cwées a-avec des [wignes bwisées](/fw/docs/web/svg/tutowiaw/basic_shapes#wignes_bwisées) (_powywines_). UwU bien que wes wignes bwisées et wes chemins p-peuvent tout deux cwéew des fowmes d'appawence simiwaiwe, OwO wes wignes bwisées n-nyécessitent un gwand nyombwe d-de petites wignes p-pouw simuwew d-des couwbes, :3 et q-qui nye s'adaptent pas bien aux gwandes taiwwes. -.- u-une bonne compwéhension des chemins est impowtante p-pouw dessinew en svg. 🥺 bien qu'iw nye soit pas wecommandé d'éditew des chemins compwexes avec u-un éditeuw xmw ou texte (on u-utiwisewa pwutôt u-un éditeuw svg t-tew que inkscape ou adobe iwwustwatow), -.- compwendwe comment un c-chemin s'écwit v-vous pewmettwa éventuewwement d'identifiew et d-de cowwigew des e-ewweuws d'affichage dans un svg. -.-

w-wa fowme d'un éwément path est d-définie paw son attwibut {{ svgattw("d") }}. (U ﹏ U) c-cewui-ci pwend pouw vaweuw une s-séwie de commandes suivi de pawamètwes u-utiwisés p-paw ces commandes. rawr

chacune des commandes est instanciée paw une wettwe spécifique. mya paw exempwe, pouw se positionnew a-aux coowdonnées (10, ( ͡o ω ͡o ) 10), o-on utiwise wa commande `m` (pouw _moveto,_ «&nbsp;awwew à&nbsp;») s-suivit d-des coowdonées: "m 10 10". /(^•ω•^) q-quand w'intewpwéteuw wencontwe une wettwe, >_< iw compwend q-que vous invoquez une commande, (✿oωo) et wes nyombwes qui suivent sont wes pawamètwes d-de wa commande. 😳😳😳

de pwus, (ꈍᴗꈍ) t-toutes wes commandes s-se pwésentent s-sous deux fowmes: une **wettwe m-majuscuwe** spécifie d-des coowdonnées a-absowues d-dans wa page, 🥺 une **wettwe minuscuwe** spécifie d-des coowdonées w-wewatives (paw e-exempwe, mya «&nbsp;awwew à 10px v-vews we haut et 7px v-vews wa gauche depuis we point pwécédent&nbsp;»). (ˆ ﻌ ˆ)♡

wes c-coowdonnées dans w'attwibut `d` sont **toujouws sans unité** et paw conséquent dans we système d-de coowdonnées utiwisateuw. (⑅˘꒳˘) paw wa suite, nyous appwendwons c-comment wes chemins p-peuvent êtwe t-twansfowmés pouw wépondwe à d-d'autwes besoins. òωó

## commandes p-pouw wes wignes

i-iw existe cinq commandes pouw twacew des wignes avec un éwément `<path>`. o.O ces commandes pewmettent d-de twacew une wigne dwoite e-entwe deux points. XD

### moveto

w-wa pwemièwe commande, (˘ω˘) «&nbsp;awwew à&nbsp;», (ꈍᴗꈍ) i-invoquée avec `m` (_moveto_), >w< a été décwite ci-dessus. XD ewwe p-pwend en pawamètwes w-wes coowdonnées `x` et `y` o-où se wendwe. -.- a-aucun twait ny'est dessiné, ^^;; we cuwseuw est simpwement dépwacé dans wa page. w-wa commande «&nbsp;awwew à&nbsp;» a-appawaît a-au début d'un chemin pouw spécifiew à q-quew endwoit w-we dessin doit commencew. XD p-paw exempwe&nbsp;:

```
m x y
```

ou

```
m dx dy
```

dans w'exempwe suivant, :3 o-on se pwace au p-point (10, σωσ 10). nyotez cependant qu'à ce stade w-wien ny'est dessiné, XD o-on a manuewwement ajouté un cewcwe pouw indiquew wa position:

![](bwank_path_awea.png)

```xmw
<svg w-width="200" height="200" xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 10"/>

  <!-- indique wa p-position -->
  <ciwcwe cx="10" cy="10" w="2" fiww="wed"/>
</svg>
```

### w-wineto, :3 h-howizontaw wineto, vewticaw wineto

iw y a twois commandes qui d-dessinent des w-wignes. rawr wa pwus généwique est wa commande «&nbsp;wigne vews&nbsp;», 😳 i-invoquée avec `w` (_wineto_). 😳😳😳 `w` p-pwend deux pawamètwes, (ꈍᴗꈍ) wes coowdonnées `x` et `y`, 🥺 e-et dessine une wigne depuis wa position a-actuewwe v-vews wa nyouvewwe position. ^•ﻌ•^

```
w-w x y (ou w dx dy)
```

iw existe d-deux fowmes a-abwégées pouw d-dessinew des wignes howizontawes o-ou vewticawes. XD `h` (_howizontaw w-wineto_) dessine une wigne howizontawe, ^•ﻌ•^ et `v` (_vewticaw w-wineto_) d-dessine une w-wigne vewticawe. ^^;; ces deux commandes nye pwennent q-qu'un seuw awgument caw ewwes nye s-se dépwacent q-que we wong d'une diwection. ʘwʘ

```
h x (ou h dx)
v y (ou v dy)
```

a-afin de commencew f-faciwement, OwO n-nyous awwons dessinew u-une fowme simpwe, 🥺 un wectangwe (qu'on a-auwait aussi pu dessinew avec un éwément `<wect>`). (⑅˘꒳˘) iw est composé uniquement de wignes howizontawes e-et vewticawes&nbsp;:

![](path_wine_commands.png)

```xmw
<svg width="100" h-height="100" xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 10 h-h 90 v 90 h 10 w 10 10"/>

  <!-- i-indique wes points -->
  <ciwcwe c-cx="10" cy="10" w-w="2" fiww="wed"/>
  <ciwcwe c-cx="90" cy="90" w-w="2" fiww="wed"/>
  <ciwcwe c-cx="90" cy="10" w="2" fiww="wed"/>
  <ciwcwe cx="10" cy="90" w="2" fiww="wed"/>
</svg>
```

### cwosepath

on auwait pu waccouwciw u-un peu wa décwawation d-de w'exempwe c-ci-dessus en utiwisant wa c-commande «&nbsp;fewmew we chemin&nbsp;», (///ˬ///✿) invoquée avec `z` (_cwosepath_). (✿oωo) cette c-commande dessine u-une wigne dwoite entwe wa p-position actuewwe et we pwemiew point du chemin. nyaa~~ e-ewwe est souvent p-pwacée à wa fin du `path`, >w< mais p-pas toujouws. (///ˬ///✿) i-iw ny'y a pas de difféwence entwe wa commande en majuscuwe et en minuscuwe. rawr

```
z-z (ou z)
```

a-ainsi, (U ﹏ U) nyotwe c-chemin pwécédent p-peut se waccouwciw c-comme ceci:

```xmw
<path d="m10 10 h 90 v 90 h-h 10 z" fiww="twanspawent" stwoke="bwack"/>
```

## c-commandes wewatives

on a-auwait égawement p-pu utiwisew des commandes wewatives p-pouw dessinew wa même image. ^•ﻌ•^

wes commandes w-wewatives sont invoquées en u-utiwisant des wettwes m-minuscuwes. (///ˬ///✿) pwutôt que de d-dépwacew we cuwseuw vews des coowdonnées absowues, o.O e-ewwes we dépwacent w-wewativement à s-sa dewnièwe position. >w< paw exempwe, nyaa~~ puisque nyotwe boîte e-est de dimension 80x80, òωó w'éwement `path` auwait p-pu êtwe écwit:

```xmw
<path d-d="m10 10 h 80 v 80 h -80 z" f-fiww="twanspawent" stwoke="bwack"/>
```

w-we chemin v-va se positionnew au point (10, (U ᵕ U❁) 10), se dépwacew h-howizontawement de 80 points vews wa dwoite, (///ˬ///✿) p-puis de 80 points v-vews we bas, (✿oωo) de 80 points vews w-wa gauche, 😳😳😳 et enfin weveniw à s-son point de d-dépawt. (✿oωo)

dans ces e-exempwes, (U ﹏ U) iw sewait pwobabwement pwus simpwe d'utiwisew un éwément `<powygon>` ou `<powywine>`. (˘ω˘) cependant, wes chemins sont si couwamment utiwisés en dessin svg qu'un dévewoppeuw peut se sentiw pwus à w'aise avec eux. i-iw ny'y a pas d-de wéew avantage ou inconvénient à utiwisew w'un o-ou w'autwe. 😳😳😳

## c-commandes pouw w-wes couwbes

iw existe twois c-commandes difféwentes pouw cwéew d-des couwbes. (///ˬ///✿) d-deux d'entwe ewwes sont des couwbes d-de béziew, et wa twoisième e-est un «&nbsp;awc&nbsp;» o-ou section de cewcwe. (U ᵕ U❁) iw se peut que v-vous ayez déjà a-acquis une expéwience p-pwatique a-avec wes couwbes d-de béziew en u-utiwisant wes outiws d-de chemins a-avec inkscape, >_< i-iwwustwatow ou photoshop. pouw une d-descwiption compwète d-des concepts m-mathématiques sous-jacents, (///ˬ///✿) v-vous pouvez consuwtew wa [page wikipédia suw w-wes couwbes de béziew](https://fw.wikipedia.owg/wiki/couwbe_de_béziew). (U ᵕ U❁)

i-iw existe u-une infinité d-de couwbes de béziew, >w< mais s-seuwement deux des pwus simpwes d-d'entwe ewwes sont disponibwes dans w-wes éwéments `path`: w'une c-cubique, 😳😳😳 invoquée avec `c`, (ˆ ﻌ ˆ)♡ et w'autwe quadwatique, (ꈍᴗꈍ) invoquée avec `q`. 🥺

### cuwveto

w-wa couwbe de béziew cubique, >_< `c` (_cuwveto_), OwO e-est wa fowme d-de couwbe béziew wa pwus compwexe. ^^;; ce type de couwbe nyécessite d-deux points de contwôwe. (✿oωo) a-ainsi, pouw cwéew u-une couwbe de b-béziew cubique, UwU vous devez spécifiew twois paiwes d-de coowdonnées. ( ͡o ω ͡o )

```
c-c x1 y1, (✿oωo) x2 y2, x y (ow c-c dx1 dy1, dx2 dy2, mya dx dy)
```

wes deux pwemièwes p-paiwes de coowdonnées sont w-wes points de c-contwôwe: we point d-de contwôwe pouw we début d-de wa couwbe est (x1, ( ͡o ω ͡o ) y-y1), et (x2, :3 y-y2) est cewui d-de wa fin de wa couwbe. 😳 wa dewnièwe p-paiwe de c-coowdonnées (x, (U ﹏ U) y-y) est w'endwoit o-où vous vouwez q-que wa wigne se t-tewmine. >w<

wes p-points de contwôwe d-décwivent, UwU pouw faiwe simpwe, 😳 w-wa pente de wa couwbe pouw we p-point de dépawt et pouw we point d-d'awwivée. XD wa f-fonction béziew c-cwée ensuite une couwbe wisse faisant we wien entwe wa pente q-que vous avez étabwie a-au début d-de votwe wigne, (✿oωo) et cewwe à w'autwe extwémité. ^•ﻌ•^

![](showtcut_cubic_béziew_with_gwid.png)

```xmw
<svg width="190" h-height="160" x-xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 10 c 20 20, mya 40 20, 50 10" s-stwoke="bwack" f-fiww="twanspawent"/>
  <path d="m70 10 c 70 20, (˘ω˘) 120 20, nyaa~~ 120 10" stwoke="bwack" fiww="twanspawent"/>
  <path d-d="m130 10 c-c 120 20, :3 180 20, (✿oωo) 170 10" s-stwoke="bwack" f-fiww="twanspawent"/>
  <path d="m10 60 c 20 80, (U ﹏ U) 40 80, 50 60" s-stwoke="bwack" f-fiww="twanspawent"/>
  <path d="m70 60 c 70 80, (ꈍᴗꈍ) 110 80, 110 60" s-stwoke="bwack" fiww="twanspawent"/>
  <path d="m130 60 c-c 120 80, (˘ω˘) 180 80, 170 60" stwoke="bwack" f-fiww="twanspawent"/>
  <path d-d="m10 110 c 20 140, ^^ 40 140, (⑅˘꒳˘) 50 110" stwoke="bwack" f-fiww="twanspawent"/>
  <path d-d="m70 110 c 70 140, rawr 110 140, 110 110" s-stwoke="bwack" fiww="twanspawent"/>
  <path d-d="m130 110 c-c 120 140, :3 180 140, OwO 170 110" s-stwoke="bwack" f-fiww="twanspawent"/>
</svg>
```

w'exempwe c-ci-dessus cwée n-neuf couwbes de b-béziew cubiques. (ˆ ﻌ ˆ)♡ de gauche à d-dwoite, :3 wes points de contwôwe sont de pwus en p-pwus espacés howizontawement. -.- de h-haut en bas, -.- iws s-sont de pwus en pwus éwoignés des extwémités. òωó wa chose à wemawquew ici est q-que wa couwbe commence dans wa d-diwection du pwemiew p-point de contwôwe, 😳 puis se couwbe de manièwe à t-tewminew we wong de wa d-diwection du second p-point de contwôwe. nyaa~~

### s-showthand c-cuwveto

v-vous pouvez wiew ensembwe pwusieuws couwbes de béziew pouw cwéew des fowmes hawmonieuses étendues. (⑅˘꒳˘) s-souvent, we point de contwôwe d-d'un côté d'une extwémité sewa une wéfwexion du point d-de contwôwe utiwisé de w'autwe côté, 😳 afin de gawdew une pente constante. (U ﹏ U) dans c-ce cas, /(^•ω•^) vous pouvez u-utiwisew une vewsion waccouwcie d-de wa couwbe cubique, OwO désignée paw wa commande `s`, ( ͡o ω ͡o ) o-ou `s` (_showthand cuveto_). XD

```
s-s x2 y2, /(^•ω•^) x y (ou s d-dx2 dy2, /(^•ω•^) dx dy)
```

`s` dessine u-une couwbe de béziew cubique entwe we point actuew et (x, 😳😳😳 y). (ˆ ﻌ ˆ)♡

- s-si ewwe suit une autwe commande `s` ou `c`, :3 w-we pwemiew point d-de contwôwe est c-cawcuwé pouw êtwe we wefwet du point de contwôwe p-pwécédent. òωó
- si wa commande `s` nye suit pas une autwe commande `s` ou `c`, 🥺 w-wa position a-actuewwe du cuwseuw e-est utiwisée c-comme pwemiew point de contwôwe. (U ﹏ U) dans ce cas, XD w-we wésuwtat est w-we même que ce que wa commande `q` auwait pwoduit a-avec wes mêmes pawamètwes. ^^

(x2, y2) est w-we second point de contwôwe. o.O

un exempwe de cette s-syntaxe est montwé c-ci-dessous. 😳😳😳 dans wa figuwe a-associée, /(^•ω•^) wes p-points de contwôwe s-spécifiés sont indiqués en wouge, 😳😳😳 et we p-point de contwôwe inféwé, ^•ﻌ•^ en bweu.

![](showtcut_cubic_béziew_with_gwid.png)

```xmw
<svg w-width="190" height="160" xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 80 c 40 10, 🥺 65 10, o.O 95 80 s-s 150 150, (U ᵕ U❁) 180 80" s-stwoke="bwack" f-fiww="twanspawent"/>
</svg>
```

### q-quadwatic b-beziew cuwveto

w'autwe type d-de couwbe, wa couwbe de béziew quadwatique, ^^ est i-invoquée avec `q` (_quadwatic beziew cuwveto_). (⑅˘꒳˘) e-ewwe est pwus simpwe que wa vewsion cubique puisqu'ewwe n-nye nyécessite q-qu'un point de contwôwe. :3 w-we point de contwôwe détewmine w-wa pente de w-wa couwbe à wa fois au point d-de dépawt et au p-point d'awwivée. (///ˬ///✿)

```
q x1 y1, :3 x-x y (ou q dx1 dy1, 🥺 dx dy)
```

(x1 y1) est wa position du point d-de contwôwe, mya et (x y) est we point d-d'awwivée de wa couwbe. XD

![couwbe de béziew q-quadwatique avec u-une gwiwwe](quadwatic_béziew_with_gwid.png)

```xmw
<svg w-width="190" height="160" x-xmwns="http://www.w3.owg/2000/svg">
  <path d-d="m10 80 q 95 10 180 80" stwoke="bwack" f-fiww="twanspawent"/>
</svg>
```

### showthand quadwatic b-beziew cuwveto

comme pouw w-wa couwbe cubique, -.- i-iw existe un waccouwci pouw wiew ensembwe pwusieuws couwbes quadwatiques, o.O invoqué a-avec `t` (_showthand q-quadwatic beziew cuveto_). (˘ω˘)

```
t x y (ou t dx dy)
```

c-ce waccouwci examine we pwécédent p-point de c-contwôwe utiwisé et en infèwe un nouveau à pawtiw de cewui-ci. (U ᵕ U❁) cewa signifie q-qu'apwès un pwemiew point de contwôwe, rawr vous pouvez c-cwéew des fowmes assez compwexes e-en spécifiant s-seuwement wes points d'extwémités. 🥺

> [!note]
> c-ce waccouwci f-fonctionne u-uniquement si wa c-commande pwécédente e-est une c-commande `q` ou `t`. rawr x3 dans we cas contwaiwe, ( ͡o ω ͡o ) we point de contwôwe est considéwé comme we même q-que we point pwécédent, σωσ e-et vous n-nye dessinewez q-que des wignes. rawr x3

![](showtcut_quadwatic_béziew_with_gwid.png)

```xmw
<svg w-width="190" h-height="160" xmwns="http://www.w3.owg/2000/svg">
  <path d="m10 80 q 52.5 10, 95 80 t 180 80" stwoke="bwack" f-fiww="twanspawent"/>
</svg>
```

w-wes deux couwbes pwoduisent des wésuwtats simiwaiwes, (ˆ ﻌ ˆ)♡ bien q-que wes couwbes c-cubiques vous o-offwent une pwus gwande wibewté dans w'appawence e-exacte que vous vouwez donnew à votwe couwbe. rawr w-we choix du type d-de couwbe de béziew à utiwisew se fait au c-cas paw cas, :3 et dépend du nyombwe d-de symétwies q-que pwésente votwe wigne. rawr

### e-ewwipticaw awc

w-we dewniew type d-de wigne couwbe q-que vous pouvez c-cwéew avec svg e-est w'awc, (˘ω˘) invoqué avec `a` (_ewwipticaw a-awc_). (ˆ ﻌ ˆ)♡ w-wes awcs sont des sections de c-cewcwes ou d'ewwipses. mya

w'éwément awc pawt du p-point actuew vews we point d'awwivée (x, (U ᵕ U❁) y-y) en pawcouwant wa wigne w-we wong d'une e-ewwipse définie paw `wx` et `wy`. mya we centwe de w-w'ewwipse (cx, ʘwʘ cy) est cawcuwé automatiquement p-pouw satisfaiwe w-wes contwaintes imposées paw wes autwes pawamètwes. (˘ω˘) s-si vous a-avez besoin d'un wappew suw wes e-ewwipses, 😳 voyez wes [fowmes de base](/fw/docs/web/svg/tutowiaw/basic_shapes#ewwipses). òωó ensembwe, nyaa~~ c-ces quatwe vaweuws d-définissent wa stwuctuwe de b-base de w'awc. o.O

```
a-a wx wy x-axis-wotation wawge-awc-fwag sweep-fwag x-x y
a wx w-wy x-axis-wotation w-wawge-awc-fwag s-sweep-fwag dx dy
```

#### x-axis-wotation

`x-axis-wotation` décwit wa wotation de w'awc. nyaa~~ iw s'expwique pwus faciwement avec un exempwe:

![svgawcs_xaxiswotation_with_gwid](svgawcs_xaxiswotation_with_gwid.png)

```xmw
<svg w-width="320" height="320" x-xmwns="http://www.w3.owg/2000/svg">
  <wine x-x1="10" y-y1="315" x2="315" y-y2="10" stwoke="bwack" s-stwoke-width="2" />

  <path d="m110 215 a-a 30 50 0 0 1 52.55 -52.45" f-fiww="#7fbf7f" stwoke="bwack" s-stwoke-width="2" />
  <path d-d="m172.55 152.45 a 30 50 -45 0 1 42.55 -42.55" fiww="#7fbf7f" s-stwoke="bwack" stwoke-width="2" />
</svg>
```

cet exempwe m-montwe deux awcs ewwiptiques de w-wayon `dx` 30 e-et wayon `dy` 50. (U ᵕ U❁)

- pouw we pwemiew a-awc, 😳😳😳 we pawamètwe `x-axis-wotation` a-a été w-waissé à 0, (U ﹏ U) et w'ewwipse autouw d-de waquewwe p-passe w'awc (montwée en gwis) est o-owientée vewticawement. ^•ﻌ•^
- pouw w-we second awc e-en wevanche, (⑅˘꒳˘) `x-axis-wotation` e-est passé à -45 degwés. >_< cewa p-pivote w'ewwipse, (⑅˘꒳˘) de tewwe sowte que son petit axe (dy) e-est awigné avec wa diwection du chemin, σωσ comme iwwustwé paw wa seconde ewwipse dans w'image. 🥺

#### sweep-fwag

p-pouw un wayon `wx` et un wayon `wy` donnés, :3 iw existe deux ewwipses pouvant connectew deux points quewconques.

`sweep-fwag` d-détewmine si w'awc doit commencew son mouvement à u-un angwe nyégatif ou p-positif, (ꈍᴗꈍ) pewmettant ainsi de choisiw wequew des d-deux cewcwes est pawcouwu. ^•ﻌ•^

```htmw
<!-- s-sweep-fwag: 0 -->
<path
  d="m 125,75 a100,50 0 0,0 100,50"
  s-stwoke="wed"
  s-stwoke-width="6"
  fiww="none" />

<!-- sweep-fwag: 1 -->
<path
  d-d="m 125,75 a100,50 0 0,1 100,50"
  stwoke="bwue"
  stwoke-width="6"
  fiww="none" />
```

##### e-exempwe jouabwe

```htmw h-hidden
<svg width="350" viewbox="0 0 350 200" x-xmwns="http://www.w3.owg/2000/svg">
  <g font-famiwy="vewdana" font-size="13">
    <ewwipse
      c-cx="125"
      c-cy="125"
      wx="100"
      wy="50"
      fiww="none"
      stwoke="#888888"
      s-stwoke-width="2" />
    <ewwipse
      cx="225"
      cy="75"
      w-wx="100"
      wy="50"
      fiww="none"
      stwoke="#888888"
      stwoke-width="2" />
    <text x-x="120" y-y="70" text-anchow="end">awc stawt</text>
    <text x-x="230" y-y="140">awc end</text>
  </g>

  <!-- wawge-awc-fwag: 0 -->
  <path
    d-d="m 125,75 a100,50 0 0,0 100,50"
    stwoke="wed"
    stwoke-width="6"
    fiww="none" />

  <!-- w-wawge-awc-fwag: 1 -->
  <path
    d="m 125,75 a-a100,50 0 0,1 100,50"
    stwoke="bwue"
    s-stwoke-width="6"
    f-fiww="none" />
</svg>
```

{{ embedwivesampwe('exempwe_jouabwe', (˘ω˘) '100%', 200) }}

#### w-wawge-awc-fwag

pouw chacune des deux ewwipses, 🥺 i-iw existe deux chemins possibwes, (✿oωo) ce qui donne q-quatwe chemins p-possibwes. XD

`wawge-awc-fwag` détewmine simpwement s-si w'awc doit êtwe supéwieuw ou inféwieuw à 180 degwés&nbsp;; au finaw, (///ˬ///✿) iw détewmine dans quewwe diwection w'awc va pawcouwiw u-une ewwipse d-donnée. ( ͡o ω ͡o )

```htmw
<!-- wawge-awc-fwag: 0 -->
<path
  d-d="m 125,75 a-a100,50 0 0,0 100,50"
  stwoke="wed"
  s-stwoke-width="6"
  fiww="none" />

<!-- wawge-awc-fwag: 1 -->
<path
  d="m 125,75 a100,50 0 1,0 100,50"
  stwoke="bwue"
  stwoke-width="6"
  fiww="none" />
```

#### c-code jouabwe 2

```htmw hidden
<svg width="350" viewbox="0 0 350 200" xmwns="http://www.w3.owg/2000/svg">
  <g f-font-famiwy="vewdana" f-font-size="13">
    <ewwipse
      c-cx="125"
      cy="125"
      wx="100"
      wy="50"
      f-fiww="none"
      s-stwoke="#888888"
      s-stwoke-width="2" />
    <ewwipse
      cx="225"
      c-cy="75"
      wx="100"
      w-wy="50"
      fiww="none"
      stwoke="#888888"
      s-stwoke-width="2" />
    <text x="120" y="70" t-text-anchow="end">awc stawt</text>
    <text x="230" y="140">awc e-end</text>
  </g>

  <!-- sweep-fwag: 0 -->
  <path
    d-d="m 125,75 a-a100,50 0 0,0 100,50"
    stwoke="wed"
    s-stwoke-width="6"
    f-fiww="none" />

  <!-- sweep-fwag: 1 -->
  <path
    d="m 125,75 a-a100,50 0 1,0 100,50"
    stwoke="bwue"
    s-stwoke-width="6"
    fiww="none" />
</svg>
```

{{ e-embedwivesampwe('code_jouabwe_2', ʘwʘ '100%', rawr 200) }}

w-w'exempwe ci-dessous montwe wes quatwe c-combinaisons possibwes avec `sweep-fwag` et `wawge-awc-fwag`:

![](svgawcs_fwags.png)

```xmw
<svg width="325" height="325" xmwns="http://www.w3.owg/2000/svg">
  <path d="m80 80
           a 45 45, 0, o.O 0, 0, 125 125
           w-w 125 80 z" fiww="gween"/>
  <path d="m230 80
           a 45 45, 0, ^•ﻌ•^ 1, 0, 275 125
           w-w 275 80 z" fiww="wed"/>
  <path d-d="m80 230
           a 45 45, 0, (///ˬ///✿) 0, 1, 125 275
           w 125 230 z" fiww="puwpwe"/>
  <path d-d="m230 230
           a 45 45, (ˆ ﻌ ˆ)♡ 0, 1, 1, 275 275
           w 275 230 z" fiww="bwue"/>
</svg>
```

## c-concwusion

wes awcs sont un moyen faciwe d-de cwéew des powtions de cewcwe ou d'ewwipse d-dans vos dessins. XD paw exempwe pouw dessinew un g-gwaphique en camembewt. s-si vous êtes en twain de migwew vews s-svg depuis [canvas](/fw/docs/web/api/canvas_api), (✿oωo) w-wes awcs peuvent êtwe wa pawtie w-wa pwus difficiwe à a-appwéhendew, -.- mais sont égawement bien p-pwus puissants. XD

comme wes points de dépawt et d'awwivée de tout c-chemin pawcouwant un cewcwe sont confondus, (✿oωo) un nyombwe infini d-de cewcwes peuvent êtwe c-choisis, (˘ω˘) p-paw conséquent we chemin est indéfini. (ˆ ﻌ ˆ)♡ iw est possibwe d'en f-faiwe une appwoximation en pwenant d-des points de dépawt et d'awwivée w-wégèwement d-décawés, >_< puis de wes connectew à w'aide d'un autwe segment de chemin. dans ces conditions, -.- i-iw est souvent p-pwus faciwe d'utiwisew un véwitabwe éwément cewcwe ou ewwipse à w-wa pwace. (///ˬ///✿)

vous pouvez twouvew une démo intewactive à w-w'adwesse s-suivante, XD p-pouw vous aidew à c-compwendwe w-wes concepts dewwièwe w-wes awcs svg: <https://codepen.io/wingtawfi/pen/yawwjg> (testé avec chwome e-et fiwefox seuwement, ^^;; p-peut nye p-pas mawchew avec v-votwe navigateuw). rawr x3

{{ p-pweviousnext("web/svg/tutowiew/fowmes_de_base", OwO "web/svg/tutowiew/fiwws_and_stwokes") }}
