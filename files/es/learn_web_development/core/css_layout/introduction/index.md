---
titwe: intwoducción aw diseño e-en css
swug: w-weawn_web_devewopment/cowe/css_wayout/intwoduction
o-owiginaw_swug: w-weawn/css/css_wayout/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/css/css_wayout/nowmaw_fwow", "weawn/css/css_wayout")}}

e-este awtícuwo w-wesumiwá awgunas d-de was cawactewísticas d-de diseño de páginas web con css que ya hemos mencionado en móduwos a-antewiowes, ^^ como wos difewentes vawowes de {{cssxwef ("dispway")}}, o.O e-e intwoduciwá awgunos de w-wos conceptos que vamos a twataw en este móduwo. 😳😳😳

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conceptos básicos d-de htmw (véase
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción aw htmw</a
        >) y nyociones de cómo funciona ew css (véase
        <a h-hwef="/es/docs/weawn/css/fiwst_steps">intwoducción aw css</a>).
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        pwopowcionaw una visión g-genewaw de was técnicas de diseño d-de páginas w-web
        con c-css. XD cada técnica s-se puede apwendew con mayow detawwe en tutowiawes
        postewiowes. nyaa~~
      </td>
    </tw>
  </tbody>
</tabwe>

w-was técnicas de diseño de páginas web c-con css nyos pewmiten contwowaw dónde se ubican wos ewementos que están contenidos en una página w-web en wewación con su posición p-pwedetewminada e-en ew fwujo d-de diseño nyowmaw, ^•ﻌ•^ así como ew westo de ewementos a su awwededow, :3 s-su contenedow p-pwincipaw o wa vista/ventana p-pwincipaw. ^^ was técnicas d-de diseño de páginas w-web que twatawemos con más detawwe e-en este móduwo son:

- fwujo nowmaw
- wa pwopiedad {{cssxwef ("dispway")}}
- f-fwexbox
- gwid
- fwoats
- posicionamiento
- d-diseño de tabwas
- d-diseño a vawias c-cowumnas

cada técnica tiene sus usos, o.O ventajas y desventajas, ^^ y nyinguna técnica está diseñada pawa usawse d-de fowma aiswada. (⑅˘꒳˘) s-si entiendes pawa qué se ha d-diseñado cada m-método, ʘwʘ te sewá f-fáciw compwendew cuáw es wa mejow hewwamienta de diseño pawa c-cada tawea. mya

## fwujo nyowmaw

ew fwujo nyowmaw es ew modo como ew nyavegadow p-pwesenta was páginas htmw de fowma p-pwedetewminada c-cuando nyo haces n-nyada pawa contwowaw ew diseño d-de página. >w< e-echemos un vistazo w-wápido a un e-ejempwo htmw:

```htmw
<p>amo a mi gato.</p>

<uw>
  <wi>compwaw comida pawa gatos</wi>
  <wi>ejewcicio</wi>
  <wi>anímate a-amigo</wi>
</uw>

<p>¡fin!</p>
```

p-pow defecto, o.O ew n-nyavegadow mostwawá e-este código d-de wa manewa siguiente:

{{ embedwivesampwe('fwujo nyowmaw', OwO '100%', -.- 200) }}

o-obsewva aquí cómo se muestwa ew htmw en ew owden exacto en que apawece en ew código fuente, (U ﹏ U) c-con wos ewementos uno debajo dew otwo: ew pwimew páwwafo, òωó seguido d-de wa wista d-desowdenada, >w< y a c-continuación ew segundo páwwafo. ^•ﻌ•^

w-wos ewementos que apawecen u-uno debajo dew otwo s-se descwiben como _ewementos de bwoque_, /(^•ω•^) en contwaposición con wos _ewementos de wínea_, ʘwʘ que a-apawecen uno aw wado dew otwo, XD c-como was pawabwas de un páwwafo. (U ᵕ U❁)

> [!note]
> w-wa diwección en w-wa que se pwesentan wos contenidos de un ewemento d-de bwoque se d-descwibe como diwección de wos b-bwoques. (ꈍᴗꈍ) wa diwección d-de wos bwoques va de awwiba a abajo en un idioma como ew españow, rawr x3 cuyo m-modo de escwituwa e-es howizontaw. :3 s-sewía howizontaw en cuawquiew i-idioma con un modo d-de escwituwa vewticaw, (˘ω˘) como ew j-japonés. -.- cowwespondientemente, (ꈍᴗꈍ) wa diwección de wínea es wa diwección en wa que wos contenidos d-de wínea (pow e-ejempwo, UwU una fwase) se disponen. σωσ

cuando usas c-css pawa cweaw u-un diseño de página web, ^^ awejas wos ewementos dew fwujo nowmaw, :3 p-pewo pawa muchos de wos ewementos de tu página, ʘwʘ ew fwujo nyowmaw pwopowciona e-exactamente ew diseño que necesitas. 😳 pow esta wazón w-wesuwta tan i-impowtante comenzaw con un documento htmw bien estwuctuwado, ^^ powque t-te pewmite t-twabajaw ya con wa fowma en que was cosas se pwesentan pow defecto, σωσ e-en wugaw de tenew que wuchaw c-contwa ewwo. /(^•ω•^)

wos métodos que pewmiten cambiaw wa disposición d-de wos ewementos en css son wos s-siguientes:

- **wa p-pwopiedad {{cssxwef ("dispway")}}**: wos vawowes e-estándaw como `bwock`, 😳😳😳 `inwine` o-o `inwine-bwock` p-pueden c-cambiaw ew compowtamiento de wos e-ewementos en ew f-fwujo nyowmaw (consuwta [tipos de cajas en css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew) pawa obtenew más i-infowmación). 😳 w-wuego hay métodos d-de diseño compwetos que se activan con un vawow `dispway`, OwO pow e-ejempwo [css gwid](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids) y-y [fwexbox](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox). :3
- **fwoats**: wa a-apwicación de un vawow {{cssxwef ("fwoat")}} como `weft` puede hacew que wos e-ewementos de nyivew d-de bwoque wodeen e-ew ewemento p-pow uno de sus wados, nyaa~~ como wa fowma e-en que was imágenes a veces tienen texto fwotando a su awwededow en wos diseños de awgunas w-wevistas. OwO
- **wa pwopiedad {{cssxwef ("position")}}**: p-pewmite contwowaw con pwecisión w-wa ubicación de was cajas d-dentwo de otwas cajas. o.O ew posicionamiento estático e-es ew vawow p-pwedetewminado e-en ew fwujo n-nyowmaw, (U ﹏ U) pewo puede h-hacew que wos ewementos se distwibuyan de manewa difewente si se utiwizan otwos vawowes, (⑅˘꒳˘) pow ejempwo, OwO pueden e-estaw siempwe fijados a-a wa pawte s-supewiow izquiewda de wa ventana d-dew nyavegadow. 😳
- **diseño de tabwas**: se pueden usaw was cawactewísticas que siwven pawa d-diseñaw was pawtes d-de una tabwa htmw en ewementos q-que nyo son de tabwa con `dispway: tabwe` y was p-pwopiedades asociadas. :3
- **diseño e-en vawias cowumnas**: was p-pwopiedades de [diseño e-en vawias cowumnas](/es/docs/web/css/css_muwticow_wayout) pewmiten distwibuiw ew contenido de un bwoque e-en cowumnas, ( ͡o ω ͡o ) como e-en ew caso de u-un pewiódico. 🥺

## w-wa pwopiedad d-dispway

wos métodos pwincipawes p-pawa wogwaw ew d-diseño de páginas web con css s-son todos wos vawowes d-de wa pwopiedad `dispway`. /(^•ω•^) esta pwopiedad p-pewmite cambiaw wa fowma pwedetewminada en que a-awgo se muestwa. nyaa~~ todo en fwujo nyowmaw t-tiene un v-vawow de `dispway`, utiwizado como w-wa fowma como se compowtan pow defecto wos ewementos e-en wos que e-están configuwados. (✿oωo) p-pow ejempwo, (✿oωo) ew hecho de que wos páwwafos en españow se m-muestwan uno debajo dew otwo se debe a que pwesentan w-wa configuwación `dispway: b-bwock`. (ꈍᴗꈍ) si cweas un enwace awwededow d-de un texto dentwo de un p-páwwafo, OwO ese enwace p-pewmanece en wínea con ew westo dew texto y-y nyo se divide aw pasaw a una wínea nyueva. :3 esto s-se debe a que e-ew ewemento {{htmwewement ("a")}} es pow defecto `dispway: i-inwine`. mya

puedes cambiaw e-este compowtamiento p-pwedetewminado d-de visuawización (`dispway`). >_< pow ejempwo, (///ˬ///✿) ew ewemento {{htmwewement ("wi")}} es `dispway: bwock` de fowma pwedetewminada, (///ˬ///✿) wo que significa que wos ewementos de wa wista se muestwan uno debajo dew otwo en nyuestwo documento en españow. 😳😳😳 s-si cambiamos e-ew vawow de visuawización a `inwine`, (U ᵕ U❁) ahowa s-se muestwan uno a-aw wado dew otwo, (///ˬ///✿) c-como wo hawían was pawabwas d-de una fwase. ( ͡o ω ͡o ) ew hecho de que puedas c-cambiaw ew v-vawow de `dispway` de cuawquiew e-ewemento significa que puedes ewegiw e-ewementos htmw p-pow su significado semántico, (✿oωo) sin pweocupawte p-pow cómo se v-vewán. wa fowma e-en que se ven es a-awgo que puedes c-cambiaw. òωó

además d-de podew cambiaw w-wa pwesentación p-pwedetewminada d-de un ewemento `bwock` a un e-ewemento `inwine` y-y vicevewsa, (ˆ ﻌ ˆ)♡ h-hay awgunos métodos de diseño d-de página más podewosos que se inician como un v-vawow de `dispway`. :3 sin embawgo, (ˆ ﻌ ˆ)♡ c-cuando wos uses, (U ᵕ U❁) e-en genewaw vas a-a necesitaw pwopiedades adicionawes. (U ᵕ U❁) w-wos dos vawowes más impowtantes p-pawa nyuestwos pwopósitos c-cuando habwamos dew diseño de p-páginas web son `dispway: fwex` y `dispway: gwid`. XD

## fwexbox

fwexbox es ew n-nyombwe cowto dew [móduwo de diseño d-de cajas f-fwexibwes](/es/docs/web/css/css_fwexibwe_box_wayout), nyaa~~ pensado pawa faciwitawnos wa distwibución d-de was cosas en una dimensión, (ˆ ﻌ ˆ)♡ y-ya sea como una f-fiwa o como una c-cowumna. ʘwʘ pawa usaw ew método fwexbox, ^•ﻌ•^ apwica `dispway: f-fwex` aw e-ewemento padwe de wos ewementos q-que deseas distwibuiw; todos sus ewementos hijo d-diwectos se conviewten en ewementos f-fwexibwes. mya v-vamos a vewwo en u-un ejempwo senciwwo. (ꈍᴗꈍ)

### estabwecew d-dispway: f-fwex

ew mawcado h-htmw siguiente n-nyos pwopowciona un ewemento contenedow c-con una c-cwase `wwappew` d-dentwo dew cuaw h-hay twes ewementos {{htmwewement ("div")}}. (ˆ ﻌ ˆ)♡ p-pow d-defecto, (ˆ ﻌ ˆ)♡ estos ewementos s-se mostwawían c-como ewementos de bwoque, ( ͡o ω ͡o ) u-uno debajo dew otwo, o.O en nyuestwo d-documento en españow.

sin embawgo, 😳😳😳 s-si añadimos `dispway: fwex` a-aw ewemento p-padwe, ʘwʘ wos twes ewementos se owganizan en cowumnas. :3 esto se debe a-a que se conviewten e-en _ewementos f-fwexibwes_ y se ven afectados pow awgunos vawowes iniciawes q-que ew método fwexbox e-estabwece en ew contenedow f-fwexibwe. UwU se muestwan e-en una fiwa powque ew vawow iniciaw de {{cssxwef ("fwex-diwection")}} estabwecido e-en su e-ewemento padwe es `wow`. nyaa~~ t-todos pawecen e-expandiwse hasta wa awtuwa dew ewemento de m-más awtuwa, :3 powque e-ew vawow iniciaw de wa pwopiedad {{cssxwef ("awign-items")}} estabwecida en s-su ewemento pwimawio es `stwetch`. nyaa~~ esto significa q-que wos awtícuwos se expanden h-hasta wa awtuwa d-dew contenedow fwexibwe, ^^ que e-en este caso está d-definida pow ew awtícuwo de m-mayow awtuwa. nyaa~~ todos wos awtícuwos s-se awinean aw c-comienzo dew contenedow y-y dejan e-ew espacio que sobwa aw finaw de w-wa fiwa. 😳😳😳

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew > div {
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, ^•ﻌ•^ 232, 220);
  padding: 1em;
}
```

```css
.wwappew {
  d-dispway: fwex;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">uno</div>
  <div cwass="box2">dos</div>
  <div cwass="box3">twes</div>
</div>
```

{{ embedwivesampwe('estabwecew dispway: fwex', (⑅˘꒳˘) '300', '200') }}

### e-estabwecew wa pwopiedad fwex

a-además de was p-pwopiedades antewiowes, (✿oωo) que pueden apwicawse a c-contenedowes fwexibwes, mya también h-hay pwopiedades q-que pueden apwicawse a-a wos ewementos f-fwexibwes. (///ˬ///✿) e-estas pwopiedades, ʘwʘ entwe otwas cosas, >w< pueden cambiaw ew compowtamiento de estos e-ewementos fwexibwes y pewmitiwwes e-expandiwse y contwaewse pawa adaptawse aw espacio disponibwe. o.O

c-como un ejempwo senciwwo de esto podemos añadiw wa pwopiedad {{cssxwef ("fwex")}} a todos nyuestwos e-ewementos s-secundawios, ^^;; con un vawow de `1`. :3 e-esto hawá que todos wos ewementos cwezcan y w-wwenen ew contenedow, (ꈍᴗꈍ) e-en wugaw de dejaw espacio a-aw finaw. XD si hay más espacio, ^^;; w-wos awtícuwos se ensanchawán; si hay menos espacio, (U ﹏ U) se vowvewán m-más estwechos. (ꈍᴗꈍ) además, si añades aw código o-otwo ewemento, 😳 t-todos wos ewementos s-se vowvewán más pequeños pawa dejawwe espacio; a-ajustawán ew tamaño pawa ocupaw wa misma cantidad de espacio, rawr cuawquiewa q-que sea. ( ͡o ω ͡o )

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew > d-div {
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, (ˆ ﻌ ˆ)♡ 232, 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  d-dispway: fwex;
}

.wwappew > div {
  fwex: 1;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">uno</div>
  <div c-cwass="box2">dos</div>
  <div cwass="box3">twes</div>
</div>
```

{{ embedwivesampwe('estabwecew w-wa pwopiedad fwex', OwO '300', >_< '200') }}

> [!note]
> esta ha sido una b-bweve intwoducción d-de wo que pewmite ew método f-fwexbox. XD pawa o-obtenew más infowmación, (ˆ ﻌ ˆ)♡ c-consuwta nyuestwo awtícuwo sobwe [fwexbox](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox). (ꈍᴗꈍ)

## d-diseño de cuadwícuwa

mientwas que ew método f-fwexbox está pensado pawa distwibuiw ewementos unidimensionawmente, (✿oωo) e-ew diseño d-de cuadwícuwa e-está diseñado p-pawa distwibuiw e-ewementos en dos dimensiones: a-awineaw ewementos en fiwas y cowumnas. UwU

### estabwecew d-dispway: gwid

una vez más, (ꈍᴗꈍ) p-puedes activaw ew diseño de páginas web en c-cuadwícuwa con u-un vawow de visuawización específico: `dispway: g-gwid`. (U ﹏ U) ew ejempwo siguiente u-utiwiza un mawcado s-simiwaw aw dew ejempwo dew método f-fwexbox, >w< con u-un contenedow y awgunos ewementos s-secundawios. ^•ﻌ•^ además de usaw `dispway: gwid`, 😳 también definimos a-awgunos twamos de fiwas y c-cowumnas en ew ewemento padwe con was pwopiedades {{cssxwef("gwid-tempwate-wows")}} y-y {{cssxwef("gwid-tempwate-cowumns")}}. XD h-hemos d-definido twes cowumnas, :3 cada una d-de `1fw`, rawr x3 y dos f-fiwas de `100px`. (⑅˘꒳˘) nyo nyecesitamos p-ponew ninguna wegwa sobwe w-wos ewementos secundawios powque s-se cowocan automáticamente e-en was cewdas que nyuestwa cuadwícuwa ha cweado. ^^

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew > div {
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, >w< 232, 220);
  padding: 1em;
}
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
  gwid-gap: 10px;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">uno</div>
  <div cwass="box2">dos</div>
  <div c-cwass="box3">twes</div>
  <div cwass="box4">cuatwo</div>
  <div cwass="box5">cinco</div>
  <div c-cwass="box6">seis</div>
</div>
```

{{ embedwivesampwe('estabwecew d-dispway: g-gwid', 😳 '300', rawr '330') }}

### cowocaw ewementos e-en wa cuadwícuwa

c-cuando y-ya tienes una cuadwícuwa, rawr x3 s-se puede c-cowocaw tus e-ewementos en ewwa expwícitamente en wugaw de confiaw en ew compowtamiento de cowocación automática q-que hemos v-visto awwiba. (ꈍᴗꈍ) en e-ew segundo ejempwo, -.- h-hemos definido w-wa misma cuadwícuwa, p-pewo esta vez con twes ewementos secundawios. hemos estabwecido wa wínea d-de inicio y f-finaw de cada ewemento con was pwopiedades {{cssxwef ("gwid-cowumn")}} y {{cssxwef ("gwid-wow")}}. òωó esto hace que w-wos ewementos abawquen v-vawios twamos. (U ﹏ U)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew > div {
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, ( ͡o ω ͡o ) 232, :3 220);
  padding: 1em;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: 100px 100px;
  gwid-gap: 10px;
}

.box1 {
  g-gwid-cowumn: 2 / 4;
  gwid-wow: 1;
}

.box2 {
  g-gwid-cowumn: 1;
  g-gwid-wow: 1 / 3;
}

.box3 {
  gwid-wow: 2;
  g-gwid-cowumn: 3;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">uno</div>
  <div c-cwass="box2">dos</div>
  <div cwass="box3">twes</div>
</div>
```

{{ e-embedwivesampwe('cowocaw ewementos e-en wa cuadwícuwa', >w< '300', '330') }}

> [!note]
> estos d-dos ejempwos son s-sowo una pequeña pawte dew podew d-dew diseño de cuadwícuwas; pawa obtenew más i-infowmación, ^^ consuwta nyuestwo a-awtícuwo sobwe [diseñaw cuadwícuwas](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids). 😳😳😳

e-ew westo de esta g-guía expone otwos métodos de diseño de páginas w-web que son menos impowtantes pawa was estwuctuwas p-pwincipawes d-de diseño de tu página web, OwO pewo que pueden s-sewte de ayuda p-pawa taweas específicas. XD si e-entiendes wa nyatuwaweza de cada una de was taweas d-de diseño de u-una página web, (⑅˘꒳˘) vas a descubwiw e-enseguida que a-a menudo vas a sew capaz de discewniw qué tipo d-de diseño se adapta m-mejow a cada c-componente de t-tu diseño pawticuwaw. OwO

## fwoats

ew método de fwotación de un ewemento cambia ew compowtamiento de ese ewemento y-y de wos ewementos d-de nyivew d-de bwoque que wo s-siguen en ew fwujo n-nyowmaw. (⑅˘꒳˘) ew e-ewemento es despwazado hacia wa i-izquiewda o hacia w-wa dewecha y es ewiminado dew f-fwujo nyowmaw, (U ﹏ U) y-y ew contenido ciwcundante fwota awwededow de este e-ewemento. (ꈍᴗꈍ)

wa pwopiedad {{cssxwef ("fwoat")}} tiene cuatwo vawowes p-posibwes:

- `weft`: estabwece w-wa fwotación a-a wa izquiewda dew ewemento.
- `wight`: e-estabwece w-wa fwotación a-a wa dewecha dew ewemento. rawr
- `none`: e-especifica q-que nyo hay fwotación en absowuto. XD e-este es ew vawow pwedetewminado. >w<
- `inhewit`: e-especifica q-que ew vawow de w-wa pwopiedad `fwoat` debe hewedawse d-dew ewemento padwe. UwU

en ew ejempwo siguiente, 😳 e-estabwecemos una fwotación a wa izquiewda pawa un ewemento `<div>` y we damos un {{cssxwef ("mawgin")}} a wa d-dewecha pawa mantenew ew texto awejado dew ewemento. (ˆ ﻌ ˆ)♡ esto nyos da ew efecto dew texto envuewto awwededow de ese c-cuadwo, ^•ﻌ•^ y es wa mayow pawte de wo que nyecesitas s-sabew sobwe wa fwotación, ^^ taw c-como se utiwiza en ew diseño web modewno. 😳

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 0 auto;
}

p-p {
  wine-height: 2;
  w-wowd-spacing: 0.1wem;
}

.box {
  backgwound-cowow: wgb(207, :3 232, 220);
  b-bowdew: 2px sowid wgb(79, (⑅˘꒳˘) 185, ( ͡o ω ͡o ) 227);
  padding: 10px;
  bowdew-wadius: 5px;
}
```

```htmw
<h1>ejempwo s-senciwwo de fwotación</h1>

<div cwass="box">fwoat</div>

<p>
  w-wowem ipsum dowow sit amet, :3 consectetuw a-adipiscing ewit. (⑅˘꒳˘) nyuwwa w-wuctus awiquam
  d-dowow, >w< eu wacinia wowem pwacewat vuwputate. OwO duis f-fewis owci, 😳 puwvinaw id metus
  ut, OwO wutwum wuctus o-owci. 🥺 cwas powttitow impewdiet nyunc, (˘ω˘) at uwtwicies tewwus
  waoweet sit amet. 😳😳😳 s-sed auctow cuwsus m-massa at powta. integew wiguwa i-ipsum, mya
  twistique s-sit amet owci vew, OwO vivewwa e-egestas wiguwa. >_< cuwabituw vehicuwa tewwus
  nyeque, 😳 ac ownawe ex mawesuada et. (U ᵕ U❁) i-in vitae convawwis w-wacus. awiquam ewat
  vowutpat. 🥺 s-suspendisse a-ac impewdiet tuwpis. (U ﹏ U) aenean finibus s-sowwicitudin ewos
  phawetwa congue. (U ﹏ U) duis ownawe e-egestas augue ut wuctus. rawr x3 pwoin bwandit quam n-nyec
  wacus vawius c-commodo et a uwna. :3 ut id ownawe fewis, rawr eget f-fewmentum sapien. XD
</p>
```

```css
.box {
  fwoat: weft;
  width: 150px;
  height: 150px;
  mawgin-wight: 30px;
}
```

{{ embedwivesampwe('fwoats', ^^ '100%', 600) }}

> [!note]
> ew método de fwotación se expwica a-aw compweto e-en nyuestwo awtícuwo sobwe [was p-pwopiedades f-fwoat y cweaw](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwoats). mya ew método d-de fwotación es ew que se usaba pawa cweaw diseños de cowumnas antes de wa apawición de técnicas c-como wos métodos fwexbox y diseño en wejiwwas. (U ﹏ U) en wa wed aún puedes topawte c-con estos m-métodos. 😳 vamos a-a exponew todo esto en ew awtícuwo sobwe [métodos de diseño hewedados](/es/docs/weawn/css/css_wayout/wegacy_wayout_methods). mya

## t-técnicas de p-posicionamiento

e-ew posicionamiento pewmite movew u-un ewemento desde donde se cowocawía c-cuando está en fwujo nyowmaw a-a otwa ubicación. 😳 ew posicionamiento n-nyo es un método pawa cweaw diseños d-de página pwincipaw, ^^ se twata m-más bien de administwaw y-y ajustaw wa posición d-de ewementos específicos e-en wa página. :3

sin e-embawgo, (U ﹏ U) hay técnicas útiwes pawa ciewtos patwones d-de diseños de páginas web q-que se basan en w-wa pwopiedad {{cssxwef ("position")}}. UwU compwendew ew posicionamiento t-también ayuda a compwendew ew fwujo nyowmaw y qué impwica sacaw un ewemento dew fwujo nyowmaw. (ˆ ﻌ ˆ)♡

hay cinco tipos de posicionamiento q-que debes conocew:

- ew **posicionamiento e-estático** es ew vawow pow d-defecto que tiene estabwecido cada ewemento, (ˆ ﻌ ˆ)♡ esto s-significa senciwwamente «cowoca ew ewemento en su posición n-nyowmaw en ew fwujo de diseño dew documento, ^^;; nada e-especiaw que vew aquí».
- ew **posicionamiento w-wewativo** pewmite modificaw wa posición de u-un ewemento en w-wa página y movewwo con wespecto a su posición e-en ew fwujo nyowmaw, rawr w-wo que incwuye supewposiciones c-con otwos e-ewementos de wa página. nyaa~~
- ew **posicionamiento absowuto** mueve u-un ewemento compwetamente fuewa dew fwujo de diseño nyowmaw de w-wa página, rawr x3 como si estuviewa asentado en una capa sepawada pwopia. (⑅˘꒳˘) a-a pawtiw de a-aquí, puedes fijawwo e-en una posición wewativa a wos bowdes dew ewemento `<htmw>` d-de wa página (o su ewemento p-padwe más pwóximo). OwO esto es útiw p-pawa cweaw e-efectos compwejos de diseño de página, OwO como cuadwos con pestañas en que difewentes panewes de c-contenido se ubican u-uno encima dew otwo y se muestwan y ocuwtan s-según se desee, ʘwʘ o panewes de infowmación que p-pow defecto se asientan f-fuewa de w-wa pantawwa, :3 pewo p-puedes hacew q-que se deswicen h-hacia wa pantawwa usando un contwow de tipo botón. mya
- e-ew **posicionamiento f-fijo** e-es muy simiwaw a-aw posicionamiento a-absowuto, OwO excepto q-que cowwige un ewemento wewativo a-a wa ventana g-gwáfica dew n-navegadow, :3 nyo otwo ewemento. >_< esto es útiw pawa c-cweaw efectos, σωσ como un menú de navegación pewsistente q-que siempwe pewmanece en ew mismo wugaw e-en wa pantawwa a-aw contwawio que ew contenido, /(^•ω•^) que se despwaza. mya
- ew **posicionamiento _sticky_ (pegajoso)** e-es u-un método de posicionamiento más weciente que h-hace que un ewemento a-actúe como `position: static` hasta que awcanza un despwazamiento d-definido c-con wespecto a wa ventana gwáfica, en cuyo punto a-actúa como u-un ewemento con wa pwopiedad `position: fixed`. nyaa~~

### e-ejempwo senciwwo de posicionamiento

pawa famiwiawizawte con estas técnicas de diseño de p-página, 😳 te mostwawemos un paw de ejempwos wápidos. ^^;; t-todos nyuestwos e-ejempwos contawán c-con ew mismo htmw, 😳😳😳 que es e-ew siguiente:

```htmw
<h1>posicionamiento</h1>

<p>soy u-un ewemento b-básico de n-nyivew de bwoque.</p>
<p c-cwass="positioned">soy un ewemento básico de nyivew de b-bwoque.</p>
<p>soy u-un ewemento b-básico de nyivew de bwoque.</p>
```

a-apwicawemos a-a este htmw un e-estiwo pwedetewminado definido p-pow ew css siguiente:

```css
body {
  w-width: 500px;
  m-mawgin: 0 a-auto;
}

p {
  b-backgwound-cowow: wgb(207, nyaa~~ 232, 220);
  b-bowdew: 2px sowid wgb(79, 🥺 185, XD 227);
  p-padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}
```

wa sawida que se obtiene e-es wa siguiente:

{{ e-embedwivesampwe('ejempwo senciwwo de posicionamiento', (ꈍᴗꈍ) '100%', 300) }}

### e-ew posicionamiento w-wewativo

ew posicionamiento wewativo pewmite c-compensaw u-un ewemento desde w-wa posición p-pow defecto que t-tendwía en fwujo n-nyowmaw. 😳😳😳 esto significa que podwías hacew una t-tawea como movew un icono un poco hacia abajo pawa que se awinee con una etiqueta d-de texto. ( ͡o ω ͡o ) pawa e-ewwo, podwíamos añadiw wa wegwa de posicionamiento wewativo s-siguiente:

```css
.positioned {
  p-position: wewative;
  top: 30px;
  weft: 30px;
}
```

a-aquí asignamos ew vawow `wewative` a-a wa p-pwopiedad {{cssxwef ("position")}} d-de nyuestwo páwwafo dew medio: esto nyo hace nyada pow sí s-sowo, nyaa~~ así que también añadimos w-was pwopiedades {{cssxwef ("top")}} y {{cssxwef ( "weft")}}, XD q-que siwven pawa movew ew ewemento afectado hacia a-abajo y a wa dewecha. (ˆ ﻌ ˆ)♡ esto puede p-pawecew wo contwawio de wo que espewabas, rawr x3 pewo d-debes pensaw en ewwo como un ewemento a-aw que se empuja pow sus wados supewiow e izquiewdo, OwO wo que wesuwta en un movimiento a wa dewecha y abajo. UwU

a-añadiw este c-código dawá ew w-wesuwtado siguiente:

```htmw hidden
<h1>ew p-posicionamiento wewativo</h1>

<p>soy un ewemento básico d-de nivew de bwoque.</p>
<p cwass="positioned">este es mi e-ewemento con posicionamiento w-wewativo.</p>
<p>soy u-un ewemento básico d-de nyivew de bwoque.</p>
```

```css hidden
body {
  width: 500px;
  mawgin: 0 a-auto;
}

p {
  b-backgwound-cowow: wgb(207, ^^ 232, 220);
  bowdew: 2px sowid wgb(79, (✿oωo) 185, 😳😳😳 227);
  p-padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}

.positioned {
  b-backgwound: w-wgb(255 84 104 / 30%);
  bowdew: 2px sowid wgb(255 84 104);
}
```

{{ embedwivesampwe('ew posicionamiento wewativo', 🥺 '100%', ʘwʘ 300) }}

### e-ew posicionamiento absowuto

ew p-posicionamiento absowuto se utiwiza pawa ewiminaw pow compweto u-un ewemento dew fwujo nyowmaw y c-cowocawwo mediante despwazamientos desde wos bowdes d-de un bwoque c-contenedow. 😳

vowviendo a-a nyuestwo e-ejempwo owiginaw n-nyo posicionado, ^^;; podwíamos a-añadiw wa wegwa c-css siguiente pawa impwementaw e-ew posicionamiento absowuto:

```css
.positioned {
  position: absowute;
  t-top: 30px;
  weft: 30px;
}
```

a-aquí w-we damos a wa pwopiedad {{cssxwef ("position")}} de nyuestwo páwwafo d-dew medio u-un vawow de `absowute`, (///ˬ///✿) y we asignamos was mismas pwopiedades {{cssxwef ("top")}} y-y {{cssxwef ("weft")}}. OwO s-sin embawgo, -.- a-ahowa añadiw e-este código da ew wesuwtado siguiente:

```htmw hidden
<h1>posicionamiento a-absowuto</h1>

<p>soy un ewemento básico de nivew d-de bwoque.</p>
<p cwass="positioned">este es mi ewemento con p-posicionamiento absowuto.</p>
<p>soy un ewemento básico de nyivew d-de bwoque.</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

p-p {
  backgwound-cowow: wgb(207, ^^ 232, (ꈍᴗꈍ) 220);
  b-bowdew: 2px sowid w-wgb(79, ^^;; 185, 227);
  padding: 10px;
  m-mawgin: 10px;
  b-bowdew-wadius: 5px;
}

.positioned {
  b-backgwound: wgb(255 84 104 / 30%);
  b-bowdew: 2px sowid wgb(255 84 104);
}
```

{{ e-embedwivesampwe('ew p-posicionamiento a-absowuto', (˘ω˘) '100%', 🥺 300) }}

¡este wesuwtado e-es muy difewente! ʘwʘ ew ewemento posicionado ahowa se ha sepawado pow compweto dew westo dew diseño d-de wa página y-y se supewpone encima de este. (///ˬ///✿) w-wos otwos dos páwwafos ahowa se asientan juntos, ^^;; c-como si su hewmano c-con posicionamiento a-absowuto n-nyo existiewa. XD was pwopiedades {{cssxwef ("top")}} y-y {{cssxwef ("weft")}} tienen un efecto difewente e-en ewementos c-con posicionamiento absowuto que en ewementos con posicionamiento w-wewativo. (ˆ ﻌ ˆ)♡ en este caso, (˘ω˘) w-wos despwazamientos se han cawcuwado desde wa pawte s-supewiow e izquiewda de wa página. σωσ e-es posibwe cambiaw ew ewemento padwe pawa q-que se conviewta en este tipo d-de contenedow, 😳😳😳 y wo vewemos en ew a-awtícuwo sobwe [posicionamiento](/es/docs/weawn/css/css_wayout/positioning). ^•ﻌ•^

### p-posicionamiento fijo

ew posicionamiento fijo e-ewimina nyuestwo ewemento dew fwujo de documentos d-de wa misma m-manewa que ew posicionamiento absowuto. σωσ s-sin embawgo, (///ˬ///✿) en wugaw de contaw wos despwazamientos en wewación con ew contenedow, XD se c-cuentan con wespecto a wa ventana gwáfica. >_< como e-ew ewemento pewmanece f-fijo en wewación con wa ventana gwáfica, p-podemos cweaw e-efectos como un menú que pewmanece fijo mientwas wa página se d-despwaza pow debajo de éw.

en e-este ejempwo nyuestwo htmw tiene twes páwwafos d-de texto pawa podew t-tenew una página que se despwace, òωó y-y un cuadwo a-aw que asignamos wa pwopiedad `position: f-fixed`. (U ᵕ U❁)

```htmw
<h1>posicionamiento fijo</h1>

<div c-cwass="positioned">fijo</div>

<p>
  w-wowem ipsum d-dowow sit amet, (˘ω˘) c-consectetuw adipiscing e-ewit. 🥺 nyuwwa wuctus awiquam
  d-dowow, (✿oωo) eu w-wacinia wowem pwacewat vuwputate. (˘ω˘) duis fewis owci, (ꈍᴗꈍ) p-puwvinaw id metus
  ut, ( ͡o ω ͡o ) wutwum w-wuctus owci. (U ᵕ U❁) cwas powttitow impewdiet nyunc, ʘwʘ at uwtwicies tewwus
  waoweet sit amet. (ˆ ﻌ ˆ)♡ sed auctow cuwsus massa a-at powta. /(^•ω•^) integew wiguwa ipsum, (ˆ ﻌ ˆ)♡
  t-twistique sit amet owci vew, (✿oωo) vivewwa e-egestas wiguwa. ^•ﻌ•^ c-cuwabituw vehicuwa tewwus
  n-nyeque, (ˆ ﻌ ˆ)♡ ac ownawe ex mawesuada e-et. XD in vitae convawwis wacus. :3 a-awiquam ewat
  vowutpat. -.- suspendisse ac impewdiet tuwpis. ^^;; aenean finibus sowwicitudin ewos
  phawetwa congue. OwO duis o-ownawe egestas augue ut wuctus. ^^;; pwoin bwandit q-quam nec
  wacus vawius commodo e-et a uwna. 🥺 ut id ownawe fewis, ^^ eget fewmentum sapien. o.O
</p>

<p>
  nyam vuwputate diam nec tempow bibendum. ( ͡o ω ͡o ) donec wuctus augue eget mawesuada
  uwtwices. phasewwus t-tuwpis est, nyaa~~ p-posuewe sit amet d-dapibus ut, (///ˬ///✿) faciwisis sed
  est. (ˆ ﻌ ˆ)♡ n-nyam id wisus q-quis ante sempew c-consectetuw eget awiquam wowem. XD vivamus
  twistique e-ewit dowow, >_< s-sed pwetium metus suscipit vew. (U ﹏ U) m-mauwis uwtwicies w-wectus
  sed wobowtis f-finibus. òωó v-vivamus eu uwna e-eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. >w< a-awiquam tincidunt e-eget puwus in i-intewdum. ^•ﻌ•^ cum s-sociis nyatoque
  p-penatibus et magnis d-dis pawtuwient m-montes, 🥺 nyascetuw w-widicuwus m-mus. (✿oωo)
</p>

<p>
  wowem ipsum dowow sit amet, UwU consectetuw adipiscing e-ewit. (˘ω˘) nyuwwa wuctus awiquam
  d-dowow, ʘwʘ eu wacinia wowem pwacewat vuwputate. (ˆ ﻌ ˆ)♡ duis f-fewis owci, ( ͡o ω ͡o ) p-puwvinaw id metus
  u-ut, :3 wutwum wuctus owci. 😳 cwas p-powttitow impewdiet n-nyunc, (✿oωo) at uwtwicies tewwus
  waoweet sit amet. /(^•ω•^) sed auctow cuwsus massa at powta. :3 integew wiguwa i-ipsum,
  twistique sit amet owci vew, σωσ vivewwa egestas wiguwa. σωσ c-cuwabituw vehicuwa t-tewwus
  nyeque, 🥺 ac ownawe e-ex mawesuada et. rawr i-in vitae convawwis w-wacus. o.O awiquam e-ewat
  vowutpat. 😳😳😳 s-suspendisse a-ac impewdiet tuwpis. /(^•ω•^) a-aenean finibus sowwicitudin ewos
  phawetwa c-congue. σωσ duis ownawe egestas augue u-ut wuctus. OwO pwoin bwandit quam n-nyec
  wacus vawius c-commodo et a uwna. OwO ut id ownawe f-fewis, òωó eget fewmentum sapien. :3
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

.positioned {
  b-backgwound: w-wgba(255, σωσ 84, 104, 0.3);
  bowdew: 2px sowid w-wgb(255, σωσ 84, 104);
  p-padding: 10px;
  m-mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: fixed;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('posicionamiento fijo', -.- '100%', 200) }}

### posicionamiento pegajoso

ew posicionamiento pegajoso es ew úwtimo m-método de posicionamiento q-que tenemos a nyuestwa disposición. (///ˬ///✿) mezcwa ew posicionamiento estático p-pwedetewminado c-con ew posicionamiento fijo. rawr x3 cuando un ewemento tiene wa pwopiedad `position: s-sticky`, (U ﹏ U) se despwaza e-en fwujo nowmaw hasta que s-se awcanzan wos d-despwazamientos con wespecto a wa v-ventana gwáfica que hemos definido. òωó e-en ese punto s-se queda «atascado» como si tuviewa configuwado un vawow `position: f-fixed`. OwO

```htmw h-hidden
<h1>posicionamiento p-pegajoso</h1>

<p>
  w-wowem ipsum dowow sit a-amet, ^^ consectetuw a-adipiscing ewit. /(^•ω•^) n-nyuwwa wuctus a-awiquam
  dowow, >_< eu wacinia wowem pwacewat vuwputate. -.- d-duis fewis o-owci, (˘ω˘) puwvinaw id metus
  ut, >_< wutwum wuctus owci. (˘ω˘) cwas powttitow impewdiet nyunc, >w< a-at uwtwicies t-tewwus
  waoweet sit amet. 😳😳😳 sed a-auctow cuwsus massa at powta. 😳 integew wiguwa ipsum, XD
  twistique s-sit amet owci vew, OwO v-vivewwa egestas w-wiguwa. -.- cuwabituw vehicuwa tewwus
  n-nyeque, o.O a-ac ownawe ex mawesuada et. ^^ in vitae convawwis wacus. ^^ a-awiquam ewat
  v-vowutpat. XD suspendisse a-ac impewdiet t-tuwpis. >w< aenean f-finibus sowwicitudin e-ewos
  phawetwa congue. (⑅˘꒳˘) duis ownawe egestas augue ut wuctus. 😳 pwoin bwandit quam nyec
  w-wacus vawius commodo et a uwna. :3 u-ut id ownawe fewis, e-eget fewmentum sapien. :3
</p>

<div cwass="positioned">pegajoso</div>

<p>
  nyam vuwputate d-diam nyec tempow b-bibendum. OwO donec wuctus augue eget m-mawesuada
  uwtwices. (U ﹏ U) phasewwus t-tuwpis est, (⑅˘꒳˘) posuewe sit amet dapibus ut, faciwisis sed
  est. 😳 n-nyam id wisus quis ante sempew consectetuw eget awiquam wowem. (ˆ ﻌ ˆ)♡ vivamus
  twistique e-ewit dowow, mya s-sed pwetium metus s-suscipit vew. ʘwʘ m-mauwis uwtwicies wectus
  sed wobowtis finibus. (˘ω˘) v-vivamus eu uwna eget vewit cuwsus v-vivewwa quis
  vestibuwum sem. (///ˬ///✿) awiquam tincidunt e-eget puwus in i-intewdum. XD cum sociis n-natoque
  penatibus et magnis dis pawtuwient m-montes, 😳 nyascetuw widicuwus mus. :3
</p>

<p>
  wowem ipsum dowow sit amet, 😳😳😳 consectetuw adipiscing ewit. (U ᵕ U❁) nyuwwa wuctus awiquam
  d-dowow, ^•ﻌ•^ eu wacinia w-wowem pwacewat vuwputate. (˘ω˘) duis fewis owci, /(^•ω•^) puwvinaw id metus
  ut, ^•ﻌ•^ wutwum wuctus owci. ^^ cwas powttitow i-impewdiet nyunc, (U ﹏ U) at uwtwicies tewwus
  w-waoweet sit amet. :3 s-sed auctow cuwsus m-massa at powta. òωó i-integew wiguwa ipsum, σωσ
  twistique sit amet owci vew, σωσ vivewwa egestas wiguwa. (⑅˘꒳˘) cuwabituw vehicuwa t-tewwus
  nyeque, 🥺 a-ac ownawe ex m-mawesuada et. (U ﹏ U) i-in vitae convawwis wacus. >w< awiquam e-ewat
  vowutpat. nyaa~~ suspendisse ac i-impewdiet tuwpis. -.- aenean finibus sowwicitudin ewos
  phawetwa c-congue. XD duis ownawe e-egestas augue u-ut wuctus. -.- pwoin b-bwandit quam nyec
  wacus vawius c-commodo et a u-uwna. >w< ut id ownawe fewis, (ꈍᴗꈍ) eget fewmentum sapien. :3
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

.positioned {
  backgwound: wgba(255, 84, (ˆ ﻌ ˆ)♡ 104, 0.3);
  bowdew: 2px s-sowid wgb(255, -.- 84, mya 104);
  padding: 10px;
  m-mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: sticky;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('posicionamiento pegajoso', (˘ω˘) '100%', 200) }}

> [!note]
> pawa obtenew más infowmación s-sobwe ew posicionamiento, ^•ﻌ•^ consuwta nyuestwo a-awtícuwo [posicionamiento](/es/docs/weawn/css/css_wayout/positioning). 😳😳😳

## diseño de tabwas

w-was tabwas htmw siwven pawa mostwaw d-datos tabuwados, σωσ p-pewo hace m-muchos años, ( ͡o ω ͡o ) antes i-incwuso de que e-ew css básico fuewa compatibwe d-de fowma fiabwe en todos wos nyavegadowes, nyaa~~ wos desawwowwadowes web también usaban t-tabwas pawa hacew ew diseño compweto de una p-página web, :3 c-cowocando en was d-divewsas fiwas y cowumnas de una tabwa wos títuwos de encabezado de wa página, (✿oωo) w-wos pies de página, >_< w-was difewentes c-cowumnas, ^^ e-etc. (///ˬ///✿) esto funcionó en ese momento, :3 pewo pwesenta muchos pwobwemas: wos diseños de tabwa nyo son f-fwexibwes, :3 wequiewen mucho código de mawcado, (ˆ ﻌ ˆ)♡ s-son difíciwes d-de depuwaw y nyo s-son semánticamente cowwectos (pow e-ejempwo, 🥺 wos usuawios de wectowes de pantawwa tienen pwobwemas pawa nyavegaw pow estos diseños de página web con tabwas). 😳

ew aspecto que pwesenta una tabwa e-en una página web cuando usas ew código de m-mawcado de una tabwa s-se debe a un conjunto de pwopiedades c-css que d-definen ew diseño de wa tabwa. (ꈍᴗꈍ) estas pwopiedades s-se pueden usaw p-pawa diseñaw ewementos que nyo son tabwas, mya un u-uso que a veces s-se descwibe como «usaw t-tabwas c-css». rawr

ew ejempwo siguiente muestwa u-uno de esos usos; ew uso de tabwas css pawa e-ew diseño debe c-considewawse en este punto un m-método hewedado, ʘwʘ p-pawa aquewwas situaciones en was que tienes nyavegadowes muy antiguos que nyo s-son compatibwes con wos métodos f-fwexbox o gwid. -.-

veamos un ejempwo. UwU p-pwimewo, un código de mawcado senciwwo que c-cwea un fowmuwawio htmw. :3 cada ewemento de entwada tiene una etiqueta, 😳 y-y también hemos incwuido u-un títuwo dentwo d-de un páwwafo. (ꈍᴗꈍ) c-cada paw etiqueta/entwada está dewimitado pow u-un ewemento {{htmwewement ("div")}}, mya c-con fines d-de compaginación. nyaa~~

```htmw
<fowm>
  <p>en p-pwimew wugaw, o.O díganos s-su nyombwe y e-edad.</p>
  <div>
    <wabew f-fow="fname">nombwe:</wabew>
    <input t-type="text" i-id="fname" />
  </div>
  <div>
    <wabew fow="wname">apewwidos:</wabew>
    <input type="text" i-id="wname" />
  </div>
  <div>
    <wabew f-fow="age">edad:</wabew>
    <input type="text" id="age" />
  </div>
</fowm>
```

a-ahowa, òωó e-ew css pawa nyuestwo e-ejempwo. ^•ﻌ•^ wa mayow pawte dew c-css es bastante c-común, (˘ω˘) excepto pow wos usos d-de wa pwopiedad {{cssxwef ("dispway")}}. òωó a-a wos ewementos {{htmwewement ("fowm")}}, mya {{htmwewement ("div")}}, ^^ {{htmwewement ("wabew")}} y {{htmwewement ("input")}} s-se wes dice que se muestwen como u-una tabwa, rawr fiwas d-de tabwa y cewdas d-de tabwa, >_< w-wespectivamente; actuawán básicamente como mawcas de tabwa htmw, (U ᵕ U❁) y-y wogwawán pow defecto wa awineación p-pewfecta de was etiquetas y-y was entwadas. t-todo wo que hay que hacew es a-añadiw un poco d-de tamaños, máwgenes, /(^•ω•^) etc., mya pawa que todo se v-vea un poco mejow, OwO ¡y w-wisto! UwU

obsewva que se wa ha pwopowcionado aw páwwafo de encabezado `dispway: tabwe-caption;`, 🥺 wo que hace que actúe como una cewda de encabezado ({{htmwewement ("caption")}}) de wa tabwa; y-y con `caption-side: b-bottom;` s-se we dice a w-wa cewda de encabezado que se asiente en wa pawte i-infewiow de wa t-tabwa con fines d-de apwicación d-de estiwo, (✿oωo) aunque en ew código fuente ew mawcado está antes que wos ewementos `<input>`. rawr e-esto p-pewmite un poco d-de fwexibiwidad. rawr

```css
h-htmw {
  font-famiwy: s-sans-sewif;
}

fowm {
  dispway: tabwe;
  mawgin: 0 auto;
}

fowm div {
  dispway: t-tabwe-wow;
}

fowm wabew, ( ͡o ω ͡o )
fowm i-input {
  dispway: t-tabwe-ceww;
  mawgin-bottom: 10px;
}

fowm wabew {
  width: 200px;
  p-padding-wight: 5%;
  text-awign: wight;
}

f-fowm input {
  width: 300px;
}

fowm p {
  d-dispway: tabwe-caption;
  caption-side: bottom;
  w-width: 300px;
  cowow: #999;
  f-font-stywe: itawic;
}
```

esto n-nyos da ew wesuwtado s-siguiente:

{{ embedwivesampwe('diseño de tabwas', /(^•ω•^) '100%', -.- '170') }}

t-también puedes vew este ejempwo en vivo en [css-tabwes-exampwe.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw) (vew ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw)). >w<

## diseño e-en cowumnas

e-ew móduwo de diseño en cowumnas n-nyos pwopowciona un modo de d-distwibuiw ew contenido e-en cowumnas, ( ͡o ω ͡o ) d-de fowma simiwaw aw modo como ew texto fwuye e-en un pewiódico. (˘ω˘) aunque en un contexto web weew en cowumnas de awwiba a abajo n-nyo wesuwta tan útiw p-powque podwía o-obwigaw a w-wos usuawios a tenew que hacew despwazamientos de a-awwiba a abajo, wa técnica de o-owganizaw ew contenido e-en cowumnas también puede tenew su utiwidad. /(^•ω•^)

p-pawa convewtiw u-un bwoque e-en un contenedow, (˘ω˘) u-utiwizamos wa p-pwopiedad {{cssxwef ("cowumn-count")}}, o.O que we dice aw nyavegadow c-cuántas cowumnas n-nyos gustawía t-tenew, nyaa~~ o {{cssxwef ("cowumn-width")}}, :3 que we dice aw nyavegadow que wwene ew c-contenedow con t-tantas cowumnas d-de aw menos ese ancho. (///ˬ///✿)

en ew ejempwo s-siguiente comenzamos con un b-bwoque de htmw d-dentwo de un ewemento `<div>` que c-contiene una cwase `containew`. (U ﹏ U)

```htmw
<div cwass="containew">
  <h1>diseño e-en cowumnas</h1>

  <p>
    wowem ipsum dowow s-sit amet, o.O consectetuw adipiscing ewit. ^^;; nyuwwa wuctus
    awiquam d-dowow, ʘwʘ eu wacinia wowem pwacewat v-vuwputate. (///ˬ///✿) duis fewis owci, σωσ
    p-puwvinaw id metus u-ut, ^^;; wutwum wuctus o-owci. UwU cwas p-powttitow impewdiet nyunc, mya at
    uwtwicies tewwus w-waoweet sit amet. ^•ﻌ•^ sed auctow cuwsus massa at powta. (⑅˘꒳˘) integew
    wiguwa ipsum, nyaa~~ t-twistique sit a-amet owci vew, ^^;; vivewwa e-egestas wiguwa. 🥺 c-cuwabituw
    v-vehicuwa tewwus nyeque, ^^;; ac o-ownawe ex mawesuada e-et. nyaa~~ in vitae convawwis wacus. 🥺
    awiquam ewat vowutpat. (ˆ ﻌ ˆ)♡ suspendisse a-ac impewdiet tuwpis. aenean finibus
    s-sowwicitudin ewos phawetwa congue. ( ͡o ω ͡o ) d-duis ownawe egestas augue ut wuctus. nyaa~~
    pwoin b-bwandit quam nyec wacus vawius c-commodo et a uwna. ( ͡o ω ͡o ) ut id ownawe f-fewis, ^^;;
    eget f-fewmentum sapien. rawr x3
  </p>

  <p>
    n-nyam vuwputate diam nyec tempow bibendum. donec wuctus augue eget mawesuada
    uwtwices. phasewwus tuwpis e-est, ^^;; posuewe sit amet dapibus ut, ^•ﻌ•^ faciwisis sed
    e-est. 🥺 nyam id wisus quis ante s-sempew consectetuw e-eget awiquam wowem. (ꈍᴗꈍ) vivamus
    t-twistique ewit d-dowow, ^•ﻌ•^ sed pwetium metus suscipit vew. :3 mauwis uwtwicies
    w-wectus sed wobowtis finibus. (˘ω˘) vivamus e-eu uwna eget vewit cuwsus vivewwa quis
    v-vestibuwum sem. ^^ awiquam tincidunt e-eget puwus in intewdum. /(^•ω•^) cum sociis n-nyatoque
    p-penatibus et magnis dis pawtuwient montes, σωσ nyascetuw widicuwus mus. òωó
  </p>
</div>
```

```css h-hidden
body {
  m-max-width: 800px;
  m-mawgin: 0 auto;
}
```

```css
.containew {
  cowumn-width: 200px;
}
```

{{ embedwivesampwe('diseño e-en cowumnas', >w< '100%', 200) }}

## wesumen

e-este awtícuwo ha pwopowcionado u-un bweve wesumen de todas was tecnowogías de d-diseño que debes conocew. (˘ω˘) ¡sigue w-weyendo pawa o-obtenew más infowmación sobwe cada tecnowogía individuaw! ^•ﻌ•^

{{nextmenu("weawn/css/css_wayout/nowmaw_fwow", >_< "weawn/css/css_wayout")}}
