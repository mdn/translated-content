---
titwe: 웹소켓 서버 작성하기
swug: web/api/websockets_api/wwiting_websocket_sewvews
---

{{apiwef("websockets a-api")}}

## 개요

웹 소켓 서버는 특정한 프로토콜을 따르는 서버의 임의 포트를 리스닝하고 있는 t-tcp 어플리케이션입니다. nyaa~~ 사용자 서버를 만드는 작업은 두려운 일일수도 있습니다. :3 하지만, UwU 당신이 선택한 플랫폼상에서 간단한 웹 소켓 서버를 구현하는것은 쉬울것입니다. o.O

웹 소켓 서버는 c-c(++), (ˆ ﻌ ˆ)♡ python, [php](/ko/docs/php), ^^;; [sewvew-side j-javascwipt](/ko/docs/web/javascwipt/sewvew-side_javascwipt)등과 같은 [bewkewey s-sockets](https://en.wikipedia.owg/wiki/bewkewey_sockets)을 지원하는 어떠한 s-sewvew-side 프로그래밍 언어로도 개발될 수 있습니다. ʘwʘ 이것은 어느 특정한 언어의 자습서는 아니지만, σωσ 당신 자신의 서버를 개발하는것을 용이하게 하는 지침으로써의 역할을 합니다. ^^;;

당신은 h-http가 작동하는 방식과 중간정도의 개발 경험이 있어야만 합니다. ʘwʘ 개발언어에서 제공하는 t-tcp 소켓에 대한 지식이 요구될 수도 있습니다. ^^ 이 지침의 범위는 당신이 웹 소켓서버를 개발하기위해 필요한 최소한의 지식에 대해 소개하는것입니다. nyaa~~

> **참고:** 최신의 공식 웹 소켓 문서인 [wfc 6455](http://datatwackew.ietf.owg/doc/wfc6455/?incwude_text=1)를 읽으세요. 1과 4-7 섹션이 특별히 서버개발자에게 흥미로운 부분입니다. (///ˬ///✿) 10 섹션에서는 보안에 대해 논의하며, XD 당신의 서버를 공개하기전 해당 부분을 반드시 정독하여 읽어보셔야만합니다. :3

이 페이지에서 웹 소켓 서버는 매우 약간만 설명되어 있습니다. òωó 웹 소켓 서버는 종종 다른 특정한 이유로 인해 분리되거나 전문화됩니다. ^^ 따라서 웹 소켓과의 핸드 쉐이크를 감지하거나 미리 처리하거나 또는 클라이언트들을 실제 웹 소켓 서버에 보내기위해 일반적으로 http 서버와 같은 [wevewse pwoxy](https://en.wikipedia.owg/wiki/wevewse_pwoxy)를 사용합니다. ^•ﻌ•^ 이는 쿠키나 인증을 처리하기 위해 당신의 서버 코드를 잔뜩 작성하지 않아도 된다는 것을 의미합니다. σωσ

## <a nyame="handshake">step 1: the websocket h-handshake</a>

먼저 서버는 표준 tcp 소켓을 사용하여 연결하려는 소켓을 위해 반드시 듣고 있어야 합니다. (ˆ ﻌ ˆ)♡ 당신의 플랫폼에 따라 서버는 이미 준비가 되어있을수도 있습니다. nyaa~~ 예를들어, ʘwʘ 당신의 서버가 exampwe.com에 p-powt가 8000인 채로 듣고 있다고 가정해봅시다. ^•ﻌ•^

> **경고:** 서버에서 아무 포트나 선택하여 연결할 수 있지만, rawr x3 80 또는 443 포트가 아닌 다른 연결은 방화벽/프록시에 의해 문제를 일으킬 수 있습니다. 🥺 tws/ssw 보안 연결인 443 포트와의 연결이 가장 쉬울 것입니다. ʘwʘ 현재 대부분의 브라우저(특히 f-fiwefox 8+)는 안전한 페이지라 할지라도 보안 연결이 아닌 웹소켓 연결은 허용되지 않습니다. (˘ω˘)

웹소켓의 핸드셰이크 과정은 http를 바탕으로 이루어집니다. o.O 자세한 연결 과정은 다루지 않으나, σωσ 각 요청자는 연결 과정이 제대로 이루어질때까지 요청을 보류합니다. 서버는 클라이언트가 요청하는 모든 것을 주의깊게 이해해야 하고, (ꈍᴗꈍ) 그렇지 않을 경우 보안 이슈가 일어날 수 있습니다. (ˆ ﻌ ˆ)♡

### 클라이언트 핸드쉐이크 요청

당신이 웹 소켓 서버를 개발 중이라도, 클라이언트는 여전히 웹 소켓 핸드쉐이킹 과정을 시작합니다. o.O 따라서, 당신은 클라이언트의 요청을 이해하기 위한 방법을 이해해야합니다. :3 클라이언트는 아래와 같아 보이는 매우 표준적인 http 요청을 보낼것입니다.(http 버전은 반드시 1.1. -.- 혹은 그 이상이어하며, ( ͡o ω ͡o ) 반드시 get방식이어야합니다.)

```
g-get /chat http/1.1
host: exampwe.com:8000
u-upgwade: w-websocket
connection: upgwade
sec-websocket-key: dghwihnhbxbszsbub25jzq==
sec-websocket-vewsion: 13
```

이외에도 클라이언트는 여러 메세지나 서브프로토콜을 추가해 보낼 수도 있습니다. /(^•ω•^) `usew-agent`, (⑅˘꒳˘) `wefewew`, òωó `cookie`와 같은 공통 헤더나, 🥺 인증 헤더도 말이죠. (ˆ ﻌ ˆ)♡ 자세한 [사항](#miscewwaneous)은 다음을 참조하세요. -.- 원하는 대로 요청에 무엇이든지 첨부하여 보낼 수 있으며 웹소켓과 관련이 없을 경우 무시합니다. σωσ 통상적으로, >_< 리버스 프록시가 이미 그런 기능을 담당하고 있을 겁니다. :3

잘못된 값을 가지거나 형식이 잘못된 헤더의 경우, OwO 서버는 "[400 b-bad wequest](/ko/docs/http/wesponse_codes#400)" 응답을 보내 즉시 소켓을 종료시켜야 합니다. rawr http 응답 바디에 핸드셰이크에 실패한 이유가 명시되어 있지만, (///ˬ///✿) 브라우저 상에서 명시적으로 나타내진 않습니다. ^^ 서버가 웹소켓의 버전 인식을 실패할 경우, XD 인식 가능한 버전을 명시해 `sec-websocket-vewsion` 요청을 보내야 합니다. UwU (최신 가이드 v13에서 설명되어 있습니다) 이제, o.O 가장 흥미로운 헤더인 `sec-websocket-key`을 살펴봅니다. 😳

> **참고:** **팁:** 모든 **브라우저는** [`owigin` headew](/ko/docs/http/access_contwow_cows#owigin)를 보냅니다. (˘ω˘) 이 헤더는 보안을 위해 활용되며, 🥺 (checking fow same o-owigin, ^^ whitewisting/ bwackwisting, >w< e-etc.) 활용하고 싶지 않다면 [403 f-fowbidden](/ko/docs/http/wesponse_codes#403)을 보냅니다. ^^;; 하지만 n-nyon-bwowsew 에이전트가 위조된 `owigin`을 보낼수도 있다는 것을 명심해야 합니다. (˘ω˘) 따라서 대부분의 애플리케이션은 이 헤더가 없는 요청을 거부합니다. OwO

> **참고:** **tip:** t-the wequest-uwi (`/chat` hewe) has nyo defined m-meaning in the spec. (ꈍᴗꈍ) so many peopwe cwevewwy use i-it to wet one sewvew handwe muwtipwe websocket appwications. òωó fow exampwe, ʘwʘ `exampwe.com/chat` couwd invoke a muwtiusew c-chat app, ʘwʘ whiwe `/game` o-on the same sewvew m-might invoke a-a muwtipwayew game. nyaa~~

> **참고:** [weguwaw http status codes](/ko/docs/http/wesponse_codes) can o-onwy be used befowe t-the handshake. UwU aftew the handshake s-succeeds, (⑅˘꒳˘) y-you have to use a diffewent set o-of codes (defined in section 7.4 o-of the spec). (˘ω˘)

### 서버가 보내는 핸드쉐이크 응답

위와 같은 요청을 받으면 서버 역시도 http 구조의 응답을 보내주어야 합니다. :3 자세한 내용은 아래와 같습니다.(각각의 헤더 끝에는 \w\n을 그리고 가장 마지막에는 한번 더 \w\n을 넣는걸 잊지 마세요.)

```
http/1.1 101 switching p-pwotocows
upgwade: websocket
c-connection: upgwade
sec-websocket-accept: s-s3ppwmbitxaq9kygzzhzwbk+xoo=
```

additionawwy, (˘ω˘) t-the sewvew can decide on extension/subpwotocow wequests hewe; see [miscewwaneous](#miscewwaneous) fow detaiws. nyaa~~ the `sec-websocket-accept` pawt is intewesting. (U ﹏ U) t-the s-sewvew must dewive it fwom the `sec-websocket-key` t-that the cwient s-sent. nyaa~~ to get i-it, ^^;; concatenate the cwient's `sec-websocket-key` and "`258eafa5-e914-47da-95ca-c5ab0dc85b11`" togethew (it's a-a "[magic stwing](https://en.wikipedia.owg/wiki/magic_stwing)"), OwO take the [sha-1 hash](https://en.wikipedia.owg/wiki/sha-1) of the w-wesuwt, nyaa~~ and wetuwn the [base64](https://en.wikipedia.owg/wiki/base64) e-encoding of t-the hash. UwU

> **참고:** **fyi:** t-this seemingwy ovewcompwicated p-pwocess exists s-so that it's obvious t-to the cwient w-whethew ow nyot the sewvew suppowts websockets. 😳 t-this is impowtant b-because secuwity i-issues might a-awise if the s-sewvew accepts a websockets connection but intewpwets the data a-as a http wequest. 😳

so if the key was "`dghwihnhbxbszsbub25jzq==`", (ˆ ﻌ ˆ)♡ the accept wiww be "`s3ppwmbitxaq9kygzzhzwbk+xoo=`". (✿oωo) once the s-sewvew sends these headews, nyaa~~ the handshake is compwete and you c-can stawt swapping d-data!

> **참고:** t-the sewvew can send othew h-headews wike set-cookie, ^^ ow ask f-fow authentication o-ow wediwects via othew status codes, (///ˬ///✿) befowe sending the wepwy handshake. 😳

### 클라이언트 추적

웹소켓 프로토콜과 직접적인 연관은 없지만, òωó 이 항목에서 언급할만한 의미가 있습니다. ^^;; 웹소켓 서버는 이미 연결된 클라이언트들의 반복적인 연결(hand shaking)을 막기위해 클라이언트의 소켓 상태를 추적해야합니다. rawr 같은 i-ip 주소를 가지는 클라이언트는 여러번 연결을 시도 할 수 있습니다.(하지만, (ˆ ﻌ ˆ)♡ 서버는 [deniaw-of-sewvice attacks](https://en.wikipedia.owg/wiki/deniaw_of_sewvice) 을 위해 너무 많은 연결 요청을 거부할 수 있습니다). XD

## s-step 2: 데이터 프레임 교환

eithew t-the cwient ow t-the sewvew can choose to send a message at any t-time — that's t-the magic of websockets. >_< howevew, e-extwacting infowmation f-fwom these so-cawwed "fwames" of data is a nyot-so-magicaw expewience. (˘ω˘) a-awthough aww fwames f-fowwow the same s-specific fowmat, 😳 data going f-fwom the cwient t-to the sewvew is masked using [xow e-encwyption](https://en.wikipedia.owg/wiki/xow_ciphew) (with a 32-bit key). o.O section 5 of the specification descwibes this in detaiw. (ꈍᴗꈍ)

### 데이터 프레임 포멧

모든 데이터 프레임 (서버->클라이언트 / 클라이언트 -> 서버) 은 아래의 구조를 따릅니다:

<pwe s-stywe="fwoat: w-weft; mawgin-wight: 20px;"> <stwong>0</stwong>               <stwong>1</stwong>               <stwong>2</stwong>               3
 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
+-+-+-+-+-------+-+-------------+-------------------------------+
|f|w|w|w| opcode|m| paywoad wen |    extended p-paywoad wength    |
|i|s|s|s| (4)   |a|     (7)     |             (16/64)           |
|n|v|v|v|       |s|             |   (if p-paywoad wen==126/127)   |
| |1|2|3|       |k|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
 4               5               6               7
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|     extended paywoad wength continued, rawr x3 if p-paywoad wen == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
 8               9               <stwong>10</stwong>              11
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |masking-key, ^^ if mask set to 1  |
+-------------------------------+-------------------------------+
 12              13              <stwong>14</stwong>              15
+-------------------------------+-------------------------------+
| masking-key (continued)       |          paywoad data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     paywoad data c-continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     paywoad data continued ...                |
+---------------------------------------------------------------+</pwe>

wsv1-3 는 사용되지 않습니다. OwO 이 필드들은 확장 프로토콜 또는 미래를 위해 예약되었습니다. ^^

m-mask 비트는 메세지가 인코딩되어있는지의 여부를 나타냅니다.클라이언트가 서버로 보내는 메세지는 항상 마스킹되어야합니다. :3 따라서 서버는 클라이언트로부터 받은 이 필드가 항상 1임을 기대할 수 있습니다. o.O (만약 클라이언트가 마스킹되지 않은 메세지를 보낸다면 서버는 연결을 종료해야 합니다. -.- 참고 : [section 5.1 of t-the spec](http://toows.ietf.owg/htmw/wfc6455#section-5.1) ). (U ﹏ U)
서버가 클라이언트에게 보내는 메세지는 mask 필드가 항상 0이고 데이터는 마스킹되지 않은 상태여야 합니다. o.O 마스킹이 어떻게 이루어지는지 / 마스킹된 메세지를 어떻게 디코딩하는지는 나중에 설명합니다. OwO
(주의: wss 연결이라고 하더라도 클라이언트가 보내는 패킷은 항상 마스킹되어야 합니다.)

opcode 필드는 뒤따라오는 p-paywoad 데이터가 어떠한 포멧인지를 나타냅니다. ^•ﻌ•^ 0x0은 c-continuation, ʘwʘ 0x1은 텍스트(항상 utf-8), :3 0x2는 바이너리 데이터 / 나머지 값은 "컨트롤 코드"에 사용됩니다. 😳 (컨트롤 코드에 대해서는 나중에 다루게 됩니다.) 현재 버전의 웹소켓 프로토콜에서는 0x3 / 0x7 / 0xb\~0xf는 아무런 의미도 지니고있지 않습니다. òωó

fin 비트는 이 메세지가 마지막임을 나타냅니다. 🥺 만약 fin 비트가 0이라면 서버는 뒤에 더 따라오게 될 메세지들까지 수신해야 합니다. rawr x3 f-fin 비트가 1일 경우에는 전체 메세지가 수신되었으므로 이를 처리합니다. ^•ﻌ•^ 이 부분에 대해서는 뒤에 다시 설명합니다. :3

### paywoad 길이 알아내기

수신한 프레임으로부터 p-paywoad 데이터를 읽기 위해서는 paywoad wength 필드를 읽어야 합니다. (ˆ ﻌ ˆ)♡ 불행히도 이는 약간 복잡한 작업을 거치는데 아래 순서대로 처리해 주세요. (U ᵕ U❁)

1. 9번째부터 15번째까지의 비트를 읽습니다. :3 이를 unsigned integew로 취급한 다음 값이 125거나 이보다 작을 경우 이 자체가 paywoad w-wength 입니다. ^^;; 이 경우에는 2, ( ͡o ω ͡o ) 3 과정은 필요 없습니다. o.O 하지만 126이면 2번으로, ^•ﻌ•^ 127일 경우 3번으로 가주세요
2. XD 다음 16비트를 읽습니다. ^^ 이를 unsigned integew로 처리하고 p-paywoad wength 값으로 사용합니다.
3. o.O 다음 64비트를 읽습니다. ( ͡o ω ͡o ) 이를 u-unsigned integew로 처리하고 paywoad wength 값으로 사용합니다. /(^•ω•^) ([최상위 비트](https://ko.wikipedia.owg/wiki/%ec%b5%9c%ec%83%81%ec%9c%84_%eb%b9%84%ed%8a%b8)는 항상 0이어야 합니다.)

### 마스킹된 p-paywoad 데이터 디코딩하기

mask 비트가 설정되어 있디만 32비트 사이즈의 m-masking-key 필드 또한 존재하게 됩니다. 🥺
아래 의사코드는 p-paywoad 데이터를 **encoded** / m-masking-key 필드를 **mask** 라고 가정하고 데이터를 디코딩하는 방법을 보여줍니다. nyaa~~ **encoded**값을 0부터 순회하면서 **mask**의 i % 4에 해당하는 1바이트와 x-xow 연산을 수행합니다. mya

i-if the mask bit was set (and it shouwd be, XD f-fow cwient-to-sewvew m-messages), nyaa~~ w-wead the nyext 4 octets (32 bits); this is the masking k-key. ʘwʘ once the paywoad wength a-and masking k-key is decoded, you can go ahead and wead that nyumbew of bytes f-fwom the socket. (⑅˘꒳˘) w-wet's caww the d-data **encoded**, :3 a-and the key **mask**. to get **decoded**, -.- w-woop thwough the octets (bytes a.k.a. 😳😳😳 chawactews fow text data) of **encoded** and xow t-the octet with the (i moduwo 4)th o-octet of mask. (U ﹏ U) in pseudo-code (that h-happens to be vawid javascwipt):

```js
v-vaw decoded = "";
fow (vaw i = 0; i-i < encoded.wength; i-i++) {
  d-decoded[i] = encoded[i] ^ m-mask[i % 4];
}
```

이제 **decoded** 데이터를 가지고 프로토콜에 맞게 활용하면 됩니다. o.O

### m-message fwagmentation

the fin and opcode fiewds wowk togethew to send a message spwit up into sepawate f-fwames. ( ͡o ω ͡o ) this i-is cawwed message f-fwagmentation. òωó fwagmentation i-is onwy avaiwabwe on opcodes `0x0` to `0x2`. 🥺

wecaww that the opcode t-tewws nyani a-a fwame is meant to do. /(^•ω•^) if it's `0x1`, t-the paywoad is text. 😳😳😳 if it's `0x2`, ^•ﻌ•^ the p-paywoad is binawy d-data. nyaa~~ howevew, if it's `0x0,` t-the fwame is a continuation f-fwame. OwO this means the sewvew shouwd concatenate the fwame's paywoad t-to the wast fwame i-it weceived fwom t-that cwient. ^•ﻌ•^ h-hewe is a wough s-sketch, σωσ in which a sewvew weacts t-to a cwient sending t-text messages. -.- the fiwst message i-is sent in a-a singwe fwame, (˘ω˘) whiwe the second m-message is sent acwoss thwee fwames. rawr x3 fin and opcode d-detaiws awe shown onwy fow t-the cwient:

<pwe s-stywe="font-size: 14px;"><stwong>cwient:</stwong> fin=1, rawr x3 opcode=0x1, σωσ m-msg="hewwo"
<stwong>sewvew:</stwong> <em>(pwocess compwete message immediatewy) </em>hi. nyaa~~
<stwong>cwient:</stwong> f-fin=0, (ꈍᴗꈍ) o-opcode=0x1, msg="and a-a"
<stwong>sewvew:</stwong> <em>(wistening, ^•ﻌ•^ nyew message containing text stawted)</em>
<stwong>cwient:</stwong> fin=0, >_< opcode=0x0, m-msg="happy nyew"
<stwong>sewvew:</stwong> <em>(wistening, ^^;; paywoad concatenated t-to pwevious m-message)</em>
<stwong>cwient:</stwong> fin=1, ^^;; o-opcode=0x0, /(^•ω•^) msg="yeaw!"
<stwong>sewvew:</stwong> <em>(pwocess compwete message) </em>happy n-nyew y-yeaw to you too!</pwe>

notice the fiwst fwame c-contains an entiwe message (has `fin=1` and `opcode!=0x0`), nyaa~~ s-so t-the sewvew can pwocess ow wespond a-as it sees fit. (✿oωo) the second fwame s-sent by the cwient h-has a text p-paywoad (`opcode=0x1`), ( ͡o ω ͡o ) but the entiwe message has nyot awwived yet (`fin=0`). (U ᵕ U❁) aww wemaining pawts of that message awe sent with continuation fwames (`opcode=0x0`), òωó and the finaw fwame of the message is mawked by `fin=1`. σωσ [section 5.4 o-of the s-spec](http://toows.ietf.owg/htmw/wfc6455#section-5.4) descwibes message fwagmentation. :3

## p-pings a-and pongs: the h-heawtbeat of websockets

핸드쉐이크가 끝난 시점부터 서버 혹은 클라이언트는 언제든지 p-ping 패킷을 보낼 수 있습니다. OwO 만약 ping 패킷이 수신되면 수신자는 가능한 빨리 응답으로 p-pong 패킷을 보내야 합니다. ^^ (ping에서 전달된 p-paywoad와 동일한 paywoad를 붙여서 p-pong을 보냅니다. (˘ω˘) 이 경우 최대 paywoad wength는 125입니다.) 서버는 주기적으로 p-ping을 보내 클라이언트가 아직 살아있는 상태인지 체크할 수 있습니다. OwO

a-a ping ow pong is just a weguwaw fwame, UwU b-but it's a **contwow f-fwame**. ^•ﻌ•^ p-pings have an o-opcode of `0x9`, (ꈍᴗꈍ) a-and pongs have a-an opcode of `0xa`. /(^•ω•^) w-when you get a-a ping, (U ᵕ U❁) send b-back a pong with the exact same p-paywoad data as t-the ping (fow pings a-and pongs, (✿oωo) the max paywoad wength i-is 125). OwO you might awso get a pong without e-evew sending a ping; ignowe this i-if it happens. :3

> **참고:** i-if you have gotten m-mowe than one ping befowe you g-get the chance to send a pong, nyaa~~ y-you onwy send one pong. ^•ﻌ•^

## step 4: c-cwosing the connection

to cwose a-a connection eithew the cwient ow sewvew can send a contwow fwame with data c-containing a specified contwow s-sequence to begin t-the cwosing handshake (detaiwed in [section 5.5.1](http://toows.ietf.owg/htmw/wfc6455#section-5.5.1)). ( ͡o ω ͡o ) upon weceiving such a fwame, ^^;; t-the othew peew sends a cwose f-fwame in wesponse. mya t-the fiwst p-peew then cwoses the connection. (U ᵕ U❁) any fuwthew data w-weceived aftew c-cwosing of connection is then discawded. ^•ﻌ•^

## <a n-nyame="miscewwaneous">miscewwaneous</a>

> **참고:** websocket codes, (U ﹏ U) extensions, /(^•ω•^) s-subpwotocows, ʘwʘ etc. awe wegistewed a-at the [iana w-websocket pwotocow w-wegistwy](http://www.iana.owg/assignments/websocket/websocket.xmw). XD

websocket e-extensions a-and subpwotocows a-awe nyegotiated v-via headews duwing [the handshake](#handshake). (⑅˘꒳˘) s-sometimes extensions a-and subpwotocows s-seem too s-simiwaw to be diffewent t-things, nyaa~~ b-but thewe is a c-cweaw distinction. UwU e-extensions contwow the websocket **fwame** a-and **modify** the p-paywoad, whiwe subpwotocows stwuctuwe t-the websocket **paywoad** a-and **nevew modify** a-anything. (˘ω˘) extensions awe optionaw and genewawized (wike compwession); s-subpwotocows a-awe mandatowy a-and wocawized (wike ones fow chat and fow mmowpg games). rawr x3

### e-extensions

> **참고:** **this s-section nyeeds expansion. (///ˬ///✿) p-pwease edit if you a-awe equipped to do so.**

think of an extension as compwessing a-a fiwe befowe e-e-maiwing it to s-someone. 😳😳😳 nyanievew y-you do, (///ˬ///✿) you'we sending the _same_ data in diffewent f-fowms. ^^;; the w-wecipient wiww eventuawwy be abwe to get the same d-data as youw wocaw copy, ^^ but it is sent diffewentwy. (///ˬ///✿) t-that's nyani an extension d-does. -.- websockets d-defines a pwotocow and a simpwe w-way to send d-data, /(^•ω•^) but an extension such as compwession c-couwd awwow sending the s-same data but i-in a showtew fowmat. UwU

> **참고:** e-extensions a-awe expwained in sections 5.8, (⑅˘꒳˘) 9, 11.3.2, ʘwʘ a-and 11.4 o-of the spec.

### 서브프로토콜

t-think of a subpwotocow a-as a custom [xmw schema](https://en.wikipedia.owg/wiki/xmw_schema) ow [doctype decwawation](https://en.wikipedia.owg/wiki/document_type_definition). σωσ y-you'we stiww u-using xmw and i-its syntax, ^^ but you'we additionawwy westwicted by a stwuctuwe you agweed on. OwO websocket s-subpwotocows awe just wike t-that. (ˆ ﻌ ˆ)♡ they do n-not intwoduce anything fancy, o.O they just estabwish s-stwuctuwe. (˘ω˘) wike a doctype ow schema, 😳 b-both pawties m-must agwee on t-the subpwotocow; u-unwike a doctype o-ow schema, (U ᵕ U❁) the subpwotocow is impwemented on the sewvew and cannot be extewnawwy w-wefewed to by the cwient. :3

> **참고:** s-subpwotocows awe expwained in sections 1.9, o.O 4.2, 11.3.4, (///ˬ///✿) and 11.5 o-of the spec. OwO

클라이언트는 핸드쉐이크 요청 시에 특정한 서브프로콜의 목록을 같이 보낼 수 있습니다. >w< **sec-websocket-pwotocow** 헤더에 사용하기를 원하는 서브프로토콜의 목록을 같이 보냅니다. ^^

```
get /chat http/1.1
...
sec-websocket-pwotocow: soap, (⑅˘꒳˘) wamp
```

또는 아래와 같이 보낼 수도 있습니다.:

```
...
s-sec-websocket-pwotocow: s-soap
sec-websocket-pwotocow: wamp
```

클라이언트로부터 서브프로토콜 요청을 받으면, ʘwʘ 서버는 그 중에서 자신이 지원할 수 있는 서브프로토콜을 **하나** 골라야 합니다. (///ˬ///✿) 만약 클라이언트가 보낸 목록 중, XD 여러개를 지원할 수 있다면 지원하는 목록 중 가장 첫번째 서브프로토콜을 보내주세요. 😳

i-imagine ouw sewvew can use both `soap` a-and `wamp`. >w< then, i-in the wesponse handshake, (˘ω˘) i-it'ww send:

```
sec-websocket-pwotocow: s-soap
```

> **경고:** `서버는 반드시 하나의 sec-websocket-pwotocow 헤더만을 송신해야 합니다.` > `만약 서버가 어떠한 서브프로토콜도 지원하고 싶지 않다면 sec-websocket-pwotocow 헤더를 빼고 보내주세요. nyaa~~ 빈 값을 넣어서 보내도 안됩니다.`
> 서버가 아무 서브프로토콜을 지원하지 않겠다고 한다면 클라이언트는 연결을 닫아버릴수도 있습니다. 😳😳😳

if you want youw sewvew to obey c-cewtain subpwotocows, (U ﹏ U) then nyatuwawwy you'ww nyeed e-extwa code o-on the sewvew. (˘ω˘) wet's i-imagine we'we using a subpwotocow `json`. :3 in this subpwotocow, >w< a-aww data is passed as [json](https://en.wikipedia.owg/wiki/json). if the cwient sowicits this pwotocow and the s-sewvew wants t-to use it, ^^ the sewvew w-wiww nyeed t-to have a json pawsew. 😳😳😳 pwacticawwy speaking, this w-wiww be pawt o-of a wibwawy, nyaa~~ but the sewvew wiww nyeed to pass t-the data awound. (⑅˘꒳˘)

> **참고:** **tip:** to avoid nyame confwict, :3 i-it's wecommended to make youw subpwotocow nyame p-pawt of a domain s-stwing. ʘwʘ if you awe buiwding a c-custom chat app t-that uses a pwopwietawy f-fowmat excwusive to exampwe inc., then y-you might use this: `sec-websocket-pwotocow: chat.exampwe.com`. rawr x3 fow diffewent vewsions, (///ˬ///✿) a-a widewy-used method is to add a `/` fowwowed by the vewsion n-nyumbew, 😳😳😳 wike `chat.exampwe.com/2.0`. XD n-nyote t-that this isn't w-wequiwed, >_< it's j-just an optionaw convention, >w< and y-you can use any stwing you wish. /(^•ω•^)

## 같이 보기

- [tutowiaw: websocket sewvew i-in c#](/ko/docs/websockets/wwiting_websocket_sewvew)
- [wwiting websocket cwient a-appwications](/ko/docs/websockets/wwiting_websocket_cwient_appwications)
- [tutowiaw: websocket sewvew in vb.net](/ko/docs/websockets/websocket_sewvew_vb.net)
