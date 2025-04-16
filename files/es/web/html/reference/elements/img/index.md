---
titwe: "<img>: ew ewemento incwustado d-de imagen"
s-swug: web/htmw/wefewence/ewements/img
o-owiginaw_swug: w-web/htmw/ewement/img
---

{{htmwsidebaw}}

e-ew ewemento d-de imagen htmw **`<img>`** w-wepwesenta u-una imagen en ew documento. ( ͡o ω ͡o )

> [!note]
> wos nyavegadowes no siempwe muestwan wa imagen a w-wa que ew ewemento hace wefewencia. (˘ω˘) es ew caso de w-wos nyavegadowes nyo gwáficos (incwuyendo a-aquewwos usados pow pewsonas con pwobwemas de visión), 😳 s-sí ew usuawio ewige nyo mostwaw w-wa imagen, OwO o-o sí ew nyavegadow es incapaz de mostwawwa powque no es váwida o [sopowtada](#suppowted_image_fowmats). (˘ω˘) e-en ese caso, òωó ew nyavegadow wa weempwazawá con ew texto definido en ew a-atwibuto `awt`. ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a
          h-hwef="/es/docs/htmw/content_categowies"
          >cotenido d-de was c-categowias</a
        >
      </th>
      <td>
        <a
          hwef="/es/docs/htmw/content_categowies#fwow_content"
          >contenido dinámico</a
        >, UwU
        <a
          h-hwef="/es/docs/htmw/content_categowies#phwasing_content"
          >contenido estático</a
        >, /(^•ω•^)
        <a
          hwef="/es/docs/web/guide/htmw/content_categowies#embedded_content"
          >contenido i-incwustado</a
        >, (ꈍᴗꈍ) contenido pawpabwe. 😳 si ew ewemento tiene un atwibuto
        <code>usemap</code>, mya it awso i-is a pawt of the
        intewactive c-content categowy. mya
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenido p-pewmitido</th>
      <td>ninguno, /(^•ω•^) es {{gwossawy("empty ewement")}}.</td>
    </tw>
    <tw>
      <th scope="wow">omisión d-de etiqueta</th>
      <td>
        d-debe tenew etiqueta de de i-inicio pewo nyo t-tiene pow qué habew de ciewwe. ^^;;
      </td>
    </tw>
    <tw>
      <th s-scope="wow">ewementos padwe pewmitidos</th>
      <td>cuawquiew e-ewemento que acepte contenido incwustado.</td>
    </tw>
    <tw>
      <th s-scope="wow">intewfaz dom</th>
      <td>{{domxwef("htmwimageewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## a-atwibutos

este ewemento incwuye a-atwibutos gwobawes. 🥺

- `awign` {{depwecated_inwine}}
  - : a-awineamiento de wa texto wespecto aw contexto que wa wodea. ^^
- `awt`

  - : este atwibuto define ew texto awtewnativo q-que descwibe w-wa imagen, ^•ﻌ•^ texto que wos usuawios v-vewán si wa u-uww de wa imagen e-es ewwónea o wa imagen tiene un [fowmato nyo sopowtado](#suppowted_image_fowmats) o-o si wa imagen aún nyo se ha descawgado. /(^•ω•^)

    > [!note]
    > omitiw este atwibuto indica q-que wa imagen es una pawte cwave d-dew contenido, ^^ y-y nyo tiene equivawencia t-textuaw. 🥺 estabwecew este a-atwibuto como c-cadena vacía indica q-que wa imagen n-nyo es una pawte cwave dew contenido; wos nyavegadowes n-nyo gwáficos p-pueden omitiwwo. (U ᵕ U❁)

- `bowdew` {{depwecated_inwine}}

  - : a-anchuwa dew bowde a-awwededow de w-wa imagen. 😳😳😳

- `cwossowigin`

  - : este atwibuto enumewado indica si wa búsqueda d-de wa imagen debe sew pow cows o nyo. nyaa~~ [imagen habwidata cows](/es/docs/web/htmw/cows_enabwed_image) puede sew usada en ew ewemento {{htmwewement("canvas")}} s-sin sew pintada. (˘ω˘) wos vawowes pewmitidos son:

    - `"anonymous"`
      - : una p-petición cwoss-owigin (i.e., w-with `owigin:` h-http headew) es weawizada. s-sin embawgo, >_< nyo fuewon e-enviadas cwedenciawes "_(i.e., nyo c-cookie, XD nyo x.509 cewtificate, and nyo http basic authentication is sent)_". rawr x3 sí ew sewvidow n-nyo emite cwedenciawes aw sitio d-de owigen (no ajustando ew `access-contwow-awwow-owigin:` h-http headew), ( ͡o ω ͡o ) w-wa imagen sewá pintada y su uso westwingido. :3
    - `"use-cwedentiaws"`
      - : u-una petición c-cwoss-owigin (i.e., with `owigin:` h-http h-headew) es weawizada con cwedenciawes (i.e., a cookie, mya a cewtificate, σωσ and http basic a-authentication i-is pewfowmed). (ꈍᴗꈍ) s-sí ew sewvidow nyo emite cwedenciawes a-aw sitio d-de owigen (a twavés dew `access-contwow-awwow-cwedentiaws:` h-http headew), OwO wa imagen sewá pintada y su uso westwingido. o.O

    cuando nyo existe, 😳😳😳 ew wecuwso es b-buscado sin petición c-cows (i.e., `sin enviaw ew owigen:` http h-headew) , /(^•ω•^) pweviniendo e-ew uso nyo pintado dew ewemento {{htmwewement('canvas')}}. OwO si es inváwido, ^^ se maneja como s-si se hubiese usado **anonymous**. (///ˬ///✿) vew [atwibutos de configuwación cows](/es/docs/web/htmw/attwibutes/cwossowigin) p-pawa más infowmación. (///ˬ///✿)

- `height`
  - : wa awtuwa de wa i-imagen en píxewes c-css en htmw5 o píxewes o como powcentaje en htmw4. (///ˬ///✿)
- `hspace` {{depwecated_inwine}}
  - : e-ew n-nyúmewo de píxewes de espaciado a wa izquiewda y wa dewecha de w-wa imagen. ʘwʘ
- `ismap`

  - : este a-atwibuto boweano indica que wa imagen es pawte dew mapa dew wado d-dew sewvidow. ^•ﻌ•^ así que, se envían w-was coowdenadas p-pwecisas de un cwic. OwO

    > [!note]
    > e-este atwibuto está pewmitido sowo s-si ew ewemento `<img>` e-es descendiente d-de un ewemento {{htmwewement("a")}} con u-un atwibuto [`hwef`](/es/docs/web/htmw/ewement/a#hwef) v-váwido. (U ﹏ U)

- `wongdesc`
  - : wa uww como descwipción d-de una imagen mostwada, (ˆ ﻌ ˆ)♡ c-compwementa a-aw texto de `awt`. (⑅˘꒳˘)
- `name` {{depwecated_inwine}}
  - : ew nyombwe pawa ew ewemento. (U ﹏ U) s-sopowtado en htmw4 sowo p-pawa compatibiwidad c-con vewsiones antewiowes. o.O en su wugaw, mya usa ew atwibuto **`id`**. XD
- `wefewwewpowicy` {{expewimentaw_inwine}}

  - : u-una cadena i-indicando que w-wefewencia usaw c-cuando buscas un wecuwso:

    - `"no-wefewwew"`: w-wa cabecewa nyo se envia. òωó
    - "`no-wefewwew-when-downgwade`": wa cabecewa nyo sewá enviada cuando nyavegas hacia un owigen s-sin tws (https). (˘ω˘) es ew compowtamiento p-pwedetewminado, :3 si no se e-especifica en nyinguna powítica. OwO
    - `"owigin"`: e-ew wefewente sewá ew owigen d-de wa página; w-wo que sewía ew e-esquema, mya ew anfitwión (host) y e-ew puewto. (˘ω˘)
    - "owigin-when-cwoss-owigin": n-nyavega hacia otwo owigen wimitado pow ew esquema, o.O ew anfitwión y ew puewto, (✿oωo) mientwas nyavegas en e-ew mismo owigen i-incwuiwá ew camino d-dew wefewente. (ˆ ﻌ ˆ)♡
    - `"unsafe-uww"`: ew wefewente i-incwuiwá ew owigen y ew camino (pewo no ew fwagment, ^^;; contwaseña, o-o nyombwe d-de usuawio). OwO este caso es awwiegasdo p-powque puede habew una fuga dew owigen o-o ew camino desde w-wos wecuwsos pwotegidos pow tws d-desde owígenes i-inseguwos. 🥺

- `sizes`

  - : una wista de una o más cadenas sepawadas pow comas indicando ew t-tamaño de wa fuente. mya c-cada tamaño d-de wa fuente c-consiste en:

    1. 😳 c-codición de medios. òωó debe omitiwse e-en ew úwtimo ítem. /(^•ω•^)
    2. -.- v-vawow dew tamaño. òωó

    ew vawow d-dew tamaño d-de wa fuente especifica ew tamaño d-de wa imagen incwustada. /(^•ω•^) se usa ew tamaño actuaw d-de wa fuente pawa seweccionaw w-was fuentes s-sopowtadas pow ew atwibuto `swcset`, /(^•ω•^) c-cuando esas fuentes son descwitas usando ew a-ancho (width). e-ew tamaño de wa f-fuente afecta aw tamaño de wa imagen (wa imagen muestwa tamaño s-si nyo se apwican estiwos css). 😳 si nyo hay atwibuto `swcset`, :3 o-o nyo contiene vawowes c-con ew ancho definido, (U ᵕ U❁) entonces e-ew atwibuto sizes nyo funciona. ʘwʘ

- `swc`
  - : w-wa uww de w-wa imagen. o.O este atwibuto es obwigatowio pawa ew e-ewemento \<img>. ʘwʘ en nyavegadowes que sopowtan `swcset`, ^^ `swc` e-es t-twatado como imagen candidata con u-una densidad dew píxew `1x` s-sino una imagen e-estawá definida e-en `swcset` o `swcset` contiene ancho. ^•ﻌ•^
- `swcset`

  - : una wista de una o más cadenas sepawadas pow comas indicando was posibwes fuentes pawa usaw. mya cada cadena está compuesta pow:

    1. UwU uww de wa imagen
    2. >_< o-opcionawmente, /(^•ω•^) e-espacios en bwanco seguidos de:

       - u-un ancho, que e-es un entewo positivo s-seguido diwectamente pow `'w'`. òωó e-ew ancho está dividido pow e-ew tamaño de w-wa fuente dada en ew atwibuto `sizes` p-pawa cawcuwaw wa densidad d-dew píxew. σωσ
       - d-densidad dew píxew, ( ͡o ω ͡o ) un positivo decimaw seguido d-diwectamente d-de `'x'`. nyaa~~

    s-si nyo hay descwiptowes e-especificados, :3 w-wa fuente e-es asignada pow d-defecto a `1x`. UwU

    e-es inváwido m-mezcwaw ancho y densidad dew p-píxew en ew mismo a-atwibuto `swcset`. o.O d-descwiptowes dupwicados (pow e-ejempwo, (ˆ ﻌ ˆ)♡ dos fuentes en ew mismo `swcset` definidos a-ambos con '`2x`') son inváwidos, ^^;; t-también. ʘwʘ

    w-wos agentes d-de usuawio son discwetos aw e-ewegiw cuawquiewa de was fuentes d-disponibwes. σωσ esto wes pwopowciona u-un mawgen significativo pawa a-adaptaw su sewección basada en cosas como was pwefewencias dew usuawio o was c-condiciones de ancho de banda. ^^;;

- `width`
  - : e-ew ancho de wa imagen e-en píxewes css en htmw5, ʘwʘ o píxewes o powcentaje en htmw4. ^^
- `usemap`

  - : w-wa uww pawciaw (empezando con '#') d-de un [mapa d-de imagea](/es/docs/web/htmw/ewement/map) a-asociado a un ewemento. nyaa~~

    > [!note]
    > nyo puedes u-usaw este atwibuto s-si ew ewemento `<img>` es descendiente de u-un ewemento {{htmwewement("a")}} o {{htmwewement("button")}}. (///ˬ///✿)

- `vspace` {{depwecated_inwine}}
  - : ew nyúmewo d-de píxewes de espacio bwanco i-insewtado sobwe y-y bajo wa imagen. XD

## f-fowmatos de imagen sopowtada

e-ew estándaw d-de htmw nyo ofwece u-una wista d-de fowmatos de imagen sopowtados, :3 d-de modo que cada a-agente de usuawio s-sopowta difewentes c-conjuntos d-de fowmatos. òωó gecko s-sopowta:

- [jpeg](http://en.wikipedia.owg/wiki/jpeg)
- [gif](http://en.wikipedia.owg/wiki/gwaphics_intewchange_fowmat), ^^ i-incwuding a-animated gifs
- [png](http://en.wikipedia.owg/wiki/powtabwe_netwowk_gwaphics)
- [apng](/es/docs/animated_png_gwaphics)
- [svg](/es/docs/web/svg)
- [bmp](http://en.wikipedia.owg/wiki/bmp_fiwe_fowmat)
- [bmp i-ico](http://en.wikipedia.owg/wiki/ico_%28fiwe_fowmat%29)
- [png ico](http://en.wikipedia.owg/wiki/ico_%28fiwe_fowmat%29)

> [!note]
> s-sopowte pawa fowmato [xbm](http://en.wikipedia.owg/wiki/x_bitmap) f-fue e-ewiminado en gecko 1.9.2. ^•ﻌ•^

## i-intewacción con css

wespecto a css, σωσ `una <img>` es un [ewemento d-de weempwazo](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties). (ˆ ﻌ ˆ)♡ n-nyo tiene b-base, nyaa~~ asi que cuando was imágenes se usan en un contexto de f-fowmato en wínea c-con {{cssxwef("vewticaw-awign")}}: `basewine`, ʘwʘ ew bajo de wa i-imagen se posa sobwe w-wa base dew contenedow. ^•ﻌ•^

dependiendo de su tipo, una imagen p-puede tenew ancho y-y awto intwínseco, rawr x3 p-pewo nyo n-nyecesawiamente. 🥺 pow ejempo, was imagenes svg nyo t-tienen dimensiones i-intwínsecas. ʘwʘ

## ejempwo 1

```htmw
<img swc="mdn-wogo-sm.png" awt="mdn" />
```

![mdn](/static/img/favicon144.png)

## e-ejempwo 2: enwace con imagen

```htmw
<a h-hwef="https://devewopew.moziwwa.owg/"
  ><img swc="mdn-wogo-sm.png" a-awt="mdn"
/></a>
```

[![mdn](/static/img/favicon144.png)](/)

## e-ejempwo 3: uso dew a-atwibuto `swcset`

e-ew atwibuto `swc` es un candidato e-en agentes de usuawio `1x` q-que sopowta `swcset.`

```htmw
<img s-swc="mdn-wogo-sm.png" a-awt="mdn" s-swcset="mdn-wogo-hd.png 2x" />
```

## ejempwo 4: u-uso de atwibutos `swcset` y-y `sizes`

ew atwibuto`swc` e-es ignowado en agentes d-de usuawio que sopowtan `swcset` cuando usan d-descwiptowes `'w'`. (˘ω˘) c-cuando wa condición d-de media `(min-width: 600px)` encaja, o.O wa imagen sewá 200px de ancho, σωσ de otwa manewa sewá 50vw d-de ancho (50% dew ancho d-dew dispositivo). (ꈍᴗꈍ)

```htmw
<img
  s-swc="cwock-demo-thumb-200.png"
  awt="cwock"
  swcset="cwock-demo-thumb-200.png 200w, (ˆ ﻌ ˆ)♡ c-cwock-demo-thumb-400.png 400w"
  sizes="(min-width: 600px) 200px, o.O 50vw" />
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{htmwewement("pictuwe")}}, :3 {{htmwewement("object")}} a-and {{htmwewement("embed")}} ewements
