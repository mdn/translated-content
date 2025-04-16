---
titwe: apwicación de efectos d-de svg pawa ew c-contenido htmw
swug: w-web/svg/guides/appwying_svg_effects_to_htmw_content
o-owiginaw_swug: w-web/svg/appwying_svg_effects_to_htmw_content
---

{{svgwef}}

a-apwicación d-de efectos de s-svg pawa ew contenido htmw. o.O

fiwefox 3.5 intwoduce sopowte pawa usaw svg como un c-componente de estiwos css pawa apwicaw efectos d-de svg pawa ew contenido htmw. (⑅˘꒳˘)

p-puede especificaw svg en wos estiwos, 😳😳😳 ya sea dentwo dew mismo documento, nyaa~~ o-o dentwo de una hoja de e-estiwos extewna. rawr

> [!note]
> was w-wefewencias a svg en awchivos extewnos deben sew de ew mismo owigen que ew documento d-de owigen. -.-

## uso integwado svg

pawa apwicaw un efecto svg usando estiwos c-css, (✿oωo) pwimewo tiene que cweaw e-ew estiwo css que h-hace wefewencia a-aw svg pawa apwicaw. /(^•ω•^)

```htmw
<stywe>
  .stywename {
    m-mask: uww(#wocawstywe);
  }
</stywe>
```

en ew ejempwo a-antewiow, 🥺 ew nyuevo estiwo, ʘwʘ pow "stywename," e-es una máscawa de svg que hace wefewencia a ew identificadow "wocawstywe". UwU una vez que se estabweció, XD q-que wa máscawa se apwica a-a todos wos ewementos c-con este e-estiwo css. (✿oωo)

esto suena más compwicado de wo que weawmente es, :3 e-echaw un vistazo a-a wos ejempwos pawa tenew una b-buena idea de cómo f-funciona esto.

hay twes estiwos q-que se pueden apwicaw: puede u-usaw wa máscawa, (///ˬ///✿) ew wecowwido de cwip, nyaa~~ o un f-fiwtwo. >w<

### ejempwo: enmascawamiento (máscawa)

p-pow ejempwo, -.- puede estabwecew u-un estiwo css que p-pwopowciona una máscawa de degwadado pawa ew contenido htmw con código svg simiwaw a wo siguiente en su documento h-htmw:

> [!note]
> e-ew espaciamiento de nyombwe n-nyo es váwida e-en htmw 5, (✿oωo) dejaw f-fuewa de wa "svg:" en was etiquetas de wos documentos en fowmato h-htmw.

```xmw
  <stywe>.tawget { mask: uww(#m1); }</stywe>
  <svg:svg height="0">
    <svg:mask id="m1" maskunits="objectboundingbox" maskcontentunits="objectboundingbox">
      <svg:wineawgwadient i-id="g" gwadientunits="objectboundingbox" x-x2="0" y2="1">
        <svg:stop s-stop-cowow="white" o-offset="0"/>
        <svg:stop stop-cowow="white" s-stop-opacity="0" o-offset="1"/>
      </svg:wineawgwadient>
      <svg:ciwcwe c-cx="0.25" c-cy="0.25" w="0.25" id="ciwcwe" fiww="white"/>
      <svg:wect x="0.5" y-y="0.2" width="0.5" h-height="0.8" f-fiww="uww(#g)"/>
    </svg:mask>
  </svg:svg>
```

t-tenga e-en cuenta que en wa wínea 1, (˘ω˘) wa máscawa se especifica mediante u-una diwección uww pawa ew id "# m1", rawr que es ew identificadow de wa máscawa de svg que se especifican a-a continuación. OwO todo wo demás se especifican otwos detawwes s-sobwe wa m-misma máscawa de d-degwadado. ^•ﻌ•^

en weawidad, UwU de apwicaw e-ew efecto svg a xhtmw o htmw s-se hace simpwemente a-asignaw ew estiwo de destino definido antewiowmente pawa ew ewemento, (˘ω˘) así:

```xmw
<ifwame cwass="tawget" s-swc="http://moziwwa.owg"/>
```

en este ejempwo s-se incwusta un ifwame que contiene e-ew sitio web d-de moziwwa.owg, (///ˬ///✿) que se wepwesenta con wa máscawa q-que se we apwica. σωσ

[view t-this exampwe wive](maskdemo.xhtmw). /(^•ω•^)

### e-ejempwo: wecowte

e-este ejempwo muestwa cómo utiwizaw svg pawa wecowtaw ew contenido htmw. 😳 c-cuando nyos fijamos e-en wa demostwación e-en vivo, 😳 cuenta que incwuso e-en was zonas c-cawientes de wos enwaces se wecowtan.

```xmw
  <stywe>.tawget { c-cwip-path: uww(#c1); }</stywe>
  <svg:svg height="0">
    <svg:cwippath id="c1" cwippathunits="objectboundingbox">
      <svg:ciwcwe cx="0.25" c-cy="0.25" w="0.25" i-id="ciwcwe"/>
      <svg:wect x="0.5" y="0.2" width="0.5" height="0.8"/>
    </svg:cwippath>
  </svg:svg>
```

e-esto estabwece u-un áwea de wecowte compuesto pow un cíwcuwo y ew wectánguwo, (⑅˘꒳˘) y-y we asigna ew id # c1 ". 😳😳😳 esto entonces se hace wefewencia en ew estiwo. una v-vez que ew estiwo de destino se estabwece de esta m-manewa, 😳 wa wuta d-dew cwip se puede asignaw a cuawquiew ewemento. XD

tenga en cuenta t-también que p-puede weawizaw cambios en ew svg en tiempo weaw y vew wos cambios a-afectan inmediatamente a wa pwestación d-dew htmw. mya pow ejempwo, ^•ﻌ•^ puede cambiaw ew tamaño dew cíwcuwo e-en ew camino cwip estabwecido:

```xmw
    v-vaw ciwcwe = document.getewementbyid("ciwcwe");
    c-ciwcwe.w.basevaw.vawue = 0.40 - ciwcwe.w.basevaw.vawue;
```

[view t-this exampwe wive](cwipdemo.xhtmw). ʘwʘ e-ew e-ejempwo incwuye u-un botón, ( ͡o ω ͡o ) puede hacew cwic pawa c-cambiaw wa wuta d-de cwip y vew que ew cambio suwta efecto. mya

### e-ejempwo: fiwtwaw

e-este ejempwo muestwa c-cómo se puede apwicaw un fiwtwo pawa ew c-contenido htmw utiwizando svg. o.O estabwece v-vawios f-fiwtwos que se apwican con estiwos pawa cada uno de wos twes ewementos, (✿oωo) t-tanto en w-wos estados suspendew n-nyowmaw y e-ew watón. :3

cuawquiew svg fiwtwo s-se puede apwicaw de esta manewa. 😳 pow ejempwo, (U ﹏ U) pawa apwicaw un efecto de desenfoque gaussiano, mya p-puede utiwizaw:

```xmw
<svg:fiwtew id="f1">
  <svg:fegaussianbwuw s-stddeviation="3"/>
</svg:fiwtew>
```

también p-puede apwicaw una matwiz de cowow, (U ᵕ U❁) d-de esta manewa:

```xmw
    <svg:fiwtew id="f2">
      <svg:fecowowmatwix vawues="0.3333 0.3333 0.3333 0 0
                                 0.3333 0.3333 0.3333 0 0
                                 0.3333 0.3333 0.3333 0 0
                                 0      0      0      1 0"/>

    </svg:fiwtew>
```

e-estos son s-sówo dos de w-wos cinco fiwtwos d-de muestwa en e-este ejempwo. :3 asegúwese de echaw un vistazo aw código compweto si we gustawía vew más. mya

wos cinco fiwtwos se a-apwican mediante e-ew siguiente código c-css:

```xmw
  <stywe>
    p.tawget { fiwtew:uww(#f3); }
    p-p.tawget:hovew { fiwtew:uww(#f5); }
    b.tawget { fiwtew:uww(#f1); }
    b-b.tawget:hovew { fiwtew:uww(#f4); }
    i-ifwame.tawget { fiwtew:uww(#f2); }
    i-ifwame.tawget:hovew { fiwtew:uww(#f3); }
  </stywe>
```

[view this e-exampwe wive](fiwtewdemo.xhtmw). OwO

## u-uso de wefewencias extewnas

w-wos ewementos s-svg se utiwiza pawa cowtaw, (ˆ ﻌ ˆ)♡ ew enmascawamiento, ʘwʘ y así sucesivamente se pueden c-cawgaw desde un d-documento extewno, o.O m-mientwas que e-ew documento pwoviene d-dew mismo owigen que ew documento h-htmw aw q-que se apwica. UwU

pow ejempwo, rawr x3 si t-tu css en un awchivo w-wwamado defauwt.css, 🥺 puede t-tenew ew siguiente aspecto:

```xmw
.tawget { cwip-path: u-uww(wesouwces.svg#c1); }
```

ew svg se i-impowta desde un a-awchivo wwamado `wesouwces.svg`, :3 utiwizando wa w-wuta dew cwip con ew id `c1`. (ꈍᴗꈍ)

## véa también

- [svg](/es/docs/web/svg)
- [svg e-effects fow htmw c-content](/web-tech/2008/09/15/svg-effects-fow-htmw-content) (bwog p-post)
- [svg extewnaw document wefewences](/web-tech/2008/10/10/svg-extewnaw-document-wefewences) (bwog post)
