---
title: BaseAudioContext
slug: Web/API/BaseAudioContext
---

{{APIRef("Web Audio API")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API)의 `BaseAudioContext` 인터페이스는 {{domxref("AudioContext")}} 와 {{domxref("OfflineAudioContext")}}에 의해 표현되는 온라인과 오프라인 오디오 프로세싱 그래프에 대한 기본 정의로 작동합니다. `BaseAudioContext`는 직접적으로 사용될 수 없습니다. 대신 위에서 언급한 두 상속 인터페이스를 통해 `BaseAudioContext`의 기능을 사용할 수 있습니다.

`BaseAudioContext`는 이벤트의 타겟이 될 수 있는데, 따라서 이것은 {{domxref("EventTarget")}} 인터페이스를 구현합니다.

{{InheritanceDiagram}}

## 속성

- {{domxref("BaseAudioContext.audioWorklet")}} {{experimental_inline}} {{readonlyInline}} {{securecontext_inline}}
  - : {{domxref("AudioWorklet")}} 객체를 반환하는데, 이는 {{domxref("AudioWorkletProcessor")}} 인터페이스를 구현하는 JavaScript 코드가 오디오 데이터를 처리하기 위해 백그라운드에서 실행되는 {{domxref("AudioNode")}}들을 생성하고 관리하는 데 쓰일 수 있습니다.
- {{domxref("BaseAudioContext.currentTime")}} {{readonlyInline}}
  - : 스케쥴링에 사용되는 초 단위로 계속 증가하는 하드웨어 시간을 나타내는 double을 반환합니다. 이는 `0`에서 시작합니다.
- {{domxref("BaseAudioContext.destination")}} {{readonlyInline}}
  - : 컨텍스트 내의 모든 오디오의 최종 도착지를 나타내는 {{domxref("AudioDestinationNode")}}를 반환합니다. 이것은 오디오를 렌더링하는 장치로 생각될 수 있습니다.
- {{domxref("BaseAudioContext.listener")}} {{readonlyInline}}
  - : 3D 공간화에 사용되는 {{domxref("AudioListener")}} 객체를 반환합니다.
- {{domxref("BaseAudioContext.sampleRate")}} {{readonlyInline}}
  - : 이 컨텍스트 내의 모든 노드에 의해 사용되는 샘플 레이트(초당 샘플)를 나타내는 float을 반환합니다. {{domxref("AudioContext")}}의 샘플 레이트는 변경될 수 없습니다.
- {{domxref("BaseAudioContext.state")}} {{readonlyInline}}
  - : `AudioContext`의 현재 상태를 반환합니다.

### 이벤트 처리기

- {{domxref("BaseAudioContext.statechange_event", "statechange")}}
  - : statechange 유형의 이벤트가 발생되었을 때 실행되는 이벤트 처리기입니다. 이것은 상태 변화 메서드({{domxref("AudioContext.suspend")}}, {{domxref("AudioContext.resume")}}, 또는 {{domxref("AudioContext.close")}}) 중 하나의 호출에 기인해 `AudioContext`의 상태가 변경되었을 때 발생됩니다.

## 메서드

_또한 {{domxref("EventTarget")}} 인터페이스로부터의 메서드를 구현합니다._

- {{domxref("BaseAudioContext.createAnalyser()")}}
  - : 오디오 시간과 주파수 데이터를 드러내고 데이터 시각화를 생성하는 데 사용될 수 있는 {{domxref("AnalyserNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createBiquadFilter()")}}
  - : high-pass, low-pass, band-pass와 같은 몇몇 다른 흔한 필터 유형으로 설정 가능한 2차 필터를 나타내는 {{domxref("BiquadFilterNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createBuffer()")}}
  - : 데이터를 넣거나 {{ domxref("AudioBufferSourceNode") }}를 통해 재생될 수 있는 새로운 빈 {{ domxref("AudioBuffer") }} 객체를 생성합니다.
- {{domxref("BaseAudioContext.createBufferSource()")}}
  - : {{ domxref("AudioBuffer") }} 객체 내부에 포함된 오디오 데이터를 재생하거나 조작하기 위해 사용될 수 있는 {{domxref("AudioBufferSourceNode")}}를 생성합니다. {{ domxref("AudioBuffer") }}들은 {{domxref("BaseAudioContext/createBuffer", "AudioContext.createBuffer()")}}를 사용해 생성되거나 성공적으로 오디오 트랙을 디코드했을 때 {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}에 의해 반환됩니다.
- {{domxref("BaseAudioContext.createConstantSource()")}}
  - : 샘플이 모두 같은 값을 가지고 있는 모노럴의(한 채널의) 사운드 신호를 계속적으로 출력하는 오디오 소스인 {{domxref("ConstantSourceNode")}} 객체를 생성합니다.
- {{domxref("BaseAudioContext.createChannelMerger()")}}
  - : 다수의 오디오 스트림으로부터 하나의 오디오 스트림에 채널을 결합하기 위해 사용되는 {{domxref("ChannelMergerNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createChannelSplitter()")}}
  - : 오디오 스트림의 각 채널에 접근하고 별도로 그것들을 처리하기 위해 사용되는 {{domxref("ChannelSplitterNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createConvolver()")}}
  - : 오디오 그래프에 잔향(reverberation) 효과와 같은 콘볼루션 이펙트를 적용하기 위해 사용될 수 있는 {{domxref("ConvolverNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createDelay()")}}
  - : 들어오는 오디오 신호를 지연시키기 위해 사용되는 {{domxref("DelayNode")}}를 생성합니다. 이 노드는 Web Audio API 그래프에서 피드백 루프를 생성하는 데 유용합니다.
- {{domxref("BaseAudioContext.createDynamicsCompressor()")}}
  - : 음향 압축(acoustic compression)을 오디오 신호에 적용하기 위해 사용될 수 있는 {{domxref("DynamicsCompressorNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createGain()")}}
  - : 오디오 그래프의 전반적인 볼륨을 제어하기 위해 사용될 수 있는 {{domxref("GainNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createIIRFilter()")}}
  - : 몇몇 다른 흔한 필터 유형으로 설정 가능한 2차 필터를 나타내는 {{domxref("IIRFilterNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createOscillator()")}}
  - : 주기적인 파형을 나타내는 소스인 {{domxref("OscillatorNode")}}를 생성합니다. 이것은 기본적으로 음색을 생성합니다.
- {{domxref("BaseAudioContext.createPanner()")}}
  - : 들어오는 오디오 스트림을 3D 공간에서 공간화하기 위해 사용되는 {{domxref("PannerNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createPeriodicWave()")}}
  - : {{ domxref("OscillatorNode") }}의 출력을 결정하기 위해 사용될 수 있는 주기적인 파형을 정의하는 데 쓰이는 {{domxref("PeriodicWave")}}를 생성합니다.
- {{domxref("BaseAudioContext.createScriptProcessor()")}} {{deprecated_inline}}
  - : JavaScript를 통한 직접적인 오디오 프로세싱을 위해 사용될 수 있는 {{domxref("ScriptProcessorNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createStereoPanner()")}}
  - : 오디오 소스에 스테레오 패닝을 적용하기 위해 사용될 수 있는 {{domxref("StereoPannerNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.createWaveShaper()")}}
  - : 비선형 변형(non-linear distortion) 효과를 구현하기 위해 사용되는 {{domxref("WaveShaperNode")}}를 생성합니다.
- {{domxref("BaseAudioContext.decodeAudioData()")}}
  - : 비동기적으로 {{domxref("ArrayBuffer")}}에 포함된 오디오 파일 데이터를 디코드합니다. 이 경우, ArrayBuffer는 보통 `arraybuffer`에 `responseType`을 설정한 후 {{domxref("XMLHttpRequest")}}의 `response` 특성으로부터 로딩됩니다. 이 메서드는 오디오 파일의 조각이 아니라, 오직 완전한 파일에서만 작동합니다.

## 예제

기본적인 오디오 컨텍스트 선언

```js
const audioContext = new AudioContext();
```

크로스 브라우저를 위한 다른 형태

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const oscillatorNode = audioContext.createOscillator();
const gainNode = audioContext.createGain();
const finish = audioContext.destination;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioContext")}}
- {{domxref("OfflineAudioContext")}}
