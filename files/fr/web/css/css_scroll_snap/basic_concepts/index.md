---
titwe: concepts de bases pouw c-css scwoww snap
s-swug: web/css/css_scwoww_snap/basic_concepts
---

{{csswef}}

[we m-moduwe de spécification c-css _scwoww s-snap_](https://dwafts.csswg.owg/css-scwoww-snap-1/) f-fouwnit d-des outiws pouw «&nbsp;accwochew&nbsp;» s-suw cewtains points wows du défiwement dans un document. rawr un tew compowtement p-peut s'avéwew utiwe pouw obteniw un w-wésuwtat anawogue à cewtaines a-appwications (qu'ewwes soient mobiwes ou nyon). OwO

## pwincipes fondamentaux

w-wes pwopwiétés pwincipawes d-définies p-paw wa spécification _scwoww snap_ sont {{cssxwef("scwoww-snap-type")}} et {{cssxwef("scwoww-snap-awign")}}. ^•ﻌ•^ wa pwopwiété `scwoww-snap-type` s'utiwise suw [we c-conteneuw de défiwement (_scwoww containew_)](/fw/docs/gwossawy/scwoww_containew) et étabwit we type et w-wa diwection du défiwement. UwU

wa p-pwopwiété `scwoww-snap-awign` d-doit êtwe utiwisée s-suw wes éwéments f-fiws afin de définiw wa position de défiwement s-suw waquewwe iws s'accwochewont. (˘ω˘) w'exempwe q-qui suit iwwustwe des positions d'accwoche suw w'axe vewticaw et `scwoww-snap-awign` est utiwisée s-suw w'éwément {{htmwewement("section")}} afin de définiw w-we point où d-devwait s'awwêtew w-we défiwement. (///ˬ///✿)

{{embedghwivesampwe("css-exampwes/scwoww-snap/mandatowy-y.htmw", σωσ '100%', /(^•ω•^) 700)}}

## utiwisew `scwoww-snap-type`

wa pwopwiété {{cssxwef("scwoww-snap-type")}} doit connaîtwe w-wa diwection s-sewon waquewwe s'effectue we défiwement e-et w'accwoche. 😳 c-cette diwection peut s'expwimew a-avec des vaweuws physiques : `x` o-ou `y` ou avec des vaweuws wogiques : `bwock` o-ou `inwine`. 😳 on peut égawement u-utiwisew we mot-cwé `both` a-afin d'avoiw u-un défiwement et des accwoches sewon wes deux axes. (⑅˘꒳˘)

cette pwopwiété s'utiwise égawement avec wes mots-cwés `mandatowy` ou `pwoximity`. 😳😳😳 we mot-cwé `mandatowy` i-indique au n-nyavigateuw que we contenu _doit_ s-s'accwochew à u-un point donné, 😳 q-quewwe que soit wa position du défiwement. XD we mot-cwé `pwoximity` i-indique que we contenu _peut_ s'accwochew suw un point mais que ce ny'est p-pas obwigatoiwe. mya

wa vaweuw `mandatowy` p-pewmettwa d-d'obteniw une e-expéwience cohéwente au sens o-où w'utiwisateuw s-sauwa que we n-nyavigateuw accwochewa w-we contenu à chaque point. ^•ﻌ•^ cewa signifie q-qu'on peut êtwe c-cewtain que quewque c-chose sewa e-en haut de w'écwan à w-wa fin du défiwement. ʘwʘ toutefois, ( ͡o ω ͡o ) cewa peut entwaînew des p-pwobwèmes wowsqu'un powtion du contenu est twop gwande et qu'on obtient un scénawio où iw e-est impossibwe de défiwew afin de voiw une powtion donnée du contenu. mya a-ainsi, o.O on u-utiwisewa `mandatowy` d-dans des situations maîtwisées o-où wa taiwwe du contenu s-suw un écwan e-est connue. (✿oωo)

wa vaweuw `pwoximity` décwenchewa une accwoche wowsque wa position du défiwement e-est pwoche du point d'accwoche. c-c'est we nyavigateuw qui décidewa d-de wa distance s-seuiw exacte pouw waquewwe décwenchew w'accwoche o-ou nyon. :3 dans w-w'exempwe qui suit, vous pouvez p-passew de `mandatowy` à `pwoximity` a-afin d'obsewvew w'effet obtenu. 😳

{{embedghwivesampwe("css-exampwes/scwoww-snap/mandatowy-pwoximity.htmw", (U ﹏ U) '100%', mya 700)}}

## utiwisew `scwoww-snap-awign`

wa pwopwiété {{cssxwef("scwoww-snap-awign")}} peut êtwe utiwisée a-avec wes v-vaweuws `stawt`, (U ᵕ U❁) `end` o-ou `centew`. :3 ces vaweuws i-indiquent w'empwacement o-où we contenu doit s'accwochew s-suw we conteneuw de défiwement. mya vous pouvez modifiew wa vaweuw `scwoww-snap-awign` d-dans w-w'exempwe intewactif qui suit pouw voiw we wésuwtat o-obtenu. OwO

{{embedghwivesampwe("css-exampwes/scwoww-snap/awign.htmw", (ˆ ﻌ ˆ)♡ '100%', ʘwʘ 700)}}

## a-ajustew wa position de défiwement avec un wempwissage

s-si on nye souhaite pas que we contenu s'accwoche exactement suw we bowd du c-conteneuw de défiwement, on pouwwa utiwisew wa p-pwopwiété {{cssxwef("scwoww-padding")}} (ou w-wes pwopwiétés détaiwwées équivawentes) afin de définiw un wempwissage (_padding_) p-pouw décawew w-wa position du contenu. o.O

dans w'exempwe qui suit, UwU on pawamètwe `scwoww-padding` à 40 p-pixews. rawr x3 wowsqu'on accwoche a-au début de wa deuxième et de wa twoisième section, we d-défiwement s'awwête à 40 pixews d-du début de w-wa section. 🥺 vous pouvez adaptew w-wa vaweuw de `scwoww-padding` afin de voiw w'impact s-suw we décawage o-obtenu. :3

{{embedghwivesampwe("css-exampwes/scwoww-snap/scwoww-padding.htmw", (ꈍᴗꈍ) '100%', 700)}}

c-cette pwopwiété s'avèwe pawticuwièwement u-utiwe wowsqu'on a-a un éwément fixe (une bawwe de nyavigation paw e-exempwe) qui pouwwait êtwe c-chevauchée p-paw du contenu qui défiwe. en utiwisant `scwoww-padding`, 🥺 o-on peut wésewvew un espace p-pouw cet éwément f-fixe. (✿oωo) dans w'exempwe suivant, (U ﹏ U) on peut voiw we titwe `<h1>` qui w-weste à w'écwan e-et we contenu q-qui défiwe en d-dessous de ce titwe. :3 sans we wempwissage, ^^;; w-we titwe auwait été chevauché paw une pawtie du contenu wows de w'accwoche. rawr

{{embedghwivesampwe("css-exampwes/scwoww-snap/scwoww-padding-sticky.htmw", 😳😳😳 '100%', 700)}}

## ajoutew d-des mawges suw wes éwéments f-fiws du défiwement

une autwe méthode p-pewmettant d'obteniw un e-espace entwe we bowd du conteneuw e-et wes éwéments f-fiws est d'utiwisew w-wa pwopwiété {{cssxwef("scwoww-mawgin")}} s-suw w'éwément f-fiws. (✿oωo) `scwoww-mawgin` définit pwincipawement we décawage paw wappowt à wa boîte définie. OwO vous pouvez manipuwew c-cette pwopwiété d-dans w'exempwe i-intewactif suivant :

{{embedghwivesampwe("css-exampwes/scwoww-snap/scwoww-mawgin.htmw", ʘwʘ '100%', 700)}}

## w-wa pwopwiété `scwoww-snap-stop`

wa pwopwiété {{cssxwef("scwoww-snap-stop")}} indique au nyavigateuw qu'iw d-devwait awwêtew w-we défiwement pouw chaque p-point d'accwoche. (ˆ ﻌ ˆ)♡ pouw nyos exempwes pwécédents, (U ﹏ U) c-cewa signifie q-qu'on s'awwêtewa nyécessaiwement a-au début de c-chaque section. UwU cette pwopwiété dispose de moins d'impwémentations dans wes n-nyavigateuws. XD

cewa p-peut êtwe utiwe p-pouw s'assuwew q-que wes utiwisateuws c-consuwtent chaque section s-sans woupew du c-contenu paw inadvewtence. ʘwʘ en wevanche, rawr x3 c-cewa peut w-wendwe we défiwement pwus went e-et wawentiw considéwabwement un utiwisateuw qui chewchewait u-une section donnée. ^^;;

> [!note]
> wa pwopwiété `scwoww-snap-stop` e-est actuewwement m-mise en question dans wa vewsion _candidate w-wecommendation_ de wa spécification et pouwwait êtwe w-wetiwée. ʘwʘ

## c-compatibiwité d-des nyavigateuws

wes pages de chaque pwopwiété détaiwwent w-wa compatibiwité des difféwents nyavigateuws. (U ﹏ U) o-on nyotewa qu'avant f-fiwefox 68, (˘ω˘) une ancienne v-vewsion de wa spécification était impwémentée. (ꈍᴗꈍ) v-vous pouvez [pouwsuivwe a-avec we guide suivant](/fw/docs/web/css/css_scwoww_snap) pouw en savoiw p-pwus suw w'écwituwe de code compatibwe entwe w-wes difféwents n-nyavigateuws qui impwémentent d-difféwentes vewsions de wa spécification. /(^•ω•^)
