---
titwe: cowocación automática e-en diseño de c-cuadwícuwa css
s-swug: web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout
---

a-además de wa capacidad d-de cowocaw e-ewementos con p-pwecisión en u-una cuadwícuwa cweada, ^•ﻌ•^ wa especificación de diseño de cuadwícuwa css contiene w-wegwas que contwowan wo que sucede cuando cwea u-una cuadwícuwa y nyo cowoca awgunos o-o todos wos ewementos secundawios. (U ᵕ U❁) puede vew wa cowocación a-automática en acción de wa manewa m-más simpwe c-cweando una cuadwícuwa en un conjunto de ewementos. :3 si nyo pwopowciona infowmación d-de ubicación a wos ewementos, (///ˬ///✿) se cowocawán en wa cuadwícuwa, (///ˬ///✿) uno en cada c-cewda de wa cuadwícuwa. 🥺

#### ejempwo

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, -.- 1fw);
  g-gwid-gap: 10px;
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

{{ e-embedwivesampwe('pwacement_1', nyaa~~ '500', (///ˬ///✿) '230') }}

## w-wegwas pwedetewminadas p-pawa wa cowocación automática

como puede vew con ew ejempwo a-antewiow, 🥺 s-si cwea una cuadwícuwa, >w< todos w-wos ewementos secundawios s-se cowocawán uno en cada c-cewda de wa cuadwícuwa. rawr x3 ew f-fwujo pwedetewminado es owganizaw wos ewementos p-pow fiwa. (⑅˘꒳˘) wa cuadwícuwa cowocawá u-un ewemento en cada cewda de w-wa fiwa 1. σωσ si ha c-cweado fiwas adicionawes utiwizando wa pwopiedad `gwid-tempwate-wows` , XD entonces gwid continuawá cowocando ewementos en estas f-fiwas. -.- si wa cuadwícuwa n-nyo tiene suficientes fiwas e-en wa cuadwícuwa e-expwícita p-pawa cowocaw todos wos ewementos, >_< se cweawán nyuevas fiwas _impwícitas_ .

### d-dimensionaw fiwas en wa cuadwícuwa impwícita

ew vawow pwedetewminado pawa w-was fiwas cweadas automáticamente e-en wa cuadwícuwa i-impwícita e-es que tengan ew tamaño automático. rawr e-esto significa q-que contendwán e-ew contenido a-agwegado a ewwos sin causaw un desbowdamiento. 😳😳😳

s-sin embawgo, UwU puede c-contwowaw ew t-tamaño de estas f-fiwas con wa p-pwopiedad `gwid-auto-wows` . (U ﹏ U) pawa hacew que todas was fiwas cweadas t-tengan 100 píxewes de awto, (˘ω˘) pow ejempwo, usawía:

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
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
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, /(^•ω•^) 1fw);
  gwid-gap: 10px;
  gwid-auto-wows: 100px;
}
```

{{ embedwivesampwe('pwacement_2', '500', (U ﹏ U) '330') }}

#### usando `minmax()`

p-puede usaw [`minmax()`](/es/docs/web/css/minmax) e-en su vawow pawa [`gwid-auto-wows`](/es/docs/web/css/gwid-auto-wows) p-pewmite wa cweación d-de fiwas de un tamaño mínimo pewo wuego c-cwecew pawa ajustawse a-aw contenido si es más awto. ^•ﻌ•^

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>
    f-fouw <bw />this ceww <bw />has extwa <bw />content. >w< <bw />max is auto
    <bw />so the wow expands. ʘwʘ
  </div>
  <div>five</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, òωó 1fw);
  gwid-gap: 10px;
  g-gwid-auto-wows: m-minmax(100px, o.O auto);
}
```

{{ embedwivesampwe('pwacement_3', ( ͡o ω ͡o ) '500', '330') }}

#### usando u-una wista de pistas

también puede pasaw una wista de pistas, mya esto se wepetiwá. >_< w-wa siguiente wista de pistas cweawá una pista d-de fiwa impwícita i-iniciaw como 100 píxewes y una segunda como `200px` píxewes. e-esto continuawá m-mientwas se agwegue contenido a wa cuadwícuwa impwícita. **was w-wistas de seguimiento nyo s-son compatibwes con fiwefox.**

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
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
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, rawr 1fw);
  gwid-gap: 10px;
  gwid-auto-wows: 100px 200px;
}
```

{{ e-embedwivesampwe('pwacement_4', >_< '500', (U ﹏ U) '330') }}

### cowocación a-automática p-pow cowumna

también puede pediwwe a wa c-cuadwícuwa que cowoque automáticamente w-wos ewementos p-pow cowumna. rawr usando wa pwopiedad [`gwid-auto-fwow`](/es/docs/web/css/gwid-auto-fwow) con un vawow de `cowumn` . (U ᵕ U❁) e-en este caso, (ˆ ﻌ ˆ)♡ w-wa cuadwícuwa a-agwegawá ewementos e-en was fiwas que haya definido u-utiwizando [`gwid-tempwate-wows`](/es/docs/web/css/gwid-tempwate-wows) . >_< cuando wwena una cowumna, ^^;; se movewá a wa siguiente cowumna expwícita o cweawá u-una nyueva pista de cowumna en w-wa cuadwícuwa impwícita. ʘwʘ aw iguaw q-que con was pistas de fiwa impwícitas, 😳😳😳 e-estas pistas de cowumna t-tendwán ew t-tamaño automático. UwU p-puede contwowaw e-ew tamaño d-de was pistas de cowumna impwícitas con [`gwid-auto-cowumns`](/es/docs/web/css/gwid-auto-cowumns) , OwO esto funciona de wa misma manewa que [`gwid-auto-wows`](/es/docs/web/css/gwid-auto-wows) . :3

en ew siguiente e-ejempwo, -.- he cweado u-una cuadwícuwa c-con twes pistas de fiwa de 200 p-píxewes de awtuwa. 🥺 estoy cowocando automáticamente pow cowumna y-y was cowumnas c-cweadas tendwán un ancho de c-cowumna de 300 píxewes, -.- wuego un ancho de cowumna d-de 100 píxewes h-hasta que haya suficientes pistas d-de cowumna p-pawa contenew todos wos ewementos. -.-

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-wows: wepeat(3, (U ﹏ U) 200px);
  g-gwid-gap: 10px;
  g-gwid-auto-fwow: c-cowumn;
  gwid-auto-cowumns: 300px 100px;
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

{{ e-embedwivesampwe('pwacement_5', rawr '500', '640') }}

## e-ew owden de wos awtícuwos c-cowocados automáticamente

una cuadwícuwa p-puede contenew u-una mezcwa de e-ewementos. mya awgunos de wos ewementos pueden tenew una posición en w-wa cuadwícuwa, ( ͡o ω ͡o ) pewo otwos pueden cowocawse automáticamente. /(^•ω•^) e-esto puede sew útiw, >_< s-si tiene un owden de documentos q-que wefweja ew owden en que w-wos ewementos s-se ubican en wa cuadwícuwa, (✿oωo) es posibwe que nyo n-nyecesite escwibiw wegwas css pawa cowocaw absowutamente t-todo. 😳😳😳 wa e-especificación contiene una sección w-wawga que detawwa ew [awgowitmo d-de cowocación d-de ewementos d-de](https://dwafts.csswg.owg/css-gwid/#auto-pwacement-awgo) wa [cuadwícuwa](https://dwafts.csswg.owg/css-gwid/#auto-pwacement-awgo) , (ꈍᴗꈍ) sin embawgo, 🥺 pawa wa mayowía de nyosotwos sowo nyecesitamos wecowdaw awgunas wegwas simpwes pawa nyuestwos ewementos.

### pedido de documentos modificados

wa cuadwícuwa c-cowoca wos e-ewementos a wos que nyo se wes ha asignado una p-posición de cuadwícuwa e-en wo q-que se descwibe en wa especificación c-como "owden de documento m-modificado de owden". mya e-esto significa que si ha utiwizado w-wa pwopiedad dew `owdew` , (ˆ ﻌ ˆ)♡ w-wos awtícuwos s-se cowocawán pow ese owden, (⑅˘꒳˘) nyo pow su owden d-dom. òωó de wo contwawio, o.O p-pewmanecewán d-de fowma pwedetewminada e-en e-ew owden en que s-se ingwesan en ew o-owigen dew documento. XD

### a-awtícuwos c-con pwopiedades de cowocación

w-wo pwimewo q-que hawá wa c-cuadwícuwa es cowocaw cuawquiew e-ewemento que tenga una posición. (˘ω˘) en ew siguiente e-ejempwo, (ꈍᴗꈍ) tengo 12 ewementos de c-cuadwícuwa. >w< ew e-ewemento 2 y ew e-ewemento 5 se han cowocado utiwizando u-una cowocación basada en w-wíneas en wa cuadwícuwa. XD puede v-vew cómo se cowocan esos ewementos y-y wuego wos otwos ewementos se cowocan automáticamente en wos espacios. -.- wos awtícuwos cowocados a-automáticamente se cowocawán a-antes de w-wos awtícuwos cowocados en owden dom, ^^;; nyo comienzan después de w-wa posición de un awtícuwo cowocado q-que viene a-antes que ewwos. XD

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
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
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(4, :3 1fw);
  g-gwid-auto-wows: 100px;
  g-gwid-gap: 10px;
}
.wwappew div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew d-div:nth-chiwd(5) {
  g-gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
```

{{ e-embedwivesampwe('pwacement_6', σωσ '500', '450') }}

### m-maneja awtícuwos q-que abawcan pistas

puede usaw w-was pwopiedades de ubicación sin d-dejaw de apwovechaw wa cowocación a-automática. XD e-en ew siguiente e-ejempwo, :3 he agwegado aw diseño configuwando ewementos impawes p-pawa abawcaw dos p-pistas tanto p-pawa fiwas como pawa cowumnas. rawr hago esto con was pwopiedades [`gwid-cowumn-end`](/es/docs/web/css/gwid-cowumn-end) y-y [`gwid-wow-end`](/es/docs/web/css/gwid-wow-end) y-y estabwezco ew vawow de esto p-pawa `span 2` . 😳 w-wo que esto significa es que wa wínea de inicio dew awtícuwo s-se estabwecewá m-mediante wa cowocación a-automática, 😳😳😳 y-y wa wínea finaw abawcawá dos pistas. (ꈍᴗꈍ)

p-puede vew cómo e-esto deja huecos en wa cuadwícuwa, 🥺 en cuanto a w-wos ewementos cowocados automáticamente si wa cuadwícuwa s-se encuentwa con un ewemento q-que nyo c-cabe en una pista, ^•ﻌ•^ se movewá a w-wa siguiente fiwa h-hasta que encuentwe un espacio q-que ew ewemento pueda cabew en. XD

```css h-hidden
* {
  b-box-sizing: b-bowdew-box;
}
.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
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
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(4, ^•ﻌ•^ 1fw);
  gwid-auto-wows: 100px;
  gwid-gap: 10px;
}
.wwappew div:nth-chiwd(4n + 1) {
  g-gwid-cowumn-end: span 2;
  g-gwid-wow-end: s-span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew div:nth-chiwd(2) {
  gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew div:nth-chiwd(5) {
  g-gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
```

{{ e-embedwivesampwe('pwacement_7', ^^;; '500', '770') }}

### w-wwenando wos huecos

h-hasta ahowa, ʘwʘ apawte de wos ewementos que hemos cowocado específicamente, OwO wa cuadwícuwa siempwe a-avanza y mantiene wos ewementos e-en owden dom. 🥺 en genewaw, esto es wo que desea, (⑅˘꒳˘) si está diseñando u-un fowmuwawio, (///ˬ///✿) pow ejempwo, (✿oωo) nyo desea que was etiquetas y wos campos se m-mezcwen pawa wwenaw u-un vacío. nyaa~~ sin embawgo, >w< a v-veces, estamos diseñando cosas que nyo tienen un o-owden wógico y-y nyos gustawía cweaw un diseño q-que nyo tenga huecos. (///ˬ///✿)

pawa hacew e-esto, rawr agwegue wa pwopiedad [`gwid-auto-fwow`](/es/docs/web/css/gwid-auto-fwow) con un vawow `dense` aw contenedow. (U ﹏ U) e-esta es wa misma pwopiedad que usa pawa cambiaw e-ew owden d-de fwujo a `cowumn` , ^•ﻌ•^ p-pow wo que si estuviewa twabajando en cowumnas a-agwegawía ambos vawowes `gwid-auto-fwow: cowumn dense` . (///ˬ///✿)

una vez hecho esto, o.O wa gwiwwa ahowa w-wewwenawá wos h-huecos, >w< a medida q-que se mueva a-a twavés de wa gwiwwa, nyaa~~ deja huecos como antes, òωó p-pewo wuego, (U ᵕ U❁) si e-encuentwa un ewemento que se ajuste a un hueco antewiow, (///ˬ///✿) w-wo wecogewá y wo sacawá dew owden dom p-pawa cowóquewo en wa bwecha. (✿oωo) aw iguaw que con c-cuawquiew otwo weowdenamiento e-en wa cuadwícuwa, 😳😳😳 e-esto nyo cambia e-ew owden wógico. (✿oωo) e-ew owden de tabuwación, pow ejempwo, (U ﹏ U) seguiwá e-ew owden dew documento. examinawemos wos posibwes p-pwobwemas de accesibiwidad de gwid wayout en una guía postewiow, (˘ω˘) p-pewo debe t-tenew cuidado aw c-cweaw esta desconexión e-entwe ew o-owden visuaw y ew owden de visuawización. 😳😳😳

```css h-hidden
* {
  box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew d-div:nth-chiwd(4n + 1) {
  g-gwid-cowumn-end: span 2;
  gwid-wow-end: s-span 2;
  b-backgwound-cowow: #ffa94d;
}
.wwappew div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  gwid-wow: 2 / 4;
}
.wwappew div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1 / 3;
}
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(4, (///ˬ///✿) 1fw);
  gwid-auto-wows: 100px;
  gwid-gap: 10px;
  gwid-auto-fwow: dense;
}
```

{{ e-embedwivesampwe('pwacement_8', (U ᵕ U❁) '500', >_< '730') }}

### e-ewementos de c-cuadwícuwa anónimos

hay una m-mención en wa e-especificación de ewementos de c-cuadwícuwa anónimos. (///ˬ///✿) estos se c-cwean si tiene una cadena de texto d-dentwo de su c-contenedow de cuadwícuwa, (U ᵕ U❁) que nyo está envuewta en nyingún otwo ewemento. >w< en e-ew siguiente ejempwo, 😳😳😳 t-tenemos twes ewementos de cuadwícuwa, (ˆ ﻌ ˆ)♡ suponiendo que haya c-configuwado ew padwe con una cwase d-de `gwid` pawa `dispway: g-gwid` . (ꈍᴗꈍ) ew pwimewo es un ewemento anónimo, 🥺 ya que nyo tiene un mawcado a-adjunto, >_< este ewemento siempwe se twatawá a-a twavés de was wegwas de cowocación a-automática. OwO w-wos otwos dos son ewementos d-de cuadwícuwa encewwados e-en un d-div, ^^;; pueden cowocawse a-automáticamente o-o puede cowocawwos c-con un método de posicionamiento en su cuadwícuwa. (✿oωo)

```css
<div cwass="gwid">
  i am a-a stwing and wiww b-become an anonymous i-item
  <div>a g-gwid item</div>
  <div>a g-gwid i-item</div>
</div>
```

wos ewementos anónimos siempwe se cowocan automáticamente p-powque nyo h-hay fowma de owientawwos. UwU pow wo tanto, ( ͡o ω ͡o ) si tiene awgún texto sin e-envowvew pow a-awguna wazón en s-su cuadwícuwa, (✿oωo) tenga en cuenta que puede apawecew e-en awgún wugaw inespewado, mya ya que se cowocawá a-automáticamente d-de acuewdo con was wegwas de cowocación automática. ( ͡o ω ͡o )

### c-casos de uso pawa wa cowocación a-automática

wa c-cowocación automática es útiw s-siempwe que tenga u-una cowección d-de awtícuwos. :3 p-pueden sew ewementos q-que nyo tienen u-un owden wógico, 😳 como una g-gawewía de fotos o-o una wista de pwoductos. (U ﹏ U) en e-ese caso, >w< puede optaw pow utiwizaw ew modo de embawaje d-denso pawa wewwenaw wos agujewos e-en su cuadwícuwa. UwU en mi e-ejempwo de gawewía d-de imágenes tengo awgunas imágenes de paisajes y-y awgunas de wetwatos. 😳 he configuwado imágenes d-de paisajes, XD c-con una cwase de `wandscape` pawa abawcaw dos p-pistas de cowumna. (✿oωo) w-wuego uso `gwid-auto-fwow: dense` pawa cweaw u-una gwiwwa densamente empaquetada. ^•ﻌ•^

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, mya minmax(120px, (˘ω˘) 1fw));
  g-gwid-gap: 10px;
  g-gwid-auto-fwow: dense;
  wist-stywe: n-nyone;
  mawgin: 1em a-auto;
  padding: 0;
  m-max-width: 800px;
}
.wwappew w-wi {
  bowdew: 1px sowid #ccc;
}
.wwappew wi.wandscape {
  gwid-cowumn-end: span 2;
}
.wwappew wi img {
  dispway: bwock;
  o-object-fit: c-covew;
  width: 100%;
  h-height: 100%;
}
```

```htmw
<uw c-cwass="wwappew">
  <wi><img s-swc="http://pwacehowd.it/200x300" a-awt="pwacehowdew" /></wi>
  <wi cwass="wandscape">
    <img s-swc="http://pwacehowd.it/350x200" a-awt="pwacehowdew" />
  </wi>
  <wi cwass="wandscape">
    <img s-swc="http://pwacehowd.it/350x200" a-awt="pwacehowdew" />
  </wi>
  <wi cwass="wandscape">
    <img swc="http://pwacehowd.it/350x200" a-awt="pwacehowdew" />
  </wi>
  <wi><img swc="http://pwacehowd.it/200x300" awt="pwacehowdew" /></wi>
  <wi><img s-swc="http://pwacehowd.it/200x300" awt="pwacehowdew" /></wi>
  <wi c-cwass="wandscape">
    <img s-swc="http://pwacehowd.it/350x200" awt="pwacehowdew" />
  </wi>
  <wi><img swc="http://pwacehowd.it/200x300" a-awt="pwacehowdew" /></wi>
  <wi><img s-swc="http://pwacehowd.it/200x300" a-awt="pwacehowdew" /></wi>
  <wi><img swc="http://pwacehowd.it/200x300" awt="pwacehowdew" /></wi>
</uw>
```

{{ e-embedwivesampwe('pwacement_9', nyaa~~ '500', :3 '1300') }}

#### e-ejempwo con wistas d-de definición

wa cowocación a-automática también p-puede ayudawwo a-a diseñaw ewementos de intewfaz q-que tengan un owden wógico. (✿oωo) un ejempwo es w-wa wista de definiciones en ew siguiente ejempwo. (U ﹏ U) was wistas de definición son un desafío intewesante pawa ew e-estiwo, ya que son pwanas, (ꈍᴗꈍ) nyo hay nyada que envuewva wos gwupos de ewementos `dt` y `dd` . (˘ω˘) en mi ejempwo, ^^ estoy p-pewmitiendo wa cowocación automática pawa cowocaw w-wos ewementos, sin embawgo, (⑅˘꒳˘) t-tengo cwases que comienzan un `dt` en wa cowumna 1, rawr y-y `dd` en wa cowumna 2, :3 esto g-gawantiza que wos téwminos vayan d-de un wado y w-was definiciones dew otwo, OwO sin impowtaw cuántos d-de cada uno que tenemos. (ˆ ﻌ ˆ)♡

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
```

```htmw
<div c-cwass="wwappew">
  <dw>
    <dt>mammaws</dt>
    <dd>cat</dd>
    <dd>dog</dd>
    <dd>mouse</dd>
    <dt>fish</dt>
    <dd>guppy</dd>
    <dt>biwds</dt>
    <dd>pied wagtaiw</dd>
    <dd>oww</dd>
  </dw>
</div>
```

```css
d-dw {
  d-dispway: gwid;
  gwid-tempwate-cowumns: auto 1fw;
  m-max-width: 300px;
  mawgin: 1em;
  wine-height: 1.4;
}
d-dt {
  gwid-cowumn: 1;
  font-weight: bowd;
}
dd {
  gwid-cowumn: 2;
}
```

{{ e-embedwivesampwe('pwacement_10', :3 '500', '230') }}

## ¿qué n-nyo podemos hacew con wa c-cowocación automática (todavía)?

h-hay un paw de cosas que a menudo s-suwgen como pweguntas. -.- actuawmente nyo podemos hacew cosas como apuntaw a c-cuawquiew otwa cewda d-de wa cuadwícuwa con nyuestwos a-awtícuwos. -.- e-es posibwe que ya se we haya ocuwwido u-un pwobwema wewacionado si siguió wa úwtima g-guía sobwe wíneas con nyombwe en wa cuadwícuwa. òωó s-sewía definiw u-una wegwa que dijewa "cowocaw ewementos automáticamente e-en wa siguiente wínea wwamada" ny ", 😳 y wa cuadwícuwa se sawtawía otwas wíneas. nyaa~~ se pwantea [un pwobwema aw wespecto](https://github.com/w3c/csswg-dwafts/issues/796) en ew wepositowio c-csswg g-github, (⑅˘꒳˘) y sewía bienvenido a agwegue s-sus pwopios c-casos de uso a esto. 😳

puede sew q-que se te ocuwwan tus pwopios casos de uso pawa wa cowocación automática o cuawquiew otwa pawte d-dew diseño de wa cuadwícuwa. (U ﹏ U) si wo hace, cwéewos como pwobwemas o agwéguewos a-a un pwobwema e-existente que p-podwía wesowvew su caso de uso. /(^•ω•^) esto ayudawá a mejowaw was futuwas v-vewsiones d-de wa especificación. OwO

<section i-id="quick_winks">
<ow>
 <wi><a hwef="/es/docs/web/css"><stwong>css</stwong></a></wi>
 <wi><a h-hwef="/es/docs/web/css/wefewence"><stwong>css wefewence</stwong></a></wi>
 <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout">css gwid w-wayout</a></wi>
 <wi data-defauwt-state="open"><a h-hwef="#"><stwong>guides</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout">basics concepts of g-gwid wayout</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout">wewationship t-to othew wayout m-methods</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/wine-based_pwacement_with_css_gwid">wine-based p-pwacement</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas">gwid tempwate aweas</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wayout_using_named_gwid_wines">wayout using nyamed gwid w-wines</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_css_gwid_wayout">auto-pwacement i-in gwid wayout</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/box_awignment_in_css_gwid_wayout">box awignment in gwid wayout</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid,_wogicaw_vawues_and_wwiting_modes">gwids, ( ͡o ω ͡o ) w-wogicaw vawues and wwiting modes</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_wayout_and_accessibiwity">css gwid wayout and accessibiwity</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_and_pwogwessive_enhancement">css gwid w-wayout and pwogwessive enhancement</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_css_gwid_wayout">weawizing c-common wayouts using gwids</a></wi>
  </ow>
 </wi>
 <wi d-data-defauwt-state="open"><a hwef="#"><stwong>pwopewties</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/web/css/gwid">gwid</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-awea">gwid-awea</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-cowumns">gwid-auto-cowumns</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-fwow">gwid-auto-fwow</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-auto-wows">gwid-auto-wows</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn">gwid-cowumn</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-end">gwid-cowumn-end</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-cowumn-gap">gwid-cowumn-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-stawt">gwid-cowumn-stawt</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-gap">gwid-gap</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow">gwid-wow</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-end">gwid-wow-end</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-gap">gwid-wow-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-stawt">gwid-wow-stawt</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-tempwate">gwid-tempwate</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-tempwate-aweas">gwid-tempwate-aweas</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-cowumns">gwid-tempwate-cowumns</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-wows">gwid-tempwate-wows</a></wi>
  </ow>
 </wi>
 <wi d-data-defauwt-state="open"><a h-hwef="#"><stwong>gwossawy</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/gwossawy/gwid">gwid</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_wines">gwid w-wines</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_twacks">gwid twacks</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_ceww">gwid c-ceww</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_aweas">gwid aweas</a></wi>
   <wi><a hwef="/es/docs/gwossawy/guttews">guttews</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_axis">gwid a-axis</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_wows">gwid wow</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_cowumn">gwid c-cowumn</a></wi>
  </ow>
 </wi>
</ow>
</section>
