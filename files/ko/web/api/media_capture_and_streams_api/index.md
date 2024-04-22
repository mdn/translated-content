---
title: Media Capture and Streams API (미디어 스트림)
slug: Web/API/Media_Capture_and_Streams_API
---

{{DefaultAPISidebar("Media Capture and Streams")}}

**Media Streams API**, 짧게는 **MediaStream API**라고 불리는 **Media Capture and Streams API**는 오디오와 비디오 데이터 스트리밍을 지원하는 [WebRTC](/ko/docs/Web/API/WebRTC_API) 관련 API 입니다. 이 API는 미디어 스트림과 스트림을 구성하는 트랙, 데이터 형식과 관련된 제한인자, 데이터를 비동기적으로 사용할 때의 성공과 오류 콜백, 그리고 이 과정에서 발생하는 이벤트에 대한 인터페이스 및 메서드를 제공합니다.

## 개념 및 사용법

이 API는 오디오 혹은 비디오와 관련된 데이터를 나타내는 {{domxref("MediaStream")}} 객체 조작에 기반합니다.

`MediaStream`은 0개 이상의 {{domxref("MediaStreamTrack")}} 객체로 구성되며, 각자 다양한 오디오와 비디오 **트랙**을 나타냅니다. 각각의 `MediaStreamTrack`은 하나 이상의 **채널**을 가질 수 있습니다. 채널은, 오디오로 예를 들면 스테레오 오디오 트랙에서의 "왼쪽"과 "오른쪽"처럼, 미디어 스트림의 제일 작은 단위를 나타냅니다.

`MediaStream` 객체는 하나의 **입력**과 하나의 **출력**을 가집니다. {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}로 생성한 `MediaStream` 객체는 "로컬" 미디어 스트림이라고 부르며, 사용자의 카메라와 마이크 중 하나를 입력 출처로 사용합니다. 반면 {{htmlelement("video")}}, {{htmlelement("audio")}}와 같은 미디어 요소, 네트워크에서 들어오는 스트림, WebRTC {{domxref("RTCPeerConnection")}} API로 획득한 스트림, [Web Audio API](/ko/docs/Web/API/Web_Audio_API) {{domxref("MediaStreamAudioSourceNode")}}로 생성한 스트림 등은 비 로컬 `MediaStream`이라고 합니다.

`MediaStream` 객체의 출력은 **소비자**(컨슈머)로 연결됩니다. 소비자는 {{htmlelement("video")}}, {{htmlelement("audio")}}와 같은 미디어 요소, WebRTC {{domxref("RTCPeerConnection")}} API, [Web Audio API](/ko/docs/Web/API/Web_Audio_API) {{domxref("MediaStreamAudioSourceNode")}}가 가능합니다.

## 인터페이스

아래의 참고 문서에서는 Media Capture and Streams API를 구성하는 인터페이스에 대한 기초적인 지식을 찾을 수 있습니다.

- {{domxref("CanvasCaptureMediaStreamTrack")}}
- {{domxref("InputDeviceInfo")}}
- {{domxref("MediaDeviceKind")}}
- {{domxref("MediaDeviceInfo")}}
- {{domxref("MediaDevices")}}
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStreamTrackEvent")}}
- {{domxref("MediaTrackCapabilities")}}
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaTrackSettings")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("NavigatorUserMedia")}}
- {{domxref("NavigatorUserMediaError")}}
- {{domxref("OverconstrainedError")}}
- {{domxref("URL")}}

Media Capture and Streams API의 초기 명세는 {{domxref("MediaStreamTrack")}}에 기반한 별도의 `AudioStreamTrack`과 `VideoStreamTrack` 인터페이스를 포함했으며, 각자 오디오와 비디오 스트림을 따로 나타냈었습니다. 그러나 이런 구분은 더 이상 존재하지 않으며, 두 인터페이스를 사용하는 코드는 `MediaStreamTrack`을 직접 사용하도록 업데이트해야 합니다.

## 이벤트

- {{domxref("MediaStream/addtrack_event", "addtrack")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
- {{domxref("MediaStreamTrack/mute_event", "mute")}}
- {{domxref("MediaStreamTrack.overconstrained_event", "overconstrained")}}
- {{domxref("MediaStream/removetrack_event", "removetrack")}}
- {{domxref("MediaStreamTrack/unmute_event", "unmute")}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebRTC](/ko/docs/Web/API/WebRTC_API)
- {{domxref("mediaDevices.getUserMedia()")}}
