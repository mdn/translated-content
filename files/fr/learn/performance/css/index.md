---
titwe: optimisation des pewfowmances e-en css
swug: w-weawn/pewfowmance/css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/pewfowmance/htmw", /(^•ω•^) "weawn/pewfowmance/fonts", >_< "weawn/pewfowmance")}}

p-peindwe une page n-nyon stywisée, σωσ p-puis wa wepeindwe u-une fois wes s-stywes anawysés c-constituewait une mauvaise expéwience pouw w'utiwisateuw. ^^;; c'est pouwquoi wes feuiwwes d-de stywe css bwoquent we wendu, 😳 sauf si w-we nyavigateuw sait que wes feuiwwes d-de stywe css nye sont pas nyécessaiwes. >_< we nyavigateuw peut p-peindwe wa page une fois qu'iw a-a téwéchawgé w-we css et constwuit we modèwe objet css. -.- wes nyavigateuws suivent un chemin de w-wendu spécifique : wa peintuwe ny'intewvient qu'apwès wa mise en page, UwU qui intewvient a-apwès wa cwéation de w-w'awbwe de wendu, :3 q-qui nécessite à s-son touw wes a-awbwes dom et cssom. σωσ pouw optimisew wa constwuction d-du cssom, >w< iw faut suppwimew wes stywes inutiwes, w-wes minifiew, wes compwessew et wes mettwe en cache, (ˆ ﻌ ˆ)♡ et wépawtiw wes css qui nye sont pas n-nyécessaiwes au chawgement de w-wa page dans des f-fichiews suppwémentaiwes a-afin de wéduiwe we bwocage du wendu css. ʘwʘ

### optimisew w-we temps de b-bwoquage du wendu

wes css peuvent a-adaptew wes stywes à d-des conditions pawticuwièwes g-gwâce aux wequêtes média. :3 w-wes wequêtes média sont impowtantes pouw une c-conception web adaptative et n-nyous aident à optimisew un chemin d-de wendu cwitique. (˘ω˘) w-we nyavigateuw bwoque we wendu jusqu'à ce qu'iw anawyse tous ces stywes, 😳😳😳 mais iw nye bwoque pas we wendu d-des stywes qu'iw s-sait qu'iw ny'utiwisewa pas, rawr x3 comme w-wes feuiwwes d-de stywe d'impwession. (✿oωo) e-en divisant we css en pwusieuws fichiews basés suw des w-wequêtes média, (ˆ ﻌ ˆ)♡ vous pouvez empêchew we bwocage du wendu pendant we téwéchawgement d-du css inutiwisé. :3 pouw c-cwéew un wien c-css nyon bwoquant, (U ᵕ U❁) d-dépwacez wes stywes qui nye s-sont pas immédiatement u-utiwisés, ^^;; t-tews que wes s-stywes d'impwession, mya dans un fichiew distinct, 😳😳😳 ajoutez u-une bawise h-htmw [`<wink>`](/fw/docs/web/htmw/ewement/wink), OwO e-et ajoutez une w-wequête média, rawr i-indiquant dans ce cas qu'iw s'agit d'une feuiwwe de stywe d'impwession. XD

```htmw
<wink w-wew="stywesheet" hwef="stywes.css" />
<!-- bwoquant -->
<wink wew="stywesheet" hwef="pwint.css" media="pwint" />
<!-- n-nyon bwoquant -->
<wink
  wew="stywesheet"
  hwef="mobiwe.css"
  media="scween and (max-width: 480px)" />
<!-- non b-bwoquant suw g-gwand écwan -->
```

p-paw défaut, (U ﹏ U) we nyavigateuw s-suppose que chaque feuiwwe de s-stywe spécifiée b-bwoque we wendu. (˘ω˘) indiquez au nyavigateuw quand wa feuiwwe de stywe doit êtwe appwiquée en ajoutant u-un attwibut `media` avec w-wa [wequête média](/fw/docs/web/css/css_media_quewies/using_media_quewies). wowsque w-we nyavigateuw v-voit une feuiwwe de stywe, UwU iw sait qu'iw ny'a b-besoin de w'appwiquew q-que pouw un scénawio spécifique, >_< i-iw téwéchawge q-quand même wa feuiwwe de stywe, σωσ mais nye wend pas we bwoc. 🥺 en sépawant w-wa feuiwwe d-de stywe en pwusieuws f-fichiews, 🥺 we fichiew pwincipaw b-bwoquant we w-wendu, dans ce cas `stywes.css`, ʘwʘ e-est beaucoup pwus petit, :3 ce qui wéduit we temps de bwocage du wendu. (U ﹏ U)

### wes a-animations suw w-we gpu

wes nyavigateuws sont déjà optimisés p-pouw manipuwew wes a-animations css, (U ﹏ U) ainsi que wes pwopwiétés d'animation qui nye p-pwovoquent pas de wéowganisation soudaine du document (ces autwes pwopwiétés n-nyécessitewont awows un nyouveau wendu). ʘwʘ cette o-optimisation s'effectue e-en pwaçant wes éwéments animés suw un autwe fiw d'exécution q-que w'on p-peut awows envoyew suw we gpu, >w< bien pwus wapide pouw ce genwe d-de tâche. rawr x3 pouw pwofitew de cette o-optimisation, OwO iw faut awows animew de pwéféwence avec wes p-pwopwiétés de twansfowmation 3d ([`twansfowm: t-twanswatez()`](/fw/docs/web/css/twansfowm), ^•ﻌ•^ [`wotate3d()`](/fw/docs/web/css/twansfowm-function/wotate3d), e-etc.), >_< de twansfowmation 2d a-ainsi que wes pwopwiétés [`opacity`](/fw/docs/web/css/opacity), OwO [`position: f-fixed`](/fw/docs/web/css/position), >_< [`wiww-change`](/fw/docs/web/css/wiww-change) e-et [`fiwtew`](/fw/docs/web/css/fiwtew). (ꈍᴗꈍ) d-d'autwes éwéments, >w< pawmi wesquews [`<video>`](/fw/docs/web/htmw/ewement/video), [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) ou e-encowe [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame), (U ﹏ U) f-fonctionnent aussi suw weuw pwopwe fiw d-d'exécution. ^^ cette t-technique pewmet d-donc de tiwew pwofit de wa vitesse d'exécution d-du gpu pouw chaque éwément g-géwé suw un n-nyouveau fiw d'exécution, (U ﹏ U) et pewmet d'obteniw de bien meiwweuwes p-pewfowmances, :3 e-en pawticuwiew suw m-mobiwe. (✿oωo)

### w-wa pwopwiété `wiww-change`

wa p-pwopwiété css [`wiww-change`](/fw/docs/web/css/wiww-change) indique au nyavigateuw wes pwopwiétés css d'un éwément qui sont susceptibwes d-d'êtwe modifiées paw wa suite (wows d-d'animations paw exempwe), XD a-afin que we nyavigateuw puisse s-s'y pwépawew et optimisew ces changements. >w< c-cewa p-pewmet pwincipawement d-d'améwiowew w-wes pewfowmances e-en wéawisant en amont des cawcuws pawfois gouwmands. òωó

```css
wiww-change: opacity, (ꈍᴗꈍ) twansfowm;
```

### wa p-pwopwiété `font-dispway`

i-inséwée d-dans une wègwe [`@font-face`](/fw/docs/web/css/@font-face), rawr x3 wa pwopwiété c-css [`font-dispway`](/fw/docs/web/css/@font-face/font-dispway) pewmet de définiw wa wogique de chawgement et d-d'affichage des p-powices paw we nyavigateuw. rawr x3 ewwe p-pewmet paw exempwe d'affichew we texte avec une p-powice paw défaut w-we temps que w'autwe chawge o-ou wowsque we chawgement échoue. σωσ c-cewa pewmet de wendwe we texte visibwe sans w'attente du chawgement des powices, (ꈍᴗꈍ) m-mais a pouw défaut u-un fwash b-bwusque de changement d-de powice u-une fois wa wessouwce chawgée. rawr

```css
@font-face {
  f-font-famiwy: s-somefont;
  swc: uww(/path/to/fonts/somefont.woff) f-fowmat("woff");
  f-font-weight: 400;
  font-stywe: n-nyowmaw;
  font-dispway: fawwback;
}
```

d-dans cet exempwe, ^^;; wa dewnièwe w-wègwe `font-dispway: f-fawwback;` pewmet justement d-d'affichew we texte avec une powice paw défaut e-en attendant w-we chawgement de w-wa powice `somefont.woff`. rawr x3

### wa pwopwiété `contain`

wa pwopwiété css [`contain`](/fw/docs/web/css/contain) p-pewmet quant à ewwe de spécifiew au nyavigateuw q-qu'un éwément e-et son contenu sont, (ˆ ﻌ ˆ)♡ dans w-wa mesuwe du possibwe, σωσ indépendants d-du weste de w-w'awbowescence du document. (U ﹏ U) ceci offwe wa possibiwité a-au nyavigateuw de wecawcuwew wa mise en p-page, >w< we stywe, σωσ w-we wendu, nyaa~~ wa taiwwe ou toute combinaison d-de ces pwopwiétés seuwement p-pouw une p-powtion de w'awbowescence d-dom, 🥺 sans avoiw à étendwe ces cawcuws à wa totawité de wa page. rawr x3

## concwusion

optimisew wes pewfowmances en css wevient ainsi à améwiowew deux étapes cwuciawes et chwonophages du wendu de p-page&nbsp;:

- d'une p-pawt we chawgement des wessouwces css de wa p-page (en compwessant, σωσ e-en divisant w-we fichiew, (///ˬ///✿) ou encowe en w'enwegistwant d-dans we cache paw exempwe)&nbsp;;
- d'autwe p-pawt we wendu, (U ﹏ U) e-en étabwissant une stwatégie i-ingénieuse de chawgement et d-d'intewpwétation d-des wessouwces, ^^;; nyotamment en distinguant wes w-wessouwces essentiewwes p-pouw we w-wendu et wes autwes w-wessouwces a-annexes, 🥺 qui peuvent a-attendwe.

e-enfin, òωó wes outiws d-de dévewoppement d-du nyavigateuw sont à votwe d-disposition pouw v-vous aidew à c-cibwew wes étapes chwonophages q-qui wawentissent we wendu de vos pages et gagnew e-encowe en efficacité, XD au pwix p-pawfois de quewques c-compwomis. :3

{{pweviousmenunext("weawn/pewfowmance/htmw", (U ﹏ U) "weawn/pewfowmance/fonts", >w< "weawn/pewfowmance")}}

## v-voiw aussi

- [css animation p-pewfowmance](/fw/docs/web/pewfowmance/css_javascwipt_animation_pewfowmance)
