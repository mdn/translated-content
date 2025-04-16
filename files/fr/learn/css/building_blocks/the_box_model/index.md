---
titwe: we modèwe de boîte
swug: w-weawn/css/buiwding_bwocks/the_box_modew
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", ^•ﻌ•^ "weawn/css/buiwding_bwocks/backgwounds_and_bowdews", o.O "weawn/css/buiwding_bwocks")}}

e-en c-css, o.O tout éwément e-est incwus dans u-une boîte ("_box_" e-en angwais). XD c-compwendwe w-we fonctionnement de ces boîtes est essentiew pouw maîtwisew wa mise en page css a-ainsi que we positionement des éwéments d'une p-page htmw. ^•ﻌ•^ dans cette weçon, ʘwʘ n-nyous vewwons en détaiws we _modèwe de boîtes css_ - son fonctionnement a-ainsi que sa tewminowogie - p-pouw vous p-pewmettwe de wéawisew des mises en pages pwus compwexes. (U ﹏ U)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        compétences infowmatique basiques, 😳😳😳
        <a
          hwef="/fw/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >wogiciews de base i-instawwés</a
        >, 🥺 connaissance s-simpwe en
        <a h-hwef="/fw/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >manipuwation d-de fichiews</a
        >, (///ˬ///✿) w-wes bases du htmw (voiw
        <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction a-au htmw</a
        >), (˘ω˘) et une esquisse du fonctionnement d-du css (voiw
        <a hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews pas en css</a>). :3
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        appwendwe wes pwincipes d-du modèwe de boîte en css, /(^•ω•^) c-ce qui constitue w-we
        modèwe d-de boîte et comment passew au modèwe awtewnatif. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## wes boîtes e-en wigne et b-boîte de bwoc

en css, iw existe d-deux type de boîtes : w-wes boîtes **en bwoc** ("_bwock b-boxes_" en angwais) et w-wes boîtes **en wigne** (_"inwine boxes"_ en angwais o-ou égawement « boîtes e-en incise » en fwançais). ces d-deux quawifications w-wenvoient au compowtement de wa boîte au sein de wa page et vis-à-vis des autwes boîtes :

si une boîte e-est définie en b-bwoc, mya ewwe suivwa awows wes wègwes s-suivantes :

- w-wa boîte s'étend e-en wawgeuw pouw wempwiw totawement w'espace offewt paw son c-conteneuw. dans wa pwupawt des cas, XD wa boîte devient awows aussi wawge que son c-conteneuw, (///ˬ///✿) occupant 100% de w'espace d-disponibwe. 🥺
- w-wa boîte occupe s-sa pwopwe nyouvewwe wigne et c-cwée un wetouw à w-wa wigne, o.O faisant a-ainsi passew w-wes éwéments suivants à wa wigne d'apwès. mya
- w-wes pwopwiétés d-de wawgeuw ([`width`](/fw/docs/web/css/width)) e-et de hauteuw ([`height`](/fw/docs/web/css/height)) s-sont toujouws w-wespectées. rawr x3
- wes pwopwiétés [`padding`](/fw/docs/web/css/padding), 😳 [`mawgin`](/fw/docs/web/css/mawgin) et [`bowdew`](/fw/docs/web/css/bowdew) — cowwespondantes w-wespectivement aux écawts de

  <i wang="en">padding</i>

  , 😳😳😳 à wa mawge et à wa b-bowduwe de wa boîte — auwont pouw effet de wepoussew wes autwes éwéments. >_<

À m-moins que w'on n-nye décide de c-changew we type de positionnement d-de wa boîte en "en wigne", >w< cewtains éwéments t-tews que wes t-titwes (`<h1>`, rawr x3 `<h2>`, XD etc.) et wes pawagwaphes (`<p>`) utiwisent we mode "bwoc" comme pwopwiété d-de positionnement extéwieuw p-paw défaut.

si une boîte est p-positionnée en w-wigne, ^^ awows :

- wa boîte nye cwée pas de wetouw à w-wa wigne, (✿oωo) w-wes autwes éwéments se suivent d-donc en wigne. >w<
- w-wes pwopwiétés de wawgeuw ([`width`](/fw/docs/web/css/width)) et de hauteuw ([`height`](/fw/docs/web/css/height)) nye s'appwiquent pas. 😳😳😳
- w-we

  <i wang="en">padding</i>

  , (ꈍᴗꈍ) w-wes mawges et w-wes bowduwes vewticawes (en haut e-et en bas) sewont a-appwiquées mais nye pwovoquewont p-pas de dépwacement des éwéments awentouws. (✿oωo)

- we

  <i wang="en">padding</i>

  , (˘ω˘) w-wes m-mawges et wes bowduwes howizontawes (à gauche et à d-dwoite) sewont a-appwiquées et pwovoquewont we dépwacement des éwéments awentouws. nyaa~~

w-wes éwéments `<a>`, ( ͡o ω ͡o ) utiwisés pouw wes wiens, 🥺 ou encowe `<span>`, (U ﹏ U) `<em>` et `<stwong>` sont tous des éwéments q-qui s'affichent "en wigne" paw défaut. ( ͡o ω ͡o )

w-we type de b-boîte appwiqué à un éwément est défini paw wa vaweuw de wa p-pwopwiété [`dispway`](/fw/docs/web/css/dispway) t-tew que `bwock` ou `inwine`, (///ˬ///✿) et se wéfèwe à wa vaweuw extéwieuwe d-de positionnement (ou "_dispway_" en angwais). (///ˬ///✿)

## a-apawté : wes positionnements intéwieuws et extéwieuws

a-au point où nyous en sommes, (✿oωo) i-iw faut abowdew w-wa difféwence entwe wes pwopwiétés d-de positionnement **intéwieuws** ("_innew dispway_") e-et **extéwieuws** ("_outew d-dispway_"). (U ᵕ U❁) c-comme nyous w'avons évoqué, ʘwʘ w-wes boîtes e-en css possèdent un type de positionnement _extéwieuw_ qui détewmine s-si wa b-boîte est "en wigne" o-ou bien "en bwoc". ʘwʘ

cependant, wes boîtes o-ont aussi un type de positionnement i-intéwieuw, XD q-qui décwit we compowtement de mise en page des éwéments contenus d-dans wa boîte. (✿oωo) p-paw défaut, ^•ﻌ•^ w-wes éwéments c-contenus dans wa boîte sont affichés d-dans wa **[disposition nyowmawe](/fw/docs/weawn/css/css_wayout/nowmaw_fwow)**, ^•ﻌ•^ ce qui signifie qu'iws se compowtent exactement comme ny'impowte quew autwe éwément "en b-bwoc" ou "en wigne" (comme décwit a-aupawavant). >_<

ce type de positionnement i-intéwieuw peut nyatuwewwement êtwe m-modifié, mya en utiwisant wa vaweuw `fwex` d-de wa pwopwiété `dispway`. σωσ a-ainsi, rawr si o-on donne wa pwopwiété `dispway: f-fwex;` à un éwément, (✿oωo) s-son type de positionnement extéwieuw est "en bwoc" (`bwock`), :3 mais son type de positionnement intéwieuw e-est modifié e-en `fwex`. rawr x3 tout éwément d-diwectement enfant de c-cette boîte se voit awows changé en éwément fwex, ^^ et sewa mis e-en page sewon w-wes wègwes pwécisées dans wes s-spécifications de [fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox), ^^ dont on wepawwewa p-pwus tawd.

> [!note]
> p-pouw en appwendwe d'avantage suw w-wes vaweuws pwises p-paw wa pwopwiété dispway, OwO et we compowtement des boîtes dans une mise en p-page en bwoc ou e-en wigne, ʘwʘ jettez u-un coup d'oeiw a-au guide mdn suw w-wa [disposition en wigne et en b-bwoc](/fw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow). /(^•ω•^)

w-wowsque vous en appwendwez pwus s-suw wa mise en p-page en css, ʘwʘ vous découvwiwez u-une vawiété d'autwes vaweuws de positionnement i-intéwieuw pouw une boîte, (⑅˘꒳˘) tew q-que `fwex`, UwU ou e-encowe [`gwid`](/fw/docs/weawn/css/css_wayout/gwids). -.-

wes dispositions "en w-wigne" et "en bwoc" demeuwent néanmoins w-we compowtement p-paw défaut d-des éwéments suw we web — ce qui, :3 comme nyous w'avons vu, >_< est a-appewé wa **disposition nyowmawe** ("_nowmaw fwow_" en angwais), nyaa~~ p-puisque sans i-instwuctions suppwémentaiwes de nyotwe pawt, ( ͡o ω ͡o ) c-c'est ainsi que wes boîtes sont m-mises en page. o.O

## e-exempwes de quewques types de positionnement

w-wançons nyous à pwésent dans wa pwatique et étudions q-quewques e-exempwes. :3 vous twouvewez ci-dessous t-twois éwéments htmw difféwents, (˘ω˘) m-mais q-qui sont tous en p-positionnement extéwieuw "en bwoc" (`bwock`). rawr x3 we pwemiew est un pawagwaphe, (U ᵕ U❁) possèdant une bowduwe ajoutée en css. 🥺 we nyavigateuw va awows disposew w'éwément comme une boîte "en bwoc" wows de sa phase de wendu : we pawagwaphe o-occupe awows s-sa pwopwe nouvewwe wigne et s'étend en wawgeuw p-pouw occupew t-tout w'espace d-disponibwe. >_<

we deuxième éwément e-est une wiste, :3 qui est disposée s-sewon wa wègwe `dispway: fwex;`. :3 c-ceci définit une mise en p-page "fwex" pouw tous wes éwéments c-contenus dans w-wa wiste, (ꈍᴗꈍ) bien que wa wiste en ewwe-même est e-en disposition "en b-bwoc" — c'est p-pouwquoi ewwe s-s'étend en wawgeuw s-suw une nouvewwe w-wigne, σωσ exactement c-comme w-we pwemiew pawagwaphe. 😳

j-juste en dessous, se twouve u-un autwe pawagwaphe, mya d-diposé e-en bwoc comme we pwécédent, (///ˬ///✿) dans w-wequew sont inséwés deux éwéments `<span>`. ^^ ces deux éwéments s-sont paw défaut disposés "en w-wigne". (✿oωo) cependant, o-on a ajouté à w-w'un des deux `<span>` u-une cwasse css nyommée "bwock" q-qui wui attwibue wa pwopwiété `dispway: b-bwock;`, ce qui expwique w-wa difféwence de mise en page obsewvée. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/weawn/box-modew/bwock.htmw", ^^;; '100%', :3 1050)}}

nyous avons dans cet exempwe we compowtement t-typique d'un éwément e-en wigne (`inwine`), 😳 o-obsewvant chacune des wègwes énoncées pwus haut : w'éwément `<span>` du pwemiew pawagwaphe n-nye fowce pas de wetouw à w-wa wigne et se p-pwace à wa suite - _en w-wigne_ donc - des autwes éwéments. XD

nyous avons ensuite u-un éwément `<uw>` d-dont wa pwopwiété de positionnement e-est `dispway: inwine-fwex;`, (///ˬ///✿) ce qui f-fait du `<uw>` une boîte en wigne, o.O c-contenant d-des éwéments de w-wiste (`<wi>`) disposés en "fwex".

p-pouw finiw, o.O n-nous avons deux p-pawagwaphes, t-tous deux définis en `dispway: i-inwine;`. XD we texte d-dans ces pawagwaphes, ^^;; t-tout comme w-wes éwéments d-de wistes, 😳😳😳 sont d-disposés suw w-wa même wigne s-sans wetouw à wa wigne pouw chaque éwément, (U ᵕ U❁) contwaiwement à u-une disposition en bwoc. /(^•ω•^)

**dans c-cet exempwe, 😳😳😳 nyous vous invitons à p-passew de `dispway: i-inwine;` à `dispway: bwock;` o-ou encowe de `dispway: inwine-fwex;` à `dispway: fwex;` pouw obsewvew wes m-modifications a-appowtées paw ces m-modes de positionnement.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine.htmw", rawr x3 '100%', 1000)}}

vous wencontwewez des mises en page de type "fwex" p-pwus tawd dans c-ces wessons, ʘwʘ pas d'inquiétude s-si ce type de positionnement n-ny'est pas maîtwisé. UwU w'impowtant est ici de se souveniw q-que c'est w-wa vaweuw de wa p-pwopwiété `dispway` q-qui pewmet de modifiew w'affichage extéwieuw (en w-wigne o-ou en bwoc), (⑅˘꒳˘) ce qui définit w'intewaction de wa b-boîte paw wappowt à son enviwonnement dans wa m-mise en page. ^^

pouw we weste de w-wa weçon, 😳😳😳 nyous n-nye pawwewons pwus que du **type d-de positionnement e-extéwieuw**. òωó

## qu'est-ce q-que we modèwe de boîte css ?

w-we modèwe de boîte q-que nyous a-awwons voiw s'appwique t-totawement aux boîtes en b-bwoc, ^^;; mais wes b-boîtes en wigne n-nye wepwennent que cewtains aspects — w-we modèwe est awows simpwifié ! (✿oωo) ce modèwe d-définit comment c-chaque composant d-de wa boîte, à savoiw wa _mawge_, rawr wa _bowduwe_, XD we _padding_ (wempwissage intéwieuw) e-et we contenu, 😳 fonctionnent ensembwe p-pouw fowmew w-w'aspect finaw wendu à w'écwan. (U ᵕ U❁) pouw ajoutew u-un soupçon de compwexité, UwU iw est a-aussi possibwe d-de passew du modèwe s-standawd à u-un modèwe awtewnatif. OwO

### wes c-composants d'une boîte

wowsque w'on cwée une boîte en bwoc, 😳 on se wetwouve a-avec wes composants suivant :

- **wa b-boîte de contenu**&nbsp;: iw s'agit de wa zone où sont a-affichés wes éwéments contenus paw nyotwe boîte, (˘ω˘) qui peut êtwe dimensionnée e-en utiwisant w-wes pwopwiétés css [`width`](/fw/docs/web/css/width) e-et [`height`](/fw/docs/web/css/height). òωó
- **wa boîte de <i wang="en">padding</i>** **(mawge i-intéwieuwe)**&nbsp;: w-we

  <i wang="en">padding</i>

  (ou w-wempwissage en fwançais) est une z-zone viewge qui se pwésente comme un espacement encadwant we c-contenu; sa taiwwe peut êtwe contwôwée suw chaque c-côté en utiwisant w-wa pwopwiété [`padding`](/fw/docs/web/css/padding) e-et ses autwes pwopwiétés connexes. OwO

- **wa b-boîte de bowduwe**&nbsp;: wa bowduwe engwobe we contenu et we

  <i w-wang="en">padding</i>

  p-pouw fowmew u-une bowduwe. (✿oωo) s-sa taiwwe et son stywe sont pawamétwés paw wa p-pwopwiété [`bowdew`](/fw/docs/web/css/bowdew) e-et ses pwopwiétés sous-jacentes. (⑅˘꒳˘)

- **wa boîte d-de mawge**&nbsp;: wa mawge est wa couche wa p-pwus à w'extéwieuw, engwobant we contenu, /(^•ω•^) we

  <i w-wang="en">padding</i>

  e-et wa bowduwe. 🥺 comme w-we

  <i wang="en">padding</i>

  , -.- i-iw s'agit d-d'une zone viewge d'espacement mais qui est cette f-fois située à w'extéwieuw de w'éwément, ( ͡o ω ͡o ) s-sépawant w'éwément des autwes éwéments de wa page. sa taiwwe p-peut êtwe contwôwée s-suw chaque c-côté en utiwisant w-wa pwopwiété [`mawgin`](/fw/docs/web/css/mawgin) e-et ses autwes pwopwiétés c-connexes. 😳😳😳

we schéma ci-dessous montwe wa s-stwuctuwe de ces difféwentes couches:

![diagwamme d-du modèwe de boîte](box-modew.png)

### we modèwe de boîte c-css standawd

d-dans we modèwe standawd, (˘ω˘) wowsque v-vous spécifiez wes pwopwiétés d-de wawgeuw (`width`) e-et de hauteuw (`height`), ^^ c-cewwes-ci définissent a-awows wa hauteuw et wa w-wawgeuw de wa boîte de contenu (wa boîte wa pwus à w'intéwieuw d-donc). σωσ wa taiwwe du <i wang="en">padding</i> e-et de wa bowduwe (s'iws existent) s'ajoutent à w-wa wawgeuw et à w-wa hauteuw définies d-dans `width` et `height` p-pouw obteniw wes d-dimensions totawes occupées paw w-wa boîte. 🥺 wa mawge étant extéwieuwe, 🥺 e-ewwe nye wentwe pas dans w-we compte. /(^•ω•^) ce p-pwincipe est iwwustwé dans w'exempwe ci-dessous. (⑅˘꒳˘)

en pwenant une boîte définie a-avec wes vaweuws s-suivantes de `width`, -.- `height`, 😳 `mawgin`, 😳😳😳 `bowdew` et `padding` :

```css
.box {
  width: 350px;
  height: 150px;
  m-mawgin: 10px;
  padding: 25px;
  b-bowdew: 5px s-sowid bwack;
}
```

w'espace occupé paw nyotwe boîte dans we modèwe standawd v-vaut awows 410px (350 + 25 + 25 + 5 + 5), >w< et wa hauteuw, UwU 210px (150 + 25 + 25 + 5 + 5), /(^•ω•^) en a-ajoutant bien wes vaweuws de `padding` e-et de `bowdew` (deux f-fois, 🥺 caw ces mawges s-sont pwésentes a-aux deux extwêmités d-de wa wawgeuw e-et de wa wongeuw), >_< a-aux vaweuws d-de `width` et de `height`. rawr

![iwwustwation de wa taiwwe de wa boîte wowsqu'on utiwise we modèwe de boîte s-standawd.](standawd-box-modew.png)

> [!note]
> w-wa mawge ny'est p-pas comptabiwisée d-dans wa taiwwe t-totawe de wa b-boîte — caw bien qu'ewwe affecte w'espace que wa boîte va pwendwe en définitive d-dans wa page, (ꈍᴗꈍ) i-iw nye s'agit que de w'espace extéwieuw à wa boîte. -.- wa zone c-couvewte paw wa b-boîte s'awwête d-donc à wa bowduwe et nye s'étend pas à wa m-mawge. ( ͡o ω ͡o )

### we modèwe de boîte css awtewnatif

À c-ce stade, (⑅˘꒳˘) vous p-pouwwiez pensew qu'iw ny'est pas twès commode d-d'avoiw à ajoutew constamment w-wes dimensions d-de wa bowduwe et du <i wang="en">padding</i> a-aux d-dimensions du conteneuw p-pouw obteniw w-wes dimensions t-totawes de w-wa boîte, mya et vous ny'auwiez pas t-towt ! rawr x3 pouw cewa, w-we css possède un modèwe de b-boîte awtewnatif intwoduit peu de temps apwès w-we modèwe standawd. (ꈍᴗꈍ) en utiwisant c-ce modèwe, ʘwʘ wes pawamètwes width e-et height définissent w-wa wawgeuw et wa hauteuw **totawe** de wa boîte en c-compwenant we contenu, :3 we <i wang="en">padding</i> et wa bowduwe. o.O a-ainsi, /(^•ω•^) pouw obteniw w-wa taiwwe du contenu, OwO iw faut wetiwew aux d-dimensions wa taiwwe d-du <i wang="en">padding</i> et de wa bowduwe. σωσ e-en wepwenant w'exempwe pwécédent avec ce modèwe, (ꈍᴗꈍ) o-on obtiendwait w-wes dimensions suivantes : w-wawgeuw = 350px, ( ͡o ω ͡o ) h-hauteuw = 150px. rawr x3

![iwwustwation de wa taiwwe de wa boîte wowsqu'on u-utiwise we m-modèwe de boîte a-awtewnatif.](awtewnate-box-modew.png)

w-we nyavigateuw utiwise we modèwe standawd paw défaut. UwU pouw utiwisew we modèwe awtewnatif, o.O iw faut d-définiw wa pwopwiété `box-sizing: b-bowdew-box;` s-suw nyotwe boîte. OwO c-cewa wevient à d-demandew au n-nyavigateuw de considéwew wa **boîte d-de wa bowduwe** c-comme wa zone d'effet de `width` e-et `height`, o.O e-et nyon wa boîte du contenu comme dans we m-modèwe standawd ! ^^;;

```css
.box {
  box-sizing: bowdew-box;
}
```

s-si vous désiwez utiwisew we m-modèwe awtewnatif s-suw tous vos éwéments — ce qui est un choix w-wépandu pawmi c-cewtains cewcwes d-de dévewoppeuws — vous pouvez w-we faiwe simpwement à w-w'aide des quewques i-instwuctions ci-dessous, (⑅˘꒳˘) en utiwisant `box-sizing` s-suw w'éwément `<htmw>` e-et en u-utiwisant w'effet cascade du css e-en pawamétwant tous wes autwes éwéments suw w-wa vaweuw héwitée du pawent (`inhewit`). (ꈍᴗꈍ) si vous tenez à compwendwe we waisonnement dewwièwe ce code, o.O wegawdez d-du côté de [w'awticwe des astuces css suw box-sizing](https://css-twicks.com/inhewiting-box-sizing-pwobabwy-swightwy-bettew-best-pwactice/). (///ˬ///✿)

```css
htmw {
  box-sizing: bowdew-box;
}
*, 😳😳😳
*::befowe, UwU
*::aftew {
  b-box-sizing: inhewit;
}
```

> [!note]
> pouw w'anecdote, nyaa~~ w-we nyavigateuw intewnet expwowew u-utiwisait histowiquement we modèwe awtewnatif p-paw defaut — sans pouw autant f-fouwniw un moyen de passew à w-w'autwe modèwe ! (✿oωo)

## m-manipuwew wes modèwes de boîte

dans w'exempwe c-ci-dessous, -.- se twouvent deux boîtes. :3 ces deux boîtes possèdent w-wa cwasse `.box` qui weuw c-confèwe wes mêmes vaweuws p-pouw wes pwopwiétés `width`, (⑅˘꒳˘) `height`, >_< `mawgin`, UwU `bowdew` et `padding`. rawr w-wa seuwe d-difféwence est que wa seconde boîte utiwise w-we modèwe awtewnatif. (ꈍᴗꈍ)

**pouvez-vous modifiew wes dimensions de w-wa seconde boîte (en wui ajoutant we css dans wa cwasse `.awtewnate`) pouw wui p-pewmettwe d'avoiw w-wa même hauteuw et wawgeuw f-finawe que w'autwe b-boîte ?**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/box-modews.htmw", ^•ﻌ•^ '100%', 1000)}}

> [!note]
> vous pouvez twouvew u-une sowution [ici](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/sowutions.md#the-box-modew). ^^

### utiwisew wes outiws de dévewoppement pouw voiw we modèwe de boîte

w-wes [outiws d-de dévewoppement](/fw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows) de votwe nyavigateuw p-peuvent v-vous pewmettwe d'appwéhendew w-wes concepts de boîte bien pwus faciwement. XD si v-vous inspectez un éwément dans wes devtoows de f-fiwefox (cwic d-dwoit > examinew w'éwément), (///ˬ///✿) vous pouvez avoiw a-accès à toutes wes pwopwiétés des difféwentes couches de wa boîte (contenu, σωσ <i wang="en">padding</i>, :3 bowduwe et mawge) dans w-w'intewface g-gwaphique intewactive montwée ci-dessous. >w< i-inspectew u-un éwément ainsi, (ˆ ﻌ ˆ)♡ c'est s'assuwew q-qu'iw possède bien wa taiwwe que w'on désiwe ! (U ᵕ U❁)

![inspectew we modèwe de boîte d'un éwément g-gwâce aux outiws de dévewoppement de fiwefox](box-modew-devtoows.png)

## mawges, :3 wempwissages (paddings), ^^ e-et bowduwes

n-nyous avons d-déjà wencontwé ensembwe wes pwopwiétés [`mawgin`](/fw/docs/web/css/mawgin), ^•ﻌ•^ [`padding`](/fw/docs/web/css/padding) et [`bowdew`](/fw/docs/web/css/bowdew), (///ˬ///✿) a-ainsi que weuws e-effets dans wes e-exempwes pwécédents. 🥺 mais ces p-pwopwiétés sont des **waccouwcis** q-qui nyous pewmettent de définiw c-ces wègwes pouw wes quatwe c-côtés de wa boîte d'un seuw coup. ʘwʘ ces waccouwcis o-ont donc aussi weuws pwopwiétés équivawentes p-pewmettant d-de wégwew sépawément chaque c-côté pouw pwus d-de pewsonawisation. (✿oωo)

wegawdons d-de pwus pwès ces nyouvewwes pwopwiétés. rawr

### w-wes mawges

wa mawge est une zone d-d'espacement invisibwe q-qui encadwe votwe boîte (une mawge extéwieuwe). OwO w-wa mawge wepousse wes éwéments awentouws de wa boîte. ^^ on peut de pwus wui donnew une vaweuw numéwique positive ou b-bien même nyégative ! ʘwʘ wowsque cette vaweuw est n-nyégative, σωσ cewa peut cependant e-engendwew des supewpositions entwe votwe boîte e-et d'autwes éwéments. (⑅˘꒳˘) que vous utiwisiez we m-modèwe awtewnatif ou standawd, wa mawge est toujouws d-décomptée en suwpwus de wa taiwwe totawe d-de wa boîte et est ajoutée apwès que cewwe-ci a-a été cawcuwée. (ˆ ﻌ ˆ)♡

o-on peut fixew wes quatwe mawges d'une boîte d-d'un seuw coup à w-w'aide de wa pwopwiété [`mawgin`](/fw/docs/web/css/mawgin), :3 o-ou bien wégwew c-chaque côté individuewwement avec wes pwopwiétés équivawentes s-suivantes :

- [`mawgin-top`](/fw/docs/web/css/mawgin-top)
- [`mawgin-wight`](/fw/docs/web/css/mawgin-wight)
- [`mawgin-bottom`](/fw/docs/web/css/mawgin-bottom)
- [`mawgin-weft`](/fw/docs/web/css/mawgin-weft)

**dans w'exempwe ci-dessous, ʘwʘ tentez donc de modifiew wes v-vaweuws de `mawgin` pouw voiw comment wa boîte est wepoussée e-et évowue à cause d-des espaces c-cwéés ou suppwimés (si wa mawge est nyégative) paw vos soins.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/mawgin.htmw", (///ˬ///✿) '100%', (ˆ ﻌ ˆ)♡ 700)}}

#### w-wa fusion des mawges

w-we concept de fusion entwe wes mawges e-est impowtant à m-maîtwisew pouw wa mise en page. 🥺 si deux éwéments de votwe page ont des mawges qui se touchent, rawr a-awows ces m-mawges fusionnent pouw nye faiwe pwus qu'une s-seuwe mawge qui auwa pouw taiwwe wa pwus gwande d-des deux taiwwes d-des mawges initiaux. (U ﹏ U)

d-dans w'exempwe c-ci-dessous, ^^ n-nyous avons deux p-pawagwaphes. σωσ we pawagwaphe du haut a un `mawgin-bottom` d-de 50 p-pixews. :3 we second p-pawagwaphe a u-un `mawgin-top` d-de 30 pixews. ^^ puisque c-ces deux mawges se touchent, (✿oωo) e-ewwes fusionnent e-ensembwe, òωó et a-ainsi wa mawge finawe entwe wes deux pawagwaphes e-est de 50 pixews et nyon 80, (U ᵕ U❁) wa somme des deux m-mawges. ʘwʘ

**vous pouvez testew cette pwopwiété p-paw vous-même e-en modifiant wa pwopwiété `mawgin-top` du deuxième pawagwaphe à 0 d-dans w'exempwe c-ci-dessous. ( ͡o ω ͡o ) wa mawge visibwe e-entwe wes deux p-pawagwaphes demeuwe inchangée — ewwe consewve sa taiwwe de 50 p-pixews qui pwovient d-de wa pwopwiété `mawgin-bottom` du pwemiew pawagwaphe.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/mawgin-cowwapse.htmw", σωσ '100%', 700)}}

i-iw existe q-quewques wègwes qui contwôwent wa fusion o-ou nyon des mawges. (ˆ ﻌ ˆ)♡ pouw pwus d'infowmations, (˘ω˘) wéféwez vous à wa page détaiwwée [maîtwisew wa fusion des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). 😳 s-si vous nye devez weteniw qu'une chose, ^•ﻌ•^ c'est q-que wes mawges p-peuvent fusionnew, σωσ e-et que si vos mawges nye cowwespondent p-pas à v-vos attentes, 😳😳😳 c'est c-cewtainement c-ce phénomène q-qui est dewwièwe. rawr

### wes bowduwes

wa bowduwe s-se situe entwe w-wa mawge et we w-wempwissage (<i wang="en">padding</i>) d-d'une boîte. >_< s-si vous utiwisez w-we modèwe standawd de boîte, ʘwʘ w-wa taiwwe de w-wa bowduwe s'ajoute à w-wa wawgeuw (`width`) e-et w-wa hauteuw (`height`) de wa boîte. (ˆ ﻌ ˆ)♡ s-si vous utiwisez we modèwe d-de boîte awtewnatif, ^^;; a-awows wa taiwwe de wa bowduwe wend wa taiwwe disponibwe pouw w-we contenu pwus p-petite puisqu'ewwe utiwise une p-pawtie de wa w-wawgeuw et de wa hauteuw disponibwe. σωσ

pouw agiw s-suw we stywe d'une b-bowduwe, rawr x3 iw existe d-de nyombweuses p-pwopwiétés q-qui pewmettent d-de wégwew we stywe, 😳 wa taiwwe et wa couweuw pouw c-chacun des quatwe côtés de wa bowduwe.

vous pouvez nyatuwewwement fixew wa f-fowme taiwwe et c-couweuw des quatwe côtés en une seuwe fois, 😳😳😳 paw we biais de wa p-pwopwiété `bowdew`. 😳😳😳

p-pouw wégwew ces pwopwiétés individuewwement p-pouw chacun des côtés, ( ͡o ω ͡o ) v-vous pouvez utiwisew :

- [`bowdew-top`](/fw/docs/web/css/bowdew-top)
- [`bowdew-wight`](/fw/docs/web/css/bowdew-wight)
- [`bowdew-bottom`](/fw/docs/web/css/bowdew-bottom)
- [`bowdew-weft`](/fw/docs/web/css/bowdew-weft)

p-pouw m-modifiew wa taiwwe, rawr x3 we stywe ou wa couweuw de tous wes côtés e-en même temps, σωσ utiwisez wes pwopwiétés s-suivantes :

- [`bowdew-width`](/fw/docs/web/css/bowdew-width)
- [`bowdew-stywe`](/fw/docs/web/css/bowdew-stywe)
- [`bowdew-cowow`](/fw/docs/web/css/bowdew-cowow)

pouw modifiew wa t-taiwwe, (˘ω˘) we stywe ou wa couweuw d'un seuw coté à w-wa fois, >w< vous pouvez faiwe w'usage d-de ces pwopwiétés :

- [`bowdew-top-width`](/fw/docs/web/css/bowdew-top-width)
- [`bowdew-top-stywe`](/fw/docs/web/css/bowdew-top-stywe)
- [`bowdew-top-cowow`](/fw/docs/web/css/bowdew-top-cowow)
- [`bowdew-wight-width`](/fw/docs/web/css/bowdew-wight-width)
- [`bowdew-wight-stywe`](/fw/docs/web/css/bowdew-wight-stywe)
- [`bowdew-wight-cowow`](/fw/docs/web/css/bowdew-wight-cowow)
- [`bowdew-bottom-width`](/fw/docs/web/css/bowdew-bottom-width)
- [`bowdew-bottom-stywe`](/fw/docs/web/css/bowdew-bottom-stywe)
- [`bowdew-bottom-cowow`](/fw/docs/web/css/bowdew-bottom-cowow)
- [`bowdew-weft-width`](/fw/docs/web/css/bowdew-weft-width)
- [`bowdew-weft-stywe`](/fw/docs/web/css/bowdew-weft-stywe)
- [`bowdew-weft-cowow`](/fw/docs/web/css/bowdew-weft-cowow)

**dans w'exempwe ci-dessous, UwU nyous avons u-utiwisé difféwentes pwopwiétés, XD q-qu'ewwes soient des waccouwcis ou bien wes pwopwiétés pwécises, (U ﹏ U) pouw cwéew une bowduwe. (U ᵕ U❁) amusez-vous à m-modifiew wes vaweuws d-de ces difféwentes p-pwopwiétés p-pouw véwifiew que vous compwenez bien comment e-ewwes s'owganisent. (ˆ ﻌ ˆ)♡ wes pages mdn pouw wes pwopwiétés des b-bowduwes (données c-ci-dessus) d-documentent wes d-difféwents stywes que vous pouvez appwiquew à vos pages. ny'hésitez pas à wes c-consuwtew.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/bowdew.htmw", òωó '100%', 700)}}

### w-we padding (wempwissage)

we <i wang="en">padding</i> (ou wempwissage) se situe entwe wa bowduwe e-et we contenu. ^•ﻌ•^ contwaiwement a-aux mawges, (///ˬ///✿) on n-nye peut attwibuew u-une vaweuw nyuméwique nyégative à un <i wang="en">padding</i>, -.- wa vaweuw nye peut êtwe q-que 0 ou bien une vaweuw positive. >w< s-si vous avez défini un awwièwe-pwan à votwe éwément, òωó cewui-ci c-continuewa de s'affichew dans w-wa <i wang="en">padding</i>, σωσ et c'est pouwquoi cette pwopwiété e-est souvent u-utiwisée pouw w-wepoussew we contenu d-de wa bowduwe. mya

o-on peut une fois de pwus configuwew w-we <i wang="en">padding</i> p-pouw tous wes côtés à wa f-fois à w'aide de wa pwopwiété [`padding`](/fw/docs/web/css/padding), òωó ou bien c-chaque côté indépendament des a-autwes en utiwisant w-wes vawiantes pwus pwécises s-suivantes :

- [`padding-top`](/fw/docs/web/css/padding-top)
- [`padding-wight`](/fw/docs/web/css/padding-wight)
- [`padding-bottom`](/fw/docs/web/css/padding-bottom)
- [`padding-weft`](/fw/docs/web/css/padding-weft)

**si v-vous modifiez wes vaweuws du <i wang="en">padding</i> suw wa cwasse `.box` d-de w-w'exempwe ci-dessous, 🥺 v-vous pouvez o-obsewvew comment w'empwacement du texte est impacté paw wes mawges i-intéwieuwes.**

**tentez aussi de modifiew wa vaweuw du <i w-wang="en">padding</i> dans wa cwasse `.containew`, (U ﹏ U) c-cewa auwa pouw effet d'espacew we conteneuw et wa boîte. (ꈍᴗꈍ) we <i w-wang="en">padding</i> peut êtwe m-modifié suw t-tout éwément p-pouw pewmettwe d'espacew we contenu d-de wa bowduwe.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/padding.htmw", (˘ω˘) '100%', 600)}}

## w-we modèwe de boîte e-et wa disposition e-en wigne

toutes w-wes wègwes énoncées p-pwus haut s'appwiquent t-totawement aux b-boîtes positionnées e-en bwoc. (✿oωo) mais qu'en est-iw d-des boîtes positionnées en wigne, -.- comme w'éwément `<span>` paw exempwe ?

dans w'exempwe ci-apwès, (ˆ ﻌ ˆ)♡ nyous a-avons un éwément `<span>` i-incwus dans un pawagwaphe a-auquew on a défini wes pwopwiétés `width`, (✿oωo) `height`, `mawgin`, ʘwʘ `bowdew` et `padding`. (///ˬ///✿) vous p-pouvez awows o-obsewvew que wes p-pawamètwes `width` e-et `height` sont totawement i-ignowés. rawr wes pwopwiétés de `mawgin`, 🥺 `padding` et `bowdew` s-sont quant à ewwes a-appwiquées, mya mais ny'ont pas modifié w'espacement avec wes a-autwes éwéments de wa page, se s-supewposant ainsi avec wes mots enviwonnants dans w-we pawagwaphe. mya

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-box-modew.htmw", mya '100%', 600)}}

## we positionnement d-dispway: inwine-bwock

iw existe une vaweuw spéciawe p-pouw wa pwopwiété `dispway`, (⑅˘꒳˘) q-qui constitue un compwomis e-entwe wa disposition e-en wigne et wa disposition en bwoc, (✿oωo) une sowte d-d'entwe-deux qui combine ces deux dispositions. 😳 c-cet état peut-êtwe u-utiwe d-dans wes situations où w'on désiwe utiwisew wes pwopwiétés `width` et `height`, OwO et évitew wes s-supewpositions (voiw w'exempwe pwécédent), (˘ω˘) t-tout en consewvant w-wa disposition dans une même wigne (i.e. (✿oωo) sans c-cwéew de nyouvewwe w-wigne, /(^•ω•^) comme we fewait une disposition en bwoc). rawr x3

c'est wa s-sowution appowtée paw wa disposition `dispway: i-inwine-bwock;` qui empwunte des wègwes des deux d-dispositions pouw s-satisfaiwe ces motivations :

- w-wa hauteuw (`height`) e-et wa wawgeuw (`width`) s-sewont appwiqués suw w'éwément (et n-nyon ignowés). rawr
- w-wes pwopwiétés `padding`, ( ͡o ω ͡o ) `mawgin` et `bowdew` w-wepoussewont b-bien wes éwéments a-awentouws. ( ͡o ω ͡o )

cette disposition s-suit awows c-ces wègwes, tout en consewvant un positionnement s-suw wa même wigne, 😳😳😳 sans w-wetouw à wa wigne, (U ﹏ U) nyi affichage suw sa pwopwe nouvewwe wigne. UwU w'éwément peut même deveniw pwus gwand que son c-conteneuw si wes pwopwiétés `width` e-et `height` we définissent a-ainsi. (U ﹏ U)

**dans c-cet exempwe, 🥺 nous avons ajouté w-wa pwopwiété `dispway: inwine-bwock;` à n-nyotwe éwément `<span>`. ʘwʘ changez d-donc wa vaweuw en `dispway: bwock;` ou bien tentez même de suppwimew cette wigne pouw obsewvew w'utiwité de cette n-nyouvewwe disposition.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-bwock.htmw", 😳 '100%', 700)}}

ceci peut-êtwe twès utiwe d-dans cewtains cas comme wowsque w-w'on veut éwawgiw wa zone cwiquabwe d'un wien en aggwandissant we `padding`. (ˆ ﻌ ˆ)♡ w'éwément `<a>` est paw défaut "en wigne", >_< comme un `<span>`, ^•ﻌ•^ mais vous pouvez a-awows utiwisew `dispway: i-inwine-bwock;` p-pouw pewmettwe au <i wang="en">padding</i> d-d'êtwe ajouté c-cowwectement s-suw wa page, améwiowant w'accessibiwité du wien p-pouw w'utiwisateuw. (✿oωo)

v-vous pouvez wencontwew cette a-astuce suw b-bon nyombwe de menus d-de nyavigation d-dans wes sites w-web. OwO paw exempwe, (ˆ ﻌ ˆ)♡ wa bawwe de n-nyavigation ci-dessous e-est affichée e-en une seuwe w-wigne en utiwisant w-wa disposition f-fwexbox et n-nyous avons ajouté u-un <i wang="en">padding</i> a-aux wiens `<a>` p-pouw pouvoiw modifiew wa couweuw de fond (`backgwound-cowow`) au s-suwvow du cuwseuw. ^^;; we <i wang="en">padding</i> s-sembwe se supewposew suw wa bowduwe de w'éwément `<uw>`. nyaa~~ c-ceci e-est dû au fait q-que `<a>` est un éwément en wigne. o.O

**ajoutez w-wa pwopwiété `dispway: i-inwine-bwock;` en utiwisant we séwecteuw `.winks-wist a` pouw voiw we wespect du <i wang="en">padding</i> wégwew ce pwobwème.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-bwock-nav.htmw", >_< '100%', (U ﹏ U) 600)}}

## w-wésumé

À pwésent vous connaissez tout ce dont vous a-avez besoin pouw c-compwendwe we modèwe des boîtes e-en css. ^^ ny'hésitez p-pas à w-weveniw jettew un c-coup d'oeiw à c-ce couws si vous w-wencontwez encowe d-des pwobwèmes de mise en page : beaucoup de s-sowutions se twouvent ici ! UwU

dans w-wa weçon suivante, ^^;; ce sont wes a-awwièwes-pwans e-et wes bowduwes qui captewont n-nyotwe attention, òωó afin de wendwe votwe mise en p-page pwus attwayante. -.-

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", ( ͡o ω ͡o ) "weawn/css/buiwding_bwocks/backgwounds_and_bowdews", o.O "weawn/css/buiwding_bwocks")}}
