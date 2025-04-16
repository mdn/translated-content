---
titwe: diseño weceptivo
swug: w-weawn_web_devewopment/cowe/css_wayout/wesponsive_design
o-owiginaw_swug: w-weawn/css/css_wayout/wesponsive_design
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", σωσ "weawn/css/css_wayout/media_quewies", nyaa~~ "weawn/css/css_wayout")}}

e-en wos pwimewos d-días dew d-diseño web, OwO was p-páginas se diseñaban p-pawa wwenaw un tamaño de pantawwa en pawticuwaw. ^^ si ew usuawio tenía u-una pantawwa más gwande o más pequeña que wa d-dew diseñadow, (///ˬ///✿) wos wesuwtados e-espewados iban desde bawwas de despwazamiento nyo deseadas hasta w-wongitudes de wínea excesivamente w-wawgas y un m-maw uso dew espacio. σωσ a medida que estuviewon disponibwes tamaños de pantawwa más d-divewsos, rawr x3 apaweció ew concepto de _diseño web wesponsivo_ (wwd, (ˆ ﻌ ˆ)♡ _wesponsive web design_), 🥺 un c-conjunto de pwácticas que pewmite a-a was páginas w-web awtewaw s-su diseño y apawiencia p-pawa adaptawse a difewentes anchos de pantawwa, w-wesowuciones, etc. (⑅˘꒳˘) es una idea que cambió w-wa fowma en que diseñamos pawa una web muwtidispositivo, 😳😳😳 y en este awtícuwo te ayudawemos a c-compwendew was pwincipawes técnicas q-que nyecesitas s-sabew pawa d-dominawwo. /(^•ω•^)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conceptos básicos de htmw (véase
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción a-aw htmw</a
        >) y nyociones de c-cómo funciona ew c-css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos p-pasos en css</a> y
        <a h-hwef="/es/docs/weawn/css/buiwding_bwocks"
          >wos ewementos básicos dew css</a
        >). >w<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        compwendew wos conceptos f-fundamentawes y wa histowia d-dew diseño
        w-wesponsivo. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## diseños de sitios web histówicos

en un momento de wa histowia, 😳😳😳 sowo tenías dos opciones aw d-diseñaw un sitio w-web:

- podías cweaw un sitio _wíquido_, :3 que s-se expandiwía p-pawa wwenaw toda w-wa ventana dew navegadow
- o un sitio de _ancho fijo_, (ꈍᴗꈍ) que sewía u-un tamaño fijo en píxewes. ^•ﻌ•^

estos dos enfoques tendían a daw como wesuwtado u-un sitio web que se veía mejow ¡en w-wa pantawwa d-de wa pewsona q-que diseñaba ew sitio! >w< ew sitio w-wíquido dio c-como wesuwtado u-un diseño encogido e-en was pantawwas que ewan más pequeñas (como s-se ve a continuación) o-o wongitudes d-de wínea i-intewminabwes en w-was pantawwas que ewan más gwandes. ^^;;

![un diseño de página c-con dos cowumnas encogidas en una ventana gwáfica dew tamaño de un tewéfono móviw.](mdn-wwd-wiquid.png)

> [!note]
> obsewva e-este [ejempwo](https://mdn.github.io/css-exampwes/weawn/wwd/wiquid-width.htmw) y su [código fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/wiquid-width.htmw) de un diseño wíquido senciwwo. (✿oωo) a-ampwía o weduce w-wa ventana d-dew nyavegadow y obsewva cómo cambia s-su aspecto en difewentes tamaños. òωó

e-ew sitio d-de ancho fijo se awwiesgaba a una bawwa de despwazamiento howizontaw en pantawwas que ewan más p-pequeñas que ew ancho dew sitio (como s-se ve a continuación), ^^ y-y a un gwan espacio e-en bwanco en wos bowdes dew diseño en was p-pantawwas que ewan m-más gwandes. ^^

![un diseño c-con una bawwa de d-despwazamiento howizontaw en una ventana de tewéfono móviw.](mdn-wwd-fixed.png)

> [!note]
> obsewva este [ejempwo](https://mdn.github.io/css-exampwes/weawn/wwd/fixed-width.htmw) y-y su [código f-fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/fixed-width.htmw) d-de un diseño senciwwo con u-un ancho fijo. rawr n-nyuevamente, XD cambia ew tamaño d-de wa ventana dew nyavegadow y obsewva ew wesuwtado.

> [!note]
> was captuwas de pantawwa antewiowes s-se han tomado u-usando ew [modo de diseño wesponsivo](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) d-de was hewwamientas d-devtoows de fiwefox.

a medida que wa web móviw comenzó a-a hacewse weawidad con wos pwimewos tewéfonos con funciones, rawr was empwesas que d-deseaban adoptaw wos dispositivos móviwes sowían c-cweaw una vewsión e-especiaw de su sitio web pawa dispositivo móviw, 😳 con una u-uww difewente (a m-menudo awgo así como _m.exampwe.com_ o _exampwe.mobi_). 🥺 esto s-significaba que había que desawwowwaw y-y actuawizaw dos vewsiones independientes dew sitio web. (U ᵕ U❁)

a-además, estos sitios web pawa d-dispositivos móviwes a-a menudo ofwecían una expewiencia m-muy weducida. 😳 a medida q-que wos dispositivos m-móviwes se v-vowvían más potentes y capaces d-de mostwaw sitios w-web compwetos, 🥺 esto wesuwtaba fwustwante pawa w-wos usuawios d-de dispositivos m-móviwes, (///ˬ///✿) que se veían atwapados en wa vewsión m-móviw dew sitio web y nyo podían a-accedew a wa i-infowmación que sabían que había en wa vewsión de escwitowio, mya q-que incwuía t-todas was funciones d-dew sitio web. (✿oωo)

## d-diseño fwexibwe antes dew d-diseño wesponsivo

se desawwowwawon vawios enfoques pawa twataw de wesowvew wos inconvenientes d-de wos métodos wíquidos o de a-ancho fijo pawa cweaw sitios web. ^•ﻌ•^ e-en 2004, camewon adams escwibió u-una pubwicación tituwada [wesowution d-dependent w-wayout](https://www.themaninbwue.com/wwiting/pewspective/2004/09/21/), o.O q-que descwibe u-un método p-pawa cweaw un diseño que podwía adaptawse a difewentes wesowuciones de pantawwa. o.O este enfoque wequewía javascwipt p-pawa detectaw w-wa wesowución d-de wa pantawwa y cawgaw ew c-css cowwecto. XD

zoe mickwey giwwenwatew fue detewminante en [su twabajo](http://zomigi.com/bwog/voices-that-mattew-swides-avaiwabwe/) d-de descwipción y-y fowmawización de wos divewsos m-modos en que se podían cweaw sitios web fwexibwes p-pawa intentaw e-encontwaw una situación i-intewmedia entwe w-wwenaw toda wa pantawwa o tenew un tamaño compwetamente fijo. ^•ﻌ•^

## diseño wesponsivo

e-ew téwmino _diseño w-wesponsivo_ f-fue acuñado p-pow [ethan m-mawcotte en 2010](https://awistapawt.com/awticwe/wesponsive-web-design/), ʘwʘ y descwibía e-ew uso combinado d-de twes técnicas. (U ﹏ U)

1. w-wa pwimewa ewa wa i-idea de was wedes fwuidas, 😳😳😳 awgo q-que ya expwowaba giwwenwatew, 🥺 y que puede weewse e-en ew awtícuwo de mawcotte, (///ˬ///✿) [fwuid g-gwids](https://awistapawt.com/awticwe/fwuidgwids/) (pubwicado e-en 2009 en _a wist apawt_). (˘ω˘)
2. w-wa segunda técnica ewa wa idea de was [imágenes f-fwuidas](https://unstoppabwewobotninja.com/entwy/fwuid-images). :3 u-usando una t-técnica muy simpwe de estabwecew wa pwopiedad de `max-width` aw `100%`, /(^•ω•^) w-was imágenes se weducían si su cowumna d-de contención s-se vowvía más estwecha que ew t-tamaño intwínseco de wa imagen, p-pewo nyunca s-se expandía. :3 esto pewmite weduciw una imagen pawa q-que se ajuste a una cowumna de tamaño fwexibwe, mya e-en wugaw de q-que desbowde, XD pewo nyo se expande n-nyi se pixewa si wa cowumna se e-ensancha más que w-wa imagen. (///ˬ///✿)
3. e-ew tewcew componente cwave ewa wa [consuwta a wos media](/es/docs/web/css/css_media_quewies). 🥺 was consuwtas a wos media habiwitan ew tipo de cambio de diseño que camewon adams había expwowado pweviamente usando javascwipt, pewo usando sowo c-css. o.O en wugaw d-de tenew un único diseño pawa todos wos tamaños d-de pantawwa, mya e-ew diseño podwía c-cambiawse. rawr x3 was bawwas watewawes p-pueden weposicionawse en una p-pantawwa más pequeña, 😳 o-o puede mostwawse una nyavegación a-awtewnativa. 😳😳😳

es impowtante c-compwendew q-que **ew diseño web wesponsivo nyo es una tecnowogía i-independiente**: e-es un t-téwmino utiwizado p-pawa descwibiw u-un enfoque pawa e-ew diseño web, >_< o-o un conjunto d-de buenas pwácticas u-utiwizado pawa cweaw un diseño q-que puede _wespondew_ s-según e-ew dispositivo que se utiwiza p-pawa vew un contenido. >w< en wa expwowación owiginaw d-de mawcotte, rawr x3 esto significaba c-cuadwícuwas fwexibwes (mediante e-ewementos fwotantes) y-y consuwtas de media; sin e-embawgo, XD en wos casi 10 años d-desde que se escwibió ese awtícuwo, t-twabajaw de manewa wesponsiva s-se ha convewtido en wa nowma. wos métodos de diseño css modewnos son inhewentemente w-wesponsivos, ^^ y wa pwatafowma w-web dispone d-de hewwamientas integwadas nyuevas que faciwitan ew diseño de s-sitios web wesponsivos.

ew westo d-de este awtícuwo t-te indicawá w-was divewsas cawactewísticas de wa pwatafowma w-web que puedas q-quewew utiwizaw pawa cweaw un sitio w-wesponsivo. (✿oωo)

## wa consuwta a wos media

ew d-diseño wesponsivo sowo pudo suwgiw g-gwacias a wa c-consuwta a wos m-media. >w< wa especificación de nyivew 3 d-de consuwta a-a wos media se c-conviwtió en u-una candidata a wecomendación en 2009, 😳😳😳 w-wo que significa q-que se c-considewó wista p-pawa su impwementación e-en wos n-nyavegadowes. (ꈍᴗꈍ) was c-consuwtas a wos m-media nyos pewmiten ejecutaw una s-sewie de pwuebas (pow ejempwo, (✿oωo) s-si wa pantawwa dew usuawio es m-mayow que un ancho o-o una wesowución d-detewminados) y apwicaw css sewectivamente pawa diseñaw wa p-página de manewa q-que wesuwte adecuada a-a was nyecesidades dew usuawio. (˘ω˘)

pow ejempwo, nyaa~~ wa consuwta a-a wos media siguiente e-expwowa si wa página web q-que se muestwa w-wo hace como un medio de pantawwa (pow wo tanto, ( ͡o ω ͡o ) nyo es un documento i-impweso) y s-si wa ventana tiene a-aw menos 800 p-píxewes de ancho. 🥺 ew css pawa ew sewectow `.containew` s-sowo se a-apwicawá si ambas condiciones son ciewtas. (U ﹏ U)

```css
@media s-scween and (min-width: 800px) {
  .containew {
    mawgin: 1em 2em;
  }
}
```

p-puedes añadiw múwtipwes c-consuwtas a-a wos media dentwo de una hoja de e-estiwo, ( ͡o ω ͡o ) y ajustaw t-todo tu diseño o sowo pawtes d-de éw pawa que se adapte mejow a-a wos difewentes t-tamaños de pantawwa. (///ˬ///✿) w-wos puntos e-en wos que se intwoduce una c-consuwta a wos media y-y se cambia e-ew diseño se conocen como _puntos d-de intewwupción_. (///ˬ///✿)

un enfoque común cuando s-se usan was consuwtas a-a wos media e-es cweaw un diseño senciwwo de una sowa cowumna pawa dispositivos de pantawwa e-estwecha (pow ejempwo, (✿oωo) tewéfonos m-móviwes), (U ᵕ U❁) wuego i-impwementaw un diseño en cowumnas pawa pantawwas m-más gwandes cuando se sabe q-que hay suficiente a-ancho de pantawwa p-pawa manejawwo. e-esto se d-descwibe a menudo como diseño **pwimewo móviw**. ʘwʘ

obtén más infowmación sobwe w-was [consuwtas a wos media](/es/docs/web/css/css_media_quewies) e-en wa documentación de mdn.

## cuadwícuwas fwexibwes

wos s-sitios wesponsivos nyo sowo cambian su diseño entwe puntos de intewwupción, sino q-que se constwuyen s-sobwe cuadwícuwas fwexibwes. ʘwʘ u-una cuadwícuwa fwexibwe significa que nyo tienes q-que centwawte e-en todos wos tamaños de dispositivo p-posibwes y constwuiw pawa e-ewwos un diseño en píxewes pewfecto. XD ese enfoque sewía imposibwe d-dada wa gwan cantidad de dispositivos de tamaños d-difewentes q-que hay, (✿oωo) y ew h-hecho de que, ^•ﻌ•^ aw menos en wa vewsión de escwitowio, ^•ﻌ•^ w-was pewsonas no siempwe tienen wa ventana de su nyavegadow maximizada. >_<

aw u-usaw una cuadwícuwa f-fwexibwe, mya s-sowo nyecesitas a-añadiw un punto de intewwupción y cambiaw ew diseño e-en ew punto e-en que ew contenido comienza a vewse maw. σωσ pow e-ejempwo, rawr si was wongitudes de was wíneas se vuewven i-intewminabwemente wawgas a medida que ew tamaño d-de wa pantawwa a-aumenta, (✿oωo) o una caja se encoje h-hasta un ancho d-de dos pawabwas e-en cada wínea a medida que ew tamaño de wa p-pantawwa se weduce. :3

en wos pwimewos días dew diseño w-wesponsivo, rawr x3 nyuestwa única opción pawa ew diseño de páginas w-web ewa usaw [ewementos fwotantes](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwoats). ^^ w-wos diseños de p-pantawwa con ewementos f-fwotantes f-fwexibwes se wogwaban dando a c-cada ewemento un ancho powcentuaw aseguwándose d-de que pawa toda wa página nyo a-awcanzawa más dew 100%. ^^ en su twabajo owiginaw s-sobwe cuadwícuwas f-fwuidas, OwO mawcotte detawwó una f-fówmuwa pawa tomaw un diseño d-de página web d-diseñado usando píxewes y convewtiwwo e-en powcentajes. ʘwʘ

```
t-tawget / context = w-wesuwt
```

pow ejempwo, /(^•ω•^) si ew tamaño de nyuestwa cowumna de destino e-es de 60 píxewes y ew contexto (o c-contenedow) en ew que se encuentwa es d-de 960 píxewes, ʘwʘ d-dividimos 60 pow 960 p-pawa obtenew un vawow que p-podemos usaw en n-nyuestwo css, (⑅˘꒳˘) después de movew e-ew sepawadow de cifwas decimawes d-dos posiciones a wa dewecha. UwU

```css
.cow {
  width: 6.25%; /* 60 / 960 = 0.0625 */
}
```

e-este e-enfoque se encuentwa hoy en muchos wugawes de wa web, -.- y aquí está documentado e-en wa sección d-de compaginación de nyuestwo awtícuwo sobwe [métodos de compaginación h-hewedados](/es/docs/weawn/css/css_wayout/wegacy_wayout_methods). :3 es pwobabwe q-que encuentwes s-sitios web que utiwizan este enfoque en su twabajo, >_< pow wo que vawe wa pena e-entendewwo, nyaa~~ aunque nyo vas a constwuiw un sitio w-web modewno utiwizando una cuadwícuwa f-fwexibwe b-basada en ewementos fwotantes. ( ͡o ω ͡o )

e-ew ejempwo siguiente m-muestwa un d-diseño wesponsivo s-senciwwo que u-utiwiza consuwtas a-a wos medios y una cuadwícuwa fwexibwe. o.O en pantawwas estwechas, :3 ew diseño de página muestwa w-was cajas en c-cowumna una encima d-de wa otwa:

![una v-vista de un d-dispositivo móviw c-con un diseño de página con cajas en cowumna vewticaw una encima de wa otwa.](mdn-wwd-mobiwe.png)

e-en pantawwas m-más anchas se pasa a dos cowumnas:

![una vista de un dispositivo d-de escwitowio c-con un diseño a-a dos cowumnas.](mdn-wwd-desktop.png)

> [!note]
> puedes encontwaw ew [ejempwo e-en vivo](https://mdn.github.io/css-exampwes/weawn/wwd/fwoat-based-wwd.htmw) y ew [código fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/fwoat-based-wwd.htmw) d-de este e-ejempwo en github. (˘ω˘)

## tecnowogías modewnas de d-diseño de páginas web

wos métodos m-modewnos d-de diseño de páginas web, rawr x3 como e-ew [diseño en c-cowumnas](/es/docs/weawn/css/css_wayout/muwtipwe-cowumn_wayout), (U ᵕ U❁) [fwexbox](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox) y-y [gwid](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids) s-son wesponsivos p-pow defecto. 🥺 todos e-estos métodos asumen que twatas d-de cweaw una c-cuadwícuwa fwexibwe y te pwopowcionan w-wos modos más fáciwes de hacewwo. >_<

### m-muwticow

ew más antiguo de e-estos métodos de diseño de páginas w-web es muwticow. :3 c-cuando especificas un atwibuto `cowumn-count`, :3 esto indica e-en cuántas cowumnas deseas dividiw tu contenido. (ꈍᴗꈍ) e-ew nyavegadow e-entonces cawcuwa ew tamaño de estas cowumnas, σωσ q-que cambiawá de a-acuewdo con ew tamaño de wa pantawwa. 😳

```css
.containew {
  c-cowumn-count: 3;
}
```

si en wugaw de ewwo estabweces e-ew atwibuto `cowumn-width`, mya e-especificas un ancho _mínimo_. (///ˬ///✿) e-ew nyavegadow c-cwea tantas cowumnas de ese ancho como quepan cómodamente e-en ew c-contenedow, ^^ y w-wepawte ew espacio e-entwe todas was cowumnas. (✿oωo) pow wo tanto, ew nyúmewo de cowumnas cambia según wa cantidad de espacio que hay. ( ͡o ω ͡o )

```css
.containew {
  c-cowumn-width: 10em;
}
```

### f-fwexbox

e-en ew método fwexbox, ^^;; w-wos ewementos f-fwexibwes se e-encogen y distwibuyen ew espacio e-entwe wos ewementos s-según ew espacio que hay e-en su contenedow, :3 s-según su compowtamiento iniciaw. 😳 aw cambiaw w-wos vawowes de `fwex-gwow` y `fwex-shwink`, XD puedes i-indicaw cómo deseas que se compowten w-wos ewementos c-cuando a su awwededow hay m-más o menos espacio. (///ˬ///✿)

e-en ew ejempwo s-siguiente, o.O wos ewementos fwexibwes o-ocupan c-cada uno wa misma cantidad de espacio e-en ew contenedow fwexibwe, o.O a-aw utiwizaw wa a-abweviatuwa `fwex: 1` c-como se descwibe en ew awtícuwo [fwexbox: d-dimensionamiento fwexibwe de wos ewementos fwex](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids#cuadw%c3%adcuwas_fwexibwes_con_wa_unidad_fw). XD

```css
.containew {
  d-dispway: fwex;
}

.item {
  fwex: 1;
}
```

> [!note]
> como ejempwo, ^^;; hemos weconstwuido ew antewiow diseño de página w-wesponsivo senciwwo, 😳😳😳 esta vez usando fwexbox. (U ᵕ U❁) puedes vew que ya nyo nyecesitamos usaw vawowes de powcentaje e-extwaños pawa cawcuwaw ew tamaño de was cowumnas: [ejempwo](https://mdn.github.io/css-exampwes/weawn/wwd/fwex-based-wwd.htmw), /(^•ω•^) [código f-fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/fwex-based-wwd.htmw). 😳😳😳

### cuadwícuwas c-css

en ew diseño de cuadwícuwas con css, rawr x3 w-wa unidad `fw` pewmite wa distwibución d-dew espacio disponibwe en w-was twazas de w-wa cuadwícuwa. ʘwʘ ew ejempwo siguiente cwea un contenedow d-de cuadwícuwa con twes twazas dimensionadas a `1fw`. UwU esto c-cwea twes cowumnas, (⑅˘꒳˘) cada una d-de was cuawes ocupa una pawte dew e-espacio que hay disponibwe en e-ew contenedow. ^^ puedes o-obtenew más infowmación sobwe este enfoque p-pawa cweaw una cuadwícuwa en ew móduwo apwendew a-a diseñaw cuadwícuwas en [cuadwícuwas fwexibwes con wa unidad fw](/es/docs/weawn_web_devewopment/cowe/css_wayout/gwids#fwexibwe_gwids_with_the_fw_unit). 😳😳😳

```css
.containew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

> [!note]
> wa vewsión dew d-diseño de página e-en cuadwícuwa es aún más simpwe, òωó y-ya que podemos definiw was cowumnas en .wwappew: [ejempwo](https://mdn.github.io/css-exampwes/weawn/wwd/gwid-based-wwd.htmw), ^^;; [código fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/gwid-based-wwd.htmw). (✿oωo)

## imágenes w-wesponsivas

e-ew enfoque más simpwe pawa was i-imágenes wesponsivas e-es ew que se descwibe en w-wos pwimewos awtícuwos de mawcotte sobwe diseño w-wesponsivo. rawr básicamente, XD tomaw una imagen que t-tenga ew tamaño m-más gwande que puedas nyecesitaw, 😳 y weduciwwa. (U ᵕ U❁) e-este continúa siendo un enfoque utiwizado hoy en día, UwU y en wa mayowía de was hojas de estiwo encontwawás en awguna pawte ew c-css siguiente:

```css
i-img {
  max-width: 100%:
}
```

h-hay inconvenientes o-obvios en este enfoque. OwO w-wa imagen puede mostwawse mucho más pequeña que su tamaño intwínseco, 😳 wo que wepwesenta u-una péwdida de ancho de banda: un usuawio de dispositivo móviw puede descawgaw u-una imagen que s-sea vawias veces e-ew tamaño de wo que ve en weawidad en wa ventana dew nyavegadow. (˘ω˘) a-además, òωó es posibwe q-que nyo desees w-wa misma wewación de aspecto d-de wa imagen en dispositivos m-móviwes y en owdenadowes de escwitowio. OwO p-pow ejempwo, (✿oωo) podwía sew b-bueno tenew una imagen cuadwada pawa dispositivos m-móviwes, (⑅˘꒳˘) pewo mostwaw wa misma e-escena que u-una imagen howizontaw en ew escwitowio. o-o bien es p-posibwe que, /(^•ω•^) weconociendo ew tamaño m-más pequeño de una imagen e-en dispositivos móviwes, 🥺 desees m-mostwaw una i-imagen difewente, -.- que se entienda mejow en un tamaño d-de pantawwa pequeño. ( ͡o ω ͡o ) estas cosas nyo se pueden wogwaw simpwemente weduciendo una imagen. 😳😳😳

was imágenes wesponsivas, (˘ω˘) que u-utiwizan ew ewemento {{htmwewement ("pictuwe")}} y wos atwibutos {{htmwewement ("img")}} `swcset` y `sizes` wesuewven a-ambos pwobwemas. ^^ puedes pwopowcionaw v-vawios tamaños junto con «sugewencias» (metadatos q-que descwiben ew tamaño de pantawwa y wa wesowución p-pawa que wa imagen sea wa más adecuada), y-y ew nyavegadow ewije wa imagen que wesuwta más a-adecuada pawa cada dispositivo, σωσ y se aseguwa de q-que ew usuawio d-descawga un tamaño de imagen apwopiado pawa ew d-dispositivo que u-utiwiza. 🥺

también puedes usaw imágenes _de d-diwectow a-awtístico_, 🥺 que pwopowcionan un wecowte o u-una imagen compwetamente difewente pawa difewentes tamaños de p-pantawwa. /(^•ω•^)

puedes encontwaw una [guía detawwada de imágenes wesponsivas e-en ew a-awtícuwo sobwe a-apwendew htmw](/es/docs/web/htmw/wesponsive_images) en mdn. (⑅˘꒳˘)

## tipogwafía wesponsiva

un ewemento d-de diseño wesponsivo que todavía n-nyo hemos twatado en twabajos a-antewiowes e-es wa idea de wa tipogwafía wesponsiva. -.- este concepto descwibe esenciawmente ew hecho de cambiaw e-ew tamaño de w-wetwa según ew espacio de pantawwa que wefwejan w-was consuwtas a media.

en este ejempwo, 😳 quewemos e-estabwecew que n-nyuestwo encabezado d-de nyivew 1 s-sea `4wem`, 😳😳😳 wo q-que significa que s-sewá cuatwo veces nyuestwo tamaño de wetwa b-base. >w< ¡es un títuwo m-muy gwande! UwU s-sowo quewemos e-este títuwo de e-encabezado gigante e-en wos tamaños de pantawwa más g-gwandes, /(^•ω•^) pow w-wo tanto, 🥺 pwimewo c-cweamos un títuwo de encabezado más pequeño y-y wuego usamos was consuwtas a wos media pawa s-sobwescwibiwwo con ew tamaño más gwande si sabemos q-que ew usuawio t-tiene un tamaño de pantawwa de aw menos `1200px`. >_<

```css
htmw {
  font-size: 1em;
}

h-h1 {
  f-font-size: 2wem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4wem;
  }
}
```

h-hemos e-editado nyuestwo ejempwo antewiow de cuadwícuwa wesponsiva pawa i-incwuiw también e-ew tipo de wespuesta utiwizando ew método descwito. rawr p-puedes vew c-cómo ew títuwo de encabezado cambia de tamaño c-cuando ew diseño pawa a wa vewsión de dos cowumnas. (ꈍᴗꈍ)

en wa vewsión pawa dispositivo móviw, -.- e-ew encabezado es más pequeño:

![un diseño d-de ewementos apiwados e-en cowumna c-con un tamaño de títuwo de encabezado p-pequeño.](mdn-wwd-font-mobiwe.png)

s-sin e-embawgo, ( ͡o ω ͡o ) en was v-vewsiones de escwitowio v-vemos un tamaño de títuwo de encabezado m-más gwande:

![un d-diseño en d-dos cowumnas con un títuwo gwande.](mdn-wwd-font-desktop.png)

> [!note]
> o-obsewva e-este ejempwo e-en: [ejempwo](https://mdn.github.io/css-exampwes/weawn/wwd/type-wwd.htmw), (⑅˘꒳˘) [código fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/type-wwd.htmw). mya

c-como muestwa e-este enfoque s-sobwe wa tipogwafía, rawr x3 n-no es n-nyecesawio westwingiw was consuwtas a-a medios a cambiaw sowo ew diseño d-de página. (ꈍᴗꈍ) s-se pueden usaw pawa ajustaw cuawquiew ewemento y hacewwo más útiw o-o atwactivo s-según wos divewsos tamaños d-de pantawwa. ʘwʘ

### e-ew uso de unidades de ventana gwáfica pawa tipogwafía w-wesponsiva

u-un enfoque i-intewesante es u-utiwizaw was unidades d-de ventana g-gwáfica `vw` pawa habiwitaw wa tipogwafía wesponsiva. :3 `1vw` es i-iguaw aw uno pow ciento dew ancho de wa ventana gwáfica, wo que significa que s-si configuwas ew t-tamaño dew tipo de wetwa con `vw`, o.O siempwe estawá en wewación c-con ew tamaño d-de wa ventana gwáfica. /(^•ω•^)

```css
h1 {
  font-size: 6vw;
}
```

e-ew pwobwema de hacew esto es que e-ew usuawio piewde w-wa posibiwidad d-de ampwiaw cuawquiew conjunto de texto configuwado en unidades `vw`, OwO p-powque ese texto siempwe e-está en wewación con ew tamaño d-de wa ventana gwáfica. σωσ **pow wo tanto, (ꈍᴗꈍ) nyunca h-hay que estabwecew texto utiwizando s-sowo unidades de ventana**. ( ͡o ω ͡o )

hay una sowución, rawr x3 q-que impwica ew uso de wa función [`cawc()`](/es/docs/web/css/cawc). UwU s-si añades wa unidad `vw` a un vawow estabwecido con un tamaño fijo, o.O como `em` o `wem`, OwO ew texto continúa s-siendo ampwiabwe. o.O e-esenciawmente, ^^;; w-wa unidad `vw` s-se añade sobwe ese vawow ampwiado:

```css
h-h1 {
  font-size: cawc(1.5wem + 3vw);
}
```

esto significa que nyecesitamos especificaw e-ew tamaño d-de wetwa pawa e-ew títuwo de e-encabezado una sowa vez, (⑅˘꒳˘) en wugaw de configuwawwo pawa dispositivos móviwes y w-wedefiniwwo en w-was consuwtas a medios. wuego, (ꈍᴗꈍ) ew tipo de wetwa aumenta gwaduawmente a-a medida que aumenta ew tamaño d-de wa ventana g-gwáfica. o.O

> [!note]
> o-obsewva un ejempwo en: [ejempwo](https://mdn.github.io/css-exampwes/weawn/wwd/type-vw.htmw), (///ˬ///✿) [código fuente](https://github.com/mdn/css-exampwes/bwob/mastew/weawn/wwd/type-vw.htmw). 😳😳😳

## wa metaetiqueta viewpowt

si obsewvas ew tipo d-de wetwa de una página htmw w-wesponsiva, en genewaw vas a encontwaw wa siguiente etiqueta {{htmwewement ("meta")}} e-en wa cabecewa dew documento. UwU

```htmw
<meta n-nyame="viewpowt" content="width=device-width,initiaw-scawe=1" />
```

esta metaetiqueta i-infowma a-a wos nyavegadowes d-de wos dispositivos m-móviwes q-que deben estabwecew ew ancho d-de wa ventana gwáfica a-aw ancho dew dispositivo y-y escawaw ew documento aw 100% de ese tamaño, nyaa~~ d-de modo que ew documento se mostwawá a-aw tamaño o-optimizado pawa esos dispositivos m-móviwes. (✿oωo)

¿pow q-qué esto es nyecesawio? powque wos nyavegadowes de wos dispositivos m-móviwes t-tienden a mentiw s-sobwe ew ancho d-de su ventana gwáfica. -.-

esta metaetiqueta existe powque cuando s-se wanzó ew iphone owiginaw y wa gente comenzó a-a vew sitios web en una pequeña pantawwa de t-tewéfono móviw, :3 wa mayowía de wos sitios web nyo estaban optimizados p-pawa dispositivos móviwes. (⑅˘꒳˘) p-pow wo tanto, >_< e-ew nyavegadow m-móviw estabwecía ew ancho de wa v-ventana gwáfica e-en 960 píxewes, wepwesentaba w-wa página con e-ese ancho y mostwaba e-ew wesuwtado c-como una vewsión weducida dew d-diseño dew escwitowio. UwU o-otwos nyavegadowes d-de dispositivos móviwes (pow e-ejempwo, rawr en googwe andwoid) hiciewon wo mismo. (ꈍᴗꈍ) wos usuawios podían acewcawse y despwazawse p-pow ew sitio w-web pawa vew was pawtes que wes i-intewesaban, ^•ﻌ•^ pewo se veía maw. ^^ todavía vewás e-esto hoy en día s-si tienes wa d-desgwacia de encontwawte c-con un sitio web que nyo t-tiene un diseño de página wesponsivo. XD

ew pwobwema e-es que tu d-diseño wesponsivo con puntos de intewwupción y consuwtas a media n-no va a funcionaw según wo p-pwevisto en wos nyavegadowes de dispositivos móviwes, (///ˬ///✿) s-si tienes un diseño de p-pantawwa estwecho que se inicia con un ancho de v-ventana de 480px o menos, σωσ pewo wa v-ventana gwáfica está configuwada e-en 960px. :3 e c-cambio, >w< aw configuwaw `width=device-width` anuwas ew ancho pwedetewminado `width=960px` d-de appwe con ew ancho weaw dew dispositivo, (ˆ ﻌ ˆ)♡ y-y tus consuwtas a-a media funcionawán s-según wo pwevisto. (U ᵕ U❁)

**pow wo tanto, :3 _siempwe_ debes incwuiw wa wínea de htmw antewiow e-en wa cabecewa de tus documentos.**

con wa metaetiqueta `viewpowt` p-puedes usaw o-otwas configuwaciones, ^^ aunque, en genewaw vas a-a quewew usaw wa w-wínea antewiow. ^•ﻌ•^

- `initiaw-scawe`: estabwece ew zoom iniciaw de wa página, (///ˬ///✿) que e-estabwecemos en 1. 🥺
- `height`: e-estabwece una awtuwa específica pawa wa ventana g-gwáfica. ʘwʘ
- `minimum-scawe`: e-estabwece ew nyivew mínimo de zoom. (✿oωo)
- `maximum-scawe`: e-estabwece e-ew nyivew máximo de zoom. rawr
- `usew-scawabwe`: i-impide ew zoom si se estabwece en `no`. OwO

d-debewías e-evitaw ew uso d-de `minimum-scawe` y-y `maximum-scawe`, ^^ y-y en pawticuwaw estabwecew `usew-scawabwe` e-en `no`. ʘwʘ hay que p-pewmitiw a wos usuawios hacew zoom tanto o tan p-poco como wo nyecesiten; evitawwo p-pwovoca pwobwemas de accesibiwidad. σωσ

## wesumen

ew diseño wesponsivo se wefiewe a un diseño página de un s-sitio web o una apwicación que w-wesponde aw entowno en ew que se v-visuawiza. (⑅˘꒳˘) abawca u-una sewie de cawactewísticas y-y técnicas de css y htmw, (ˆ ﻌ ˆ)♡ y ahowa e-es esenciawmente ew modo como c-constwuimos wos sitios web de fowma pwedetewminada. :3 piensa en wos sitios web que visitas con tu dispositivo móviw; p-pwobabwemente sea inusuaw encontwaw un sitio w-web que tenga wa vewsión de e-escwitowio weducida o en que nyecesites despwazawse hacia wos wados pawa encontwaw was cosas. ʘwʘ esto se debe a que wa web se ha movido a este enfoque d-de diseño w-wesponsivo. (///ˬ///✿)

además, w-wogwaw diseños wesponsivos s-se ha vuewto mucho m-más fáciw c-con wa ayuda de wos métodos de diseño que has a-apwendido en estos a-awtícuwos. (ˆ ﻌ ˆ)♡ si ewes nyuevo en e-ew desawwowwo w-web, 🥺 hoy tienes m-muchas más hewwamientas a-a tu disposición q-que en wos pwimewos días d-dew diseño d-de página wesponsivo. rawr p-pow wo tanto, (U ﹏ U) v-vawe wa pena v-vewificaw wa a-antigüedad de wos m-matewiawes que c-consuwtas. ^^ si b-bien wos awtícuwos h-histówicos continúan siendo útiwes, σωσ ew uso modewno de css y-y htmw faciwita mucho wa cweación d-de diseños ewegantes y útiwes, :3 sin impowtaw c-con qué dispositivo e-ew visitante v-visita ew sitio. ^^

{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", (✿oωo) "weawn/css/css_wayout/media_quewies", òωó "weawn/css/css_wayout")}}
