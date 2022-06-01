---
title: AudioNode.channelCountMode
slug: Web/API/AudioNode/channelCountMode
tags:
  - API
  - AudioNode
  - Property
  - Reference
  - Web Audio API
  - channelCountMode
browser-compat: api.AudioNode.channelCountMode
---
{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} 인터페이스의 `channelCountMode` 프로퍼티는 노드의 입력과 출력 사이에서 채널들이 반드시 일치되어야만 하는 방법을 기술하는 열거형 값을 나타냅니다.

`channelCountMode` 의 가능한 값과 그 의미는 다음과 같습니다.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">값</th>
      <th scope="col">설명</th>
      <th scope="col">
        다음의 <code>AudioNode</code> 자식들은 이것이 기본값입니다
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>max</code></td>
      <td>
        채널의 수는 모든 연결의 최대 채널의 수와 같습니다. 이 경우, <code>channelCount</code>는 무시되고 오직 업믹싱이 일어납니다.
      </td>
      <td>
        {{domxref("GainNode")}}, {{domxref("DelayNode")}},
        {{domxref("ScriptProcessorNode")}},
        {{domxref("ChannelMergerNode")}},
        {{domxref("BiquadFilterNode")}},
        {{domxref("WaveShaperNode")}}
      </td>
    </tr>
    <tr>
      <td><code>clamped-max</code></td>
      <td>
        채널의 수는 모든 연결의 최대 채널 수와 같은데, <code>channelCount</code>의 값에 고정됩니다.
      </td>
      <td>
        {{domxref("PannerNode")}}, {{domxref("ConvolverNode")}},
        {{domxref("DynamicsCompressorNode")}}
      </td>
    </tr>
    <tr>
      <td><code>explicit</code></td>
      <td>
        채널의 수는 <code>channelCount</code>의 값에 의해 정의됩니다.
      </td>
      <td>
        {{domxref("AudioDestinationNode")}},
        {{domxref("AnalyserNode")}},
        {{domxref("ChannelSplitterNode")}}
      </td>
    </tr>
  </tbody>
</table>

> **참고:** 명세서의 구 버전에서는, {{domxref("ChannelSplitterNode")}}의 기본값은 max였습니다.

## 구문

```js
var oscillator = audioCtx.createOscillator();
oscillator.channelCountMode = 'explicit';
```

### 값

[channelCountMode](https://webaudio.github.io/web-audio-api/#idl-def-ChannelCountMode)를 나타내는 열거형 값.

## 예제

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.channelCountMode = 'explicit';
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
