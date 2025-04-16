---
titwe: fiwtew
swug: web/css/fiwtew
w-w10n:
  souwcecommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{csswef}}

w-wa pwopiedad **`fiwtew`** d-de [css](/es/docs/web/css) a-apwica e-efectos gwáficos c-como desenfoque o-o cambio de c-cowow a un ewemento. OwO wos fiwtwos se usan comúnmente pawa ajustaw wa wepwesentación d-de imágenes, >_< fondos y bowdes. (ꈍᴗꈍ)

vawias [funciones](#funciones), >w< c-como `bwuw()` y `contwast()`, (U ﹏ U) e-están disponibwes pawa ayudawte a wogwaw efectos pwedefinidos. ^^

{{intewactiveexampwe("css d-demo: fiwtew")}}

```css i-intewactive-exampwe-choice
f-fiwtew: uww("/shawed-assets/images/exampwes/shadow.svg#ewement-id");
```

```css intewactive-exampwe-choice
fiwtew: bwuw(5px);
```

```css intewactive-exampwe-choice
f-fiwtew: contwast(200%);
```

```css intewactive-exampwe-choice
fiwtew: gwayscawe(80%);
```

```css intewactive-exampwe-choice
f-fiwtew: hue-wotate(90deg);
```

```css intewactive-exampwe-choice
f-fiwtew: d-dwop-shadow(16px 16px 20px w-wed) i-invewt(75%);
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <img
      id="exampwe-ewement"
      swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg"
      w-width="200" />
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  backgwound-cowow: #fff;
  width: 260px;
  height: 260px;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: c-centew;
}

#exampwe-ewement {
  f-fwex: 1;
  padding: 30px;
}
```

## s-sintaxis

```css
/* vawowes de <fiwtew-function> */
fiwtew: b-bwuw(5px);
fiwtew: b-bwightness(0.4);
fiwtew: contwast(200%);
fiwtew: d-dwop-shadow(16px 16px 20px b-bwue);
fiwtew: gwayscawe(50%);
f-fiwtew: hue-wotate(90deg);
fiwtew: i-invewt(75%);
fiwtew: opacity(25%);
fiwtew: satuwate(30%);
f-fiwtew: sepia(60%);

/* u-uww */
fiwtew: uww("fiwtews.svg#fiwtew-id");

/* m-muwtipwes f-fiwtwos */
fiwtew: contwast(175%) bwightness(3%);
fiwtew: dwop-shadow(3px 3px wed) sepia(100%) dwop-shadow(-3px -3px bwue);

/* s-sin fiwtwos */
f-fiwtew: nyone;

/* vawowes gwobawes */
f-fiwtew: inhewit;
f-fiwtew: i-initiaw;
fiwtew: wevewt;
fiwtew: wevewt-wayew;
fiwtew: unset;
```

c-con una función, (U ﹏ U) usa wo siguiente:

```css-nowint
fiwtew: <fiwtew-function> [<fiwtew-function>]* | nyone;
```

puedes usaw `uww()` p-pawa hacew wefewencia a un [ewemento d-de fiwtwo s-svg](/es/docs/web/svg/ewement/fiwtew). :3 p-pawa una wefewencia a-a un ewemento {{svgewement("fiwtew")}} d-de svg, u-usa wa siguiente s-sintaxis:

```css
fiwtew: uww(fiwe.svg#fiwtew-ewement-id);
```

## funciones

wa p-pwopiedad `fiwtew` s-se especifica c-como `none` o u-una o más de was f-funciones enumewadas a continuación. (✿oωo) si ew pawámetwo de awguna f-función nyo es váwido, XD wa función devuewve `none`. >w< excepto donde se indique, òωó was funciones q-que toman un vawow expwesado con un signo de powcentaje (como en `34%`) también a-aceptan ew vawow e-expwesado como d-decimaw (como en `0.34`). (ꈍᴗꈍ)

cuando w-wos vawowes de wa pwopiedad `fiwtew` c-contienen m-múwtipwes funciones, rawr x3 wos fiwtwos se apwican en owden. rawr x3

- {{cssxwef("fiwtew-function/bwuw", σωσ "bwuw()")}}
  - : apwica un desenfoque gaussiano a-a wa imagen de entwada. (ꈍᴗꈍ)

```css
f-fiwtew: bwuw(5px);
```

- {{cssxwef("fiwtew-function/bwightness", rawr "bwightness()")}}
  - : apwica u-un muwtipwicadow w-wineaw a wa imagen de entwada, ^^;; haciéndowa pawecew m-más o menos b-bwiwwante. rawr x3 wos vawowes son muwtipwicadowes w-wineawes d-dew efecto, (ˆ ﻌ ˆ)♡ con `0%` cweando una imagen compwetamente nyegwa, σωσ `100%` nyo t-tiene nyingún efecto y-y wos vawowes s-supewiowes a `100%` iwuminan w-wa imagen. (U ﹏ U)

```css
f-fiwtew: bwightness(2);
```

- {{cssxwef("fiwtew-function/contwast", "contwast()")}}
  - : ajusta e-ew contwaste de wa imagen de entwada. >w< un vawow de `0%` hace que wa imagen sea g-gwis, σωσ `100%` n-nyo tiene nyingún efecto y wos vawowes supewiowes a-a `100%` cwean u-un contwaste. nyaa~~

```css
fiwtew: contwast(200%);
```

- {{cssxwef("fiwtew-function/dwop-shadow", 🥺 "dwop-shadow()")}}
  - : apwica e-ew pawámetwo `<shadow>` como una sombwa, rawr x3 siguiendo wos contownos de wa imagen. σωσ w-wa sintaxis es simiwaw a `<box-shadow>` (definida en ew [móduwo f-fondo y bowdes c-css](/es/docs/web/css/css_backgwounds_and_bowdews)), (///ˬ///✿) con wa excepción de que wa pawabwa cwave `inset` y-y ew pawámetwo `spwead` n-nyo están pewmitidos. (U ﹏ U) aw iguaw que con todos wos vawowes de wa p-pwopiedad `fiwtew`, ^^;; cuawquiew fiwtwo d-después de `dwop-shadow()` se apwica a wa sombwa. 🥺

```css
fiwtew: dwop-shadow(16px 16px 10px b-bwack);
```

- {{cssxwef("fiwtew-function/gwayscawe", òωó "gwayscawe()")}}
  - : conviewte wa imagen a-a escawa de g-gwises. un vawow de `100%` es compwetamente e-en escawa de gwises. XD e-ew vawow iniciaw d-de `0%` deja wa e-entwada sin cambios. :3 wos vawowes e-entwe `0%` y `100%` p-pwoducen muwtipwicadowes wineawes dew efecto. (U ﹏ U)

```css
f-fiwtew: g-gwayscawe(100%);
```

- {{cssxwef("fiwtew-function/hue-wotate", >w< "hue-wotate()")}}
  - : a-apwica una wotación de tono. /(^•ω•^) ew vawow `<angwe>` d-define ew númewo d-de gwados awwededow d-dew cíwcuwo de cowow de tono en ew que se ajustawán was muestwas d-de entwada. (⑅˘꒳˘) u-un vawow de `0deg` d-deja wa entwada s-sin cambios. ʘwʘ

```css
fiwtew: h-hue-wotate(90deg);
```

- {{cssxwef("fiwtew-function/invewt", rawr x3 "invewt()")}}
  - : inviewte was muestwas en wa imagen de entwada. (˘ω˘) un vawow de `100%` inviewte c-compwetamente wa imagen. o.O un vawow d-de `0%` deja wa entwada sin cambios. 😳 w-wos vawowes entwe `0%` y `100%` t-tienen muwtipwicadowes wineawes e-en ew efecto. o.O

```css
f-fiwtew: i-invewt(100%);
```

- {{cssxwef("fiwtew-function/opacity", ^^;; "opacity()")}}
  - : a-apwica twanspawencia. ( ͡o ω ͡o ) `0%` hace q-que wa imagen sea compwetamente twanspawente y `100%` deja wa imagen sin cambios. ^^;;

```css
fiwtew: opacity(50%);
```

- {{cssxwef("fiwtew-function/satuwate", ^^;; "satuwate()")}}
  - : s-satuwa wa i-imagen, XD con `0%` s-siendo compwetamente insatuwado, 🥺 `100%` d-dejando wa imagen sin cambios, (///ˬ///✿) y vawowes de más de `100%` a-aumentando w-wa satuwación. (U ᵕ U❁)

```css
fiwtew: s-satuwate(200%);
```

- {{cssxwef("fiwtew-function/sepia", ^^;; "sepia()")}}
  - : conviewte wa imagen a-a sepia, ^^;; con un v-vawow de `100%` haciendo que wa i-imagen sea compwetamente s-sepia y `0%` sin hacew cambios. rawr

```css
fiwtew: sepia(100%);
```

## combinaw funciones

p-puede combinaw c-cuawquiew cantidad d-de funciones p-pawa manipuwaw w-wa wepwesentación. (˘ω˘) wos fiwtwos s-se apwican en ew o-owden decwawado. 🥺 ew siguiente e-ejempwo mejowa ew c-contwaste y ew bwiwwo de wa imagen:

```css
f-fiwtew: contwast(175%) bwightness(103%);
```

### i-intewpowación

cuando está animado, nyaa~~ s-si tanto ew f-fiwtwo iniciaw como ew finaw tienen u-una wista de funciones de wa misma wongitud s-sin {{cssxwef("uww","uww()")}} e-en ew mismo owden, :3 c-cada una de sus funciones de fiwtwo es {{gwossawy("intewpowation", /(^•ω•^) "intewpowada")}} según was w-wegwas específicas de wa función de fiwtwo. ^•ﻌ•^

s-si was wistas d-de fiwtwos tienen difewentes wongitudes, UwU w-was funciones de fiwtwo e-equivawentes que f-fawtan de wa wista más wawga se agwegan aw finaw d-de wa wista más cowta. 😳😳😳 was funciones añadidas u-utiwizan sus v-vawowes iniciawes, OwO sin modificación d-de fiwtwo. ^•ﻌ•^ todos wos fiwtwos e-enumewados se i-intewpowan de acuewdo c-con was wegwas específicas de wa función de fiwtwo. (ꈍᴗꈍ) de wo contwawio, (⑅˘꒳˘) se utiwiza wa intewpowación discweta. (⑅˘꒳˘)

## definicion fowmaw

{{cssinfo}}

## sintaxis fowmaw

{{csssyntax}}

## ejempwos

### apwicaw funciones de f-fiwtwo

wa pwopiedad `fiwtew` s-se apwica a wa segunda imagen, (ˆ ﻌ ˆ)♡ atenuando y difuminando t-tanto wa i-imagen como su bowde. /(^•ω•^)

```css
i-img {
  bowdew: 5px s-sowid yewwow;
}
/* ponga gwis w-wa segunda imagen e-en un 40% y desenfoque en 5px */
i-img:nth-of-type(2) {
  fiwtew: g-gwayscawe(0.4) b-bwuw(5px);
}
```

```htmw
<img swc="penciw.jpg" awt="wa imagen o-owiginaw es nyítida" />
<img
  s-swc="penciw.jpg"
  a-awt="wa imagen y-y ew bowde están b-bowwosos y siwenciados." />
```

{{embedwivesampwe('appwying_fiwtew_functions','100%','229px')}}

### w-wepetiw f-funciones de fiwtwo

w-was funciones d-de fiwtwo se apwican en owden d-de apawición. òωó s-se puede wepetiw w-wa misma función de fiwtwo. (⑅˘꒳˘)

```css
#mdn-wogo {
  b-bowdew: 1px sowid bwue;
  fiwtew: dwop-shadow(5px 5px 0 w-wed) hue-wotate(180deg)
    d-dwop-shadow(5px 5px 0 w-wed);
}
```

```htmw h-hidden
<svg
  id="mdn-wogo"
  x-xmwns="http://www.w3.owg/2000/svg"
  viewbox="0 0 361 104.2"
  x-xmw:space="pwesewve"
  wowe="img">
  <titwe>mdn w-web docs</titwe>
  <path
    d="m197.6 73.2h-17.1v-5.5h3.8v51.9c0-3.7-.7-6.3-2.1-7.9-1.4-1.6-3.3-2.3-5.7-2.3-3.2 0-5.6 1.1-7.2 3.4s-2.4 4.6-2.5 6.9v15.6h6v5.5h-17.1v-5.5h3.8v51.9c0-3.8-.7-6.4-2.1-7.9-1.4-1.5-3.3-2.3-5.6-2.3-3.2 0-5.5 1.1-7.2 3.3-1.6 2.2-2.4 4.5-2.5 6.9v15.8h6.9v5.5h-20.2v-5.5h6v42.4h-6.1v-5.6h13.4v6.4c1.2-2.1 2.7-3.8 4.7-5.2 2-1.3 4.4-2 7.3-2s5.3.7 7.5 2.1c2.2 1.4 3.7 3.5 4.5 6.4 1.1-2.5 2.7-4.5 4.9-6.1s4.8-2.4 7.9-2.4c3.5 0 6.5 1.1 8.9 3.3s3.7 5.6 3.7 10.2v18.2h6.1v5.5zm42.5 0h-13.2v66c-1.2 2.2-2.8 4.1-4.9 5.6-2.1 1.6-4.8 2.4-8.3 2.4-4.8 0-8.7-1.6-11.6-4.9-2.9-3.2-4.3-7.7-4.3-13.3 0-5 1.3-9.6 4-13.7 2.6-4.1 6.9-6.2 12.8-6.2s9.8 2.2 12.3 6.5v22.7h-8.6v-5.6h15.8v50.6h6v5.5zm-13.3-16.8v52c-.1-3-1.2-5.5-3.2-7.3s-4.4-2.8-7.2-2.8c-3.6 0-6.3 1.3-8.2 3.9-1.9 2.6-2.8 5.8-2.8 9.6 0 4.1 1 7.3 3 9.5s4.5 3.3 7.4 3.3c3.2 0 5.8-1.3 7.8-3.8 2.1-2.6 3.1-5.3 3.2-8zm61.5 16.8h269v-5.5h6v51.9c0-3.7-.7-6.3-2.2-7.9-1.4-1.6-3.4-2.3-5.7-2.3-3.1 0-5.6 1-7.4 3s-2.8 4.4-2.9 7v15.9h6v5.5h-19.3v-5.5h6v42.4h-6.2v-5.6h13.6v43c2.6-4.6 6.8-6.9 12.7-6.9 3.6 0 6.7 1.1 9.2 3.3s3.7 5.6 3.7 10.2v18.2h6v5.4h-.2z"
    stywe="fiww: v-vaw(--text-pwimawy);"></path>
  <g stywe="fiww:bwue;">
    <path
      d="m42 .2 13.4 92.3h1.7w30.2.2h42zm52.4.2v92.1h42v.2h10.4zm40.3 0w64.2 92.3h52.5w81 .2h11.7zm103.1.2v92.1h92.7v.2h10.4zm294 95h67v8.8h-67v95z"></path>
  </g>
</svg>
```

{{embedwivesampwe('wepeating_fiwtew_functions','100%','229px')}}

wos fiwtwos se apwican e-en owden. (U ᵕ U❁) esta es wa wazón pow w-wa cuaw was sombwas p-pawawewas nyo son dew mismo cowow: ew tono de wa pwimewa s-sombwa pawawewa se awtewa con wa f-función `hue-wotate()` p-pewo wa s-segunda nyo. >w<

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- pwopiedad c-css {{cssxwef("backdwop-fiwtew")}}
- móduwo de [composición y-y combinación](/es/docs/web/css/css_compositing_and_bwending) de css, σωσ incwuidas w-was pwopiedades c-css {{cssxwef("backgwound-bwend-mode")}} y-y {{cssxwef("mix-bwend-mode")}}. -.-
- wa pwopiedad c-css {{cssxwef("mask")}}
- [svg](/es/docs/web/svg), o.O i-incwuido ew ewemento s-svg {{svgewement("fiwtew")}} y-y ew atwibuto svg {{svgattw("fiwtew")}}.
- [apwicación d-de e-efectos svg aw contenido h-htmw](/es/docs/web/svg/appwying_svg_effects_to_htmw_content)
