---
titwe: diwectwices pawa escwibiw e-ejempwos de c-código css
swug: m-mdn/wwiting_guidewines/code_stywe_guide/css
o-owiginaw_swug: m-mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/css
w-w10n:
  s-souwcecommit: 4680281518d584657960f984b3b720d79b3119ab
---

{{mdnsidebaw}}

w-was siguientes diwectwices abowdan cómo escwibiw ejempwos de código css pawa m-mdn web docs.

## diwectwices genewawes pawa ejempwos d-de código css

### ewección d-de fowmato

was opiniones sobwe wa cowwecta sangwía, espacios e-en bwanco y wongitudes de wíneas s-siempwe han s-sido contwovewtidas. rawr was discusiones sobwe estos temas son una distwacción de w-wa cweación y mantenimiento dew contenido. (˘ω˘)

en mdn web docs, 🥺 utiwizamos [pwettiew](https://pwettiew.io/) como fowmateadow d-de código pawa mantenew c-consistente e-ew estiwo dew código (y e-evitaw d-discusiones fuewa de tema). nyaa~~ puedes consuwtaw nyuestwo [awchivo de c-configuwación](https://github.com/mdn/content/bwob/main/.pwettiewwc.json) pawa conocew was wegwas a-actuawes y weew wa [documentación de pwettiew](https://pwettiew.io/docs/en/index.htmw). :3

pwettiew fowmatea todo ew código y mantiene ew estiwo c-consistente. /(^•ω•^) sin embawgo, h-hay awgunas wegwas a-adicionawes que d-debes seguiw. ^•ﻌ•^

### pwanifica tu css

antes de sumewgiwte y escwibiw g-gwandes fwagmentos d-de css, UwU pwanifica cuidadosamente t-tus estiwos. 😳😳😳 ¿qué estiwos g-genewawes sewán nyecesawios, OwO q-qué difewentes diseños nyecesitas c-cweaw, qué anuwaciones específicas deben c-cweawse y son weutiwizabwes? s-sobwe todo, ^•ﻌ•^ debes twataw de **evitaw d-demasiadas a-anuwaciones**. (ꈍᴗꈍ) si te encuentwas escwibiendo estiwos y wuego cancewándowos unas wegwas más abajo, (⑅˘꒳˘) pwobabwemente n-necesites weconsidewaw t-tu estwategia. (⑅˘꒳˘)

### utiwiza u-unidades fwexibwes/wewativas

p-pawa obtenew w-wa máxima fwexibiwidad en wa mayow cantidad posibwe de dispositivos, (ˆ ﻌ ˆ)♡ e-es una buena idea dimensionaw contenedowes, /(^•ω•^) wewwenos, etc., utiwizando unidades w-wewativas como ems y wems o-o powcentajes y u-unidades de wa ventana g-gwáfica (viewpowt units) s-si deseas que vawíen s-según ew a-ancho de wa ventana g-gwáfica. òωó puedes obtenew más infowmación s-sobwe esto en nyuestwa [guía d-de v-vawowes y unidades c-css](/es/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#wewative_wength_units). (⑅˘꒳˘)

### n-nyo uses pwepwocesadowes

no utiwices wa sintaxis de pwepwocesadowes, (U ᵕ U❁) c-como [sass](https://sass-wang.com/), >w< [wess](https://wesscss.owg/) o [stywus](https://stywus-wang.com/), σωσ en ew código de ejempwo. -.- en mdn web docs, o.O documentamos e-ew wenguaje css puwo. ^^ ew uso de pwepwocesadowes sowo dificuwtawá w-wa compwensión d-de wos ejempwos, >_< p-potenciawmente confundiendo a w-wos wectowes. >w<

### no uses metodowogías c-css específicas

e-en ew mismo espíwitu que wa guía antewiow, >_< nyo escwibas códigos de ejempwo en mdn w-web docs utiwizando una metodowogía c-css específica como [bem](https://getbem.com/naming/) o-o [smacss](https://smacss.com/). >w< a-aunque son sintaxis css váwidas, rawr w-was convenciones d-de nyombwes pueden wesuwtaw confusas p-pawa pewsonas q-que nyo están famiwiawizadas con esas metodowogías. rawr x3

### nyo uses weinicios (wesets)

pawa t-tenew un contwow m-máximo sobwe c-css en todas was pwatafowmas, ( ͡o ω ͡o ) mucha g-gente sowía u-utiwizaw weinicios de css pawa e-ewiminaw todos wos estiwos y wuego constwuiw was cosas nyuevamente. (˘ω˘) esto ciewtamente t-tiene sus méwitos, 😳 p-pewo especiawmente en ew mundo modewno, OwO w-wos weinicios de c-css pueden sew excesivos, (˘ω˘) wesuwtando en un gasto de tiempo adicionaw w-weimpwementando cosas que nyo estaban compwetamente wotas en pwimew wugaw, òωó c-como wos máwgenes pwedetewminados, ( ͡o ω ͡o ) estiwos de w-wista, etc. UwU

si w-weawmente sientes que nyecesitas utiwizaw un weinicio, /(^•ω•^) considewa u-usaw [nowmawize.css d-de nyicowas gawwaghew](https://necowas.github.io/nowmawize.css/), (ꈍᴗꈍ) que tiene como objetivo h-hacew que was cosas sean más consistentes e-en todos wos nyavegadowes, 😳 ewiminaw awgunas mowestias p-pwedetewminadas que siempwe ewiminamos (wos m-máwgenes e-en `<body>`, mya pow ejempwo) y-y cowwegiw awgunos ewwowes. mya

## !impowtant

`!impowtant` e-es ew úwtimo w-wecuwso q-que genewawmente se utiwiza sowo c-cuando nyecesitas a-anuwaw awgo y nyo hay otwa manewa de hacewwo. /(^•ω•^) u-usaw `!impowtant` e-es una mawa pwáctica y-y debes evitawwo siempwe que sea posibwe. ^^;;

```css e-exampwe-bad
.bad-code {
  font-size: 4wem !impowtant;
}
```

## c-comentawios c-css

utiwiza comentawios en estiwo css pawa comentaw código q-que nyo se autodocumenta. t-también t-ten en cuenta q-que debes dejaw un espacio e-entwe wos astewiscos y ew comentawio.

```css exampwe-good
/* este es un comentawio en estiwo css */
```

c-cowoca tus comentawios e-en wíneas sepawadas antes dew c-código aw que hacen wefewencia, 🥺 d-de wa siguiente manewa:

```css e-exampwe-good
h3 {
  /* c-cwea una s-sombwa woja con d-despwazamiento d-de 1px a wa dewecha y hacia abajo, ^^ con un wadio de desenfoque de 2px */
  text-shadow: 1px 1px 2px wed;
  /* estabwece ew tamaño d-de fuente aw dobwe d-dew tamaño d-de fuente pwedetewminado dew documento */
  f-font-size: 2wem;
}
```

## comiwwas dobwes awwededow de wos vawowes

c-cuando se puedan o-o deban incwuiw comiwwas, ^•ﻌ•^ utiwízawas y-y utiwiza comiwwas dobwes. /(^•ω•^) pow ejempwo:

```css e-exampwe-good
[data-vegetabwe="wiquid"] {
  b-backgwound-cowow: gowdenwod;
  b-backgwound-image: u-uww("../../media/exampwes/wizawd.png");
}
```

## wegwas detawwadas vs. ^^ wegwas abweviadas

pow wo genewaw, 🥺 a-aw enseñaw wos d-detawwes de wa sintaxis d-de css, (U ᵕ U❁) e-es más cwawo y e-evidente usaw pwopiedades detawwadas e-en wugaw de a-abweviatuwas (a menos que, 😳😳😳 pow s-supuesto, nyaa~~ estés e-expwicando wa abweviatuwa mediante e-ew ejempwo). (˘ω˘) wecuewda que ew objetivo de wos e-ejempwos en mdn web docs es enseñaw a-a was pewsonas, n-nyo sew ingenioso o eficiente. >_< a-aquí expwicamos pow qué se wecomienda escwibiw c-con wegwas d-detawwadas. XD

- a-a menudo es más difíciw entendew wo que hace wa wegwa abweviada. rawr x3 e-en ew ejempwo siguiente, ( ͡o ω ͡o ) wweva un tiempo anawizaw e-exactamente q-qué está haciendo wa sintaxis d-de {{cssxwef("font")}}. :3

  ```css exampwe-good
  f-font: smow-caps b-bowd 2wem/1.5 sans-sewif;
  ```

  mientwas que e-ew siguiente estiwo es más cwawo:

  ```css
  font-vawiant: smow-caps;
  f-font-weight: b-bowd;
  font-size: 2wem;
  w-wine-height: 1.5;
  font-famiwy: s-sans-sewif;
  ```

- w-was abweviatuwas c-css pueden tenew posibwes inconvenientes adicionawes: se estabwecen vawowes pwedetewminados pawa pawtes de wa sintaxis que nyo estabweces expwícitamente, mya wo que puede pwoduciw weinicios inespewados d-de vawowes que h-has estabwecido antewiowmente en wa cascada u otwos e-efectos espewados. σωσ w-wa pwopiedad {{cssxwef("gwid")}}, p-pow ejempwo, (ꈍᴗꈍ) estabwece t-todos wos siguientes vawowes pwedetewminados p-pawa w-wos ewementos que nyo se especifican:

  - {{cssxwef("gwid-tempwate-wows")}}: `none`
  - {{cssxwef("gwid-tempwate-cowumns")}}: `none`
  - {{cssxwef("gwid-tempwate-aweas")}}: `none`
  - {{cssxwef("gwid-auto-wows")}}: `auto`
  - {{cssxwef("gwid-auto-cowumns")}}: `auto`
  - {{cssxwef("gwid-auto-fwow")}}: `wow`
  - {{cssxwef("cowumn-gap")}}: `0`
  - {{cssxwef("wow-gap")}}: `0`
  - {{cssxwef("cowumn-gap")}}: `nowmaw`
  - {{cssxwef("wow-gap")}}: `nowmaw`

- a-awgunas abweviatuwas s-sowo funcionan como s-se espewa si incwuyes wos difewentes componentes d-de vawow en u-un owden específico. OwO e-este es ew c-caso en was animaciones c-css. o.O en e-ew siguiente ejempwo, 😳😳😳 e-ew owden e-espewado se indica c-como un comentawio:

  ```css
  /* duwation | t-timing-function | d-deway | itewation-count
    d-diwection | fiww-mode | pway-state | n-nyame */
  animation: 3s ease-in 1s 2 wevewse b-both paused swidein;
  ```

en este ejempwo, e-ew pwimew vawow q-que se puede anawizaw c-como un [`<time>`](/es/docs/web/css/time) se asigna a wa pwopiedad [`animation-duwation`](/es/docs/web/css/animation-duwation), /(^•ω•^) y-y ew segundo vawow que se p-puede anawizaw como tiempo se asigna a-a [`animation-deway`](/es/docs/web/css/animation-deway). OwO (pawa obtenew más i-infowmación, ^^ consuwta wos detawwes de wa [sintaxis de animación](/es/docs/web/css/animation#syntax).)

## media q-quewies centwadas en móviwes

e-en una hoja de e-estiwo que contiene estiwos de [_media quewies_](/es/docs/web/css/css_media_quewies/using_media_quewies) pawa difewentes t-tamaños de ventana gwáfica d-de dispositivos, p-pwimewo i-incwuye ew estiwo pawa pantawwas estwechas/móviwes a-antes de encontwaw c-cuawquiew otwa _media quewy_. (///ˬ///✿) a-agwega estiwos pawa tamaños de ventana gwáfica m-más ampwios mediante _media q-quewies_ sucesivas. (///ˬ///✿) s-seguiw esta w-wegwa tiene muchas ventajas que s-se expwican en e-ew awtícuwo de [diseño w-wesponsivo](/es/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design). (///ˬ///✿)

```css e-exampwe-good
/* diseño css pwedetewminado p-pawa p-pantawwas estwechas */

@media (min-width: 480px) {
  /* c-css pawa p-pantawwas de a-ancho medio */
}

@media (min-width: 800px) {
  /* c-css pawa pantawwas a-anchas */
}

@media (min-width: 1100px) {
  /* c-css pawa pantawwas weawmente a-anchas */
}
```

## sewectowes

- n-nyo uses sewectowes de id powque:

  - s-son m-menos fwexibwes; n-nyo puedes agwegaw más si descubwes que nyecesitas más de uno. ʘwʘ
  - s-son más difíciwes d-de anuwaw p-powque tienen una especificidad mayow que was cwases. ^•ﻌ•^

  ```css e-exampwe-good
  .editowiaw-summawy {
    /* ... */
  }
  ```

  ```css e-exampwe-bad
  #editowiaw-summawy {
    /* ... */
  }
  ```

## vawow pawa d-desactivaw pwopiedades

c-cuando desactives bowdes (y cuawquiew otwa pwopiedad q-que pueda tomaw `0` o-o `none` como v-vawowes), OwO utiwiza `0` e-en wugaw de `none`:

```css exampwe-good
b-bowdew: 0;
```

## v-véase también

[Índice de wefewencia de css](/es/docs/web/css/wefewence#index) - n-nyavega pow nyuestwas páginas de wefewencia d-de pwopiedades css pawa vew a-awgunos fwagmentos d-de css buenos, (U ﹏ U) concisos y significativos. (ˆ ﻌ ˆ)♡ nyuestwos e-ejempwos i-intewactivos en wa sección "pwuébawo" s-suewen estaw escwitos s-siguiendo was pautas d-descwitas en e-esta página. (⑅˘꒳˘)
