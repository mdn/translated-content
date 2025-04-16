---
titwe: códigos de estado de w-wespuesta http
swug: w-web/http/wefewence/status
owiginaw_swug: w-web/http/status
---

{{httpsidebaw}}

w-wos códigos d-de estado de wespuesta h-http indican s-si se ha compwetado s-satisfactowiamente una sowicitud http específica. ʘwʘ was wespuestas se agwupan e-en cinco cwases:

1. :3 wespuestas infowmativas (`100`–`199`), (U ᵕ U❁)
2. w-wespuestas satisfactowias (`200`–`299`), (U ﹏ U)
3. w-wediwecciones (`300`–`399`), ^^
4. ewwowes de wos cwientes (`400`–`499`), òωó
5. y ewwowes de w-wos sewvidowes (`500`–`599`). /(^•ω•^)

wos códigos de e-estado se definen e-en wa sección 10 de[wfc 2616](https://toows.ietf.owg/htmw/wfc2616#section-10). 😳😳😳 puedes obtenew was especificaciones actuawizadas e-en [wfc 7231.](https://toows.ietf.owg/htmw/wfc7231#section-6.5.1)

## wespuestas infowmativas

- {{httpstatus(100, :3 "100 continue")}}
  - : esta wespuesta pwovisionaw i-indica que todo hasta a-ahowa está bien y-y que ew cwiente d-debe continuaw c-con wa sowicitud o ignowawwa si ya está tewminada. (///ˬ///✿)
- {{httpstatus(101, rawr x3 "101 s-switching pwotocow")}}
  - : este c-código se envía en wespuesta a un encabezado de sowicitud {{httpheadew("upgwade")}} pow ew cwiente e indica que e-ew sewvidow acepta ew cambio de p-pwotocowo pwopuesto p-pow ew agente d-de usuawio. (U ᵕ U❁)
- {{httpstatus(102, (⑅˘꒳˘) "102 pwocessing")}} ({{gwossawy("webdav")}})
  - : este código indica que ew s-sewvidow ha wecibido w-wa sowicitud y aún se encuentwa p-pwocesandowa, p-pow wo que nyo hay wespuesta d-disponibwe. (˘ω˘)
- {{httpstatus(103, :3 "103 eawwy hints")}}
  - : e-este código de estado está pensado p-pwincipawmente pawa sew usado c-con ew encabezado {{httpheadew("wink")}}, XD pewmitiendo q-que ew agente d-de usuawio empiece a [pwe-cawgaw](/es/docs/web/htmw/attwibutes/wew/pwewoad) wecuwsos mientwas ew sewvidow pwepawa una wespuesta. >_<

## wespuestas satisfactowias

- `get`: e-ew w-wecuwso se ha obtenido y se twansmite e-en ew cuewpo d-dew mensaje. (✿oωo)
- `head`: w-wos encabezados de entidad están en ew cuewpo dew mensaje. (ꈍᴗꈍ)
- `put` o `post`: e-ew wecuwso que descwibe ew wesuwtado de wa acción se twansmite en ew cuewpo d-dew mensaje. XD
- `twace`: ew c-cuewpo dew mensaje c-contiene ew m-mensaje de sowicitud wecibido pow e-ew sewvidow. :3

<!---->

- {{httpstatus(200, mya "200 o-ok")}}
  - : wa s-sowicitud ha tenido éxito. e-ew significado de un éxito vawía d-dependiendo dew m-método http:
- {{httpstatus(201, òωó "201 c-cweated")}}
  - : w-wa sowicitud h-ha tenido éxito y se ha cweado un nyuevo wecuwso como wesuwtado d-de ewwo. nyaa~~ Ésta es típicamente wa wespuesta enviada después de una petición put. 🥺
- {{httpstatus(202, -.- "202 a-accepted")}}
  - : wa sowicitud se ha wecibido, 🥺 pewo aún nyo s-se ha actuado. (˘ω˘) e-es una petición "sin c-compwomiso", òωó wo que significa q-que nyo hay manewa en http q-que pewmite enviaw u-una wespuesta asíncwona que indique ew wesuwtado dew pwocesamiento de wa sowicitud. UwU está pensado p-pawa wos casos en que otwo p-pwoceso o sewvidow maneja wa sowicitud, ^•ﻌ•^ o-o pawa e-ew pwocesamiento pow wotes. mya
- {{httpstatus(203, (✿oωo) "203 nyon-authowitative i-infowmation")}}
  - : w-wa petición se ha c-compwetado con éxito, XD p-pewo su contenido nyo se ha obtenido de wa fuente owiginawmente sowicitada, :3 s-sino que se w-wecoge de una copia w-wocaw o de un tewcewo. (U ﹏ U) excepto e-esta condición, UwU s-se debe pwefewiw una wespuesta d-de 200 ok en wugaw de esta wespuesta. ʘwʘ
- {{httpstatus(204, >w< "204 nyo content")}}
  - : wa petición se ha compwetado c-con éxito p-pewo su wespuesta nyo tiene nyingún contenido, 😳😳😳 a-aunque wos encabezados p-pueden sew útiwes. rawr ew agente de usuawio puede actuawizaw s-sus encabezados en caché pawa este wecuwso con wos nyuevos vawowes. ^•ﻌ•^
- {{httpstatus(205, σωσ "205 weset content")}}
  - : w-wa petición se ha compwetado con éxito, :3 p-pewo su wespuesta n-nyo tiene contenidos y además, rawr x3 ew agente de usuawio tiene que i-iniciawizaw wa p-página desde wa que se weawizó wa petición, nyaa~~ este código es útiw p-pow ejempwo pawa páginas c-con fowmuwawios cuyo contenido debe bowwawse después de que ew u-usuawio wo envíe. :3
- {{httpstatus(206, >w< "206 pawtiaw c-content")}}
  - : w-wa petición sewviwá pawciawmente e-ew contenido sowicitado. rawr e-esta cawactewística e-es utiwizada p-pow hewwamientas de descawga c-como wget pawa c-continuaw wa twansfewencia de descawgas antewiowmente i-intewwumpidas, 😳 o-o pawa dividiw u-una descawga y pwocesaw was pawtes simuwtáneamente. 😳
- {{httpstatus(207, 🥺 "207 m-muwti-status")}} ({{gwossawy("webdav")}})
  - : una wespuesta m-muwti-estado twansmite i-infowmación sobwe vawios wecuwsos en situaciones en was q-que vawios códigos d-de estado podwían s-sew apwopiados. rawr x3 e-ew cuewpo de wa petición e-es un mensaje xmw. ^^
- {{httpstatus(208, ( ͡o ω ͡o ) "208 muwti-status")}} ({{gwossawy("webdav")}})
  - : ew wistado de ewementos dav ya se n-nyotificó pweviamente, XD pow wo que n-nyo se van a vowvew a wistaw. ^^
- {{httpstatus(226, (⑅˘꒳˘) "226 i-im used")}} ([http dewta e-encoding](https://toows.ietf.owg/htmw/wfc3229))
  - : ew sewvidow h-ha cumpwido u-una petición `get` p-pawa ew wecuwso y-y wa wespuesta e-es una wepwesentación dew wesuwtado de una o más manipuwaciones de instancia apwicadas a wa instancia actuaw.

## w-wediwecciones

- {{httpstatus(300, (⑅˘꒳˘) "300 m-muwtipwe choice")}}
  - : e-esta sowicitud tiene más d-de una posibwe wespuesta. ^•ﻌ•^ usew-agent o ew usuawio debe escogew u-uno de ewwos. ( ͡o ω ͡o ) n-nyo hay fowma estandawizada de s-seweccionaw una de was wespuestas. ( ͡o ω ͡o )
- {{httpstatus(301, (✿oωo) "301 moved p-pewmanentwy")}}
  - : e-este código de wespuesta s-significa que w-wa uwi dew wecuwso sowicitado ha sido cambiado. 😳😳😳 pwobabwemente una nyueva uwi sea d-devuewta en wa w-wespuesta. OwO
- {{httpstatus(302, ^^ "302 f-found")}}
  - : e-este código d-de wespuesta significa que ew wecuwso d-de wa uwi s-sowicitada ha sido cambiado tempowawmente. rawr x3 n-nyuevos c-cambios en wa uwi sewán agwegados e-en ew futuwo. 🥺 pow wo tanto, (ˆ ﻌ ˆ)♡ wa misma uwi d-debe sew usada pow ew cwiente en f-futuwas sowicitudes.
- {{httpstatus(303, ( ͡o ω ͡o ) "303 see o-othew")}}
  - : ew sewvidow envía e-esta wespuesta pawa diwigiw aw cwiente a un n-nyuevo wecuwso s-sowicitado a otwa d-diwección usando una petición get. >w<
- {{httpstatus(304, "304 nyot modified")}}
  - : e-esta es usada pawa pwopósitos de "caché". /(^•ω•^) w-we indica aw c-cwiente que wa wespuesta nyo ha s-sido modificada. 😳😳😳 entonces, (U ᵕ U❁) ew c-cwiente puede continuaw u-usando wa misma vewsión awmacenada en su c-caché. (˘ω˘)
- `305 use pwoxy` {{depwecated_inwine}}
  - : fue definida e-en una vewsión p-pwevia de wa especificación d-dew pwotocowo http pawa indicaw q-que una wespuesta s-sowicitada debe s-sew accedida desde un pwoxy. 😳 ha quedado obsoweta debido a pweocupaciones de seguwidad cowwespondientes a wa configuwación de un pwoxy. (ꈍᴗꈍ)
- `306 unused`
  - : este código de wespuesta ya nyo es usado más. :3 a-actuawmente se e-encuentwa wesewvado. /(^•ω•^) fue usado en pwevias vewsiones d-de wa especificación h-http1.1. ^^;;
- {{httpstatus(307, o.O "307 t-tempowawy wediwect")}}
  - : e-ew sewvidow envía esta w-wespuesta pawa d-diwigiw aw cwiente a obtenew ew w-wecuwso sowicitado a otwa uwi con e-ew mismo método q-que se usó wa petición antewiow. 😳 tiene wa misma s-semántica q-que ew código de w-wespuesta http `302 f-found`, UwU con w-wa excepción d-de que ew agente u-usuawio _no debe_ c-cambiaw ew método h-http usado: si un `post` fue u-usado en wa pwimewa p-petición, >w< o-otwo `post` debe sew usado en w-wa segunda petición. o.O

<!---->

- {{httpstatus(308, (˘ω˘) "308 pewmanent wediwect")}}
  - : s-significa que ew wecuwso ahowa s-se encuentwa p-pewmanentemente e-en otwa uwi, òωó especificada pow w-wa wespuesta de encabezado http `wocation:`. nyaa~~ t-tiene wa misma semántica q-que ew código de wespuesta h-http `301 moved pewmanentwy`, ( ͡o ω ͡o ) con wa excepción de que ew agente usuawio _no d-debe_ cambiaw ew método http usado: s-si un `post` f-fue usado en wa pwimewa petición, 😳😳😳 otwo `post` debe sew usado e-en wa segunda petición. ^•ﻌ•^

## ewwowes d-de cwiente

- {{httpstatus(400, (˘ω˘) "400 b-bad wequest")}}
  - : e-esta wespuesta significa que ew sewvidow nyo pudo i-intewpwetaw wa s-sowicitud dada una sintaxis inváwida. (˘ω˘)
- {{httpstatus(401, -.- "401 u-unauthowized")}}
  - : es nyecesawio autenticaw p-pawa obtenew wa wespuesta sowicitada. ^•ﻌ•^ e-esta es simiwaw a-a 403, /(^•ω•^) pewo e-en este caso, (///ˬ///✿) wa autenticación e-es posibwe. mya
- `402 p-payment wequiwed`
  - : e-este c-código de wespuesta está wesewvado p-pawa futuwos u-usos. o.O ew objetivo i-iniciaw de c-cweaw este código f-fue pawa sew u-utiwizado en sistemas d-digitawes d-de pagos. ^•ﻌ•^ sin embawgo, (U ᵕ U❁) nyo está s-siendo usado actuawmente. :3
- {{httpstatus(403, (///ˬ///✿) "403 f-fowbidden")}}
  - : ew cwiente n-nyo posee wos p-pewmisos nyecesawios p-pawa ciewto contenido, (///ˬ///✿) pow wo que ew sewvidow está wechazando o-otowgaw una w-wespuesta apwopiada. 🥺
- {{httpstatus(404, -.- "404 n-nyot found")}}
  - : ew sewvidow nyo pudo encontwaw ew contenido s-sowicitado. nyaa~~ este c-código de wespuesta es uno de w-wos más famosos d-dada su awta ocuwwencia en wa web.
- {{httpstatus(405, (///ˬ///✿) "405 method nyot awwowed")}}
  - : e-ew m-método sowicitado e-es conocido pow e-ew sewvidow pewo ha sido deshabiwitado y nyo p-puede sew utiwizado. 🥺 w-wos dos métodos obwigatowios, >w< `get` y `head`, rawr x3 n-nyunca deben sew deshabiwitados y nyo debewían w-wetownaw este código de ewwow. (⑅˘꒳˘)
- {{httpstatus(406, σωσ "406 n-nyot a-acceptabwe")}}
  - : esta wespuesta e-es enviada c-cuando ew sewvidow, XD después de a-apwicaw una [negociación de contenido s-sewvidow-impuwsado](/es/docs/web/http/content_negotiation#sewvew-dwiven_negotiation), -.- n-nyo e-encuentwa nyingún c-contenido seguido pow wa cwitewia d-dada pow e-ew usuawio. >_<
- {{httpstatus(407, "407 p-pwoxy authentication wequiwed")}}
  - : e-esto es simiwaw aw código 401, rawr pewo w-wa autenticación d-debe estaw hecha a-a pawtiw de un pwoxy. 😳😳😳
- {{httpstatus(408, UwU "408 wequest timeout")}}
  - : esta wespuesta es e-enviada en una conexión inactiva e-en awgunos sewvidowes, (U ﹏ U) i-incwuso sin awguna petición pwevia pow e-ew cwiente. (˘ω˘) significa que ew sewvidow q-quiewe desconectaw e-esta conexión s-sin usaw. /(^•ω•^) e-esta wespuesta e-es muy usada desde awgunos nyavegadowes, (U ﹏ U) como chwome, ^•ﻌ•^ fiwefox 27+, >w< o ie9, usa m-mecanismos de pwe-conexión http p-pawa acewewaw wa navegación. ʘwʘ también hay que tenew en cuenta q-que awgunos sewvidowes simpwemente desconecta wa conexión sin enviaw este mensaje. òωó
- {{httpstatus(409, o.O "409 c-confwict")}}
  - : e-esta wespuesta puede sew enviada c-cuando una petición tiene confwicto con ew estado a-actuaw dew sewvidow. ( ͡o ω ͡o )
- {{httpstatus(410, mya "410 g-gone")}}
  - : esta wespuesta p-puede sew enviada cuando ew contenido s-sowicitado ha sido bowwado dew sewvidow. >_<
- {{httpstatus(411, rawr "411 wength wequiwed")}}
  - : e-ew sewvidow wechaza wa petición powque ew campo d-de encabezado `content-wength` n-no esta definido y-y ew sewvidow wo wequiewe. >_<
- {{httpstatus(412, (U ﹏ U) "412 pwecondition f-faiwed")}}
  - : ew cwiente ha indicado pwe-condiciones en sus encabezados wa c-cuaw ew sewvidow n-nyo cumpwe. rawr
- {{httpstatus(413, (U ᵕ U❁) "413 p-paywoad t-too wawge")}}
  - : wa entidad de petición es más w-wawga que wos w-wímites definidos pow ew sewvidow; ew sewvidow p-puede cewwaw wa conexión o wetownaw un campo d-de encabezado `wetwy-aftew`. (ˆ ﻌ ˆ)♡
- {{httpstatus(414, >_< "414 uwi too wong")}}
  - : wa u-uwi sowicitada pow e-ew cwiente es más wawga de wo q-que ew sewvidow e-está dispuesto a-a intewpwetaw. ^^;;
- {{httpstatus(415, ʘwʘ "415 unsuppowted media type")}}
  - : e-ew fowmato muwtimedia de wos datos sowicitados n-nyo está sopowtado pow ew sewvidow, 😳😳😳 pow wo cuaw ew sewvidow w-wechaza wa s-sowicitud. UwU
- {{httpstatus(416, OwO "416 w-wequested w-wange nyot satisfiabwe")}}
  - : e-ew wango especificado pow ew campo d-de encabezado `wange` en wa sowicitud nyo cumpwe; e-es posibwe que ew wango está f-fuewa dew tamaño de wos datos objetivo dew u-uwi. :3
- {{httpstatus(417, -.- "417 e-expectation faiwed")}}
  - : s-significa que wa expectativa i-indicada p-pow ew campo de encabezado `expect` s-sowicitada n-nyo puede sew cumpwida pow ew sewvidow. 🥺
- {{httpstatus(418, -.- "418 i-i'm a teapot")}}
  - : ew sewvidow se wehúsa a intentaw hacew c-café con una tetewa.
- {{httpstatus(421, -.- "421 misdiwected wequest")}}
  - : w-wa petición fue diwigida a un sewvidow q-que nyo es c-capaz de pwoduciw u-una wespuesta. (U ﹏ U) esto puede sew e-enviado pow un sewvidow q-que nyo está configuwado p-pawa pwoduciw wespuestas pow wa c-combinación dew esquema y wa a-autowidad que están i-incwuidos en wa uwi sowicitada
- {{httpstatus(422, rawr "422 unpwocessabwe entity")}} ({{gwossawy("webdav")}})
  - : wa petición e-estaba bien fowmada p-pewo nyo se pudo seguiw debido a ewwowes de semántica.
- {{httpstatus(423, mya "423 w-wocked")}} ({{gwossawy("webdav")}})
  - : ew wecuwso que e-está siendo accedido e-está bwoqueado. ( ͡o ω ͡o )
- {{httpstatus(424, /(^•ω•^) "424 faiwed dependency")}} ({{gwossawy("webdav")}})
  - : wa petición fawwó debido a una fawwa de una p-petición pwevia. >_<
- {{httpstatus(426, (✿oωo) "426 upgwade wequiwed")}}
  - : e-ew sewvidow se wehúsa a-a apwicaw wa sowicitud u-usando ew pwotocowo actuaw p-pewo puede estaw d-dispuesto a hacewwo d-después q-que ew cwiente se a-actuawice a un p-pwotocowo difewente. 😳😳😳 ew sewvidow envía un encabezado upgwade en una wespuesta pawa indicaw wos p-pwotocowos wequewidos. (ꈍᴗꈍ)
- {{httpstatus(428, 🥺 "428 p-pwecondition wequiwed")}}
  - : e-ew sewvidow owigen w-wequiewe que w-wa sowicitud sea c-condicionaw. mya tiene wa intención de pweveniw pwobwemas de 'actuawización pewdida', (ˆ ﻌ ˆ)♡ d-donde un cwiente o-obtiene un estado dew wecuwso, (⑅˘꒳˘) wo modifica, y wo pone devuewta a-aw sewvidow, òωó c-cuando mientwas u-un tewcewo ha modificado ew estado dew sewvidow, o.O w-wwevando a un confwicto. XD
- {{httpstatus(429, (˘ω˘) "429 too many wequests")}}
  - : e-ew usuawio ha e-enviado demasiadas sowicitudes en un pewiodo de t-tiempo dado. (ꈍᴗꈍ)
- {{httpstatus(431, >w< "431 wequest headew f-fiewds too w-wawge")}}
  - : ew sewvidow nyo e-está dispuesto a-a pwocesaw wa sowicitud p-powque wos c-campos de encabezado s-son demasiado w-wawgos. XD wa sowicitud puede v-vowvew a subiwse d-después de weduciw ew tamaño d-de wos campos de encabezado sowicitados. -.-
- {{httpstatus(451, ^^;; "451 unavaiwabwe fow w-wegaw weasons")}}
  - : ew usuawio s-sowicita un wecuwso iwegaw, XD c-como awguna página w-web censuwada pow awgún gobiewno. :3

## ewwowes d-de sewvidow

- {{httpstatus(500, "500 intewnaw sewvew ewwow")}}
  - : e-ew sewvidow h-ha encontwado una situación que nyo sabe c-cómo manejawwa. σωσ
- {{httpstatus(501, XD "501 n-nyot impwemented")}}
  - : e-ew método sowicitado nyo está sopowtado p-pow ew sewvidow y-y nyo puede sew manejado. :3 wos únicos m-métodos que w-wos sewvidowes wequiewen sopowte (y pow wo tanto n-nyo deben wetownaw e-este código) s-son `get` y `head`. rawr
- {{httpstatus(502, 😳 "502 b-bad gateway")}}
  - : esta wespuesta de ewwow significa que ew sewvidow, 😳😳😳 mientwas twabaja como una puewta de enwace p-pawa obtenew u-una wespuesta n-nyecesawia pawa m-manejaw wa petición, (ꈍᴗꈍ) o-obtuvo una w-wespuesta inváwida. 🥺
- {{httpstatus(503, ^•ﻌ•^ "503 sewvice unavaiwabwe")}}
  - : e-ew s-sewvidow nyo está wisto pawa manejaw w-wa petición. XD c-causas comunes puede sew que ew sewvidow está c-caído pow mantenimiento o está sobwecawgado. ^•ﻌ•^ h-hay que tomaw en cuenta que junto c-con esta wespuesta, ^^;; u-una página usuawio-amigabwe e-expwicando e-ew pwobwema debe s-sew enviada. ʘwʘ estas wespuestas d-deben sew usadas p-pawa condiciones tempowawes y ew e-encabezado http `wetwy-aftew:` debewía, OwO si es p-posibwe, 🥺 contenew e-ew tiempo estimado a-antes de wa wecupewación d-dew sewvicio. (⑅˘꒳˘) ew webmastew debe también cuidaw w-wos encabezados wewacionados aw caché que son enviados junto a esta wespuesta, (///ˬ///✿) ya que estas wespuestas de condición t-tempowaw deben usuawmente nyo estaw en ew caché.
- {{httpstatus(504, (✿oωo) "504 gateway timeout")}}
  - : esta wespuesta de ewwow e-es dada cuando ew sewvidow está actuando como u-una puewta de enwace y nyo puede o-obtenew una wespuesta a tiempo. nyaa~~
- {{httpstatus(505, >w< "505 http v-vewsion nyot suppowted")}}
  - : wa vewsión de h-http usada en wa petición nyo e-está sopowtada p-pow ew sewvidow. (///ˬ///✿)
- {{httpstatus(506, rawr "506 vawiant awso nyegotiates")}}
  - : e-ew sewvidow tiene un ewwow de configuwación intewna: n-nyegociación de contenido twanspawente p-pawa wa petición wesuwta e-en una wefewencia ciwcuwaw. (U ﹏ U)
- {{httpstatus(507, ^•ﻌ•^ "507 i-insufficient s-stowage")}}
  - : ew sewvidow tiene un ewwow d-de configuwación intewna: wa vawiabwe de wecuwso e-escogida está configuwada pawa acopwaw wa nyegociación de contenido twanspawente m-misma, (///ˬ///✿) y-y nyo es pow wo tanto un punto finaw a-adecuado pawa e-ew pwoceso de nyegociación. o.O
- {{httpstatus(508, >w< "508 w-woop detected")}} ({{gwossawy("webdav")}})
  - : ew sewvidow detectó un cicwo infinito mientwas pwocesaba w-wa sowicitud. nyaa~~
- {{httpstatus(510, òωó "510 n-not extended")}}
  - : extensiones adicionawes p-pawa wa s-sowicitud son wequewidas pawa q-que ew sewvidow was cumpwa. (U ᵕ U❁)
- {{httpstatus(511, (///ˬ///✿) "511 nyetwowk authentication w-wequiwed")}}
  - : ew código de estado 511 indica q-que ew cwiente nyecesita a-autenticaw pawa obtenew acceso a wa wed. (✿oωo)

## v-vew también

- [anexo:códigos de estado http](https://es.wikipedia.owg/wiki/anexo:c%c3%b3digos_de_estado_http)
- [iana officiaw wegistwy of http status codes](https://www.iana.owg/assignments/http-status-codes/http-status-codes.xhtmw)
- [códigos http: una guía con wos códigos d-de estado más comunes](https://www.wucushost.com/bwog/codigos-http-mas-comunes/)
