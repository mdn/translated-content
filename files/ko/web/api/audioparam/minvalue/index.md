---
title: AudioParam.minValue
slug: Web/API/AudioParam/minValue
tags:
  - API
  - Audio
  - AudioParam
  - Property
  - Reference
  - Web Audio API
  - minValue
browser-compat: api.AudioParam.minValue
---
{{APIRef("Web Audio API")}}

{{domxref("AudioParam")}} 인터페이스의 읽기 전용 **`minValue`** 속성은 파라미터의 명목상의 (효과적인) 범위에 대한 최소로 가능한 값을 나타냅니다.

## 구문

```js
var minVal = audioParam.minValue;
```

### 값

파라미터의 명목상의 범위에 대해 허용되는 최소 값을 나타내는 부동점 {{jsxref("Number")}}.

`minValue` 의 기본 값은 최소 음수 단일 정밀도 부동점 값(-340,282,346,638,528,859,811,704,183,484,516,925,440)입니다.

## 예제

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
console.log(gainNode.gain.minValue); // -3.4028234663852886e38
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("AudioParam.maxValue")}}
