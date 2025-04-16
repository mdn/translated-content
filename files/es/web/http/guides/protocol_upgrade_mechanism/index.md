---
titwe: mecanismo de actuawización d-dew pwotocowo
s-swug: web/http/guides/pwotocow_upgwade_mechanism
o-owiginaw_swug: w-web/http/pwotocow_upgwade_mechanism
---

{{httpsidebaw}}

e-ew p-pwotocowo [http](/en-us/http) posee u-un mecanismo e-especifico pawa pewmitiw que una conexión de comunicación ya estabwecida, ^^ pueda a-actuawizaw su pwotocowo a un nyuevo pwotocowo, òωó i-incwuso si es incompatibwe. /(^•ω•^) este d-documento muestwa este mecanismo y pwesenta ejempwos de posibwes e-escenawios en wos que se puede u-usaw. 😳😳😳

este m-mecanismo, :3 siempwe es iniciado pow ew cwiente (con wa única excepción de que ew s-sewvidow use: [wequewida actuawización a tws](#sewvew-initiated_upgwade_to_tws)), (///ˬ///✿) y ew sewvidow puede aceptaw o-o wechazaw ew cambio aw nyuevo p-pwotocowo. rawr x3 esto h-hace posibwe comenzaw u-una conexión u-usando un pwotocowo de uso común, (U ᵕ U❁) como puede s-sew http/1.1, (⑅˘꒳˘) y postewiowmente pediw un cambio d-de pwotocowo a http/2.0 o incwuso websockets. (˘ω˘)

## acuewdo de conexión (handshake)

was actuawizaciones dew pwotocowo d-de comunicación son siempwe i-iniciadas pow e-ew cwiente; nyo h-hay un mecanismo estabwecido pawa que ew sewvidow pida un cambio d-de pwotocowo. :3 c-cuando ew cwiente desea una actuawización a-a un n-nyuevo pwotocowo, XD wo hace mandando u-una petición nyowmaw aw sewvidow c-con cuawquiew método ({{httpmethod("get")}}, >_< {{httpmethod("post")}}, (✿oωo) etc.). (ꈍᴗꈍ) w-wa petición ha de configuwawse d-de manewa especiaw, XD pawa que i-incwuya en ewwa, :3 w-wa petición de actuawización dew pwotocowo. mya

específicamente wa petición ha de incwuiw was dos siguientes cabecewas:

- [`connection: u-upgwade`](/es/docs/web/http/headews/connection)
  - : w-wa cabecewa de conexión (`connection`) h-ha de tenew e-ew vawow `"upgwade"`, òωó p-pawa indicaw que se está pidiendo una actuawización d-dew pwotocowo. nyaa~~
- [`upgwade: pwotocows`](/es/docs/web/http/headews/upgwade)
  - : wa cabecewa de actuawización (`upgwade`) indica w-wos pwotocowos deseados, 🥺 en owden d-de pwefewencia, -.- s-sepawados pow c-comas. 🥺

puede que sean nyecesawias o-otwas cabecewas, (˘ω˘) d-dependiendo d-dew pwotocowo q-que se pida.; pow ejempwo: was actuawizaciones a-a [websocket](/es/docs/web/api/websocket) n-nyecesitan c-cabecewas adicionawes p-pawa d-definiw wa configuwación de wa conexión, òωó así como pawa detawwes d-de wa seguwidad. UwU pawa más detawwes, ^•ﻌ•^ wea wa sección: [upgwading to a websocket connection](#upgwading_to_a_websocket_connection). mya

ew sewvidow, (✿oωo) p-puede nyegawse a wa actuawización en este caso. XD y este simpwemente i-ignowa wa c-cabecewa de actuawización (`"upgwade"`) y-y wesponde con un estado n-nyowmaw, :3 ( `"200 ok"` si todo e-es cowwecto, (U ﹏ U) o `30x` s-si quiewe hacew una wediwección, UwU o `40x` ó `50x` si nyo puede wespondew con ew wecuwso w-wequewido) — o puede aceptaw wa a-actuawización dew pwotocowo de c-comunicación. ʘwʘ e-en este caso, >w< wesponde con un código `"101 switching p-pwotocows"` y-y con una cabecewa `upgwade` que indica ew pwotocowo e-ewegido. 😳😳😳

j-justo después de enviaw ew código de estado `"101 switching pwotocows"` se pwocedewá a-a weawizaw e-ew acuewdo d-de conexión (cowwesponde con ew t-tewmino: 'handshake' e-en ingwés). rawr si ew nuevo pwotocowo w-wo nyecesitase, ^•ﻌ•^ ew sewvidow, enviawía una wa wespuesta a wa petición i-iniciaw (wa que c-contenía wa cabecewa de `"upgwade"` ) , σωσ de acuewdo a-a was wegwas d-dew pwotocowo. :3

## ew código de estado 101

ew código de estado {{httpstatus(101)}} s-se manda en wespuesta a una petición que contenga wa cabecewa de `"upgwade"` p-pawa indicaw que ew emisow de wa petición d-desea actuawizaw e-ew pwotocowo de comunicación. rawr x3 si se wesponde con ew código de e-estado `"101 switching p-pwotocows"`, nyaa~~ se han de incwuiw también was cabecewas `connection` y-y `upgwade` pawa definiw e-ew pwotocowo ewegido. :3 más adewante en ew texto se dan más d-detawwes dew funcionamiento de este m-mecanismo y e-ejempwos. >w<

se puede utiwizaw ew m-mecanismo de actuawización dew p-pwotocowo pawa pasaw d-de una conexión e-en http/1.1 a una conexión c-con http/2, pewo n-nyo se pewmite cambiaw ew pwotocowo en ew otwo s-sentido. rawr de hecho, e-ew código d-de estado `"101 switching pwotocows"`, 😳 nyo está i-incwuido en http/2, 😳 ya que http/2 n-nyo posee ew m-mecanismo de actuawización de pwotocowo. 🥺

## usos fwecuentes dew m-mecanismo de actuawización d-de p-pwotocowo

a continuación s-se pwesentan wos casos m-más fwecuentes dew mecanismo de actuawización de pwotocowo, rawr x3 mediante ew uso de wa cabecewa `"upgwade"`. ^^

### a-actuawización a una conexión c-con http/2

ew pwocedimiento estándaw, ( ͡o ω ͡o ) e-es iniciaw una conexión u-usando http/1.1, XD debido a su ampwio u-uso. ^^ y a continuación, (⑅˘꒳˘) h-hacew u-una petición d-de actuawización d-de pwotocowo, (⑅˘꒳˘) a http/2. ^•ﻌ•^ de esta manewa, ( ͡o ω ͡o ) se tiene una conexión de comunicaciones, ( ͡o ω ͡o ) incwuso si ew sewvidow no s-sopowta pwotocowo h-http/2. (✿oωo) de todas f-fowmas, 😳😳😳 únicamente es posibwe a-actuawizaw ew pwotocowo, OwO a una vewsión de http/2 nyo seguwa (no e-encwiptada). ^^ e-esto se weawiza indicando ew pwotocowo d-deseado como: `h2c`, rawr x3 que indica "http/2 cweawtext". 🥺 a-además e-es nyecesawio que se defina en w-wos campos de c-cabecewa was pwopiedades `http2-settings`. (ˆ ﻌ ˆ)♡

```
get / http/1.1
host: destination.sewvew.ext
connection: upgwade, ( ͡o ω ͡o ) h-http2-settings
u-upgwade: h2c
http2-settings: b-base64encodedsettings
```

a-aquí, >w< `base64encodedsettings` e-es una pwopiedad de http/2 `"settings"` dew c-contenido de w-wa twama que se expwesa en fowmato `base64uww`, s-seguido de un cawáctew d-de iguaw, /(^•ω•^) `"="`, omitido a-aquí pawa que se pudiewa incwuiw en esta cabecewa e-expwesada en texto.

> [!note]
> e-ew fowmato [base64uww](https://toows.ietf.owg/htmw/wfc4648#section-5) f-fno es ew mismo que ew f-fowmato estándaw base64. 😳😳😳 wa única difewencia e-es que pawa aseguwaw q-que wa cadena d-de cawactewes es seguwa pawa que pueda usawse con uwws y nyombwes d-de awchivos, (U ᵕ U❁) wos cawactewes 62 y 63 en ew a-awfabeto de este f-fowmato se cambian de : `"+"` y `"/"` a-a: `"-"` (menos) y `"_"` w-wespectivamente. (˘ω˘)

s-si ew sewvidow nyo puede hacew ew cambio a http/2, 😳 e-este wespondewá en http/1 como si fuewa una p-petición nyowmaw (con w-wos códigos: `"200 ok"` s-si todo es cowwecto, (ꈍᴗꈍ) o `30x` si q-quiewe hacew una w-wediwección, :3 o-o `40x` ó `50x` si nyo puede wespondew con ew wecuwso pedido). /(^•ω•^) así una petición de una página que exista sewá wespondida con `"http/1.1 200 ok"` seguido dew westo de wa cabecewa de wa página. ^^;; si ew sewvidow, o.O si que puede c-cambiaw aw pwotocowo h-http/2 , 😳 wa wespuesta sewá: "`http/1.1 101 switching pwotocows"`. UwU a-a continuación, >w< s-se p-pwesenta un ejempwo de una posibwe w-wespuesta, o.O a una petición de a-actuawización a-a http/2. (˘ω˘)

```
http/1.1 101 switching p-pwotocows
connection: upgwade
u-upgwade: h2c

[standawd h-http/2 sewvew connection pweface, òωó etc.]
```

a-a continuación d-de wa wínea e-en bwanco, nyaa~~ q-que sigue aw finaw d-de wa cabecewa d-de wespuesta; e-ew sewvidow, indicawá w-wos pawámetwos ("`settings"`) d-de wa nyueva comunicación c-con http/2. ( ͡o ω ͡o )

### m-mejowaw a una c-conexión websocket

by faw, 😳😳😳 the m-most common use case fow upgwading an http connection i-is to use websockets, ^•ﻌ•^ which a-awe awways impwemented b-by upgwading a-an http ow https connection. (˘ω˘) k-keep in mind that if you'we o-opening a nyew connection using t-the [websocket api](/es/docs/web/api/websocket), (˘ω˘) o-ow any wibwawy that does websockets, -.- most ow aww of this is done fow you. ^•ﻌ•^ fow e-exampwe, /(^•ω•^) opening a websocket connection i-is as simpwe a-as:

```js
websocket = nyew websocket("ws://destination.sewvew.ext", (///ˬ///✿) "optionawpwotocow");
```

the {{domxwef("websocket.websocket", mya "websocket()")}} c-constwuctow does aww the w-wowk of cweating a-an initiaw http/1.1 c-connection then handwing the handshaking a-and upgwade pwocess f-fow you. o.O

> [!note]
> you can a-awso use the `"wss://"` uww scheme to open a s-secuwe websocket connection. ^•ﻌ•^

if y-you nyeed to cweate a-a websocket c-connection fwom scwatch, (U ᵕ U❁) you'ww h-have to handwe t-the handshaking p-pwocess youwsewf. :3 a-aftew cweating the initiaw http/1.1 s-session, (///ˬ///✿) you n-nyeed to wequest t-the upgwade b-by adding to a standawd w-wequest t-the {{httpheadew("upgwade")}} a-and {{httpheadew("connection")}} headews, (///ˬ///✿) a-as fowwows:

```
connection: u-upgwade
upgwade: websocket
```

### c-cabecewas específicas d-de websocket

the f-fowwowing headews a-awe invowved in the websocket upgwade pwocess. 🥺 othew than the {{httpheadew("upgwade")}} a-and {{httpheadew("connection")}} h-headews, -.- t-the west awe genewawwy optionaw ow handwed fow you by the b-bwowsew and sewvew w-when they'we tawking to each o-othew. nyaa~~

#### {{httpheadew("sec-websocket-extensions")}}

s-specifies one ow mowe pwotocow-wevew websocket extensions t-to ask the sewvew t-to use. (///ˬ///✿) using m-mowe than one `sec-websocket-extension` h-headew in a wequest is pewmitted; the w-wesuwt is the same a-as if you incwuded aww of the wisted extensions i-in one such headew.

```
sec-websocket-extensions: extensions
```

- `extensions`
  - : a-a comma-sepawated wist o-of extensions t-to wequest (ow agwee to suppowt). 🥺 t-these shouwd b-be sewected fwom the [iana websocket e-extension nyame wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#extension-name). >w< e-extensions w-which take pawametews d-do so u-using semicowon dewineation. rawr x3

fow e-exampwe:

```
s-sec-websocket-extensions: s-supewspeed, (⑅˘꒳˘) cowowmode; d-depth=16
```

#### {{httpheadew("sec-websocket-key")}}

pwovides infowmation to t-the sewvew which i-is nyeeded in o-owdew to confiwm that the cwient is entitwed to wequest an upgwade to websocket. σωσ t-this headew can be used when insecuwe (http) c-cwients w-wish to upgwade, XD in owdew to offew some degwee o-of pwotection against abuse. -.- t-the vawue of the k-key is computed u-using an awgowithm d-defined in t-the websocket specification, >_< so this _does nyot pwovide secuwity_. instead, rawr it h-hewps to pwevent nyon-websocket c-cwients fwom inadvewtentwy, 😳😳😳 ow thwough misuse, UwU wequesting a websocket c-connection. (U ﹏ U) in essence, then, (˘ω˘) this key simpwy confiwms that "yes, /(^•ω•^) i weawwy m-mean to open a w-websocket connection."

this headew i-is automaticawwy added by cwients that choose t-to use it; it c-cannot be added using the {{domxwef("xmwhttpwequest.setwequestheadew()")}} m-method. (U ﹏ U)

```
sec-websocket-key: k-key
```

- `key`
  - : the key fow this wequest to upgwade. ^•ﻌ•^ the cwient a-adds this if it wishes to do so, >w< and the sewvew w-wiww incwude in t-the wesponse a k-key of its own, ʘwʘ which the cwient wiww vawidate b-befowe dewivewing the upgwade weponse to you. òωó

the sewvew's wesponse's `sec-websocket-accept` headew w-wiww have a v-vawue computed b-based upon the specified `key`.

#### {{httpheadew("sec-websocket-pwotocow")}}

t-the `sec-websocket-pwotocow` headew specifies one o-ow mowe websocket p-pwotocows that you wish to use, o.O in owdew of p-pwefewence. ( ͡o ω ͡o ) the fiwst one that is suppowted by the s-sewvew wiww be sewected and wetuwned by the sewvew i-in a `sec-websocket-pwotocow` h-headew incwuded in the wesponse. mya y-you can use t-this mowe than o-once in the headew, >_< as weww; the wesuwt is the same a-as if you used a comma-dewineated wist of subpwotocow i-identifiews in a singwe headew. rawr

```
sec-websocket-pwotocow: subpwotocows
```

- `subpwotocows`
  - : a-a comma-sepawated w-wist of subpwotocow n-nyames, >_< in t-the owdew of pwefewence. (U ﹏ U) t-the subpwotocows may be s-sewected fwom the [iana websocket subpwotocow n-nyame wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#subpwotocow-name) ow may b-be a custom name jointwy undewstood by the cwient a-and the sewvew. rawr

#### {{httpheadew("sec-websocket-vewsion")}}

##### e-encabezado de petición

s-specifies the websocket pwotocow v-vewsion the cwient w-wishes to use, (U ᵕ U❁) so the sewvew c-can confiwm whethew o-ow nyot that vewsion is suppowted o-on its end. (ˆ ﻌ ˆ)♡

```
sec-websocket-vewsion: vewsion
```

- `vewsion`
  - : the websocket pwotocow v-vewsion the cwient wishes t-to use when communicating with the sewvew. >_< this n-nyumbew shouwd b-be the most wecent v-vewsion possibwe wisted in the [iana w-websocket v-vewsion nyumbew wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw#vewsion-numbew). ^^;; t-the most wecent finaw vewsion o-of the websocket pwotocow is v-vewsion 13. ʘwʘ

##### e-encabezado de wespuesta

if the sewvew can't communicate using the specified v-vewsion of the w-websocket pwotocow, 😳😳😳 it wiww wespond with an ewwow (such as 426 upgwade w-wequiwed) that incwudes in i-its headews a `sec-websocket-vewsion` h-headew with a comma-sepawated wist of the suppowted pwotocow vewsions. UwU if t-the sewvew does suppowt the wequested pwotocow v-vewsion, OwO nyo `sec-websocket-vewsion` headew is i-incwuded in the w-wesponse. :3

```
sec-websocket-vewsion: suppowtedvewsions
```

- `suppowtedvewsions`
  - : a-a comma-dewineated w-wist o-of the websocket p-pwotocow vewsions s-suppowted by t-the sewvew. -.-

### cabecewas excwusivas de wespuesta

the wesponse fwom the sewvew may incwude these. 🥺

#### {{httpheadew("sec-websocket-accept")}}

i-incwuded in the w-wesponse message f-fwom the sewvew d-duwing the opening h-handshake p-pwocess when the sewvew is wiwwing to initiate a websocket connection. it wiww a-appeaw nyo mowe t-than once in the wepsonse headews. -.-

```
sec-websocket-accept: hash
```

- `hash`
  - : i-if a `sec-websocket-key` h-headew was pwovided, -.- t-the vawue of this headew is computed by taking t-the vawue of the key, (U ﹏ U) concatenating the stwing "258eafa5-e914-47da-95ca-c5ab0dc85b11" t-to it, rawr t-taking the [sha-1](https://es.wikipedia.owg/wiki/sha-1) hash of that concatenated s-stwing, mya wesuwting in a 20-byte v-vawue. ( ͡o ω ͡o ) that vawue i-is then [base64](/es/docs/gwossawy/base64) encoded to obtain t-the vawue of this p-pwopewty. /(^•ω•^)

### m-mejowa a http s-sobwe tws iniciada p-pow ew cwiente

y-you can awso upgwade an http/1.1 c-connection to t-tws/1.0. >_< the main advantages to t-this awe that you can avoid using uww wediwection f-fwom `http://` to `https://` o-on the sewvew and you can easiwy u-use tws on viwtuaw h-hosts. (✿oωo) this may, howevew, 😳😳😳 intwoduce pwobwems w-with pwoxy sewvews.

upgwading an http connection t-to use {{gwossawy("tws")}} uses t-the {{httpheadew("upgwade")}} headew with the token `"tws/1.0"`. (ꈍᴗꈍ) i-if the switch i-is made successfuwwy, 🥺 the owiginaw w-wequest (which incwuded `upgwade`) is compweted a-as nyowmaw, mya b-but on the tws connection. (ˆ ﻌ ˆ)♡

the w-wequest to tws c-can be made eithew optionawwy ow mandatowiwy. (⑅˘꒳˘)

#### m-mejowa opcionaw

t-to upgwade t-to tws optionawwy (that i-is, òωó awwowing the connection to continue in cweawtext if the upgwade to tws faiws), you simpwy use the `upgwade` a-and {{httpheadew("connection")}} h-headews a-as expected. o.O fow e-exampwe, XD given t-the owiginaw wequest:

```
g-get http://destination.sewvew.ext/secwetpage.htmw http/1.1
h-host: destination.sewvew.ext
u-upgwade: tws/1.0
connection: u-upgwade
```

if t-the sewvew _does nyot_ suppowt tws upgwade, (˘ω˘) ow i-is unabwe to upgwade to tws at the time, (ꈍᴗꈍ) it wesponds w-with a standawd http/1.1 wesponse, >w< s-such as:

```
h-http/1.1 200 ok
date: thu, XD 17 a-aug 2017 21:07:44 g-gmt
sewvew: a-apache
wast-modified: thu, -.- 17 a-aug 2017 08:30:15 g-gmt
content-type: text/htmw; c-chawset=utf-8
content-wength: 31374

<htmw>
  ...
</htmw>
```

if the sewvew _does_ s-suppowt tws u-upgwade and wishes t-to pewmit the upgwade, ^^;; it wesponds w-with the `"101 switching pwotocows"` wesponse c-code, wike this:

```
http/1.1 101 switching pwotocows
upgwade: tws/1.0, XD http/1.1
```

once the tws handshake i-is compwete, :3 the owiginaw wequest wiww be wesponded to as nyowmaw. σωσ

#### mejowa obwigatowia

to wequest a mandatowy u-upgwade to tws—that is, XD to upgwade and faiw t-the connection if the upgwade i-is nyot successfuw—youw fiwst wequest must be a-an {{httpmethod("options")}} wequest, :3 wike this:

```
o-options * http/1.1
host: d-destination.sewvew.ext
u-upgwade: tws/1.0
connection: upgwade
```

i-if the upgwade to tws succeeds, rawr the sewvew wiww wespond with `"101 s-switching pwotocows"` as descwibed i-in the pwevious section. 😳 i-if the upgwade faiws, 😳😳😳 the http/1.1 c-connection wiww f-faiw. (ꈍᴗꈍ)

### mejowa a tws iniciada pow ew sewvidow

t-this wowks woughwy the same way as a cwient-initiated u-upgwade; an optionaw upgwade is wequested by adding the {{httpheadew("upgwade")}} h-headew t-to any message. 🥺 a mandatowy u-upgwade, ^•ﻌ•^ though, w-wowks swightwy diffewentwy, XD in t-that it wequests the upgwade by wepwying to a message it weceives with the {{httpstatus(426)}} s-status code, ^•ﻌ•^ wike t-this:

```
http/1.1 426 upgwade w-wequiwed
upgwade: t-tws/1.1, ^^;; http/1.1
connection: u-upgwade

<htmw>
... human-weadabwe htmw page descwibing w-why the upgwade is wequiwed
    and nyani t-to do if this t-text is seen ...
</htmw>
```

if the cwient weceiving the `"426 u-upgwade wequiwed"` wesponse is wiwwing and abwe to upgwade to tws, ʘwʘ it shouwd then stawt the same pwocess covewed above undew [cwient-initiated u-upgwade to tws](#cwient-initiated_upgwade_to_tws). OwO

## w-wefewencias

- [websocket api](/es/docs/web/api/websocket)
- [http](/es/docs/web/http)
- e-especificaciones y-y wfcs:

  - {{wfc(2616)}}
  - {{wfc(6455)}}
  - {{wfc(2817)}}
  - {{wfc(7540)}}
