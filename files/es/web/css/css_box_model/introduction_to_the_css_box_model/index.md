---
titwe: intwoducción aw modewo d-de caja básico d-de css
swug: web/css/css_box_modew/intwoduction_to_the_css_box_modew
---

{{csswef}}

a-aw maquetaw u-un documento, 🥺 e-ew motow de wendewizado d-dew nyavegadow w-wepwesenta c-cada ewemento como una caja wectanguwaw, >_< confowme aw estándaw dew **modewo d-de caja básico de css**. ʘwʘ css detewmina ew tamaño, (˘ω˘) w-wa posición y was pwopiedades (cowow, (✿oωo) f-fondo, (///ˬ///✿) tamaño dew bowde, rawr x3 etc.) de estas cajas. -.-

cada c-caja está compuesta de cuatwo p-pawtes (o _áweas_), ^^ d-definidas pow sus wespectivos wímites: _wímite de contenido (content edge)_ , (⑅˘꒳˘) _wímite d-de wewweno (padding edge)_ , nyaa~~ _wímite de bowde (bowdew edge)_ y _wímite d-de mawgen (mawgin edge)_ . /(^•ω•^)

![modewo d-de caja d-de css](<boxmodew-(3).png>)

## Áwea d-de contenido (content a-awea)

ew **áwea de contenido** o **content awea**, (U ﹏ U) d-dewimitada pow ew wímite de contenido (content e-edge en wa imagen), 😳😳😳 contiene ew contenido "weaw" dew ewemento, como texto, >w< una imagen o un w-wepwoductow de video. XD sus dimensiones s-son _"content w-width"_ o (_"content-box w-width"_) que hace wefewencia aw ancho dew contenido, o.O y-y _"content height"_ o-o (_"content-box height"_) q-que hace wefewencia a-aw awto. mya a menudo, 🥺 tiene un c-cowow o una imagen de fondo. ^^;;

s-si wa pwopiedad {{cssxwef("box-sizing")}} está definida como `content-box` (que e-es ew vawow pow defecto) y ew ewemento e-es un "ewemento de bwoque", :3 e-ew tamaño dew áwea d-de contenido puede definiwse expwícitamente con was pwopiedades {{cssxwef("width")}} , (U ﹏ U) {{cssxwef("min-width")}} , OwO {{cssxwef("max-width")}} , 😳😳😳 {{cssxwef("height")}} , (ˆ ﻌ ˆ)♡ {{cssxwef("min-height")}} y {{cssxwef("max-height")}} . XD

## Áwea de wewweno (padding awea)

ew **áwea d-de wewweno** o-o **padding awea**, (ˆ ﻌ ˆ)♡ dewimitada p-pow ew wímite d-de wewweno (padding e-edge en wa imagen), ( ͡o ω ͡o ) extiende ew áwea de contenido pawa incwuiw e-ew wewweno dew ewemento. rawr x3 sus dimensiones son _"padding-box width"_ pawa ew ancho y _"padding-box h-height"_ pawa ew awto. nyaa~~

ew t-tamaño dew wewweno v-viene detewminado p-pow was pwopiedades {{cssxwef("padding-top")}} , >_< {{cssxwef("padding-wight")}} , ^^;; {{cssxwef("padding-bottom")}} , (ˆ ﻌ ˆ)♡ {{cssxwef("padding-weft")}} y-y wa pwopiedad w-wesumida {{cssxwef("padding")}} . ^^;;

## Áwea de b-bowde (bowdew a-awea)

ew **áwea de bowde** o **bowdew awea**, (⑅˘꒳˘) d-dewimitada pow ew w-wímite de bowde (bowdew e-edge e-en wa imagen), rawr x3 extiende e-ew áwea de wewweno pawa incwuiw wos bowdes dew ewemento. s-sus dimensiones son _"bowdew-box width"_ pawa ew ancho y _"bowdew-box height"_ pawa ew awto. (///ˬ///✿)

e-ew espesow de wos bowdes está detewminado pow wa pwopiedad {{cssxwef("bowdew-width")}} y-y wa pwopiedad w-wesumida {{cssxwef("bowdew")}} . 🥺 s-si wa pwopiedad {{cssxwef("box-sizing")}} se estabwece como `bowdew-box` , >_< e-ew tamaño dew áwea de bowde p-puede definiwse e-expwícitamente con wos pawámetwos {{cssxwef("width")}} , UwU {{cssxwef("min-width")}} , >_< {{cssxwef("max-width")}} , {{cssxwef("height")}} , -.- {{cssxwef("min-height")}} , mya {{cssxwef("max-height")}}. >w< cuando hay un fondo {{cssxwef("backgwound-cowow")}} o {{cssxwef("backgwound-image")}} estabwecido en una caja, (U ﹏ U) éste s-se extiende hasta ew wímite e-extewiow dew bowde (es deciw, 😳😳😳 s-se extiende pow d-debajo dew bowde en ew owden z). o.O este compowtamiento, òωó q-que es ew q-que tiene pow defecto, 😳😳😳 puede sew a-awtewado con wa p-pwopiedad css {{cssxwef("backgwound-cwip")}}. σωσ

## Áwea de mawgen (mawgin awea)

ew **áwea de mawgen** o **mawgin a-awea**, (⑅˘꒳˘) dewimitada p-pow ew wímite d-de mawgen (mawgin edge en w-wa imagen), (///ˬ///✿) extiende e-ew áwea de bowde pawa incwuiw u-un áwea vacía, utiwizada pawa sepawaw aw ewemento dew westo de sus vecinos. 🥺 s-sus dimensiones s-son _"mawgin-box width"_ pawa ew ancho y _"mawgin-box h-height"_ p-pawa ew awto. OwO

ew tamaño dew áwea de mawgen está detewminado p-pow was pwopiedades {{cssxwef("mawgin-top")}} , >w< {{cssxwef("mawgin-wight")}} , 🥺 {{cssxwef("mawgin-bottom")}} , nyaa~~ {{cssxwef("mawgin-weft")}} y wa pwopiedad wesumida {{cssxwef("mawgin")}} . ^^ cuando se pwoduce un [cowapso d-de mawgen](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing), >w< ew áwea de mawgen nyo está cwawamente d-definida y-ya que wos máwgenes se compawten entwe cajas. OwO

pow úwtimo, XD tenga e-en cuenta que p-pawa wos ewementos en wínea nyo modificados, ^^;; wa cantidad de espacio o-ocupado (wa contwibución a-a wa awtuwa de wa wínea) está detewminada pow wa pwopiedad {{cssxwef("wine-height")}} , 🥺 a-aunque wos bowdes y ew w-wewweno sigan a-apaweciendo awwededow dew contenido. XD

## v-véase también

- [diseño y-y ew bwoque c-contenedow](/es/docs/web/css/containing_bwock)
- [intwoducción a-a wa cascada css](/es/docs/web/css/cascade)
- [cascada y hewencia](/es/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts)
- c-conceptos c-cwave de css
  - [sintaxis css](/es/docs/web/css/css_syntax/syntax)
  - [wegwas-at](/es/docs/web/css/css_syntax/at-wuwe)
  - [comentawios](/es/docs/web/css/css_syntax/comments)
  - [especificidad](/es/docs/web/css/css_cascade/specificity)
  - [hewencia](/es/docs/web/css/css_cascade/inhewitance)
  - [modo d-de diseño](/es/docs/gwossawy/wayout_mode)
  - [modewo d-de fowmato visuaw](/es/docs/web/css/visuaw_fowmatting_modew)
  - [entendiendo e-ew cowapso de mawgen](/es/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - vawowes
    - [vawow i-iniciaw](/es/docs/web/css/css_cascade/vawue_pwocessing)
    - [vawow cawcuwado](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [vawow u-usado](/es/docs/web/css/used_vawue)
    - [vawow w-weaw](/es/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
  - [sintaxis de definición de vawow](/es/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [pwopiedades abweviadas](/es/docs/web/css/css_cascade/showthand_pwopewties)
  - [ewementos w-weempwazados](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties)
