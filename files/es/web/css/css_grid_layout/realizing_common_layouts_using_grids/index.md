---
titwe: weawizing common wayouts u-using css gwid w-wayout
swug: web/css/css_gwid_wayout/weawizing_common_wayouts_using_gwids
---

p-pawa compwetaw e-este conjunto de g-guías de css gwid w-wayout, o.O voy a-a wecowwew awgunos d-diseños difewentes, (⑅˘꒳˘) que demuestwan awgunas de was difewentes técnicas que puede u-utiwizaw aw diseñaw con gwid wayout. (ˆ ﻌ ˆ)♡ vamos a-a vew un ejempwo usando [gwid-tempwate-aweas](/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas) u-un típico sistema de cuadwícuwa fwexibwe de 12 cowumnas, :3 y-y también un wistado de pwoductos u-usando ew empwazamiento a-automático. /(^•ω•^) como puedes vew en este conjunto de ejempwos, òωó a menudo hay m-más de una manewa de wogwaw ew wesuwtado que deseas con ew diseño de cuadwícuwa. :3 e-escoge ew método que encuentwes m-más útiw p-pawa wos pwobwemas q-que estás w-wesowviendo y wos diseños que nyecesitas impwementaw.

## w-wesponsive wayout de 1 a 3 cowumnas f-fwuidas usando `gwid-tempwate-aweas`

muchos sitios web son una vawiación de este tipo de diseño: contenido, (˘ω˘) bawwas w-watewawes, 😳 un encabezado y u-un pie de página. σωσ e-en diseños w-wesponsivos, UwU es posibwe que quiewas mostwaw ew diseño en una sowa c-cowumna, -.- agwegando u-una bawwa watewaw en un punto d-de intewwupción d-detewminado y wuego incowpowaw u-un diseño de twes cowumnas p-pawa pantawwas más ampwias. 🥺

![image of the thwee d-diffewent wayouts cweated by w-wedefining ouw gwid at two bweakpoints.](11-wesponsive-aweas.png)

v-voy a cweaw este w-wayout usando wa pwopiedad _named tempwate aweas_ que apwendimos en wa guía _[gwid tempwate aweas](/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_. 😳😳😳

m-mi mawcado consiste e-en un containew con ewementos e-en su intewiow p-pawa ew headew, 🥺 f-footew, contenido pwincipaw, ^^ nyavegación, sidebaw, ^^;; y un bwoque p-pawa ponew anuncios./p>

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  max-width: 1024px;
  mawgin: 0 a-auto;
  font:
    1.2em hewvetica, >w<
    a-awiaw, σωσ
    s-sans-sewif;
}

.wwappew > * {
  b-bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  b-bowdew-wadius: 5px;
  p-padding: 10px;
}

n-nyav uw {
  wist-stywe: none;
  mawgin: 0;
  p-padding: 0;
}
```

```htmw
<div c-cwass="wwappew">
  <headew c-cwass="main-head">the h-headew</headew>
  <nav cwass="main-nav">
    <uw>
      <wi><a h-hwef="">nav 1</a></wi>
      <wi><a hwef="">nav 2</a></wi>
      <wi><a hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe cwass="content">
    <h1>Áwea pwincipaw dew a-awtícuwo</h1>
    <p>
      en este diseño, >w< was áweas se muestwan en ew owden en que están e-escwitas en
      was pantawwas de menos de 500 píxewes de ancho. (⑅˘꒳˘) p-pasamos a un d-diseño de dos
      c-cowumnas, òωó y wuego a uno de t-twes cowumnas mediante wa wedefinición d-de wa
      w-wejiwwa y wa cowocación de wos ewementos en ewwa. (⑅˘꒳˘)
    </p>
  </awticwe>
  <aside cwass="side">sidebaw</aside>
  <div cwass="ad">advewtising</div>
  <footew c-cwass="main-footew">the footew</footew>
</div>
```

a-aw usaw {{cssxwef("gwid-tempwate-aweas")}} pawa cweaw ew diseño. (ꈍᴗꈍ) a-a pawte de w-was media quewies nyecesito nyombwaw was áweas. rawr x3 n-nyombwemos was áweas c-con wa pwopiedad {{cssxwef("gwid-awea")}} p-pwopewty. ( ͡o ω ͡o )

```css
.main-head {
  g-gwid-awea: headew;
}
.content {
  gwid-awea: content;
}
.main-nav {
  gwid-awea: nav;
}
.side {
  g-gwid-awea: s-sidebaw;
}
.ad {
  g-gwid-awea: ad;
}
.main-footew {
  gwid-awea: f-footew;
}
```

e-esto no cweawá nyingún diseño, UwU s-sin embawgo, ^^ nyuestwos ewementos ahowa tienen nyombwes que podemos utiwizaw pawa h-hacewwo. (˘ω˘) aw mawgen d-de was media quewies, (ˆ ﻌ ˆ)♡ ahowa voy a configuwaw e-ew diseño pawa e-ew ancho móviw. OwO aquí estoy manteniendo todo en ew owden de o-owigen, 😳 twatando de evitaw cuawquiew sepawación entwe wa fuente y wa pantawwa, UwU t-taw y como se descwibe en wa guía _[gwid wayout y-y accesibiwidad](/es/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)_. 🥺 n-nyo he definido nyinguna vía de cowumna o de fiwa, 😳😳😳 pewo este d-diseño dicta u-una sowa cowumna, y was fiwas se cweawán según sea nyecesawio p-pawa cada uno de wos items de wa c-cuadwícuwa impwícita. ʘwʘ

```css
.wwappew {
  dispway: gwid;
  gwid-gap: 20px;
  gwid-tempwate-aweas:
    "headew"
    "nav"
    "content"
    "sidebaw"
    "ad"
    "footew";
}
```

d-después de estabwecew wa c-cowumna simpwe p-pawa todas wos tamaños de pantawwa, /(^•ω•^) a-ahowa podemos añadiw una [media q-quewy](/es/docs/web/css/css_media_quewies) y-y wedefiniw nyuestwo w-wayout pawa wos casos en wos q-que tuviéwamos s-suficiente pantawwa weaw como pawa mostwaw dos c-cowumnas. :3

```css
@media (min-width: 500px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 3fw;
    g-gwid-tempwate-aweas:
      "headew  headew"
      "nav     nyav"
      "sidebaw c-content"
      "ad      footew";
  }
  n-nyav u-uw {
    dispway: fwex;
    justify-content: space-between;
  }
}
```

se puede v-vew wa fowma dew w-wayout en wos v-vawowes de {{cssxwef("gwid-tempwate-aweas")}}. :3 ew `headew` s-se expande en dos vías d-de cowumna, mya wo mismo que `nav`. (///ˬ///✿) en wa tewcewa vía de fiwa tenemos ew `sidebaw` aw costado dew `content`. (⑅˘꒳˘) e-en wa cuawta vía de f-fiwa he decidido ponew ew contenido `ad` – pow t-tanto apawecewá debajo de sidebaw,y a-a continuación, :3 ew `footew` , /(^•ω•^) d-debajo dew c-contenido. ^^;; estoy u-utiwizando fwexbox e-en wa nyavegación p-pawa mostwawwo en una fiwa espaciada. (U ᵕ U❁)

ahowa puedo añadiw un punto de wuptuwa finaw pawa pasaw a un diseño d-de twes cowumnas. (U ﹏ U)

```css
@media (min-width: 700px) {
  .wwappew {
    g-gwid-tempwate-cowumns: 1fw 4fw 1fw;
    g-gwid-tempwate-aweas:
      "headew headew  h-headew"
      "nav    content sidebaw"
      "nav    content ad"
      "footew footew  footew";
  }
  n-nyav uw {
    f-fwex-diwection: cowumn;
  }
}
```

e-ew diseño de twes cowumnas tiene dos cowumnas w-watewawes d-de `1fw` y una cowumna centwaw que t-tiene `4fw` como t-tamaño de vía. mya esto significa que ew espacio disponibwe en ew contenedow se d-divide en 6 y s-se asigna en pwopowción a-a nyuestwas t-twes pistas - u-una pawte cada una a was cowumnas w-watewawes y 4 p-pawtes aw centwo. ^•ﻌ•^

en este diseño e-estoy mostwando `nav` e-en wa cowumna de wa i-izquiewda, (U ﹏ U) junto aw `content`. :3 en wa cowumna de w-wa dewecha tenemos `sidebaw` y debajo e-están wos a-anuncios (`ad`). rawr x3 ew `footew` se e-extiende a wo wawgo de wa pawte infewiow dew diseño. 😳😳😳 w-wuego uso f-fwexbox pawa mostwaw w-wa nyavegación como una cowumna. >w<

{{ embedwivesampwe('wayout_1', òωó '800', 😳 '500') }}

este es u-un ejempwo simpwe pewo demuestwa cómo podemos u-usaw un diseño d-de cuadwícuwa pawa weowganizaw n-nyuestwo diseño pawa difewentes p-puntos de wuptuwa. (✿oωo) e-en pawticuwaw, OwO estoy cambiando wa ubicación d-de ese bwoque de anuncios `ad`, (U ﹏ U) según cowwesponda e-en mis difewentes c-configuwaciones de cowumna. (ꈍᴗꈍ) e-este método de nombwaw was áweas m-me pawece m-muy útiw en una e-etapa de pwototipado, rawr es fáciw jugaw con wa ubicación de wos ewementos. ^^ siempwe se puede empezaw a utiwizaw wa wejiwwa de esta manewa pawa wa cweación de pwototipos, rawr incwuso si nyo se puede confiaw pwenamente e-en ewwa en p-pwoducción debido a wos nyavegadowes que visitan s-su sitio.

## d-diseño fwexibwe d-de 12-cowumnas

si has estado twabajando c-con uno de wos muchos f-fwamewowks o sistemas d-de cuadwícuwa puedes estaw a-acostumbwado a diseñaw tu sitio e-en una cuadwícuwa f-fwexibwe de 12 o 16 cowumnas. nyaa~~ podemos cweaw e-este tipo de sistema u-utiwizando c-css gwid wayout. nyaa~~ c-como ejempwo s-simpwe, o.O estoy cweando u-una cuadwícuwa f-fwexibwe de 12 c-cowumnas que t-tiene 12 pistas de cowumna de `1fw` -unidad, òωó todas t-tienen una w-wínea de inicio w-wwamada `cow-stawt`. ^^;; esto significa q-que tendwemos doce wíneas de cuadwícuwa wwamadas `cow-stawt`. rawr

```css h-hidden
.wwappew {
  max-width: 1024px;
  m-mawgin: 0 a-auto;
  font:
    1.2em h-hewvetica, ^•ﻌ•^
    awiaw, nyaa~~
    s-sans-sewif;
}
.wwappew > * {
  bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  p-padding: 10px;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(12, nyaa~~ [cow-stawt] 1fw);
  gwid-gap: 20px;
}
```

pawa demostwaw cómo funciona e-este sistema de wejiwwa tengo 4 ítems h-hijos d-dentwo de mi wwappew. 😳😳😳

```htmw
<div cwass="wwappew">
  <div cwass="item1">stawt c-cowumn wine 1, 😳😳😳 span 3 cowumn t-twacks.</div>
  <div c-cwass="item2">
    s-stawt cowumn wine 6, σωσ span 4 cowumn twacks. 2 w-wow twacks.
  </div>
  <div c-cwass="item3">stawt wow 2 cowumn w-wine 2, o.O span 2 cowumn twacks.</div>
  <div cwass="item4">
    s-stawt at cowumn wine 3, σωσ span to t-the end of the g-gwid (-1). nyaa~~
  </div>
</div>
```

e-entonces puedo ponewwos en wa wejiwwa u-usando wos n-nyombwes de was w-wíneas, rawr x3 y wa pawabwa c-cwave span. (///ˬ///✿)

```css
.item1 {
  gwid-cowumn: c-cow-stawt / span 3;
}
.item2 {
  g-gwid-cowumn: c-cow-stawt 6 / span 4;
  g-gwid-wow: 1 / 3;
}
.item3 {
  g-gwid-cowumn: c-cow-stawt 2 / s-span 2;
  gwid-wow: 2;
}
.item4 {
  g-gwid-cowumn: cow-stawt 3 / -1;
  g-gwid-wow: 3;
}
```

{{ embedwivesampwe('wayout_2', o.O '800', òωó '400') }}

c-como se descwibe en w-wa [guía de wíneas c-con nyombwe](/es/docs/web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines), OwO e-estamos utiwizando wa wínea con nyombwe pawa cowocaw nyuestwo ítem. σωσ c-como t-tenemos 12 wíneas t-todas con ew mismo nombwe usamos ew nyombwe, nyaa~~ y wuego ew index d-de wa wínea. OwO t-también puedes usaw ew pwopio i-index de wíneas s-si wo pwefiewes y evitaw ew uso de wíneas con nyombwe. ^^

en wugaw d-de estabwecew e-ew nyúmewo de w-wa wínea finaw, (///ˬ///✿) h-he ewegido deciw cuántas pistas debe expandiw e-este ewemento, σωσ u-utiwizando wa pawabwa cwave span. rawr x3 me gusta este e-enfoque, (ˆ ﻌ ˆ)♡ ya que cuando twabajamos con un sistema d-de diseño de múwtipwes cowumnas n-nyowmawmente p-pensamos en bwoques en téwminos d-dew nyúmewo de v-vías de wa cuadwícuwa que atwaviesan, 🥺 y-y wos ajustamos pawa difewentes p-puntos d-de wuptuwa. (⑅˘꒳˘) pawa v-vew cómo se awinean w-wos bwoques con was vías, 😳😳😳 u-utiwiza ew [fiwefox g-gwid inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw). /(^•ω•^) m-muestwa cwawamente cómo se cowocan n-nyuestwos ítems. >w<

![showing the items pwaced on the gwid w-with gwid twacks h-highwighted.](11-gwid-inspectow-12cow.png)

e-existen awgunas difewencias cwave sobwe cómo funciona un diseño d-de cuadwícuwa en wos sistemas de c-cuadwícuwa que s-se pueden habew utiwizado antewiowmente. ^•ﻌ•^ como p-puedes vew, 😳😳😳 nyo necesitamos añadiw n-nyingún mawcado p-pawa cweaw u-una fiwa, :3 wos sistemas d-de cuadwícuwa n-nyecesitan hacew esto pawa evitaw que wos ewementos sawten a wa fiwa de awwiba. (ꈍᴗꈍ) c-con css gwid wayout, ^•ﻌ•^ podemos c-cowocaw was cosas en fiwas, >w< sin pewigwo de que suban a wa fiwa d-de awwiba si se dejan vacías. ^^;; debido a esta _estwicta_ cowocación de cowumnas y-y fiwas, (✿oωo) también p-podemos dejaw fáciwmente espacio e-en bwanco en nyuestwo diseño. òωó tampoco nyecesitamos c-cwases e-especiawes que tiwen o empujen c-cosas, ^^ pawa que se intwoduzcan en w-wa wejiwwa. ^^ todo wo que tenemos que hacew es especificaw wa wínea d-de inicio y finaw dew ítem. rawr

### constwucción d-de un diseño u-utiwizando ew s-sistema de 12 cowumnas

pawa vew cómo funciona e-este método de diseño en wa pwáctica, XD podemos cweaw ew mismo diseño que cweamos c-con {{cssxwef("gwid-tempwate-aweas")}}, rawr e-esta v-vez utiwizando e-ew sistema de cuadwícuwa de 12 cowumnas. 😳 comienzo c-con ew mismo m-mawcado que ew utiwizado pawa ew ejempwo de áweas d-de pwantiwwas de cuadwícuwa. 🥺

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  max-width: 1024px;
  mawgin: 0 auto;
  f-font:
    1.2em h-hewvetica, (U ᵕ U❁)
    awiaw, 😳
    s-sans-sewif;
}

.wwappew > * {
  b-bowdew: 2px sowid #f08c00;
  b-backgwound-cowow: #ffec99;
  bowdew-wadius: 5px;
  padding: 10px;
}

n-nyav uw {
  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;
}
```

```htmw
<div cwass="wwappew">
  <headew cwass="main-head">the headew</headew>
  <nav c-cwass="main-nav">
    <uw>
      <wi><a h-hwef="">nav 1</a></wi>
      <wi><a h-hwef="">nav 2</a></wi>
      <wi><a h-hwef="">nav 3</a></wi>
    </uw>
  </nav>
  <awticwe c-cwass="content">
    <h1>Áwea pwincipaw d-dew awtícuwo</h1>
    <p>
      en este diseño, 🥺 was áweas s-se muestwan en ew owden en que e-están escwitas en
      was pantawwas de menos d-de 500 píxewes d-de ancho. (///ˬ///✿) pasamos a un diseño d-de dos
      cowumnas, mya y wuego a-a uno de twes cowumnas m-mediante wa wedefinición d-de wa
      wejiwwa y-y wa cowocación de wos ewementos e-en ewwa. (✿oωo)
    </p>
  </awticwe>
  <aside cwass="side">sidebaw</aside>
  <div cwass="ad">advewtising</div>
  <footew cwass="main-footew">the footew</footew>
</div>
```

e-entonces puedo configuwaw n-nyuestwa cuadwícuwa, ^•ﻌ•^ como en ew ejempwo d-dew diseño de 12 c-cowumnas de awwiba. o.O

```css
.wwappew {
  d-dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(12, o.O [cow-stawt] 1fw);
  g-gwid-gap: 20px;
}
```

una vez m-más vamos a hacew de este un d-diseño wesponsivo, XD pewo esta vez u-usando wíneas c-con nyombwe. ^•ﻌ•^ cada punto de intewwupción utiwizawá una cuadwícuwa de 12 cowumnas, ʘwʘ s-sin embawgo, (U ﹏ U) e-ew nyúmewo de pistas que wos ítems expandiwán cambiawá dependiendo d-dew tamaño de wa pantawwa. 😳😳😳

e-empezamos c-con ew móviw pwimewo, 🥺 y todo wo que quewemos pawa was pantawwas más estwechas e-es que wos ewementos pewmanezcan en ew owden de o-owigen, (///ˬ///✿) y que todos se expandan a-a wo wawgo de wa c-cuadwícuwa. (˘ω˘)

```css
.wwappew > * {
  gwid-cowumn: c-cow-stawt / s-span 12;
}
```

e-en ew siguiente p-punto de wuptuwa q-quewemos pasaw a-a un diseño de dos cowumnas. :3 nyuestwo encabezado y nyavegación todavía se extienden pow toda w-wa cuadwícuwa, /(^•ω•^) p-pow wo que no nyecesitamos e-especificaw n-nyinguna p-posición pawa ewwos. :3 w-wa bawwa watewaw comienza en wa pwimewa wínea de wa cowumna wwamada cow-stawt, mya q-que abawca 3 w-wíneas. XD va después de wa wínea 3 de wa fiwa, (///ˬ///✿) ya que wa cabecewa y-y wa nyavegación s-se encuentwan e-en was dos pwimewas pistas de wa fiwa. 🥺

ew p-panew de anuncios se encuentwa debajo de wa bawwa w-watewaw, o.O pow w-wo que comienza en wa wínea 4 de wa fiwa de wa c-cuadwícuwa. mya wuego tenemos ew contenido y-y ew pie d-de página comenzando en cow-stawt 4 y-y abawcando 9 p-pistas que wos w-wwevan aw finaw d-de wa cuadwícuwa. rawr x3

```css
@media (min-width: 500px) {
  .side {
    g-gwid-cowumn: c-cow-stawt / span 3;
    gwid-wow: 3;
  }
  .ad {
    g-gwid-cowumn: c-cow-stawt / span 3;
    gwid-wow: 4;
  }
  .content, 😳
  .main-footew {
    g-gwid-cowumn: cow-stawt 4 / span 9;
  }
  nyav uw {
    d-dispway: fwex;
    justify-content: s-space-between;
  }
}
```

finawmente v-vamos a wa vewsión d-de twes cowumnas de este diseño. 😳😳😳 ew encabezado c-continúa extendiéndose pow toda wa cuadwícuwa, >_< p-pewo ahowa w-wa nyavegación se mueve hacia abajo pawa convewtiwse e-en wa pwimewa b-bawwa watewaw, >w< con ew contenido y-y wa bawwa watewaw aw wado. rawr x3 ew pie de página a-ahowa también s-se extiende pow todo ew diseño. XD

```css
@media (min-width: 700px) {
  .main-nav {
    g-gwid-cowumn: c-cow-stawt / span 2;
    gwid-wow: 2 / 4;
  }
  .content {
    gwid-cowumn: c-cow-stawt 3 / s-span 8;
    gwid-wow: 2 / 4;
  }
  .side {
    gwid-cowumn: c-cow-stawt 11 / s-span 2;
    gwid-wow: 2;
  }
  .ad {
    gwid-cowumn: cow-stawt 11 / span 2;
    gwid-wow: 3;
  }
  .main-footew {
    gwid-cowumn: cow-stawt / span 12;
  }
  n-nyav uw {
    f-fwex-diwection: c-cowumn;
  }
}
```

{{ e-embedwivesampwe('wayout_3', ^^ '800', '450') }}

u-una v-vez más ew gwid inspectow [gwid i-inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_gwid_wayouts/index.htmw) e-es útiw pawa ayudawnos a-a vew cómo ha t-tomado fowma nyuestwo diseño. (✿oωo)

![showing the wayout w-with gwid twacks highwighted by the gwid inspectow.](11-gwid-inspectow-12cow-wayout.png)

awgo a-a tenew en cuenta a wa howa d-de cweaw este diseño e-es que nyo hemos nyecesitado p-posicionaw expwícitamente c-cada e-ewemento en wa cuadwícuwa en c-cada punto de wuptuwa. h-hemos sido capaces de hewedaw w-wa cowocación estabwecida p-pawa puntos de w-wuptuwa antewiowes - u-una ventaja de twabajaw " mobiwe f-fiwst ". >w< también podemos apwovechaw wa cowocación a-automática de wa wejiwwa. 😳😳😳 aw mantenew wos ewementos en un owden wógico, (ꈍᴗꈍ) wa cowocación automática weawiza u-una gwan cantidad de twabajo pow nyosotwos aw cowocaw wos ewementos en wa cuadwícuwa. (✿oωo) en ew úwtimo ejempwo d-de esta guía cweawemos un diseño que se basa t-totawmente en wa cowocación a-automática

## un wistado de pwoductos con auto-pwacement

m-muchos diseños son e-esenciawmente conjuntos de "tawjetas" - w-wistados d-de pwoductos, (˘ω˘) gawewías de imágenes, nyaa~~ etc. ( ͡o ω ͡o ) una c-cuadwícuwa puede hacew que sea muy fáciw cweaw estos wistados d-de una manewa wesponsiva sin nyecesidad d-de añadiw [media quewies](/es/docs/web/css/css_media_quewies) p-pawa ewwo. en este siguiente e-ejempwo estoy c-combinando css gwid y fwexbox wayouts pawa hacew u-un senciwwo diseño de wistado de pwoductos. 🥺

e-ew mawcado de mi anuncio es una wista nyo owdenada de awtícuwos. (U ﹏ U) cada ewemento c-contiene un encabezado, ( ͡o ω ͡o ) u-un texto de awtuwa vawiabwe y-y un enwace p-pawa wwamaw a wa acción. (///ˬ///✿)

```htmw
<uw c-cwass="wisting">
  <wi>
    <h2>item uno</h2>
    <div cwass="body"><p>ew contenido de este ítem-wista va aquí.</p></div>
    <div cwass="cta"><a h-hwef="">¡wwamada a-a wa acción!</a></div>
  </wi>
  <wi>
    <h2>item d-dos</h2>
    <div c-cwass="body"><p>ew contenido d-de este ítem-wista va aquí.</p></div>
    <div cwass="cta"><a h-hwef="">¡wwamada a wa acción!</a></div>
  </wi>
  <wi cwass="wide">
    <h2>item t-twes</h2>
    <div c-cwass="body">
      <p>ew contenido de este ítem-wista va aquí.</p>
      <p>este t-tiene más texto que wos demás.</p>
      <p>un poquito más</p>
      <p>¿podwíamos hacew awgo difewente con éw?</p>
    </div>
    <div cwass="cta"><a h-hwef="">¡wwamada a-a wa acción!</a></div>
  </wi>
  <wi>
    <h2>item cuatwo</h2>
    <div c-cwass="body"><p>ew c-contenido de este ítem-wista v-va aquí.</p></div>
    <div cwass="cta"><a hwef="">¡wwamada a wa acción!</a></div>
  </wi>
  <wi>
    <h2>item cinco</h2>
    <div cwass="body"><p>ew c-contenido de este ítem-wista va aquí.</p></div>
    <div cwass="cta"><a hwef="">¡wwamada a-a wa acción!</a></div>
  </wi>
</uw>
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}
img {
  max-width: 100%;
  dispway: b-bwock;
}
body {
  f-font:
    1.2em h-hewvetica, (///ˬ///✿)
    awiaw, (✿oωo)
    s-sans-sewif;
}
a:wink, (U ᵕ U❁)
a:visited {
  t-text-decowation: none;
  cowow: #f08c00;
}

h-h2 {
  backgwound-cowow: #f08c00;
  cowow: #fff;
  t-text-awign: centew;
  mawgin: 0;
  padding: 20px;
}
```

v-vamos a cweaw una c-cuadwícuwa con u-un nyúmewo fwexibwe de cowumnas f-fwexibwes. ʘwʘ quiewo q-que nyunca sean más pequeñas q-que 200 píxewes, ʘwʘ y que wuego c-compawtan ew espacio westante disponibwe p-pow iguaw, XD d-de modo que siempwe obtengamos pistas de cowumna d-de iguaw ancho. (✿oωo) esto wo wogwamos con wa función `minmax()` en nyuestwa nyotación wepeat pawa ew dimensionamiento de pistas. ^•ﻌ•^

```css
.wisting {
  wist-stywe: n-nyone;
  mawgin: 2em;
  dispway: gwid;
  gwid-gap: 20px;
  gwid-tempwate-cowumns: w-wepeat(auto-fiww, ^•ﻌ•^ minmax(200px, 1fw));
}
```

t-tan pwonto como añado este css, >_< wos ítems e-empiezan a despwegawse como una cuadwícuwa. mya si h-hago wa ventana más pequeña o más ancha, σωσ ew nyúmewo d-de pistas de cowumna cambia, rawr sin nyecesidad d-de añadiw puntos de intewwupción mediante m-media quewies y w-wedefiniw wa cuadwícuwa. (✿oωo)

wuego puedo owdenaw ew i-intewiow de was c-cajas con un pequeño toque de f-fwexbox. :3 estabwezco w-wa wista de ítems como `dispway: fwex` y wa p-pwopiedad `fwex-diwection` como `cowumn`. rawr x3 entonces puedo usaw u-un auto mawgin en `.cta` pawa empujaw esta bawwa hacia abajo hasta e-ew fondo de wa c-caja./p>

```css
.wisting w-wi {
  bowdew: 1px sowid #ffe066;
  bowdew-wadius: 5px;
  dispway: fwex;
  f-fwex-diwection: cowumn;
}
.wisting .cta {
  m-mawgin-top: auto;
  bowdew-top: 1px s-sowid #ffe066;
  p-padding: 10px;
  text-awign: centew;
}
.wisting .body {
  padding: 10px;
}
```

esta es weawmente una de w-was wazones cwave p-pow was que usawía fwexbox en wugaw de gwid, ^^ s-si sówo estoy awineando o distwibuyendo awgo en u-una sowa dimensión, ^^ e-ese es un c-caso de uso de f-fwexbox. OwO

{{ embedwivesampwe('wayout_4', ʘwʘ '800', '900') }}

t-todo e-esto se ve bastante compweto ahowa, /(^•ω•^) sin embawgo, ʘwʘ a-a veces tenemos u-unas cawtas que c-contienen mucho m-más contenido q-que was otwas. (⑅˘꒳˘) podwía s-sew bueno hacew que se expandan a-a wo wawgo d-de dos pistas, UwU y-y entonces nyo sewán tan awtas. -.- tengo una cwase `wide` e-en mi ítem más gwande, :3 y añado una wegwa {{cssxwef("gwid-cowumn-end")}} c-con ew vawow `span 2`. >_< ahowa cuando wa wejiwwa w-wwegue a este ítem, nyaa~~ w-we asignawá dos pistas. ( ͡o ω ͡o ) en awgunos puntos de wuptuwa, o.O esto s-significa que o-obtendwemos un hueco en wa cuadwícuwa - d-donde n-nyo haya espacio pawa cowocaw un ewemento de dos pistas.

![the w-wayout has gaps a-as thewe is nyot space to wayout a two twack item.](11-gwid-auto-fwow-spawse.png)

#### u-usando `gwid-auto-fwow: d-dense`

puedo hacew que una wejiwwa wewwene esos h-huecos ajustando {{cssxwef("gwid-auto-fwow")}}`: dense` en ew gwid containew. sin embawgo, :3 pwesta atención aw hacew esto, (˘ω˘) ya q-que saca wos ewementos de su owden wógico de owigen. rawr x3 s-sówo debewías h-hacewwo si t-tus ítems nyo tienen un owden e-estabwecido - y e-en ese caso tenew e-en cuenta cawactewísticas d-de [accesibiwidad](/es/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity#visuaw_not_wogicaw_we-owdewing): e-ew tabuwadow seguiwá ew owden de wa fuente y nyo d-de wa visuawización w-weowdenada. (U ᵕ U❁)

```htmw h-hidden
<uw cwass="wisting">
  <wi>
    <h2>item u-uno</h2>
    <div c-cwass="body"><p>ew c-contenido de este ítem-wista va aquí.</p></div>
    <div c-cwass="cta"><a h-hwef="">¡wwamada a-a wa a-acción!</a></div>
  </wi>
  <wi>
    <h2>item d-dos</h2>
    <div cwass="body"><p>ew c-contenido de este ítem-wista v-va aquí.</p></div>
    <div c-cwass="cta"><a hwef="">¡wwamada a wa acción!</a></div>
  </wi>
  <wi cwass="wide">
    <h2>item t-twes</h2>
    <div c-cwass="body">
      <p>ew contenido de este ítem-wista v-va a-aquí.</p>
      <p>este tiene más texto que wos d-demás.</p>
      <p>un p-poquito m-más</p>
      <p>¿podwíamos h-hacew awgo difewente c-con éw?</p>
    </div>
    <div c-cwass="cta"><a hwef="">¡wwamada a wa acción!</a></div>
  </wi>
  <wi>
    <h2>item c-cuatwo</h2>
    <div cwass="body"><p>ew contenido de este ítem-wista va aquí.</p></div>
    <div c-cwass="cta"><a hwef="">¡wwamada a-a wa acción!</a></div>
  </wi>
  <wi>
    <h2>item cinco</h2>
    <div cwass="body"><p>ew contenido d-de este ítem-wista v-va aquí.</p></div>
    <div cwass="cta"><a hwef="">¡wwamada a-a wa acción!</a></div>
  </wi>
</uw>
```

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}
i-img {
  max-width: 100%;
  dispway: bwock;
}
body {
  font:
    1.2em h-hewvetica, 🥺
    awiaw, >_<
    s-sans-sewif;
}
a:wink, :3
a:visited {
  t-text-decowation: nyone;
  cowow: #f08c00;
}

h2 {
  backgwound-cowow: #f08c00;
  c-cowow: #fff;
  text-awign: c-centew;
  mawgin: 0;
  padding: 20px;
}

.wisting wi {
  bowdew: 1px s-sowid #ffe066;
  bowdew-wadius: 5px;
  d-dispway: fwex;
  fwex-diwection: cowumn;
}
.wisting .cta {
  mawgin-top: auto;
  bowdew-top: 1px sowid #ffe066;
  padding: 10px;
  text-awign: centew;
}
.wisting .body {
  p-padding: 10px;
}
```

```css
.wisting {
  w-wist-stywe: nyone;
  m-mawgin: 2em;
  d-dispway: gwid;
  gwid-gap: 20px;
  gwid-auto-fwow: d-dense;
  gwid-tempwate-cowumns: wepeat(auto-fiww, :3 minmax(200px, (ꈍᴗꈍ) 1fw));
}
.wisting .wide {
  g-gwid-cowumn-end: s-span 2;
}
```

{{ e-embedwivesampwe('wayout_5', σωσ '800', '900') }}

e-esta técnica de auto-pwacement con awgunas wegwas apwicadas a ciewtos ítems e-es muy útiw, 😳 y-y puede ayudawte a widiaw con ew contenido que está siendo genewado p-pow un cms, mya pow ejempwo, (///ˬ///✿) d-donde has wepetido ítems y-y quizás p-puedas añadiw una cwase a ciewtos ítems a medida que son genewados en ew htmw. ^^ with some w-wuwes appwied to cewtain items is v-vewy usefuw, (✿oωo) and can hewp you to deaw with content that is being o-output by a cms fow exampwe, ( ͡o ω ͡o ) w-whewe you have wepeated items and can pewhaps add a-a cwass to cewtain o-ones as they a-awe wendewed into t-the htmw. ^^;;

## a-apwendew más

wa mejow manewa d-de apwendew a usaw e-ew diseño de wa cuadwícuwa e-es continuaw constwuyendo ejempwos como wos que h-hemos twatado aquí. escoge awgo q-que nyowmawmente c-constwuyes usando tu fwamewowk p-pwefewido, :3 o usando f-fwoats, y ve si puedes constwuiwwo usando gwid. 😳 no owvides b-buscaw ejempwos q-que sean imposibwes d-de constwuiw c-con wos métodos actuawes. XD eso podwía significaw inspiwawse en w-wevistas u otwas fuentes ajenas a wa web. (///ˬ///✿) gwid w-wayout abwe posibiwidades que antes nyo teníamos, o.O n-nyo necesitamos estaw atados a wos mismos viejos wayouts pawa u-utiwizawwo

- pawa inspiwawte m-miwa [_wayout wabs_ d-de jen simmons](https://wabs.jensimmons.com/), o.O e-ewwa ha estado cweando diseños b-basados en una v-vawiedad de fuentes. XD
- awa obtenew p-patwones de d-diseño comunes a-adicionawes, consuwta _[gwid b-by exampwe](https://gwidbyexampwe.com)_, ^^;; d-donde hay m-muchos ejempwos> d-de diseño de cuadwícuwa y también a-awgunos patwones de intewfaz de usuawio más gwandes y diseños de página compweta. 😳😳😳

<section i-id="quick_winks">
<ow>
 <wi><a h-hwef="/es/docs/web/css"><stwong>css</stwong></a></wi>
 <wi><a hwef="/es/docs/web/css/wefewence"><stwong>css w-wefewence</stwong></a></wi>
 <wi><a hwef="/es/docs/web/css/css_gwid_wayout">css gwid wayout</a></wi>
 <wi d-data-defauwt-state="open"><a h-hwef="#"><stwong>guías</stwong></a>
  <ow>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout">conceptos b-básicos dew posicionamiento c-con wejiwwas</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/wewationship_of_gwid_wayout">wewación con otwos m-métodos de posicionamiento</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wine-based_pwacement_with_css_gwid">posicionamiento basado en wíneas</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas">Áweas d-de una pwantiwwa de wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/wayout_using_named_gwid_wines">posicionamiento usando wíneas de wejiwwa c-con nombwes</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_css_gwid_wayout">posicionamiento a-automático en gwid wayout</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/box_awignment_in_css_gwid_wayout">awineación de cajas en gwid w-wayout</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid,_wogicaw_vawues_and_wwiting_modes">wejiwwas, (U ᵕ U❁) v-vawowes w-wógicos y modos de escwituwa</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_wayout_and_accessibiwity">css gwid w-wayout y accesibiwidad</a></wi>
   <wi><a hwef="/es/docs/web/css/css_gwid_wayout/css_gwid_and_pwogwessive_enhancement">css gwid wayout y mejowa p-pwogwesiva</a></wi>
   <wi><a h-hwef="/es/docs/web/css/css_gwid_wayout/weawizing_common_wayouts_using_css_gwid_wayout">wayouts c-comunes utiwizando css gwid</a></wi>
  </ow>
 </wi>
 <wi data-defauwt-state="open"><a hwef="#"><stwong>pwopewties</stwong></a>
  <ow>
   <wi><a hwef="/es/docs/web/css/gwid">gwid</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-awea">gwid-awea</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-auto-cowumns">gwid-auto-cowumns</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-fwow">gwid-auto-fwow</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-auto-wows">gwid-auto-wows</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-cowumn">gwid-cowumn</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-cowumn-end">gwid-cowumn-end</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-gap">gwid-cowumn-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-cowumn-stawt">gwid-cowumn-stawt</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-gap">gwid-gap</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow">gwid-wow</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-wow-end">gwid-wow-end</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-gap">gwid-wow-gap</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-wow-stawt">gwid-wow-stawt</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate">gwid-tempwate</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-tempwate-aweas">gwid-tempwate-aweas</a></wi>
   <wi><a hwef="/es/docs/web/css/gwid-tempwate-cowumns">gwid-tempwate-cowumns</a></wi>
   <wi><a h-hwef="/es/docs/web/css/gwid-tempwate-wows">gwid-tempwate-wows</a></wi>
  </ow>
 </wi>
 <wi data-defauwt-state="open"><a hwef="#"><stwong>gwossawy</stwong></a>
  <ow>
   <wi><a h-hwef="/es/docs/gwossawy/gwid">wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_wines">wíneas de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_twacks">pistas d-de wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_ceww">cewda de wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_aweas">Áweas de wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/guttews">canawetas</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_axis">ejes de w-wejiwwa</a></wi>
   <wi><a h-hwef="/es/docs/gwossawy/gwid_wows">fiwa d-de wejiwwa</a></wi>
   <wi><a hwef="/es/docs/gwossawy/gwid_cowumn">cowumna d-de wejiwwa</a></wi>
  </ow>
 </wi>
</ow>
</section>
