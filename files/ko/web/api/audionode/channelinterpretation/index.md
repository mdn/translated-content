---
title: AudioNode.channelInterpretation
slug: Web/API/AudioNode/channelInterpretation
---

{{ APIRef("Web Audio API") }}

{{domxref("AudioNode")}} 인터페이스의 **`channelInterpretation`** 프로퍼티는 입력/출력 채널의 수가 다를 때 입력 채널이 출력 채널에 매핑되는 방법을 기술하는 열거형 값을 나타냅니다. 예를 들어, 이 설정은 모노 입력이 어떻게 스테레오 또는 5.1 채널 출력으로 업믹스될 것인지를 정의하거나, 어떻게 쿼드 채널 입력이 스테레오 또는 모노 출력으로 다운믹스될 것인지를 정의합니다.

이 프로퍼티에는 두 가지 옵션이 있습니다. `speakers` 와 `discrete` 입니다. 이 옵션들은 [Web Audio API의 기본 개념 > 업믹싱과 다운믹싱](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)에 기록되어 있습니다.

## 구문

```js
var oscillator = audioCtx.createOscillator();
oscillator.channelInterpretation = "discrete";
```

### 값

이 값들은 [Web Audio API의 기본 개념 > 업믹싱과 다운믹싱](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)에 기록되어 있습니다.

요약하자면,

- `speakers`
  - : 일반적인 스피커 입력과 출력 설정 (모노, 스테레오, quad, 5.1) 의 조합에 대한 "표준" 매핑의 집합을 사용합니다. 예를 들어, 이 설정으로 모노 채널 입력은 스테레오 출력의 양 채널 모두에 출력될 것입니다.
- `discrete`
  - : 입력 채널은 출력 채널에 순서대로 매핑됩니다. 만약 출력하는 더 많은 입력이 있다면, 추가적인 입력은 탈락됩니다. 만약 입력이 더 적다면 사용되지 않는 출력은 소리나지 않습니다.

## 예제

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelInterpretation = "discrete";
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
