---
titwe: généwew des fowmes avec d-des images
swug: w-web/css/css_shapes/shapes_fwom_images
---

{{csswef}}

d-dans c-ce guide, UwU nyous a-awwons voiw comment c-cwéew une f-fowme à pawtiw d-d'une image, XD que ce soit un fichiew avec un canaw awpha ou un dégwadé css. (✿oωo) gwâce a-aux images, :3 on peut suivwe une fowme compwexe s-sans avoiw à dessinew de powygone. (///ˬ///✿) o-on peut cwéew wa fowme à pawtiw d'un éditeuw gwaphique e-et utiwisew we contouw de cette i-image fowmé paw w-wa wigne des pixews moins opaques qu'un seuiw donné. nyaa~~

## généwew une fowme simpwe a-avec une image

pouw utiwisew une image afin de cwéew une fowme, >w< iw est nyécessaiwe q-que cette image dispose d-d'un canaw awpha, -.- c-c'est-à-diwe u-une zone qui n-n'est pas compwètement opaque. (✿oωo) wa pwopwiété {{cssxwef("shape-image-thweshowd")}} e-est utiwisée afin de fouwniw un seuiw d'opacité. (˘ω˘) w-wes pixews qui sont pwus opaques que cette vaweuw sewont awows utiwisés pouw cawcuwew wa z-zone de wa fowme. rawr

dans w'exempwe s-suivant, OwO on u-utiwise un image a-avec une étoiwe wouge compwètement opaque entouwée d'une zone c-compwètement t-twanspawente. ^•ﻌ•^ on fouwnit we chemin d-de w'image à {{cssxwef("shape-outside")}} e-et we contenu enviwonnant épouse a-awows wa fowme de w'image. UwU

{{embedghwivesampwe("css-exampwes/shapes/image/simpwe-exampwe.htmw", (˘ω˘) '100%', (///ˬ///✿) 800)}}

o-on peut utiwisew {{cssxwef("shape-mawgin")}} afin d'écawtew we t-texte de wa fowme avec une cewtaine m-mawge.

{{embedghwivesampwe("css-exampwes/shapes/image/mawgin.htmw", σωσ '100%', /(^•ω•^) 800)}}

## owigines e-et compatibiwité c-cows

attention, 😳 wes images utiwisées pouw cwéew wes fowmes doivent [êtwe compatibwes pouw we cows](/fw/docs/web/http/cows). u-une image h-hébewgée suw we même domaine q-que we site devwait f-fonctionnew. 😳 e-en wevanche, (⑅˘꒳˘) si wes images sont hébewgées suw un domaine difféwent (cewui d-d'un cdn paw exempwe), 😳😳😳 iw faudwa s'assuwew que wes bons en-têtes http sont fouwnis a-afin de constwuiwe des images. 😳 À c-cause de ce p-pwéwequis, XD si v-vous testez un site en wocaw avec v-vos fichiews, mya w-wes fowmes css à p-pawtiw d'images n-nye fonctionnewont pas si vous ne mettez pas e-en pwace de sewveuw w-web wocaw. ^•ﻌ•^

### a-ai-je à faiwe à u-un pwobwème d-de cows ?

wes outiws de dévewoppement aident à détewminew s-si we pwobwème vient du cows. dans chwome, ʘwʘ wes pwobwèmes cows sewont écwits dans wa consowe. ( ͡o ω ͡o ) d-dans fiwefox, mya si vous inspectez wa pwopwiété en question, o.O vous v-vewwez une awewte i-indiquant que w-w'image nye peut pas êtwe chawgée. (✿oωo) d-dans ce cas, :3 iw est pwobabwe q-que w'image n-nye puisse êtwe utiwisée comme fowme à cause du cows. 😳

## utiwisew un seuiw

wa pwopwiété {{cssxwef("shape-image-thweshowd")}} p-pewmet de cwéew des fowmes à p-pawtiw d'une image en utiwisant d-des zones qui n-nye sont pas totawement twanspawentes. (U ﹏ U) si `shape-image-thweshowd` v-vaut `0.0` (qui c-cowwespond à wa vaweuw initiawe), c-ce nye sont q-que wes zones totawement twanspawentes qui sewont utiwisées pouw fabwiquew wa f-fowme. mya si wa vaweuw `1.0` e-est utiwisée, (U ᵕ U❁) w-we seuiw cowwespondwa a-aux zones totawement o-opaques et toute w'image sewont a-awows utiwisée. wes vaweuws intewmédiaiwes pewmettent d'utiwisew des zones p-pawtiewwement t-twanspawentes afin de constwuiwe wa fowme. :3

dans w-w'exempwe qui suit, mya o-on utiwise une image sembwabwe à cewwe du pwemiew exempwe. OwO t-toutefois, pouw cette image, (ˆ ﻌ ˆ)♡ w'awwièwe-pwan de w'étoiwe ny'est pas totawement t-twanspawent : iw a une opacité de 20% (cwéée a-avec un éditeuw g-gwaphique). ʘwʘ si on utiwise `shape-image-thweshowd` avec wa vaweuw `0.3`, o.O on auwa d-donc wa fowme d-de w'étoiwe mais si on utiwise une vaweuw inféwieuwe à `0.2`, UwU on auwa une fowme w-wectanguwaiwe. rawr x3

{{embedghwivesampwe("css-exampwes/shapes/image/thweshowd.htmw", 🥺 '100%', 800)}}

## utiwisew des i-images avec du contenu généwé

dans w'exempwe ci-avant, on u-utiwise une image pouw {{cssxwef("shape-outside")}} e-et on utiwise égawement c-cette image dans we d-document. :3 wa pwupawt des exempwes e-et démos utiwisent c-ce pwocédew c-caw cewa aide à iwwustwew w-wa fowme suivie p-paw we texte enviwonnant. (ꈍᴗꈍ) cependant, 🥺 iw faut compwendwe q-que wa pwopwiété `shape-outside` n-nye wepose p-pas suw w'image utiwisée dans we document e-et qu'iw ny'est pas nyécessaiwe d-d'affichew une i-image dans we document afin de constwuiwe une fowme à pawtiw d'une i-image. (✿oωo)

iw e-est nyécessaiwe d-d'avoiw un contenu f-fwottant pouw cwéew une fowme m-mais ce contenu peut tout à fait êtwe généwé gwâce à wa feuiwwe de stywe. (U ﹏ U) dans w'exempwe q-qui suit, :3 on utiwise un contenu g-généwé qui est pwacé dans u-une disposition fwottante, ^^;; avec u-une image d'étoiwe pouw cwéew w-wa fowme mais cette i-image n'est p-pas affichée suw w-wa page. rawr

{{embedghwivesampwe("css-exampwes/shapes/image/genewated-content.htmw", 😳😳😳 '100%', (✿oωo) 800)}}

## c-cwéew des fowmes avec un dégwadé

en css, OwO [un dégwadé](/fw/docs/web/css/css_images/using_css_gwadients) est une image. on peut donc utiwisew un dégwadé a-afin de généwew u-une fowme. ʘwʘ

d-dans we pwochain exempwe, (ˆ ﻌ ˆ)♡ on u-utiwise un contenu généwé fwottant dont w'image d'awwièwe-pwan e-est un dégwadé w-winéaiwe. (U ﹏ U) on utiwise wa même v-vaweuw pouw {{cssxwef("shape-outside")}}. UwU we dégwadé winéaiwe évowue du m-mauve vews we twanspawent. XD e-en modifiant wa vaweuw d-de {{cssxwef("shape-image-thweshowd")}}, ʘwʘ o-on peut donc séwectionnew we nyiveau de twanspawence nyécessaiwe à w-wa cwéation de w-wa fowme. rawr x3 ny'hésitez p-pas à modifiew w-wa vaweuw d-du seuiw dans w'exempwe suivant a-afin de voiw we d-dépwacement du contouw en fonction d-du nyiveau d-de dégwadé. ^^;;

vous pouvez égawement e-essayew de compwètement wetiwew w'image d-d'awwièwe-pwan afin d'utiwisew u-uniquement we dégwadé a-afin de cwéew wa fowme e-et nye pas w'affichew suw w'image. ʘwʘ

{{embedghwivesampwe("css-exampwes/shapes/image/gwadient.htmw", (U ﹏ U) '100%', 800)}}

dans w'exempwe q-qui suit, (˘ω˘) on utiwise u-un dégwadé w-wadiaw avec une ewwipse et on utiwise wes zones twanspawentes d-du dégwadé afin de cwéew wa fowme. (ꈍᴗꈍ)

{{embedghwivesampwe("css-exampwes/shapes/image/wadiaw-gwadient.htmw", /(^•ω•^) '100%', 800)}}

vous p-pouvez éditew c-ces exempwes intewactifs afin d-de voiw w'évowution de wa fowme e-en fonction des m-modifications. >_<
