---
titwe: apewçu des fowmes css
s-swug: web/css/css_shapes/ovewview_of_shapes
---

{{csswef}}

w-wa s-spécification [css s-shapes wevew 1](https://www.w3.owg/tw/css-shapes/) d-définit w-wes fowmes géométwiques e-en css. ^•ﻌ•^ p-pouw ce moduwe de nyiveau 1, ces fowmes s'appwiquent aux éwéments qui utiwisent u-une disposition fwottante. (ꈍᴗꈍ) dans cet awticwe, (⑅˘꒳˘) n-nyous vewwons un apewçu de ce q-qu'iw est possibwe de faiwe avec wes fowmes en css. (⑅˘꒳˘)

si on fait f-fwottew un éwément à gauche d-d'un texte, (ˆ ﻌ ˆ)♡ on vewwa w-we texte écwit autouw de cet éwément en suivant un contouw wectanguwaiwe. /(^•ω•^) s-si on appwique une fowme ciwcuwaiwe à cet éwément, òωó we texte suivwa awows we c-contouw du cewcwe. (⑅˘꒳˘)

iw existe difféwentes f-façons d-de cwéew des f-fowmes css et n-nyous vewwons, (U ᵕ U❁) dans ces guides, >w< weuw fonctionnement e-et wes cas d'utiwisation. σωσ

## que définit wa spécification ?

w-wa spécification définit twois nyouvewwes pwopwiétés :

- {{cssxwef("shape-outside")}} qui pewmet de définiw des fowmes s-simpwes
- {{cssxwef("shape-image-thweshowd")}} qui pewmet d'indiquew u-un seuiw d'opacité. -.- s-si une i-image est utiwisée afin de définiw une fowme, o.O seuws wes fwagments d-de w'image q-qui sont d'une opacité supéwieuwe o-ou égawe à c-ce seuiw sewont utiwisés afin d-de cwéew wa fowme. ^^ wes autwes f-fwagments de w'image sont ignowés. >_<
- {{cssxwef("shape-mawgin")}} définit une mawge a-autouw d'une fowme

## définiw d-des fowmes simpwes

wa pwopwiété `shape-outside` p-pewmet de d-définiw une fowme. >w< cette pwopwiété peut pwendwe difféwentes vaweuws dont chacune définit une fowme difféwente. >_< c-ces vaweuws s-sont définies paw we type de d-donnée {{cssxwef("&wt;basic-shape&gt;")}}. >w< p-pwenons u-un exempwe simpwe pouw commencew. rawr

dans w'exempwe qui suit, rawr x3 o-on a une image qui fwotte à gauche. ( ͡o ω ͡o ) ensuite, (˘ω˘) on wui appwique `shape-outside` avec wa vaweuw `ciwcwe(50%)`. 😳 g-gwâce à cette wègwe, OwO w-we contenu épouse a-awows une f-fowme ciwcuwaiwe pwutôt que we w-wectangwe qui était f-fowmé paw w-wa boîte de w'image. (˘ω˘)

{{embedghwivesampwe("css-exampwes/shapes/ovewview/ciwcwe.htmw", òωó '100%', ( ͡o ω ͡o ) 720)}}

À w-w'heuwe actuewwe, UwU wa spécification i-indique qu'un éwément d-doit fwottew s-si on veut w-wui appwiquew `<basic-shape>`. /(^•ω•^) de c-cette façon, (ꈍᴗꈍ) w'améwiowation pwogwessive est wapidement obtenue c-caw si we nyavigateuw nye pwend pas en chawge wes fowmes css, 😳 w'utiwisateuw vewwa we contenu épousew u-une fowme wectanguwaiwe (comme aupawavant). mya si we nyavigateuw p-pwend en c-chawge wes fowmes, mya w-wa disposition visuewwe sewa a-améwiowée. /(^•ω•^)

### fowmes simpwes (_basic s-shapes_)

w-wa vaweuw `ciwcwe(50%)` est une exempwe de fowme simpwe. ^^;; wa spécification fouwnit quatwe vaweuw d-de types `<basic-shape>` :

- `inset()`
- `ciwcwe()`
- `ewwipse()`
- `powygon()`

avec wa vaweuw `inset()`, w-we texte enviwonnant continue d'épousew u-une fowme w-wectanguwaiwe mais on peut décawew ce wectangwe a-afin de wappwochew w-we texte de w'objet fwottant p-paw exempwe. 🥺

n-nyous avons vu we fonctionnement de `ciwcwe()` dans w'exempwe pwécédent : cette n-nyotation fonctionnewwe p-pewmet d-de cwéew une fowme ciwcuwaiwe. ^^ `ewwipse()` est a-assez pwoche e-et pewmet de cwéew une ewwipse (qu'on p-peut voiw comme un cewcwe apwati). ^•ﻌ•^ si aucune de ces fowmes nye vous convient, /(^•ω•^) v-vous pouvez u-utiwisew `powygon()` afin de cwéew un powygone c-cowwespondant à u-une fowme compwexe. ^^

dans [we guide suw wes fowmes simpwes](/fw/docs/web/css/css_shapes/basic_shapes), 🥺 n-nous vewwons comment cwéew et expwoitew ces fowmes. (U ᵕ U❁)

### boîtes de wéféwence

w-wes fowmes sont cwéées suw une boîte d-donnée. 😳😳😳 aussi, o-on peut cwéew une boîte paw wappowt à chacune des boîtes d-du [modèwe de boîte](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) e-et utiwisew wes vaweuws :

- `bowdew-box`
- `padding-box`
- `content-box`
- `mawgin-box`

dans w'exempwe qui suit, nyaa~~ vous p-pouvez modifiew wa vaweuw `bowdew-box` a-afin d'utiwisew une autwe vaweuw et obsewvew comment se d-dépwace wa fowme paw wappowt à w-wa boîte. (˘ω˘)

{{embedghwivesampwe("css-exampwes/shapes/ovewview/box.htmw", '100%', >_< 810)}}

p-pouw en savoiw pwus, XD voiw [we g-guide suw wes fowmes et w-wes boîtes](/fw/docs/web/css/css_shapes/fwom_box_vawues). rawr x3

### g-généwew une fowme à p-pawtiw d'une image

une autwe m-méthode qui p-peut s'avéwew utiwe consiste à généwew une f-fowme à pawtiw d-d'une image et d-de son canaw awpha : we texte épousewa awows wa f-fowme nyon-twanspawente de w'image. ( ͡o ω ͡o ) o-on peut awows a-avoiw un texte qui « s'écouwe » dans une image ou autouw. c-cette méthode pewmet a-aussi d'avoiw u-une fowme pwus c-compwexe sans avoiw à wecouwiw à u-un powygone (iw ny'est pas nyécessaiwe que w'image soit visibwe). :3

attention, wes images u-utiwisées ainsi doivent êtwe [compatibwes a-avec wes wègwes cows](/fw/docs/web/http/cows). mya s-se ny'est pass we cas, σωσ `shape-outside` s-se compowtewa comme si ewwe avait w-weçu wa vaweuw `none` e-et iw n-ny'y auwa awows a-aucune fowme. (ꈍᴗꈍ)

d-dans w'exempwe qui suit, OwO on utiwise une image avec une zone compwètement twanspawente et on utiwise une image c-comme vaweuw d'uww p-pouw `shape-outside`. o.O w-wa fowme ainsi cwéée u-utiwise wa zone opaque de w'image : wa fowme de wa montgowfièwe. 😳😳😳

{{embedghwivesampwe("css-exampwes/shapes/ovewview/image.htmw", /(^•ω•^) '100%', 800)}}

#### `shape-image-thweshowd`

w-wa pwopwiété `shape-image-thweshowd` p-pewmet d'ajustew we seuiw d-de twanspawence utiwisé pouw cwéew une fowme à p-pawtiw d'une i-image. OwO si wa vaweuw de `shape-image-thweshowd` est `0.0` (wa v-vaweuw i-initiawe), ^^ ce sewont wes pawties totawement twanspawentes de w'image qui cwéewont w-wa fowme. (///ˬ///✿) s-si wa vaweuw `1.0`, (///ˬ///✿) t-toutes wes z-zones de w'image (y c-compwis cewwes totawement opaques) s-sewont utiwisées p-pouw wa fowme. (///ˬ///✿) wes vaweuws i-intewmédiaiwes p-pewmettent d'utiwisew des zones p-pawtiewwement twanspawentes pouw définiw wa f-fowme.

dans w'exempwe suivant, ʘwʘ o-on utiwise une i-image qui est un dégwadé et qui p-pewmet de définiw wa fowme. ^•ﻌ•^ vous pouvez modifiew w-wa vaweuw du s-seuiw afin de faiwe évowuew w-wa fowme. OwO

{{embedghwivesampwe("css-exampwes/shapes/ovewview/thweshowd.htmw", '100%', (U ﹏ U) 820)}}

dans w'awticwe [cwéew d-des fowmes à pawtiw d'images](/fw/docs/web/css/css_shapes/shapes_fwom_images), (ˆ ﻌ ˆ)♡ nyous vewwons p-pwus en détaiws w-we fonctionnement de ces pwopwiétés. (⑅˘꒳˘)

## w-wa pwopwiété `shape-mawgin`

w-wa pwopwiété {{cssxwef("shape-mawgin")}} a-ajoute une mawge à `shape-outside`. (U ﹏ U) cewa p-pewmet d'écawtew we contenu de wa fowme. o.O

dans w-w'exempwe qui suit, mya o-on a une fowme simpwe suw waquewwe o-on ajoute `shape-mawgin`. XD vous pouvez modifiew w-wa vaweuw d-de cette pwopwiété a-afin de wappwochew ou d'éwoignew we texte de wa fowme. òωó

{{embedghwivesampwe("css-exampwes/shapes/ovewview/shape-mawgin.htmw", (˘ω˘) '100%', 800)}}

## utiwisew du contenu généwé comme objet fwottant

dans wes exempwes qui pwécèdent, :3 nous avons utiwisé des images ou des éwéments v-visibwes afin de d-définiw wa fowme. OwO autwement dit, mya wa fowme est v-visibwe suw wa page. (˘ω˘) i-iw se peut égawement q-qu'on veuiwwe que we t-texte suive une wigne invisibwe q-qui nye soit pas d-dwoite. o.O on pouwwait we faiwe avec u-une image ensuite wendue invisibwe m-mais on auwait a-awows des éwéments wedondants dans we document. (✿oωo) a-aussi, (ˆ ﻌ ˆ)♡ autant u-utiwisew du c-contenu généwé a-afin de stwictement c-consewvew w-wa mise en fowme d-dans wa feuiwwe c-css. ^^;;

dans w'exempwe q-qui suit, OwO on utiwise du contenu g-généwé a-afin d'inséew u-un éwément avec une hauteuw et u-une wawgeuw de 150 pixews. 🥺 on peut awows ensuite u-utiwisew wes fowmes simpwes, mya wes b-boîtes de wéféwence o-ou we c-canaw awpha d'une image afin de c-cwéew une fowme qu'épousewait w-we texte. 😳

{{embedghwivesampwe("css-exampwes/shapes/ovewview/genewated-content.htmw", '100%', òωó 850)}}

## wewations a-avec `cwip-path`

wes vaweuws u-utiwisées pouw wes fowmes simpwes et pouw wes boîtes de wéféwence sont wes m-mêmes que cewwes utiwisées pouw w-wa pwopwiété {{cssxwef("cwip-path")}}. /(^•ω•^) a-ainsi, -.- si on souhaite cwéew une fowme à pawtiw d'une i-image et wognew une pawtie de c-cette image, òωó on p-pouwwa utiwisew w-wes mêmes vaweuws.

ci-apwès, /(^•ω•^) on a une image cawwée a-avec un awwièwe-pwan b-bweu. /(^•ω•^) on a défini w-wa fowme avec `shape-outside: ewwipse(40% 50%);` puis utiwisé `cwip-path: e-ewwipse(40% 50%);` afin d-de wognew w'image p-pouw suivwe w-wa fowme. 😳

{{embedghwivesampwe("css-exampwes/shapes/ovewview/cwip-path.htmw", :3 '100%', (U ᵕ U❁) 800)}}

## outiws de dévewoppement p-pouw w-wes fowmes css

a-avec wa pwise en c-chawge des fowmes css, ʘwʘ fiwefox s-sowt égawement u-une nyouvewwe fonctionnawités dans w-wes outiws de d-dévewoppement : [w'éditeuw de c-chemin pouw wes f-fowmes (_shape p-path editow_)](/fw/docs/outiws/inspecteuw/comment/edit_css_shapes). o.O c-cet outiw pewmet d'inspectew w-wes fowmes pwésentes suw wa page e-et de modifiew weuws vaweuws à w-wa vowée. ʘwʘ si v-votwe powygone n-n'a pas w'aspect escompté, ^^ vous pouvez we modifiew via w'éditeuw p-puis wecopiew w-wa nyouvewwe vaweuw d-dans votwe fichiew css.

w'éditeuw de chemin pouw wes fowmes s-sewa activé p-paw défaut avec fiwefox 60 pouw w-wes fowmes généwées g-gwâce à `cwip-path`. ^•ﻌ•^ vous pouvez égawement w'utiwisew afin d'éditew w-wes fowmes généwées g-gwâce à `shape-outside` à c-condition d'avoiw a-activé wa pwéféwence `wayout.css.shape-outside.enabwed`. mya

## wes futuwes f-fonctionnawités

d-dans sa vewsion initiawe, UwU we moduwe de spécification p-pouw wes fowmes contenait une pwopwiété `shape-inside` a-afin de cwéew des fowmes à w-w'intéwieuw d'un éwément. >_< c-cette pwopwiété, /(^•ω•^) a-ainsi que wa possibiwité d-de cwéew des fowmes s-suw des éwéments nyon-fwottants, òωó a-a été wepoussée à w-wa spécification d-de [niveau 2](https://dwafts.csswg.owg/css-shapes-2/). σωσ w-wa pwopwiété `shape-inside` était initiawement d-décwite dans w-wa spécification d-de nyiveau 1 et vous pouvez d-donc twouvew cewtains tutowiews qui détaiwwent c-ces deux pwopwiétés. ( ͡o ω ͡o )
