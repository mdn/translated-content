---
title: RTCPeerConnection.getConfiguration()
slug: Web/API/RTCPeerConnection/getConfiguration
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.getConfiguration()`** 메소드는 호출 된 {{domxref("RTCPeerConnection")}}의 현재 설정을 알려주는 {{domxref("RTCConfiguration")}} 객체를 반환합니다.

여기서 반환되는 설정 값 은 가장 최근에 적용했던 {{domxref("RTCPeerConnection.setConfiguration","setConfiguration()")}} 혹은 `setConfiguration()`가 호출 되지 않았다면, `RTCPeerConnection`가 구성되면서 생긴 설정입니다. 이 설정은 연결에 의해 사용되는 ICE 서버의 리스트, 전송 정책에 관한 정보, 그리고 식별 정보를 포함합니다.

## Syntax

```js
var configuration = RTCPeerConnection.getConfiguration();
```

### 매개변수

이 메소드는 입력 변수를 받지 않습니다.

### 반환 값

{{domxref("RTCPeerConnection")}}의 현재 설정을 알려주는 {{domxref("RTCConfiguration")}} 객체입니다.

## 예시

아래의 예제는 활성화된 연결에서 이미 사용 중인 인증서가 없다면, 신규 인증서를 추가하는 작업입니다.

```js
let configuration = myPeerConnection.getConfiguration();

if (
  configuration.certificates != undefined &&
  !configuration.certificates.length
) {
  RTCPeerConnection.generateCertificate({
    name: "RSASSA-PKCS1-v1_5",
    hash: "SHA-256",
    modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]),
  }).then(function (cert) {
    configuration.certificates = [cert];
    myPeerConnection.setConfiguration(configuration);
  });
}
```

위의 예제에서는 {{domxref("RTCPeerConnection")}}의 현재 설정을 가져 온 다음에, 인증서가 존재하는지 확인하기 위해 (1) 설정에 `certificates`값이 포함되어 있는지, (2) 길이가 0인지를 확인합니다.

만약 인증서가 존재하지 않으면, {{domxref("RTCPeerConnection.generateCertificate()")}}가 호출되어 신규 인증서를 만들어냅니다. 여기에 fulfillment 핸들러를 제공해서 새로 만들어진 인증서를 포함하는 배열을 현재 설정에 추가하고, {{domxref("RTCPeerConnect.setConfiguration", "setConfiguration()")}}에 전달해서 연결에 인증서를 추가합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{domxref("RTCPeerConnection.setConfiguration()")}}
- {{domxref("RTCConfiguration")}}
- {{domxref("RTCPeerConnection")}}
