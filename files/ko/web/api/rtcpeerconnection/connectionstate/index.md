---
title: RTCPeerConnection.connectionState
slug: Web/API/RTCPeerConnection/connectionState
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 인터페이스의 읽기 속성인 **`connectionState`** 는 피어 연결의 현재 상태를 알려줍니다. 이 속성은 [`RTCPeerConnectionState`](#RTCPeerConnectionState_enum) `enum` 값 중 하나를 문자열로 반환해줍니다.

만약 이 속성의 값이 바뀌게되면, {{domxref("RTCPeerConnection")}} 인스턴스로 {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}} 이벤트가 전송됩니다.

## Syntax

```js
var connectionState = RTCPeerConnection.connectionState;
```

### 값

연결의 현재 상태를 [`RTCPeerConnectionState`](#RTCPeerConnectionState_enum) enum의 값 중 하나로 표시합니다.

### RTCPeerConnectionState enum

`RTCPeerConnectionState` enum은 `RTCPeerConnection`이 존재 할 수 도있는 상태에 대해 알려주는 문자열 상수를 정의합니다. 이 값들은 {domxref("RTCPeerConnection.connectionState", "connectionState")}} 속성에 의해 반홥됩니다. 근본적으로 이 상태는 연결에 의해 사용되는 모든 ICE 전송 ({{domxref("RTCIceTransport")}} 혹은 {{domxref("RTCDtlsTransport")}}의 타입)의 상태 집합을 나타냅니다.

| 상수명           | 설명                                                                                                                                                                                                                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"new"`          | 연결의 ICE 전송 중 적어도 한 개가 새로 만들어진 `"new"` 상태이고, 그 외의 나머지는 다음의 상태 중 하나가 아니여야 합니다: `"connecting"`, `"checking"`, `"failed"`, 혹은 `"disconnected"`, 혹은 모든 연결의 전송이 끝났다는 `"closed"`상태.                                                         |
| `"connecting"`   | 하나 혹은 여러개의 ICE 전송이 현재 연결을 구성하는 중에 있음을 알려주는 값. 이는 `RTCIceConnectionState`가 `"checking"` 혹은 `"connected"`이며, 그 어떤 전송도 `"failed"`상태가 아니여야합니다. **<<< Make this a link once I know where that will be documented**                                  |
| `"connected"`    | 연결에 의해 사용되는 모든 ICE 전송이 사용 중 (`"connected"` 혹은 `"completed"`)이거나, 종료된 상태입니다. 추가적으로 최소 하나의 전송이 `"connected"` 혹은 `"completed"`입니다.                                                                                                                     |
| `"disconnected"` | 연결에 대한 최소 한 개의 ICE 전송이 `"disconnected"`상태이고, 그 외의 다른 전송 상태는 `"failed"`, `"connecting"`, 혹은 `"checking"`이 아님을 알려주는 값.                                                                                                                                          |
| `"failed"`       | 연결에 대한 하나 혹은 여러개의 ICE 전송이 `"failed"`상태임을 알려주는 값.                                                                                                                                                                                                                           |
| `"closed"`       | `RTCPeerConnection` 개통되지 않음을 알려주는 값.2016년 5월 13일에 작성된 명세서의 초안에 따르면, 이 값은 [`RTCPeerConnectionState` enum](#RTCPeerConnectionState_enum) 안에 존재했었습니다. 따라서, {{domxref("RTCPeerConnection.signalingState", "signalingState")}}의 값을 통해 찾을 수 있습니다. |

## 예시

```js
var pc = new RTCPeerConnection(configuration);

/* ... */

var connectionState = pc.connectionState;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [Lifetime of a WebRTC session](/ko/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
- {{event("connectionstatechange")}}
- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
