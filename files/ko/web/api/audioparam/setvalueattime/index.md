---
title: AudioParam.setValueAtTime()
slug: Web/API/AudioParam/setValueAtTime
tags:
  - API
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - setValueAtTime
browser-compat: api.AudioParam.setValueAtTime
---
{{ APIRef("Web Audio API") }}

{{domxref("AudioParam")}} 인터페이스의 `setValueAtTime()` 메서드는 {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}으로 측정된 정밀한 시간에 `AudioParam` 값의 즉각적인 변화를 예정합니다. 새로운 값은 value 매개변수에 주어집니다.

## 구문

```js
var AudioParam = AudioParam.setValueAtTime(value, startTime)
```

### 매개변수

- value
  - : AudioParam이 주어진 시간에 변화시킬 값을 나타내는 부동점 number.
- startTime
  - : {{domxref("AudioContext")}}가 처음 생성된 이후 값의 변화가 발생할 시간 (초로 표현함) 을 나타내는 double. 만약 이 값이 음수라면 {{jsxref("TypeError")}}가 발생합니다.

### 반환

이 `AudioParam` 객체에 대한 참조. 몇몇 브라우저에서 이 인터페이스의 오래된 구현은 void를 반환합니다.

## 예제

이 간단한 예제는 두 개의 제어 버튼을 가진 미디어 요소 소스 기능을 갖추고 있습니다 (소스 코드는 [webaudio-examples
repo](https://github.com/mdn/webaudio-examples/blob/master/audio-param/index.html)에서 볼 수 있고, [작동 예제](https://mdn.github.io/webaudio-examples/audio-param/)도 볼 수 있습니다). 버튼이 눌렸을 때, `currGain` 변수는 0.25만큼 증가하거나 감소하고, 그리고 나서 `setValueAtTime()` 메서드가 사용되어 지금으로부터 1초 후에 (`audioCtx.currentTime + 1`) gain 값을 `currGain` 과 같게 설정합니다.

```js
// 오디오 컨텍스트를 생성합니다
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// 예제를 위한 기본 변수를 설정합니다
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var targetAtTimePlus = document.querySelector('.set-target-at-time-plus');
var targetAtTimeMinus = document.querySelector('.set-target-at-time-minus');

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
targetAtTimePlus.onclick = function() {
  currGain += 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
}

targetAtTimeMinus.onclick = function() {
  currGain -= 0.25;
  gainNode.gain.setValueAtTime(currGain, audioCtx.currentTime + 1);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
