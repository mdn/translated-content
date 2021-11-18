---
title: AudioParam.maxValue
slug: Web/API/AudioParam/maxValue
tags:
  - API
  - Audio
  - AudioParam
  - Property
  - Reference
  - Web Audio API
  - maxValue
browser-compat: api.AudioParam.maxValue
---
{{APIRef("Web Audio API")}}

{{domxref("AudioParam")}} 인터페이스의 읽기 전용 **`maxValue`** 속성은 파라미터의 명목상의 (효과적인) 범위에 대해 최대로 가능한 값을 나타냅니다.

## 구문

```js
var maxVal = audioParam.maxValue;
```

### 값

매개변수의 명목상의 범위에 대해 허용되는 최대 값을 나타내는 부동점 {{jsxref("Number")}}.

`maxValue` 의 기본 값은 최대 양수 단일 정밀도 부동점 값(+340,282,346,638,528,859,811,704,183,484,516,925,440)입니다.

## 예제

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.maxValue); // 3.4028234663852886e38
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("AudioParam.minValue")}}
