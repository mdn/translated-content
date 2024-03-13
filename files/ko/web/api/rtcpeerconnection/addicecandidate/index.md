---
title: RTCPeerConnection.addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}}을 사용하는 웹이나 앱이 신규 ICE candidate를 signaling 채널을 통해 원격 유저로부터 수신하게되면, **`RTCPeerConnection.addIceCandidate()`**를 호출해서 브라우저의 {{Glossary("ICE")}} 에이전트에게 새로 수신한 candidate를 전달합니다. 이 메소드는 `RTCPeerConnection`의 원격 설명 (remote description)에 연결의 원격쪽 상태를 설명해주는 신규 원격 candidate를 추가합니다.

`addIceCandidate()` 호출시 `candidate` 매개변수가 존재하지 않거나 값이 `null`인 경우에, 추가된 ICE candidate는 "candidate 종료"를 알려줍니다. 지정한 객체의{{domxref("RTCIceCandidate.candidate", "candidate")}} 값이 존재하지 않거나, 빈 문자열 (`""`)인 경우에도 원격 candidate들이 모두 전달되었음을 알려줍니다.

"candidate 종료" 알림은 a-line 값의 `end-of-candidates`를 가진 candidate와 함께 원격 유저에 송신됩니다.

네고시에이션 중에 앱이 위의 방법처럼 ICE 에이전트에 전달할 다수의 candidate를 수신 받을 수 있고, 이는 가능한 연결 방법들의 리스트를 만들 수 있도록 도와줍니다. 자세한 내용은 [WebRTC connectivity](/ko/docs/Web/API/WebRTC_API/Connectivity)와 [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling)를 참고하십시오.

## Syntax

```js
aPromise = pc.addIceCandidate(candidate);

addIceCandidate(candidate, successCallback, failureCallback);
```

### 매개변수

- `candidate` {{optional_inline}}
  - : {{domxref("RTCIceCandidateInit")}} 딕셔너리 혹은 {{domxref("RTCIceCandidate")}} 객체에 해당하는 객체입니다. 이 객체의 내용은 signaling 채널을 통해 수신 받은 메세지로 구성되어야합니다. 메세지는 이미 로컬 ICE 에이전트에 전달 될 준비가 된 새로 수신받은 ICE candidate를 설명합니다.`candidate` 객체가 지정되어있지 않거나, `null` 이라면, "candidate 종료" 신호가 `end-of-candidates` a-line을 사용해서 원격 유저에게 전달됩니다. a-line의 형식은 아래와 같습니다: a=end-of-candidates

### 더 이상 사용되지 않는 변수 (Deprecated)

이전 버전의 문서에서는 이 함수를 콜백 기반으로 사용하도록 되어있습니다. 콜백 기반 함수는 이제 더 이상 사용되지 않으며, 사용하지 않는 것을 권장합니다. 이미 사용 중이라면, {{jsxref("Promise")}} 버전인 `addIceCandidate()`를 사용하도록 코드를 업데이트 하십시오. 이전 버전의 코드를 업데이트 하는 것을 쉽게 하기 위해 고안된 `addIceCandidate()`의 특정 변수에 대해 아래에서 설명합니다.

- `successCallback` {{deprecated_inline}}
  - : ICE candidate가 성공적으로 추가되었을 때에 호출되는 함수입니다. 이 함수는 입력 변수가 없으며, 아무런 값도 반환하지 않도록 되어있습니다.
- `failureCallback` {{deprecated_inline}}
  - : ICE candidate 추가 시도가 실패하면 호출되는 함수입니다. 실패에 대한 이유를 설명하는 객체인 {{domxref("DOMException")}}을 입력 변수로 받습니다.

### 반환 값

{{jsxref("Promise")}}는 candidate가 ICE 에이전트에 의해 원격 유저의 설명 (description)에 성공적으로 추가되면 fulfilled 됩니다. 프로미스는 입력 변수가 없습니다.

### 예외 처리

ICE candidate 추가 시도 중 에러가 발생하면, 이 메소드에서 반환되는 {{jsxref("Promise")}}는 거절됩니다. 그리고 거절 핸들러로 전달되는 지정된 {{domxref("DOMException")}} 객체안에 존재하는 {{domxref("DOMException.name", "name")}} 속성으로 아래의 에러 중 하나를 반환하게 됩니다.

- `TypeError`
  - : 명시한 candidate의 {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} 및{{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}}가 모두 `null` 입니다.
- `InvalidStateError`
  - : 현재 `RTCPeerConnection`은 어떠한 원격 유저와도 연결이 되어있지 않습니다. {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} 값이 `null`입니다.
- `OperationError`

  - : 이 에러는 여러가지 이유 때문에 발생합니다:\* 지정된 {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} 값이 non-`null`이고, {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}}안에 존재하는 어떠한 미디어 description의 미디어 ID와도 일치하지 않음

    - 지정된 {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}}의 값이 원격 설명 (description)에 포함된 미디어의 숫자와 같거나 큼
    - 지정된 {{domxref("RTCIceCandidate.usernameFragment", "ufrag")}}가 어떠한 원격 설명 (description) 안의 `ufrag` 필드와 일치하지 않음
    - {{domxref("RTCIceCandidate", "candidate")}} 문자열에 존재하는 하나 혹은 여러개의 값들이 올바르지 않거나, 파싱 될 수 없음
    - 어떠한 이유에서던 candidate를 추가하려는 시도가 실패

## 예시

아래의 코드는 임의의 signaling 채널을 통해 어떻게 ICE candidate를 알리는지를 보여줍니다.

```js
// 본 예제는 다른 유저가 아래와 같은 signaling 채널을 사용한다고 가정합니다:
//
// pc.onicecandidate = event => {
//   if (event.candidate) {
//     signalingChannel.send(JSON.stringify({ice: event.candidate})); // "ice" is arbitrary
//   } else {
//     // All ICE candidates have been sent
//   }
// }

signalingChannel.onmessage = (receivedString) => {
  const message = JSON.parse(receivedString);
  if (message.ice) {
    // A typical value of ice here might look something like this:
    //
    // {candidate: "candidate:0 1 UDP 2122154243 192.168.1.9 53421 typ host", sdpMid: "0", ...}
    //
    // Pass the whole thing to addIceCandidate:

    pc.addIceCandidate(message.ice).catch((e) => {
      console.log("Failure during addIceCandidate(): " + e.name);
    });
  } else {
    // handle other things you might be signaling, like sdp
  }
};
```

원격 유저에 의해 이러한 방식으로 신호를 전달한 마지막 candiate는 "candidate 종료"를 나타내는 특수한 candidate가 됩니다. "candidate 종료"를 수동으로 설정하려면 다음과 같이 하면 됩니다:

```js
pc.addIceCandidate({ candidate: "" });
```

하지만, 대부분의 경우 {{domxref("RTCPeerConnection")}}가 적절한 이벤트를 보내서 처리해주기 때문에 이를 수동으로 확인해야 할 필요는 없습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture overview](/ko/docs/Web/API/WebRTC_API/Architecture)
- [WebRTC connectivity](/ko/docs/Web/API/WebRTC_API/Connectivity)
- [Lifetime of a WebRTC session](/ko/docs/Web/API/WebRTC_API/Session_lifetime)
