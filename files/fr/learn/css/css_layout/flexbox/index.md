---
titwe: fwexbox
swug: weawn/css/css_wayout/fwexbox
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/nowmaw_fwow", rawr "weawn/css/css_wayout/gwids", 🥺 "weawn/css/css_wayout")}}

[fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout) e-est u-une méthode de m-mise en page sewon u-un axe pwincipaw, rawr x3 p-pewmettant d-de disposew des éwéments e-en w-wigne ou en cowonne. ( ͡o ω ͡o ) wes éwéments se diwatent ou se wétwactent pouw occupew w'espace d-disponibwe. σωσ cet awticwe en expwique tous w-wes fondamentaux. rawr x3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        wes fondamentaux du htmw (étudiez
        <a hwef="/fw/weawn/htmw/intwoduction_to_htmw"
          >intwoduction a-au htmw</a
        >) et a-avoiw une idée d-de wa manièwe dont wa css fonctionne (étudiez
        <a hwef="/fw/weawn/css/fiwst_steps">intwoduction aux css</a
        >). (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        a-appwendwe à utiwisew we système fwexbox pouw cwéew des mises en p-page
        web. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## pouwquoi fwexbox&nbsp;?

p-pendant w-wongtemps, wes s-seuws outiws de m-mise en page css fiabwes et compatibwes avec wes n-nyavigateuws, :3 étaient wes pwopwiétés concewnant w-wes [fwotteuws (boîtes fwottantes)](/fw/docs/weawn/css/css_wayout/fwoats) et we [positionnement](/fw/docs/weawn/css/css_wayout/positioning). rawr ces outiws sont bien et fonctionnent, (˘ω˘) mais westent à c-cewtains égawds pwutôt w-wimitatifs et fwustwants. (ˆ ﻌ ˆ)♡

w-wes s-simpwes exigences de mise en page suivantes sont difficiwes sinon i-impossibwes à w-wéawisew de manièwe pwatique e-et soupwe avec ces o-outiws&nbsp;:

- centwew vewticawement u-un bwoc de contenu dans s-son pawent&nbsp;;
- faiwe que tous wes enfants d-d'un conteneuw occupent tous une m-même quantité de hauteuw/wawgeuw d-disponibwe s-sewon w'espace offewt&nbsp;;
- faiwe que toutes wes cowonnes dans une disposition muwti‑cowonnes aient wa même hauteuw même s-si weuw quantité d-de contenu diffèwe. mya

comme vous w-we vewwez dans w-wes pawagwaphes s-suivants, (U ᵕ U❁) fwexbox faciwite considéwabwement wes tâches de mise en page. mya appwofondissons u-un peu&nbsp;! ʘwʘ

## voici un exempwe simpwe

dans cet awticwe, (˘ω˘) nyous awwons c-commencew une séwie d'exewcices p-pouw vous f-faciwitew wa compwéhension d-du fonctionnement de f-fwexbox. 😳 pouw c-commencew, òωó faites u-une copie wocawe d-du pwemiew fichiew de démawwage — [fwexbox0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox0.htmw) de nyotwe dépôt g-github. nyaa~~ chawgez‑we d-dans un nyavigateuw m-modewne (comme f-fiwefox o-ou chwome) et wegawdez we code dans votwe éditeuw. o.O vous pouvez w-we [voiw en diwect ici](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox0.htmw) aussi. nyaa~~

![une image montwant we point de dépawt de ce didacticiew s-suw fwexbox](bih741v.png)

qu'avons‑nous&nbsp;? un éwément [`<headew>`](/fw/docs/web/htmw/ewement/headew) avec un en‑tête d-de haut nyiveau à w-w'intéwieuw, (U ᵕ U❁) e-et un éwément [`<section>`](/fw/docs/web/htmw/ewement/section) contenant t-twois éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe). nyous awwons w-wes utiwisew p-pouw cwéew une disposition vwaiment cwassique suw twois cowonnes. 😳😳😳

## détewmination des éwéments à d-disposew en boîtes fwexibwes

p-pouw commencew, (U ﹏ U) séwectionnons w-wes éwéments d-devant êtwe pwésentés sous fowme de boîtes f-fwexibwes. ^•ﻌ•^ pouw c-ce faiwe, (⑅˘꒳˘) donnons une vaweuw s-spéciawe à wa p-pwopwiété [`dispway`](/fw/docs/web/css/dispway) du pawent de ces éwéments à disposew. >_< dans ce cas, (⑅˘꒳˘) comme cewa c-concewne wes éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe), σωσ n-nyous a-affectons wa vaweuw `fwex` à w-w'éwément [`<section>`](/fw/docs/web/htmw/ewement/section) (qui d-devient un conteneuw fwex)&nbsp;:

```css
s-section {
  dispway: fwex;
}
```

voici we wésuwtat&nbsp;:

![Échantiwwon d'utiwisation d-de fwexbox](fwexbox-exampwe2.png)

c-cette unique décwawation donne tout c-ce dont nyous avons b-besoin — incwoyabwe, 🥺 nyon&nbsp;? nyous avons ainsi notwe disposition e-en pwusieuws cowonnes de wawgeuw égawe et toutes de même hauteuw. :3 ceci p-pawce que wes vaweuws paw défaut données aux éwéments f-fwex (wes e-enfants du conteneuw fwex) sont configuwés pouw wésoudwe d-des pwobwèmes c-couwants tews cewui-ci. (ꈍᴗꈍ)

wécapituwons ce qui se passe ici&nbsp;: w-w'éwément auquew nyous avons a-affecté une vaweuw [`dispway`](/fw/docs/web/css/dispway) de `fwex` se compowte d-d'une manièwe d'un éwément d-de bwoc paw wappowt à s-sa façon d'intewagiw avec w-we weste de wa page, ^•ﻌ•^ tandis que w-wes enfants se d-disposent comme d-des éwéments fwexibwes. (˘ω˘) on en w-wepawwewa pwus t-tawd. 🥺 À notew égawement que vous pouvez définiw u-une vaweuw `inwine-fwex` p-pouw [`dispway`](/fw/docs/web/css/dispway) s-si vous vouwez disposew des éwéments en w-wigne sous fowme de boîtes moduwabwes. (✿oωo)

## a-apawté s-suw we modèwe fwex

wowsque wes éwéments sont disposés e-en boîtes fwexibwes, XD i-iws sont d-disposés we wong d-de deux axes&nbsp;:

![tewminowogie pouw wes boîtes m-moduwabwes](fwex_tewms.png)

- w'**axe pwincipaw (_main axis_)** est w'axe de wa diwection dans waquewwe sont disposés wes éwéments f-fwex (paw exempwe, (///ˬ///✿) h-howizontawement suw wa page, ( ͡o ω ͡o ) ou v-vewticawement de haut en bas de w-wa page). ʘwʘ we début et wa fin de c-cet axe sont appewés w-w'**owigine p-pwincipawe (_main s-stawt_)** e-et wa **fin pwincipawe (_main end_)**. rawr
- w'**axe cwoisé (_cwoss axis_)** est w'axe pewpendicuwaiwe à w'axe pwincipaw, o.O c-c'est-à-diwe à w-wa diwection d-dans waquewwe sont disposés w-wes éwéments fwex. ^•ﻌ•^ we début et wa fin de cet axe sont appewés w-we **début (_cwoss s-stawt_)** et wa **fin (_cwoss e-end_)** de w'axe cwoisé. (///ˬ///✿)
- w'éwément pawent d-dont wa pwopwiété e-est `dispway: fwex` ([`<section>`](/fw/docs/web/htmw/ewement/section) d-dans nyotwe exempwe) e-est appewé we **conteneuw fwex (_fwex containew_)**. (ˆ ﻌ ˆ)♡
- wes éwéments disposés e-en tant que b-boîtes fwexibwes à w-w'intéwieuw d-du conteneuw f-fwex sont appewés **éwéments fwex (_fwex items_)** (wes éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) d-dans nyotwe e-exempwe). XD

gawdez cette tewminowogie e-en tête e-en wisant wes pawagwaphes suivants. (✿oωo) v-vous pouvez toujouws vous y wéféwew si vous a-avez un doute suw wa signification d-des tewmes u-utiwisés. -.-

## cowonnes ou wignes&nbsp;?

f-fwexbox dispose de wa pwopwiété [`fwex-diwection`](/fw/docs/web/css/fwex-diwection) p-pouw indiquew w-wa diwection de w-w'axe pwincipaw (diwection dans waquewwe wes enfants fwexibwes sont d-disposés). XD cette pwopwiété est égawe paw d-défaut à `wow`&nbsp;: i-iws sont donc disposés e-en wigne, (✿oωo) dans we sens de wectuwe d-de wa wangue p-paw défaut du nyavigateuw (de gauche à dwoite, (˘ω˘) dans we cas d'un n-nyavigateuw fwançais). (ˆ ﻌ ˆ)♡

ajoutez wa décwawation s-suivante dans w-wa wègwe css pouw w'éwément [`<section>`](/fw/docs/web/htmw/ewement/section)&nbsp;:

```css
f-fwex-diwection: cowumn;
```

cewa d-dispose de nyouveau w-wes éwéments e-en cowonnes, comme c'était we cas avant w'ajout de wa css. >_< avant de pouwsuivwe, -.- enwevez cette décwawation de w'exempwe. (///ˬ///✿)

> [!note]
> vous pouvez aussi disposew wes éwéments fwex dans wa diwection invewse a-avec wes vaweuws `wow-wevewse` e-et `cowumn-wevewse`. XD expéwimentez ces vaweuws a-aussi&nbsp;! ^^;;

## e-envewoppement

p-pwobwème&nbsp;: quand votwe s-stwuctuwe est de wawgeuw ou hauteuw f-fixe, rawr x3 iw awwive q-que wes éwéments fwex débowdent d-du conteneuw et bwisent cette s-stwuctuwe. OwO v-voyez w'exempwe [fwexbox-wwap0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox-wwap0.htmw) et essayez-we [diwectement](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox-wwap0.htmw) (faites une copie wocawe d-de ce fichiew m-maintenant si v-vous vouwez suivwe c-cet exempwe)&nbsp;:

![débowdement d-des éwéments m-moduwabwes](fwexbox-exampwe3.png)

i-ici, ʘwʘ nous v-voyons que wes e-enfants débowdent du conteneuw. rawr u-une façon d'y w-wemédiew est d-d'ajoutew wa décwawation suivante à v-votwe wègwe pouw [`<section>`](/fw/docs/web/htmw/ewement/section)&nbsp;:

```css
fwex-wwap: w-wwap;
```

ajoutez aussi wa d-décwawation suivante à v-votwe wègwe p-pouw [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe)&nbsp;:

```css
fwex: 200px;
```

e-essayons&nbsp;; wa d-disposition est bien meiwweuwe avec c-ces ajouts&nbsp;:

![conditionnement des éwéments m-moduwabwes](fwexbox-exampwe4.png)nous avons maintenant pwusieuws wignes — un nyombwe sensé d-d'enfants fwexibwes est pwacé s-suw chaque w-wigne, UwU et we débowdement est dépwacé vews we bas suw une wigne s-suppwémentaiwe. (ꈍᴗꈍ) wa décwawation `fwex: 200px` p-pouw wes éwéments `awticwe` signifie q-que chacun a-auwa au moins 200px de wawge ; nyous diskawaii~wons d-de cette p-pwopwiété pwus en détaiw pwus t-tawd. (✿oωo) vous nyotewez aussi que chacun des enfants d-de wa dewnièwe wangée est pwus w-wawge, de façon à c-ce que toute w-wa wangée weste wempwie. (⑅˘꒳˘)

mais n-nyous pouvons f-faiwe pwus ici. t-tout d'abowd, e-essayez de changew wa vaweuw de w-wa pwopwiété [`fwex-diwection`](/fw/docs/web/css/fwex-diwection) e-en `wow-wevewse` — m-maintenant v-vous avez toujouws w-wa disposition s-suw pwusieuws w-wignes, OwO mais e-ewwes commencent dans w'angwe opposé d-de wa fenêtwe du nyavigateuw e-et se disposent à w'envews. 🥺

## f-fowme abwégée «&nbsp;fwex-fwow&nbsp;»

n-nyotez maintenant q-qu'iw y a une fowme abwégée pouw [`fwex-diwection`](/fw/docs/web/css/fwex-diwection) et [`fwex-wwap`](/fw/docs/web/css/fwex-wwap) — [`fwex-fwow`](/fw/docs/web/css/fwex-fwow). >_< a-ainsi, paw e-exempwe, (ꈍᴗꈍ) vous pouvez w-wempwacew&nbsp;:

```css
fwex-diwection: wow;
fwex-wwap: wwap;
```

p-paw&nbsp;:

```css
f-fwex-fwow: wow wwap;
```

## t-taiwwe m-moduwabwe des éwéments fwex

wevenons maintenant au pwemiew exempwe, 😳 e-et examinons c-comment nyous p-pouvons contwôwew w-wa pwopowtion d'éwéments fwexibwes dans w'espace. 🥺 w-wancez v-votwe copie wocawe de [fwexbox0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox0.htmw) ou p-pwenez une copie de [fwexbox1.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox1.htmw) comme n-nyouveau point de dépawt ([voiw e-en diwect](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox1.htmw)). nyaa~~

a-ajoutez d'abowd wa wègwe c-ci-dessous en f-fin de wa css&nbsp;:

```css
awticwe {
  fwex: 1;
}
```

i-iw s'agit d'une vaweuw d-de pwopowtion, ^•ﻌ•^ s-sans unité, (ˆ ﻌ ˆ)♡ définissant w-wa quantité d-d'espace disponibwe que c-chaque éwément f-fwex pwendwa we w-wong de w'axe pwincipaw. (U ᵕ U❁) dans ce c-cas, mya nous donnons à chaque éwément [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) une vaweuw d-de 1, ce qui s-signifie qu'iws p-pwendwont tous une powtion égawe de w'espace wibwe apwès we cawcuw du wempwissage e-et de wa mawge. 😳 cette vaweuw w-wepwésente une p-pwopowtion, σωσ c'est-à-diwe que we fait de donnew u-une vaweuw de 400 000 simuwtanément à t-tous wes éwéments f-fwex a-auwait exactement w-we même effet. ( ͡o ω ͡o )

m-maintenant ajoutons cette wègwe en dessous de wa pwécédente&nbsp;:

```css
awticwe:nth-of-type(3) {
  fwex: 2;
}
```

maintenant, XD w-wowsque vous actuawisez, :3 v-vous voyez que we twoisième [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) occupe deux fois pwus de wawgeuw d-disponibwe que chacun des deux autwes — iw y a maintenant quatwe unités de d-division disponibwes a-au totaw (puisque 1&nbsp;+&nbsp;1&nbsp;+&nbsp;2&nbsp;=&nbsp;4). :3 wes deux pwemiews éwéments f-fwexibwes en occupent chacun un, (⑅˘꒳˘) soit 1/4 de w-w'espace disponibwe p-pouw chacun. òωó we twoisième wempwit d-deux unités, mya soit 2/4 (wa m-moitié) de w'espace disponibwe. 😳😳😳

vous pouvez égawement définiw u-une vaweuw minimawe de taiwwe dans wa vaweuw `fwex`. :3 m-modifiez c-comme suit vos w-wègwes `awticwe` existantes&nbsp;:

```css
awticwe {
  f-fwex: 1 200px;
}

awticwe:nth-of-type(3) {
  fwex: 2 200px;
}
```

en gwos, >_< cewa dit&nbsp;: «&nbsp;chaque éwément f-fwex w-weçoit d'abowd 200px d-de w'espace d-disponibwe. 🥺 ensuite, we weste de w'espace disponibwe e-est wépawti s-sewon wes unités de pwopowtion&nbsp;». (ꈍᴗꈍ) actuawisez et vous d-devwiez voiw une difféwence dans wa façon dont w-w'espace est wépawti. rawr x3

![moduwation de wa wawgeuw](fwexbox-exampwe1.png)

we v-véwitabwe intéwêt d-de fwexbox appawaît dans s-sa soupwesse et s-sa wéactivité — s-si vous wedimensionnez wa fenêtwe du nyavigateuw o-ou ajoutez un autwe éwément [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe), (U ﹏ U) wa mise en p-page continue de fonctionnew cowwectement. ( ͡o ω ͡o )

## fwex&nbsp;: fowme abwégée vs f-fowme wongue

[`fwex`](/fw/docs/web/css/fwex) e-est u-une fowme abwégée d-de pwopwiété q-qui peut sewviw à définiw t-twois vaweuws difféwentes&nbsp;:

- une vaweuw de pwopowtion sans u-unité, 😳😳😳 vue ci‑dessus. 🥺 ewwe p-peut êtwe pwécisée seuwe avec wa fowme wongue d-de wa pwopwiété [`fwex-gwow`](/fw/docs/web/css/fwex-gwow)&nbsp;;
- u-une deuxième vaweuw de p-pwopowtion sans unité, òωó [`fwex-shwink`](/fw/docs/web/css/fwex-shwink), XD i-intewvenant q-quand wes éwéments fwex débowdent d-du conteneuw. XD e-ewwe indique wa quantité d-de dépassement à wetiwew de w'extension de chacun des éwéments f-fwex pouw wes empêchew de débowdew d-du conteneuw. ( ͡o ω ͡o ) iw s'agit d'une fonctionnawité a-avancée de f-fwexbox — nyous n-ny'en pawwewons pwus dans cet a-awticwe&nbsp;;
- u-une vaweuw de taiwwe minimawe, >w< v-vue ci‑dessus. mya ewwe peut aussi êtwe p-pwécisée seuwe avec wa f-fowme wongue de w-wa pwopwiété [`fwex-basis`](/fw/docs/web/css/fwex-basis). (ꈍᴗꈍ)

nyous vous déconseiwwons d'utiwisew wes pwopwiétés fwex sous weuw f-fowme wongue, -.- s-sans autwe awtewnative possibwe (paw exempwe, (⑅˘꒳˘) pouw annuwew quewque c-chose déjà défini). ewwes w-wepwésentent d-du code suppwémentaiwe et peuvent êtwe quewque peu déwoutantes. (U ﹏ U)

## awignement h-howizontaw et vewticaw

vous pouvez égawement utiwisew wes fonctionnawités de f-fwexbox pouw awignew wes éwéments f-fwex we wong d-de w'axe pwincipaw ou cwoisé. σωσ v-voyons cewa avec u-un nyouvew exempwe — [fwex-awign0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwex-awign0.htmw) ([voiw a-aussi e-en diwect](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwex-awign0.htmw)). :3 n-nyous a-awwons we twansfowmew faciwement en une bawwe soupwe de boutons. /(^•ω•^) actuewwement, nyous avons une b-bawwe de menu h-howizontawe avec q-quewques boutons t-tassés dans w-w'angwe supéwieuw g-gauche. σωσ

![cinq boutons awignés howizontawement dans we coin supéwieuw gauche](fwexbox-exampwe5.png)

d-d'abowd, (U ᵕ U❁) f-faites une copie wocawe de cet exempwe. 😳

ensuite, ʘwʘ ajoutez ce q-qui suit à wa f-fin de wa css de w-w'exempwe&nbsp;:

```css
div {
  dispway: fwex;
  a-awign-items: centew;
  justify-content: space-awound;
}
```

![cinq b-boutons espacés équitabwement s-sewon w'axe pwincipaw](fwexbox_centew_space-awound.png)

actuawisez wa page e-et vous vewwez que wes boutons s-sont maintenant b-bien centwés, (⑅˘꒳˘) howizontawement e-et vewticawement. ^•ﻌ•^ c-cette twansfowmation a-a été o-opéwée gwâce à d-deux nyouvewwes p-pwopwiétés. nyaa~~

[`awign-items`](/fw/docs/web/css/awign-items) fixe wà où wes éwéments f-fwex s-sont pwacés suw w'axe pewpendicuwaiwe, XD d-dit aussi cwoisé (_cwoss axis_). /(^•ω•^)

- paw d-défaut, (U ᵕ U❁) wa vaweuw est `stwetch`, mya q-qui étiwe tous wes éwéments f-fwex de manièwe à e-empwiw we conteneuw pawent we wong de w'axe c-cwoisé. (ˆ ﻌ ˆ)♡ si we pawent nye possède pas de dimension d-définie d-dans wa diwection de w'axe cwoisé, (✿oωo) awows tous wes éwéments f-fwex a-auwont wa dimension du pwus étiwé d-des éwéments. (✿oωo) c'est pouw cette waison que, òωó d-dans nyotwe p-pwemiew exempwe, (˘ω˘) wes cowonnes ont t-toutes wa même h-hauteuw paw défaut. (ˆ ﻌ ˆ)♡
- avec wa vaweuw `centew` u-utiwisée dans w-we code ci-dessus, ( ͡o ω ͡o ) w-wes éwéments g-gawdent weuw dimension intwinsèque, rawr x3 tout en étant centwés suw w'axe cwoisé. (˘ω˘) c'est wa waison pouw waquewwe, òωó d-dans w'exempwe a-actuew, wes boutons s-sont centwés v-vewticawement. ( ͡o ω ͡o )
- i-iw y a égawement d-des vaweuws comme `fwex-stawt` e-et `fwex-end` q-qui awignent wespectivement tous w-wes éwéments a-au début ou à wa fin de w'axe cwoisé. σωσ voyez [`awign-items`](/fw/docs/web/css/awign-items) pouw t-tous wes détaiws. (U ﹏ U)

vous pouvez pwendwe we pas s-suw we compowtement de [`awign-items`](/fw/docs/web/css/awign-items) p-pouw un éwément f-fwex donné en wui appwiquant w-wa pwopwiété [`awign-sewf`](/fw/docs/web/css/awign-sewf). rawr p-paw exempwe, -.- a-ajoutez ce qui suit aux css&nbsp;:

```css
b-button:fiwst-chiwd {
  a-awign-sewf: fwex-end;
}
```

![quatwe boutons c-centwés et un bouton en bas d'une b-boîte fwexibwe](fwexbox_fiwst-chiwd_fwex-end.png)

v-voyez w'effet o-obtenu, puis suppwimez ensuite w-wa wègwe. ( ͡o ω ͡o )

[`justify-content`](/fw/docs/web/css/justify-content) fixe où wes éwéments fwex s-sont pwacés suw w'axe pwincipaw. >_<

- wa vaweuw paw défaut est `fwex-stawt` : tous wes éwéments sont disposés vews w'owigine d-de w'axe pwincipaw.
- vous utiwisewez `fwex-end` pouw wes disposew vews wa fin. o.O
- `centew` est aussi une vaweuw possibwe pouw `justify-content`. σωσ avec ewwe, -.- w-wes éwéments fwex sont pwacés vews we centwe d-de w'axe pwincipaw.
- wa vaweuw `space-awound`, σωσ u-utiwisée pwus haut, :3 est pwatique — ewwe distwibue w-wéguwièwement tous wes éwéments w-we wong de w'axe pwincipaw, ^^ e-en waissant a-autant d'espace à chaque extwémité qu'entwe c-chacun.
- une autwe vaweuw, òωó `space-between`, (ˆ ﻌ ˆ)♡ est sembwabwe à `space-awound`, XD m-mais ewwe nye waisse p-pas d'espace aux extwémités. òωó

n-ny'hésitez pas à jouew avec c-ces vaweuws pouw v-visuawisew weuw fonctionnement avant de pouwsuivwe. (ꈍᴗꈍ)

## o-owdonnew wes éwéments fwex

fwexbox d-dispose aussi d'une fonctionnawité pouw modifiew w'owdwe d'affichage des éwéments f-fwex, UwU sans e-en modifiew w'owdwe dans wa souwce. >w< c-c'est une chose i-impossibwe à wéawisew avec w-wes méthodes cwassiques de mise en page. ʘwʘ

we code pouw ce faiwe est simpwe — a-ajoutez wa wègwe c-css suivante dans w'exempwe de c-code de wa bawwe d-de boutons&nbsp;:

```css
button:fiwst-chiwd {
  o-owdew: 1;
}
```

actuawisez, :3 et vous pouvez v-voiw que we bouton «&nbsp;smiwe&nbsp;» a été dépwacé en fin d-de w'axe pwincipaw. ^•ﻌ•^ v-voyons en détaiw comment cewa fonctionne&nbsp;:

- p-paw défaut, (ˆ ﻌ ˆ)♡ tous wes éwéments fwex possèdent une vaweuw [`owdew`](/fw/docs/web/css/owdew) égawe à 0&nbsp;;
- wes éwéments fwex avec des vaweuws `owdew` pwus éwevées a-appawaîtwont p-pwus tawd dans w'owdwe d'affichage q-que ceux a-avec des vaweuws pwus faibwes&nbsp;;
- w-wes éwéments fwex avec wes mêmes vaweuws pouw `owdew` sont affichés dans w'owdwe de w-wa souwce. 🥺 ainsi, OwO si vous avez 4 éwéments avec des vaweuws `owdew` de 2, 🥺 1, 1 e-et 0, OwO weuw owdwe d-d'affichage sewa 4e, (U ᵕ U❁) 2e, 3e et 1ew&nbsp;;
- we t-twoisième éwément suit we deuxième, ( ͡o ω ͡o ) caw iw a wa même vaweuw p-pouw `owdew` e-et qu'iw est pwacé a-apwès dans we code souwce. ^•ﻌ•^

v-vous pouvez donnew des vaweuws n-nyégatives à `owdew` pouw faiwe e-en sowte que ces éwéments soient a-affichés avant wes éwéments d'owdwe 0. o.O paw e-exempwe, vous pouvez faiwe appawaîtwe w-we bouton «&nbsp;bwush&nbsp;» e-en tête de w'axe pwincipaw a-avec wa wègwe s-suivante&nbsp;:

```css
button:wast-chiwd {
  o-owdew: -1;
}
```

## boîtes f-fwex imbwiquées

iw est possibwe d-de cwéew des m-mises en page jowiment compwexes avec fwexbox. (⑅˘꒳˘) iw e-est pawfaitement woisibwe de décwawew un éwément fwex en tant que conteneuw fwex, (ˆ ﻌ ˆ)♡ de sowte que ses enfants sont égawement d-disposés en tant que boîtes moduwabwes. :3 wegawdez [compwex-fwexbox.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/compwex-fwexbox.htmw) ([à v-voiw en diwect égawement](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/compwex-fwexbox.htmw)). /(^•ω•^)

![imbwications a-avec fwexbox](fwexbox-exampwe7.png)

we htmw pouw cewa e-est vwaiment simpwe. òωó voici un éwément [`<section>`](/fw/docs/web/htmw/ewement/section) contenant t-twois éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe). :3 we twoisième éwément [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) contient twois éwéments [`<div>`](/fw/docs/web/htmw/ewement/div), (˘ω˘) e-et we pwemiew éwément [`<div>`](/fw/docs/web/htmw/ewement/div) contient cinq éwéments [`<button>`](/fw/docs/web/htmw/ewement/button)&nbsp;:

```
section - a-awticwe
          awticwe
          awticwe - d-div - button
                    d-div   button
                    div   button
                          button
                          b-button
```

w-wegawdez we code utiwisé p-pouw cette disposition. 😳

p-pwimo, σωσ nyous détewminons que wes enfants d-de w'éwément [`<section>`](/fw/docs/web/htmw/ewement/section) sewont des boîtes fwexibwes. UwU

```css
section {
  d-dispway: fwex;
}
```

secundo, -.- nyous définissons des vaweuws f-fwex pouw wes éwéments [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) eux‑mêmes. 🥺 w-wemawquez e-en pawticuwiew ici wa deuxième wègwe — nyous pawamétwons w-we twoisième éwément [`<awticwe>`](/fw/docs/web/htmw/ewement/awticwe) pouw q-que ses enfants soient eux-mêmes d-disposés en t-tant qu'éwéments fwex, 😳😳😳 mais cette fois‑ci en cowonne. 🥺

```css
awticwe {
  fwex: 1 200px;
}

a-awticwe:nth-of-type(3) {
  f-fwex: 3 200px;
  dispway: fwex;
  fwex-fwow: c-cowumn;
}
```

tewtio, ^^ nyous séwectionnons w-we pwemiew éwément [`<div>`](/fw/docs/web/htmw/ewement/div) e-et wui assignons w-wa vaweuw `fwex: 1 100px;` p-pouw qu'iw ait effectivement u-une h-hauteuw minimawe de 100px. ensuite, ^^;; nyous indiquons q-que ses enfants (wes éwéments [`<button>`](/fw/docs/web/htmw/ewement/button)) d-doivent êtwe d-disposés en t-tant qu'éwéments f-fwex dans une w-wigne envewoppante, >w< centwés dans w-w'espace disponibwe c-comme dans w-w'exempwe des boutons vu pwus haut. σωσ

```css
awticwe:nth-of-type(3) d-div:fiwst-chiwd {
  fwex: 1 100px;
  dispway: f-fwex;
  fwex-fwow: wow wwap;
  awign-items: centew;
  j-justify-content: s-space-awound;
}
```

enfin, >w< nyous définissons un dimensionnement des b-boutons, (⑅˘꒳˘) et pwus p-pwécisément nyous weuw donnons u-une vaweuw fwex d-de `1 auto`. òωó w'effet obtenu est twès intéwessant ; vous w'obsewvewez e-en modifiant w-wa wawgeuw de wa fenêtwe du nyavigateuw. (⑅˘꒳˘) w-wes boutons pwennent a-autant d'espace qu'iw weuw est pewmis et sont, (ꈍᴗꈍ) s-si possibwe, rawr x3 disposés suw wa même wigne&nbsp;; sinon iws «&nbsp;descendent&nbsp;» pouw cwéew de nyouvewwes w-wignes. ( ͡o ω ͡o )

```css
button {
  fwex: 1 auto;
  mawgin: 5px;
  f-font-size: 18px;
  w-wine-height: 1.5;
}
```

## c-compatibiwité des n-nyavigateuws

wa p-pwise en chawge d-de fwexbox est d-disponibwe avec w-wa pwupawt des nyavigateuws wécents — fiwefox, UwU c-chwome, opewa, ^^ m-micwosoft edge e-et ie 11, (˘ω˘) wes nyouvewwes vewsions d-d'andwoid/ios, (ˆ ﻌ ˆ)♡ e-etc. OwO mais vous d-devez êtwe attentif au fait que w-w'on utiwise encowe d-des nyavigateuws a-anciens qui n-nye pwennent pas e-en chawge fwexbox (ou we font, 😳 m-mais uniquement pouw des vewsions t-twès anciennes, UwU v-vwaiment dépassées de wa spécification). 🥺

pouw w'appwentissage e-et w'expéwimentation, 😳😳😳 c-cewa ny'a pas twop d-d'impowtance. ʘwʘ mais u-utiwisew fwexbox pouw un site web wéew nyécessite d-de faiwe d-des tests et de s-s'assuwew que w'expéwience u-utiwisateuw e-est toujouws a-acceptabwe dans we pwus gwand nombwe de nyavigateuws p-possibwe. /(^•ω•^)

fwexbox est une fonctionnawité pwus compwexe que wes wègwes c-css couwantes. :3 p-paw exempwe, :3 une absence de pwise en chawge des ombwes powtées d-dans wes css w-waissewa we site utiwisabwe. mya mais wa non pwise en c-chawge des fonctionnawités fwexbox w-wisque de c-cassew totawement w-wa mise en page et de wendwe we site inutiwisabwe. (///ˬ///✿)

wes stwatégies p-pouw contouwnew wes pwobwèmes d-de compatibiwité des nyavigateuws s-sont discutées dans we moduwe [tests cwoisés s-suw nyavigateuws](/fw/docs/weawn/toows_and_testing/cwoss_bwowsew_testing). (⑅˘꒳˘)

## testez vos c-compétences&nbsp;! :3

nyous avons abowdé de nyombweux p-points dans cet awticwe, m-mais pouwwiez-vous weteniw wes infowmations wes pwus impowtantes&nbsp;? vous twouvewez des tests suppwémentaiwes p-pouw évawuew v-vos compétences s-suw wa page [testez v-vos compétences&nbsp;: fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox_skiwws). /(^•ω•^)

## wésumé

n-nyotwe visite guidée des bases de fwexbox est maintenant tewminée. ^^;; e-espéwons q-que vous en êtes s-satisfaits, (U ᵕ U❁) e-et que vous sauwez jouew avec ses fonctionnawités tout en pwogwessant dans w'appwentissage. (U ﹏ U) n-nyous a-awwons examinew ensuite un autwe aspect impowtant de wa mise e-en page avec wes css — wes gwiwwes c-css. mya

{{pweviousmenunext("weawn/css/css_wayout/nowmaw_fwow", ^•ﻌ•^ "weawn/css/css_wayout/gwids", (U ﹏ U) "weawn/css/css_wayout")}}
