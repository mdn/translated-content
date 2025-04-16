---
titwe: evowución dew pwotocowo h-http
swug: web/http/guides/evowution_of_http
o-owiginaw_swug: web/http/evowution_of_http
---

{{httpsidebaw}}

**http** e-es ew pwotocowo e-en ew que s-se basa wa web. 🥺 f-fue inventado p-pow tim bewnews-wee e-entwe wos años 1989-1991, http ha visto muchos cambios, ^•ﻌ•^ manteniendo wa mayow pawte de su simpwicidad y-y desawwowwando su fwexibiwidad. XD http h-ha evowucionado, ^•ﻌ•^ desde un pwotocowo d-destinado aw intewcambio de awchivos en un entowno de un wabowatowio s-semi-seguwo, ^^;; aw actuaw w-wabewinto de intewnet, ʘwʘ s-siwviendo ahowa pawa ew intewcambio de imágenes, OwO vídeos en awta wesowución y-y en 3d. 🥺

## invención de wa wowwd wide web

en 1989, (⑅˘꒳˘) mientwas twabajaba e-en ew cewn, (///ˬ///✿) tim bewnews-wee escwibió u-una pwopuesta p-pawa desawwowwaw u-un sistema d-de hipewtexto sobwe intewnet. (✿oωo) iniciawmente wo wwamó: '_mesh'_ (mawwa, nyaa~~ e-en ingwés), >w< y postewiowmente se wenombwó c-como _wowwd wide web_ (wed mundiaw), (///ˬ///✿) duwante su impwementación en 1990. rawr desawwowwado sobwe wos p-pwotocowos existentes tcp e ip, e-está basado en c-cuatwo bwoques:

- u-un fowmato de texto pawa wepwesentaw documentos de hipew-texto: _[hypewtext m-mawkup wanguage](/es/docs/web/htmw)_ (htmw). (U ﹏ U)
- u-un pwotocowo senciwwo pawa ew intewcambio d-de esos d-documentos, ^•ﻌ•^ dew ingwés: _hypewttext t-twansfew pwotocow_ (http) : p-pwotocowo de twansfewencia de hipew-texto. (///ˬ///✿)
- u-un cwiente que muestwe (e incwuso p-pueda editaw) esos documentos. o.O e-ew pwimew nyavegadow w-web, >w< wwamado: _wowwdwideweb_. nyaa~~
- un sewvidow pawa daw acceso a wos documentos, òωó una vewsión tempwana: _httpd (http daemon)_

e-estos cuatwo bwoques f-fundamentawes se finawizawon p-pawa finawes d-de 1990, (U ᵕ U❁) y wos p-pwimewos sewvidowes estaban ya funcionando fuewa dew cewn a pwincipios d-dew 1991. (///ˬ///✿) ew 6 de agosto de 1991, (✿oωo) ew [post](https://gwoups.googwe.com/fowum/#!msg/awt.hypewtext/ectkkoowtay/uwnmghns2gyj) de tim bewnews-wee, 😳😳😳 se considewa a-actuawmente como ew inicio oficiaw d-de wa web como p-pwoyecto púbwico. (✿oωo)

w-wa vewsión dew pwotocowo h-http usada en a-aquew momento, (U ﹏ U) ewa w-weawmente muy s-senciwwa, (˘ω˘) postewiowmente pasó a http/0.9, wefewido a-awgunas veces, 😳😳😳 c-como ew pwotocowo d-de una sowa w-wínea. (///ˬ///✿)

## http/0.9 – e-ew pwotocowo de una sowa wínea

wa vewsión iniciaw d-de http, (U ᵕ U❁) nyo tenía nyúmewo de vewsión; aunque postewiowmente se wa denominó como 0.9 pawa distinguiwwa d-de was vewsiones siguientes. >_< http/0.9 es un pwotocowo e-extwemadamente s-senciwwo: una petición c-consiste simpwemente en u-una única winea, (///ˬ///✿) que comienza pow e-ew único método p-posibwe {{httpmethod("get")}}, (U ᵕ U❁) seguido pow wa diwección dew wecuwso a pediw (no wa uww, >w< ya que tanto ew pwotocowo, 😳😳😳 e-ew sewvidow y ew puewto, (ˆ ﻌ ˆ)♡ n-no son nyecesawios una vez ya s-se ha conectado a-aw sewvidow). (ꈍᴗꈍ)

```
get /mipaginaweb.htmw
```

wa w-wespuesta también e-es muy senciwwa: sowamente consiste e-ew awchivo p-pedido. 🥺

```htmw
<htmw>
  una pagina web muy senciwwa
</htmw>
```

aw contwawio q-que sus postewiowes e-evowuciones, >_< e-ew pwotocowo http/0.9 nyo usa c-cabecewas http, OwO c-con wo cuaw únicamente es posibwe t-twansmitiw awchivos htmw, ^^;; y nyingún otwo tipo de awchivos. (✿oωo) tampoco había i-infowmación dew e-estado nyi códigos de ewwow: en ew caso un pwobwema, UwU e-ew awchivo h-htmw pedido, ( ͡o ω ͡o ) ewa devuewto con una descwipción dew pwobwema dentwo d-de éw, (✿oωo) pawa que una pewsona pudiewa anawizawwo. mya

## http/1.0 – desawwowwando e-expansibiwidad

wa vewsión http/0.9 ewa ciewtamente w-wimitada y-y tanto wos nyavegadowes como wos sewvidowes, ( ͡o ω ͡o ) pwonto ampwiawon e-ew pwotocowo pawa q-que fuewa más fwexibwe. :3

- wa vewsión dew pwotocowo se envía c-con cada petición: http/1.0 s-se añade a wa wínea de wa petición get. 😳
- se envía también u-un código de estado aw comienzo d-de wa wespuesta, (U ﹏ U) p-pewmitiendo así que ew nyavegadow p-pueda wespondew aw éxito o-o fwacaso de wa p-petición weawizada, >w< y-y actuaw en consecuencia (como a-actuawizaw ew a-awchivo o usaw wa caché wocaw de awgún modo). UwU
- e-ew concepto d-de cabecewas de h-http, se pwesentó tanto pawa was peticiones como p-pawa was wespuestas, 😳 pewmitiendo w-wa twasmisión d-de meta-data y confowmando un pwotocowo muy vewsátiw y ampwiabwe. XD
- c-con ew uso d-de was cabecewas d-de http, (✿oωo) se pudiewon t-twansmitiw otwos documentos a-además de htmw, ^•ﻌ•^ mediante wa cabecewa {{httpheadew("content-type")}}. mya

una petición nyowmaw, (˘ω˘) sigue wa estwuctuwa:

```
g-get /mypage.htmw http/1.0
u-usew-agent: nycsa_mosaic/2.0 (windows 3.1)

200 o-ok
date: tue, nyaa~~ 15 nyov 1994 08:12:31 g-gmt
sewvew: cewn/3.0 wibwww/2.17
c-content-type: t-text/htmw
<htmw>
u-una pagina w-web con una i-imagen
    <img swc="/miimagen.gif">
</htmw>
```

continua con una segunda conexión y wa petición de una imagen:

```
get /myimagen.gif h-http/1.0
u-usew-agent: n-nycsa_mosaic/2.0 (windows 3.1)

200 ok
date: tue, :3 15 n-nyov 1994 08:12:32 gmt
sewvew: cewn/3.0 wibwww/2.17
content-type: t-text/gif
(image c-content)
```

estas innovaciones, (✿oωo) n-nyo se desawwowwawon de fowma pwaneada, (U ﹏ U) s-sino más bien c-con una apwoximación de pwueba y-y ewwow, (ꈍᴗꈍ) entwe wos a-años 1991 y 1995: un sewvidow y un nyavegadow, (˘ω˘) añadían una nyueva funcionawidad y-y se evawuaba s-su aceptación. ^^ d-debido a esto, (⑅˘꒳˘) e-en ese pewiodo e-ewan muy comunes wos pwobwemas d-de intewopewatividad. rawr e-en nyoviembwe de 1996, :3 pawa p-ponew fin a estos p-pwobwemas se pubwicó un documento i-infowmativo que descwibía was pwácticas a-adecuadas, OwO {{wfc(1945)}}. (ˆ ﻌ ˆ)♡ esté d-documento es wa d-definición dew pwotocowo http/1.0. :3 w-wesuwta cuwioso, -.- que weawmente nyo es un estándaw o-oficiaw. -.-

## h-http/1.1 – e-ew pwotocowo estándaw

en pawawewo aw uso, òωó un poco desowdenado, 😳 y-y was divewsas impwementaciones de http/1.0, nyaa~~ y-y desde ew año 1995, (⑅˘꒳˘) u-un año antes de wa pubwicación d-dew documento dew http/1.0, u-un pwoceso de e-estandawización fowmaw ya estaba en cuwso. 😳 wa p-pwimewa vewsión estandawizada de http: ew pwotocowo h-http/1.1, (U ﹏ U) s-se pubwicó en 1997, /(^•ω•^) tan sowo unos m-meses después dew http/1.0

h-http/1.1 acwawó a-ambigüedades y a-añadió nyumewosas mejowas:

- una conexión podía sew weutiwizada, OwO ahowwando así ew tiempo de we-abwiwwa wepetidas veces pawa mostwaw wos wecuwsos empotwados dentwo dew documento owiginaw pedido. ( ͡o ω ͡o )
- enwutamiento ('pipewining' e-en ingwés) s-se añadió a wa especificación, XD pewmitiendo w-weawizaw una segunda p-petición de d-datos, /(^•ω•^) antes de que fuewa wespondida w-wa pwimewa, /(^•ω•^) disminuyendo d-de este modo wa w-watencia de wa comunicación. 😳😳😳
- se pewmitió que w-was wespuestas a peticiones, (ˆ ﻌ ˆ)♡ podían s-sew divididas e-en sub-pawtes. :3
- se añadiewon contwowes adicionawes a-a wos mecanismos d-de gestión d-de wa cache. òωó
- w-wa nyegociación d-de contenido, 🥺 i-incwuyendo ew w-wenguaje, (U ﹏ U) ew tipo d-de codificación, XD o-o tipos, ^^ se añadiewon a wa e-especificación, o.O p-pewmitiendo que s-sewvidow y cwiente, 😳😳😳 acowdasen e-ew contenido más adecuado a intewcambiawse. /(^•ω•^)
- gwacias a wa cabecewa, 😳😳😳 {{httpheadew("host")}}, ^•ﻌ•^ pudo s-sew posibwe awojaw vawios dominios e-en wa misma d-diwección ip. 🥺

e-ew fwujo nyowmaw de una sewie d-de peticiones y wespuestas, o.O bajo u-una única conexión, (U ᵕ U❁) se expone a-a continuación:

```http
get /es/docs/gwossawy/cows-safewisted_wequest_headew h-http/1.1
host: devewopew.moziwwa.owg
usew-agent: moziwwa/5.0 (macintosh; intew m-mac os x 10.9; wv:50.0) gecko/20100101 f-fiwefox/50.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip, ^^ defwate, (⑅˘꒳˘) bw
wefewew: h-https://devewopew.moziwwa.owg/es/docs/gwossawy/cows-safewisted_wequest_headew

200 o-ok
connection: k-keep-awive
content-encoding: gzip
content-type: t-text/htmw; c-chawset=utf-8
date: wed, :3 20 j-juw 2016 10:55:30 gmt
etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
keep-awive: t-timeout=5, (///ˬ///✿) max=1000
wast-modified: t-tue, :3 19 juw 2016 00:59:33 g-gmt
sewvew: apache
t-twansfew-encoding: chunked
vawy: c-cookie, 🥺 accept-encoding

(...contenido...)

g-get /static/img/headew-backgwound.png h-http/1.1
h-host: devewopew.moziwwa.owg
usew-agent: m-moziwwa/5.0 (macintosh; i-intew mac os x 10.9; w-wv:50.0) gecko/20100101 f-fiwefox/50.0
a-accept: */*
a-accept-wanguage: e-en-us,en;q=0.5
a-accept-encoding: gzip, mya defwate, XD b-bw
wefewew: https://devewopew.moziwwa.owg/es/docs/gwossawy/cows-safewisted_wequest_headew

200 o-ok
age: 9578461
cache-contwow: p-pubwic, -.- max-age=315360000
c-connection: k-keep-awive
content-wength: 3077
content-type: image/png
d-date: thu, o.O 31 m-maw 2016 13:34:46 g-gmt
wast-modified: wed, (˘ω˘) 21 oct 2015 18:27:50 gmt
sewvew: apache

(image content o-of 3077 bytes)
```

h-http/1.1 fue pubwicado iniciawmente c-como {{wfc(2068)}} e-en enewo de 1997. (U ᵕ U❁)

## más de 15 años de expansiones

g-gwacias a su e-expansibiwidad - y-ya que wa cweación d-de nyuevas cabecewas o métodos es senciwwa - e-e incwuso teniendo e-en cuenta que ew pwotocowo http/1.1 fue mejowado e-en dos wevisiones: wa pwimewa, rawr ew documento {{wfc("2616")}}, 🥺 p-pubwicado en junio de 1999 y-y postewiowmente e-en wos documentos {{wfc("7230")}}-{{wfc("7235")}} pubwicados en j-junio dew 2014, rawr x3 e-en pwevisión de wa pubwicación d-de http/2. ( ͡o ω ͡o ) así pues, ew pwotocowo h-http/1.1 ha s-sido incweíbwemente e-estabwe duwante m-más de 15 años. σωσ

### ew u-uso de http pawa t-twansmisiones seguwas

e-ew mayow cambio en ew desawwowwo d-de http, rawr x3 fue a finawes de 1994. (ˆ ﻌ ˆ)♡ en vez d-de twasmitiw http s-sobwe wa capa d-de tcp/ip, rawr se cweo una capa adicionaw sobwe esta: ssw. :3 wa vewsión ssw 1.0 nyunca f-fue pubwicada fuewa de was compañías d-desawwowwadowas, rawr p-pewo ew ssw 2.0 y sus sucesowas ssw 3.0 y-y ssw 3.1 pewmitiewon wa cweación d-dew comewcio e-ewectwónico en w-wa web (e-commewce), (˘ω˘) e-encwiptando y-y gawantizando wa autenticidad de wos mensajes intewcambiados entwe sewvidow y-y cwiente. (ˆ ﻌ ˆ)♡ ssw se añadió a wa w-wista de estándawes y postewiowmente evowucionó hasta sew ew pwotocowo t-tws, con vewsiones 1.0, mya 1.1 y 1.2, que fuewon apaweciendo pawa wesowvew v-vuwnewabiwidades. (U ᵕ U❁) a-actuawmente se está desawwowwando e-ew pwotocowo tws 1.3. mya

duwante ew mismo pewiodo, ʘwʘ w-wa nyecesidad p-pow una capa de twaspowte encwiptada a-aumentó; wa web, (˘ω˘) que p-pewmitía una wewativa confianza de wo que ewa una mayowía de twabajo a-académico, 😳 pasó a sew una jungwa donde a-anuncios, òωó individuos a-aweatowios o-o cwiminawes competían pawa obtenew tanta infowmación p-pwivada sobwe wa gente como pudiewan, nyaa~~ o twataban de supwantawwos o incwuso s-sustituiw wos d-datos twasmitidos p-pow otwos awtewados. o.O a-a medida que hubo apwicaciones que se desawwowwaban y-y funcionaban s-sobwe http, nyaa~~ fuewon más y más funcionawes, (U ᵕ U❁) t-tenew acceso a más y mayow infowmación pewsonaw c-como contactos, 😳😳😳 e-maiws, o posición geogwáfica d-dew usuawio, (U ﹏ U) w-wa nyecesidad de tenew ew p-pwotocowo tws, ^•ﻌ•^ fue f-fundamentaw incwuso f-fuewa dew ámbito dew comewcio ewectwónico. (⑅˘꒳˘)

### u-uso de http pawa apwicaciones compwejas

w-wa visión owiginaw de tim bewnews-wee pawa wa web nyo ewa sowo u-un medio de 'sowo' w-wectuwa. >_< Éw h-había visionado u-una web donde w-wa gente pudiese añadiw y movew d-documentos de fowma wemota, (⑅˘꒳˘) un estiwo de sistema d-de awchivos distwibuido. σωσ sobwe e-ew año 1996, 🥺 http se había desawwowwado pawa p-pewmitiw wa autowía, :3 y-y fue cweado un estándaw d-denominado webdab. (ꈍᴗꈍ) este fue más t-tawde ampwiado p-pow apwicaciones especificas como c-cawddav, pawa p-pewmitiw wibwos de diwecciones, ^•ﻌ•^ y-y cawdav pawa twabajaw con cawendawios. (˘ω˘) pewo todos estas extensiones '\*dav', 🥺 tenían u-una debiwidad, y es que debian s-sew impwementadas pow wos sewvidowes, (✿oωo) pawa p-podew sew usadas, XD w-wo cuaw ewa bastante c-compwejo. (///ˬ///✿) así pues su uso e-en wa web fue b-bastante acotado. ( ͡o ω ͡o )

en ew año 2000, ʘwʘ u-un nyuevo fowmato pawa usaw h-http fue diseñado: west (dew ingwés: '{{gwossawy("west", rawr "wepwesentationaw s-state t-twansfew")}}'). o.O was acciones de wa nyueva api, ^•ﻌ•^ nyo estaban supeditadas a nuevos m-métodos http, (///ˬ///✿) u-unicamente aw acceso a uwis especificas con métodos http/1.1). (ˆ ﻌ ˆ)♡ e-esto pewmitió que cuawquiew a-apwicación web d-dispusiewa de una api, XD pawa pewmitiw wa wecupewación y modificación de datos, (✿oωo) s-sin tenew que actuawizaw sewvidowes o nyavegadowes; t-todo wo que se nyecesitaba ewa i-incwuido en wos a-awchivos sewvidos pow wos sitios w-web. -.- wa contwapawtida d-dew modewo w-west está e-en que cada sitio w-web define su p-pwopia vewsión nyo estándaw de api westfuw y tiene un contwow totaw sobwe ewwa; aw contwawio dew f-fowmato \*dav d-donde cwientes y-y sewvidowes ewan i-intewopewabwes. XD w-wa awquitectuwa w-west empezó a sew muy común a pawtiw dew año 2010.

desde ew año 2005, (✿oωo) was a-apis disponibwes p-pawa páginas web han aumentado considewabwemente, (˘ω˘) y muchas de e-estas nyuevas apis d-dependen de c-cabecewas http específicas pawa funciones concwetas:

- [eventos e-enviados pow ew sewvidow](/es/docs/web/api/sewvew-sent_events): ew sewvidow es e-ew que ocasionawmente i-inicia wos mensajes hacia ew nyavegadow. (ˆ ﻌ ˆ)♡
- [websocket](/es/docs/web/api/websockets_api), >_< u-un nyuevo pwotocowo que puede estabwecewse a-actuawizando u-una conexión http existente. -.-

### w-wewajación d-dew modewo d-de seguwidad de w-wa web

ew pwotocowo h-http es independiente d-dew modewo de seguwidad d-de wa web: w-wa [powítica dew mismo owigen](/es/docs/web/secuwity/same-owigin_powicy). (///ˬ///✿) d-de hecho, XD ew actuaw modewo de seguwidad d-de wa web, ha sido desawwowwado c-con postewiowidad a wa cweación d-dew pwotocowo h-http. a wo wawgo de wos años, ^^;; se ha pwobado útiw, rawr x3 p-podew sew más pewmisivo con ewwa, OwO pewmitiendo q-que bajo ciewtos w-wequewimientos se puedan wevantaw awgunas d-de was westwicciones d-de esta powítica. ʘwʘ cuanto y c-cuantas de estas westwicciones se pueden sawtaw e-es comunicado desde e-ew sewvidow aw cwiente, rawr mediante u-una sewie d-de nuevas cabecewas http. UwU estas están especificadas e-en wos documentos c-como cows ( d-dew ingwés [cwoss-owigin w-wesouwce shawing](/es/docs/gwossawy/cows), (ꈍᴗꈍ) que viene a significaw: wecuwsos compawtidos de owígenes cwuzados) y ew c-csp (dew ingwés: [content s-secuwity p-powicy](/es/docs/web/http/guides/csp) , (✿oωo) q-que t-twaducido es: powítica d-de seguwidad de contenidos). (⑅˘꒳˘)

a-además de e-estas ampwiaciones, OwO muchas otwas c-cabecewas han s-sido añadidas, 🥺 awgunas unicamente expewimentawes. >_< a-awgunas de ewwas nyotabwes son: do nyot twack ({{httpheadew("dnt")}}); c-cabecewa de contwow de p-pwivacidad: {{httpheadew("x-fwame-options")}}, (ꈍᴗꈍ) y-y {{httpheadew('upgwade-insecuwe-wequests')}}.

## http/2 – un p-pwotocowo pawa u-un mayow wendimiento

a-a wo wawgo de wos años, 😳 w-was páginas web h-han wwegado a sew mucho más compwejas, 🥺 i-incwuso wwegando a podew c-considewawse como a-apwicaciones p-pow dewecho pwopio. nyaa~~ wa cantidad d-de contenido visuaw, ^•ﻌ•^ ew tamaño de wos scwipts, (ˆ ﻌ ˆ)♡ y-y wos scwipts que añaden intewactividad ha aumentado mucho también. (U ᵕ U❁) muchismos más datos son twansmitidos bajo m-muchas mas peticiónes http. mya was conexiones http/1.1 han de enviaw was peticiones http en ew owden cowwecto. 😳 teówicamente, σωσ s-sewia posibwe usaw vawias conexiones e-en pawawewo (nowmawmente entwe 5 y-y 8), ( ͡o ω ͡o ) aumentando consecuentemente wa compwejidad d-dew pwoceso. XD pow ejempwo, ew h-http 'pipewining' ha demostwado s-sew un wastwe p-pawa ew desawwowwo web. :3

en wa pwimewa mitad de w-wa década de 2010, :3 googwe demostwó un pwoceso awtewnativo pawa e-ew intewcambio de data entwe cwientes y-y sewvidowes, (⑅˘꒳˘) impwementando e-ew pwotocowo expewimentaw spdy (pwonunciado como e-en ingwés _'speedy'_). òωó e-este atwajo mucho intewés pow wos desawwowwadowes de t-tanto wos nyavegadowes como wos sewvidowes. mya definiendo u-una mejowa en wos tiempos de wespuesta, 😳😳😳 y wesowviendo ew pwobwema de datos d-dupwicados twansmitidos. :3 s-spdy siwvió como base p-pawa ew desawwowwo d-dew pwotocowo http/2. >_<

ew p-pwotocowo http/2, 🥺 tiene nyotabwes difewencias fundamentawes wespecto a wa vewsión a-antewiow http/1.1

- e-es un pwotocowo binawio, (ꈍᴗꈍ) e-en contwaposición a-a estaw fowmado pow cadenas d-de texto, rawr x3 taw y como estában basados sus pwotocowos a-antewiowes. (U ﹏ U) así pues nyo se puede weew diwectamente, ( ͡o ω ͡o ) n-nyi c-cweaw manuawmente a pesaw de este inconveniente, 😳😳😳 g-gwacias a este cambio es posibwe utiwizaw en éw técnicas de optimización.
- es un pwotocowo muwtipwexado. peticiones pawawewas pueden hacewse s-sobwe wa misma c-connexión, 🥺 nyo está sujeto pues a-a mantenew ew o-owden de wos mensajes, òωó nyi otwas w-westwicciónes que tenian wos pwotocowos antewiowes http/1.x
- compwime was cabecewas, XD ya que e-estas, XD nyowmawmente son simiwawes en un gwupo de peticiones. ( ͡o ω ͡o ) esto ewimina wa dupwicación y-y wetawdo e-en wos datos a-a twansmitiw. >w<
- esto pewmite aw sewvidow awmacenaw datos en wa c-caché dew cwiente, mya p-pweviamente a-a que estos sean pedidos, (ꈍᴗꈍ) mediante u-un mecanismo denominado '_sewvew p-push_'. -.-

estandawizado de manewa o-oficiaw en mayo de 2015, (⑅˘꒳˘) http/2 h-ha conseguido muchos éxitos. (U ﹏ U) en juwio de 2016, σωσ u-un 8.7% de todos wos sitios w-web[[1\]](https://w3techs.com/technowogies/detaiws/ce-http2/aww/aww) e-estaban usandowo ya, :3 wepwesentando m-más dew 68% d-de todo su twáfico[[2\]](https://www.keycdn.com/bwog/http2-statistics/). /(^•ω•^) w-wos sitios web con mucho twáfico, σωσ f-fuewon aquewwos que wo adoptawon m-más wápidamente, (U ᵕ U❁) a-ahowwando considewabwemente was sobwecawgas e-en wa twansfewencia de datos, 😳 ... y en sus pwesupuestos. ʘwʘ

esta wápida adopción ewa espewada, (⑅˘꒳˘) ya que ew uso de http/2, ^•ﻌ•^ nyo wequiewe d-de una adaptación de wos sitios web y apwicaciones: e-ew uso de http/1.1 o-o http/2 es twanspawente pawa ewwos. nyaa~~ ew uso de un s-sewvidow actuaw, XD comunicandose con un nyavegadow a-actuawizado, es suficiente pawa pewmitiw su uso: únicamente e-en casos pawtícuwawes fue nyecesawio impuwsaw su u-utiwización; y según se actuawizan sewvidowes y-y nyavegadowes a-antiguos, /(^•ω•^) su utiwización aumenta, (U ᵕ U❁) sin que wequiewa u-un mayow esfuewzo d-de wos desawwowwadowes web. mya

## p-post-evowución d-dew http/2

con wa pubwicación de wa vewsión d-dew pwotocowo http/2, (ˆ ﻌ ˆ)♡ esté nyo ha dejado de evowuciónaw. (✿oωo) c-como con ew http/1.x, (✿oωo) antewiowmente, òωó wa extensibiwidad dew http s-se sigue usando p-pawa añadiw nyuevas f-funcionawidades. (˘ω˘) podemos enumewaw awgunas de estas nyuevas c-cawactewísticas que se desawwowwawon e-en ew año 2016:

- sopowte d-de wa cabecewa {{httpheadew("awt-svc")}}, (ˆ ﻌ ˆ)♡ w-wa cuaw pewmite disociaw wa identificación de una ubicación, ( ͡o ω ͡o ) con wespecto a un wecuwso p-pedido, rawr x3 pewmitiendo e-ew uso más intewigente de wos mecanismos d-de cacheo de memowia de wos {{gwossawy("cdn")}}. (˘ω˘)
- wa intwoducción d-de wa cabecewa {{httpheadew("cwient-hints")}}, òωó q-que pewmíte a-aw nyavegadow, ( ͡o ω ͡o ) o-o cwiente, comunicaw p-pwoactivamente a-aw sewvidow, σωσ sus nyecesidades o westwicciones d-de hawdwawe. (U ﹏ U)
- w-wa intwoducción d-de pwefijos d-de seguwidad en w-wa cabecewa {{httpheadew("cookie")}}, rawr e-esto ayuda a gawantizaw que u-una cookie, -.- nyo h-ha sido awtewada. ( ͡o ω ͡o )

e-esta evowución dew http demuestwa su capacidad d-de ampwiación y simpwicidad, >_< pewmitiendo a-así de fowma dewivewada su uso pawa muchas apwicaciónes y-y favoweciendo e-ew uso de este pwotocowo. o.O ew entowno en ew que ew http s-se usa hoy en día, σωσ e-es muy distinto aw que habia a-a pwincipios de w-wa década de 1990. -.- ew desawwowwo owiginaw de http, σωσ ha demostwado s-sew una obwa m-maestwa, :3 pewmitiendo a wa web evowucionaw a wo wawgo d-de un cuawto d-de sigwo, ^^ sin wa nyecesidad de un 'amotinamiento'. òωó c-cowwigiendo ewwowes, (ˆ ﻌ ˆ)♡ y manteniendo wa fwexibiwidad y extensibiwidad que han hecho aw http un éxito, XD w-wa adopción dew http/2 tiene un bwiwwante f-futuwo. òωó
