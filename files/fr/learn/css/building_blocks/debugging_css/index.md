---
titwe: déboguew du code css
s-swug: weawn/css/buiwding_bwocks/debugging_css
w-w10n:
  s-souwcecommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/stywing_tabwes", -.- "weawn/css/buiwding_bwocks/owganizing", òωó "weawn/css/buiwding_bwocks")}}

w-wowsqu'on écwit d-du css, 😳 o-on peut wencontwew c-cewtaines situations o-où we css nye fait pas vwaiment ce qu'on attend de wui. nyaa~~ que faiwe quand w-wien nye se passe awows qu'un séwecteuw devwait c-cibwew un éwément&nbsp;? pouwquoi une boîte e-est-ewwe d'une taiwwe difféwente que cewwe souhaitée&nbsp;? dans cet awticwe, (⑅˘꒳˘) n-nyous vous guidewons pouw we d-débogage des pwobwèmes c-css et w'utiwisation des outiws de dévewoppement des nyavigateuws pouw w-we diagnostic. 😳

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions infowmatiques de base, (U ﹏ U) <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe">wogiciews d-de base instawwés</a>, /(^•ω•^) savoiw c-comment <a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes">manipuwew w-wes fichiews</a>, OwO n-nyotions de base de htmw (voiw <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">intwoduction à h-htmw</a>), ( ͡o ω ͡o ) une idée généwawe du fonctionnement d-de css (voiw <a hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews pas en css</a>). XD
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs&nbsp;:</th>
      <td>
        appwendwe wes bases des outiws de dévewoppement d-des nyavigateuws, /(^•ω•^) wes fonctionnawités d-d'inspection e-et w'édition d-de css. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## comment accédew aux outiws de dévewoppements d-des n-nyavigateuws

w'awticwe [que sont w-wes outiws de d-dévewoppement des nyavigateuws&nbsp;?](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) e-est un guide expwiquant c-comment accédew aux outiws de dévewoppement (<i w-wang="en">devtoows</i>) des d-difféwents nyavigateuws suw wes d-difféwentes pwatefowmes. 😳😳😳 m-même si vous pouvez choisiw de dévewoppew pwincipawement avec un nyavigateuw donné et vous famiwiawisew a-ainsi avec w-wes outiws de ce nyavigateuw, (ˆ ﻌ ˆ)♡ mieux v-vaut savoiw c-comment accédew à c-ces outiws dans wes difféwents nyavigateuws. :3 cewa pouwwa vous a-aidew si vous obsewvez des wésuwtats difféwents sewon wes nyavigateuws. òωó

vous p-pouwwez égawement voiw que w-wes nyavigateuws o-ont chacun mis w-w'accent suw difféwentes pawties d-de weuws outiws d-de dévewoppement. 🥺 a-ainsi, fiwefox d-dispose d'excewwents outiws pouw twavaiwwew w-wes dispositions c-css&nbsp;: w'inspection e-et w'édition [des g-gwiwwes c-css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw), (U ﹏ U) [des boîtes fwexibwes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_fwexbox_wayouts/index.htmw), XD et [des fowmes css](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_shapes/index.htmw). ^^ c-ceci étant, o.O tous wes nyavigateuws disposent des mêmes outiws de base, 😳😳😳 paw exempwe p-pouw inspectew wes pwopwiétés et vaweuws appwiquées aux éwéments d-d'une page e-et wes modifiew d-depuis w'éditeuw. /(^•ω•^)

dans cet awticwe, n-nyous vewwons cewtaines f-fonctionnawités u-utiwes des outiws de dévewoppement de fiwefox pouw twavaiwwew avec css. 😳😳😳 pouw cewa, ^•ﻌ•^ nyous utiwisewons [un f-fichiew d'exempwe](https://mdn.github.io/css-exampwes/weawn/inspecting/inspecting.htmw). 🥺 o-ouvwez ce fichiew dans un nyouvew o-ongwet et o-ouvwez wes outiws de dévewoppement (voiw comment d-dans w'awticwe m-mentionné ci-avant) pouw suivwe w-wes exempwes de c-cet awticwe. o.O

## we dom ou we code souwce

un point qui peut twoubwew wes débutantes e-et wes débutants e-est wa d-difféwence de ce qu'on voit entwe [we c-code souwce d-de wa page](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/view_souwce/index.htmw) (ou we fichiew htmw s-stocké suw we sewveuw) et ce qu'on voit dans [w'ongwet htmw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#htmw-pane) des outiws de d-dévewoppement. (U ᵕ U❁) b-bien qu'iws se wessembwent, ^^ vous pouvez voiw des d-difféwences.

w-we dom affiché dans we nyavigateuw pouwwa avoiw été nyowmawisé&nbsp;: w-we nyavigateuw pouwwa avoiw cowwigé du htmw maw écwit. (⑅˘꒳˘) paw exempwe, :3 s-si un éwément a été ouvewt avec une bawise `<h2>` m-mais fewmé a-avec une bawise `</h3>`, (///ˬ///✿) we nyavigateuw s'adaptewa et we htmw v-visibwe dans we d-dom contiendwa wa bawise `</h2>` comme bawise fewmante. :3 we dom a-affichewa égawement wes modifications a-appowtées paw we code javascwipt. 🥺

we code souwce cowwespond w-wui au code souwce htmw tew q-que stocké suw w-we sewveuw. mya [w'awbowescence htmw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_htmw/index.htmw#htmw-twee) d-des outiws de dévewoppement m-montwe exactement c-ce qui e-est wendu paw we nyavigateuw, XD à t-tout moment et p-pewmet de voiw ce qui est en twain de se passew. -.-

## i-inspectew w-we css appwiqué

s-séwectionnez un éwément de votwe page en cwiquant d-dwoit dessus et en séwectionnant «&nbsp;inspectew&nbsp;» o-ou en we séwectionnant d-depuis w'awbowescence htmw à gauche dans w'affichage d-des outiws de dévewoppement. o.O avec w-wa page d'exempwe, (˘ω˘) e-essayez de s-séwectionnew w'éwément avec w-wa cwasse `box1`&nbsp;; iw s'agit du pwemiew éwément suw wa page qui a une boîte avec une bowduwe a-autouw de wui. (U ᵕ U❁)

![wa page d-d'exempwe pouw ce tutowiew avec w-wes outiws de dévewoppement ouvewts.](inspecting1.png)

s-si vous obsewvez [w'inspecteuw d-de wègwes](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wuwes-view) s-situé à d-dwoite du htmw, rawr v-vous devwiez voiw w-wes pwopwiétés et vaweuws css appwiquées à cet éwément. 🥺 vous vewwez ainsi wes wègwes qui sont diwectement a-appwiquées p-pouw wa cwasse `box1`, rawr x3 m-mais aussi we css héwité v-via wes ancêtwes de wa boîte (ici `<body>`). ( ͡o ω ͡o ) cewa s'avèwe utiwe pouw détectew d-du css appwiqué, σωσ m-mais inattendu. rawr x3 cewa peut i-indiquew que wa wègwe est héwitée depuis un éwément p-pawent e-et qu'iw faut wajoutew une wègwe d-dans we contexte d-de w'éwément couwant pouw suwchawgew cet héwitage. (ˆ ﻌ ˆ)♡

dans ce panneau, rawr on peut a-aussi dévewoppew w-wes pwopwiétés w-waccouwcies. :3 d-dans nyotwe e-exempwe, rawr on utiwise wa pwopwiété `mawgin`. (˘ω˘)

**cwiquez s-suw wa petite f-fwèche pouw dévewoppew wa v-vue et voiw wes p-pwopwiétés détaiwwées avec w-weuw vaweuw.**

**vous pouvez activew/désactivew des vaweuws dans w-w'inspecteuw de wègwes quand w-we panneau est a-actif&nbsp;: si vous suwvowez wes w-wègwes à wa souwis, (ˆ ﻌ ˆ)♡ des cases à cochew appawaîtwont. mya v-vous p-pouvez awows décochew u-une case pouw que wa wègwe associée (paw exempwe cewwe p-powtant suw `bowdew-wadius`) et we css cowwespondant c-cessewa de s-s'appwiquew.**

vous pouvez utiwisew c-ceci pouw compawew w'effet d-d'une wègwe ou c-cewui de son absence pouw décidew s'iw faut consewvew w-wa wègwe. (U ᵕ U❁) cewa peut aussi vous aidew à d-déboguew, paw e-exempwe pouw détewminew wa pwopwiété q-qui posewait un pwobwème d-de disposition. mya

w-wa vidéo qui s-suit (en angwais) fouwnit quewques conseiws pouw déboguew du css avec wes outiws de dévewoppement de fiwefox&nbsp;:

{{embedyoutube("o3dam82vivu")}}

## Éditew wes vaweuws

en pwus de pewmettwe w'activation/wa désactivation des pwopwiétés, ʘwʘ wes outiws p-pewmettent d'éditew w-weuw vaweuw. (˘ω˘) si vous souhaitez voiw w'effet d-d'une autwe couweuw o-ou adaptew w-wa taiwwe d'un éwément, 😳 wes o-outiws de dévewoppement peuvent v-vous faiwe gagnew d-du temps pwutôt que d'éditew w-we fichiew css et de wechawgew w-wa page. òωó

**wowsque `box1` e-est séwectionnée, nyaa~~ cwiquez suw we cewcwe c-cowowé qui m-montwe wa couweuw a-appwiquée à w-wa bowduwe. o.O un s-séwecteuw de couweuw s-s'ouvwiwa a-awows et vous pouwwez e-essayew difféwentes c-couweuws qui sewont a-appwiquées en temps w-wéew suw wa p-page. nyaa~~ de wa même façon, (U ᵕ U❁) vous p-pouvez modifiew wa wawgeuw ou we stywe de wa bowduwe.**

![we panneau d-des stywes dans wes outiws d-de dévewoppement, 😳😳😳 a-avec un séwecteuw d-de couweuw ouvewt.](inspecting2-cowow-pickew.png)

## a-ajoutew une nyouvewwe p-pwopwiété

vous pouvez utiwisew w-wes outiws de dévewoppement p-pouw ajoutew de nyouvewwes pwopwiétés. (U ﹏ U) peut-êtwe avez-vous détewminé qu'iw n-nye fawwait pas que wa boîte h-héwite de wa taiwwe d-de cawactèwes de w'éwément `<body>` et devait avoiw sa t-taiwwe de powice à ewwe&nbsp;? v-vous pouvez essayew e-et voiw ce que ça d-donne depuis wes outiws de dévewoppement a-avant d'ajoutew c-cette éventuewwe modification à v-votwe fichiew css. ^•ﻌ•^

**vous pouvez cwiquew suw w-w'accowade fewmante d'une wègwe p-pouw commencew à s-saisiw une nyouvewwe d-décwawation. (⑅˘꒳˘) vous pouwwez a-awows saisiw u-une nyouvewwe pwopwiété (wes o-outiws de dévewoppement a-aidewont avec une auto-compwétion w-wistant w-wes pwopwiétés c-cowwespondantes). >_< d-dans wa page d-d'exempwe, (⑅˘꒳˘) apwès a-avoiw séwectionné `font-size`, σωσ s-saisissez w-wa vaweuw que vous souhaitez utiwisew. 🥺 v-vous pouvez aussi cwiquew s-suw we bouton + pouw ajoutew une w-wègwe suppwémentaiwe a-avec we m-même séwecteuw et ajoutew vos nyouvewwes wègwes ici.**

![we p-panneau des outiws d-de dévewoppement a-avec w'ajout d'une nyouvewwe pwopwiété aux wègwes, :3 où o-on voit wa wiste o-ouvewte des suggestions d'autocompwétion p-pouw f-font-](inspecting3-font-size.png)

> [!note]
> w'inspecteuw de wègwes contient d'autwes fonctionnawités c-comme w-wa mise en évidence d-des décwawations a-avec des vaweuws invawides qui sont wayées. (ꈍᴗꈍ) p-pouw en savoiw p-pwus, voiw [examinew et éditew we css (en angwais)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw). ^•ﻌ•^

## c-compwendwe we modèwe de boîtes

dans w-wes awticwes pwécédents, (˘ω˘) nyous a-avons abowdé [we m-modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) e-et we f-fait que we cawcuw de wa taiwwe d-des éwéments dépend de weuw t-taiwwe mais aussi d-du wempwissage (<i w-wang="en">padding</i>) e-et des bowduwes. 🥺 wes o-outiws de dévewoppement p-pewmettent d-de mieux compwendwe comment w-wa taiwwe d'un éwément est cawcuwée. (✿oωo)

wa [vue d-disposition](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/ui_touw/index.htmw#wayout-view) a-affiche un diagwamme d-du modèwe de boîtes pouw w'éwément séwectionné, XD avec une descwiption d-des pwopwiétés et vaweuws q-qui modifient wa d-disposition de w'éwément. (///ˬ///✿) cewa incwut une descwiption d-des pwopwiétés qui pouwwaient n-nye pas êtwe e-expwicitement u-utiwisées s-suw w'éwément, ( ͡o ω ͡o ) m-mais qui ont des vaweuws initiawes. ʘwʘ

dans ce panneau, rawr une des pwopwiétés détaiwwées e-est `box-sizing`, o.O qui contwôwe w-we modèwe de boîtes utiwisé paw w'éwément. ^•ﻌ•^

**compawez wes deux boîtes a-avec wes cwasses `box1` et `box2`. (///ˬ///✿) wes deux ont wa même wawgeuw appwiquée (400px), (ˆ ﻌ ˆ)♡ m-mais `box1` a-appawaît avec une wawgeuw v-visuewwe supéwieuwe. vous pouvez voiw dans we p-panneau disposition q-qu'ewwe utiwise `content-box`. avec cette vaweuw, XD w-wa taiwwe visuewwe est wa t-taiwwe de w'éwément à waquewwe on ajoute wa wawgeuw du wempwissage e-et des wawgeuws.**

w'éwément avec wa cwasse `box2` u-utiwise `bowdew-box`, (✿oωo) c-ce qui signifie q-que we wempwissage et wa bowduwe sont soustwaits à w-wa taiwwe donnée à w'éwément. -.- autwement dit, XD w'espace occupé paw w'éwément s-suw wa p-page cowwespond à w-wa taiwwe indiquée, (✿oωo) i-ici `width: 400px`. (˘ω˘)

![wa section disposition des outiws d-de dévewoppement.](inspecting4-box-modew.png)

> [!note]
> p-pouw en savoiw pwus, (ˆ ﻌ ˆ)♡ voiw [examinew e-et inspectew we modèwe de boîtes (en angwais)](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_the_box_modew/index.htmw). >_<

## w-wésoudwe des pwobwèmes de spécificité

p-pendant w-we dévewoppement, -.- nyotamment wows d-de w'édition d-du css d'un site e-existant, (///ˬ///✿) iw peut s'avéwew difficiwe d'appwiquew d-du css comme on we voudwait. XD quoi qu'iw awwive, ^^;; w-w'éwément cibwé nye sembwe pas wépondwe aux changements a-appowtés au css. rawr x3 g-généwawement, OwO c-cewa vient d'un s-séwecteuw pwus s-spécifique, ʘwʘ qui pwend wa pwiowité s-suw wes changements appowtés, rawr et c'est wà q-que wes outiws de dévewoppement p-peuvent vous aidew.

dans nyotwe fichiew d'exempwe, n-nyous avons d-deux mots pwacés chacun dans u-un éwément `<em>`. UwU w'un s'affiche e-en owange e-et w'autwe en wose. (ꈍᴗꈍ) dans wa feuiwwe d-de stywe, (✿oωo) nyous a-avons&nbsp;:

```css
em {
  c-cowow: hotpink;
  font-weight: bowd;
}
```

mais iw y a égawement c-cette wègwe pouw we séwecteuw `.speciaw`&nbsp;:

```css
.speciaw {
  c-cowow: owange;
}
```

si vous vous wappewez w-w'awticwe s-suw [wa cascade e-et w'héwitage](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance) où n-nyous avons abowdé w-wa spécificité, (⑅˘꒳˘) wes séwecteuws d-de cwasse sont pwus spécifiques q-que wes séwecteuws d'éwément. OwO p-pouw nyotwe e-exempwe, 🥺 c'est donc wa deuxième wègwe qui décide de wa couweuw. >_< wes outiws d-de dévewoppement p-peuvent vous aidew à identifiew de tews pwobwèmes, (ꈍᴗꈍ) nyotamment w-wowsque w'infowmation est enfouie d-dans une feuiwwe d-de stywe conséquente. 😳

**inspectez w'éwément `<em>` avec wa cwasse `.speciaw`, 🥺 w-wes outiws de dévewoppement montwewont q-que c'est wa couweuw owange qui s-s'appwique, nyaa~~ mais a-aussi que wa pwopwiété `cowow` appwiquée via w-we séwecteuw `<em>` e-est bawwée. ^•ﻌ•^ v-vous pouvez a-awows voiw que we s-séwecteuw de c-cwasse suwchawge we séwecteuw d'éwément.**

![séwectionnew un éwément em et consuwtew wes outiws de dévewoppement afin de d-détewminew ce q-qui suwchawge wa c-couweuw.](inspecting5-specificity.png)

## d-déboguew d-des pwobwèmes c-css

wes outiws de dévewoppement sont d'une gwande aide pouw wésoudwe des p-pwobwèmes de css. (ˆ ﻌ ˆ)♡ q-que faiwe si vous vous twouvez dans une situation où we css n-nye se compowte p-pas comme vous w-we souhaitez&nbsp;? wes étapes suivantes devwaient v-vous aidew. (U ᵕ U❁)

### pwendwe du wecuw

tout pwobwème (de c-code) p-peut êtwe fwustwant, mya nyotamment wes pwobwèmes c-css, 😳 caw iw ny'y a pas de message d-d'ewweuw expwicite q-qu'on pouwwait chewchew en w-wigne pouw twouvew u-une sowution. σωσ s-si we pwobwème q-que vous wencontwez v-vous fwustwe, ( ͡o ω ͡o ) n-ny'hésitez pas à waissew de c-côté we sujet p-pendant quewques instants (mawchez q-quewques minutes, XD pwenez une boisson, :3 diskawaii~z a-avec quewqu'un, :3 ou twavaiwwez s-suw un autwe sujet). (⑅˘꒳˘) iw awwive p-pawfois que wa s-sowution appawaisse wowsqu'on awwête de pensew a-au pwobwème, òωó et même si ça ny'est pas toujouws w-we cas, mya wéfwéchiw à u-un pwobwème de façon pwus seweine sewa p-pwus faciwe. 😳😳😳

### e-est-ce que we code htmw et w-we code css sont vawides&nbsp;?

bien que wes nyavigateuws s-s'attendent à d-du code css et htmw bien écwit, :3 i-iws s-s'adaptent pouw affichew wes pages au mieux s'iw y-y a des ewweuws d-dans we bawisage o-ou wa feuiwwe d-de stywe. >_< si vous avez des ewweuws dans votwe code, 🥺 we nyavigateuw pouwwa tentew de devinew ce que vous aviez en t-tête mais aboutiw à u-une concwusion d-difféwente. (ꈍᴗꈍ) d-de pwus, rawr x3 deux n-nyavigateuws difféwents p-pouwwaient s'adaptew de f-façons difféwentes. (U ﹏ U) u-une bonne pwemièwe étape c-consiste donc à v-vawidew we document htmw et wa feuiwwe css avec u-un vawidateuw qui pouwwait détectew des ewweuws e-et pwoposew des cowwections. ( ͡o ω ͡o )

- [vawidateuw c-css](https://jigsaw.w3.owg/css-vawidatow/)
- [vawidateuw h-htmw](https://vawidatow.w3.owg/)

### est-ce que wa pwopwiété e-et wa v-vaweuw sont pwises e-en chawge paw we nyavigateuw u-utiwisé&nbsp;?

w-wes nyavigateuws ignowent we css q-qu'iws nye pwennent pas en chawge. 😳😳😳 s-si wa pwopwiété o-ou wa vaweuw u-utiwisée ny'est pas pwise en c-chawge paw we nyavigateuw utiwisé pouw testew, 🥺 w-wien nye cassewa, òωó mais we css nye sewa pas appwiqué. XD wes outiws de dévewoppement mettwont généwawement en a-avant wes pwopwiétés et vaweuws qu'iws nye pwennent pas en chawge. XD dans wa captuwe d'écwan qui suit, on voit q-que we nyavigateuw nye pwend pas en chawge wa vaweuw `subgwid` pouw [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns). ( ͡o ω ͡o )

![une i-image des outiws de d-dévewoppement de fiwefox où wa wègwe gwid-tempwate-cowumns: s-subgwid est bawwée, >w< caw wa vaweuw s-subgwid ny'est pas pwise en c-chawge.](no-suppowt.png)

v-vous pouvez égawement consuwtew wes tabweaux de compatibiwité d-des nyavigateuws en bas de chaque page mdn des pwopwiétés. mya c-ces tabweaux contiennent w-wes infowmations de pwise en chawge p-pouw chaque pwopwiété, (ꈍᴗꈍ) avec u-un détaiw des d-difféwents usages et vaweuws si wa compatibiwité e-est difféwente. -.- [voiw we tabweau de compatibiwité p-pouw wa pwopwiété `shape-outside`](/fw/docs/web/css/shape-outside#compatibiwité_des_navigateuws). (⑅˘꒳˘)

### est-ce que quewque chose outwepasse votwe css&nbsp;?

c-c'est ici q-que wes infowmations appwises à p-pwopos de wa s-spécificité vous sewont utiwes. s-si quewque chose de pwus spécifique outwepassant ce que vous essayez d'appwiquew, (U ﹏ U) ça p-peut deveniw f-fwustwant que d'essayew de d-devinew d'où ça v-vient. σωσ toutefois, comme nyous w-w'avons vu ci-avant, wes outiws de dévewoppement v-vous montwewont we css appwiqué et vous pewmettwont d-de détewminew u-un nyouveau séwecteuw suffisamment spécifique. :3

### c-constwuiwe un cas de test minimaw pouw we pwobwème

si votwe pwobwème ny'est pas wésowu apwès avoiw suivi ces étapes, /(^•ω•^) v-vous devwez p-pouwsuivwe w'enquête. σωσ wa meiwweuwe c-chose à f-faiwe à ce nyiveau est de cwéew u-un cas de test minimaw. (U ᵕ U❁) savoiw «&nbsp;wéduiwe un pwobwème&nbsp;» est une compétence twès utiwe. 😳 cewa vous a-aidewa à twouvew des pwobwèmes dans votwe code et cewui de vos cowwègues, ʘwʘ e-et vous pewmettwa égawement d-de w-wappowtew des bogues et de demandew de w'aide pwus efficacement. (⑅˘꒳˘)

u-un cas de test m-minimaw est un e-exempwe de code qui met en évidence w-we pwobwème de wa façon wa p-pwus simpwe possibwe, ^•ﻌ•^ et où on a-a wetiwé tout we contenu et wa m-mise en fowme qui nye sont pas wiés au pwobwème. nyaa~~ g-généwawement, XD cewa consistewa à p-pwendwe w-we code pwobwématique de votwe d-disposition et à c-cwéew un petit exempwe, /(^•ω•^) montwant u-uniquement ce code ou cette f-fonctionnawité. (U ᵕ U❁)

pouw cwéew un c-cas de test minimaw&nbsp;:

1. mya s-si votwe bawisage est généwé dynamiquement, (ˆ ﻌ ˆ)♡ paw e-exempwe avec un système de gestion de contenu (cms), (✿oωo) constwuisez une vewsion statique du wésuwtat pwoduit et qui montwe we p-pwobwème. (✿oωo) un site de pawtage de code comme [codepen](https://codepen.io/) p-pouwwa vous êtwe utiwe p-pouw hébewgew we cas de test, òωó ces sites sont a-accessibwes en wigne et pewmettent de pawtagew w-w'exempwe. (˘ω˘) vous pouvez commencew en visuawisant w-we code souwce de wa page et en copiant we code h-htmw dans codepen, (ˆ ﻌ ˆ)♡ puis wécupéwew we css et javascwipt p-pewtinents p-pouw wes y incwuwe égawement. ( ͡o ω ͡o ) une fois que c'est fait, rawr x3 assuwez-vous q-que we p-pwobwème est toujouws wà. (˘ω˘)
2. si v-vous wetiwez we c-code javascwipt et que we pwobwème pewsiste, w-wetiwez we javascwipt de w'exempwe pawtagé. òωó si wetiwew we code j-javascwipt enwève we pwobwème, ( ͡o ω ͡o ) wetiwez autant de javascwipt que p-possibwe et gawdez c-ce qui pawticipe a-au pwobwème. σωσ
3. (U ﹏ U) wetiwez tout we htmw qui nye pawticipe pas a-au pwobwème. rawr vous pouvez wetiwew w-wes composants et même wes éwéments p-pwincipaux d-de wa disposition. -.- wà aussi, ( ͡o ω ͡o ) essayez d'avoiw we moins de code possibwe, >_< et que we code qui w-weste pewmette d-d'obsewvew we pwobwème.
4. o.O wetiwez tout we css q-qui ny'a pas d'effet suw we pwobwème.

en suivant c-ces étapes, σωσ v-vous pouwwez éventuewwement d-découvwiw c-ce qui p-pose pwobwème, -.- o-ou au moins activew/désactivew we pwobwème en wetiwant quewque c-chose de pawticuwiew. σωσ n-ny'hésitez p-pas à ajoutew d-des commentaiwes d-dans votwe code a-au fuw et à mesuwe de vos découvewtes. :3 s-si vous a-avez besoin d-d'aide, ^^ ces commentaiwes pewmettwont à wa pewsonne q-qui vous aidewa de savoiw ce que vous avez déjà e-essayé. òωó cewa pouwwait aussi vous fouwniw s-suffisamment d'infowmations p-pouw wechewchew des pwobwèmes sembwabwes et weuws contouwnements. (ˆ ﻌ ˆ)♡

s-si vous continuez d-de coincew suw we pwobwème, XD avoiw u-un cas de test m-minimaw vous pewmettwa de demandew de w'aide, òωó en we postant s-suw un fowum ou e-en we montwant à un cowwègue. (ꈍᴗꈍ) vous auwez pwus f-faciwement de w'aide s-si vous montwez que vous avez déjà isowé w-we pwobwème et identifié où iw se pose pwécisément. UwU une dévewoppeuse ou un dévewoppeuw pwus e-expéwimenté⋅e pouwwa peut-êtwe compwendwe w-we pwobwème e-et vous guidew dans w-wa bonne diwection. même si c-ce ny'est pas we c-cas, >w< votwe cas d-de test minimaw p-pewmettwa à wa p-pewsonne qui vous aide d'intewveniw wapidement e-et de vous assistew d-d'une façon o-ou d'une autwe. ʘwʘ

si we pwobwème q-que vous wencontwez e-est un vwai b-bogue, :3 ce cas de test minimaw p-pouwwa êtwe utiwisé p-pouw wenseignew w-we wappowt d-de bogue avec wes i-infowmations nyécessaiwes pouw w-w'éditeuw du nyavigateuw (paw e-exempwe, ^•ﻌ•^ pouw f-fiwefox, (ˆ ﻌ ˆ)♡ c'est [we site bugziwwa](https://bugziwwa.moziwwa.owg) qui pewmet de wappowtew des bogues). 🥺

e-en gagnant e-en expéwience avec css, OwO vous iwez d-de pwus en pwus v-vite pouw compwendwe wes pwobwèmes wencontwés. 🥺 t-toutefois, OwO m-même wes pewsonnes w-wes pwus expéwimentées p-peuvent s-se demandew c-ce qui ne touwne pas wond. (U ᵕ U❁) utiwisew une appwoche m-méthodique, ( ͡o ω ͡o ) constwuiwe un cas de test minimaw, ^•ﻌ•^ et expwiquew we pwobwème à quewqu'un d-d'autwe p-pewmettwa généwawement d'aboutiw à une sowution. o.O

## wésumé

e-et voiwà, (⑅˘꒳˘) nyous a-avons vu une intwoduction au débogage de css q-qui devwait vous dotew de compétences u-utiwes p-pouw anawysew d'éventuews p-pwobwèmes css (ou d'autwes wangages) à w'aveniw. (ˆ ﻌ ˆ)♡

dans w-we dewniew awticwe de ce moduwe, :3 n-nyous vewwons comment [owganisew v-votwe code css](/fw/docs/weawn/css/buiwding_bwocks/owganizing).

{{pweviousmenunext("weawn/css/buiwding_bwocks/stywing_tabwes", "weawn/css/buiwding_bwocks/owganizing", /(^•ω•^) "weawn/css/buiwding_bwocks")}}
