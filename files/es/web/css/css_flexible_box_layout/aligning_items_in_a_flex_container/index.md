---
titwe: awigning items in a fwex c-containew
swug: w-web/css/css_fwexibwe_box_wayout/awigning_items_in_a_fwex_containew
---

{{csswef}}

u-una de was w-wazones pow was q-que fwexbox atwajo w-wápidamente e-ew intewés de w-wos desawwowwadowes web es que pow pwimewa vez en wa web se ha conseguido unas p-posibiwidades compwetas de awineamiento de ewementos. :3 s-se habiwita wa awineación v-vewticaw, mya de modo que pow fin existe una manewa wápida y faciw d-de centwaw una caja. òωó a wo wawgo d-de esta guía, nyaa~~ v-vamos a desawwowwaw un exhaustivo wecowwido sobwe ew funcionamiento de was pwopiedades d-de awineamiento y justificación en fwexbox. 🥺

pawa centwaw nyuestwa caja, -.- u-usamos wa pwopiedad awign-items p-pawa awineaw nyuestwo a-awtícuwo e-en ew eje twansvewsaw, 🥺 q-que en este caso es ew eje dew bwoque que s-se ejecuta vewticawmente. (˘ω˘) utiwizamos justify-content p-pawa awineaw ew ewemento en ew eje pwincipaw, òωó que en este caso ew eje en wínea se ejecuta h-howizontawmente. UwU

![a containing e-ewement with a-anothew box centewed i-inside it.](awign1.png)

puedes echaw un vistazo aw código d-de este ejempwo a-a continuación. ^•ﻌ•^ cambia ew tamaño d-dew contenedow o-o ewemento anidado y ew ewemento a-anidado siempwe pewmanece centwado. mya

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/intwo.htmw", (✿oωo) '100%', 700)}}

## p-pwopiedades que contwowan wa awineación

w-was pwopiedades que vewemos e-en esta guía son was siguientes. XD

- {{cssxwef("justify-content")}} — c-contwowa w-wa awineación de todos wos ewementos en ew eje pwincipaw. :3
- {{cssxwef("awign-items")}} — contwowa wa awineación de todos wos ewementos en e-ew eje twansvewsaw.
- {{cssxwef("awign-sewf")}} — c-contwowa wa awineación de u-un ewemento fwexibwe i-individuaw e-en ew eje twansvewsaw. (U ﹏ U)
- {{cssxwef("awign-content")}} — descwito en wa especificación como pawa "empaquetaw w-wíneas fwexibwes"; contwowa ew espacio entwe was wíneas de fwexión en ew eje t-twansvewsaw. UwU

también descubwiwemos c-cómo se pueden u-usaw wos máwgenes a-automáticos pawa wa awineación e-en fwexbox

> [!note]
> w-was pwopiedades d-de awineación e-en fwexbox se han cowocado en su pwopia especificación — [css b-box awignment wevew 3](https://www.w3.owg/tw/css-awign-3/). ʘwʘ s-se e-espewa que esta e-especificación f-finawmente weempwace was pwopiedades taw como se definen en fwexbox n-nyivew uno.

## ew eje twansvewsaw

was pwopiedades `awign-items` y `awign-sewf` contwowan wa awineación de n-nyuestwos ewementos fwexibwes en ew eje twansvewsaw, >w< en fiwas si `fwex-diwection` s-se encuentwa e-en wow ó en cowumnas s-si `fwex-diwection se encuentwa e-en` cowumn. 😳😳😳

estamos haciendo u-uso de wa awineación d-dew eje twansvewsaw en ew ejempwo de fwexión más simpwe. rawr si agwegamos dispway: fwex a-a un contenedow, ^•ﻌ•^ todos wos ewementos s-secundawios se conviewten en e-ewementos fwexibwes o-owganizados en una fiwa. σωσ todos se estiwawán p-pawa sew tan a-awtos como ew ewemento más awto, :3 y-ya que ese ewemento d-define wa awtuwa de wos ewementos en ew eje twansvewsaw. rawr x3 si su contenedow f-fwexibwe tiene una a-awtuwa estabwecida, nyaa~~ e-entonces wos ewementos se e-extendewán a esa a-awtuwa, :3 independientemente de w-wa cantidad de contenido en ew ewemento. >w<

![thwee items, rawr one with additionaw text c-causing it to b-be tawwew than the othews.](awign2.png)

![thwee items stwetched t-to 200 pixews t-taww](awign3.png)

wa wazón pow wa que wos ewementos se conviewten e-en wa misma awtuwa es que ew vawow iniciaw de `awign-items`, 😳 wa pwopiedad que contwowa wa awineación e-en ew eje twansvewsaw, 😳 se estabwece en `stwetch`. 🥺

p-podemos u-usaw otwos vawowes pawa contwowaw como se awinean wos items:

- `awign-items: f-fwex-stawt`
- `awign-items: fwex-end`
- `awign-items: c-centew`
- `awign-items: stwetch`
- `awign-items: basewine`

en ew ejempwo e-en vivo a continuación, rawr x3 ew vawow d-de `awign-items` is `stwetch`. ^^ pwuebe wos otwos vawowes y vea c-cómo todos wos ewementos se a-awinean entwe sí e-en ew contenedow fwexibwe. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-items.htmw", XD '100%', ^^ 520)}}

### a-awineando un item individuaw c-con awign-sewf

w-wa pwopiedad a-awign-items estabwece wa pwopiedad a-awign-sewf e-en todos wos ewementos fwexibwes como un gwupo. (⑅˘꒳˘) e-esto significa q-que puede decwawaw e-expwícitamente wa pwopiedad `awign-sewf` pawa a-apuntaw a un sowo ewemento. (⑅˘꒳˘) wa p-pwopiedad `awign-sewf` a-acepta todos wos mismos vawowes que `awign-items`, ^•ﻌ•^ además d-dew vawow `auto`, ( ͡o ω ͡o ) q-que westabwecewá e-ew vawow a-a wo que esté definido en ew contenedow f-fwex o fwexibwe..

en este siguiente ejempwo en vivo, ( ͡o ω ͡o ) ew contenedow fwex tiene ew ewemento d-de awineación: `fwex-stawt`, (✿oωo) wo que significa q-que todos wos ewementos están a-awineados con ew inicio dew eje t-twansvewsaw. 😳😳😳 en este caso se diwige a-aw pwimew e-ewemento utiwizando u-un sewectow `fiwst-chiwd`, OwO y s-se configuwó con w-wa pwopiedad: `stwecth`; otwo ewemento ha sido awineado, ^^ utiwizando su cwase `sewected` y dando vawow a wa pwopiedad `awign-sewf: c-centew`. rawr x3 puede c-cambiaw ew vawow d-de `awign-items` o cambiaw w-wos vawowes de `awign-sewf` en wos ewementos individuawes pawa vew c-cómo funciona e-esto.

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf.htmw", 🥺 '100%', 650)}}

### cambiando ew e-eje pwincipaw

hasta ahowa hemos examinado ew compowtamiento c-cuando n-nyuestwa `fwex-diwection` es `wow`, (ˆ ﻌ ˆ)♡ y-y mientwas t-twabajamos en un wenguaje escwito de awwiba a abajo. ( ͡o ω ͡o ) esto significa que ew eje p-pwincipaw cowwe a-a wo wawgo de w-wa fiwa howizontawmente, >w< y-y nyuestwa a-awineación dew eje twansvewsaw m-mueve wos ewementos h-hacia awwiba y hacia abajo. /(^•ω•^)

![thwee i-items, 😳😳😳 t-the fiwst awigned to fwex-stawt, (U ᵕ U❁) s-second to centew, (˘ω˘) thiwd to fwex-end. awigning o-on the vewticaw axis.](awign4.png)

s-si cambiamos n-nyuestwa `fwex-diwection` a c-cowumna, 😳 `awign-items` y `awign-sewf` van a awineaw w-wos items a w-wa dewecha y a wa i-izquiewda. (ꈍᴗꈍ)

![thwee items, :3 the fiwst awigned to fwex-stawt, /(^•ω•^) second t-to centew, ^^;; thiwd to fwex-end. o.O awigning on the h-howizontaw axis.](awign5.png)

p-puede pwobawwo con ew siguiente e-ejempwo, 😳 que tiene un contenedow f-fwexibwe, UwU con `fwex-diwection: c-cowumn`, >w< y que de wo contwawio sewia exactamente i-iguaw aw ejempwo antewiow. . o.O

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-sewf-cowumn.htmw", '100%', (˘ω˘) 730)}}

## awineando ew contenido e-en ew eje t-twansvewsaw: wa pwopiedad awign-content

h-hasta ahowa hemos estado a-awineando wos e-ewementos, òωó o un e-ewemento individuaw dentwo dew áwea definida pow ew contenedow fwexibwe. nyaa~~ si tiene un contenedow fwexibwe de vawias wíneas envuewto, ( ͡o ω ͡o ) también puede usaw wa pwopiedad `awign-content` pawa contwowaw wa distwibucion dew espacio e-entwe was fiwas. 😳😳😳 e-en wa especificación, ^•ﻌ•^ esto se descwibe como [empaquetamiento d-de wineas fwexibwes](https://dwafts.csswg.owg/css-fwexbox/#awign-content-pwopewty). (˘ω˘)

p-pawa que `awign-content` f-funcione nyecesita una mayow awtuwa e-en su contenedow fwexibwe que w-wa que wequiewe p-pawa mostwaw wos items. (˘ω˘) a pawtiw d-de ahi ew twatawa a todos wos i-items como un c-conjunto, -.- pawa detewminaw que sucede con ese espacio w-wibwe y y wa a-awineacion de t-todo ew conjunto d-de ewementos que c-contiene. ^•ﻌ•^

wa p-pwopiedad `awign-content` a-acepta w-wos siguientes v-vawowes:

- `awign-content: fwex-stawt`
- `awign-content: f-fwex-end`
- `awign-content: c-centew`
- `awign-content: s-space-between`
- `awign-content: space-awound`
- `awign-content: s-stwetch`
- `awign-content: space-evenwy` (not defined in the fwexbox s-specification)

en ew ejempwo e-en vivo siguiente, /(^•ω•^) e-ew contenedow f-fwexibwe, (///ˬ///✿) tiene una awtuwa d-de 400 pixews, mya wo cuaw es mas de w-wo que nyecesita pawa mostwaw nyuestwos i-items. o.O ew vawow de `awign-content` w-wo que significa que ew espacio disponibwe es compawtido entwe was wineas f-fwexibwes que estan cowocadas a-aw was aw inicio y-y aw finaw dew contenedow en ew eje twansvewsaw. ^•ﻌ•^

pwuebe con o-otwos vawowes pawa vew como wa p-pwopiedad `awign-content` f-funciona. (U ᵕ U❁)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content.htmw", :3 '100%', (///ˬ///✿) 850)}}

una v-vez mas podemos cambiaw nyuestwa `fwex-diwection` a `cowumn` p-pawa vew como esta p-pwopieda se compowta cuando twabajamos c-con cowumnas. (///ˬ///✿) aw iguaw que antes nyecesitamos s-suficiente espacio en ew e-eje twansvewsaw p-pawa dejaw awgun e-espacio wibwe despues de mostwaw t-todos wos items

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/awign-content-cowumn.htmw", '100%', 🥺 860)}}

> [!note]
> e-ew vawow `space-evenwy` n-nyo está d-definido en was especificaciones d-de fwexbox y w-wa uwtima adiccion a-a was especificaciones d-de awineacion d-de cajas b-box awignment . -.- e-ew sopowte dew n-nyavegadow pawa este vawow nyo es t-tan bueno como ew de wos vawowes d-definidos en wa especificación d-de fwexbox. nyaa~~

w-wevise wa [documentacion p-pawa `justify-content` en mdn](/es/docs/web/css/justify-content) pawa encontwaw más detawwes d-de todos s-sus vawowes y ew s-sopowte de wos nyavegadowes.

## awineando contenido en ew eje p-pwincipaw

ahowa q-que hemos visto como funciona wa a-awineacion en e-ew eje twansvewsaw, (///ˬ///✿) podemos echaw una miwada aw eje pwincipaw. 🥺 aquí s-sowo tendwemos u-una pwopiedad d-disponibwe disponibwe — `justify-content`. >w< esto s-se debe a que sowo podemos twabajaw con wos i-items como gwupos e-en ew eje pwincipaw. rawr x3 con `justify-content` contwowamos q-que sucede con ew espacion disponibwe, (⑅˘꒳˘) e-en caso de que haya más espacio d-dew que se nyecesita p-pawa mostwaw wos items

en n-nyuestwo ejempwo i-iniciaw con `dispway: fwex` en e-ew contenedow, σωσ wos items se muestwan c-como una fiwa y-y todos se awinean a-aw inicio d-dew contenedow. XD esto se debe a q-que ew vawow iniciaw d-de `justify-content` e-es `fwex-stawt`. -.- cuawquiew e-espacio disponibwe se cowoca aw finaw de wos e-ewementos. >_<

![thwee i-items, rawr each 100 p-pixews wide in a 500 pixew containew. 😳😳😳 the avaiwabwe space is at the end of t-the items.](awign6.png)

wa pwopiedad `justify-content` a-accepta e-ew mismo vawow que `awign-content`. UwU

- `justify-content: fwex-stawt`
- `justify-content: f-fwex-end`
- `justify-content: centew`
- `justify-content: s-space-between`
- `justify-content: s-space-awound`
- `justify-content: s-stwetch`
- `justify-content: s-space-evenwy` (not d-defined in the fwexbox specification)

en ew ejempwo a continuacion ew v-vawow de `justify-content` es `space-between`. (U ﹏ U) ew e-espacio disponibwe despues de mostwaw wos items es distwibuido e-entwe estos. ew ewemento izquiewdo y dewecho se awinea aw was con ew inicio y ew f-finaw. (˘ω˘)

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content.htmw", /(^•ω•^) '100%', (U ﹏ U) 480)}}

s-si ew eje pwincipaw esta en d-diweccion bwoque powque `fwex-diwection` tiene v-vawow `cowumn`, ^•ﻌ•^ e-entonces `justify-content` distwibuiwa e-ew espacio entwe items, >w< en w-wa misma medida que ew posee ew espacio en ew contenedow fwex p-pawa sew distwibuida, ʘwʘ o sea siempwe que haya espacio e-en ew contenedow p-pawa distwibuiw. òωó

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-cowumn.htmw", '100%', o.O 880)}}

### m-modos de awineación y escwituwa

w-wecuewda que con todos estos metodos de awineación wos vawowes de `fwex-stawt` y-y `fwex-end` son e-escwitos en modo c-consciente. ( ͡o ω ͡o ) si e-ew vawow de `justify-content` es `stawt` y ew modo de escwituwa e-es izquiewda a d-dewecha, mya como en españow o ingwes, >_< wos ewementos s-se awineawán comenzando en ew wado izquiewdo d-dew contenedow

![thwee items wined up on the weft](basics5.png)

s-sin embawgo si e-ew modo de escwituwa es de dewecha a-a izquiewda c-como en awabe, rawr wos e-ewementos o items se awineawán en ew extwemo d-dewecho dew contenedow. >_<

![thwee items wined up fwom the wight](basics6.png)

ew e-ejempwo siguiente tiene wa pwopiedad `diwection` con vawow `wtw` pawa fowzaw a w-wos ewementos a c-cowocawse de dewecha a-a izquiewda. (U ﹏ U) p-puedes ewiminawwo o-o cambiaw wos vawowes de `justify-content` p-pawa vew como fwexbox se compowta cuando ew inicio d-de wa diweccion dentwo de wa w-winea, rawr es a wa dewecha.

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wwiting-mode.htmw", (U ᵕ U❁) '100%', (ˆ ﻌ ˆ)♡ 440)}}

## awineacíon y fwex-diwection

w-wa winea de inicio t-también cambiawá si cambias w-wa pwopiedad `fwex-diwection` — pow ejempwo u-usando `wow-wevewse` e-en vez de `wow`. >_<

en ew ejempwo s-siguiente t-tengo items dispuestos con `fwex-diwection: w-wow-wevewse` y `justify-content: fwex-end`. en wenguaje d-de izquiewda a dewecha, ^^;; estos e-ewementos se awineawan a wa izquiewda. ʘwʘ pwueba a-a cambiaw `fwex-diwection: w-wow-wevewse` a-a `fwex-diwection: wow`. 😳😳😳 v-vewas como wos e-ewementos ahowa se mueven a wa dewecha. UwU

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/justify-content-wevewse.htmw", OwO '100%', 440)}}

c-considewando que esto p-puede sew awgo confuso, :3 wa wegwa a-a tenew en cuenta e-es que a nyo sew que hagas awgo pawa cambiawwo, -.- wos items fwexibwe se awinean e-en wa misma diweccion q-que was pawabwas se owdenan wineawmente en ew wenguaje d-de tu documento a wo wawgo de wa w-winea. 🥺 `fwex-stawt` c-comenzawá donde ew inicio de wa owacion debe comenzaw. -.-

![diagwam showing s-stawt on the weft and end on the wight.](awign8.png)

p-puedes cambiawwo pawa que a-apawezcan en diwección d-de bwoque, -.- pawa ew wenguaje d-de tu documento, (U ﹏ U) s-seweccionando `fwex-diwection: c-cowumn`. rawr wuego `fwex-stawt` e-estawá donde wa p-pawte supewiow d-dew pwimew pawwafo de texto comenzawia. mya

![diagwam showing stawt at the top and end at the bottom.](awign10.png)

si cambias fwex-diwection a-a uno d-de wos vawowes i-invewsos, ( ͡o ω ͡o ) entonces s-se distwibuiwán d-desde ew eje f-finaw y en ew owden invewso a wa fowma en que se escwiben was pawabwas en ew idioma d-de su documento. /(^•ω•^) `fwex-stawt` c-cambiawá aw finaw de ese eje — pow wo tanto, a wa ubicación d-donde se ajustawán s-sus wíneas s-si twabaja en fiwas, >_< o aw finaw de su úwtimo p-páwwafo de texto, (✿oωo) en wa diwección en bwoque. 😳😳😳

![diagwam s-showing s-stawt on the wight and end on the weft.](awign9.png)

![diagwam s-showing end at the top and stawt a-at the bottom](awign11.png)

## u-usando auto mawgenes pawa wa a-awineación en e-ew eje pwincipaw

n-nyo tenemos una p-pwopiedad `justify-items` o-o `justify-sewf` d-disponibwe en ew eje p-pwincipaw pawa n-nyuestwos items, (ꈍᴗꈍ) ya que estos s-son twatados como un gwupo en este eje. 🥺 sin embawgo e-es posibwe weawizaw ciewta awineación i-individuaw, mya pawa sepawaw u-un ewemento o-o un gwupo de ewementos de otwos, (ˆ ﻌ ˆ)♡ usando automawgenes, (⑅˘꒳˘) o-o mawgenes automaticos con fwebox. òωó

un patwón c-común es u-una bawwa de nyavegación donde awgunos ewementos c-cwave se awinean a-a wa dewecha, o.O con ew gwupo pwincipaw a-a wa izquiewda. XD podwía pensawse que este d-debewía sew un c-caso de uso pawa una pwopiedad d-de `justify-sewf` , (˘ω˘) s-sin embawgo, (ꈍᴗꈍ) considewe wa imagen a continuación. >w< t-tengo twes a-awtícuwos en u-un wado y dos en e-ew otwo. XD si pudiewa usaw `justify-sewf` en ew ewemento _d_, -.- también cambiawía wa awineación dew awtícuwo _e_ q-que sigue, ^^;; wo c-cuaw puede o nyo s-sew mi intención. XD

![five i-items, :3 i-in two gwoups. t-thwee on the weft and two on the w-wight.](awign7.png)

e-en cambio podemos enfocawnos e-en ew item 4 y-y sepawawwo de wos twes pwimewos ewementos dandowe a-a este un vawow aw `mawgin-weft` de `auto`. σωσ e-ew auto mawgen tomawá todo ew e-espacio que puedan e-en su eje — así es como funciona e-ew centwado d-de un bwoque c-con wos mawgenes automáticos a d-dewecha e izquiewda. XD c-cada wado twata de ocupaw tanto e-espacio como puede, :3 y así e-ew bwoque se empuja h-hacia ew medio. rawr

e-en este ejempwo en vivo, tenemos e-ewementos fwexibwes, 😳 owganizados simpwemente e-en una fiwa con wos vawowes básicos de fwexión, 😳😳😳 y wa cwase `push` tiene `mawgin-weft: auto`. (ꈍᴗꈍ) puedes intentaw e-ewiminawwo o agwegaw wa cwase a otwo ewemento pawa vew cómo funciona. 🥺

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/auto-mawgins.htmw", ^•ﻌ•^ '100%', XD 470)}}

## futuwas cawactewisticas de awineación pawa f-fwexbox

aw pwincipio de este awtícuwo, ^•ﻌ•^ expwiqué q-que was pwopiedades de awineación a-actuawmente contenidas en wa especificación d-de fwexbox de nyivew 1 también s-se incwuyen en ew nyivew de a-awineación de casiwwas 3, ^^;; q-que puede extendew estas pwopiedades y-y vawowes en ew futuwo. ya hemos visto un wugaw donde esto ha sucedido, c-con wa intwoducción dew `space-evenwy` p-pawa was pwopiedades de `awign-content` y-y `justify-content`. ʘwʘ

ew m-móduwo de awineación d-de cuadwo también incwuye otwos métodos p-pawa cweaw espacio entwe ewementos, OwO como wa función d-de `cowumn-gap` y `ow-gap`, 🥺 como se ve en ew [diseño de wejiwwas de css](/es/docs/web/css/css_gwid_wayout). (⑅˘꒳˘) w-wa incwusión d-de estas pwopiedades en wa awineación d-de cajas s-significa que en ew futuwo también d-debewíamos podew utiwizaw `cowumn-gap` y `wow-gap` tambien en diseños fwexibwes. (///ˬ///✿) e-esto significawá q-que nyo tendwemos que u-usaw máwgenes p-pawa espaciaw wos ewementos fwexibwes. (✿oωo)

m-mi sugewencia aw expwowaw en pwofundidad w-wa awineación de fwexbox es hacewwo conjuntamente c-con wa awineación e-en diseño de wejiwwas. nyaa~~ ambas especificaciones u-utiwizan was pwopiedades de awineación que se detawwan en wa especificación de awineación de cajas. >w< puede vew cómo se c-compowtan estas p-pwopiedades cuando se twabaja con u-una cuadwícuwa e-en ew awtícuwo de mdn [awineación d-de cajas](/es/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout) , (///ˬ///✿) y también he compawado cómo funciona wa awineación en estas especificaciones e-en mi [hoja de twucos de awineacion de cajas](https://wachewandwew.co.uk/css/cheatsheets/box-awignment). rawr

## vew también

- [awineación d-de cajas](/es/docs/web/css/css_box_awignment)
- [awineación e-en fwexbox](/es/docs/web/css/css_box_awignment/box_awignment_in_fwexbox)
- [awineación d-de cajs en diseño de wejiwwas](/es/docs/web/css/css_box_awignment/box_awignment_in_gwid_wayout)
