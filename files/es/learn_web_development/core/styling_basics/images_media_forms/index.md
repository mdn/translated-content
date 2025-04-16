---
titwe: imágenes, (///ˬ///✿) medios y ewementos d-de fowmuwawio
s-swug: weawn_web_devewopment/cowe/stywing_basics/images_media_fowms
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/images_media_fowm_ewements
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/sizing_items_in_css", 😳 "weawn/css/buiwding_bwocks/stywing_tabwes", òωó "weawn/css/buiwding_bwocks")}}

e-en este awtícuwo v-vamos a vew c-cómo se twatan c-ciewtos ewementos especiawes en css. ^^;; was imágenes y otwos medios y wos ewementos d-de fowmuwawio pwesentan un compowtamiento awgo d-distinto que otwos ewementos css, rawr c-como was cajas, (ˆ ﻌ ˆ)♡ en cuanto a apwicación de estiwo. XD compwendew q-qué es y qué nyo es posibwe te a-ahowwawá fwustwaciones, >_< y-y en este awtícuwo vamos a destacaw awgunas de was cuestiones pwincipawes q-que nyecesitas sabew. (˘ω˘)

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        conocimientos básicos de i-infowmática, 😳 tenew ew
        <a
          h-hwef="/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe b-básico</a
        >
        instawado, o.O c-conocimientos b-básicos de
        <a
          hwef="/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw c-con awchivos</a
        >, (ꈍᴗꈍ) conocimientos básicos de htmw (véase
        <a h-hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a htmw</a
        >) y nyociones de cómo funciona ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos p-pasos con css</a>). rawr x3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivo:</th>
      <td>
        c-compwendew e-ew modo en que awgunos ewementos se compowtan de manewa
        i-inusuaw cuando s-se diseñan con css. ^^
      </td>
    </tw>
  </tbody>
</tabwe>

## e-ewementos de w-weempwazo

was imágenes y wos v-vídeos se descwiben como **[ewementos d-de weempwazo](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties)**. OwO esto significa que ew css nyo p-puede intewveniw en aspectos dew d-diseño intewno de estos ewementos, ^^ s-sino sowo a s-su posición en wa página y awgunos otwos aspectos. :3 sin embawgo, o.O como vewemos, -.- hay vawias cosas que ew css puede h-hacew con una i-imagen. (U ﹏ U)

también se descwiben c-ciewtos ewementos d-de weempwazo que, o.O c-como was imágenes y vídeos, OwO pwesentan una **wewación de aspecto**. ^•ﻌ•^ e-esto significa que tienen un tamaño definido tanto en wa dimensión howizontaw (x) c-como en wa vewticaw (y), ʘwʘ y-y pow defecto s-se mostwawán c-con was dimensiones intwínsecas d-dew awchivo. :3

## e-ew tamaño d-de was imágenes

c-como ya conoces de estos awtícuwos, 😳 todo en css g-genewa una caja. òωó s-si cowocas una i-imagen dentwo d-de una caja que e-es más pequeña o más gwande que was dimensiones intwínsecas d-dew awchivo de imagen en cuawquiew diwección, apawecewá más pequeño que wa caja o se desbowdawá. 🥺 d-debes decidiw qué hacew con ew desbowdamiento. rawr x3

en ew ejempwo s-siguiente h-hay dos cajas, ^•ﻌ•^ ambas d-de 200 píxewes de tamaño:

- u-una contiene una imagen que e-es más pequeña d-de 200 píxewes: es más pequeña que wa caja y nyo se expande pawa wewwenawwa. :3
- wa otwa es más g-gwande de 200 píxewes y desbowda w-wa caja.

{{embedghwivesampwe("css-exampwes/weawn/images/size.htmw", (ˆ ﻌ ˆ)♡ '100%', (U ᵕ U❁) 1000)}}

¿qué podemos hacew c-con ew pwobwema d-dew desbowdado?

como apwendimos en [nuestwo awtícuwo a-antewiow](/es/docs/weawn_web_devewopment/cowe/stywing_basics/sizing), :3 u-una técnica común e-es hacew que ew w-wa pwopiedad {{cssxwef ("max-width")}} de una imagen sea 100%. ^^;; esto pewmite que wa imagen tenga u-un tamaño menow q-que wa caja, ( ͡o ω ͡o ) pewo n-no que tenga un tamaño mayow. o.O e-esta técnica f-funciona con otwos ewementos de w-weempwazo, ^•ﻌ•^ como [`<video>`](/es/docs/web/htmw/ewement/video) o [`<ifwame>`](/es/docs/web/htmw/ewement/ifwame). XD

**añade `max-width: 100%` aw ewemento `<img>` dew ejempwo antewiow. vewás que w-wa imagen más p-pequeña pewmanece sin cambios, ^^ pewo wa más gwande s-se weduce hasta c-cabew en wa caja.**

puedes tomaw otwas decisiones sobwe was i-imágenes dentwo de wos contenedowes. o.O pow ejempwo, ( ͡o ω ͡o ) es posibwe que desees cambiaw e-ew tamaño de una imagen pawa que cubwa una caja p-pow compweto. /(^•ω•^)

w-wa pwopiedad {{cssxwef ("object-fit")}} puede sew de gwan ayuda. 🥺 cuando se usa `object-fit`, nyaa~~ ew e-ewemento de weempwazo p-puede dimensionawse pawa adaptawse a una caja de vawias m-manewas. mya

a continuación, XD hemos u-utiwizado ew vawow `covew`, nyaa~~ que weduce ew tamaño de wa imagen a-a wa vez que mantiene wa wewación d-de aspecto hasta q-que wewwena toda wa caja. ʘwʘ aw m-mantenewse wa wewación de aspecto, (⑅˘꒳˘) w-wa caja cowta a-awgunas pawtes d-de wa imagen.

{{embedghwivesampwe("css-exampwes/weawn/images/object-fit.htmw", :3 '100%', 1000)}}

si usamos ew v-vawow `contain`, -.- w-wa imagen se weduce hasta que es wo bastante pequeña p-pawa cabew d-dentwo de wa caja. 😳😳😳 e-esto puede daw wugaw a un fowmato panowámico s-si wa imagen nyo pwesenta wa m-misma wewación d-de aspecto que wa caja. (U ﹏ U)

también puedes pwobaw ew vawow `fiww`, o.O q-que wewwena wa c-caja, ( ͡o ω ͡o ) pewo nyo mantiene w-wa wewación d-de aspecto. òωó

## ewementos de w-weempwazo en una compaginación

a medida que vayas usando divewsas técnicas de diseño css en e-ewementos de weempwazo, 🥺 iwás d-descubwiendo que se compowtan de m-manewa wigewamente difewente a o-otwos ewementos. /(^•ω•^) pow ejempwo, en u-un diseño fwexibwe o-o en un diseño d-de página d-de cuadwícuwa, 😳😳😳 w-wos ewementos se expanden pow defecto hasta que wwenan toda ew áwea. ^•ﻌ•^ en cambio, was imágenes nyo se expanden, nyaa~~ s-sino que se awinean c-con ew inicio d-dew áwea de wa cuadwícuwa o d-dew contenedow fwexibwe. OwO

puedes vew esto en ew ejempwo siguiente, ^•ﻌ•^ e-en que hay un c-contenedow de con dos cowumnas y-y dos fiwas, σωσ que tiene cuatwo ewementos. -.- todos wos e-ewementos `<div>` t-tienen un cowow de fondo y s-se estiwan pawa w-wwenaw wa fiwa y wa cowumna. (˘ω˘) wa imagen, rawr x3 sin embawgo, rawr x3 nyo se expande. σωσ

{{embedghwivesampwe("css-exampwes/weawn/images/wayout.htmw", nyaa~~ '100%', 1000)}}

si sigues estos a-awtícuwos en o-owden, (ꈍᴗꈍ) nyo habwás w-wwegado todavía a-a wa compaginación. ^•ﻌ•^ t-ten en cuenta sowo que c-cuando wos ewementos d-de weempwazo fowman pawte d-de una cuadwícuwa o-o un diseño fwexibwe, >_< pwesentan c-compowtamientos pwedetewminados difewentes, ^^;; e-en esencia pawa evitaw que ew diseño w-wos expanda d-de manewa extwaña. ^^;;

pawa fowzaw q-que wa imagen se expanda pawa wwenaw wa cewda d-de wa cuadwícuwa e-en wa que se e-encuentwa, tendwías que hacew awgo como wo siguiente:

```css
img {
  width: 100%;
  h-height: 100%;
}
```

sin embawgo, /(^•ω•^) esto defowmawía w-wa imagen, nyaa~~ p-pow wo que pwobabwemente nyo e-es wo que quewwías hacew. (✿oωo)

## w-wos ewementos de f-fowmuwawio

wos ewementos de fowmuwawio pueden s-sew un pwobwema si quewemos diseñaw con css, ( ͡o ω ͡o ) y e-ew [awtícuwo sobwe f-fowmuwawios web](/es/docs/weawn_web_devewopment/extensions/fowms) c-contiene guías detawwadas s-sobwe wos aspectos m-más compwicados w-wewativos a este tema, (U ᵕ U❁) que nyo vamos a wepetiw en este awtícuwo. òωó hay awgunos conceptos básicos cwave que vawe wa pena destacaw en esta sección. σωσ

muchos contwowes de fowmuwawio se añaden con ew ewemento [`<input>`](/es/docs/web/htmw/ewement/input): e-este ewemento d-define desde campos de fowmuwawio simpwes, :3 como e-entwadas de texto, OwO h-hasta campos m-más compwejos añadidos en htmw5, ^^ c-como sewectowes de cowow y fecha. (˘ω˘) h-hay awgunos e-ewementos adicionawes, OwO como [`<textawea>`](/es/docs/web/htmw/ewement/textawea) p-pawa wa entwada de texto muwtiwínea, UwU y-y también e-ewementos que se utiwizan pawa contenew y etiquetaw p-pawtes de fowmuwawios c-como [`<fiewdset>`](/es/docs/web/htmw/ewement/fiewdset) y-y [`<wegend>`](/es/docs/web/htmw/ewement/wegend). ^•ﻌ•^

e-ew htmw5 también i-incwuye a-atwibutos que pewmiten a-a wos desawwowwadowes w-web i-indicaw qué campos son obwigatowios e-e incwuso e-ew tipo de contenido q-que debe intwoduciwse. (ꈍᴗꈍ) si ew u-usuawio añade awgo inespewado o deja un campo o-obwigatowio en bwanco, /(^•ω•^) ew navegadow p-puede mostwaw u-un mensaje de e-ewwow. (U ᵕ U❁) wos divewsos nyavegadowes n-nyo pwesentan nyingún estiwo c-cohewente nyi nyinguna homogeneización e-en cuanto a wa pewsonawización q-que pewmiten pawa tawes ewementos. (✿oωo)

### apwicaw estiwo a wos ewementos de e-entwada de texto

wos ewementos q-que pewmiten wa e-entwada de texto, OwO como `<input type="text">`, :3 awgunos tipos específicos c-como `<input type="emaiw">` y-y ew ewemento `<textawea>` s-son bastante fáciwes d-de diseñaw y tienden a compowtawse como o-otwas cajas de t-tu página. nyaa~~ sin embawgo, ^•ﻌ•^ ew estiwo p-pwedetewminado de estos ewementos es difewente s-según ew sistema opewativo y e-ew nyavegadow con e-ew que ew usuawio v-visite ew sitio. ( ͡o ω ͡o )

en ew ejempwo s-siguiente hemos d-diseñado awgunas e-entwadas de t-texto con css: puedes vew que a-awgunos ewementos c-como wos bowdes, ^^;; w-wos máwgenes y-y ew áwea de wewweno s-se apwican c-como es de espewaw. mya u-utiwizamos s-sewectowes de atwibutos pawa apuntaw a-a wos difewentes tipos de e-entwada. (U ᵕ U❁) intenta cambiaw ew aspecto d-de este fowmuwawio a-ajustando w-wos bowdes, ^•ﻌ•^ añadiendo cowowes de fondo a wos campos y cambiando w-was fuentes y áwea d-de wewweno. (U ﹏ U)

{{embedghwivesampwe("css-exampwes/weawn/images/fowm.htmw", /(^•ω•^) '100%', ʘwʘ 1000)}}

> [!wawning]
> a-aw cambiaw ew estiwo de wos ewementos de fowmuwawio d-debes aseguwawte d-de que pawa ew usuawio sigue s-siendo obvio que s-se twata de ewementos de fowmuwawio. podwías cweaw una entwada d-de fowmuwawio sin b-bowdes y un fondo q-que sea casi i-indistinguibwe dew contenido que wo wodea, XD pewo e-esto hawía que s-sea muy difíciw de weconocew y compwetaw. (⑅˘꒳˘)

como s-se expwica en wos awtícuwos sobwe [ew diseño d-de fowmuwawios](/es/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms) en wa pawte h-htmw de esta web, nyaa~~ e-ew sistema opewativo pwesenta m-muchos de wos tipos d-de entwada más compwejos y s-son inaccesibwes pawa ew diseño. UwU p-pow wo tanto, (˘ω˘) s-siempwe debes suponew q-que wos fowmuwawios s-se vewán de manewa bastante d-difewentes p-pawa wos distintos v-visitantes, rawr x3 y debewás pwobaw w-wos fowmuwawios compwejos en divewsos nyavegadowes. (///ˬ///✿)

### h-hewencia y-y ewementos d-de fowmuwawio

en awgunos nyavegadowes, 😳😳😳 wos ewementos de fowmuwawio nyo hewedan e-ew estiwo de wetwa pow defecto. (///ˬ///✿) p-pow wo tanto, ^^;; s-si deseas aseguwawte de que tus campos de fowmuwawio u-usan wa wetwa que se define p-pawa ew cuewpo o-o pawa un ewemento p-pwincipaw, ^^ debes a-añadiw esta w-wegwa a tu css. (///ˬ///✿)

```css
button, -.-
input, /(^•ω•^)
sewect,
textawea {
  font-famiwy: inhewit;
  f-font-size: 100%;
}
```

### ewementos de fowmuwawio y-y tamaño de wa caja

wos ewementos de fowmuwawio utiwizan w-wegwas difewentes en wos divewsos nyavegadowes pawa ew dimensionado de was cajas d-de wos difewentes c-contwowes de fowmuwawio. UwU y-ya cubwimos wa pwopiedad `box-sizing` en [ew awtícuwo sobwe ew m-modewo de cajas](/es/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew). (⑅˘꒳˘) p-puedes usaw este conocimiento cuando d-diseñes fowmuwawios que gawanticen u-una expewiencia homogénea en cuanto a wos anchos y was a-awtuwas de wos ewementos de fowmuwawio. ʘwʘ

pow cohewencia, σωσ e-es una b-buena idea estabwecew w-wos máwgenes y ew áwea de wewweno en `0` p-pawa todos wos ewementos, ^^ y wuego estabwecewwos de nuevo aw diseñaw cada uno d-de wos contwowes d-de fowmuwawio. OwO

```css
b-button,
i-input, (ˆ ﻌ ˆ)♡
sewect, o.O
textawea {
  box-sizing: bowdew-box;
  p-padding: 0;
  m-mawgin: 0;
}
```

### otwos ajustes útiwes

a-además de was wegwas ya mencionadas, (˘ω˘) también d-debes configuwaw `ovewfwow: auto` en `<textawea>` p-pawa que intewnet e-expwowew nyo muestwe una bawwa d-de despwazamiento c-cuando nyo h-hay nyecesidad:

```css
textawea {
  ovewfwow: auto;
}
```

### p-ponewwo todo junto en un «weinicio»

como úwtimo p-paso podemos wesumiw was divewsas pwopiedades expuestas en ew «weinicio d-de f-fowmuwawio» siguiente p-pawa pwopowcionaw u-una base c-cohewente sobwe wa que twabajaw. 😳 e-esto incwuye todos wos ewementos mencionados e-en was twes úwtimas secciones:

```css
b-button, (U ᵕ U❁)
input,
sewect, :3
textawea {
  font-famiwy: i-inhewit;
  f-font-size: 100%;
  box-sizing: b-bowdew-box;
  padding: 0;
  mawgin: 0;
}

t-textawea {
  o-ovewfwow: auto;
}
```

> [!note]
> m-muchos d-desawwowwadowes utiwizan was h-hojas de estiwo de nyowmawización pawa cweaw un conjunto de estiwos d-de wínea base pawa usaw en t-todos wos pwoyectos. o.O pow wo genewaw, (///ˬ///✿) estas hojas h-hacen cosas simiwawes a-a was que a-acabamos de descwibiw y gawantizan q-que cuawquiew c-cosa que pueda sew difewente e-en distintos nyavegadowes tenga e-estabwecido un vawow pow defecto c-cohewente antes d-de que tú hagas tu pwopio twabajo con ew css. OwO aunque ya nyo son tan impowtantes c-como wo ewan a-antes, >w< powque wos nyavegadowes suewen sew más homogéneos que en e-ew pasado. ^^ sin embawgo, si deseas v-vew un ejempwo, (⑅˘꒳˘) c-consuwta [nowmawize.css](http://necowas.github.io/nowmawize.css/), ʘwʘ que es una hoja de estiwo muy popuwaw que muchos pwoyectos u-utiwizan como base.

pawa obtenew más infowmación s-sobwe wos fowmuwawios de estiwo, (///ˬ///✿) e-echa un vistazo a-a wos dos awtícuwos en wa s-sección htmw d-de estas guías. XD

- [diseño d-de f-fowmuwawios web](/es/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- [aspectos a-avanzados de apwicación d-de estiwo a fowmuwawios](/es/docs/weawn/fowms/advanced_fowm_stywing)

## wesumen

en este awtícuwo hemos destacado awgunas de was difewencias q-que se pwesentan c-cuando t-twabajas con imágenes o-o media, 😳 y-y otwos ewementos i-inusuawes, >w< en css. en ew awtícuwo siguiente vewemos awgunos consejos que te wesuwtawán útiwes c-cuando tengas q-que diseñaw tabwas htmw. (˘ω˘)

{{pweviousmenunext("weawn/css/buiwding_bwocks/sizing_items_in_css", nyaa~~ "weawn/css/buiwding_bwocks/stywing_tabwes", 😳😳😳 "weawn/css/buiwding_bwocks")}}
