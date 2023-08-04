---
title: RTCPeerConnection.setLocalDescription()
slug: Web/API/RTCPeerConnection/setLocalDescription
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.setLocalDescription()`** 메소드는 연결 인터페이스와 관련이 있는 로컬 설명 (local description)을 변경합니다. 로컬 설명은 미디어 형식을 포함하는 연결의 로컬 엔드에 대한 속성을 명시합니다.

이 메소드는 세션 설명 (session description)을 단일 매개변수로 가지며, 설명이 비동기적으로 변하게되면 fulfilled되는 {{jsxref("Promise")}}를 반환합니다.

연결이 이미 되어있는데 `setLocalDescription()`가 호출된다면, 이는 재협상이 진행 중이라는 뜻입니다 (아마도 네트워크 환경이 바뀐 것에 대응하기 위함일 것입니다). 두명의 피어가 설정 값에 모두 동의해야지만 설명이 교환되기 때문에, `setLocalDescription()`의 호출로 전송된 설명은 즉시 사용되지 못합니다. 대신 협상이 완료되는 순간까지는 기존 연결 설정대로 작동 하게 됩니다. 그러다가 협상이 완료된 다음에서야 신규 설정이 사용됩니다.

## Syntax

```js
aPromise = RTCPeerConnection.setLocalDescription(sessionDescription);

pc.setLocalDescription(sessionDescription, successCallback, errorCallback);
```

### 매개 변수

- `sessionDescription`
  - : 연결의 로컬 엔드에 적용시킬 설정 값을 지정하는 {{domxref("RTCSessionDescriptionInit")}} 혹은 {{domxref("RTCSessionDescription")}}입니다.

#### 세션 설명 매개 변수에 대한 설명

`sessionDescription` 매개 변수는 일단 기술적으로는 `RTCSessionDescriptionInit`의 타입입니다. 하지만, {{domxref("RTCSessionDescription")}}가 `RTCSessionDescriptionInit`와 구별이 불가능하도록 직렬화 (serialize)하기 때문에, `RTCSessionDescription`를 전달 할 수도 있습니다. 이 말은 코드가 다음과 같이 간단해질 수 있다는 뜻입니다:

```js
myPeerConnection.createOffer().then(function (offer) {
  return myPeerConnection.setLocalDescription(new RTCSessionDescription(offer));
});
```

위 코드를 아래와 같이 간단하게 사용이 가능해집니다:

```js
myPeerConnection.createOffer().then(myPeerConnection.setLocalDescription);
```

이러한 이유로, {{domxref("RTCSessionDescription.RTCSessionDescription", "RTCSessionDescription()")}} 생성자는 더 이상 사용되지 않습니다.

### 반환 값

{{domxref("RTCPeerConnection.localDescription")}}의 값이 성공적으로 바뀌거나 혹은 변환이 불가능한 경우 거절되면 fulfill 되는 {{jsxref("Promise")}}입니다. 거절되는 예로는 명시한 설명이 연결에 존재하는 하나 혹은 양쪽 모두의 피어들과 호환이 불가능하면 발생하기도 합니다. 참고로 프로미스의 fulfillment 핸들러는 입력 매개 변수를 받지 않습니다.

> **참고:** 설명을 바꾸는 과정은 변경이 실패해도 연결 상태를 잃지 않게 보장하도록 WebRTC 레이어에 의해서 처리되는 중간 단계를 거칩니다. 이 과정에 대한 자세한 설명은 [Pending and current descriptions](/ko/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions)를 참조하십시오.

### 지원이 중단된 매개 변수

이전 버전의 문서에서는 콜백 기반의 함수를 찾을 수 있습니다. 콜백 함수는 지원이 중단되었고, 추후에 삭제 될 예정이기 때문에 **사용하지 않도록 강력히 권장**하고 있습니다. 이미 콜백 함수를 사용 중이라면, {{jsxref("Promise")}} 기반인 `setLocalDescription()`를 대신 사용하도록 업데이트 해야합니다. 기존 코드 업데이트에 도움을 주기 위해, 아래에서는 이전 버전의 `setLocalDescription()`에 대한 매개 변수를 설명합니다.

- `successCallback` {{deprecated_inline}}
  - : 설명 값이 성공적으로 설정되면 입력 매개 변수 없이 호출되는 자바스크립트 {{jsxref("Function")}}입니다. 여기서, offer가 시그널링 서버를 통해서 원격 유저에게 전송 될 수 있습니다.
- `errorCallback` {{deprecated_inline}}
  - : 설명 값이 설정이 불가능할 때에 호출되어 `RTCPeerConnectionErrorCallback` 서명을 확인하는 함수입니다. 여기에는 요청이 왜 실패했는지를 설명하는 {{domxref("DOMException")}} 객체를 전달합니다.

지원이 중단된 위의 메소드는 실제 설정이 바뀌기 전에 바로 반환합니다. 성공하면 `successCallback`가 호출되고, 실패하면 `errorCallback`가 호출됩니다.

### 지원이 중단된 예외처리

지원이 중단된 콜백버전의 `setLocalDescription()`를 사용하게되면 아래와 같은 예외들이 발 생 할 수도 있습니다:

- `InvalidStateError` {{deprecated_inline}}
  - : 연결의 {{domxref("RTCPeerConnection.signalingState", "signalingState")}}가 `"closed"` 상태고, 이는 연결이 현재 열린 상태가 아니여서 협상이 발생할 수 없다는 뜻입니다.
- `InvalidSessionDescriptionError` {{deprecated_inline}}
  - : `sessionDescription`에 의해 명시된 {{domxref("RTCSessionDescription")}} 매개 변수가 유효하지 않음을 알려줍니다.

## 예시

아래의 예시에서는, {{event("negotiationneeded")}} 이벤트에 대한 핸들러를 구현하였습니다:

```js
function handleNegotiationNeededEvent() {
  pc.createOffer()
    .then(function (offer) {
      return pc.setLocalDescription(offer);
    })
    .then(function () {
      // Send the offer to the remote peer using the signaling server
    })
    .catch(reportError);
}
```

이 함수는 {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}}를 호출하여 offer를 생성하면서 시작됩니다. 이 과정이 성공하면, `setLocalDescription()`를 호출합니다. 프로미스에 대한 fulfillment 핸들러는 시그널링 서버를 사용해서 다른 유저에게 신규 생성된 offer를 전송할 수 있게 됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
