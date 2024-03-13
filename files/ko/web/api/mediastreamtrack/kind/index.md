---
title: MediaStreamTrack.kind
slug: Web/API/MediaStreamTrack/kind
---

{{APIRef("Media Capture and Streams")}}

**`MediaStreamTrack.kind`** 읽기 전용 속성은 트랙이 오디오인 경우 `"audio"`, 비디오인 경우 `"video"`인 {{domxref("DOMString")}}을 반환합니다. 트랙이 소스에서 분리된 경우엔 바뀌지 않습니다.

## 구문

```js
const type = track.kind;
```

### 값

{{domxref("DOMString")}}. 가능한 값은 다음과 같습니다.

- `"audio"`: 트랙이 오디오 트랙입니다.
- `"video"`: 트랙이 비디오 트랙입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [WebRTC](/ko/docs/Web/API/WebRTC_API)
