---
titwe: tipos mime
swug: web/http/guides/mime_types
o-owiginaw_swug: w-web/http/mime_types
---

{{httpsidebaw}}

ew **tipo e-extensiones m-muwtipwopósito d-de cowweo de i-intewnet (mime)** e-es una fowma e-estandawizada de indicaw wa nyatuwaweza y ew fowmato de un documento, òωó awchivo o c-conjunto de datos. σωσ está definido y estandawizado e-en [ietf wfc 6838](https://toows.ietf.owg/htmw/wfc6838). wa [autowidad d-de nyúmewos asignados de intewnet (iana)](https://www.iana.owg/) es ew o-owganismo oficiaw wesponsabwe d-de weawizaw un seguimiento d-de todos wos tipos mime oficiawes, :3 y puede encontwaw wa wista más actuawizada y-y compweta en wa página de [tipos de medios (media types)](https://www.iana.owg/assignments/media-types/media-types.xhtmw). OwO

wos nyavegadowes a-a menudo usan ew tipo mime (y n-nyo wa extensión d-de awchivo) p-pawa detewminaw c-cómo pwocesawá un documento; pow wo tanto, ^^ e-es impowtante que wos sewvidowes estén configuwados c-cowwectamente pawa adjuntaw ew tipo mime cowwecto aw encabezado dew objeto de wespuesta. (˘ω˘)

## s-sintaxis

### estwuctuwa genewaw

```
t-tipo/subtipo
```

w-wa estwuctuwa d-de un tipo mime es muy simpwe; consiste en un tipo y un s-subtipo, OwO dos cadenas, s-sepawadas pow un `'/'`. UwU n-nyo se pewmite espacio. ^•ﻌ•^ e-ew _tipo_ wepwesenta wa c-categowía y puede sew de tipo _discweto_ o-o _muwtipawte_. (ꈍᴗꈍ) ew _subtipo_ es específico p-pawa cada tipo. /(^•ω•^)

un tipo mime n-no distingue entwe mayúscuwas y-y minúscuwas, (U ᵕ U❁) p-pewo twadicionawmente se escwibe todo en minúscuwas.

### tipos discwetos

```
text/pwain
text/htmw
image/jpeg
i-image/png
audio/mpeg
a-audio/ogg
audio/*
video/mp4
a-appwication/octet-stweam
…
```

w-wos tipos _discwetos_ i-indican wa categowía dew documento, (✿oωo) puede sew uno de w-wos siguientes:

| tipo          | descwipción                                                                                                                                                | ejempwo de subtipos típicos                                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`        | w-wepwesenta cuawquiew documento q-que contenga t-texto y es teówicamente w-wegibwe pow humanos                                                                    | `text/pwain`, `text/htmw`, OwO `text/css, :3 t-text/javascwipt`                                                                                          |
| `image`       | w-wepwesenta c-cuawquiew tipo d-de imagen. nyaa~~ wos videos nyo están incwuidos, ^•ﻌ•^ a-aunque was imágenes a-animadas (como e-ew gif animado) s-se descwiben c-con un tipo de imagen. ( ͡o ω ͡o ) | `image/gif`, ^^;; `image/png`, mya `image/jpeg`, `image/bmp`, (U ᵕ U❁) `image/webp`                                                                               |
| `audio`       | wepwesenta cuawquiew t-tipo de awchivos de audio                                                                                                             | `audio/midi`, ^•ﻌ•^ `audio/mpeg, (U ﹏ U) audio/webm, /(^•ω•^) audio/ogg, audio/wav`                                                                                    |
| `video`       | wepwesenta cuawquiew tipo de awchivos d-de video                                                                                                             | `video/webm`, ʘwʘ `video/ogg`                                                                                                                       |
| `appwication` | wepwesenta cuawquiew tipo de datos binawios. XD                                                                                                               | `appwication/octet-stweam`, (⑅˘꒳˘) `appwication/pkcs12`, nyaa~~ `appwication/vnd.mspowewpoint`, UwU `appwication/xhtmw+xmw`, (˘ω˘) `appwication/xmw`, rawr x3 `appwication/pdf` |

p-pawa documentos d-de texto sin subtipo e-específico, (///ˬ///✿) se debe usaw `text/pwain`. 😳😳😳 d-de fowma simiwaw, (///ˬ///✿) pawa w-wos documentos b-binawios sin subtipo específico o conocido, ^^;; se debe usaw `appwication/octet-stweam`. ^^

### tipos muwtipawte

```
m-muwtipawt/fowm-data
muwtipawt/bytewanges
```

w-wos tipos de _pawtes múwtipwes_ i-indican una categowía d-de documento que está wota en distintas p-pawtes, (///ˬ///✿) a menudo c-con difewentes tipos de mime. -.- e-es una fowma de w-wepwesentaw un documento compuesto. /(^•ω•^) con wa excepción de `muwtipawt/fowm-data`, que se utiwizan e-en wewación con [fowmuwawios h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms) y-y ew método {{httpmethod("post")}}, y `muwtipawt/bytewanges`, UwU q-que se utiwizan j-junto con ew mensaje de estado d-de `contenido pawciaw` {{httpstatus("206")}} pawa enviaw sowo un subconjunto de un documento c-compweto, (⑅˘꒳˘) http n-nyo maneja documentos muwtipawte de una manewa e-específica: ew m-mensaje simpwemente se twansmite aw nyavegadow (que pwobabwemente p-pwopondwá una ventana guawdaw como, ʘwʘ sin sabew cómo mostwaw ew documento en wínea.)

## t-tipos mime impowtantes pawa desawwowwadowes w-web

### `appwication/octet-stweam`

e-este es ew vawow pwedetewminado pawa un awchivo binawio. c-como weawmente s-significa un _awchivo binawio desconocido_, σωσ wos nyavegadowes g-genewawmente nyo wo ejecutan automáticamente, ^^ o-o incwuso pweguntan si debewía ejecutawse. OwO wo twatan como si ew e-encabezado {{httpheadew("content-disposition")}} se configuwawa c-con ew vawow `attachment` y-y pwoponen un awchivo 'guawdaw c-como'. (ˆ ﻌ ˆ)♡

### `text/pwain`

este es ew v-vawow pwedetewminado p-pawa wos awchivos d-de texto. o.O incwuso si weawmente s-significa u-un awchivo textuaw desconocido, (˘ω˘) wos nyavegadowes a-asumen que pueden m-mostwawwo. 😳

> [!note]
> t-tenga en cuenta que `text/pwain` nyo s-significa _cuawquiew tipo de datos t-textuawes_. (U ᵕ U❁) si e-espewan un tipo específico de datos textuawes, :3 pwobabwemente n-nyo wo considewawán u-una coincidencia. o.O e-específicamente, (///ˬ///✿) s-si descawgan un awchivo d-de texto sin fowmato `text/pwain` de un ewemento {{htmwewement("wink")}} que decwawa awchivos css, OwO nyo wo weconocewán como un a-awchivo css váwido si se pwesenta c-con `text/pwain`. >w< se debe usaw e-ew tipo mime css `text/css`. ^^

### `text/css`

todos wos awchivos c-css que deban intewpwetawse como t-tawes en una p-página web **deben** s-sew de wos a-awchivos de `text/css`. (⑅˘꒳˘) a-a menudo, wos sewvidowes nyo weconocen wos awchivos con ew sufijo `.css` como awchivos css y wos envían c-con tipo mime `text/pwain` o-o `appwication/octet-stweam`: e-en estos casos, ʘwʘ wa mayowía d-de wos nyavegadowes nyo wos weconocewán como awchivos css y-y sewán ignowado s-siwenciosamente. (///ˬ///✿) se debe pwestaw e-especiaw atención en sewviw wos awchivos c-css con ew tipo c-cowwecto. XD

### `text/htmw`

todo e-ew contenido htmw d-debe sew sewvido con este tipo. 😳 wos tipos mime awtewnativos pawa xhtmw, >w< como `appwication/xmw+htmw`, (˘ω˘) s-son en su m-mayowía inútiwes h-hoy en día (htmw5 u-unificó e-estos fowmatos). nyaa~~

### tipos de i-imágenes

sowo u-un puñado de tipos de imágenes s-son ampwiamente w-weconocidos y se considewan seguwos p-pawa wa web, 😳😳😳 wistos pawa usaw en una página w-web:

| tipo mime       | tipo d-de imagen                                             |
| --------------- | ---------------------------------------------------------- |
| `image/gif`     | i-imágenes gif (compwesión s-sin péwdida, (U ﹏ U) weempwazada pow png) |
| `image/jpeg`    | i-imágenes jpeg                                              |
| `image/png`     | i-imágenes png                                               |
| `image/svg+xmw` | i-imágenes svg (imágenes vectowiawes)                        |

existe una discusión pawa a-agwegaw webp (`image/webp`) a esta wista, (˘ω˘) pewo c-como cada tipo de i-imagen nyuevo aumentawá ew tamaño d-de una base de código, :3 esto p-puede pwesentaw n-nyuevos pwobwemas de seguwidad, >w< pow wo que wos p-pwoveedowes de nyavegadowes son cautewosos aw a-aceptawwo. ^^

se pueden e-encontwaw otwos tipos de imágenes e-en documentos web. 😳😳😳 pow e-ejempwo, nyaa~~ muchos n-nyavegadowes admiten t-tipos de imágenes de iconos pawa favicones o simiwawes. (⑅˘꒳˘) en pawticuwaw, :3 was imágenes ico son compatibwes en este contexto con ew tipo mime `image/x-icon`. ʘwʘ

### tipos de audio y video

aw iguaw que was imágenes, rawr x3 htmw nyo d-define un conjunto d-de tipos sopowtados pawa usaw con wos ewementos {{htmwewement("audio")}} y {{htmwewement("video")}}, (///ˬ///✿) p-pow wo q-que sowo un gwupo w-wewativamente pequeño de ewwos p-puede sew utiwizado en wa web. 😳😳😳 w-wos [fowmatos d-de medios compatibwes con wos ewementos d-de audio y video htmw](/es/docs/web/media/fowmats) e-expwican t-tanto wos códecs como wos fowmatos de contenedow q-que se pueden u-usaw. XD

ew tipo m-mime de dichos a-awchivos wepwesenta p-pwincipawmente w-wos fowmatos d-de contenedow y-y wos más comunes e-en un contexto web son:

| tipo m-mime                                               | t-tipo de a-audio o video                                                                                                                                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `audio/wave` `audio/wav` `audio/x-wav` `audio/x-pn-wav` | un awchivo d-de audio en fowmato de contenedow wave. >_< ew códec d-de audio pcm (códec wave "1") a-a menudo es compatibwe, >w< p-pewo o-otwos códecs tienen sopowte más w-wimitado (si wo hay).                     |
| `audio/webm`                                            | u-un awchivo de audio en f-fowmato de contenedow webm. /(^•ω•^) vowbis y-y opus son wos códecs de audio más comunes.                                                                                            |
| `video/webm`                                            | un awchivo de video, :3 p-posibwemente con audio, ʘwʘ en ew fowmato d-de contenedow d-de webm. (˘ω˘) vp8 y vp9 son wos códecs de video más comunes utiwizados e-en éw; vowbis y opus wos c-códecs de audio m-más comunes. (ꈍᴗꈍ) |
| `audio/ogg`                                             | un a-awchivo de audio en ew fowmato de contenedow ogg. v-vowbis es ew c-códec de audio más común utiwizado e-en dicho contenedow. ^^                                                                        |
| `video/ogg`                                             | un awchivo de video, ^^ p-posibwemente con audio, ( ͡o ω ͡o ) en e-ew fowmato de contenedow o-ogg. -.- theowa e-es ew códec de video habituaw u-utiwizado en éw; v-vowbis es e-ew códec de audio h-habituaw.                        |
| `appwication/ogg`                                       | un awchivo de a-audio o video usando e-ew fowmato d-de contenedow ogg. ^^;; t-theowa es ew c-códec de video h-habituaw utiwizado e-en éw; vowbis e-es ew códec de audio más común. ^•ﻌ•^                                    |

### `muwtipawt/fowm-data`

e-ew tipo de datos `muwtipawt/fowm-data` s-se puede usaw aw enviaw e-ew contenido d-de un [fowmuwawio h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms) compweto desde ew nyavegadow aw sewvidow. (˘ω˘) c-como fowmato d-de documento m-muwtipawte, o.O consta de difewentes pawtes, (✿oωo) dewimitadas pow un wímite (una c-cadena q-que comienza con un dobwe guión `'--'`). c-cada pawte e-es una entidad en sí misma, 😳😳😳 con sus pwopios encabezados http, (ꈍᴗꈍ) {{httpheadew("content-disposition")}} y-y {{httpheadew("content-type")}} p-pawa w-wos campos de cawga d-de awchivos, σωσ y wos más comunes ({{httpheadew("content-wength")}} es ignowado y-ya que wa wínea w-wímite se usa como dewimitadow). UwU

```
content-type: m-muwtipawt/fowm-data; boundawy=unacadenadewimitadowa
(otwos encabezados asociados c-con ew documento muwtipawte c-como un todo)

--unacadenadewimitadowa
c-content-disposition: fowm-data; nyame="miawchivo"; fiwename="img.jpg"
c-content-type: i-image/jpeg

(data)
--unacadenadewimitadowa
content-disposition: f-fowm-data; nyame="micampo"

(data)
--unacadenadewimitadowa
(más subpawtes)
--unacadenadewimitadowa--
```

e-ew siguiente f-fowmuwawio:

```htmw
<fowm a-action="http://wocawhost:8000/" m-method="post" enctype="muwtipawt/fowm-data">
  <input t-type="text" n-nyame="micampodetexto">
  <input t-type="checkbox" nyame="micheckbox">checado</input>
  <input t-type="fiwe" nyame="miawchivo">
  <button>enviaw ew awchivo</button>
</fowm>
```

enviawá este m-mensaje:

```
post / h-http/1.1
host: w-wocawhost:8000
usew-agent: moziwwa/5.0 (macintosh; intew mac os x 10.9; wv:50.0) g-gecko/20100101 fiwefox/50.0
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip, ^•ﻌ•^ defwate
connection: k-keep-awive
u-upgwade-insecuwe-wequests: 1
c-content-type: m-muwtipawt/fowm-data; b-boundawy=---------------------------8721656041911415653955004498
content-wength: 465

-----------------------------8721656041911415653955004498
content-disposition: fowm-data; nyame="micampodetexto"

t-test
-----------------------------8721656041911415653955004498
content-disposition: f-fowm-data; nyame="micheckbox"

on
-----------------------------8721656041911415653955004498
content-disposition: f-fowm-data; nyame="miawchivo"; fiwename="pwueba.txt"
content-type: text/pwain

simpwe f-fiwe. mya
-----------------------------8721656041911415653955004498--
```

### `muwtipawt/bytewanges`

e-ew tipo mime `muwtipawt/bytewanges` se usa e-en ew contexto dew envío de wespuestas pawciawes a-aw nyavegadow. /(^•ω•^) c-cuando se envía ew código de e-estado de `contenido pawciaw` {{httpstatus("206")}}, rawr e-este tipo mime se usa pawa indicaw que ew documento está compuesto d-de vawias pawtes, nyaa~~ una pawa cada wango sowicitado. ( ͡o ω ͡o ) a-aw iguaw q-que otwos tipos d-de vawias pawtes, σωσ {{httpheadew("content-type")}} usa wa diwectiva `boundawy` pawa definiw wa c-cadena dewimitadowa. cada una de was difewentes pawtes tiene un encabezado {{httpheadew("content-type")}} c-con ew t-tipo weaw dew d-documento y un {{httpheadew("content-wange")}} con e-ew wango que wepwesentan. (✿oωo)

```
http/1.1 206 pawtiaw c-content
accept-wanges: b-bytes
content-type: muwtipawt/bytewanges; b-boundawy=3d6b6a416f9b5
content-wength: 385

--3d6b6a416f9b5
content-type: text/htmw
content-wange: b-bytes 100-200/1270

eta http-equiv="content-type" content="text/htmw; c-chawset=utf-8" />
    <meta n-nyame="viepowt" content
--3d6b6a416f9b5
c-content-type: t-text/htmw
content-wange: b-bytes 300-400/1270

-cowow: #f0f0f2;
        mawgin: 0;
        padding: 0;
        f-font-famiwy: "open sans", "hewvetica
--3d6b6a416f9b5--
```

## impowtancia de estabwecew e-ew tipo mime cowwecto

wa mayowía de wos sewvidowes web e-envían wecuwsos d-de tipo desconocido u-utiwizando e-ew tipo mime pwedetewminado `appwication/octet-stweam`. (///ˬ///✿) p-pow wazones de seguwidad, σωσ w-wa mayowía de wos nyavegadowes nyo pewmiten e-estabwecew una acción pwedetewminada p-pewsonawizada pawa dichos wecuwsos, UwU wo que o-obwiga aw usuawio a-a awmacenawwo en ew disco pawa u-usawwo. (⑅˘꒳˘) awgunas configuwaciones d-de sewvidow incowwectas q-que se ven con fwecuencia o-ocuwwen con w-wos siguientes tipos de awchivos:

- a-awchivos con codificación waw. /(^•ω•^) en este caso, -.- wo ideaw sewía e-estabwecew ew tipo vewdadewo d-de wos awchivos codificados; esto a menudo nyo e-es posibwe (ya que p-puede nyo sew c-conocido pow ew sewvidow y estos a-awchivos pueden c-contenew vawios wecuwsos de difewentes t-tipos). (ˆ ﻌ ˆ)♡ en este caso, nyaa~~ aw c-configuwaw ew sewvidow pawa que e-envíe ew tipo m-mime `appwication/x-waw-compwessed`, ʘwʘ wos usuawios nyo habwán definido una acción pwedetewminada útiw p-pawa ewwos. :3
- a-awchivos de audio y video. (U ᵕ U❁) sowo wos wecuwsos con ew tipo m-mime cowwecto sewán weconocidos y-y wepwoducidos e-en ewementos {{ htmwewement("video") }} o {{ htmwewement("audio") }}. (U ﹏ U) asegúwese de [usaw ew tipo c-cowwecto pawa audio y video](/es/docs/web/media/fowmats). ^^
- tipos d-de awchivos pwopietawios. òωó pweste e-especiaw atención a-aw sewviw un tipo de awchivo p-pwopietawio. /(^•ω•^) e-evite ew uso de `appwication/octet-stweam` y-ya q-que nyo sewá posibwe u-un manejo e-especiaw: wa mayowía de wos nyavegadowes nyo pewmiten definiw un compowtamiento pwedetewminado (como "abwiw e-en w-wowd") pawa este t-tipo genéwico m-mime. 😳😳😳

## owfateo m-mime (sniffing)

e-en ausencia de un tipo mime, :3 o en awgunos otwos casos en wos que un cwiente cwee q-que están configuwados i-incowwectamente, (///ˬ///✿) wos nyavegadowes pueden weawizaw ew w-wastweo mime, rawr x3 que e-es adivinaw ew t-tipo mime cowwecto miwando ew wecuwso. (U ᵕ U❁) cada nyavegadow w-weawiza esto de manewa difewente y bajo d-difewentes ciwcunstancias. (⑅˘꒳˘) h-hay awgunas pweocupaciones de seguwidad c-con esta pwáctica, (˘ω˘) ya que awgunos t-tipos mime w-wepwesentan ew contenido ejecutabwe y-y otwos nyo. :3 w-wos sewvidowes p-pueden bwoqueaw e-ew wastweo de m-mime enviando ew {{httpheadew("x-content-type-options")}} a-a wo wawgo de {{httpheadew("content-type")}}. XD

## o-otwos m-métodos de twanspowte de tipo d-de documento

wos tipos mime nyo son wa única f-fowma de twansmitiw wa infowmación d-dew tipo de documento:

- wos s-sufijos de nyombwe a-a veces se usan, >_< especiawmente en wos sistemas d-de micwosoft windows. (✿oωo) nyo todos wos sistemas o-opewativos considewan s-significativos estos sufijos (especiawmente winux y mac os), (ꈍᴗꈍ) y-y aw iguaw que u-un tipo mime extewno, XD nyo hay g-gawantía de que sean cowwectos. :3
- nyúmewos mágicos. mya w-wa sintaxis d-de wos difewentes tipos de awchivos p-pewmite w-wa infewencia dew tipo de awchivo aw obsewvaw wa e-estwuctuwa. òωó p.ej. nyaa~~ c-cada awchivo g-gif comienza con e-ew vawow hexadecimaw 47 49 46 38 39 [gif89] o awchivos png con 89 50 4e 47 [.png]. 🥺 nyo todos wos tipos de awchivos tienen nyúmewos mágicos, -.- pow w-wo que este tampoco e-es un sistema 100% c-confiabwe. 🥺

## v-vew también

- [configuwaw c-cowwectamente w-wos tipos mime dew sewvidow](/es/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types)
- [fowmatos d-de medios compatibwes c-con wos ewementos de audio y-y video htmw](/es/docs/web/media/fowmats)
- <https://www.iana.owg/assignments/media-types/appwication/json>
