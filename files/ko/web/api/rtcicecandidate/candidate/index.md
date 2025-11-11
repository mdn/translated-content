---
title: RTCIceCandidate.candidate
slug: Web/API/RTCIceCandidate/candidate
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidate")}} 인터페이스에 대한 읽기 속성인 **`candidate`** 는 candidate에 대해 자세히 설명해주는 {{domxref("DOMString")}}를 반환합니다.

`RTCIceCandidate`의 거의 모든 다른 속성들은 사실 이 문자열에서 가져와진 것입니다.

이 속성은 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}를 사용해서 신규 candidate 객체를 구성 할 때, {{domxref("RTCIceCandidateInit.candidate", "candidate")}} 속성의 값을 지정해서 설정 할 수 있습니다.

## Syntax

```js
var candidate = RTCIceCandidate.candidate;
```

### 값

반환되는 {{domxref("DOMString")}} 값은 {{Glossary("SDP")}}의 속성인 `"candidate"`에서 직접 가져와진 candidate의 속성에 대해 알려줍니다. candidate 문자열은 해당 candidate에 대한 네트워크 연결 정보를 명시합니다. `candidate`가 빈 문자열 (`""`)이라면, 더 이상 남아있는 candidate가 없다는 뜻입니다. 빈 문자열은 "candidate 종료" 표시자로도 알려져있습니다.

candidate 문자열에 대한 구문은 {{RFC(5245, "", 15.1)}}에 설명되어있습니다.

```plain
a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host
```

위와 같은 a-line (속성 line)에서 해당하는 `candidate` 문자열의 값은 `"candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host"`가 됩니다.

{{Glossary("user agent")}}는 항상 가장 높거나 같은 {{domxref("RTCIceCandidate.priority", "priority")}}를 가진 candidate를 선호합니다. 위의 예시에서, 우선 순위는 `2043278322` 입니다. 속성은 단일 스페이스로 특정한 순서가 있습니다. 위의 candidate에 대한 전체 속성 리스트는 다음과 같습니다:

- {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
- {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (`"rtp"`는 1이 문자열에 있고, `"rtcp"`는 2가 문자열에 있습니다.)
- {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
- {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
- {{domxref("RTCIceCandidate.ip", "ip")}} = `"192.168.0.56"`
- {{domxref("RTCIceCandidate.port", "port")}} = 44323
- {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

## 예시

아래 예제에서는 시그널링 과정에서 원격 유저에게서 수신 받은 ICE candidate 정보를 가진 SDP 문자열을 입력으로 받는 함수입니다.

```js
function handleNewIceCandidate(candidateSDP) {
  var candidateObj = new RTCIceCandidate(candidateSDP);

  myPeerConnection.addIceCandidate(candidateObj).catch({
    /* handle the error thrown by addIceCandidate() */
  });
}
```

`handleNewIceCandidate()` 함수는 수신 받은 candidate의 SDP 문자를 {{domxref("RTCIceCandidate.RTCIceCandidate", "RTCIceCandidate()")}}에 보내고, candidate를 알려주는 {{domxref("RTCIceCanddiate")}} 객체를 반환 받습니다.

그 후, 신규 candidatesms {{domxref("RTCPeerConnection.addIceCandidate()")}}에 전달되서 candidate의 리스트에 추가해서 WebRTC가 연결 설정으로 사용 하도록 고려합니다.

위 예제는 더 간단하게 표현 될 수 있습니다. ECMAScript 2016의 고급 기능들을 사용해서 아래와 같이 나타낼 수 있습니다:

```js
let handleNewIceCandidate = (candidateSDP) =>
  myPeerConnection.addIceCandidate(new RTCIceCandidate(candidateSDP));
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
