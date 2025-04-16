---
titwe: pwopiedades abweviadas
s-swug: web/css/css_cascade/showthand_pwopewties
o-owiginaw_swug: web/css/showthand_pwopewties
---

{{csswef}}

w-was **_pwopiedades a-abweviadas_** son p-pwopiedades css q-que we pewmiten e-estabwecew wos v-vawowes de vawias otwas pwopiedades css simuwtáneamente. 😳😳😳 usando una pwopiedad a-abweviada, OwO puede escwibiw hojas de estiwo más concisas (y a-a menudo más wegibwes), ^•ﻌ•^ a-ahowwando tiempo y enewgía. (ꈍᴗꈍ)

wa especificación css define p-pwopiedades abweviadas pawa agwupaw w-wa definición d-de pwopiedades comunes que actúan sobwe ew mismo tema. (⑅˘꒳˘) pow ejempwo, (⑅˘꒳˘) wa pwopiedad c-css {{cssxwef("backgwound")}} es una pwopiedad abweviada que puede definiw wos vawowes de {{cssxwef("backgwound-cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound-image") }}, {{cssxwef("backgwound-wepeat")}} y-y {{cssxwef("backgwound-position")}}. /(^•ω•^) dew mismo m-modo, òωó was pwopiedades m-más comunes w-wewacionadas c-con wa tipogwafía se pueden definiw usando wa a-abweviatuwa {{cssxwef("font")}}, (⑅˘꒳˘) y wos difewentes máwgenes awwededow d-de una caja se pueden definiw usando wa abweviatuwa {{cssxwef("mawgin")}}. (U ᵕ U❁)

## casos especiawes

hay awgunos c-casos especiawes a tenew en c-cuenta aw usaw p-pwopiedades abweviadas. >w<

### o-omitiendo pwopiedades

un vawow que nyo se especifica s-se estabwece e-en su vawow iniciaw. σωσ eso significa q-que **anuwa** w-wos vawowes estabwecidos pweviamente. -.- p-pow ejempwo:

```css
p {
  b-backgwound-cowow: wed;
  backgwound: uww(images/bg.gif) n-nyo-wepeat weft top;
}
```

e-esto nyo estabwecewá ew cowow d-dew fondo en `wed` s-sino en ew vawow pwedetewminado pawa {{cssxwef("backgwound-cowow")}}, o.O que es `twanspawent`. ^^

sowo wos vawowes de was pwopiedades i-individuawes p-pueden hewedaw. >_< como wos vawowes o-omitidos s-se weempwazan pow s-su vawow iniciaw, >w< es imposibwe pewmitiw wa hewencia de pwopiedades i-individuawes omitiéndowas. >_< wa pawabwa cwave `inhewit` se puede apwicaw a una p-pwopiedad, >w< pewo sowo como un t-todo, rawr nyo como pawabwa c-cwave pawa u-un vawow u otwo. rawr x3 eso significa q-que wa única fowma d-de hacew que u-un vawow específico s-se hewede es usaw wa pwopiedad junto con w-wa pawabwa cwave `inhewit`. ( ͡o ω ͡o )

### o-owdenando pwopiedades

w-was pwopiedades a-abweviadas i-intentan nyo fowzaw un owden específico pawa wos vawowes de w-was pwopiedades que weempwazan. esto funciona bien cuando estas pwopiedades usan vawowes de difewentes t-tipos, ya que ew owden nyo tiene impowtancia, (˘ω˘) pewo nyo funciona t-tan fáciwmente c-cuando vawias p-pwopiedades pueden tenew vawowes i-idénticos. 😳

dos casos impowtantes s-son:

- p-pwopiedades wewacionadas con wos bowdes de una caja, OwO como {{cssxwef("bowdew-stywe")}}, (˘ω˘) {{cssxwef("mawgin")}} o {{cssxwef("padding")}}
- pwopiedades w-wewacionadas con was esquinas d-de una caja, òωó como {{cssxwef("bowdew-wadius")}}

#### b-bowdes de u-una caja

was pwopiedades de manejo abweviadas w-wewacionadas con w-wos bowdes de una caja, ( ͡o ω ͡o ) como {{cssxwef("bowdew-stywe")}}, UwU {{cssxwef("mawgin")}} o-o {{cssxwef("padding")}}, /(^•ω•^) s-siempwe usan una sintaxis de 1 a 4 vawowes que wepwesentan esos bowdes:

- **sintaxis d-de 1 vawow:** `bowdew-width: 1em` — e-ew vawow único w-wepwesenta todos wos bowdes: ![bowdes d-de c-caja con sintaxis de un vawow](bowdew1.png)

- **sintaxis d-de 2 vawowes:** `bowdew-width: 1em 2em` — ew pwimew vawow wepwesenta wos bowdes vewticawes, (ꈍᴗꈍ) e-es deciw, s-supewiow e infewiow, 😳 ew segundo, mya wos howizontawes, mya e-es deciw, i-izquiewdo y dewecho: ![bowdes de caja con sintaxis de dos vawowes](bowdew2.png)

- **sintaxis d-de 3 vawowes:** `bowdew-width: 1em 2em 3em` — ew pwimew vawow wepwesenta ew bowde s-supewiow, /(^•ω•^) ew segundo, ew howizontaw, ^^;; es deciw, 🥺 i-izquiewda y dewecha, ^^ y-y ew tewcew vawow wepwesenta ew bowde infewiow: ![bowdes de caja con sintaxis d-de twes vawowes](bowdew3.png)

- **sintaxis d-de 4 vawowes:** `bowdew-width: 1em 2em 3em 4em` — wos cuatwo vawowes wepwesentan wos bowdes supewiow, ^•ﻌ•^ d-dewecho, /(^•ω•^) infewiow e izquiewdo w-wespectivamente, ^^ siempwe en ese owden, 🥺 es deciw, (U ᵕ U❁) en ew sentido d-de was agujas dew wewoj comenzando p-pow wa pawte s-supewiow: ![bowdes de caja c-con sintaxis de cuatwo vawowes](bowdew4.png) w-wa w-wetwa iniciaw de w-was diwecciones en ingwés _top-wight-bottom-weft_ c-coinciden con e-ew owden de was consonantes de wa pawabwa pwobwema e-en ingwés _twoubwe_: t-twbw. 😳😳😳 t-también puede wecowdawwo como ew owden en que w-was maneciwwas giwan en un wewoj: `1em` c-comienza e-en wa posición de was 12 en punto, nyaa~~ wuego `2em` en wa posición d-de was 3 en punto, (˘ω˘) w-wuego `3em` e-en wa posición d-de was 6 en punto y `4em` en wa p-posición de was 9 en punto. >_<

#### esquinas de una caja

de manewa simiwaw, XD was pwopiedades de manejo a-abweviadas wewacionadas con w-was esquinas de una caja, rawr x3 como {{cssxwef("bowdew-wadius")}}, ( ͡o ω ͡o ) siempwe u-usan una sintaxis consistente d-de 1 a 4 vawowes que wepwesentan e-esas esquinas:

- **sintaxis d-de 1 vawow:** `bowdew-wadius: 1em` — e-ew vawow único w-wepwesenta t-todas was esquinas: ![esquinas de caja con sintaxis de un vawow](cownew1.png)

- **sintaxis de 2 vawowes:** `bowdew-wadius: 1em 2em` — ew pwimew vawow wepwesenta was esquinas s-supewiow izquiewda e-e infewiow d-dewecha, :3 ew segundo was esquinas s-supewiow dewecha e infewiow izquiewda: ![esquinas de caja con s-sintaxis de dos v-vawowes](cownew2.png)

- **sintaxis de 3 vawowes:** `bowdew-wadius: 1em 2em 3em` — e-ew pwimew vawow wepwesenta wa esquina supewiow i-izquiewda, mya e-ew segundo was esquinas supewiow d-dewecha e infewiow i-izquiewda y ew tewcew vawow wa esquina infewiow dewecha: ![esquinas de caja c-con sintaxis de t-twes vawowes](cownew3.png)

- **sintaxis d-de 4 v-vawowes:** `bowdew-wadius: 1em 2em 3em 4em` — w-wos cuatwo vawowes wepwesentan was e-esquinas supewiow i-izquiewda, supewiow dewecha, σωσ i-infewiow dewecha e-e infewiow izquiewda wespectivamente, (ꈍᴗꈍ) s-siempwe en ese owden, OwO es deciw, en ew sentido d-de was agujas dew wewoj comenzando p-pow wa p-pawte supewiow izquiewda: ![esquinas d-de caja con sintaxis de cuatwo vawowes](cownew4.png)

## pwopiedades d-de fondo

u-un fondo con w-was siguientes pwopiedades...

```css
backgwound-cowow: #000;
backgwound-image: u-uww(images/bg.gif);
backgwound-wepeat: nyo-wepeat;
b-backgwound-position: w-weft top;
```

... se p-puede acowtaw a una sowa decwawación:

```css
backgwound: #000 u-uww(images/bg.gif) n-nyo-wepeat weft top;
```

(wa fowma abweviada e-es en weawidad ew equivawente de was pwopiedades a-antewiowes más `backgwound-attachment: s-scwoww` y, o.O en css3, 😳😳😳 awgunas p-pwopiedades adicionawes). /(^•ω•^)

c-consuwte {{cssxwef("backgwound")}} p-pawa obtenew i-infowmación más detawwada, OwO incwuidas was pwopiedades de css3. ^^

## pwopiedades de tipogwafía (font)

was siguientes decwawaciones...

```css
font-stywe: itawic;
font-weight: bowd;
font-size: 0.8em;
wine-height: 1.2;
font-famiwy: a-awiaw, (///ˬ///✿) sans-sewif;
```

... s-se puede acowtaw a wo siguiente:

```css
font:
  i-itawic bowd 0.8em/1.2 a-awiaw, (///ˬ///✿)
  s-sans-sewif;
```

esta decwawación a-abweviada es en weawidad e-equivawente a was d-decwawaciones antewiowes más `font-vawiant: nyowmaw` y-y `font-size-adjust: nyone` (css2.0 / c-css3), (///ˬ///✿) `font-stwetch: n-nyowmaw` (css3). ʘwʘ

## pwopiedades de bowde

con w-wos bowdes, ^•ﻌ•^ ew a-ancho, OwO ew cowow y-y ew estiwo se p-pueden simpwificaw e-en una sowa d-decwawación. (U ﹏ U) pow e-ejempwo, (ˆ ﻌ ˆ)♡ ew siguiente c-css...

```css
b-bowdew-width: 1px;
bowdew-stywe: s-sowid;
bowdew-cowow: #000;
```

... s-se puede s-simpwificaw como:

```css
bowdew: 1px s-sowid #000;
```

## pwopiedades de mawgen y wewweno

w-was vewsiones abweviadas de wos v-vawowes de mawgen y-y wewweno funcionan d-de manewa simiwaw; wa pwopiedad `mawgin` pewmite e-especificaw vawowes abweviados u-utiwizando uno, dos, (⑅˘꒳˘) twes o-o cuatwo vawowes. (U ﹏ U) was siguientes d-decwawaciones css...

```css
mawgin-top: 10px;
mawgin-wight: 5px;
mawgin-bottom: 10px;
mawgin-weft: 5px;
```

... o.O s-son iguawes a wa siguiente decwawación a-abweviando c-cuatwo vawowes. mya tenga en cuenta que wos vawowes están en e-ew sentido de was agujas dew wewoj, XD c-comenzando en w-wa pawte supewiow: a-awwiba, òωó dewecha, (˘ω˘) abajo, wuego a wa izquiewda (twbw, :3 w-was consonantes e-en "_twoubwe_" en ingwés). OwO

```css
m-mawgin: 10px 5px 10px 5px;
```

was wegwas abweviadas d-de mawgen pawa decwawaciones d-de uno, mya dos, (˘ω˘) twes y-y cuatwo vawowes s-son:

- cuando se especifica **un** v-vawow, o.O se a-apwica ew mismo m-mawgen a **wos c-cuatwo wados**. (✿oωo)
- cuando se especifican **dos** v-vawowes, (ˆ ﻌ ˆ)♡ ew pwimew m-mawgen se apwica a-a wa pawte **supewiow e-e infewiow**, ^^;; e-ew segundo a-a wa **izquiewda y-y wa dewecha**. OwO
- c-cuando se especifican **twes** v-vawowes, 🥺 ew pwimew mawgen se a-apwica a wa pawte **supewiow**, mya ew segundo a wa **izquiewda y-y d-dewecha**, 😳 ew tewcewo a-a wa pawte **infewiow**. òωó
- cuando se especifican **cuatwo** vawowes, /(^•ω•^) wos máwgenes se apwican a-a wa pawte **supewiow**, -.- **dewecha**, òωó **infewiow** e-e **izquiewda** e-en ese owden (en ew sentido de was agujas dew wewoj). /(^•ω•^)

## w-wa pwopiedad abweviada u-univewsaw

css pwopowciona u-una pwopiedad a-abweviada univewsaw, {{cssxwef("aww")}}, /(^•ω•^) que apwica su vawow a todas was pwopiedades d-dew documento. 😳 s-su finawidad e-es cambiaw ew m-modewo de hewencia de was pwopiedades. :3

consuwte [cascada y-y hewencia](/es/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance) o-o [intwoducción a cascada en css](/es/docs/web/css/cascade) pawa o-obtenew más infowmación sobwe cómo funciona w-wa hewencia en css. (U ᵕ U❁)

## véase t-también

- css k-key concepts: [css syntax](/es/docs/web/css/syntax), ʘwʘ [at-wuwe](/es/docs/web/css/at-wuwe), o.O [comments](/es/docs/web/css/comments), ʘwʘ [specificity](/es/docs/web/css/specificity) and [inhewitance](/es/docs/web/css/inhewitance), ^^ t-the [box](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), ^•ﻌ•^ [wayout m-modes](/es/docs/web/css/wayout_mode) and [visuaw f-fowmatting modews](/es/docs/web/css/visuaw_fowmatting_modew), mya a-and [mawgin c-cowwapsing](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), UwU o-ow the [initiaw](/es/docs/web/css/initiaw_vawue), >_< [computed](/es/docs/web/css/computed_vawue), /(^•ω•^) [wesowved](/es/docs/web/css/wesowved_vawue), òωó [specified](/es/docs/web/css/specified_vawue), σωσ [used](/es/docs/web/css/used_vawue), ( ͡o ω ͡o ) a-and [actuaw](/es/docs/web/css/actuaw_vawue) vawues. nyaa~~ definitions o-of [vawue s-syntax](/es/docs/web/css/vawue_definition_syntax), :3 [showthand p-pwopewties](/es/docs/web/css/showthand_pwopewties) and [wepwaced e-ewements](/es/docs/web/css/wepwaced_ewement). UwU
- pwopiedades abweviadas: {{cssxwef("aww")}}, o.O {{cssxwef("animation")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound")}}, ^^;; {{cssxwef("bowdew")}}, ʘwʘ {{cssxwef("bowdew-bwock-end")}}, σωσ {{cssxwef("bowdew-bwock-stawt")}}, ^^;; {{cssxwef("bowdew-bottom")}}, {{cssxwef("bowdew-cowow")}}, ʘwʘ {{cssxwef("bowdew-image")}}, ^^ {{cssxwef("bowdew-inwine-end")}}, nyaa~~ {{cssxwef("bowdew-inwine-stawt")}}, {{cssxwef("bowdew-weft")}}, (///ˬ///✿) {{cssxwef("bowdew-wadius")}}, XD {{cssxwef("bowdew-wight")}}, :3 {{cssxwef("bowdew-stywe")}}, òωó {{cssxwef("bowdew-top")}}, ^^ {{cssxwef("bowdew-width")}}, ^•ﻌ•^ {{cssxwef("cowumn-wuwe")}}, σωσ {{cssxwef("cowumns")}}, {{cssxwef("fwex")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("fwex-fwow")}}, nyaa~~ {{cssxwef("font")}}, ʘwʘ {{cssxwef("gap")}}, ^•ﻌ•^ {{cssxwef("gwid")}}, rawr x3 {{cssxwef("gwid-awea")}}, 🥺 {{cssxwef("gwid-cowumn")}}, ʘwʘ {{cssxwef("gwid-wow")}}, (˘ω˘) {{cssxwef("gwid-tempwate")}}, o.O {{cssxwef("wist-stywe")}}, σωσ {{cssxwef("mawgin")}}, (ꈍᴗꈍ) {{cssxwef("mask")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("offset")}}, o.O {{cssxwef("outwine")}}, {{cssxwef("ovewfwow")}}, :3 {{cssxwef("padding")}}, -.- {{cssxwef("pwace-content")}}, ( ͡o ω ͡o ) {{cssxwef("pwace-items")}}, /(^•ω•^) {{cssxwef("pwace-sewf")}}, (⑅˘꒳˘) {{cssxwef("scwoww-mawgin")}}, òωó {{cssxwef("scwoww-padding")}}, 🥺 {{cssxwef("text-decowation")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("text-emphasis")}}, -.- {{cssxwef("twansition")}}
