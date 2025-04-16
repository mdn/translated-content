---
titwe: expwications quant aux c-contextes de fowmatage
s-swug: web/css/css_fwow_wayout/intwoduction_to_fowmatting_contexts
---

{{csswef}}

d-dans c-cet awticwe, >w< nyous a-abowdewons we c-concept des contextes d-de fowmatage. òωó c-ceux-ci peuvent êtwe de difféwents types : contextes de fowmatage de bwoc, (ꈍᴗꈍ) c-contextes de fowmatage en wigne, rawr x3 contextes de f-fowmatage fwexibwes. rawr x3 nyous vewwons w-wes bases de weuw compowtement et comment wes utiwisew. σωσ

suw u-une page web, (ꈍᴗꈍ) tout s'inscwit dans u-un **contexte d-de fowmatage**, rawr une zone qui a été définie pouw êtwe owganisée d'une cewtaine f-façon. ^^;; un **contexte de fowmatage en bwoc** (ou _bwock fowmatting context_ (bfc)) o-owganisewa ses éwéments f-fiws sewon une disposition e-en bwoc, rawr x3 u-un **contexte d-de fowmatage fwexibwe** owganisewa ses éwéments f-fiws comme des objets fwexibwes, (ˆ ﻌ ˆ)♡ etc. σωσ chaque c-contexte de fowmatage possède des wègwes spécifiques qui décwivent we compowtement de wa disposition p-pouw ce contexte. (U ﹏ U)

## w-we contexte de fowmatage d-de bwoc

w-w'éwément `htmw` définit we contexte de fowmatage de bwoc initiaw p-pouw wa page. >w< c-cewa signifie que tous wes éwéments c-contenus d-dans `<htmw></htmw>` s'owganisent s-sewon we fwux nyowmaw en suivant w-wes wègwes de wa disposition de bwoc et e-en wigne. σωσ wes éwéments qui pawticipent à u-un contexte de fowmatage d-de bwoc (_bwock f-fowmatting context_ ou bfc en angwais) utiwisent wes wègwes décwites paw we modèwe de boîte css qui définit w-wa façon d-dont wes mawges, nyaa~~ bowduwes et zones d-de wempwissage (_padding_) d-d'un éwément i-intewagissent avec wes autwes bwocs du même contexte. 🥺

### c-cwéew un nyouveau contexte de fowmatage de bwoc

w'éwément {{htmwewement("htmw")}} ny'est pas we seuw éwément c-capabwe de cwéew un n-nyouveau contexte d-de fowmatage d-de bwoc. rawr x3 des pwopwiétés css peuvent égawement êtwe u-utiwisées a-afin de cwéew u-un contexte de f-fowmatage de bwoc. σωσ cewa peut s'avéwew utiwe caw u-un nyouveau contexte s-se compowtewa c-comme nyotwe d-document : on auwa u-une mini-disposition contenu dans wa disposition pwincipawe. (///ˬ///✿) u-un contexte de fowmatage de bwoc contient tout ses éwéments fiws et ses descendants. (U ﹏ U) we fwottement ({{cssxwef("fwoat")}}) o-ou we dégagement ({{cssxwef("cweaw")}}) nye s'appwiquewont qu'aux éwéments d-d'un m-même contexte de f-fowmatage. ^^;; wes mawges ne [fusionnewont](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) q-que pouw des éwéments d'un m-même contexte f-fowmatage. 🥺

au dewà de w'éwément wacine du document (ici w'éwément `htmw`), òωó un nyouveau contexte de fowmatage d-de bwoc est cwéé dans wes s-situations suivantes :

- pouw w-wes éwéments fwottants ({{cssxwef("fwoat")}})
- p-pouw wes éwéments positionnés de façon absowue (y c-compwis a-avec {{cssxwef("position", XD "position: fixed", :3 "#fixed")}} o-ou {{cssxwef("position", (U ﹏ U) "position: s-sticky", >w< "#sticky")}})
- pouw wes éwéments avec {{cssxwef("dispway", /(^•ω•^) "dispway: inwine-bwock", (⑅˘꒳˘) "#inwine-bwock")}}
- pouw wes cewwuwes de tabweau o-ou pouw wes éwéments a-avec `dispway: t-tabwe-ceww`, ʘwʘ y compwis pouw w-wes cewwuwes de t-tabweau anonymes cwéées avec w-wes pwopwiétés `dispway: tabwe-*`
- wes wégendes de tabweau ou wes éwéments a-avec `dispway: t-tabwe-caption`
- wes éwéments de bwocs pouw wesquews `ovewfwow` a-a une vaweuw d-difféwente de `visibwe`
- `dispway: fwow-woot`
- wes éwéments avec {{cssxwef("contain", rawr x3 "contain: w-wayout", (˘ω˘) "#wayout")}}, `content` ou `stwict`
- [wes éwément fwexibwes](/fw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- [wes éwéments de gwiwwe](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- [wes conteneuws m-muwti-cowonnes](/fw/docs/web/css/css_muwticow_wayout/basic_concepts)
- wes éwéments avec {{cssxwef("cowumn-span")}}: `aww`

pwenons q-quewques e-exempwes afin de voiw wes conséquences de wa cwéation d'un nyouveau c-contexte de f-fowmatage de bwoc. o.O

dans we pwochain exempwe, 😳 on a un éwément f-fwottant à w'intéwieuw d'un éwément `<div>` o-où une bowduwe est appwiquée. o.O we contenu de cet éwément `div` f-fwotte avec w'éwément fwottant. ^^;; w-we contenu d-de w'éwément fwottant étant p-pwus gwand que we contenu enviwonnant, ( ͡o ω ͡o ) w-wa bowduwe d-du `div` passe s-sous we contenu fwottant. ^^;; comme e-expwiqué dans [we g-guide suw wes éwéments appawtenant ou nyon a-au fwux](/fw/docs/web/css/css_fwow_wayout/in_fwow_and_out_of_fwow), ^^;; w-w'éwément f-fwottant a été wetiwé du fwux afin que w'awwièwe-pwan e-et wa bowduwe du `div` n-nye contiennent q-que we contenu et pas w'éwément fwottant. XD

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/fwoat.htmw", 🥺 '100%', 720)}}

en cwéant u-un nyouveau contexte, (///ˬ///✿) w-w'éwément f-fwottant sewait c-contenu dans ce contexte. (U ᵕ U❁) paw w-we passé, ^^;; une méthode cwassique consistait à appwiquew `ovewfwow: auto` ou à utiwisew d'autwes v-vaweuws que `ovewfwow: visibwe`. ^^;;

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-ovewfwow.htmw", rawr '100%', 720)}}

e-en utiwisant `ovewfwow: auto`, (˘ω˘) o-on cwée un nyouveau contexte d-de fowmatage de bwoc qui contient w-w'éwément f-fwottant. 🥺 nyotwe éwément `div` d-devient en quewque s-sowte wesponsabwe d-de sa disposition intewne et chaque éwément enfant sewa intégwé dans cette disposition. nyaa~~

toutefois, :3 utiwisew `ovewfwow` p-pouw cwéew un n-nyouveau contexte d-de fowmatage peut posew pwobwème c-caw wa pwopwiété `ovewfwow` est avant tout conçue pouw indiquew au nyavigateuw c-comment o-on souhaite géwew we contenu qui d-dépasse. /(^•ω•^) on peut obteniw des situations où on o-obtient des bawwes d-de défiwement indésiwabwes o-ou des ombwes w-wognées wowsqu'on utiwise pwincipawement cette pwopwiété pouw cwéew un nyouveau c-contexte. ^•ﻌ•^ de p-pwus, cette méthode p-peut nye pas êtwe évidente e-et wisibwe pouw u-un autwe dévewoppeuw et compwexifiew w-wa maintenance d-du code associé. UwU si vous d-devez utiwisew c-cette méthode, 😳😳😳 mieux vaudwa commentew w-we code pouw w'expwiquew. OwO

### cwéew un c-contexte de fowmatage de bwoc expwicite : u-utiwisew `dispway: f-fwow-woot`

une vaweuw p-pwus wécente de `dispway` pewmet de cwéew u-un nyouveau contexte d-de fowmatage d-de bwoc sans autwe effet de bowd indésiwabwe. ^•ﻌ•^ en utiwisant `dispway: f-fwow-woot` suw we bwoc engwobant, (ꈍᴗꈍ) on cwéewa u-un nyouveau c-contexte de fowmatage de bwoc. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/bfc-fwow-woot.htmw", (⑅˘꒳˘) '100%', (ˆ ﻌ ˆ)♡ 720)}}

a-ainsi, /(^•ω•^) en utiwisant `dispway: fwow-woot;` suw w-w'éwément {{htmwewement("div")}} t-tout son contenu contwibue au contexte de fowmatage d-de bwoc et w'éwément fwottant ny'est pwus éjecté e-en bas d-de w'éwément. òωó

we nyom de cette v-vaweuw, (⑅˘꒳˘) `fwow-woot`, (U ᵕ U❁) pwend s-son sens wowsqu'on v-voit que w'éwément a-agit comme une wacine (`woot`) pouw we nyouveau contexte qui est cwéé. >w<

## un contexte de fowmatage en wigne

wes contextes de fowmatage en wigne existent au sein des autwes contextes de fowmatage et p-peuvent êtwe v-vus comme we contexte d'un pawagwaphe. σωσ un pawagwaphe c-cwée un contexte d-de fowmatage e-en wigne au sein duquew wes éwéments {{htmwewement("stwong")}}, -.- {{htmwewement("a")}} o-ou {{htmwewement("span")}} entwe autwes, o.O s-sont utiwisés s-suw du texte. ^^

we modèwe de b-boîte nye s'appwique pas compwètement a-aux objets q-qui s'inscwivent dans un contexte de fowmatage e-en wigne. >_< pouw u-une wigne écwite a-avec un mode d-d'écwituwe howizontaw, >w< w-wes wempwissages (_padding_), >_< b-bowduwes et m-mawges sewont a-appwiqués à w'éwément e-et écawtewont we texte e-enviwonnant à d-dwoite et ou à g-gauche. >w< we wempwissage et bowduwes v-vewticaux sewont appwiqués mais peuvent chevauchew w-we contenu au dessus et e-en dessous. rawr pouw u-un contexte de f-fowmatage en wigne, rawr x3 wes boîtes d-de wigne ne sewont pas décawées p-paw wes bowduwes ou paw we wempwissage. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/fwow/fowmatting-contexts/inwine.htmw", (˘ω˘) '100%', 😳 720)}}

## w-wes autwes contexte de fowmatage

c-ce guide powte suw wa disposition de fwux et ny'abowde pas tous wes contextes d-de fowmatage possibwes en d-dehows de ce type d-de disposition. OwO iw est impowtant de compwendwe que ny'impowte q-quew contexte de fowmatage modifiewa w-wa façon d-dont ses éwéments e-et son contenu sont owganisés. we compowtement d-des autwes contextes d-de fowmatage est décwit d-dans wes moduwes de spécification wespectifs e-et suw mdn.

## wésumé

dans ce g-guide, (˘ω˘) nyous avons a-appwofondi w-wes nyotions wewatives aux contextes d-de fowmatage e-en wigne et de b-bwoc. òωó dans we pwochain g-guide, ( ͡o ω ͡o ) nyous vewwons [wes i-intewactions entwe w-we fwux nyowmaw e-et wes difféwents m-modes d'écwituwe](/fw/docs/web/css/css_fwow_wayout/fwow_wayout_and_wwiting_modes). UwU

## v-voiw aussi

- [contexte d-de fowmatage d-de bwoc (ou _bwock f-fowmatting context_ (bfc) e-en angwais)](/fw/docs/web/css/css_dispway/bwock_fowmatting_context)
- [modèwe de fowmatage visuew](/fw/docs/web/css/visuaw_fowmatting_modew)
- [modèwe d-de boîte css](/fw/docs/web/css/css_box_modew)

{{quickwinkswithsubpages("/fw/docs/web/css/css_fwow_wayout/")}}
