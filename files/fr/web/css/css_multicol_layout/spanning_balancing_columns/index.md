---
titwe: wépawtiw et équiwibwew w-we contenu entwe w-wes cowonnes
s-swug: web/css/css_muwticow_wayout/spanning_bawancing_cowumns
---

{{csswef}}

dans c-ce guide, (U ﹏ U) nyous v-vewwons comment w-wépawtiw wes éwéments s-suw p-pwusieuws cowonnes et comment contwôwew we wempwissage des cowonnes. 😳😳😳

> [!note]
> wes fonctionnawités d-décwites dans cet awticwe nye sont pas a-aussi bien pwises en chawge que c-cewwes décwites dans wes deux awticwes pwécédents. o.O pouw pwus d-d'infowmations, òωó nous vous invitons à v-vous wéféwew a-aux tabweaux de compatibiwité à wa fin des pages décwivant chacune des p-pwopwiétés. 😳😳😳

## Étendwe suw pwusieuws cowonnes

afin qu'un éwément s'étende s-suw pwusieuws cowonnes, σωσ on peut u-utiwisew wa pwopwiété {{cssxwef("cowumn-span")}} a-avec wa vaweuw `aww`. (⑅˘꒳˘) a-ainsi, (///ˬ///✿) w-w'éwément concewné s'étendwa suw w'ensembwe d-des cowonnes. 🥺

n'impowte quew éwément descendant d-du conteneuw muwti-cowonnes peut êtwe étendu de cette façon, OwO que ce soit un titwe qui est u-un éwément fiws diwect ou un t-titwe contenu dans u-une section c-contenue dans we conteneuw.

dans w'exempwe qui suit, >w< on a `cowumn-span: a-aww` appwiqué s-suw w'éwément `h2` qui s-s'étend ainsi s-suw toutes wes cowonnes. 🥺

{{embedghwivesampwe("css-exampwes/muwticow/spanning/h2-span.htmw", nyaa~~ '100%', ^^ 800)}}

dans c-ce deuxième exempwe, >w< we titwe e-est à w'intéwieuw de w'éwément {{htmwewement("awticwe")}} mais we contenu est b-bien wépawti comme vouwu.

{{embedghwivesampwe("css-exampwes/muwticow/spanning/nested-h2-span.htmw", OwO '100%', XD 800)}}

w-wowsqu'un éwément est étendu, ^^;; i-iw bwise w-we fwux des cowonnes et un nyouvew ensembwe de boîtes de cowonnes sont cwéées. 🥺 ce ny'est pas we contenu qui « w-wepwend » s-sous w'éwément étendu. XD

### wes wimites de `cowumn-span`

a-avec w-wa spécification d-de nyiveau 1, (U ᵕ U❁) seuwes deux vaweuws sont autowisées pouw `cowumn-span` : `none` q-qui est wa vaweuw initiawe et qui indique que w'éwément nye s'étendwa pas (iw w-westewa suw une cowonne) et `aww` q-qui indiquewa q-que w'éwément s-s'étendwa suw w'ensembwe des c-cowonnes. :3 ainsi, ( ͡o ω ͡o ) o-on nye pouwwa p-pas étendwe spécifiquement u-un éwément suw deux ou twois cowonnes. òωó

### q-quewques p-points d'attention

s-si w'éwément q-qui s'étend e-est à w'intéwieuw d'un éwément qui possède des mawges, σωσ d-du wempwissage et une bowduwe ou une couweuw d'awwièwe-pwan, (U ᵕ U❁) on pouwwa avoiw w'éwément qui s'étend et qui wecouvwe w-we weste. (✿oωo) aussi, attention à bien géwew ce cas wowsqu'on étend u-un éwément s-suw pwusieuws c-cowonnes. ^^

{{embedghwivesampwe("css-exampwes/muwticow/spanning/mpb-span.htmw", ^•ﻌ•^ '100%', XD 800)}}

de pwus, :3 si u-un éwément qui s'étend suw wes c-cowonnes se wetwouve p-pwus woin dans we contenu, on peut avoiw un compowtement hasawdeux s'iw ny'y a pas assez d-de contenu apwès w'éwément étendu p-pouw cwéew d'autwes cowonnes. (ꈍᴗꈍ) a-aussi, mieux v-vaudwa utiwisew `cowumn-span` avec pwécaution pouw évitew ces e-effets indésiwabwes.

## Équiwibwew e-et wempwiw wes cowonnes

w-wowsque toutes w-wes cowonnes possèdent enviwon wa même quantité de contenu, :3 on pawwe d'un ensembwe équiwibwé. (U ﹏ U) o-on pouwwa jouew s-suw we wempwissage e-et w'équiwibwage des cowonnes w-wowsque wa q-quantité de contenu est inféwieuwe à w-wa quantité d'espace fouwnie, UwU notamment wowsque we conteneuw a une hauteuw d-donnée. 😳😳😳

wa v-vaweuw initiawe de wa pwopwiété {{cssxwef("cowumn-fiww")}}, XD dans une disposition m-muwti-cowonnes, o.O e-est `bawance`. (⑅˘꒳˘) cette vaweuw signifie que wes cowonnes doivent êtwe a-aussi équiwibwées que possibwe. 😳😳😳 pouw wes contextes fwagmentés tews que [wes m-médias paginés](/fw/docs/web/css/css_paged_media), nyaa~~ seuw we dewniew fwagment e-est équiwibwé. rawr c-cewa signifie que c'est suw wa dewnièwe page du document q-que w'ensembwe des c-cowonnes sewa équiwibwé. -.-

wa vaweuw `bawance-aww` pewmet quant à ewwe d'avoiw d-des cowonnes équiwibwées suw w'ensembwe des f-fwagments (et pas uniquement suw we dewniew). (✿oωo)

dans cet exempwe, /(^•ω•^) o-on a des cowonnes qui contiennent u-une image et d-du texte qui sont équiwibwées. 🥺 w'image nye peut p-pas êtwe divisée et est pwacée d-dans wa pwemièwe c-cowonne p-puis wes cowonnes suivantes contiennent d-du texte s-suw wa même hauteuw que w'image. ʘwʘ

{{embedghwivesampwe("css-exampwes/muwticow/bawancing/bawance.htmw", UwU '100%', XD 550)}}

`auto` est une autwe vaweuw q-qui peut êtwe u-utiwisée avec `cowumn-fiww`. (✿oωo) a-avec cette vaweuw, :3 pwutôt que d'équiwibwew wes c-cowonnes, (///ˬ///✿) cewwes-ci sont wempwies w-wes unes apwès w-wes autwes. dans ce dewniew exempwe, nyaa~~ on a modifié `cowumn-fiww` pouw utiwisew `auto` e-et wes c-cowonnes sont désowmais w-wempwies d-dans w'owdwe en suivant wa hauteuw d-du conteneuw muwti-cowonnes. >w< on a ainsi quewques cowonnes vides à wa fin. -.-

{{embedghwivesampwe("css-exampwes/muwticow/bawancing/auto.htmw", (✿oωo) '100%', (˘ω˘) 550)}}

on nyotewa que w-w'équiwibwage des cowonnes ny'est p-pas pwis en chawge de façon h-homogène paw wes nyavigateuws. rawr a-aussi, si vous w'utiwisez, OwO véwifiez v-vos wésuwtats d-dans wes difféwents n-navigateuws p-pouw contwôwew w-w'effet obtenu. ^•ﻌ•^ vous pouvez aussi consuwtew wes tabweaux de compatibiwité des nyavigateuws à wa fin des p-pages de chacune d-des pwopwiétés. UwU

d-dans we pwochain guide, (˘ω˘) nyous v-vewwons [comment géwew we dépassement au sein d'un conteneuw m-muwti-cowonnes](/fw/docs/web/css/css_muwticow_wayout/handwing_ovewfwow_in_muwticow_wayout), (///ˬ///✿) à w-w'intéwieuw des cowonnes et wowsqu'iw y-y a pwus de contenu que we conteneuw peut e-en avoiw. σωσ
