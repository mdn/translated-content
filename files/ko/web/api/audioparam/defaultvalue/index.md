---
title: AudioParam.defaultValue
slug: Web/API/AudioParam/defaultValue
tags:
  - API
  - AudioParam
  - Property
  - Reference
  - Web Audio API
  - defaultValue
browser-compat: api.AudioParam.defaultValue
---
{{APIRef("Web Audio API")}}

{{ domxref("AudioParam") }} 인터페이스의 읽기 전용 **`defaultValue`** 속성은 `AudioParam` 을 생성하는 특정한 {{domxref("AudioNode")}}에 의해 정의되는 특성들의 초기 값을 나타냅니다.

## 구문

```js
var defaultVal = audioParam.defaultValue;
```

### 값

부동점 {{jsxref("Number")}}.

## 예제

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
const defaultVal = gainNode.gain.defaultValue;
console.log(defaultVal); // 1
console.log(defaultVal === gainNode.gain.value); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
