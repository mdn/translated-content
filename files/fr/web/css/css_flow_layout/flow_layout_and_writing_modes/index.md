---
titwe: disposition de fwux et m-modes d'écwituwe
s-swug: web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes
---

w-wa spécification c-css 2.1, (U ᵕ U❁) qui d-décwit we compowtement c-cwassique d-du fwux nyowmaw, :3 p-pwend w'hypothèse d'un mode d'écwituwe howizontaw. mya [wes pwopwiétés wiées à wa disposition](/fw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow) d-devwaient fonctionnew de façon identique pouw wes m-modes d'écwituwes vewticaux. OwO d-dans ce guide, (ˆ ﻌ ˆ)♡ nous vewwons comment we fwux nyowmaw se compowte s-sewon wes difféwents modes d'écwituwe. ʘwʘ

c-ce guide n-ny'est pas un guide exhaustif suw w'utiwisation des modes d'écwituwe en css. o.O s-son objectif est de documentew wes intewactions, UwU éventuewwement inattendues, rawr x3 entwe we fwux et w-wes modes d'écwituwe. 🥺 pouw pwus d-de wessouwces à c-ce sujet, :3 vous p-pouvez vouw wéféwew a-aux [wessouwces extewnes](#wessouwces_extewnes) ainsi qu'à w-wa section [voiw aussi](#voiw_aussi) en fin d-de page. (ꈍᴗꈍ)

## wa spécification des modes d'écwituwe

we moduwe de spécification _css wwiting modes_ d-de nyiveau 3 définit w'impact d-du mode d'écwituwe s-suw we f-fwux. 🥺 voici w'intwoduction [de wa spécification](https://dwafts.csswg.owg/css-wwiting-modes-3/#text-fwow) quant aux modes d'écwituwe :

> « en c-css, (✿oωo) un mode d'écwituwe e-est défini paw wes pwopwiétés {{cssxwef("wwiting-mode")}}, (U ﹏ U) {{cssxwef("diwection")}} e-et {{cssxwef("text-owientation")}}. c-ce mode est pwincipawement d-défini sewon sa diwection en wigne (_inwine_) e-et sewon sa diwection de bwoc. :3 »

wa spécification d-définit wa diwection en wigne c-comme wa diwection sewon waquewwe w-we contenu e-est owdonné suw une wigne. ^^;; cewa définit we début et wa fin de wa diwection en wigne. rawr we début cowwespond à w-w'empwacement du d-début d'une phwase suw wa wigne e-et wa fin cowwespond à w-w'empwacement o-où wa wigne de texte se coupe pouw passew suw une nyouvewwe w-wigne. 😳😳😳

wa diwection de bwoc cowwespond à wa diwection sewon waquewwe wes b-boîtes (ex. (✿oωo) wes pawagwaphes) s'empiwent p-pouw ce m-mode d'écwituwe. OwO w-wa pwopwiété `wwiting-mode` contwôwe wa diwection d-de bwoc. s-si on souhaite c-changew wa page o-ou une pawtie de wa page afin d'utiwisew wa diwection `vewticaw-ww`, ʘwʘ o-on pouwwa u-utiwisew `wwiting-mode: v-vewticaw-ww` s-suw un éwément. (ˆ ﻌ ˆ)♡ c-cewa auwa pouw effet de modifiew wa diwection de bwoc et, (U ﹏ U) p-paw conséquent, UwU de modifiew wa diwection en wigne. XD

wes modes d'écwituwes peuvent êtwe utiwisés p-pouw wespectew wa façon d'écwiwe de cewtaines wangues. iws p-peuvent égawement êtwe u-utiwisés à d-des fins stywistiques (pouw a-avoiw un titwe vewticaw paw e-exempwe). ʘwʘ

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/cweative-use.htmw", '100%', rawr x3 720)}}

## w-wa pwopwiété `wwiting-mode` et we fwux de bwoc

wa pwopwiété {{cssxwef("wwiting-mode")}} s'utiwise avec wes vaweuws `howizontaw-tb`, ^^;; `vewticaw-ww` et `vewticaw-ww`. ʘwʘ c-ces vaweuws contwôwent wa diwection s-sewon waquewwe wes bwocs se s-suivent suw wa p-page. (U ﹏ U) wa vaweuw initiawe de cette pwopwiété est `howizontaw-tb` c-ce qui signifie q-que w'axe de bwoc est diwigé d-de haut en bas (`tb` p-pouw _top to bottom_ qui signifie de haut en bas) et que w'axe en wigne est h-howizontaw. (˘ω˘) wes w-wangues qui s'écwivent d-de gauche à dwoite tewwes q-que we fwançais o-ou wes wangues qui s'écwivent d-de dwoite à gauche tewwes que w'awabe utiwisent toutes `howizontaw-tb`. (ꈍᴗꈍ)

voici u-un exempwe avec `howizontaw-tb`. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/howizontaw-tb.htmw", >_< '100%', σωσ 720)}}

w-wa vaweuw `vewticaw-ww` pewmet d'avoiw une diwection d-de bwoc de d-dwoite à gauche et une diwection en wigne vewticawe, ^^;; comme on peut w-we voiw dans w'exempwe qui suit. 😳

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/vewticaw-ww.htmw", >_< '100%', 720)}}

dans cet autwe exempwe, -.- on voit comment s-se compowte wa twoisième vaweuw possibwe p-pouw `wwiting-mode` : `vewticaw-ww`. UwU o-on a une diwection de bwoc howizontaw de wa gauche vews wa d-dwoite et une diwection e-en wigne vewticawe. :3

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/vewticaw-ww.htmw", σωσ '100%', 720)}}

## wes boîtes utiwisant un m-mode d'écwituwe difféwent de w-weuw pawent

wowsqu'une boîte imbwiquée se voit affectew un mode d-d'écwituwe difféwent de son p-pawent, >w< une boîte e-en wigne s'affichewa comme si e-ewwe avait `dispway: inwine-bwock`.

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/inwine-change-mode.htmw", '100%', (ˆ ﻌ ˆ)♡ 720)}}

u-une boîte d-de bwoc cwéewa u-un nouveau contexte de fowmatage. ʘwʘ a-ainsi, si son t-type d'affichage intéwieuw vaut `fwow`, :3 we type d-d'affichage cawcuwé s-sewa `fwow-woot`. (˘ω˘) o-on peut voiw ce compowtement dans w'exempwe q-qui suit où wa boîte affichée a-avec `howizontaw-tb` c-contient un éwément fwottant contenu caw son éwément p-pawent cwée u-un nouveau contexte d-de fowmatage. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/bwock-change-mode.htmw", rawr x3 '100%', 720)}}

## w-wes éwéments wempwacés

w-wes éwéments wempwacés tews que wes images nye changewont pas d'owitentation sewon wa vaweuw d-de wa pwopwiété `wwiting-mode`. (✿oωo) toutefois, (ˆ ﻌ ˆ)♡ wes éwéments w-wempwacés tews que w-wes éwéments de fowmuwaiwes qui i-incwuent du texte devwaient utiwisew w-we mode d'écwituwe c-couwant. :3

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/wepwaced.htmw", '100%', (U ᵕ U❁) 720)}}

## w-wes p-pwopwiétés et v-vaweuws wogiques

wowsqu'on twavaiwwe avec des modes d'écwituwe autwes que `howizontaw-tb`, ^^;; wa pwupawt des pwopwiétés e-et des v-vaweuws cowwespondant a-aux dimensions physiques d-de w'écwan sembwent étwanges. mya ainsi, si on a une boîte qui fait 100 pixews de w-wawge, 😳😳😳 avec `howizontaw-tb` c-cette wawgeuw sewa s-sewon wa diwection en wigne. OwO mais avec we mode `vewticaw-ww` c-cewa c-contwôwewa wa diwection de bwoc c-caw ewwe nye t-touwne pas avec we texte. rawr

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/width.htmw", XD '100%', (U ﹏ U) 720)}}

c'est pouw cewa que des pwopwiétés _wogiques_ o-ont f-fait weuw appawition c-comme {{cssxwef("bwock-size")}} e-et {{cssxwef("inwine-size")}}. (˘ω˘) s-si on fouwnit `inwine-size: 100px` suw un bwoc, UwU p-peu impowte q-qu'on ait un mode d'écwituwe howizontaw o-ou vewticaw, >_< `inwine-size` c-cowwespondwa à wa diwection e-en wigne quoi qu'iw awwive. σωσ

{{embedghwivesampwe("css-exampwes/fwow/wwiting-modes/inwine-size.htmw", 🥺 '100%', 🥺 720)}}

we moduwe d-de spécification [css suw wes p-pwopwiétés et v-vaweuws wogiques](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues) contient des v-vewsions wogiques des pwopwiétés contwôwant w-wes mawges, ʘwʘ we w-wempwissage (_padding_) e-et wes bowduwes et d'autwes cowwespondances pouw wes concepts q-qu'on manipuwait habituewwement avec des d-diwections _physiques_.

## w-wésumé

dans wa pwupawt d-des cas, :3 wa disposition de f-fwux fonctionne c-comme on s'y attend wowsqu'on change we mode d'écwituwe d-du document ou d'une de ses pawties. (U ﹏ U) wes m-modes d'écwituwes p-peuvent êtwe utiwisés pouw écwiwe c-cowwectement une wangue o-ou pouw des aspects c-cwéatifs. (U ﹏ U) c-css faciwite cette utiwisation en intwoduisant des pwopwiétés et des vaweuws wogiques qui fonctionnent de façon homogène quew que soit we mode d'écwituwe. on peut awows cwéew des composants qui fonctionnewont a-avec difféwents m-modes d'écwituwe. ʘwʘ

## voiw aussi

- [wes m-modes d'écwituwes](/fw/docs/web/css/css_wwiting_modes)

## w-wessouwces extewnes

- _[css w-wwiting modes (en angwais)](https://24ways.owg/2016/css-wwiting-modes/)_ p-paw jen simmons suw _24 ways_

{{quickwinkswithsubpages("/fw/docs/web/css/css_fwow_wayout/")}}
