---
title: MediaStreamTrack.enabled
slug: Web/API/MediaStreamTrack/enabled
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`enabled`** 속성은 트랙이 소스 스트림을 렌더링 할 수 있으면 `true`, 아니면 `false`를 반환합니다. `enabled` 속성을 사용해 음소거 기능을 구현할 수 있습니다. 활성화된 경우 트랙의 데이터는 입력에서 목적지로 출력됩니다. 비활성 상태에서는 빈 프레임만 출력합니다.

오디오 트랙의 경우 비활성화 트랙이 생성하는 빈 프레임은 아무 소리도 없는 것, 즉 모든 샘플의 값이 0인 프레임이며, 비디오의 경우 모든 픽셀이 검은 프레임입니다.

사실, `enabled`의 값은 사용자가 트랙의 "음소거" 상태로 취급할 상태를 나타내며, {{domxref("MediaStreamTrack.muted", "muted")}} 속성은 전송 중 프레임 유실 등으로 인해 데이터를 출력할 수 없는 상태를 뜻합니다.

> **참고:** 트랙의 연결이 끊긴 후에도 `enabled` 값을 바꿀 수는 있지만 아무런 효과도 없습니다.

## 구문

```js
const enabledFlag = track.enabled;
track.enabled = [true | false];
```

### 값

`true`는 실제 미디어의 렌더링이 허용됨을 나타냅니다. `false`로 설정한 경우 빈 프레임만 생성합니다.

빈 오디오 프레임의 모든 샘플 값은 0입니다. 빈 비디오 프레임의 모든 픽셀은 완전한 검정입니다.

## 사용 일람

{{domxref("MediaStreamTrack")}}이 카메라의 비디오 입력을 나타내는 경우, 트랙의 `enabled`를`false`로 설정해 비활성화하면 카메라의 녹화 표시도 꺼집니다. 예를 들어, iMac과 MacBook의 카메라 옆에 존재하는 초록색 "사용 중" LED도 꺼집니다.

## 예제

다음 코드는 [`click`](/ko/docs/Web/API/Element/click_event) 이벤트 처리기를 사용해 일시정지를 구현합니다.

```js
pauseButton.onclick = function (evt) {
  const newState = !myAudioTrack.enabled;

  pauseButton.innerHTML = newState ? "&#x25B6;&#xFE0F;" : "&#x23F8;&#xFE0F;";
  myAudioTrack.enabled = newState;
};
```

## 명세

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [MediaStream API](/ko/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
- [WebRTC](/ko/docs/Web/API/WebRTC_API)
