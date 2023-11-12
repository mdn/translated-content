---
title: MediaStreamTrack
slug: Web/API/MediaStreamTrack
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack`** 인터페이스는 스트림 내의 단일 미디어 트랙을 나타냅니다. 보통 오디오와 비디오 트랙이지만, 다른 종류도 존재할 수 있습니다.

## 속성

`MediaStreamTrack`은 다음에 나열된 속성 외에도 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}로 설정하고 {{domxref("MediaStreamTrack.getConstraints", "getConstraints()")}}와 {{domxref("MediaStreamTrack.getSettings", "getSettings()")}}로 접근 가능한 제약 속성을 가집니다. [기능, 제약, 설정](/ko/docs/Web/API/Media_Streams_API/Constraints) 문서를 방문해 제약 속성을 다루는 법을 알아보세요. 올바르게 다루지 않으면 불안정한 코드를 낳을 수 있습니다.

- {{domxref("MediaStreamTrack.contentHint")}}
  - : 트랙 유형에 대한 힌트를 제공하는 문자열입니다. 웹 애플리케이션이 트랙의 처리 방식을 결정할 때 사용할 수 있습니다.
- {{domxref("MediaStreamTrack.enabled")}}
  - : 트랙을 활성화, 즉 미디어 출처 스트림의 렌더링을 허용하면 `true`이고 비활성화, 즉 미디어 소스 스트림 렌더링을 허용하지 않아 검은 화면과 조용함만 확인할 수 있으면 `false`인 속성입니다. 트랙의 연결이 끊긴 경우에도 값을 바꿀 수는 있으나 아무런 효과도 없습니다.> **참고:** 일반적인 "음소거" 기능은 `enabled`를 `false`로 바꿔서 구현할 수 있습니다. `muted` 속성은 기술적인 문제로 인해 미디어가 존재하지 않을 때를 나타냅니다.
- {{domxref("MediaStreamTrack.id")}} {{readonlyInline}}
  - : 트랙의 고유 식별자(GUID)를 담은 {{domxref("DOMString")}}을 반환합니다. 고유 식별자는 브라우저가 생성합니다.
- {{domxref("MediaStreamTrack.isolated")}} {{ReadOnlyInline}}
  - : 트랙이 **고립**된 경우 `true`인 속성입니다. 고립 상태란 해당 `MediaStreamTrack`을 소유한 문서에서 트랙에 접근할 수 없을 때를 의미합니다. {{domxref("MediaStreamTrack.peerIdentity", "peerIdentity")}} 속성이 설정된 경우, 그리고 트랙의 소스가 교차 출처에 위치하는 경우 발생합니다.
- {{domxref("MediaStreamTrack.kind")}} {{readonlyInline}}
  - : 오디오 트랙인 경우 `"audio"`, 비디오 트랙인 경우 `"video"`인 {{domxref("DOMString")}}을 반환합니다. 트랙이 소스에서 분리된 경우 변하지 않습니다.
- {{domxref("MediaStreamTrack.label")}} {{readonlyInline}}
  - : 트랙 소스에 대해 사용자 에이전트가 할당한 식별자를 담은 {{domxref("DOMString")}}을 반환합니다. 식별자의 예시는 `"internal microphone"`입니다. 빈 문자열일 수 있으며, 연결된 소스가 없는 경우 계속 빈 문자열로 남아 있습니다. 트랙이 소스에서 분리되더라도 식별자는 변하지 않습니다.
- {{domxref("MediaStreamTrack.muted")}} {{readonlyInline}}
  - : 기술적인 문제로 인해 트랙이 미디어 데이터를 제공할 수 없음을 나타내는 불리언 값을 반환합니다.> **참고:** 일반적인 "음소거" 기능은 `enabled`를 `false`로 바꿔서 구현할 수 있으며, 음소거 해제는 `enabled`를 다시 `true`로 바꾸면 됩니다.
- {{domxref("MediaStreamTrack.readonly")}} {{readonlyInline}}
  - : 읽기 전용 트랙(비디오 파일 소스, 설정을 바꿀 수 없는 카메라 등)인 경우 `true`를 반환합니다. 그 외의 경우 `false`를 반환합니다.
- {{domxref("MediaStreamTrack.readyState")}} {{readonlyInline}}
  - : 트랙의 상태를 나타내는 열거형 값을 반환합니다. 가능한 값은 다음과 같습니다.\* `"live"`는 입력이 연결됐으며 실시간 데이터를 제공하고 있음을 나타냅니다. 이때, {{domxref("MediaStreamTrack.enabled", "enabled")}} 특성을 사용해 데이터 출력을 켜거나 끌 수 있습니다.
    - `"ended"`는 입력이 더 이상 데이터를 전달하지 않고 있으며, 앞으로도 새로운 데이터를 제공하지 않을 것임을 나타냅니다.

<dl class="hidden"><dt>{{domxref("MediaStreamTrack.remote")}} {{readonlyInline}} {{deprecated_inline}}</dt><dd>Returns a Boolean with a value of <code>true</code> if the track is sourced by a {{domxref("RTCPeerConnection")}}, <code>false</code> otherwise.</dd></dl>

## 메서드

- {{domxref("MediaStreamTrack.applyConstraints()")}}
  - : 애플리케이션이 `MediaStreamTrack`에 사용 가능한 제약 속성을 원하는 값과 범위로 지정할 수 있는 메서드입니다.
- {{domxref("MediaStreamTrack.clone()")}}
  - : `MediaStreamTrack`의 복제본을 반환합니다.
- {{domxref("MediaStreamTrack.getCapabilities()")}}
  - : `MediaStreamTrack`에 사용 가능한 제약 속성을 반환합니다.
- {{domxref("MediaStreamTrack.getConstraints()")}}
  - : `MediaStreamTrack`에 현재 지정된 제약을 담은 {{domxref('MediaTrackConstraints')}} 객체를 반환합니다. 이전에 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}}로 설정한 값과 동일합니다.
- {{domxref("MediaStreamTrack.getSettings()")}}
  - : `MediaStreamTrack`에 현재 지정된 제약 속성 각각의 값을 담은 {{domxref("MediaTrackSettings")}} 객체를 반환합니다.
- {{domxref("MediaStreamTrack.stop()")}}
  - : 트랙에 연결된 소스의 재생을 중단하고, 서로 분리합니다. 트랙의 상태는 `ended`로 변경합니다.

## 이벤트

다음 이벤트는 `MediaStreamTrack`의 {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 사용하거나 `oneventname` 속성을 사용해 수신할 수 있습니다.

- [`ended`](/ko/docs/Web/API/MediaStreamTrack/ended_event)
  - : 트랙의 플레이백이 끝났을 때, 즉 {{domxref("MediaStreamTrack.readyState", "readyState")}}의 값이 `ended`로 변했을 때 발생합니다.
    [`onended`](/ko/docs/Web/API/MediaStreamTrack/onended) 이벤트 처리기 속성으로도 수신할 수 있습니다.
- [`mute`](/ko/docs/Web/API/MediaStreamTrack/mute_event)
  - : 기술적인 이유(네트워크 문제 등)로 인해 일시적으로 트랙이 데이터를 제공하지 못할 때, 즉 {{domxref("MediaStreamTrack.muted", "muted")}}의 값이 `true`로 변했을 때 발생합니다.
    [`onmute`](/ko/docs/Web/API/MediaStreamTrack/onmute) 이벤트 처리기 속성으로도 수신할 수 있습니다.
- [`isolationchange`](/ko/docs/Web/API/MediaStreamTrack/isolationchange_event)
  - : 문서가 트랙에 대한 접근 권한을 얻거나 잃었을 때, 즉 {{domxref("MediaStreamTrack.isolated", "isolated")}}의 값이 변할 때 발생합니다.
    [`onisolationchange`](/ko/docs/Web/API/MediaStreamTrack/onisolationchange) 이벤트 처리기 속성으로도 수신할 수 있습니다.
- [`unmute`](/ko/docs/Web/API/MediaStreamTrack/unmute_event)
  - : 데이터를 다시 사용할 수 있어서 `muted` 상태가 끝날 때 발생합니다.
    [`onunmute`](/ko/docs/Web/API/MediaStreamTrack/onunmute) 이벤트 처리기 속성으로도 수신할 수 있습니다.

<dl class="hidden"><dt><code><a href="/ko/docs/Web/API/MediaStreamTrack/overconstrained_event">overconstrained</a></code> {{deprecated_inline}}</dt><dd>지정한 제약이 트랙과 호환되지 않아서 해당 제약을 무시할 때 발생합니다.<br><code><a href="/ko/docs/Web/API/MediaStreamTrack/onoverconstrained">onoverconstrained</a></code> 이벤트 처리기 속성으로도 수신할 수 있습니다.</dd></dl>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Media Capture and Streams API](/ko/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStream")}}
