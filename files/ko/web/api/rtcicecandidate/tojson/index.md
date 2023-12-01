---
title: RTCIceCandidate. toJSON()
slug: Web/API/RTCIceCandidate/toJSON
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidate")}} 메소드인 **`toJSON()`**은 JSON 형식으로 호출된 RTCIceCandidate를 {{domxref("RTCIceCandidateInit")}} 객체 형식으로 변환합니다. .

## Syntax

```js
json = RTCIceCandidate.toJSON();
```

### 반환 값

{{domxref("RTCIceCandidateInit")}} 딕셔너리에 상응하는 객체로, `RTCIceCandidate` 객체의 해당하는 값으로 설정됩니다.

반환된 객체에 대한 문자열화된 버전의 객체는 {{jsxref("JSON.stringify", "stringify()")}}를 호출해서 가져올 수 있습니다. 아래의 [예시](#example)를 참조하십시오.

## 예시

아래의 샘플 코드는 `candidate` 변수의 `RTCIceCandidate`를 나타내는 JSON 문자열을 가져옵니다.

```js
var jsonString = candidate.toJSON().stringify();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
