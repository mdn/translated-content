---
title: AudioNode.channelCount
slug: Web/API/AudioNode/channelCount
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - channelCount
browser-compat: api.AudioNode.channelCount
---
{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} 인터페이스의 **`channelCount`** 속성은 노드의 모든 입력에 대해 연결을 [업믹싱하거나 다운믹싱](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)할 때 얼마나 많은 채널이 사용될 지를 결정하기 위해 사용되는 integer를 나타냅니다.

`channelCount` 의 사용법과 정밀한 정의는 {{domxref("AudioNode.channelCountMode")}}의 값에 달려 있습니다.

- 만약 `channelCountMode` 값이 `max` 라면, channelCount는 무시됩니다.
- 만약 `channelCountMode` 값이 `clamped-max` 라면, channelCount는 최대 값으로서 사용됩니다.
- 만약 `channelCountMode` 값이 `explicit` 이라면, channelCount는 정확한 값으로서 사용됩니다.

## 구문

```js
var oscillator = audioCtx.createOscillator();
var channels = oscillator.channelCount;
```

### 값

integer.

## 예제

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCount;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
