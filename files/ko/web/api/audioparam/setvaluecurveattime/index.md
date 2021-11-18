---
title: AudioParam.setValueCurveAtTime()
slug: Web/API/AudioParam/setValueCurveAtTime
tags:
  - API
  - Audio
  - AudioParam
  - Method
  - Reference
  - Web
  - Web Audio
  - Web Audio API
  - setValueCurveAtTime
browser-compat: api.AudioParam.setValueCurveAtTime
---
{{APIRef("Web Audio API")}}

{{domxref("AudioParam")}} 인터페이스의 **`setValueCurveAtTime()`** 메서드는 파라미터의 값이 값들의 리스트에 의해 정의되는 커브를 따라 변화하도록 예정합니다.

이 커브는 부동점 값들의 배열에서 정의되는 연속되는 값들 사이의 선형 보간인데, 이는 `startTime` 에 시작하는 주어진 구간과 특정한 기간에 맞도록 조정됩니다.

## 구문

```js
var paramRef = param.setValueCurveAtTime(values, startTime, duration);
```

### 매개변수

- `values`
  - : 명시된 `duration` 을 따라 {{domxref("AudioParam")}}이 변화할 값 커브를 나타내는 부동점 number들의 배열. 이 배열에 있는 모든 값은 반드시 유한한 숫자여야 합니다. 만약 값이 `NaN`, `Infinity`, `-Infinity` 라면, `TypeError` 예외가 발생합니다.
- `startTime`
  - : {{ domxref("AudioContext") }}가 처음 생성된 이후 값의 변화가 일어날 시간 (초 단위로 표현됨) 을 나타내는 double. 만약 이 값이 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}보다 작다면, 이 값은 `currentTime` 으로 맞춰집니다.
- `duration`
  - : 파라미터의 `value` 가 명시된 커브를 따라 변화하는 총 시간 (초 단위로 표현됨) 을 나타내는 double. 명시된 값들은 이 기간을 따라 동일하게 간격이 맞춰집니다.

### 반환 값

이 `AudioParam` 객체에 대한 참조. 이 인터페이스의 몇몇 오래된 브라우저 구현은 `undefined` 를 반환합니다.

### 예외

- `InvalidStateError` {{domxref("DOMException")}}
  - : `values` 의 명시된 배열이 원소를 2개보다 적게 가지고 있을 때 발생됩니다.
- `RangeError` {{domxref("DOMException")}}
  - : 명시된 `startTime` 이 음수 혹은 유한하지 않은 값이거나, `duration` 이 유한하지 않고 정확히 양수인 수가 아니면 발생됩니다.
- `TypeError` {{domxref("DOMException")}}
  - : `values` 배열에 있는 값들 중 한 개 이상의 값이 유한하지 않으면 발생됩니다. 유한하지 않은 값이란 `NaN`, `Infinity`, `-Infinity` 입니다.

## 사용 일람

파라미터의 값이 커브를 따라서 종료되었을 때, 파라미터의 값은 `values` 매개변수에서 명시된 값들의 집합의 마지막 값과 일치하도록 보장됩니다.

> **참고:** Web Audio API의 몇몇 이른 구현은 이것이 사실임을
> 보장하지 않는데, 이는 예기치 않은 결과를 유발합니다.

## 예제

이 예제는 하나의 버튼을 가진 미디어 소스를 가지고 있습니다 (소스 코드는 [webaudio-examples
repo](https://github.com/mdn/webaudio-examples/blob/master/audio-param/index.html)에서 볼 수 있고, [작동 예제](https://mdn.github.io/webaudio-examples/audio-param/)도 볼 수 있습니다). 이 버튼이 눌렸을 때, `setValueCurveAtTime()` 이 사용되어 gain 값을 waveArray 배열에 포함된 값들 사이에서 변화시킵니다.

```js
// 오디오 컨텍스트를 생성합니다
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// 예제를 위한 기본 변수를 설정합니다
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var valueCurve = document.querySelector('.value-curve');

// MediaElementAudioSourceNode를 생성합니다
// HTMLMediaElement를 노드 내로 전달합니다
var source = audioCtx.createMediaElementSource(myAudio);

// gain 노드를 생성하고 gain 값을 0.5로 설정합니다
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
var currGain = gainNode.gain.value;

// AudioBufferSourceNode를 gainNode에 연결하고
// gainNode를 destination에 연결합니다
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick이 발생했을 때 무언가를 하기 위해 버튼을 설정합니다

var waveArray = new Float32Array(9);
waveArray[0] = 0.5;
waveArray[1] = 1;
waveArray[2] = 0.5;
waveArray[3] = 0;
waveArray[4] = 0.5;
waveArray[5] = 1;
waveArray[6] = 0.5;
waveArray[7] = 0;
waveArray[8] = 0.5;

valueCurve.onclick = function() {
  gainNode.gain.setValueCurveAtTime(waveArray, audioCtx.currentTime, 2);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

Chrome 46 이전 버전은 선형 보간법 대신 최근린 내삽법을 사용합니다.

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
