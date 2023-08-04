---
title: 웹소켓 서버 작성하기
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
---

{{APIRef("Websockets API")}}

## 개요

웹 소켓 서버는 특정한 프로토콜을 따르는 서버의 임의 포트를 리스닝하고 있는 TCP 어플리케이션입니다. 사용자 서버를 만드는 작업은 두려운 일일수도 있습니다. 하지만, 당신이 선택한 플랫폼상에서 간단한 웹 소켓 서버를 구현하는것은 쉬울것입니다.

웹 소켓 서버는 C(++), Python, [PHP](/ko/docs/PHP), [server-side JavaScript](/ko/docs/Web/JavaScript/Server-Side_JavaScript)등과 같은 [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets)을 지원하는 어떠한 server-side 프로그래밍 언어로도 개발될 수 있습니다. 이것은 어느 특정한 언어의 자습서는 아니지만, 당신 자신의 서버를 개발하는것을 용이하게 하는 지침으로써의 역할을 합니다.

당신은 HTTP가 작동하는 방식과 중간정도의 개발 경험이 있어야만 합니다. 개발언어에서 제공하는 TCP 소켓에 대한 지식이 요구될 수도 있습니다. 이 지침의 범위는 당신이 웹 소켓서버를 개발하기위해 필요한 최소한의 지식에 대해 소개하는것입니다.

> **참고:** 최신의 공식 웹 소켓 문서인 [RFC 6455](http://datatracker.ietf.org/doc/rfc6455/?include_text=1)를 읽으세요. 1과 4-7 섹션이 특별히 서버개발자에게 흥미로운 부분입니다. 10 섹션에서는 보안에 대해 논의하며, 당신의 서버를 공개하기전 해당 부분을 반드시 정독하여 읽어보셔야만합니다.

이 페이지에서 웹 소켓 서버는 매우 약간만 설명되어 있습니다. 웹 소켓 서버는 종종 다른 특정한 이유로 인해 분리되거나 전문화됩니다. 따라서 웹 소켓과의 핸드 쉐이크를 감지하거나 미리 처리하거나 또는 클라이언트들을 실제 웹 소켓 서버에 보내기위해 일반적으로 HTTP 서버와 같은 [reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy)를 사용합니다. 이는 쿠키나 인증을 처리하기 위해 당신의 서버 코드를 잔뜩 작성하지 않아도 된다는 것을 의미합니다.

## <a name="Handshake">Step 1: The WebSocket Handshake</a>

먼저 서버는 표준 TCP 소켓을 사용하여 연결하려는 소켓을 위해 반드시 듣고 있어야 합니다. 당신의 플랫폼에 따라 서버는 이미 준비가 되어있을수도 있습니다. 예를들어, 당신의 서버가 example.com에 port가 8000인 채로 듣고 있다고 가정해봅시다.

> **경고:** 서버에서 아무 포트나 선택하여 연결할 수 있지만, 80 또는 443 포트가 아닌 다른 연결은 방화벽/프록시에 의해 문제를 일으킬 수 있습니다. TLS/SSL 보안 연결인 443 포트와의 연결이 가장 쉬울 것입니다. 현재 대부분의 브라우저(특히 Firefox 8+)는 안전한 페이지라 할지라도 보안 연결이 아닌 웹소켓 연결은 허용되지 않습니다.

웹소켓의 핸드셰이크 과정은 HTTP를 바탕으로 이루어집니다. 자세한 연결 과정은 다루지 않으나, 각 요청자는 연결 과정이 제대로 이루어질때까지 요청을 보류합니다. 서버는 클라이언트가 요청하는 모든 것을 주의깊게 이해해야 하고, 그렇지 않을 경우 보안 이슈가 일어날 수 있습니다.

### 클라이언트 핸드쉐이크 요청

당신이 웹 소켓 서버를 개발 중이라도, 클라이언트는 여전히 웹 소켓 핸드쉐이킹 과정을 시작합니다. 따라서, 당신은 클라이언트의 요청을 이해하기 위한 방법을 이해해야합니다. 클라이언트는 아래와 같아 보이는 매우 표준적인 HTTP 요청을 보낼것입니다.(HTTP 버전은 반드시 1.1. 혹은 그 이상이어하며, 반드시 GET방식이어야합니다.)

```
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

이외에도 클라이언트는 여러 메세지나 서브프로토콜을 추가해 보낼 수도 있습니다. `User-Agent`, `Referer`, `Cookie`와 같은 공통 헤더나, 인증 헤더도 말이죠. 자세한 [사항](#Miscellaneous)은 다음을 참조하세요. 원하는 대로 요청에 무엇이든지 첨부하여 보낼 수 있으며 웹소켓과 관련이 없을 경우 무시합니다. 통상적으로, 리버스 프록시가 이미 그런 기능을 담당하고 있을 겁니다.

잘못된 값을 가지거나 형식이 잘못된 헤더의 경우, 서버는 "[400 Bad Request](/ko/docs/HTTP/Response_codes#400)" 응답을 보내 즉시 소켓을 종료시켜야 합니다. HTTP 응답 바디에 핸드셰이크에 실패한 이유가 명시되어 있지만, 브라우저 상에서 명시적으로 나타내진 않습니다. 서버가 웹소켓의 버전 인식을 실패할 경우, 인식 가능한 버전을 명시해 `Sec-WebSocket-Version` 요청을 보내야 합니다. (최신 가이드 v13에서 설명되어 있습니다) 이제, 가장 흥미로운 헤더인 `Sec-WebSocket-Key`을 살펴봅니다.

> **참고:** **팁:** 모든 **브라우저는** [`Origin` header](/ko/docs/HTTP/Access_control_CORS#Origin)를 보냅니다. 이 헤더는 보안을 위해 활용되며, (checking for same origin, whitelisting/ blacklisting, etc.) 활용하고 싶지 않다면 [403 Forbidden](/ko/docs/HTTP/Response_codes#403)을 보냅니다. 하지만 non-browser 에이전트가 위조된 `Origin`을 보낼수도 있다는 것을 명심해야 합니다. 따라서 대부분의 애플리케이션은 이 헤더가 없는 요청을 거부합니다.

> **참고:** **Tip:** The request-uri (`/chat` here) has no defined meaning in the spec. So many people cleverly use it to let one server handle multiple WebSocket applications. For example, `example.com/chat` could invoke a multiuser chat app, while `/game` on the same server might invoke a multiplayer game.

> **참고:** [Regular HTTP status codes](/ko/docs/HTTP/Response_codes) can only be used before the handshake. After the handshake succeeds, you have to use a different set of codes (defined in section 7.4 of the spec).

### 서버가 보내는 핸드쉐이크 응답

위와 같은 요청을 받으면 서버 역시도 HTTP 구조의 응답을 보내주어야 합니다. 자세한 내용은 아래와 같습니다.(각각의 헤더 끝에는 \r\n을 그리고 가장 마지막에는 한번 더 \r\n을 넣는걸 잊지 마세요.)

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Additionally, the server can decide on extension/subprotocol requests here; see [Miscellaneous](#Miscellaneous) for details. The `Sec-WebSocket-Accept` part is interesting. The server must derive it from the `Sec-WebSocket-Key` that the client sent. To get it, concatenate the client's `Sec-WebSocket-Key` and "`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`" together (it's a "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), take the [SHA-1 hash](https://en.wikipedia.org/wiki/SHA-1) of the result, and return the [base64](https://en.wikipedia.org/wiki/Base64) encoding of the hash.

> **참고:** **FYI:** This seemingly overcomplicated process exists so that it's obvious to the client whether or not the server supports WebSockets. This is important because security issues might arise if the server accepts a WebSockets connection but interprets the data as a HTTP request.

So if the Key was "`dGhlIHNhbXBsZSBub25jZQ==`", the Accept will be "`s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`". Once the server sends these headers, the handshake is complete and you can start swapping data!

> **참고:** The server can send other headers like Set-Cookie, or ask for authentication or redirects via other status codes, before sending the reply handshake.

### 클라이언트 추적

웹소켓 프로토콜과 직접적인 연관은 없지만, 이 항목에서 언급할만한 의미가 있습니다. 웹소켓 서버는 이미 연결된 클라이언트들의 반복적인 연결(hand shaking)을 막기위해 클라이언트의 소켓 상태를 추적해야합니다. 같은 IP 주소를 가지는 클라이언트는 여러번 연결을 시도 할 수 있습니다.(하지만, 서버는 [Denial-of-Service attacks](https://en.wikipedia.org/wiki/Denial_of_service) 을 위해 너무 많은 연결 요청을 거부할 수 있습니다).

## Step 2: 데이터 프레임 교환

Either the client or the server can choose to send a message at any time — that's the magic of WebSockets. However, extracting information from these so-called "frames" of data is a not-so-magical experience. Although all frames follow the same specific format, data going from the client to the server is masked using [XOR encryption](https://en.wikipedia.org/wiki/XOR_cipher) (with a 32-bit key). Section 5 of the specification describes this in detail.

### 데이터 프레임 포멧

모든 데이터 프레임 (서버->클라이언트 / 클라이언트 -> 서버) 은 아래의 구조를 따릅니다:

<pre style="float: left; margin-right: 20px;"> <strong>0</strong>               <strong>1</strong>               <strong>2</strong>               3
 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7 0 1 2 3 4 5 6 7
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S| (4)   |A|     (7)     |             (16/64)           |
|N|V|V|V|       |S|             |   (if payload len==126/127)   |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
 4               5               6               7
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|     Extended payload length continued, if payload len == 127  |
+ - - - - - - - - - - - - - - - +-------------------------------+
 8               9               <strong>10</strong>              11
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |Masking-key, if MASK set to 1  |
+-------------------------------+-------------------------------+
 12              13              <strong>14</strong>              15
+-------------------------------+-------------------------------+
| Masking-key (continued)       |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+</pre>

RSV1-3 는 사용되지 않습니다. 이 필드들은 확장 프로토콜 또는 미래를 위해 예약되었습니다.

MASK 비트는 메세지가 인코딩되어있는지의 여부를 나타냅니다.클라이언트가 서버로 보내는 메세지는 항상 마스킹되어야합니다. 따라서 서버는 클라이언트로부터 받은 이 필드가 항상 1임을 기대할 수 있습니다. (만약 클라이언트가 마스킹되지 않은 메세지를 보낸다면 서버는 연결을 종료해야 합니다. 참고 : [section 5.1 of the spec](http://tools.ietf.org/html/rfc6455#section-5.1) ).
서버가 클라이언트에게 보내는 메세지는 MASK 필드가 항상 0이고 데이터는 마스킹되지 않은 상태여야 합니다. 마스킹이 어떻게 이루어지는지 / 마스킹된 메세지를 어떻게 디코딩하는지는 나중에 설명합니다.
(주의: wss 연결이라고 하더라도 클라이언트가 보내는 패킷은 항상 마스킹되어야 합니다.)

opcode 필드는 뒤따라오는 payload 데이터가 어떠한 포멧인지를 나타냅니다. 0x0은 continuation, 0x1은 텍스트(항상 UTF-8), 0x2는 바이너리 데이터 / 나머지 값은 "컨트롤 코드"에 사용됩니다. (컨트롤 코드에 대해서는 나중에 다루게 됩니다.) 현재 버전의 웹소켓 프로토콜에서는 0x3 / 0x7 / 0xB\~0xF는 아무런 의미도 지니고있지 않습니다.

FIN 비트는 이 메세지가 마지막임을 나타냅니다. 만약 FIN 비트가 0이라면 서버는 뒤에 더 따라오게 될 메세지들까지 수신해야 합니다. FIN 비트가 1일 경우에는 전체 메세지가 수신되었으므로 이를 처리합니다. 이 부분에 대해서는 뒤에 다시 설명합니다.

### Payload 길이 알아내기

수신한 프레임으로부터 payload 데이터를 읽기 위해서는 payload length 필드를 읽어야 합니다. 불행히도 이는 약간 복잡한 작업을 거치는데 아래 순서대로 처리해 주세요.

1. 9번째부터 15번째까지의 비트를 읽습니다. 이를 unsigned integer로 취급한 다음 값이 125거나 이보다 작을 경우 이 자체가 payload length 입니다. 이 경우에는 2, 3 과정은 필요 없습니다. 하지만 126이면 2번으로, 127일 경우 3번으로 가주세요
2. 다음 16비트를 읽습니다. 이를 unsigned integer로 처리하고 payload length 값으로 사용합니다.
3. 다음 64비트를 읽습니다. 이를 unsigned integer로 처리하고 payload length 값으로 사용합니다. ([최상위 비트](https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%83%81%EC%9C%84_%EB%B9%84%ED%8A%B8)는 항상 0이어야 합니다.)

### 마스킹된 Payload 데이터 디코딩하기

MASK 비트가 설정되어 있디만 32비트 사이즈의 Masking-Key 필드 또한 존재하게 됩니다.
아래 의사코드는 Payload 데이터를 **ENCODED** / Masking-Key 필드를 **MASK** 라고 가정하고 데이터를 디코딩하는 방법을 보여줍니다. **ENCODED**값을 0부터 순회하면서 **MASK**의 i % 4에 해당하는 1바이트와 XOR 연산을 수행합니다.

If the MASK bit was set (and it should be, for client-to-server messages), read the next 4 octets (32 bits); this is the masking key. Once the payload length and masking key is decoded, you can go ahead and read that number of bytes from the socket. Let's call the data **ENCODED**, and the key **MASK**. To get **DECODED**, loop through the octets (bytes a.k.a. characters for text data) of **ENCODED** and XOR the octet with the (i modulo 4)th octet of MASK. In pseudo-code (that happens to be valid JavaScript):

```js
var DECODED = "";
for (var i = 0; i < ENCODED.length; i++) {
  DECODED[i] = ENCODED[i] ^ MASK[i % 4];
}
```

이제 **DECODED** 데이터를 가지고 프로토콜에 맞게 활용하면 됩니다.

### Message Fragmentation

The FIN and opcode fields work together to send a message split up into separate frames. This is called message fragmentation. Fragmentation is only available on opcodes `0x0` to `0x2`.

Recall that the opcode tells what a frame is meant to do. If it's `0x1`, the payload is text. If it's `0x2`, the payload is binary data. However, if it's `0x0,` the frame is a continuation frame. This means the server should concatenate the frame's payload to the last frame it received from that client. Here is a rough sketch, in which a server reacts to a client sending text messages. The first message is sent in a single frame, while the second message is sent across three frames. FIN and opcode details are shown only for the client:

<pre style="font-size: 14px;"><strong>Client:</strong> FIN=1, opcode=0x1, msg="hello"
<strong>Server:</strong> <em>(process complete message immediately) </em>Hi.
<strong>Client:</strong> FIN=0, opcode=0x1, msg="and a"
<strong>Server:</strong> <em>(listening, new message containing text started)</em>
<strong>Client:</strong> FIN=0, opcode=0x0, msg="happy new"
<strong>Server:</strong> <em>(listening, payload concatenated to previous message)</em>
<strong>Client:</strong> FIN=1, opcode=0x0, msg="year!"
<strong>Server:</strong> <em>(process complete message) </em>Happy new year to you too!</pre>

Notice the first frame contains an entire message (has `FIN=1` and `opcode!=0x0`), so the server can process or respond as it sees fit. The second frame sent by the client has a text payload (`opcode=0x1`), but the entire message has not arrived yet (`FIN=0`). All remaining parts of that message are sent with continuation frames (`opcode=0x0`), and the final frame of the message is marked by `FIN=1`. [Section 5.4 of the spec](http://tools.ietf.org/html/rfc6455#section-5.4) describes message fragmentation.

## Pings and Pongs: The Heartbeat of WebSockets

핸드쉐이크가 끝난 시점부터 서버 혹은 클라이언트는 언제든지 ping 패킷을 보낼 수 있습니다. 만약 ping 패킷이 수신되면 수신자는 가능한 빨리 응답으로 pong 패킷을 보내야 합니다. (ping에서 전달된 payload와 동일한 payload를 붙여서 pong을 보냅니다. 이 경우 최대 payload length는 125입니다.) 서버는 주기적으로 ping을 보내 클라이언트가 아직 살아있는 상태인지 체크할 수 있습니다.

A ping or pong is just a regular frame, but it's a **control frame**. Pings have an opcode of `0x9`, and pongs have an opcode of `0xA`. When you get a ping, send back a pong with the exact same Payload Data as the ping (for pings and pongs, the max payload length is 125). You might also get a pong without ever sending a ping; ignore this if it happens.

> **참고:** If you have gotten more than one ping before you get the chance to send a pong, you only send one pong.

## Step 4: Closing the connection

To close a connection either the client or server can send a control frame with data containing a specified control sequence to begin the closing handshake (detailed in [Section 5.5.1](http://tools.ietf.org/html/rfc6455#section-5.5.1)). Upon receiving such a frame, the other peer sends a Close frame in response. The first peer then closes the connection. Any further data received after closing of connection is then discarded.

## <a name="Miscellaneous">Miscellaneous</a>

> **참고:** WebSocket codes, extensions, subprotocols, etc. are registered at the [IANA WebSocket Protocol Registry](http://www.iana.org/assignments/websocket/websocket.xml).

WebSocket extensions and subprotocols are negotiated via headers during [the handshake](#Handshake). Sometimes extensions and subprotocols seem too similar to be different things, but there is a clear distinction. Extensions control the WebSocket **frame** and **modify** the payload, while subprotocols structure the WebSocket **payload** and **never modify** anything. Extensions are optional and generalized (like compression); subprotocols are mandatory and localized (like ones for chat and for MMORPG games).

### Extensions

> **참고:** **This section needs expansion. Please edit if you are equipped to do so.**

Think of an extension as compressing a file before e-mailing it to someone. Whatever you do, you're sending the _same_ data in different forms. The recipient will eventually be able to get the same data as your local copy, but it is sent differently. That's what an extension does. WebSockets defines a protocol and a simple way to send data, but an extension such as compression could allow sending the same data but in a shorter format.

> **참고:** Extensions are explained in sections 5.8, 9, 11.3.2, and 11.4 of the spec.

_TODO_

### 서브프로토콜

Think of a subprotocol as a custom [XML schema](https://en.wikipedia.org/wiki/XML_schema) or [doctype declaration](https://en.wikipedia.org/wiki/Document_Type_Definition). You're still using XML and its syntax, but you're additionally restricted by a structure you agreed on. WebSocket subprotocols are just like that. They do not introduce anything fancy, they just establish structure. Like a doctype or schema, both parties must agree on the subprotocol; unlike a doctype or schema, the subprotocol is implemented on the server and cannot be externally refered to by the client.

> **참고:** Subprotocols are explained in sections 1.9, 4.2, 11.3.4, and 11.5 of the spec.

클라이언트는 핸드쉐이크 요청 시에 특정한 서브프로콜의 목록을 같이 보낼 수 있습니다. **Sec-WebSocket-Protocol** 헤더에 사용하기를 원하는 서브프로토콜의 목록을 같이 보냅니다.

```
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

또는 아래와 같이 보낼 수도 있습니다.:

```
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

클라이언트로부터 서브프로토콜 요청을 받으면, 서버는 그 중에서 자신이 지원할 수 있는 서브프로토콜을 **하나** 골라야 합니다. 만약 클라이언트가 보낸 목록 중, 여러개를 지원할 수 있다면 지원하는 목록 중 가장 첫번째 서브프로토콜을 보내주세요.

Imagine our server can use both `soap` and `wamp`. Then, in the response handshake, it'll send:

```
Sec-WebSocket-Protocol: soap
```

> **경고:** `서버는 반드시 하나의 Sec-Websocket-Protocol 헤더만을 송신해야 합니다.` > `만약 서버가 어떠한 서브프로토콜도 지원하고 싶지 않다면 Sec-Websocket-Protocol 헤더를 빼고 보내주세요. 빈 값을 넣어서 보내도 안됩니다.`
> 서버가 아무 서브프로토콜을 지원하지 않겠다고 한다면 클라이언트는 연결을 닫아버릴수도 있습니다.

If you want your server to obey certain subprotocols, then naturally you'll need extra code on the server. Let's imagine we're using a subprotocol `json`. In this subprotocol, all data is passed as [JSON](https://en.wikipedia.org/wiki/JSON). If the client solicits this protocol and the server wants to use it, the server will need to have a JSON parser. Practically speaking, this will be part of a library, but the server will need to pass the data around.

> **참고:** **Tip:** To avoid name conflict, it's recommended to make your subprotocol name part of a domain string. If you are building a custom chat app that uses a proprietary format exclusive to Example Inc., then you might use this: `Sec-WebSocket-Protocol: chat.example.com`. For different versions, a widely-used method is to add a `/` followed by the version number, like `chat.example.com/2.0`. Note that this isn't required, it's just an optional convention, and you can use any string you wish.

## 같이 보기

- [Tutorial: Websocket server in C#](/ko/docs/WebSockets/Writing_WebSocket_server)
- [Writing WebSocket client applications](/ko/docs/WebSockets/Writing_WebSocket_client_applications)
- [Tutorial: Websocket server in VB.NET](/ko/docs/WebSockets/WebSocket_Server_Vb.NET)
