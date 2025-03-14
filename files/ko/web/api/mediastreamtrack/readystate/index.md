---
title: MediaStreamTrack.readyState
slug: Web/API/MediaStreamTrack/readyState
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.readyState`** 읽기 전용 속성은 트랙의 상태를 나타내는 열거형 값을 반환합니다.

## 구문

```js
const state = track.readyState;
```

### 값

다음의 두 값 중 하나입니다.

- `"live"`는 입력이 연결됐으며 트랙이 실시간 데이터를 받는 중임을 나타냅니다. 이 때, 데이터 출력은 {{domxref("MediaStreamTrack.enabled")}} 속성을 사용해 켜거나 끌 수 있습니다.
- `"ended"`는 입력이 더 이상 데이터를 제공하지 않으며 앞으로도 새로운 데이터를 제공하지 않을 것임을 나타냅니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebRTC](/ko/docs/Web/API/WebRTC_API)
- {{domxref("MediaStreamTrack.onended")}}
