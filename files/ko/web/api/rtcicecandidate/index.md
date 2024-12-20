---
title: RTCIceCandidate
slug: Web/API/RTCIceCandidate
---

{{APIRef("WebRTC")}}

**`RTCIceCandidate`** 인터페이스는 [WebRTC API](/ko/docs/Web/API/WebRTC_API)의 한 종류로서, {{domxref("RTCPeerConnection")}}을 구축 할 때 사용되기도하는 Internet Connectivity Establishment ({{Glossary("ICE")}})의 후보군 (candidate)를 말합니다.

하나의 ICE candidate는 WebRTC가 원격 장치와 통신을 하기 위해 요구되는 프로토콜과 라우팅에 대해 알려줍니다. WebRTC 피어 연결을 처음 시작하게되면, 일반적으로 여러개의 candiate들이 연결의 각 end에 의해 만들어집니다. 그리고 이 과정은 로컬 유저와 원격 유저가 연결을 위해 최고의 방법을 서로의 동의하에 선택하기 전까지 계속 됩니다. 이후에 WebRTC가 선택한 candidate를 사용해서 연결을 시도하게됩니다.

ICE 과정이 어떻게 동작하는지 자세히 알고 싶다면, [Lifetime of a WebRTC session](/ko/docs/Web/API/WebRTC_API/Session_lifetime)을 확인해보십시오.이외에도 [WebRTC connectivity](/ko/docs/Web/API/WebRTC_API/Connectivity)에서는 유용한 추가 정보를 제공합니다.

## 생성자

- {{domxref("RTCIceCandidate.RTCIceCandidate()","RTCIceCandidate()")}}
  - : 단일 ICE candidate를 나타내기 위해 RTCIceCandidate 객체를 생성합니다. 옵션으로 {{domxref("RTCIceCandidateInit")}} 딕셔너리에 존재하는 객체를 이용해 설정이 가능합니다.
    > [!NOTE]
    > 이전 버전의 호환성을 위해서는, 생성자가 {{domxref("RTCIceCandidate.candidate", "candidate")}} 속성의 값을 가진 문자열을 {{domxref("RTCIceCandidateInit")}} 객체 대신에 입력 인자로 받습니다. 이는 `candidate`가 `RTCIceCandidateInit`보다 더 많은 정보를 가지고 있기 때문입니다.

## 속성

- {{domxref("RTCIceCandidate.candidate", "candidate")}} {{readonlyInline}}
  - : 연결성 확인을 위해 사용 될 수 있는 candidate에 대한 전달 주소를 나타내는 {{domxref("DOMString")}}입니다. 이 주소의 형식은 {{RFC(5245)}}에 정의된바와 같이 `candidate-attribute` 입니다. `RTCIceCandidate`가 "마지막 candidate"를 알려주면, 이 문자열은 빈 문자열 (`""`)이 됩니다.
- {{domxref("RTCIceCandidate.component", "component")}} {{ReadOnlyInline}}
  - : ICE candidate가 RTP (`rtp`) 인지 RTCP (`rtcp`)인지 알려주는 {{domxref("DOMString")}}입니다. 이 값들은 `candidate` 라인 문자열에 있는 `"component-id"` 필드에서 가져와집니다. 허용되는 값은 {{domxref("RTCIceComponent")}} enum 타입에 정리되어있습니다.
- {{domxref("RTCIceCandidate.foundation", "foundation")}} {{readonlyInline}}
  - : 같은 유형의 candidate와 동일한 식별자를 가진 {{domxref("DOMString")}}를 반환합니다. {{domxref("DOMString")}}는 동일한 베이스 (ICE 에이전트가 candidate를 보낸 주소)를 공유하고, 동일한 {{Glossary("STUN")}}서버에서 가져와집니다. 이 속성을 사용해서 {{domxref("RTCIceTransport")}}객체에 나타나는 candidate의 우선 순위를 매기고 연관을 시키면서 ICE 성능을 최적화 할 수 있습니다.
- {{domxref("RTCIceCandidate.ip", "ip")}} {{readonlyInline}}
  - : candidate의 IP 주소를 가지고 있는 {{domxref("DOMString")}}입니다.
- {{domxref("RTCIceCandidate.port", "port")}} {{readonlyInline}}
  - : candidate의 포트 넘버를 알려주는 정수 값 입니다.
- {{domxref("RTCIceCandidate.priority", "priority")}} {{readonlyInline}}
  - : candidate의 우선순위를 알려주는 long 정수 값 입니다.
- {{domxref("RTCIceCandidate.protocol", "protocol")}} {{readonlyInline}}
  - : candidate의 프로토콜이 `"tcp"`인지 `"udp"`인지 알려주는 문자열입니다. 이 문자열은 `RTCIceProtocol` enum 타입 중 하나 입니다.
- {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}} {{readonlyInline}}
  - : candidate가 다른 candidate, 즉 호스트 candidate에서 가져와졌다면, `relatedAddress`는 호스트 candidate의 IP 주소를 포함하는 {{domxref("DOMString")}}입니다. 호스트 candidate에서 이 값은 `null` 입니다.
- {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}} {{readonlyInline}}
  - : candidate가 relay 혹은 reflexive candidate로 부터 가져와진 경우, `relatedPort`는 해당하는 호스트 candidate의 포트 넘버를 가르킵니다. 마찬가지로, 호스트 candidate에서 이 값은 `null` 입니다.
- {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} {{readonlyInline}}
  - : candidate의 미디어 스트림 식별 태그를 정의하는 {{domxref("DOMString")}}입니다. 여기서 식별 태그는 candidate와 연관이 있는 컴포넌트안의 미디어 스트림을 유일하게 식별합니다. candidate와 관련이 있는 미디어 스트림이 존재하지 않으면, 이 값은 `null` 입니다.
- {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} {{readonlyInline}}
  - : 이 값이 `null`이 아니라면, `sdpMLineIndex`는 candidate와 연관 된 {{Glossary("SDP")}}의 미디어 설명에 대한, 0을 기준으로 하는 색인 번호를 알려줍니다 ([RFC 4566](https://tools.ietf.org/html/rfc4566)에 정의되어 있습니다.).
- {{domxref("RTCIceCandidate.tcpType", "tcpType")}} {{readonlyInline}}
  - : `protocol`이 `"tcp"`라면,`tcpType`은 TCP candidate의 타입을 알려줍니다. 이외에는 `tcpType`은 `null` 입니다.
- {{domxref("RTCIceCandidate.type", "type")}} {{readonlyInline}}
  - : {{domxref("RTCIceCandidateType")}} enum 타입에 존재하는 문자열에 속하는 candidate의 타입을 알려주는 {{domxref("DOMString")}}입니다.
- {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}} {{ReadOnlyInline}}
  - : ICE가 무작위로 생성된 비밀번호 (`"ice-pwd"`) 와 함께 메세지의 무결성을 확인하기 위해 사용하는 무작위로 생성된 유저 이름 조각 (`"ice-ufrag"`)을 가지고 있는 {{domxref("DOMString")}}입니다. 이 문자열을 사용해서 ICE 생성의 버전을 확인 할 수 있습니다. ICE가 재시작하더라도, 같은 버전의 ICE 프로세스는 동일한 `usernameFragment`를 가지게 됩니다.

## 메소드

- {{domxref("RTCIceCandidate.toJSON", "toJSON()")}}
  - : `toJSON()`은 `RTCIceCandidate`의 현재 저장된 설정을 담은 {{Glossary("JSON")}} 표현식을 {{domxref("RTCIceCandidateInit")}} 객체의 형태로 변환시킨 {{domxref("DOMString")}}를 반환합니다.

## 예시

예시를 보려면, 전체 과정을 설명해주는 [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling)문서를 확인하십시오.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
