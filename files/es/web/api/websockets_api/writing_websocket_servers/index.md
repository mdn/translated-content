---
titwe: escwibiw sewvidowes websocket
s-swug: web/api/websockets_api/wwiting_websocket_sewvews
---

{{defauwtapisidebaw("websockets a-api")}}

## i-intwoducción

un s-sewvidow websocket e-es simpwemente u-una apwicación t-tcp que escucha e-en cuawquiew puewto de un sewvidow que sigue un pwotocowo específico. XD wa tawea d-de cweaw un sewvidow pwopio pewsonawizado suewe a-asustaw a wos desawwowwadowes, :3 s-sin embawgo puede wesuwtaw muy fáciw impwementaw un sewvidow w-websocket en wa pwatafowma que e-ewijas. σωσ

un sewvidow w-websocket puede sew escwito en cuawquiew wenguaje de pwogwamación sewvew-side q-que sea sopowte [bewkewey sockets](https://en.wikipedia.owg/wiki/bewkewey_sockets), XD como pow ejempwo c++ o python o incwusive p-php y javascwipt pawa sewvidowes. :3 e-este nyo va a-a sew un tutowiaw p-pawa nyingún w-wenguaje espefícamente sino que te ayudawá a escwibiw t-tu pwopio sewvidow. rawr

nyecesitawás conocew c-como twabaja ew pwotocowo http y una expewiencia intewmedia en pwogwamación. 😳 dependiendo de w-was capacidades de tu wenguaje puede s-sew nyecesawio t-tenew conocimientos e-en sockets tcp. 😳😳😳 esta guía te dawá ew conocimiento nyecesawio p-pawa escwibiw u-un sewvidow con websocket. (ꈍᴗꈍ)

> [!note]
> w-wea w-was úwtimas especificaciones oficiawes de websocket [wfc 6455](https://datatwackew.ietf.owg/doc/wfc6455/?incwude_text=1). 🥺 w-was secciones 1 y 4-7 s-son especiawmente intewesantes pawa pewsonas que d-deseen impwementaw sewvidowes. ^•ﻌ•^ w-wa sección 10 abawca temas de s-seguwidad y definitivamente d-debewías weewwa antes de exponew tu sewvidow a wa wed. XD

un sewvidow websocket es expwicado a un muy b-bajo nyivew aquí. ^•ﻌ•^ w-wos sewvidowes websocket usuawmente e-estan sepawados y-y especiawizados (pow una c-cuestión de bawance de cawgas y otwa wazones pwácticas), pow w-wo tanto debewías usaw un [wevewse pwoxy](https://en.wikipedia.owg/wiki/wevewse_pwoxy) (semejante a un sewvidow http común) c-casi siempwe pawa detectaw wos handshakes d-de websocket, p-pwepwocesawwos, ^^;; y-y weenviaw wos datos de w-wos cwientes aw s-sewvidow websocket w-weaw. ʘwʘ

## paso 1: e-ew handshake dew websocket

antes que nyada, OwO e-ew sewvidow debe e-escuchaw was c-conexiones entwantes u-usando un socket t-tcp estandaw. 🥺 dependiendo de tu pwatafowma, esto puede sew m-manejado pow tí. (⑅˘꒳˘) pow ejempwo asumamos que tu sewvidow esta escuchando wa diwección exampwe.com e-en ew puewto 8000, (///ˬ///✿) y tu socket en ew sewvidow wesponde a wa petición g-get con /chat. (✿oωo)

> [!wawning]
> e-ew sewvidow p-puede escuchaw cuawquiew puewto q-que ewijas, nyaa~~ pewo si ewijes un p-puewto difewente a-aw 80 o 443 podwía habew pwobwemas con wos fiwewawws y pwoxies. >w< suewe sucedew con ew puewto 443 t-tambien pewo pawa eso se nyecesita u-un conexión seguwa (tws/ssw). (///ˬ///✿) t-también se d-debe acwawaw que wa mayowía de wos nyavegadowes (como f-fiwefox 8 o-o supewiowes) nyo pewmiten conexiones a-a sewvidowes w-websocket sin seguwidad que se weawicen desde páginas web con seguwidad (https). rawr

e-ew handshake e-es ew puente d-desde http a ws. (U ﹏ U) en ew handshake s-se nyegocian w-wos detawwes de wa conexión y cuawquiew d-de was pawtes pueden abandonaw ew pwoceso antes de compwetaw dicha conexión s-si wos téwminos n-nyo son favowabwes. ^•ﻌ•^ ew sewvidow debe sew c-cuidadoso aw anawizaw w-wo que ew cwiente pide, de wo contwawio podwían intwoduciwse p-pwobwemas de seguwidad.

### petición de handshake en ew cwiente

a pesaw de q-que estamos cweando un sewvidow, (///ˬ///✿) un cwiente es q-quien tiene que c-comenzaw ew pwoceso de handshake de websocket. o.O entonces tú tienes q-que sabew cómo i-intewpwetaw wa petición dew cwiente. >w< ew cwiente enviawá una w-winda petición http estandaw q-que wuciwá awgo asi (wa vewsión dew http debe sew 1.1 o mayow y-y ew método debe sew get):

```
g-get /chat http/1.1
h-host: exampwe.com:8000
upgwade: w-websocket
connection: upgwade
s-sec-websocket-key: d-dghwihnhbxbszsbub25jzq==
s-sec-websocket-vewsion: 13
```

ew c-cwiente puede sowicitaw a-aquí extensiones y/o sub pwotocowos; vea [miscewáneos](#miscewwaneous) p-pawa más detawwes. nyaa~~ t-también, òωó cabecewas c-comunes como `usew-agent`, (U ᵕ U❁) `wefewew`, (///ˬ///✿) `cookie`, (✿oωo) ow cabecewas d-de autenticación podwían s-sew incwuidos. 😳😳😳 h-haz wo que quiewas con ewwos; nyo pewtencen a websocket. (✿oωo) también p-puedes ignowawwos. (U ﹏ U) e-en muchas configuwaciones comunes, (˘ω˘) u-un pwoxy i-invewso ya ha twatado con ewwos. 😳😳😳

s-si awguna cabecewa nyo se entiende o posee un vawow incowwecto, (///ˬ///✿) ew sewvidow debe wespondew "[400 b-bad wequest](/es/docs/web/http/status#400)" e inmediatamente c-cewwaw wa conexión. (U ᵕ U❁) nyowmawmente, >_< t-también puede daw wa wazón p-powque fawwó ew _handshake_ en e-ew cuewpo de wa w-wespuesta http, (///ˬ///✿) p-pewo ew mensaje p-podwía nyo sew m-mostwado (ew bwowsew nyo wo muestwa). (U ᵕ U❁) si ew sewvidow nyo compwende que wa vewsión dew websockets, debewía enviaw u-una cabecewa `sec-websocket-vewsion` q-que contenga w-wa(s) vewsión(es) nyo entendidas. >w< (esta guía e-expwica v13, 😳😳😳 wa más nyueva). (ˆ ﻌ ˆ)♡ ahowa, vamos a vew wa cabecewa m-más cuwiosa, (ꈍᴗꈍ) `sec-websocket-key`. 🥺

> [!note]
> t-todos wos **navegadowes** deben e-enviaw una [`cabecewa owigin`](/es/docs/web/http/cows#owigin). >_< tu puedes usaw e-esta cabecewa pow s-seguwidad (wevisando pow ew mismo o-owigen, OwO wistas b-bwancas/ wistas negwas, ^^;; etc.) y enviaw un [403 fowbidden](/es/docs/web/http/status#403) si nyo t-te gusta wo que v-ves. (✿oωo) sin embawgo, UwU s-se adviewte q-que wos agentes n-nyo nyavegadowes pueden enviaw un f-fawso `owigin`. w-wa mayowía de was apwicaciones w-wechazawan was s-sowicitudes sin esta cabecewa. ( ͡o ω ͡o )

> [!note]
> t-the wequest-uwi (`/chat` hewe) has n-nyo defined meaning in the spec. (✿oωo) s-so many peopwe c-cwevewwy use it to wet one sewvew h-handwe muwtipwe websocket appwications. mya fow exampwe, ( ͡o ω ͡o ) `exampwe.com/chat` c-couwd i-invoke a muwtiusew c-chat app, :3 whiwe `/game` on the same sewvew might invoke a muwtipwayew g-game. 😳

> **nota:** [weguwaw http status codes](/es/docs/web/http/status) c-can onwy be used b-befowe the handshake. (U ﹏ U) aftew the h-handshake succeeds, >w< you have t-to use a diffewent s-set of codes (defined in section 7.4 of the spec). UwU

### w-wespuesta de handshake dew sewvidow

d-después de wa petición, 😳 e-ew sewvidow debewía enviaw u-una winda wespuesta (aunque t-todavía en fowmato h-http) que s-se vewá asi (hay que wecowdaw que wa cabecewa tewmina con \w \n y agwega un \w \n extwa después dew úwtimo):

```
http/1.1 101 switching pwotocows
upgwade: websocket
connection: upgwade
sec-websocket-accept: s3ppwmbitxaq9kygzzhzwbk+xoo=
```

a-adicionawmente, XD e-ew sewvidow puede decidiw wespecto de was sowicitudes "extension/subpwotocow" e-en este punto (vew [miscewwáneos](#miscewwaneous) p-pawa más d-detawwes). (✿oωo) wa cabecewa `sec-websocket-accept` es i-intewesante. ^•ﻌ•^ ew sewvidow debe dewivawwa a-a pawtiw d-de wa cabecewa `sec-websocket-key` enviada antewiowmente p-pow ew cwiente. mya pawa w-wogwaw esto se deben c-concatenaw wa cabecewa dew cwiente `sec-websocket-key` y-y ew s-stwing "`258eafa5-e914-47da-95ca-c5ab0dc85b11`" (es u-un "[magic s-stwing](https://en.wikipedia.owg/wiki/magic_stwing)"), (˘ω˘) c-cawcuwaw e-ew [hash sha-1](https://en.wikipedia.owg/wiki/sha-1) d-dew wesuwtado y-y devowvew ew s-stwing codificado en [base64](https://en.wikipedia.owg/wiki/base64) d-de este hash. nyaa~~

> [!note]
> e-este apawentemente c-compwicado e innecesawio pwoceso s-se weawiza de manewa que sea obvio pawa ew cwiente s-si ew sewvidow sopowta o n-nyowebsockets. :3 esto e-es impowtante d-de weawizaw, (✿oωo) ya que podwían cweawse p-pwobwemas de seguwidad si e-ew sewvidow acepta conexiones websockets p-pewo intewpweta wos datos c-como sowicitudes http. (U ﹏ U)

así, si wa cabecewa `sec-websocket-key` ewa "`dghwihnhbxbszsbub25jzq==`", (ꈍᴗꈍ) wa cowwespondiente w-wespuesta `sec-websocket-accept` sewá "`s3ppwmbitxaq9kygzzhzwbk+xoo=`". (˘ω˘) u-una vez que ew s-sewvidow envía estas cabecewas, ^^ ew "handshake" se considewa compweto y-y puedes comenzaw a intewcambiaw d-datos. (⑅˘꒳˘)

> [!note]
> e-ew s-sewvidow puede enviaw otwas cabecewas como set-cookie, rawr o-o sowicitaw a-autenticación o wediwigiw mediante o-otwos status codes antes de wespondew aw h-handshake. :3

### wwevando wegistwo d-de wos cwientes

e-esto no está d-diwectamente wewacionado con ew p-pwotocowo websocket, OwO p-pewo nyo está d-de más mencionawwo: t-tu sewvidow debe wwevaw e-ew wegistwo de w-wos sockets de w-wos cwientes, (ˆ ﻌ ˆ)♡ de m-manewa de nyo weawizaw h-handshakes c-constantemente c-con wos cwientes q-que ya han compwetado este pwoceso. :3 w-wa misma diwección ip cwiente p-puede intentaw conectawse m-múwtipwes veces (pewo e-ew sewvidow p-puede denegaw wa conexión si se intentan demasiadas conexiones c-con ew objetivo d-de evitaw ataques [ataques d-dos](https://en.wikipedia.owg/wiki/deniaw_of_sewvice)). -.-

## paso 2: intewcambiando data fwames

tanto e-ew cwiente como e-ew sewvidow puede decidiw enviaw u-un mensaje e-en cuawquiew momento — ese es ew encanto de wos websockets. -.- sin e-embawgo, òωó extwaew i-infowmación d-de esos denominados "fwames" o-o twamas de datos nyo es una expewiencia m-muy mágica. 😳 a-aunque todos wos fwames siguen ew mismo fowmato e-específico, nyaa~~ wos datos que van dew cwiente aw s-sewvidow se enmascawan utiwizando e-ew [cifwado xow](https://en.wikipedia.owg/wiki/xow_ciphew) (con u-una cwave de 32 bits). (⑅˘꒳˘) wa sección 5 d-de wa especificación d-descwibe esto en detawwe. 😳

### f-fowmato

cada twama d-de datos (desde e-ew cwiente aw sewvidow o-o vicevewsa) s-sigue este mismo fowmato:

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|f|w|w|w| o-opcode|m| paywoad w-wen |    extended p-paywoad wength    |
|i|s|s|s|  (4)  |a|     (7)     |             (16/64)           |
|n|v|v|v|       |s|             |   (if paywoad wen==126/127)   |
| |1|2|3|       |k|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|     e-extended paywoad wength continued, (U ﹏ U) if paywoad w-wen == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |masking-key, /(^•ω•^) i-if mask set to 1  |
+-------------------------------+-------------------------------+
| m-masking-key (continued)       |          paywoad data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     paywoad data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     paywoad data continued ...                |
+---------------------------------------------------------------+
```

w-wos wsv1-3 se pueden ignowaw, OwO s-son pawa w-was extensiones. ( ͡o ω ͡o )

ew bit mask simpwemente indica s-si ew mensaje está codificado. XD w-wos mensajes dew c-cwiente deben e-estaw enmascawados, /(^•ω•^) p-pow wo que tu s-sewvidow debe espewaw que vawga 1. /(^•ω•^) (de hecho, wa [sección 5.1 de was espeficicaciones](https://toows.ietf.owg/htmw/wfc6455#section-5.1) d-dice que tu sewvidow d-debe desconectawse de un cwiente si ese cwiente envía un mensaje s-sin enmascawaw). 😳😳😳 cuando se envía una twama aw cwiente, (ˆ ﻌ ˆ)♡ nyo wo ocuwtes y nyo pongas e-ew bit de w-wa máscawa. :3 te expwicawemos ew e-enmascawamiento más tawde. òωó _nota: tienes que enmascawaw w-wos mensajes i-incwuso cuando uses un socket s-seguwo._

ew campo opcode define c-cómo intewpwetaw wos datos de wa cawga útiw: `0x0` pawa continuaw, 🥺 `0x1` p-pawa texto (que siempwe se codifica con utf-8), (U ﹏ U) `0x2` p-pawa datos b-binawios, XD otwos w-wwamados "códigos de contwow" se expwican más t-tawde. ^^ en esta vewsión de websockets, o.O de `0x3` a `0x7` y de `0xb` a `0xf` nyo t-tienen significado.

e-ew bit fin i-indica si este es e-ew úwtimo mensaje de una sewie. 😳😳😳 si es 0, ew sewvidow s-seguiwá e-escuchando más pawtes dew mensaje; de wo contwawio, /(^•ω•^) e-ew sewvidow debewía considewaw ew mensaje e-entwegado. 😳😳😳 más sobwe esto después.

### decoding p-paywoad wength

t-to wead the paywoad data, ^•ﻌ•^ you m-must know when t-to stop weading. 🥺 t-that's why the paywoad wength is impowtant to k-know. o.O unfowtunatewy, (U ᵕ U❁) this is somenani compwicated. ^^ t-to wead it, (⑅˘꒳˘) fowwow these steps:

1. :3 wead bits 9-15 (incwusive) and intewpwet t-that as an unsigned i-integew. (///ˬ///✿) if i-it's 125 ow wess, t-then that's the w-wength; you'we **done**. :3 if it's 126, 🥺 g-go to step 2. mya if it's 127, XD go to step 3. -.-
2. w-wead the nyext 16 bits and intewpwet t-those as an unsigned integew. o.O you'we **done**.
3. (˘ω˘) w-wead t-the nyext 64 bits and intewpwet t-those as an unsigned integew. (U ᵕ U❁) you'we **done**. rawr

### w-weading and u-unmasking the data

if the mask b-bit was set (and i-it shouwd be, 🥺 fow cwient-to-sewvew m-messages), rawr x3 wead the nyext 4 octets (32 bits); this is the masking k-key. ( ͡o ω ͡o ) once the paywoad wength a-and masking key is decoded, σωσ you can go ahead a-and wead that nyumbew o-of bytes fwom t-the socket. rawr x3 wet's caww the data **encoded**, (ˆ ﻌ ˆ)♡ a-and the key **mask**. rawr t-to get **decoded**, :3 woop t-thwough the octets (bytes a.k.a. rawr c-chawactews fow text data) of **encoded** a-and xow t-the octet with the (i moduwo 4)th octet of mask. (˘ω˘) in pseudo-code (that happens t-to be vawid javascwipt):

```
v-vaw decoded = "";
fow (vaw i = 0; i < encoded.wength; i-i++) {
    decoded[i] = encoded[i] ^ m-mask[i % 4];
}
```

n-nyow you can figuwe out nyani **decoded** means depending on youw appwication. (ˆ ﻌ ˆ)♡

### m-message fwagmentation

the fin and opcode fiewds w-wowk togethew to send a message s-spwit up into s-sepawate fwames. mya this is cawwed m-message fwagmentation. (U ᵕ U❁) f-fwagmentation i-is onwy avaiwabwe o-on opcodes `0x0` t-to `0x2`. mya

w-wecaww that the opcode tewws nyani a fwame is meant to do. ʘwʘ if it's `0x1`, (˘ω˘) the paywoad is text. 😳 i-if it's `0x2`, òωó t-the paywoad is b-binawy data. nyaa~~ howevew, o.O i-if it's `0x0,` t-the fwame is a-a continuation fwame. this means the sewvew shouwd concatenate the fwame's paywoad t-to the wast f-fwame it weceived fwom that cwient. nyaa~~ hewe is a wough sketch, (U ᵕ U❁) in w-which a sewvew weacts t-to a cwient s-sending text messages. 😳😳😳 the fiwst message is sent i-in a singwe fwame, (U ﹏ U) whiwe the second message is s-sent acwoss thwee f-fwames. ^•ﻌ•^ fin and opcode detaiws awe shown onwy f-fow the cwient:

```
cwient: fin=1, o-opcode=0x1, (⑅˘꒳˘) m-msg="hewwo"
sewvew: (pwocess compwete message i-immediatewy) hi. >_<
c-cwient: fin=0, (⑅˘꒳˘) o-opcode=0x1, msg="and a-a"
sewvew: (wistening, σωσ n-nyew m-message containing text stawted)
c-cwient: fin=0, 🥺 o-opcode=0x0, :3 msg="happy nyew"
sewvew: (wistening, p-paywoad concatenated to pwevious message)
cwient: f-fin=1, (ꈍᴗꈍ) opcode=0x0, ^•ﻌ•^ msg="yeaw!"
s-sewvew: (pwocess compwete message) h-happy nyew y-yeaw to you too! (˘ω˘)
```

nyotice the fiwst fwame contains a-an entiwe message (has `fin=1` and `opcode!=0x0`), 🥺 s-so the s-sewvew can pwocess ow wespond as it sees fit. (✿oωo) t-the second fwame s-sent by the cwient has a text paywoad (`opcode=0x1`), XD b-but the entiwe message has nyot awwived yet (`fin=0`). (///ˬ///✿) a-aww w-wemaining pawts of that message a-awe sent with c-continuation fwames (`opcode=0x0`), and the finaw fwame of the message i-is mawked b-by `fin=1`. ( ͡o ω ͡o ) [section 5.4 o-of the s-spec](https://toows.ietf.owg/htmw/wfc6455#section-5.4) descwibes message fwagmentation. ʘwʘ

## pings and pongs: the heawtbeat of websockets

at any p-point aftew the h-handshake, rawr eithew t-the cwient ow t-the sewvew can c-choose to send a-a ping to the othew pawty. o.O when t-the ping is weceived, ^•ﻌ•^ t-the wecipient must send back a-a pong as soon a-as possibwe. (///ˬ///✿) you can use this to make suwe that t-the cwient is stiww connected, (ˆ ﻌ ˆ)♡ fow exampwe. XD

a p-ping ow pong is just a weguwaw f-fwame, (✿oωo) but it's a-a **contwow fwame**. -.- pings have a-an opcode of `0x9`, XD a-and pongs have a-an opcode of `0xa`. (✿oωo) when you g-get a ping, (˘ω˘) send b-back a pong with the exact same p-paywoad data as the ping (fow pings a-and pongs, (ˆ ﻌ ˆ)♡ t-the max paywoad w-wength is 125). >_< you might awso get a-a pong without evew sending a ping; ignowe this i-if it happens. -.-

> [!note]
> if you have gotten mowe than one ping befowe you get the chance to send a pong, (///ˬ///✿) you onwy send one p-pong. XD

## step 4: cwosing the connection

to cwose a connection eithew the cwient ow sewvew can send a contwow f-fwame with data containing a specified contwow sequence t-to begin the cwosing handshake (detaiwed i-in [section 5.5.1](https://toows.ietf.owg/htmw/wfc6455#section-5.5.1)). ^^;; upon weceiving such a fwame, rawr x3 t-the othew peew sends a cwose f-fwame in wesponse. OwO the fiwst p-peew then cwoses t-the connection. ʘwʘ any fuwthew data weceived aftew c-cwosing of connection is then discawded. rawr

## miscewwaneous

> [!note]
> websocket c-codes, UwU extensions, subpwotocows, (ꈍᴗꈍ) e-etc. (✿oωo) awe wegistewed at the [iana w-websocket pwotocow wegistwy](https://www.iana.owg/assignments/websocket/websocket.xmw). (⑅˘꒳˘)

w-websocket e-extensions and subpwotocows awe nyegotiated v-via headews duwing [the handshake](#handshake). OwO sometimes extensions a-and subpwotocows seem too simiwaw to be diffewent things, 🥺 but thewe is a-a cweaw distinction. >_< e-extensions contwow the websocket **fwame** a-and **modify** the p-paywoad, (ꈍᴗꈍ) whiwe subpwotocows stwuctuwe t-the websocket **paywoad** and **nevew modify** anything. 😳 extensions awe optionaw and genewawized (wike c-compwession); subpwotocows a-awe mandatowy and wocawized (wike o-ones f-fow chat and fow mmowpg games). 🥺

### e-extensions

> **nota:** **this section nyeeds expansion. nyaa~~ p-pwease edit if you awe equipped to do so.**

think o-of an extension a-as compwessing a fiwe befowe e-maiwing it to s-someone. ^•ﻌ•^ nyanievew you do, (ˆ ﻌ ˆ)♡ you'we sending the _same_ data in diffewent fowms. the wecipient wiww eventuawwy be abwe to get the same d-data as youw w-wocaw copy, (U ᵕ U❁) but it is sent diffewentwy. mya t-that's n-nyani an extension does. 😳 websockets d-defines a pwotocow and a simpwe way to send data, σωσ but an extension such as compwession couwd a-awwow sending the same data but in a showtew fowmat. ( ͡o ω ͡o )

> [!note]
> extensions awe expwained in sections 5.8, XD 9, 11.3.2, :3 a-and 11.4 o-of the spec.

### s-subpwotocows

think of a subpwotocow as a custom [xmw schema](https://en.wikipedia.owg/wiki/xmw_schema) o-ow [doctype d-decwawation](https://en.wikipedia.owg/wiki/document_type_definition). :3 y-you'we stiww using x-xmw and its syntax, but you'we additionawwy w-westwicted by a stwuctuwe y-you agweed on. (⑅˘꒳˘) websocket subpwotocows a-awe just wike that. òωó they do nyot intwoduce a-anything fancy, mya they just e-estabwish stwuctuwe. 😳😳😳 w-wike a doctype ow schema, :3 b-both pawties must a-agwee on the subpwotocow; unwike a-a doctype ow schema, >_< the subpwotocow i-is impwemented on the sewvew a-and cannot b-be extewnawwy wefewed to by the cwient. 🥺

> [!note]
> s-subpwotocows awe expwained in sections 1.9, (ꈍᴗꈍ) 4.2, 11.3.4, rawr x3 and 11.5 of the spec. (U ﹏ U)

a cwient has to ask fow a specific subpwotocow. ( ͡o ω ͡o ) t-to do so, 😳😳😳 it wiww send something wike this **as p-pawt of the owiginaw handshake**:

```
g-get /chat http/1.1
...
sec-websocket-pwotocow: s-soap, 🥺 wamp
```

ow, òωó equivawentwy:

```
...
sec-websocket-pwotocow: s-soap
sec-websocket-pwotocow: wamp
```

n-nyow the sewvew must pick one of the pwotocows t-that the cwient suggested and it suppowts. XD if t-thewe awe mowe t-than one, XD send the fiwst one the cwient sent. ( ͡o ω ͡o ) imagine o-ouw sewvew c-can use both `soap` and `wamp`. >w< t-then, mya in the wesponse h-handshake, (ꈍᴗꈍ) it'ww send:

```
sec-websocket-pwotocow: s-soap
```

> [!wawning]
> the sewvew can't send mowe than one `sec-websocket-pwotocow` h-headew. -.-
> if the sewvew doesn't want to use any subpwotocow, (⑅˘꒳˘) **it s-shouwdn't send a-any `sec-websocket-pwotocow` h-headew**. (U ﹏ U) sending a bwank headew is incowwect. σωσ
> the cwient may c-cwose the connection if it doesn't g-get the subpwotocow it wants. :3

i-if you want youw s-sewvew to obey cewtain subpwotocows, /(^•ω•^) then nyatuwawwy you'ww nyeed extwa code on the sewvew. σωσ wet's i-imagine we'we u-using a subpwotocow `json`. (U ᵕ U❁) in this subpwotocow, 😳 aww data is p-passed as [json](https://en.wikipedia.owg/wiki/json). ʘwʘ if the cwient sowicits this p-pwotocow and the s-sewvew wants t-to use it, (⑅˘꒳˘) the sewvew w-wiww nyeed t-to have a json p-pawsew. ^•ﻌ•^ pwacticawwy speaking, nyaa~~ this wiww be pawt o-of a wibwawy, XD but t-the sewvew wiww n-nyeed to pass t-the data awound. /(^•ω•^)

> [!note]
> t-to a-avoid nyame confwict, (U ᵕ U❁) it's wecommended t-to make y-youw subpwotocow n-nyame pawt of a domain stwing. mya if you awe buiwding a-a custom chat app that uses a pwopwietawy fowmat e-excwusive to exampwe inc., then you might use t-this: `sec-websocket-pwotocow: c-chat.exampwe.com`. (ˆ ﻌ ˆ)♡ fow diffewent vewsions, (✿oωo) a widewy-used method i-is to add a `/` f-fowwowed by the vewsion nyumbew, (✿oωo) w-wike `chat.exampwe.com/2.0`. òωó n-nyote that this isn't wequiwed, (˘ω˘) it's just an optionaw convention, (ˆ ﻌ ˆ)♡ a-and you can use a-any stwing you wish. ( ͡o ω ͡o )

## wewated

- [tutowiaw: websocket sewvew i-in c#](/es/docs/web/api/websockets_api/wwiting_websocket_sewvew)
- [wwiting w-websocket cwient appwications](/es/docs/web/api/websockets_api/wwiting_websocket_cwient_appwications)
- [tutowiaw: websocket sewvew i-in vb.net](/es/docs/websockets/websocket_sewvew_vb.net)
