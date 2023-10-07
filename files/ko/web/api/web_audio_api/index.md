---
title: Web Audio API
slug: Web/API/Web_Audio_API
---

{{DefaultAPISidebar("Web Audio API")}}

Web Audio API는 웹에서 오디오를 제어하기 위한 강력하고 다양한 기능을 제공합니다. Web Audio API를 이용하면 오디오 소스를 선택할 수 있도록 하거나, 오디오에 이펙트를 추가하거나, 오디오를 시각화하거나, 패닝과 같은 공간 이펙트를 적용시키는 등의 작업이 가능합니다.

## Web audio의 개념과 사용법

Web Audio API는 **오디오 컨텍스트** 내부의 오디오 조작을 핸들링하는 것을 포함하며, **모듈러 라우팅**을 허용하도록 설계되어 있습니다. 기본적인 오디오 연산은 **오디오 노드**를 통해 수행되며, **오디오 노드**는 서로 연결되어 **오디오 라우팅 그래프**를 형성합니다. 서로 다른 타입의 채널 레이아웃을 포함한 다수의 오디오 소스는 단일 컨텍스트 내에서도 지원됩니다. 이 모듈식 설계는 역동적이고 복합적인 오디오 기능 생성을 위한 유연성을 제공합니다.

오디오 노드는 각각의 입력과 출력을 통해 체인과 간단한 망으로 연결됩니다. 이들은 일반적으로 하나 이상의 소스로 시작합니다. 소스들은 초당 수만 개 가량의 아주 작은 시간 단위의 음향 인텐시티(샘플) 배열로 제공됩니다. 소스는 {{domxref("OscillatorNode")}}와 같이 수학적으로 계산된 것이거나, {{domxref("AudioBufferSourceNode")}} 또는 {{domxref("MediaElementAudioSourceNode")}}와 같은 사운드/비디오 파일, 마지막으로 {{domxref("MediaStreamAudioSourceNode")}}와 같은 오디오 스트림일 수 있습니다. 사실, 사운드 파일은 마이크나 전자기기로 생성된 음향 인텐시티가 녹음된 것에 불과하며, 하나의 복합적인 파동으로 믹싱됩니다.

오디오 노드의 출력은 다른 노드의 입력 단자와 연결될 수 있습니다. 이 입력은 노드의 사운드 샘플 스트림을 다른 스트림으로 믹스하거나 변경합니다. 일반적인 변경은 {{domxref("GainNode")}}와 같이 샘플에 소리를 더 키우거나 줄이는 값을 곱하는 것입니다. 사운드가 의도된 이펙트를 위해 충분히 처리되면, 이를 {{domxref("AudioContext.destination")}}의 입력에 연결해 사운드를 스피커와 헤드폰으로 출력합니다. 이 연결은 사용자가 오디오를 듣도록 하기 위한 용도로만 필요합니다.

웹 오디오의 간단하고 일반적인 작업 흐름은 다음과 같습니다 :

1. 오디오 컨텍스트를 생성합니다.
2. 컨텍스트 내에 소스를 생성합니다.(ex - \<audio>, 발진기, 스트림)
3. 이펙트 노드를 생성합니다. (ex - 잔향 효과, 바이쿼드 필터, 패너, 컴프레서 등)
4. 오디오의 최종 목적지를 선택합니다. (ex - 시스템 스피커)
5. 사운드를 이펙트에 연결하고, 이펙트를 목적지에 연결합니다.

![오디오 컨텍스트라고 쓰여진 외부 박스와, 소스, 이펙트, 목적지라고 쓰여진 세 개의 내부 박스를 가진 간단한 박스 다이어그램. 세 개의 내부 박스는 사이에 좌에서 우를 가리키는 화살표를 가지고 있는데, 이는 오디오 정보의 흐름을 나타냅니다.](audio-context_.png)

높은 정확도와 적은 지연시간을 가진 타이밍 계산 덕분에, 개발자는 높은 샘플 레이트에서도 특정 샘플을 대상으로 이벤트에 정확하게 응답하는 코드를 작성할 수 있습니다. 따라서 드럼 머신이나 시퀀서 등의 어플리케이션은 충분히 구현 가능합니다.

Web Audio API는 오디오가 어떻게 *공간화*될지 컨트롤할 수 있도록 합니다. *소스-리스너 모델*을 기반으로 하는 시스템을 사용하면 *패닝 모델*과 _거리-유도 감쇄_ 혹은 움직이는 소스(혹은 움직이는 청자)를 통해 유발된 _도플러 시프트_ 컨트롤이 가능합니다.

> **참고:** [Web Audio API의 기본 개념](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) 문서에서 Web Audio API 이론에 대한 더 자세한 내용을 읽을 수 있습니다.

## Web Audio API 타겟 사용자층

오디오나 음악 용어에 익숙하지 않은 사람은 Web Audio API가 막막하게 느껴질 수 있습니다. 또한 Web Audio API가 굉장히 다양한 기능을 제공하는 만큼 개발자로서는 시작하기 어렵게 느껴질 수 있습니다.

Web Audio API는 [futurelibrary.no](https://www.futurelibrary.no/)에서와 같이 배경 음악을 깔거나, [작성된 폼에 대한 피드백을 제공](https://css-tricks.com/form-validation-web-audio/)하는 등, 웹사이트에 간단한 오디오 기능을 제공하는 데에 사용될 수 있습니다. 그리고 물론 상호작용 가능한 상급자용 악기 기능을 만드는 데에도 사용할 수 있습니다. 따라서 Web Audio API는 개발자와 뮤지션 모두가 사용 가능합니다.

프로그래밍에는 익숙하지만 각종 용어나 API의 구조에 대해 공부하고 싶으신 분들을 위한 [간단한 튜토리얼](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)이 준비되어 있습니다.

[Web Audio API의 원리](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)에는 API 내에서 디지털 오디오가 어떻게 동작하는지 나와 있습니다. 해당 문서에는 API가 어떤 원리를 이용해 작성되었는지에 대한 설명도 잘 되어 있습니다.

코드를 작성하는 것은 카드 게임과 비슷합니다. 규칙을 배우고, 플레이합니다. 모르겠는 규칙은 다시 공부하고, 다시 새로운 판을 합니다. 마찬가지로, 이 문서와 첫 튜토리얼에서 설명하는 것만으로 부족하다고 느끼신다면 첫 튜토리얼의 내용을 보충하는 동시에 여러 테크닉을 이용하여 스텝 시퀀서를 만드는 법을 설명하는 [상급자용 튜토리얼](/ko/docs/Web/API/Web_Audio_API/Advanced_techniques)을 읽어보시는 것을 추천합니다.

그 외에도 이 페이지의 사이드바에서 API의 모든 기능을 설명하는 참고자료와 다양한 자습서를 찾아 보실 수 있습니다.

만약에 프로그래밍보다는 음악이 친숙하고, 음악 이론에 익숙하며, 악기를 만들고 싶으시다면 바로 상급자용 튜토리얼부터 시작하여 여러가지를 만들기 시작하시면 됩니다. 위의 튜토리얼은 음표를 배치하는 법, 저주파 발진기 등 맞춤형 Oscillator(발진기)와 Envelope를 설계하는 법 등을 설명하고 있으니, 이를 읽으며 사이드바의 자료를 참고하시면 될 것입니다.

프로그래밍에 전혀 익숙하지 않으시다면 자바스크립트 기초 튜토리얼을 먼저 읽고 이 문서를 다시 읽으시는 게 나을 수도 있습니다. 모질라의 [자바스크립트 기초](/ko/docs/Learn/JavaScript)만큼 좋은 자료도 몇 없죠.

## Web Audio API 인터페이스

Web Audio API는 다양한 인터페이스와 연관 이벤트를 가지고 있으며, 이는 9가지의 기능적 범주로 나뉩니다.

### 일반 오디오 그래프 정의

Web Audio API 사용범위 내에서 오디오 그래프를 형성하는 일반적인 컨테이너와 정의입니다.

- {{domxref("AudioContext")}}
  - : **`AudioContext`** 인터페이스는 오디오 모듈이 서로 연결되어 구성된 오디오 프로세싱 그래프를 표현하며, 각각의 그래프는 {{domxref("AudioNode")}}로 표현됩니다. `AudioContext`는 자신이 가지고 있는 노드의 생성과 오디오 프로세싱 혹은 디코딩의 실행을 제어합니다. 어떤 작업이든 시작하기 전에 `AudioContext`를 생성해야 합니다. 모든 작업은 컨텍스트 내에서 이루어집니다.
- {{domxref("AudioNode")}}
  - : **`AudioNode`** 인터페이스는 오디오 소스({{HTMLElement("audio")}}나 {{HTMLElement("video")}} 요소), 오디오 목적지, 중간 처리 모듈({{domxref("BiquadFilterNode")}}이나 {{domxref("GainNode")}})과 같은 오디오 처리 모듈을 나타냅니다.
- {{domxref("AudioParam")}}
  - : **`AudioParam`** 인터페이스는 {{domxref("AudioNode")}}중 하나와 같은 오디오 관련 파라미터를 나타냅니다. 이는 특정 값 또는 값 변경으로 세팅되거나, 특정 시간에 발생하고 특정 패턴을 따르도록 스케쥴링할 수 있습니다.
- {{domxref("AudioParamMap")}}
  - : {{domxref("AudioParam")}} 인터페이스 그룹에 maplike 인터페이스를 제공하는데, 이는 `forEach()`, `get()`, `has()`, `keys()`, `values()` 메서드와 `size` 속성이 제공된다는 것을 의미합니다.
- {{domxref("BaseAudioContext")}}
  - : **`BaseAudioContext`** 인터페이스는 온라인과 오프라인 오디오 프로세싱 그래프에 대한 기본 정의로서 동작하는데, 이는 각각 {{domxref("AudioContext")}} 와 {{domxref("OfflineAudioContext")}}로 대표됩니다. `BaseAudioContext`는 직접 쓰여질 수 없습니다 — 이 두 가지 상속되는 인터페이스 중 하나를 통해 이것의 기능을 사용할 수 있습니다.
- The {{event("ended")}} event
  - : **`ended`** 이벤트는 미디어의 끝에 도달하여 재생이 정지되면 호출됩니다.

### 오디오 소스 정의하기

Web Audio API에서 사용하기 위한 오디오 소스를 정의하는 인터페이스입니다.

- {{domxref("AudioScheduledSourceNode")}}
  - : **`AudioScheduledSourceNode`** 는 오디오 소스 노드 인터페이스의 몇 가지 유형에 대한 부모 인터페이스입니다. 이것은 {{domxref("AudioNode")}}입니다.
- {{domxref("OscillatorNode")}}
  - : **`OscillatorNode`** 인터페이스는 삼각파 또는 사인파와 같은 주기적 파형을 나타냅니다. 이것은 주어진 주파수의 파동을 생성하는 {{domxref("AudioNode")}} 오디오 프로세싱 모듈입니다.
- {{domxref("AudioBuffer")}}
  - : **`AudioBuffer`** 인터페이스는 {{ domxref("AudioContext.decodeAudioData()") }}메소드를 사용해 오디오 파일에서 생성되거나 {{ domxref("AudioContext.createBuffer()") }}를 사용해 로우 데이터로부터 생성된 메모리상에 적재되는 짧은 오디오 자원을 나타냅니다. 이 형식으로 디코딩된 오디오는 {{ domxref("AudioBufferSourceNode") }}에 삽입될 수 있습니다.
- {{domxref("AudioBufferSourceNode")}}
  - : **`AudioBufferSourceNode`** 인터페이스는 {{domxref("AudioBuffer")}}에 저장된 메모리상의 오디오 데이터로 구성된 오디오 소스를 나타냅니다. 이것은 오디오 소스 역할을 하는 {{domxref("AudioNode")}}입니다.
- {{domxref("MediaElementAudioSourceNode")}}
  - : **`MediaElementAudioSourceNode`** 인터페이스는 {{ htmlelement("audio") }} 나 {{ htmlelement("video") }} HTML 엘리먼트로 구성된 오디오 소스를 나타냅니다. 이것은 오디오 소스 역할을 하는 {{domxref("AudioNode")}}입니다.
- {{domxref("MediaStreamAudioSourceNode")}}
  - : **`MediaStreamAudioSourceNode`** 인터페이스는 [WebRTC](/ko/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}}(웹캠, 마이크 혹은 원격 컴퓨터에서 전송된 스트림)으로 구성된 오디오 소스를 나타냅니다. 이것은 오디오 소스 역할을 하는 {{domxref("AudioNode")}}입니다.
- {{domxref("MediaStreamTrackAudioSourceNode")}}
  - : {{domxref("MediaStreamTrackAudioSourceNode")}} 유형의 노드는 데이터가 {{domxref("MediaStreamTrack")}}로부터 오는 오디오 소스를 표현합니다. 이 노드를 생성하기 위해 {{domxref("AudioContext.createMediaStreamTrackSource", "createMediaStreamTrackSource()")}} 메서드를 사용하여 이 노드를 생성할 때, 여러분은 어떤 트랙을 사용할 지 명시합니다. 이것은 `MediaStreamAudioSourceNode`보다 더 많은 제어를 제공합니다.

### 오디오 이펙트 필터 정의하기

오디오 소스에 적용할 이펙트를 정의하는 인터페이스입니다.

- {{domxref("BiquadFilterNode")}}
  - : **`BiquadFilterNode`** 인터페이스는 간단한 하위 필터를 나타냅니다. 이것은 여러 종류의 필터나 톤 제어 장치 혹은 그래픽 이퀄라이저를 나타낼 수 있는 {{domxref("AudioNode")}}입니다. `BiquadFilterNode`는 항상 단 하나의 입력과 출력만을 가집니다.
- {{domxref("ConvolverNode")}}
  - : **`ConvolverNode`** 인터페이스는 주어진 {{domxref("AudioBuffer")}}에 선형 콘볼루션을 수행하는 {{domxref("AudioNode")}}이며, 리버브 이펙트를 얻기 위해 자주 사용됩니다.
- {{domxref("DelayNode")}}
  - : **`DelayNode`** 인터페이스는 지연선을 나타냅니다. 지연선은 입력 데이터가 출력에 전달되기까지의 사이에 딜레이를 발생시키는 {{domxref("AudioNode")}} 오디오 처리 모듈입니다.
- {{domxref("DynamicsCompressorNode")}}
  - : **`DynamicsCompressorNode`** 인터페이스는 압축 이펙트를 제공합니다, 이는 신호의 가장 큰 부분의 볼륨을 낮추어 여러 사운드를 동시에 재생할 때 발생할 수 있는 클리핑 및 왜곡을 방지합니다.
- {{domxref("GainNode")}}
  - : **`GainNode`** 인터페이스는 음량의 변경을 나타냅니다. 이는 출력에 전달되기 전의 입력 데이터에 주어진 음량 조정을 적용하기 위한 {{domxref("AudioNode")}} 오디오 모듈입니다.
- {{domxref("WaveShaperNode")}}
  - : **`WaveShaperNode`** 인터페이스는 비선형 왜곡을 나타냅니다. 이는 곡선을 사용하여 신호의 파형 형성에 왜곡을 적용하는 {{domxref("AudioNode")}}입니다. 분명한 왜곡 이펙트 외에도 신호에 따뜻한 느낌을 더하는데 자주 사용됩니다.
- {{domxref("PeriodicWave")}}
  - : {{domxref("OscillatorNode")}}의 출력을 형성하는데 사용될 수 있는 주기적 파형을 설명합니다.
- {{domxref("IIRFilterNode")}}
  - : 일반적인 **[infinite impulse response](https://en.wikipedia.org/wiki/infinite%20impulse%20response)** (IIR) 필터를 구현합니다; 이 유형의 필터는 음색 제어 장치와 그래픽 이퀄라이저를 구현하는 데 사용될 수 있습니다.

### 오디오 목적지 정의하기

처리된 오디오를 어디에 출력할지 정의하는 인터페이스입니다.

- {{domxref("AudioDestinationNode")}}
  - : **`AudioDestinationNode`** 인터페이스는 주어진 컨텍스트 내의 오디오 소스의 최종 목적지를 나타냅니다. 주로 기기의 스피커로 출력할 때 사용됩니다.
- {{domxref("MediaStreamAudioDestinationNode")}}
  - : **`MediaStreamAudioDestinationNode`** 인터페이스는 단일 `AudioMediaStreamTrack` 을 가진 [WebRTC](/ko/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}}로 구성된 오디오 목적지를 나타내며, 이는 {{ domxref("MediaDevices.getUserMedia", "getUserMedia()") }}에서 얻은 {{domxref("MediaStream")}}과 비슷한 방식으로 사용할 수 있습니다. 이것은 오디오 목적지 역할을 하는 {{domxref("AudioNode")}}입니다.

### 데이터 분석 및 시각화

오디오에서 재생시간이나 주파수 등의 데이터를 추출하기 위한 인터페이스입니다.

- {{domxref("AnalyserNode")}}
  - : **`AnalyserNode`** 인터페이스는 데이터를 분석하고 시각화하기 위한 실시간 주파수와 시간영역 분석 정보를 제공하는 노드를 나타냅니다.

### 오디오 채널을 분리하고 병합하기

오디오 채널들을 분리하거나 병합하기 위한 인터페이스입니다.

- {{domxref("ChannelSplitterNode")}}
  - : **`ChannelSplitterNode`** 인터페이스는 오디오 소스의 여러 채널을 모노 출력 셋으로 분리합니다.
- {{domxref("ChannelMergerNode")}}
  - : **`ChannelMergerNode`** 인터페이스는 여러 모노 입력을 하나의 출력으로 재결합합니다. 각 입력은 출력의 채널을 채우는데 사용될 것입니다.

### 오디오 공간화

오디오 소스에 오디오 공간화 패닝 이펙트를 추가하는 인터페이스입니다.

- {{domxref("AudioListener")}}
  - : **`AudioListener`** 인터페이스는 오디오 공간화에 사용되는 오디오 장면을 청취하는 고유한 시청자의 위치와 방향을 나타냅니다.
- {{domxref("PannerNode")}}
  - : **`PannerNode`** 인터페이스는 공간 내의 신호 양식을 나타냅니다. 이것은 자신의 오른손 직교 좌표 내의 포지션과, 속도 벡터를 이용한 움직임과, 방향성 원뿔을 이용한 방향을 서술하는 {{domxref("AudioNode")}} 오디오 프로세싱 모듈입니다.
- {{domxref("StereoPannerNode")}}
  - : **`StereoPannerNode`** 인터페이스는 오디오 스트림을 좌우로 편향시키는데 사용될 수 있는 간단한 스테레오 패너 노드를 나타냅니다.

### JavaScript에서의 오디오 프로세싱

오디오 worklet을 사용하여, 여러분은 JavaScript 또는 [WebAssembly](/ko/docs/WebAssembly)로 작성된 사용자 정의 오디오 노드를 정의할 수 있습니다. 오디오 worklet은 {{domxref("Worklet")}} 인터페이스를 구현하는데, 이는 {{domxref("Worker")}} 인터페이스의 가벼운 버전입니다.

- {{domxref("AudioWorklet")}}
  - : `AudioWorklet` 인터페이스는 {{domxref("AudioContext")}} 객체의 {{domxref("BaseAudioContext.audioWorklet", "audioWorklet")}}을 통하여 사용 가능하고, 메인 스레드를 실행할 오디오 worklet에 모듈을 추가할 수 있게 합니다.
- {{domxref("AudioWorkletNode")}}
  - : `AudioWorkletNode` 인터페이스는 오디오 그래프에 임베드된 {{domxref("AudioNode")}}을 나타내고 해당하는 `AudioWorkletProcessor`에 메시지를 전달할 수 있습니다.
- {{domxref("AudioWorkletProcessor")}}
  - : `AudioWorkletProcessor` 인터페이스는 오디오를 직접 생성하거나, 처리하거나, 또는 분석하는 `AudioWorkletGlobalScope`에서 실행되는 오디오 프로세싱 코드를 나타내고, 해당하는 `AudioWorkletNode`에 메시지를 전달할 수 있습니다.
- {{domxref("AudioWorkletGlobalScope")}}
  - : `AudioWorkletGlobalScope` 인터페이스는 오디오 프로세싱 스크립트가 실행되는 워커 컨텍스트를 나타내는 파생된 객체인 `WorkletGlobalScope`입니다; 이것은 메인 스레드가 아닌 worklet 스레드에서 JavaScript를 사용하여 직접적으로 오디오 데이터의 생성, 처리, 분석을 가능하게 하도록 설계되었습니다.

#### 안 쓰임: 스크립트 프로세서 노드

오디오 worklet이 정의되기 전에, Web Audio API는 JavaScript 기반의 오디오 프로세싱을 위해 `ScriptProcessorNode`를 사용했습니다. 코드가 메인 스레드에서 실행되기 때문에, 나쁜 성능을 가지고 있었습니다. `ScriptProcessorNode`는 역사적인 이유로 보존되나 deprecated되었습니다.

- {{domxref("ScriptProcessorNode")}} {{deprecated_inline}}
  - : **`ScriptProcessorNode`** 인터페이스는 자바스크립트를 이용한 오디오 생성, 처리, 분석 기능을 제공합니다. 이것은 현재 입력 버퍼와 출력 버퍼, 총 두 개의 버퍼에 연결되는 {{domxref("AudioNode")}} 오디오 프로세싱 모듈입니다. {{domxref("AudioProcessingEvent")}} 인터페이스를 구현하는 이벤트는 입력 버퍼에 새로운 데이터가 들어올 때마다 객체로 전달되고, 출력 버퍼가 데이터로 채워지면 이벤트 핸들러가 종료됩니다.
- {{event("audioprocess")}} (event) {{deprecated_inline}}
  - : `audioprocess` 이벤트는 Web Audio API {{domxref("ScriptProcessorNode")}}의 입력 버퍼가 처리될 준비가 되었을 때 발생합니다.
- {{domxref("AudioProcessingEvent")}} {{deprecated_inline}}
  - : [Web Audio API](/ko/docs/Web/API/Web_Audio_API) `AudioProcessingEvent`는 {{domxref("ScriptProcessorNode")}} 입력 버퍼가 처리될 준비가 되었을 때 발생하는 이벤트를 나타냅니다.

### 오프라인/백그라운드 오디오 처리하기

다음을 이용해 백그라운드(장치의 스피커가 아닌 {{domxref("AudioBuffer")}}으로 렌더링)에서 오디오 그래프를 신속하게 처리/렌더링 할수 있습니다.

- {{domxref("OfflineAudioContext")}}
  - : **`OfflineAudioContext`** 인터페이스는 {{domxref("AudioNode")}}로 연결되어 구성된 오디오 프로세싱 그래프를 나타내는 {{domxref("AudioContext")}} 인터페이스입니다. 표준 **`AudioContext`** 와 대조적으로, **`OfflineAudioContext`** 는 실제로 오디오를 렌더링하지 않고 가능한 빨리 버퍼 내에서 생성합니다.
- {{event("complete")}} (event)
  - : **`complete`** 이벤트는 {{domxref("OfflineAudioContext")}}의 렌더링이 종료될때 발생합니다.
- {{domxref("OfflineAudioCompletionEvent")}}
  - : **`OfflineAudioCompletionEvent`** 이벤트는 {{domxref("OfflineAudioContext")}} 의 처리가 종료될 때 발생하는 이벤트를 나타냅니다. {{event("complete")}} 이벤트는 이 이벤트를 구현합니다.

## 가이드와 자습서

{{LandingPageListSubpages}}

## 예제

여러분은 GitHub의 [webaudio-example 레포지토리](https://github.com/mdn/webaudio-examples/)에서 몇 개의 예제를 찾을 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

### 자습서/가이드

- [Web Audio API의 기본 개념](/ko/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [고급 기술: 소리 생성, 시퀸싱, 타이밍, 스케쥴링](/ko/docs/Web/API/Web_Audio_API/Advanced_techniques)
- [미디어와 Web Audio API에 대한 자동 재생 가이드](/ko/docs/Web/Media/Autoplay_guide)
- [IIR 필터 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_IIR_filters)
- [Web Audio API 시각화](/ko/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Web audio 공간화 기초](/ko/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
- [ConstantSourceNode로 다수의 매개변수 제어하기](/ko/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)
- [positional audio와 WebGL 같이 사용하기](https://www.html5rocks.com/tutorials/webaudio/positional_audio/)
- [Web Audio API로 게임 오디오 개발하기](https://www.html5rocks.com/tutorials/webaudio/games/)
- [webkitAudioContext 코드를 AudioContext 기반 표준에 포팅하기](/ko/docs/Web/API/Web_Audio_API/Migrating_from_webkitAudioContext)

### 라이브러리

- [Tones](https://github.com/bit101/tones): Web Audio API를 사용하여 특정한 음색/음을 재생하는 간단한 라이브러리
- [Tone.js](https://tonejs.github.io/): 브라우저에서 상호작용을 하는 음악을 생성하기 위한 프레임워크
- [howler.js](https://github.com/goldfire/howler.js/): 다른 유용한 기능들을 제공할 뿐만 아니라, [Web Audio API](https://webaudio.github.io/web-audio-api/)을 기본으로 하고 [HTML5 Audio](https://www.whatwg.org/specs/web-apps/current-work/#the-audio-element)를 대비책으로 가지는 JS 오디오 라이브러리
- [Mooog](https://github.com/mattlima/mooog): jQuery 스타일의 AudioNode 체이닝, mixer 스타일의 전송/반환, 등등
- [XSound](https://korilakkuma.github.io/XSound/): 신시사이저, 이펙트, 시각화, 레코딩 등을 위한 Web Audio API 라이브러리
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): 다른 소스로부터 하나의 파일에 비디오와 오디오를 레코드하고 결합시키기 위한 Web Audio API를 사용하는 HTML5 비디오 language lab 웹 애플리케이션 ([GitHub에 있는 소스](https://github.com/chrisjohndigital/OpenLang))
- [Pts.js](https://ptsjs.org/): 웹 오디오 시각화를 단순화합니다 ([가이드](https://ptsjs.org/guide/sound-0800))

### 관련 주제

- [웹 미디어 기술](/ko/docs/Web/Media)
- [웹에서의 미디어 타입과 포맷에 대한 가이드](/ko/docs/Web/Media/Formats)
