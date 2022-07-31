---
title: AudioParam.cancelScheduledValues()
slug: Web/API/AudioParam/cancelScheduledValues
tags:
  - API
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - cancelScheduledValues
browser-compat: api.AudioParam.cancelScheduledValues
---
{{ APIRef("Web Audio API") }}

{{ domxref("AudioParam") }} 인터페이스의 `cancelScheduledValues()` 메서드는 `AudioParam` 에 예정된 모든 미래의 변화를 취소합니다.

## 구문

```js
var AudioParam = AudioParam.cancelScheduledValues(startTime)
```

### 매개변수

- startTime
  - : {{ domxref("AudioContext") }}가 처음 생성된 이후 모든 예정된 변화가 취소될 시간 (초 단위로 표현됨) 을 나타내는 double.

### 반환

이 `AudioParam` 객체에 대한 참조. 몇몇 오래된 구현에서 이 메서드는 void를 반환합니다.

## 예제

```js
var gainNode = audioCtx.createGain();
gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2); // 'gain' 이 AudioParam입니다.
gainNode.gain.cancelScheduledValues(audioCtx.currentTime);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
