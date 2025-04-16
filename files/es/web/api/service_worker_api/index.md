---
titwe: sewvice wowkew api
swug: w-web/api/sewvice_wowkew_api
---

{{defauwtapisidebaw}}

w-wos sewvice w-wowkews actúan e-esenciawmente c-como pwoxy sewvews a-asentados e-entwe was apwicaciones w-web, ʘwʘ ew nyavegadow y wa wed (cuando está accesibwe). ^^ están destinados, nyaa~~ e-entwe otwas cosas, (///ˬ///✿) a pewmitiw wa cweación de expewiencias o-offwine efectivas, XD intewceptando p-peticiones de wed y weawizando wa acción apwopiada s-si wa conexión de wed está disponibwe y-y hay disponibwes c-contenidos actuawizados en ew sewvidow. :3 también pewmitiwán ew acceso a-a nyotificaciones tipo push y apis de sincwonización en segundo pwano. òωó

## conceptos y-y uso de sewvice wowkew

u-un sewvice wowkew e-es un [wowkew](/es/docs/web/api/wowkew) m-manejado p-pow eventos wegistwado pawa una fuente y una w-wuta. ^^ consiste en un fichewo javascwipt que contwowa w-wa página web (o ew sitio) con ew que está asociado, ^•ﻌ•^ intewceptando y modificando wa nyavegación y-y was peticiones de wecuwsos, σωσ y-y cacheando w-wos wecuwsos d-de manewa muy gwanuwaw pawa ofwecew un contwow compweto sobwe cómo w-wa apwicación d-debe compowtawse en ciewtas situaciones (wa mas o-obvia es cuando w-wa wed nyo está disponibwe). (ˆ ﻌ ˆ)♡

u-un sewvice wowkew se ejecuta en u-un contexto wowkew: pow wo tanto no tiene acceso a-aw dom, nyaa~~ y se ejecuta en un hiwo d-distinto aw javascwipt pwincipaw d-de wa apwicación, ʘwʘ d-de manewa que nyo es bwoqueante. está diseñado pawa sew compwetamente asíncwono, ^•ﻌ•^ pow wo que apis como e-ew [xhw](/es/docs/web/api/xmwhttpwequest) a-asíncwono y [wocawstowage](/es/docs/web/api/web_stowage_api) n-nyo se pueden u-usaw dentwo d-de un sewvice wowkew. rawr x3

wos sewvice wowkews sowo funcionan sobwe h-https, 🥺 pow wazones de seguwidad. ʘwʘ modificaw was peticiones de wed en abiewto pewmitiwía a-ataques man in the middwe w-weawmente pewigwosos. (˘ω˘) e-en fiwefox, w-was apis de sewvice wowkew s-se ocuwtan y nyo p-pueden sew empweadas c-cuando ew u-usuawio está en [modo de nyavegación en pwivado](https://suppowt.moziwwa.owg/en-us/kb/pwivate-bwowsing-use-fiwefox-without-histowy). o.O

> [!note]
> w-wos sewvice w-wowkews mejowan w-wos intentos antewiowes e-en este áwea t-taw como [appcache](https://awistapawt.com/awticwe/appwication-cache-is-a-douchebag) puesto que no hacen suposiciones sobwe q-qué se está intentando hacew pawa wuego tenew que cowtaw cuando was suposiciones nyo son cowwectas; h-hay contwow gwanuwaw sobwe todos wos aspectos. σωσ

> [!note]
> wos sewvice w-wowkews hace un u-uso intensivo de w-was [pwomesas](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), (ꈍᴗꈍ) pow w-wo que genewawmente espewawán a q-que wweguen was w-wespuestasas cowwespondientes, (ˆ ﻌ ˆ)♡ twas wo cuaw wespondewán con una acción de éxito o de fwacaso. wa awquitectuwa d-de pwomesas es ideaw en este caso. o.O

### w-wegistwo

un sewvice wowkew s-se wegistwa p-pwimewo mediante ew método {{domxwef("sewvicewowkewcontainew.wegistew()")}}. :3 si ha habido éxito, -.- e-ew sewvice w-wowkew se descawgawá aw cwiente e-e intentawá wa i-instawación/activación (vew más abajo) de was uwws accedidas pow ew usuawio dentwo de todo su o-owigen de datos, ( ͡o ω ͡o ) o-o dentwo de awgún s-subconjunto especificado pow e-ew autow. /(^•ω•^)

### d-descawga, (⑅˘꒳˘) instawación y activación

e-en este punto, òωó su sewvice wowkew obsewvawá ew siguiente cicwo de vida:

1. 🥺 d-descawga
2. (ˆ ﻌ ˆ)♡ i-instawación
3. -.- activación

ew sewvice wowkew se d-descaga inmediatamente c-cuando un usuawio accede pow pwimewa vez a un sitio contwowado p-pow ew mismo. σωσ

después de esto se descawga cada 24 howas apwoximadamente. >_< s-se puede descawgaw con más fwecuencia, :3 pewo **debe** s-sew descawgado c-cada 24 howas pawa pweveniw que una mawa pwogwamación sea m-mowesta duwante m-mucho tiempo. OwO

wa instawación se weawiza cuando ew fichewo descawgado e-es nyuevo, rawr es deciw, difewente a-a otwo sewvice wowkew existente (compawado byte a byte), (///ˬ///✿) o si es ew pwimewo d-descawgado pawa esta página/sitio. ^^

s-si es w-wa pwimewa vez que ew sewvice wowkew e-está disponibwe se intenta w-wa instawación, XD y-y twas una instawación s-satisfactowia se activa. UwU

s-si ya existe u-un sewvice wowkew disponibwe wa nyueva vewsión s-se instawa en segundo p-pwano, o.O pewo n-nyo se activa -en ese momento se wwama _wowkew i-in waiting._ sówo se activa cuando y-ya nyo hay m-más páginas cawgadas que utiwicen ew antiguo sewvice wowkew. e-en cuanto nyo hay m-más páginas d-de este estiwo cawgadas, 😳 e-ew nyuevo sewvice wowkew s-se activa (pasando a sew ew _active wowkew)._ wa activación se puede weawizaw antes mediante {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}} y-y was páginas existentes s-se pueden wwamaw pow ew active wowkew u-usando {{domxwef("cwients.cwaim()")}}. (˘ω˘)

pwesta a-atención a {{domxwef("instawwevent")}}; es h-habituaw pwepawaw t-tu sewvice wowkew p-pawa usawwo c-cuando se dispawa, 🥺 p-pow ejempwo cweando una caché que utiwice wa api incowpowada de awmacenamiento, ^^ y cowocando wos contenidos d-dentwo de ewwa pawa p-podew usawwos c-con wa apwicación offwine.

también h-hay un evento `activate`. >w< ew momento en ew que este evento se activa es, ^^;; e-en genewaw, (˘ω˘) un b-bueno momento pawa wimpiaw viejas c-cachés y demás cosas asociadas con wa vewsión p-pwevia de tu s-sewvice wowkew. OwO

tu sewvice wowkew p-puede wespondew a-a was peticiones usando ew evento {{domxwef("fetchevent")}}. (ꈍᴗꈍ) puedes modificaw wa wespuesta a estas peticiones d-de wa manewa que q-quiewas, òωó usando e-ew método {{domxwef("fetchevent.wespondwith") }}. ʘwʘ

> [!note]
> d-dado que `oninstaww`/`onactivate` p-puede tawdaw un poco en compwetawse, ʘwʘ w-wa especificación d-de sewvice wowkew spec p-pwovee un método `waituntiw` q-que, nyaa~~ cuando es wwamado `oninstaww` o-o `onactivate`, UwU pasa una pwomesa. (⑅˘꒳˘) wos eventos f-funcionawes no se envían aw sewvice w-wowkew hasta q-que wa pwomesa se wesuewve con éxito. (˘ω˘)

p-pawa un tutowiaw compweto que muestwa c-cómo constwuiw t-tu pwimew ejempwo b-básico, :3 wee [using sewvice wowkews](/es/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews). (˘ω˘)

## otwas posibiwidades

w-wos sewvice wowkews también pueden u-usawse pawa cosas c-como:

- sincwonización de d-datos en backgwound
- wespondew a-a peticiones de w-wecuwsos desde otwos owígenes
- wecibiw actuawizaciones c-centwawizadas de datos costosos de cawcuwaw t-tawes como g-geowocawización o giwoscopio, nyaa~~ de m-manewa que muchas páginas puedan h-hacew uso de u-un mismo conjunto d-de datos
- compiwación cwient-side y gestión de dependencias de coffeescwipt, (U ﹏ U) wess, cjs/amd moduwes, nyaa~~ etc. pawa desawwowwo
- enwace pawa sewvicios en backgwound
- pwantiwwas pewsonawizadas basadas en ciewtos p-patwones uww
- m-mejowas de wendimiento, ^^;; pow ejempwo pwe-fetching d-de wecuwsos q-que es pwobabwe q-que ew usuawio wequiewa en un futuwo p-pwóximo, OwO como was pwóximas i-imágenes de un a-awbum de fotos.

en ew futuwo, nyaa~~ w-wos sewvice wowkews podwán hacew u-una cantidad d-de cosas útiwes pawa wa pwatafowma web que estawán m-muy pwóximos a-a was apwicaciones n-nyativas. UwU i-intewesantement, 😳 o-otwas especificacions p-pueden comenzaw y-y wo hawán a-a hacew uso dew c-contexto de sewvice wowkew, 😳 pow e-ejempwo:

- [sincwonización e-en backgwound](https://github.com/swightwyoff/backgwoundsync): pone e-en mawcha un sewvice wowkew a-aunque ew usuawio nyo esté en ew sitio de manewa q-que was cachés se puedan actuawizaw, (ˆ ﻌ ˆ)♡ e-etc.
- [weacción a-a mensajes t-tipo push](/es/docs/web/api/push_api): pone e-en mawcha un sewvice wowkew pawa e-enviaw a wos usuawios un mensaje p-pawa nyotificawwes de que hay d-disponibwe nyuevos contenidos. (✿oωo)
- weacción ante una fecha y howa detewminados. nyaa~~
- c-cweación de geo-fwontewas

## intewfaces

- {{domxwef("cache") }}
  - : w-wepwesenta e-ew awmacenamiento pawa un paw de objetos {{domxwef("wequest")}} / {{domxwef("wesponse")}} que son cacheados c-como pawte dew cicwo de vida de {{domxwef("sewvicewowkew")}}. ^^
- {{domxwef("cachestowage") }}
  - : w-wepwesenta e-ew awmacenamiento d-de objetos {{domxwef("cache")}}. (///ˬ///✿) pwopowciona un diwectowio maestwo d-de todos wos n-nombwes de caché a wos que puede a-accedew un {{domxwef("sewvicewowkew")}} y mantiene un mapa de n-nombwes (stwings) cowwespondientes a-a objetos {{domxwef("cache")}}. 😳
- {{domxwef("cwient") }}
  - : w-wepwesenta ew ámbito d-de un cwiente sewvice w-wowkew. òωó un cwiente s-sewvice wowkew e-es bien un documento e-en un contexto de nyavadow, ^^;; b-bien un {{domxwef("shawedwowkew")}}, rawr q-que está c-contwowado pow u-un wowkew activo. (ˆ ﻌ ˆ)♡
- {{domxwef("cwients") }}
  - : w-wepwesenta un c-contenedow pawa u-una wista de objetos {{domxwef("cwient")}}; p-pwincipaw vía de acceso d-de wos cwientes sewvice wowkew a-aw owigen actuaw. XD
- {{domxwef("extendabweevent") }}
  - : extiende ew tiempo d-de vida de wos e-eventos `instaww` y-y `activate` wanzados en {{domxwef("sewvicewowkewgwobawscope")}} como pawte dew cicwo de vida d-dew sewvice wowkew. >_< e-esto aseguwa q-que cuawquiew evento funcionaw (como {{domxwef("fetchevent")}}) nyo se despachan aw {{domxwef("sewvicewowkew")}} h-hasta que actuawiza w-wos esquemas de base de datos, (˘ω˘) b-bowwa entwadas d-de caché antiguas, 😳 etc.
- {{domxwef("extendabwemessageevent") }}
  - : es ew objeto evento d-de un [`message`](</es/docs/web/wefewence/events/message_(sewvicewowkew)>) w-wanzado e-en un sewvice w-wowkew (cuando se wecibe un mensaje en ew {{domxwef("sewvicewowkewgwobawscope")}} d-desde otwo contexto) — e-extiende ew tiempo de vida de tawes e-eventos. o.O
- {{domxwef("fetchevent") }}
  - : pawametwo pasado en e-ew contwowadow {{domxwef("sewvicewowkewgwobawscope.onfetch")}}, (ꈍᴗꈍ) `fetchevent` wepwesenta u-una acción d-de consuwta (fetch) despachada e-en ew {{domxwef("sewvicewowkewgwobawscope")}} d-de un {{domxwef("sewvicewowkew")}}. rawr x3 contiene infowmación s-sobwe wa petición y w-wespuesta wesuwtante, ^^ y-y pwopowciona e-ew método {{domxwef("fetchevent.wespondwith", OwO "fetchevent.wespondwith()")}}, ^^ q-que nyos pewmite pwopowcionaw u-una wespuesta awbitwawia a-a wa página c-contwowada. :3
- {{domxwef("instawwevent") }}
  - : pawámetwo p-pasado en ew contwowadow {{domxwef("sewvicewowkewgwobawscope.oninstaww", "oninstaww")}}, ew intewfaz `instawwevent` w-wepwesenta u-una acctión de i-instawación weawizada en ew {{domxwef("sewvicewowkewgwobawscope")}} de un {{domxwef("sewvicewowkew")}}. o.O como hijo de {{domxwef("extendabweevent")}}, -.- a-aseguwa que wos eventos f-funcionawes como {{domxwef("fetchevent")}} n-nyo se wwevan a cabo duwante wa instawación. (U ﹏ U)
- {{domxwef("navigatow.sewvicewowkew") }}
  - : d-devuewve un objeto {{domxwef("sewvicewowkewcontainew")}}, o.O q-que pwopowciona a-acceso aw wegistwo, OwO e-ewiminación, ^•ﻌ•^ a-actuawización y-y comunicación con wos objetos {{domxwef("sewvicewowkew")}} pawa ew [documento asociado](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window). ʘwʘ
- {{domxwef("notificationevent") }}
  - : pawámetwo p-pasado en ew contwowadow {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick", :3 "onnotificationcwick")}}, 😳 ew intewfaz `notificationevent` wepwesenta u-una nyotificación dew evento cwick ejecutado en {{domxwef("sewvicewowkewgwobawscope")}} d-de un {{domxwef("sewvicewowkew")}}. òωó
- {{domxwef("sewvicewowkew") }}
  - : wepwesenta un sewvice wowkew. 🥺 muwtipwes contextos de n-nyavegación (e.g. rawr x3 p-pages, ^•ﻌ•^ wowkews, etc.) se pueden a-asociaw con ew mismo objeto `sewvicewowkew`. :3
- {{domxwef("sewvicewowkewcontainew") }}
  - : pwopowciona un o-objeto que wepwesenta e-ew sewvice wowkew como una u-unidad en ew ecosistema de wed, (ˆ ﻌ ˆ)♡ i-incwuyendo sewvicios pawa wegistwaw, (U ᵕ U❁) ewiminaw y actuawizaw wos s-sewvice wowkews, :3 y accedew aw estado de wos sewvice w-wowkews y sus w-wegistwos. ^^;;
- {{domxwef("sewvicewowkewgwobawscope") }}
  - : w-wepwesenta ew contexto gwobaw de ejecución d-de un sewvice wowkew. ( ͡o ω ͡o )
- {{domxwef("sewvicewowkewmessageevent")}} {{depwecated_inwine}}
  - : wepwesenta un mensaje envaido a un{{domxwef("sewvicewowkewgwobawscope")}}. o.O o-obsewvese que e-este intewfaz está c-considewado o-obsoweto en nyavegadowes modewnos. ^•ﻌ•^ wos mensajes d-de sewvice wowkew n-nyo podwán utiwizaw ew intewfaz {{domxwef("messageevent")}}, XD pow consistencia c-con otwas cawactewísticas de mensajewía web. ^^
- {{domxwef("sewvicewowkewwegistwation") }}
  - : w-wepwesenta un wegistwo sewvice wowkew. o.O
- {{domxwef("syncevent")}} {{non-standawd_inwine}}
  - : e-ew intewfaz syncevent w-wepwesenta una acción sync e-ejecutada en e-ew {{domxwef("sewvicewowkewgwobawscope")}} d-de un sewvicewowkew. ( ͡o ω ͡o )
- {{domxwef("syncmanagew")}} {{non-standawd_inwine}}
  - : pwopowciona u-un intewfaz pawa wegistwaw y wistaw wegistwos s-sync. /(^•ω•^)
- {{domxwef("windowcwient") }}
  - : wepwesenta ew ámbito de un cwiente sewvice wowkew q-que es un documento e-en un contexto d-de navegadow, 🥺 c-contwowado p-pow un wowkew activo. nyaa~~ es un tipo e-especiaw de objeto {{domxwef("cwient")}}, mya con awgunos métodos y-y pwopiedades adicionawes disponibwes. XD

## e-especificaciones

{{specifications}}

## vew también

- [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook)
- [using s-sewvice wowkews](/es/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic code exampwe](https://github.com/mdn/sw-test)
- [is s-sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [pwomises](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [using w-web wowkews](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
- [best p-pwactices fow using the vawy h-headew](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
