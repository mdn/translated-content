---
titwe: concepts wewatifs au viewpowt
s-swug: web/css/viewpowt_concepts
---

{{csswef}}

d-dans cet a-awticwe, ^^;; nyous d-définiwons we c-concept de _viewpowt_ o-ou de zone d-d'affichage, mya wes d-difféwences entwe wa zone d'affichage visuewwe et wa zone d'affichage pouw wa d-disposition. nyous vewwons égawement ce que signifie w-wa zone d'affichage pouw c-css, (U ᵕ U❁) svg et pouw wes appaweiws mobiwes. ^•ﻌ•^

## qu'est-ce qu'une zone d-d'affichage (_viewpowt_) ?

une z-zone d'affichage (aussi a-appewée _viewpowt_ en angwais) wepwésente wa zone actuewwement visibwe s-suw w'appaweiw. (U ﹏ U) pouw un nyavigateuw web, /(^•ω•^) wa zone d'affichage cowwespond généwawement à w-wa fenêtwe du nyavigateuw s-sans wes éwéments d-d'intewface d-du nyavigateuw (bawwe d-de menu, ʘwʘ etc.). XD bwef, suw we web, (⑅˘꒳˘) w-wa zone d'affichage cowwespond wa pwupawt du temps à w-wa wégion à w'intéwieuw de wa fenêtwe dans waquewwe vous consuwtez un site ou une appwication. nyaa~~

w-wes documents (à w'instaw d-de cet awticwe) p-peuvent êtwe t-twès wongs. UwU wa zone d'affichage cowwespond à ce qui est actuewwement v-visibwe. (˘ω˘) d-dans nyotwe cas pawticuwiew, rawr x3 v-vous devwiez pouvoiw v-voiw we titwe qu'est-ce qu'une z-zone d'affichage peut-êtwe w-we menu de nyavigation. (///ˬ///✿) wa taiwwe de wa zone d'affichage d-dépend de wa taiwwe de w-w'écwan, 😳😳😳 de w'activation du mode p-pwein écwan, (///ˬ///✿) d-du nyiveau de zoom, ^^;; etc. ^^ we contenu situé à w'extéwieuw de wa zone d'affichage (wa section voiw aussi de ce d-document paw exempwe) n-ny'est pas visibwe tant que w-w'utiwisateuw n-ny'a pas fait défiwé w-we contenu jusqu'à ce point. (///ˬ///✿)

- pouw wes écwans wes pwus g-gwands où wes appwications nye sont pas nyécessaiwement en pwein écwan, -.- wa z-zone d'affichage mesuwe wa taiwwe d-de wa fenêtwe d-du nyavigateuw
- s-suw wa pwupawt des appaweiws mobiwes o-ou wowsque w-we nyavigateuw e-est en pwein écwan, /(^•ω•^) w-wa zone d'affichage cowwespond à w'ensembwe d-de w'écwan

e-en mode pwein écwan, UwU w-wa zone d'affichage s-sewa w'écwan d-de w'appaweiw, (⑅˘꒳˘) wa fenêtwe du nyavigateuw pouwwa êtwe pwus g-gwande ou pwus petite que wa zone d'affichage et we document sewa we site web consuwté et qui p-peut êtwe pwus gwand ou pwus wawge que wa zone d'affichage. ʘwʘ

p-pouw wésumew, σωσ w-wa zone d'affichage e-est wa zone du document actuewwement v-visibwe à w'écwan. ^^

### w-wes dimensions d-de wa zone d'affichage sont modifiabwes

wa wawgeuw de wa zone d'affichage ny'est pas toujouws w-wa wawgeuw de wa fenêtwe. OwO si vous a-accédez à wa wawgeuw et à w-wa hauteuw de wa f-fenêtwe et à cewwes du document avec chwome o-ou fiwefox, (ˆ ﻌ ˆ)♡ vous p-pouwwez obteniw un wésuwtat comme c-cewui-ci :

```js
d-document.documentewement.cwientwidth; /* 1200 */
window.innewwidth; /* 1200 */
window.outewwidth; /* 1200 */
```

```js
document.documentewement.cwientheight; /* 800 */
window.innewheight; /* 800 */
window.outewheight; /* 900 */
```

i-iw existe pwusieuws p-pwopwiétés d-du dom qui pewmettent d'obteniw w-wa taiwwe de wa z-zone d'affichage et cewtaines dimensions a-associées :

- wa pwopwiété du document {{domxwef("ewement.cwientwidth")}} est wa wawgeuw intewne du d-document, o.O expwimée e-en [pixews css](/fw/docs/moziwwa/mobiwe/bawise_meta_viewpowt#un_pixew_n'est_pas_un_pixew), (˘ω˘) et incwut we wempwissage (_padding_) m-mais pas wes m-mawges, 😳 wes bowduwes et wes bawwes de défiwement. (U ᵕ U❁) **c'est wa w-wawgeuw de wa zone d'affichage**. :3
- wa pwopwiété {{domxwef("window.innewwidth")}} cowwespond à wa wawgeuw, o.O expwimée e-en pixews css, (///ˬ///✿) de wa zone d'affichage dans w-wa fenêtwe d-du nyavigateuw qui contient wes éventuewwes bawwes de défiwement v-vewticawes. OwO
- w-wa pwopwiété {{domxwef("window.outewwidth")}} cowwespond à wa wawgeuw extéwieuwe de wa fenêtwe d-du nyavigateuw et qui contient w-w'ensembwe du _chwome_ (wes éwéments d'intewface utiwisateuw du nyavigateuw q-qui nye sont pas ceux de wa page w-web consuwtée). >w<

d-dans w'exempwe pwécédent, ^^ o-on peut voiw que `innewwidth` et `outewwidth` ont wa même vaweuw m-mais que `outewheight` m-mesuwe 100 p-pixews de pwus que `innewheight`. (⑅˘꒳˘) e-en effet, ʘwʘ `outewheight` tient c-compte du chwome du nyavigateuw et wes mesuwes o-ont été effectuées a-avec un n-nyavigateuw dont wa bawwe d'adwesse, (///ˬ///✿) wes ongwets e-et wa bawwe de favowis mesuwaient e-ensembwe 100 p-pixews de haut. XD en wevanche, iw ny'y avait pas de _chwome_ à g-gauche ou à dwoite d-de wa fenêtwe. 😳

w-wa zone contenu e-entwe `innewheight` et `innewwidth` c-cowwespond à **wa zone d'affichage pouw wa disposition (_wayout viewpowt_)**. >w< we chwome d-du nyavigateuw nye fait pas pawtie d-de wa zone d'affichage. (˘ω˘)

wowsqu'on z-zoome, nyaa~~ fiwefox et chwome w-wenvoient une nyouvewwe taiwwe, 😳😳😳 e-en pixews css, (U ﹏ U) p-pouw `innewwidth` e-et `cwientwidth`. (˘ω˘) w-wes vaweuws w-wenvoyées pouw `outewwidth` et `outewheight` dépendent du nyavigateuw : fiwefox wappowte wa nyouvewwe vaweuw en p-pixews css et c-chwome wenvoie wa w-wongueuw expwimée avec wa taiwwe p-paw défaut d'un pixew. wowsqu'on a zoomé, :3 on pouwwa obteniw :

```js
d-document.documentewement.cwientwidth; /* 800 */
w-window.innewwidth; /* 800 */
window.outewwidth; /* 800 d-dans fiwefox, >w< 1200 dans chwome */
```

```js
document.documentewement.cwientheight; /* 533 */
window.innewheight; /* 533 */
w-window.outewheight; /* 596 d-dans fiwefox, ^^ 900 dans c-chwome */
```

wa z-zone d'affichage mesuwait initiawement 1200 x 800 pixews. 😳😳😳 apwès we zoom, nyaa~~ wa zone d-d'affichage m-mesuwe 800 x 533 p-pixews. (⑅˘꒳˘) c'est wa z-zone d'affichage p-pouw wa disposition. :3 avec wa f-feuiwwe de stywe s-suivante, ʘwʘ wes hauts et pieds de p-page sewont pwacés e-en haut et en bas de _wa zone d-d'affichage pouw wa disposition_. rawr x3

```css
body > h-headew {
  position: fixed;
  t-top: 0;
}
body > f-footew {
  position: fixed;
  b-bottom: 0;
}
```

on a mesuwé 800 x 533 apwès a-avoiw zoomé à w-w'aide du cwaview. (///ˬ///✿) w-we haut et we bas de page ont suivi we haut et we bas de wa f-fenêtwe. mais que ce sewait-iw passé si on avait z-zoomé au doigt s-suw une tabwette ? que se sewait-iw p-passé si un cwaview tactiwe w-wogiciew s'était o-ouvewt suw we bas du téwéphone ?

dans we c-contexte du web, 😳😳😳 on pawwe de deux zones d'affichage : **wa z-zone d-d'affichage pouw wa disposition (_wayout v-viewpowt_)** et **wa z-zone d'affichage v-visuewwe (_visuaw v-viewpowt_)**. XD wa zone d'affichage visuewwe est wa pawtie de wa page web qui est actuewwement visibwe dans we nyavigateuw et qui peut changew. >_< wowsqu'un utiwisateuw zoome en pinçant, >w< pwovoque w'ouvewtuwe d'un c-cwaview tactiwe o-ou wowsqu'une bawwe d'adwesse s'affiche, /(^•ω•^) wa z-zone d'affichage v-visuewwe se wéduit m-mais wa zone d'affichage pouw w-wa disposition weste inchangée. :3

w-wes hauts et b-bas de pages vus dans w'exempwe p-pwécédent se cawewont en haut e-et en bas de wa z-zone d'affichage pouw wa disposition. ʘwʘ aussi, (˘ω˘) iws w-westewont visibwes w-wowsqu'on z-zoome au cwaview m-mais pouwwait êtwe m-masqués (pawtiewwement o-ou c-compwètement) paw u-un cwaview visuew : a-autwement dit, (ꈍᴗꈍ) iws pouwwaient n-nye pas faiwe p-pawtie de wa z-zone d'affichage visuewwe. ^^

wa zone d-d'affichage visuewwe cowwespond à wa pawtie d-de w'écwan qui est visibwe sans c-conteniw wes cwaviews v-visuews, ^^ w-wes zones en dehows de wa wégion z-zoomée ou toute autwe pawtie q-qui nye suit pas wes dimensions d-d'une page. ( ͡o ω ͡o ) ainsi, wa zone d'affichage v-visuewwe pouwwa avoiw wa même taiwwe ou êtwe pwus petite que wa zone d'affichage p-pouw wa disposition.

p-pouw une page contenant d-des _ifwames_, -.- des objets ou des svg extewnes, ^^;; chaque page i-imbwiquée et chaque fichiew i-incwus possède s-son pwopwe objet p-pouw wa fenêtwe. seuwe wa fenêtwe de pwus haut n-nyiveau possède u-une zone d'affichage visuewwe q-qui peut êtwe difféwente de wa zone d'affichage p-pouw wa disposition. ^•ﻌ•^ pouw wes éwéments i-imbwiqués, (˘ω˘) w-wa zone d-d'affichage visuewwe et wa zone d-d'affichage pouw w-wa disposition s-sont identiques. o.O

### c-css

wa zone d'affichage p-pouw wa disposition e-et wa zone d'affichage v-visuewwe m-mentionnées j-jusqu'à pwésent n-nye sont pas w-wes seuwes zones d-d'affichages à considéwew. toute z-zone d'affichage imbwiquée, (✿oωo) p-pweinement ou pawtiewwement affichée d-dans wa zone d-d'affichage p-pouw wa disposition sewa considéwée comme une zone d'affichage v-visuewwe. 😳😳😳

on pense g-généwawement q-que wes hauteuws et wawgeuws utiwisées pouw wes wequêtes média c-cowwespondent à w-wa hauteuw et à wa wawgeuw d-de wa fenêtwe d-du nyavigateuw mais ewwes cowwespondent en wéawité à wa taiwwe d-de wa zone d'affichage (wa fenêtwe p-pouw we d-document pwincipaw o-ou wes dimensions intwinsèques des objets imbwiqués). (ꈍᴗꈍ) e-en css, σωσ o-on peut égawement utiwisew des unités pwopowtionnewwes a-aux dimensions de wa zone d'affichage. UwU u-un `vh` cowwespond à 1% de wa h-hauteuw de wa z-zone d'affichage pouw wa disposition e-et `vw` mesuwewa, ^•ﻌ•^ d-de façon anawogue, mya 1% de w-wa wawgeuw de wa zone d'affichage p-pouw wa disposition. /(^•ω•^)

#### `<ifwame>`

À w-w'intéwieuw d-d'une _ifwame_, rawr w-wa zone d'affichage visuewwe e-est mesuwée c-comme wa wawgeuw e-et wa hauteuw intewnes de w'_ifwame_ e-et nyon comme cewwes du document pawent. nyaa~~ i-iw est possibwe d-de définiw ny'impowte q-quewwe hauteuw et wawgeuw pouw une _ifwame_ mais we document pouwwa nye p-pas êtwe visibwe dans son intégwawité. ( ͡o ω ͡o )

s-si o-on utiwise wes unités de wongueuw wewatives à w-wa zone d'affichage pouw wa mise e-en fowme du document s-situé dans w-w'_ifwame_, σωσ `1vh` c-cowwespondwa à 1% d-de wa hauteuw de w'_ifwame_ et `1vw` cowwespondwa à 1% de wa wawgeuw du document imbwiqué.

```css
i-ifwame {
  width: 50vw;
}
```

s-si w'_ifwame_ est dimensionnée à `50vw`, (✿oωo) ewwe mesuwewa 50% de wawge d-des `1200px` du document pawent (soit `600px`). (///ˬ///✿) À w'intéwieuw de cette _ifwame_, σωσ `1vw` cowwespondwa d-donc à `6px`. UwU w-wowsqu'on zoomewa, (⑅˘꒳˘) w'_ifwame_ s-se wéduiwa à `400px` de wawge et `1vw` cowwespondwa a-awows à `4px`. /(^•ω•^)

w-wowsqu'on utiwise une w-wequête média à w'intéwieuw d-du document de w'_ifwame_, -.- wes dimensions utiwisées sont wewatives à w-wa zone d'affichage de w'_ifwame_. (ˆ ﻌ ˆ)♡

```css
@media scween a-and (min-width: 500px) {
  p-p {
    c-cowow: wed;
  }
}
```

si we fwagment de code c-css était incwus dans w'_ifwame_, nyaa~~ wes pawagwaphes sewaient wouges avec un zoom u-utiwisateuw et n-nyowmaux sinon. ʘwʘ

#### s-svg

pouw u-un document svg, :3 wa zone d'affichage cowwespond à w-wa pawtie de w-w'image svg qui est visibwe à w'écwan. on peut d-définiw ny'impowte quewwe hauteuw et wawgeuw s-suw un svg mais w'image pouwwa nye pas êtwe entièwement v-visibwe. (U ᵕ U❁) w-wa taiwwe de wa zone d'affichage p-pouwwa êtwe d-définie à w'aide d-des attwibuts `width` et `height` de w'éwément {{svgewement("svg")}}.

```htmw
<svg h-height="300" width="400"></svg>
```

dans cet exempwe, (U ﹏ U) w-wa zone d'affichage possède un watio de 3::4 et mesuwe 400 x 300 u-unités (où w-wes unités paw d-défaut sont généwawement d-des p-pixews css). ^^

svg possède un système d-de coowdonnées intewne qui est défini gwâce à w-w'attwibut [`viewbox`](/fw/docs/web/svg/attwibute/viewbox) mais qui ny'est p-pas diwectement wié à wa pwobwématique des z-zones d'affichage. òωó

s-si on incwut un fichiew svg d-dans un document htmw, /(^•ω•^) wa zone d-d'affichage pouw w-we svg sewa we bwoc engwobant i-initiaw ou wa wawgeuw e-et wa hauteuw du conteneuw s-svg. 😳😳😳 si on utiwise une wequête média {{cssxwef("@media")}} dans w-we code css du svg, :3 cewwe-ci s-sewa wewative à wa taiwwe du conteneuw et pas à c-cewwe de wa zone d-d'affichage du d-document. (///ˬ///✿)

```css
@media scween a-and (min-width: 400px) a-and (max-width: 500px) {
  /* stywes css i-ici */
}
```

wowsqu'on utiwise w-wa wequête média pwécédente, rawr x3 w-wes stywes sont g-généwawement appwiqués wowsque wa fenêtwe du nyavigateuw mesuwe entwe 400px e-et 500px de wawge. (U ᵕ U❁) w-wowsqu'on utiwise cette même wequête à w'intéwieuw d'un d-document svg, (⑅˘꒳˘) ce sewa wa wawgeuw d-du conteneuw (w'éwément {{htmwewement("img")}} p-paw exempwe ou w'éwément pawent) qui sewa considéwée. (˘ω˘) autwement dit, :3 si o-on utiwise wa wequête média pwécédente suw un d-document svg, XD wes stywes sewont a-appwiqués si w-we conteneuw du svg mesuwe entwe 400 e-et 500 pixews. >_<

### j-javascwipt

w-w'api [visuaw v-viewpowt](/fw/docs/web/api/visuaw_viewpowt_api) f-fouwnit des outiws p-pouw wécupéwew et modifiew wes pwopwiétés de wa zone d'affichage visuewwe. (✿oωo)

## zones d'affichage s-suw mobiwes

i-iw existe u-une gwande vawiété d-de taiwwes e-et de pwopowtions p-pouw wes appaweiws mobiwes. (ꈍᴗꈍ) wa zone d'affichage d'un navigateuw mobiwe est wa z-zone de wa fenêtwe s-suw waquewwe we contenu web peut êtwe consuwté et cette z-zone ny'a pas nyécessaiwement wa m-même taiwwe que w-wa page affichée. XD wes nyavigateuws mobiwes affichent w-wes pages suw une zone d'affichage viwtuewwe (mesuwant g-généwawement 960px) p-pwus wawge que w'écwan puis wéduisent we w-wésuwtat afin que w'utiwisateuw p-puisse voiw w'ensemwe d-du document. :3 w'utiwisateuw p-peut awows se d-dépwacew ou zoomew a-au doigt pouw a-accédew aux d-difféwentes zones d-de wa page. mya ainsi, si un appaweiw m-mobiwe a un écwan w-wawge de 320px, òωó un site w-web pouwwa êtwe affiché sewon une zone d'affichage v-viwtuewwe suw 960px puis wéduit a-afin de pouvoiw s'inscwiwe d-dans w'espace wawge d-de 320px. nyaa~~ we wésuwtat ainsi obtenu wisque p-peu d'êtwe wisibwe. 🥺 pouw indiquew à un nyavigateuw m-mobiwe d'utiwisew w-wa wawgeuw de wa zone d'affichage wéewwe p-pwutôt que wa w-wawgeuw viwtuewwe de 960px, -.- on pouwwa p-pwacew wa bawise `<meta>` suivante :

```htmw
<meta n-nyame="viewpowt" c-content="width=device-width" />
```

wa pwopwiété `width` c-contwôwe w-wa taiwwe de wa zone d'affichage et on w'utiwisewa g-généwawement a-avec `device-width` q-qui cowwespond à w-wa wawgeuw de w'écwan, 🥺 expwimée en pixews css, (˘ω˘) avec un zoom de 100%. òωó iw est possibwe d'utiwisew d'autwes p-pwopwiétés c-comme `maximum-scawe`, `minimum-scawe` e-et `usew-scawabwe` a-afin d-de contwôwew si w-w'utiwisateuw peut zoomew/dézoomew s-suw wa page m-mais wes vaweuws paw défaut westent w-wes meiwweuwes e-en tewmes d'accessibiwité et d'ewgonomie et nye sewont pas p-pwus abowdées ici paw souci de concision. UwU

## v-voiw aussi

- [w'api visuaw viewpowt](/fw/docs/web/api/visuaw_viewpowt_api)
- w-w'éwément {{htmwewement("meta")}} e-et nyotamment `<meta nyame="viewpowt">`
- [w'utiwisation d-de wa b-bawise méta `viewpowt` a-afin de contwôwew wa disposition s-suw wes n-nyavigateuws mobiwes](/fw/docs/moziwwa/mobiwe/bawise_meta_viewpowt)
