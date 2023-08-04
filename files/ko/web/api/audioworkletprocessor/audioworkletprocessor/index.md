---
title: AudioWorkletProcessor()
slug: Web/API/AudioWorkletProcessor/AudioWorkletProcessor
---

{{APIRef("Web Audio API")}}

**`AudioWorkletProcessor()`** 생성자는 {{domxref("AudioWorkletNode")}}의 근본적인 오디오 프로세싱 메커니즘을 나타내는 새로운 {{domxref("AudioWorkletProcessor")}} 객체를 생성합니다.

## 구문

> **참고:** `AudioWorkletProcessor` 와 이것으로부터 파생된 클래스들은
> 사용자에 의해 제공된 코드로부터 직접적으로 초기화될 수 없습니다.
> 대신, 이것들은 오직 연관된 {{domxref("AudioWorkletNode")}}들의 생성에 의해서만 내부적으로 생성됩니다.

```js
new AudioWorkletProcessor(options);
```

### 매개변수

- `options`

  - : {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode constructor")}}에 _options_ 매개변수로서 전달되고 [structured clone algorithm](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)에 통과되는 객체. 사용 가능한 속성들은 다음과 같습니다:

    <!-- 명세는 이 객체를 다음으로 나타냅니다: AudioWorkletNodeOptions -->

    - `numberOfInputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfInputs", "numberOfInputs")}} 속성을 초기화할 값. 기본 값은 1입니다.
    - `numberOfOutputs` {{optional_inline}}
      - : {{domxref("AudioNode.numberOfOutputs", "numberOfOutputs")}} 속성을 초기화할 값. 기본 값은 1입니다.
    - `outputChannelCount` {{optional_inline}}
      - : 각 출력에 대한 채널의 수를 정의하는 **배열**. 예를 들자면, _outputChannelCount: \[n, m]_ 은 첫번째 출력의 채널의 수를 _n_ 으로, 두번째 출력을 _m_ 으로 명시합니다. 배열의 길이는 반드시 `numberOfOutputs` 와 일치해야 합니다.
    - `parameterData` {{optional_inline}}
      - : `key` 가 사용자 정의 파라미터의 이름이고 `value` 가 이것의 초기 값인 채로, (이 노드의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성에 있는) 이 노드의 사용자 정의 {{domxref("AudioParam")}}의 초기 값들을 포함하는 객체.
    - `processorOptions` {{optional_inline}}
      - : 근본적인 {{domxref("AudioWorkletProcessor")}}의 사용자 정의 초기화에 사용될 수 있는 모든 추가적인 데이터

    처음 두 개의 속성에 대해 기본 값이 있어서, {{domxref("AudioWorkletNode.AudioWorkletNode",
    "AudioWorkletNode constructor")}}에 전달되는 _options_ 객체가 없을지라도, 노드에 의해 `AudioWorkletProcessor` 생성자에 전달된 _options_ 객체는 존재할 것이고 최소한 `numberOfInputs` 과 `numberOfOutputs` 을 가질 것이라는 데 주목하세요.

### 반환 값

새롭게 생성된 {{domxref("AudioWorkletProcessor")}} 인스턴스.

## 예제

이 예제에서 우리는 {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode constructor")}}에 사용자 정의 옵션들을 전달하고 어떻게 그것들의 [structured
clone](/ko/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)이 우리의 `AudioWorkletProcessor` 생성자에 전달되는지 관찰합니다.

우선, 우리는 사용자 정의 {{domxref("AudioWorkletProcessor")}}를 정의하고 등록할 필요가 있습니다. 이 작업은 별도의 파일에서 이루어져야 한다는 것에 주의하세요.

```js
// test-processor.js
class TestProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    console.log(options.numberOfInputs);
    console.log(options.processorOptions.someUsefulVariable);
  }
  process(inputs, outputs, parameters) {
    return true;
  }
}

registerProcessor("test-processor", TestProcessor);
```

다음으로, 메인 스크립트 파일에서 우리는 프로세서를 로드하고, `AudioWorkletNode` 에 프로세서의 이름과 _options_ 객체를 전달하며 `AudioWorkletNode` 의 인스턴스를 생성합니다.

_options_ 객체에서 우리는 `someUsefulVariable` 키 아래에서 {{jsxref("Map")}} 인스턴스와 함께 `processorOptions` 를 전달합니다. 우리는 `numberOfInputs` 을 전달하지 않았고 어떻게 이것이 기본 값을 얻게 되는지 관찰해 봅시다.

```js
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule("test-processor.js");
const testNode = new AudioWorkletNode(audioContext, "test-processor", {
  processorOptions: {
    someUsefulVariable: new Map([
      [1, "one"],
      [2, "two"],
    ]),
  },
});
```

콘솔 출력은 다음과 같을 것입니다:

```js
> 1 // AudioWorkletNode options.numberOfInputs가 기본 값으로 설정됨
> Map(2) {1 => "one", 2 => "two"} // someUsefulVariable 아래의 복제된 map
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("AudioWorkletNode", "AudioWorkletNode")}} 인터페이스
