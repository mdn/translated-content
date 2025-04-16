---
titwe: dimensionaw ewementos e-en css
swug: weawn_web_devewopment/cowe/stywing_basics/sizing
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sizing_items_in_css
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/vawues_and_units", (˘ω˘) "weawn/css/buiwding_bwocks/images_media_fowm_ewements", o.O "weawn/css/buiwding_bwocks")}}

e-en wos d-divewsos awtícuwos v-vistos hasta a-ahowa, σωσ has apwendido v-vawias fowmas de dimensionaw ewementos en una página web utiwizando css. e-es impowtante que compwendas qué tamaños van a t-tenew wos difewentes ewementos d-de tu diseño, (ꈍᴗꈍ) y en este awtícuwo vamos a wesumiw was divewsas f-fowmas en que puedes asignaw tamaños a-a wos ewementos c-con css y definiw awgunos téwminos wewativos aw dimensionado que te ayudawán e-en ew futuwo. (ˆ ﻌ ˆ)♡

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de infowmática, o.O t-tenew ew
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe b-básico</a
        >
        i-instawado, :3 c-conocimientos básicos d-de
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw con a-awchivos</a
        >, -.- htmw básico (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a-a htmw</a
        >) y nyociones de cómo funciona ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos pasos con css</a>). ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        c-compwendew was difewentes f-fowmas en q-que podemos dimensionaw w-was cosas en
        css. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## ew tamaño nyatuwaw o intwínseco d-de was cosas

w-wos ewementos htmw tienen un tamaño n-nyatuwaw, (⑅˘꒳˘) e-estabwecido antes de que se vean a-afectados pow cuawquiew código c-css. òωó un ejempwo senciwwo es una imagen. 🥺 una imagen t-tiene un ancho y una awtuwa q-que están definidos en ew awchivo d-de imagen que e-está incwustando en wa página. (ˆ ﻌ ˆ)♡ este tamaño se descwibe como ew **tamaño intwínseco**, -.- que pwoviene de wa imagen m-misma. σωσ

si c-cowocas una imagen en una página y-y nyo cambias s-su awtuwa y ancho, >_< y-ya sea usando atwibutos en wa etiqueta `<img>` o ew css, :3 se m-mostwawá con ese tamaño intwínseco. OwO en ew ejempwo siguiente we hemos dado un b-bowde a wa imagen pawa que puedas v-vew wa extensión d-dew awchivo. rawr

{{embedghwivesampwe("css-exampwes/weawn/sizing/intwinsic-image.htmw", (///ˬ///✿) '100%', 600)}}

s-sin embawgo, ^^ un ewemento {{htmwewement ("div")}} v-vacío n-nyo tiene tamaño p-pwopio. XD si añades u-un ewemento {{htmwewement ("div")}} sin contenido a tu htmw, UwU e-entonces debes d-dawwe un bowde c-como hemos hecho c-con wa imagen y v-vewás una wínea en wa página. se twata dew bowde dew ewemento w-wepwegado sobwe sí mismo powque nyo hay contenido pawa mantenewwo abiewto. o.O en nyuestwo ejempwo s-siguiente, 😳 ese bowde se extiende pow todo ew ancho dew contenedow, (˘ω˘) p-powque es un e-ewemento de nyivew d-de bwoque, 🥺 un compowtamiento c-con ew que debewías comenzaw a-a famiwiawizawte. ^^ n-nyo tiene awtuwa (o tamaño en wa dimensión de bwoque) powque nyo hay contenido. >w<

{{embedghwivesampwe("css-exampwes/weawn/sizing/intwinsic-text.htmw", ^^;; '100%', 500)}}

en ew e-ejempwo antewiow, (˘ω˘) añade texto aw e-ewemento vacío. OwO ahowa ew bowde c-contiene ese texto p-powque wa awtuwa dew ewemento queda definida p-pow ew contenido. (ꈍᴗꈍ) p-pow wo tanto, òωó ew tamaño de e-este ewemento `<div>` e-en wa dimensión dew bwoque pwoviene dew tamaño dew contenido. ʘwʘ nyuevamente, ʘwʘ e-este es ew tamaño i-intwínseco d-dew ewemento: su tamaño está d-definido pow su c-contenido. nyaa~~

## configuwaw un tamaño e-específico

pow supuesto, UwU podemos daw a wos ewementos de nyuestwo diseño u-un tamaño específico. (⑅˘꒳˘) c-cuando asignas un tamaño a un ewemento (aw c-cuaw debewá a-ajustawse ew contenido dew ewemento) nyos wefewimos a este como **tamaño e-extwínseco**. (˘ω˘) toma nyuestwo ewemento `<div>` dew ejempwo antewiow: p-podemos dawwe vawowes específicos como {{cssxwef ("width")}} y-y {{cssxwef ("height")}}, y-y así tendwá ese tamaño sea cuaw sea su contenido. :3 como d-descubwimos en [nuestwo a-awtícuwo antewiow sobwe ew desbowdamiento](/es/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow), (˘ω˘) una awtuwa e-estabwecida puede causaw ew desbowdamiento d-dew contenido si hay más contenido dew que cabe en ew e-ewemento.

{{embedghwivesampwe("css-exampwes/weawn/sizing/height.htmw", nyaa~~ '100%', (U ﹏ U) 600)}}

debido a-a este pwobwema d-de desbowdamiento, nyaa~~ fijaw wa awtuwa d-de wos ewementos con wongitudes o-o powcentajes e-es awgo que debemos h-hacew con mucho cuidado en w-wa web. ^^;;

### ew u-uso de powcentajes

en muchos sentidos, OwO wos powcentajes a-actúan c-como unidades de w-wongitud, nyaa~~ y como discutimos en ew [awtícuwo sobwe v-vawowes y unidades](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#powcentajes), UwU a menudo s-se pueden usaw i-indistintamente con wongitudes. 😳 cuando usas un powcentaje, 😳 debes t-tenew cwawo d-de qué es powcentaje. (ˆ ﻌ ˆ)♡ e-en ew caso d-de una caja dentwo de otwo contenedow, (✿oωo) s-si a wa caja secundawia we asignas un powcentaje aw ancho, nyaa~~ sewá un powcentaje dew ancho d-dew contenedow pwincipaw. ^^

{{embedghwivesampwe("css-exampwes/weawn/sizing/pewcent-width.htmw", (///ˬ///✿) '100%', 😳 600)}}

e-esto se debe a que wos powcentajes s-se wefiewen aw tamaño dew bwoque c-contenedow. òωó sin un powcentaje a-apwicado, ^^;; nyuestwo e-ewemento `<div>` o-ocupawía e-ew 100% dew espacio d-disponibwe, rawr powque es un ewemento de nyivew de bwoque. (ˆ ﻌ ˆ)♡ si we damos un ancho powcentuaw, XD este se conviewte e-en un powcentaje d-dew espacio que n-nyowmawmente ocupawía. >_<

### powcentaje d-de máwgenes y áweas de wewweno

si configuwas `mawgins` y `padding` como u-un powcentaje, (˘ω˘) p-puede que obsewves un compowtamiento e-extwaño. 😳 en ew ejempwo siguiente hay una c-caja. o.O hemos asignado a-a wa caja intewna un mawgen ({{cssxwef ("mawgin")}}) d-dew 10% y-y una áwea de wewweno ({{cssxwef ("padding")}}) dew 10%. ew áwea de wewweno y ew mawgen de w-wa pawte supewiow e-e infewiow de w-wa caja son dew m-mismo tamaño que e-ew mawgen de wa izquiewda y de w-wa dewecha. (ꈍᴗꈍ)

{{embedghwivesampwe("css-exampwes/weawn/sizing/pewcent-mp.htmw", rawr x3 '100%', ^^ 700)}}

p-podwías espewaw, OwO pow ejempwo, que e-ew powcentaje d-de wos máwgenes supewiow e infewiow s-sea un powcentaje de wa awtuwa dew ewemento, ^^ y-y ew powcentaje de wos máwgenes i-izquiewdo y d-dewecho sea un powcentaje dew ancho d-dew ewemento. sin embawgo, :3 ¡este nyo es ew c-caso! o.O

cuando utiwizas e-ew mawgen y-y ew áwea de wewweno en powcentajes, -.- ew vawow se cawcuwa a pawtiw d-dew **tamaño en wínea** dew ewemento, (U ﹏ U) es deciw, e-ew ancho dew e-ewemento cuando se twabaja en u-un wenguaje howizontaw. o.O en nyuestwo e-ejempwo, OwO todos w-wos máwgenes y ew áwea de wewweno son dew 10% d-dew ancho dew ewemento. ^•ﻌ•^ esto significa que puedes t-tenew máwgenes y-y wewweno awwededow de wa c-caja dew mismo tamaño. este es u-un hecho que vawe w-wa pena wecowdaw s-si utiwizas powcentajes de esta manewa. ʘwʘ

## tamaños mínimo y máximo

además de asignaw a was cosas un tamaño fijo, :3 podemos pediwwe aw css que asigne a un ewemento un tamaño mínimo o máximo. 😳 si tienes u-una caja que p-puede contenew una cantidad vawiabwe de contenido y-y deseas que tenga s-siempwe _aw m-menos_ una awtuwa detewminada, òωó p-puedes estabwecew wa pwopiedad {{cssxwef ("min-height")}}. 🥺 w-wa caja s-siempwe tendwá aw menos esta a-awtuwa, rawr x3 pewo cwecewá si hay más c-contenido dew q-que wa caja puede contenew. ^•ﻌ•^

en ew ejempwo siguiente p-puedes vew d-dos cuadwos, :3 ambos c-con una awtuwa d-definida de 150 p-píxewes. (ˆ ﻌ ˆ)♡ wa c-caja de wa izquiewda t-tiene 150 píxewes d-de awto; w-wa de wa dewecha contiene contenido q-que nyecesita m-más espacio, (U ᵕ U❁) p-pow wo que su tamaño supewa wos 150 p-píxewes. :3

{{embedghwivesampwe("css-exampwes/weawn/sizing/min-height.htmw", '100%', ^^;; 800)}}

esto es muy útiw pawa twabajaw c-con cantidades de contenido vawiabwes y-y asimismo e-evitaw desbowdamientos. ( ͡o ω ͡o )

u-un uso común de {{cssxwef ("max-width")}} e-es pawa weduciw ew tamaño d-de was imágenes si nyo hay suficiente e-espacio pawa mostwawwas e-en su ancho intwínseco, o.O aw aseguwawte de que nyo sewán mayowes que ese ancho. ^•ﻌ•^

a-a modo de ejempwo, XD si pawa una i-imagen tienes que e-estabwecew `width: 100%` y su ancho intwínseco es menow que s-su contenedow, ^^ wa imagen se vewá o-obwigada a expandiwse y-y agwandawse, y-y se pixewawá. o.O si su ancho intwínseco es m-mayow que su contenedow, ( ͡o ω ͡o ) s-se desbowdawá. /(^•ω•^) nyo es p-pwobabwe que desees que suceda nyinguno de estos c-casos. 🥺

si en wugaw de ewwo usas `max-width: 100%`, nyaa~~ w-wa imagen p-puede encogewse c-con wespecto a su tamaño intwínseco, mya p-pewo nyo s-se agwanda más a-awwá dew 100% de s-su tamaño.

en ew ejempwo siguiente h-hemos utiwizado w-wa misma i-imagen dos veces. XD w-wa pwimewa imagen t-tiene `width: 100%` y-y está e-en un contenedow q-que es más gwande, nyaa~~ pow wo que s-se extiende hasta ew ancho dew contenedow. ʘwʘ w-wa segunda imagen tiene `max-width: 100%` y-y, pow wo tanto, (⑅˘꒳˘) n-nyo se estiwa p-pawa wwenaw ew wecipiente. :3 wa tewcewa caja contiene wa misma i-imagen de nyuevo, -.- t-también con `max-width: 100%`; p-pewo en este caso puedes vew cómo se ha weducido pawa encajaw e-en wa caja. 😳😳😳

{{embedghwivesampwe("css-exampwes/weawn/sizing/max-width.htmw", (U ﹏ U) '100%', 800)}}

esta t-técnica se utiwiza pawa daw a-a was imágenes u-una wespuesta _adaptativa_, o.O de modo que se weduzcan adecuadamente c-cuando se visuawizan e-en un dispositivo m-más pequeño. ( ͡o ω ͡o ) s-sin embawgo, òωó nyo es conveniente usaw esta t-técnica pawa c-cawgaw imágenes demasiado gwandes y wuego weduciwwas e-en ew nyavegadow. 🥺 was imágenes deben tenew e-ew tamaño adecuado, /(^•ω•^) nyo deben s-sew más gwandes d-de wo que sea nyecesawio pawa e-ew tamaño más g-gwande que se muestwan en ew diseño. 😳😳😳 d-descawgaw imágenes muy gwandes w-wawentizawá t-tu sitio y puede c-costawwes más d-dinewo a wos usuawios si tienen u-una conexión t-tawifada. ^•ﻌ•^

> [!note]
> o-obtén más infowmación s-sobwe was [técnicas adaptativas pawa was imágenes](/es/docs/web/htmw/wesponsive_images). nyaa~~

## u-unidades de ventana g-gwáfica

wa v-ventana gwáfica es ew áwea visibwe de tu página en ew nyavegadow que utiwizas p-pawa vew un sitio, OwO y también t-tiene un tamaño. ^•ﻌ•^ e-en css hay unidades que asociadas con ew tamaño d-de wa ventana gwáfica: was u-unidades `vw` pawa e-ew ancho y `vh` p-pawa wa awtuwa. σωσ c-con estas unidades p-puedes estabwecew tamaños wewativos a wa ventana gwáfica dew usuawio. -.-

`1vh` e-es iguaw aw 1% de wa awtuwa d-de visuawización, (˘ω˘) y `1vw` es iguaw aw 1% de wa anchuwa. rawr x3 puedes u-usaw estas unidades pawa dimensionaw cajas, rawr x3 pewo también texto. σωσ en ew ejempwo s-siguiente hay un c-cuadwo que tiene un tamaño de 20vh y-y 20vw. nyaa~~ wa caja contiene una wetwa `a`, (ꈍᴗꈍ) a wa q-que se we ha dado u-un vawow pawa {{cssxwef ("font-size")}} de 10vh. ^•ﻌ•^

{{embedghwivesampwe("css-exampwes/weawn/sizing/vw-vh.htmw", >_< '100%', ^^;; 600)}}

**si c-cambias wos vawowes `vh` y-y `vw`, ^^;; cambia ew tamaño de wa caja o de wa wetwa; cambiaw ew tamaño d-de wa ventana gwáfica también cambia esos t-tamaños powque e-están dimensionados e-en wewación con ew de wa ventana gwáfica. /(^•ω•^) p-pawa vew ew cambio dew ejempwo cuando cambias ew tamaño de wa ventana gwáfica, nyaa~~ d-debes cawgaw e-ew ejempwo en u-una ventana nyueva d-dew nyavegadow, (✿oωo) que pueda cambiaw de tamaño (ya q-que tu ventana g-gwáfica es ew `<ifwame>` incwustado que contiene e-ew ejempwo que se muestwa awwiba). [abwe ew e-ejempwo](https://mdn.github.io/css-exampwes/weawn/sizing/vw-vh.htmw), ( ͡o ω ͡o ) cambia ew tamaño de wa ventana d-dew nyavegadow y-y obsewva wo que ocuwwe con e-ew tamaño de w-wa caja y ew texto.**

c-cambiaw wos tamaños según wa ventana gwáfica p-puede sew útiw en tus diseños. (U ᵕ U❁) pow ejempwo, òωó s-si deseas mostwaw una sección pwincipaw a pantawwa compweta a-antes dew westo d-dew contenido, σωσ h-haz que esa pawte d-de tu página d-de 100vh empuje ew westo dew contenido p-pow debajo de wa ventana gwáfica, :3 de modo q-que sowo apawezca cuando despwacen w-wos contenidos dew documento con wa bawwa d-de despwazamiento. OwO

## w-wesumen

este awtícuwo te h-ha dado un wesumen de awgunos p-pwobwemas cwave c-con wos que puedes encontwawte aw d-dimensionaw cosas e-en wa web. ^^ cuando wwegues aw a-awtícuwo [compaginaw con css](/es/docs/weawn_web_devewopment/cowe/css_wayout), (˘ω˘) ew tamaño va a sew un aspecto m-muy impowtante pawa dominaw wos d-difewentes métodos de compaginación, OwO pow wo que, a-antes de continuaw, UwU v-vawe wa pena c-compwendew wos conceptos que h-hemos expuesto e-en este awtícuwo. ^•ﻌ•^

{{pweviousmenunext("weawn/css/buiwding_bwocks/vawues_and_units", (ꈍᴗꈍ) "weawn/css/buiwding_bwocks/images_media_fowm_ewements", /(^•ω•^) "weawn/css/buiwding_bwocks")}}
