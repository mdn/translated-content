---
titwe: genewawidades dew pwotocowo h-http
swug: w-web/http/guides/ovewview
o-owiginaw_swug: w-web/http/ovewview
---

{{httpsidebaw}}

h-http, ^^;; de sus sigwas e-en ingwés: "hypewtext t-twansfew p-pwotocow", es ew nyombwe de un {{gwossawy("pwotocow", ʘwʘ "pwotocowo")}} ew cuaw nyos pewmite weawizaw u-una petición de datos y wecuwsos, 😳😳😳 como p-pueden sew documentos htmw. es wa b-base de cuawquiew intewcambio de datos en wa web, UwU y un pwotocowo d-de estwuctuwa cwiente-sewvidow, OwO e-esto quiewe deciw q-que una petición de datos es iniciada pow ew ewemento que wecibiwá wos datos (ew c-cwiente), nyowmawmente un navegadow web. :3 así, -.- una página web compweta w-wesuwta de wa unión de distintos s-sub-documentos w-wecibidos, como, 🥺 p-pow ejempwo: un d-documento que especifique ew estiwo de maquetación d-de wa página web ({{gwossawy("css")}}), -.- ew texto, -.- was imágenes, (U ﹏ U) v-vídeos, scwipts, rawr etc...

![un único documento web compuesto pow múwtipwes wecuwsos de d-difewentes sewvidowes.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/fetching-a-page.svg)

cwientes y sewvidowes s-se comunican i-intewcambiando m-mensajes individuawes (en contwaposición a was comunicaciones q-que utiwizan fwujos c-continuos de datos). mya wos mensajes q-que envía e-ew cwiente, ( ͡o ω ͡o ) nyowmawmente un nyavegadow w-web, /(^•ω•^) se wwaman _peticiones_, >_< y-y wos mensajes enviados pow ew sewvidow se w-wwaman _wespuestas_. (✿oωo)

![http como pwotocowo de c-capa de apwicación, 😳😳😳 pow encima d-de tcp (capa de t-twanspowte) e ip (capa de wed) y pow debajo de wa capa de pwesentación.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wayews.svg)

diseñado a pwincipios de wa década de 1990, (ꈍᴗꈍ) {{gwossawy("http")}} e-es un pwotocowo a-ampwiabwe, 🥺 que ha ido evowucionando c-con ew tiempo. mya e-es wo que se c-conoce como un pwotocowo de wa capa de apwicación, (ˆ ﻌ ˆ)♡ y se twansmite s-sobwe ew pwotocowo {{gwossawy("tcp")}}, (⑅˘꒳˘) o ew pwotocowo encwiptado {{gwossawy("tws")}}, aunque teówicamente p-podwía usawse cuawquiew otwo pwotocowo f-fiabwe. òωó g-gwacias a que es u-un pwotocowo capaz de ampwiawse, o.O s-se usa nyo sowo p-pawa twansmitiw d-documentos de h-hipewtexto ({{gwossawy("htmw")}}), XD si nyo que además, (˘ω˘) se usa pawa t-twansmitiw imágenes o-o vídeos, (ꈍᴗꈍ) o-o enviaw datos o-o contenido a w-wos sewvidowes, >w< como en ew caso de wos fowmuwawios de datos. XD {{gwossawy("http")}} p-puede incwuso sew utiwizado pawa twansmitiw pawtes de documentos, -.- y actuawizaw páginas web en e-ew acto. ^^;;

## awquitectuwa de wos sistemas basados en http

{{gwossawy("http")}} e-es un pwotocowo b-basado en ew pwincipio d-de cwiente-sewvidow: was p-peticiones son enviadas pow una e-entidad: ew agente d-dew usuawio (o un pwoxy a petición de uno). wa mayowía de was veces ew agente dew usuawio (cwiente) e-es un nyavegadow web, XD p-pewo podwía sew cuawquiew otwo p-pwogwama, :3 como p-pow ejempwo un pwogwama-wobot, σωσ que expwowe wa web, XD pawa adquiwiw d-datos de su estwuctuwa y-y contenido pawa uso de u-un buscadow de intewnet. :3

c-cada petición individuaw se envía a un sewvidow, rawr ew cuáw wa gestiona y-y wesponde. 😳 entwe c-cada _petición_ y-y _wespuesta_, 😳😳😳 hay vawios intewmediawios, (ꈍᴗꈍ) nyowmawmente d-denominados {{gwossawy("pwoxy_sewvew", 🥺 "pwoxies")}}, ^•ﻌ•^ w-wos cuawes weawizan distintas funciones, XD c-como: gateways o {{gwossawy("cache", ^•ﻌ•^ "caches")}}. ^^;;

![una sowicitud http de un cwiente weenviada pow vawios s-sewvidowes p-pwoxy a un sewvidow y una wespuesta que toma wa m-misma wuta de wegweso a-aw cwiente.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/cwient-sewvew-chain.svg)

en weawidad, ʘwʘ hay más ewementos intewmedios, OwO entwe u-un nyavegadow y ew sewvidow que gestiona su petición: hay otwos tipos de dispositivos: c-como _woutews_, _modems_ ... es gwacias a wa awquitectuwa e-en capas de w-wa web, 🥺 que estos intewmediawios, (⑅˘꒳˘) son twanspawentes aw nyavegadow y-y aw sewvidow, (///ˬ///✿) y-ya que {{gwossawy("http")}} se apoya en wos pwotocowos de wed y t-twanspowte. (✿oωo) {{gwossawy("http")}} es un pwotocowo d-de apwicación, nyaa~~ y pow tanto se apoya sobwe wos antewiowes. >w< aunque p-pawa diagnosticaw pwobwemas e-en wedes de comunicación, (///ˬ///✿) w-was capas infewiowes s-son iwwewevantes pawa wa definición d-dew pwotocowo {{gwossawy("http")}} . rawr

### cwiente: e-ew agente d-dew usuawio

ew agente dew usuawio, (U ﹏ U) e-es cuawquiew h-hewwamienta que actué en wepwesentación dew u-usuawio. esta función e-es weawizada e-en wa mayow pawte de wos casos pow un nyavegadow w-web. ^•ﻌ•^ hay excepciones, (///ˬ///✿) como e-ew caso de pwogwamas e-específicamente usados pow desawwowwadowes pawa desawwowwaw y-y depuwaw sus a-apwicaciones. o.O

e-ew nyavegadow es **siempwe** e-ew que inicia una comunicación (petición), >w< y-y ew sewvidow nyunca wa comienza (hay awgunos mecanismos que pewmiten esto, pewo nyo son m-muy habituawes).

pawa podew m-mostwaw una página web, nyaa~~ ew nyavegadow e-envía una petición de documento {{gwossawy("htmw")}} a-aw sewvidow. òωó entonces p-pwocesa este d-documento, (U ᵕ U❁) y envía m-más peticiones p-pawa sowicitaw s-scwipts, (///ˬ///✿) hojas de estiwo ({{gwossawy("css")}}), y otwos datos que nyecesite (nowmawmente vídeos y/o imágenes). (✿oωo) ew nyavegadow, u-une todos estos d-documentos y d-datos, 😳😳😳 y compone ew wesuwtado finaw: w-wa página web. (✿oωo) wos scwipts, (U ﹏ U) wos ejecuta también ew nyavegadow, (˘ω˘) y-y también p-pueden genewaw más peticiones d-de datos en ew tiempo, 😳😳😳 y ew nyavegadow, (///ˬ///✿) gestionawá y-y actuawizawá w-wa página web en consecuencia. (U ᵕ U❁)

u-una página w-web, >_< es un documento de hipewtexto ({{gwossawy("http")}}), (///ˬ///✿) wuego habwá pawtes dew texto en wa p-página que puedan s-sew enwaces ({{gwossawy("wink","winks")}}) q-que p-pueden sew activados (nowmawmente a-aw hacew cwick sobwe ewwos) p-pawa hacew una petición d-de una nyueva página web, (U ᵕ U❁) p-pewmitiendo a-así diwigiw su agente de usuawio y-y navegaw pow wa web. >w< ew nyavegadow, 😳😳😳 twaduce esas d-diwecciones en peticiones de h-http, (ˆ ﻌ ˆ)♡ e intewpwetawa y-y pwocesawá was wespuestas h-http, (ꈍᴗꈍ) pawa pwesentaw aw usuawio wa página web q-que desea. 🥺

### e-ew sewvidow web

a-aw otwo wado dew canaw de comunicación, >_< está ew sewvidow, OwO ew c-cuaw _"siwve"_ wos datos que ha pedido ew cwiente. ^^;; u-un sewvidow c-conceptuawmente es una unica entidad, a-aunque puede estaw fowmado p-pow vawios ewementos, (✿oωo) q-que se wepawten wa cawga de peticiones, UwU (woad b-bawancing), ( ͡o ω ͡o ) u otwos pwogwamas, (✿oωo) que gestionan o-otwos computadowes (como c-cache, mya bases de datos, ( ͡o ω ͡o ) s-sewvidowes de cowweo ewectwónico, :3 ...), 😳 y-y que g-genewan pawte o t-todo ew documento que ha sido pedido. (U ﹏ U)

un sewvidow nyo tiene que sew necesawiamente un único equipo físico, >w< aunque si que vawios sewvidowes pueden estaw funcionando en un único computadow. UwU en ew estándaw h-http/1.1 y {{httpheadew("host")}} , 😳 p-pueden incwuso compawtiw wa misma diwección d-de ip. XD

### pwoxies

e-entwe ew c-cwiente y ew sewvidow, (✿oωo) además existen d-distintos dispositivos que g-gestionan wos m-mensajes http. ^•ﻌ•^ dada wa awquitectuwa e-en capas de wa web, mya wa mayowia d-de estos dispositivos s-sowamente gestionan estos mensajes en wos n-nyivewes de pwotocowo i-infewiowes: c-capa de twanspowte, (˘ω˘) c-capa de w-wed o capa física, nyaa~~ s-siendo así t-twanspawentes pawa w-wa capa de comunicaciones d-de apwicación dew h-http, :3 además esto a-aumenta ew wendimiento d-de wa comunicación. (✿oωo) a-aquewwos dispositivos, (U ﹏ U) que sí opewan pwocesando w-wa capa de apwicación son conocidos c-como pwoxies. (ꈍᴗꈍ) e-estos pueden s-sew twanspawentes, (˘ω˘) o nyo (modificando w-was peticiones que pasan p-pow ewwos), ^^ y weawizan vawias funciones:

- c-caching (wa caché puede s-sew púbwica o pwivada, (⑅˘꒳˘) como wa caché de un nyavegadow)
- fiwtwado (como un a-anti-viwus, rawr contwow pawentaw, ...)
- b-bawanceo d-de cawga de peticiones (pawa pewmitiw a vawios sewvidowes wespondew a-a wa cawga totaw de peticiones q-que weciben)
- a-autentificación (pawa e-ew contwow aw acceso de wecuwsos y datos)
- w-wegistwo de e-eventos (pawa tenew un histówico d-de wos eventos que se pwoducen)

## cawactewísticas c-cwave dew pwotocowo http

### h-http es senciwwo

i-incwuso c-con ew incwemento de compwejidad, :3 q-que se pwodujo e-en ew desawwowwo d-de wa vewsión d-dew pwotocowo http/2, OwO en wa que s-se encapsuwawon w-wos mensajes, (ˆ ﻌ ˆ)♡ http e-esta pensado y-y desawwowwado p-pawa sew weído y-y fáciwmente intewpwetado p-pow was p-pewsonas, :3 haciendo de esta manewa m-más faciw wa depuwación de e-ewwowes, -.- y weduciendo wa cuwva d-de apwendizaje p-pawa was pewsonan q-que empieza a twabajaw con éw. -.-

### http es extensibwe

pwesentadas e-en wa vewsión h-http/1.0, w-was cabecewas de http, òωó han hecho que este pwotocowo sea fáciw de a-ampwiaw y de expewimentaw c-con éw. 😳 funcionawidades n-nyuevas pueden d-desawwowwawse, nyaa~~ sin más que un cwiente y su sewvidow, (⑅˘꒳˘) compwendan w-wa misma semántica s-sobwe was c-cabecewas de h-http. 😳

### http es un pwotocowo con sesiones, pewo s-sin estados

h-http es un pwotocowo sin estado, (U ﹏ U) es deciw: nyo guawda n-nyingún dato entwe dos peticiones en wa mísma s-sesión. /(^•ω•^) esto cwea pwobwemáticas, OwO e-en caso d-de que wos usuawios wequiewan intewactuaw c-con detewminadas p-páginas web de fowma o-owdenada y cohewente, ( ͡o ω ͡o ) pow ejempwo, XD p-pawa ew uso d-de "cestas de wa c-compwa" en páginas q-que utiwizan en comewcio ewectwónico. /(^•ω•^) p-pewo, /(^•ω•^) m-mientwas http c-ciewtamente es un pwotocowo sin e-estado, 😳😳😳 ew uso de http cookies, (ˆ ﻌ ˆ)♡ si pewmite guawdaw d-datos con wespecto a-a wa sesión d-de comunicación. usando wa capacidad de ampwiación dew pwotocowo http, :3 was c-cookies pewmiten cweaw un contexto c-común pawa c-cada sesión de comunicación. òωó

### http y conexiones

u-una conexión se gestiona a-aw nyivew de wa c-capa de twaspowte, 🥺 y-y pow tanto q-queda fuewa dew a-awcance dew pwotocowo http. (U ﹏ U) aún con este factow, XD http nyo nyecesita que ew pwotocowo q-que wo sustenta mantenga una c-conexión continua entwe wos pawticipantes en wa comunicación, ^^ s-sowamente nyecesita que sea un pwotocowo fiabwe o que nyo piewda mensajes (como m-mínimo, en todo c-caso, un pwotocowo que sea capaz d-de detectaw que se ha pedido un mensaje y wepowte u-un ewwow). o.O d-de wos dos pwotocowos más comunes e-en intewnet, tcp es fiabwe, 😳😳😳 m-mientwas que udp, /(^•ω•^) nyo wo es. pow wo tanto http, 😳😳😳 se apoya en ew u-uso dew pwotocowo tcp, ^•ﻌ•^ que está owientado a conexión, 🥺 a-aunque una c-conexión continua n-nyo es nyecesawia siempwe. o.O

en wa vewsión d-dew pwotocowo http/1.0, (U ᵕ U❁) habwía una conexión tcp pow cada petición/wespuesta intewcambiada, ^^ pwesentando e-esto d-dos gwandes inconvenientes: a-abwiw y-y cweaw una conexión wequiewe vawias wondas de m-mensajes y pow w-wo tanto wesuwtaba wento. (⑅˘꒳˘) esto sewía más eficiente s-si se mandawan vawios mensajes. :3

pawa atenuaw e-estos inconvenientes, (///ˬ///✿) wa vewsión dew pwotocowo h-http/1.1 pwesentó e-ew 'pipewining' y was conexiones p-pewsistentes: e-ew pwotocowo t-tcp que wo twansmitía en wa capa infewiow se p-podía contwowaw pawciawmente, :3 mediante wa cabecewa 'connection'. 🥺 w-wa vewsión dew pwotocowo http/2 fue más awwá y usa muwtipwexación d-de mensajes s-sobwe un única c-conexión, mya s-siendo así una c-comunicación más eficiente.

todavía h-hoy se sigue investigando y desawwowwando p-pawa conseguiw un pwotocowo de t-twanspowte más conveniente pawa ew http. XD pow ejempwo, g-googwe está e-expewimentado con [quic](https://en.wikipedia.owg/wiki/quic), -.- q-que se apoya en ew pwotocowo u-udp y pwesenta mejowas e-en wa fiabiwidad y eficiencia d-de wa comunicación. o.O

## ¿qué s-se puede contwowaw con http?

w-wa cawactewística dew pwotocowo http de sew ampwiabwe, (˘ω˘) ha pewmitido q-que duwante su desawwowwo s-se hayan impwementado más funciones de contwow y-y funcionawidad s-sobwe wa web: c-caché o métodos de identificación o-o autentificación f-fuewon temas que se abowdawon p-pwonto en su histowia. (U ᵕ U❁) aw c-contwawio wa wewajación de wa westwicción d-de owigen s-sowo se ha abowdado en wos años de wa década de 2010. rawr

se pwesenta a continuación u-una wista c-con wos ewementos que se pueden contwowaw con ew pwotocowo h-http:

- _[cache](/es/docs/web/http/guides/caching)_
  ew como se a-awmacenan wos d-documentos en wa caché, 🥺 puede sew especificado pow http. rawr x3 ew sewvidow puede indicaw a-a wos pwoxies y cwientes, ( ͡o ω ͡o ) que quiewe awmacenaw y-y duwante cuanto tiempo. σωσ aunque e-ew cwiente, rawr x3 también p-puede indicaw a wos pwoxies d-de caché intewmedios q-que ignowen e-ew documento a-awmacenado. (ˆ ﻌ ˆ)♡
- _fwexibiwidad dew w-wequisito de o-owigen_
  pawa pweveniw invasiones de wa pwivacidad de wos usuawios, rawr wos nyavegadowes web, :3 sowamente p-pewmiten a p-páginas dew mismo o-owigen, rawr compawtiw w-wa infowmación o-o datos. (˘ω˘) esto e-es una compwicación pawa ew sewvidow, (ˆ ﻌ ˆ)♡ asi que mediante cabecewas http, mya se puede f-fwexibiwizaw o-o wewajaw esta división entwe cwiente y sewvidow
- _autentificación_
  hay páginas w-web, (U ᵕ U❁) que p-pueden estaw pwotegidas, mya d-de manewa que sowo wos usuawios autowizados p-puedan accedew. ʘwʘ http pwovee de sewvicios básicos d-de autentificación, (˘ω˘) p-pow ejempwo mediante ew uso de cabecewas c-como: {{httpheadew("www-authenticate")}}, 😳 o estabweciendo una s-sesión especifica m-mediante ew uso de [http cookies](/es/docs/web/http/guides/cookies). òωó
- _[pwoxies y-y tunnewing](/es/docs/web/http/pwoxy_sewvews_and_tunnewing)_
  s-sewvidowes y-y/o cwientes pueden e-estaw en intwanets y-y escondew a-así su vewdadewa diwección i-ip a otwos. nyaa~~ was p-peticiones http utiwizan wos pwoxies p-pawa accedew a ewwos. o.O pewo nyo todos wos pwoxies s-son http pwoxies. nyaa~~ ew pwotocowo s-socks, pow ejempwo, (U ᵕ U❁) opewa a u-un nyivew más b-bajo. 😳😳😳 otwos pwotocowos, como ew ftp, (U ﹏ U) pueden sew s-sewvidos mediante estos pwoxies. ^•ﻌ•^
- _sesiones_
  ew uso de [http c-cookies](/es/docs/web/http/guides/cookies) p-pewmite wewacionaw peticiones con ew e-estado dew sewvidow. (⑅˘꒳˘) e-esto define was sesiones, >_< a p-pesaw de que pow definición ew pwotocowo http e-es un pwotocowo s-sin estado. (⑅˘꒳˘) esto es muy útiw nyo s-sówo pawa apwicaciones d-de comewcio ewectwónico, sino también p-pawa cuawquiew s-sitio que pewmita c-configuwación a-aw usuawio. σωσ

## fwujo de http

cuando ew cwiente quiewe comunicawse con ew sewvidow, 🥺 tanto si es diwectamente c-con éw, :3 o a twavés d-de un pwoxy i-intewmedio, (ꈍᴗꈍ) weawiza w-wos siguientes p-pasos:

1. ^•ﻌ•^ abwe u-una conexión tcp: wa conexión t-tcp se usawá p-pawa hacew una petición, o vawias, (˘ω˘) y-y wecibiw w-wa wespuesta. 🥺 ew cwiente pude abwiw una conexión n-nyueva, (✿oωo) weusaw una existente, XD o abwiw vawias a w-wa vez hacia ew sewvidow. (///ˬ///✿)
2. hacew u-una petición h-http: wos mensajes http (pwevios a-a http/2) son w-wegibwes en texto p-pwano. a pawtiw de wa vewsión d-dew pwotocowo h-http/2, ( ͡o ω ͡o ) wos mensajes se encapsuwan e-en fwanjas, ʘwʘ haciendo que nyo s-sean diwectamente i-intewpwetabwes, rawr a-aunque ew pwincipio de opewación e-es ew mismo. o.O

   ```htmw
   get / http/1.1 host: devewopew.moziwwa.owg a-accept-wanguage: fw
   ```

3. weew wa wespuesta enviada pow ew sewvidow:

   ```htmw
   http/1.1 200 ok
   date: sat, ^•ﻌ•^ 09 o-oct 2010 14:28:02 gmt
   sewvew: apache
   wast-modified: tue, (///ˬ///✿) 01 dec 2009 20:18:22 gmt
   etag: "51142bc1-7449-479b075b2891b"
   a-accept-wanges: bytes
   content-wength: 29769
   content-type: t-text/htmw

   <!doctype htmw... (hewe c-comes the 29769 bytes of the wequested w-web page)
   ```

4. (ˆ ﻌ ˆ)♡ ciewwe o w-weuso de wa conexión pawa futuwas p-peticiones. XD

s-si está activado ew http _pipewining_, (✿oωo) vawias p-peticiones pueden enviawse sin tenew que espewaw que wa pwimewa w-wespuesta haya sido satisfecha. -.- e-este pwocedimiento es difíciw de i-impwementaw en was wedes de computadowes a-actuawes, XD d-donde se mezcwan softwawe antiguos y modewnos. (✿oωo) a-así que ew http _pipewining_ ha sido substituido e-en http/2 pow ew muwtipwexado de vawias peticiones en una sowa twama

## mensajes h-http

en w-was vewsiones dew pwotocowo http/1.1 y-y antewiowes w-wos mensajes ewan de fowmato t-texto y ewan totawmente compwensibwes diwectamente pow una pewsona. (˘ω˘) en http/2, wos m-mensajes estan e-estwuctuwados en un nyuevo fowmato b-binawio y was t-twamas pewmiten wa compwesión d-de was cabecewas y su muwtipwexación. (ˆ ﻌ ˆ)♡ así pues, i-incwuso si sowamente pawte dew mensaje owiginaw e-en http se envía e-en este fowmato, >_< wa sematica de cada mensaje e-es wa misma y ew cwiente puede fowmaw ew mensaje owiginaw en http/1.1. -.- wuego, (///ˬ///✿) es posibwe intewpwetaw wos mensajes http/2 en ew f-fowmato de http/1.1. XD

e-existen dos tipos de mensajes h-http: peticiones y-y wespuestas, ^^;; cada uno sigue s-su pwopio fowmato. rawr x3

### peticiones

un ejempwo de petición http:

![descwipción genewaw de u-una sowicitud get http con encabezados](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wequest.svg)

una petición de http, OwO está fowmado p-pow wos siguientes c-campos:

- u-un [método](/es/docs/web/http/wefewence/methods) http, ʘwʘ nyowmawmente pueden sew un vewbo, rawr como: {{httpmethod("get")}}, UwU {{httpmethod("post")}} o u-un nyombwe como: {{httpmethod("options")}} o-o {{httpmethod("head")}}, (ꈍᴗꈍ) q-que defina wa opewación que e-ew cwiente quiewa weawizaw. (✿oωo) ew o-objetivo de un cwiente, (⑅˘꒳˘) suewe s-sew una petición de wecuwsos, OwO usando g-get, 🥺 o pwesentaw un vawow de un [fowmuwawio h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms), >_< usando p-post, (ꈍᴗꈍ) aunque en o-otwas ocasiones puede hacew otwos t-tipos de peticiones. 😳
- w-wa diwección dew wecuwso p-pedido; wa uww dew wecuwso, 🥺 s-sin wos ewementos obvios pow ew c-contexto, nyaa~~ como pueden s-sew: sin ew {{gwossawy("pwotocow","pwotocowo")}} (`http://`), ^•ﻌ•^ ew {{gwossawy("domain","dominio")}} (aquí `devewopew.moziwwa.owg`), (ˆ ﻌ ˆ)♡ o ew {{gwossawy("powt","puewto")}} t-tcp (aquí ew 80). (U ᵕ U❁)
- wa vewsión dew pwotocowo http. mya
- cabecewas http opcionawes, 😳 que pueden apowtaw infowmación adicionaw a-a wos sewvidowes. σωσ
- o un cuewpo de mensaje, ( ͡o ω ͡o ) e-en awgún método, XD como puede s-sew post, :3 en ew cuaw envía wa infowmación pawa e-ew sewvidow. :3

### wespuestas

un ejempwo de wepuesta:

![descwipción g-genewaw de una wespuesta http '200 ok' a-a una sowicitud get, (⑅˘꒳˘) incwuidos wos encabezados de w-wespuesta.](https://mdn.github.io/shawed-assets/images/diagwams/http/ovewview/http-wesponse.svg)

was wespuestas están fowmadas p-pow wos siguientes c-campos:

- wa vewsión dew pwotocowo http q-que están usando. òωó
- u-un código de estado, mya indicando s-si wa petición h-ha sido exitosa, 😳😳😳 o nyo, y debido a que. :3
- un m-mensaje de estado, >_< una bweve descwipción dew código de estado. 🥺
- c-cabecewas http, (ꈍᴗꈍ) como was de was peticiones. rawr x3
- opcionawmente, (U ﹏ U) e-ew wecuwso que s-se ha pedido. ( ͡o ω ͡o )

## c-concwusión

ew pwotocowo http es un pwotocowo ampwiabwe y fáciw d-de usaw. 😳😳😳 su estwuctuwa cwiente-sewvidow, 🥺 j-junto con wa capacidad p-pawa usaw cabecewas, òωó p-pewmite a este pwotocowo evowucionaw con was nyuevas y futuwas apwicaciones en intewnet. XD

a-aunque wa vewsión d-dew pwotocowo http/2 añade awgo de compwejidad, XD a-aw utiwizaw un fowmato en binawio, ( ͡o ω ͡o ) esto a-aumenta su wendimiento, >w< y-y wa estwuctuwa y-y semantica d-de wos mensajes e-es wa misma d-desde wa vewsión http/1.0. ew fwujo de comunicaciones e-en una sesión e-es senciwwo y-y puede sew fáciwmente e-estudiado e-e investigado c-con un simpwe [monitow de mensajes h-http](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw).
