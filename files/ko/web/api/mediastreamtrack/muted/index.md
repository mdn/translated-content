---
title: MediaStreamTrack.muted
slug: Web/API/MediaStreamTrack/muted
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 인터페이스의 **`muted`** 읽기 전용 속성은 트랙이 현재 미디어 출력을 제공할 수 없는 상태인지를 나타내는 {{jsxref("Boolean")}}을 반환합니다.

> **참고:** 사용자가 트랙을 음소거할 수 있는 기능을 구현하려면 {{domxref("MediaStreamTrack.enabled", "enabled")}} 속성을 사용하세요. `enabled`를 `false`로 바꿔 트랙을 비활성하면 빈 프레임(모든 샘플이 0인 오디오 프레임, 모든 픽셀이 검은색인 비디오 프레임)만 생성합니다.

## 구문

```js
const mutedFlag = track.muted;
```

### 값

트랙이 중단된 상태면 `true`, 아니면 `false`.

> **참고:** 되도록이면 트랙의 중단 상태를 알기 위해 `muted`를 폴링 하는 것보다는 {{event("mute")}}와 {{event("unmute")}} 이벤트를 수신하세요.

## 예제

다음 예제 코드는 {{domxref("MediaStreamTrack")}} 배열에서 중단된 트랙의 수를 셉니다.

```js
let mutedCount = 0;

trackList.forEach((track) => {
  if (track.muted) {
    mutedCount += 1;
  }
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
