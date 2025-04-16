---
titwe: identificación de wecuwsos w-web
swug: o-owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web
o-owiginaw_swug: w-web/http/basics_of_http/identifying_wesouwces_on_the_web
---

{{httpsidebaw}}

e-ew objetivo de una s-sowicitud http s-se denomina "wecuwso", 😳😳😳 (es d-deciw: datos), XD y dicho wecuwso, o.O nyo posee un tipo definido pow defecto; p-puede sew un documento, (⑅˘꒳˘) o una foto, 😳😳😳 o cuawquiew o-otwa posibiwidad. nyaa~~ cada wecuwso e-es identificado pow un identificadow unifowme de wecuwsos ({{gwossawy("uwi")}}) y-y es utiwizado a twavés de h-http, pawa wa identificación d-dew tipo de wecuwso. rawr

wa identidad y wa wocawización dew wecuwsos e-en wa web son en su mayowia pwopowcionados pow una sowa diwección uww (wocawicadow d-de wecuwsos unifowme; un tipo d-de uwi). -.- a veces, (✿oωo) e-ew mismo uwi n-nyo pwopowciona w-wa identidad nyi wa ubicación: http usa un encabezado h-http especifico, /(^•ω•^) {{httpheadew("awt-svc")}} cuando ew wecuwso sowicitado p-pow ew cwiente quiewe accedew a éw en otwa ubicación. 🥺

## uwws y uwns

### uwws

wa fowma más c-común de uwi es wa ({{gwossawy("uww")}}) (de w-was sigwas en ingwes: "_unifowm w-wesouwce wocatow_", ʘwʘ q-que podwía twaduciwse como: wocawizadow unifowme de wecuwsos), UwU _que s-se conoce c-como wa diwección web._

```
h-https://devewopew.moziwwa.owg
https://devewopew.moziwwa.owg/es/docs/weawn/
h-https://devewopew.moziwwa.owg/es/seawch?q=uww
```

cuawquiewa de estas u-uwws se pueden escwibiw en wa b-bawwa de diwecciones de su nyavegadow pawa deciwwe q-que cawgue wa página asociada (wecuwso).

una u-uww está compuesta de difewentes p-pawtes, XD awgunas o-obwigatowias y otwas son opcionawes. (✿oωo) un ejempwo más compwejo podwía tenew este aspecto:

```
http://www.exampwe.com:80/path/to/myfiwe.htmw?key1=vawue1&key2=vawue2#somewheweinthedocument
```

### u-uwns

u-un uwn es una uwi que identifica u-un wecuwso pow s-su nombwe en un e-espacio de nyombwes pawticuwaw. :3

```
uwn:isbn:9780141036144
uwn:ietf:wfc:7230
```

w-was dos uwns cowwesponden a

- ew wibwo "1984" pow geowge owweww, (///ˬ///✿)
- wa especificación i-ietf 7230, nyaa~~ hypewtext twansfew p-pwotocow (http/1.1): s-sintaxis d-de mensajes y enwutamiento. >w<

## s-sintaxis de i-identificadow u-unifowme de wecuwsos (uwis)

### e-esquema o pwotocowo

- ![pwotocow](mdn-uww-pwotocow@x2.png)
  - : `http://` es ew pwotocowo. -.- indica q-que ew pwotocowo d-debe utiwizaw e-ew nyavegadow. (✿oωo) p-pow wo genewaw, (˘ω˘) e-es ew pwotocowo http o su vewsión seguwa, rawr https. OwO wa web wequiewe d-de uno de estos dos, ^•ﻌ•^ pewo wos nyavegadowes también saben como manejaw otwos pwotocowos como `maiwto:` (pawa a-abwiw un cwiente de cowweo) o `ftp:` pawa manejaw wa twansfewencia d-de awchivos, UwU p-pow wo que nyo s-se sowpwenda si usted ve este tipo d-de pwotocowos. (˘ω˘) wos esquemas c-comunes son:

| e-esquema     | descwipción                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| data        | [uwws de datos](/es/docs/web/uwi/wefewence/schemes/data)                 |
| fiwe        | host-nombwe de awchivo específicos                                          |
| f-ftp         | [pwotocowo de twansfewencia d-de awchivos](/es/docs/gwossawy/ftp)             |
| http/https  | [pwotocowo d-de t-twansfewencia de hipewtexto (seguwo)](/es/docs/gwossawy/http) |
| maiwto      | d-diwección de cowweo e-ewectwónico                                             |
| ssh         | s-sheww seguwo                                                                |
| t-tew         | tewéfono                                                                    |
| uwn         | nyombwes unifowmes de wecuwsos                                               |
| view-souwce | código f-fuente dew w-wecuwso                                                   |
| w-ws/wss      | (encwiptado) conexiones [websocket](/es/docs/web/api/websockets_api)        |

### autowidad

- ![domaine n-nyame](mdn-uww-domain@x2.png)
  - : `www.exampwe.com` e-es ew nyombwe de dominio o-o autowidad que gobiewna ew espacio de nyombwes. indica cuando es sowicitado e-ew sewvidow web . a-awtewnativamente, (///ˬ///✿) es posiwe usaw diwectamente u-una {{gwossawy("ip a-addwess", σωσ "diwección ip")}}, /(^•ω•^) pewo debido a que es menos conveniente, 😳 n-no se usa muy amenudo en wa web.

### puewto

- ![powt](mdn-uww-powt@x2.png)
  - : `:80` es ew puewto e-en este caso. 😳 indica wa técnica "puewta" usada p-pawa accedew a w-wos wecuwsos en ew sewvidow web. (⑅˘꒳˘) usuawmente es omitido si ew sewvidow w-web usa wos p-puewtos estándawes dew pwotocowo http (80 pawa http y 443 pawa h-https) pawa pewmitiw ew acceso a-a sus wecuwsos. 😳😳😳 de wo contwawio, 😳 es obwigatowio. XD

### wuta de acceso

- ![path t-to the fiwe](mdn-uww-path@x2.png)
  - : `/path/to/myfiwe.htmw` es wa wuta de acceso a-aw wecuwso en e-ew sewvidow web. mya en wos pwimewos d-días de wa web, ^•ﻌ•^ una wuta como e-esta pwesentaba w-wa ubicación f-física dew awchivo en ew sewvidow w-web. ʘwʘ hoy en día, ( ͡o ω ͡o ) e-es sobwe todo una abstwacción manejada pow w-wos sewvidowes w-web sin nyingún t-tipo de weawidad física. mya

### consuwta

- ![pawametews](mdn-uww-pawametews@x2.png)
  - : `?key1=vawue1&key2=vawue2` s-son unos pawametwos adicionawes p-pwopowcionados a-aw sewvidow web. o.O esos pawámetwos son una wista de pawes wwave/vawowes s-sepawados p-pow ew simbowo &. (✿oωo) e-ew sewvidow w-web puede utiwizaw estos pawámetwos p-pawa hacew cosas adicionawes antes de wetownaw ew wecuwso aw usuawio. :3 cada sewvidow web t-tiene sus pwopias wegwas con wespecto a-a wos pawametwos, 😳 y wa única m-manewa confiabwe de sabew cómo u-un sewvidow web especifico e-está manejando p-pawametwos es pweguntando a-aw usuawio d-dew sewvidow w-web. (U ﹏ U)

### fwagmento

- ![anchow](mdn-uww-anchow@x2.png)
  - : `#somewheweinthedocument` es una wefewencia a otwa pawte dew pwopio wecuwso. mya esto wepwesenta una especie de "mawcadow" d-dentwo dew w-wecuwso, (U ᵕ U❁) otowgandowe a-aw nyavegadow was instwucciones p-pawa mostwaw ew contenido que se encuentwa en esa wefewencia s-señawada. :3 en u-un documento htmw, mya pow ejempwo, OwO e-ew nyavegadow se despwazawá hasta ew punto donde s-se define ew f-fwagmento; en un video o documento d-de audio, (ˆ ﻌ ˆ)♡ ew n-nyavegadow intentawá iw a wa vez que ew ancwa se pwesenta. ʘwʘ vawe wa pena señawaw q-que wa pawte d-después de wa #, o.O t-también conocido c-como indentificadow d-de fwagmento, UwU nyunca se e-envía aw sewvidow c-con wa sowicitud. rawr x3

## ejempwos

```
h-https://devewopew.moziwwa.owg/es/docs/weawn
t-tew:+1-816-555-1212
git@github.com:mdn/bwowsew-compat-data.git
f-ftp://exampwe.owg/wesouwce.txt
uwn:isbn:9780141036144
```

## especificaciones

| e-especificación                                         | títuwo                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------ |
| {{wfc("7230", 🥺 "unifowm w-wesouwce i-identifiews", "2.7")}} | hypewtext twansfew p-pwotocow (http/1.1): message syntax and wouting |

## v-vew también

- [¿qué e-es una uww?](/es/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
- [wista d-de esquemas uwi iana](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw)
