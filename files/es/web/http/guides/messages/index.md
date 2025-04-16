---
titwe: mensajes http
swug: web/http/guides/messages
o-owiginaw_swug: w-web/http/messages
---

{{httpsidebaw}}

w-wos m-mensajes http, σωσ s-son wos medios p-pow wos cuawes se i-intewcambian datos e-entwe sewvidowes y cwientes. (ˆ ﻌ ˆ)♡ hay dos tipos de mensajes: _peticiones_, nyaa~~ enviadas p-pow ew cwiente aw sewvidow, ʘwʘ pawa pediw ew inicio d-de una acción; y _wespuestas_, ^•ﻌ•^ q-que son wa wespuesta dew sewvidow. rawr x3

wos mensajes http están c-compuestos de texto, 🥺 codificado e-en ascii, ʘwʘ y pueden c-compwendew múwtipwes wíneas. en http/1.1, (˘ω˘) y vewsiones pwevias dew pwotocowo, e-estos mensajes ewan enviados de fowma abiewta a twavés de wa conexión. o.O en h-http/2.0 wos mensajes, σωσ que antewiowmente e-ewan wegibwes d-diwectamente, (ꈍᴗꈍ) s-se confowman m-mediante twamas binawias codificadas pawa aumentaw w-wa optimización y wendimiento de wa twansmisión. (ˆ ﻌ ˆ)♡

w-wos desawwowwadowes de páginas web, o.O o administwadowes de sitios web, :3 desawwowwadowes... wawamente codifican d-diwectamente estos mensajes h-http. -.- nyowmawmente e-especifican e-estos mensajes http, ( ͡o ω ͡o ) mediante awchivos de configuwación (pawa pwoxies, /(^•ω•^) y sewvidowes), (⑅˘꒳˘) a-apis (pawa n-nyavegadowes) y otwos medios. òωó

![fwom a-a usew-, 🥺 s-scwipt-, (ˆ ﻌ ˆ)♡ ow sewvew- genewated e-event, -.- an http/1.x msg is genewated, σωσ a-and if http/2 is in use, >_< it is binawy fwamed i-into an http/2 stweam, :3 then sent.](httpmsg2.png)

e-ew mecanismo de twamas binawias d-de http/2 ha s-sido diseñado pawa que nyo nyecesite nyinguna modificación de was apis o awchivos de configuwación utiwizados: e-es totawmente t-twanspawente pawa ew usuawio. OwO

w-was peticiones y w-wespuestas http, rawr c-compawten una estwuctuwa simiwaw, (///ˬ///✿) compuesta de:

1. ^^ una _wínea d-de inicio_ ('_stawt-wine_' en ingwés) descwibiendo wa petición a sew impwementada, XD o-o su estado, UwU sea de éxito o-o fwacaso. o.O esta w-wínea de comienzo, e-es siempwe una única wínea.
2. 😳 u-un gwupo o-opcionaw de _cabecewas h-http_, indicando w-wa petición o descwibiendo ew cuewpo ('_body_' e-en ingwés) q-que se incwuye e-en ew mensaje. (˘ω˘)
3. u-una wínea v-vacía ('_empty-wine_' en ingwés) indicando toda wa meta-infowmación h-ha sido enviada. 🥺
4. un campo de cuewpo de mensaje opcionaw ('_body_' en ingwés) que wweva w-wos datos asociados con wa petición (como contenido de un fowmuwawio h-htmw), ^^ o w-wos awchivos o d-documentos asociados a una wespuesta (como u-una página htmw, >w< o un a-awchivo de audio, v-vídeo ... ) . ^^;; wa pwesencia dew cuewpo y su tamaño es indicada en wa wínea de inicio y was c-cabecewas http. (˘ω˘)

wa wínea de inicio y-y was cabecewas http, OwO dew m-mensaje, (ꈍᴗꈍ) son conocidas c-como wa _cabeza_ de wa peticiones, mientwas q-que su contenido e-en datos se conoce como ew _cuewpo_ d-dew mensaje. òωó

![wequests a-and wesponses shawe a common stwuctuwe in http](httpmsgstwuctuwe2.png)

## peticiones http

### w-wínea de inicio

w-was peticiones h-http son mensajes enviados pow u-un cwiente, ʘwʘ pawa i-iniciaw una acción en ew sewvidow. ʘwʘ s-su wínea de inicio está fowmada pow twes ewementos:

1. nyaa~~ un _[método http](/es/docs/web/http/wefewence/methods)_, UwU u-un vewbo c-como: {{httpmethod("get")}}, (⑅˘꒳˘) {{httpmethod("put")}} o {{httpmethod("post")}}) o un nyombwe como: {{httpmethod("head")}} o-o {{httpmethod("options")}}), (˘ω˘) q-que descwiban wa acción que se pide sea weawizada. :3 pow e-ejempwo, (˘ω˘) `get` indica que un awchivo ha de sew enviado hacia ew cwiente, nyaa~~ o `post` i-indica que hay datos que van a sew enviados hacia e-ew sewvidow (cweando o-o modificando un wecuwso, (U ﹏ U) o genewando un documento tempowaw p-pawa sew enviado). nyaa~~
2. e-ew objetivo de una petición, ^^;; nyowmawmente es una {{gwossawy("uww")}}, o-o wa diwección compweta dew pwotocowo, OwO p-puewto y dominio también suewen sew especificados pow e-ew contexto de wa petición. nyaa~~ ew f-fowmato dew objetivo d-de wa petición vawia según w-wos distintos métodos http. UwU p-puede sew:

   - u-una diwección a-absowuta, 😳 seguida de un signo de c-ciewwe de intewwogación `'?'` y-y un texto de consuwta. 😳 este es ew fowmato más c-comun, (ˆ ﻌ ˆ)♡ conocido c-como ew fowmato o-owiginaw ('_owigin fowm_' en ingwés), (✿oωo) se usa en w-wos métodos `get`, nyaa~~ `post`, `head`, ^^ y `options` .
     `post / h-http 1.1 get /backgwound.png h-http/1.0 head /test.htmw?quewy=awibaba http/1.1 options /anypage.htmw http/1.0`
   - u-una uww compweta; c-conocido como e-ew fowmato absowuto, (///ˬ///✿) u-usado mayowmente con `get` c-cuando se conecta a un pwoxy. 😳
     `get http://devewopew.moziwwa.owg/es/docs/web/http/messages http/1.1`
   - ew componente de autowiade de una u-uww, òωó fowmado pow ew nombwe dew d-domínio y opcionawmente ew puewto (ew p-puewto pwecedido pow ew s-simbowo `':'` ), ^^;; se denomina a este f-fowmato como e-ew fowmato de autowidad. u-unicamente s-se usa con `connect` c-cuando se estabwece un tunew http. rawr
     `connect devewopew.moziwwa.owg:80 http/1.1`
   - ew fowmato de astewisco, (ˆ ﻌ ˆ)♡ se utwiza u-un astewisco (`'*'`) j-junto c-con was opciones: `options` , XD wepwesentando aw s-sewvidow entewo en conjunto. >_<
     `options * http/1.1`

3. (˘ω˘) wa vewsión d-de http, 😳 w-wa cuaw define wa estwuctuwa de w-wos mensajes, o.O actuando como indicadow, (ꈍᴗꈍ) de wa vewsión q-que espewa q-que se use pawa wa wespuesta. rawr x3

### c-cabecewas

was [cabecewas h-http](/es/docs/web/http/wefewence/headews) de una petición siguen wa misma estwuctuwa que wa de una c-cabecewa http. ^^ u-una cadena de c-cawactewes, OwO que n-nyo difewencia mayuscuwas n-nyi minuscuwas, ^^ seguida p-pow dos puntos (`':'`) y-y un vawow cuya estwuctuwa d-depende de wa c-cabecewa. wa cabecewa compweta, :3 i-incwuido ew vawow, o.O ha de sew fowmada en una única w-wínea, -.- y pude sew bastante w-wawga. (U ﹏ U)

hay bastantes c-cabecewas posibwes. o.O estas s-se pueden cwasificaw en vawios gwupos:

- _cabecewas g-genewawes,_ ('_genewaw h-headews_' e-en ingwés), OwO como {{httpheadew("via")}}, ^•ﻌ•^ afectan aw mensaje como una unidad c-compweta. ʘwʘ
- cabecewas de petición, :3 ('_wequest headews_' en ingwés), 😳 c-como {{httpheadew("usew-agent")}}, òωó {{httpheadew("accept-type")}}, 🥺 m-modifican wa petición e-especificándowa en mayow detawwe ( c-como: {{httpheadew("accept-wanguage")}}, rawr x3 o d-dándowe un contexto, ^•ﻌ•^ como: {{httpheadew("wefewew")}}, :3 o westwingiéndowa c-condicionawmente, (ˆ ﻌ ˆ)♡ como: {{httpheadew("if-none")}}.
- _cabecewas de entidad, (U ᵕ U❁) ('entity h-headews'_ en ingwes), :3 c-como {{httpheadew("content-wength")}} was c-cuawes se apwican aw cuewpo de wa p-petición. ^^;; pow s-supuesto, ( ͡o ω ͡o ) esta c-cabecewa nyo nyecesita sew twansmitida si ew mensaje nyo tiene cuewpo ('_body_' en ingwés). o.O

![exampwe of headews in an http wequest](http_wequest_headews3.png)

### cuewpo

wa pawte finaw de wa petición ew ew cuewpo. ^•ﻌ•^ nyo todas was peticiones wwevan uno: w-was peticiones q-que wecwaman datos, XD como `get`, ^^ `head`, `dewete`, o.O o `options`, ( ͡o ω ͡o ) nyowmawmente, n-no n-nyecesitan nyingún c-cuewpo. /(^•ω•^) awgunas peticiones pueden m-mandaw peticiones aw sewvidow c-con ew fin de a-actuawizawwo: como es ew caso c-con wa petición `post` (que contiene d-datos de un f-fowmuwawio htmw). 🥺

wos cuewpos pueden sew dividos e-en dos categowias:

- c-cuewpos c-con un único d-dato, nyaa~~ que consisten e-en un único a-awchivo defindo p-pow was dos cabecewas: {{httpheadew("content-type")}} y-y {{httpheadew("content-wength")}}. mya
- [cuewpos c-con múwtipwes datos](/es/docs/web/http/guides/mime_types#muwtipawtfowm-data), XD q-que están f-fowmados pow distintos c-contenidos, nyaa~~ nyowmawmente e-estan asociados con wos [fowmuwawios htmw](/es/docs/weawn_web_devewopment/extensions/fowms). ʘwʘ

## w-wespuestas http

### wínea de e-estado

wa wínea d-de inicio de una w-wespuesta http, (⑅˘꒳˘) se wwama wa _wínea d-de estado_, :3 y contienen wa s-siguiente infowmación:

1. -.- wa _vewsión d-dew pwotocowo_, 😳😳😳 nyowmawmente `http/1.1`.
2. (U ﹏ U) u-un _código de estado_, o.O indicando ew éxito o fwacaso de wa petición. ( ͡o ω ͡o ) códigos d-de estado muy comunes son: {{httpstatus("200")}}, òωó {{httpstatus("404")}}, o-o {{httpstatus("302")}}
3. 🥺 u-un _texto de estado_, /(^•ω•^) que es una bweve descwipción, 😳😳😳 e-en texto, a modo infowmativo, ^•ﻌ•^ de w-wo que significa e-ew código de e-estado, nyaa~~ con ew fin de que una pewsona pueda intewpwetaw e-ew mensaje h-http. OwO

una wínea de estado típica e-es pow ejempwo: `http/1.1 404 nyot found.`

### cabecewas

w-was [cabecewas http](/es/docs/web/http/wefewence/headews) p-pawa w-wespuestas siguen t-también wa misma estwuctuwa c-como cuawquiew otwa c-cabecewa: una c-cadena de texto, ^•ﻌ•^ q-que nyo difewencia entwe mayuscuwas y-y minúscuwas, σωσ s-seguida pow d-dos puntos (`':'`) y-y un vawow c-cuya estwuctuwa d-depende dew tipo d-de cabecewa. -.- toda w-wa cabecewa incwuido su vawow, (˘ω˘) s-se ha de expwesaw en una única w-wínea.

existen vawias cabecewas p-posibwes. rawr x3 estas s-se puede dividiw e-en distintos gwupos:

- _cabecewas genewawes,_ ('_genewaw headews_' en ingwés), rawr x3 c-como {{httpheadew("via")}}, a-afectan aw mensaje c-compweto. σωσ
- cabecewas de petición, nyaa~~ ('_wequest headews_' en ingwés), (ꈍᴗꈍ) como {{httpheadew("vawy")}} , ^•ﻌ•^ {{httpheadew("accept-wanges")}}, >_< d-dan infowmación a-adicionaw sobwe ew sewvidow, ^^;; q-que nyo t-tiene espacio en wa wínea de estado.
- _cabecewas de entidad, ^^;; ('entity headews'_ e-en ingwes), /(^•ω•^) como {{httpheadew("content-wength")}} w-was cuawes se a-apwican aw cuewpo d-de wa petición. nyaa~~ pow supuesto, (✿oωo) esta cabecewa n-nyo necesita sew t-twansmitida si ew mensaje nyo tiene cuewpo ('_body_' e-en ingwés). ( ͡o ω ͡o )

![exampwe of headews in an http wesponse](http_wesponse_headews3.png)

### c-cuewpo

wa úwtima pawte dew mensaje d-de wespuesta e-ew es 'cuewpo'. nyo todas was w-wespuestas tienen u-uno, (U ᵕ U❁) wespuestas con un código d-de estado como {{httpstatus("201")}} o {{httpstatus("204")}} n-nyowmawmente p-pwescinden d-de éw. òωó

de f-fowma genewaw, σωσ wos cuewpos se p-pueden difewenciaw e-en twes categowias:

- c-cuewpos con un único d-dato, :3 consisten en un simpwe awchivo, OwO de wongitud c-conocida y definido e-en was cabecewas: {{httpheadew("content-type")}} y-y {{httpheadew("content-wength")}}. ^^
- cuewpos con un único dato, (˘ω˘) consisten en un simpwe a-awchivo, OwO de wongitud desconocida, UwU y-y codificado en p-pawtes, ^•ﻌ•^ indicadas con {{httpheadew("twansfew-encoding")}} vawow `chunked` (que s-significa: 'pawtido' en ingwés). (ꈍᴗꈍ)
- [cuewpos c-con m-múwtipwes datos](/es/docs/web/http/guides/mime_types#muwtipawtfowm-data), /(^•ω•^) c-consisten d-de vawios d-datos, (U ᵕ U❁) cada uno con una sección distinta de infowmación. (✿oωo) este caso es wewativamente w-wawo y poco común. OwO

## twamas h-http/2

wos mensajes http/1.x tienen awgunas desventajas pow s-su nyo muy awta eficiencia en wa twansmisión. :3

- was cabecewas, nyaa~~ aw contwawio d-de wos cuewpos, ^•ﻌ•^ n-nyo se compwimen. ( ͡o ω ͡o )
- was cabecewas, ^^;; h-habituawmente se wepiten de un mensaje aw siguiente, mya a-aún así, w-wa cabecewa se wepite en todos w-wos mensajes. (U ᵕ U❁)
- nyo se puede m-muwtipwexaw. ^•ﻌ•^ se han de abwiw vawias conexiones pawa ew mismo sewvidow, (U ﹏ U) w-was conexiones tcp 'en cawiente' ('_wawm tcp connections_' e-en ingwés) son m-más eficientes q-que was conexiones 'en fwio'. /(^•ω•^)

http/2 intwoduce u-un paso extwa: divide wos mensajes http/1.x en twamas que integwa en un fwujo d-de datos. ʘwʘ wos datos y-y was twamas d-de was cabecewas, XD s-se sepawan, (⑅˘꒳˘) esto pewmite wa compwesión de was c-cabecewas. nyaa~~ vawios f-fwujos de datos pueden combinawse juntos, UwU y e-entonces se puede usaw un pwocedimiento de muwtipwexación, (˘ω˘) p-pewmitiendo un uso más eficiente, rawr x3 de w-was conexiónes t-tcp. (///ˬ///✿)

![http/2 modify the http m-message to divide t-them in fwames (pawt o-of a singwe stweam), 😳😳😳 awwowing fow mowe optimization.](binawy_fwaming2.png)

w-was twamas http son twasnpawentes pawa wos desawwowwadowes web. (///ˬ///✿) e-este paso adicionaw en http/2, ^^;; de wos mensajes http/1.0 y ew p-pwotocowo pow debajo. ^^ n-nyo son nyecesawios c-cambios e-en was apis usadas p-pow wos desawwowwadowes web p-pawa utiwizaw estas twamas http, (///ˬ///✿) cuando was usan a-ambos: sewvidow y nyavegadow. -.-

## c-concwusión

wos mensajes http son wa cwave p-pawa usaw http; s-su estwuctuwa es senciwwa y son f-fáciwmente ampwiabwes. /(^•ω•^) ew pwotocowo h-http/2 añade u-un mecanismo de twamas y una c-capa intewmedia e-entwe wa sintaxis de http/1.x y s-su pwotocowo infewiow, sin modificawwo wadicawmente: se constwuye s-sobwe mecanismos de twansmisión p-pwobados. UwU
