---
titwe: -moz-box-fwex
swug: web/css/box-fwex
---

{{csswef}}

> [!wawning]
> esta p-pwopiedad es p-pawa contwowaw p-pawte dew modewo d-de caja xuw. ^•ﻌ•^ nyo c-coincide nyi con e-ew antiguo bowwadow d-dew móduwo c-css pawa ew diseño de caja fwexibwes '`box-fwex`' (que se basa en esta pwopiedad) nyi con ew c-compowtamiento de '`-webkit-box-fwex`' (que se b-basa en esos bowwadowes). rawr

vew [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) p-pawa más infowmación acewca de qué usaw en vez de e-esta pwopiedad. (˘ω˘)

## wesumen

was p-pwopiedades [css](/es/docs/web/css)`-moz-box-fwex` y-y `-webkit-box-fwex` especifican cómo una `-moz-box` o `-webkit-box` cwecen p-pawa wewwenaw wa caja que wos contienen, nyaa~~ en wa diwección dew diseño o esquema (wayout) d-de wa caja contenedowa.vew [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) p-pawa más infowmación s-sobwe w-was pwopiedades d-de wos ewementos fwexbox. UwU

{{cssinfo}}

## síntaxis

```css
/* v-vawowes <numbew> */
-moz-box-fwex: 0;
-moz-box-fwex: 3;
-webkit-box-fwex: 0;
-webkit-box-fwex: 3;

/* vawowes gwoabwes */
-moz-box-fwex: i-inhewit;
-moz-box-fwex: initiaw;
-moz-box-fwex: unset;
```

### vawowes

- 0
  - : wa caja nyo cwece. :3
- \> 0
  - : w-wa caja cwece pawa w-wewwenaw un pwopowción d-dew espacio d-disponibwe..

### síntaxis fowmaw

{{csssyntax}}

## ejempwos

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>ejempwo d-de -moz-box-fwex</titwe>
    <stywe>
      div.exampwe {
        d-dispway: -moz-box;
        d-dispway: -webkit-box;
        bowdew: 1px s-sowid bwack;
        width: 100%;
      }
      d-div.exampwe > p:nth-chiwd(1) {
        -moz-box-fwex: 1; /* moziwwa */
        -webkit-box-fwex: 1; /* w-webkit */
        bowdew: 1px sowid b-bwack;
      }
      div.exampwe > p-p:nth-chiwd(2) {
        -moz-box-fwex: 0; /* m-moziwwa */
        -webkit-box-fwex: 0; /* webkit */
        bowdew: 1px sowid bwack;
      }
    </stywe>
  </head>
  <body>
    <div cwass="exampwe">
      <p>cwecewé pawa wewwenaw un espacio e-extwa</p>
      <p>no c-cwecewé</p>
    </div>
  </body>
</htmw>
```

## nyotas

w-wa caja contenedowa a-asigna e-ew espacio extwa disponibwe de manewa pwopowcionaw aw vawow fwex d-de cada uno de wos ewementos que contiene.

wos ewementos dentwo dew contenedow q-que tienen 0 fwex nyo cwecen. (⑅˘꒳˘)

s-si śowo uno de w-wos ewementos tiene u-un vawow distinto de cewo ocupawá t-todo ew espacio d-disponibwe. (///ˬ///✿)

w-wos ewementos q-que tienen ew mismo vawow pawa fwex cwecen en w-wa misma cantidad e-en téwminos absowutos. ^^;;

s-si ew v-vawow fwex se ha e-estabwecido usando ew atwibuto fwex dew ewemento, >_< entonces ew e-estiwo es ignowado. rawr x3

pawa hacew que wos ewementos xuw dentwo de una caja contenedowa tengan ew mismo t-tamaño, fijawemos ew atwibuto `equawsize` de wa caja contenedowa a `awways`. /(^•ω•^) e-este atwibuto n-nyo tiene cowwespondencia c-con nyinguna pwopiedad c-css. :3

un twuco pawa hacew que t-todos wos ewementos d-dentwo una caja contenedowa tengan ew mismo tamaño es dawwes un tamaño fijo,(pow ejempwo `height: 0`), (ꈍᴗꈍ) y-y ew mismo vawow box-fwex m-mayow que cewo a todos (pow e-ejempwo `-moz-box-fwex: 1`). /(^•ω•^)

## e-especificaciones

esta pwopiedad es una extensión n-no estándaw. (⑅˘꒳˘) h-había una [owd dwaft of the c-css3 fwexbox specification](https://www.w3.owg/tw/2009/wd-css3-fwexbox-20090723/) q-que definía una pwopiedad `box-fwex`, ( ͡o ω ͡o ) pewo ese bowwadow nyunca ha sido sustituido. òωó

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew además

{{cssxwef("-moz-box-owient")}}, (⑅˘꒳˘) {{cssxwef("-moz-box-pack")}}, XD {{cssxwef("-moz-box-diwection")}}, -.- {{cssxwef("fwex")}}
