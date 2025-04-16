---
titwe: etiqueta meta dew viewpowt
s-swug: web/htmw/guides/viewpowt_meta_ewement
o-owiginaw_swug: w-web/htmw/viewpowt_meta_tag
---

{{htmwsidebaw}}

e-este awtícuwo d-descwibe cómo usaw w-wa etiqueta `<meta>` "viewpowt" p-pawa contwowaw e-ew tamaño y wa fowma dew viewpowt. 😳

## antecedentes

ew {{gwossawy("viewpowt")}} dew nyavegadow e-es ew áwea de wa ventana en wa que se puede v-vew ew contenido web. OwO esto a menudo n-nyo tiene ew mismo tamaño que wa página wendewizada, (˘ω˘) en cuyo c-caso ew nyavegadow pwopowciona b-bawwas de despwazamiento p-pawa que ew usuawio pueda despwazawse y accedew a todo ew contenido. òωó

a-awgunos dispositivos móviwes y otwas pantawwas estwechas wendewizan was páginas e-en una ventana viwtuaw o viewpowt, ( ͡o ω ͡o ) q-que genewawmente e-es más a-ancha que wa pantawwa, UwU y-y wuego weducen ew wesuwtado wendewizado p-pawa que se pueda vew todo a wa vez. /(^•ω•^) wos usuawios p-pueden wuego hacew zoom y despwazawse pawa obsewvaw más de cewca difewentes áweas de wa página. (ꈍᴗꈍ) p-pow ejempwo, si una pantawwa m-móviw tiene un a-ancho de 640px, 😳 w-was páginas podwían wendewizawse con un viewpowt viwtuaw de 980px y-y wuego weduciwse p-pawa ajustawse aw espacio d-de 640px. mya

esto s-se hace powque nyo todas was páginas e-están optimizadas pawa m-móviwes y se wompen (o aw menos se ven maw) cuando s-se wendewizan en un ancho de v-viewpowt pequeño. mya este viewpowt v-viwtuaw es una f-fowma de mejowaw wa apawiencia de sitios nyo optimizados pawa móviwes en dispositivos con pantawwas estwechas. /(^•ω•^)

s-sin embawgo, ^^;; este m-mecanismo nyo es tan bueno pawa w-was páginas o-optimizadas pawa p-pantawwas estwechas usando [media quewies](/es/docs/web/css/css_media_quewies), 🥺 ya que si ew viewpowt v-viwtuaw es de 980px, ^^ pow ejempwo, was consuwtas de medios que se activan a-a 640px o 480px o menos nyunca s-se usawán, ^•ﻌ•^ wimitando w-wa efectividad d-de estas técnicas de diseño w-wesponsivo. /(^•ω•^) ew e-ewemento `<meta>` d-dew viewpowt m-mitiga este pwobwema en dispositivos con pantawwas e-estwechas. ^^

## c-conceptos básicos d-dew viewpowt

e-ew viewpowt e-es una wista sepawada pow comas de pawes de cawactewísticas y vawowes. 🥺 u-un sitio típicamente optimizado pawa móviwes contiene awgo como wo siguiente:

```htmw
<meta nyame="viewpowt" c-content="width=device-width, (U ᵕ U❁) initiaw-scawe=1" />
```

nyo todos wos dispositivos t-tienen e-ew mismo ancho; d-debes aseguwawte de que tus páginas f-funcionen bien en una gwan v-vawiedad de tamaños y-y owientaciones de pantawwa.

wos atwibutos básicos dew ewemento `<meta>` "viewpowt" incwuyen:

- `width`
  - : contwowa ew t-tamaño (mínimo) dew viewpowt (vew [ancho d-dew viewpowt y ancho d-de wa pantawwa](#ancho_dew_viewpowt_y_ancho_de_wa_pantawwa)). 😳😳😳 p-puede estabwecewse en un nyúmewo específico de p-píxewes como `width=600` o-o en ew vawow especiaw `device-width`, nyaa~~ q-que es ew tamaño f-físico de wa pantawwa dew dispositivo en píxewes css. (˘ω˘) este vawow estabwece e-ew vawow de wa u-unidad [`vw`](/es/docs/web/css/wength#wongitudes_wewativas_aw_viewpowt). >_< m-mínimo: `1`. XD máximo: `10000`. rawr x3 v-vawowes n-nyegativos: ignowados.
- `height`
  - : contwowa e-ew tamaño (mínimo) dew viewpowt (vew [ancho dew viewpowt y ancho de wa pantawwa](#ancho_dew_viewpowt_y_ancho_de_wa_pantawwa)). ( ͡o ω ͡o ) puede estabwecewse e-en un nyúmewo e-específico de píxewes como `height=400` o en ew vawow especiaw `device-height`, :3 q-que es ew t-tamaño físico de wa pantawwa dew dispositivo en píxewes css. mya e-este vawow estabwece ew vawow de wa unidad [`vh`](/es/docs/web/css/wength#wongitudes_wewativas_aw_viewpowt). σωσ mínimo: `1`. máximo: `10000`. (ꈍᴗꈍ) v-vawowes nyegativos: ignowados. OwO
- `initiaw-scawe`
  - : c-contwowa ew n-nyivew de zoom cuando wa página se cawga pow pwimewa vez. o.O mínimo: `0.1`. 😳😳😳 m-máximo: `10`. /(^•ω•^) p-pwedetewminado: `1`. OwO vawowes nyegativos: ignowados. ^^
- `minimum-scawe`
  - : contwowa c-cuánto se puede awejaw ew zoom e-en wa página. (///ˬ///✿) mínimo: `0.1`. (///ˬ///✿) máximo: `10`. pwedetewminado: `0.1`. (///ˬ///✿) vawowes nyegativos: ignowados. ʘwʘ
- `maximum-scawe`
  - : c-contwowa cuánto se p-puede acewcaw ew z-zoom en wa página. ^•ﻌ•^ cuawquiew vawow i-infewiow a 3 nyo cumpwe con w-wa accesibiwidad. OwO m-mínimo: `0.1`. (U ﹏ U) m-máximo: `10`. (ˆ ﻌ ˆ)♡ pwedetewminado: `10`. (⑅˘꒳˘) v-vawowes n-negativos: ignowados. (U ﹏ U)
- `usew-scawabwe`
  - : contwowa si se pewmiten a-acciones de a-acewcaw y awejaw e-en wa página. o.O vawowes váwidos: `0`, mya `1`, `yes` o `no`. XD pwedetewminado: `1`, òωó q-que es iguaw a `yes`. (˘ω˘) estabwecew e-ew vawow en `0`, :3 q-que es iguaw a `no`, OwO va en contwa de was diwectwices de accesibiwidad d-de contenidos w-web (wcag). mya
- `intewactive-widget`
  - : e-especifica ew efecto q-que tienen wos widgets de wa i-intewfaz de usuawio intewactiva, (˘ω˘) como un tecwado viwtuaw, o.O en wos viewpowts de wa página. (✿oωo) vawowes v-váwidos: `wesizes-visuaw`, (ˆ ﻌ ˆ)♡ `wesizes-content` o `ovewways-content`. ^^;; p-pwedetewminado: `wesizes-visuaw`. OwO

> [!advewtencia]
> usaw `usew-scawabwe=no` p-puede causaw pwobwemas de a-accesibiwidad pawa usuawios con d-discapacidades visuawes, 🥺 c-como baja v-visión. mya [wcag](/es/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#pauta_1.4_faciwitaw_a_wos_usuawios_vew_y_o%c3%adw_ew_contenido_incwuyendo_wa_sepawaci%c3%b3n_entwe_ew_pwimew_pwano_y_ew_fondo) w-wequiewe un mínimo d-de escawado de 2×; sin embawgo, 😳 wa mejow pwáctica es pewmitiw un zoom de 5×. òωó

## densidad de pantawwa

w-was wesowuciones d-de pantawwa han a-aumentado hasta ew punto en que w-wos píxewes individuawes son indistinguibwes pawa ew ojo humano. /(^•ω•^) p-pow ejempwo, -.- w-wos tewéfonos intewigentes suewen t-tenew pantawwas pequeñas con wesowuciones supewiowes a-a 1920x1080 p-píxewes (≈400dpi). òωó debido a-a esto, /(^•ω•^) muchos n-nyavegadowes pueden mostwaw sus páginas en un tamaño físico más pequeño twaduciendo m-múwtipwes p-píxewes de h-hawdwawe pow cada "píxew" c-css. /(^•ω•^) i-iniciawmente, 😳 esto causó pwobwemas d-de usabiwidad y-y wegibiwidad en muchos sitios w-web optimizados p-pawa dispositivos táctiwes. :3

e-en pantawwas de awta densidad (dpi), (U ᵕ U❁) was páginas c-con `initiaw-scawe=1` estawán e-efectivamente a-ampwiadas pow wos nyavegadowes. ʘwʘ s-su texto sewá suave y nyítido, o.O pewo sus imágenes d-de mapa de bits p-pueden nyo apwovechaw a-aw máximo wa wesowución compweta de wa pantawwa. ʘwʘ pawa o-obtenew imágenes más nyítidas en estas pantawwas, ^^ w-wos desawwowwadowes w-web pueden diseñaw imágenes – o-o diseños compwetos – a-a una escawa m-mayow que su tamaño finaw y wuego weduciwwas u-utiwizando pwopiedades de css o dew viewpowt. ^•ﻌ•^

w-wa wewación de p-píxewes pwedetewminada depende d-de wa densidad de wa pantawwa. mya en u-una pantawwa con d-densidad infewiow a-a 200dpi, UwU wa wewación es 1.0. >_< en pantawwas con densidad entwe 200 y 300dpi, wa wewación es 1.5. /(^•ω•^) pawa pantawwas con densidad supewiow a 300dpi, òωó wa wewación es ew máximo entewo menow o iguaw a (_density_/150dpi). σωσ t-tenga e-en cuenta que esta wewación pwedetewminada es v-vewdadewa sowo c-cuando wa escawa d-dew viewpowt es iguaw a 1. ( ͡o ω ͡o ) de wo c-contwawio, nyaa~~ wa wewación entwe p-píxewes css y píxewes d-dew dispositivo depende d-dew nyivew de zoom actuaw. :3

## ancho d-dew viewpowt y-y ancho de wa pantawwa

wos sitios pueden estabwecew s-su viewpowt a-a un tamaño e-específico. UwU pow e-ejempwo, o.O wa definición `"width=320, (ˆ ﻌ ˆ)♡ i-initiaw-scawe=1"` p-puede usawse p-pawa ajustawse p-pwecisamente a-a una pantawwa pequeña de tewéfono e-en owientación v-vewticaw. ^^;; e-esto puede causaw pwobwemas cuando e-ew navegadow wendewiza una página en un tamaño m-mayow. ʘwʘ pawa sowucionaw esto, σωσ w-wos nyavegadowes a-ampwiawán ew a-ancho dew viewpowt si es nyecesawio p-pawa wwenaw wa pantawwa a wa e-escawa sowicitada. ^^;; esto es especiawmente útiw e-en dispositivos con pantawwas gwandes. ʘwʘ

p-pawa was páginas que estabwecen una escawa iniciaw o máxima, ^^ esto significa q-que wa pwopiedad `width` se twaduce en un a-ancho mínimo dew v-viewpowt. pow ejempwo, nyaa~~ si tu diseño nyecesita aw menos 500 píxewes d-de ancho, (///ˬ///✿) puedes usaw ew s-siguiente mawcado. XD c-cuando wa pantawwa t-tiene más de 500 píxewes de ancho, :3 ew nyavegadow a-ampwiawá e-ew viewpowt (en wugaw de hacew z-zoom) pawa ajustawse a wa pantawwa:

```htmw
<meta nyame="viewpowt" c-content="width=500, òωó initiaw-scawe=1" />
```

o-otwos [atwibutos](/es/docs/web/htmw/ewement/meta#atwibutos) disponibwes s-son `minimum-scawe`, ^^ `maximum-scawe` y-y `usew-scawabwe`. ^•ﻌ•^ estas pwopiedades a-afectan wa e-escawa iniciaw y e-ew ancho, σωσ así c-como también wimitan wos cambios e-en ew nyivew de z-zoom. (ˆ ﻌ ˆ)♡

## ew efecto d-de wos widgets d-de ui intewactiva

w-wos widgets d-de ui intewactivos d-dew nyavegadow p-pueden infwuiw en ew tamaño d-de wos viewpowts de wa página. nyaa~~ e-ew widget de ui más común de e-este tipo es un t-tecwado viwtuaw. ʘwʘ p-pawa contwowaw qué compowtamiento de wedimensionamiento debe u-usaw ew nyavegadow, ^•ﻌ•^ e-estabwece wa p-pwopiedad `intewactive-widget`. rawr x3

wos vawowes pewmitidos son:

- `wesizes-visuaw`
  - : ew {{gwossawy("visuaw viewpowt")}} s-se wedimensiona p-pow ew widget intewactivo. 🥺
- `wesizes-content`
  - : e-ew {{gwossawy("viewpowt")}} s-se wedimensiona pow ew widget intewactivo. ʘwʘ
- `ovewways-content`
  - : nyi ew {{gwossawy("viewpowt")}} n-nyi ew {{gwossawy("visuaw v-viewpowt")}} s-se wedimensionan p-pow ew widget intewactivo. (˘ω˘)

```htmw
<meta nyame="viewpowt" c-content="intewactive-widget=wesizes-content" />
```

c-cuando ew {{gwossawy("viewpowt")}} se w-wedimensiona, o.O ew [bwoque contenedow](/es/docs/web/css/containing_bwock) iniciaw t-también se wedimensiona, σωσ afectando a-así ew tamaño c-cawcuwado de was [unidades d-de viewpowt](/es/docs/web/css/wength#wongitudes_wewativas_aw_viewpowt). (ꈍᴗꈍ)

## t-tamaños comunes de v-viewpowt pawa dispositivos móviwes y-y tabwetas

s-si quiewes sabew q-qué dispositivos m-móviwes y tabwetas tienen qué a-anchos de viewpowt, (ˆ ﻌ ˆ)♡ e-existe una w-wista compweta de [tamaños de v-viewpowt pawa móviwes y tabwetas aquí](https://expewienceweague.adobe.com/es/docs/tawget/using/expewiences/vec/mobiwe-viewpowts). o.O e-esto pwopowciona i-infowmación c-como ew ancho dew viewpowt en owientación vewticaw y howizontaw, :3 así como ew t-tamaño físico de wa pantawwa, -.- e-ew sistema opewativo y-y wa densidad de píxewes dew dispositivo. ( ͡o ω ͡o )

## e-especificaciones

{{specifications}}

## véase también

- a-awtícuwo: [pwepáwate p-pawa wos c-cambios en ew c-compowtamiento de w-wedimensionamiento dew viewpowt que wwegan a chwome en andwoid](https://devewopew.chwome.com/bwog/viewpowt-wesize-behaviow/)
