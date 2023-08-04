---
title: Signaling and video calling
slug: Web/API/WebRTC_API/Signaling_and_video_calling
---

{{DefaultAPISidebar("WebRTC")}}

> **참고:** 이 글은 편집 및 검토가 필요하다. [도움을 줄 수 있는 방법](/docs/MDN/Contribute/Howto/Do_an_editorial_review)을 살펴보자.WebRTC는 아직까지 **실험적인 기술이다.**
> 일부의 기술 스펙이 안정화가 되지 않았기 때문에 각 브라우져에서 사용가능한 [호환성 정보](#browser_compatibility)를 확인해야한다. 또한, 기술의 문법과 패턴들은 스펙이 바뀌는 것처럼 브라우져의 버전이 높아진다면 변경될 수 있다.

## Summary

[WebRTC](/ko/docs/Web/API/WebRTC_API) 는 리얼 타임 음성, 영상, 데이터 교환을 할 수 있는 완전한 p2p 기술이다. [다른 곳에서 논의한 것 처럼](/ko/docs/Web/API/WebRTC_API/Session_lifetime#establishing_a_connection) 서로 다른 네트워크에 있는 2개의 디바이스들을 서로 위치시키기 위해서는, 각 디바이스들의 위치를 발견하는 방법과 미디어 포맷 협의가 필요하다. 이 프로세스를 **시그널링** **signaling** 이라 부르고 각 디바이스들을 상호간에 동의된 서버(socket.io 혹은 websocket을 이용한 서버)에 연결시킨다. 이 서버는 각 디바이스들이 **negotiation**(협의) 메세지들을 교환할 수 있도록 한다.

이 글에서 우리는 더 나아가 유저들간에 양방향으로 화상 통화가 되는 예제인 [WebSocket chat](https://mdn-samples.mozilla.org/s/websocket-chat)(웹소켓 문서를 작성하기 위해 만들어졌으며, 링크는 곧 활성화 될 것이다. 아직은 온라인으로 테스트가 불가능하다.)을 작동이 되도록 만들 예정이다. 이것에 관해 [샘플](https://mdn-samples.mozilla.org/s/webrtc-from-chat) 을 확인해 보거나 Github에서 전체 [프로젝트](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)를 확인해볼 수 있다.

> **참고:** 깃헙에 있는 테스트 서버 코드는 앞으로 공부할 예제 코드보다 최신 버전이다. 이 글은 현재 업데이트 진행 중이며, 곧 완료될 예정이다. 업데이트가 완료된다면 이 글을 사라질 것이다.

> **참고:** 앞으로 나올 예제들은 **promise** 를 사용한다. 만약 너가 이것을 잘 모른다면 [이 글](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)을 읽어 보길 바란다.

## The signaling server

두 디바이스들 사이에 WebRTC 커넥션을 만들기 위해, 인터넷 네트워크에서 그 둘을 연결 시키는 작업을 해줄 **signaling server** 가 필요하다. 어떻게 이 서버를 만들고 실제로 시그널링 과정이 어떻게 되는지 살펴보자.

가장 먼저, 시그널링 서버 자체가 필요하다. WebRTC는 시그널링 정보에 관한 transport 메커니즘을 제시하진 않는다. 두 피어들 사이에서 해리포터의 부엉이처럼 시그널링에 관련된 정보들을 전달해줄 수 있는 것이면 [WebSocket](/ko/docs/Web/API/WebSockets_API) 이든 [XMLHttpRequest](/ko/docs/Web/API/XMLHttpRequest) 든 상관없다.

여기서 중요한 점은 시그널링 서버는 시그널링 데이터 내용을 몰라도 된다는 것이다. 비록 이것은 [SDP](https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#) 이지만, 몰라도 큰 문제가 되진 않는다. 메세지의 내용들은 그저 시그널링 서버를 통해 상대편으로 가기만 하면된다. 중요한 점은 ICE subsystem이 신호 데이터를 다른 피어에게 보내도록 지시하면, 다른 피어는 이 정보를 수신하여 자체 ICE subsystem에 전달하는 방법을 알고 있다는 것이다.

### Readying the chat server for signaling

이 [chat server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) 는 클라이언트와 서버 사이에 [WebSocket API](/ko/docs/Web/API/WebSockets_API)을 통해 JSON string으로 데이터를 전송한다. 서버는 새로운 유저를 등록하는 것, username을 세팅하는 것, 채팅 메세지를 전송하는 것 등등의 작업들을 하기 위해 다양한 메세지 타입들을 다룬다. 시그널링과 ICE negotiation 을 서버가 처리하기 위해서 코드를 작성해야한다. 모든 로그인된 유저들에게 브로드캐스팅하는 것이 아니라, 특정한 유저에게 직접 메세지를 전달해야한다. 그리고 서버가 따로 처리할 필요 없이, 수신된 원하지 않은 메세지 타입들을 처리한다. 이를 통해 여러 서버를 만들 필요없이 동일한 서버를 이용하여 시그널 메시지를 보낼 수 있다. 이 개념은 WebRTC가 아니라 WebSocket에 관한 개념이다.

이제, WebRTC 시그널링을 지원하는 chat server를 만들기 위해 어떻게 해야하는지 보자. 앞으로 나오는 코드들은 [chatserver.js](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat/chatserver.js) 안에 있는 코드이다.

우선 `sendToOneUser()`함수를 추가하자. 이름이 말하듯, stringified JSON 메세지를 특정한 유저에게 보내는 것이다.

```js
function sendToOneUser(target, msgString) {
  var isUnique = true;
  var i;

  for (i = 0; i < connectionArray.length; i++) {
    if (connectionArray[i].username === target) {
      connectionArray[i].sendUTF(msgString);
      break;
    }
  }
}
```

이 함수는 연결된 유저 리스트를 확인하면서 특정한 username을 가지는 유저을 찾고, 이 유저에게 메세지를 보낸다. 함수의 인자로 들어가는 메시지 `msgString`은 stringified JSON object 이다. Stringified 가 아닌 원본의 메세지 object를 받도록 해도 되지만, JSON이 더 유용하고 편하다. 이 메세지는 이미 stringified 된 상태로 함수에 전달되기 때문에, 더 이상의 메세지에 관한 처리 없이 메세지를 그대로 보내기만 하면 된다.

원본 chat demo는 특정 유저에게 메세지를 보내는 것을 지원하지 않는다. Main WebSocket message handler를 수정해야 이것이 가능하게 되며, 구체적으로는`connection.on()`함수의 마지막 부분을 수정하면 된다.

```js
if (sendToClients) {
  var msgString = JSON.stringify(msg);
  var i;

  // If the message specifies a target username, only send the
  // message to them. Otherwise, send it to every user.
  if (msg.target && msg.target !== undefined && msg.target.length !== 0) {
    sendToOneUser(msg.target, msgString);
  } else {
    for (i = 0; i < connectionArray.length; i++) {
      connectionArray[i].sendUTF(msgString);
    }
  }
}
```

이 코드는 메세지에서 `target` 특성이 정의되었는지 체크한다. 이 특성은 메세지를 전달하고 싶은 사람의 username으로 정의할 수 있다. 만약 `target`파라미터가 존재한다면, `sendToOneUser()`함수를 콜하면서 그 유저에게 메세지를 전송한다. 그렇지 않다면, 모든 유저에게 메세지를 브로드케스트를 한다.

위에 있는 코드는 별도의 수정이 필요 없이 임의의 메세지 타입들을 보낼 수 있다. 클라이언트들은 이제 특정한 유저에게 unknown 타입의 메세지도 보낼수 있고, 시그널링 메세지를 원하는 대로 보낼 수 있다. 구체적인 내용은 다음을 살펴보자.

### Designing the signaling protocol

이제 우리는 메세지를 교환하는 메커니즘을 만들었다. 이제 메세지들을 어떻게 구성할지에 대한 프로토콜이 필요하다. 이것은 여러 가지 방법으로 가능한데, 여기서 다루는 것은 그 중 하나의 시그널링 메세지 구조이다.

우리가 제공하는 시그널링 서버는 stringified JSON object 을 가지고 클라언트간에 데이터를 주고 받는다. 즉, 이것은 시그널링 메세지들이 JSON format으로 되어있으며, 메세지의 type 등 메세지를 적절하게 처리할 수 있도록 여러 정보들이 포함되어 있다.

#### Exchanging session descriptions

시그널링 프로세스를 시작할 때, call을 시작 하는 유저가 **\*offer** \*란 것을 만든다. 이 offer는 세션 정보를 SDP 포맷으로 가지고 있으며, 커넥션이 이어지기를 원하는 유저(callee)에게 전달되어야 한다. Callee 는 이 offer에 SDP description을 포함하는 **\*answer** \*메세지를 보내야한다. 우리가 사용할 offer 메세지들은 `"video-offer"` 이라는 타입을 사용할 것이고 answer 메세지들은 `"video-answer"` 타입의 메세지를 사용할 것이다. 이 메세지들은 아래와 같은 field를 가진다.

- `type`
  - : 메세지의 타입이라; `"video-offer"` 또는 `"video-answer"`.
- `name`
  - : 보내는 사람의 username 이다.
- `target`
  - : 받는 사람의 username이다. (만약 caller가 메세지를 보낸다면, target은 callee 를 뜻한다, vice-versa.)
- `sdp`
  - : 커넥션의 local 정보를 설명하는 SDP (Session Description Protocol) 스트링(e.g. 수신자의 관점으로 볼 때, SDP는 커넥션의 remote 정보이다.)

현 시점에서 두 피어들은 이 call에 대해 어떤 코덱들과 어떤 video parameter들이 사용될지 알게 된다. 하지만, 그들은 여전히 미디어 데이터 자체를 전송하는 방법을 모른다. 여기서 Interactive Connectivity Establishment (ICE)가 사용된다.

#### Exchanging ICE candidates

SDP를 서로 교환한 후에, 두 피어들은 **ICE candidate**(ICE 후보)들을 교환하기 시작한다. 각 ICE candidate는 발신 피어 입장에서 통신을 할 수 있는 방법을 설명한다. 각 피어는 검색되는 순서대로 candidate를 보내고 미디어가 이미 스트리밍을 시작 했더라도 모든 가능한 candidate가 전송 완료될 때까지 계속 보낸다. 두 피어가 서로 호환되는 candidate를 제안했다면, 미디어는 통신을 시작한다. 만약 나중에 더 나은 방법이 있다면(더 높은 성능을 가지는), 그 스트림은 필요에 따라 포맷을 바꿀 수도 있다.

비록 지금은 지원하지 않지만, 이 기술은 이론상 낮은 bandwidth의 연결에 대해 다운그레이드에 사용될 수 있다.

시그널링 서버를 통해 전달되는 ICE candidate들에 관한 메세지의 타입은 `"new-ice-candidate"` 이며, 이 메세지들은 아래 field를 가진다.

- `type`
  - : 메세지 타입 : `"new-ice-candidate"`.
- `target`
  - : 현재 협상을 진행 중인 사람의 username. 시그널링 서버는 이 유저에게만 직접 메세지를 보낸다.
- `candidate`
  - : 제안된 커넥션 방법을 설명하는 SDP candidate string.

각 ICE 메세지들은 두 개의 컴퓨터를 서로 연결하기 위한 정보들에 덧붙여 프로토콜(TCP or UDP), IP 주소, 포트 넘버, 커넥션 타입 등을 제안한다. 여기에는 NAT 혹은 다른 복잡한 네트워킹을 포함한다.

> **참고:** 중요. ICE negotiation 동안 너의 코드가 해야할 것은 오직 ICE layer에서 외부로 나갈 candidate들을 선택하는 것과, [`icecandidate_event`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)handler가 불렸을 때 시그널링 서버를 통해 그것들을 다른 피어에 보내는 것이다. 그리고 시그널링 서버로부터 ICE candidate 메세지를 받고 [`RTCPeerConnection.addIceCandidate()`](/ko/docs/Web/API/RTCPeerConnection/addIceCandidate)를 호출하여 너의 ICE layer에 그들을 전달한다. 그것 뿐이다. 정확히 무엇을 하는지 알기 전까진, 더 이상 깊이 생각하지 말자!

너의 시그널링 서버가 이제 해야할 일은 요청된 메세지를 보내는 것이다. 부가적으로 login/authentication 같은 기능들이 필요할 수도 있는데, 자세한 내용은 달라질 수 있다.

## Signaling transaction flow

시그널링 정보는 연결할 두 피어들 사이에서 교환된다. 아주 기초적인 수준에서 어떤 메세지들이 누가 누구에게 왜 전달해야하는지 보자.

시그널링 프로세스는 다양한 부분에서 다음과 같은 메시지 교환을 포함한다. 각 유저의 채팅 시스템의 웹 애플리케이션 인스턴스, 각 유저의 브라우저, 시그널링 서버 그리고 호스팅 웹 서버 등.

Naomi와 Priya는 채팅 소프트웨어를 사용해 대화에 참여했고 Naomi는 둘 사이에 영상 통화를 하기로 결정한다. 다음 표는 이벤트들이 발생하는 과정이다.

[![Diagram of the signaling process](webrtc_-_signaling_diagram.svg)](webrtc_-_signaling_diagram.svg)

곧 더 자세한 설명을 볼 수 있다.

## ICE candidate exchange process

각 피어들의 ICE layer에서 candidate들을 보내기 시작할 때, 다음 그림과 같은 교환이 일어난다.

[![Diagram of ICE candidate exchange process](webrtc_-_ice_candidate_exchange.svg)](webrtc_-_ice_candidate_exchange.svg)

각 피어들은 candidate 들을 전송하고, 준비가 되면 받은 candidate 들을 처리한다. Candidate들은 양 피어들이 동의할 때까지 계속 교환되며, 미디어가 송수신 되도록 만든다. "ICE exchange"은 양측이 교대로 제안을하는 것을 의미하지 않는다. 올바르게 작동할 경우, 각 피어들은 모두 소진되거나 서로 동의할 때까지 상대방에게 제안할 candidate 들을 계속 전송한다.

만약 조건들이 바뀐다면, 예를들어 네트워크 커넥션이 악화되면, 하나 혹은 양 피어들은 낮은 bandwidth의 미디어 해상도로 바꾸거나 다른 코덱을 사용하자고 제안할 것이다. 다음 candidate 교환에서 양 피어 모두 새로운 포맷에 동의한다면, 다른 미디어 포맷 혹은 다른 코덱으로 바뀔 수도 있다.

부가적으로 만약 ICE layer 내부의 프로세스를 더 자세히 이해하고 싶다면 [RFC 5245: Interactive Connectivity Establishment](https://tools.ietf.org/html/5245),[section 2.6 ("Concluding ICE")](https://tools.ietf.org/html/rfc5245#section-2.6) 를 참조해라. ICE layer가 준비 되자마자 candiate들이 교환되고 미디어들은 통신되기 시작한다는 것을 기억해라. 이 모든 것은 뒤에서 알아서 돌아간다. 우리의 역할은 그저 시그널링 서버를 통해 candidate들을 서로에게 보내는 것이다.

## The client application

지금부터 위에서 설명한 개념들을 샘플 코드를 통해서 자세히 배워보자.

어떤 시그널링 프로세스든지 핵심은 메세지 핸들링에 있다. Websocket을 시그널링에 꼭 사용할 필요는 없지만, 일반적인 솔루션으로 쓰인다. 다른 솔루션도 충분히 빠르고 같은 결과를 볼 수 있다.

### Updating the HTML

클라이언트는 비디오를 표시할 공간이 필요하다. 2개의 video와 전화를 걸 button 을 정의한 HTML 코드이다.

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
  </div>
</div>
```

위에 있는 page structure은 [`<div>`](/ko/docs/Web/HTML/Element/div)태그를 이용하고 CSS 사용을 허용함으로써 페이지 레이아웃 전체를 구성한다. 여기서는 레이아웃에 관한 자세한 내용은 스킵하지만, 위의 코드가 어떻게 돌아가는지 확인해보자. [take a look at the CSS](https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#) on Github. 두개의 [`<video>`](/ko/docs/Web/HTML/Element/Video) 중 하나는 너의 self video이고 다른 하나는 상대방의 video를 위한 요소이다.

`id`가 "`received_video`" 인 `<video>`element는 연결된 상대방으로부터 수신되는 비디오를 보여주는 곳이다. `autoplay`attribute는 비디오가 도달하기 시작하면 즉시 재생시키는 역할을 한다. 이것은 따로 재생에 관련된 코드를 처리할 필요를 없애준다. `id`가 "`local_video`" 인 `<video>`element에는 너의 카메라의 영상이 나오게된다. `muted` attribute는 너의 로컬 오디오를 음소거한다.

마지막으로, 통화를 끊을 수 있는 `id`가 "`hangup-button`"인 [`<button>`](/ko/docs/Web/HTML/Element/button)은 비활성화 된 상태(아무 전화도 연결되지 않은 default 상태)로 구성된다. 그리고 이 버튼을 클릭시에 `hangUpCall()`함수가 실행 된다. 이 함수의 역할은 현재 연결된 call을 끊고 다른 피어에게 연결을 끊으라는 메세지를 전달한다.

### The JavaScript code

어떻게 돌아가는지 알기 쉽게 하기 위해 각 기능별로 코드를 나누었다. 이 코드의 메인 부분은 `connect()`함수 안에 있다. 이 함수 안에서 6503 포트로 [`WebSocket`](/ko/docs/Web/API/WebSocket)server에 연결하며, JSON object format의 메세지를 받기 위한 handler를 설정한다. ~~이 코드는 일반적으로 이전처럼 문자 채팅 메세지를 처리한다.~~

#### Sending messages to the signaling server

코드 전반에 걸쳐서 시그널링 서버에 메세지를 보내기 위해 `sendToServer()`함수를 호출한다. 이 함수는 WebSocket 커넥션을 이용하여 작동한다.

```js
function sendToServer(msg) {
  var msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

전달된 메세지 object는 [`JSON.stringify()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)함수에 의해 JSON string으로 바뀐다. 그 후, WebSocket 커넥션의 [`send()`](/ko/docs/Web/API/WebSocket/send)함수를 통해 서버로 전달된다.

#### UI to start a call

"userlist"에 관한 코드는 `handleUserlistMsg()`함수에 있다. 왼쪽 채팅 패널에 보여지는 유저 리스트에 있는 각 연결된 유저 마다 handler 를 걸어준다. 이 함수는 (온라인 상태인 유저들의 username을 배열로 저장하고 있는) `users`property를 가지고 있는 메세지 object를 받는다. 이해하기 쉽도록 여러 섹션들에서 이 코드를 살펴 보겠다.

```js
function handleUserlistMsg(msg) {
  var i;

  var listElem = document.getElementById("userlistbox");

  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }

  // …
```

`listElem`변수를 통해 username들의 리스트인 [`<ul>`](/ko/docs/Web/HTML/Element/ul)을 참조한다. 그런 다음에 각 child element를 하나씩 제거하면서 목록을 비운다 .

> **참고:** 명백히, 바뀔 때마다 전체 리스트를 새로 만드는 것보다, 개개인을 추가 및 제거 후 업데이트하는 것이 더 효율적이다. 그러나, 예제이므로 단순하게 하겠다.

그 후, 새로운 user 리스트를 만든다.

```js
  // …

  for (i=0; i < msg.users.length; i++) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(msg.users[i]));
    item.addEventListener("click", invite, false);

    listElem.appendChild(item);
  }
}
```

다음으로 (채팅 서버에) 현재 연결된 각 유저들 각각을 나타내는 [`<li>`](/ko/docs/Web/HTML/Element/li)element들을 DOM에 추가한다. 그런 다음에, username이 클릭 되었을 때 `invite()`함수를 실행시키는 listener을 추가한다. 이 함수 이것은 다른 유저에게 call을 하는 process를 시작한다.

#### Starting a call

통화를 하고 싶은 유저의 username을 클릭을 하면, [`click`](/ko/docs/Web/API/Element/click_event) event의 handler인`invite()`함수가 실행된다.

```js
var mediaConstraints = {
  audio: true, // We want an audio track
  video: true, // ...and we want a video track
};

function invite(evt) {
  if (myPeerConnection) {
    alert("You can't start a call because you already have one open!");
  } else {
    var clickedUsername = evt.target.textContent;

    if (clickedUsername === myUsername) {
      alert(
        "I'm afraid I can't let you talk to yourself. That would be weird.",
      );
      return;
    }

    targetUsername = clickedUsername;

    createPeerConnection();

    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(function (localStream) {
        document.getElementById("local_video").srcObject = localStream;
        myPeerConnection.addStream(localStream);
      })
      .catch(handleGetUserMediaError);
  }
}
```

가장 먼저 해야할 일은 빠르게 여러 상태들을 점검하는 것이다. 유저가 이미 call을 열었는지, 혹은 유저가 자신에게 call을 신청했는지 등, 이 케이스들에는 새로운 call을 시도할 이유가 없다. 따라서 왜 call을 하지 못하는지 [`alert()`](/ko/docs/Web/API/Window/alert)를 통해 설명한다.

그 다음에 call을 하려는 유저의 이름을 `targetUsername`변수 안에 넣고 `createPeerConnection()`함수를 실행시킨다. 이 함수는 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection) 의 기본적인 구성과 기능을 수행한다.

`RTCPeerConnection` 이 생성되면, [`Navigator.mediaDevices.getUserMedia`](/ko/docs/Web/API/MediaDevices/getUserMedia)함수를 통해 유저의 카메라와 마이크에 권한을 요청한다. 카메라와 마이크에서 나오는 로컬 스트림을 로컬 비디오 preview의 [`srcObject`](/ko/docs/Web/API/MediaElement/srcObject)property에 설정한다. 그리고 [`<video>`](/ko/docs/Web/HTML/Element/Video)element가 자동으로 들어오는 비디오를 재생하도록 구성되었기 때문에, stream은 로컬 preview box에서 재생을 시작한다.

그 다음에 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)에 stream을 추가하기 위해 [`myPeerConnection.addStream()`](/ko/docs/Web/API/RTCPeerConnection/addStream)함수를 실행한다. WebRTC 커녁션이 완전히 준비되지 않았더라도 WebRTC 커넥션에 stream을 보내기 시작한다.

만약 local media stream을 가져오는 동안 에러가 발생한다면, `catch` clause가 `handleGetUserMediaError()`함수를 불러 필요에 따라 유저에게 적절한 에러 메세지를 보여줄 것이다.

#### Handling getUserMedia() errors

`getUserMedia()`에 의해 리턴된 `promise`가 실패로 끝나면, `handleGetUserMediaError()`함수가 실행된다.

```js
function handleGetUserMediaError(e) {
  switch (e.name) {
    case "NotFoundError":
      alert(
        "Unable to open your call because no camera and/or microphone" +
          "were found.",
      );
      break;
    case "SecurityError":
    case "PermissionDeniedError":
      // Do nothing; this is the same as the user canceling the call.
      break;
    default:
      alert("Error opening your camera and/or microphone: " + e.message);
      break;
  }

  closeVideoCall();
}
```

에러 메세지는 모든 케이스 중 하나만 표시된다. 이 예제에서 call을 취소하는 거와 같이, 미디어 하드웨어의 접근 권한을 거부하는 것에 대해 발생하는 에러들( `"SecurityError"` 와`"PermissionDeniedError"`)은 무시한다.

Stream을 가져오는 것을 실패하는 이유와 관계 없이, [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)을 닫기 위해 `closeVideoCall()`function를 부른다. 그리고 call을 하기 위해 할당된 리소스들을 반납한다. 이 코드는 일부분만 실행된 call을 안전하게 처리할 수 있도록 설계되었다.

#### Creating the peer connection

`createPeerConnection()`함수는 caller와 callee에서 WebRTC 커넥션의 각 종점을 나타내는 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)object를 생성하는데 사용된다. Caller는 `invite()`함수를 통해, callee는 `handleVideoOfferMsg()` 에 의해 실행된다.

이것은 상당히 명료하다:

```js
var myHostname = window.location.hostname;

function createPeerConnection() {
  myPeerConnection = new RTCPeerConnection({
      iceServers: [     // Information about ICE servers - Use your own!
        {
          urls: "turn:" + myHostname,  // A TURN server
          username: "webrtc",
          credential: "turnserver"
        }
      ]
  });

// …
```

웹서버와 같은 호스트에 STUN/TURN 서버를 돌리고 있기 때문에, STUN/TURN 서버의 도메인 이름을 [`location.hostname`](/ko/docs/Web/API/Location/hostname)을 사용하여 설정했다. 만약 다른 서버의 STUN/TURN 서버를 사용한다면 urls 값을 그 서버로 바꿔주면 된다.

`RTCPeerConnection`을 만들 때, call을 구성하는 파라미터들을 명시해줘야한다. 가장 중요한 것은 STUN/TURN 서버의 리스트([ICE](/ko/docs/Glossary/ICE) layer에서 caller와 callee의 경로를 찾는데 사용되는 서버)를 담고 있는 `iceServers`이다. **(주의. 웹소켓을 이용한 시그널링 서버와 전혀 다른 개념이다)**. WebRTC는 두 피어가 방화벽이나 NAT 뒤에 숨어 있어도, 각 피어들의 서로 연결될 수 있도록 피어간 연결 경로를 찾아주는 프로토콜(STUN, TURN)을 사용한다.

> **참고:** 직접 만든 혹은 사용할 권한을 가지고 있는 STUN/TURN 서버를 사용해야 한다.

`iceServers`parameter는 object의 배열이고 각각은 STUN/TURN 서버의 URL인 `urls`field를 무조건 포함한다. 예제에서, ICE layer에서 다른 피어를 찾아 연결 시키기 위한 서버를 제공한다. 이 서버는 TURN 서버이며, Web 서버와 같은 hostname에서 돌아간다. TURN 서버의 description에 `username`과`credential`field에 각각 username과 password 정보를 항상 포함시켜야한다는 것을 유의해라.

##### Set up event handlers

[`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)이 생성되면, 중요한 이벤트들을 위한 handler를 설정해야한다.

```js
// …
  myPeerConnection.onicecandidate = handleICECandidateEvent;
  myPeerConnection.onaddstream = handleAddStreamEvent;
  myPeerConnection.onremovestream = handleRemoveStreamEvent;
  myPeerConnection.oniceconnectionstatechange = handleICEConnectionStateChangeEvent;
  myPeerConnection.onicegatheringstatechange = handleICEGatheringStateChangeEvent;
  myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
  myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
}
```

위에 있는 이벤트 핸들러 중 처음 두 개는 필수이다. WebRTC로 스트리밍된 미디어와 관련된 것들을 다루기위해 두 핸들러를 설정해야한다. [`removestream`](/ko/docs/Web/Reference/Events/removestream)event는 스트리밍이 중단된 것을 감지하는데 유용하다. 따라서 아마 이것도 사용하게 될 것이다. 남아 있는 4개는 필수적인 것은 아니나, 직접 사용해보자. 이것들 외에도 다른 이벤트들을 사용할 수 있으나 여기에서는 다루지 않겠다. 각 핸들러에 관한 요약 설명이다.

- {{domxref("RTCPeerConnection.onicecandidate")}}
  - : 로컬 ICE layer는 시그널링 서버를 통해 다른 피어에 ICE candidate를 전송하고자 할 때, 너의 [`icecandidate`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)event handler를 호출한다.
- {{domxref("RTCPeerConnection.onaddstream")}}
  - : [`addstream`](/ko/docs/Web/Events/addstream)event를 위한 이 핸들러는 너의 커넥션에 remote stream이 추가된 것을 알려주기 위해, 로컬 WebRTC layer에 의해 불려진다. 예를들어, 이것은 들어오는 stream을 element에 연결시켜 디스플레이 되게 만들 때 사용된다. 더 자세한 내용은 [Receiving new streams](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#Receiving_new_streams) 을 참조해라.
- {{domxref("RTCPeerConnection.onremovestream")}}
  - : 커넥션에서 remote가 stream을 제거할 때, `onaddstream`의 반대인 `onremovestream은` [`removestream`](/ko/docs/Web/API/RTCPeerConnection/removestream_event) event을 처리하기위해 실행된다.
- {{domxref("RTCPeerConnection.oniceconnectionstatechange")}}
  - : ICE 커넥션의 상태 변경을 알리기위해 ICE layer가 [`iceconnectionstatechange`](/ko/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) event 를 보낸다. 이것을 통해 커넥션이 실패하거나 끊어지는 것을 알 수 있다. 이 것에 대한 예제를 아래의 [ICE connection state](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#ICE_connection_state) 에서 볼 것이다.
- {{domxref("RTCPeerConnection.onicegatheringstatechange")}}
  - : 하나의 상태에서 다른 상태(예를들어, candidate를 모으기 시작하거나 negotiation이 끝났을 때)로 ICE agent의 candidate 수집 프로세스가 변하면, ICE layer는 [`icegatheringstatechange`](/ko/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) event를 보낸다. 아래의 [ICE gathering state](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#ICE_gathering_state) 을 참조해라.
- {{domxref("RTCPeerConnection.onsignalingstatechange")}}
  - : 시그널링 프로세스의 state가 바뀌게 될 때, WebRTC 인프라는 너에게 [`signalingstatechange`](/ko/docs/Web/API/RTCPeerConnection/signalingstatechange_event) message를 보낸다. [Signaling state](https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#) 에서 코드를 볼 수 있다.
- {{domxref("RTCPeerConnection.onnegotiationneeded")}}
  - : 이 함수는 WebRTC 인프라가 session negotiation 프로세스를 새로 시작해야할 때마다 불린다. 이것의 일은 callee에게 offer를 생성 후 전달하고, 우리에게 연결을 할 것인지 물어보는 것이다. 어떻게 처리하는지 [Starting negotiation](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#Starting_negotiation) 를 참조해라.

#### Starting negotiation

Caller가 자신의 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)과 media stream을 생성하고 [Starting a call](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling?document_saved=true#Starting_a_call)에서 보이는 것처럼 커넥션에 추가하면, 브라우져는 다른 피어와 커넥션이 준비가 될 때 [`negotiationneeded`](/ko/docs/Web/API/RTCPeerConnection/negotiationneeded_event) event를 활성화 시킬 것이다. 밑에는 이벤트를 핸들링하는 코드이다.

```js
function handleNegotiationNeededEvent() {
  myPeerConnection
    .createOffer()
    .then(function (offer) {
      return myPeerConnection.setLocalDescription(offer);
    })
    .then(function () {
      sendToServer({
        name: myUsername,
        target: targetUsername,
        type: "video-offer",
        sdp: myPeerConnection.localDescription,
      });
    })
    .catch(reportError);
}
```

Negotiation 프로세스를 시작하기 위해, 우리가 연결하고자 하는 피어에게 SDP offer를 생성하고 전송해야한다. 이 offer는 커넥션에 로컬로 추가한 media stream 정보(call의 다른 피어에게 전달하고 싶은 비디오)와 ICE layer에 의해 미리 모아 놓은 ICE candidates 정보들을 포함해, 커넥션에 지원되는 구성 목록들을 포함한다. [`myPeerConnection.createOffer()`](https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#)를 호출함으로써 이 offer를 생성한다. 이 것이 성공한다면(promise에서 fulfill되면), [`myPeerConnection.setLocalDescription()`](https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#)으로 생성된 offer 정보를 전달한다.[`myPeerConnection.setLocalDescription()`](/ko/docs/Web/API/RTCPeerConnection/setLocalDescription)은 커넥션에서 자신의 미디어 구성 상태나 연결 정보들을 구성한다.

> **참고:** 기술적으로 말하자면, `createOffer()`에 의해 리턴되는 blob은 [RFC 3264](https://tools.ietf.org/html/3264) offer 이다.

`setLocalDescription()`이 완료되어 promise를 리턴하면, description 이 유효하고 세팅 되었음을 알 수 있다. 그 이후에 local description을 포함하는 새로운 `"video-offer"`message를 만들어 시그널링 서버를 통해 다른 피어에게 전송한다. 이 offer는 다음과 같은 내용을 가진다.

- `type`
  - : 메세지의 타입은 `"video-offer"`.
- `name`
  - : caller의 username.
- `target`
  - : call을 하고자 하는 user의 name.
- `sdp`
  - : offer에 관한 설명을 하는 SDP blob.

`createOffer()`이나 다른 fulfillment 핸들러에서 에러가 발생한다면, `reportError()`함수가 실행되어 에러를 보고한다.

`setLocalDescription()`의 fulfillment 핸들러가 실행되면, ICE agent는 [`icecandidate`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)event들을 처리하기 시작한다.

#### Session negotiation

이제 다른 피어와 협상을 할 것이다. 다른 피어는 우리의 offer를 받을 것이고, `handleVideoOfferMsg()`에 전달한다. Callee에게 `"video-offer"`message가 도착 했을 때의 이야기를 계속해보자.

##### Handling the invitation

offer가 도착할 때, callee의 `handleVideoOfferMsg()`함수가 실행되고, offer를 포함한 `"video-offer"`message를 받을 것이다. 이 코드는 2가지를 해야한다. 첫째, 자기 자신의 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)과 media stream을 생성해야 한다. 두번째, 받은 offer를 분석하고 애이에 대한 answer를 만들어 보내야한다.

```js
function handleVideoOfferMsg(msg) {
  var localStream = null;

  targetUsername = msg.name;

  createPeerConnection();

  var desc = new RTCSessionDescription(msg.sdp);

  myPeerConnection.setRemoteDescription(desc).then(function () {
    return navigator.mediaDevices.getUserMedia(mediaConstraints);
  })
  .then(function(stream) {
    localStream = stream;

    document.getElementById("local_video").srcObject = localStream;
    return myPeerConnection.addStream(localStream);
  })

// …
```

이 코드는 [Starting a call](#starting_a_call)에 있는 `invite()`함수와 매우 비슷하다. 먼저, `createPeerConnection()`함수를 이용해서 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)를 생성하고 구성한다. 그 후에, `"video-offer"`message로부터 얻은 SDP offer를 가지고 caller의 session description을 나타내는 [`RTCSessionDescription`](/ko/docs/Web/API/RTCSessionDescription)object를 생성한다.

그 후에, session description은 [`myPeerConnection.setRemoteDescription()`](/ko/docs/Web/API/RTCPeerConnection/setRemoteDescription) 안으로 전달된다. 이를 통해, 받은 offer를 caller의 session 정보로 저장한다. 설정에 성공했다면, promise fulfillment handler(`then()`clause)은 callee의 카메라와 마이크에 접근하고 stream을 설정하는 등 이전에 `invite()`에서 본 것과 같은 프로세스를 시작한다.

local stream이 작동한다면, 이제 SDP answer를 만든 후 caller에게 보내야 한다.

```js
  .then(function() {
    return myPeerConnection.createAnswer();
  })
  .then(function(answer) {
    return myPeerConnection.setLocalDescription(answer);
  })
  .then(function() {
    var msg = {
      name: myUsername,
      target: targetUsername,
      type: "video-answer",
      sdp: myPeerConnection.localDescription
    };

    sendToServer(msg);
  })
  .catch(handleGetUserMediaError);
}
```

[`RTCPeerConnection.addStream()`](/ko/docs/Web/API/RTCPeerConnection/addStream) 이 성공적으로 완료되었다면, 그 다음 fulfillment handler가 실행될 것이다. SDP answer string을 만들기 위해 [`myPeerConnection.createAnswer()`](/ko/docs/Web/API/RTCPeerConnection/createAnswer)를 실행한다. 커넥션에서 callee의 로컬 description을 설정하기 위해 [`myPeerConnection.setLocalDescription`](/ko/docs/Web/API/RTCPeerConnection/setLocalDescription)에 생성한 SDP를 전달한다.

최종 answer는 caller에게 보내져서, 어떻게 callee에게 닿을 수 있는지 알게해준다. `"video-answer"`message의 `sdp`property에 callee의 answer를 포함하고, caller에게 이 메세지를 전달한다.

에러가 발생하면 `handleGetUserMediaError()`으로 전달되고, [Handling getUserMedia() errors](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling#Handling_getUserMedia%28%29_errors)에 잘 설명되어 있다.

> **참고:** caller와 마찬가지로 `setLocalDescription()`fulfillment handler가 실행되면, 브라우져는 callee가 반드시 처리해야하는 [`icecandidate`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)event들을 처리하기 시작한다.

##### Sending ICE candidates

caller가 callee로부터 answer를 받으면 모든 것이 끝났다고 생각할 수 있지만, 그렇지 않다. 뒷단 에서는 각 피어들의 ICE agent들이 열심히 ICE candidate message들을 교환한다. 미디어 통신이 어떻게 연결될 수 있는지에 대한 방법들을 알릴 때까지, 각 피어들은 상대방에게 계속해서 candidate들을 보낸다. 이 candidate들은 너의 시그널링 서버를 통해서 전송되어야 한다. ICE는 너의 시그널링 서버에 대해 모르기 때문에, 너는 [`icecandidate`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)event를 위한 핸들러를 불러서 전송된 candidate 들을 너의 코드로 직접 처리해야한다.

너의 [`onicecandidate`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)handler는 `candidate`property가 candidate의 정보를 담고 있는 SDP(단, candidate들의 끝에는`null`이 찍혀있다) 인 이벤트들을 받는다. 이것이 너의 시그널링 서버를 통해 다른 피어에게 전송해야할 것들이다. 밑에 구현 예제가 있다.

```js
function handleICECandidateEvent(event) {
  if (event.candidate) {
    sendToServer({
      type: "new-ice-candidate",
      target: targetUsername,
      candidate: event.candidate,
    });
  }
}
```

이 코드에서 candidate를 포함하는 object를 만들고 다른 피어에 보낸다. `sendToServer()`함수는 위에서 이미 다뤘으며 [Sending messages to the signaling server](#sending_messages_to_the_signaling_server)에 코드가 있다. message의 property들이 의미하는 것은 다음과 같다.

- `target`
  - : ICE candidate가 보내야하는 곳의 username. 이것을 통해 시그널링 서버가 메세지를 타겟에게 전달한다.
- `type`
  - : 메세지 타입은 `"new-ice-candidate"`.
- `candidate`
  - : ICE layer가 다른 피어에게 전송하고자하는 candidate object.

메세지의 포맷(시그널링을 처리하는 모든 메세지들은)은 모두 너의 영역이고, 너가 필요한 것에 달렸다. 너가 또다른 필요한 정보가 있다면 추가할 수 있다. 메세지는 그저 JSON stringfied 되어 상대방에게 전달될 뿐이다.

> **참고:** Call의 다른 피어로부터 ICE candidate가 도착할 때, [`icecandidate`](/ko/docs/Web/API/RTCPeerConnection/icecandidate_event)event가 전송되는 것이 **아님을 항상 명심해라**. 대신에 너 자신이 call을 할 때 보내는 것으로, 너가 원하는 채널을 통해 data를 보낼 수 있다. WebRTC를 처음 접한다면 매우 헷갈릴 것이다.

##### Receiving ICE candidates

시그널링 서버는 어떤 방법을 고르던 간에 각 ICE candidate를 목적지까지 배달한다. 이번 예제 에서는 type이 `"new-ice-candidate"`인 JSON object를 사용한다. `handleNewICECandidateMsg()`함수는 이 메세지들을 처리하기 위해 실행된다.

```js
function handleNewICECandidateMsg(msg) {
  var candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(reportError);
}
```

수신된 SDP를 [`RTCIceCandidate`](/ko/docs/Web/API/RTCIceCandidate) 생성자의 인자로서 전달하여 object를 생성하고, 이 object를 [`myPeerConnection.addIceCandidate()`](/ko/docs/Web/API/RTCPeerConnection/addIceCandidate) 에 전달한다. 이 함수를 통해 새로운 ICE candidate를 local ICE layer에 전달하고, 드디어 candidate 를 핸들링하는 프로세스에서 우리의 역할은 끝났다.

각 피어는 작동할 것으로 보이는 각 커넥션 메소드의 candidate를 다른 피어에게 보낸다. 양측은 합의에 도달하고 커넥션을 open한다. 협약을 진행 중에도 더 나은 커넥션 메소드를 찾거나, 단순히 피어가 커넥션을 설정할 때 candidate 교환이 진행 중이었을 수 있기 때문에, candidate는 여전히 송,수신 될 수 있음을 기억해라.

##### Receiving new streams

리모트 피어가 [`RTCPeerConnection.addStream()`](/ko/docs/Web/API/RTCPeerConnection/addStream)를 부름으로써, 또는 stream format에 대한 renegotiation(재협상)에 의해 새로운 스트림이 커넥션에 추가되었을 때, [`addstream`](/ko/docs/Web/API/RTCPeerConnection/addstream_event)event가 발생한다. 어떻게 처리하는지 아래 코드를 보자.

```js
function handleAddStreamEvent(event) {
  document.getElementById("received_video").srcObject = event.stream;
  document.getElementById("hangup-button").disabled = false;
}
```

이 함수는 들어오는 stream을 id가 `"received_video"`인 [`<video>`](/ko/docs/Web/HTML/Element/Video)element에 할당하고, 유저가 전화를 받을 수 있도록 버튼을 활성화한다.

이 코드가 제대로 실행된다면, 드디어 다른 피어에서 오는 비디오를 로컬 브라우저에서 볼 수 있게 된다!

##### Handling the removal of streams

리모트 피어가 [`RTCPeerConnection.removeStream()`](/ko/docs/Web/API/RTCPeerConnection/removeStream)를 호출하여 커넥션으로부터 스트림을 없애면, [`removestream`](/ko/docs/Web/API/RTCPeerConnection/removeStream)event가 발생하게 된다.

```js
function handleRemoveStreamEvent(event) {
  closeVideoCall();
}
```

이 함수는 `closeVideoCall()`함수를 실행시켜 call이 닫히도록 만들고, 다른 커넥션을 시작할 수 있도록 기존 인터페이스를 버린다. 어떻게 코드가 동작하는지 [Ending the call](#ending_the_call)을 참조해라.

#### Ending the call

There are many reasons why calls may end. A call might have completed, with one or both sides having hung up. Perhaps a network failure has occurred. Or one user might have quit their browser, or had a systen crash.

##### Hanging up

When the user clicks the "Hang Up" button to end the call, the `hangUpCall()` function is apllied:

```js
function hangUpCall() {
  closeVideoCall();
  sendToServer({
    name: myUsername,
    target: targetUsername,
    type: "hang-up",
  });
}
```

`hangUpCall()` executes `closeVideoCall()`, shutting down and resetting the connection and related resources. We then build a `"hang-up"` message, sending this to the other end of the call, allowing the other peer to neatly shut down.

##### Ending the call

아래에 있는 `closeVideoCall()`함수는 stream들을 멈추고 지운 후에,[`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)object를 없앤다.

```js
function closeVideoCall() {
  var remoteVideo = document.getElementById("received_video");
  var localVideo = document.getElementById("local_video");

  if (myPeerConnection) {
    if (remoteVideo.srcObject) {
      remoteVideo.srcObject.getTracks().forEach((track) => track.stop());
      remoteVideo.srcObject = null;
    }

    if (localVideo.srcObject) {
      localVideo.srcObject.getTracks().forEach((track) => track.stop());
      localVideo.srcObject = null;
    }

    myPeerConnection.close();
    myPeerConnection = null;
  }

  document.getElementById("hangup-button").disabled = true;

  targetUsername = null;
}
```

2개의 [`<video>`](/ko/docs/Web/HTML/Element/Video)element를 참조한 이후에, WebRTC 커넥션이 존재하는지 체크한다. 만약 있다면, call을 끊고 닫는다:

1. 리모트와 로컬 비디오 stream에 대해서, 각 track들 마다 [`MediaTrack.stop()`](/ko/docs/Web/API/MediaTrack/stop)를 실행시킨다.
2. 양 비디오의 [`HTMLMediaElement.srcObject`](/ko/docs/Web/API/HTMLMediaElement/srcObject)property를 `null`로 바꿔 stream에 관한 모든 참조를 푼다.
3. [`myPeerConnection.close()`](/ko/docs/Web/API/RTCPeerConnection/close)를 불러 [`RTCPeerConnection`](/ko/docs/Web/API/RTCPeerConnection)을 닫는다.
4. `myPeerConnection`변수의 값을 `null`로 바꿔서 계속 진행중인 call이 없다는 것을 전체 코드가 알게 한다. 이것은 유저가 유저 리스트에서 username을 클릭할 때 사용된다.

마지막으로, "Hang Up" 버튼의 [`disabled`](/ko/docs/Web/API/HTMLElement/disabled) property를 `true`로 바꿔서 call이 없는 동안에는 클릭이 불가능하게 만든다. 그 다음에 더이상 통화를 하지 않으므로 `targetUsername`을 `null`로 바꾼다. 이것을 통해 또 다른 유저에게 call을 하거나 새로운 call을 받을 수 있다.

#### Dealing with state changes

다양한 상태 변화를 너의 코드에 알리기 위해 listener를 세팅할 수 있는 다양한 이벤트들이 있다. 그 중에 다음 3가지를 사용하겠다.: {{event("iceconnectionstatechange")}}, {{event("icegatheringstatechange")}}, and {{event("signalingstatechange")}}.

##### ICE connection state

커넥션 state가 바뀌면(예를들어, call이 다른쪽에서 중단 될 때) ICE layer가 [`iceconnectionstatechange`](https://www.gitbook.com/book/gustnxodjs/webrtc-kor/edit#)event를 우리에게 보낸다.

```js
function handleICEConnectionStateChangeEvent(event) {
  switch (myPeerConnection.iceConnectionState) {
    case "closed":
    case "failed":
    case "disconnected":
      closeVideoCall();
      break;
  }
}
```

ICE connection state가 `"closed"`, 또는`"failed"`, 또는 `"disconnected"`으로 바뀔 때 `closeVideoCall()`함수를 실행한다. 커넥션을 끊으며, 처음(또는 accept) call 상태로 돌아간다.

##### ICE signaling state

마찬가지로 [`signalingstatechange`](/ko/docs/Web/API/RTCPeerConnection/signalingstatechange_event)event를 받을 수 있는데, 시그널링 상태가 `"closed"`으로 바뀌면 call을 완전히 종료시킨다.

```js
myPeerConnection.onsignalingstatechange = function (event) {
  switch (myPeerConnection.signalingState) {
    case "closed":
      closeVideoCall();
      break;
  }
};
```

##### ICE gathering state

{{event("icegatheringstatechange")}} events are used to let you know when the ICE candidate gathering process state changes. Our example doesn't use this for anything, but we're implementing it for logging, observing via the console log how the whole process works.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Next steps

You can now [play with this sample](https://webrtc-from-chat.glitch.me/) to see it in action. Open the Web console on both devices and look at the logged output—although you don't see it in the code as shown above, the code on the server (and on [GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)) has a lot of console output so you can see the signaling and connection processes at work.
