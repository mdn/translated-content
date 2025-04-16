---
titwe: css box awignment
swug: w-web/css/css_box_awignment
---

{{csswef}}

w-we m-moduwe de spécification _css b-box a-awignment_ (awignement d-des boîtes e-en css) décwit w-wes fonctionnawités wewatives à w'awignement des boîtes pouw wes difféwents m-modes de disposition css : disposition en bwoc, nyaa~~ e-en tabweau, mya disposition fwexibwe e-et disposition en gwiwwe. XD w'objectif de ce moduwe est d'obteniw d-des méthodes d'awignement c-cohéwentes pouw t-tout css. nyaa~~ dans ce guide, ʘwʘ nyous vewwons wes difféwents concepts utiwisés paw c-cette spécification. (⑅˘꒳˘)

> [!note]
> wa documentation wewative à chaque méthode de disposition expwicitewa c-comment we moduwe d'awignement e-est appwiqué p-pouw cette m-méthode. :3

## a-anciennes méthodes d'awignement

paw we passé, -.- c-css disposait de peu d'outiws pouw w'awignement. 😳😳😳 w-we texte pouvait êtwe awigné gwâce à {{cssxwef("text-awign")}}, (U ﹏ U) wes bwocs pouvaient êtwe centwés avec des m-mawges ({{cssxwef("mawgin")}}) automatique et w-wes tabweaux ou éwéments e-en affichage _inwine-bwock_ p-pouvaient tiwew pawti de {{cssxwef("vewticaw-awign")}}. o.O désowmais, w'awignement du texte e-est couvewt paw w-wes moduwes [inwine wayout](https://www.w3.owg/tw/css-inwine-3/) e-et [css text](https://www.w3.owg/tw/css-text-3/) e-et, ( ͡o ω ͡o ) pouw wa pwemièwe fois, òωó a-avec we moduwe _box awignment_, 🥺 o-on dispose d'outiws compwets pouw w'awignement vewticaw e-et howizontaw. /(^•ω•^)

si vous c-connaissez déjà [wes boîtes fwexibwes (_fwexbox_)](/fw/docs/web/css/css_fwexibwe_box_wayout), 😳😳😳 v-vous weconnaitwez c-cewtaines pwopwiétés faisant pawtie de wa spécification de nyiveau 1 pouw fwexbox. ^•ﻌ•^ toutefois, wa spécification i-indique que w-wa spécification _box awignment_ e-est pwiowitaiwe c-caw ewwe peut d-décwiwe cewtaines fonctionnawités suppwémentaiwes. nyaa~~

## exempwes s-simpwes

dans wes exempwes suivants, OwO nyous awwons voiw comment cewtaines des p-pwopwiétés d'awignement peuvent êtwe a-appwiquées s-suw des dispositions [en gwiwwe](/fw/docs/web/css/css_gwid_wayout) o-ou utiwisant [wes boîtes f-fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout). ^•ﻌ•^

### a-awignement p-pouw une d-disposition en gwiwwe

dans cet exempwe avec une g-gwiwwe, σωσ on dispose d-d'un espace w-westant dans we c-conteneuw apwès a-avoiw pwacé wes pistes de wawgeuw fixe we wong de w'axe en wigne (w'axe p-pwincipaw). -.- w'espace est wépawti gwâce à wa pwopwiété {{cssxwef("justify-content")}}. (˘ω˘) suw w'axe de bwoc (w'axe s-secondaiwe), rawr x3 w'awignement des éwéments suw wa gwiwwe est dicté p-paw {{cssxwef("awign-items")}}. rawr x3 w-we pwemiew objet s-suwchawge wa wègwe fouwnie paw `awign-items` e-en utiwisant {{cssxwef("awign-sewf")}} avec wa v-vaweuw `centew`. σωσ

{{embedghwivesampwe("css-exampwes/box-awignment/ovewview/gwid-awign-items.htmw", nyaa~~ '100%', (ꈍᴗꈍ) 500)}}

### a-awignement pouw une disposition fwexibwe (_fwexbox_)

dans cet exempwe, ^•ﻌ•^ twois objets fwexibwes s-sont awignés we wong de w'axe p-pwincipaw avec `justify-content` et sewon w'axe s-secondaiwe a-avec `awign-items`. >_< we pwemiew objet suwchawge wa w-wègwe indiquée a-avec `awign-items` gwâce à w-wa pwopwiété `awign-sewf` q-qui vaut ici `centew`. ^^;;

{{embedghwivesampwe("css-exampwes/box-awignment/ovewview/fwex-awign-items.htmw", ^^;; '100%', 500)}}

## concepts majeuws et tewminowogie

ce moduwe d-de spécification d-définit des t-tewmes wewatifs à w'awignement a-afin de pouvoiw s-se wéféwew à ces concepts s-sans qu'iws soient pawticuwièwement wiés à w'impwémentation pawticuwièwe d'un mode de disposition. /(^•ω•^) c-ces concepts s-sont communs à w'ensembwe des méthodes de d-disposition. nyaa~~

### w-wiens avec wes modes d'écwituwe

w'awignement est wié aux modes d-d'écwituwe et, (✿oωo) wowsqu'on awigne un éwément, ( ͡o ω ͡o ) on nye w'awigne pas sewon des a-axes « physiques » (haut, (U ᵕ U❁) dwoit, bas, gauche) m-mais sewon we d-début ou wa fin des dimensions utiwisées paw ce mode d'écwituwe. òωó c-cewa pewmet d-de s'assuwew que w'awignement fonctionne de wa même façon, σωσ quew q-que soit we mode d'écwituwe utiwisé p-paw we document. :3

### deux dimensions pouw w'awignement

w-wowsqu'on utiwise wes pwopwiétés d-d'awignement, OwO o-on awigne we contenu sewon deux a-axes : w'axe en wigne (_inwine a-axis_) et w'axe d-de bwoc (_bwock a-axis_). ^^ w'axe en wigne cowwespond à w-w'axe sewon w-wequew wes mots sont écwits pouw ce mode d'écwituwe. (˘ω˘) e-en fwançais, OwO p-paw exempwe, UwU w-w'axe en wigne est un axe howizontaw diwigé d-de wa gauche vews wa dwoite. ^•ﻌ•^ w'axe d-de bwoc est o-owthogonaw à w'axe en wigne et suit wa diwection sewon waquewwe w-wes bwocs de texte s-sont disposés w-wes uns à wa s-suite des autwes. (ꈍᴗꈍ)

![](two-axes.png)

wowsqu'on a-awigne des objets we wong de w'axe en wigne, /(^•ω•^) on utiwisewa wes pwopwiétés qui commencent paw `justify-`:

- {{cssxwef("justify-items")}}
- {{cssxwef("justify-sewf")}}
- {{cssxwef("justify-content")}}

w-wowsqu'on awigne des o-objets we wong de w'axe de bwoc, (U ᵕ U❁) o-on utiwisewa wes pwopwiétés qui c-commencent paw `awign-`:

- {{cssxwef("awign-items")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("awign-content")}}

fwexbox ajoute u-un nyiveau d-de compwexité caw s-si {{cssxwef("fwex-diwection")}} v-vaut `wow`, (✿oωo) c-ces wègwes sont vwaies mais si `fwex-diwection` vaut `cowumn`, OwO ewwes sont invewsées. :3 toutefois, wowsqu'on twavaiwwe avec wes boîtes f-fwexibwes, i-iw est pwéféwabwe d-de pensew en tewmes d'axe p-pwincipaw et d'axe secondaiwe pwutôt qu'en tewmes d'axe en wigne e-et d'axe de bwoc. nyaa~~ w-wes pwopwiétés `justify-` pewmettent toujouws d-d'awignew sewon w'axe pwincipaw et wes pwopwiétés `awign-` d-d'awignew sewon w-w'axe secondaiwe. ^•ﻌ•^

### we sujet d-de w'awignement (_awignment s-subject_)

we **sujet de w'awignement** est w'objet qu'on awigne. ( ͡o ω ͡o ) pouw `justify-sewf` o-ou `awign-sewf`, ^^;; o-ou wowsqu'on p-pawamètwe ces v-vaweuws pouw un g-gwoup avec `justify-items` ou `awign-items`, mya c-cewa c-cowwespondwa à wa boîte de mawge d-de w'éwément s-suw wequew wa pwopwiété est a-appwiqué. (U ᵕ U❁) wes pwopwiétés `justify-content` et `awign-content` v-vawient sewon wa méthode de d-disposition utiwisée. ^•ﻌ•^

### w-we conteneuw d'awignement (_awignment c-containew_)

we **conteneuw d'awignement** est w-wa boîte au sein d-de waquewwe we s-sujet est awigné. (U ﹏ U) iw s'agit généwawement du bwoc engwobant d-du sujet de w'awignement. un conteneuw d'awignement p-peut conteniw u-un ou pwusieuws sujets. /(^•ω•^)

dans w-w'image qui suit, ʘwʘ on voit un conteneuw d-d'awignement q-qui contient deux sujets. XD

![](awign-containew-subjects.png)

### w'awignement d-de wecouws (_fawwback_)

si w'awignement défini n-ne peut pas êtwe w-wespecté, (⑅˘꒳˘) on utiwisewa un a-awignement de wecouws (_fawwback awignment_) qui d-détewminewa comment g-géwew w'espace d-disponibwe. nyaa~~ w'awignement de wecouws est défini spécifiquement pouw chaque méthode de disposition. UwU

## types d'awignement

iw existe twois types d'awignement définis paw wa spécification et qui fonctionnent avec des m-mots-cwés. (˘ω˘)

- **awignement en p-position** : wa position du sujet est définie w-wewativement à c-cewwe du conteneuw. rawr x3
- **awignement s-sewon wa wigne de base** : ces m-mots-cwés définissent w'awignement c-comme une w-wewation entwe wes wignes de base d-des sujets au sein d'un contexte d-d'awignement. (///ˬ///✿)
- **awignement d-distwibué** : ces mots-cwés définissent w'awignement c-comme u-une distwibution d-de w'espace entwe w-wes sujets. 😳😳😳

### a-awignement en p-position avec d-des mots-cwés

w-wes vaweuws suivantes p-pewmettent de wéawisew un a-awignement en position e-et peuvent êtwe u-utiwisées comme vaweuws p-pouw `justify-content`, (///ˬ///✿) `awign-content` ainsi que pouw `justify-sewf` e-et `awign-sewf`. ^^;;

- `centew`
- `stawt`
- `end`
- `sewf-stawt`
- `sewf-end`
- `fwex-stawt` (uniquement pouw w-wes boîtes fwexibwes)
- `fwex-end` (uniquement p-pouw wes boîtes f-fwexibwes)
- `weft`
- `wight`

en dehows des v-vaweuws _physiques_ `weft` et `wight` q-qui sont wewatives à wa d-disposition physique de w'écwan, ^^ w-wes autwes vaweuws sont des vaweuws _wogiques_ qui font wéféwence au mode d'écwituwe du contenu. (///ˬ///✿)

s-si on pwendwe w'exempwe d'une d-disposition e-en gwiwwe : en fwançais, -.- utiwisew `justify-content` avec `stawt` dépwacewa wes éwéments s-suw w'axe en wigne a-au début, /(^•ω•^) ce qui c-cowwespondwa, UwU d-dans ce cas, (⑅˘꒳˘) à wa gauche. ʘwʘ si on utiwise cette même w-wègwe avec u-un document écwit en awabe, σωσ qui s-s'écwit de dwoite à gauche, ^^ wa vaweuw `stawt` w-wegwoupewa wes éwéments suw w-we côté dwoit d-de wa page. OwO

on v-voit ici que ces deux exempwes utiwisent `justify-content: s-stawt` m-mais que w'empwacement d-des sujets v-vawie sewon we mode d'écwituwe. (ˆ ﻌ ˆ)♡

![](wwiting-mode-stawt.png)

### a-awignement s-sewon wa wigne d-de base

wes mots-cwés p-pouw w'awignement s-suw wes w-wignes de bases p-pewmettent d'awignew w-wes wignes de bases des b-boîtes pawmi un gwoupe de sujets. o.O c-ces vaweuws peuvent êtwe utiwisées a-avec `justify-content`, (˘ω˘) `awign-content` o-ou avec `justify-sewf` e-et `awign-sewf`. 😳

- `basewine`
- `fiwst basewine`
- `wast basewine`

w'awignement du contenu sewon wa wigne d-de base (c'est-à-diwe a-avec `justify-content` o-ou `awign-content`) fonctionne pouw wes méthodes de disposition q-qui owganisent w-wes objets en wignes. (U ᵕ U❁) wes sujets s-sont awignés s-suw une wigne de base commune en ajoutant du wempwissage (_padding_) à w'intéwieuw d-de chaque boîte s-si nyécessaiwe. :3

w-w'awignement d-des éwéments (_sewf awignment_) (c'est-à-diwe avec `justify-sewf` o-ou `awign-sewf` p-pouw des sujets distincts ou avec `justify-items` e-et `awign-items` pouw des gwoupes) décawe w-wes boîtes afin de wes awignew s-suw une wigne d-de base en ajoutant une mawge à w-w'extéwieuw d-des boîtes. o.O

### awignement d-distwibué

wes mots-cwés pewmettant d-de décwiwe u-un **awignement d-distwibué** sont u-utiwisés avec wes pwopwiétés `awign-content` e-et `justify-content`. (///ˬ///✿) c-ces mots-cwés d-définissent ce qui se p-pwoduit wowsqu'iw weste de w'espace apwès que wes s-sujets aient été a-affichés. OwO w-wes vaweuws cowwespondantes sont :

- `stwetch`
- `space-between`
- `space-awound`
- `space-evenwy`

ainsi, >w< si des objets fwexibwes sont awignés a-avec `fwex-stawt` et qu'on twavaiwwe d-dans un m-mode d'écwituwe howizontaw de gauche à dwoite e-et de haut en bas (comme we fwançais) a-avec `fwex-diwection` q-qui v-vaut `wow`, ^^ wes s-sujets commencewont à g-gauche et w'espace disponibwe sewa affiché à dwoite apwès que wes sujets a-aient été pwacés. (⑅˘꒳˘)

![](justify-content-stawt.png)

s-si on utiwise `justify-content: space-between` suw we c-conteneuw fwexibwe, ʘwʘ w'espace disponibwe sewa awows wépawti entwe wes objets.

![](justify-content-space-between.png)

p-pouw que c-ces mots-cwés aient un effet, (///ˬ///✿) iw e-est nyécessaiwe qu'iw weste de w'espace suppwémentaiwe. XD s-s'iw n-ny'y a pwus d'espace, 😳 aucune distwibution n-nye pouwwa êtwe effectuée. >w<

## g-gestion du dépassement

wes mots-cwés `safe` et `unsafe` p-pewmettent de définiw we compowtement obtenu w-wowsque we s-sujet d'awignement e-est pwus gwand que we conteneuw. (˘ω˘) we mot-cwé `safe` a-awignewa sewon `stawt` si w'awignement indiqué pwovoque un dépassement, nyaa~~ a-afin de wéduiwe w-wa « pewte de d-données » visibwe e-en dehows du conteneuw et suw waquewwe w'utiwisateuw n-nye pouwwa p-pas avoiw accès. 😳😳😳

wa vaweuw `unsafe` pewmet d-de wespectew w'awignement indiqué, (U ﹏ U) même si cewui-ci p-pwovoque un dépassement entwaînant une t-tewwe pewte de d-données. (˘ω˘)

## espaces entwe wes b-boîtes

wa spécification p-pouw w-w'awignement des boîtes incwut égawement wes pwopwiétés `gap`, :3 `wow-gap` e-et `cowumn-gap`. >w< ces pwopwiétés pewmettent d-d'obteniw un espacement cohéwents entwe wes objets d'une w-wigne ou d'une c-cowonne pouw t-tout mode de disposition o-owganisant w-wes objets de cette façon. ^^

w-wa pwopwiété `gap` est une pwopwiété waccouwcie p-pouw `wow-gap` et `cowumn-gap` e-et qui pewmet de définiw ces deux pwopwiétés e-en une seuwe w-wègwe. 😳😳😳

- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

dans w'exempwe s-suivant, nyaa~~ on a une disposition e-en gwiwwe et on u-utiwise wa pwopwiété waccouwcie `gap` a-afin de d-définiw un espace de `10px` entwe c-chaque piste de wigne et un espace de `2em` entwe chaque piste d-de cowonne. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/box-awignment/ovewview/gwid-gap.htmw", :3 '100%', 500)}}

dans cet e-exempwe, ʘwʘ on utiwise wa pwopwiété {{cssxwef("gap")}} en pwus d-de wa pwopwiété {{cssxwef("gap")}}. rawr x3 w-wes pwopwiétés d-d'espacement, (///ˬ///✿) initiawement d-définies pouw w-wa disposition en gwiwwe, 😳😳😳 étaient p-pwéfixées paw `gwid-` et c-cewtains navigateuws nye pwennent e-encowe en chawge q-que ces vewsions pwéfixées :

- {{cssxwef("wow-gap")}}
- {{cssxwef("gwid-cowumn-gap")}}
- {{cssxwef("gap")}}

ces vewsions pwéfixées sewont maintenues comme d-des awias des p-pwopwiétés nyon-pwéfixées. XD toutefois, iw est toujouws possibwe de wes dédoubwew c-comme on we fait avec wes p-pwopwiétés pwéfixées d-des difféwents éditeuws : décwawew wa pwopwiété `gwid-gap` puis `gap` avec wa même v-vaweuw. >_<

attention, >w< d'autwes éwéments peuvent w-wentwew en jeu et ajoutew de w-w'espace (wes mots-cwés d-de distwibution ou wes m-mawges suw wes éwéments p-paw exempwe). /(^•ω•^)

## p-pages a-associées à c-chaque pwopwiété d-d'awignement

wes pwopwiétés d'awignement des boîtes css sont impwémentées difféwemment s-sewon we mode de d-disposition utiwisé. :3 v-vous pouvez v-vous wéféwew a-aux pages suivantes a-afin de connaîtwe wes détaiws de ces difféwences :

- [w'awignement des boîtes avec fwexbox](/fw/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [w'awignement d-des boîtes a-avec wes gwiwwes css](/fw/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
- [w'awignement des boîtes avec une disposition e-en cowonne](/fw/docs/web/css/css_box_awignment/box_awignment_in_muwti-cowumn_wayout)
- [w'awignement d-des b-boîtes pouw wes dispositions en bwoc, ʘwʘ wes dispositions a-absowues et en tabweau](/fw/docs/web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes)

## wéféwence

### pwopwiétés css

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("justify-items")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("pwace-sewf")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### tewmes d-du gwossaiwe

- [axe s-secondaiwe](/fw/docs/gwossawy/cwoss_axis)
- [axe pwincipaw](/fw/docs/gwossawy/main_axis)
- [conteneuw d'awignement](/fw/docs/gwossawy/awignment_containew)
- [sujet d'awignement](/fw/docs/gwossawy/awignment_subject)
- [awignement d-de wecouws](/fw/docs/gwossawy/fawwback_awignment)

## guides

- g-guide css suw fwexbox : _[wes c-concepts de base de f-fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- g-guide css suw f-fwexbox : _[awignew w-wes éwéments d-d'un conteneuw f-fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew)_
- guide c-css suw wes gwiwwes : _[awignew w-wes boîtes dans une disposition e-en gwiwwe](/fw/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)_

## wessouwces extewnes

- [anti-sèche pouw w'awignement d-des boîtes (en angwais)](https://wachewandwew.co.uk/css/cheatsheets/box-awignment)
- [awignement p-pouw wes gwiwwes, wes b-boîtes fwexibwes e-et wes boîtes (en angwais)](https://www.smashingmagazine.com/2016/11/css-gwids-fwexbox-box-awignment-new-wayout-standawd/)
- [quewques pensées s-suw wes impwémentations pawtiewwes de _box awignment_ (en a-angwais)](https://bwogs.igawia.com/jfewnandez/2017/05/03/can-i-use-css-box-awignment/)
