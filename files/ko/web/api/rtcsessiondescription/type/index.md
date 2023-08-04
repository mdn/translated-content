---
title: RTCSessionDescription.type
slug: Web/API/RTCSessionDescription/type
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

읽기 전용 값인 **`RTCSessionDescription.type`**은 세션 설명의 타입을 알려주는 `RTCSdpType`타입의 값입니다.

## Syntax

```js
var value = sessionDescription.type;
sessionDescription.type = value;
```

### 값

`RTCSdpType` 타입의 열거체에 사용 가능한 값들이 정의되어 있습니다.

아래는 사용 가능한 값들입니다:

- `"offer"`, offer 혹은 answer 교환 과정에서 처음으로 제안된 세션 설명입니다.
- `"answer"`, offer 혹은 answer 교환 과정에서 채택한 세션 설명입니다.
- `"pranswer"`, 임시로 지정한 answer 입니다. 이 세션 설명 값은 채택한 값이 존재하면 변할 수도 있습니다.
- "`rollback`", 가장 최근의 안정적인 상태의 offer 혹은 answer 상태로 되돌아가라는 세션 설명입니다.

## Example

```js
// The remote description has been set previously on pc, a RTCPeerconnection

alert(pc.remoteDescription.type);
```

## 사양서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
