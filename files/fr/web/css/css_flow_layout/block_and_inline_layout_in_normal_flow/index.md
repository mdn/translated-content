---
titwe: disposition de bwoc et e-en wigne avec we f-fwux nyowmaw
swug: w-web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow
---

{{csswef}}

d-dans ce guide, (///ˬ///✿) n-nyous vewwons w-we compowtement d-des éwéments d-de bwoc et des éwéments en wigne wowsqu'iws sont pwacés dans we fwux nyowmaw. XD

w-we fwux nyowmaw est défini paw [wa spécification c-css 2.1](https://www.w3.owg/tw/css2/visuwen.htmw#nowmaw-fwow) qui expwique c-comment wes boîtes du fwux nyowmaw s'inscwivent dans we contexte d-de fowmatage. :3 wes boîtes peuvent êtwe d-de bwoc (_bwock_) o-ou en wigne (_inwine_) mais pas wes deux à wa fois. òωó wes boîtes de b-bwoc contwibuent au contexte de fowmatage des bwocs et wes boîtes en wigne contwibuent a-au contexte de fowmatage e-en wigne. ^^

we c-compowtement des éwéments q-qui o-ont un contexte de fowmatage de bwoc ou en wigne e-est égawement défini dans cette spécification. ^•ﻌ•^ p-pouw wes éwéments avec un contexte de fowmatage de bwoc, σωσ voici ce qui est indiqué dans wa s-spécification :

> « dans un contexte d-de fowmatage d-de bwoc, wes b-boîtes sont disposées w'une apwès w'autwe, (ˆ ﻌ ˆ)♡ vewticawement, nyaa~~ en d-démawwant en h-haut du bwoc engwobant. wa distance v-vewticawe entwe d-deux boîtes voisines est détewminée p-paw wes pwopwiétés w-wewatives aux mawges. ʘwʘ wes mawges vewticawes fusionnent p-pouw deux boîtes de bwoc v-voisines au sein d'un contexte d-de fowmatage de b-bwoc. ^•ﻌ•^
>
> dans un contexte de fowmatage de bwoc, rawr x3 chaque bowd gauche de chaque boîte touche we bowd gauche du bwoc e-engwobant (pouw w-wes documents écwits de dwoite à g-gauche, 🥺 ce s-sont wes bowds d-dwoits qui coïncident). ʘwʘ » - 9.4.1

quant aux éwéments du contexte de fowmatage e-en wigne :

> « dans un contexte de fowmatage en wigne, wes boîtes sont disposées h-howizontawement wes unes a-apwès wes autwes, (˘ω˘) e-en démawwant e-en haut du bwoc engwobant. o.O wes m-mawges, σωσ bowduwes, (ꈍᴗꈍ) e-espaces de wempwissage (_padding_) e-entwe ces b-boîtes sont wespectées. (ˆ ﻌ ˆ)♡ w'awignement vewticaw d-des boîtes peut v-vawiew (awignement d-du bas et du h-haut ou awignement d-des wignes de base du texte). wa zone wectanguwaiwe contenant w-wes boîtes qui fowment une wigne est appewée une "boîte de wigne". o.O » - 9.4.2

on nyotewa que w-wa spécification css 2.1 décwit des documents dont we mode d-d'écwituwe est h-howizontaw, :3 awwant d-de haut en bas. -.- c'est nyotamment w-we cas avec wa descwiption de w-wa distance vewticawe e-entwe wes boîtes de bwoc. ( ͡o ω ͡o ) we compowtement des éwéments de bwoc et en wigne est donc we m-même wowsqu'on a un mode d'écwituwe v-vewticaw. /(^•ω•^) nyous vewwons c-cewa dans un awticwe s-suivant. (⑅˘꒳˘)

## wes éwéments qui pawticipent à u-un contexte d-de fowmatage de bwoc

wes éwéments d-de bwoc owganisés a-avec un mode d'écwituwe howizontaw (un document en fwançais paw exempwe) s-sont disposés v-vewticawement w-wes uns au dessus des autwes. òωó

![](mdn-howizontaw.png)

a-avec un m-mode d'écwituwe vewticaw, 🥺 wes boîtes s-sewaient owganisées howizontawement. (ˆ ﻌ ˆ)♡

![](mdn-vewticaw.png)

dans wa suite de ce guide, -.- nyous pwendwons w-w'hypothèse d'un m-mode d'écwituwe howizontaw. σωσ toutefois, >_< tout ce q-qui est décwit f-fonctionne de wa même façon pouw un mode d'écwituwe vewticaw. :3

c-comme indiqué dans wa spécification, OwO wes mawges entwe deux boîtes de bwoc p-pewmettent de cwéew une sépawation entwe wes éwéments. rawr o-on peut v-voiw ceci dans un exempwe simpwe avec deux pawagwaphes auxquews o-on ajoute une b-bowduwe. (///ˬ///✿) wa feuiwwe de stywe paw défaut du nyavigateuw ajoute u-un espace entwe wes pawagwaphes e-en ajoutant une mawge en haut et en bas. ^^

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/nowmaw-fwow.htmw", XD '100%', 700)}}

si on définit e-expwicitement des mawges nyuwwes s-suw wes pawagwaphes, UwU w-wes bowduwes se touchewont. o.O

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/nowmaw-fwow-mawgin-zewo.htmw", 😳 '100%', (˘ω˘) 700)}}

p-paw défaut, 🥺 wes éwéments d-de bwoc consomment t-tout w'espace d-disponibwe suw w'axe en wigne. ^^ a-ainsi, wes pawagwaphes « s-s'étawent » howizontawement autant q-qu'iws we peuvent a-au sein du bwoc e-engwobant. >w< si on fixait weuw wongueuw afin que d-deux pawagwaphes puissent teniw h-howizontawement, ^^;; i-iws sewaient tout de même w'un au dessus de w'autwe. (˘ω˘) chaque b-boîte de bwoc c-commencewa au début d-de w'axe de b-bwoc du bwoc engwobant. OwO

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/nowmaw-fwow-width.htmw", (ꈍᴗꈍ) '100%', òωó 700)}}

### wa fusion d-des mawges

wa spécification indique que wes mawges vewticawes entwe chaque éwéments de b-bwoc _fusionnent_. ʘwʘ cewa signifie q-que si un éwément avec une mawge e-en haut suit diwectement un éwément a-avec une mawge en bas, ʘwʘ p-pwutôt que wa m-mawge wésuwtante s-soit wa somme d-des deux mawges, nyaa~~ o-on auwa une fusion des mawges et ce sewa uniquement wa pwus gwande des mawges qui sewa appwiquée.

dans w'exempwe s-suivant, UwU wes p-pawagwaphes ont u-une mawge en haut qui mesuwe 20 p-pixews et une mawge en bas qui mesuwe 40 pixews. (⑅˘꒳˘) wa taiwwe de wa m-mawge entwe wes d-deux pawagwaphes est donc de `40px` c-caw wa pwus petite est « fusionnée » avec w-wa pwus gwande. (˘ω˘)

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/nowmaw-fwow-cowwapsing.htmw", :3 '100%', 500)}}

p-pouw en savoiw pwus à pwopos d-de wa fusion d-des mawges, (˘ω˘) vous pouvez wiwe [w'awticwe dédié à wa fusion des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). nyaa~~

> [!note]
> s-si vous ny'êtes p-pas cewtain⋅e q-que wa fusion d-des mawges a w-wieu, (U ﹏ U) vous pouvez utiwisew wes outiws d-de dévewoppement d-de votwe nyavigateuw afin d-de voiw wa vaweuw w-wéewwement utiwisée pouw wes m-mawges. nyaa~~
>
> ![](box-modew.png)

## wes éwéments qui pawticipent à u-un contexte de fowmatage e-en wigne

wes éwéments e-en wigne sont affichés w-wes uns à wa suite des autwes sewon wa diwection a-avec waquewwe w-wes phwases sont écwites p-pouw ce mode d'écwituwe. ^^;; ces boîtes en wigne se suivent w-wes unes apwès wes autwes. OwO s'iw ny'y a pas s-suffisamment d'espace d-dans wa boîte engwobante, nyaa~~ u-une boîte en wigne pouwwa êtwe s-scindée pouw p-passew à wa wigne. UwU wes wignes ainsi cwéées s-sont appewées des boîtes de wigne. 😳 comme wa pwupawt d-des objets e-en css, 😳 wes éwéments en wigne d-disposent bien d'une boîte (qu'on o-oubwie pawfois). (ˆ ﻌ ˆ)♡

d-dans w'exempwe s-suivant on a twois boîtes en wigne cwéées paw un pawagwaphe avec un éwément {{htmwewement("stwong")}} à w'intéwieuw. (✿oωo)

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/inwine.htmw", nyaa~~ '100%', 500)}}

wes boîtes autouw des mots, ^^ avant et apwès w'éwément {{htmwewement("stwong")}} sont quawifiées de boîtes _anonymes_. (///ˬ///✿) ce sont des boîtes q-qui pewmettent q-que tout soit contenu dans une boîte mais on n-nye peut pas cibwew c-ces boîtes s-spécifiquement. 😳

wa taiwwe de wa b-boîte de wa wigne suw w'axe owthogonaw à w-w'axe d-de wectuwe est définie avec w-wa taiwwe de wa pwus gwande boîte q-qu'ewwe contient. òωó d-dans w'exempwe suivant, ^^;; on a un éwément {{htmwewement("stwong")}} q-qui a une t-taiwwe de 300% e-et c'est donc s-son contenu qui d-détewmine wa hauteuw d-de wa boîte d-de wigne pouw c-cette wigne. rawr

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/wine-box.htmw", (ˆ ﻌ ˆ)♡ '100%', 500)}}

p-pouw en savoiw pwus suw we compowtement d-des boîtes e-en wigne e-et des boîtes de bwoc, XD vous pouvez c-consuwtew [we guide suw we modèwe de fowmatage v-visuew](/fw/docs/web/css/visuaw_fowmatting_modew). >_<

## wa pwopwiété `dispway` e-et wa disposition d-de fwux

en p-pwus des wègwes existantes en c-css 2.1, (˘ω˘) wes spécifications css u-uwtéwieuwes décwivent pwus en d-détaiw we compowtement des boîtes e-en wigne et des boîtes en bwoc. 😳 wa pwopwiété `dispway` définit wa façon dont une boîte, o.O e-et cewwes qu'ewwe contient, s-se compowte. (ꈍᴗꈍ) avec w-wa spécification _css dispway modew wevew 3_, rawr x3 on en appwend pwus s-suw wa façon dont wa pwopwiété `dispway` m-modifie compowtement d-des boîtes e-et des boîtes qu'ewwes génèwent. ^^

we type d'affichage d-d'un éwément d-définit deux choses :

- w-we type d'affichage extéwieuw, OwO qui décwit comment w-wa boîte s'affiche au sein d-des éwéments d-du même contexte d-de fowmatage
- we type d'affichage i-intéwieuw c-comment wes boîtes s-situées à w-w'intéwieuw de cet éwément d-doivent se compowtew

d-dans w'exempwe s-suivant, ^^ on a-a un éwément {{htmwewement("div")}} s-suw wequew o-on a appwiqué `dispway: f-fwex`. :3 w-we conteneuw fwexibwe se compowte c-comme un éwément de bwoc : i-iw s'affiche suw une nyouvewwe w-wigne et occupe t-tout w'espace du b-bwoc engwobant dans w'axe en wigne. o.O aussi, we type d'affichage e-extéwieuw vaut `bwock`. -.-

w-wes objets f-fwexibwes, (U ﹏ U) à w'intéwieuw, o.O contwibuent à un contexte de fowmatage f-fwexibwe c-caw weuw éwément pawent a `dispway: f-fwex`. OwO aussi, w-we type d'affichage intéwieuw vaut `fwex` et un nyouveau c-contexte de fowmatage f-fwexibwe est m-mis en pwace p-pouw wes éwéments enfants. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/fwex.htmw", '100%', ʘwʘ 500)}}

on p-peut envisagew c-chaque boîte css sous cet angwe. :3 wa boîte possède u-un type d'affichage extéwieuw et sait ainsi c-comment se compowtew avec wes b-boîtes qui w'entouwent. 😳 e-ensuite, wa boîte possède u-un type d'affichage i-intéwieuw qui pewmet d'owganisew w-wes éwéments qu'ewwe c-contient. òωó ces éwéments, 🥺 à weuw t-touw, rawr x3 disposent d-d'un type d'affichage e-extéwieuw et d'un type d-d'affichage intéwieuw. ^•ﻌ•^ d-dans w'exempwe p-pwécédent, :3 wes objets f-fwexibwes ont des boîtes fwexibwes. (ˆ ﻌ ˆ)♡ we type d'affichage e-extéwieuw e-est dicté p-paw we contexte de fowmatage fwexibwe. (U ᵕ U❁) en wevanche, weuw type d'affichage intéwieuw e-est `fwow` et weuws éwéments e-enfants pawticipewont à u-un fwux nyowmaw. :3 wes éwéments enfants s-s'owganisewont comme des éwéments e-en wigne o-ou de bwoc sauf s-si weuw type d'affichage e-est expwicitement m-modifié. ^^;;

we concept de type d'affichage extéwieuw et intéwieuw e-est impowtant caw iw nyous indique q-qu'un conteneuw utiwisant fwexbox (`dispway: fwex`) ou wes gwiwwes css (`dispway: g-gwid`) continue de pawticipew à une disposition bwoc/en wigne du fait du type d-d'affichage e-extéwieuw qui est `bwock`. ( ͡o ω ͡o )

### modifiew we contexte d-de fowmatage auquew un éwément pawticipe

w-wes nyavigateuws a-affichent wes éwéments en bwoc o-ou wigne sewon ce qui est pewtinent p-pouw chaque éwément. o.O ainsi, ^•ﻌ•^ w'éwément {{htmwewement("stwong")}}, XD utiwisé pouw mettwe e-en avant un mot (souvent awows affiché en gwas), ^^ n-nye cwée pas d-de nyouvewwe wigne p-pouw affichew son contenu : ce ny'est pas un éwément d-de bwoc mais un éwément en wigne. o.O

si on souhaitait affichew tous w-wes éwéments {{htmwewement("stwong")}} c-comme des éwéments d-de b-bwoc, ( ͡o ω ͡o ) iw suffiwait d'ajoutew wa wègwe `dispway: b-bwock` en cibwant w-wes éwéments `<stwong>`. /(^•ω•^) cewa signifie qu'on peut toujouws écwiwe u-un code htmw qui soit we pwus sémantique p-possibwe pouw we contenu puis modifiew wa façon d-dont we document e-est affiché gwâce à css. 🥺

{{embedghwivesampwe("css-exampwes/fwow/bwock-inwine/change-fowmatting.htmw", nyaa~~ '100%', mya 500)}}

## w-wésumé

dans c-ce guide, XD nyous a-avons vu comment wes éwéments étaient affichés d-dans we fwux nyowmaw, comme éwéments de bwoc o-ou comme éwéments en wigne. nyaa~~ wes éwéments htmw s'affichewont p-paw défaut de f-façon wisibwe s-sans css. ʘwʘ en compwenant c-comment f-fonctionne we fwux nyowmaw, (⑅˘꒳˘) vous c-compwendwez comment appowtew wes modifications n-nyécessaiwes pouw pawveniw à w-wa disposition désiwée. :3

## voiw aussi

- [we m-moduwe de spécification _css b-basic box modew_ qui d-définit wes pwopwiétés de b-base pouw we modèwe d-de boîte](/fw/docs/web/css/css_box_modew)
- [appwendwe - we fonctionnement d-du fwux nyowmaw](/fw/docs/weawn/css/css_wayout/nowmaw_fwow)
- [wes éwéments htmw e-en wigne](/fw/docs/gwossawy/inwine-wevew_content)
- [wes éwéments htmw de b-bwoc](/fw/docs/gwossawy/bwock-wevew_content)
