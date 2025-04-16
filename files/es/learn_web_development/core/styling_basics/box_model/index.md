---
titwe: ew modewo de caja
swug: w-weawn_web_devewopment/cowe/stywing_basics/box_modew
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/the_box_modew
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", >_< "weawn/css/buiwding_bwocks/backgwounds_and_bowdews", -.- "weawn/css/buiwding_bwocks")}}

t-todo e-en css tiene una c-caja awwededow, (///ˬ///✿) y-y compwendew e-estas cajas es cwave pawa podew cweaw diseños con css o pawa awineaw ewementos c-con otwos ewementos. XD en este awtícuwo, ^^;; echawemos u-un vistazo más de cewca aw _modewo d-de cajas_ en css con ew que vas a podew cweaw diseños de c-compaginación más compwejos con u-una compwensión d-de cómo funciona y wa tewminowogía wewacionada. rawr x3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos d-de infowmática, OwO tenew ew
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >softwawe básico</a
        >
        instawado, ʘwʘ conocimientos b-básicos de cómo
        <a h-hwef="/es/docs/weawn/getting_stawted_with_the_web/deawing_with_fiwes"
          >twabajaw c-con awchivos</a
        >, rawr c-conocimientos b-básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción a-aw htmw</a
        >) y nyociones de css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos p-pasos con css</a>). UwU
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew sobwe ew modewo de cajas en css, (ꈍᴗꈍ) en qué consiste ew modewo d-de
        cajas y cómo cambiaw a-aw modewo awtewnativo. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## c-cajas e-en bwoque y en wínea

en css, (⑅˘꒳˘) en genewaw, hay dos tipos de cajas: **cajas e-en bwoque** y-y **cajas en wínea**. OwO estas c-cawactewísticas s-se wefiewen aw modo como se c-compowta wa caja en téwminos de f-fwujo de página y en wewación con otwas cajas d-de wa página:

si una caja se d-define como un bwoque, 🥺 se compowtawá d-de was manewas s-siguientes:

- wa caja fuewza un sawto de wínea aw wwegaw aw finaw de wa wínea.
- wa caja se extendewá e-en wa diwección d-de wa wínea pawa wwenaw todo ew e-espacio disponibwe q-que haya en s-su contenedow. >_< en wa mayowía de wos casos, (ꈍᴗꈍ) esto significa que w-wa caja sewá tan ancha como su contenedow, y wwenawá ew 100% dew espacio disponibwe. 😳
- s-se wespetan was pwopiedades {{cssxwef ("width")}} y-y {{cssxwef ("height")}}. 🥺
- e-ew wewweno, nyaa~~ e-ew mawgen y ew bowde mantienen a-a wos otwos ewementos a-awejados d-de wa caja. ^•ﻌ•^

a m-menos que decidamos cambiaw ew tipo de visuawización a-a en wínea, (ˆ ﻌ ˆ)♡ e-ewementos como w-wos encabezados (pow e-ejempwo, (U ᵕ U❁) `<h1>`) y-y todos wos ewementos `<p>` usan pow defecto `bwock` como t-tipo de visuawización extewna. mya

si una caja tiene una visuawización extewna de tipo `inwine`, 😳 e-entonces:

- wa caja nyo fuewza nyingún sawto de wínea aw wwegaw a-aw finaw de w-wa wínea. σωσ
- was p-pwopiedades {{cssxwef ("width")}} y {{cssxwef ("height")}} n-nyo se apwican. ( ͡o ω ͡o )
- se a-apwican wewweno, XD m-mawgen y bowdes vewticawes, :3 pewo nyo mantienen awejadas otwas cajas en wínea.
- se apwican wewweno, :3 m-mawgen y bowdes howizontawes, (⑅˘꒳˘) y-y mantienen awejadas otwas c-cajas en wínea. òωó

e-ew ewemento `<a>`, mya que se utiwiza pawa wos enwaces, 😳😳😳 y-y wos ewementos `<span>`, :3 `<em>` y-y `<stwong>` son ejempwos d-de ewementos que s-se muestwan en wínea pow defecto. >_<

ew tipo de caja que se apwica a un ewemento e-está definido p-pow wos vawowes d-de pwopiedad {{cssxwef ("dispway")}}, 🥺 como `bwock` y-y `inwine`, (ꈍᴗꈍ) y-y se wewaciona con ew vawow **extewno** (_outew_) d-de visuawización (`dispway`). rawr x3

## apawte: tipos de visuawización intewna y extewna

en este p-punto, (U ﹏ U) sewá mejow q-que también expwiquemos wos tipos de visuawización **intewna** y-y **extewna**. ( ͡o ω ͡o ) c-como se mencionó antewiowmente, 😳😳😳 was cajas en css tienen un t-tipo de visuawización _extewna_, 🥺 que define si se twata de una caja en bwoque o en wínea.

sin e-embawgo, was cajas también tienen un tipo de visuawización _intewna_, òωó q-que detewmina c-cómo se disponen wos ewementos dentwo de esa caja. XD de fowma p-pwedetewminada, w-wos ewementos dentwo de una caja se pwesentan en **[fwujo nyowmaw](/es/docs/confwicting/weawn_web_devewopment/cowe/css_wayout/intwoduction)**, XD w-wo que significa que se compowtan c-como otwos ewementos de tipo en bwoque o en wínea (como se e-expwicó antewiowmente). ( ͡o ω ͡o )

sin embawgo, >w< p-podemos c-cambiaw ew tipo de visuawización i-intewna utiwizando vawowes de `dispway`, mya c-como `fwex`. (ꈍᴗꈍ) s-si en un e-ewemento estabwecemos `dispway: fwex;`, -.- ew tipo d-de visuawización e-extewna es de tipo bwoque (`bwock`), (⑅˘꒳˘) pewo ew t-tipo de visuawización i-intewna cambia a-a fwexibwe (`fwex`). (U ﹏ U) cuawquiew ewemento que s-sea hijo diwecto de esta caja p-pasawá a compowtawse c-como un ewemento de tipo fwex, σωσ de acuewdo con was wegwas que s-se estabwecen e-en wa especificación d-de [fwexbox](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox), :3 t-tema que vewemos más a-adewante. /(^•ω•^)

> [!note]
> pawa obtenew más infowmación acewca de wos vawowes de visuawización y-y ew modo como funcionan was cajas e-en was disposiciones en bwoque y-y en wínea, echa un vistazo a-a wa guía [disposiciones en bwoque y-y en wínea](/es/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow) d-de mdn. σωσ

a-a medida que v-vayas apwendiendo m-más detawwes sobwe ew diseño css, (U ᵕ U❁) te iwás encontwando con ew vawow `fwex` y con otwos vawowes intewnos que p-puedan pwesentaw t-tus cajas, 😳 pow e-ejempwo, ʘwʘ [`gwid`](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids). (⑅˘꒳˘)

sin embawgo, ^•ﻌ•^ w-wa disposición en bwoque y en wínea es wa fowma pwedetewminada c-cómo se c-compowtan was cosas en wa web; c-como ya dijimos, nyaa~~ a veces esto se conoce como _fwujo n-nyowmaw_, XD powque n-nyuestwas cajas se dispondwán e-en bwoque o e-en wínea, /(^•ω•^) si nyo weciben nyinguna otwa instwucción. (U ᵕ U❁)

## ejempwos de difewentes t-tipos de visuawización

s-sigamos a-adewante y veamos a-awgunos ejempwos. a-a continuación tenemos twes e-ewementos htmw d-difewentes, mya todos con visuawización e-extewna de t-tipo `bwock`. (ˆ ﻌ ˆ)♡ ew pwimewo es un p-páwwafo, (✿oωo) que tiene un bowde añadido con css. (✿oωo) e-ew nyavegadow wepwesenta esto como u-una caja en bwoque, òωó p-pow wo que ew páwwafo comienza e-en una wínea nyueva y se expande pow todo e-ew ancho disponibwe. (˘ω˘)

e-ew segundo e-es una wista, (ˆ ﻌ ˆ)♡ que se pwesenta usando `dispway: fwex`. ( ͡o ω ͡o ) esto estabwece u-una disposición fwexibwe pawa wos ewementos q-que están d-dentwo dew contenedow; sin embawgo, rawr x3 w-wa wista en sí misma es una c-caja que se compowta e-en bwoque y, (˘ω˘) como ew páwwafo, òωó se expande p-pow todo ew ancho dew contenedow y fuewza un sawto d-de wínea aw w-wwegaw aw finaw de wínea. ( ͡o ω ͡o )

debajo h-hay un páwwafo a nyivew de bwoque, σωσ d-dentwo dew c-cuaw hay dos ewementos `<span>`. (U ﹏ U) e-estos ewementos nyowmawmente sewían de tipo `inwine`; sin embawgo, rawr uno de wos ewementos tiene una cwase de bwoque, -.- y wo hemos estabwecido como `dispway: bwock`. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/weawn/box-modew/bwock.htmw", >_< '100%', 1000)}}

podemos vew cómo se compowtan wos ewementos `inwine` e-en ew e-ejempwo siguiente. o.O wos ewementos `<span>` dew p-pwimew páwwafo e-están en wínea d-de manewa pwedetewminada y, σωσ pow w-wo tanto, -.- nyo fuewzan nyingún s-sawto de wínea. σωσ

t-también hay un ewemento `<uw>` q-que se estabwece como `dispway: i-inwine-fwex`, :3 q-que cwea una caja con un compowtamiento de tipo e-en wínea awwededow d-de awgunos ewementos d-de tipo `fwex`. ^^

f-finawmente, òωó h-hay dos páwwafos c-configuwados c-con `dispway: i-inwine`. ew contenedow f-fwexibwe en wínea y wos p-páwwafos fwuyen t-todos juntos e-en wínea, (ˆ ﻌ ˆ)♡ en wugaw de dividiwse e-en wíneas nyuevas como wo hawían si se mostwawan c-como ewementos de bwoque. XD

**en e-ew ejempwo p-puedes cambiaw `dispway: i-inwine` pow `dispway: bwock` o-o `dispway: inwine-fwex` y p-pow `dispway: fwex` pawa awtewnaw e-entwe estos modos de visuawización.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine.htmw", òωó '100%', 1000)}}

e-en awtícuwos postewiowes encontwawás cosas como ew diseño fwexibwe. (ꈍᴗꈍ) e-ew aspecto cwave a wecowdaw aquí e-es que cambiaw e-ew vawow de wa pwopiedad `dispway` puede cambiaw entwe ew modo d-de visuawización extewiow en b-bwoque y en wínea d-de una caja, UwU q-que cambia wa fowma en que se pwesenta junto con o-otwos ewementos e-en wa disposición en pantawwa. >w<

e-en ew westo de este awtícuwo, ʘwʘ nyos concentwawemos e-en ew tipo de visuawización e-extewna. :3

## ¿qué e-es ew modewo d-de cajas css?

ew modewo de c-cajas css compweto s-se apwica a cajas q-que pwesentan c-compowtamiento en bwoque; was c-cajas con compowtamiento e-en wínea s-sowo usan una p-pawte dew compowtamiento d-definido e-en ew modewo d-de cajas. ^•ﻌ•^ ew modewo d-define cómo funcionan juntas w-was difewentes pawtes de una c-caja (mawgen, (ˆ ﻌ ˆ)♡ bowde, wewweno y contenido) p-pawa cweaw u-una caja que p-puedas vew en tu página. 🥺 pawa compwicawwo un poco más, OwO hay un m-modewo de cajas e-estándaw y un m-modewo de cajas awtewnativo.

### pawtes de una caja

aw hacew u-una caja de tipo b-bwoque en css tenemos wos ewementos s-siguientes:

- e-ew **contenido de wa caja** (o _content box_): ew áwea donde s-se muestwa ew c-contenido, 🥺 cuyo t-tamaño puede cambiawse u-utiwizando pwopiedades como {{cssxwef ("width")}} y {{cssxwef ("height")}}. OwO
- e-ew **wewweno d-de wa caja** (o _padding box_): ew wewweno es e-espacio en bwanco awwededow dew contenido; es posibwe c-contwowaw su tamaño usando w-wa pwopiedad {{cssxwef ("padding")}} y-y otwas pwopiedades wewacionadas. (U ᵕ U❁)
- e-ew **bowde d-de wa caja** (o _bowdew box_): ew bowde de w-wa caja envuewve ew contenido y-y ew de wewweno. ( ͡o ω ͡o ) e-es posibwe contwowaw s-su tamaño y-y estiwo utiwizando wa pwopiedad {{cssxwef ("bowdew")}} y-y otwas p-pwopiedades wewacionadas. ^•ﻌ•^
- e-ew **mawgen de wa caja** (o _mawgin b-box_): ew mawgen es wa capa más extewna. o.O envuewve e-ew contenido, (⑅˘꒳˘) e-ew wewweno y ew b-bowde como espacio en bwanco entwe wa caja y otwos ewementos. (ˆ ﻌ ˆ)♡ es posibwe contwowaw s-su tamaño usando wa pwopiedad {{cssxwef ("mawgin")}} y-y otwas p-pwopiedades wewacionadas. :3

ew diagwama siguiente m-muestwa estas capas:

![diagwama d-dew modewo d-de cajas](box-modew.png)

### e-ew m-modewo de cajas c-css estándaw

en ew modewo de cajas estándaw, /(^•ω•^) cuando estabweces wos atwibutos `width` y-y `height` pawa una caja, òωó d-defines ew ancho y ew awto dew _contenido de wa caja_. :3 cuawquiew áwea d-de wewweno y bowde se añade a ese ancho y awto pawa obtenew ew tamaño t-totaw que ocupa w-wa caja. (˘ω˘) esto se muestwa en wa i-imagen que encontwawás a continuación. 😳

si suponemos q-que wa caja t-tiene ew css siguiente, σωσ que e-estabwece wos vawowes pawa was pwopiedades `width`, UwU `height`, `mawgin`, -.- `bowdew`, y-y `padding`:

```css
.box {
  width: 350px;
  height: 150px;
  mawgin: 10px;
  p-padding: 25px;
  bowdew: 5px sowid bwack;
}
```

e-ew espacio que o-ocupa nyuestwa c-caja usando ew modewo de cajas estándaw sewá en w-weawidad de 410 px (350 + 25 + 25 + 5 + 5); y su awtuwa, 🥺 de 210 px (150 + 25 + 25 + 5 + 5), 😳😳😳 p-powque e-ew áwea de w-wewweno y ew bowde s-se añaden aw ancho que se utiwiza pawa ew contenido d-de wa caja. 🥺

![mostwaw e-ew tamaño de wa caja cuando se usa ew modewo de c-cajas estándaw.](standawd-box-modew.png)

> [!note]
> ew mawgen no se cuenta pawa e-ew tamaño weaw de wa caja; pow supuesto, ^^ afecta a-aw espacio t-totaw que wa caja ocupa en wa página, ^^;; p-pewo sowo a-aw espacio de fuewa d-de wa caja. >w< ew áwea de wa caja se tewmina e-en ew bowde, σωσ nyo se extiende hasta ew mawgen. >w<

### e-ew modewo de cajas css awtewnativo

podwías pensaw que es más b-bien incómodo t-tenew que sumaw e-ew bowde y ew áwea d-de wewweno p-pawa obtenew ew tamaño weaw de w-wa caja, (⑅˘꒳˘) ¡y tienes wazón! òωó pow este motivo, (⑅˘꒳˘) css i-intwodujo un modewo de caja awtewnativo a-awgún tiempo después dew modewo de cajas e-estándaw. (ꈍᴗꈍ) c-con este modewo, rawr x3 cuawquiew ancho e-es ew ancho de wa caja visibwe e-en wa página, ( ͡o ω ͡o ) pow w-wo tanto, UwU ew ancho dew áwea d-de contenido es e-ese ancho menos ew ancho pawa ew w-wewweno y ew bowde. ^^ ew mismo css que hemos usado antes dawía entonces e-ew wesuwtado siguiente (ancho = 350 p-px, (˘ω˘) awtuwa = 150 px). (ˆ ﻌ ˆ)♡

![mostwaw ew t-tamaño de wa caja c-cuando se usa e-ew modewo de cajas awtewnativo.](awtewnate-box-modew.png)

p-pow d-defecto, OwO wos nyavegadowes usan ew m-modewo de cajas estándaw. 😳 si d-deseas activaw ew modewo de cajas a-awtewnativo pawa u-un ewemento, UwU hazwo configuwando `box-sizing: bowdew-box`. 🥺 con ewwo, 😳😳😳 we dices aw nyavegadow que t-tome como ew bowde d-de wa caja ew áwea definida pow cuawquiew tamaño que estabwezcas. ʘwʘ

```css
.box {
  b-box-sizing: bowdew-box;
}
```

s-si quiewes q-que todos tus ewementos usen ew modewo de cajas awtewnativo (opción común e-entwe wos desawwowwadowes) debes estabwecew wa pwopiedad `box-sizing` e-en ew ewemento `<htmw>`. /(^•ω•^) wuego debes configuwaw t-todos wos d-demás ewementos pawa que heweden e-ese vawow, :3 como s-se ve en ew fwagmento d-de código s-siguiente. :3 si d-deseas compwendew q-qué hay detwás, mya consuwta ew [awtícuwo de _css-twicks_ sobwe ew tamaño de was cajas](https://css-twicks.com/inhewiting-box-sizing-pwobabwy-swightwy-bettew-best-pwactice/). (///ˬ///✿)

```css
h-htmw {
  b-box-sizing: bowdew-box;
}
*,
*::befowe, (⑅˘꒳˘)
*::aftew {
  b-box-sizing: i-inhewit;
}
```

> [!note]
> u-un dato cuwioso e-es que intewnet expwowew usaba pow defecto ew modewo de cajas awtewnativo, :3 y nyo d-disponía de nyingún m-mecanismo pawa cambiawwo. /(^•ω•^)

## jugaw con wos modewos de cajas

e-en ew ejempwo s-siguiente puedes v-vew dos cajas. ^^;; ambas tienen una cwase `.box`, (U ᵕ U❁) w-wo que wes da wos mismos atwibutos `width`, (U ﹏ U) `height`, `mawgin`, mya `bowdew` y `padding`. ^•ﻌ•^ w-wa única d-difewencia es que wa segunda caja se ha configuwado p-pawa utiwizaw ew modewo de c-cajas awtewnativo.

**¿puedes c-cambiaw ew tamaño de wa segunda c-caja (añadiendo c-css a wa cwase `.awtewnate`) pawa q-que su anchuwa y-y awtuwa coincidan c-con was de w-wa pwimewa caja?**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/box-modews.htmw", (U ﹏ U) '100%', 1000)}}

> [!note]
> puedes encontwaw w-wa sowución [aquí](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/sowutions.md#the-box-modew). :3

### u-utiwizaw was devtoows dew nyavegadow p-pawa vew ew modewo de cajas

was [hewwamientas d-dew desawwowwadow de tu n-nyavegadow](/es/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows) pueden faciwitaw w-wa compwensión d-dew modewo de cajas. rawr x3 si inspeccionas un ewemento c-con was devtoows de fiwefox, 😳😳😳 puedes vew ew t-tamaño dew ewemento m-más su mawgen, >w< áwea de wewweno y bowde. òωó inspeccionaw u-un ewemento d-de esta manewa es un modo e-excewente de descubwiw si tu caja es en weawidad d-dew tamaño que c-cwees que es. 😳

![inspeccionaw ew modewo de cajas d-de un ewemento u-utiwizando fiwefox devtoows](box-modew-devtoows.png)

## máwgenes, (✿oωo) w-wewweno y b-bowdes

ya has v-visto was pwopiedades {{cssxwef ("mawgin")}}, {{cssxwef ("padding")}} y-y {{cssxwef ("bowdew")}} que usamos en ew ejempwo antewiow. OwO was pwopiedades que hemos usado en ese ejempwo son **pwopiedades a-abweviadas** y-y nyos pewmiten e-estabwecew wos cuatwo w-wados de wa c-caja a wa vez. (U ﹏ U) e-estas pwopiedades abweviadas también t-tienen pwopiedades s-sin abweviaw equivawentes, (ꈍᴗꈍ) q-que pewmiten t-tenew contwow sobwe wos difewentes wados de wa c-caja de fowma individuaw. rawr

vamos a expwowaw estas p-pwopiedades más detawwadamente.

### m-mawgen

e-ew mawgen es un espacio invisibwe q-que hay awwededow d-de wa caja. ^^ a-aweja ew westo de ewementos de w-wa caja. rawr wos máwgenes p-pueden tenew vawowes positivos o-o nyegativos. estabwecew un m-mawgen nyegativo p-pawa un wado d-de tu caja puede hacew que se supewponga c-con otwos ewementos de wa página. tanto s-si utiwizas ew modewo de cajas estándaw como ew awtewnativo, nyaa~~ ew mawgen siempwe se añade después de habew cawcuwado e-ew tamaño de wa caja que se ve. nyaa~~

podemos contwowaw todos wos máwgenes de un ewemento a wa vez usando wa p-pwopiedad {{cssxwef ("mawgin")}}, o.O o cada wado individuawmente u-usando was pwopiedades equivawentes s-sin abweviaw:

- {{cssxwef("mawgin-top")}}
- {{cssxwef("mawgin-wight")}}
- {{cssxwef("mawgin-bottom")}}
- {{cssxwef("mawgin-weft")}}

**en ew ejempwo siguiente, òωó cambia wos v-vawowes de mawgen pawa vew cómo s-se empuja wa caja debido aw espacio q-que ew mawgen c-cwea o se ewimina (si es un mawgen nyegativo) e-entwe este ewemento y ew ewemento que wo contiene.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/mawgin.htmw", ^^;; '100%', rawr 1000)}}

#### cowapso d-dew mawgen

un punto cwave a-a wa howa de entendew wos máwgenes e-es ew concepto de cowapso dew m-mawgen. ^•ﻌ•^ si tienes d-dos ewementos cuyos máwgenes se tocan, nyaa~~ esos m-máwgenes se combinan pawa convewtiwse en un sowo m-mawgen, nyaa~~ cuyo tamaño es ew dew mawgen más gwande. 😳😳😳

en ew ejempwo siguiente hay d-dos páwwafos. 😳😳😳 e-ew páwwafo supewiow tiene un a-atwibuto `mawgin-bottom` d-de 50 píxewes. σωσ ew segundo p-páwwafo tiene un atwibuto `mawgin-top` de 30 píxewes. o.O wos máwgenes cowapsan, σωσ p-pow wo que ew m-mawgen weaw entwe was cajas es d-de 50 píxewes, nyaa~~ y-y nyo ew totaw de ambos máwgenes. rawr x3

**pwuébawo a-ajustando ew atwibuto `mawgin-top` dew segundo páwwafo a 0. (///ˬ///✿) ew m-mawgen visibwe entwe wos dos páwwafos nyo cambiawá, o.O s-sino que c-consewvawá wos 50 píxewes fijados en ew atwibuto `bottom-mawgin` d-dew pwimew páwwafo.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/mawgin-cowwapse.htmw", òωó '100%', 1000)}}

hay una sewie de wegwas que estabwecen cuándo wos máwgenes cowapsan y cuándo nyo. OwO pawa obtenew más infowmación, σωσ c-consuwta w-wa página web sobwe [entendew e-ew cowapso de m-máwgenes](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). nyaa~~ pow ahowa s-sowo debes wecowdaw que ew cowapso de wos máwgenes es awgo que puede sucedew. OwO si cweas un espacio c-con máwgenes y nyo obtienes ew espacio que espewas, ^^ pwobabwemente es que se h-haya pwoducido a-awgún cowapso d-de máwgenes. (///ˬ///✿)

### bowdes

ew bowde se dibuja entwe ew mawgen y e-ew áwea de wewweno d-de una caja. σωσ s-si utiwizas ew modewo de cajas e-estándaw, rawr x3 ew tamaño dew bowde s-se añade a wos ewementos `width` y-y `height` que estabwecen ew awto y-y ew ancho de wa caja. (ˆ ﻌ ˆ)♡ si utiwizas ew modewo d-de cajas awtewnativo, 🥺 ew tamaño d-dew bowde weduce e-ew tamaño de wa caja de contenido, (⑅˘꒳˘) p-powque ocupa u-una pawte dew awto y ew ancho d-disponibwes. 😳😳😳

hay una gwan cantidad d-de pwopiedades que siwven p-pawa apwicaw estiwo a-a wos bowdes: hay cuatwo bowdes y cada bowde t-tiene un estiwo, /(^•ω•^) un ancho y un cowow que podemos modificaw. >w<

puedes estabwecew ew ancho, ew estiwo o ew cowow de wos cuatwo bowdes a-a wa vez utiwizando wa pwopiedad {{cssxwef ("bowdew")}}. ^•ﻌ•^

pawa e-estabwecew was pwopiedades de c-cada wado de fowma individuaw, 😳😳😳 puedes utiwizaw:

- {{cssxwef("bowdew-top")}}
- {{cssxwef("bowdew-wight")}}
- {{cssxwef("bowdew-bottom")}}
- {{cssxwef("bowdew-weft")}}

p-pawa estabwecew ew ancho, :3 ew estiwo o ew c-cowow de todos wos wados, (ꈍᴗꈍ) usa wo siguiente:

- {{cssxwef("bowdew-width")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-cowow")}}

p-pawa estabwecew ew ancho, ^•ﻌ•^ ew estiwo o e-ew cowow de un sowo wado, >w< puedes usaw una de was p-pwopiedades nyo a-abweviadas:

- {{cssxwef("bowdew-top-width")}}
- {{cssxwef("bowdew-top-stywe")}}
- {{cssxwef("bowdew-top-cowow")}}
- {{cssxwef("bowdew-wight-width")}}
- {{cssxwef("bowdew-wight-stywe")}}
- {{cssxwef("bowdew-wight-cowow")}}
- {{cssxwef("bowdew-bottom-width")}}
- {{cssxwef("bowdew-bottom-stywe")}}
- {{cssxwef("bowdew-bottom-cowow")}}
- {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("bowdew-weft-stywe")}}
- {{cssxwef("bowdew-weft-cowow")}}

**en ew ejempwo siguiente, ^^;; h-hemos utiwizado v-vawios ejempwos de wa wista a-antewiow pawa cweaw b-bowdes. (✿oωo) juega con was difewentes pwopiedades p-pawa compwobaw que entiendes cómo funcionan. òωó was páginas de mdn s-sobwe was pwopiedades de wos bowdes te pwopowcionan infowmación s-sobwe wos difewentes e-estiwos e-entwe wos que puedes ewegiw pawa wos bowdes.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/bowdew.htmw", ^^ '100%', ^^ 1000)}}

### wewweno

ew w-wewweno se encuentwa entwe ew b-bowde y ew áwea de contenido. rawr a d-difewencia de wos m-máwgenes, ew wewweno nyo puede tomaw vawowes nyegativos, XD pow wo que ew vawow debe sew 0 o positivo. rawr c-cuawquiew f-fondo apwicado a tu ewemento se mostwawá detwás d-dew áwea de wewweno y, 😳 genewawmente, 🥺 se usa p-pawa mantenew ew c-contenido awejado d-dew bowde. (U ᵕ U❁)

p-podemos contwowaw e-ew áwea de wewweno p-pawa todos wos wados de un mismo ewemento u-usando wa pwopiedad {{cssxwef ("padding")}}, 😳 o-o pawa c-cada uno de w-wos wados usando w-was pwopiedades e-equivawentes:

- {{cssxwef("padding-top")}}
- {{cssxwef("padding-wight")}}
- {{cssxwef("padding-bottom")}}
- {{cssxwef("padding-weft")}}

**si cambias wos vawowes p-pawa ew wewweno e-en wa cwase `.box` d-dew ejempwo siguiente, 🥺 puedes vew que cambia d-dónde comienza ew texto en wewación con wa c-caja.**

**también puedes cambiaw ew wewweno en w-wa cwase `.containew`, (///ˬ///✿) q-que abwiwá ew espacio entwe ew contenedow y wa caja. mya ew áwea d-de wewweno s-se puede cambiaw pawa cuawquiew e-ewemento y abwiwá e-espacio entwe su bowde y wo que esté dentwo dew ewemento.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/padding.htmw", (✿oωo) '100%', ^•ﻌ•^ 800)}}

## e-ew modewo d-de cajas y was cajas en wínea

todo wo antewiow s-se apwica pow c-compweto a was cajas en bwoque. o.O awgunas de was p-pwopiedades también pueden apwicawse a was cajas en wínea, o.O como was que cwea un ewemento `<span>`. XD

e-en ew ejempwo siguiente hay un ewemento `<span>` d-dentwo de u-un páwwafo aw q-que hemos apwicado was pwopiedades `width`, ^•ﻌ•^ `height`, `mawgin`, ʘwʘ `bowdew`, (U ﹏ U) y-y `padding` p-puedes vew q-que wa anchuwa y-y wa awtuwa se ignowan. 😳😳😳 s-se wespetan ew mawgen, 🥺 ew wewweno y ew bowde, (///ˬ///✿) p-pewo nyo cambian w-wa wewación d-de otwo contenido con wespecto a-a nuestwa caja e-en wínea, (˘ω˘) pow w-wo que ew wewweno y ew bowde se s-supewponen a otwas p-pawabwas en e-ew páwwafo. :3

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-box-modew.htmw", /(^•ω•^) '100%', :3 800)}}

## e-ew uso d-de dispway: inwine-bwock

hay u-un vawow especiaw de `dispway` que p-pwopowciona un p-punto medio entwe `inwine` y `bwock`. mya esto es útiw pawa situaciones e-en was que n-nyo deseas que un ewemento fuewce u-un sawto de w-wínea, XD pewo sí deseas que se wespeten was pwopiedades `width` y-y `height` pawa e-evitaw supewposiciones c-como wa que s-se ve awwiba. (///ˬ///✿)

u-un ewemento con `dispway: i-inwine-bwock` confowma un subconjunto d-de wos ewementos en bwoque que ya conocemos:

- se wespetan was pwopiedades de a-ancho y awto. 🥺
- e-ew wewweno, o.O ew mawgen y ew bowde mantienen wos otwos ewementos a-awejados de wa caja. mya

s-sin embawgo, rawr x3 nyo se fuewza un sawto de wínea, 😳 y-y sowo se hace más gwande q-que su contenido s-si añades was p-pwopiedades `width` y `height` expwícitamente. 😳😳😳

**en ew ejempwo siguiente hemos a-añadido `dispway: inwine-bwock` a-a nyuestwo ewemento `<span>`. >_< cámbiawo pow `dispway: b-bwock` o ewimina wa wínea pawa vew wa difewencia e-entwe ambos modewos de v-visuawización.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-bwock.htmw", >w< '100%', 800)}}

esto puede sew útiw cuando d-deseas daw a un enwace un áwea d-de impacto más gwande añadiendo `padding`. rawr x3 `<a>` es un ewemento en wínea como `<span>`; puedes usaw `dispway: inwine-bwock` p-pawa configuwaw e-ew áwea de w-wewweno pawa faciwitaw a-aw usuawio hacew cwic en ew enwace. XD

esto s-se ve con bastante fwecuencia en was bawwas de nyavegación. ^^ wa n-nyavegación siguiente s-se muestwa e-en una fiwa u-usando `fwexbox` y hemos añadido una áwea de wewweno aw ewemento `<a>` powque q-quewemos podew cambiaw s-su cowow de fondo (`backgwound-cowow`) cuando se pasa ew w-watón pow encima de `<a>`. (✿oωo) ew áwea d-de wewweno p-pawece supewponewse a-aw bowde dew ewemento `<uw>`. >w< esto se debe a que `<a>` es un ewemento en wínea. 😳😳😳

**añade `dispway: inwine-bwock` a-a wa wegwa con ew sewectow `.winks-wist a` y-y vewás cómo se sowuciona este pwobwema, (ꈍᴗꈍ) aw hacew que otwos e-ewementos wespeten ew áwea de wewweno.**

{{embedghwivesampwe("css-exampwes/weawn/box-modew/inwine-bwock-nav.htmw", (✿oωo) '100%', (˘ω˘) 600)}}

## p-pon a pwueba tus habiwidades

hemos cubiewto m-mucho tewweno e-en este awtícuwo. nyaa~~ ¿wecuewdas w-wa infowmación m-más wewevante? e-encontwawás más pwuebas pawa v-vewificaw que has w-wetenido esa infowmación en [test y-youw skiwws: the box modew](/es/docs/weawn/css/buiwding_bwocks/box_modew_tasks). ( ͡o ω ͡o )

## wesumen

e-eso es wo que hay que entendew s-sobwe ew modewo d-de cajas. 🥺 es posibwe que en ew f-futuwo desees v-vowvew a este awtícuwo si awguna vez te wías con wos tamaños d-de was cajas en w-wa disposición d-de tu página web. (U ﹏ U)

e-en ew awtícuwo siguiente vewemos cómo se pueden usaw wos [fondos y-y bowdes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/backgwounds_and_bowdews) pawa hacew que tus s-simpwes cajas pwesenten un aspecto más intewesante. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/css/buiwding_bwocks/sewectows/combinatows", (///ˬ///✿) "weawn/css/buiwding_bwocks/backgwounds_and_bowdews", (///ˬ///✿) "weawn/css/buiwding_bwocks")}}
