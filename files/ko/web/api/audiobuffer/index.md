---
title: AudioBuffer
slug: Web/API/AudioBuffer
tags:
  - API
  - AudioBuffer
  - Interface
  - Reference
  - Web Audio API
browser-compat: api.AudioBuffer
---
{{APIRef("Web Audio API")}}

**`AudioBuffer`** 인터페이스는 메모리에 상주하는 짧은 오디오 에셋을 나타내는데, 이는 {{ domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()") }} 메서드를 사용하여 오디오 파일로부터 생성되거나, {{ domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()") }}를 사용하여 가공되지 않은(raw) 데이터로부터 생성될 수 있습니다. 한 번 AudioBuffer에 입력되고 나면, 이 오디오는 {{ domxref("AudioBufferSourceNode") }}에 전달됨으로써 재생될 수 있습니다.

이 유형의 객체는 작은 오디오 스니펫을 붙잡기 위해 설계되었고, 보통 45초보다 작습니다. 더 긴 사운드에 대해서는, {{domxref("MediaElementAudioSourceNode")}}를 구현하는 객체가 더욱 적합합니다. 버퍼는 데이터를 다음의 포맷으로 포함합니다. non-interleaved IEEE754 32비트 선형 PCM이며, 명목상의 범위는 `-1` 과 `+1` 사이입니다. 즉, 32비트 부동 소수점 버퍼이고, 각 샘플은 -1.0과 1.0사이에 있습니다. 만약 {{domxref("AudioBuffer")}}가 다수의 채널을 가지고 있다면, 이 채널들은 별도의 버퍼에 저장됩니다.

## 생성자

- {{domxref("AudioBuffer.AudioBuffer", "AudioBuffer()")}}
  - : 새로운 `AudioBuffer` 객체 인스턴스를 생성하고 반환합니다.

## 속성

- {{domxref("AudioBuffer.sampleRate")}} {{readonlyInline}}
  - : 버퍼에 저장된 PCM 데이터의 샘플 레이트를 초당 샘플로 나타내는 float을 반환합니다.
- {{domxref("AudioBuffer.length")}} {{readonlyInline}}
  - : 버퍼에 저장된 PCM 데이터의 길이를 샘플 프레임으로 나타내는 integer를 반환합니다.
- {{domxref("AudioBuffer.duration")}} {{readonlyInline}}
  - : 버퍼 내에 저장된 PCM 데이터의 재생 길이를 초로 나타내는 double을 반환합니다.
- {{domxref("AudioBuffer.numberOfChannels")}} {{readonlyInline}}
  - : 버퍼 내에 저장된 PCM 데이터에 의해 기술되는 개별 오디오 채널의 수를 나타내는 integer를 반환합니다.

## 메서드

- {{domxref("AudioBuffer.getChannelData()")}}
  - : 채널과 연관된 PCM 데이터를 포함하고 있는 {{jsxref("Float32Array")}}를 반환하는데, 이 채널은 `channel` 매개변수에 의해 정의됩니다 (`0` 은 첫번째 채널을 나타냅니다).
- {{domxref("AudioBuffer.copyFromChannel()")}}
  - : `AudioBuffer` 의 명시된 채널로부터 `destination` 배열에 샘플을 복제합니다.
- {{domxref("AudioBuffer.copyToChannel()")}}
  - : `source` 배열로부터, `AudioBuffer` 의 명시된 채널에 샘플을 복제합니다.

## 예제

다음의 간단한 예제는 어떻게 `AudioBuffer` 를 생성하고 무작위 백색소음으로 `AudioBuffer` 를 채우는지 보여줍니다. 전체 소스 코드는 [webaudio-examples](https://github.com/mdn/webaudio-examples) 레포지토리에서 찾을 수 있고, [작동 예제](https://mdn.github.io/webaudio-examples/audio-buffer/)도 볼 수 있습니다.

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// AudioContext의 샘플 레이트를 가지는 빈 3초짜리 스테레오 버퍼를 생성합니다.
var myArrayBuffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 3, audioCtx.sampleRate);

// 버퍼를 백색소음으로 채웁니다
// 단순히 -1.0과 1.0사이의 무작위 값
for (var channel = 0; channel < myArrayBuffer.numberOfChannels; channel++) {
  // 이는 데이터를 포함하고 있는 실제 배열을 줍니다
  var nowBuffering = myArrayBuffer.getChannelData(channel);
  for (var i = 0; i < myArrayBuffer.length; i++) {
    // Math.random()은 [0, 1.0]에 있습니다
    // 오디오는 [-1.0, 1.0]에 있을 필요가 있습니다
    nowBuffering[i] = Math.random() * 2 - 1;
  }
}

// AudioBufferSourceNode를 얻습니다.
// 이것이 AudioBuffer를 재생하기를 원할 때 사용할 AudioNode입니다
var source = audioCtx.createBufferSource();

// AudioBufferSourceNode에 버퍼를 설정합니다
source.buffer = myArrayBuffer;

// AudioBufferSourceNode를 목적지에
// 연결해 소리가 나오게 합니다
source.connect(audioCtx.destination);

// 소스 재생을 시작합니다
source.start();
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
