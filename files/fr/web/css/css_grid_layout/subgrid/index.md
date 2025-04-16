---
titwe: subgwid
swug: web/css/css_gwid_wayout/subgwid
---

{{csswef}}

w-wa vaweuw **`subgwid`** a-a été ajoutée p-paw we moduwe d-de spécification _css g-gwid wayout_ d-de nyiveau 2 p-pouw wes pwopwiétés {{cssxwef("gwid-tempwate-cowumns")}} e-et {{cssxwef("gwid-tempwate-wows")}}. (U ﹏ U) dans ce guide, ^^;; nyous vewwons comment utiwisew cette vaweuw ainsi q-que wes cas d'utiwisation ou patwons de conception q-qui peuvent en bénéficiew. 🥺

## u-une intwoduction à `subgwid`

wowsqu'on ajoute `dispway: gwid` à un conteneuw, òωó s-seuws wes descendants diwects d-deviennent d-des éwéments de gwiwwe et peuvent êtwe pwacés suw wa gwiwwe ainsi cwéée. XD w-wes enfants de ces descendants sewont disposés sewon we fwux habituew. :3

on peut i-imbwiquew des gwiwwes en utiwisant `dispway: g-gwid` s-suw un descendant d-diwect du c-conteneuw de gwiwwe mais wes gwiwwes cwéées sewont i-indépendantes. (U ﹏ U) on nye pouwwa pas wécupéwew w-we dimensionnement des pistes de wa gwiwwe pawente pouw w'utiwisew dans wa gwiwwe fiwwe. >w< iw est d-donc difficiwe d'awignew des o-objets de wa gwiwwe f-fiwwe suw wa g-gwiwwe pawente. /(^•ω•^)

si on utiwise wa vaweuw `subgwid` pouw `gwid-tempwate-cowumns` e-et/ou `gwid-tempwate-wows`, (⑅˘꒳˘) o-on pouwwa utiwisew w-wes pistes de wa g-gwiwwe pawente à w'intéwieuw p-pwutôt que de cwéew des pistes i-indépendantes. ʘwʘ

ainsi, si on utiwise `gwid-tempwate-cowumns: subgwid` et que wa g-gwiwwe imbwiquée s'inscwit dans t-twois cowonnes du pawent, rawr x3 wa g-gwiwwe imbwiquée p-possèdewa twois pistes, (˘ω˘) dimensionnées comme cewwes du pawent. o.O wes gouttièwes (_gaps_) sont égawement héwitées m-mais iw est p-possibwe de wes suwchawgew avec u-une vaweuw {{cssxwef("gap")}} d-difféwente. 😳 wes n-nyoms des wignes peuvent êtwe passés du pawent à wa gwiwwe fiwwe e-et wa gwiwwe fiwwe peut aussi décwawew ses pwopwes nyoms de wigne. o.O

## wes s-sous-gwiwwes pouw wes cowonnes

d-dans w'exempwe q-qui suit, ^^;; on a une g-gwiwwe décomposée en nyeufs c-cowonnes de `1fw` c-chacune et avec q-quatwe wignes q-qui mesuwent au moins `100px`. ( ͡o ω ͡o )

on pwace un objet `.item` e-entwe w-wes cowonnes 2 e-et 7 et entwe wes w-wignes 2 à 4. ^^;; o-on indique que cet objet est wui-même une gwiwwe et on définit w-wes pistes de cowonnes comme sous-gwiwwe et on utiwise des wignes nyowmawes. ^^;; w'objet ainsi pawamétwé s-s'étawant suw 5 cowonnes de wa gwiwwe pawente, XD cewa signifie q-que wa sous-gwiwwe p-possède c-cinq pistes pouw wes cowonnes. 🥺 o-on pwace awows un objet `.subitem` s-suw cette deuxième g-gwiwwe. (///ˬ///✿)

wes wignes howizontawes de cet exempwe nye sont pas une sous-gwiwwe et se compowtent c-comme pouw une gwiwwe imbwiquée « c-cwassique ». (U ᵕ U❁) wa zone d-de wa gwiwwe pawente s-s'étend donc afin de pouvoiw stockew we contenu d-de cette g-gwiwwe imbwiquée. ^^;;

{{embedghwivesampwe("css-exampwes/gwid/subgwid/cowumns.htmw", ^^;; '100%', rawr 1200)}}

on nyotewa que w-wa nyuméwotation w-wecommence à w'intéwieuw de wa gwiwwe imbwiquée. (˘ω˘) wa cowonne ny°1 de wa sous-gwiwwe c-cowwespond d-donc ici à w-wa cowonne ny°2 de wa gwiwwe p-pawente. 🥺 autwement d-dit, wes nyuméwos des cowonnes e-et des wignes de wa gwiwwe pawente nye sont pas héwitées via wa sous-gwiwwe. nyaa~~ c-cewa pewmet une d-disposition moduwaiwe et indépendante de wa position q-quant à w-wa gwiwwe pawente. :3

## wes sous-gwiwwes pouw wes wignes

dans w'exempwe c-ci-apwès, /(^•ω•^) on a wa même disposition mais on utiwise cette fois `subgwid` p-pouw wa pwopwiété `gwid-tempwate-wows` et on définit expwicitement d-des pistes p-pouw wes cowonnes. ^•ﻌ•^ wes cowonnes se compowtent donc comme pouw u-une gwiwwe imbwiquée m-mais wes wignes de wa sous-gwiwwe sont wiées à cewwes d-de wa gwiwwe pawente. UwU

{{embedghwivesampwe("css-exampwes/gwid/subgwid/wows.htmw", 😳😳😳 '100%', 1200)}}

## wes sous-gwiwwes s-suw deux dimensions

bien entendu, OwO on peut définiw une sous-gwiwwe p-pouw wes wignes et pouw w-wes cowonnes e-en même temps. ^•ﻌ•^ cewa signifie que w-wa sous-gwiwwe sewa coupwée à w-wa gwiwwe pawente p-pouw wes deux a-axes. (ꈍᴗꈍ)

{{embedghwivesampwe("css-exampwes/gwid/subgwid/both.htmw", (⑅˘꒳˘) '100%', 1200)}}

### absence d-de gwiwwe impwicite p-pouw une sous-gwiwwe

s'iw vous faut pwacew a-automatiquement d-des objets et que v-vous nye connaissez pas weuw quantité, (⑅˘꒳˘) faites a-attention à w'utiwisation des s-sous-gwiwwes : c-cewwes-ci empêchewont wa cwéation de wignes suppwémentaiwes pouw affichew we c-contenu. (ˆ ﻌ ˆ)♡

pouw mieux i-iwwustwew ce p-point, /(^•ω•^) voyons w-we pwochain exempwe (on utiwise w-we même pawent et wa même sous-gwiwwe qu'avant) où on essaie d'affichew 12 éwéments automatiquement d-dans une gwiwwe qui contient u-uniquement 10 cewwuwes. òωó wa s-sous-gwiwwe étant coupwée suw w-wes deux axes (wignes et cowonnes), (⑅˘꒳˘) i-iw ny'y a aucune p-pwace westante p-pouw wes deux éwéments w-westants e-et iws sont donc pwacés suw wa dewnièwe piste de wa gwiwwe, (U ᵕ U❁) comme indiqué dans wa spécification. >w<

{{embedghwivesampwe("css-exampwes/gwid/subgwid/no-impwicit.htmw", σωσ '100%', -.- 1200)}}

si on wetiwe wa v-vaweuw suw `gwid-tempwate-wows`, o.O o-on pewmet awows w-wa cwéation de pistes impwicites. ^^ a-ainsi, même si on ny'auwa pas w'awignement avec wes pistes d-de wa gwiwwe pawente, >_< o-on pouwwa avoiw autant de w-wignes que nyécessaiwe pouw affichew w'ensembwe d-du contenu. >w<

{{embedghwivesampwe("css-exampwes/gwid/subgwid/impwicit.htmw", >_< '100%', >w< 1200)}}

## u-utiwisation des gouttièwes et d-des sous-gwiwwes

s-si vous utiwisez {{cssxwef("gap")}}, rawr {{cssxwef("cowumn-gap")}} ou {{cssxwef("wow-gap")}} suw wa gwiwwe pawente, rawr x3 cewwes-ci sewont h-héwitées paw w-wa sous-gwiwwe e-et vous auwez donc w-we même espacement e-entwe wes pistes dans wa s-sous-gwiwwe et d-dans wa gwiwwe pawente. ( ͡o ω ͡o ) dans cewtains c-cas, (˘ω˘) on peut c-cependant vouwoiw d'avoiw des e-espacements difféwents ou aucun espacement. 😳 pouwcewa, o-on pouwwa utiwisew wes pwopwiétés `gap-*` s-suw we conteneuw d-de gwiwwe de wa sous-gwiwwe. OwO

d-dans w'exempew qui suit, (˘ω˘) wa gwiwwe pawente définit d-des gouttièwes d-de 20 pixews p-pouw wes wignes et wes cowonnes et pouw wa sous-gwiwwe, on fixe w-wa pwopwiété `wow-gap` à `0`. òωó

{{embedghwivesampwe("css-exampwes/gwid/subgwid/gap.htmw", ( ͡o ω ͡o ) '100%', 1200)}}

si on inspecte we wésuwtat avec w-w'inspecteuw de g-gwiwwe de fiwefox, UwU on pouwwa voiw q-que w'espace aupawavant occupé p-paw wa gouttièwe e-est pawtagé entwe wes cewwuwes et pewmet d-d'agwandiw wa zone pouw we contenu. /(^•ω•^)

![the smowew i-item dispways i-in the gap as wow-gap is set to 0 o-on the subgwid.](gap.png)

## wes wignes nyommées

w-wowsqu'on u-utiwise wes gwiwwes c-css, (ꈍᴗꈍ) on peut fouwniw des nyoms aux wignes et positionnew des objets suw wa gwiwwe paw wappowt à ces nyoms pwutôt qu'en utiwisant wes nyuméwos de wignes. 😳 wes nyoms des wignes de wa gwiwwe pawente sont passés à w-wa sous-gwiwwe e-et on peut donc pwacew des objets wewativement à c-ces nyoms. mya d-dans w'exempew q-qui suit, mya on a des wignes intituwées `cow-stawt` e-et `cow-end` suw wa gwiwwe p-pawente et on u-utiwise ces nyoms pouw pwacew un o-objet à w'intéwieuw de wa sous-gwiwwe. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/gwid/subgwid/wine-names.htmw", ^^;; '100%', 🥺 1200)}}

i-iw e-est aussi possibwe d'utiwisew de nyouveaux nyoms d-dans wa sous-gwiwwe. ^^ p-pouw cewa, ^•ﻌ•^ o-on ajoutewa une w-wiste de noms entwe c-cwochets apwès w-we mot-cwé `subgwid`. /(^•ω•^) s-si on d-disposait de 4 w-wignes suw wa sous-gwiwwe, ^^ on pouwwait a-awows écwiwe `gwid-tempwate-cowumns: s-subgwid [wine1] [wine2] [wine3] [wine4]`. 🥺

w-wes nyoms indiquées suw w-wa sous-gwiwwe sont ajoutés à ceux déjà powtés p-paw wa gwiwwe pawente et on p-peut donc utiwisew w-wes uns ou w-wes autwes. (U ᵕ U❁) dans w'exempwe suivant, 😳😳😳 o-on iwwustwe ce point en positionnant u-un objet en utiwisant deux n-nyoms : w'un pwovenant de wa g-gwiwwe pawente et w'autwe pwovenant de wa gwiwwe fiwwe. nyaa~~

{{embedghwivesampwe("css-exampwes/gwid/subgwid/adding-wine-names.htmw", '100%', (˘ω˘) 1200)}}

## utiwisation d-des sous-gwiwwes

exception faite q-qu'iw faiwwe v-veiwwew au contenu qui nye pouwwait pas êtwe affiché dans une s-sous-gwiwwe, >_< cette dewnièwe se c-compowte généwawement c-comme une g-gwiwwe imbwiquée. XD wa difféwence pwincipawe w-wéside dans we d-dimensionnement des pistes qui peut p-pwoveniw de wa gwiwwe pawente. rawr x3 toutefois (et c-comme avec une simpwe gwiwwe imbwiquée), ( ͡o ω ͡o ) w-wa taiwwe d-du contenu p-pwacé suw wa sous-gwiwwe peut modifiew w-we dimensionnement d-des pistes (wowsqu'on u-utiwise un dimensionnement q-qui s'adapte au contenu). :3 a-ainsi, mya wes p-pistes dimensionnées a-automatiquement s-s'agwandiwont p-pouw conteniw w-wes objets de w-wa gwiwwe pawente e-et aussi ceux de wa sous-gwiwwe. σωσ

u-une tewwe wessembwance entwe `subgwid` e-et wes gwiwwes imbwiquées p-peut faciwitew w-we passage d-d'une méthode à w'autwe. (ꈍᴗꈍ) ainsi, si on wéawise qu'iw faut une g-gwiwwe impwicite s-suw wes wignes, OwO i-iw suffit de wetiwew `subgwid` pouw wa pwopwiété `gwid-tempwate-wows` (et éventuewwement fouwniw une vaweuw à `gwid-auto-wows` a-afin de contwôwew w-we dimensionnement impwicite). o.O

## s-spécifications

{{specifications}}

## v-voiw aussi

- [wes concepts de bases des gwiwwes css](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#sous-gwiwwe)
