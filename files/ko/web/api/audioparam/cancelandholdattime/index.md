---
title: AudioParam.cancelAndHoldAtTime()
slug: Web/API/AudioParam/cancelAndHoldAtTime
tags:
  - API
  - Audio
  - AudioParam
  - Experimental
  - Method
  - Reference
  - Web Audio API
  - cancelAndHoldAtTime
  - cancelValuesAndHoldAtTime
browser-compat: api.AudioParam.cancelAndHoldAtTime
---
{{APIRef("Web Audio API")}}

{{domxref("AudioParam")}} 인터페이스의 **`cancelAndHoldAtTime()`** 속성은 `AudioParam` 에 예정된 모든 미래의 변화를 취소하지만 다른 메서드를 사용하여 추가적인 변화가 만들어지기 전까지 주어진 시간에서 `AudioParam` 의 값을 유지합니다.

## 구문

```js
var audioParam = AudioParam.cancelAndHoldAtTime(cancelTime)
```

### 매개변수

- cancelTime
  - : [`AudioContext`](/ko/docs/Web/API/AudioContext "AudioContext는 이벤트의 대상이 될 수 있으므로, AudioContext는 EventTarget 인터페이스를 구현합니다.") 가 처음 생성된 이후 모든 예정된 변화가 취소될 시간 (초 단위로 표현됨) 을 나타내는 double.

### 반환 값

이 메서드가 호출된 {{domxref("AudioParam")}}에 대한 참조.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
