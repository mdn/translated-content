---
title: AudioParam.linearRampToValueAtTime()
slug: Web/API/AudioParam/linearRampToValueAtTime
tags:
  - API
  - Audio
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - linearRampToValueAtTime
browser-compat: api.AudioParam.linearRampToValueAtTime
---
{{ APIRef("Web Audio API") }}

{{ domxref("AudioParam") }} 인터페이스의 `linearRampToValueAtTime()` 메서드는 `AudioParam` 의 값에 점진적인 선형 변화를 예정합니다. 변화는 _previous_ 이벤트에 명시된 시간에 시작해, 선형적인 ramp를 따라 `value` 매개변수에 주어진 새로운 값으로 향하고, `endTime` 매개변수에 주어진 시간에 새로운 값에 도달합니다.

## 구문

```js
var AudioParam = AudioParam.linearRampToValueAtTime(value, endTime)
```

### 매개변수

- value
  - : `AudioParam` 이 주어진 시간까지 ramp할 값을 나타내는 부동점 number.
- endTime
  - : ramping이 시작된 이후 값의 변화가 멈출 정확한 시간 (초로 표현됨) 을 나타내는 double.

### 반환

이 `AudioParam` 객체에 대한 참조. 몇몇 브라우저에서 이 인터페이스의 오래된 구현은 void를 반환합니다.

## 예제

이 예제에는 두 개의 제어 버튼을 가진 미디어 소스가 있습니다 (소스 코드는 [audio-param
repo](https://github.com/mdn/webaudio-examples/tree/master/audio-param)에서 볼 수 있고, [작동 예제](https://mdn.github.io/webaudio-examples/audio-param/)도 볼 수 있습니다). 이 버튼들이 눌렸을 때, `linearRampToValueAtTime()` 가 사용되어 각각 gain 값을 1.0까지, 그리고 0까지 서서히 사라지게(fade) 합니다. 비록 종종 {{
  domxref("AudioParam.exponentialRampToValueAtTime()") }}가 좀 더 자연스럽다고 여겨지긴 하지만 이것은 페이드 인/페이드 아웃 이펙트에 아주 유용합니다.

```js
// 오디오 컨텍스트를 생성합니다
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// 예제를 위한 기본 변수를 설정합니다
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var linearRampPlus = document.querySelector('.linear-ramp-plus');
var linearRampMinus = document.querySelector('.linear-ramp-minus');

// MediaElementAudioSourceNode를 생성합니다
// HTMLMediaElement를 노드 내로 전달합니다
var source = audioCtx.createMediaElementSource(myAudio);

// gain 노드를 생성하고 gain 값을 0.5로 설정합니다
var gainNode = audioCtx.createGain();

// AudioBufferSourceNode를 gainNode에 연결하고
// gainNode를 destination에 연결합니다
gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick이 발생했을 때 무언가를 하기 위해 버튼을 설정합니다
linearRampPlus.onclick = function() {
  gainNode.gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + 2);
}

linearRampMinus.onclick = function() {
  gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 2);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
