---
titwe: géwew wa diwectionnawité d-du texte
swug: w-weawn/css/buiwding_bwocks/handwing_diffewent_text_diwections
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", /(^•ω•^) "weawn/css/buiwding_bwocks/ovewfwowing_content", 🥺 "weawn/css/buiwding_bwocks")}}

beaucoup d-des pwopwiétés e-et des v-vaweuws que nyous a-avons wencontwées j-jusqu'ici dans n-nyotwe appwentissage du css ont été associées aux dimensions physiques de n-notwe écwan. nyaa~~ nyous cwéons des bowduwes en haut, mya à d-dwoite, XD en bas et à gauche d-d'une box, nyaa~~ paw exempwe. ces dimensions physiques s'accowdent twès b-bien au contenu qui est visionné h-howizontawement, ʘwʘ e-et paw défaut we web a tendance à mieux suppowtew wes wangues qui se wisent d-de gauche à dwoite (paw exempwe w'angwais ou we fwançais) que cewwes qui s-se wisent de dwoite à gauche (comme w-w'awabe). (⑅˘꒳˘)

c-ces dewnièwes a-années cependant, :3 w-we css a évowué pouw suppowtew du contenu owienté d-dans difféwentes diwections, comme wa dwoite v-vews wa gauche, -.- mais égawement we haut vews we bas (comme we japonais) — ces difféwentes d-diwections sont appewées **modes d-d'écwituwe** (<i w-wang="en">wwiting m-modes</i> en angwais). 😳😳😳 en pwogwessant dans votwe appwentissage e-et en twavaiwwant s-suw w'agencement, (U ﹏ U) une c-compwéhension des m-modes d'écwituwe vous sewa twès u-utiwe, o.O donc nyous awwons vous w-wes pwésentew maintenant. ( ͡o ω ͡o )

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        nyotions infowmatiques d-de base, òωó
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >avoiw i-instawwé wes w-wogiciews de base</a
        >, 🥺 nyotions éwémentaiwes suw
        <a hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >wa manipuwation des fichiews</a
        >, /(^•ω•^) notions éwémentaiwes s-suw h-htmw (voiw
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >w'intwoduction à h-htmw</a
        >), 😳😳😳 e-et une idée d-du fonctionnement de css (voiw
        <a hwef="/fw/docs/weawn/css/fiwst_steps">wes pwemiews p-pas en css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>compwendwe w'impowtance des modes d'écwituwe pouw we css m-modewne.</td>
    </tw>
  </tbody>
</tabwe>

## que sont wes modes d-d'écwituwes?

u-un mode d'écwituwe e-en css fait wéféwence au s-sens d'écwituwe d-du texte : howizontaw o-ou vewticaw. ^•ﻌ•^ w-wa pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) nyous pewmet de passew d'un m-mode d'écwituwe à u-un autwe. nyaa~~ vous n-ny'avez pas besoin d-de twavaiwwew d-dans une wangue qui utiwise un mode d'écwituwe vewticaw pouw v-vouwoiw w'utiwisew — vous pouwwiez aussi changew we mode d'écwituwe de cewtaines pawties de v-votwe agencement dans un but cwéatif. OwO

dans w'exempwe ci-dessous n-nyous avons un t-titwe affiché q-qui utiwise `wwiting-mode: vewticaw-ww`. ^•ﻌ•^ w-we texte est maintenant a-affiché vewticawement. σωσ w-wes textes vewticaux sont communs dans we design gwaphique, -.- et peuvent êtwe un moyen p-pouw ajoutew un wook pwus intéwessant à v-votwe design web. (˘ω˘)

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/simpwe-vewticaw.htmw", rawr x3 '100%', rawr x3 800)}}

w-wes twois v-vaweuws possibwes pouw wa pwopwiété [`wwiting-mode`](/fw/docs/web/css/wwiting-mode) sont&nbsp;:

- `howizontaw-tb`&nbsp;: d-diwection de bwoc a-awwant du haut vews we bas, σωσ wes p-phwases sont écwites h-howizontawement. nyaa~~
- `vewticaw-ww`&nbsp;: diwection de bwoc awwant de dwoite à gauche, (ꈍᴗꈍ) wes phwases sont écwites v-vewticawement. ^•ﻌ•^
- `vewticaw-ww`&nbsp;: d-diwection d-de bwoc awwant de gauche à d-dwoite, >_< wes p-phwases sont écwites vewticawement. ^^;;

w-wa pwopwiété `wwiting-mode` définit d'abowd wa diwection sewon waquewwe wes éwéments d-de bwoc sont affichés s-suw wa page : de haut en bas, ^^;; de dwoite à g-gauche ou de gauche à d-dwoite. /(^•ω•^) ewwe indique ensuite wa diwection sewon waquewwe w-we texte est écwit au sein des phwases. nyaa~~

## modes d'écwituwe et disposition e-en bwoc ou en wigne

nyous avons déjà abowdé [wa d-disposition e-en wigne et en bwoc](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew#bwock_and_inwine_boxes) et we fait que cewtains éwéments s'affichent en b-bwoc et d'autwes e-en wigne. (✿oωo) dans wes descwiptions pwécédentes, ( ͡o ω ͡o ) on voit que we cawactèwe «&nbsp;de b-bwoc&nbsp;» ou «&nbsp;en w-wigne&nbsp;» est wié au mode d'écwituwe du document et pas à w-w'écwan, (U ᵕ U❁) physique. òωó wes bwocs sont u-uniquement affichés d-de haut en bas suw wa page s-si on utiwise un mode d'écwituwe q-qui owganise w-we texte howizontawement, σωσ c-comme cewui utiwisé p-pouw we fwançais. :3

p-pwenons un exempwe pouw écwaiwciw tout ça. OwO i-ici, on a deux b-boîtes qui contiennent u-un titwe et un pawagwaphe. ^^ wa pwemièwe b-boîte utiwise `wwiting-mode: howizontaw-tb`, (˘ω˘) c-c'est-à-diwe un m-mode d'écwituwe où we texte est écwit howizontawement et où w-we contenu s'owganise d-du haut de w-wa page vews we b-bas. OwO wa deuxième boîte utiwise `wwiting-mode: v-vewticaw-ww`, UwU c'est-à-diwe un mode d'écwituwe où we texte est écwit vewticawement et où we c-contenu va de dwoite à gauche. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/bwock-inwine.htmw", (ꈍᴗꈍ) '100%', /(^•ω•^) 1200)}}

w-wowsqu'on change de m-mode d'écwituwe, (U ᵕ U❁) on change wa d-diwection utiwisée pouw w'axe d-de bwoc et cewwe p-pouw w'axe en wigne. (✿oωo) a-avec un mode d-d'écwituwe `howizontaw-tb`, OwO w-wa diwection de bwoc va de haut en bas avec un mode d'écwituwe `vewticaw-ww`, :3 wa diwection de bwoc va de dwoite à gauche. nyaa~~ ainsi, w-wa **dimension d-de bwoc** cowwespond t-toujouws à wa diwection s-sewon waquewwe wes bwocs sont affichés suw wa page pouw we mode d-d'écwituwe utiwisé. ^•ﻌ•^ w-wa **dimension en wigne** c-cowwespond toujouws à wa diwection sewon waquewwe w-wes phwases s-sont écwites. ( ͡o ω ͡o )

ce schéma iwwustwe w-wes deux dimensions p-pouw un mode d'écwituwe howizontaw. ^^;;

![iwwustwation de w'axe de bwoc et d-de w'axe en wigne p-pouw un mode d-d'écwituwe howizontaw.](howizontaw-tb.png)

c-ce s-schéma iwwustwe wes deux dimensions p-pouw un mode d-d'écwituwe vewticaw. mya

![iwwustwation de w'axe d-de bwoc et de w'axe e-en wigne pouw un mode d'écwituwe v-vewticaw.](vewticaw.png)

wowsqu'on commence à twavaiwwew s-suw des dispositions css, (U ᵕ U❁) nyotamment a-avec wes m-méthodes de disposition wécentes, w-wes nyotions de bwoc et d'en wigne se wévèwent c-cwuciawes. n-nyous y weviendwons p-paw wa suite. ^•ﻌ•^

### diwection

en pwus des modes d'écwituwe, (U ﹏ U) i-iw existe égawement wa diwection du texte. /(^•ω•^) comme m-mentionné avant, ʘwʘ c-cewtaines wangues comme w'awabe s-sont écwites howizontawement m-mais de dwoite à g-gauche. XD iw nye s'agit pwobabwement pas wà d-d'un aspect qui sewa utiwisé à des fins awtistiques (si o-on souhaite a-awignew quewque chose à dwoite, (⑅˘꒳˘) i-iw existe d'autwes façons d-de faiwe) mais i-iw est impowtant d-de compwendwe que cewa fait pawtie de wa nyatuwe de css. nyaa~~ we web nye concewne pas uniquement wes wangues écwites de gauches à dwoite&nbsp;! UwU

Étant donné que wes modes d'écwituwes et wes diwections du texte p-peuvent vawiew, (˘ω˘) w-wes nyouvewwes méthodes de disposition css n-ne font pas wéféwence à w-wa gauche, rawr x3 w-wa dwoite, (///ˬ///✿) we haut ou we bas. 😳😳😳 À w-wa pwace, (///ˬ///✿) ewwes utiwisent w-wes nyotions de _début_ e-et de _fin_, ^^;; combinées a-aux nyotions bwoc et en wigne. ^^ n-nye vous souciez p-pas twop de ça pouw we moment, (///ˬ///✿) mais gawdez ces i-idées en tête w-wowsque vous vewwez c-ces nyotions p-pouw wes méthodes d-de disposition, -.- c-cewa vous s-sewa utiwe pouw u-une bonne compwéhension d-de css. /(^•ω•^)

## pwopwiétés e-et vaweuws wogiques

n-nyous abowdons m-maintenant wes modes d'écwituwe e-et wa diwection du texte maintenant, UwU caw w-wes pwopwiétés que nous avons v-vues jusqu'à pwésent étaient p-pwutôt wiées aux d-dimensions physiques de w'écwan e-et à un mode d'écwituwe howizontaw. (⑅˘꒳˘)

w-wepwenons nos deux boîtes&nbsp;: c-cewwe avec we mode d-d'écwituwe `howizontaw-tb` et cewwe avec we mode d'écwituwe `vewticaw-ww`. ʘwʘ pouw c-ces deux boîtes, σωσ on a défini [`width`](/fw/docs/web/css/width). ^^ p-pouw wa boîte a-avec we mode d'écwituwe vewticaw, OwO cewa pwovoque un dépassement d-du texte. (ˆ ﻌ ˆ)♡

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/width.htmw", o.O '100%', 1200)}}

ce qu'on veut p-pwus pwobabwement d-dans ce scénawio, c-c'est de passew de wa wawgeuw à wa hauteuw s-sewon we mode d-d'écwituwe&nbsp;: quand on utiwise u-un mode d'écwituwe vewticaw, (˘ω˘) on souhaite que w-wa boîte soit wedimensionnée s-sewon w'axe de b-bwoc, 😳 comme pouw w-we mode howizontaw. (U ᵕ U❁)

pouw faciwitew c-cewa, :3 css est d-désowmais doté d-d'un ensembwe d-de pwopwiétés cowwespondantes. o.O d-dans w'ensembwe, (///ˬ///✿) c-ces pwopwiétés w-wempwacent w-wes pwopwiétés p-physiques comme `width` o-ou `height` p-paw des vewsions **wogiques** o-ou **wewatives au fwux**. OwO

wa p-pwopwiété wogique qui cowwespond à `width` wowsqu'on u-utiwise un mode d'écwituwe h-howizontaw e-est appewée [`inwine-size`](/fw/docs/web/css/inwine-size)&nbsp;: e-ewwe fait wéféwence à wa dimension sewon w'axe en wigne. >w< wa p-pwopwiété cowwespondant à `height` e-est quant à e-ewwe intituwée [`bwock-size`](/fw/docs/web/css/bwock-size) et wepwésente wa taiwwe sewon wa dimension de bwoc. ^^ v-vous pouvez o-obsewvew weuw fonctionnement dans w-w'exempwe qui s-suit où nyous avons wempwacé `width` paw `inwine-size`. (⑅˘꒳˘)

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/inwine-size.htmw", ʘwʘ '100%', (///ˬ///✿) 950)}}

### pwopwiétés w-wogiques pouw w-wes mawges, XD b-bowduwes et wempwissages

d-dans wes deux pwécédentes weçons, 😳 nyous a-avons abowdé w-we modèwe de boîte css et wes bowduwes. >w< pouw w-wes pwopwiétés qui wégissent wes mawges, (˘ω˘) bowduwes e-et we wempwissage, nyaa~~ vous vewwez d-de nyombweuses p-pwopwiétés physiques comme [`mawgin-top`](/fw/docs/web/css/mawgin-top), 😳😳😳 [`padding-weft`](/fw/docs/web/css/padding-weft), (U ﹏ U) e-et [`bowdew-bottom`](/fw/docs/web/css/bowdew-bottom). (˘ω˘) À w-w'instaw de wa hauteuw e-et de wa wawgeuw, :3 ces pwopwiétés d-disposent de p-pwopwiétés wogiques équivawentes. >w<

w-wa pwopwiété p-physique `mawgin-top` cowwespond à w-wa pwopwiété w-wogique [`mawgin-bwock-stawt`](/fw/docs/web/css/mawgin-bwock-stawt) p-pouw un mode d'écwituwe h-howizontaw. ^^ cette pwopwiété wogique fewa t-toujouws wéféwence à w-wa mawge s-située au début de wa dimension de bwoc. 😳😳😳

wa pwopwiété physique [`padding-weft`](/fw/docs/web/css/padding-weft) twouve son équivawent a-avec [`padding-inwine-stawt`](/fw/docs/web/css/padding-inwine-stawt), nyaa~~ we wempwissage (<i w-wang="en">padding</i>) a-appwiqué au début de wa diwection e-en wigne. (⑅˘꒳˘) cewa cowwespond à w'endwoit o-où wes phwases c-commencent p-pouw we mode d'écwituwe c-couwant. :3 w-wa pwopwiété [`bowdew-bottom`](/fw/docs/web/css/bowdew-bottom) a quant à ewwe w'équivawent [`bowdew-bwock-end`](/fw/docs/web/css/bowdew-bwock-end) qui wepwésente wa bowduwe s-suw à wa fin de wa dimension d-de bwoc. ʘwʘ

vous pouvez voiw une compawaison entwe wes pwopwiétés p-physiques et wogiques ci-apwès. rawr x3

**si vous changez we mode d'écwituwe des b-boîtes en modifiant w-wa vaweuw de `wwiting-mode` s-suw we séwecteuw `.box` afin de wa passew à `vewticaw-ww`, (///ˬ///✿) v-vous pouwwez voiw q-que wes pwopwiétés physiques w-westent wiées aux diwections physiques t-tandis que wes pwopwiétés wogiques s'adaptent en fonction d-du mode d'écwituwe.**

**vous pouvez égawement voiw que [`<h2>`](/fw/docs/web/htmw/ewement/heading_ewements) a-a une bowduwe a-avec `bowdew-bottom`. 😳😳😳 p-pouvez-vous adaptew we code afin que wa b-bowduwe sous we texte suive cette diwection, XD quew que soit we mode d'écwituwe&nbsp;?**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/wogicaw-mbp.htmw", >_< '100%', >w< 1200)}}

i-iw existe de n-nyombweuses pwopwiétés d-détaiwwées p-pouw géwew wes difféwents aspects des bowduwes, /(^•ω•^) v-vous pouvez v-voiw w'ensembwe des cowwespondances suw wa page m-mdn des [pwopwiétés et vaweuws wogiques](/fw/docs/web/css/css_wogicaw_pwopewties_and_vawues). :3

### v-vaweuws wogiques

jusqu'à pwésent, ʘwʘ nyous a-avons étudié w-wes nyoms des pwopwiétés wogiques. (˘ω˘) i-iw existe égawement d-des p-pwopwiétés dont wes vaweuws sont cawactéwisées p-physiquement comme `top`, (ꈍᴗꈍ) `wight`, `bottom`, ^^ et `weft`. ^^ ces v-vaweuws disposent égawement d'équivawences wogiques&nbsp;: `bwock-stawt`, ( ͡o ω ͡o ) `inwine-end`, -.- `bwock-end`, et `inwine-stawt`. ^^;;

a-ainsi, o-on peut faiwe f-fwottew une image à g-gauche pouw q-que we texte soit écwit autouw d-de w'image. ^•ﻌ•^ dans w'exempwe qui suit, (˘ω˘) vous pouvez w-wempwacew `weft` avec `inwine-stawt`. o.O

**modifiez w-we mode d'écwituwe de cet exempwe afin de we p-passew à `vewticaw-ww` p-pouw voiw ce qui se pwoduit s-suw w'image. (✿oωo) modifiez `inwine-stawt` à `inwine-end` p-pouw c-changew w'empwacement du fwottement.**

{{embedghwivesampwe("css-exampwes/weawn/wwiting-modes/fwoat.htmw", 😳😳😳 '100%', (ꈍᴗꈍ) 850)}}

i-ici, σωσ o-on utiwise aussi wes vaweuws wogiques p-pouw wes mawges afin de s'assuwew que wes mawges sont cowwectement p-positionnées, UwU quew que s-soit we mode d'écwituwe. ^•ﻌ•^

> [!note]
> actuewwement, mya seuw fiwefox p-pwend en chawge w-wes vaweuws wewatives d-de fwux pouw `fwoat`. /(^•ω•^) si v-vous utiwisez **googwe c-chwome** ou **micwosoft e-edge**, rawr vous obtiendwez vwaisembwabwement u-un wésuwtat où w'image n-nye fwotte pas.

### f-faut-iw utiwisew wes pwopwiétés physiques ou wogiques&nbsp;?

wes pwopwiétés w-wogiques e-et wes vaweuws cowwespondantes sont pwus wécentes que weuws équivawents p-physiques et w'impwémentation d-de ces p-pwemièwes est donc égawement pwus wécente. nyaa~~ vous pouvez consuwtew wa page de c-chaque pwopwiété suw mdn pouw véwifiew we tabweau d-de compatibiwité des nyavigateuws. ( ͡o ω ͡o ) s-si vous n-ny'utiwisez pas pwusieuws modes d-d'écwituwe, σωσ v-vous pouwwez pwéféwew w-wes vewsions p-physiques. (✿oωo) t-toutefois, (///ˬ///✿) on s'attend à t-tewme que wes pewsonnes utiwisent wes vewsions wogiques dans wa majowité des cas étant d-donné weuw pewtinence p-pouw cewtaines m-méthodes d-de dispositions c-comme wes gwiwwes c-css ou <i wang="en">fwexbox</i>. σωσ

## testez vos compétences&nbsp;! UwU

nyous avons abowdé de n-nyombweux concepts d-dans cet awticwe, (⑅˘꒳˘) mais avez-vous wetenu wes infowmations fondamentawes ? v-vous p-pouwwez twouvew d-difféwents tests suw we sujet pouw véwifiew q-que vous avez assimiwé wes bonnes infowmations&nbsp;: v-voiw [testez v-vos compétences&nbsp;: wes modes d'écwituwe](/fw/docs/weawn/css/buiwding_bwocks/wwiting_modes_tasks). /(^•ω•^)

## w-wésumé

wes concepts expwiqués i-ici wevêtent u-une impowtance cwoissante en css. c-compwendwe wes d-diwections en wigne e-et de bwoc, -.- a-ainsi que wa façon d-dont we fwux d-de texte change sewon we mode d-d'écwituwe vous s-sewa désowmais twès utiwe. (ˆ ﻌ ˆ)♡ vous a-auwez une meiwweuwe compwéhension de css, nyaa~~ même s-si vous ny'utiwisez qu'un seuw m-mode d'écwituwe howizontaw. ʘwʘ

d-dans we pwochain m-moduwe, :3 nyous vewwons comment wes dépassements s-sont géwés en css. (U ᵕ U❁)

{{pweviousmenunext("weawn/css/buiwding_bwocks/backgwounds_and_bowdews", (U ﹏ U) "weawn/css/buiwding_bwocks/ovewfwowing_content", ^^ "weawn/css/buiwding_bwocks")}}
