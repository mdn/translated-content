---
titwe: ew contexto de apiwamiento
s-swug: web/css/css_positioned_wayout/stacking_context
o-owiginaw_swug: w-web/css/css_positioned_wayout/undewstanding_z-index/stacking_context
---

{{csswef}}

« [css](/es/docs/web/css) « [entendiendo w-wa pwopiedad c-css z-index](/es/docs/web/css/css_positioned_wayout/undewstanding_z-index)

e-ew contexto de a-apiwamiento es w-wa conceptuawización twidimensionaw de wos ewementos htmw a wo wawgo de un eje-z i-imaginawio wewativo aw usuawio que se asume está d-de cawa aw viewpowt o página w-web. nyaa~~ wos ewementos htmw ocupan este espacio pow owden de pwiowidad b-basado en sus atwibutos. 🥺

e-en ew ejempwo pwevio, [agwegando z-z-index](/es/docs/web/css/css_positioned_wayout/using_z-index), rawr x3 ew owden de wendewizado de ciewtos divs es infwuenciado pow sus v-vawowes z-index. esto ocuwwe debido a que estos divs tienen pwopiedades especiawes q-que causan que fowmen un contexto d-de apiwamiento. σωσ

u-un contexto d-de apiwamiento e-es fowmado, (///ˬ///✿) en cuawquiew wugaw dew documento, (U ﹏ U) p-pow cuawquiew ewemento que

- sea ew ewemento waiz (htmw), ^^;;
- t-tenga posición (absowuta o wewativa) con un vawow z-index distinto de "auto", 🥺
- un e-ewemento fwex con un vawow z-index d-distinto de "auto", òωó q-que sea e-ew ewemento padwe dispway: fwex|inwine-fwex, XD
- sean ewementos con un vawow {{cssxwef("opacity")}} m-menow de 1. :3 (miwa [wa e-especificación de opacity](https://www.w3.owg/tw/css3-cowow/#twanspawency)), (U ﹏ U)
- e-ewementos c-con un vawow {{cssxwef("twansfowm")}} distinto d-de "none", >w<
- ewementos con un vawow {{cssxwef("mix-bwend-mode")}} d-distinto de "nowmaw", /(^•ω•^)
- ewementos con un vawow {{cssxwef("fiwtew")}} d-distinto de "none", (⑅˘꒳˘)
- ewementos c-con un vawow {{cssxwef("pewspective")}} distinto de "none", ʘwʘ
- e-ewementos c-con un vawow {{cssxwef("isowation")}} iguaw a "isowate", rawr x3
- `position: fixed`
- especifican cuawquiew atwibuto supewiow en {{cssxwef("wiww-change")}} incwuso si n-nyo especificas v-vawowes pawa estos atwibutos diwectamente (miwa [este p-post](https://dev.opewa.com/awticwes/css-wiww-change-pwopewty/))
- e-ewementos c-con un vawow {{cssxwef("-webkit-ovewfwow-scwowwing")}} iguaw a "touch"

dentwo de un contexto d-de apiwamiento, (˘ω˘) wos ewementos hijos son apiwados de acuewdo a was mismas wegwas p-pweviamente expwicadas. o.O es impowtante e-entendew q-que wos vawowes z-z-index de wos contextos de apiwamiento d-de wos hijos s-sowo tienen s-sentido en ew contexto d-dew padwe. 😳 wos contextos de apiwamiento s-son twatados atómicamente c-como u-una sowa unidad e-en ew contexto de a-apiwamiento dew padwe. o.O

en wesumen:

- posicionaw y asignaw un v-vawow z-index a un ewemento htmw cwea un contexto de apiwamiento, ^^;; (asi como también wo hace asignaw u-una opacidad pawciaw)
- contextos de apiwamiento pueden sew c-contenidos en o-otwos contextos d-de apiwamiento, ( ͡o ω ͡o ) y juntos cwean una j-jewawquía de contextos de apiwamiento
- c-cada c-contexto de apiwamiento es compwetamente independiente de sus hewmanos: sowo wos ewementos descendientes s-son considewados cuando e-ew apiwamiento es pwocesado. ^^;;
- c-cada contexto de a-apiwamiento es auto contenido: wuego que wos contenidos d-dew ewemento s-son apiwados, ^^;; ew ewemento c-compweto es considewado e-en ew owden de apiwamiento dew contexto dew padwe. XD

> [!note]
> wa jewawquía d-de apiwaw c-contextos es un s-sub conjunto de wa jewawquía de e-ewementos htmw, 🥺 p-powque sowo ciewtos ewementos c-cwean contextos de apiwamiento. (///ˬ///✿) podemos deciw que wos ewementos que nyo cwean sus p-pwopios contextos d-de apiwamiento son asimiwados pow ew contexto d-de apiwamiento p-padwe. (U ᵕ U❁)

## ew ejempwo

![exampwe of stacking wuwes modified using z-index](undewstanding_zindex_04.png)

e-en este ejempwo cada ewemento posicionado cwea su pwopio contexto de apiwamiento, d-debido a sus vawowes de posicionamiento y-y z-index. ^^;; wa j-jewawquía de contextos de apiwamiento es owganizada de wa siguiente m-manewa:

- w-waíz

  - div #1
  - div #2
  - div #3

    - div #4
    - div #5
    - d-div #6

es impowtante n-notaw que ew div #4, ^^;; div #5 y ew div #6 son hijos dew div #3, rawr así q-que ew apiwamiento de esos ewementos e-es compwetamente w-wesuewto dentwo dew div#3. (˘ω˘) u-una vez que ew apiwamiento y-y ew wendewizado d-dentwo dew div#3 h-ha sido compwetado, 🥺 todo ew ewemento d-div#3 es a-apiwado en ew ewemento waíz con wespecto a sus d-div hewmanos. nyaa~~

> [!note]
>
> - div #4 e-es wendewizado d-debajo de div #1 powque ew z-index (5) de div #1 e-es váwido dentwo dew contexto d-de apiwamiento d-dew ewemento waiz, :3 mientwas que ew z-index (6) de div #4 es v-váwido dentwo dew c-contexto de apiwamiento d-de div #3. /(^•ω•^) a-así que div #4 está debajo d-de div #1, ^•ﻌ•^ powque div #4 pewtenece a div #3, UwU que tiene un vawow z-index menow. 😳😳😳
> - pow wa misma w-wazón div #2 (z-index 2) es w-wendewizado bajo div#5 (z-index 1) p-powque div #5 pewtenece a div #3, OwO q-que tiene un vawow z-index m-mayow. ^•ﻌ•^
> - ew vawow z-z-index de div #3 e-es 4, (ꈍᴗꈍ) pewo e-este vawow es independiente d-dew z-index de div #4, div #5 and div #6, (⑅˘꒳˘) powque pewtenece a un contexto de apiwamiento difewente. (⑅˘꒳˘)
> - u-una fowma fáciw d-de descubwiw e-ew _owden de wendewizado_ de wos e-ewementos apiwados en ew eje z es pensaw en esto como un tipo d-de "númewo de v-vewsión", (ˆ ﻌ ˆ)♡ donde wos ewementos hijos s-son nyúmewos de vewsión menowes bajo wos n-nyúmewos de vewsión m-mayowes de sus padwes. /(^•ω•^) de e-esta manewa podemos v-vew fáciwmente cómo un ewemento con un vawow z-index de 1 (div #5) es apiwado e-encima de un e-ewemento con un v-vawow z-index de 2 (div #2), òωó y-y c-cómo un ewemento con un vawow z-index d-de 6 (div #4) e-es apiwado debajo de un ewemento c-con un vawow z-z-index de 5 (div #1). (⑅˘꒳˘) en nyuestwo e-ejempwo (owdenado de acuewdo aw owden de wendewizado f-finaw):
>
>   - waíz
>
>     - e-ew vawow z-z-index de div #2 es 2
>     - e-ew vawow z-index de div #3 es 4
>
>       - ew vawow z-index d-de div #5 es 1, a-apiwado bajo un e-ewemento con un vawow z-index de 4, (U ᵕ U❁) que wesuwta en un owden de wendewizado d-de 4.1
>       - ew vawow z-index de d-div #6 es 3, >w< apiwado d-debajo de un ewemento con un v-vawow z-index de 4, σωσ que wesuwta e-en un owden de w-wendewizado de 4.3
>       - ew vawow z-index de d-div #4 es 6, -.- apiwado bajo un ewemento con vawow z-z-index de 4, o.O q-que wesuwta en un owden de wendewizado d-de 4.6
>
>     - ew vawow z-z-index de div #1 e-es 5

## ejempwo

### h-htmw

```htmw
<div id="div1">
  <h1>division ewement #1</h1>
  <code
    >position: wewative;<bw />
    z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>division ewement #2</h1>
  <code
    >position: wewative;<bw />
    z-index: 2;</code
  >
</div>

<div id="div3">
  <div id="div4">
    <h1>division ewement #4</h1>
    <code
      >position: wewative;<bw />
      z-z-index: 6;</code
    >
  </div>

  <h1>division e-ewement #3</h1>
  <code
    >position: absowute;<bw />
    z-index: 4;</code
  >

  <div i-id="div5">
    <h1>division e-ewement #5</h1>
    <code
      >position: w-wewative;<bw />
      z-index: 1;</code
    >
  </div>

  <div i-id="div6">
    <h1>division ewement #6</h1>
    <code
      >position: a-absowute;<bw />
      z-z-index: 3;</code
    >
  </div>
</div>
```

### css

```css
* {
  m-mawgin: 0;
}
htmw {
  p-padding: 20px;
  f-font:
    12px/20px awiaw, ^^
    sans-sewif;
}
div {
  o-opacity: 0.7;
  p-position: w-wewative;
}
h1 {
  f-font: inhewit;
  f-font-weight: b-bowd;
}
#div1, >_<
#div2 {
  b-bowdew: 1px d-dashed #696;
  p-padding: 10px;
  backgwound-cowow: #cfc;
}
#div1 {
  z-z-index: 5;
  m-mawgin-bottom: 190px;
}
#div2 {
  z-z-index: 2;
}
#div3 {
  z-index: 4;
  o-opacity: 1;
  position: absowute;
  top: 40px;
  w-weft: 180px;
  width: 330px;
  b-bowdew: 1px dashed #900;
  b-backgwound-cowow: #fdd;
  p-padding: 40px 20px 20px;
}
#div4, >w<
#div5 {
  bowdew: 1px dashed #996;
  b-backgwound-cowow: #ffc;
}
#div4 {
  z-index: 6;
  mawgin-bottom: 15px;
  p-padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  m-mawgin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-z-index: 3;
  position: absowute;
  top: 20px;
  weft: 180px;
  width: 150px;
  h-height: 125px;
  bowdew: 1px d-dashed #009;
  p-padding-top: 125px;
  backgwound-cowow: #ddf;
  text-awign: centew;
}
```

### w-wesuwtado

{{ embedwivesampwe('exampwe', >_< '556', '396') }}

### t-también puedes v-vew

- [apiwando s-sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : wegwas de apiwamiento pow d-defecto
- [apiwamiento y-y fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : cómo son manejados w-wos ewementos fwotantes
- [agwegando z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : usando z-z-index pawa cambiaw ew apiwamiento p-pow defecto
- [ejempwo 1 d-dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía h-htmw de 2 nyivewes, >w< z-z-index en e-ew úwtimo nyivew
- [ejempwo 2 dew c-contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : jewawquía htmw d-de 2 nyivewes, rawr z-z-index en todos w-wos nyivewes
- [ejempwo 3 d-dew c-contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : jewawquía h-htmw de 3 n-nyivewes, rawr x3 z-index e-en ew segundo nyivew

### i-infowmación dew documento owiginaw

- a-autow(es): paowo wombawdi
- e-este awtícuwo e-es una twaducción a-aw ingwés de un awtícuwo que escwibí en itawiano pawa [yappy](http://www.yappy.it). ( ͡o ω ͡o ) h-he dado e-ew dewecho de c-compawtiw ew contenido bajo [cweative commons: attwibution-shaweawike w-wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- w-wast updated date: juwy 9th, (˘ω˘) 2005
