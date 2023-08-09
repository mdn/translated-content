---
title: RTCDataChannelEvent()
slug: Web/API/RTCDataChannelEvent/RTCDataChannelEvent
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCDataChannelEvent()`** 생성자는 새로운 {{domxref("RTCDataChannelEvent")}}를 생성합니다.

> **참고:** 이 이벤트는 알아서 WebRTC 레이어에 생성되고 전달되기 때문에, `RTCDataChannelEvent`를 수동으로 생성하는 일은 거의 없습니다.

## Syntax

```js
var event = new RTCDataChannelEvent(type, RtcDataChannelEventInit);
```

### 패러미터

- `type`
  - : 이벤트의 이름을 알려주는 {{domxref("DOMString")}}입니다. 이름은 `RTCDataChannelEvent` 타입의 한 종류인 "datachannel" 딱 한 가지만 존재합니다.
- `RtcDataChannelEventInit`
  - : 아래의 필드를 가지는 `RTCDataChannelEventInit` 딕셔너리 입니다:\* `"channel"`은 {domxref("RTCDataChannel")}}의 한 종류로, 이벤트에 의해 데이터 채널이 확인되었다는 것을 알려줍니다.
    - `"bubbles"`은 옵션으로 설정이 가능하며, `EventInit`에서 상속됩니다. 이는 해당 이벤트가 무조건 `bubble`이 되어야하는지의 여부를 알려줍니다. 기본 값은 `false`입니다
    - `"cancelable"`은 옵션으로 설정이 가능하며, `EventInit`에서 상속됩니다. 이는 해당 이벤트가 취소 될 수 있는지의 여부를 알려줍니다. 기본 값은 `false`입니다.

### 값

명시한대로 설정된 신규 {{domxref("RTCDataChannelEvent")}} 입니다.

## 예시

아래 예제는 신규 {{event("datachannel")}}를 생성합니다. `dc`는 이미 존재하는 데이터 채널을 뜻합니다.

```js
var event = new RTCDataChannelEvent("datachannel", { channel: dc });
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection")}}
- [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
