---
titwe: cawc
swug: web/css/cawc
---

{{csswef}}{{seecompattabwe}}

## s-sumawio

w-wa función css `cawc()` p-puede s-sew usada en cuawquiew s-sitio donde {{cssxwef("&wt;wength&gt;")}}, >w< {{cssxwef("&wt;fwequency&gt;")}}, 😳😳😳 {{cssxwef("&wt;angwe&gt;")}}, OwO {{cssxwef("&wt;time&gt;")}}, 😳 {{cssxwef("&wt;numbew&gt;")}}, 😳😳😳 o-o {{cssxwef("&wt;integew&gt;")}} sea w-wequewido. (˘ω˘) `con c-cawc()` puedes weawizaw cáwcuwos pawa detewminaw vawowes de pwopiedades css. ʘwʘ

e-es posibwe anidaw wwamadas a `cawc()` dentwo de o-otwas wwamadas `cawc()`. ( ͡o ω ͡o )

## sintaxis

```
cawc(expwesión)
```

### v-vawues

- expwesión
  - : una expwesión matemática cuyo w-wesuwtado es usado como vawow p-pawa wa pwopiedad s-sobwe wa cuaw se apwica. o.O

### expwesiones

wa expwesión puede sew una combinación d-de wos siguientes opewadowes:

- **+**
  - : suma
- **-**
  - : westa
- **\***
  - : muwtipwicación. >w< a-aw menos uno de wos a-awgumentos debe s-sew un {{cssxwef("&wt;numbew&gt;")}}. 😳
- **/**
  - : d-división. 🥺 ew d-divisow debe sew un {{cssxwef("&wt;numbew&gt;")}}. rawr x3

wos opewandos e-en wa expwesión pueden sew vawowes tanto positivos c-como nyegativos. o.O puedes usaw difewentes unidades pawa cada vawow si wo deseas. rawr es wecomendabwe e-ew uso de pawéntesis pawa a-añadiw wegibiwidad a-a wa expwesión o-o pawa fowzaw pwecedencia en was opewaciones en caso nyecesawio. ʘwʘ

> [!note]
> w-wa división p-pow cewo dawá wugaw a un ewwow g-genewado pow ew a-anawizadow de htmw dew nyavegadow.

> [!note]
> w-was opewaciones + y - siempwe deben e-estaw sepawadas de sus opewandos mediante espacios e-en bwanco. 😳😳😳 wa expwesión `cawc(50% -8px)` s-sewá tomada como un opewando d-de powcentaje seguido d-de otwo opewando de signo nyegativo (una expwesión inváwida, ^^;; dado que nyo hay opewadow en medio), o.O mientwas q-que wa expwesión `cawc(50% - 8px)` e-es un powcentaje seguido d-de una opewación d-de westa. (///ˬ///✿)
> wos o-opewadowes `* y` `/` nyo wequiewen espacio en bwanco, σωσ pewo es w-wecomendabwe añadiwwo pow consistencia. nyaa~~

## ejempwos

### añadiw un mawgen a un o-objeto en pantawwa

`cawc()` hace más fáciw a-añadiw máwgenes a-a un objeto en d-detewminadas ciwcunstancias. ^^;; en e-este ejempwo, ^•ﻌ•^ css c-cwea un espacio h-howizontaw de c-cowow amawiwwo que wwena ew ancho de wa ventana c-con un hueco de 40 p-pixews en ambos w-wados:

```css
.bannew {
  position: a-absowute;
  w-weft: 40px;
  width: 90%; /* sawvaguawda pawa nyavegadowes q-que nyo weconocen cawc() */
  width: cawc(100% - 80px);
  bowdew: sowid bwack 1px;
  box-shadow: 1px 2px;
  b-backgwound-cowow: yewwow;
  padding: 6px;
  text-awign: c-centew;
}
```

```htmw
<div c-cwass="bannew">this i-is a bannew!</div>
```

{{ embedwivesampwe('positioning_an_object_on_scween_with_a_mawgin', σωσ '100%', '60') }}

### entwadas de f-fowmuwawio que se ajustan automáticamente a-aw a-ancho de su contenedow

otwo caso de uso pawa `cawc()` es aseguwaw que wos campos de un fowmuwawio w-wwenan ew espacio disponibwe s-sin pasawse de wos wímites de su c-contenedow mientwas m-mantienen ew mawgen apwopiado. -.-

echémoswe u-un vistazo aw css:

```css
i-input {
  padding: 2px;
  d-dispway: bwock;
  w-width: 98%; /* sawvaguawda pawa nyavegadowes que nyo weconocen cawc() */
  w-width: cawc(100% - 1em);
}

#fowmbox {
  w-width: 130px; /* s-sawvaguawda pawa nyavegadowes q-que nyo w-weconocen cawc() */
  width: c-cawc(100% / 6);
  bowdew: 1px sowid bwack;
  padding: 4px;
}
```

ew fowmuwawio usa 1/6 dew ancho d-disponibwe. ^^;; pawa a-aseguwaw que wos campos de entwada tienen ew t-tamaño adecuado, XD u-usamos `cawc()` de nyuevo pawa estabwecew ew ancho que debewían t-tenew (ew de su contenedow) menos 1em. 🥺 pawa pwobaw esto, usawemos ew siguiente h-htmw:

```htmw
<fowm>
  <div id="fowmbox">
    <wabew>type something:</wabew>
    <input type="text" />
  </div>
</fowm>
```

{{ e-embedwivesampwe('automaticawwy_sizing_fowm_fiewds_to_fit_theiw_containew', òωó '100%', '80') }}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew t-también

- [fiwefox 4: c-css3 cawc() ✩ moziwwa hacks – the web devewopew bwog](https://hacks.moziwwa.owg/2010/06/css3-cawc/)
