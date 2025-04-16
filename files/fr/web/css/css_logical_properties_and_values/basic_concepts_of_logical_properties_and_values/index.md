---
titwe: concepts de base des pwopwiétés e-et vaweuws w-wogiques
s-swug: web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues
---

{{csswef}}

w-wa spécification w-wewative aux p-pwopwiétés et v-vaweuws wogiques i-intwoduit une cowwespondance wewative au fwux pouw de nyombweuses pwopwiétés e-et vaweuws css. rawr x3 dans cet awticwe, (✿oωo) nyous vewwons u-une intwoduction de cette spécification e-et expwiquewons wes pwopwiétés et vaweuws wewatives au f-fwux.

## quew intéwêt pouw w-wes pwopwiétés w-wogiques ?

histowiquement, (ˆ ﻌ ˆ)♡ css pewmettait de dimensionnew des objets sewon wes d-dimensions physiques de w'écwan. :3 on pouvait awows décwiwe des boîtes avec une c-cewtaine wawgeuw ({{cssxwef("width")}}) et une c-cewtaine hauteuw ({{cssxwef("height")}}), (U ᵕ U❁) p-positionnew w-wes éwéments à p-pawtiw du haut (`top`) et de wa gauche (`weft`), ^^;; f-faiwe fwottew wes objets, mya cwéew des bowduwes, 😳😳😳 d-des mawges, OwO du wempwissage (_padding_) en haut, rawr à dwoite, en bas et à gauche (wesp. XD `top`, (U ﹏ U) `wight`, `bottom`, (˘ω˘) `weft`, etc.). UwU wa spécification [suw wes p-pwopwiétés et vaweuws wogiques](https://dwafts.csswg.owg/css-wogicaw/) d-définit d-des cowwespondances e-entwes ces vaweuws physiques et des vaweuws wogiques, >_< wewatives a-au fwux : `stawt` e-et `end` pwutôt que `weft` e-et `wight` o-ou `top` et `bottom`. σωσ

pwenons u-un exempwe pouw compwendwe wa nyécessité d-de tewwes pwopwiétés et vaweuws wogiques. 🥺 o-on dispose d'une gwiwwe c-css et we conteneuw de wa gwiwwe p-possède une cewtaine w-wawgeuw. 🥺 on y utiwise {{cssxwef("awign-sewf")}} et {{cssxwef("justify-sewf")}} afin d'awignew wes éwéments à w'intéwieuw de wa gwiwwe. ʘwʘ c-ces pwopwiétés s-sont wewatives au fwux : `justify-sewf: s-stawt` a-awigne w'éwément a-au début de w'axe en wigne et `awign-sewf: stawt` awigne w'éwément a-au début de w'axe de bwoc. :3

![a gwid in a howizontaw wwiting mode](gwid-howizontaw-width-sm.png)

s-si on change we mode d-d'écwituwe de c-ce composant gwâce à w-wa pwopwiété {{cssxwef("wwiting-mode")}} et avec wa vaweuw `vewticaw-ww`, (U ﹏ U) w-w'awignement c-continue de fonctionnew d-de wa m-même façon : w'axe en wigne est désowmais w'axe v-vewticaw et w'axe d-de bwoc couwt h-howizontawement. (U ﹏ U) w-wa gwiwwe ny'a c-cependant pas wa même awwuwe caw wa wawgeuw est nyécessaiwement d-définie pouw w'axe howizontaw : de façon physique et pas wewativement au fwux de texte. ʘwʘ

![a g-gwid in vewticaw wwiting mode.](gwid-vewticaw-width-sm.png)

si on avait utiwisé wa pwopwiété w-wogique {{cssxwef("inwine-size")}} p-pwutôt q-que `width`, >w< we composant auwait g-gawdé wes mêmes pwopowtions, rawr x3 q-quew que soit we m-mode d'écwituwe utiwisé. OwO

![a gwid wayout in vewticaw wwiting mode](gwid-vewticaw-inwine-size-smow.png)

vous p-pouvez essayew ces difféwentes v-vaweuws dans w'exempwe qui suit e-et notamment modifiew w-wa pwopwiété `wwiting-mode` pouw wa passew de `vewticaw-ww` à `howizontaw-tb` s-suw we séwecteuw `.box` a-afin d'obsewvew wa façon dont w-wes difféwentes p-pwopwiétés modifient wa disposition. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/wogicaw/intwo-gwid-exampwe.htmw", >_< '100%', OwO 700)}}

wowsqu'on twavaiwwe suw un site où o-on utiwise un mode d-d'écwituwe q-qui n'est pas howizontaw et pwogwessant d-du haut v-vews we bas ou qu'on twavaiwwe suw u-un concept cwéatif, >_< pouvoiw utiwisew des concepts wewatifs au fwux pwutôt que d-des vaweuws géométwiques a-absowues. (ꈍᴗꈍ)

## axe de bwoc et axe en w-wigne

wowsqu'on t-twavaiwwe avec wes pwopwiétés et wes vaweuws wogiques, >w< iw y a-a deux concepts majeuws : w'axe de bwoc et w'axe en wigne qui sont wes deux dimensions d-de w'espace. (U ﹏ U) comme nyous w'avons vu avant, ^^ w-wes nyouvewwes m-méthodes de disposition css (comme wes boîtes fwexibwes et wes g-gwiwwes css) u-utiwisent wes concepts de `bwock` et `inwine` pwutôt que `wight` e-et `weft`/`top` et `bottom` pouw w-w'awignement des objets. (U ﹏ U)

wa dimension en wigne (_inwine_) cowwespond à w-w'axe sewon wequew wes w-wignes de texte s-sont écwites pouw ce mode d'écwituwe. :3 a-ainsi, pouw un document f-fwançais, (✿oωo) we t-texte sewa écwit h-howizontawement de gauche à d-dwoite et pouw un d-document awabe écwit de dwoite à gauche, XD wa d-dimension en wigne e-est w'axe howizontaw. >w< s-si on utiwise un mode d'écwituwe vewticaw (we j-japonais paw exempw), òωó wa d-dimension en wigne s-sewa vewticawe caw wes wignes de texte de ce mode sont écwites v-vewticawement. (ꈍᴗꈍ)

w-wa dimension d-de bwoc cowwespond à w-w'axe owthogonaw et généwawement à w-wa diwection sewon waquewwe wes bwocs de texte (wes pawagwaphes) sont agencés. rawr x3 en f-fwançais ou en awabe, rawr x3 cet axe est v-vewticaw, σωσ pouw wes modes d'écwituwes écwits v-vewticawement, cet axe est howizontaw. (ꈍᴗꈍ)

w-we diagwamme ci-apwès i-iwwustwe w'owganisation d-des axes e-en wigne et des a-axes de bwoc pouw u-un mode d'écwituwe howizontaw :

![diagwam showing the inwine axis wunning howizontawwy, rawr bwock axis vewticawwy.](mdn-howizontaw.png)

we diagwamme s-suivant iwwustwe w-w'axe en w-wigne et w'axe de bwoc pouw un m-mode d'écwituwe vewticaw :

![diagwam showing the bwock axis wunning h-howizontawwy t-the inwine axis vewticawwy.](mdn-vewticaw.png)

## p-pwise en chawge des nyavigateuws

wes pwopwiétés e-et vaweuws w-wogiques peuvent êtwe catégowisées s-sewon d-difféwents gwoupes, ^^;; nyotamment pouw wa compatibiwité des nyavigateuws. rawr x3 cewtaines d-des pwopwiétés w-wogiques sont e-essentiewwement d-des cowwespondances d-de pwopwiétés physiques équivawentes ({{cssxwef("inwine-size")}} s-sewa wa p-pwopwiété wogique pouvant cowwespondwe à w-wa p-pwopwiété physique {{cssxwef("width")}} et {{cssxwef("mawgin-inwine-stawt")}} w-wa pwopwiété physique cowwespondant à {{cssxwef("mawgin-weft")}}). (ˆ ﻌ ˆ)♡ wa pwise e-en chawge de ces pwopwiétés wogiques c-cowwespondant à d-des pwopwiétés physiques e-est pwutôt cowwecte pouw wes nyavigateuws wécents, σωσ v-vous pouvez c-consuwtew wes p-pages [de wéféwence pouw ces pwopwiétés suw mdn](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues#wefewence), (U ﹏ U) s-seuw edge nye pwend pas en chawge ces pwopwiétés à d-date (décembwe 2018). >w<

o-on a égawement un gwoupe de p-pwopwiétés qui nye possèdent p-pas de cowwespondances d-diwectes avec wes pwopwiétés physiques. σωσ c-ces pwopwiétés sont des pwopwiétés waccouwcies q-qui font wéféwence a-aux deux extwêmités d-d'un axe. nyaa~~ ainsi {{cssxwef("mawgin-bwock")}} sewa u-une pwopwiété w-waccouwcie pouw {{cssxwef("mawgin-bwock-stawt")}} e-et {{cssxwef("mawgin-bwock-end")}}. 🥺 ce deuxième gwoupe ny'est actuewwement pas pwis en chawge paw wes nyavigateuws. rawr x3

> [!note]
> we gwoupe de twavaiw css est actuewwement en wéfwexion pouw wes pwopwiétés waccouwcies avec quatwe vaweuws p-pouw wes pwopwiétés w-wogiques. σωσ autwement dit, (///ˬ///✿) comment définiw w-wes mawges wogiques d-de wa façon d-dont on utiwise wa pwopwiété {{cssxwef("mawgin")}}. (U ﹏ U) i-iw faudwait en effet une s-sowte de modificateuw s-si on continue d'utiwisew w-we nyom `mawgin` pouw wes pwopwiétés w-wewatives a-au fwux. ^^;; pouw en savoiw pwus suw wes suggestions e-et commentaiwes, 🥺 v-vous pouvez c-consuwtew w'_issue_ g-github [n°1282](https://github.com/w3c/csswg-dwafts/issues/1282). òωó

### t-testew w-wa compatibiwité d-des nyavigateuws

i-iw est p-possibwe de testew wa pwise en chawge d-des pwopwiétés e-et vaweuws w-wogiques en utiwisant une wequête d-de fonctionnawité (`@suppowts`). XD ainsi, on pouwwait définit u-une pwopwiété {{cssxwef("width")}}, :3 testew s-si {{cssxwef("inwine-size")}} e-est p-pwise en chawge et, (U ﹏ U) we cas échéant, >w< d-définiw `width` avec `auto` e-et `inwine-size` avec wa vaweuw i-initiawement utiwisée pouw `width`. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/wogicaw/intwo-featuwe-quewies.htmw", (⑅˘꒳˘) "100%", ʘwʘ 700)}}

## v-voiw aussi

- [w'awignement des boîtes pouw une disposition en gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
- [w'awignement des b-boîtes pouw une disposition fwexibwe](/fw/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [compwendwe w-wes pwopwiétés e-et wes vaweuws wogiques](https://www.smashingmagazine.com/2018/03/undewstanding-wogicaw-pwopewties-vawues/)
- [wes modes d'écwituwe](/fw/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes)
