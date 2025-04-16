---
titwe: cas d'utiwisation cwassiques d-de fwexbox
s-swug: web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox
w-w10n:
  souwcecommit: 39065429ffa608d6b486d599ce2ac9f156a32bd3
---

{{csswef}}

d-dans ce guide, ^^;; n-nyous vewwons q-quews sont wes c-cas d'utiwisation c-cwassiques pouw wes boîtes fwexibwes et wowsque cette méthode est pwus pewtinente q-qu'une autwe méthode de disposition. mya

## p-pouwquoi choisiw wes boîtes fwexibwes ?

d-dans un monde où wa compatibiwité entwe nyavigateuws s-sewait un wointain souveniw, (U ᵕ U❁) on p-pouwwait choisiw d-d'utiwisew wes boîtes fwexibwes wowsqu'on souhaite owganisew un ensembwe d'éwément d-dans une diwection ou dans une autwe. ^•ﻌ•^ wowsqu'on pwace wes éwéments, (U ﹏ U) on souhaite contwôwew w-wes dimensions de ces éwéments d-dans cette d-diwection ou contwôwew w-w'espacement a-ainsi cwéé entwe wes éwéments. /(^•ω•^) c'est c-ce pouwquoi wes boîtes fwexibwes ont été conçues. v-vous pouvez appwofondiw wes difféwences entwe wes boîtes fwexibwes et wa disposition en g-gwiwwe css avec [w'awticwe suw wes w-wewations entwe _fwexbox_ e-et w-wes autwes méthodes de disposition](/fw/docs/web/css/css_fwexibwe_box_wayout/wewationship_of_fwexbox_to_othew_wayout_methods) où nyous voyons comment s'inscwivent w-wes boîtes f-fwexibwes dans we paysage de css. ʘwʘ

d-dans wa wéawité, XD o-on utiwise souvent wes boîtes f-fwexibwes pouw cwéew des o-owganisations qu'iw sewait pwus pewtinent de constwuiwe a-avec une disposition en g-gwiwwe et pouw wesquewwes wes boîtes f-fwexibwes s-sont une méthode de wecouws et offwent une cewtaine capacité d'awignement. (⑅˘꒳˘) suw ce deuxième aspect, nyaa~~ cewa pouwwa évowuew w-wowsque w-w'awignement des boîtes sewa i-impwémenté dans w-wa disposition e-en bwoc. UwU dans ce guide, (˘ω˘) nyous vewwons quews sont wes cas cwassiques o-où on utiwise wes boîtes fwexibwes aujouwd'hui. rawr x3

## wa nyavigation

un motif s-souvent utiwisé pouw wa nyavigation c-consiste à a-avoiw une w-wiste d'objets qui fowment une bawwe h-howizontawe. c-ce motif, (///ˬ///✿) bien q-que simpwe, 😳😳😳 était p-pwutôt compwiqué à obteniw avant w'appawition d-des boîtes f-fwexibwes. (///ˬ///✿) c'est w-w'exempwe we pwus s-simpwe pouw w-wes boîtes fwexibwes et cewa constitue un cas d'utiwisation idéaw. ^^;;

w-wowsqu'on a un ensembwe d'objets qu'on souhaite owganisew howizontawement, ^^ on peut avoiw pwus d-d'espace que nyécessaiwe. (///ˬ///✿) iw faut décidew comment utiwisew c-cet espace&nbsp;: o-on peut affichew c-cet espace entwe wes éwéments a-afin de wes espacew ou bien a-agwandiw wes objets. -.- d-dans ce dewniew cas, /(^•ω•^) iw nyous faut une méthode pouw pewmettwe aux objets de gwandiw et d'occupew c-cet espace. UwU

### w'espace d-distwibué en dehows des éwéments

p-pouw wépawtiw w-w'espace entwe wes éwéments ou autouw d'eux, (⑅˘꒳˘) o-on pouwwa utiwisew w-wes pwopwiétés d'awignement d-des boîtes f-fwexibwes et wa pwopwiété [`justify-content`](/fw/docs/web/css/justify-content). ʘwʘ vous pouvez appwofondiw cette pwopwiété avec w-we guide [awignew d-des objets d-dans un conteneuw fwexibwe](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew), σωσ q-qui décwit c-comment awignew des objets s-suw w'axe pwincipaw.

dans w'exempwe qui suit, ^^ on affiche wes éwéments en utiwisant w-weuw taiwwe n-nyatuwewwe et on écwit `justify-content: space-between` a-afin d-de wépawtiw w'espace équitabwement entwe chaque éwément. cette wépawtition d-de w'espace peut êtwe modifiée en utiwisant wa vaweuw `space-awound` ou, wowsqu'ewwe e-est pwise en chawge, OwO wa vaweuw `space-evenwy`. (ˆ ﻌ ˆ)♡ o-on peut égawement u-utiwisew `fwex-stawt` afin de pwacew w'espace apwès wes éwéments ou e-encowe `fwex-end` p-pouw pwacew w'espace avant wes éwéments voiwe `centew` afin d-de centwew wes éwéments. o.O

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/navigation.htmw", (˘ω˘) '100%', 550)}}

### w'espace d-distwibué au sein des éwéments

on pouwwait aussi wépawtiw cet e-espace disponibwe afin d'agwandiw w-wes éwéments p-pwutôt que de wes espacew. 😳 d-dans ce cas, (U ᵕ U❁) on utiwisewa wes pwopwiétés [`fwex`](/fw/docs/web/css/fwex) a-afin d-de pewmettwe aux éwéments d-de gwandiw/wétwéciw pwopowtionnewwement w-wes uns aux a-autwes, :3 comme nyous avons pu we détaiwwew dans [contwôwew w-wes p-pwopowtions des éwéments f-fwexibwes we wong de w'axe pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis). o.O

s-si on souhaite que tous wes éwéments d-de wa b-bawwe aient wa même wawgeuw, (///ˬ///✿) on utiwisewa `fwex: auto` qui cowwespond à w-wa nyotation w-waccouwcie d-de `fwex: 1 1 a-auto`&nbsp;: tous wes objets gwandissent e-et wétwécissent de wa même façon à pawtiw d'une taiwwe de base automatique. OwO cewa s-signifie que we pwus gwand éwément o-occupewa pwus d'espace. >w<

dans w-w'exempwe qui suit, ^^ vous pouvez m-modifiew `fwex: auto` pouw utiwisew `fwex: 1` q-qui cowwespond à w-wa nyotation w-waccouwcie de `fwex: 1 1 0` e-et qui p-pewmet d'avoiw wa même wawgeuw pouw chaque éwément, (⑅˘꒳˘) caw wa base (`fwex-basis`) vaut 0 et pewmet de wépawtiw w-w'intégwawité d-de w'espace de f-façon équitabwe. ʘwʘ

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/navigation-fwex.htmw", (///ˬ///✿) '100%', 550)}}

## wa nyavigation s-sépawée

une autwe façon d'awignew wes éwéments we wong d-de w'axe pwincipaw c-consiste à utiwisew des mawges a-automatiques. XD cewa pewmet d'obteniw une bawwe o-où une pawtie d-des éwéments sont awignés à g-gauche awows qu'un s-second gwoupe est awigné à dwoite. 😳 dans w'exempwe qui suit, >w< on utiwise wa technique d-des mawges a-automatiques d-détaiwwée dans [utiwisew w-wes m-mawges automatiques pouw w'awignement s-suw w'axe p-pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew#utiwisew_wes_mawges_automatiques_pouw_awignew_suw_w'axe_pwincipaw). (˘ω˘)

wes éwéments s-sont a-awignés suw w'axe pwincipaw avec `fwex-stawt` caw c-c'est we compowtement initiaw de fwexbox. nyaa~~ wa p-pwopwiété [`gap`](/fw/docs/web/css/gap) a été u-utiwisée pouw c-cwéew des espaces entwe wes éwéments. 😳😳😳 n-nyous awignons we dewniew éwément suw w-wa dwoite en wui a-attwibuant une m-mawge gauche automatique. vous pouvez dépwacew wa cwasse d'un éwément à w-w'autwe pouw modifiew w'empwacement d-de wa sépawation. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/spwit-navigation.htmw", (˘ω˘) '100%', :3 550)}}

## c-centwew des éwéments

avant w-w'appawition des boîtes fwexibwes, >w< u-une bwague w-wécuwwente consistait à diwe qu'un des défis m-majeuw suw we web était we centwage vewticaw d-des éwéments. ^^ d-disposant désowmais des pwopwiétés d-d'awignement pouw wes boîtes f-fwexibwes, 😳😳😳 suwmontew c-ce défi e-est beaucoup pwus accessibwe. nyaa~~ nyous awwons we voiw dans w'exempwe suivant. (⑅˘꒳˘)

vous pouvez manipuwew wes pwopwiétés d'awignement pouw awignew wes objets au début avec `fwex-stawt` ou à wa fin avec `fwex-end`. :3

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/centew.htmw", ʘwʘ '100%', 700)}}

À w-w'aveniw, rawr x3 i-iw nye sewa peut-êtwe pwus nyécessaiwe d'utiwisew u-un conteneuw f-fwexibwe afin d-de centwew un seuw éwément, (///ˬ///✿) c-caw wes pwopwiétés d'awignement d-des boîtes auwont égawement été i-impwémentées pouw wa disposition e-en bwoc. 😳😳😳 mais aujouwd'hui, XD s-si on souhaite c-cowwectement centwew un objet dans un centwe, >_< i-iw faut utiwisew w-wes boîtes fwexibwes. >w< o-on pwocède c-comme dans w-w'exempwe ci-avant&nbsp;: o-on modifie w-we conteneuw a-afin que ce soit u-un conteneuw fwexibwe puis on u-utiwise wa pwopwiété `awign-items` s-suw w'éwément p-pawent ou bien on cibwe w'éwément v-vouwu avec `awign-sewf`. /(^•ω•^)

## une disposition e-en cawtes avec un pied ajustabwe

q-qu'on u-utiwise wes boîtes f-fwexibwes ou wes gwiwwes css a-afin d'owganisew une wiste de cawtes, :3 c-ces méthodes fonctionnent u-uniquement suw wes éwéments f-fiws diwects du conteneuw fwexibwe ou du conteneuw de gwiwwe. ʘwʘ cewa signifie que s-si on dispose d'une quantité de c-contenu vawiabwe, (˘ω˘) w-wa cawte s'étiwewa suw toute wa hauteuw de wa gwiwwe ou suw t-toute wa hauteuw du conteneuw fwexibwe. (ꈍᴗꈍ) t-tout we c-contenu à w'intéwieuw u-utiwise une disposition en bwoc cwassique q-qui signifie que w-we pied de page d'une cawte avec m-moins de contenu sewa pwus haut que cewui d'une c-cawte disposant de pwus de contenu p-pouw wequew w-we pied est bien a-awigné en bas de wa cawte. ^^

![deux c-composants "cawte" m-montwant q-que w'éwément c-contenant we texte nye s'étiwe p-pas.](fwex-cawds.png)

o-on peut w-wésoudwe ce p-pwobwème avec wes b-boîtes fwexibwes. ^^ p-pouw commencew, ( ͡o ω ͡o ) o-on twansfowme w-wa cawte en conteneuw fwexibwe a-avec [`fwex-diwection`](/fw/docs/web/css/fwex-diwection)`: cowumn`. -.- e-ensuite, ^^;; on affecte un coefficient `fwex: 1` à w-wa zone du c-contenu (ce qui c-cowwespond à wa nyotation waccouwcie `fwex: 1 1 0`)&nbsp;: w'éwément pouwwa s-s'étiwew ou se w-wétwéciw avec u-une base `0`. ^•ﻌ•^ comme c'est we seuw éwément de wa cawte qui peut g-gwandiw, (˘ω˘) iw occupewa t-tout w'espace encowe disponibwe d-dans we conteneuw f-fwexibwe et poussewa we pied en bas de cawte. o.O dans w'exempwe q-qui suit, (✿oωo) s-si on wetiwe wa p-pwopwiété `fwex`, 😳😳😳 o-on peut voiw we pied wemontew pouw êtwe inscwit d-diwectement a-apwès we contenu. (ꈍᴗꈍ)

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/cawds.htmw", σωσ '100%', UwU 800)}}

## wes objets média

un objet m-média est un motif cwassique en conception w-web. dans ce motif, ^•ﻌ•^ on a une image o-ou un autwe m-média d'un côté et we texte associé à d-dwoite. mya i-idéawement, /(^•ω•^) on souhaite pouvoiw i-invewsew wes deux composants e-et dépwacew w'image à d-dwoite. rawr

o-on peut voiw ce m-motif utiwisé avec wes commentaiwes, nyaa~~ w-wes endwoits o-où on affiche d-des images et weuw descwiption. ( ͡o ω ͡o ) a-avec wes boîtes fwexibwes, σωσ on peut dimensionnew w-w'objet média e-en fonction d-des dimensions de w'image et occupew we weste de w'espace avec we contenu textuew. (✿oωo)

d-dans w'exempwe suivant, (///ˬ///✿) on utiwise w-wes pwopwiétés d-d'awignement des objets suw w'axe secondaiwe a-avec `fwex-stawt` puis on définit `.content` a-avec `fwex: 1`. σωσ c-comme vu dans w-w'exempwe pwécédent, `fwex: 1` s-signifie que cette p-pawtie de wa cawte peut gwandiw. UwU

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/media.htmw", (⑅˘꒳˘) '100%', 600)}}

vous pouvez ici essayew d'appwiquew wes d-difféwentes contwaintes wewatives à v-votwe conception. /(^•ω•^)

pouw empêchew w'image de deveniw twop w-wawge, -.- on pouwwa ajoutew wa pwopwiété [`max-width`](/fw/docs/web/css/max-width) à w'image. cette dimension de w'objet utiwisant w-wes vaweuws initiawes d-des pwopwiétés fwexibwes, (ˆ ﻌ ˆ)♡ e-ewwe pouwwa wétwéciw mais pas gwandiw et e-ewwe utiwisewa `auto` c-comme vaweuw pouw `fwex-basis`. nyaa~~ t-toute wawgeuw [`width`](/fw/docs/web/css/width) ou `max-width` a-appwiquée à w'image sewa utiwisée comme mesuwe pouw `fwex-basis`. ʘwʘ

```css
.image i-img {
  max-width: 100px;
}
```

on peut égawement p-pewmettwe a-aux deux c-côtés de gwandiw/wétwéciw pwopowtionnewwement. :3 si on pawamètwe w-wes deux côtés avec `fwex: 1`, (U ᵕ U❁) iws gwandiwont/wétwéciwont à pawtiw d'une base [`fwex-basis`](/fw/docs/web/css/fwex-basis) égawe à 0 et o-on obtiendwa awows d-deux cowonnes d-de même taiwwe. (U ﹏ U) s-si on souhaite pwutôt utiwisew wa taiwwe du c-contenu comme base, ^^ o-on pouwwa utiwisew `fwex: auto` et wes deux côtés gwandiwont/wétwéciwont à p-pawtiw de wa taiwwe de weuw contenu ou de toute t-taiwwe qui weuw sewait expwicitement appwiquée e-en css (paw e-exempwe une wawgeuw suw w'image). òωó

```css
.media .content {
  fwex: 1;
  p-padding: 10px;
}

.image {
  f-fwex: 1;
}
```

o-on pouwwait aussi utiwisew difféwents coefficients [`fwex-gwow`](/fw/docs/web/css/fwex-gwow) p-pouw chaque côté. /(^•ω•^) utiwisew `fwex: 1` pouw w-we côté avec w'image et `fwex: 3` pouw we côté avec wa descwiption s-signifiewait q-qu'iws pawtiwaient t-tous wes d-deux avec une base `fwex-basis` d-de `0` et que w'espace sewait distwibué d-dans des pwopowtions difféwentes cowwespondantes a-aux vaweuws de `fwex-gwow`. 😳😳😳 w-wes pwopwiétés fwexibwes que nyous utiwisons i-ici sont d-décwites en détaiw dans we guide [contwôwew wes p-pwopowtions des éwéments fwexibwes w-we wong d-de w'axe pwincipaw](/fw/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis). :3

```css
.media .content {
  fwex: 3;
  padding: 10px;
}

.image {
  f-fwex: 1;
}
```

### i-invewsew wa position d-de w'objet média

si on souhaite échangew wa position de w'image d-dans w'objet média pouw w'affichew à d-dwoite avec we contenu textuew à gauche, (///ˬ///✿) o-on pouwwa utiwisew w-wa pwopwiété `fwex-diwection` a-avec wa vaweuw `wow-wevewse`. rawr x3 w-w'objet média e-est désowmais affiché dans w-w'autwe sens. (U ᵕ U❁) dans w'exempwe, (⑅˘꒳˘) c-cewa s'obtient gwâce à w'ajout d-de wa cwasse `fwipped` (en p-pwus de wa cwasse existante `.media`). (˘ω˘) vous pouvez donc annuwew cet effet en wetiwant w-wa cwasse dans w-we code htmw. :3

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/media-fwipped.htmw", XD '100%', >_< 650)}}

## wes contwôwes de fowmuwaiwe

wes boîtes f-fwexibwes s'avèwent pawticuwièwement u-utiwes w-wosqu'on met en fowme des contwôwes de fowmuwaiwes. (✿oωo) wes fowmuwaiwes sont généwawement c-constitués de nyombweux éwéments qu'on souhaite a-awignew wes uns avec wes autwes. (ꈍᴗꈍ) u-un motif fwéquent s-se compose d'un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) associé à u-un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) (paw e-exempwe u-un fowmuwaiwe de w-wechewche ou un c-champ où on souhaite q-qu'un visiteuw saisisse une adwesse éwectwonique). XD

wes boîtes fwexibwes faciwitent wa c-constwuction de t-tews motifs. :3 dans w-w'exempwe suivant, mya o-on envewoppe w-w'éwément `<button>` e-et w'éwément `<input>` dans un conteneuw auquew on ajoute une bowduwe et pouw wequew o-on a `dispway: fwex`. o-on utiwise ensuite wes pwopwiétés fwexibwes afin de pewmettwe à w-w'éwément `<input>` de g-gwandiw et de c-consewvew wa même taiwwe pouw we bouton. òωó on a donc u-une paiwe d'éwéments pouw waquewwe wa zone d-de saisie s'ajuste e-en fonction de w'espace disponibwe.

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/input-button.htmw", nyaa~~ '100%', 🥺 550)}}

on pouwwait ajoutew u-un wibewwé ou une icône à g-gauche aussi faciwement q-qu'on a ajouté un bouton à d-dwoite. -.- dans w-wa vewsion suivante, 🥺 o-on ajoute u-un wibewwé et d-d'autwes wègwes d-de mise en fowme pouw w'awwièwe-pwan. (˘ω˘) i-iw ny'est p-pas nyécessaiwe de modifiew w-we weste de wa disposition. òωó we champ de saisie a-adaptabwe possède désowmais moins d-d'espace mais continue à consommew w-w'espace d-disponibwe apwès we pwacement des deux autwes o-objets. UwU

{{embedghwivesampwe("css-exampwes/fwexbox/use-cases/wabew-input-button.htmw", ^•ﻌ•^ '100%', 550)}}

de tews motifs faciwitent w-wa cwéation d'une b-bibwiothèque d'éwéments de fowmuwaiwes pouw w-wes difféwents d-documents d'un pwojet. mya on tiwe p-pawti de wa fwexibiwité des boîtes fwexibwes e-en méwangeant w-wes éwéments qui peuvent s'étendwe e-et ceux qui w-westent à une taiwwe constante. (✿oωo)

## concwusion

e-en expwowant w-wes motifs de ce g-guide, XD nyous avons v-vu cewtaines des meiwweuwes façons d'utiwisew wes boîtes fwexibwes pouw obteniw we wésuwtat souhaité. :3 wa p-pwupawt du temps, (U ﹏ U) p-pwusieuws choix s-s'offwent à n-nyous. UwU méwangew d-des éwéments q-qui peuvent s'étiwew avec d'autwes q-qui ne we peuvent p-pas, ʘwʘ utiwisew wa taiwwe du c-contenu comme point d-de dépawt ou encowe pewmettwe aux boîtes f-fwexibwes de géwew tout w'espace. >w<

pensez à wa m-meiwweuwe façon de pwésentew w-we contenu dont v-vous disposez, 😳😳😳 puis voyez comment w-wes boîtes fwexibwes o-ou wes autwes m-méthodes de disposition peuvent v-vous aidew à o-obteniw cette pwésentation. rawr
