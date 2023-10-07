---
title: AudioNode.connect()
slug: Web/API/AudioNode/connect
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioNode") }} 인터페이스의 `connect()` 메서드는 노드의 출력 중 하나를 목표에 연결할 수 있게 하는데, 이 목표는 다른 `AudioNode` 일 수도 있고 (이렇게 함으로써 사운드 데이터를 명시된 노드로 향하게 합니다) {{domxref("AudioParam")}} 일 수도 있습니다 (이 경우 노드의 출력 데이터가 자동적으로 시간에 따라 그 파라미터의 값을 변화시키기 위해 사용됩니다).

## 구문

```js
var destinationNode = AudioNode.connect(destination, outputIndex, inputIndex);

AudioNode.connect(destination, outputIndex);
```

### 매개변수

- `destination`
  - : 연결할 {{domxref("AudioNode")}} 또는 {{domxref("AudioParam")}}.
- `outputIndex` {{optional_inline}}
  - : 현재 `AudioNode`의 어떤 출력이 목적지에 연결될 지 명시하는 인덱스. 인덱스 숫자는 출력 채널의 수에 따라 정의됩니다 ([오디오 채널](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)을 참고해 보세요). 주어진 출력을 주어진 입력에 단 한 번 연결할 수 있는 반면 (반복된 시도는 무시됩니다), `connect()` 를 반복적으로 호출함으로써 다수의 입력에 하나의 출력을 연결할 수 있습니다. 이는 [팬 아웃](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out)을 가능케 합니다. 기본값은 0입니다.
- `inputIndex` {{optional_inline}}
  - : 현재 `AudioNode`를 목적지의 어떤 입력에 연결할지를 기술하는 인덱스. 기본값은 0입니다. 인덱스 숫자는 입력 채널의 수에 따라 정의됩니다 ([오디오 채널](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_channels)을 참고해 보세요). 한 `AudioNode`를 다른 `AudioNode`에 연결해, 차례로 연결되어 첫번째 `AudioNode`로 돌아오는 사이클을 만드는 것은 가능합니다.

### 반환 값

만약 목적지가 노드라면, `connect()` 는 목적지 {{domxref("AudioNode")}} 객체에 대한 참조를 반환하며, 다수의 `connect()` 호출을 연쇄할 수 있게 합니다. 몇몇 브라우저에서, 이 인터페이스의 오래된 구현은 {{jsxref("undefined")}}를 반환합니다.

만약 목적지가 `AudioParam` 이라면, `connect()` 는 `undefined` 를 반환합니다.

### 예외

- `IndexSizeError` {{domxref("DOMException")}}
  - : 만약 `outputIndex` 혹은 `inputIndex` 로 명시된 값이 존재하는 입력 혹은 출력에 일치하지 않는다면 발생됩니다.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : 만약 목적지 노드가 소스 노드로서 같은 오디오 컨텍스트의 일부가 아니라면 발생됩니다.
- `NotSupportedError` {{domxref("DOMException")}}
  - : 만약 명시된 연결이 (오디오가 같은 노드들을 반복적으로 순환하는) 사이클을 형성하고 결과 파형이 같은 오디오 프레임을 무기한으로 생성해 멈추는 일을 방지하기 위한 {{domxref("DelayNode")}} 객체가 사이클에 없다면 발생됩니다. 또한 만약 목적지가 {{domxref("AudioParam")}}일 때 `inputIndex` 매개변수가 사용된 경우 발생됩니다.

## 예제

### 오디오 입력에 연결하기

`connect()` 메서드의 가장 분명한 용도는 이후의 프로세싱을 위해 하나의 노드로부터 다른 노드의 오디오 입력에 오디오 출력을 보내는 것입니다. 예를 들어, {{domxref("MediaElementAudioSourceNode")}}으로부터, 즉 {{HTMLElement("audio")}}와 같은 HTML 미디어 요소로부터 스피커에 오디오를 보내기 전에 노이즈를 줄이기 위해 {{domxref("BiquadFilterNode")}}를 사용하여 구현된 밴드 패스 필터를 통해 오디오를 전송할 수 있습니다.

아래의 예제는 오실레이터를 생성하고, 오실레이터를 gain 노드에 연결해, gain 노드가 오실레이터 노드의 볼륨을 제어하도록 합니다.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

### AudioParam 예제

이 예제에서, 우리는 낮은 주파수 값을 가진 {{domxref("OscillatorNode")}}를 사용해 {{domxref("GainNode")}}의 gain 값을 변화시킬 것입니다. 이 기법은 **LFO**에 의해 제어되는 파라미터로 알려져 있습니다.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

// 소리를 만들기 위해 일반적인 오실레이터를 생성합니다
var oscillator = audioCtx.createOscillator();

// LFO (Low-frequency oscillator, 저주파 오실레이터) 로써 사용되고,
// 파라미터를 제어할 두 번째 오실레이터를 생성합니다
var lfo = audioCtx.createOscillator();

// 두 번째 오실레이터의 주파수를 낮은 수로 설정합니다
lfo.frequency.value = 2.0; // 2Hz: 초당 두 번의 진동

// gain AudioParam이 LFO에 의해 제어될 gain을 생성합니다
var gain = audioCtx.createGain();

// LFO를 gain AudioParam에 연결합니다. 이는 LFO의 값이 어떠한 오디오도
// 생성하지 않지만, gain의 값을 대신 변화시킬 것임을 의미합니다
lfo.connect(gain.gain);

// 오디오를 생성할 오실레이터를 gain에 연결합니다
oscillator.connect(gain);

// gain을 목적지에 연결해 소리가 나오게 합니다
gain.connect(audioCtx.destination);

// 오디오를 생성할 오실레이터를 시작시킵니다
oscillator.start();

// gain 값을 조정할 오실레이터를 시작시킵니다
lfo.start();
```

#### AudioParam 사용 일람

`AudioNode` 출력을 하나 이상의 {{
  domxref("AudioParam") }}에 연결하는 것은 가능하고, 하나 이상의 AudioNode 출력을 하나의 {{
  domxref("AudioParam") }}에 다수의 `connect()` 호출과 함께 연결하는 것은 가능합니다. 그러므로 [팬 인과 팬 아웃](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#fan-in_and_fan-out)이 지원됩니다.

{{ domxref("AudioParam") }}은 자신에게 연결된 모든 `AudioNode` 출력으로부터 렌더링된 오디오 데이터를 취하고 그 데이터를 [다운 믹싱](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)함으로써 모노로 변환합니다 (만약 데이터가 이미 모노가 아니라면). 다음으로, {{ domxref("AudioParam") }}은 그 데이터를 그러한 다른 출력들과, 고유한 파라미터 값과 함께 섞을 것입니다. (고유한 파라미터 값이란 {{ domxref("AudioParam") }}이 보통 어떠한 오디오 연결 없이 가지는 값이며, 이는 이 파라미터에 예정된 모든 타임라인 변화를 포함합니다.)

그러므로, {{domxref("AudioParam")}}의 값을 중심 주파수로 설정함으로써 {{domxref("AudioParam")}}이 변화할 범위를 선택하는 것은 가능하고, {{domxref("AudioParam")}} 변화의 범위를 조정하기 위해 오디오 소스와 {{domxref("AudioParam")}} 사이에서 {{domxref("GainNode")}}를 사용하는 것은 가능합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
