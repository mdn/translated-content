---
title: RTCPeerConnection.createDataChannel()
slug: Web/API/RTCPeerConnection/createDataChannel
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}} 인터페이스의 **`createDataChannel()`** 메소드는 어떤 형식의 데이터든 송신 할 수 있도록 원격 유저와 연결하는 신규 채널을 생성합니다.이 방법은 이미지, 파일 전송, 문자 채팅, 게임 패킷 업데이트 등과 같은 백채널 컨텐츠에 유용하게 사용 가능합니다.

연결 인터페이스에 신규 채널이 처음 추가되면, 재협상 과정이 {{event("negotiationneeded")}} 이벤트를 전달하여 시작됩니다.

## Syntax

```js
dataChannel = RTCPeerConnection.createDataChannel(label[, options]);
```

### 매개변수

- `label`
  - : 사람이 읽을 수 있는 채널 이름입니다. 이름의 문자열은 65,535 바이트 보다 작아야합니다.
- `options` {{optional_inline}}
  - : [`RTCDataChannelInit` dictionary](#RTCDataChannelInit_dictionary)가 데이터 채널에 대한 설정 옵션들을 제공합니다.

### RTCDataChannelInit 딕셔너리

`RTCDataChannelInit` 딕셔너리는 개발자의 필요에 따라 데이터 채널을 설정 할 때 객체로 전달되는 옵션 매개변수로 전달되는 객체에 포함 될 수 있는 다음의 필드들을 제공합니다:

- `ordered` {{optional_inline}}
  - : 이 옵션은 {{domxref("RTCDataChannel")}}에 전달된 메세지가 보내진 순서대로 상대방에게 도착해야하는지 (`true`) 아니면 순서가 달라도 허용 (`false`)이 되는지를 결정합니다. **기본 값: `true`.**
- **`maxPacketLifeTime` {{optional_inline}}**
  - : 불안정한 모드에서 메세지를 전송 할 때 최대 몇 초 동안 전송을 시도 할 것인지를 결정하는 옵션입니다. 이 값은 16bit의 부호가 없는 정수형이지만, 각 유저 에이전트는 적절하다고 판단되는 최대 값으로 지정 할 수 있습니다. (**주의**: **`maxPacketLifeTime`** 혹은 **`maxRetransmits`** 옵션 둘 중 하나만 사용해야함.) **기본 값: `null`.**
- `maxRetransmits` {{optional_inline}}
  - : 불안정한 모드에서 메세지 전송이 실패하면 최대 몇 번을 재시도 할 것인지를 결정하는 옵션입니다. 이 값은 16bit의 부호가 없는 정수형이지만, 각 유저 에이전트는 적절하다고 판단되는 최대 값으로 지정 할 수 있습니다. (**주의**: **`maxPacketLifeTime`** 혹은 **`maxRetransmits`** 옵션 둘 중 하나만 사용해야함.) **기본 값: `null`.**
- `protocol` {{optional_inline}}
  - : {{domxref("RTCDataChannel")}}에 사용되는 서브 프로토콜의 이름입니다. 존재하지 않으면 이 옵션은 빈 문자열 (`""`)입니다. **기본 값: 빈 문자열, `""`.** 이 문자열은 65,535 바이트 보다 작아야합니다.
- `negotiated` {{optional_inline}}
  - : 기본 값일 경우 (`false`), 데이터채널은 밴드의 대역 내에서 협상됩니다. 이 때, 한 쪽은 `createDataChannel`를 호출하고, 다른 쪽에서는 {{domxref("RTCDataChannelEvent")}} 이벤트를 `ondatachannel` `EventHandler`를 사용해서 감청합니다. 반대로 `true` 일 경우, 밴드의 대역 범위를 벗어나도 재협상이 가능해집니다. 이 때에는 양쪽에서 합의된 id를 가진 `createDataChannel`을 호출하게됩니다. **기본 값: `false`.**
- `id` {{optional_inline}}
  - : 채널에 대한 16bit 숫자형 ID입니다. 허용되는 값은 0에서 65534 사이입니다. 이 값을 지정하지 않으면, 유저 에이전트가 알아서 ID를 지정해줍니다.

> **참고:** `RTCDataChannelInit` 딕셔너리를 사용해서 설정이 가능한 옵션들은 {{domxref("RTCDataChannel")}} 인터페이스에서 설정이 가능한 특성들의 서브 셋을 뜻합니다.

### 반환 값

지정한 `label`을 가지고, `options`에 지정한 옵션들을 사용하여 설정된 신규 {{domxref("RTCDataChannel")}} 객체입니다. 각 매개변수들을 지정하지 않으면, 기본 값으로 설정되어 생성됩니다.

### 예외처리

- `InvalidStateError`
  - : {{domxref("RTCPeerConnection")}}가 닫혀있음을 뜻합니다.
- `TypeError`
  - : 이 에러는 여러 상황에서 발생이 가능합니다:\* label 혹은 프로토콜 문자열이 너무 길어서 발생합니다. 해당 문자열은 65,535바이트보다 작아야합니다.
    - `id`가 65535여서 발생합니다. 이 값은 유효한 부호가 없는 16bit 이지만, `id` 값으로 허용되는 범위를 벗어나게됩니다. (0-65534 까지만 허용)
- `SyntaxError`
  - : `maxPacketLifeTime` 와 `maxRetransmits` 옵션에 모두 값이 지정되면 발생합니다. 둘 중 하나에만 non-`null` 값을 지정해야 합니다.
- `ResourceInUse`
  - : `id` 값이 지정되었지만, 다른 {{domxref("RTCDataChannel")}}에서 이미 같은 이름을 사용 중이면 발생합니다.
- `OperationError`
  - : 지정한 `id`가 이미 사용 중이거나, `id`가 지정되지 않았다면 모든 ID들이 사용 중이기 때문에 WebRTC 레이어에서 자동으로 `id` 생성이 불가능 할 때 발생합니다.

## 예시

아래의 예제에서는 어떻게 데이터 채널을 생성하고, 생성 할 때 메세지를 전송하고 수신하는 이벤트인 {{event("open")}}와 {{event("message")}}에대한 핸들러를 설정합니다. (onnegotiationneeded는 이미 설정이 되었다고 가정하고 간소화한 예입니다.)

```js
// Offerer side

var pc = new RTCPeerConnection(options);
var channel = pc.createDataChannel("chat");
channel.onopen = function (event) {
  channel.send("Hi you!");
};
channel.onmessage = function (event) {
  console.log(event.data);
};
```

```js
// Answerer side

var pc = new RTCPeerConnection(options);
pc.ondatachannel = function (event) {
  var channel = event.channel;
  channel.onopen = function (event) {
    channel.send("Hi back!");
  };
  channel.onmessage = function (event) {
    console.log(event.data);
  };
};
```

다른 방법으로는 양쪽에서 합의한 id를 사용하여 보다 대칭적인 대역 밴드 외 협상이 가능합니다. (id는 0입니다):

```js
// Both sides

var pc = new RTCPeerConnection(options);
var channel = pc.createDataChannel("chat", { negotiated: true, id: 0 });
channel.onopen = function (event) {
  channel.send("Hi!");
};
channel.onmessage = function (event) {
  console.log(event.data);
};
```

연결 및 채널이 구성되는 예를 더 자세히 알고 싶다면, [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)를 참조하십시오.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{domxref("RTCDataChannel")}}
- [A simple RTCDataChannel sample](/ko/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
- {{domxref("RTCPeerConnection")}}
