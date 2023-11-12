---
title: RTCPeerConnection.addTrack()
slug: Web/API/RTCPeerConnection/addTrack
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnection")}}의 메소드인 **`addTrack()`**은 다른 유저에게 전송될 트랙들의 묶음에 신규 미디어 트랙을 추가합니다.

> **참고:** **참조:** 연결 인터페이스에 트랙을 추가하게되면, {{event("negotiationneeded")}} 이벤트를 발생시켜 renegotiation을 하게 만듭니다. 자세한 사항은 [Starting negotiation](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation) 를 참조하십시오.

## Syntax

```js
rtpSender = RTCPeerConnection.addTrack(track, stream...);
```

### 매개변수

- `track`
  - : 피어 연결에 추가될 미디어 트랙을 나타내는 {{domxref("MediaStreamTrack")}} 객체입니다.
- `stream...` {{optional_inline}}
  - : 트랙이 추가 되어야하는 하나 혹은 여러개의 로컬 {{domxref("MediaStream")}} 객체입니다.

지정된 `track` 는 꼭 지정된 `stream`s의 일부가 아니여도 됩니다. `stream`s은 단지 연결을 받는 쪽에서 트랙을 그룹으로 묶고 동기화하는 방법입니다. 연결의 로컬 쪽에 존재하는 동일한 stream에 추가된 트랙들은 원격 쪽에서 같은 stream에 존재하게됩니다.

### 반환 값

{{domxref("RTCRtpSender")}} 객체는 미디어 데이터를 전송하기위해 사용됩니다.

> **참고:** **참조:** 모든 RTCRtpSender는 {{domxref("RTCRtpTransceiver")}}를 구성하기 위해서 {{domxref("RTCRtpReceiver")}}와 함께 짝을 이룹니다. 관련이 있는 리시버는 원격 유저가 리시버에 하나 혹은 여러개의 스트림을 추가하지 않는 이상 mute 상태입니다. mute 상태에서는 패킷을 전달 할 수 없습니다.

### 예외처리

- `InvalidAccessError`
  - : 지정한 트랙 (혹은 모든 스트림)이 이미 {{domxref("RTCPeerConnection")}}의 일부임을 알려줍니다.
- `InvalidStateError`
  - : {{domxref("RTCPeerConnection")}}가 이미 종료되었음을 알려줍니다.

## 사용법

### 여러개의 스트림에 트랙 추가하기

`addTrack()` 메소드는 `track`과 `streams`을 매개변수로 받습니다. `track` 매개변수를 정의한 다음에, 하나 혹은 여러개의 {{domxref("MediaStream")}} 객체를 지정해서 트랙을 어디에 추가 할지 지정이 가능합니다. 이때, 스트림이 아니라 트랙만 다른 유저에게 전달됩니다. 스트림은 각 유저별로 특정되어있기 때문에, 하나 혹은 여러개의 스트림을 지정한다는 것은 트랙을 받는 유저가 연결의 다른 쪽에 해당하는 스트림을 자동으로 생성할 것이라는 뜻입니다. 그리고나서 받은 트랙을 자동으로 해당 스트림에 추가하게 됩니다.

#### 스트림이 없는 트랙

스트림을 명시하지 않으면, 해당 트랙은 **streamless** 상태입니다. 트랙을 어느 스트림에 추가 할지는 원격유저가 결정하지만, 이대로 사용해도 문제는 없습니다. **streamless** 트랙은 `addTrack()`을 가장 손쉽게 사용하는 방법으로, 하나의 스트림만 필요한 아주 간단한 어플케이션을 만드는데 사용됩니다. 예를 들자면,오디오와 비디오 트랙이 존재하는 단일 스트림을 원격 유저와 공유하고 싶은 경우, 어떤 스트림에 무슨 트랙이 있는지 관리 할 필요 없이 트랜시버 (transceiver)가 처리하도록 맡길 수 있습니다.

아래 예시는 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}를 사용해서 유저의 카메라와 마이크에서 스트림을 가져오는 함수입니다. 그리고 각각의 트랙에 대한 스트림을 지정하지 않고, 스트림에서 피어 연결로 각 트랙을 추가합니다:

```js
// 비동기 함수 정의
async openCall(pc) {
  // getUserMedia는 비동기적으로 처리됨
  const gumStream = await navigator.mediaDevices.getUserMedia(
                          {video: true, audio: true});
  for (const track of gumStream.getTracks()) {
    // 스트림을 따로 지정하지 않고, 트랙을 추가
    pc.addTrack(track);
  }
}
```

위 함수의 결과로 트랙 묶음이 스트림 없이 원격 유저에게 전달됩니다. 모든 트랙들이 동일한 스트림에 추가된다 하더라도, 원격 유저의 {{event("track")}}이벤트 핸들러가 각 트랙을 어느 스트림에 추가 할지를 결정합니다. {{domxref("RTCPeerConnection.ontrack", "ontrack")}} 핸들러는 아래와 같이 작성 될 수 있습니다:

```js
let inboundStream = null;

pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    if (!inboundStream) {
      inboundStream = new MediaStream();
      videoElem.srcObject = inboundStream;
    }
    inboundStream.addTrack(ev.track);
  }
};
```

여기서 `track` 이벤트 핸들러는 스트림을 명시한 경우, 이 이벤트에서 명시한 첫 번째 스트림에 트랙을 추가합니다. 그렇지 않은 경우에는 `ontrack`이 처음 호출되는 순간에 신규 스트림이 생성되고 비디오 엘리먼트에 부착된 다음에서야 트랙이 신규 스트림에 추가됩니다. 이때부터 신규 랙이 해당 스트림에 추가됩니다.

또한, 각각의 트랙을 받을 때 마다, 신규 스트림을 만들 수 있습니다:

```js
pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    let inboundStream = new MediaStream(track);
    videoElem.srcObject = inboundStream;
  }
};
```

#### 특정 스트림에 트랙 연동하기

스트림을 명시하고 {{domxref("RTCPeerConnection")}}가 스트림을 만들 수 있도록 허용하면, WebRTC 인프라에 의해 스트림의 트랙들이 자동으로 연동됩니다. 이는 트랜시버의 {{domxref("RTCRtpTransceiver.direction", "direction")}}를 변경하거나, {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}}를 사용해서 트랙을 멈추는 것도 포함합니다.

예를 들어, 아래의 함수는 어플리케이션이 {{domxref("RTCPeerConnection")}}를 통해 미디어 장치의 카메라 및 마이크 입력을 원격 유저에게 스트리밍을 시작하도록 사용 될 수 있습니다:

```js
async openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia(
                          {video: true, audio: true});
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track, gumStream);
  }
}
```

아래와 같이, 원격 유저는 {{event("track")}} 이벤트 핸들러를 사용 할 수 있습니다:

```js
pc.ontrack = ({streams: [stream]} => videoElem.srcObject = stream;
```

위의 코든 연결 인터페이스에 이미 추가 되었던 트랙을 가지고 있는 현재 스트림에 비디오 엘리먼트 설정합니다.

### 재사용되는 senders

이 메소드는 신규 `RTCRtpSender` 를 반환하거나, 아직 데이터를 송신하지 않은 이미 존재하던 호환 가능한 sender를 특정 조건아래 반환합니다. 호환성 및 재사용성이 있는 `RTCRtpSender` 인스턴스는 아래의 조건들을 만족해야합니다:

- sender와 이미 연동된 트랙이 없어야합니다.
- sender와 연동된 {{domxref("RTCRtpTransceiver")}}가 {{domxref("MediaStreamTrack")}}를 명시하는 {{domxref("RTCRtpReceiver.track", "track")}} 속성을 가지고 있습니다. 여기서 {{domxref("MediaStreamTrack")}}의 {{domxref("MediaStreamTrack.kind", "kind")}}는 `RTCPeerConnection.addTrack()`의 호출에서 발생하는 `track` 매개변수의 `kind`와 같습니다. 이 방법으로 트랜시버가 오디오랑 비디오를 동시에 처리하지 않고, 각각 처리하도록 보장 할 수 있습니다.
- `RTCRtpTransceiver`의 {{domxref("RTCRtpTransceiver.stopped", "stopped")}} 속성이 `false` 입니다.
- `RTCRtpSender`가 데이터를 한 번도 보낸적이 없는 것으로 간주됩니다. 만약 트랜시버의 {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}}가 한 번이라도 `"sendrecv"` 혹은 `"sendonly"`였다면, sender는 재사용이 불가능합니다.

위의 조건들을 모두 만족하게되면, sender가 재사용되어 이미 존재하던 `RTCRtpSender` 및 `RTCRtpTransceiver` 에 아래와 같은 변경사항이 적용됩니다:

- `RTCRtpSender`의 {{domxref("RTCRtpSender.track", "track")}}가 지정된 트랙으로 설정됩니다.
- 이 메소드의 `stream...`에 전달된 스트림 리스트에 sender에 부착되어있던 스트림들이 설정됩니다.
- 부착된 {{domxref("RTCRtpTransceiver")}}의 `currentDirection`이 업데이트된 전송 정보를 포함합니다. 현재 값이 `"recvonly"`였다면, `"sendrecv"`로 변하게되고, 현재 값이 `"inactive"`면, `"sendonly"`로 변하게됩니다.

### 신규 senders

재사용가능한 sender가 없으면, 신규 sender가 생성됩니다. 신규로 생성되면, 꼭 있어야하는 관련된 객체들도 생성됩니다. 이 과정에서 다음과 같은 변화가 발생합니다:

- 신규 `RTCRtpSender`가 지정된 `track` 및 `stream`(s)과 함께 만들어집니다.
- 신규{{domxref("RTCRtpReceiver")}}가 {{domxref("RTCRtpReceiver.track", "track")}} 속성으로 {{domxref("MediaStreamTrack")}} 가지도록 함께 만들어집니다. 이때, 트랙은 `addTrack()` 호출에서 매개변수로 지정된 트랙이 아닙니다. 이 트랙의 {{domxref("MediaStreamTrack.kind", "kind")}}는 입력 매개변수로 제공된 트랙의 `kind`와 일치하도록 설정됩니다.
- 신규 {{domxref("RTCRtpTransceiver")}}가 생성되고, 신규 sender 및 receiver에 부착됩니다.
- 신규 transceiver의 {{domxref("RTCRtpTransceiver.direction", "direction")}}는 `"sendrecv"`로 설정됩니다.
- 신규 transceiver는 `RTCPeerConnection`의 transceiver 세트에 추가됩니다.

## 예시

아래의 코드는 [Signaling and video calling](/ko/docs/Web/API/WebRTC_API/Signaling_and_video_calling) 문서에서 가져온 코드입니다. 이 코드는 `handleVideoOfferMsg()`메소드에서 제공되는 것으로, offer 메세지가 원격 유저에서 수신되면 호출됩니다.

```js
var mediaConstraints = {
  audio: true, // We want an audio track
  video: true, // ...and we want a video track
};

var desc = new RTCSessionDescription(sdp);

pc.setRemoteDescription(desc)
  .then(function () {
    return navigator.mediaDevices.getUserMedia(mediaConstraints);
  })
  .then(function (stream) {
    previewElement.srcObject = stream;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  });
```

위의 코드는 SDP를 원격 유저로부터 수신 받아서 신규 {{domxref("RTCSessionDescription")}}를 만들고 {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}로 전달합니다. `pc.setRemoteDescription(desc)`의 실행이 성공하게되면, {{domxref("MediaDevices.getUserMedia()")}}를 사용해서 로컬 유저의 웹캠과 마이크에 대한접근 권한을 얻습니다. 앞의 과정이 성공하게되면, 스트림은 {{HTMLElement("video")}} 엘리먼트를 위한 소스로 지정됩니다. 이 스트림은 `previewElement`변수를 통해 참조가 가능해집니다.

마지막으로 피어 연결을 통헤 caller에게 로컬 비디오 전달을 시작합니다. 이 과정은 {{domxref("MediaStream.getTracks()")}}에 의해 반환된 리스트를 iterate하고, 이들을 구성하는 `stream`과 함께 `addTrack()`에 전달되어 스트림에 각각의 트랙들을 추가합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [WebRTC](/ko/docs/Web/Guide/API/WebRTC)
- [Introduction to the Real-time Transport Protocol (RTP)](/ko/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCPeerConnection.ontrack")}}
- {{event("track")}}
