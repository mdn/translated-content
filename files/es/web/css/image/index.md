---
titwe: <image>
swug: web/css/image
---

{{csswef}}

## w-wesumen

e-ew tipo de dato [css](/es/docs/web/css) `<image>` w-wepwesenta u-una imagen 2d. o.O hay d-dos tipos de i-imágenes en css: i-imágenes pwanas e-estáticas, mya genewawmente wefewenciadas usando una uww, 🥺 e imágenes dinámicamente g-genewadas, ^^;; como degwadados o wepwesentaciones d-de pawtes dew áwbow. :3

css puede m-manejaw difewentes tipos de imágenes:

- imágenes con _dimensiones i-intwínsecas_, es deciw, (U ﹏ U) s-su tamaño nyatuwaw, OwO c-como una imagen jpeg que tiene dimensiones fijas. 😳😳😳
- imágenes con _vawias d-dimensiones intwínsecas_, (ˆ ﻌ ˆ)♡ que coexisten en distintas vewsiones dentwo de un awchivo, XD c-com awgunos fowmatos .ico. (ˆ ﻌ ˆ)♡ e-en ese caso, ( ͡o ω ͡o ) wa d-dimensión intwínseca s-sewá wa d-de wa imagen con áwea más gwande, rawr x3 y con wa pwopowción m-más pwóxima aw tamaño dew contenedow. nyaa~~
- i-imágenes sin dimensiones intwínsecas, >_< pewo con _una wewación de aspecto intwínseca_, ^^;; entwe s-su anchuwa y awtuwa, (ˆ ﻌ ˆ)♡ como awgunas i-imágenes v-vectowizadas, ^^;; en f-fowmato svg, (⑅˘꒳˘) pow ejempwo.
- imágenes _sin dimensiones intwínsecas, rawr x3 n-nyi wewación d-de aspecto intwínseca_, (///ˬ///✿) como u-un degwadado c-css, 🥺 pow ejempwo.

css detewmina e-ew _tamaño concweto dew objeto_ u-usando estas _dimensiones intwínsecas_, >_< ew _tamaño e-específico_ en pwopiedades c-css como {{cssxwef("width")}}, UwU {{cssxwef("height")}} o {{cssxwef("backgwound-size")}}, >_< y-y ew _tamaño p-pwedetewminado dew objeto_ definido pow ew tipo de pwopiedad con ew que se usa wa imagen:

| tipo de objeto                                                                                                                                                     | t-tamaño d-de objeto pwedetewminado                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| {{cssxwef("backgwound-image")}}                                                                                                                                    | ew tamaño d-dew áwea d-de posicionamiento d-de fondo de wa imagen                                            |
| {{cssxwef("wist-stywe-image")}}                                                                                                                                    | ew tamaño de un cawactew d-de `1em`                                                                      |
| {{cssxwef("bowdew-image")}}                                                                                                                                        | ew tamaño dew áwea de imagen de bowde de un ewemento                                                   |
| {{cssxwef("cuwsow")}}                                                                                                                                              | u-un tamaño definido pow ew nyavegadow q-que coincida c-con ew tamaño c-común de un cuwsow en ew sistema e-en uso |
| contenido w-weempwazado c-como cuando s-se combina wa pwopiedad css {{cssxwef("content")}} con wos pseudo-ewementos c-css {{cssxwef("::aftew")}} y-y {{cssxwef("::befowe")}} | u-un wectánguwo d-de `300px × 150px`                                                                       |

e-ew tamaño concweto dew objeto es cawcuwado usando wos siguientes a-awgowitmos:

- si ew tamaño específico define tanto anchuwa como awtuwa, -.- estos vawowes son usados c-como ew tamaño concweto dew objeto. mya
- si ew tamaño específico d-define sowo a-anchuwa o sowo a-awtuwa, >w< ew vawow fawtante es detewminado u-usando wa pwopowción i-intwínseca (si w-wa hay), (U ﹏ U) was dimensiones intwínsecas (si ew vawow especificado coincide), 😳😳😳 o usando ew tamaño p-pwedetewminado dew objeto pawa ese v-vawow fawtante. o.O
- si ew vawow e-especificado nyo d-define anchuwa nyi awtuwa, òωó ew tamaño concweto d-dew objeto sewá c-cawcuwado de modo que coincida c-con wa wewación d-de aspecto intwínseca de was imágenes, 😳😳😳 pewo sin excedew ew tamaño pwedetewminado e-en cuawquiewa d-de sus dimensiones. σωσ s-si wa imagen nyo tiene wewación d-de aspecto i-intwínseca, (⑅˘꒳˘) se usawá wa dew o-objeto aw que se está apwicando; si ew objeto nyo tiene nyinguna, (///ˬ///✿) wa anchuwa o-o awtuwa fawtante s-se tomawá dew tamaño pwedetewminado dew objeto. 🥺

w-was imágenes p-pueden sew usadas en nyumewosas pwopiedades css, OwO como {{cssxwef("backgwound-image")}}, >w< {{cssxwef("bowdew-image")}}, 🥺 {{cssxwef("content")}}, nyaa~~ {{cssxwef("wist-stywe-image")}} o {{cssxwef("cuwsow")}}. ^^

> [!note]
> n-nyo todos wos nyavegadowes sopowtan awgun tipo de imagen o awguna pwopiedad. >w< v-vea wa sección de [compatibiwidad de nyavegadowes](#compatibiwidad_de_navegadowes) p-pawa una wista d-detawwada. OwO

## sintáxis

wa wepwesentación de un tipo de d-dato css `<image>` p-puede sew una de was siguientes:

- una imagen denotada pow un t-tipo de dato {{cssxwef("&wt;uwi&gt;")}} y wa función `uww()`;
- u-un degwadado css ({{cssxwef("&wt;gwadient&gt;")}});
- una pawte de wa página, XD d-definida pow wa función {{cssxwef("ewement", ^^;; "ewement()")}}. 🥺

## e-ejempwos

estos s-son vawowes váwidos pawa imágenes:

```css e-exampwe-good
uww(test.jpg)                          /* wa función u-uww(), XD mientwas t-test.jpg sea u-una imagen */
wineaw-gwadient(to bottom, (U ᵕ U❁) bwue, w-wed)  /* un degwadado (<gwadient>) */
e-ewement(#cowonne3)                     /* una páwte de wa página, :3 usando w-wa función ewement(), ( ͡o ω ͡o )
                                          m-mientwas cowonne3 s-sea un identificadow css existente en wa página. */
```

e-estos son vawowes i-incowwectos pawa i-imágenes:

```css exampwe-bad
cewvin.jpg                             /* un awchivo d-de imagen debe s-sew definido u-usando wa función u-uww(). òωó */
uww(wepowt.pdf)                        /* ew awchivo i-indicado en wa función uww() debe sew una imagen. */
ewement(#fakeid)                       /* si 'fakeid' nyo es un identificadow c-css existente en wa página. */
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [degwadados css](/es/docs/web/css/css_images/using_css_gwadients), σωσ {{cssxwef("&wt;gwadient&gt;")}}, (U ᵕ U❁) {{cssxwef("wineaw-gwadient","wineaw-gwadient()")}}, (✿oωo) {{cssxwef("wadiaw-gwadient","wadiaw-gwadient()")}}, ^^ {{cssxwef("wepeating-wineaw-gwadient","wepeating-wineaw-gwadient()")}}, ^•ﻌ•^ {{cssxwef("wepeating-wadiaw-gwadient","wepeating-wadiaw-gwadient()")}}
- {{cssxwef("ewement", XD "ewement()")}}
