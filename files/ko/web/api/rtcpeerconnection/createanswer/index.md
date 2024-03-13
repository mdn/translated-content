---
title: RTCPeerConnection.createAnswer()
slug: Web/API/RTCPeerConnection/createAnswer
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 인터페이스의 **`createAnswer()`** 메소드는 WebRTC 연결 중 발생하는 offer/answer 네고시에이션에서 원격 유저로부터 받은 offer에 대한 {{Glossary("SDP")}} answer를 생성합니다. 이 answer는 세션이 이미 부착된 미디어, 브라우저에서 지원하는 코덱 및 옵션, 그리고 이미 수집된 {{Glossary("ICE")}} candidate에 대한 정보를 담고 잇습니다. Answer는 반환 된 {{jsxref("Promise")}}에 전달되고, 그 다음에는 네고시에이션 과정을 계속 진행하기 위해서 offer의 소스에게 전달되야합니다.

## Syntax

```js
aPromise = RTCPeerConnection.createAnswer([options]);

RTCPeerConnection.createAnswer(successCallback, failureCallback[, options]);
```

### 매개 변수

- `options` {{optional_inline}}
  - : Answer를 커스터마이즈 할 수 있는 옵션을 설정하는 객체입니다. 설정 가능한 옵션은 {{domxref("RTCAnswerOptions")}} 딕셔너리에 기반합니다.

### 더 이상 사용되지 않는 매개 변수

이전 버전의 문서에서는 이 함수를 콜백 기반으로 사용하도록 되어있습니다. 콜백 기반 함수는 이제 더 이상 사용되지 않으며, **사용하지 않는 것을 권장**합니다. 이미 사용 중이라면, [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise) 버전인 `createAnswer()`를 사용하도록 코드를 업데이트 하십시오. 이전 버전의 코드를 업데이트 하는 것을 쉽게 하기 위해 고안된 `createAnswer()`의 특정 변수에 대해 아래에서 설명합니다.

- `successCallback` {{deprecated_inline}}
  - : 신규 생성된 answer를 설명하는 단일 {{domxref("RTCSessionDescription")}} 객체에 전달되는 {{domxref("RTCSessionDescriptionCallback")}} 입니다.
- `failureCallback` {{deprecated_inline}}
  - : 왜 answer를 생성하는 요청이 실패했는지를 설명해주는 단일 {{domxref("DOMException")}} 객체에 전달되는 {{domxref("RTCPeerConnectionErrorCallback")}} 입니다.
- `options` {{optional_inline}}
  - : Answer를 위해 요청된 옵션을 제공하는 {{domxref("RTCOfferOptions")}} 객체입니다.

### 예외처리

- `NotReadableError`
  - : 아이덴티티 제공자가 아이덴티티 주장을 제공 할 수 없음을 알려줍니다.
- `OperationError`
  - : SDP 생성이 어떤 이유로 실패했음을 알려줍니다. 이는 일반적인 failure catch-all exception 입니다.

### 반환 값

다른 유저에게 전달되는 SDP answer를 가진 {{domxref("RTCSessionDescriptionInit")}} 딕셔너리에 준수하는 객체와 함께 호출되는 fulfillment 핸들러인 {{jsxref("Promise")}} 입니다.

## 예시

아래는 [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling) 문서에서 나오는 코드의 일부입니다. 이 코드는 시그널링 채널을 통해 다른 유저에게 offer는 전달하는 메세지를 다루는 핸들러에서 나옵니다.

> **참고:** 주의 할 점은 이것이 시그널링 과정의 일부이며, 전송계층 구현에 대한 세부사항은 전적으로 개발자에게 달려있다는 것 입니다. 여기서는 [WebSocket](/ko/docs/Web/API/WebSocket_API) 연결을 사용해서 다른 유저에게 "video-answer" 값이 있는 `type` 필드 및 offer를 보낸 장치에게 전달 할 answer를 담은 {{Glossary("JSON")}} 메세지를 보냅니다. 프로미스 fulfillment 핸들러의 다른 모든 항목들과 함께 `sendToServer()`함수로 전달되는 객체의 내용을 어떻게 할 지는 개발자의 디자인에 달려잇습니다.

```js
pc.createAnswer()
  .then(function (answer) {
    return pc.setLocalDescription(answer);
  })
  .then(function () {
    // Send the answer to the remote peer through the signaling server.
  })
  .catch(handleGetUserMediaError);
```

위의 예제는 {{domxref("RTCPeerConnection")}}가 신규 answer를 만들고 반환하도록 요청합니다. 프로미스 핸들러에 반환된 answer는 {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} 호출에 의해 연결의 로컬 엔드에 대한 description으로 설정됩니다.

이 과정이 성공하면, answer는 적당한 아무 프로토콜을 사용해서 시그널링 서버에 전달됩니다. 그리고 {{jsxref("Promise.catch()")}}는 에러를 잡아내고 처리하기 위해 사용됩니다.

[Handling the invitation](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling#handling_the_invitation)를 확인해서 전체 코드를 확인해보십시오. 이 문서를 보면 시그널링 과정 및 answer가 어떻게 작동하는지를 이해 할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
