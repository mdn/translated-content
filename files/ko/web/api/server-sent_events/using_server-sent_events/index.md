---
title: Server-Sent Events 사용하기
slug: Web/API/Server-sent_events/Using_server-sent_events
l10n:
  sourceCommit: c669fa7426d621482ca4c2d980c476cc5f8b62df
---

{{DefaultAPISidebar("Server Sent Events")}}

[server-sent events](/ko/docs/Web/API/Server-sent_events)를 사용하는 웹 애플리케이션을 개발하는 것은 간단합니다. 서버 측에서는 프론트엔드로 이벤트를 스트리밍하는 약간의 코드가 필요하지만, 클라이언트 측 코드는 들어오는 이벤트를 처리하는 부분에서 [웹소켓](/ko/docs/Web/API/WebSockets_API)과 거의 동일하게 작동합니다. 이는 단방향 연결이기 때문에 클라이언트에서 서버로 이벤트를 보낼 수는 없습니다.

## 서버로부터 이벤트 수신하기

server-sent event API는 {{domxref("EventSource")}} 인터페이스에 포함돼 있습니다.

## `EventSource` 인스턴스 생성하기

이벤트 수신을 시작하기 위해 서버와의 연결을 열기 위해서는 이벤트를 생성하는 스크립트의 URL을 사용하여 새 `EventSource` 객체를 만들면 됩니다. 다음은 예시 코드입니다.

```js
const evtSource = new EventSource("ssedemo.php");
```

이벤트를 생성하는 스크립트가 다른 오리진에 호스팅되어 있다면, URL과 옵션 딕셔너리를 모두 사용하여 새로운 `EventSource` 객체를 만들어야 합니다. `example.com`에 클라이언트 스크립트가 있는 경우를 예시로 들어 보겠습니다.

```js
const evtSource = new EventSource("//api.example.com/ssedemo.php", {
  withCredentials: true,
});
```

### `message` 이벤트 수신하기

서버에서 보낸 [`event`](#event) 필드가 없는 메시지는 `message` 이벤트로 수신됩니다. 메시지 이벤트를 수신하기 위해서는 {{domxref("EventSource.message_event", "message")}} 이벤트를 위한 핸들러를 추가해야 합니다.

```js
evtSource.onmessage = function (e) {
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
};
```

위 코드는 서버로부터 전송된 메시지 이벤트를 감지하고 메시지의 텍스트를 문서의 HTML에 있는 목록에 추가합니다.

### 사용자 지정 이벤트 수신하기

`event` 필드를 갖는 서버의 메시지들은 `event`에 명시된 이름의 이벤트로 수신됩니다. 예를 들면 아래와 같습니다.

```js
evtSource.addEventListener("ping", function (event) {
  const newElement = document.createElement("li");
  const time = JSON.parse(event.data).time;
  newElement.textContent = "ping at " + time;
  eventList.appendChild(newElement);
});
```

이 코드는 서버가 `event` 필드가 `ping`으로 설정된 메시지를 보낼 때마다 호출되며, `data` 필드의 JSON을 파싱하여 그 정보를 출력합니다.

> **주의:** **HTTP/2 를 사용하지 않을 때** SSE는 활성화된 연결의 최대 개수 제한으로 인한 한계를 겪을 수 있으며, 이 제한은 브라우저당 적용될 뿐만 아니라 매우 낮은 수(6)로 설정되어 있어 특히 여러 탭을 열 때 문제를 겪을 수 있습니다. 이 문제는 [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=275955)과 [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=906896)에서 수정되지 않을 것으로 표시되었습니다. 이 제한은 브라우저와 도메인별로 적용되므로 `www.example1.com` 에 대해 모든 탭에서 6개의 SSE 연결을 열 수 있고, `www.example2.com` 에 대해서도 6개의 SSE 연결을 열 수 있습니다. (출처: [Stackoverflow](https://stackoverflow.com/a/5326159/1905229)). HTTP/2를 사용할 때는 동시에 열 수 있는 HTTP 스트림의 최대 개수가 서버와 클라이언트 간에 협상되며, 기본값은 100입니다.

## 서버에서의 이벤트 송신

이벤트를 보내는 서버 측 스크립트는 MIME 타입 `text/event-stream` 을 사용하여 응답해야 합니다. 각 알림은 두 개의 줄바꿈으로 끝나는 텍스트 블록으로 전송됩니다. 이벤트 스트림 형식에 대한 자세한 내용은 [이벤트 스트림 형식](#이벤트_스트림_형식)을 참조하세요.

여기서 사용하고 있는 예제의 {{Glossary("PHP")}} 코드는 다음과 같습니다.

```php
date_default_timezone_set("America/New_York");
header("X-Accel-Buffering: no");
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");

$counter = rand(1, 10);
while (true) {
  // 매 초 "ping" 이벤트를 전송합니다.

  echo "event: ping\n";
  $curDate = date(DATE_ISO8601);
  echo 'data: {"time": "' . $curDate . '"}';
  echo "\n\n";

  // 무작위 주기로 간단한 메시지를 전송합니다.

  $counter--;

  if (!$counter) {
    echo 'data: This is a message at time ' . $curDate . "\n\n";
    $counter = rand(1, 10);
  }

 if (ob_get_contents()) {
      ob_end_flush();
  }
  flush();

  // 클라이언트가 연결을 중단한 경우(페이지를 닫은 경우) 루프를 중단합니다.

  if (connection_aborted()) break;

  sleep(1);
}
```

위의 코드는 매초 "ping" 이벤트 타입의 이벤트를 생성합니다. 각 이벤트의 데이터는 이벤트가 생성된 시점의 ISO 8601 타임스탬프를 포함하는 JSON 객체입니다. 무작위 주기로 이벤트 타입이 없는 간단한 메시지가 전송됩니다. 루프는 연결 상태와 상관없이 계속 실행되므로, 연결이 종료되었는지(예: 클라이언트가 페이지를 닫은 경우) 확인하여 루프를 중단하는 체크가 포함되어 있습니다.

> [!NOTE]
> 이 글에 나온 코드를 사용하는 전체 예제는 GitHub에서 확인할 수 있습니다 — [PHP를 사용한 간단한 SSE 데모](https://github.com/mdn/dom-examples/tree/main/server-sent-events)를 참조하세요.

## 에러 핸들링

네트워크 타임아웃 또는 [접근 제어](/ko/docs/Web/HTTP/Guides/CORS)와 관련된 문제 등 문제가 발생할 때 에러 이벤트가 생성됩니다. `EventSource` 객체에 `onerror` 콜백을 구현하여 프로그래밍적으로 이를 처리할 수 있습니다.

```js
evtSource.onerror = function (e) {
  alert("EventSource failed.");
};
```

## 이벤트 스트림 닫기

기본적으로 클라이언트와 서버 간의 연결이 닫히면 연결이 다시 시작됩니다. 연결은 `.close()` 메서드로 종료됩니다.

```js
evtSource.close();
```

## 이벤트 스트림 형식

이벤트 스트림은 [UTF-8](/ko/docs/Glossary/UTF-8)을 사용하여 인코딩해야 하는 간단한 텍스트 데이터의 스트림입니다. 이벤트 스트림의 메시지는 두 개의 개행 문자로 구분됩니다. 줄의 첫 번째 문자가 콜론이면 사실상 주석으로 취급되어 무시됩니다.

> [!NOTE]
> 주석 라인은 연결이 시간 초과되는 것을 방지하기 위해 사용할 수 있습니다. 서버는 연결을 유지하기 위해 주기적으로 주석을 보낼 수 있습니다.

각 메시지는 해당 메시지의 필드를 나열하는 하나 이상의 텍스트 라인으로 구성됩니다. 각 필드는 필드 이름, 콜론, 그 필드 값에 해당하는 텍스트 데이터로 표시됩니다.

### 필드

수신된 각 메시지는 다음과 같은 필드 중 하나를 포함하며, 각 필드는 한 줄에 하나씩 나열됩니다.

- `event`
  - : 이벤트를 설명하는 이벤트 유형을 식별하는 문자열입니다. 이 값이 지정되어 있다면 브라우저는 지정된 이벤트 이름에 대한 리스너에게 이벤트를 발생시킵니다. 웹 사이트 소스 코드가 이름을 갖는 이벤트를 수신하기 위해서는 `addEventListener()` 를 사용해야 합니다. 메시지에 이벤트 이름이 지정되지 않은 경우 `onmessage` 핸들러가 호출됩니다.
- `data`
  - : 메시지의 데이터 필드입니다. `EventSource` 가 `data:` 로 시작하는 연속된 여러 줄을 받게 되면 이를 연결하여 각 줄 사이에 개행 문자를 삽입합니다. 끝에 있는 개행 문자는 제거됩니다.
- `id`
  - : [`EventSource`](/ko/docs/Web/API/EventSource) 객체의 마지막 이벤트 ID 값을 설정하는 이벤트 ID입니다.
- `retry`
  - : 재연결 시간입니다. 서버와의 연결이 끊어지면 브라우저는 재연결을 시도하기 전에 지정된 시간을 기다립니다. 이 값은 밀리초 단위의 정수여야 합니다. 정수가 아닌 값이 지정된 경우 이 필드는 무시됩니다.

이를 제외한 모든 필드 이름은 무시됩니다.

> [!NOTE]
> 콜론을 포함하지 않는 줄의 경우 전체 줄이 빈 값 문자열과 함께 필드 이름으로 처리됩니다.

### 예시

#### 데이터만 있는 메시지

다음 예제에서는 세 개의 메시지가 전송됩니다. 첫 번째는 콜론 문자로 시작하기 때문에 주석으로 간주됩니다. 앞서 언급한 대로 이는 keep-alive 메커니즘으로 메시지가 정기적으로 전송되지 않을 수 있을 때 유용할 수 있습니다.

두 번째 메시지에는 값이 "some text" 인 데이터 필드가 포함되어 있습니다. 세 번째 메시지에는 값이 "another message\nwith two lines" 인 데이터 필드가 포함되어 있습니다. 개행 특수 문자가 값에 포함되어 있음에 유의하세요.

```bash
: this is a test stream

data: some text

data: another message
data: with two lines
```

#### 이름이 있는 이벤트

이 예제는 이름이 지정된 이벤트를 보냅니다. 각 이벤트는 `event` 필드에 명시된 이벤트 이름과 클라이언트가 이벤트에 대한 작업을 수행하기 위해 필요한 데이터를 포함한 적절한 JSON 문자열 값을 가진 `data` 필드를 가지고 있습니다. 물론 `data` 필드에는 JSON이 아니더라도 모든 문자열 데이터를 가질 수 있습니다.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}

event: userdisconnect
data: {"username": "bobby", "time": "02:34:23"}

event: usermessage
data: {"username": "sean", "time": "02:34:36", "text": "Bye, bobby."}
```

#### 혼합형

이름이 없는 메시지나 타입이 있는 이벤트만 사용할 필요는 없습니다. 하나의 이벤트 스트림에서 이를 혼합하여 사용할 수 있습니다.

```bash
event: userconnect
data: {"username": "bobby", "time": "02:33:48"}

data: Here's a system message of some kind that will get used
data: to accomplish some task.

event: usermessage
data: {"username": "bobby", "time": "02:34:11", "text": "Hi everyone."}
```

## 브라우저 호환성

{{Compat}}
