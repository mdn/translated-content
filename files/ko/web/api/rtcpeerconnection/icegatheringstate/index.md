---
title: RTCPeerConnection.iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

읽기 속성인 **`RTCPeerConnection.iceGatheringState`** 는 연결 인터페이스의 ICE 수집 상태를 알려주는 `RTCIceGatheringState`타입의 Enum을 반환합니다. 이 속성을 활용하면, ICE candidate 수집 과정이 언제 종료되는지 감지 할 수 있습니다.

{{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}타입의 이벤트 감시를 통해 이 속성 값이 언제 변하는지를 확인 할 수 있습니다.

## Syntax

```js
var state = RTCPeerConnection.iceGatheringState;
```

### 값

반환되는 값은 `RTCIceGatheringState`타입의 Enum입니다.

### RTCIceGatheringState enum[섹션](/ko/docs/Web/API/RTCPeerConnection#RTCIceGatheringState_enum)

[`RTCPeerConnection.iceGatheringState`](/ko/docs/Web/API/RTCPeerConnection/iceGatheringState) 속성을 사용하게되면 반환되는 `RTCIceGatheringState` enum은 현재의 ICE 수집 상태를 반영하여 알려주는 문자열 상수입니다. {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} 타입의 이벤트를 감시해서 이 값이 언제 변하는지 확인 할 수 있습니다.

| 상수명        | 설명                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"new"`       | 피어 연결이 새로 생성되었지만, 아직 네트워킹은 시작되지 않은 상태                                                                                                                                            |
| `"gathering"` | ICE 에이전트가 연결을 위한 ICE candidate를 수집하는 과정에 있음을 알려주는 상태                                                                                                                              |
| `"complete"`  | ICE 에이전트가 candidate 수집을 완료한 상태. 새로운 인터페이스가 추가되거나, 신규 ICE 서버가 추가와 같이 신규 ICE candidate를 수집해야하는 상황이 오면, 상태가 `complete`에서 `gathering`으로 다시 바뀝니다. |

## <br>예시

```js
var pc = new RTCPeerConnection();
var state = pc.iceGatheringState;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}
- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
