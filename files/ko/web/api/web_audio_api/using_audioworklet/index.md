---
title: AudioWorklet을 사용하는 백그라운드 오디오 프로세싱
slug: Web/API/Web_Audio_API/Using_AudioWorklet
---

{{APIRef("Web Audio API")}}

Web Audio API가 처음 브라우저에 소개되었을 때, 이것은 실시간으로 오디오를 조작하는 사용자 정의 오디오 프로세서를 생성하기 위해 JavaScript 코드를 사용하고 있었습니다. `ScriptProcessorNode`의 문제점은 단순했습니다: 이것은 메인 스레드에서 실행되기 때문에 실행을 마치기 전까지 다른 모든 동작을 막았습니다. 이러한 방식은 이상적이지 않았습니다. 특히 오디오 프로세싱같이 계산적으로 비용이 많이 들 수 있는 무언가에 대해서 말입니다.

{{domxref("AudioWorklet")}}이 도입되었습니다. 오디오 컨텍스트의 오디오 worklet은 메인 스레드에서 떨어져 실행되는 {{domxref("Worklet")}}인데, 이는 컨텍스트의 {{domxref("Worklet.addModule", "audioWorklet.addModule()")}} 메서드를 호출함으로써 이 worklet에 추가된 오디오 프로세싱 코드를 실행합니다. `addModule()`을 호출하면 명시된 JavaScript 파일을 로드하는데, 이 파일은 오디오 프로세서의 구현을 포함하고 있어야 합니다. 프로세서가 등록되었다면 여러분은 새로운 {{domxref("AudioWorkletNode")}}를 생성할 수 있고, 이 노드가 다른 오디오 노드들과 함게 오디오 노드의 체인에 연결되었을 때 이 노드는 프로세서의 코드를 통해 오디오를 전달합니다.

JavaScript를 사용해 오디오 프로세서를 생성하고, 오디오 worklet 프로세서로서 그것을 등록하고, 그리고 나서 Web Audio 애플리케이션 내에서 그 프로세서를 사용하는 과정이 이 글의 주제입니다.

오디오 프로세싱이 종종 상당한 계산량을 수반하기 때문에, 여러분의 프로세서가 [WebAssembly](/ko/docs/WebAssembly)를 사용하여 개발된다면 큰 이점을 취할 수도 있을 것입니다. 그리고 이렇게 하는 것은 웹 앱에 네이티브에 가깝거나 완전히 네이티브인 성능을 가져다 준다는 것에 주목할 가치가 있습니다. WebAssembly를 사용하여 오디오 프로세싱 알고리즘을 구현하면 오디오 프로세싱이 대단히 뛰어나게 수행될 수 있게 만들 수 있습니다.

## 멀리서 바라본 개요

단계별 기초를 밟아가며 AudioWorklet의 사용법을 알아보기 전에, 여기에 무엇이 관련되어 있는지 간략한 고수준의 개요를 살펴보며 시작합시다.

1. 하나 이상의 들어오는 소스에서 오디오를 취하고, 데이터에 대해 작업을 수행하고, 결과로 오디오 데이터를 출력하는 {{domxref("AudioWorkletProcessor")}}를 상속받는 오디오 worklet 프로세서 클래스를 정의하는 모듈을 만듭니다.
2. 오디오 컨텍스트의 {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}} 속성을 통해 오디오 컨텍스트의 {{domxref("AudioWorklet")}}에 접근하고, 오디오 worklet의 {{domxref("Worklet.addModule", "addModule()")}} 메서드를 호출하여 오디오 worklet 프로세서 모듈을 설치합니다.
3. 필요한 대로, (모듈에 의해 정의된) 프로세서의 이름을 {{domxref("AudioWorkletNode.AudioWorkletNode", "AudioWorkletNode()")}} 생성자에 전달함으로써 오디오 프로세싱 노드를 생성합니다.
4. {{domxref("AudioWorkletNode")}}가 필요로 하는, 또는 여러분이 설정하기를 원하는 오디오 파라미터들을 설정합니다. 이 파라미터들은 오디오 worklet 프로세서 모듈 내에 정의되어 있습니다.
5. 다른 노드처럼, 생성된 `AudioWorkletNode`를 오디오 프로세싱 파이프라인에 연결하고, 오디오 파이프라인을 평상시처럼 사용합니다.

이 글의 마지막까지 우리는 이 과정들을 예제와 함께 더욱 자세하게 살펴볼 것입니다 (직접 시도해볼 수 있는 작동하는 예제를 포함합니다).

이 페이지에서 찾을 수 있는 예제 코드는 MDN의 [Web Audio 예제의 GitHub 레포지토리](https://github.com/mdn/webaudio-examples/)의 일부인 [이 예제](https://mdn.github.io/webaudio-examples/audioworklet/)에서 왔습니다. 이 예제는 오실레이터 노드를 생성하고 결과로 발생된 사운드를 재생하기 전에 {{domxref("AudioWorkletNode")}}를 사용하여 이 소리에 백색소음을 추가합니다. 또한, 슬라이더를 사용해 오실레이터와 오디오 worklet의 출력 gain을 제어할 수 있습니다.

[**코드 보기**](https://github.com/mdn/webaudio-examples/tree/master/audioworklet)

[**직접 시도해보기**](https://mdn.github.io/webaudio-examples/audioworklet/)

## 오디오 worklet 프로세서 생성하기

기본적으로, 오디오 worklet 프로세서는 JavaScript 모듈을 사용하여 구현되고, 이 JavaScript 모듈은 사용자 정의 오디오 프로세서 클래스를 정의하고 등록합니다 (참고로, 우리는 이 글에서 오디오 worklet 프로세서를 "오디오 프로세서" 또는 "프로세서"로 나타낼 것입니다. 왜냐하면 그렇지 않을 경우 이 글은 두 배 가량 길어질 것이기 때문입니다).

### 오디오 worklet 프로세서의 구조

오디오 worklet 프로세서는 다음을 포함하는 JavaScript 모듈입니다:

- 오디오 프로세서를 정의하는 JavaScript 클래스. 이 클래스는 {{domxref("AudioWorkletProcessor")}} 클래스를 상속받습니다(extends).
- 오디오 프로세서는 반드시 {{domxref("AudioWorkletProcessor.process", "process()")}} 메서드를 구현해야 하는데, 이 메서드는 들어오는 오디오 데이터를 받고 프로세서에 의해 조작된 데이터를 출력에 넣습니다.
- 이 모듈은 {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}를 호출함으로써 새로운 오디오 worklet 프로세서를 등록하는데, 등록할 때 오디오 프로세서의 이름과 프로세서를 정의하는 클래스를 인자로 전달합니다.

한 개의 오디오 worklet 프로세서 모듈이 다수의 프로세서 클래스를 정의하고 각 클래스에 대해 `registerProcessor()`를 호출해 클래스들을 등록할 수도 있을 것입니다. 각 클래스가 고유한 이름을 가지고 있는 한, 이것은 문제 없는 방법입니다. 이 방법은 또한 다수의 모듈을 네트워크나 심지어 사용자의 로컬 디스크로부터 로딩하는 것보다 더욱 효율적입니다.

### 기본 코드 프레임워크

오디오 프로세서 클래스의 가장 기본적인 프레임워크는 다음과 같습니다:

```js
class MyAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
  }

  process(inputList, outputList, parameters) {
    /* inputs를 사용하여 (혹은 필요하지 않다면 사용하지 않을 수도 있음),
       각 outputs의 내부에 있는 출력을 작성합니다 */

    return true;
  }
}

registerProcessor("my-audio-processor", MyAudioProcessor);
```

프로세서의 구현 이후에 전역 함수 {{domxref("AudioWorkletGlobalScope.registerProcessor", "registerProcessor()")}}를 호출하는데, 이 함수는 오직 오디오 컨텍스트의 {{domxref("AudioWorklet")}}의 스코프 내부에서만 사용 가능하고, 이 AudioWorklet은 여러분이 호출한 {{domxref("Worklet.addModule", "audioWorklet.addModule()")}}의 결과로써 호출자가 됩니다. 이 `registerProcessor()` 호출은 {{domxref("AudioWorkletNode")}}들이 설정되었을 때, 생성된 모든 {{domxref("AudioWorkletProcessor")}}에 대한 기초로써 여러분의 클래스를 등록합니다.

이것이 가장 기본적인 프레임워크이고 코드가 `process()`에 추가되어 입력과 출력을 가지고 무언가를 하기 전까지는 실제로는 아무런 효과도 없습니다. 그리고 이제 우리는 입력과 출력에 대해 살펴볼 준비가 되었습니다.

### 입력과 출력 리스트

입력과 출력 리스트가 어떻게 작동하는지 한 번 깨닫고 나면 이것들은 실제로 매우 단순하긴 하지만, 처음에는 조금 혼란스러울 수 있습니다.

안에서 시작해서 밖으로 나가는 전략을 취해 봅시다. 기본적으로, (예를 들자면 좌측 스피커나 서브우퍼같은) 하나의 오디오 채널에 대한 오디오는 [`Float32Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)로 표현되는데 이것의 값은 개개의 오디오 샘플입니다. 명세에 따르면, `process()` 함수가 받는 각 오디오 블럭은 128개의 프레임을 포함하고 있지만 (즉, 각 채널에 대해 128개의 샘플), **이 값이 미래에 바뀔 것이라는 건** 예정되어 있고, 사실은 상황에 따라 다양할 수 있을 것이므로, 여러분은 특정한 크기를 추정하기보다는 **항상** 배열의 [`length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)를 확인해야 할 것입니다. 그러나, 입력과 출력이 같은 블럭 길이를 가질 것이라는 건 보장됩니다.

각각의 입력은 얼마간의 채널을 가지고 있습니다. 모노 입력은 하나의 채널을 가지고 있고, 스테레오 입력은 두 개의 채널을 가지고 있습니다. 서라운드 사운드는 여섯 개 혹은 그 이상의 채널을 가지고 있을 지도 모릅니다. 그래서 각 입력은, 결국엔, 채널의 배열입니다. 즉, `Float32Array` 객체의 배열입니다.

그렇다면, 다수의 입력이 있을 수 있으므로, `inputList`는 `Float32Array` 객체의 배열의 배열입니다. 각각의 입력은 각기 다른 수의 채널을 가지고 있을 지도 모르고, 각 채널은 채널마다의 샘플 배열을 가지고 있습니다.

따라서, 입력 리스트 `inputList`가 주어지면:

```js
const numberOfInputs = inputList.length;
const firstInput = inputList[0];

const firstInputChannelCount = firstInput.length;
const firstInputFirstChannel = firstInput[0]; // (또는 inputList[0][0])

const firstChannelByteCount = firstInputFirstChannel.length;
const firstByteOfFirstChannel = firstInputFirstChannel[0]; // (또는 inputList[0][0][0])
```

출력 리스트는 정확히 같은 방식으로 구성됩니다; 이것은 출력들의 배열인데, 이것의 각각은 채널들의 배열이고, 이것의 각각은 `Float32Array` 객체의 배열인데, 이는 그 채널에 대한 샘플을 포함합니다.

여러분이 어떻게 입력을 사용하고 어떻게 출력을 생성할 것인가는 여러분의 프로세서에 아주 달려 있습니다. 만약 여러분의 프로세서가 단지 생성기라면, 이것은 입력을 무시하고 단지 생성된 데이터로 출력의 내용을 대체할 수 있습니다. 또는 여러분은 각 입력의 각 채널의 들어오는 데이터에 알고리즘을 적용하고 그 결과를 해당하는 출력의 채널에 작성하며 (입력과 출력의 수는 다를지도 모르고, 채널은 또한 다를지도 모르는 이 입력과 출력에 기대고 있다는 것을 명심하십시오), 각각의 입력을 독립적으로 처리할 수 있습니다. 또는 여러분은 모든 입력을 취해서 믹싱이나 데이터로 채워진 하나의 출력 (또는 같은 데이터로 채워진 모든 출력) 을 생성하는 다른 계산을 수행할 수 있습니다.

이것은 전적으로 여러분에게 달려 있습니다. 이것은 오디오 프로그래밍 툴킷에서 매우 강력한 도구입니다.

### 다수의 입력 처리하기

해당하는 출력을 생성하기 위해 사용되는 각 입력을 가지고, 다수의 입력을 처리할 수 있는 `process()`의 구현을 살펴봅시다. 초과되는 입력은 무시됩니다.

```js
process(inputList, outputList, parameters) {
  const sourceLimit = Math.min(inputList.length, outputList.length);

  for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
    let input = inputList[inputNum];
    let output = outputList[inputNum];
    let channelCount = Math.min(input.length, output.length);

    for (let channelNum = 0; channelNum < channelCount; channelNum++) {
      let sampleCount = input[channelNum].length;

      for (let i = 0; i < sampleCount; i++) {
        let sample = input[channelNum][i];

        /* 샘플 조작하기 */

        output[channelNum][i] = sample;
      }
    }
  };

  return true;
}
```

해당하는 출력에 보내고 처리할 소스의 수를 결정할 때, 우리는 [`Math.min()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min)을 사용해 오직 출력 리스트에 있는 공간만큼의 채널만을 처리한다는 것을 확실히 합니다. 이것과 같은 확인은 현재 입력에서 얼마나 많은 채널을 처리할 지 결정할 때 수행됩니다; 우리는 오직 destination 출력에 있는 공간만큼만 처리합니다. 이렇게 함으로써 우리는 이 배열의 초과 때문에 발생하는 오류들을 방지할 수 있습니다.

### 입력 믹싱하기

많은 노드들은 입력들이 어떤 방법으로 하나의 출력으로 결합되는 **믹싱** 작업을 수행합니다. 이는 아래의 예제에서 시연됩니다.

```js
process(inputList, outputList, parameters) {
  const sourceLimit = Math.min(inputList.length, outputList.length);
   for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
     let input = inputList[inputNum];
     let output = outputList[0];
     let channelCount = Math.min(input.length, output.length);

     for (let channelNum = 0; channelNum < channelCount; channelNum++) {
       let sampleCount = input[channelNum].length;

       for (let i = 0; i < sampleCount; i++) {
         let sample = output[channelNum][i] + input[channelNum][i];

         if (sample > 1.0) {
           sample = 1.0;
         } else if (sample < -1.0) {
           sample = -1.0;
         }

         output[channelNum][i] = sample;
       }
     }
   };

  return true;
}
```

이것은 많은 점에서 이전 예제와 비슷한 코드이지만, 오직 첫번째 출력—`outputList[0]`—이 변경되었습니다. 값에 제한을 두어서 샘플들이 -1.0에서 1.0 사이의 올바른 범위를 초과하는 것을 방지하기 위해 작동하는 간단한 코드 조각과 함께, 각각의 샘플이 출력 버퍼의 해당하는 샘플에 추가되었습니다; 클리핑을 방지할 아마도 덜 왜곡될 경향이 있는 다른 방법들이 있겠지만, 이것은 아무것도 아닌 것 보다는 나은 간단한 예시를 보여줍니다.

## 오디오 worklet 프로세서의 생애 주기

여러분이 오디오 worklet 프로세서의 생애 주기에 영향을 줄 유일한 수단은 `process()`에 의해 반환된 값을 통해서인데, 이는 노드가 여전히 사용되고 있는지 아닌지에 대한 {{Glossary("user agent")}}의 의사 결정을 무시할지 말지를 나타내는 Boolean 값이어야만 합니다.

일반적으로, 모든 오디오 노드의 생애 정책은 단순합니다: 만약 노드가 여전히 활발히 오디오를 프로세싱하고 있는 것으로 여겨진다면, 노드는 계속 사용될 것입니다. {{domxref("AudioWorkletNode")}}의 경우, 만약 이 노드의 `process()` 함수가 `true`를 반환하고 **또한** 이 노드가 오디오 데이터에 대해 소스로서 컨텐츠를 생성하거나 하나 이상의 입력으로부터 데이터를 받고 있다면 이 노드는 작동 중인 것으로 여겨집니다.

본질적으로 `process()` 함수로부터의 결과로써 `true`의 값을 명시한다는 것은 Web Audio API에게 심지어 API가 여러분을 위해 할 무언가가 남아있지 않다고 생각한다 할 지라도 여러분의 프로세서가 계속 호출될 필요가 있다고 말해주는 것입니다. 다른 말로 하자면, `true`는 API의 로직을 무시하고 여러분의 프로세서의 생애 주기 정책에 대한 제어를 제공합니다. 즉, API가 이 노드를 끄기로 결정했을 때일지라도 프로세서가 소유 중인 {{domxref("AudioWorkletNode")}}의 실행을 유지합니다.

`process()` 메서드로부터 `false`를 반환하는 것은 API에게 보통의 로직을 따르고 만약 프로세서 노드를 종료하는 것이 적절하다고 여겨지면 그렇게 해야 한다고 말해주는 것입니다. 만약 API가 여러분의 노드가 더 이상 필요없다고 결정한다면, `process()`는 다시 호출되지 않을 것입니다.

> **참고:** 이 시점에서, 불행하게도, Chrome은 어떤 의미로는 현재 표준에 일치하는 이 알고리즘을 구현하지 않았습니다. 대신, Chrome은 만약 여러분이 `true` 를 반환하면 노드를 살려두고 `false` 를 반환하면 끕니다. 따라서 호환성의 이유로 적어도 Chrome에서는 여러분은 항상 반드시 `process()` 에서 `true` 를 반환해야 합니다. 그러나, [이 Chrome 이슈](https://bugs.chromium.org/p/chromium/issues/detail?id=921354)가 수정되고 나면, 이것은 성능에 약간 부정적인 영향을 가질지도 모르므로 여러분은 만약 가능하다면 이 동작을 변경하고자 할 것입니다.

## 오디오 프로세서 worklet 노드 생성하기

{{domxref("AudioWorkletProcessor")}}를 통해 오디오 데이터 블럭을 채우는 오디오 노드를 생성하려면, 여러분은 다음의 간단한 단계를 따를 필요가 있습니다:

1. 오디오 프로세서 모듈을 로드하고 설치하기
2. 프로세서의 이름으로 사용할 오디오 프로세서 모듈을 명시하며, {{domxref("AudioWorkletNode")}} 생성하기
3. `AudioWorkletNode`에 입력을 연결하고 이 노드의 출력을 적절한 destination에 연결하기 (이는 다른 노드거나 {{domxref("AudioContext")}} 객체의 {{domxref("AudioContext.destination", "destination")}} 속성입니다).

오디오 worklet 프로세서를 사용하기 위해서, 여러분은 다음과 유사한 코드를 사용할 수 있습니다:

```js
let audioContext = null;

async function createMyAudioProcessor() {
  if (!audioContext) {
    try {
      audioContext = new AudioContext();
      await audioContext.resume();
      await audioContext.audioWorklet.addModule("module-url/module.js");
    } catch (e) {
      return null;
    }
  }

  return new AudioWorkletNode(audioContext, "processor-name");
}
```

이 `createMyAudioProcessor()` 함수는 여러분의 오디오 프로세서를 사용하기 위해 설정된 {{domxref("AudioWorkletNode")}}의 새로운 인스턴스를 생성하고 반환합니다. 이 함수는 또한 만약 오디오 컨텍스트 생성이 이미 완료되지 않았다면 오디오 컨텍스트 생성을 다룹니다.

컨텍스트가 사용 가능함을 확실히 하기 위해서, 이 함수는 컨텍스트가 이미 사용 가능하지 않다면 컨텍스트를 생성함으로써 시작하고, 그리고 나서 프로세서를 포함하는 모듈을 worklet에 추가합니다. 이 작업이 완료되고 나면, 이 함수는 새로운 `AudioWorkletNode`를 인스턴스화하고 반환합니다. 반환된 노드를 얻었다면, 여러분은 이 노드를 다른 노드들에 연결할 수 있고 그게 아니라면 여타 다른 노드처럼 사용할 수 있습니다.

다음의 코드를 통해 여러분은 새로운 오디오 프로세서 노드를 생성할 수 있습니다:

```js
let newProcessorNode = createMyAudioProcessor();
```

만약 반환된 값 `newProcessorNode`가 `null`이 아니라면, 우리는 작동하고 사용될 준비가 된 백색소음 프로세서 노드와 함께 유효한 오디오 컨텍스트를 가지고 있는 것입니다.

## 오디오 파라미터 지원하기

다른 Web Audio 노드들처럼, {{domxref("AudioWorkletNode")}}은 파라미터를 지원하는데, 이는 실제 작업을 하는 {{domxref("AudioWorkletProcessor")}}와 공유됩니다.

### 프로세서에 파라미터 지원 추가하기

{{domxref("AudioWorkletNode")}}에 파라미터를 추가하기 위해서, 여러분은 모듈 내의 {{domxref("AudioWorkletProcessor")}} 기반의 프로세서 클래스 내에서 파라미터들을 정의할 필요가 있습니다. 이 작업은 static getter {{domxref("AudioWorkletProcessor.parameterDescriptors", "parameterDescriptors")}}를 클래스에 추가함으로써 이루어질 수 있습니다. 이 함수는 {{domxref("AudioParam")}} 객체들의 배열을 반환해야 하는데, 이 객체는 프로세서에 의해 지원되는 각 파라미터에 대해 하나씩입니다.

다음의 `parameterDescriptors()` 구현에서, 반환된 배열은 두 개의 `AudioParam` 객체를 가지고 있습니다. 첫번째 파라미터는 `gain`을 기본값이 0.5인 0과 1 사이의 값으로 정의했습니다. 두번째 파라미터의 이름은 `frequency`이고 기본값은 440.0인데, 그 범위는 전부 통틀어 27.5에서 4186.009까지입니다.

```js
static get parameterDescriptors() {
  return [
   {
      name: "gain",
      defaultValue: 0.5,
      minValue: 0,
      maxValue: 1
    },
    {
      name: "frequency",
      defaultValue: 440.0;
      minValue: 27.5,
      maxValue: 4186.009
    }
  ];
}
```

프로세서 노드의 파라미터들에 접근하는 것은 그것들을 {{domxref("AudioWorkletProcessor.process", "process()")}}의 구현에 전달된 `parameters` 객체에서 찾는 것만큼이나 간단합니다. `parameters` 객체 내부에 있는 것은 배열들인데, 각 파라미터 당 하나이고, 파라미터로서 같은 이름을 공유합니다.

- A-rate 파라미터
  - : a-rate 파라미터에 대해서—시간에 따라 값이 자동적으로 변하는 파라미터—`parameters` 객체에서 파라미터의 엔트리는 {{domxref("AudioParam")}} 객체들의 배열인데, 처리되고 있는 블록의 각 프레임 당 하나입니다. 이 값들은 해당하는 프레임들에 적용될 것입니다.
- K-rate 파라미터
  - : 반면에 K-rate 파라미터는, 블럭당 한 번만 변할 수 있어서, 파라미터의 배열은 오직 하나의 엔트리를 가집니다. 블럭의 모든 프레임에 대해 이 값을 사용하십시오.

아래의 코드에서, 우리는 a-rate 또는 k-rate 파라미터로 쓰일 수 있는 `gain` 파라미터를 다루는 `process()` 함수를 볼 수 있습니다. 우리의 노드는 오직 하나의 입력만을 지원하므로, 이 노드는 단지 리스트의 첫번째 입력만을 취하고, gain을 이 입력에 적용하고, 결과로 생성된 데이터를 첫번째 출력의 버퍼에 작성합니다.

```js
process(inputList, outputList, parameters) {
  const input = inputList[0];
  const output = outputList[0];
  const gain = parameters.gain;

  for (let channelNum = 0; channelNum < input.length; channel++) {
    const inputChannel = input[channel];
    const outputChannel = output[channel];

    // 만약 gain.length가 1이면, 이것은 k-rate 파라미터이므로,
    // 첫번째 엔트리를 모든 프레임에 적용합니다.
    // 그렇지 않으면, 각 엔트리를 해당하는 프레임에 적용합니다.

    if (gain.length === 1) {
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * gain[0];
      }
    } else {
      for (let i = 0; i < inputChannel.length; i++) {
        outputChannel[i] = inputChannel[i] * gain[i];
      }
    }
  }

  return true;
}
```

여기서, 만약 `gain.length`가 `gain` 파라미터의 값들의 배열에 오직 하나의 값만이 있다는 것을 나타내면, 배열에 있는 첫번째 엔트리가 블럭의 모든 프레임에 적용됩니다. 그렇지 않으면, 블럭의 각 프레임에 대해, `gain[]`에 있는 해당하는 엔트리가 적용됩니다.

### 메인 스레드 스크립트에서 파라미터 접근하기

여러분의 메인 스레드 스크립트는 다른 노드들이 할 수 있는 것과 마찬가지로 파라미터에 접근할 수 있습니다. 이렇게 하기 위해서는, 첫째로 여러분은 {{domxref("AudioWorkletNode")}}의 {{domxref("AudioWorkletNode.parameters", "parameters")}} 속성의 {{domxref("AudioParamMap.get", "get()")}} 메서드를 호출함으로써 파라미터에 대한 참조를 얻을 필요가 있습니다.

```js
let gainParam = myAudioWorkletNode.parameters.get("gain");
```

`gainParam`에 반환되고 저장된 값은 `gain` 파라미터를 저장하기 위해 사용된 {{domxref("AudioParam")}}입니다. 여러분은 그리고 나서 {{domxref("AudioParam")}} 메서드 {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}}을 사용하여 주어진 시간의 값을 효과적으로 바꿀 수 있습니다.

예를 들어, 여기서, 우리는 값을 `newValue`로, 효과적으로 즉시 설정했습니다.

```js
gainParam.setValueAtTime(newValue, audioContext.currentTime);
```

여러분은 유사하게 {{domxref("AudioParam")}} 인터페이스에 있는 다른 모든 메서드를 시간에 따른 변화를 적용하기 위해, 예정된 변화를 취소하기 위해, 그리고 등등을 위해 사용할 수 있습니다.

파라미터의 값을 읽는 것은 {{domxref("AudioParam.value", "value")}} 속성을 보는 것 만큼이나 간단합니다:

```js
let currentGain = gainParam.value;
```

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Enter Audio Worklet](https://developers.google.com/web/updates/2017/12/audio-worklet) (Google Developers 블로그)
