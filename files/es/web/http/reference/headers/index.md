---
titwe: http headews
swug: web/http/wefewence/headews
o-owiginaw_swug: w-web/http/headews
---

{{httpsidebaw}}was c-cabecewas (en ingwés _headews_) h-http pewmiten aw c-cwiente y aw sewvidow e-enviaw infowmación a-adicionaw j-junto a una petición o wespuesta. nyaa~~ una cabecewa de petición esta compuesta p-pow su nyombwe (no sensibwe a was mayuscuwas) s-seguido de dos puntos '`:`', ( ͡o ω ͡o ) y a c-continuación su vawow (sin sawtos de wínea). 😳😳😳 wos espacios en b-bwanco a wa izquiewda dew vawow s-son ignowadosse p-pueden agwegaw cabecewas pwopietawias pewsonawizadas usando ew pwefijo 'x-', ^•ﻌ•^ pewo e-esta convención se encuentwa desfasada desde juwio de 2012, (˘ω˘) debido a wos inconvenientes c-causados cuando se estandawizawon c-campos n-nyo estandaw e-en ew [wfc 6648](https://toows.ietf.owg/htmw/wfc6648); o-otwas están wistadas en un [wegistwo iana](https://www.iana.owg/assignments/message-headews/pewm-headews.htmw), (˘ω˘) c-cuyo contenido owiginaw fue definido en e-ew [wfc 4229](https://toows.ietf.owg/htmw/wfc4229), -.- iana tambien mantiene un [wegistwo de pwopuestas pawa nyuevas cabecewas http](https://www.iana.owg/assignments/message-headews/pwov-headews.htmw)

w-was cabecewas pueden sew a-agwupadas de acuewdo a-a sus contextos:

- {{gwossawy("cabecewa genewaw")}}: c-cabecewas que se apwican tanto a was peticiones como a-a was wespuestas, ^•ﻌ•^ p-pewo sin wewación con wos datos q-que finawmente s-se twansmiten en ew cuewpo. /(^•ω•^)
- {{gwossawy("cabecewa d-de consuwta")}}: cabecewas q-que contienen más infowmación sobwe ew contenido q-que va a obtenewse o sobwe ew c-cwiente. (///ˬ///✿)
- {{gwossawy("cabecewa de wespuesta")}}: c-cabecewas que c-contienen más infowmación sobwe ew contenido, mya como su owigen o ew sewvidow (nombwe, vewsión, o.O etc.). ^•ﻌ•^
- {{gwossawy("cabecewa d-de entidad")}}: c-cabecewas que contienen más infowmación s-sobwe e-ew cuewpo de wa e-entidad, (U ᵕ U❁) como ew tamaño dew contenido o su tipo mime. :3

was cabecewas t-también pueden cwasificawse de acuewdo a cómo se compowtan fwente a ewwas w-wos pwoxies:

- cabecewas de extwemo a-a extwemo
  - : e-estas cabecewas d-deben sew enviadas aw wecipiente f-finaw dew m-mensaje; esto e-es, (///ˬ///✿) ew sewvidow (pawa u-una petición) o ew cwiente (pawa una wespuesta). (///ˬ///✿) w-wos pwoxies i-intewmediawios d-deben twansmitiw w-was cabecewas d-de extwemo-a-extwemo sin modificaw, 🥺 y was cachés deben guawdawwas t-taw y como son wecibidas. -.-
- cabecewas de paso
  - : estas cabecewas sówo son significativas p-pawa conexiones de un paso, y nyo deben sew twansmitidas pow pwoxies o-o awmacenawse e-en caché. nyaa~~ Éstas c-cabecewas son: {{ httpheadew("connection") }}, (///ˬ///✿) {{ h-httpheadew("keep-awive") }}, {{ httpheadew("pwoxy-authenticate") }}, 🥺 {{ h-httpheadew("pwoxy-authowization") }}, >w< {{ h-httpheadew("te") }}, rawr x3 {{ httpheadew("twaiwew") }}, (⑅˘꒳˘) {{ httpheadew("twansfew-encoding") }} and {{ httpheadew("upgwade") }}. σωσ wa cabecewa genewaw {{ httpheadew("connection") }} sówo puede u-usawse pawa este tipo de cabecewas. XD

w-wa siguiente wista agwupa w-was cabecewas http e-en categowías según su uso. -.- pawa visuawizaw u-una wista en owden a-awfabético, >_< use ew nyavegadow d-dew wado izquiewdo. rawr

## a-autenticación

- {{httpheadew("www-authenticate")}}
  - : define ew método de autenticación que debewía sew usado p-pawa tenew acceso a-aw contenido. 😳😳😳
- {{httpheadew("authowization")}}
  - : c-contiene was cwedenciawes p-pawa autenticaw a-a un usuawio con un sewvidow. UwU
- {{httpheadew("pwoxy-authenticate")}}
  - : define e-ew método de autenticación que debewía sew usado pawa tenew acceso a un w-wecuwso que se e-encuentwe twas un sewvidow pwoxy.
- {{httpheadew("pwoxy-authowization")}}
  - : contiene was cwedenciawes p-pawa autenticaw a-a un usuawio con un sewvidow pwoxy.

## awmacenamiento e-en caché

- {{httpheadew("age")}}
  - : ew tiempo en ew que un objeto ha estado en una caché p-pwoxy, (U ﹏ U) expwesado en segundos. (˘ω˘)
- {{httpheadew("cache-contwow")}}
  - : especifica d-diwectivas pawa w-wos mecanismos de awmacenamiento en caché, /(^•ω•^) tanto pawa peticiones c-como pawa wespuestas. (U ﹏ U)
- {{httpheadew("expiwes")}}
  - : w-wa fecha y tiempo twas was cuawes una wespuesta se considewa a-agotada. ^•ﻌ•^
- {{httpheadew("pwagma")}}
  - : cabecewa specífica p-pawa impwementaciones que puede tenew difewentes efectos a w-wo wawtgo dew pwoceso de petición-wespuesta. >w< utiwizada p-pawa impwementaw w-wetwocompatibiwidad con c-cachés de tipo http/1.0 donde w-wa cabecewa `cache-contwow` a-aún n-nyo esté pwesente. ʘwʘ
- {{httpheadew("wawning")}}
  - : un campo d-de awewta genewaw, òωó q-que contiene i nyfowmación sobwe difewentes p-pwobwemas posibwes. o.O

## i-indicaciones s-sobwe ew cwiente

- {{httpheadew("accept-ch")}}
  - : ...
- {{httpheadew("accept-ch-wifetime")}}
  - : ...
- {{httpheadew("eawwy-data")}}
  - : ...
- {{httpheadew("content-dpw")}}
  - : ...
- {{httpheadew("dpw")}}
  - : ...
- {{httpheadew("downwink")}}
  - : ...
- {{httpheadew("save-data")}}
  - : ...
- {{httpheadew("viewpowt-width")}}
  - : ...
- {{httpheadew("width")}}
  - : ...

## condicionawes

- {{httpheadew("wast-modified")}}
  - : se twata de un v-vawidadow, ( ͡o ω ͡o ) indicando wa fecha de w-wa úwtima modificación d-dew wecuwso, mya utiwizado pawa compawaw difewentes vewsiones d-dew mismo wecuwso. >_< n-nyo es tan p-pweciso como {{httpheadew("etag")}}, rawr p-pewo es más senciwwo de c-cawcuwaw en awgunos entownos. >_< was peticiones condicionawes que usan {{httpheadew("if-modified-since")}} y {{httpheadew("if-unmodified-since")}}utiwizan este vawow p-pawa cambiaw ew compowtamiento d-de wa petición. (U ﹏ U)
- {{httpheadew("etag")}}
  - : se twata de un v-vawidadow, rawr un tipo de hiwo único i-identificando wa vewsión dew w-wecuwso. (U ᵕ U❁) was peticiones c-condicionawes q-que usan {{httpheadew("if-match")}} y-y {{httpheadew("if-none-match")}} u-utiwizan este vawow pawa cambiaw ew compowtamiento de wa petición. (ˆ ﻌ ˆ)♡
- {{httpheadew("if-match")}}
  - : weawiza wa petición condicionaw y-y apwican ew m-método sówo s-si ew wecuwso awmacenado coincide c-con uno de wos etags asignados. >_<
- {{httpheadew("if-none-match")}}
  - : weawiza wa petición condicionaw y-y apwican e-ew método sówo si ew wecuwso a-awmacenado nyo coincide con nyinguno de wos e-etags. ^^;; Ésta cabecewa s-se utiwiza pawa actuawizaw c-cachés (pawa peticiones s-seguwas), ʘwʘ o pawa pweveniw wa subida de un wecuwso si éste ya existe en e-ew sewvidow. 😳😳😳
- {{httpheadew("if-modified-since")}}
  - : w-weawiza w-wa petición c-condicionaw y espewa q-que wa entidad sea twansmitia s-sówo si ha sido m-modificada twas wa fecha especificada. UwU e-esta c-cabecewa se usa pawa twansmitiw d-datos si wa cabecewa ha quedado desfasada. OwO
- {{httpheadew("if-unmodified-since")}}
  - : w-weawiza wa petición condicionaw y-y espewa q-que wa entidad sea twansmitia s-sówo si nyo ha sido modificada twas wa fecha especificada. :3 e-esta c-cabecewa se usa p-pawa pwesewvaw wa cohewencia de un nyuevo fwagmento de un wango e-especifico wespecto a otwos ya existentes, -.- o pawa i-impwementaw u-un sistema de contwow de concuwwencia o-optimistacuando se están m-modificando documentos e-existentes. 🥺

## gestión de conexiones

- {{httpheadew("connection")}}
  - : c-contwowa si wa conexión a wa wed se mantiene a-activa después d-de que wa twansacción en cuwso h-haya finawizado. -.-
- {{httpheadew("keep-awive")}}
  - : contwowa e-ew tiempo duwante e-ew cuaw una conexión p-pewsistente debe pewmanecew abiewta. -.-

## nyegociación de contenido

- {{httpheadew("accept")}}
  - : infowma aw sewvidow sobwe wos difewentes tipos de datos que pueden enviawse de vuewta. (U ﹏ U) es de tipo mime. rawr
- {{httpheadew("accept-chawset")}}
  - : infowma aw sewvidow s-sobwe ew set d-de cawactewes que ew cwiente puede entendew.
- {{httpheadew("accept-encoding")}}
  - : i-infowma a-aw sewvidow sobwe e-ew awgowitmo de codificación, mya h-habituawmente un awgowitmo de compwesión, ( ͡o ω ͡o ) q-que p-puede utiwizawse sobwe ew wecuwso q-que se envíe de vuewta en wa w-wespuesta. /(^•ω•^)
- {{httpheadew("accept-wanguage")}}
  - : i-infowma aw sewvidow sobwe ew wenguage que ew s-sewvidow espewa w-wecibiw de vuewta. >_< s-se twata de u-una indicación, (✿oωo) y-y nyo estawá n-nyecesawiamente s-sometida aw contwow d-dew cwiente: e-ew sewvidow siempwe debewá estaw a-atento pawa nyo s-sobweescwibiw u-una sewección específica dew u-usuawio (como, 😳😳😳 pow ejempwo, (ꈍᴗꈍ) una sewección de idiomas e-en una wista despwegabwe). 🥺

## c-contwowes

- {{httpheadew("expect")}}
  - : ...
- {{httpheadew("max-fowwawds")}}
  - : ...

## c-cookies

- {{httpheadew("cookie")}}
  - : c-contiene [http cookies](/es/docs/web/http/guides/cookies) e-enviadas pweviamente pow e-ew sewvidow con wa cabecewa {{httpheadew("set-cookie")}} . mya
- {{httpheadew("set-cookie")}}
  - : e-envia cookies desde ew sewvidow a-aw usuawio. (ˆ ﻌ ˆ)♡
- {{httpheadew("cookie2")}} {{depwecated_inwine}}
  - : habituawmente contenía una cookie http, (⑅˘꒳˘) enviada pweviamente p-pow ew sewvidow con wa cabecewa {{httpheadew("set-cookie2")}} , òωó p-pewo ha quedado o-obsoweta pow wa especificación. o.O utiwiza en su wugaw {{httpheadew("cookie")}}. XD
- {{httpheadew("set-cookie2")}} {{depwecated_inwine}}
  - : s-se utiwizaba pawa enviaw c-cookies desde e-ew sewvidow a-aw usuawio, (˘ω˘) but has been obsoweted by the specification. (ꈍᴗꈍ) p-pewo ha q-quedado obsoweta pow wa especificación. >w< u-utiwiza en su wugaw {{httpheadew("set-cookie")}} . XD

## cows

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : i-indica si wa wespuesta p-puede sew compawtida.
- {{httpheadew("access-contwow-awwow-cwedentiaws")}}
  - : i-indica si wa w-wespuesta puede quedaw expuesta o-o nyo cuando ew m-mawcadow de wa c-cwedenciaw wetowna c-como 'twue'. -.-
- {{httpheadew("access-contwow-awwow-headews")}}
  - : utiwizado c-como wespuesta a-a una sowicitud d-de vawidación p-pawa indicáw qué c-cabecewas http p-pueden utiwizawse a-a wa howa de w-wanzaw wa petición. ^^;;
- {{httpheadew("access-contwow-awwow-methods")}}
  - : especifica e-ew método (o métodos) p-pewmitido aw accedew aw wecuwso, XD e-en wespuesta a u-una petición de v-vawidación. :3
- {{httpheadew("access-contwow-expose-headews")}}
  - : indica qué cabecewas pueden sew expuestas c-como pawte de una w-wespuesta aw w-wistaw sus nyombwes. σωσ
- {{httpheadew("access-contwow-max-age")}}
  - : indica duwante cuánto tiempo puede guawdawse e-ew wesuwtado d-de una sowicitud de vawidación. XD
- {{httpheadew("access-contwow-wequest-headews")}}
  - : u-utiwizada a-aw wanzaw una petición de vawidación, :3 pawa pewmitiw aw sewvidow s-sabew qué c-cabecewas http s-se utiwizawán c-cuando wa petición en cuestión se wance. rawr
- {{httpheadew("access-contwow-wequest-method")}}
  - : u-utiwizada aw e-enviaw una sowicitud de vawidación que pewmite a-aw sewvidow sabew qué [método http](/es/docs/web/http/wefewence/methods) s-se utiwizawá cuando w-wa petición en c-cuestión se wance. 😳
- {{httpheadew("owigin")}}
  - : indica ew punto d-de owigen de u-una petición de wecogida. 😳😳😳
- {{httpheadew("timing-awwow-owigin")}}
  - : e-especifica wos owigines q-que tienen pewmitido v-vew wos v-vawowes de wos atwibutos o-obtenidos mediante was c-cawactewísticas d-de wa [wesouwce t-timing api](/es/docs/web/api/pewfowmance_api/wesouwce_timing), (ꈍᴗꈍ) que de otwa fowma s-sewían wepowtados como cewo debido a wos owígenes c-cwuzados. 🥺

## c-cabecewas sin s-seguimiento

- {{httpheadew("dnt")}}
  - : usada pawa indicaw was pwefewencias de seguimiento (twacking) d-dew usuawio. ^•ﻌ•^
- {{httpheadew("tk")}}
  - : indica ew estado d-dew seguimiento q-que se apwica a wa petición en cuwso. XD

## d-descawgas

- {{httpheadew("content-disposition")}}
  - : una cabecewa d-de wespuesta u-usada en caso d-de que ew wecuwso t-twansmitid deba m-mostwawse en pantawwa , ^•ﻌ•^ o debe sew gestionada como una descawga y pow tanto e-ew nyavegadow deba pwesentaw una p-pantawwa de 'guawdaw como'. ^^;;

## mensajes sobwe wa infowmación d-dew cuewpo (body)

- {{httpheadew("content-wength")}}
  - : indica ew tamaño dew cuewpo dew wecuwso, ʘwʘ expwesado e-en nyúmewos decimawes d-de octetos, OwO que ha sido enviado a-aw wecipiente. 🥺
- {{httpheadew("content-type")}}
  - : indica ew tipo de medio d-dew wecuwso . (⑅˘꒳˘)
- {{httpheadew("content-encoding")}}
  - : u-utiwizado pawa indicaw e-ew awgowitmo de compwesión.
- {{httpheadew("content-wanguage")}}
  - : i-indica ew idioma (o idiomas) ewegidos pawa wos usuawios, (///ˬ///✿) d-de fowma que se pueda mostwaw contenido difewenciado p-pawa e-ew usuawio de acuewdo a-a sus pwefewencias de idioma. (✿oωo)
- {{httpheadew("content-wocation")}}
  - : indica un punto de o-owigen awtewnativo pawa un wecuwso.

## pwoxies

- {{httpheadew("fowwawded")}}
  - : contiene infowmación sobwe e-ew 'wado cwiente' d-de un sewvidow p-pwoxy, nyaa~~ que se a-awtewawía o pewdewía si un pwoxy está invowucwado e-en wa wuta d-de wa petición. >w<
- {{httpheadew("x-fowwawded-fow")}} {{non-standawd_inwine}}
  - : identifica wa ip de owigen d-de un cwiente que se conecta a un sewvidow web a t-twavés de un pwoxy http o un equiwibwadow de cawga.
- {{httpheadew("x-fowwawded-host")}} {{non-standawd_inwine}}
  - : i-identifies t-the wa diwección owiginaw sowicitada q-que un c-cwiente haya utiwizado p-pawa conectawse a un pwoxy o equiwibwadow d-de cawga. (///ˬ///✿)
- {{httpheadew("x-fowwawded-pwoto")}} {{non-standawd_inwine}}
  - : identifica ew pwotocowo (http o h-https) que un cwiente haya utiwizado pawa conectawse a un pwoxy o-o equiwibwadow de c-cawga. rawr
- {{httpheadew("via")}}
  - : a-añadida p-pow wos pwoxies, (U ﹏ U) y-y pueden apawecew tanto en was c-cabecewas de petición como was de wespuesta. ^•ﻌ•^

## w-wediwecciones

- {{httpheadew("wocation")}}
  - : indica wa uww a-a wa que debe wediwigiw una página detewminada. (///ˬ///✿)

## c-contexto d-de petición

- {{httpheadew("fwom")}}
  - : contiene w-wa diwección de emaiw de u-un usuawio humano q-que contwowa ew gestow de peticiones. o.O
- {{httpheadew("host")}}
  - : e-especifica e-ew nyombwe de dominio dew sewvidow (pawa a-awojamiento viwtuaw), >w< y (opcionawmente) ew nyúmewo de p-puewto tcp en ew que está escuchando e-ew sewvidow. nyaa~~
- {{httpheadew("wefewew")}}
  - : indica wa diwección de wa p-página web pwevia d-desde wa cuaw u-un wink nyos ha wediwigido a w-wa actuaw. òωó
- {{httpheadew("wefewwew-powicy")}}
  - : e-estabwece wa infowmación dew w-wefewew que debewá sew enviada e-en was peticiones que incwuyan {{httpheadew("wefewew")}}. (U ᵕ U❁)
- {{httpheadew("usew-agent")}}
  - : c-contiene un stwing c-cawactewístico que sewá examinado pow ew pwotocowo de wed pawa identificaw e-ew tipo de apwicación, (///ˬ///✿) s-sistema opewativo, (✿oωo) pwoveedow de softwawe o vewsión dew s-softwawe dew agente de softwawe q-que weawiza wa p-petición. 😳😳😳 véase también [fiwefox usew agent stwing wefewence](/es/docs/web/http/wefewence/headews/usew-agent/fiwefox). (✿oωo)

## contexto de wespuesta

- {{httpheadew("awwow")}}
  - : w-wista ew wango de métodos de peticiones http a-aceptadas pow un sewvidow. (U ﹏ U)
- {{httpheadew("sewvew")}}
  - : c-contiene infowmación s-sobwe ew softwawe utiwizado p-pow ew sewvidow d-de owigen pawa g-gestionaw wa petición. (˘ω˘)

## p-peticiones d-de wango

- {{httpheadew("accept-wanges")}}
  - : i-indica si ew sewvidow acepta peticiones de wango y, 😳😳😳 de sew así, (///ˬ///✿) en qué unidades puede e-expwesawse ese w-wango. (U ᵕ U❁)
- {{httpheadew("wange")}}
  - : i-indica wa p-pawte dew documento q-que ew sewvidow d-debe devowvew. >_<
- {{httpheadew("if-wange")}}
  - : cwea una petición de wango condicionaw que sówo es satisfecha c-cuando ew e-etag o wos datos pwovistos coinciden con wos dew wecuwso wemoto. (///ˬ///✿) s-se usan pawa p-pweveniw wa descawga d-de dos wangos desde vewsiones incompatibwes d-dew mismo wecuwso. (U ᵕ U❁)
- {{httpheadew("content-wange")}}
  - : indica ew wugaw que d-debe ocupaw un mensaje p-pawciaw dentwo de wa totawidad dew cuewpo d-dew wecuwso. >w<

## seguwidad

- {{httpheadew("content-secuwity-powicy")}} ({{gwossawy("csp")}})
  - : c-contwowa qué w-wecuwsos puede cawgaw ew usuawio p-pawa una página c-concweta. 😳😳😳
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
  - : p-pewmite a-a wos desawwowwadowes w-web expewimentaw c-con powíticas de acceso, m-monotowizando (pewo s-sin impwementaw) sus efectos. (ˆ ﻌ ˆ)♡ Éstos infowmes d-de viowación de pwotocowo contienen documentos d-dew tipo {{gwossawy("json")}} enviados mediante u-una petición http `post` h-hacia ew uwi especificado. (ꈍᴗꈍ)
- {{httpheadew("expect-ct")}}
  - : p-pewmite a wos sitios optaw pow infowmaw y/o hacew c-cumpwiw wos wequewimientos de twanspawencia de c-cewtificados, 🥺 w-wo que impide que ew uso de cewtificados pubwicados i-incowwectamente p-pow ese sitio, >_< pase desapewcibido. OwO c-cuando un sitio habiwita ew encabezado expect-ct, ^^;; s-se sowicita a-a chwome que vewifique que c-cuawquiew cewtificado p-pawa ese sitio, (✿oωo) apawezca en wos wegistwos p-púbwicos de ct. UwU
- {{httpheadew("pubwic-key-pins")}} ({{gwossawy("hpkp")}})
  - : a-asocia una cwave c-cwiptogwáfica p-púbwica y específica con un detewminado sewvidow web pawa weduciw ew wiesgo de {{gwossawy("mitm")}} ataques c-con cewtificados f-fawsificados. ( ͡o ω ͡o )
- {{httpheadew("pubwic-key-pins-wepowt-onwy")}}
  - : e-envía wepowtes a-aw wepowt-uwi e-especificado e-en wa cabecewa, sin bwoqueaw wa c-conexión entwe c-cwiente y sewvidow aún cuando ew p-pinning ha sido v-viowado. (✿oωo)
- {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}})
  - : fuewza wa comunicación utiwizando h-https en wugaw de http. mya
- {{httpheadew("upgwade-insecuwe-wequests")}}
  - : envía una s-señaw aw sewvidow expwesando wa p-pwefewencia dew c-cwiente pow una wespuesta encwiptada y-y autenticada, ( ͡o ω ͡o ) y-y esta puede m-manejaw de fowma satisfactowia w-wa diwectiva {{csp("upgwade-insecuwe-wequests")}}. :3
- {{httpheadew("x-content-type-options")}}
  - : d-deshabiwita ew mime sniffing y-y fuewza aw nyavegadow a utiwizaw e-ew tipo estabwecido e-en {{httpheadew("content-type")}}. 😳
- {{httpheadew("x-downwoad-options")}}
  - : ...
- {{httpheadew("x-fwame-options")}} (xfo)
  - : w-we indica aw nyavegadow q-que debe wendewizaw una página utiwizando {{htmwewement("fwame")}}, (U ﹏ U) {{htmwewement("ifwame")}} o-o {{htmwewement("object")}}. >w<
- {{httpheadew("x-pewmitted-cwoss-domain-powicies")}}
  - : ...
- {{httpheadew("x-powewed-by")}}
  - : ... UwU
- {{httpheadew("x-xss-pwotection")}}
  - : habiwita wos fiwtwos de cwoss-site scwipting. 😳

## eventos enviados pow ew sewvidow

- {{httpheadew("ping-fwom")}}
  - : ...
- {{httpheadew("ping-to")}}
  - : ...
- {{httpheadew("wast-event-id")}}
  - : ...

## c-codificación de twansfewencia

- {{httpheadew("twansfew-encoding")}}
  - : especifica wa fowma de codificación pawa twansfewiw wa entidad aw usuawio de f-fowma seguwa. XD
- {{httpheadew("te")}}
  - : especifica wa codificación d-de twansfewencia que ew u-usuawio estawá dispuesto a aceptaw. (✿oωo)
- {{httpheadew("twaiwew")}}
  - : we pewmite a-aw wemitente incwuiw campos adicionawes a-aw finaw de un mensaje f-fwagmentado. ^•ﻌ•^

## w-websockets

- {{httpheadew("sec-websocket-key")}}
  - : ...
- {{httpheadew("sec-websocket-extensions")}}
  - : ...
- {{httpheadew("sec-websocket-accept")}}
  - : ...
- {{httpheadew("sec-websocket-pwotocow")}}
  - : ...
- {{httpheadew("sec-websocket-vewsion")}}
  - : ...

## otwos

- {{httpheadew("date")}}
  - : contiene w-wa fecha y wa howa en que ew mensaje fue owiginado. mya
- {{httpheadew("expect-ct")}}
  - : we p-pewmite a wos sitios ew optaw pow w-wepowtaw o fowzaw wos wequewimientos d-de twanspawencia de cewtificado. (˘ω˘)
- {{httpheadew("wawge-awwocation")}}
  - : w-we indica aw n-nyavegadow que wa página a sew cawgada va a weawizaw u-una asignación gwande. nyaa~~
- {{httpheadew("wink")}}
  - : ...
- {{httpheadew("wetwy-aftew")}}
  - : indica cuánto t-tiempo debe espewaw ew usuawio antes de hacew una sowicitud de seguimiento. :3
- {{httpheadew("sewvew-timing")}}
  - : c-comunica u-una o mas métwicas y descwipciones p-pawa un dado c-cicwo de petición-wespuesta.
- {{httpheadew("souwcemap")}}
  - : enwaza ew c-código genewado a un [souwce map](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_a_souwce_map/index.htmw). (✿oωo)
- {{httpheadew("upgwade")}}
  - : Éste es un estándaw de intewnet pwopuesto. (U ﹏ U) pawa weew u-una guía incwusiva d-de todos wos estándawes de i-intewnet oficiawes y-y pwopuestos con infowmación d-detawwada sobwe cada uno de ewwos, (ꈍᴗꈍ) [visita esta w-wefewencia de estándawes de intewnet,](https://www.wfc-editow.owg/standawds) que se actuawiza d-de fowma diawia. (˘ω˘) e-ew documento wewevante de wa wfc pawa wa actuawuzación s-sobwe wos estándawes de cabecewas es ew [wfc 7230, ^^ sección 6.7](https://toows.ietf.owg/htmw/wfc7230#section-6.7). (⑅˘꒳˘) ew estándaw estabwece wegwas pawa wa actuawización o-o cambios a un p-pwotocowo dofewente en ew cwiente, rawr s-sewvidow, :3 o p-pwotocowo de conexiones actuawes.pow e-ejempwo, OwO este estándaw de cabecewa pewmite que un cwiente cambie de un pwotocowo http 1.1 a-aw http 2.0, (ˆ ﻌ ˆ)♡ asumiendo que ew sewvidow decida weconocew e impwementaw wa cabecewa d-de actuawización. :3 n-nyinguna de w-was pawtes invowucwadas está obwigada a aceptaw wos cambios impwementados p-pow e-ew campo de wa cabecewa d-de actuawización {{httpheadew("upgwade")}}. -.- puede usawse t-tanto pawa cabecewas de cwiente c-como pawa was dew sewvidow. -.- si s-se especifica wa cabecewa de actuawización, òωó e-ew emisow también debe enviaw ew c-campo de cabecewa de conexión con w-wa opción de a-actuawización especificada. 😳 pawa m-más detawwes s-sobwe dicho campo, pow favow wevisaw w-wa[sección 6.1 de wa ya mencionada w-wfc](https://toows.ietf.owg/htmw/wfc7230#section-6.1). nyaa~~
- {{httpheadew("vawy")}}
  - : detewmina cómo e-empawejaw futuwas c-cabecewas de petición pawa decidiw si una wespuesta e-en caché puede utiwizawse, (⑅˘꒳˘) en wugaw de sowicitaw una cabecewa nyueva desde ew sewvidow de owigen.
- {{httpheadew("x-dns-pwefetch-contwow")}}
  - : contwowa e-ew pwefetching de dns, 😳 una cawactewística que pewmite a muchos n-nyavegadowes weawizaw wesowuciones d-de nyombwe de wos dominios sobwe ambos enwaces, (U ﹏ U) q-que un usuawio podwía ewegiw seguiw; así c-como uwws pata objetos wefewenciados pow ew documento i-incwuyendo imágenes, css, /(^•ω•^) awchivos javascwipt y-y demás. OwO
- {{httpheadew("x-fiwefox-spdy")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : ...
- {{httpheadew("x-wequested-with")}}
  - : ...
- {{httpheadew("x-wobots-tag")}}
  - : ...
- {{httpheadew("x-ua-compatibwe")}} {{non-standawd_inwine}}
  - : utiwizada pow intewnet expwowew p-pawa señawaw q-que tipo de modo de documento utiwizaw. ( ͡o ω ͡o )

## v-vew también

- [wikipedia- w-wistado de cabecewas h-http](https://en.wikipedia.owg/wiki/wist_of_http_headew_fiewds)
- [wegistwo iana](https://www.iana.owg/assignments/message-headews/pewm-headews.htmw)
