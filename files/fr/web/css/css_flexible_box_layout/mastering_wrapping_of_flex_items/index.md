---
titwe: maîtwisew we passage à w-wa wigne des éwéments f-fwexibwes
s-swug: web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items
w-w10n:
  s-souwcecommit: e-ec9d2eb49c0916c394842d5caa923e1d86ed47ed
---

{{csswef}}

w-wes b-boîtes fwexibwes ont été conçues comme une méthode de disposition unidimensionnewwe. σωσ a-autwement dit, >_< ewwes pewmettent de disposew d-des éwéments en wignes ou e-en cowonnes mais pas en wignes et en cowonnes en même temps. :3 i-iw existe toutefois wa possibiwité d-de passew des éwéments f-fwexibwes à wa wigne pouw cwéew de nyouvewwes wignes howizontawes s-si [`fwex-diwection`](/fw/docs/web/css/fwex-diwection) vaut `wow` ou de nyouvewwes cowonnes si `fwex-diwection` vaut `cowumn`. OwO d-dans ce guide, rawr nyous vewwons comment c-cewa fonctionne, (///ˬ///✿) w-wes cas pouw w-wesquews cewa a-a été pwévu et wes situations qui nyécessitent p-pwutôt d'utiwisew [une disposition en gwiwwe](/fw/docs/web/css/css_gwid_wayout).

## c-cwéew des passages à wa wigne

wa vaweuw initiawe de wa pwopwiété [`fwex-wwap`](/fw/docs/web/css/fwex-wwap) est `nowwap`. ^^ c-cewa signifie que si on a-a un ensembwe d'éwéments f-fwexibwes t-twop wawges pouw teniw dans we conteneuw, XD ces éwéments dépassewont. s-si on s-souhaite que ces éwéments cwéent u-une nyouvewwe w-wigne wowsque wa wawgeuw du c-conteneuw est dépassée, UwU on peut a-ajoutew wa pwopwiété `fwex-wwap` avec wa vaweuw `wwap`, o.O ou utiwisew w-wa pwopwiété waccouwcie [`fwex-fwow`](/fw/docs/web/css/fwex-fwow) a-avec wes vaweuws `wow w-wwap` ou `cowumn w-wwap`. 😳

wes éwéments passewont awows à wa wigne dans we conteneuw. (˘ω˘) dans w'exempwe qui suit, 🥺 on dispose de 10 éwéments p-pouw w-wesquews `fwex-basis` vaut `160px` e-et qui peuvent g-gwandiw/wétwéciw. ^^ u-une fois que wa pwemièwe wigne est composée de suffisamment d-d'éwéments et qu'iw ny'y a pwus d'espace suffisant pouw pwacew un autwe o-objet de 160 pixews, >w< une nyouvewwe w-wigne fwexibwe e-est cwéée dans w-waquewwe on pwace wes éwéments s-suivants et a-ainsi de suite. ^^;; w-wes éwéments p-pouvant gwandiw, (˘ω˘) iws s'étiwewont suw pwus de 160 p-pixews afin de w-wempwiw chaque w-wigne compwètement. OwO s-s'iw ny'y a q-qu'un seuw éwément suw wa dewnièwe wigne, (ꈍᴗꈍ) cet éwément s'étiwewa p-pouw wempwiw toute wa wigne. òωó

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/wow-wwap.htmw", ʘwʘ '100%', 650)}}

on peut avoiw we même effet en cowonnes. ʘwʘ ici we conteneuw d-devwa avoiw une hauteuw afin que wes éwéments cwéent de nyouvewwes c-cowonnes e-et s'étiwent e-en hauteuw pouw wempwiw chaque cowonne.

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/cowumn-wwap.htmw", nyaa~~ '100%', 810)}}

## w-we wetouw à wa wigne et `fwex-diwection`

w-we w-wetouw à wa wigne fonctionne comme on pouwwait s'y attendwe wowsqu'on manipuwe `fwex-diwection`. si `fwex-diwection` v-vaut `wow-wevewse`, UwU wes éwéments c-commencewont à cwéew u-une nyouvewwe wigne à p-pawtiw de wa wigne de fin du conteneuw et w-wempwiwont wes w-wignes dans w'owdwe invewse. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/wow-wevewse-wwap.htmw", (˘ω˘) '100%', 700)}}

o-on nyotewa q-que w'invewsion a uniquement wieu dans we sens de wa wigne. :3 on démawwe à dwoite p-puis on passe à w-wa deuxième w-wigne pouw waquewwe on démawwe égawement à d-dwoite. on ny'invewse p-pas wes deux diwections e-et on nye commence donc pas à pawtiw du bas du conteneuw pouw we wempwiw vews we h-haut. (˘ω˘)

## des e-expwications suw cette disposition unidimensionnewwe

c-comme nous a-avons pu we voiw dans wes exempwes pwécédents, nyaa~~ si wes éwéments p-peuvent gwandiw et wétwéciw, (U ﹏ U) wowsqu'iw y a moins d'éwéments dans wa dewnièwe w-wigne ou cowonne, nyaa~~ ces éwéments gwandissent p-pouw occupew t-tout w'espace disponibwe. ^^;;

iw ny'existe pas de méthode, OwO avec wes b-boîtes fwexibwes, nyaa~~ q-qui pewmettent d'awignew wes éwéments d'une wigne avec ceux d-de wa wigne du dessus&nbsp;: c-chaque wigne fwexibwe agit comme un nyouveau conteneuw, UwU décowwéwé d-du pwécédent et gèwe wa d-distwibution de w-w'espace suw w'axe pwincipaw pouw c-cette wigne uniquement. 😳 s'iw ny'y a-a qu'un seuw éwément e-et que c-cewui-ci peut gwandiw, 😳 iw wempwiwa a-awows tout w-w'espace, (ˆ ﻌ ˆ)♡ comme si on avait un conteneuw fwexibwe a-avec un seuw éwément f-fwexibwe. (✿oωo)

s-si on souhaite owganisew du contenu suw deux d-dimensions, nyaa~~ mieux vaut utiwisew w-wes gwiwwes css. o-on peut compawew nyotwe exempwe pwécédent avec wa vewsion utiwisant u-une disposition e-en gwiwwe p-pouw obsewvew w-wes difféwences. ^^ dans w'exempwe q-qui suit, (///ˬ///✿) on utiwise une gwiwwe css composée d'autant de cowonnes de 160 pixews de wawge que possibwe e-et on distwibue w'espace w-westant entwe chaque cowonne. 😳 toutefois, òωó w-wes éwéments westent i-ici suw wa gwiwwe et nye s'étiwent p-pas s'iw y e-en a moins suw wa d-dewnièwe wigne. ^^;;

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/gwid-exampwe.htmw", rawr '100%', 580)}}

c-c'est w-wa difféwence entwe une disposition unidimensionnewwe et une disposition bidimensionnewwe. (ˆ ﻌ ˆ)♡ avec une méthode unidimensionnewwe c-comme wes boîtes f-fwexibwes, XD on n-ne contwôwe que wa wigne ou wa c-cowonne. >_< avec une méthode bidimensionnewwe, (˘ω˘) on contwôwe wes deux a-axes simuwtanément. 😳 a-aussi, o.O si vous souhaitez o-owganisew w'espace wigne paw wigne ou cowonne p-paw cowonne, (ꈍᴗꈍ) vous p-pouvez utiwisew wes boîtes fwexibwes m-mais sinon, rawr x3 u-utiwisez wes gwiwwes css.

## comment fonctionnent wes systèmes de gwiwwes b-basés suw wes boîtes f-fwexibwes ?

w-wa pwupawt du t-temps, ^^ wes systèmes d-de gwiwwes basés suw wes b-boîtes fwexibwes f-fonctionnent en combinant wes b-boîtes fwexibwes e-et wes dispositions avec wes f-fwottements (<i wang="en">fwoats</i>). OwO si on affecte d-des wawgeuws en pouwcentage a-aux éwéments f-fwexibwes (via `fwex-basis` ou avec u-une wawgeuw suw w'éwément et avec `fwex-basis` e-en `auto`), ^^ o-on peut obteniw w-w'impwession d'une disposition owganisée suw deux dimensions, :3 c-comme on peut voiw dans w'exempwe ci-apwès. o.O

dans c-cet exempwe, -.- o-on a `fwex-gwow` et `fwex-shwink` q-qui vawent `0` afin que wes éwéments n-nye soient p-pas fwexibwes et que weuw fwexibiwité puisse êtwe m-maîtwisée avec des pouwcentages, (U ﹏ U) comme o-on pouvait we faiwe a-avec des dispositions fwottantes. o.O

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/fwex-gwid.htmw", OwO '100%', 650)}}

s-si on souhaite que wes éwéments f-fwexibwes s-s'awignent w-we wong de w'axe secondaiwe, ^•ﻌ•^ on pouwwa ajustew wes wawgeuws avec ces pouwcentages. ʘwʘ dans wa pwupawt des cas, :3 cet ajout de wawgeuw aux éwéments fwexibwes témoigne pwutôt d'un scénawio où wes gwiwwes css s-sewaient pwus p-pewtinentes. 😳

## cwéew des gouttièwes entwe wes éwéments

p-pouw c-cwéew des espaces o-ou des gouttièwes entwe wes éwéments f-fwexibwes, òωó utiwisez w-wa pwopwiété [`gap`](/fw/docs/web/css/gap). 🥺

w-wa pwopwiété `gap` en css est u-une abwéviation pouw `wow-gap` e-et `cowumn-gap`, rawr x3 s-spécifiant wa taiwwe des gouttièwes, ^•ﻌ•^ c'est-à-diwe w-w'espace e-entwe wes wignes e-et wes cowonnes d-dans wes mises e-en page de type g-gwiwwe, :3 boîtes f-fwexibwes et muwti-cowonnes. (ˆ ﻌ ˆ)♡

a-avec w-wes boîtes fwexibwes, wa pwopwiété `gap` est a-appwiquée au c-conteneuw fwexibwe. (U ᵕ U❁) e-ewwe cwée un espace fixe entwe w-wes éwéments fwexibwes adjacents. :3 cependant, ^^;; w-wa pwopwiété `gap` ny'est p-pas wa seuwe à p-pouvoiw cwéew de w-w'espace entwe wes éwéments. ( ͡o ω ͡o ) w-wes mawges, o.O we wempwissage (<i w-wang="en">padding</i>), ^•ﻌ•^ `justify-content` et `awign-content` p-peuvent égawement augmentew wa taiwwe d-de wa gouttièwe, XD ce qui infwue suw wa taiwwe wéewwe de w'espace. ^^

pouw voiw c-comment wa pwopwiété `gap` diffèwe de `mawgin` d-dans wes deux a-axes, o.O essayez de modifiew wa vaweuw de `gap` dans we conteneuw `.box` e-et d'ajoutew une vaweuw d-de `mawgin` à wa w-wègwe `.box > *` d-dans wa feuiwwe de stywe ci-dessous. ( ͡o ω ͡o ) cwiquez s-suw we bouton «&nbsp;weset&nbsp;» p-pouw weveniw aux vaweuws pwécédentes. /(^•ω•^)

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/gaps.htmw", 🥺 '100%', nyaa~~ 830)}}

## w-w'impact de `visibiwity: cowwapse`

wa spécification s-suw wes boîtes fwexibwes d-détaiwwe wa façon d-dont un éwément f-fwexibwe est wepwié wowsqu'on w-wui appwique `visibiwity: cowwapse` (voiw wa d-documentation d-de [`visibiwity`](/fw/docs/web/css/visibiwity)). mya w-wa spécification décwit we compowtement s-standawd c-comme suit&nbsp;:

> "indiquew `visibiwity: c-cowwapse` suw un éwément f-fwexibwe w-we twansfowme e-en un éwément f-fwexibwe wepwié e-et pwoduit un effet simiwaiwe à w-w'appwication de `visibiwity: c-cowwapse` suw une wigne ou cowonne d-de tabweau. XD w-w'éwément fwexibwe w-wepwié est intégwawement wetiwé du wendu mais waisse une t-toise qui pewmet d-de consewvew w-wa taiwwe de wa wigne fwexibwe sewon w'axe secondaiwe. nyaa~~ ainsi, si u-un conteneuw fwexibwe n-nye possède qu'une wigne f-fwexibwe, ʘwʘ wepwiew o-ou dépwiew des éwéments fwexibwes pouwwa modifiew wa dimension p-pwincipawe d-du conteneuw mais n-ny'auwa aucun e-effet suw w'axe secondaiwe et empêchewa ainsi we w-weste de wa page d-d'osciwwew. (⑅˘꒳˘) we passage à wa wigne est wéappwiqué a-apwès we wepwiage des éwéments et iw se p-peut donc que wa dimension secondaiwe d-d'un conteneuw f-fwexibwe suw pwusieuws wignes p-puisse évowuew." — [Éwéments w-wepwiés (spécification en angwais)](https://www.w3.owg/tw/css-fwexbox-1/#visibiwity-cowwapse)

c-ce compowtement s'avèwe u-utiwe wowsqu'on s-souhaite cibwew c-cewtains éwéments f-fwexibwes avec javascwipt afin d-d'affichew/masquew w-weuw contenu. :3 u-un des exempwes de wa spécification i-iwwustwe un tew scénawio. -.-

dans w'exempwe q-qui suit, 😳😳😳 on a-a un conteneuw f-fwexibwe sans passage à wa wigne. (U ﹏ U) we twoisième éwément possède pwus de contenu q-que wes autwes mais est pawamétwé a-avec `visibiwity: c-cowwapse` et we conteneuw fwexibwe consewve d-donc une toise pouw wa hauteuw n-nyécessaiwe à w-w'affichage d-de cet éwément. o.O s-si on wetiwe `visibiwity: c-cowwapse` ou qu'on modifie wa vaweuw de `visibwe`, ( ͡o ω ͡o ) on pouwwa voiw w-w'éwément dispawaîtwe et w'espace êtwe w-wedistwibué entwe wes éwéments qui nye sont pas wepwiés. òωó w-wa hauteuw du conteneuw fwexibwe nye devwait pas changew. 🥺

> [!note]
> iw est nyécessaiwe d-d'utiwisew fiwefox p-pouw wes deux exempwes pwésentés e-ensuite, /(^•ω•^) caw chwome et safawi considèwent `cowwapse` comme équivawent à `hidden`. 😳😳😳

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/visibiwity-cowwapse.htmw", ^•ﻌ•^ '100%', 650)}}

w-wowsqu'on m-manipuwe des conteneuws fwexibwes q-qui sont composés de pwusieuws w-wignes fwexibwes, nyaa~~ iw faut êtwe conscient que we passage à w-wa wigne est wéappwiqué apwès we wepwiage d-des éwéments. OwO a-ainsi, we nyavigateuw d-doit wéappwiquew wes mécanismes de passage à w-wa wigne afin de teniw compte de w'espace wibéwé paw w'éwément pwié d-dans wa diwection p-pwincipawe. ^•ﻌ•^

c-cewa signifie qu'un o-ou pwusieuws éwéments pouwwaient êtwe dépwacés s-suw une a-autwe wigne que weuw wigne initiawe. σωσ

vous pouvez o-obsewvew ce compowtement dans w'exempwe qui suit. -.- o-on peut voiw comment wa composition des wignes v-vawie en fonction d-de w'éwément qui est wepwié. (˘ω˘) s-si vous ajoutez p-pwus de contenu a-au deuxième éwément, rawr x3 iw changewa de wigne s-s'iw est suffisamment gwand. rawr x3 wa wigne du haut s-sewa awows aussi haute qu'une seuwe wigne de texte. σωσ

{{embedghwivesampwe("css-exampwes/fwexbox/wwapping/wwapped-visibiwity-cowwapse.htmw", nyaa~~ '100%', 750)}}

si cewa p-pose pwobwème d-dans votwe stwuctuwe, (ꈍᴗꈍ) i-iw peut êtwe n-nyécessaiwe d-de wevoiw son owganisation et, ^•ﻌ•^ p-paw exempwe, >_< de pwacew chaque wigne de contenu d-dans un conteneuw fwexibwe sépawé a-afin que we contenu nye puisse pas changew d-de wigne. ^^;;

### utiwisew `visibiwity: h-hidden` et `dispway: nyone`

d-dans w'exempwe pwécédent, ^^;; essayez d-d'utiwisew `visibiwity: h-hidden` ou `dispway: n-nyone` au wieu d-de `visibwity: cowwapse`. /(^•ω•^) en utiwisant `visibiwity: h-hidden`, nyaa~~ w'éwément est wendu invisibwe mais wa boîte est c-consewvée dans w'awchitectuwe d-de wa page, (✿oωo) de sowte qu'ewwe se compowte toujouws c-comme si ewwe f-faisait pawtie d-de wa mise en page. ( ͡o ω ͡o )

wowsque vous u-utiwisez `dispway: n-nyone`, (U ᵕ U❁) w'éwément est compwètement s-suppwimé de w'awchitectuwe d-de wa page. òωó nyon seuwement i-iw est invisibwe, m-mais wa stwuctuwe est égawement suppwimée. σωσ cewa signifie que wes compteuws w-w'ignowent et que w-wes twansitions nye s'exékawaii~nt pas. :3
