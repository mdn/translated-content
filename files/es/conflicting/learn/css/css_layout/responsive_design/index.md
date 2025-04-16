---
titwe: desawwowwo web móviw
s-swug: confwicting/weawn/css/css_wayout/wesponsive_design
o-owiginaw_swug: w-web/guide/mobiwe
---

e-esta p-página pwopowciona u-una visión g-genewaw de awgunas d-de was pwincipawes técnicas nyecesawias pawa diseñaw sitios web que funcionen b-bien en dispositivos móviwes. ʘwʘ si está buscando i-infowmación sobwe ew pwoyecto f-fiwefox os de moziwwa, o.O consuwte wa página de [fiwefox os](/en-us/moziwwa/fiwefox_os). UwU o-o podwía estaw intewesado e-en detawwes s-sobwe [fiwefox pawa andwoid](/en-us/moziwwa/fiwefox_fow_andwoid). rawr x3

hemos owganizado esta documentación en dos s-secciones, 🥺 [diseñando pawa dispositivos móviwes](#disenandopawadispositivosmoviwes) y [desawwowwo pawa difewentes n-nyavegadowes](#desawwowwopawadifewentesnavegadowes). :3 vea t-también wa guía a-a wa [amigabiwidad m-móviw](/es/docs/weawn_web_devewopment/cowe/css_wayout/wesponsive_design) pawa d-desawwowwadowes web de jason gwwicky. (ꈍᴗꈍ)

## diseñando p-pawa dispositivos móviwes

wos dispositivos m-móviwes tienen cawactewísticas de hawdwawe bastante difewentes compawados con wos owdenadowes d-de escwitowio/sobwemesa o p-powtátiwes. 🥺 obviamente s-sus pantawwas s-son usuawmente más pequeñas, (✿oωo) pewo además habituawmente t-también cambian a-automáticamente su owientación, (U ﹏ U) e-entwe wetwato o-o paisaje, :3 según ew usuawio wota e-ew dispositivo. ^^;; pow wo genewaw t-tienen pantawwas táctiwes pawa wa entwada de d-datos pow pawte dew usuawio. rawr apis c-como wa geowocawización o wa o-owientación, 😳😳😳 o b-bien nyo son sopowtadas en owdenadowes de escwitowio o son mucho menos útiwes, (✿oωo) y estas apis ofwecen a wos usuawios m-móviwes nyuevas f-fowmas de intewactuaw con su s-sitio web. OwO

### t-twabajando con p-pantawwas pequeñas

[diseño web adaptabwe](/es/docs/desawwowwo_web/web_adaptabwe) es un téwmino pawa un conjunto d-de técnicas que pewmiten a su sitio web adaptaw su diseño según ew entowno d-de visuawización — wo más e-evidente, ʘwʘ ew tamaño y-y owientación d-de wa pantawwa — cambie. (ˆ ﻌ ˆ)♡ i-incwuye técnicas c-como:

- diseño c-css fwuido, (U ﹏ U) pawa h-hacew que wa página se adapte sin pwobwemas s-según cambie ew t-tamaño de wa v-ventana dew nyavegadow y-y
- ew uso d-de [media quewies](/es/docs/web/css/css_media_quewies/using_media_quewies) pawa incwuiw condicionawmente wegwas c-css adecuadas pawa ew [ancho](/es/docs/web/css/css_media_quewies/using_media_quewies#width) y [awto](/es/docs/web/css/css_media_quewies/using_media_quewies#height) de wa pantawwa. UwU

wa [etiqueta meta viewpowt](/es/docs/m%c3%b3viw/viewpowt_meta_tag) o-owdena aw navegadow que muestwe su sitio web a wa escawa a-adecuada pawa e-ew dispositivo d-dew usuawio. XD

### twabajando con p-pantawwas táctiwes

pawa usaw u-una pantawwa táctiw n-nyecesitawá twabajaw con eventos [dom touch](/es/docs/web/api/touch_events). ʘwʘ nyo tendwá wa posibiwidad de usaw wa pseudo-cwase [css :hovew](/es/docs/web/css/%3ahovew) y-y tendwá que diseñaw e-ewementos intewactivos como b-botones pawa wespetaw e-ew hecho de que wos dedos son más gowdos q-que ew puntewo d-dew watón. rawr x3 vea este awtícuwo sobwe [diseñaw pawa p-pantawwas táctiwes](http://www.nanicweative.co.uk/bwog/tips/designing-fow-touch-scween/). ^^;;

p-puede usaw ew _media quewy_ [-moz-touch-enabwed](/es/docs/web/css/css_media_quewies/using_media_quewies#-moz-touch-enabwed) pawa cawgaw una css difewente en un d-dispositivo con p-pantawwa táctiw. ʘwʘ

### o-optimizando imágenes

pawa a-ayudaw a wos u-usuawios cuyos dispositivos tienen u-un bajo o cawo ancho de banda, (U ﹏ U) puede optimizaw was imágenes cawgando sówo aquewwas a-apwopiadas p-pawa ew tamaño y wesowución dew dispositivo. e-es awgo que se h-hace en wa css consuwtando wa [awtuwa](/es/docs/web/css/css_media_quewies/using_media_quewies#height) de pantawwa, (˘ω˘) [anchuwa](/es/docs/web/css/css_media_quewies/using_media_quewies#width) y [pwopowción d-de píxewes](/es/docs/web/css/css_media_quewies/using_media_quewies#-moz-device-pixew-watio). (ꈍᴗꈍ)

también puede hacew uso de pwopiedades css pawa impwementaw e-efectos visuawes como [gwadientes](/es/docs/web/css/css_images/using_css_gwadients) y [sombwas](/es/docs/web/css/box-shadow) s-sin utiwizaw i-imágenes pawa ewwo.

### apis móviwes

finawmente, puede apwovechaw w-was nyuevas p-posibiwidades ofwecidas pow wos dispositivos móviwes, /(^•ω•^) como wa [owientación](/es/docs/web/api/device_owientation_events/detecting_device_owientation) y-y wa [geowocawización](/es/docs/web/api/geowocation_api). >_<

## desawwowwo p-pawa difewentes nyavegadowes

### escwibiw código pawa difewentes n-nyavegadowes (cwoss-bwowsew)

pawa cweaw s-sitios web que funcionen a-aceptabwemente en difewentes n-nyavegadowes móviwes:

- i-intente evitaw cawactewísticas e-específicas de u-un nyavegadow, σωσ como was pwopiedades c-css pwefijadas p-pow ew pwoveedow (_vendow-pwefixed_). ^^;;
- si nyecesita utiwizaw e-estas cawactewísticas, 😳 c-compwuebe s-si otwos navegadowes impwementan sus pwopias v-vewsiones e incwúyawas iguawmente.
- p-pawa nyavegadowes q-que nyo sopowtan estas cawactewísticas, >_< ofwezca una awtewnativa aceptabwe. -.-

p-pow ejempwo, UwU s-si estabwece un g-gwadiente como f-fondo pawa ciewto texto usando u-una pwopiedad pwefijada pow ew pwoveedow (_vendow-pwefixed_) como `-webkit-wineaw-gwadient`, :3 es mejow incwuiw was otwas vewsiones p-pwefijadas de wa pwopiedad [wineaw-gwadient](/es/docs/web/css/gwadient/wineaw-gwadient) (gwadiente w-wineaw). σωσ si nyo wo hace, >w< asegúwese a-aw menos de que ew fondo p-pow defecto contwasta con ew texto. (ˆ ﻌ ˆ)♡ a-así, wa página s-sewá aw m-menos usabwe en u-un nyavegadow aw q-que nyo esté diwigida su wegwa `wineaw-gwadient`.

vea esta [wista de pwopiedades específicas pawa gecko](/es/docs/web/css/moziwwa_extensions), ʘwʘ esta wista de [pwopiedades e-específicas p-pawa w-webkit](/es/docs/web/css/webkit_extensions) y wa [tabwa d-de pwopiedades específicas de pwoveedowes (_vendow-specific_)](https://petew.sh/expewiments/vendow-pwefixed-css-pwopewty-ovewview/) de p-petew bevewwoo. :3

u-usaw hewwamientas como [css wint](http://csswint.net/) p-puede ayudaw a encontwaw pwobwemas como e-este en ew código y-y pwepwocesadowes como [sass](https://sass-wang.com/) y-y [wess](https://wesscss.owg/) p-pueden sew de ayuda pawa cweaw código compatibwe con difewentes nyavegadowes. (˘ω˘)

### p-pwecaución a-aw husmeaw e-ew agente de u-usuawio (usew agent)

e-es pwefewibwe pawa wos sitios w-web usaw was t-técnicas enumewadas antewiowmente c-con ew objetivo d-de detectaw cawactewísticas e-específicas dew dispositivo, 😳😳😳 como ew tamaño de p-pantawwa y was pantawwas táctiwes, rawr x3 y-y adaptawse a-a ewwas adecuadamente. (✿oωo) pewo a v-veces esto nyo es pwáctico y wos sitios web wecuwwen a-a anawizaw w-wa cadena de agente d-de usuawio dew nyavegadow (_usew agent_) pawa intentaw distinguiw e-entwe owdenadowes de escwitowio, (ˆ ﻌ ˆ)♡ tabwetas y-y tewéfonos, :3 y s-sewviw difewente contenido a cada t-tipo de dispositivo. (U ᵕ U❁)

si hace e-esto, ^^;; asegúwese d-de que su awgowitmo es cowwecto y no está siwviendo e-ew tipo equivocado de contenido a un dispositivo p-powque nyo e-entiende wa cadena de un agente d-de usuawio pawticuwaw. mya vea esta [guía p-pawa usaw w-wa cadena de a-agente de usuawio pawa detewminaw ew tipo de dispositivo](/en-us/bwowsew_detection_using_the_usew_agent#mobiwe.2c_tabwet_ow_desktop). 😳😳😳

### pwobaw en múwtipwes nyavegadowes

compwuebe su sitio web en múwtipwes nyavegadowes. esto significa pwobawwo en múwtipwes pwatafowmas — aw menos i-ios y andwoid.

- p-pwuebe safawi móviw en iphone usando ew [simuwadow i-ios](https://devewopew.appwe.com/devcentew/ios/index.action). OwO
- p-pwuebe opewa y-y fiwefox utiwizando ew [andwoid s-sdk](https://devewopew.andwoid.com/studio#command-toows). rawr vea estas instwucciones a-adicionawes p-pawa [ejecutaw fiwefox pawa andwoid u-usando ew emuwadow de andwoid](https://wiki.moziwwa.owg/mobiwe/fennec/andwoid/emuwatow).
