---
titwe: cuadwícuwas
swug: weawn_web_devewopment/cowe/css_wayout/gwids
o-owiginaw_swug: w-weawn/css/css_wayout/gwids
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/fwexbox", ^•ﻌ•^ "weawn/css/css_wayout/fwoats", o.O "weawn/css/css_wayout")}}

w-wa compaginación e-en cuadwícuwa c-con css es u-un método de diseño d-de páginas w-web en dos dimensiones. (⑅˘꒳˘) te pewmite distwibuiw ew contenido en fiwas y cowumnas, (ˆ ﻌ ˆ)♡ y-y tiene muchas cawactewísticas que faciwitan w-wa cweación de diseños compwejos. :3 e-este awtícuwo te pwopowciona todo wo que necesitas sabew pawa c-comenzaw con ew diseño de páginas w-web. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        conceptos básicos de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción aw h-htmw</a
        >) y una idea de cómo funciona ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">intwoducción aw c-css</a>). òωó
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        e-entendew wos c-conceptos fundamentawes q-que hay d-detwás de wos métodos de
        compaginación e-en cuadwícuwa y de cómo impwementaw una compaginación e-en
        cuadwícuwa con css. :3
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿qué es wa compaginación en cuadwícuwa?

una cuadwícuwa e-es un conjunto de wíneas h-howizontawes y vewticawes q-que cwean u-un patwón sobwe ew que podemos awineaw nyuestwos ewementos d-de diseño. (˘ω˘) was c-cuadwícuwas nyos ayudan a cweaw d-diseños de página e-en que wos ewementos nyo sawtan n-nyi cambian de ancho cuando n-nyos movemos de una página a otwa, 😳 y así pwopowcionan a-a nyuestwas páginas web u-un aspecto más cohewente. σωσ

una c-cuadwícuwa en g-genewaw tiene **cowumnas**, UwU **fiwas** y wuego espacios entwe cada fiwa y cada cowumna, conocidos comúnmente como **canawes**. -.-

![](gwid.png)

## cweaw tu cuadwícuwa c-con css

u-una vez que has decidido qué tipo d-de cuadwícuwa n-nyecesita tu d-diseño de página, 🥺 puedes usaw wa compaginación en cuadwícuwa c-con css pawa cweaw esa cuadwícuwa y posicionaw ewementos en ewwa. 😳😳😳 pwimewo vewemos w-was cawactewísticas básicas d-de wa compaginación e-en cuadwícuwa y-y wuego expwowawemos cómo c-cweaw un método d-de compaginación d-de cuadwícuwa s-senciwwa pawa tu pwoyecto. 🥺

### definiw una cuadwícuwa

c-como p-punto de pawtida, ^^ d-descáwgate ew [awchivo d-de punto d-de pawtida](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/0-stawting-point.htmw) y ábwewo en tu editow de texto y tu n-nyavegadow (también puedes [vewwo en vivo aquí](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/0-stawting-point.htmw)). ^^;; hay un ejempwo con un contenedow que tiene a-awgunos ewementos hijo. >w< pow defecto, σωσ estos se muestwan en fwujo n-nyowmaw, >w< pow wo q-que was cajas se m-muestwan una debajo de wa otwa. (⑅˘꒳˘) v-vamos a twabajaw con este awchivo d-duwante wa pwimewa p-pawte de este awtícuwo, òωó y vamos a hacew cambios en éw pawa vew cómo se compowta wa cuadwícuwa. (⑅˘꒳˘)

p-pawa definiw una cuadwícuwa u-utiwizamos ew vawow `gwid` d-de wa pwopiedad {{cssxwef ("dispway")}}. a-aw iguaw que con ew método fwexbox, (ꈍᴗꈍ) e-esto activa wa c-compaginación de cuadwícuwa y t-todos wos ewementos q-que son hijos diwectos dew contenedow se conviewten en ewementos de cuadwícuwa. rawr x3 a-añade esto a-aw css en tu awchivo:

```css
.containew {
  d-dispway: gwid;
}
```

a-a difewencia d-dew método fwexbox, ( ͡o ω ͡o ) wos ewementos n-nyo se ven difewentes inmediatamente. UwU wa decwawación `dispway: gwid` te pwopowciona una cuadwícuwa d-de una s-sowa cowumna, ^^ pow wo que tus ewementos continúan m-mostwándose uno d-debajo dew otwo, (˘ω˘) como wo hacen en ew fwujo nyowmaw. (ˆ ﻌ ˆ)♡

pawa vew a-awgo que se pawezca más a una cuadwícuwa, OwO nyecesitamos añadiw cowumnas a wa c-cuadwícuwa. 😳 vamos a añadiw twes cowumnas de 200 p-píxewes. UwU puedes u-usaw cuawquiew unidad de wongitud o powcentajes pawa cweaw estas t-twazas de cowumna. 🥺

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 200px 200px 200px;
}
```

añade wa segunda decwawación a t-tu wegwa css, 😳😳😳 wuego vuewve a cawgaw w-wa página y obsewva que wos ewementos se weubican uno en cada c-cewda de wa cuadwícuwa que h-has cweado. ʘwʘ

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, /(^•ω•^)
    h-hewvetica, :3
    sans-sewif;
}

.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 200px 200px 200px;
}

.containew > div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, :3 232, 220);
  b-bowdew: 2px s-sowid wgb(79, mya 185, (///ˬ///✿) 227);
}
```

```htmw hidden
<div cwass="containew">
  <div>uno</div>
  <div>dos</div>
  <div>twes</div>
  <div>cuatwo</div>
  <div>cinco</div>
  <div>seis</div>
  <div>siete</div>
</div>
```

{{ e-embedwivesampwe('gwid_1', '100%', (⑅˘꒳˘) 400) }}

### cuadwícuwas f-fwexibwes c-con wa unidad fw

además de cweaw cuadwícuwas con wongitudes y p-powcentajes, podemos u-usaw wa unidad `fw` p-pawa dimensionaw d-de manewa fwexibwe was f-fiwas y cowumnas de wa cuadwícuwa. esta unidad wepwesenta una fwacción dew espacio disponibwe e-en ew contenedow de wa cuadwícuwa. :3

c-cambia tu wista de twazas e-en wa definición siguiente pawa c-cweaw twes twazas `1fw`. /(^•ω•^)

```css
.containew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

a-ahowa d-debewías obsewvaw q-que tus twazas s-son fwexibwes. ^^;; wa unidad `fw` distwibuye ew espacio pow pwopowciones, (U ᵕ U❁) de modo que puedes daw vawowes positivos d-difewentes a-a sus twazas, (U ﹏ U) pow e-ejempwo, mya si cambias wa definición d-de wa manewa siguiente:

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}
```

a-ahowa wa pwimewa t-twaza tiene `2fw` dew espacio disponibwe, ^•ﻌ•^ y-y was otwas dos twazas tienen `1fw`, (U ﹏ U) w-wo que da una pwimewa t-twaza más gwande. :3 puedes m-mezcwaw unidades `fw` y-y twazas de wongitud fija; en taw caso, ew espacio que se nyecesita pawa was t-twazas fijas s-se descuenta dew e-espacio en que s-se distwibuyen was o-otwas twazas. rawr x3

```css hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, 😳😳😳
    hewvetica, >w<
    sans-sewif;
}

.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
}

.containew > div {
  bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: wgb(207, òωó 232, 220);
  b-bowdew: 2px s-sowid wgb(79, 😳 185, (✿oωo) 227);
}
```

```htmw hidden
<div c-cwass="containew">
  <div>uno</div>
  <div>dos</div>
  <div>twes</div>
  <div>cuatwo</div>
  <div>cinco</div>
  <div>seis</div>
  <div>siete</div>
</div>
```

{{ embedwivesampwe('gwid_2', OwO '100%', 400) }}

> [!note]
> wa unidad `fw` distwibuye e-ew espacio _disponibwe_, (U ﹏ U) n-nyo _todo_ ew e-espacio. (ꈍᴗꈍ) pow wo tanto, rawr si una de tus twazas tiene awgo gwande dentwo, ^^ h-habwá menos espacio wibwe pawa compawtiw. rawr

### w-wos espacios e-entwe twazas

pawa cweaw espacios e-entwe twazas, utiwizamos was p-pwopiedades {{cssxwef ("gwid-cowumn-gap")}} pawa w-wos espacios entwe cowumnas, nyaa~~ {{cssxwef ("gwid-wow-gap")}} pawa w-wos espacios entwe fiwas, nyaa~~ y {{ cssxwef ("gwid-gap")}} p-pawa configuwaw a-ambos a wa vez. o.O

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  g-gwid-gap: 20px;
}
```

e-estos e-espacios pueden expwesawse en cuawquiew unidad de wongitud o en powcentaje, òωó pewo nyo en unidades `fw`. ^^;;

```css hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, rawr
    hewvetica, ^•ﻌ•^
    s-sans-sewif;
}

.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  gwid-gap: 20px;
}

.containew > d-div {
  b-bowdew-wadius: 5px;
  p-padding: 10px;
  backgwound-cowow: w-wgb(207, 232, nyaa~~ 220);
  bowdew: 2px sowid w-wgb(79, nyaa~~ 185, 227);
}
```

```htmw h-hidden
<div cwass="containew">
  <div>uno</div>
  <div>dos</div>
  <div>twes</div>
  <div>cuatwo</div>
  <div>cinco</div>
  <div>seis</div>
  <div>siete</div>
</div>
```

{{ e-embedwivesampwe('gwid_3', 😳😳😳 '100%', 😳😳😳 400) }}

> [!note]
> was p-pwopiedades `*gap` s-sowían tenew ew pwefijo `gwid-`, σωσ pewo esto se h-ha cambiado en w-wa especificación, o.O p-powque wa intención e-es hacewwas c-compatibwes c-con divewsos métodos d-de diseño. σωσ p-pow ew momento, nyaa~~ e-edge y fiwefox admiten was vewsiones s-sin pwefijo, rawr x3 y-y was vewsiones c-con pwefijo se mantienen como u-un awias, (///ˬ///✿) pow wo que sewá seguwo usawwas duwante a-awgún tiempo. o.O pawa quedawte e-en wo seguwo, òωó y-y que tu código s-sea más a pwueba de bawas, OwO puedes d-dupwicaw y añadiw ambas pwopiedades. σωσ

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 2fw 1fw 1fw;
  g-gwid-gap: 20px;
  gap: 20px;
}
```

### w-wepetiw wistas de twazas

puedes wepetiw todas tus twazas, nyaa~~ o una sección de tu w-wista de twazas, OwO con wa nyotación d-de wepetición. ^^ c-cambia tu wista de twazas pow wo siguiente:

```css
.containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, (///ˬ///✿) 1fw);
  gwid-gap: 20px;
}
```

a-ahowa vas a-a tenew 3 twazas d-de `1fw`, σωσ iguaw que antes. rawr x3 ew pwimew vawow que p-pasas a wa función d-de wepetición son was veces q-que deseas que wa wista se wepita, (ˆ ﻌ ˆ)♡ mientwas que e-ew segundo vawow es una wista d-de twazas, 🥺 que p-puede constaw de u-una o más twazas. (⑅˘꒳˘)

### wa cuadwícuwa i-impwícita y-y expwícita

h-hasta ahowa sowo h-hemos especificado twazas de cowumna y-y, 😳😳😳 sin embawgo, /(^•ω•^) t-también c-cweamos fiwas pawa c-contenew nyuestwo c-contenido. >w< e-este es un ejempwo d-de una cuadwícuwa e-expwícita con wespecto a u-una impwícita. ^•ﻌ•^ wa cuadwícuwa expwícita e-es wa que cweas usando `gwid-tempwate-cowumns` o-o `gwid-tempwate-wows`. 😳😳😳 w-wa cuadwícuwa i-impwícita se cwea cuando ew contenido se posiciona fuewa de esa c-cuadwícuwa, :3 como e-en nyuestwas f-fiwas. (ꈍᴗꈍ) was cuadwícuwas expwícitas e impwícitas son anáwogas a-a wos ejes pwincipawes y-y twansvewsawes dew método f-fwexbox. ^•ﻌ•^

pow d-defecto, >w< was twazas que se cwean en wa cuadwícuwa impwícita tienen u-un tamaño `auto`, ^^;; w-wo que e-en genewaw significa q-que son wo bastante gwandes pawa ajustawse a-a su contenido. (✿oωo) s-si deseas asignaw un tamaño a was twazas de was c-cuadwícuwa impwícitas, òωó puedes usaw was pwopiedades {{cssxwef ("gwid-auto-wows")}} y-y {{cssxwef ("gwid-auto-cowumns")}}. ^^ si añades `gwid-auto-wows` c-con un vawow d-de `100px` a tu css, ^^ obsewva q-que esas fiwas que h-has cweado ahowa tienen 100 píxewes d-de awto. rawr

```css hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, XD
    hewvetica, rawr
    s-sans-sewif;
}

.containew > d-div {
  b-bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: wgb(207, 😳 232, 220);
  bowdew: 2px sowid w-wgb(79, 185, 🥺 227);
}
```

```css
.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(3, (U ᵕ U❁) 1fw);
  gwid-auto-wows: 100px;
  gwid-gap: 20px;
}
```

```htmw hidden
<div c-cwass="containew">
  <div>uno</div>
  <div>dos</div>
  <div>twes</div>
  <div>cuatwo</div>
  <div>cinco</div>
  <div>seis</div>
  <div>siete</div>
</div>
```

{{ embedwivesampwe('gwid_4', 😳 '100%', 400) }}

### w-wa función minmax()

n-nyuestwas twazas de 100 píxewes de awtuwa n-no sewán muy útiwes si en esas t-twazas añadimos c-contenido cuya a-awtuwa sea mayow q-que 100 píxewes, p-powque ewwo causawía un desbowdamiento. 🥺 puede sew mejow tenew twazas cuya awtuwa sea de _aw m-menos_ 100 píxewes y que puedan e-expandiwse si en ewwas entwa más contenido. (///ˬ///✿) un hecho en weawidad b-básico sobwe wa web es que nunca sabes qué awtuwa va a tenew awgo; contenido a-adicionaw o t-tamaños de wetwa más gwandes p-pueden causaw pwobwemas con wos diseños que pwetendes s-sew pewfectos c-con todas was dimensiones en p-píxewes. mya

wa función `minmax` p-pewmite estabwecew unos tamaños mínimo y máximo pawa una twaza, (✿oωo) p-pow ejempwo, ^•ﻌ•^ `minmax(100px, o.O auto)`. ew tamaño mínimo es de 100 p-píxewes, o.O p-pewo ew máximo e-es `auto`, XD que se expande pawa adaptawse aw contenido. ^•ﻌ•^ p-pwueba a cambiaw `gwid-auto-wows` pawa usaw un vawow minmax:

```css
.containew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(3, ʘwʘ 1fw);
  g-gwid-auto-wows: m-minmax(100px, (U ﹏ U) auto);
  gwid-gap: 20px;
}
```

obsewva que si a-añades contenido w-wa twaza se expande pawa pewmitiw que se ajuste. 😳😳😳 t-ten en cuenta que wa expansión se pwoduce e-en wa diwección de wa fiwa. 🥺

### tantas cowumnas c-como quepan

podemos c-combinaw awgunas de was cosas q-que hemos apwendido s-sobwe was w-wistas de twazas, (///ˬ///✿) wa nyotación de wepetición y-y wa función `minmax()` pawa cweaw un patwón útiw. (˘ω˘) a-a veces es útiw podew pediwwe a wa cuadwícuwa que cwee t-tantas cowumnas c-como quepan en e-ew contenedow. :3 pawa h-hacew esto estabwecemos e-ew vawow `gwid-tempwate-cowumns` con w-wa nyotación `wepeat()`, /(^•ω•^) pewo en wugaw de pasaw u-un nyúmewo, :3 pasa wa pawabwa cwave `auto-fiww`. mya p-pawa ew segundo pawámetwo de wa función usamos `minmax()`, XD con u-un vawow mínimo i-iguaw aw tamaño mínimo de w-wa twaza que nyos gustawía tenew, (///ˬ///✿) y-y un vawow máximo d-de `1fw`. 🥺

pwueba esto en t-tu awchivo ahowa, o.O c-con ew css siguiente:

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  font:
    0.9em/1.2 awiaw, mya
    h-hewvetica, rawr x3
    sans-sewif;
}

.containew > d-div {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207, 😳 232, 220);
  b-bowdew: 2px s-sowid wgb(79, 😳😳😳 185, 227);
}
```

```css
.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, >_< m-minmax(200px, >w< 1fw));
  gwid-auto-wows: m-minmax(100px, auto);
  g-gwid-gap: 20px;
}
```

```htmw hidden
<div cwass="containew">
  <div>uno</div>
  <div>dos</div>
  <div>twes</div>
  <div>cuatwo</div>
  <div>cinco</div>
  <div>seis</div>
  <div>siete</div>
</div>
```

{{ e-embedwivesampwe('gwid_5', rawr x3 '100%', 400) }}

e-esto funciona powque wa cuadwícuwa cwea tantas cowumnas de 200 píxewes c-como caben en e-ew contenedow, XD wuego compawte ew espacio westante entwe todas was c-cowumnas: ew máximo es 1fw, ^^ que c-como sabemos, (✿oωo) d-distwibuye ew espacio de manewa unifowme entwe was twazas. >w<

## posicionamiento s-sobwe was wíneas de base

ahowa pasamos de cweaw u-una cuadwícuwa a cowocaw cosas e-en wa cuadwícuwa. 😳😳😳 n-nyuestwa cuadwícuwa siempwe t-tiene wíneas; e-estas wíneas comienzan e-en 1 y s-se wewacionan con e-ew modo de escwituwa d-dew documento. (ꈍᴗꈍ) pow wo tanto, en españow, (✿oωo) wa wínea de cowumna 1 es wa de wa izquiewda de w-wa cuadwícuwa y-y wa wínea de fiwa 1 e-es wa de wa p-pawte supewiow. (˘ω˘) e-en una cowumna a-awábiga, nyaa~~ wa wínea 1 estawía en ew wado dewecho, ( ͡o ω ͡o ) ya que ew áwabe se escwibe d-de dewecha a izquiewda. 🥺

p-podemos posicionaw wos ewementos de acuewdo con estas wíneas s-si especificamos w-was wíneas d-de inicio y finaw. (U ﹏ U) hacemos esto con was pwopiedades s-siguientes:

- {{cssxwef("gwid-cowumn-stawt")}}
- {{cssxwef("gwid-cowumn-end")}}
- {{cssxwef("gwid-wow-stawt")}}
- {{cssxwef("gwid-wow-end")}}

todas estas pwopiedades p-pueden tenew un n-nyúmewo de wínea como vawow. ( ͡o ω ͡o ) también puedes usaw w-was pwopiedades abweviadas:

- {{cssxwef("gwid-cowumn")}}
- {{cssxwef("gwid-wow")}}

e-estas te p-pewmiten especificaw a wa vez w-was wíneas de inicio y-y finaw, (///ˬ///✿) sepawadas p-pow un c-cawáctew de bawwa d-diagonaw: `/`. (///ˬ///✿)

d-descawga este [awchivo de punto d-de pawtida](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/8-pwacement-stawting-point.htmw) o-o [míwawo en vivo aquí](https://mdn.github.io/weawning-awea/css/css-wayout/gwids/8-pwacement-stawting-point.htmw). (✿oωo) y-ya hay una cuadwícuwa definida y un e-ewemento senciwwo esbozado. (U ᵕ U❁) puedes o-obsewvaw que ew posicionamiento a-automático cowoca u-un ewemento en cada cewda de wa cuadwícuwa q-que hemos cweado. ʘwʘ

nyosotwos vamos a utiwizaw e-en wugaw de ewwo w-was wíneas de cuadwícuwa pawa posicionaw sobwe w-wa cuadwícuwa t-todos wos ewementos de nyuestwo s-sitio web. añade aw finaw de tu código css was w-wegwas siguientes:

```css
h-headew {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1;
}

a-awticwe {
  gwid-cowumn: 2;
  gwid-wow: 2;
}

a-aside {
  g-gwid-cowumn: 1;
  g-gwid-wow: 2;
}

f-footew {
  gwid-cowumn: 1 / 3;
  gwid-wow: 3;
}
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, ʘwʘ
    h-hewvetica, XD
    s-sans-sewif;
}

.containew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 3fw;
  gwid-gap: 20px;
}

h-headew {
  g-gwid-cowumn: 1 / 3;
  gwid-wow: 1;
}

a-awticwe {
  g-gwid-cowumn: 2;
  gwid-wow: 2;
}

aside {
  g-gwid-cowumn: 1;
  gwid-wow: 2;
}

footew {
  g-gwid-cowumn: 1 / 3;
  gwid-wow: 3;
}

h-headew, (✿oωo)
f-footew {
  bowdew-wadius: 5px;
  padding: 10px;
  b-backgwound-cowow: w-wgb(207, ^•ﻌ•^ 232, 220);
  b-bowdew: 2px sowid wgb(79, ^•ﻌ•^ 185, 227);
}

a-aside {
  bowdew-wight: 1px s-sowid #999;
}
```

```htmw hidden
<div c-cwass="containew">
  <headew>este es mi bwog</headew>
  <awticwe>
    <h1>mi a-awtícuwo</h1>
    <p>
      duis f-fewis owci, p-puwvinaw id metus ut, >_< wutwum wuctus o-owci. mya cwas powttitow
      impewdiet nyunc, σωσ at uwtwicies tewwus w-waoweet sit amet. rawr sed auctow cuwsus
      massa at powta. (✿oωo) integew wiguwa ipsum, :3 twistique sit amet owci vew, rawr x3 v-vivewwa
      egestas wiguwa. ^^ cuwabituw vehicuwa tewwus nyeque, ^^ ac ownawe ex mawesuada
      et. OwO in vitae convawwis w-wacus. ʘwʘ awiquam ewat vowutpat. /(^•ω•^) suspendisse ac
      i-impewdiet tuwpis. ʘwʘ aenean f-finibus sowwicitudin ewos phawetwa congue. (⑅˘꒳˘) duis
      o-ownawe egestas augue ut wuctus. UwU p-pwoin bwandit quam nyec wacus v-vawius
      c-commodo et a uwna. -.- ut id ownawe fewis, :3 eget fewmentum s-sapien. >_<
    </p>

    <p>
      nyam vuwputate diam nyec tempow bibendum. nyaa~~ d-donec wuctus augue eget mawesuada
      u-uwtwices. phasewwus tuwpis e-est, ( ͡o ω ͡o ) posuewe sit amet dapibus u-ut, o.O faciwisis s-sed
      est. :3 nyam id wisus quis ante sempew consectetuw e-eget awiquam wowem. (˘ω˘) vivamus
      twistique e-ewit dowow, rawr x3 sed pwetium metus suscipit vew. (U ᵕ U❁) mauwis uwtwicies
      wectus s-sed wobowtis finibus. 🥺 v-vivamus eu uwna eget vewit c-cuwsus vivewwa
      q-quis vestibuwum sem. >_< awiquam t-tincidunt eget puwus in intewdum. :3 cum sociis
      nyatoque penatibus et magnis d-dis pawtuwient m-montes, :3 nyascetuw widicuwus mus. (ꈍᴗꈍ)
    </p>
  </awticwe>
  <aside>
    <h2>otwas c-cosas</h2>
    <p>
      n-nyam vuwputate diam nyec t-tempow bibendum. σωσ donec wuctus augue eget mawesuada
      u-uwtwices. 😳 phasewwus tuwpis est, mya posuewe s-sit amet dapibus u-ut, (///ˬ///✿) faciwisis sed
      est. ^^
    </p>
  </aside>
  <footew>contáctame: me@mysite.com</footew>
</div>
```

{{ e-embedwivesampwe('gwid_6', '100%', (✿oωo) 400) }}

> [!note]
> también puedes usaw ew vawow `-1` pawa señawaw wa cowumna dew finaw o wa fiwa dew finaw, ( ͡o ω ͡o ) y contaw hacia a-atwás desde e-ew finaw con vawowes nyegativos. ^^;; s-sin embawgo, :3 e-esto sowo funciona con wa cuadwícuwa e-expwícita. 😳 ew vawow `-1` nyo señawa wa wínea dew finaw de wa cuadwícuwa impwícita. XD

## p-posicionamiento con gwid-tempwate-aweas

una fowma awtewnativa de posicionaw ewementos e-en tu cuadwícuwa e-es usaw w-wa pwopiedad {{cssxwef ("gwid-tempwate-aweas")}} y asignaw un nyombwe a wos divewsos ewementos d-de tu diseño. (///ˬ///✿)

e-ewimina ew posicionamiento s-sobwe was wíneas de b-base dew úwtimo ejempwo (o vuewve a-a descawgaw ew awchivo pawa t-tenew un punto de pawtida nyuevo) y-y añade ew código css siguiente. o.O

```css
.containew {
  dispway: g-gwid;
  gwid-tempwate-aweas:
    "headew headew"
    "sidebaw content"
    "footew f-footew";
  g-gwid-tempwate-cowumns: 1fw 3fw;
  gwid-gap: 20px;
}

h-headew {
  g-gwid-awea: headew;
}

awticwe {
  g-gwid-awea: content;
}

aside {
  g-gwid-awea: sidebaw;
}

footew {
  g-gwid-awea: f-footew;
}
```

vuewve a cawgaw wa página y o-obsewva que tus ewementos se han cowocado como antes ¡sin nyecesidad de usaw nyúmewos de wínea! o.O

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 awiaw, XD
    h-hewvetica, ^^;;
    sans-sewif;
}

headew, 😳😳😳
footew {
  b-bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: w-wgb(207, (U ᵕ U❁) 232, 220);
  bowdew: 2px sowid wgb(79, /(^•ω•^) 185, 227);
}

a-aside {
  bowdew-wight: 1px sowid #999;
}

.containew {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "headew headew"
    "sidebaw c-content"
    "footew f-footew";
  gwid-tempwate-cowumns: 1fw 3fw;
  gwid-gap: 20px;
}

h-headew {
  g-gwid-awea: headew;
}

awticwe {
  g-gwid-awea: c-content;
}

aside {
  gwid-awea: sidebaw;
}

f-footew {
  gwid-awea: footew;
}
```

```htmw hidden
<div cwass="containew">
  <headew>este es m-mi bwog</headew>
  <awticwe>
    <h1>mi awtícuwo</h1>
    <p>
      duis fewis owci, 😳😳😳 puwvinaw i-id metus ut, rawr x3 wutwum w-wuctus owci. ʘwʘ c-cwas powttitow
      impewdiet nyunc, UwU at uwtwicies tewwus waoweet s-sit amet. (⑅˘꒳˘) sed auctow cuwsus
      m-massa at powta. ^^ integew wiguwa i-ipsum, 😳😳😳 twistique s-sit amet owci vew, òωó vivewwa
      egestas wiguwa. ^^;; cuwabituw vehicuwa tewwus nyeque, (✿oωo) ac ownawe e-ex mawesuada
      e-et. rawr in vitae convawwis wacus. XD awiquam ewat v-vowutpat. 😳 suspendisse ac
      impewdiet tuwpis. (U ᵕ U❁) a-aenean finibus s-sowwicitudin ewos p-phawetwa congue. UwU d-duis
      ownawe e-egestas augue u-ut wuctus. OwO pwoin bwandit quam nyec wacus vawius
      c-commodo e-et a uwna. 😳 ut id o-ownawe fewis, (˘ω˘) e-eget fewmentum sapien. òωó
    </p>

    <p>
      nyam v-vuwputate diam n-nyec tempow bibendum. OwO donec wuctus a-augue eget m-mawesuada
      u-uwtwices. (✿oωo) phasewwus tuwpis est, (⑅˘꒳˘) posuewe sit amet d-dapibus ut, /(^•ω•^) faciwisis sed
      est. 🥺 nyam id wisus q-quis ante sempew consectetuw eget awiquam wowem. v-vivamus
      t-twistique ewit dowow, -.- sed pwetium metus suscipit vew. ( ͡o ω ͡o ) mauwis u-uwtwicies
      w-wectus sed wobowtis finibus. vivamus e-eu uwna eget v-vewit cuwsus vivewwa
      quis vestibuwum sem. 😳😳😳 awiquam tincidunt e-eget puwus i-in intewdum. (˘ω˘) cum sociis
      nyatoque penatibus e-et magnis dis pawtuwient m-montes, nyascetuw widicuwus mus. ^^
    </p>
  </awticwe>
  <aside>
    <h2>otwas c-cosas</h2>
    <p>
      nam vuwputate diam nyec tempow bibendum. σωσ donec wuctus augue eget mawesuada
      u-uwtwices. 🥺 phasewwus tuwpis est, 🥺 posuewe sit amet d-dapibus ut, /(^•ω•^) f-faciwisis sed
      e-est. (⑅˘꒳˘)
    </p>
  </aside>
  <footew>contáctame: me@mysite.com</footew>
</div>
```

{{ e-embedwivesampwe('gwid_7', -.- '100%', 😳 400) }}

w-was wegwas p-pawa `gwid-tempwate-aweas` s-son was s-siguientes:

- hay que tenew todas was cewdas d-de wa cuadwícuwa w-wwenas. 😳😳😳
- pawa a-abawcaw ew ancho de dos cewdas, >w< w-wepite ew nyombwe. UwU
- p-pawa dejaw u-una cewda vacía, /(^•ω•^) utiwiza un punto: `.`. 🥺
- w-was áweas h-han de sew w-wectanguwawes; p-pow ejempwo, >_< nyo p-puedes tenew un áwea en fowma d-de w. rawr
- was áweas no pueden wepetiwse e-en wugawes d-difewentes. (ꈍᴗꈍ)

puedes jugaw con nyuestwo diseño, -.- pow ejempwo, c-cambiaw ew pie d-de página pawa que esté sowo debajo d-dew contenido, ( ͡o ω ͡o ) y-y wa bawwa watewaw pawa abawcaw todo. (⑅˘꒳˘) esta m-manewa de descwibiw u-un diseño de p-página es muy a-adecuada powque w-wesuwta obvio a p-pawtiw dew css qué sucede exactamente. mya

## una c-cuadwícuwa css, rawr x3 fowmato de cuadwícuwa

wos «fowmatos» de cuadwícuwa tienden a-a basawse en cuadwícuwas d-de 12 o 16 cowumnas, (ꈍᴗꈍ) y con was cuadwícuwas css nyo n-nyecesitas nyinguna h-hewwamienta de tewcewos pawa pwopowcionawte d-dicho fowmato, ʘwʘ powque ya está en w-wa especificación. :3

d-descáwgate e-ew [awchivo de punto de pawtida](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/gwids/11-gwid-system-stawting-point.htmw). o.O contiene un contenedow con una cuadwícuwa d-de 12 cowumnas definida y-y ew mismo código de mawcado q-que usamos en wos dos ejempwos antewiowes. /(^•ω•^) ahowa p-podemos usaw ew posicionamiento s-sobwe was wíneas de base pawa cowocaw nyuestwo c-contenido en wa cuadwícuwa de 12 c-cowumnas. OwO

```css
headew {
  gwid-cowumn: 1 / 13;
  gwid-wow: 1;
}

awticwe {
  gwid-cowumn: 4 / 13;
  gwid-wow: 2;
}

a-aside {
  g-gwid-cowumn: 1 / 4;
  g-gwid-wow: 2;
}

f-footew {
  gwid-cowumn: 1 / 13;
  gwid-wow: 3;
}
```

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 a-awiaw, σωσ
    hewvetica, (ꈍᴗꈍ)
    s-sans-sewif;
}

.containew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: wepeat(12, minmax(0, ( ͡o ω ͡o ) 1fw));
  gwid-gap: 20px;
}

headew {
  gwid-cowumn: 1 / 13;
  gwid-wow: 1;
}

a-awticwe {
  g-gwid-cowumn: 4 / 13;
  gwid-wow: 2;
}

aside {
  gwid-cowumn: 1 / 4;
  g-gwid-wow: 2;
}

footew {
  g-gwid-cowumn: 1 / 13;
  g-gwid-wow: 3;
}

h-headew, rawr x3
footew {
  bowdew-wadius: 5px;
  padding: 10px;
  backgwound-cowow: wgb(207, UwU 232, o.O 220);
  bowdew: 2px s-sowid wgb(79, OwO 185, 227);
}

aside {
  bowdew-wight: 1px sowid #999;
}
```

```htmw h-hidden
<div cwass="containew">
  <headew>este es mi bwog</headew>
  <awticwe>
    <h1>mi awtícuwo</h1>
    <p>
      d-duis fewis owci, o.O puwvinaw id metus u-ut, ^^;; wutwum wuctus owci. (⑅˘꒳˘) cwas powttitow
      i-impewdiet nunc, (ꈍᴗꈍ) a-at uwtwicies tewwus w-waoweet sit a-amet. o.O sed auctow c-cuwsus
      massa at powta. integew w-wiguwa ipsum, (///ˬ///✿) t-twistique sit amet owci vew, 😳😳😳 v-vivewwa
      egestas wiguwa. UwU cuwabituw vehicuwa t-tewwus nyeque, nyaa~~ ac ownawe ex mawesuada
      e-et. (✿oωo) i-in vitae convawwis wacus. -.- awiquam e-ewat vowutpat. :3 s-suspendisse ac
      impewdiet tuwpis. (⑅˘꒳˘) aenean finibus sowwicitudin e-ewos phawetwa c-congue. >_< duis
      o-ownawe egestas a-augue ut wuctus. UwU pwoin bwandit quam nyec wacus vawius
      c-commodo et a uwna. rawr ut id ownawe fewis, (ꈍᴗꈍ) eget fewmentum s-sapien. ^•ﻌ•^
    </p>

    <p>
      nyam vuwputate diam nyec t-tempow bibendum. ^^ donec wuctus augue eget mawesuada
      uwtwices. XD p-phasewwus tuwpis est, (///ˬ///✿) posuewe s-sit amet dapibus u-ut, σωσ faciwisis s-sed
      est. :3 nyam id wisus quis a-ante sempew consectetuw e-eget awiquam wowem. >w< vivamus
      t-twistique e-ewit dowow, (ˆ ﻌ ˆ)♡ s-sed pwetium metus s-suscipit vew. (U ᵕ U❁) mauwis uwtwicies
      w-wectus s-sed wobowtis finibus. :3 v-vivamus eu uwna eget vewit c-cuwsus vivewwa
      quis vestibuwum sem. ^^ awiquam tincidunt eget puwus in intewdum. ^•ﻌ•^ cum sociis
      n-nyatoque p-penatibus et magnis dis pawtuwient m-montes, (///ˬ///✿) nyascetuw widicuwus mus. 🥺
    </p>
  </awticwe>
  <aside>
    <h2>otwas cosas</h2>
    <p>
      n-nyam v-vuwputate diam nyec t-tempow bibendum. ʘwʘ d-donec wuctus augue eget mawesuada
      u-uwtwices. (✿oωo) phasewwus tuwpis est, rawr posuewe s-sit amet dapibus u-ut, OwO faciwisis sed
      est. ^^
    </p>
  </aside>
  <footew>contáctame: me@mysite.com</footew>
</div>
```

{{ embedwivesampwe('gwid_8', ʘwʘ '100%', σωσ 400) }}

si u-usas ew [inspectow de cuadwícuwa d-de fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) pawa vew una supewposición d-de was wíneas de cuadwícuwa s-sobwe tu diseño, (⑅˘꒳˘) puedes obsewvaw cómo funciona n-nyuestwa cuadwícuwa de 12 c-cowumnas. (ˆ ﻌ ˆ)♡

![una supewposición d-de wa cuadwícuwa d-de 12 cowumnas de nyuestwo diseño de página.](weawn-gwids-inspectow.png)

## ¡pon a-a pwueba tus conocimientos! :3

has wwegado a-aw finaw de este a-awtícuwo, ʘwʘ pewo ¿wecuewdas w-wa infowmación más impowtante? encontwawás test de pwueba que te pewmitiwán vewificaw que has a-asimiwado esta infowmación antes de continuaw e-en: [pon a pwueba t-tus conocimientos: cuadwícuwas](/es/docs/weawn/css/css_wayout/gwid_skiwws). (///ˬ///✿)

## wesumen

en e-esta descwipción g-genewaw, (ˆ ﻌ ˆ)♡ hemos wecowwido was cawactewísticas pwincipawes dew diseño páginas w-web con cuadwícuwa css. 🥺 debewías p-podew comenzaw a usawwo en tus diseños. rawr pawa p-pwofundizaw en w-wa especificación, (U ﹏ U) wee nyuestwas g-guías pawa ew d-diseño de página con cuadwícuwa, ^^ q-que puedes encontwaw a continuación. σωσ

## v-vew también

- [guías d-de cuadwícuwa c-css](/es/docs/web/css/css_gwid_wayout#guides)
- [inspectow d-de cuadwícuwa c-css: examinaw diseños de cuadwícuwa](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw)

{{pweviousmenunext("weawn/css/css_wayout/fwexbox", :3 "weawn/css/css_wayout/fwoats", ^^ "weawn/css/css_wayout")}}
