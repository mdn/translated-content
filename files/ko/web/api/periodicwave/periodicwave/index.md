---
title: PeriodicWave()
slug: Web/API/PeriodicWave/PeriodicWave
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 **`PeriodicWave()`** 생성자는 새로운 {{domxref("PeriodicWave")}} 객체 인스턴스를 생성합니다.

## 구문

```js
var myWave = new PeriodicWave(context, options);
```

### 매개변수

_{{domxref("AudioNodeOptions")}} dictionary로부터 매개변수를 상속받습니다_.

- `context`
  - : 여러분이 노드가 관련되기를 바라는 오디오 컨텍스트를 나타내는 {{domxref("BaseAudioContext")}}
- `options` {{optional_inline}}
  - : 여러분이 `PeriodicWave`가 가지기를 바라는 속성들을 정의하는 [`PeriodicWaveOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveOptions) dictionary 객체 (이것은 또한 [PeriodicWaveConstraints](https://webaudio.github.io/web-audio-api/#idl-def-PeriodicWaveConstraints)
    dictionary에 정의된 옵션들도 상속받습니다.):\* `real`: 여러분이 파동을 형성하기 위해 사용하기를 원하는 코사인 항을 포함하는 {{domxref("Float32Array")}} ({{domxref("BaseAudioContext.createPeriodicWave")}}의 `real` 매개변수와 동일)
    - `imag`: 여러분이 파동을 형성하기 위해 사용하기를 원하는 사인 항을 포함하는 {{domxref("Float32Array")}} ({{domxref("BaseAudioContext.createPeriodicWave")}}의 `imag` 매개변수와 동일)

### 반환 값

새로운 {{domxref("PeriodicWave")}} 객체 인스턴스.

## 예제

```js
var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

var options = {
  real: real,
  imag: imag,
  disableNormalization: false,
};

var wave = new PeriodicWave(ac, options);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
