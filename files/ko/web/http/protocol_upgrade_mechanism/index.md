---
title: 프로토콜 업그레이드 메커니즘
slug: Web/HTTP/Protocol_upgrade_mechanism
l10n:
  sourceCommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{HTTPSidebar}}

[HTTP/1.1 프로토콜](/ko/docs/Web/HTTP)은 {{HTTPHeader("Upgrade")}} 헤더 필드를 사용하여 이미 설정된 연결을 다른 프로토콜로 업그레이드하는데 사용할 수 있는 특별한 메커니즘을 제공합니다.

이 메커니즘은 선택사항으로 프로토콜 변경을 강제하는데 사용할 수 없습니다. 구현체는 새로운 프로토콜을 지원하더라도 업그레이드를 이용하지 않도록 선택할 수 있으며, 실제로 이 메커니즘은 대부분 웹소켓 연결을 부트스트랩하는데 사용됩니다.

또한 HTTP/2는 이 메커니즘의 사용을 명시적으로 허용하지 않고, HTTP/1.1에서만 명시적으로 허용합니다.

## HTTP/1.1 연결 업그레이드

{{HTTPHeader("Upgrade")}} 헤더 필드는 클라이언트가 서버에게 우선순위가 내림차순으로 나열된 프로토콜 중 하나로 전환할 것을 요청하는데 사용됩니다.

`Upgrade`는 hop-by-hop 헤더이므로 {{HTTPHeader("Connection")}} 헤더 필드도 작성해야 합니다. 따라서 Upgrade를 포함하는 일반적인 요청은 다음과 같습니다.

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

요청된 프로토콜에 따라 다른 헤더가 필요할 수도 있습니다. 예를 들어 [웹소켓](/ko/docs/Web/API/WebSocket) 업그레이드는 연결을 열 때 어느 정도의 보안을 제공할 뿐만 아니라 웹소켓 연결에 대한 세부적인 내용을 구성하는걸 허락합니다. 자세한 내용은 [웹소켓 연결로 업그레이드하기](#웹소켓_연결로_업그레이드하기)를 참조하세요.

서버가 연결을 업그레이드하기로 결정했다면, 전환 중인 프로토콜을 지정하는 Upgrade 헤더를 포함한 {{HTTPStatus(101, "101 Switching Protocols")}} 응답 상태를 다시 보냅니다. 만약 연결을 업그레이드하지 못하거나 업그레이드할 수 없는 경우, `Upgrade` 헤더는 무시하고 {{HTTPStatus(200, "200 OK")}}와 같은 일반 응답을 보냅니다.

서버는 `101` 상태 코드를 보낸 직후 새로운 프로토콜로 통신을 시작할 수 있으며, 필요한 경우 프로토콜별 추가적인 핸드셰이크를 수행합니다. 업그레이드된 응답이 완료되면 연결은 사실상 양방향 파이프라인이 되고, 업그레이드를 시작한 요청은 새로운 프로토콜을 통해 완료할 수 있습니다.

## 이 메커니즘의 일반적인 사용 방법

여기서는 {{HTTPHeader("Upgrade")}} 헤더의 가장 일반적인 사용 사례에 대해 살펴봅니다.

### 웹소켓 연결로 업그레이드하기

현재까지 HTTP 연결을 업그레이드하는 가장 일반적인 사용 사례는 웹소켓을 사용하는 것입니다. 웹소켓은 항상 HTTP, HTTPS 연결을 업그레이드하여 구현됩니다. 만약 [웹소켓 API](/ko/docs/Web/API/WebSocket) 또는 웹소켓을 사용하는 다른 라이브러리를 사용해서 새로운 연결을 열게 된다면 이러한 과정 대부분 또는 전부가 처리된다는 점을 기억해 두세요. 예를 들어 웹소켓 연결을 여는 것은 다음과 같이 간단합니다.

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

{{domxref("WebSocket.WebSocket", "WebSocket()")}} 생성자는 초기 HTTP/1.1 연결을 생성하고, 핸드셰이킹과 업그레이드 프로세스를 처리하는 모든 작업을 수행합니다.

> **참고:** `"wss://"` URL 스키마를 사용하여 보안 웹소켓 연결을 열 수 있습니다.

만약 웹소켓 연결을 처음부터 만들어야 한다면 핸드셰이크 과정을 직접 처리해야 합니다. 초기 HTTP/1.1 세션을 만든 후에는 다음과 같이 표준 요청에 {{HTTPHeader("Upgrade")}}와 {{HTTPHeader("Connection")}} 헤더를 추가하여 업그레이드를 요청해야 합니다.

```http
Connection: Upgrade
Upgrade: websocket
```

### 웹소켓 관련 헤더

다음 헤더에는 웹소켓 업그레이드 프로세스와 관련되어 있습니다. {{HTTPHeader("Upgrade")}}와 {{HTTPHeader("Connection")}} 헤더를 제외한 나머지 헤더는 일반적으로 브라우저와 서버가 서로 통신할 때 선택적으로 처리됩니다.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

서버가 사용하도록 요청할 1개 이상의 프로토콜 수준 웹소켓 확장자를 지정합니다. 하나의 요청안에 여러 개의 `Sec-WebSocket-Extension` 헤더를 사용하는 것이 허용되며, 나열된 모든 확장자는 하나의 헤더에 포함한 것과 결과가 같습니다.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : 요청할 확장자 목록은 쉼표로 구분할 수 있습니다. 확장자 이름은 [IANA 웹소켓 확장자 이름 레지스트리](https://www.iana.org/assignments/websocket/websocket.xml#extension-name)에서 선택해야 합니다. 매개변수를 사용하는 확장자는 세미콜론으로 구분합니다.

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

클라이언트가 웹소켓으로 업그레이드를 요청할 자격이 있는지 확인하는데 필요한 정보를 서버에 제공합니다. 이 헤더는 안전하지 않은 HTTP 클라이언트가 업그레이드를 원할 때 사용할 수 있으며, 악용에 대비해 약간의 보안을 제공합니다. 키에 대한 값은 웹소켓 명세서에 정의된 알고리즘으로 계산되므로 보안을 제공하지 않습니다. 대신, 웹소켓이 아닌 클라이언트가 부주의나 오용으로 웹소켓 연결 요청을 방지하는데 도움이 됩니다. 본질적으로 이 키는 "네, 저는 웹소켓 연결을 열려고 합니다."라는 것을 확인합니다.

이 헤더는 사용을 선택한 클라이언트에 의해 자동으로 추가되며, {{domxref("fetch()")}} 또는 {{domxref("XMLHttpRequest.setRequestHeader()")}} 메서드를 사용하여 추가할 수 없습니다.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : 요청을 업그레이드하기 위한 키입니다. 클라이언트는 웹소켓으로 업그레이드를 원한다면 해당 키를 요청에 추가함으로써, 서버는 자체 키를 응답에 포함하고, 클라이언트는 업그레이드 응답을 전달하기 전에 서버에서 받은 키를 검증합니다.

서버 응답에 있는 {{HTTPHeader("Sec-WebSocket-Accept")}} 헤더는 지정된 `key`를 기반으로 계산된 값을 가집니다.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

`Sec-WebSocket-Protocol` 헤더는 사용하고자 하는 여러 개의 웹소켓 프로토콜을 선호하는 순서대로 지정합니다. 서버는 지원하는 첫 번째 프로토콜을 선택하고, 응답에 `Sec-WebSocket-Protocol` 헤더로 반환합니다. 이 헤더는 여러번 사용할 수 있으며, 하나의 헤더에 쉼표로 구분하여 하위 프로토콜 식별자 목록을 작성하는 것과 결과가 같습니다.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : 선호하는 순서에 따라 쉼표로 구분된 하위 프로토콜 이름 목록입니다. 하위 프로토콜은 [IANA 웹소켓 하위 프로토콜 이름 레지스트리](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name)에서 선택하거나, 클라이언트와 서버 모두 이해하는 사용자 정의 이름일 수도 있습니다.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### 요청 헤더

클라이언트는 사용하길 원하는 웹소켓 프로토콜 버전을 지정하여 서버에서 해당 버전이 지원되는지 확인할 수 있습니다.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : 클라이언트가 서버와 통신할 때 사용하길 원하는 웹소켓 프로토콜 버전입니다. 버전 번호는 [IANA 웹소켓 버전 번호 레지스트리](https://www.iana.org/assignments/websocket/websocket.xml#version-number)에 나열된 가능한 최신 버전이어야 합니다. 웹소켓 프로토콜의 가장 최근의 최종 버전은 13 버전입니다.

##### 응답 헤더

서버가 지정된 웹소켓 프로토콜 버전을 사용해 통신할 수 없다면, 426 Upgrade Required 같은 에러와 함께 지원하는 프로토콜 버전 목록을 쉼표로 구분한 `Sec-WebSocket-Version` 헤더를 포함하여 응답합니다. 만약 서버가 요청된 프로토콜 버전을 지원한다면, 응답 안에 `Sec-WebSocket-Version` 헤더가 포함되지 않습니다.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : 서버가 지원할 수 있는 웹소켓 프로토콜 버전을 쉼표로 구분한 목록입니다.

### 응답 전용 헤더

서버 응답에는 아래 내용이 포함될 수 있습니다.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

서버에서 웹소켓 연결을 시작할 때 오프닝 핸드셰이크를 처리하는 동안 서버 응답 메시지에 포함됩니다. 이 헤더는 응답 헤더에 한 번만 표시됩니다.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : {{HTTPHeader("Sec-WebSocket-Key")}} 헤더가 제공된다면, 이 헤더의 값은 키값을 가져와 문자열 "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"을 연결하고, 연결된 문자열에 [SHA-1](https://en.wikipedia.org/wiki/SHA-1) 해시를 계산하여 20바이트 값을 생성해 결과를 계산합니다. 그런 다음 해당 값은 [base64](/ko/docs/Glossary/Base64)로 인코딩하여 이 속성의 값을 얻게 됩니다.

## 참고서

- [웹소켓 API](/ko/docs/Web/API/WebSocket)
- [HTTP](/ko/docs/Web/HTTP)
- RFC 명세서:

  - {{RFC(7230)}}
  - {{RFC(6455)}}
  - {{RFC(7540)}}
