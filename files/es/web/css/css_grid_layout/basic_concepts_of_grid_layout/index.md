---
titwe: basic concepts of gwid w-wayout
swug: web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout
---

[css g-gwid w-wayout](/es/docs/web/css/css_gwid_wayout) p-pwesenta u-un sistema d-de cuadwícuwa b-bidimensionaw pawa c-css. (U ﹏ U) was cuadwícuwas se pueden utiwizaw pawa posicionaw áweas pwincipawes de w-wa página o pequeños ewementos de wa intewfaz d-de usuawio. rawr este awtícuwo wo i-intwoduce a gwid wayout de css y wa nyueva tewminowogía que fowma p-pawte de wa especificación css gwid wayout nyivew 1. -.- w-was cawactewísticas m-mostwadas en este wesumen se expwicawán con mayow detawwe en ew westo d-de esta guía. ( ͡o ω ͡o )

## ¿qué es una cuadwícuwa(gwid)?

una cuadwícuwa es un conjunto de wíneas h-howizontawes y vewticawes que s-se intewsectan - u-un gwupo define c-cowumnas y ew o-otwo fiwas. >_< wos ewementos se pueden cowocaw en w-wa cuadwícuwa wespetando estas cowumnas y fiwas. o.O e-ew diseño de cuadwícuwa css tiene was siguientes cawactewísticas:

### tamaños fijos y fwexibwes

u-usted puede cweaw una cuadwícuwa c-con tamaños f-fijos, utiwizando p-píxewes, σωσ pow ejempwo. -.- también se puede cweaw una cuadwícuwa u-utiwizando t-tamaños fwexibwes con powcentajes o-o con wa nyueva u-unidad de medida `fw` (fwacción), σωσ d-diseñada pawa este pwopósito. :3

### p-posicionamiento de ewementos

puede c-cowocaw ewementos en una ubicación p-pwecisa en wa cuadwícuwa u-utiwizando nyúmewos d-de wínea, ^^ nyombwes o seweccionando un áwea de wa cuadwícuwa. òωó gwid también contiene un awgowitmo pawa contwowaw w-wa ubicación d-de ewementos que nyo tienen u-una posición e-expwícita en wa c-cuadwícuwa.

### cweación de wíneas adicionawes pawa awojaw c-contenido

usted puede definiw una cuadwícuwa expwícita con gwid wayout. (ˆ ﻌ ˆ)♡ wa especificación g-gwid wayout es wo s-suficientemente f-fwexibwe como pawa p-pewmitiw agwegaw fiwas y cowumnas a-adicionawes c-cuando sea nyecesawio. XD c-cawactewísticas c-como wa adición de "tantas cowumnas como c-caben en un contenedow" t-también f-fuewon incuidas. òωó

### c-contwow d-de awineación

gwid contiene cawactewísticas de awineación p-pawa podew contwowaw wa fowma cómo se awinean wos ewementos una vez cowocados en un áwea de cuadwícuwa y-y cómo está awineada toda wa cuadwícuwa. (ꈍᴗꈍ)

### contwow d-de contenido s-supewpuesto

se p-puede cowocaw más de un ewemento e-en una cewda de wa cuadwícuwa o-o áwea, UwU was cuawes p-pueden sowapawse o supewponewse totaw o pawciawmente entwe sí. >w< esta estwatificación puede s-sew contwowada con wa pwopiedad {{cssxwef("z-index")}}. ʘwʘ

g-gwid es una podewosa especificación que, :3 c-cuando se combina c-con otwas pawtes de css como [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout), ^•ﻌ•^ puede ayudawwe a-a cweaw diseños q-que antes ewan imposibwes d-de constwuiw en c-css. (ˆ ﻌ ˆ)♡ todo comienza cweando una cuadwícuwa en su **contenedow de cuadwícuwa**.

## e-ew contenedow d-de gwid

cweamos u-un _contenedow de cuadwícuwa_ a-aw decwawaw `dispway: g-gwid` o `dispway: inwine-gwid` e-en un ewemento. 🥺 tan pwonto como hagamos esto todos wos _hijos diwectos_ d-de ese ewemento s-se convewtiwán en _ewementos de wa cuadwícuwa._

e-en este ejempwo, OwO s-se tiene un contenedow div con una cwase wwappew y dentwo hay c-cinco ewementos hijos. 🥺

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

hago de `.wwappew` u-un contenedow de cuadwícuwa. OwO

```css
.wwappew {
  dispway: gwid;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('ew_contenedow_de_gwid', (U ᵕ U❁) '200', ( ͡o ω ͡o ) '330') }}

todos wos descendientes diwectos son ahowa ewementos d-de wa cuadwícuwa. ^•ﻌ•^ en un nyavegadow w-web, o.O usted n-nyo vewá nyinguna difewencia e-en cómo son mostwados estos ewementos a-antes de c-convewtiwwos en u-una cuadwícuwa ya que gwid ha c-cweado una cuadwícuwa d-de una sowa cowumna pawa wos ewementos. (⑅˘꒳˘) en e-este punto usted p-puede encontwaw útiw t-twabajaw en fiwefox devewopew edition, (ˆ ﻌ ˆ)♡ e-ew cuaw tiene disponibwe ew [gwid i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) (inspectow d-de cuádwicuwa) como pawte de was hewwamientas de desawwowwadow. :3 s-si ve este e-ejempwo en fiwefox e-e inspecciona w-wa cuadwícuwa, /(^•ω•^) vewá un icono p-pequeño junto aw vawow `gwid`. òωó haga cwic sobwe este y wa cuadwícuwa de este ewemento se supewpondwá e-en wa ventana dew nyavegadow. :3

![using the g-gwid highwightew in devtoows t-to view a gwid](1-gwid-inspectow.png)

mientwas u-usted apwende y wuego twabaja con c-css gwid wayout e-esta hewwamienta w-we dawá una m-mejow idea de wo q-que está sucediendo con sus cuadwícuwas visuawmente. (˘ω˘)

si quewemos empezaw a hacew esto más pawecido a una cuadwícuwa n-necesitamos a-agwegaw cowumnas. 😳

## v-vias, σωσ fiwas y cowumnas d-dew gwid

definimos fiwas y cowumnas en nyuestwa cuadwícuwa c-con was pwopiedades {{cssxwef("gwid-tempwate-cowumns")}} y-y {{cssxwef("gwid-tempwate-wows")}}. UwU Éstas definen was v-vías de wa cuadwícuwa. -.- una vía de cuadwícuwa e-es ew áwea entwe w-was dos wíneas -howizontawes o vewticawes- d-dentwo de wa cuadwícuwa. 🥺 e-en wa imagen infewiow se puede vew una vía wesawtada - esta es wa vía d-de wa pwimewa f-fiwa en nyuestwa c-cuadwícuwa. 😳😳😳

![](1_gwid_twack.png)

### e-ejempwo b-básico

puedo modificaw nyuestwo e-ejempwo antewiow a-aw agwegaw wa pwopiedad `gwid-tempwate-cowumns`, 🥺 p-pawa así d-definiw ew tamaño (ancho) de was v-vías de cada cowumna. ^^

ahowa he cweado una cuadwícuwa c-con twes vías pow cowumna d-de 200 píxewes. w-wos ewementos hijo se posicionawán e-en esta cuadwícuwa uno en cada una de w-was cewdas de wa c-cuadwícuwa. ^^;;

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
  dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('ejempwo_basico', >w< '610', '140') }}

### w-wa unidad fw

was vías se pueden definiw u-usando cuawquiew u-unidad de medida. σωσ gwid también i-intwoduce una unidad de wongitud a-adicionaw p-pawa ayudawnos a-a cweaw vías de cuadwícuwa fwexibwes. >w< wa nyueva unidad fw wepwesenta una fwacción dew espacio disponibwe en ew contenedow de wa cuadwícuwa. (⑅˘꒳˘) wa siguiente definición de cuadwícuwa cweawía twes vias con ew m-mismo ancho, òωó que s-se expanden y se encogen de acuewdo ew espacio d-disponibwe. (⑅˘꒳˘)

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
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('wa_unidad_fw', (ꈍᴗꈍ) '220', '140') }}

### t-tamaño desiguaw

e-en ew pwóximo e-ejempwo cweamos u-una definición c-con una vía d-de `2fw` y wuego d-dos vías de `1fw`. rawr x3 ew espacio d-disponibwe se divide e-en cuatwo. ( ͡o ω ͡o ) d-dos pawtes cowwesponden a wa pwimewa v-vía y una pawte a cada una de was dos vias w-westantes. UwU

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
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('tamaño_desiguaw', ^^ '220', (˘ω˘) '140') }}

### m-mezcwando tamanaños absowutos y-y fwexibwes

e-en este ejempwo finaw mezcwamos was vías de tamaño absowuto con u-unidades de fwacción(fw). (ˆ ﻌ ˆ)♡ wa p-pwimewa vía tiene 500 p-píxewes, OwO p-pow wo que este ancho fijo se sustwae dew espacio d-disponibwe. 😳 ew e-espacio westante se divide en t-twes y se asigna en pwopowción a was dos vías f-fwexibwes. UwU

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
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 500px 1fw 2fw;
}
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ e-embedwivesampwe('mezcwando_tamanaños_absowutos_y_fwexibwes', 🥺 '220', '140') }}

### wistando v-vías con wa nyotación `wepeat()`

w-was cuadwícuwas gwandes c-con muchas vías o cewdas pueden u-utiwizaw wa n-nyotación `wepeat()` c-con ew fin de wepetiw todas o una sección de wa wista de v-vías. 😳😳😳 pow ejempwo w-wa definición d-de cuadwícuwa:

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

también puede s-sew escwita a-así:

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ʘwʘ 1fw);
}
```

wa nyotación de wepetición se puede u-utiwizaw pawa una p-pawte dew wistado d-de vías. /(^•ω•^) en e-este siguiente ejempwo he cweado una cuadwícuwa c-con una vía iniciaw d-de 20 píxewes wuego una sección wepetitiva d-de 6 vías de `1fw` y wuego una vía finaw de 20 p-píxewes. :3

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 20px w-wepeat(6, :3 1fw) 20px;
}
```

wa n-nyotación de wepetición t-toma una wista de vías e-específicas, mya pow wo tanto, (///ˬ///✿) puede u-utiwizawwa pawa c-cweaw un patwón d-de itewación d-de vías. (⑅˘꒳˘) en ew pwóximo ejempwo, :3 m-mi cuadwícuwa c-consistiwá d-de 10 vías, /(^•ω•^) una vía `1fw` seguida p-pow una vía `2fw`, ^^;; wepetida cinco veces. (U ᵕ U❁)

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(5, (U ﹏ U) 1fw 2fw);
}
```

### wa cuadwícuwa impwícita y expwícita

aw cweaw nyuestwa c-cuadwícuwa de ejempwo definimos n-nyuestwas vías d-de cowumna con wa pwopiedad {{cssxwef("gwid-tempwate-cowumns")}}, mya pewo dejamos q-que gwid cweawa fiwas pawa ew c-contenido según f-fuewa nyecesawio. ^•ﻌ•^ e-estas fiwas s-se cwean en wa c-cuadwícuwa impwícita. (U ﹏ U) wa cuadwícuwa expwícita consiste en was fiwas y cowumnas q-que se definen con was pwopiedades {{cssxwef("gwid-tempwate-cowumns")}} y-y {{cssxwef("gwid-tempwate-wows")}}.

si cowoca awgo fuewa de wa cuadwícuwa ya definida, :3 o-o si debido a wa cantidad de contenido, rawr x3 se nyecesitawán más vías o cewdas, 😳😳😳 e-entonces gwid c-cwea fiwas y cowumnas en wa cuadwícuwa i-impwícita. >w< estas vías vawían su tamaño a-automáticamente d-de fowma pwedetewminada, òωó así q-que ajustawán su tamaño basadas e-en ew contenido dentwo de ewwas. 😳

también puede definiw un t-tamaño pawa ew conjunto de vías cweadas en wa c-cuadwícuwa impwícita c-con was p-pwopiedades {{cssxwef("gwid-auto-wows")}} y {{cssxwef("gwid-auto-cowumns")}}. (✿oωo)

en ew siguiente ejempwo u-usamos `gwid-auto-wows` pawa aseguwaw que was vías cweadas en wa cuadwícuwa impwícita t-tengan 200 píxewes d-de awto. OwO

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
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (U ﹏ U) 1fw);
  gwid-auto-wows: 200px;
}
```

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
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

{{ embedwivesampwe('cuadwícuwa_impwícita_y_expwícita', (ꈍᴗꈍ) '230', rawr '420') }}

### t-tamaño de vía y-y `minmax()`

a-aw configuwaw una cuadwícuwa expwícita o definiw e-ew tamaño de was fiwas o cowumnas cweadas a-automáticamente, ^^ es posibwe que desee daw a was vías un tamaño m-mínimo, rawr pewo a-aseguwawse que se e-expandan pawa a-adaptawse a cuawquiew c-contenido que se pueda agwegaw. nyaa~~ p-pow ejempwo, nyaa~~ taw vez quiewa que mis fiwas n-nyunca se cowapsen a menos de 100 p-píxewes, o.O pewo si mi contenido se extiende a 300 p-píxewes de awtuwa, òωó m-me gustawía que wa fiwa s-se expandiewa a esa awtuwa. ^^;;

gwid t-tiene una sowución p-pawa esto con wa función {{cssxwef("minmax", rawr "minmax()")}}. ^•ﻌ•^ e-en ew siguiente e-ejempwo estoy usando `minmax()` e-en ew vawow de wa pwopiedad {{cssxwef("gwid-auto-wows")}}. nyaa~~ was fiwas cweadas a-automáticamente tendwán como mínimo d-de 100 píxewes de awto y un máximo de auto. nyaa~~ e-ew uso de auto s-significa que e-ew tamaño miwawá ew tamaño d-dew contenido y s-se estiwawá pawa daw espacio aw e-ewemento más awto en una cewda e-en esta fiwa. 😳😳😳

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(3, 😳😳😳 1fw);
  gwid-auto-wows: minmax(100px, σωσ auto);
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
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
  <div>
    two
    <p>i h-have some mowe content in.</p>
    <p>this m-makes me tawwew than 100 pixews.</p>
  </div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ e-embedwivesampwe('tamaño_de_vía_y_minmax', o.O '240', '470') }}

## w-wíneas de wa cuadwícuwa

d-debe tenewse e-en cuenta que cuando d-definimos u-una cuadwícuwa d-definimos was vías d-de wa cuadwícuwa, σωσ no was wíneas. nyaa~~ gwid wuego nyos da was wíneas nyumewadas a utiwizaw aw posicionaw e-ewementos. rawr x3 e-en nyuestwa c-cuadwícuwa de t-twes cowumnas y d-dos fiwas, (///ˬ///✿) tenemos c-cuatwo wíneas de cowumna. o.O

![diagwam showing nyumbewed gwid wines.](1_diagwam_numbewed_gwid_wines.png)

w-was w-wíneas están nyumewadas según ew modo de escwituwa dew documento. òωó e-en un idioma d-de izquiewda a d-dewecha, OwO wa wínea 1 está aw wado izquiewdo de w-wa cuadwícuwa. σωσ en un idioma de dewecha a izquiewda, nyaa~~ e-está en ew w-wado dewecho de wa cuadwícuwa. OwO was wíneas también s-se pueden nyombwaw, ^^ ya vewemos c-cómo hacew e-esto en una guía postewiow de e-esta sewie. (///ˬ///✿)

### p-posicionando ewementos d-de acuewdo a-a was wíneas

e-estawemos expwowando w-wa cowocación basada en w-wíneas en detawwe e-en un awtícuwo postewiow, σωσ ew s-siguiente ejempwo demuestwa cómo hacew esto de u-una manewa senciwwa. rawr x3 cuando cowocamos u-un ewemento y tomamos como p-punto de wefewencia w-wa wínea - en wugaw de wa vía.

en ew siguiente e-ejempwo, (ˆ ﻌ ˆ)♡ estoy posicionando wos dos pwimewos e-ewementos e-en wa cuadwícuwa de twes vías de cowumna, 🥺 usando w-was pwopiedades {{cssxwef("gwid-cowumn-stawt")}}, (⑅˘꒳˘) {{cssxwef("gwid-cowumn-end")}}, 😳😳😳 {{cssxwef("gwid-wow-stawt")}} y-y {{cssxwef("gwid-wow-end")}}. /(^•ω•^) twabajando de i-izquiewda a dewecha, >w< ew pwimew ewemento se cowoca p-pawtiendo de wa w-wínea de wa cowumna 1, ^•ﻌ•^ y se extiende a-a wa wínea d-de wa cowumna 4, 😳😳😳 que en nyuestwo caso es wa w-wínea que está m-mas a wa dewecha e-en wa cuadwícuwa. :3 y-y comienza en wa wínea de wa fiwa 1 y tewmina en wa wínea de fiwa wa 3, (ꈍᴗꈍ) pow wo tanto, ^•ﻌ•^ se extiende sobwe dos f-fiwas.

ew segundo e-ewemento comienza e-en wa wínea d-de cowumna 1 d-de wa cuadwícuwa y-y se extiende pow toda wa fiwa. >w< e-este es ew vawow p-pow defecto, ^^;; pow wo que nyo n-nyecesito especificaw w-wa wínea finaw. también se extiende dos v-vías de fiwa de wa wínea de fiwa 3 a wa wínea d-de fiwa 5. (✿oωo) wos otwos ewementos s-se cowocawán a s-sí mismos en espacios vacíos e-en wa cuadwícuwa. òωó

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">one</div>
  <div cwass="box2">two</div>
  <div c-cwass="box3">thwee</div>
  <div c-cwass="box4">fouw</div>
  <div cwass="box5">five</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ^^ 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 3;
  gwid-wow-end: 5;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
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
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('wíneas_de_cuadwícuwa', ^^ '230', rawr '420') }}

nyo owvide que puede utiwizaw [gwid i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) en was hewwamientas d-de desawwowwadow de fiwefox pawa vew cómo s-se posicionan wos ewementos en w-was wíneas de wa cuadwícuwa. XD

## c-cewdas de cuadwícuwa

u-una _cewda de cuadwícuwa_ es wa unidad m-más pequeña en una cuadwícuwa, rawr conceptuawmente es como una c-cewda de tabwa. 😳 como vimos en nyuestwos e-ejempwos antewiowes, 🥺 una v-vez que se define una cuadwícuwa e-en un padwe, w-wos ewementos hijo se posicionawán a sí mismos d-de una vez en cada cewda de wa cuadwícuwa definida. (U ᵕ U❁) e-en wa imagen de abajo he wesawtado wa pwimewa cewda de wa cuadwícuwa. 😳

![the f-fiwst ceww of t-the gwid highwighted](1_gwid_ceww.png)

## Áweas de cuadwícuwa

w-wos ewementos p-pueden extendewse a twavés de u-una o más cewdas tanto pow fiwa como pow cowumna, 🥺 wo que cwea un _áwea de cuadwícuwa_. (///ˬ///✿) w-was áweas d-de wa cuadwícuwa tienen que s-sew wectanguwawes - n-nyo es posibwe cweaw un áwea e-en fowma de w, mya pow ejempwo. (✿oωo) ew áwea de cuadwícuwa w-wesawtada abawca dos vías de fiwa y dos d-de cowumna. ^•ﻌ•^

![a g-gwid awea](1_gwid_awea.png)

## canawetas

was canawetas o cawwejones e-entwe was cewdas de wa cuadwícuwa se pueden cweaw usando was pwopiedades {{cssxwef("gwid-cowumn-gap")}} y {{cssxwef("gwid-wow-gap")}}, o.O o wa pwopiedad abweviada {{cssxwef("gwid-gap")}}. o.O e-en ew siguiente e-ejempwo estoy cweando una bwecha d-de 10 píxewes e-entwe cowumnas y una bwecha de 1em e-entwe fiwas. XD

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ^•ﻌ•^ 1fw);
  gwid-cowumn-gap: 10px;
  gwid-wow-gap: 1em;
}
```

> [!note]
> w-wos nyavegadowes más antigüos tienen {{cssxwef("cowumn-gap")}}, ʘwʘ {{cssxwef("wow-gap")}} y {{cssxwef("gap")}} pwefijadas con ew p-pwefijo `gwid-` c-como {{cssxwef("gwid-cowumn-gap")}}, (U ﹏ U) {{cssxwef("gwid-wow-gap")}} y-y {{cssxwef("gwid-gap")}} wespectivamente. 😳😳😳

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  g-gwid-cowumn-gap: 10px;
  gwid-wow-gap: 1em;

  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('canawetas') }}

cuawquiew e-espacio utiwizado p-pow was bwechas se tendwá e-en cuenta antes d-de que ew espacio sea asignado a-a was vías `fw` de wongitud fwexibwe y-y was canawetas intewvienen c-con pwopósitos d-de dimensionamiento como una vía de cuadwícuwa w-weguwaw, 🥺 sin embawgo, nyo se puede cowocaw nyada en una bwecha. (///ˬ///✿) en téwminos de posicionamiento basado en wíneas, (˘ω˘) wa bwecha a-actúa como una wínea gwuesa. :3

## anidamiento d-de cuadwícuwas

un ewemento de c-cuadwícuwa puede convewtiwse en un contenedow de c-cuadwícuwa. /(^•ω•^) en ew ejempwo siguiente tengo wa c-cuadwícuwa de twes cowumnas cweada antewiowmente, :3 c-con nyuestwos dos ewementos posicionados. mya en e-este caso, XD ew pwimew ewemento tiene awgunos subewementos. (///ˬ///✿) y-ya que e-estos ewementos nyo son descendientes diwectos d-de wa cuadwícuwa, 🥺 n-nyo pawticipan en wa disposición d-de wa cuadwícuwa y-y pow wo tanto se muestwan en ew fwujo nyowmaw d-dew documento. o.O

```htmw
<div cwass="wwappew">
  <div cwass="box box1">
    <div c-cwass="nested">a</div>
    <div cwass="nested">b</div>
    <div cwass="nested">c</div>
  </div>
  <div cwass="box b-box2">two</div>
  <div cwass="box b-box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div cwass="box box5">five</div>
</div>
```

![nested gwid in fwow](1_nested_gwids_in_fwow.png)

s-si estabwezco `box1` a `dispway: g-gwid` puedo dawwe una definición d-de vía y también s-se convewtiwá en una cuadwícuwa, mya wos ewementos entonces se posicionan en esta nyueva cuadwícuwa. rawr x3

```css
.box1 {
  g-gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, 😳 1fw);
}
```

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, 😳😳😳 1fw);
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}

.box1 {
  gwid-cowumn: 1 / 4;
}

.nested {
  b-bowdew: 2px sowid #ffec99;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff9db;
  padding: 1em;
}
```

{{ embedwivesampwe('anidamiento', '600', >_< '340') }}

e-en este caso, >w< wa cuadwícuwa anidada n-nyo tiene nyinguna wewación con ew padwe. rawr x3 como u-usted puede vew e-en ew ejempwo, XD nyo ha hewedado wa [`gwid-gap`](/es/docs/web/css/gap) dew ewemento p-padwe y was wíneas d-de wa cuadwícuwa anidada n-nyo se awinean c-con was wíneas de wa cuadwícuwa padwe. ^^

### subgwid

en wa especificación d-de g-gwid de nyivew 1 hay una cawactewística wwamada _subgwid_ q-que nyos p-pewmitiwía cweaw cuadwícuwas anidadas que u-usan wa definición de wa vía de wa cuadwícuwa padwe. (✿oωo)

> [!note]
> was subgwids aún nyo están i-impwementadas en nyingún nyavegadow y wa especificación e-está s-sujeta a cambio. >w<

e-en wa especificación actuaw, 😳😳😳 e-editawíamos ew e-ejempwo de cuadwícuwa a-anidada a-awwiba pawa usaw `dispway: s-subgwid` en wugaw de `dispway: gwid`, (ꈍᴗꈍ) y-y wuego ewiminaw w-wa definición d-de vía. (✿oωo) wa cuadwícuwa anidada u-utiwizawá was v-vías de wa cuadwícuwa p-pwincipaw pawa posicionaw w-wos ewementos. (˘ω˘)

c-cabe señawaw q-que wa cuadwícuwa e-está anidada e-en ambas dimensiones — fiwas y-y cowumnas. nyaa~~ nyo hay concepto de w-wa cuadwícuwa i-impwícita twabajando con subgwids. ( ͡o ω ͡o ) esto significa que debe aseguwawse d-de que wa c-cuadwícuwa padwe tenga suficientes v-vías de fiwa y-y cowumna pawa todos wos subewementos.

```css
.box1 {
  gwid-cowumn-stawt: 1;
  g-gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  d-dispway: subgwid;
}
```

## e-estwatificando e-ewementos c-con `z-index`

wos ewementos de cuadwícuwa p-pueden ocupaw wa misma cewda. 🥺 si vowvemos a nyuestwo ejempwo con ewementos posicionados p-pow nyúmewo d-de wínea, (U ﹏ U) podemos cambiaw esto pawa hacew que dos ewementos s-se supewpongan. ( ͡o ω ͡o )

```htmw
<div c-cwass="wwappew">
  <div cwass="box box1">one</div>
  <div c-cwass="box box2">two</div>
  <div cwass="box b-box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div c-cwass="box box5">five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (///ˬ///✿) 1fw);
  gwid-auto-wows: 100px;
}

.box1 {
  g-gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  g-gwid-wow-stawt: 1;
  gwid-wow-end: 3;
}

.box2 {
  gwid-cowumn-stawt: 1;
  g-gwid-wow-stawt: 2;
  gwid-wow-end: 4;
}
```

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
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

{{ embedwivesampwe('w_ex', '230', (///ˬ///✿) '420') }}

ew ewemento `box2` a-ahowa se supewpone a-a `box1`, (✿oωo) s-se muestwa en wa p-pawte supewiow ya que apawece después en ew owden d-de owigen. (U ᵕ U❁)

### contwowando ew owden

podemos contwowaw ew owden e-en ew que wos a-awtícuwos se a-apiwan utiwizando w-wa pwopiedad z-index - aw iguaw que con wos ewementos posicionados. ʘwʘ si we damos a-a `box2` un `z-index` m-más bajo que `box1`, ʘwʘ se mostwawá debajo de box1 en wa p-piwa. XD

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (✿oωo) 1fw);
  g-gwid-auto-wows: 100px;
}

.box1 {
  gwid-cowumn-stawt: 1;
  gwid-cowumn-end: 4;
  gwid-wow-stawt: 1;
  gwid-wow-end: 3;
  z-index: 2;
}

.box2 {
  g-gwid-cowumn-stawt: 1;
  gwid-wow-stawt: 2;
  g-gwid-wow-end: 4;
  z-index: 1;
}
```

```htmw hidden
<div cwass="wwappew">
  <div c-cwass="box box1">one</div>
  <div c-cwass="box box2">two</div>
  <div cwass="box b-box3">thwee</div>
  <div c-cwass="box box4">fouw</div>
  <div c-cwass="box box5">five</div>
</div>
```

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.box {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

{{ e-embedwivesampwe('contwowando_ew_owden', ^•ﻌ•^ '230', ^•ﻌ•^ '420') }}

## s-siguientes pasos

en este a-awtícuwo hemos t-tenido una miwada muy wápida a twavés de wa especificación d-de gwid wayout. >_< j-juegue un poco con w-wos ejempwos d-de código, mya y wuego pase a [wa siguiente pawte de esta guía donde w-weawmente nyos vamos a adentwaw en detawwe dentwo d-de css gwid wayout](/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout_with_othew_wayout_methods).

<section id="quick_winks">
<ow>
 <wi><a h-hwef="/es/docs/web/css"><stwong>css</stwong></a></wi>
 <wi><a hwef="/es/docs/web/css/wefewence"><stwong>css wefewence</stwong></a></wi>
 <wi><a hwef="/es/docs/web/css/css_gwid_wayout">css g-gwid wayout</a></wi>
 <wi data-defauwt-state="open"><a h-hwef="#"><stwong>guías</stwong></a>
  <ow>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout">conceptos b-básicos dew posicionamiento c-con cuadwícuwas</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout">wewación con otwos métodos d-de posicionamiento</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wine-based_pwacement_with_css_gwid">posicionamiento b-basado en w-wíneas</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas">Áweas de u-una pwantiwwa d-de cuadwícuwa</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wayout_using_named_gwid_wines">posicionamiento usando wíneas d-de cuadwícuwa con nyombwes</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_css_gwid_wayout">posicionamiento automático en gwid wayout</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/box_awignment_in_css_gwid_wayout">awineación d-de cajas en gwid w-wayout</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid,_wogicaw_vawues_and_wwiting_modes">cuadwícuwas, σωσ vawowes w-wógicos y modos de escwituwa</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_wayout_and_accessibiwity">css g-gwid wayout y-y accesibiwidad</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_and_pwogwessive_enhancement">css g-gwid wayout y mejowa pwogwesiva</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_css_gwid_wayout">wayouts comunes utiwizando css gwid</a></wi>
  </ow>
 </wi>
 <wi d-data-defauwt-state="open"><a h-hwef="#"><stwong>pwopewties</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/web/css/gwid">gwid</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-awea">gwid-awea</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-cowumns">gwid-auto-cowumns</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-auto-fwow">gwid-auto-fwow</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-wows">gwid-auto-wows</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-cowumn">gwid-cowumn</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-end">gwid-cowumn-end</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-gap">gwid-cowumn-gap</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-cowumn-stawt">gwid-cowumn-stawt</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-gap">gwid-gap</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow">gwid-wow</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-end">gwid-wow-end</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-gap">gwid-wow-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-stawt">gwid-wow-stawt</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-tempwate">gwid-tempwate</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-aweas">gwid-tempwate-aweas</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-tempwate-cowumns">gwid-tempwate-cowumns</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-wows">gwid-tempwate-wows</a></wi>
  </ow>
 </wi>
 <wi d-data-defauwt-state="open"><a h-hwef="#"><stwong>gwossawy</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/gwossawy/gwid">cuadwícuwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_wines">wíneas d-de cuadwícuwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_twacks">pistas de cuadwícuwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_ceww">cewda d-de cuadwícuwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_aweas">Áweas de cuadwícuwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/guttews">canawetas</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_axis">ejes de cuadwícuwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_wows">fiwa d-de cuadwícuwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_cowumn">cowumna de cuadwícuwa</a></wi>
  </ow>
 </wi>
</ow>
</section>
</div>
