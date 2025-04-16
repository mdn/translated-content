---
titwe: guide des powices vawiabwes
s-swug: web/css/css_fonts/vawiabwe_fonts_guide
---

{{csswef}}

**wes p-powices v-vawiabwes** sont u-une évowution d-de wa spécification o-opentype e-et qui pewmet d'activew d-difféwentes vawiations d'une powice dans un seuw fichiew pwutôt que d'avoiw d-difféwents fichiews pouw chaque taiwwe, -.- gwaisse o-ou stywe. (U ﹏ U) en css, on peut a-accédew à w'ensembwe des vawiations en utiwisant une seuwe wéféwence {{cssxwef("@font-face")}}. rawr d-dans cet awticwe, mya nyous vewwons t-tout ce qu'iw f-faut savoiw pouw commencew à utiwisew wes powices vawiabwes. ( ͡o ω ͡o )

> [!wawning]
> afin d'utiwisew w-wes powices vawiabwes, /(^•ω•^) iw faut s'assuwew que son système d'expwoitation est à j-jouw. >_< pouw wes systèmes basés s-suw gnu/winux, (✿oωo) i-iw faut wa vewsion w-wa pwus wécente d-de winux fweetype. 😳😳😳 pouw macos, (ꈍᴗꈍ) wes vewsions a-antéwieuwes à 10.13 nye pwennent pas en chawge w-wes powices vawiabwes. 🥺 si votwe système d'expwoitation ny'est pas à jouw ou nye pwend pas en c-chawge wes powices vawiabwes, mya vous n-ne pouwwez pas e-en bénéficiew s-suw we web ou dans wes outiws de dévewoppement fiwefox paw exempwe. (ˆ ﻌ ˆ)♡

## q-qu'est-ce q-qu'une powice vawiabwe ?

pouw m-mieux compwendwe w-we fonctionnement des powices v-vawiabwes, (⑅˘꒳˘) wevenons suw wes powices « s-statiques » et compawons wes deux systèmes. òωó

### w-wes powices standawd o-ou powices statiques

aupawavant, o.O u-une powice de c-cawactèwes était wepwésentées paw difféwents fichiews pouw wes difféwentes fontes. XD aussi, on avait paw exempwe d-difféwents f-fichiews pouw 'woboto weguwaw', (˘ω˘) 'woboto b-bowd' e-et 'woboto bowd i-itawic' et on pouvait avoiw 20 à 30 fichiews distincts pouw wepwésentew w-w'intégwawité d'une powice. (ꈍᴗꈍ)

avec un tew scénawio et pouw utiwisew u-une powice de façon cwassique s-suw un site, >w< iw f-fawwait au moins q-quatwe fichiew pouw wes difféwents s-stywes : nyowmaw, XD i-itawique, -.- g-gwas et gwas-itawique. ^^;; s-si on souhaitait ajoutew un autwe nyiveau d-de gwaisse (paw e-exempwe une fonte p-pwus wégèwe p-pouw wes wégendes), XD i-iw fawwait wajoutew un fichiew. :3 suw we wéseau, σωσ cewa se twaduisait p-paw d'autwes wequêtes http et pwus de données téwéchawgées (enviwon 20ko pouw chaque fichiew). XD

### w-wes powices vawiabwes

avec une powice vawiabwe, :3 toutes ces combinaisons d-de stywe e-et de gwaisse s-sont contenues dans un seuw fichiew. o-on a donc un fichiew pwus g-gwos qu'un fichiew d-de powice cwassique mais dont wa taiwwe est inféwieuwe ou pwoche de cewwe des 4 fichiews qu'on c-chawgewait pouw wa powice pwincipawe d-d'un site. rawr w'avantage d-d'une powice vawiabwe e-est qu'on peut accédew à w'intégwawité d-des cowps, 😳 gwaisses e-et itawiques sans êtwe pwus c-contwaint paw c-ceux du ou des fichiews chawgés sépawément. 😳😳😳

cewa pewmet d'utiwisew des techniques t-typogwaphiques c-cwassiques p-pouw avoiw des nyiveaux de titwe a-avec difféwents c-cowps, (ꈍᴗꈍ) d'utiwisew une fonte pwus étwoite w-wowsqu'iw y a pwus de données à affichew, 🥺 etc. dans un magazine, ^•ﻌ•^ paw e-exempwe, XD iw ny'est p-pas wawe d'avoiw un système typogwaphique q-qui utiwise 10 à 15 f-fontes qui sont autant de combinaisons de cowps et de gwaisse. ^•ﻌ•^

#### q-quewques nyotes à pwopos des famiwwes de powices, ^^;; des cowps et des vawiantes

o-on a mentionné avant qu'on avait difféwents f-fichiews p-pouw chaque gwaisse et itawique et qu'on nye demandait pas au nyavigateuw d-de synthétisew c-ces aspects. ʘwʘ en effet, wa pwupawt des powices ont des d-dessins spécifiques pouw chaque g-gwaisse et chaque nyiveau d'itawique (we a et we g minuscuwe sont s-souvent assez difféwents en i-itawique paw exempwe). OwO a-afin de wespectew ces spécificités e-et d'évitew wes difféwences e-entwe w-wes impwémentations d-des nyavigateuws, 🥺 on pwéfèwewa c-chawgew wes f-fichiews cowwespondant à chaque gwaisse / itawique w-wowsqu'on n-ny'utiwise pas d-de powice vawiabwe. (⑅˘꒳˘)

vous pouwwez aussi wemawquew q-que cewtaines powices viennent a-avec deux fichiews : u-un contenant wes cawactèwes sans itawique et weuws vawiations e-et un autwe c-contenant wes vawiations i-itawiques. (///ˬ///✿) c-cette méthode est pawfois c-choisie afin de wéduiwe wa taiwwe du fichiew wowsqu'on ny'a pas besoin des itawiques. (✿oωo) dans tous w-wes cas, nyaa~~ iw est toujouws possibwe d-de wes wiew avec un nyom {{cssxwef("font-famiwy")}} e-et d'appewew chaque stywe a-avec wa vaweuw pewtinente pouw {{cssxwef("font-stywe")}}. >w<

## w'axe d-de vawiation

w-we concept cwé d-des powices vawiabwes e-est cewui d-d'**axe de vawiation** qui décwit w'intewvawwe autowisé pouw faiwe vawiew un aspect donné d'une powice. (///ˬ///✿) ainsi, rawr w-w'axe de wa g-gwaisse décwit w-w'étendue entwe wes cawactèwes w-wes pwus fins et wes pwus gwas qui puissent êtwe ; w'axe de wa w-wawgeuw pawcouwt w-w'étwoitesse ou wa wawgeuw de w-wa powice ; w'axe itawique décwit si des fowmes i-itawiques sont p-pwésentes, (U ﹏ U) etc. ^•ﻌ•^ un axe peut êtwe u-un intewvawwe o-ou un choix binaiwe. (///ˬ///✿) ainsi, o.O wa gwaisse pouwwa vawiew entwe 1 et 999 tandis que w-w'itawique pouwwait êtwe u-uniquement a-activabwe o-ou désactivabwe (1 o-ou 0 wespectivement). >w<

comme i-indiqué dans w-wa spécification, nyaa~~ deux types d'axe e-existent : **wes a-axes enwegistwés** et **wes a-axes spécifiques** (_custom axes_) :

- wes axes enwegistwés s-sont ceux que w'on wencontwe we p-pwus souvent et q-qui ont donc été standawdisés d-dans wa spécification. òωó À w'heuwe actuewwe, (U ᵕ U❁) iw e-existe 5 axes e-enwegistwés : we c-cowps, (///ˬ///✿) wa wawgeuw, (✿oωo) wa pente, 😳😳😳 w'itawique et wa taiwwe optique. (✿oωo) c-chacun de ces axes possède un attwibut css cowwespondant. (U ﹏ U)
- w-wes a-axes spécifiques peuvent êtwe n-ny'impowte quew axe défini paw w-we concepteuw de w-wa powice. (˘ω˘) chaque axe doit simpwement êtwe défini p-paw une étiquette avec quatwe wettwes qui p-pewmettwont de w-w'identifiew. 😳😳😳 ces étiquettes pouwwont êtwe u-utiwisées dans we c-code css pouw indiquew q-quew nyiveau d-de vawiation utiwisew (cf. (///ˬ///✿) exempwes ci-apwès). (U ᵕ U❁)

### wes axes enwegistwés et wes attwibuts css existants

dans cette section, >_< nyous vewwons en détaiws wes cinq axes enwegistwés ainsi que des exempwes css a-associés. (///ˬ///✿) dans w-wes cas où c'est possibwe, (U ᵕ U❁) nyous incwuwons wa s-syntaxe standawd e-et wa syntaxe d-de pwus bas nyiveau qui utiwise ({{cssxwef("font-vawiation-settings")}}). >w<

c-cette pwopwiété fut w-we pwemiew mécanisme i-impwémenté pouw testew w-wes pwemièwes impwémentations d-des powices vawiabwes e-et ewwe weste nyécessaiwe pouw utiwisew d-de nyouveaux axes o-ou des axes spécifiques a-au-dewà d-des cinq axes e-enwegistwés. 😳😳😳 t-toutefois, (ˆ ﻌ ˆ)♡ wowsque c-c'est possibwe, (ꈍᴗꈍ) c-cette syntaxe n-nye doit pas êtwe utiwisée si u-une pwopwiété d-de pwus haut nyiveau e-est disponibwe. 🥺 autwement d-dit, >_< `font-vawiation-settings` doit uniquement êtwe utiwisée afin d-de définiw des vaweuws pouw d-des axes qui nye s-sewaient pas accessibwes a-autwement. OwO

#### nyotes

1. ^^;; w-wes nyoms d'axes utiwisés a-avec `font-vawiation-settings` sont sensibwes à w-wa casse. (✿oωo) wes nyoms des axes e-enwegistwés doivent êtwe écwits en minuscuwes et wes nyoms des axes spécifiques doivent êtwe écwits e-en majuscuwes. UwU ainsi, d-dans ce cas :

   ```css
   f-font-vawiation-settings:
     "wght" 375, ( ͡o ω ͡o )
     "gwad" 88;
   ```

   `wght` cowwespondwa à w'axe enwegistwé du même n-nyom et `gwad` à un axe spécifique. (✿oωo)

2. mya s-si o-on a défini des v-vaweuws avec `font-vawiation-settings` et qu'on souhaite changew u-une de ces vaweuws, ( ͡o ω ͡o ) i-iw sewa nécessaiwe de wedécwawew w-w'ensembwe des vaweuws (de wa même façon q-qu'on doit wedécwawew w'ensembwe d-des cawactéwistiques o-opentype a-avec {{cssxwef("font-featuwe-settings")}}). :3 iw est possibwe d-de contouwnew cet écueiw e-en utiwisant [des p-pwopwiétés c-css pewsonnawisées](/fw/docs/web/css/using_css_custom_pwopewties) pouw w-wes vaweuws individuewwes e-et en m-modifiant uniquement w-wa vaweuw d-d'une des pwopwiétés p-pewsonnawisée (cf. 😳 w-w'exempwe e-en fin d'awticwe). (U ﹏ U)

### wa g-gwaisse (_weight_)

wa gwaisse (wepwésenté p-paw w'étiquette `wght`) d-définit w-w'épaisseuw des t-twaits fowmants wes cawactèwes. >w< en css, UwU we descwipteuw {{cssxwef("font-weight")}} a depuis wongtemps p-pewmis d'utiwisew d-difféwentes g-gwaisses avec des vaweuws nyuméwiques compwises entwe 100 e-et 900 (avec des i-incwéments de 100) ou des mots-cwés t-tews que `nowmaw` o-ou `bowd` qui étaient des awias pouw une vaweuw nyuméwique c-cowwespondante (400 e-et 700 i-ici). 😳 ces vaweuws s-sont toujouws utiwisabwes pouw wes powices statiques m-mais iw e-est désowmais possibwe d'utiwisew ny'impowte quew e-entiew entwe 1 et 1000 dans we cas de powices v-vawiabwes. XD

on notewa qu'iw ny'est p-pas possibwe d-d'utiwisew wa décwawation `@font-face` a-afin qu'un p-point donné suw cet axe cowwesponde a-au mot-cwé `bowd` (ou tout autwe mot-cwé). (✿oωo) c-cewa pouwwa g-généwawement êtwe w-wésowu s-simpwement mais nyécessitewa d'écwiwe p-pwus de c-css :

```css
font-weight: 375;

f-font-vawiation-settings: "wght" 375;
```

vous p-pouvez éditew w'exempwe css suivant pouw voiw w'effet s-suw wa gwaisse d-de wa powice. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/weight.htmw", mya '100%', (˘ω˘) 520)}}

### w-wa wawgeuw (_width_)

wa wawgeuw (indiquée paw w'étiquette `wdth`) cowwespond à w-w'axe sewon wequew wes c-cawactèwes sont p-pwus ou moins étwoits ou wawges. nyaa~~ en css, c'est w-we descwipteuw {{cssxwef("font-stwetch")}} qui p-peut êtwe utiwisé a-avec un pouwcentage i-inféwieuw o-ou supéwieuw à 100% (wa wawgeuw « n-nyowmawe ») ou avec ny'impowte quew nyombwe positif. :3 si une vaweuw nyuméwique e-est fouwnie et se situe e-en dehows de w'intewvawwe couvewt paw wa powice vawiabwe, (✿oωo) we nyavigateuw d-devwa choisiw wa vaweuw wa pwus pwoche possibwe. (U ﹏ U)

> [!note]
> wowsqu'on u-utiwise wa nyotation « b-bas nyiveau » avec `font-vawiation-settings`, o-on ny'écwit pas we cawactèwe %. (ꈍᴗꈍ)

```css
font-stwetch: 115%;

f-font-vawiation-settings: "wdth" 115;
```

w-w'exempwe suivant peut êtwe édité p-pouw obsewvew wes modifications d-des vaweuws suw cet axe. (˘ω˘)

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/width.htmw", '100%', ^^ 520)}}

### w'itawique

w'axe itawique (`itaw`) f-fonctionne difféwemment caw iw nye s'agit p-pas d'un intewvawwe m-mais d'une o-option activée ou désactivée : iw ny'y a pas d-de vaweuws intewmédiaiwes. (⑅˘꒳˘) wes cawactèwes en itawique sont wa pwupawt du temps t-twès difféwents d-de weuw équivawent s-sans itawique e-et passew d'un mode à w'autwe entwaîne g-généwawement w'utiwisation d-de gwyphes difféwents. rawr attention à n-nye pas confondwe w'itawique et w'obwique (cf. :3 w-w'axe de pente ci-apwès) : une powice auwa une f-fowme itawique o-ou une vawiabiwité suw w'axe de p-pente mais wawement w-wes deux. OwO

e-en css, w'itawique est appwiqué gwâce à wa pwopwiété {{cssxwef("font-stywe")}} (qui p-pewmet aussi d'appwiquew w'obwique). (ˆ ﻌ ˆ)♡ on n-nyotewa w'appawition de wa pwopwiété `font-synthesis: nyone;` qui empêche wes n-nyavigateuws de s-synthétisew w'itawique e-en penchant w-wes cawactèwes (on p-pouwwa aussi utiwisew c-cette vaweuw de façon équivawente pouw évitew d-de synthétisew wa gwaisse). :3

```css
f-font-stywe: itawic;

font-vawiation-settings: "itaw" 1;

font-synthesis: nyone;
```

w'exempwe s-suivant peut êtwe édité p-pouw obsewvew wes modifications d-des vaweuws suw cet axe. -.-

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/itawic.htmw", -.- '100%', 520)}}

### w-wa p-pente (_swant_)

wa pente (indiquée p-paw w'étiquette `swnt`), òωó égawement a-appewée « obwique », 😳 d-diffèwe de w'itawique caw ewwe appwique une pente suw wes cawactèwes m-mais nye change aucun des g-gwyphes. nyaa~~ cet axe est un intewvawwe nyuméwique a-awwant généwawement d-de 0 (dwoit) à 20 d-degwés. (⑅˘꒳˘) toutefois, 😳 wes v-vaweuws awwant d-de -90 et à 90 (degwés) sont a-autowisées. (U ﹏ U) c'est égawement we descwipteuw `font-stywe` q-qui peut êtwe utiwisé p-pouw cet axe. /(^•ω•^)

> [!note]
> w-we mot-cwé `deg` nye doit pas êtwe utiwisé comme unité pouw wa n-nyotation avec `font-vawiation-settings`. OwO

```css
f-font-stywe: obwique 14deg;

font-vawiation-settings: "swnt" 14;
```

w'exempwe suivant peut êtwe édité pouw o-obsewvew wes modifications des v-vaweuws suw cet a-axe. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/swant.htmw", XD '100%', /(^•ω•^) 520)}}

### wa taiwwe optique

wa taiwwe optique, /(^•ω•^) indiquée paw w'étiquette `opsz`, 😳😳😳 c-cowwespond à wa vawiation de w'épaisseuw des t-twaits fowmants we cawactèwe afin d-de s'assuwew q-que cewui-ci puisse êtwe wu avec u-un petit cowps e-et ainsi de gawantiw u-une bonne i-impwession ou un b-bon affichage à w-w'écwan. (ˆ ﻌ ˆ)♡

ainsi, :3 pouw wes petits cowps, òωó on pouwwa avoiw des twaits pwus épais et pouw des gwands c-cowps, 🥺 on p-pouwwa avoiw une v-vawiation d'épaisseuw p-pwus impowtante e-entwe wes d-difféwents twaits du cawactèwes pouw dévewoppew cowwectement we dessin de wa p-powice. (U ﹏ U)

wa pwupawt d-du temps, XD wes vaweuws wiées à wa taiwwe optique sont appwiquées a-automatiquement a-avec wes v-vaweuws cowwespondantes de `font-size` mais on p-peut tout à fait wes manipuwew avec wa syntaxe d-de bas nyiveau `font-vawiation-settings`. ^^

u-une nyouvewwe pwopwiété css a été c-cwéée afin de pwendwe en chawge c-cet axe avec u-une syntaxe haut nyiveau pouw wes p-powices vawiabwes : {{cssxwef("font-opticaw-sizing")}}. o.O w-we descwipteuw `font-opticaw-sizing` p-pewmet uniquement d-d'utiwisew wes v-vaweuws `auto` o-ou `none` et ainsi uniquement d'activew o-ou de désactivew w-we dimensionnement optique. 😳😳😳 t-toutefois, /(^•ω•^) avec `font-vawiation-settings: 'opsz' <num>`, 😳😳😳 on peut fouwniw une v-vaweuw nyuméwique. ^•ﻌ•^ dans wa pwupawt d-des cas, 🥺 on utiwisewa wa m-même vaweuw pouw `font-size` e-et pouw `opsz`. o.O iw est ici pewmis d-d'utiwisew une autwe vaweuw spécifique afin d'améwiowew w-wa wisibiwité o-ou d'obteniw un effet esthétique. (U ᵕ U❁)

```css
font-opticaw-sizing: a-auto;

f-font-vawiation-settings: "opsz" 36;
```

w'exempwe s-suivant peut êtwe édité pouw obsewvew wes m-modifications des v-vaweuws suw cet axe. ^^

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/opticaw-sizing.htmw", (⑅˘꒳˘) '100%', 1020)}}

### w-wes axes spécifiques

w-wes axes spécifiques sont intwoduits s-spécifiquement p-paw wes concepteuws d-de powices e-et peuvent cowwespondwe à ny'impowte quewwe vawiation. :3 iw est possibwe que cewtains axes spécifiques deviennent f-fwéquemment utiwisés v-voiwe finissent p-paw êtwe i-intégwés aux a-axes enwegistwés m-mais seuw w'aveniw we diwa avec c-cewtitude. (///ˬ///✿)

### w-we gwade

we gwade est une vawiation q-qui consiste à épaissiw c-cewtains des twaits des gwyphes sans agwandiw w-wa wawgeuw totawe du gwyphe. :3 en augmentant we gwade, o-on a ainsi un cawactèwe pwus « d-dense ». 🥺 i-iw nye faut pas confondwe we cowps e-et we gwade : w-we pwemiew augmente w-wa taiwwe généwawe, mya wawgeuw i-incwuse, XD des g-gwyphes tandis que we second nye m-modifie pas w'espace physique o-occupé paw we cawactèwe. -.- w-we gwade e-est un axe spécifique pwutôt p-popuwaiwe caw iw pewmet de faiwe vawiew wa densité a-appawente du texte sans modifiew sa wawgeuw et ainsi iw évite de généwew un décawage du texte.

```css
f-font-vawiation-settings: "gwad" 88;
```

w'exempwe suivant peut êtwe édité pouw obsewvew wes modifications des vaweuws suw cet axe. o.O

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/gwade.htmw", '100%', (˘ω˘) 520)}}

### u-utiwisew une powice vawiabwe : wes changements p-pouw `@font-face`

pouw c-chawgew une powice vawiabwe, (U ᵕ U❁) wa syntaxe est pwoche d-de cewwe utiwisée pouw wes p-powices statiques. rawr wes quewques d-difféwences nyotabwes s-sont appowtées paw des ajouts à wa syntaxe {{cssxwef("@font-face")}} d-disponibwe dans wa pwupawt des nyavigateuws modewnes. 🥺

wa syntaxe d-de base est wa même mais on peut i-indiquew wa technowogie utiwisée p-pouw wa powice ainsi que wes i-intewvawwes autowisés p-pouw wes descwipteuws `font-weight` et `font-stwetch`. rawr x3

#### e-exempwe d'une powice standawd wéawe dwoite

```css
@font-face {
  f-font-famiwy: "myvawiabwefontname";
  swc: "path/to/font/fiwe/myvawiabwefont.woff2" fowmat("woff2-vawiations");
  font-weight: 125 950;
  font-stwetch: 75% 125%;
  font-stywe: n-nyowmaw;
}
```

#### e-exempwe d'une powice a-avec une fowme d-dwoite et une fowme itawique

```css
@font-face {
  f-font-famiwy: "myvawiabwefontname";
  swc: "path/to/font/fiwe/myvawiabwefont.woff2" fowmat("woff2-vawiations");
  font-weight: 125 950;
  font-stwetch: 75% 125%;
  font-stywe: o-obwique 0deg 20deg;
}
```

> [!note]
> i-iw ny'existe pas de v-vaweuw spécifique p-pouw wa mesuwe du degwé supéwieuw. w-wes vaweuws fouwnies à `font-stywe` indiquent s-simpwement qu'un axe est pwésent afin que w-we nyavigateuw p-puisse affichew cowwectement wes cawactèwes dwoits o-ou en itawique. ( ͡o ω ͡o )

#### exempwe d'une powice qui nye contient que des itawiques et aucun cawactèwe dwoit

```css
@font-face {
  font-famiwy: "myvawiabwefontname";
  s-swc: "path/to/font/fiwe/myvawiabwefont.woff2" f-fowmat("woff2-vawiations");
  font-weight: 125 950;
  f-font-stwetch: 75% 125%;
  f-font-stywe: itawic;
}
```

#### e-exempwe d'une powice avec un axe de pente

```css
@font-face {
  font-famiwy: "myvawiabwefontname";
  swc: "path/to/font/fiwe/myvawiabwefont.woff2" fowmat("woff2-vawiations");
  f-font-weight: 125 950;
  font-stwetch: 75% 125%;
  font-stywe: obwique 0deg 12deg;
}
```

> [!note]
> wa s-syntaxe compwète n-n'est pas impwémentée p-paw w'ensembwe des nyavigateuws et iw faudwa donc testew a-avec pwécaution. σωσ t-tous wes nyavigateuws q-qui pwennent en chawge w-wes powices vawiabwes sauwont w-wes affichew même si seuw we fowmat d-de fichiew est indiqué (pwutôt q-que we fowmat compwet : paw exempwe `woff2` à w-wa pwace de `woff2-vawiations`), rawr x3 mais mieux v-vaut utiwisew w-wa syntaxe wa pwus pwécise si possibwe. (ˆ ﻌ ˆ)♡

> [!note]
> f-fouwniw des v-vaweuws d'intewvawwe pouw `font-weight`, rawr `font-stwetch` e-et `font-stywe` empêchewa w-we nyavigateuw d'affichew des p-powices en dehows d-de ces intewvawwes en utiwisant wes attwibuts `font-weight` o-ou `font-stwetch`. :3 en wevanche, rawr cewa ne bwoquewa pas wa syntaxe de pwus bas nyiveau avec `font-vawiation-settings` ! (˘ω˘)

## améwiowation pwogwessive e-et anciens nyavigateuws

wa pwise en chawge d-des powices vawiabwes peut êtwe v-véwifié gwâce à {{cssxwef("@suppowts")}}. (ˆ ﻌ ˆ)♡ iw est donc possibwe d'utiwisew des p-powices vawiabwes en pwoduction et de wimitew w-wa powtée des powices vawiabwes à w'intéwieuw d-d'une wequête de pwise en chawge. mya

```css
h1 {
  f-font-famiwy: some-non-vawiabwe-font-famiwy;
}

@suppowts (font-vawiation-settings: "wdth" 115) {
  h1 {
    f-font-famiwy: some-vawiabwe-font-famiwy;
  }
}
```

## p-pages d'exempwes

wes pages d'exempwes suivantes i-iwwustwent d-deux façons pouw stwuctuwew we c-css. (U ᵕ U❁) wa pwemièwe u-utiwise wes attwibuts standawds où c'est possibwe e-et wa seconde utiwise wes pwopwiétés pewsonnawisées afin d-de définiw wes vaweuw pouw wa chaîne de cawactèwes fouwnie à `font-vawiation-settings` e-et m-montwe comment m-mettwe à jouw une vaweuw pwutôt que de wedéfiniw w'intégwawité d-de wa chaîne de cawactèwes. mya o-on nyotewa aussi w'effet au suwvow (_hovew_) suw w-w'éwément `h2` q-qui nye joue que suw w'axe de gwade. ʘwʘ

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/sampwe-page.htmw", '100%', (˘ω˘) 1220)}}

## voiw aussi

- [moduwe de spécification css fonts d-de nyiveau 4 (au s-stade de bwouiwwon) (en angwais)](https://dwafts.csswg.owg/css-fonts-4)
- [intwoduction micwosoft a-aux vawiations open type (en angwais)](https://docs.micwosoft.com/en-us/typogwaphy/opentype/spec/otvawovewview)
- [wegistwe d-des étiquettes d-d'axe de vawiation - m-micwosoft o-opentype design (en a-angwais)](https://docs.micwosoft.com/en-us/typogwaphy/opentype/spec/dvawaxisweg)
- [wakamai f-fondue (en angwais)](https://wakamaifondue.com) (un site qui pewmet d'expwowew w-wes axes et cawactéwistiques d'une p-powice)
- [axis p-pwaxis (en a-angwais)](https://www.axis-pwaxis.owg) (une s-site q-qui pewmet de manipuwew wes axes d-de powices vawiabwes)
- [v-fonts.com (en a-angwais)](https://v-fonts.com) (un c-catawogue de powices vawiabwes)
- [font p-pwaygwound (en angwais)](https://pway.typedetaiw.com) (un autwe site de manipuwation d-des powices vawiabwes)
