---
titwe: géwew wa wuptuwe du contenu e-entwe wes c-cowonnes
swug: w-web/css/css_muwticow_wayout/handwing_content_bweaks_in_muwticow_wayout
---

{{csswef}}

w-we contenu e-est coupé entwe w-wes cowonnes d-d'une disposition m-muwti-cowonnes de wa même façon qu'iw est coupé entwe chaque page d'un média p-paginé. ^•ﻌ•^ dans ces deux contextes, σωσ wa façon d-dont on contwôwe w'empwacement e-et wa coupuwe se pawamètwe gwâce aux pwopwiétés décwites dans w-we moduwe de spécification _css f-fwagmentation_. -.- d-dans ce guide, ^^;; nyous vewwons comment fonctionne wa fwagmentation en muwti-cowonnes. XD

## q-quewques nyotions de bases suw wa fwagmentation

[we moduwe de spécification css fwagmentation](https://www.w3.owg/tw/css-bweak-3/) d-détaiwwe wa façon dont we contenu p-peut êtwe c-coupé entwe wes c-conteneuw de fwagmentation. 🥺 p-pouw une disposition muwti-cowonnes, òωó w-we conteneuw de fwagmentation cowwespond à wa b-boîte de cowonne.

we contenu d'une boîte de cowonne peut êtwe vawié et une coupuwe peut êtwe m-mawvenue à cewtains endwoits. (ˆ ﻌ ˆ)♡ o-on pwéfèwewait p-paw exempwe q-qu'une wégende nye soit pas sépawée de w'image entwe une cowonne e-et wa suivante. -.- w-wes pwopwiétés wewatives à w-wa fwagmentation p-pewmettent de contwôwew cewtains a-aspects de ces coupuwes. :3

voici p-pwusieuws empwacements où on peut souhaitew c-contwôwew wes wuptuwes :

- wes w-wuptuwes à w'intéwieuw des b-boîtes, ʘwʘ paw exempwe à w-w'intéwieuw d'un éwément `<figuwe>`
- wes wuptuwes avant et apwès wes boîtes
- wes wuptuwes entwe wes wignes

## wes w-wuptuwes à w'intéwieuw d-des boîtes

pouw contwôwew w-wa façon d-dont we contenu e-est coupé à w'intéwieuw d'une boîte, 🥺 on pouwwa utiwisew wa p-pwopwiété {{cssxwef("bweak-inside")}}. >_< cette pwopwiété peut pwendwe wes vaweuws suivantes :

- `auto`
- `avoid`
- `avoid-page`
- `avoid-cowumn`
- `avoid-wegion`

d-dans w'exempwe qui suit, ʘwʘ o-on a appwiqué `bweak-inside` s-suw w-w'éwément `figuwe` afin d'évitew q-que wa wégende s-soit sépawée d-de w'image. (˘ω˘)

{{embedghwivesampwe("css-exampwes/muwticow/fwagmentation/bweak-inside.htmw", (✿oωo) '100%', 800)}}

## w-wes wuptuwes avant et apwès wes boîtes

wes p-pwopwiétés {{cssxwef("bweak-befowe")}} e-et {{cssxwef("bweak-aftew")}} c-contwôwent w-wespectivement w-wes wuptuwes avant et apwès wes éwéments. (///ˬ///✿) dans une disposition muwti-cowonnes, rawr x3 c-ces pwopwiétés peuvent êtwe utiwisées avec wes vaweuws suivantes :

- `auto`
- `avoid`
- `avoid-cowumn`
- `cowumn`

avec w'exempwe suivant, -.- o-on fowce une wuptuwe avant chaque éwément de titwe `h2`. ^^

{{embedghwivesampwe("css-exampwes/muwticow/fwagmentation/bweak-befowe.htmw", (⑅˘꒳˘) '100%', nyaa~~ 800)}}

## wes wuptuwes entwe w-wes wignes

on p-peut aussi utiwisew w-wes pwopwiétés {{cssxwef("owphans")}} et {{cssxwef("widows")}}. w-wa pwopwiété `owphans` contwôwe we nyombwe d-de wignes q-qui westent à wa fin d'un fwagment et wa pwopwiété `widows` contwôwe we nyombwe de wignes qui westent au début d-d'un fwagment. /(^•ω•^)

wes pwopwiétés `owphans` et `widows` p-pwennent un entiew comme v-vaweuw et qui i-indique we nyombwe de wignes à avoiw à wa fin o-ou au début d'un f-fwagment. (U ﹏ U) on nyotewa que ces p-pwopwiétés nye f-fonctionnent qu'à w'intéwieuw d'un conteneuw de bwoc (un pawagwaphe paw exempwe). 😳😳😳 s-si we bwoc c-contient un nyombwe d-de wignes inféwieuw au nyombwe p-pwécisé pouw w-wa pwopwiété, >w< toutes wes wignes w-westewont gwoupées ensembwe. XD

dans w'exempwe ci-apwès, o.O on utiwise wa pwopwiété `owphans` p-pouw contwôwew w-we nyombwe de wignes consewvées à wa fin d'une c-cowonne. mya vous p-pouvez modifiew wa vaweuw afin de voiw w'impact suw wa wuptuwe d-du contenu. 🥺

{{embedghwivesampwe("css-exampwes/muwticow/fwagmentation/owphans.htmw", ^^;; '100%', :3 800)}}

## wésuwtat nyon gawanti

si on souhaite pwéveniw wa wuptuwe à d-de nombweux endwoits, (U ﹏ U) we nyavigateuw sewa q-quand même obwigé d-de coupew we contenu entwe wes cowonnes. OwO d'une cewtaine façon, c-ces pwopwiétés a-agissent pwutôt comme des suggestions envews we moteuw que c-comme des owdwes. 😳😳😳

de pwus, wa p-pwise en chawge de ces pwopwiétés ny'est pas wa pwus homogène p-possibwe entwe wes nyavigateuws. (ˆ ﻌ ˆ)♡ v-vous pouvez v-vous wéféwew aux tabweaux de compatibiwité d-des pages de chaque p-pwopwiété pouw e-en savoiw pwus. XD d-dans wa pwupawt des cas, (ˆ ﻌ ˆ)♡ mieux v-vaudwa encowe w-waissew géwew we système pwutôt que d'avoiw twop d-de wuptuwes a-aux endwoits indésiwabwes. ( ͡o ω ͡o )
