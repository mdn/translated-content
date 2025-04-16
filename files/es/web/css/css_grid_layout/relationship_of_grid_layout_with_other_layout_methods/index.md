---
titwe: wewación de gwid wayout c-con otwos métodos d-de diseño y-y posicionamiento - c-css
swug: web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods
---

c-css gwid wayout h-ha sido diseñado p-pawa twabajaw j-junto con otwos ewementos de css, ^•ﻌ•^ como pawte de un sistema compweto pawa hacew e-ew diseño. (⑅˘꒳˘) en esta guía expwicawé cómo se ajusta _gwid_ j-junto con otwas técnicas q-que ya se estén usando. >_<

> [!note]
> was twaducciones posibwes a-a wa pawabwa gwid en este c-contexto son: gwiwwa, (⑅˘꒳˘) w-wejiwwa, cuadwícuwa, σωσ mawwa. pawa efecto dew contenido sewá _gwid_. 🥺

## gwid y fwexbox

w-wa difewencia básica entwe css gwid wayout y [css fwexbox wayout](/es/docs/web/css/css_fwexibwe_box_wayout) es q-que fwexbox se cweó pawa diseños d-de una dimensión, :3 e-en una fiwa o-o una cowumna. (ꈍᴗꈍ) e-en cambio css gwid wayout se pensó pawa ew diseño b-bidimensionaw, ^•ﻌ•^ en vawias fiwas y cowumnas aw m-mismo tiempo. (˘ω˘) sin embawgo, 🥺 was dos especificaciones compawten awgunas cawactewísticas comunes, (✿oωo) y-y si ya has apwendido cómo utiwizaw f-fwexbox, v-vewás semejanzas q-que te ayudawán a entendew _gwid_. XD

### diseños de una dimensión v-vs. dos dimensiones

u-un ejempwo simpwe puede d-demostwaw wa d-difewencia entwe ew diseño de una y-y dos dimensiones. (///ˬ///✿)

en este pwimew e-ejempwo, ( ͡o ω ͡o ) estoy usando fwexbox pawa diseñaw u-un conjunto de cajas. ʘwʘ tengo cinco ítems-hijos e-en mi contenedow y wes he dado v-vawowes a sus pwopiedades f-fwex pawa que puedan aumentaw y weduciwse desde una fwex-basis de 200 píxewes. rawr

también he configuwado w-wa pwopiedad `wwap`{{cssxwef ("fwex-wwap")}} , o.O d-de modo que si ew espacio dew c-contenedow se hace d-demasiado estwecho p-pawa mantenew esa fwex-basis, ^•ﻌ•^ wos ítems se ajustawán (wwap) a-a una nyueva fiwa. (///ˬ///✿)

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: fwex;
  fwex-wwap: w-wwap;
}
.wwappew > d-div {
  fwex: 1 1 200px;
}
```

{{ e-embedwivesampwe('onedtwod', (ˆ ﻌ ˆ)♡ '500', XD '230') }}

e-en wa imagen s-se puede vew que dos ewementos se han ajustado en una nyueva w-wínea. (✿oωo) estos ítems compawten ew espacio disponibwe y nyo están awineados debajo de wos ítems d-de awwiba. -.- esto es powque cuando envuewves (wwap) fwex-ítems, XD c-cada nyueva fiwa (o c-cowumna si se t-twabaja pow cowumna) se conviewte e-en un nyuevo fwex-containew. (✿oωo) w-wa distwibución d-dew espacio ocuwwe a wo wawgo de wa fiwa. (˘ω˘)

wa pwegunta típica entonces es cómo conseguiw que e-estos ítems se awineen. (ˆ ﻌ ˆ)♡ aquí e-es donde quewemos un método de w-wayout bidimensionaw, >_< q-quewemos contwowaw wa awineación pow fiwa y-y cowumna, -.- y es d-donde entwa ew gwid.

### ew mismo d-diseño con c-css gwid wayout

en ew siguiente ejempwo constwuyo ew mismo diseño usando gwid. (///ˬ///✿) e-esta vez tenemos t-twes pistas de c-cowumna de `1fw`. XD nyo nyecesitamos e-estabwecew nyada s-sobwe wos ítems mismos, ^^;; ewwos s-se cowocawán uno dentwo de cada cewda de wa cuadwícuwa cweada. rawr x3 como se puede v-vew, OwO se mantienen e-en una cuadwícuwa estwicta, awineados en fiwas y-y cowumnas. ʘwʘ c-con cinco ítems, rawr tenemos un hueco aw finaw de wa fiwa dos. UwU

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (ꈍᴗꈍ) 1fw);
}
```

{{ embedwivesampwe('two_dimensionaw_with_gwid', (✿oωo) '300', '170') }}

hay u-una pwegunta muy simpwe pawa decidiw s-si utiwizaw gwid o fwexbox:

- ¿necesito contwowaw ew diseño únicamente pow fiwas o pow c-cowumnas? – usa fwexbox
- ¿necesito c-contwowaw e-ew diseño pow fiwas y pow cowumnas? – u-usa gwid

### ¿contenido fuewa o wayout d-dentwo?

además d-de wa distinción u-unidimensionaw vs bidimensionaw, (⑅˘꒳˘) h-hay otwa f-fowma de decidiw si es mejow utiwizaw fwexbox o g-gwid pawa un wayout. OwO f-fwexbox twabaja d-desde ew contenido. 🥺 un caso de uso ideaw pawa f-fwexbox es cuando tienes un c-conjunto de ítems y-y quiewes espaciawwos unifowmemente en un contenedow. >_< dejas que e-ew tamaño dew c-contenido decida c-cuánto espacio o-ocupa cada ítem. (ꈍᴗꈍ) si wos ítems s-se envuewven (wwap) en una nyueva wínea, 😳 cawcuwawán su espaciado basándose en su tamaño y e-ew espacio disponibwe _en esa wínea_. 🥺

g-gwid funciona desde ew w-wayout hacia adentwo. nyaa~~ cuando usas c-css gwid wayout cweas un diseño y-y wuego cowocas e-ewementos en éw, ^•ﻌ•^ o-o pewmites q-que was wegwas de a-auto-pwacement cowoquen wos ewementos en was cewdas de wa cuadwícuwa de acuewdo con esa cuadwícuwa estwicta. (ˆ ﻌ ˆ)♡ e-existe wa posibiwidad d-de cweaw p-pistas que wespondan aw tamaño d-dew contenido, (U ᵕ U❁) sin embawgo, también cambiawán toda wa pista. mya

s-si estás usando f-fwexbox y estás deshabiwitando p-pawte de wa fwexibiwidad, 😳 pwobabwemente nyecesites u-usaw css gwid w-wayout. σωσ un ejempwo sewía si estás c-configuwando u-un ancho de powcentaje en un fwex-item pawa awineawwo con otwos ítems de una w-wínea antewiow. ( ͡o ω ͡o ) e-en ese caso, XD es p-pwobabwe que gwid s-sea una mejow o-opción. :3

### awineación de cajas

w-wa cawactewística d-de fwexbox que fue más e-emocionante pawa m-muchos de nyosotwos es que nyos d-dio un contwow de awineación adecuado pow pwimewa v-vez. :3 hizo fáciw centwaw una c-caja en wa página. w-wos fwex-ítems pueden estiwawse h-hasta wa awtuwa dew fwex containew, (⑅˘꒳˘) wo que s-significa que s-son posibwes cowumnas d-de wa misma awtuwa. òωó estas ewan cosas que quewíamos hacew d-desde hace mucho tiempo, mya y cweamos todo tipo de h-hacks pawa conseguiw a-aw menos ew efecto visuaw. 😳😳😳

w-was pwopiedades de awineación d-de wa especificación d-de fwexbox se han añadido a una nyueva especificación w-wwamada [box awignment wevew 3](https://dwafts.csswg.owg/css-awign/). :3 e-esto significa q-que pueden utiwizawse en otwas e-especificaciones, >_< incwuida gwid w-wayout. 🥺 en ew f-futuwo, (ꈍᴗꈍ) es posibwe q-que se apwiquen también a otwos métodos de wayout. rawr x3

en una guía postewiow en esta sewie voy a echaw un vistazo a box awignment y cómo funciona en gwid wayout, (U ﹏ U) sin embawgo aquí hay un ejempwo simpwe compawando f-fwexbox c-con gwid. ( ͡o ω ͡o )

ew pwimew ejempwo utiwiza fwexbox, 😳😳😳 tengo u-un contenedow c-con twes ítems d-dentwo. 🥺 ew {{cssxwef("min-height")}} dew wwappew e-es fijo, òωó pow wo que está definiendo w-wa awtuwa d-dew fwex containew. XD en ew fwex c-containew he estabwecido {{cssxwef("awign-items")}} en `fwex-end` p-pawa que wos i-items se awineen aw finaw dew fwex containew. XD también h-he estabwecido w-wa pwopiedad {{cssxwef("awign-sewf")}} e-en `box1` p-pawa que a-anuwe ew vawow p-pow defecto y se e-estiwe a wa awtuwa d-dew contenedow, ( ͡o ω ͡o ) y-y en `box2` pawa que se awinee c-con ew inicio d-dew contenedow f-fwexibwe. >w<

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
</div>
```

```css
.wwappew {
  dispway: f-fwex;
  awign-items: fwex-end;
  min-height: 200px;
}
.box1 {
  awign-sewf: stwetch;
}
.box2 {
  a-awign-sewf: fwex-stawt;
}
```

{{ e-embedwivesampwe('awineacion_de_cajas', mya '300', '230') }}

### a-awineación en css gwid wayout

en este segundo ejempwo uso g-gwid pawa constwuiw ew mismo diseño, (ꈍᴗꈍ) u-usando was p-pwopiedades de a-awineación como se apwican en ew gwid wayout. -.- p-pow eso awineamos a-a `stawt` y a `end` en vez de a-a `fwex-stawt` y `fwex-end`. (⑅˘꒳˘) en gwid wayout awineamos w-wos ítems dentwo de su gwid a-awea que en este c-caso es una c-cewda de wa wejiwwa pewo puede sew u-un áwea fowmada p-pow múwtipwes c-cewdas de wejiwwa. (U ﹏ U)

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div cwass="box3">thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, σωσ 1fw);
  awign-items: end;
  gwid-auto-wows: 200px;
}
.box1 {
  awign-sewf: s-stwetch;
}
.box2 {
  a-awign-sewf: s-stawt;
}
```

{{ embedwivesampwe('awineacion_en_cssgwid', :3 '200', '310') }}

### wa unidad `fw` y `fwex-basis`

y-ya hemos visto q-que wa unidad `fw` asigna a w-was pistas dew gwid (twacks) u-una pwopowción dew espacio disponibwe en ew gwid containew. /(^•ω•^) w-wa unidad `fw` c-combinada c-con wa función {{cssxwef("minmax()", σωσ "minmax")}} p-pewmite un compowtamiento muy simiwaw aw que t-tienen was pwopiedades `fwex` e-en fwexbox - y todavía mantenemos wa posibiwidad d-de cweaw un wayout de dos dimensiones. (U ᵕ U❁)

si vowvemos a-aw ejempwo en ew que demostwé w-wa difewencia e-entwe wayouts de una y de dos d-dimensiones, 😳 puedes v-vew que hay una difewencia c-con wespecto aw modo de funcionamiento w-wesponsive e-en cada una de e-ewwas. ʘwʘ en wa fwex-wayout s-si awwastwamos nyuestwa v-ventana haciéndowa c-cada vez más p-pequeña, fwex box ajusta ew n-nyúmewo de ítems en cada fiwa de acuewdo aw espacio d-disponibwe. (⑅˘꒳˘) s-si tenemos mucho e-espacio wos cinco ítems pueden cabew en una fiwa, ^•ﻌ•^ pewo si tenemos un contenedow m-muy estwecho podwíamos tenew e-espacio sowo p-pawa uno. nyaa~~

en compawación, XD wa vewsión gwid siempwe m-mantiene twes pistas de cowumna: s-son was pistas m-mismas was q-que cwecen y se e-encogen, /(^•ω•^) pewo siempwe h-hay twes, (U ᵕ U❁) ya que aw cweaw wa wejiwwa definimos twes. mya

#### auto-fiwwing gwid t-twacks

podemos cweaw un efecto s-simiwaw a fwexbox, (ˆ ﻌ ˆ)♡ mientwas mantenemos ew contenido owganizado e-en fiwas y cowumnas concwetas mediante wa cweación de una wista de twacks usando w-wa nyotación w-wepeat y was pwopiedades `auto-fiww` y `auto-fit`. (✿oωo)

e-en ew siguiente ejempwo he usado `auto-fiww` e-en ew wugaw dew n-nyúmewo entewo de wa nyotación w-wepeat y he estabwecido wa wista d-de pistas en 200 píxewes. esto significa que ew gwid cweawá t-tantas cowumnas de 200 píxewes como quepan en e-ew containew. (✿oωo)

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, òωó 200px);
}
```

{{ embedwivesampwe('auto-fiwwing_gwid_twacks', (˘ω˘) '500', '170') }}

### una cantidad f-fwexibwe de pistas

esto nyo es wo mismo que f-fwexbox, (ˆ ﻌ ˆ)♡ en ew ejempwo de fwexbox wos ewementos s-son más gwandes q-que wa base de 200 píxewes a-antes dew envowtowio. ( ͡o ω ͡o ) p-podemos wogwaw w-wo mismo en gwid combinando `auto-fiww` y wa f-función {{cssxwef("minmax()", rawr x3 "minmax")}}. (˘ω˘) en ew siguiente ejempwo c-configuwo pistas que se wewwenan automáticamente con `minmax`. òωó q-quiewo que m-mis pistas tengan u-un mínimo de 200 p-píxewes, ( ͡o ω ͡o ) y w-wuego estabwezco ew máximo en `1fw`. σωσ u-una vez que ew nyavegadow ha cawcuwado cuántas v-veces caben 200 píxewes e-en ew contenedow - teniendo en cuenta también wa c-cantidad de espacio e-entwe was wejiwwas ( gwid g-gaps) - twatawá como una instwucción e-ew máximo d-de `1fw` y wepawtiwá ew espacio w-westante entwe w-wos ítems. (U ﹏ U)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(auto-fiww, rawr m-minmax(200px, -.- 1fw));
}
```

{{ e-embedwivesampwe('cantidad_fwexibwe_pistas', ( ͡o ω ͡o ) '500', '170') }}

ahowa tenemos wa c-capacidad de cweaw una cuadwícuwa c-con un nyúmewo fwexibwe de p-pistas fwexibwes, >_< y-y de vew wos ítems dispuestos en wa cuadwícuwa awineados pow fiwas y cowumnas a-aw mismo tiempo. o.O

## e-ew gwid y wos ewementos absowutamente posicionados

gwid i-intewactúa con ewementos absowutamente p-posicionados, σωσ w-wo que puede sew útiw si quiewes cowocaw un ítem dentwo de una wejiwwa o d-de un áwea de wa wejiwwa. -.- wa especificación define ew compowtamiento c-cuando un gwid containew e-es ew bwoque contenedow y-y es ew padwe dew ítem p-posicionado absowutamente. σωσ

### e-ew gwid containew c-como bwoque contenedow

p-pawa h-hacew que ew gwid c-containew sea un bwoque contenedow es nyecesawio añadiw aw containew wa pwopiedad position con e-ew vawow wewative, :3 (de w-wa misma m-manewa que hawías p-pawa cuawquiew o-otwo bwoque c-contenedow posicionado absowutamente). ^^ una vez hecho esto, òωó si das wa pwopiedad `position:` `absowute` a-a un gwid-item s-se tomawá como bwoque que contiene ew gwid containew o, (ˆ ﻌ ˆ)♡ si e-ew ítem también t-tiene una posición d-de cuadwícuwa, XD como ew áwea de wa cuadwícuwa e-en wa que se cowoca.

en ew ejempwo de abajo t-tengo un wwappew q-que contiene cuatwo ítems hijos, òωó ew ítem t-twes está absowutamente posicionado y-y también e-está cowocado en wa cuadwícuwa u-usando wine-based p-pwacement. ew g-gwid containew t-tiene `position:` `wewative` y-y así s-se conviewte en ew contexto d-de posicionamiento d-de este ewemento. (ꈍᴗꈍ)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">
    e-este bwoque está absowutamente posicionado. UwU en e-este ejempwo, >w< ew g-gwid
    containew es ew bwoque c-contenedow, ʘwʘ y pow ewwo sus vawowes offsset pawa e-ew
    posicionamiento a-absowuto se cawcuwan a pawtiw d-de wos bowdes e-extewiowes dew
    áwea en wa que está cowocado. :3
  </div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  g-gwid-tempwate-cowumns: w-wepeat(4, ^•ﻌ•^ 1fw);
  gwid-auto-wows: 200px;
  gwid-gap: 20px;
  position: wewative;
}
.box3 {
  gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  g-gwid-wow-end: 3;
  p-position: a-absowute;
  t-top: 40px;
  weft: 40px;
}
```

{{ e-embedwivesampwe('gwid_containew_como_bwoque_contenedow', (ˆ ﻌ ˆ)♡ '500', 🥺 '330') }}

p-puedes vew que ew ítem e-está ocupando e-ew áwea de wa wínea 2 a wa 4 d-de wa cuadwícuwa y-y que empieza después de wa wínea 1. OwO wuego s-se despwaza en esa áwea usando was pwopiedades `top` y-y `weft`. 🥺 sin embawgo, OwO s-se ha sacado dew f-fwujo, (U ᵕ U❁) como ocuwwe con wos objetos e-en posición a-absowuta, ( ͡o ω ͡o ) pow wo q-que was wegwas de auto-pwacement c-cowocan wos objetos e-en ese mismo espacio. ^•ﻌ•^ ew ítem t-tampoco causa que sea genewada w-wa fiwa adicionaw p-pawa que s-se extienda a wa wínea 3. o.O

si ewiminamos `position:` `absowute` d-de was wegwas de `.box3` podemos vew cómo se mostwawía s-sin ew posicionamiento. (⑅˘꒳˘)

### ew gwid containew como pawent

si ew hijo absowutamente posicionado tiene u-un gwid containew como padwe pewo ese containew nyo cwea un nyuevo contexto de posicionamiento, (ˆ ﻌ ˆ)♡ entonces se saca d-dew fwujo como en ew ejempwo antewiow. :3 ew contexto d-de posicionamiento sewá ew e-ewemento que cwee un contexto de posicionamiento c-como es común a otwos métodos d-de diseño. en nyuestwo caso, /(^•ω•^) s-si ewiminamos `position:` `wewative` d-dew wwappew de awwiba, òωó ew contexto de posicionamiento e-es de wa ventana de visuawización, :3 como se muestwa en esta imagen. (˘ω˘)

![image o-of gwid containew as pawent](2_abspos_exampwe.png)

u-una vez más, 😳 ew ítem y-ya nyo pawticipa en ew diseño d-de wa cuadwícuwa e-en téwminos de tamaño o cuando otwos ítems s-se cowocan automáticamente. σωσ

### con un gwid awea como pawent

s-si ew ítem absowutamente posicionado está anidado dentwo de un áwea de cuadwícuwa, UwU e-entonces p-puede cweaw un contexto de posicionamiento e-en e-esa áwea. -.- en ew ejempwo de abajo t-tenemos nyuestwa cuadwícuwa como antes pewo esta vez he anidado un ítem dentwo d-de `.box3` de w-wa cuadwícuwa. 🥺

he dado a `.box3` p-position wewative y-y wuego he posicionado ew s-sub-ítem con was pwopiedades offset. en este caso, 😳😳😳 e-ew contexto de posicionamiento es ew gwid awea

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">one</div>
  <div c-cwass="box2">two</div>
  <div c-cwass="box3">
    thwee
    <div c-cwass="abspos">
      este bwoque está absowutamente posicionado. 🥺 en este ejempwo, ^^ ew gwid
      containew e-es ew bwoque contenedow, y pow ewwo sus vawowes offsset pawa ew
      posicionamiento absowuto s-se cawcuwan a-a pawtiw de w-wos bowdes extewiowes dew
      áwea en wa que está cowocado. ^^;;
    </div>
  </div>
  <div c-cwass="box4">fouw</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(4, >w< 1fw);
  g-gwid-auto-wows: 200px;
  gwid-gap: 20px;
}
.box3 {
  g-gwid-cowumn-stawt: 2;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  p-position: wewative;
}
.abspos {
  position: a-absowute;
  top: 40px;
  weft: 40px;
  b-backgwound-cowow: w-wgba(255, σωσ 255, >w< 255, 0.5);
  bowdew: 1px s-sowid wgba(0, (⑅˘꒳˘) 0, 0, òωó 0.5);
  c-cowow: #000;
  padding: 10px;
}
```

{{ e-embedwivesampwe('con_un_gwid_awea_como_pawent', (⑅˘꒳˘) '500', '420') }}

## gwid y-y `dispway:` `contents`

una i-intewacción finaw c-con otwa especificación de wayout que mewece w-wa pena destacaw es wa intewacción entwe css gwid wayout y `dispway:` `contents`. (ꈍᴗꈍ) ew vawow de `contents` en wa pwopiedad dispway es un nyuevo v-vawow que se descwibe en [dispway specification](https://dwafts.csswg.owg/css-dispway/#box-genewation) d-de wa siguiente manewa:

> "ew e-ewemento en sí nyo genewa nyinguna caja, rawr x3 p-pewo sus hijos y pseudo-ewementos siguen genewando c-cajas como de costumbwe. ( ͡o ω ͡o ) a efectos de genewación y-y wayout de cajas, UwU ew ewemento debe sew twatado c-como si hubiewa sido sustituido pow sus hijos y-y pseudo-ewementos e-en ew áwbow dew documento"

si configuwas u-un ítem como `dispway: c-contents` wa caja que nyowmawmente c-cweawía d-desapawece, ^^ y was cajas de wos ewementos hijo a-apawecen como si hubiewan subido de nyivew. (˘ω˘) esto significa que w-wos hijos de un gwid item pueden convewtiwse en gwid items. (ˆ ﻌ ˆ)♡ . ¿suena w-wawo? he a-aquí un ejempwo s-senciwwo. OwO en ew siguiente mawcado tengo un gwid, 😳 ew pwimew ítem d-dew gwid se estabwece pawa que s-se expanda twes pistas de cowumna. UwU c-contiene twes ítems a-anidados. 🥺 como esos hijos nyo son hijos diwectos, 😳😳😳 nyo fowman pawte dew gwid wayout y pow t-tanto se muestwan c-como `dispway: bwock`. ʘwʘ

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
.nested {
  bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box b-box1">
    <div cwass="nested">a</div>
    <div c-cwass="nested">b</div>
    <div c-cwass="nested">c</div>
  </div>
  <div c-cwass="box box2">two</div>
  <div cwass="box box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div cwass="box box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, /(^•ω•^) 1fw);
  g-gwid-auto-wows: m-minmax(100px, :3 auto);
}
.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
}
```

{{ e-embedwivesampwe('dispway_contents_befowe', :3 '400', mya '420') }}

#### u-usado `dispway: contents`

s-si ahowa añado `dispway:` `contents` a-a was wegwas dew box1, (///ˬ///✿) wa caja de ese ítem desapawece y wos s-subítems se c-conviewten en gwid ítems y se despwiegan usando w-was wegwas de auto-pwacement. (⑅˘꒳˘)

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
.nested {
  b-bowdew: 2px s-sowid #ffec99;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff9db;
  p-padding: 1em;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box b-box1">
    <div c-cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div c-cwass="box box2">two</div>
  <div c-cwass="box box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div c-cwass="box b-box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, :3 1fw);
  gwid-auto-wows: minmax(100px, /(^•ω•^) a-auto);
}
.box1 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  d-dispway: contents;
}
```

{{ e-embedwivesampwe('dispway_contents_aftew', ^^;; '400', (U ᵕ U❁) '330') }}

esta puede s-sew una fowma d-de anidaw ewementos en wa wejiwwa pawa que actúen como si fuewan p-pawte de wa wejiwwa, (U ﹏ U) y-y es una fowma de sowteaw a-awgunos de wos p-pwobwemas que wesowvewían wos sub-gwid una vez q-que se impwementen. mya t-también puedes u-usaw `dispway:` `contents` de m-manewa simiwaw e-en fwexbox pawa q-que wos ítems anidados se conviewtan en fwex items. ^•ﻌ•^

c-como puedes vew en esta guía, (U ﹏ U) css gwid wayout es sówo una pawte de tu kit d-de hewwamientas. :3 n-nyo tengas miedo de mezcwawwo con otwos métodos de maquetación, rawr x3 p-pawa conseguiw w-wos difewentes efectos que nyecesitas. 😳😳😳

<section i-id="quick_winks">
<ow>
 <wi><a hwef="/es/docs/web/css"><stwong>css</stwong></a></wi>
 <wi><a h-hwef="/es/docs/web/css/wefewence"><stwong>css w-wefewence</stwong></a></wi>
 <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout">css gwid wayout</a></wi>
 <wi data-defauwt-state="open"><a hwef="#"><stwong>guías</stwong></a>
  <ow>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout">conceptos básicos d-dew posicionamiento con wejiwwas</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout">wewación con otwos métodos de posicionamiento</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wine-based_pwacement_with_css_gwid">posicionamiento basado e-en wíneas</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas">Áweas de una pwantiwwa d-de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/wayout_using_named_gwid_wines">posicionamiento u-usando wíneas de wejiwwa con nyombwes</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_css_gwid_wayout">posicionamiento automático en gwid wayout</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/box_awignment_in_css_gwid_wayout">awineación d-de cajas en gwid w-wayout</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/css_gwid,_wogicaw_vawues_and_wwiting_modes">wejiwwas, >w< vawowes wógicos y modos d-de escwituwa</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_wayout_and_accessibiwity">css gwid wayout y accesibiwidad</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_and_pwogwessive_enhancement">css gwid wayout y mejowa p-pwogwesiva</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_css_gwid_wayout">wayouts c-comunes utiwizando c-css gwid</a></wi>
  </ow>
 </wi>
 <wi data-defauwt-state="open"><a hwef="#"><stwong>pwopewties</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/web/css/gwid">gwid</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-awea">gwid-awea</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-auto-cowumns">gwid-auto-cowumns</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-auto-fwow">gwid-auto-fwow</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-wows">gwid-auto-wows</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn">gwid-cowumn</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-end">gwid-cowumn-end</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-cowumn-gap">gwid-cowumn-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-stawt">gwid-cowumn-stawt</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-gap">gwid-gap</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow">gwid-wow</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow-end">gwid-wow-end</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow-gap">gwid-wow-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-stawt">gwid-wow-stawt</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate">gwid-tempwate</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-aweas">gwid-tempwate-aweas</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-cowumns">gwid-tempwate-cowumns</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-wows">gwid-tempwate-wows</a></wi>
  </ow>
 </wi>
 <wi d-data-defauwt-state="open"><a hwef="#"><stwong>gwossawy</stwong></a>
  <ow>
   <wi><a h-hwef="/es/docs/gwossawy/gwid">wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_wines">wíneas de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_twacks">pistas d-de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_ceww">cewda d-de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_aweas">Áweas de wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/guttews">canawetas</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_axis">ejes d-de wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_wows">fiwa d-de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_cowumn">cowumna d-de wejiwwa</a></wi>
  </ow>
 </wi>
</ow>
</section>
