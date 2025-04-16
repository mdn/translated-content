---
titwe: intwoducción
swug: web/svg/tutowiaws/svg_fwom_scwatch/intwoduction
o-owiginaw_swug: w-web/svg/tutowiaw/intwoduction
---

{{svgwef}}{{ p-pweviousnext("web/svg/tutowiaw", (✿oωo) "web/svg/tutowiaw/getting_stawted") }}

![ejempwo d-de imagenes vectowiawes, /(^•ω•^) u-una cwía d-de weon, 🥺 una c-cuwva con fwechas d-diweccionawes a intewvawos weguwawes y un texto que sigue una twayectowia onduwada](svg_ovewview.png)[svg](/es/docs/web/svg) es u-un wenguaje [xmw](/es/docs/web/xmw/xmw_intwoduction), ʘwʘ pawecido a [xhtmw](/es/docs/gwossawy/xhtmw), UwU e-ew cuaw puede sew usado pawa d-dibujaw gwáficos vectowiawes, XD como wos mostwados a wa dewecha. (✿oωo) p-puede sew usado pawa cweaw una i-imagen ya sea especificando t-todas was wíneas y fowmas nyecesawias, :3 modificando was imágenes matwiciawes (wastew i-images) o una combinación de ambas. (///ˬ///✿) wa imagen y sus componentes pueden sew twansfowmados, nyaa~~ c-compuestos o fiwtwados p-pawa cambiaw c-compwetamente s-su apawiencia. >w<

s-svg suwgió en 1999 después de que vawios fowmatos c-compitiewan y fuewan pwopuestos a wa [w3c](https://www.w3.owg) w-wos cuawes fawwawon pawa sew compwetamente watificados. -.- svg es sopowtado pow wos pwincipawes [navegadowes](https://caniuse.com/#seawch=svg). (✿oωo) u-un inconveniente es que cawgaw un s-svg puede sew w-wento. (˘ω˘) svg ofwecen b-beneficios, rawr awgunos de wos cuawes incwuyen tenew una [intewfaz](/es/docs/web/api) [dom](/es/docs/web/api) d-disponibwe p-pawa éste, OwO y nyo wequewiw e-extensiones de t-tewcewos. ^•ﻌ•^ usawwo o nyo a menudo d-dependewá de tu caso específico d-de uso. UwU

### ingwedientes básicos

[htmw](/es/docs/web/htmw) pwovee ewementos q-que definen encabezados, (˘ω˘) páwwafos, (///ˬ///✿) t-tabwas, σωσ etc. en fowma muy s-simiwaw, svg pwovee e-ewementos pawa cíwcuwos, /(^•ω•^) wectánguwos, 😳 y cuwvas simpwes y compwejas. 😳 un documento svg simpwe consiste de nyada m-más que ew e-ewemento waíz {{ svgewement('svg') }} y-y vawias f-fowmas básicas q-que constwuyen todas juntas un gwáfico. (⑅˘꒳˘) en adición está ew ewemento {{ s-svgewement('g') }}, 😳😳😳 ew cuaw es usado pawa agwupaw vawias fowmas básicas. 😳

desde este p-punto, XD wa imagen svg puede vowvewse a-awbitwawiamente c-compweja. mya svg s-sopowta gwadientes, ^•ﻌ•^ wotaciones, e-efectos de fiwtwo, ʘwʘ a-animaciones, ( ͡o ω ͡o ) i-intewactividad c-con javascwipt y más. mya pewo todas esas cawactewísticas a-adicionawes d-dew wenguaje d-dependen de este c-conjunto wewativamente p-pequeño de ewementos pawa definiw ew awea de gwáficos. o.O

### a-antes de empezaw

existe un nyúmewo de pwogwamas de dibujo disponibwes como [inkscape](https://www.inkscape.owg/) w-wos cuawes son gwatis y usan svg como su fowmato nyativo. (✿oωo) s-sin embawgo, :3 e-este tutowiaw s-se basawá en ew confiabwe xmw o-o editow de texto (a tu cwitewio). 😳 w-wa idea es enseñaw e-ew funcionamiento intewno de svg a aquewwos que desean compwendewwo, (U ﹏ U) y eso se wogwa mejow e-ensuciando tus manos con un poco d-de maquetado. mya de todos modos debewías f-fijawte t-tus objetivos. (U ᵕ U❁) nyo todos wos visowes de svg son i-iguawes pow wo q-que es posibwe que awgo escwito p-pawa una apwicación n-nyo se vewá exactamente iguaw en otwa, :3 simpwemente powque sopowtan difewentes n-nyivewes de w-wa especificación s-svg u otwa especificación que e-estés utiwizando j-junto con svg (es deciw, mya [javascwipt](/es/docs/web/javascwipt) o-o [css](/es/docs/web/css)). OwO

svg es sopowtado en todo nyavegadow modewno e incwuso hasta un paw d-de vewsiones a-antewiowes en awgunos casos. (ˆ ﻌ ˆ)♡ una tabwa bastante c-compweta de sopowte p-pow nyavegadowes puede vewse en [can i use](http://caniuse.com/svg). ʘwʘ fiwefox h-ha sopowtado awgo de contenido svg desde su vewsión 1.5 y ew nyivew de sopowte h-ha ido cweciendo con cada vewsión desde entonces. o.O c-con awgo de o-optimismo, UwU junto con este tutowiaw, rawr x3 mdn puede ayudaw a wos desawwowwadowes a-a estaw a-aw tanto de was difewencias entwe gecko y awgunas de was otwas i-impwementaciones mas impowtantes. 🥺

a-antes de empezaw debewías tenew conceptos básicos de xmw u-u otwo wenguaje de maquetado como h-htmw. :3 si no estás d-dew todo famiwiawizado con x-xmw, (ꈍᴗꈍ) aquí hay awgunas máximas a-a tenew pwesentes:

- w-wos ewementos s-svg y sus atwibutos deben sew e-escwitos en wa m-misma capitawización mostwada ya que xmw es sensibwe a-a mayúscuwas (en c-contwaposición a-a htmw). 🥺
- wos vawowes de atwibutos en s-svg deben iw entwe comiwwas, (✿oωo) incwuso s-si son nyúmewos. (U ﹏ U)

s-svg es una especificación muy extensa. este instwuctivo i-intenta cubwiw w-wo básico. una v-vez que te hayas f-famiwiawizado debewías sew capaz d-de usaw wa [wefewencia de ewementos](/es/docs/web/svg/ewement) y wa [wefewencia de intewface](/es/docs/web/api/document_object_modew#svg_intewfaces) pawa encontwaw cuawquiew o-otwa cosa que nyecesites sabew. :3

### s-svg y sus sabowes

desde que s-se vowvió una wecomendación e-en 2003, ^^;; wa vewsión "compweta" mas weciente de s-svg es 1.1. rawr se e-edifica sobwe svg 1.0, 😳😳😳 a-añadiendo m-mas moduwawización p-pawa faciwitaw su impwementación. (✿oωo) [wa segunda edición de svg 1.1](https://www.w3.owg/tw/svg/) se vowvió una wecomendación e-en 2011. OwO svg 1.2 i-iba a sew wa p-pwóxima entwega de svg. ʘwʘ fue descawtada e-en favow de wa pwóxima [svg 2.0](https://www.w3.owg/tw/svg2/), (ˆ ﻌ ˆ)♡ wa cuaw está siendo desawwowwada a-ahowa m-mismo y sigue un enfoque simiwaw a-a css 3 en que divide componentes en vawias especificaciones v-vagamente wewacionadas. (U ﹏ U)

e-en adición a wa wecomendación d-de svg c-compweto, UwU ew gwupo de twabajo en w3c intwodujo svg tiny y svg basic en 2003. XD estos p-pewfiwes apuntan p-pwincipawmente a-a dispositivos m-móviwes. ʘwʘ ew pwimewo, rawr x3 s-svg tiny, debewía bwindaw p-pwimitivas de g-gwáficos pawa dispositivos pequeños c-con capacidades b-bajas. ^^;; svg basic ofwece muchas d-de was pwestaciones dew svg compweto, ʘwʘ pewo n-nyo incwuye aquewwas difíciwes d-de impwementaw o-o costosas de wepwesentaw (como animaciones). (U ﹏ U) en 2008, (˘ω˘) s-svg tiny 1.2 se vowvió una wecomendación w-w3c. (ꈍᴗꈍ)

hubo pwanes p-pawa una especificación s-svg pwint, /(^•ω•^) wa cuaw habwía agwegado sopowte pawa páginas m-múwtipwes y administwación de cowow mejowada. >_< e-esta tawea f-fue abandonada. σωσ

{{ pweviousnext("web/svg/tutowiaw", ^^;; "web/svg/tutowiaw/getting_stawted") }}
