---
title: ConstantSourceNode로 다수의 파라미터 제어하기
slug: Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode
---

{{APIRef("Web Audio API")}}

이 글은 다수의 파라미터가 같은 값을 공유하도록 파라미터들을 함께 연결하기 위해 어떻게 {{domxref("ConstantSourceNode")}}를 사용하는지를 설명합니다. 이 값은 {{domxref("ConstantSourceNode.offset")}} 파라미터의 값을 설정함으로써 변경될 수 있습니다.

간혹 다수의 오디오 파라미터들이 같은 값을 공유할 수 있도록, 심지어 값이 어떤 방법으로 변경되는 동안일지라도, 연결시켜두고 싶을 때가 있습니다. 예를 들자면, 한 세트의 오실레이터들이 있고, 이 두 개가 하나의 설정 가능한 볼륨을 공유할 필요가 있거나, 특정한 입력에 적용되나 모든 입력에는 적용되지 않는 필터가 있을 수도 있습니다. 반복문을 사용하여 각각의 영향받는 {{domxref("AudioParam")}}의 값을 한번에 하나씩 변경할 수도 있겠지만, 여기에는 두 가지 문제점이 있습니다. 첫째는, 곧 보게 되겠지만, 작성할 필요가 없는 추가적인 코드의 작성입니다. 그리고 둘째는, 그 반복은 스레드 (메인 스레드일 가능성이 높음) 의 소중한 CPU 시간을 사용합니다. 이런 작업을 이에 최적화되어 있으며 여러분의 코드보다 더욱 적합한 우선도에서 실행할 수 있는 오디오 렌더링 스레드에 넘길 수 있는 방법이 있습니다.

그 해결책이란 간단한데, 바로 첫눈에는 그다지 유용해 보이지 않는 오디오 노드 유형 {{domxref("ConstantSourceNode")}}을 사용하는 것입니다.

## 기법

이 방법은 듣기엔 어려워 보이지만 사실은 굉장히 쉽습니다. {{domxref("ConstantSourceNode")}}를 생성하고 항상 일치하는 값을 갖도록 연결된 모든 {{domxref("AudioParam")}}에 이 노드를 연결합니다. `ConstantSourceNode`의 {{domxref("ConstantSourceNode.offset", "offset")}} 값은 모든 출력으로 바로 전달되므로, 이 노드는 그 값을 각각의 연결된 파라미터에 보내는 스플리터 역할을 합니다.

아래의 그림은 이 과정이 어떻게 작동하는지 보여줍니다. 입력값 `N`은 {{domxref("ConstantSourceNode.offset")}} 속성의 값으로 설정됩니다. `ConstantSourceNode`는 필요한 만큼 많은 출력을 가질 수 있습니다. 아래 그림의 경우, `ConstantSourceNode`를 세 개의 노드에 연결했습니다. 두 개의 {{domxref("GainNode")}}와 {{domxref("StereoPannerNode")}}입니다. 그래서 `N`은 명시된 파라미터의 값이 됩니다 ({{domxref("GainNode")}}의 {{domxref("GainNode.gain", "gain")}}, {{domxref("StereoPannerNode")}}의 pan).

![어떻게 ConstantSourceNode가 입력 매개변수를 다수의 노드에 공유하기 위해 사용될 수 있는지를 보여주는 SVG 그림.](customsourcenode-as-splitter.svg)

그 결과로써, `N` (입력 {{domxref("AudioParam")}}의 값) 이 바뀔 때마다, 두 개의 `GainNode`의 `gain` 속성의 값 그리고 `StereoPannerNode`의 `pan` 속성의 값은 모두 `N`으로 또한 설정됩니다.

## 예제

실제 사용 예제를 살펴 봅시다. 이 간단한 예제에서는 세 개의 {{domxref("OscillatorNode")}}를 만들었습니다. 두 개는 공유된 입력 슬라이더를 사용해 제어되는 조정 가능한 gain을 가지고 있습니다. 나머지 오실레이터 하나는 고정된 볼륨을 가지고 있습니다.

### HTML

이 예제의 HTML 코드는 주로 오실레이터의 음색을 켜고 끄기 위한 버튼과 세 개 중 두 개의 오실레이터의 볼륨을 조절하기 위한 `range` type의 {{HTMLElement("input")}} 요소입니다.

```html
<div class="controls">
  <div class="left">
    <div id="playButton" class="button">▶️</div>
  </div>
  <div class="right">
    <span>Volume: </span>
    <input
      type="range"
      min="0.0"
      max="1.0"
      step="0.01"
      value="0.8"
      name="volume"
      id="volumeControl" />
  </div>
</div>

<p>
  음을 재생하고 정지하기 위해 위의 버튼을, 그리고 화음 E와 G의 볼륨을 변경하기
  위해 볼륨 슬라이더를 사용하세요.
</p>
```

```css hidden
.controls {
  width: 400px;
  position: relative;
  vertical-align: middle;
  height: 44px;
}

.button {
  font-size: 32px;
  cursor: pointer;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
}

.right {
  width: 50%;
  font:
    14px "Open Sans",
    "Lucida Grande",
    "Arial",
    sans-serif;
  position: absolute;
  right: 0;
  display: table-cell;
  vertical-align: middle;
}

.right span {
  vertical-align: middle;
}

.right input {
  vertical-align: baseline;
}

.left {
  width: 50%;
  position: absolute;
  left: 0;
  display: table-cell;
  vertical-align: middle;
}

.left span,
.left input {
  vertical-align: middle;
}
```

### JavaScript

이제 JavaScript 코드를 부분별로 살펴 봅시다.

#### 설정하기

전역 변수 초기화부터 시작해 봅시다.

```js
let context = null;

let playButton = null;
let volumeControl = null;

let oscNode1 = null;
let oscNode2 = null;
let oscNode3 = null;
let constantNode = null;
let gainNode1 = null;
let gainNode2 = null;
let gainNode3 = null;

let playing = false;
```

이 변수들은 다음과 같습니다.

- `context`
  - : 모든 오디오 노드들이 있는 {{domxref("AudioContext")}}.
- `playButton`과 `volumeControl`
  - : 재생 버튼과 볼륨 제어 요소에 대한 참조.
- `oscNode1`, `oscNode2`, `oscNode3`
  - : 화음을 생성하기 위해 쓰이는 세 개의 {{domxref("OscillatorNode")}}.
- `gainNode1`, `gainNode2`, `gainNode3`
  - : 세 개의 각 오실레이터에 대해 볼륨 레벨을 제공하는 세 개의 {{domxref("GainNode")}} 인스턴스. `gainNode2`와 `gainNode3`은 {{domxref("ConstantSourceNode")}}를 사용해 같은 조정 가능한 값을 가지기 위해 함께 연결될 것입니다.
- `constantNode`
  - : `gainNode2`와 `gainNode3`의 값을 함게 제어하기 위해 쓰이는 {{domxref("ConstantSourceNode")}}.
- `playing`
  - : 현재 음을 재생하고 있는지 아닌지를 추적하기 위해 사용할 {{jsxref("Boolean")}}.

이제 `setup()` 함수를 살펴봅시다. 이 함수는 window의 load 이벤트에 대한 이벤트 처리기(handler)입니다. 이것은 DOM이 준비되기 위한 모든 초기화 작업을 다룹니다.

```js
function setup() {
  context = new (window.AudioContext || window.webkitAudioContext)();

  playButton = document.querySelector("#playButton");
  volumeControl = document.querySelector("#volumeControl");

  playButton.addEventListener("click", togglePlay, false);
  volumeControl.addEventListener("input", changeVolume, false);

  gainNode1 = context.createGain();
  gainNode1.gain.value = 0.5;

  gainNode2 = context.createGain();
  gainNode3 = context.createGain();
  gainNode2.gain.value = gainNode1.gain.value;
  gainNode3.gain.value = gainNode1.gain.value;
  volumeControl.value = gainNode1.gain.value;

  constantNode = context.createConstantSource();
  constantNode.connect(gainNode2.gain);
  constantNode.connect(gainNode3.gain);
  constantNode.start();

  gainNode1.connect(context.destination);
  gainNode2.connect(context.destination);
  gainNode3.connect(context.destination);
}

window.addEventListener("load", setup, false);
```

먼저, window의 {{domxref("AudioContext")}}에 대한 접근을 얻고, 이 참조를 `context` 변수에 저장합니다. 그리고 나서 `playButton`에 재생 버튼에 대한 참조와 `volumeControl`에 사용자가 연결된 오실레이터 쌍의 gain을 조정하기 위해 사용할 슬라이더에 대한 참조를 설정하며 제어 위젯에 대한 참조를 얻습니다.

그리고 나서 재생 버튼의 [`click`](/ko/docs/Web/API/Element/click_event) 이벤트와 볼륨 슬라이더의 {{domxref("Element/input_event", "input")}} 이벤트에 이벤트 처리기를 부착합니다 (`togglePlay()` 메서드에 대해 알아보려면 [오실레이터 켜고 끄기](#오실레이터_켜고_끄기)를, 아주 짧은 `changeVolume()` 메서드를 살펴보려면 [연결된 오실레이터 제어하기](#연결된_오실레이터_제어하기)를 참고하세요).

다음으로, {{domxref("GainNode")}} `gainNode1`은 연결되지 않은 오실레이터의 볼륨을 다루기 위해 생성됩니다 (`oscNode1`). 이 gain은 0.5로 설정합니다. 또한 `gainNode2`와 `gainNode3`를 생성하고 이들의 값을 `gainNode1`의 값과 동일하게 설정합니다. 그 후, 볼륨 슬라이더의 값을 같은 값으로 설정해 이 값이 슬라이더가 제어하는 gain 레벨과 동기화되도록 합니다.

모든 gain 노드가 생성되고 나면, {{domxref("ConstantSourceNode")}}, `constantNode`를 생성합니다. 이 노드의 출력을 `gainNode2`와 `gainNode3` 둘 다의 `gain` {{domxref("AudioParam")}}에 연결하고, {{domxref("AudioScheduledSourceNode/start", "start()")}} 메서드를 호출해 constant 노드 실행을 시작합니다. 이제 이 노드는 두 개의 gain 노드의 값에 값 0.5를 전달하고, {{domxref("ConstantSourceNode.offset", "constantNode.offset")}}에서의 모든 변화는 자동적으로 `gainNode2`와 `gainNode3` 둘 다의 gain을 설정할 것입니다 (예상한 대로 그들의 오디오 입력에 영향을 미칩니다).

마지막으로, gain 노드에 전달되는 모든 소리가, 출력이 스피커이든, 헤드폰이든, 녹음 스트림이든, 또는 어떠한 다른 destination 유형이든 간에 출력에 도달하도록 모든 gain 노드를 {{domxref("AudioContext")}}의 {{domxref("BaseAudioContext/destination", "destination")}}에 연결합니다.

window의 load 이벤트 처리기를 `setup()` 함수에 설정하면, 무대는 준비 완료되었습니다. 어떻게 작동되는지 살펴봅시다.

#### 오실레이터 켜고 끄기

{{domxref("OscillatorNode")}}는 정지 상태를 지원하지 않기 때문에, 오실레이터를 다시 켜기 위해서 재생 버튼을 클릭했을 때 오실레이터를 제거하고 다시 시작시킴으로써 정지 상태를 흉내내야 합니다. 코드를 살펴봅시다.

```js
function togglePlay(event) {
  if (playing) {
    playButton.textContent = "▶️";
    stopOscillators();
  } else {
    playButton.textContent = "⏸";
    startOscillators();
  }
}
```

만약 `playing` 변수가 이미 오실레이터가 재생되고 있음을 나타낸다면, `playButton`의 내용을 유니코드 문자 "오른쪽을 가리키는 삼각형" (▶️)으로 변경하고 오실레이터를 끄기 위해 `stopOscillators()`를 호출합니다. 이 코드에 대해 아래의 [오실레이터 멈추기](#오실레이터_멈추기)를 참고하세요.

만약 `playing`이 현재 멈춰 있음을 나타내는 false라면, 재생 버튼의 내용을 유니코드 문자 "정지 부호" (⏸)로 변경하고 오실레이터가 음을 재생하도록 `startOscillators()`를 호출합니다. 이 코드는 아래의 [오실레이터 재생하기](#오실레이터_재생하기)에서 다뤄집니다.

#### 연결된 오실레이터 제어하기

연결된 오실레이터 쌍의 gain 슬라이더에 대한 이벤트 처리기인 `changeVolume()` 함수는 다음과 같이 생겼습니다.

```js
function changeVolume(event) {
  constantNode.offset.value = volumeControl.value;
}
```

이 간단한 함수는 두 노드의 gain을 제어합니다. 우리가 해야 하는 것은 {{domxref("ConstantSourceNode")}}의 {{domxref("ConstantSourceNode.offset", "offset")}} 파라미터의 값을 설정하는 것 뿐입니다. 이 값은 노드의 상수 출력 값이 되는데, 이는 노드의 모든 출력에 전달되고, 이 출력이라 함은, 위에서 설정되었다시피 `gainNode2`와 `gainNode3`입니다.

이것이 아주 간단한 예제이긴 하지만, 다수의 연결된 노드에서 재생되는 다수의 연결된 파라미터를 가진 32개의 오실레이터 신시사이저를 상상해 보십시오. 그것들 모두를 조정하기 위해 연산의 수를 줄일 수 있음은 코드의 크기와 성능 양 쪽 모두에 대해 매우 유용함을 증명할 것입니다.

#### 오실레이터 재생하기

오실레이터가 재생 중이 아닌 도중에 사용자가 재생/정지 토글 버튼을 클릭했을 때, `startOscillators()` 함수가 호출됩니다.

```js
function startOscillators() {
  oscNode1 = context.createOscillator();
  oscNode1.type = "sine";
  oscNode1.frequency.value = 261.625565300598634; // 중앙 C
  oscNode1.connect(gainNode1);

  oscNode2 = context.createOscillator();
  oscNode2.type = "sine";
  oscNode2.frequency.value = 329.627556912869929; // E
  oscNode2.connect(gainNode2);

  oscNode3 = context.createOscillator();
  oscNode3.type = "sine";
  oscNode3.frequency.value = 391.995435981749294; // G
  oscNode3.connect(gainNode3);

  oscNode1.start();
  oscNode2.start();
  oscNode3.start();

  playing = true;
}
```

세 개의 각 오실레이터는 같은 방식으로 설정됩니다.

1. {{domxref("BaseAudioContext.createOscillator")}}를 호출함으로써 {{domxref("OscillatorNode")}}를 생성합니다.
2. 오디오 파형으로써 사인파를 사용하기 위해 오실레이터의 type을 `"sine"`으로 설정합니다.
3. 오실레이터의 주파수를 원하는 값으로 설정합니다. 이 경우, `oscNode1`는 중앙 C로, `oscNode2`와 `oscNode3`는 E와 G음을 재생함으로써 화음을 완성합니다.
4. 새로운 오실레이터를 해당하는 gain 노드에 연결합니다.

세 개의 모든 오실레이터가 완성되고 나면, 이것들은 각각의 {{domxref("AudioScheduledSourceNode.start", "ConstantSourceNode.start()")}} 메서드를 차례로 호출함으로써 시작되고, `playing`은 음이 재생되는 것을 추적하기 위해 `true`로 설정됩니다.

#### 오실레이터 멈추기

음을 정지하기 위해 사용자가 재생 상태를 바꿨을 때 오실레이터를 멈추는 것은 각각의 노드를 정지하는 것과 마찬가지로 쉽습니다.

```js
function stopOscillators() {
  oscNode1.stop();
  oscNode2.stop();
  oscNode3.stop();
  playing = false;
}
```

각 노드는 {{domxref("AudioScheduledSourceNode.stop", "ConstantSourceNode.stop()")}} 메서드를 호출함으로써 정지되고, `playing`는 `false`로 설정됩니다.

### 결과

{{ EmbedLiveSample('Example', 600, 200) }}

## 같이 보기

- [Web Audio API](/ko/docs/Web/API/Web_Audio_API)
- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [간단한 신시사이저 키보드](/ko/docs/Web/API/Web_Audio_API/Simple_synth) (예제)
- {{domxref("OscillatorNode")}}
- {{domxref("ConstantSourceNode")}}
