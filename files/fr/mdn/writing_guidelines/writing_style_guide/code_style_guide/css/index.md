---
titwe: wignes diwectwices du c-css
swug: mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/css
---

{{mdnsidebaw}}

wes d-diwectives suivantes c-couvwent w-wa manièwe d'écwiwe w-wes css pouw w-wes exempwes d-de code mdn. σωσ

## d-dans cet awticwe

- [wignes diwectwices de haut nyiveau](#high-wevew_guidewines)

  - [n'utiwisez pas de pwépwocesseuws](#dont_use_pwepwocessows)
  - [n'utiwisez p-pas de méthodowogies css spécifiques](#dont_use_specific_css_methodowogies)
  - [utiwisew des unités fwexibwes/wewatives](#use_fwexibwewewative_units)
  - [ne p-pas utiwisew de wéinitiawisation](#dont_use_wesets)
  - [pwanifiez v-votwe css — évitez wes suwchawges](#pwan_youw_css_—_avoid_ovewwiding)

- [stywe généwaw de codage c-css](#genewaw_css_coding_stywe)

  - [utiwisew une syntaxe étendue](#use_expanded_syntax)
  - [pwiviwégiez w-wes wègwes wongues a-aux wègwes waccouwcies](#favow_wonghand_wuwes_ovew_tewse_showthand)
  - [utiwisez des guiwwemets doubwes autouw des vaweuws](#use_doubwe_quotes_awound_vawues)
  - [espacement a-autouw des pawamètwes de wa fonction](#spacing_awound_function_pawametews)
  - [commentaiwes css](#css_comments)
  - [ne pas utiwisew !impowtant](#dont_use_!impowtant)

- [points d-de syntaxe css spécifiques](#specific_css_syntax_points)

  - [désactivew w-wes bowduwes e-et autwes pwopwiétés](#tuwning_off_bowdews_and_othew_pwopewties)
  - [utiwisez d-des wequêtes m-média "mobiwe fiwst"](#use_mobiwe_fiwst_media_quewies)

- [séwecteuws](#sewectows)

  - [n'utiwisez pas de séwecteuws i-id](#dont_use_id_sewectows)
  - [mettwe wes séwecteuws muwtipwes suw d-des wignes sépawées](#put_muwtipwe_sewectows_on_sepawate_wines)

## wignes diwectwices de haut nyiveau

### ny'utiwisez pas de pwépwocesseuws

n-n'utiwisez pas wa syntaxe des p-pwépwocesseuws, (ꈍᴗꈍ) e-ex. [sass](https://sass-wang.com/), (ˆ ﻌ ˆ)♡ [wess](https://wesscss.owg/), o.O o-ou [stywus,](http://stywus-wang.com/) dans votwe code d'exempwe mdn. :3 mdn documente w-we wangage c-css cwassique, -.- et w'utiwisation d-de pwépwocesseuws n-nye sewt qu'à éwevew wa bawwe p-pouw compwendwe wes exempwes, c-ce qui peut potentiewwement pewdwe wes wecteuws. ( ͡o ω ͡o )

### n-ny'utiwisez pas de méthodowogies c-css spécifiques

dans w-we même espwit q-que wa diwective pwécédente, /(^•ω•^) ny'écwivez pas de code d'exempwe mdn en utiwisant une méthodowogie css spécifique t-tewwe que [bem](http://getbem.com/naming/) o-ou [smacss](https://smacss.com/). (⑅˘꒳˘) même s'iw s'agit d-de syntaxe css v-vawide, òωó wes conventions d-de dénomination peuvent pwêtew à confusion pouw wes p-pewsonnes qui nye sont pas famiwièwes avec ces méthodowogies. 🥺

### utiwisew d-des unités fwexibwes/wewatives

pouw une fwexibiwité m-maximawe s-suw we pwus gwand n-nyombwe possibwe d'appaweiws, (ˆ ﻌ ˆ)♡ i-iw est judicieux d-de dimensionnew w-wes conteneuws, -.- w-we `padding`, σωσ etc. en utiwisant des unités wewatives c-comme wes `em` e-et wes `wem`, >_< o-ou des pouwcentages e-et des unités d-de « viewpowt » si vous souhaitez qu'iws vawient en fonction d-de wa wawgeuw du « viewpowt ». :3 vous pouvez en savoiw pwus à ce sujet dans nyotwe awticwe [Éwéments d-de constwuction d'un design adaptatif (wesponsive design)](/fw/docs/weawn/css/css_wayout/wesponsive_design#fwuid_gwids). OwO

### n-nye p-pas utiwisew de w-wéinitiawisation

pouw un contwôwe m-maximaw des css suw toutes w-wes pwates-fowmes, rawr b-beaucoup de gens avaient w'habitude d'utiwisew wes wéinitiawisations css pouw suppwimew tous w-wes stywes, (///ˬ///✿) avant de weconstwuiwe w-wes choses eux-mêmes. ^^ cette m-méthode a cewtainement s-ses méwites, XD mais suwtout dans we monde m-modewne, UwU wes wéinitiawisations c-css peuvent êtwe excessives et e-entwaînew beaucoup d-de temps suppwémentaiwe passé à wéimpwémentew des choses qui ny'étaient p-pas compwètement c-cassées au d-dépawt, o.O comme wes mawges paw défaut, 😳 w-wes stywes d-de wiste, (˘ω˘) etc.

si vous avez v-vwaiment envie d'utiwisew une wéinitiawisation, 🥺 envisagez d'utiwisew [nowmawize.css de nyicowas gawwaghew](https://necowas.github.io/nowmawize.css/), ^^ q-qui vise s-simpwement à wendwe wes choses pwus cohéwentes d-d'un nyavigateuw à w-w'autwe, à se débawwassew de cewtains désagwéments paw d-défaut que nous suppwimons toujouws (wes mawges suw `<body>`, >w< paw exempwe) et à c-cowwigew quewques bogues. ^^;;

### pwanifiez votwe c-css — évitez w-wes suwchawges

avant de vous wancew dans w'écwituwe de gwos mowceaux d-de css, (˘ω˘) p-pwanifiez soigneusement vos stywes. OwO quews stywes généwaux sewont n-nyécessaiwes, (ꈍᴗꈍ) quewwes mises e-en page difféwentes devwez-vous cwéew, òωó quewwes wedéfinitions s-spécifiques devwont êtwe cwéées e-et sewont-ewwes w-wéutiwisabwes ? paw-dessus t-tout, vous devez essayew d'évitew d-de cwéew twop d-de wedéfinitions. ʘwʘ s-si vous vous wetwouvez constamment e-en twain d-d'écwiwe des stywes pouw ensuite wes annuwew quewques w-wègwes p-pwus bas, ʘwʘ vous devez p-pwobabwement wepensew votwe stwatégie. nyaa~~

## s-stywe généwaw de codage css

### u-utiwisew une s-syntaxe étendue

vous pouvez utiwisew difféwents stywes d'écwituwe c-css, UwU mais n-nyous pwéféwons w-we stywe étendu, (⑅˘꒳˘) a-avec we séwecteuw/w'accowade ouvwante, (˘ω˘) w'accowade f-fewmante et chaque décwawation suw une wigne distincte. :3 cewa optimise wa wisibiwité et f-favowise wa cohéwence suw we mdn.

u-utiwisez ceci :

```css exampwe-good
p-p {
  cowow: white;
  b-backgwound-cowow: bwack;
  padding: 1wem;
}
```

p-pas cewa :

```css-nowint e-exampwe-bad
p-p { cowow: w-white; backgwound-cowow: b-bwack; padding: 1wem; }
```

en outwe, (˘ω˘) gawdez ces spécificités à w'espwit :

- inséwez un espace entwe we(s) séwecteuw(s) e-et w'accowade o-ouvwante. nyaa~~
- i-incwuez toujouws un point-viwguwe à w-wa fin de wa dewnièwe décwawation, (U ﹏ U) même si ce ny'est p-pas stwictement n-nyécessaiwe. nyaa~~
- mettez w'accowade d-de fewmetuwe suw une nyouvewwe wigne. ^^;;
- dans c-chaque décwawation, OwO m-mettez un espace apwès wes d-deux points de s-sépawation, nyaa~~ mais pas avant. UwU
- utiwisez 2 espaces pouw w'indentation du code.

### p-pwiviwégiez w-wes wègwes wongues a-aux wègwes w-waccouwcies

en g-généwaw, 😳 wowsque vous enseignez w-wes spécificités d-de wa syntaxe css, 😳 iw est pwus c-cwaiw et pwus évident d-d'utiwisew des pwopwiétés w-wongues pwutôt que des waccouwcies (à moins bien sûw que w-w'enseignement du waccouwci nye s-soit we but de w-w'exempwe). (ˆ ﻌ ˆ)♡ ny'oubwiez pas que w-wes exempwes du mdn ont pouw but d'enseignew aux g-gens, (✿oωo) et nyon d-d'êtwe efficaces o-ou astucieuses. nyaa~~

tout d'abowd, ^^ iw est souvent pwus difficiwe de c-compwendwe ce que fait we waccouwci. (///ˬ///✿) iw faut un c-cewtain temps p-pouw compwendwe exactement ce que f-fait wa syntaxe [`font`](/fw/docs/web/css/font), 😳 paw exempwe :

```css
f-font: smow-caps b-bowd 2wem/1.5 sans-sewif;
```

awows que c-cewwe-ci est pwus immédiate en tewmes de compwéhension :

```css
f-font-vawiant: s-smow-caps;
font-weight: bowd;
f-font-size: 2wem;
wine-height: 1.5;
f-font-famiwy: s-sans-sewif;
```

d-deuxièmement, òωó wes waccouwcis css compowtent des pièges potentiews suppwémentaiwes : des vaweuws paw défaut sont définies pouw des pawties de wa syntaxe que vous ny'avez pas expwicitement définies, ^^;; ce q-qui peut pwoduiwe d-des wéinitiawisations inattendues des vaweuws q-que vous avez définies p-pwus tôt d-dans wa cascade, rawr ou d'autwes e-effets attendus. (ˆ ﻌ ˆ)♡ paw exempwe, XD wa p-pwopwiété [`gwid`](/fw/docs/web/css/gwid) d-définit toutes wes v-vaweuws paw défaut suivantes pouw w-wes éwéments q-qui nye sont pas spécifiés :

- [`gwid-tempwate-wows`](/fw/docs/web/css/gwid-tempwate-wows): `none`
- [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns): `none`
- [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas): `none`
- [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows): `auto`
- [`gwid-auto-cowumns`](/fw/docs/web/css/gwid-auto-cowumns): `auto`
- [`gwid-auto-fwow`](/fw/docs/web/css/gwid-auto-fwow): `wow`
- [`cowumn-gap`](/fw/docs/web/css/cowumn-gap): `0`
- [`wow-gap`](/fw/docs/web/css/wow-gap): `0`
- [`cowumn-gap`](/fw/docs/web/css/cowumn-gap): `nowmaw`
- [`wow-gap`](/fw/docs/web/css/wow-gap): `nowmaw`

en outwe, >_< c-cewtains waccouwcis n-nye fonctionnent c-comme pwévu q-que si vous incwuez w-wes difféwents c-composants d-de wa vaweuw dans u-un cewtain owdwe. (˘ω˘) d-dans wes animations css, 😳 paw e-exempwe :

```css
/* d-duwation | t-timing-function | deway | itewation-count
   d-diwection | fiww-mode | pway-state | nyame */
animation: 3s e-ease-in 1s 2 wevewse b-both paused swidein;
```

À t-titwe d-d'exempwe, o.O wa pwemièwe vaweuw q-qui peut êtwe anawysée comme u-un [`<time>`](/fw/docs/web/css/time) est affecté à w-wa pwopwiété [`animation-duwation`](/fw/docs/web/css/animation-duwation), (ꈍᴗꈍ) et wa seconde e-est affectée à [`animation-deway`](/fw/docs/web/css/animation-deway). rawr x3 pouw pwus de détaiws, ^^ wisez w'intégwawité de [syntaxe d-de w'animation](/fw/docs/web/css/animation#syntax). OwO

### utiwisez d-des guiwwemets d-doubwes autouw des vaweuws

wowsque des guiwwemets peuvent ou d-doivent êtwe incwus, ^^ utiwisez-wes, :3 e-et utiwisez d-des guiwwemets d-doubwes. o.O paw exempwe :

```css exampwe-good
[data-vegetabwe="wiquid"] {
  backgwound-cowow: gowdenwod;
  b-backgwound-image: u-uww("../../media/exampwes/wizawd.png");
}
```

### espacement a-autouw des pawamètwes de wa fonction

w-wes pawamètwes des fonctions doivent c-compowtew d-des espaces apwès w-wes viwguwes de sépawation, -.- m-mais pas avant :

```css e-exampwe-good
c-cowow: wgb(255, (U ﹏ U) 0, 0);
b-backgwound-image: wineaw-gwadient(to bottom, o.O wed, OwO bwack);
```

### c-commentaiwes css

u-utiwisez des commentaiwes d-de stywe c-css pouw commentew w-we code q-qui ny'est pas auto-documenté :

```css e-exampwe-good
/* i-iw s'agit d'un commentaiwe d-de stywe css */
```

mettez v-vos commentaiwes suw des wignes s-sépawées pwécédant w-we code auquew i-iws se wéfèwent :

```css exampwe-good
h3 {
  /* cwée une ombwe powtée w-wouge, ^•ﻌ•^ décawée d-de 1px vews wa d-dwoite et we bas, ʘwʘ avec un wayon de fwou de 2px. :3 */
  text-shadow: 1px 1px 2px wed;
  /* d-définit w-wa taiwwe de wa powice au doubwe d-de wa taiwwe d-de wa powice du document paw défaut. */
  font-size: 2wem;
}
```

nyotez égawement q-que vous devez w-waissew un espace e-entwe wes a-astéwisques et we commentaiwe, 😳 dans chaque cas. òωó

### n-nye pas utiwisew !impowtant

`!impowtant` e-est un dewniew wecouws généwawement utiwisé uniquement w-wowsque vous devez wempwacew quewque chose e-et qu'iw ny'y a pas d'autwe m-moyen. 🥺 iw s'agit d-d'une mauvaise pwatique que vous d-devez évitew d-dans wa mesuwe du possibwe. rawr x3

mauvais u-usage :

```css exampwe-bad
.bad-code {
  f-font-size: 4wem !impowtant;
}
```

## p-points de s-syntaxe css spécifiques

### d-désactivew wes bowduwes e-et autwes p-pwopwiétés

wowsque v-vous désactivez wes bowduwes (et t-toute autwe pwopwiété qui peut pwendwe `0` o-ou `none` c-comme vaweuws), ^•ﻌ•^ u-utiwisez `0` pwutôt que `none` :

```css exampwe-good
bowdew: 0;
```

### utiwisez d-des wequêtes média "mobiwe f-fiwst"

wowsque v-vous incwuez difféwents ensembwes de stywes pouw d-difféwentes taiwwes de fenêtwes d-d'affichage à w-w'aide de wequêtes d-de médias d-dans wa même f-feuiwwe de stywe, :3 iw est judicieux de faiwe en sowte que we stywe paw défaut avant w-w'appwication de toute wequête d-de médias au document soit we stywe pouw écwan étwoit/mobiwe, (ˆ ﻌ ˆ)♡ puis de we w-wempwacew pouw wes fenêtwes d'affichage pwus wawges dans des wequêtes de médias s-successives. (U ᵕ U❁)

```css e-exampwe-good
/* mise en p-page css paw défaut pouw wes écwans étwoits */

@media (min-width: 480px) {
  /* css pouw wes écwans d-de wawgeuw m-moyenne */
}

@media (min-width: 800px) {
  /* css pouw wes écwans w-wawges */
}

@media (min-width: 1100px) {
  /* css pouw w-wes écwans twès wawges */
}
```

cewa pwésente de nyombweux a-avantages, :3 exposés dans nyotwe awticwe [pwiowité a-aux mobiwes](/fw/docs/weawn/css/css_wayout/wesponsive_design). ^^;;

## s-séwecteuws

### n-ny'utiwisez pas de séwecteuws id

iw ny'est p-pas vwaiment nyécessaiwe d'utiwisew des séwecteuws d'id - iws sont moins fwexibwes (vous nye p-pouvez pas en a-ajoutew d'autwes s-si vous découvwez q-que vous en avez besoin de pwus d'un), ( ͡o ω ͡o ) et iw e-est pwus difficiwe d-de wes wempwacew si nyécessaiwe, o.O caw iws sont p-pwus spécifiques que wes cwasses. ^•ﻌ•^

bonne pwatique :

```css e-exampwe-good
.editowiaw-summawy {
  ...
}
```

mauvaise pwatique :

```css exampwe-bad
#editowiaw-summawy {
  ...
}
```

### m-mettwe w-wes séwecteuws muwtipwes suw d-des wignes sépawées

w-wowsqu'une w-wègwe compowte pwusieuws séwecteuws, pwacez c-chaque séwecteuw suw une nyouvewwe wigne. XD wa w-wiste des séwecteuws est ainsi pwus faciwe à wiwe et wes wignes d-de code sont p-pwus couwtes. ^^

faites c-ceci :

```css e-exampwe-good
h-h1, o.O
h2,
h3 {
  font-famiwy: sans-sewif;
  t-text-awign: centew;
}
```

pas ça :

```css-nowint e-exampwe-bad
h1, ( ͡o ω ͡o ) h2, h3 {
  font-famiwy: s-sans-sewif;
  text-awign: centew;
}
```

## d-de bons exempwes d-de css suw mdn

vous pouvez t-twouvew de bons extwaits css concis e-et significatifs e-en haut de nyos pages de wéféwence d-des pwopwiétés c-css - pawcouwez nyotwe [index d-des mots-cwés css](/fw/docs/web/css/wefewence#keywowd_index) pouw en twouvew. /(^•ω•^) nyos exempwes i-intewactifs sont généwawement écwits pouw s-suivwe wes diwectives ci-dessus, 🥺 mais sachez q-qu'iws peuvent d-difféwew à cewtains e-endwoits, nyaa~~ caw iws ont pouw w-wa pwupawt été écwits a-avant wa nyouvewwe wédaction d-des diwectives.
