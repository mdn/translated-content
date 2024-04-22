---
title: "RTCPeerConnection: icegatheringstatechange event"
slug: Web/API/RTCPeerConnection/icegatheringstatechange_event
---

{{APIRef("WebRTC")}}

**`icegatheringstatechange`** 이벤트는 {{Glossary("ICE")}} candidate 수집 과정이 변경되면, {{domxref("RTCPeerConnection")}}의 이벤트 핸들러인 {{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}}로 전달됩니다. 이는 연결의 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} 속성이 변경되었다는 것을 뜻합니다.

ICE가 처음 연결 candidate들을 수집하게되면 값이 `new`에서 `gathering`으로 바뀌게 되고, 이는 연결에 대한 candidate 설정들을 수집하는 과정 중에 있다는 뜻입니다. 값이 complete가 되면, RTCPeerConnection을 구성하는 모든 트랜스포트들이 ICE candidate 수집을 완료한 상태입니다.

| Bubbles       | No                                                                                      |
| ------------- | --------------------------------------------------------------------------------------- |
| 취소가능여부  | No                                                                                      |
| 인터페이스    | {{domxref("Event")}}                                                                    |
| 이벤트 핸들러 | {{domxref("RTCPeerConnection.onicegatheringstatechange", "onicegatheringstatechange")}} |

> **참고:** ICE candidate 수집 과정이 완료되었는지는 `icegatheringstatechange`이벤트와 {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}의 값이 `complete`로 바뀌는 것을 확인하면 알 수 있습니다. 하지만, 더 쉬운 방법으로는 {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} 이벤트에 대한 핸들러가 {{domxref("RTCPeerConnectionIceEvent.candidate", "candidate")}} 속성의 값이 null로 변하는 시점을 체크하도록 할 수 있습니다. 이 속성이 `null` 값으로 바뀌었다는 것은 즉 모든 candidate 수집이 완료되었다는 뜻입니다.

## 예시

아래 예제는 `icegatheringstatechange` 이벤트에대한 핸들러를 생성합니다.

```js
pc.onicegatheringstatechange = (ev) => {
  let connection = ev.target;

  switch (connection.iceGatheringState) {
    case "gathering":
      /* candidate 수집 과정 시작 */
      break;
    case "complete":
      /* candidate 수집 완료 */
      break;
  }
};
```

아래처럼 {{domxref("EventTarget.addEventListener", "addEventListener()")}}을 사용해서 `icegatheringstatechange` 이벤트에 대한 변경을 감지하는 리스너를 추가 할 수 있습니다.

```js
pc.addEventListener(
  "icegatheringstatechange",
  (ev) => {
    let connection = ev.target;

    switch (connection.iceGatheringState) {
      case "gathering":
        /* candidate 수집 과정 시작 */
        break;
      case "complete":
        /* candidate 수집 완료 */
        break;
    }
  },
  false,
);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC API](/ko/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC connectivity](/ko/docs/Web/API/WebRTC_API/Connectivity)
- [Lifetime of a WebRTC session](/ko/docs/Web/API/WebRTC_API/Session_lifetime)
