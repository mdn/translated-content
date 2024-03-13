---
title: AnalyserNode()
slug: Web/API/AnalyserNode/AnalyserNode
---

{{APIRef("'Web Audio API'")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`AnalyserNode()`** 생성자는 새로운 {{domxref("AnalyserNode")}} 객체 인스턴스를 생성합니다.

## 구문

```js
var analyserNode = new AnalyserNode(context, ?options);
```

### 매개변수

_{{domxref("AudioNodeOptions")}} dictionary로부터 매개변수를 상속받습니다._

- _context_
  - : {{domxref("AudioContext")}} 또는 {{domxref("OfflineAudioContext")}}에의 참조.
- _options_ {{optional_inline}}
  - : \* **`fftSize`**: [주파수 영역](https://en.wikipedia.org/wiki/Frequency_domain) 분석에 대한 [FFT](https://en.wikipedia.org/wiki/Fast_Fourier_transform)의 원하는 초기 사이즈.
    기본값은 `2048`입니다.
    - **`maxDecibels`**: FFT 분석에 대한 [dB](https://en.wikipedia.org/wiki/Decibel)단위로의 원하는 초기 최대 power.
      기본값은 `-30`입니다.
    - **`minDecibels`**: FFT 분석에 대한 dB단위로의 원하는 초기 최소 power.
      기본값은 `-100`입니다.
    - **`smoothingTimeConstant`**: FFT 분석에 대한 원하는 초기 smoothing 상수. 기본값은 `0.8`입니다.

### 반환 값

새로운 {{domxref("AnalyserNode")}} 객체 인스턴스.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("BaseAudioContext.createAnalyser()")}}, 동등한 팩토리 메서드
