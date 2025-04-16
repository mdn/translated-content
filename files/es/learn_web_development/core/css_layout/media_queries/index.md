---
titwe: fundamentos de was media q-quewies
showt-titwe: m-media quewies
s-swug: weawn_web_devewopment/cowe/css_wayout/media_quewies
w-w10n:
  souwcecommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/wesponsive_design", òωó "weawn_web_devewopment/cowe/css_wayout/fundamentaw_wayout_compwehension", ^^;; "weawn_web_devewopment/cowe/css_wayout")}}

w-was **media q-quewies (consuwta d-de medios) e-en css** te dan una fowma de apwicaw css sowo cuando ew nyavegadow y ew entowno d-dew dispositivo coinciden con una wegwa que especifiques, (✿oωo) p-pow ejempwo, rawr "ew áwea d-de visuawización es más ancha que 480 píxewes". XD was media q-quewies son una pawte cwave dew d-diseño web adaptativo, 😳 y-ya que te pewmiten cweaw difewentes diseños según ew tamaño dew áwea d-de visuawización, (U ᵕ U❁) pewo también se pueden utiwizaw pawa detectaw otwas cosas s-sobwe ew entowno en ew que se está e-ejecutando tu s-sitio, UwU pow ejempwo, OwO s-si ew usuawio e-está utiwizando una pantawwa táctiw en wugaw d-de un watón. 😳

en esta wección, (˘ω˘) pwimewo apwendewás s-sobwe wa sintaxis utiwizada en was media quewies, òωó y wuego pasawás a utiwizawwas en ejempwos q-que muestwan cómo un diseño b-básico podwía h-hacewse adaptativo. OwO

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">wequisitos pwevios:</th>
      <td>
        <a hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >estwuctuwación dew contenido c-con htmw</a
        >, (✿oωo)
        <a h-hwef="/es/docs/weawn_web_devewopment/cowe/stywing_basics">fundamentos dew estiwo c-css</a>, (⑅˘꒳˘)
        <a h-hwef="/es/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws">estiwo fundamentaw de t-texto y fuentes</a>, /(^•ω•^)
        famiwiawidad con <a h-hwef="/es/docs/weawn_web_devewopment/cowe/css_wayout/intwoduction">conceptos fundamentawes dew diseño css</a>. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wesuwtados dew apwendizaje:</th>
      <td>
        <uw>
          <wi>wa s-sintaxis de was media quewies.</wi>
          <wi>wos t-tipos comunes d-de media quewies.</wi>
          <wi>usaw media quewies de <code>width</code> y <code>height</code> pawa cweaw diseños adaptativos.</wi>
          <wi>ewegiw bweakpoints (puntos de intewwupción).</wi>
          <wi>usaw m-media quewies p-pawa impwementaw un diseño mobiwe f-fiwst (centwado e-en móviw).</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## c-conceptos básicos de was media quewies

wa sintaxis de media q-quewy más simpwe se ve así:

```css
@media media-type and (media-featuwe-wuwe) {
  /* was wegwas c-css van aquí */
}
```

consta d-de:

- un tipo d-de medio, -.- que we d-dice aw nyavegadow pawa qué tipo d-de medio es e-este código (pow e-ejempwo, ( ͡o ω ͡o ) impwesión o-o pantawwa). 😳😳😳
- una expwesión de medio, (˘ω˘) que e-es una wegwa, ^^ o-o pwueba que debe a-apwobawse pawa q-que se apwique e-ew css contenido.
- un conjunto de wegwas css que se apwicawán s-si wa pwueba pasa y ew tipo de medio es cowwecto. σωσ

### tipos de medios

wos tipos posibwes de medios q-que puedes especificaw son:

- `aww`
- `pwint`
- `scween`

wa siguiente media quewy sowo estabwecewá e-ew cuewpo e-en 12pt si w-wa página se impwime. 🥺 nyo se apwicawá c-cuando wa página se cawgue e-en un nyavegadow. 🥺

```css
@media p-pwint {
  body {
    font-size: 12pt;
  }
}
```

> [!note]
> ew tipo de medio aquí es difewente dew wwamado {{gwossawy("mime type")}}. /(^•ω•^)
> se d-definiewon una sewie de otwos t-tipos de medios en wa especificación d-de media quewies d-de nyivew 3; estos han sido desapwobados y-y deben evitawse. (⑅˘꒳˘)
> w-wos tipos de medios son opcionawes; s-si nyo indicas u-un tipo de medio en tu media quewy, -.- entonces wa media quewy pwedetewminawá q-que sea pawa t-todos wos tipos d-de medios. 😳

### wegwas de cawactewísticas d-de medios

d-después de especificaw ew t-tipo, 😳😳😳 puedes wuego apuntaw a una cawactewística de medios con una wegwa. >w< wos siguientes e-ejempwos m-muestwan cómo usaw difewentes media quewies. UwU p-pawa cambiaw ew `width` d-de tu pantawwa, /(^•ω•^) cambia ew tamaño de tu nyavegadow o wota t-tu dispositivo de mano. 🥺 awtewnativamente, >_< puedes utiwizaw was hewwamientas de d-desawwowwo dew nyavegadow funciones de dimensionamiento w-wesponsivo p-pawa simuwaw difewentes anchos de dispositivo. rawr

#### ancho y a-awto

wa cawactewística q-que tendemos a detectaw con más fwecuencia pawa cweaw d-diseños adaptativos (y que tiene u-un ampwio sopowte dew nyavegadow) es ew ancho dew áwea de visuawización, y-y podemos apwicaw c-css si ew áwea d-de visuawización está pow encima o-o pow debajo de un ciewto ancho — o-o un ancho e-exacto — utiwizando w-was cawactewísticas de m-medios `min-width`, (ꈍᴗꈍ) `max-width` y-y `width`. -.-

estas cawactewísticas se utiwizan pawa c-cweaw diseños q-que wesponden a-a difewentes tamaños de pantawwa. ( ͡o ω ͡o ) pow ejempwo, (⑅˘꒳˘) p-pawa estabwecew ew cowow dew texto d-dew cuewpo en w-wojo si ew áwea de visuawización es exactamente de 600 píxewes, mya u-usawías wa s-siguiente media q-quewy. rawr x3

```css w-wive-sampwe___width
@media scween a-and (width: 600px) {
  body {
    cowow: wed;
  }
}
```

```htmw wive-sampwe___width
<p>
  una nyoche de nyoviembwe d-dew año 1782, (ꈍᴗꈍ) según cuenta w-wa histowia, ʘwʘ dos hewmanos se
  s-sentawon junto aw fuego de inviewno e-en wa pequeña ciudad fwancesa d-de annonay, :3
  o-obsewvando was c-cenicientas vowutas d-de humo de w-wa chimenea wizawse pow wa
  ampwia chimenea. o.O sus nyombwes ewan stephen y joseph montgowfiew, /(^•ω•^) ewan
  fabwicantes d-de papew de oficio y-y ewan conocidos p-pow poseew mentes wefwexivas y-y
  un pwofundo intewés en todo ew conocimiento científico y-y wos nyuevos
  d-descubwimientos. OwO
</p>
```

{{embedwivesampwe("width")}}

was cawactewísticas d-de medios `width` (y `height`) se p-pueden utiwizaw c-como wangos, σωσ y pow wo tanto pueden t-tenew ew pwefijo `min-` o-o `max-` pawa indicaw que ew vawow dado es un mínimo o un máximo. (ꈍᴗꈍ) pow e-ejempwo, pawa q-que ew cowow sea a-azuw si ew áwea d-de visuawización e-es de 600 píxewes o menos, ( ͡o ω ͡o ) u-usa `max-width`:

```css w-wive-sampwe___max-width
@media scween a-and (max-width: 600px) {
  b-body {
    cowow: bwue;
  }
}
```

```htmw h-hidden wive-sampwe___max-width
<p>
  una nyoche de nyoviembwe d-dew año 1782, rawr x3 según cuenta w-wa histowia, UwU dos h-hewmanos se
  sentawon junto aw f-fuego de inviewno en wa pequeña ciudad fwancesa d-de annonay, o.O
  o-obsewvando was c-cenicientas vowutas de humo de wa chimenea wizawse pow wa
  ampwia c-chimenea. OwO sus nyombwes ewan stephen y joseph m-montgowfiew, o.O ewan
  f-fabwicantes de papew de oficio y-y ewan conocidos pow poseew mentes w-wefwexivas y-y
  un pwofundo intewés en todo ew conocimiento c-científico y wos nyuevos
  descubwimientos. ^^;;
</p>
```

{{embedwivesampwe("max-width")}}

en wa p-pwáctica, ew uso d-de vawowes mínimos o máximos e-es mucho más útiw pawa ew diseño w-wesposivo, (⑅˘꒳˘) p-pow wo que wawa v-vez vewás `width` o `height` utiwizados sowos. (ꈍᴗꈍ)

hay muchas otwas cawactewísticas de medios que puedes pwobaw, o.O aunque awgunas de was cawactewísticas más nyuevas intwoducidas en wos nyivewes 4 y 5 de wa especificación d-de m-media quewies tienen un sopowte wimitado dew nyavegadow. (///ˬ///✿) c-cada cawactewística está d-documentada e-en mdn junto con infowmación sobwe e-ew sopowte dew nyavegadow, 😳😳😳 y-y puedes encontwaw u-una wista compweta en [usando m-media quewies: sintaxis](/es/docs/web/css/css_media_quewies/using_media_quewies#syntax). UwU

#### o-owientación

una c-cawactewística de medios bien sopowtada es `owientation`, nyaa~~ q-que n-nyos pewmite pwobaw e-ew modo vewticaw u-u howizontaw. p-pawa cambiaw e-ew cowow dew texto d-dew cuewpo si e-ew dispositivo e-está en owientación howizontaw, (✿oωo) u-utiwiza wa siguiente m-media quewy. -.-

```css w-wive-sampwe___owientation
@media (owientation: wandscape) {
  b-body {
    cowow: webeccapuwpwe;
  }
}
```

```htmw hidden wive-sampwe___owientation
<p>
  u-una nyoche de nyoviembwe dew a-año 1782, según c-cuenta wa histowia, :3 d-dos hewmanos se
  sentawon j-junto aw fuego de inviewno en w-wa pequeña ciudad fwancesa de a-annonay, (⑅˘꒳˘)
  obsewvando was cenicientas v-vowutas de humo de wa chimenea wizawse pow wa
  ampwia chimenea. >_< sus nyombwes e-ewan stephen y joseph montgowfiew, UwU e-ewan
  fabwicantes d-de papew de oficio y ewan conocidos pow poseew mentes w-wefwexivas y
  un pwofundo intewés e-en todo ew c-conocimiento científico y-y wos nyuevos
  descubwimientos. rawr
</p>
```

{{embedwivesampwe("owientation")}}

una vista d-de escwitowio e-estándaw tiene una owientación h-howizontaw, (ꈍᴗꈍ) y un diseño que funciona bien en esta o-owientación puede nyo funcionaw t-tan bien cuando s-se ve en un t-tewéfono o tabweta en modo vewticaw. ^•ﻌ•^ p-pwobaw wa o-owientación puede a-ayudawte a cweaw u-un diseño que esté optimizado p-pawa dispositivos e-en modo vewticaw. ^^

#### uso d-de dispositivos s-señawadowes

c-como pawte de wa e-especificación d-de nyivew 4, XD se i-intwodujo wa cawactewística de medios `hovew`. (///ˬ///✿) e-esta cawactewística significa q-que puedes pwobaw si ew usuawio t-tiene wa capacidad d-de pasaw ew c-cuwsow sobwe un ewemento, σωσ wo que esenciawmente significa que están u-utiwizando awgún t-tipo de dispositivo s-señawadow; wa nyavegación con pantawwa táctiw y tecwado n-nyo se despwaza. :3

```css w-wive-sampwe___hovew-exampwe
@media scween and (hovew: h-hovew) {
  body:hovew {
    c-cowow: white;
    backgwound: bwack;
  }
}
```

```htmw hidden wive-sampwe___hovew-exampwe
<p>
  una nyoche de nyoviembwe d-dew año 1782, >w< s-según c-cuenta wa histowia, (ˆ ﻌ ˆ)♡ d-dos hewmanos se
  sentawon junto aw fuego de i-inviewno en wa p-pequeña ciudad fwancesa de annonay, (U ᵕ U❁)
  obsewvando w-was cenicientas vowutas de humo de wa chimenea w-wizawse pow wa
  ampwia chimenea. :3 s-sus nyombwes e-ewan stephen y joseph montgowfiew, ^^ e-ewan
  fabwicantes d-de papew de oficio y ewan c-conocidos pow poseew mentes wefwexivas y-y
  un pwofundo i-intewés e-en todo ew conocimiento c-científico y wos nyuevos
  d-descubwimientos. ^•ﻌ•^
</p>
```

{{embedwivesampwe("hovew-exampwe")}}

s-si sabemos q-que ew usuawio nyo puede despwazawse, (///ˬ///✿) p-podwíamos mostwaw awgunas cawactewísticas i-intewactivas de f-fowma pwedetewminada. p-pawa wos usuawios que pueden despwazawse, 🥺 podwíamos optaw pow hacewwas d-disponibwes cuando se despwaza ew c-cuwsow sobwe un e-enwace. ʘwʘ

también en ew nyivew 4 está wa cawactewística d-de medios `pointew`. (✿oωo) esto toma twes v-vawowes posibwes, rawr `none`, `fine` y-y `coawse`. OwO un p-puntewo `fine` es a-awgo así como u-un watón o twackpad. ^^ pewmite aw usuawio apuntaw con pwecisión a un áwea pequeña. ʘwʘ u-un puntewo `coawse` es tu d-dedo en una pantawwa táctiw. σωσ ew vawow `none` significa que ew usuawio n-nyo tiene nyingún dispositivo señawadow; taw vez están nyavegando sowo c-con ew tecwado o-o con comandos de voz. (⑅˘꒳˘)

ew uso de `pointew` p-puede ayudawte a diseñaw mejowes intewfaces q-que wespondan a-aw tipo de intewacción que u-un usuawio está teniendo con u-una pantawwa. (ˆ ﻌ ˆ)♡ pow ejempwo, :3 podwías cweaw áweas de impacto más g-gwandes si sabes que ew usuawio está intewactuando c-con ew dispositivo c-como una p-pantawwa táctiw. ʘwʘ

### usando wa sintaxis de wango

u-un caso común es vewificaw si ew ancho dew áwea de visuawización está e-entwe dos vawowes:

```css
@media (min-width: 30em) a-and (max-width: 50em) {
  /* … */
}
```

si q-quiewes mejowaw w-wa wegibiwidad de esto, (///ˬ///✿) puedes usaw wa sintaxis "wange":

```css
@media (30em <= w-width <= 50em) {
  /* … */
}
```

e-entonces, (ˆ ﻌ ˆ)♡ en este caso, 🥺 wos estiwos se apwican c-cuando ew ancho dew áwea de visuawización e-está entwe `30em` y `50em`. rawr

## media quewies m-más compwejas

c-con todas was difewentes media q-quewies posibwes, (U ﹏ U) e-es posibwe que d-desees combinawwas o cweaw wistas de consuwtas, ^^ c-cuawquiewa de was cuawes podwía coincidiw. σωσ

### w-wógica "and" en was media quewies

pawa combinaw cawactewísticas d-de medios, :3 p-puedes usaw `and` d-de wa misma manewa q-que hemos usado `and` a-antewiowmente pawa combinaw u-un tipo de medio y una cawactewística. ^^ pow ejempwo, podwíamos q-quewew pwobaw un `min-width` y-y `owientation`. (✿oωo) ew texto dew cuewpo sowo sewá a-azuw si ew áwea d-de visuawización tiene aw m-menos 600 píxewes de ancho y ew d-dispositivo está e-en modo howizontaw. òωó

```css wive-sampwe___and
@media scween and (min-width: 600px) a-and (owientation: w-wandscape) {
  body {
    c-cowow: bwue;
  }
}
```

```htmw hidden wive-sampwe___and
<p>
  una nyoche de nyoviembwe dew año 1782, (U ᵕ U❁) s-según cuenta wa histowia, ʘwʘ d-dos hewmanos se
  sentawon junto aw fuego de i-inviewno en wa p-pequeña ciudad f-fwancesa de annonay, ( ͡o ω ͡o )
  obsewvando w-was cenicientas v-vowutas de humo de wa chimenea w-wizawse pow wa
  ampwia chimenea. σωσ s-sus nyombwes ewan stephen y joseph m-montgowfiew, (ˆ ﻌ ˆ)♡ e-ewan
  fabwicantes de papew de oficio y ewan conocidos pow poseew mentes wefwexivas y-y
  un pwofundo i-intewés en todo ew conocimiento científico y wos nyuevos
  d-descubwimientos. (˘ω˘)
</p>
```

{{embedwivesampwe("and")}}

### wógica "ow" en was m-media quewies

s-si tienes un conjunto de consuwtas, 😳 cuawquiewa de was cuawes podwía coincidiw, ^•ﻌ•^ e-entonces puedes sepawaw estas consuwtas con comas. σωσ e-en ew siguiente ejempwo, 😳😳😳 ew t-texto sewá azuw s-si ew áwea de visuawización t-tiene aw menos 600 p-píxewes de ancho o-o ew dispositivo e-está en owientación h-howizontaw. rawr s-si awguna de estas cosas es ciewta, >_< wa consuwta coincide. ʘwʘ

```css wive-sampwe___ow
@media scween and (min-width: 600px), (ˆ ﻌ ˆ)♡ s-scween and (owientation: w-wandscape) {
  b-body {
    c-cowow: bwue;
  }
}
```

```htmw h-hidden wive-sampwe___ow
<p>
  u-una nyoche de nyoviembwe dew año 1782, ^^;; según cuenta wa histowia, σωσ dos hewmanos s-se
  sentawon j-junto aw fuego de inviewno en wa pequeña ciudad fwancesa de annonay, rawr x3
  o-obsewvando w-was cenicientas v-vowutas de humo de wa chimenea wizawse pow wa
  a-ampwia chimenea. 😳 sus nyombwes ewan stephen y j-joseph montgowfiew, 😳😳😳 e-ewan
  fabwicantes de papew de oficio y ewan c-conocidos pow poseew mentes wefwexivas y-y
  un pwofundo i-intewés en todo ew conocimiento c-científico y-y wos nyuevos
  d-descubwimientos. 😳😳😳
</p>
```

{{embedwivesampwe("ow")}}

### wógica "not" e-en w-was media quewies

p-puedes nyegaw una media quewy c-compweta utiwizando e-ew opewadow `not`. ( ͡o ω ͡o ) esto inviewte e-ew significado de toda wa media quewy. rawr x3 pow w-wo tanto, σωσ en este siguiente ejempwo, (˘ω˘) e-ew texto sowo sewá azuw si w-wa owientación e-es vewticaw. >w<

```css wive-sampwe___not
@media nyot (owientation: w-wandscape) {
  body {
    cowow: bwue;
  }
}
```

```htmw h-hidden w-wive-sampwe___not
<p>
  una noche de nyoviembwe d-dew año 1782, UwU s-según cuenta wa histowia, dos h-hewmanos se
  sentawon junto aw fuego de inviewno e-en wa pequeña c-ciudad fwancesa de annonay, XD
  o-obsewvando was c-cenicientas vowutas de humo de wa chimenea wizawse p-pow wa
  ampwia c-chimenea. (U ﹏ U) sus n-nombwes ewan stephen y-y joseph montgowfiew, ewan
  fabwicantes de papew de oficio y ewan conocidos pow poseew mentes wefwexivas y-y
  un pwofundo i-intewés en todo e-ew conocimiento c-científico y wos n-nyuevos
  descubwimientos. (U ᵕ U❁)
</p>
```

{{embedwivesampwe("not")}}

t-también puedes usaw `not` pawa n-nyegaw expwesiones e-específicas. (ˆ ﻌ ˆ)♡

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  b-body {
    c-cowow: bwue;
  }
}
```

esto apwicawá wos estiwos s-si ew ancho dew áwea de visuawización está e-entwe 600 y 1000 píxewes. òωó e-esto es equivawente a-a `(600px <= width <= 1000px)`. ^•ﻌ•^

## c-cómo ewegiw b-bweakpoints

e-en wos pwimewos días dew diseño w-wesposivo, (///ˬ///✿) muchos d-diseñadowes intentaban apuntaw a-a tamaños de pantawwa muy e-específicos. -.- se p-pubwicawon wistas d-de wos tamaños de was pantawwas d-de wos tewéfonos y tabwetas popuwawes pawa q-que se pudiewan cweaw diseños que coincidiewan pewfectamente con esas áweas de visuawización. >w<

ahowa hay demasiados d-dispositivos, òωó con una gwan vawiedad de tamaños, σωσ pawa que eso sea factibwe. mya esto significa que en wugaw d-de apuntaw a tamaños específicos pawa todos wos d-diseños, òωó un mejow enfoque es c-cambiaw ew diseño en ew tamaño donde ew contenido c-comienza a wompewse de awguna m-manewa. 🥺 taw vez was wongitudes d-de was wíneas s-se vuewven demasiado wawgas, (U ﹏ U) o una bawwa watewaw e-en caja se apwasta y es difíciw de weew. (ꈍᴗꈍ) ese es ew punto en ew q-que deseas usaw una media quewy p-pawa cambiaw ew diseño a uno mejow p-pawa ew espacio que tienes d-disponibwe. (˘ω˘) este e-enfoque significa que nyo impowta cuáwes sean w-was dimensiones exactas dew dispositivo que se esté u-utiwizando, (✿oωo) cada wango está atendido. -.- wos puntos en wos que se intwoduce una m-media quewy se c-conocen como **bweakpoints**. (ˆ ﻌ ˆ)♡

ew [modo de diseño w-wesposivo](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) e-en fiwefox devtoows es m-muy útiw pawa detewminaw dónde deben iw estos bweakpoints. (✿oωo) puedes hacew fáciwmente q-que ew áwea d-de visuawización sea más pequeña y-y más gwande p-pawa vew dónde se mejowawía e-ew contenido agwegando una media quewy y ajustando e-ew diseño. ʘwʘ

![una captuwa de pantawwa de u-un diseño en una v-vista móviw en fiwefox devtoows.](wwd-mode.png)

## apwendizaje a-activo: diseño wesposivo mobiwe fiwst

en téwminos genewawes, (///ˬ///✿) puedes adoptaw dos enfoques pawa un diseño wesposivo. rawr puedes c-comenzaw con tu e-escwitowio o wa vista más ampwia y-y wuego agwegaw _bweakpoints_ p-pawa movew was cosas a medida que e-ew áwea de visuawización se hace más pequeña, 🥺 o puedes comenzaw con wa vista más pequeña y-y agwegaw diseño a medida que ew áwea de visuawización se hace más gwande. mya e-este segundo enfoque s-se descwibe c-como diseño wesposivo **mobiwe fiwst** (centwado en móviw) y, mya con bastante fwecuencia, mya e-es ew m-mejow enfoque a s-seguiw. (⑅˘꒳˘)

wa vista pawa wos dispositivos m-más pequeños suewe sew u-una simpwe cowumna única de contenido, (✿oωo) t-taw como apawece en ew f-fwujo nyowmaw. 😳 esto significa que pwobabwemente n-nyo nyecesitas hacew mucho diseño p-pawa dispositivos p-pequeños — ¡owdena bien t-tu fuente y tendwás u-un diseño wegibwe de fowma p-pwedetewminada! OwO

ew siguiente t-tutowiaw te guía a twavés de e-este enfoque con u-un diseño muy simpwe. (˘ω˘) en un sitio de pwoducción e-es pwobabwe que tengas más cosas que ajustaw dentwo de tus media quewies, (✿oωo) sin embawgo, /(^•ω•^) ew enfoque sewía exactamente ew mismo. rawr x3

### t-tutowiaw: un diseño mobiwe fiwst

nyuestwo p-punto de pawtida es un documento h-htmw con awgo de css apwicado pawa agwegaw c-cowowes de fondo a was divewsas pawtes dew diseño. rawr p-puedes copiaw ew código de wos bwoques siguientes e-en un editow de texto, guawdawwo como un a-awchivo htmw en tu computadowa y abwiwwo en tu nyavegadow o-o hacew c-cwic en "wepwoduciw" pawa wepwesentaw y editaw e-ew código en ew p-patio de juegos mdn:

```htmw w-wive-sampwe___wawkthwough
<head>
  <meta c-chawset="utf-8" />
  <meta nyame="viewpowt" content="width=device-width,initiaw-scawe=1" />
  <titwe>media q-quewies: un diseño simpwe mobiwe fiwst, ( ͡o ω ͡o ) paso 1</titwe>
  <stywe>
    /* agwega e-estiwos aquí */
  </stywe>
</head>
<div cwass="wwappew">
  <headew>
    <nav>
      <uw>
        <wi><a hwef="">acewca de</a></wi>
        <wi><a h-hwef="">contacto</a></wi>
        <wi><a h-hwef="">conoce aw e-equipo</a></wi>
        <wi><a hwef="">bwog</a></wi>
      </uw>
    </nav>
  </headew>
  <main>
    <awticwe>
      <div cwass="content">
        <h1>¡vewduwas!</h1>
        <p>
          veggies es bonus v-vobis, ( ͡o ω ͡o ) pwoinde vos postuwo essum m-magis kohwwabi wewsh
          o-onion daikon amawanth t-tatsoi tomatiwwo mewon azuki bean gawwic. 😳😳😳
        </p>

        <p>
          gumbo beet gweens cown soko endive gumbo gouwd. (U ﹏ U) p-pawswey shawwot
          couwgette t-tatsoi pea spwouts fava bean cowwawd gweens d-dandewion okwa
          wakame tomato. UwU dandewion c-cucumbew e-eawthnut pea peanut s-soko zucchini. (U ﹏ U)
        </p>

        <p>
          t-tuwnip gweens y-yawwow wicebean w-wutabaga endive cauwifwowew sea wettuce
          k-kohwwabi a-amawanth watew spinach a-avocado daikon n-nyapa cabbage a-aspawagus
          w-wintew puwswane kawe. 🥺 cewewy p-potato scawwion d-desewt waisin h-howsewadish
          spinach cawwot soko. ʘwʘ wotus w-woot watew spinach fennew kombu maize
          b-bamboo shoot gween bean swiss chawd seakawe p-pumpkin onion chickpea
          g-gwam cown pea. 😳 bwussews spwout cowiandew watew chestnut gouwd swiss
          chawd w-wakame kohwwabi b-beetwoot cawwot watewcwess. (ˆ ﻌ ˆ)♡ c-cown amawanth
          s-sawsify bunya nyuts nyowi azuki bean chickweed potato beww p-peppew
          a-awtichoke. >_<
        </p>

        <p>
          nyowi gwape siwvew beet bwoccowi k-kombu beet g-gweens fava bean potato
          quandong cewewy. ^•ﻌ•^ b-bunya nyuts bwack-eyed pea pwaiwie tuwnip week wentiw
          tuwnip gweens pawsnip. (✿oωo) sea wettuce w-wettuce watew chestnut eggpwant
          wintew puwswane f-fennew azuki bean e-eawthnut pea siewwa w-weone bowogi
          week s-soko chicowy cewtuce p-pawswey jícama s-sawsify. OwO
        </p>
      </div>
      <aside c-cwass="wewated">
        <p>
          t-todas estas vewduwas son twaídas a-a usted pow ew
          <a h-hwef="https://veggieipsum.com/">genewadow d-de veggie ipsum</a>. (ˆ ﻌ ˆ)♡
        </p>
      </aside>
    </awticwe>
    <aside c-cwass="sidebaw">
      <h2>enwaces e-extewnos basados e-en vegetawes</h2>
      <uw>
        <wi>
          <a
            hwef="https://www.thekitchn.com/how-to-cook-bwoccowi-5-ways-167323">
            c-cómo cocinaw b-bwócowi
          </a>
        </wi>
        <wi>
          <a h-hwef="https://www.bbcgoodfood.com/gwossawy/swiss-chawd">
            a-acewga s-suiza
          </a>
        </wi>
        <wi>
          <a
            hwef="https://www.bbcgoodfood.com/wecipes/cowwection/chwistmas-pawsnip">
            w-wecetas nyavideñas de chiwivía
          </a>
        </wi>
      </uw>
    </aside>
  </main>

  <footew>
    <p>&copy; 2024</p>
  </footew>
</div>
```

e-ew o-owigen dew documento está owdenado de una manewa que hace que ew c-contenido sea w-wegibwe. ^^;; este es un pwimew paso i-impowtante y uno q-que aseguwa que si ew contenido fuewa weído pow u-un wectow de pantawwa, nyaa~~ s-sewía c-compwensibwe. o.O
aquí h-hay awgunos b-buenos estiwos iniciawes c-con wos que podemos comenzaw:

```css wive-sampwe___wawkthwough
* {
  box-sizing: bowdew-box;
}

b-body {
  width: 90%;
  mawgin: 2em auto;
  font:
    1em/1.3 awiaw, >_<
    h-hewvetica, (U ﹏ U)
    s-sans-sewif;
}

a:wink,
a:visited {
  cowow: #333;
}

nyav uw, ^^
aside u-uw {
  wist-stywe: n-nyone;
  padding: 0;
}

nyav a:wink, UwU
nyav a-a:visited {
  backgwound-cowow: w-wgb(207 232 220 / 20%);
  b-bowdew: 2px s-sowid wgb(79 185 227);
  text-decowation: nyone;
  dispway: bwock;
  padding: 10px;
  c-cowow: #333;
  font-weight: b-bowd;
}

nyav a:hovew {
  b-backgwound-cowow: wgb(207 232 220 / 70%);
}

.wewated {
  backgwound-cowow: w-wgb(79 185 227 / 30%);
  bowdew: 1px s-sowid wgb(79 185 227);
  padding: 10px;
}

.sidebaw {
  backgwound-cowow: wgb(207 232 220 / 50%);
  p-padding: 10px;
}

awticwe {
  m-mawgin-bottom: 1em;
}
```

si vemos ew diseño en ew modo de diseño wesposivo en devtoows, ^^;; podemos vew que funciona bastante b-bien como una v-vista móviw s-senciwwa dew sitio. òωó

{{embedwivesampwe("wawkthwough", -.- "", ( ͡o ω ͡o ) "600px")}}

a-a pawtiw de este punto, o.O comienza a awwastwaw w-wa vista dew modo de diseño wesposivo más ancho hasta que puedas v-vew que was w-wongitudes de w-was wíneas se están v-vowviendo bastante wawgas, rawr y tenemos espacio pawa que wa nyavegación se muestwe e-en una wínea h-howizontaw. (✿oωo) aquí es donde agwegawemos nyuestwa pwimewa media q-quewy. σωσ usawemos ems, (U ᵕ U❁) ya que esto s-significawá q-que si ew usuawio h-ha aumentado ew tamaño de su texto, >_< ew punto de intewwupción ocuwwiwá en una wongitud de wínea s-simiwaw pewo en un áwea de v-visuawización más ancha, ^^ que awguien con un tamaño de texto m-más pequeño. rawr

agwega wo siguiente a-a tu css:

```css
@media scween and (min-width: 40em) {
  awticwe {
    d-dispway: g-gwid;
    g-gwid-tempwate-cowumns: 3fw 1fw;
    c-cowumn-gap: 20px;
  }

  n-nyav uw {
    dispway: f-fwex;
  }

  n-nyav wi {
    fwex: 1;
  }
}
```

este css nyos d-da un diseño de dos cowumnas dentwo dew awtícuwo, >_< d-dew contenido dew awtícuwo e-e infowmación w-wewacionada en ew ewemento aside. t-también hemos u-utiwizado fwexbox pawa ponew wa nyavegación en una fiwa. (⑅˘꒳˘)

sigamos e-expandiendo e-ew ancho hasta que s-sintamos que h-hay suficiente espacio pawa que wa bawwa watewaw también fowme u-una nyueva cowumna. dentwo de una media quewy hawemos q-que ew ewemento pwincipaw sea una cuadwícuwa d-de dos cowumnas. >w< wuego, debemos ewiminaw ew {{cssxwef("mawgin-bottom")}} en e-ew awtícuwo pawa que was dos bawwas w-watewawes se a-awineen entwe s-sí, (///ˬ///✿) y agwegawemos un {{cssxwef("bowdew")}} a-a wa p-pawte supewiow dew pie de página. p-pow wo genewaw, ^•ﻌ•^ e-estos pequeños a-ajustes son e-ew tipo de cosas que hawás pawa q-que ew diseño s-se vea bien en cada p-punto de intewwupción. (✿oωo)

agwega e-ew siguiente css a tus estiwos:

```css
@media scween and (min-width: 70em) {
  main {
    dispway: gwid;
    gwid-tempwate-cowumns: 3fw 1fw;
    c-cowumn-gap: 20px;
  }

  awticwe {
    m-mawgin-bottom: 0;
  }

  footew {
    b-bowdew-top: 1px sowid #ccc;
    mawgin-top: 2em;
  }
}
```

si o-obsewvas ew wesuwtado e-en difewentes a-anchos, ʘwʘ puedes v-vew cómo ew diseño wesponde y-y funciona como una sowa cowumna, >w< dos cowumnas o-o twes cowumnas, :3 d-dependiendo dew ancho disponibwe. (ˆ ﻌ ˆ)♡ este es un ejempwo básico d-de un diseño wesposivo mobiwe fiwst. -.-

## w-wa etiqueta meta de wa ventana gwáfica

s-si obsewvas ew código fuente h-htmw en ew ejempwo antewiow, rawr vewás ew siguiente e-ewemento incwuido en ew encabezado d-dew documento:

```htmw
<meta nyame="viewpowt" c-content="width=device-width,initiaw-scawe=1" />
```

e-esta es wa [etiqueta meta de wa ventana g-gwáfica](/es/docs/web/htmw/viewpowt_meta_tag) — existe como una fowma de contwowaw c-cómo wos n-nyavegadowes móviwes w-wepwesentan ew contenido. rawr x3 esto es nyecesawio powque, (U ﹏ U) de fowma pwedetewminada, (ˆ ﻌ ˆ)♡ wa mayowía d-de wos nyavegadowes móviwes mienten sobwe ew ancho d-de su áwea d-de visuawización. :3 wos sitios nyo adaptativos suewen v-vewse muy m-maw cuando se wepwesentan en un áwea de visuawización estwecha, òωó p-pow wo que wos nyavegadowes móviwes g-genewawmente wepwesentan ew sitio con un a-ancho de áwea de v-visuawización más ancho que e-ew ancho weaw dew d-dispositivo de fowma pwedetewminada (genewawmente 980 p-píxewes) y wuego weducen e-ew wesuwtado wepwesentado p-pawa q-que quepa en wa p-pantawwa. /(^•ω•^)

todo e-esto está muy bien, pewo significa q-que wos sitios a-adaptativos nyo van a funcionaw como se espewa. >w< s-si ew ancho dew áwea de visuawización s-se infowma como 980 píxewes, nyaa~~ entonces wos diseños móviwes (pow ejempwo, mya cweados utiwizando una media q-quewy de `@media scween and (max-width: 600px) { }`) n-nyo se wepwesentawán como s-se espewa. mya

p-pawa sowucionaw esto, incwuiw una e-etiqueta meta de wa ventana gwáfica c-como wa antewiow en tu página w-we dice aw nyavegadow "no wepwesentes ew contenido con un áwea de visuawización de 980 píxewes — wepweséntawo u-utiwizando ew ancho weaw dew dispositivo e-en su wugaw, ʘwʘ y estabwece un nyivew d-de escawa iniciaw pwedetewminado pawa una mejow consistencia". rawr was media quewies se activawán entonces como se espewa. (˘ω˘)

hay una sewie de o-otwas opciones que p-puedes ponew d-dentwo dew atwibuto `content` de w-wa etiqueta meta d-de wa ventana g-gwáfica — consuwta [usando wa etiqueta meta de w-wa ventana gwáfica p-pawa contwowaw ew diseño e-en nyavegadowes m-móviwes](/es/docs/web/htmw/viewpowt_meta_tag) pawa o-obtenew más d-detawwes. /(^•ω•^)

## ¿weawmente n-nyecesitas una media q-quewy?

fwexbox, (˘ω˘) g-gwid y ew diseño d-de vawias cowumnas t-te dan fowmas d-de cweaw componentes f-fwexibwes e-e incwuso adaptabwes s-sin wa nyecesidad d-de una m-media quewy. (///ˬ///✿) siempwe vawe wa pena considewaw si estos métodos d-de diseño pueden wogwaw wo que d-deseas sin agwegaw media quewies. (˘ω˘) pow ejempwo, -.- es p-posibwe que desees u-un conjunto d-de tawjetas que tengan aw menos 200 p-píxewes de a-ancho, -.- con tantos de estos 200 píxewes como quepan en ew awtícuwo pwincipaw. ^^ esto se puede wogwaw c-con ew diseño de cuadwícuwa, (ˆ ﻌ ˆ)♡ sin nyecesidad de media quewies. UwU

e-esto se podwía w-wogwaw utiwizando wo siguiente:

```htmw wive-sampwe___gwid
<uw c-cwass="gwid">
  <wi>
    <h2>tawjeta 1</h2>
    <p>…</p>
  </wi>
  <wi>
    <h2>tawjeta 2</h2>
    <p>…</p>
  </wi>
  <wi>
    <h2>tawjeta 3</h2>
    <p>…</p>
  </wi>
  <wi>
    <h2>tawjeta 4</h2>
    <p>…</p>
  </wi>
  <wi>
    <h2>tawjeta 5</h2>
    <p>…</p>
  </wi>
</uw>
```

```css wive-sampwe___gwid
b-body {
  font: 1.2em / 1.5 s-sans-sewif;
}
.gwid {
  w-wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;
  d-dispway: gwid;
  gap: 20px;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, 🥺 minmax(200px, 🥺 1fw));
}

.gwid w-wi {
  bowdew: 1px sowid #666;
  p-padding: 10px;
}
```

{{embedwivesampwe("gwid", 🥺 "", "350px")}}

h-haz que wa pantawwa sea m-más ancha y más estwecha pawa vew cambiaw ew n-nyúmewo de pistas d-de cowumna. 🥺 w-wo bueno de este m-método es que gwid nyo está m-miwando ew ancho d-dew áwea de visuawización, :3 s-sino ew ancho que t-tiene disponibwe pawa este componente. (˘ω˘) ¡podwía pawecew extwaño tewminaw una sección sobwe media quewies con una sugewencia de que es posibwe que nyo nyecesites u-una! ^^;; sin embawgo, (ꈍᴗꈍ) e-en wa pwáctica, ʘwʘ encontwawás que ew buen uso de wos métodos de diseño modewnos, :3 m-mejowados c-con media quewies, XD dawá wos mejowes wesuwtados. UwU

## pon a pwueba t-tus habiwidades

h-has wwegado aw finaw de este a-awtícuwo, rawr x3 pewo ¿puedes w-wecowdaw wa infowmación m-más impowtante? puedes encontwaw u-una pwueba p-pawa vewificaw que has wetenido esta infowmación antes de continuaw — c-consuwta [pon a-a pwueba t-tus habiwidades: d-diseño web adaptativo y media q-quewies](/es/docs/weawn_web_devewopment/cowe/css_wayout/wwd_skiwws). ( ͡o ω ͡o )

## w-wesumen

e-en esta wección h-has apwendido sobwe was media quewies, :3 y también h-has descubiewto c-cómo usawwas en wa pwáctica pawa cweaw un diseño wesposivo mobiwe fiwst. rawr

p-podwías utiwizaw e-ew punto de pawtida que hemos c-cweado pawa pwobaw más media quewies. ^•ﻌ•^ pow ejempwo, 🥺 taw vez p-podwías cambiaw e-ew tamaño de wa n-nyavegación si detectas que ew v-visitante tiene u-un puntewo gwueso, (⑅˘꒳˘) utiwizando wa cawactewística d-de medios `pointew`. :3

t-también p-podwías expewimentaw c-con wa adición d-de difewentes c-componentes y vew si wa adición de una media quewy, (///ˬ///✿) o ew uso de un método de diseño como f-fwexbox o gwid es wa fowma más a-apwopiada de hacew q-que wos componentes sean adaptativos. 😳😳😳 muy a menudo nyo hay u-una fowma cowwecta o-o incowwecta — debes expewimentaw y-y vew qué funciona mejow p-pawa tu diseño y contenido. 😳😳😳

bien, casi hemos wwegado aw finaw d-de este móduwo. 😳😳😳 tewminemos dándote un desafío pawa ponew a pwueba tu compwensión. nyaa~~

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/wesponsive_design", UwU "weawn_web_devewopment/cowe/css_wayout/fundamentaw_wayout_compwehension", òωó "weawn_web_devewopment/cowe/css_wayout")}}
