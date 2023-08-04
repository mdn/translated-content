---
title: webkitAudioContext에서 이주하기
slug: Web/API/Web_Audio_API/Migrating_from_webkitAudioContext
---

Web Audio API는 현 상태에 이르기까지 많은 반복을 거쳤습니다. 이것은 처음에 WebKit에서 구현되었고, 이것의 낡은 부분들의 일부는 그것들이 명세에서 대체되는 동안 즉시 제거되지 않았는데, 이는 많은 사이트들이 비호환되는 코드를 사용하는 것으로 이어졌습니다. 이 글에서, 우리는 Web Audio API가 WebKit에서 처음 구현된 이후로의 Web Audio API에서의 차이를 다루고 현대 Web Audio API를 사용하기 위해 어떻게 코드를 업데이트해야 되는지를 다룹니다.

Web Audio 표준은 [WebKit](https://webkit.org/)에서 처음 구현되었고, 이 구현은 API의 [명세](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html)에서의 작업과 동시에 개발되었습니다. 명세가 진화하고 변화가 만들어짐에 따라, 낡은 구현 부분들 중 일부는 이전 호환성의 이유에 기인해 WebKit (그리고 Blink) 구현에서 제거되지 않았습니다.

Web Audio 명세를 구현하는 (Gecko와 같은) 새로운 엔진들은 오직 명세의 공식, 최종 버전만을 구현하는데, 이것이 의미하는 바는 `webkitAudioContext`나 Web Audio 명세에서의 오래된 명명 규칙을 사용하는 코드는 Web Audio 구현을 따르는 것에서 별도의 조작 없이 즉시 작동하지 않을지도 모른다는 것입니다. 이 글은 개발자들이 이런 문제들을 만날 가능성이 있는 영역들을 요약하기를 시도하고 어떻게 그런 코드를 각각 다른 브라우저 엔진들에서 작동할 {{domxref("AudioContext")}}에 기반한 표준으로 이동할지에 대한 예제들을 제공합니다.

> **참고:** [webkitAudioContext monkeypatch](https://github.com/cwilso/webkitAudioContext-MonkeyPatch)라 불리는 라이브러리가 있는데, 이는 `webkitAudioContext`를 겨냥하는 대부분의 코드를 별도의 조작 없이 `AudioContext`에 기반한 표준에서 작동하게 만들기 위해 이 변화들 중 일부를 자동적으로 수정하지만, 이것은 현재 아래의 모든 경우들을 다루지 않고 있습니다. 이것에 의해 자동적으로 다뤄지는 API들의 목록을 보기 위해서는 이 라이브러리의 [README 파일](https://github.com/cwilso/webkitAudioContext-MonkeyPatch/blob/gh-pages/README.md)을 참고해 보세요.

## 생성자 메서드에서의 변화

`webkitAudioContext`의 세 가지 생성자 메서드가 {{domxref("AudioContext")}}에서 재명명되었습니다.

- `createGainNode()`는 {{domxref("createGain")}}으로 바뀌었습니다.
- `createDelayNode()`는 {{domxref("createDelay")}}로 바뀌었습니다.
- `createJavaScriptNode()`는 {{domxref("createScriptProcessor")}}로 바뀌었습니다.

이것들은 {{domxref("AudioContext")}}에서 이 메서드명들의 일관성을 개선시키기 위해 만들어진 단순한 개명입니다. 만약 여러분의 코드가, 아래의 예시처럼 이 이름중에 어느 것이라도 사용하고 있다면:

```js
// 오래된 메서드명들
var gain = context.createGainNode();
var delay = context.createDelayNode();
var js = context.createJavascriptNode(1024);
```

여러분은 다음과 같이 보이도록 메서드의 이름을 변경할 수 있습니다:

```js
// 새로운 메서드명들
var gain = context.createGain();
var delay = context.createDelay();
var js = context.createScriptProcessor(1024);
```

이 메서드명들의 의미는 새로 이름붙혀진 버전에서도 동일합니다.

## 노드를 시작하고 멈추는 것에 대한 변화

`webkitAudioContext`에서, {{domxref("AudioBufferSourceNode")}}와 {{domxref("OscillatorNode")}}를 시작하거나 멈추는 두 가지 방법이 있습니다: `noteOn()`과 `noteOff()` 메서드와, `start()`와 `stop()` 메서드입니다. ({{domxref("AudioBufferSourceNode ")}}는 아직 출력을 시작하는 다른 방법을 가지고 있습니다: `noteGrainOn()` 메서드입니다.) `noteOn()`/`noteGrainOn()`/`noteOff()` 메서드는 이 노드들에서 출력을 시작/정지하는 원래의 방법이었으나, 명세의 새로운 버전에서 `noteOn()`과 `noteGrainOn()` 메서드는 하나의 `start()` 메서드로 통합되었고, `noteOff()` 메서드는 `stop()` 메서드로 이름이 바뀌었습니다.

여러분의 코드를 변경하기 위해서는, 여러분은 단지 사용한 메서드의 이름만 변경하시면 됩니다. 예를 들어, 만약 여러분이 아래와 같은 코드를 가지고 있다면:

```js
var osc = context.createOscillator();
osc.noteOn(1);
osc.noteOff(1.5);

var src = context.createBufferSource();
src.noteGrainOn(1, 0.25);
src.noteOff(2);
```

표준 AudioContext API로 변경하기 위해서 다음과 같이 변경할 수 있습니다:

```js
var osc = context.createOscillator();
osc.start(1);
osc.stop(1.5);

var src = context.createBufferSource();
src.start(1, 0.25);
src.stop(2);
```

## 동기 버퍼 생성 제거

Web Audio의 오래된 WebKit 구현에서, `createBuffer()`의 두 가지 버전이 있었는데, 하나는 초기적으로 빈 버퍼를 생성했고, 하나는 인코드된 오디오를 포함하고 있는 존재하는 {{domxref("ArrayBuffer")}}를 취해, 그것을 디코드해 {{domxref("AudioBuffer")}}의 형태로 결과를 반환했습니다. `createBuffer()`의 후기 버전은 잠재적으로 비용이 많이 들었는데, 왜냐하면 이것은 오디오 버퍼를 동기적으로 디코드하고, 버퍼가 임의적으로 큰 채로, 이 메서드가 작업을 완료하는 데 많은 시간을 취할 수 있었고, 그 동안 웹 페이지의 어떤 다른 부분의 코드도 실행될 수 없었기 때문입니다.

이런 문제들 때문에, `createBuffer()` 메서드의 이 버전은 제거되었고, 여러분은 대신 비동기적 `decodeAudioData()` 메서드를 사용해야 합니다.

아래의 예제는 네트워크를 통해 오디오 파일을 다운로드받고, `createBuffer()`를 사용해 그것을 디코드하는 낡은 코드를 보여줍니다.

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/path/to/audio.ogg", true);
xhr.responseType = "arraybuffer";
xhr.send();
xhr.onload = function () {
  var decodedBuffer = context.createBuffer(xhr.response, false);
  if (decodedBuffer) {
    // 디코딩은 성공적이었습니다, 오디오 버퍼로 무언가 유용한 걸 하십시오
  } else {
    alert("오디오 버퍼 디코딩 실패");
  }
};
```

아래에서 보이는 것처럼, `decodeAudioData()`를 사용하기 위해 이 코드를 전환하는 것은 비교적 단순합니다:

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/path/to/audio.ogg", true);
xhr.responseType = "arraybuffer";
xhr.send();
xhr.onload = function () {
  context.decodeAudioData(
    xhr.response,
    function onSuccess(decodedBuffer) {
      // 디코딩은 성공적이었습니다, 오디오 버퍼로 무언가 유용한 걸 하십시오
    },
    function onFailure() {
      alert("오디오 버퍼 디코딩 실패");
    },
  );
};
```

`decodeAudioData()` 메서드는 비동기적인데, 이는 이것이 즉시 반환할 것이고, 디코딩이 끝나면, 성공 혹은 실패 콜백 함수 중 하나가 오디오 디코딩이 성공적이었느냐에 따라 호출될 것임을 의미한다는 것에 주목하십시오. 위의 예제에서 보이다시피, 성공 콜백에서의 `createBuffer()` 호출 이후에 발생되는 부분을 실행하기 위해 여러분은 코드를 재구조화할 필요가 있을 지도 모릅니다.

## AudioParam.setTargetValueAtTime의 재명명

{{domxref("AudioParam")}} 인터페이스의 `setTargetValueAtTime()` 메서드는 `setTargetAtTime()`으로 이름이 바뀌었습니다. 이것은 또한 API의 이해성을 개선하기 위한 단순한 개명이고, 메서드의 의미는 동일합니다. 만약 여러분의 코드가 `setTargetValueAtTime()`를 사용하고 있다면, `setTargetAtTime()`으로 이름을 바꿀 수 있습니다. 예를 들자면, 만약 우리가 다음과 같은 코드를 가지고 있다면:

```js
var gainNode = context.createGain();
gainNode.gain.setTargetValueAtTime(0.0, 10.0, 1.0);
```

다음과 같이, 여러분은 메서드의 이름을 바꿀 수 있고, 표준을 따를 수 있습니다:

```js
var gainNode = context.createGain();
gainNode.gain.setTargetAtTime(0.0, 10.0, 1.0);
```

## 변경된 열거형 값들

원래의 `webkitAudioContext` API는 C-스타일 숫자 기반의 열거형 값들을 API에서 사용했습니다. 이 값들은 Web IDL 기반의 열거형 값들을 사용하는 것으로 변경되었는데, 이것들은 {{domxref("HTMLInputElement")}} 속성 {{domxref("HTMLInputElement.type", "type")}}과 같은 것들과 비슷하기 때문에 친숙할지도 모릅니다.

### OscillatorNode.type

{{domxref("OscillatorNode")}}의 type 속성은 Web IDL 열거형을 사용하는 것으로 변경되었습니다. `webkitAudioContext`를 사용하는 오래된 코드는 아래처럼 {{domxref("AudioContext")}} 기반의 표준으로 변경될 수 있습니다:

```js
// 오래된 webkitAudioContext 코드:
var osc = context.createOscillator();
osc.type = osc.SINE; // sine 파형
osc.type = osc.SQUARE; // square 파형
osc.type = osc.SAWTOOTH; // sawtooth 파형
osc.type = osc.TRIANGLE; // triangle 파형
osc.setWaveTable(table);
var isCustom = osc.type == osc.CUSTOM; // isCustom은 true일 것입니다

// 새로운 표준 AudioContext 코드:
var osc = context.createOscillator();
osc.type = "sine"; // sine 파형
osc.type = "square"; // square 파형
osc.type = "sawtooth"; // sawtooth 파형
osc.type = "triangle"; // triangle 파형
osc.setPeriodicWave(table); // 참고: setWaveTable은 setPeriodicWave로 이름이 바뀌었습니다!
var isCustom = osc.type == "custom"; // isCustom은 true일 것입니다
```

### BiquadFilterNode.type

{{domxref("BiquadFilterNode")}}의 type 속성은 Web IDL 열거형을 사용하는 것으로 변경되었습니다. `webkitAudioContext`를 사용하는 오래된 코드는 아래처럼 {{domxref("AudioContext")}} 기반의 표준으로 변경될 수 있습니다.

```js
// 오래된 webkitAudioContext 코드:
var filter = context.createBiquadFilter();
filter.type = filter.LOWPASS; // lowpass 필터
filter.type = filter.HIGHPASS; // highpass 필터
filter.type = filter.BANDPASS; // bandpass 필터
filter.type = filter.LOWSHELF; // lowshelf 필터
filter.type = filter.HIGHSHELF; // highshelf 필터
filter.type = filter.PEAKING; // peaking 필터
filter.type = filter.NOTCH; // notch 필터
filter.type = filter.ALLPASS; // allpass 필터

// 새로운 표준 AudioContext 코드:
var filter = context.createBiquadFilter();
filter.type = "lowpass"; // lowpass 필터
filter.type = "highpass"; // highpass 필터
filter.type = "bandpass"; // bandpass 필터
filter.type = "lowshelf"; // lowshelf 필터
filter.type = "highshelf"; // highshelf 필터
filter.type = "peaking"; // peaking 필터
filter.type = "notch"; // notch 필터
filter.type = "allpass"; // allpass 필터
```

### PannerNode.panningModel

{{domxref("PannerNode")}}의 panningModel 속성은 Web IDL 열거형을 사용하는 것으로 변경되었습니다. `webkitAudioContext`를 사용하는 오래된 코드는 아래처럼 {{domxref("AudioContext")}} 기반의 표준으로 변경될 수 있습니다:

```js
// 오래된 webkitAudioContext 코드:
var panner = context.createPanner();
panner.panningModel = panner.EQUALPOWER; // equalpower 패닝
panner.panningModel = panner.HRTF; // HRTF 패닝

// New standard AudioContext code:
var panner = context.createPanner();
panner.panningModel = "equalpower"; // equalpower 패닝
panner.panningModel = "HRTF"; // HRTF 패닝
```

### PannerNode.distanceModel

{{domxref("PannerNode")}}의 `distanceModel` 속성은 Web IDL 열거형을 사용하는 것으로 변경되었습니다. `webkitAudioContext`를 사용하는 오래된 코드는 아래와 같이 {{domxref("AudioContext")}} 기반의 표준으로 변경될 수 있습니다:

```js
// 오래된 webkitAudioContext 코드:
var panner = context.createPanner();
panner.distanceModel = panner.LINEAR_DISTANCE; // linear distance 모델
panner.distanceModel = panner.INVERSE_DISTANCE; // inverse distance 모델
panner.distanceModel = panner.EXPONENTIAL_DISTANCE; // exponential distance 모델

// 새로운 표준 AudioContext 코드:
var panner = context.createPanner();
panner.distanceModel = "linear"; // linear distance 모델
panner.distanceModel = "inverse"; // inverse distance 모델
panner.distanceModel = "exponential"; // exponential distance 모델
```

## Gain 제어는 이것만의 노드 유형으로 이동됨

Web Audio 표준은 이제 모든 gain을 {{domxref("GainNode")}}를 사용하여 제어합니다. `gain` 속성을 직접 음원에 설정하는 대신, 여러분은 소스를 gain 노드에 연결하고 이 노드의 `gain` 파라미터를 사용하여 gain을 제어합니다.

### AudioBufferSourceNode

{{domxref("AudioBufferSourceNode")}}의 `gain` 특성은 제거되었습니다. 같은 기능은 {{domxref("AudioBufferSourceNode")}}를 gain 노드에 연결함으로써 달성될 수 있습니다. 아래의 예제를 참고하세요:

```js
// 오래된 webkitAudioContext 코드:
var src = context.createBufferSource();
src.buffer = someBuffer;
src.gain.value = 0.5;
src.connect(context.destination);
src.noteOn(0);

// 새로운 표준 AudioContext 코드:
var src = context.createBufferSource();
src.buffer = someBuffer;
var gain = context.createGain();
src.connect(gain);
gain.gain.value = 0.5;
gain.connect(context.destination);
src.start(0);
```

### AudioBuffer

{{domxref("AudioBuffer")}}의 `gain` 특성은 제거되었습니다. 같은 기능은 버퍼를 소유한 {{domxref("AudioBufferSourceNode")}}를 gain 노드에 연결함으로써 달성될 수 있습니다. 아래의 예제를 참고하세요:

```js
// 오래된 webkitAudioContext 코드:
var src = context.createBufferSource();
src.buffer = someBuffer;
src.buffer.gain = 0.5;
src.connect(context.destination);
src.noteOn(0);

// 새로운 표준 AudioContext 코드:
var src = context.createBufferSource();
src.buffer = someBuffer;
var gain = context.createGain();
src.connect(gain);
gain.gain.value = 0.5;
gain.connect(context.destination);
src.start(0);
```

## AudioBufferSourceNode.looping의 제거

{{domxref("AudioBufferSourceNode")}}의 `looping` 특성은 제거되었습니다. 이 특성은 `loop` 특성의 별명이어서, 여러분은 단지 `loop` 특성을 대신 사용할 수 있습니다. 이것과 같은 코드를 가지는 대신:

```js
var source = context.createBufferSource();
source.looping = true;
```

명세의 최근 버전을 준수하기 위해 여러분은 이것을 변경할 수 있습니다:

```js
var source = context.createBufferSource();
source.loop = true;
```

참고: `loopStart`와 `loopEnd` 특성은 `webkitAudioContext`에서 지원되지 않습니다.

## 재생 상태 결정에 대한 변화

{{domxref("AudioBufferSourceNode")}}와 {{domxref("OscillatorNode")}}의 `playbackState` 특성은 제거되었습니다. 여러분이 이 특성을 사용하는 이유에 따라, 여러분은 같은 정보를 얻기 위해 다음의 기법들을 사용할 수 있습니다.

- 만약 여러분이 이 특성을 `UNSCHEDULED_STATE`과 비교할 필요가 있다면, 여러분은 기본적으로 여러분이 노드의 `start()`를 호출했는지 아닌지를 기억할 수 있습니다.
- 만약 여러분이 이 특성을 `SCHEDULED_STATE`와 비교할 필요가 있다면, 여러분은 기본적으로 여러분이 노드의 `start()`를 호출했는지 아닌지를 기억할 수 있습니다. 재생이 시작되었는지 아닌지를 알기 위해 여러분은 {{domxref("AudioContext.currentTime")}}의 값을 `start()`에 전달된 첫번째 매개변수와 비교할 수 있습니다.
- 만약 여러분이 이 특성을 `PLAYING_STATE`와 비교할 필요가 있다면, 재생이 시작되었는지 아닌지를 알기 위해 여러분은 {{domxref("AudioContext.currentTime")}}의 값을 `start()`에 전달된 첫번째 매개변수와 비교할 수 있습니다.
- 만약 여러분이 언제 노드의 재생이 끝나는지를 알 필요가 있다면 (이는 `playbackState`의 가장 중요한 사용 경우입니다), 여러분이 언제 재생이 끝나는지를 알기 위해 사용할 수 있는 새로운 ended 이벤트가 있습니다. 다음의 코드 예제를 봐 주세요:

```js
// 오래된 webkitAudioContext 코드:
var src = context.createBufferSource();
// 얼마 후...
var isFinished = src.playbackState == src.FINISHED_STATE;

// 새로운 AudioContext 코드:
var src = context.createBufferSource();
function endedHandler(event) {
  isFinished = true;
}
var isFinished = false;
src.onended = endedHandler;
```

정확히 같은 변화가 {{domxref("AudioBufferSourceNode")}}와 {{domxref("OscillatorNode")}} 모두에 적용되었으므로, 여러분은 같은 기법을 두 종류의 노드에 적용할 수 있습니다.

## AudioContext.activeSourceCount의 제거

`activeSourceCount` 특성이 {{domxref("AudioContext")}}에서 제거되었습니다. 만약 여러분이 재생되고 있는 소스 노드의 수를 셀 필요가 있다면, 여러분은 위에서 보이는 것처럼, 소스 노드들의 ended 이벤트를 다룸으로써 카운트를 유지할 수 있습니다.

이 코드처럼, {{domxref("AudioContext")}}의 `activeSourceCount` 특성을 사용하는 코드:

```js
var src0 = context.createBufferSource();
var src1 = context.createBufferSource();
// 버퍼와 다른 매개변수들을 설정합니다...
src0.start(0);
src1.start(0);
// 얼마 후...
console.log(context.activeSourceCount);
```

다음과 같이 재작성될 수 있습니다:

```js
// 재생되고 있는 소스 노드를 추적할 배열:
var sources = [];
// 소스를 시작할 때, 이것을 배열의 끝에 넣고,
// AudioBufferSourceNode가 끝에 도달했을 때
// 이것이 확실히 제거되도록 이벤트 처리기를 설정합니다.
// 첫번째 매개변수는 시작할 AudioBufferSourceNode이고,
// 다른 매개변수들은 AudioBufferSourceNode의 |start()|에의 매개변수입니다.
function startSource() {
  var src = arguments[0];
  var startArgs = Array.prototype.slice.call(arguments, 1);
  src.onended = function () {
    sources.splice(sources.indexOf(src), 1);
  };
  sources.push(src);
  src.start.apply(src, startArgs);
}
function activeSources() {
  return sources.length;
}
var src0 = context.createBufferSource();
var src0 = context.createBufferSource();
// 버퍼와 다른 매개변수들을 설정합니다...
startSource(src0, 0);
startSource(src1, 0);
// 얼마 후, 소스의 수를 확인합니다...
console.log(activeSources());
```

## WaveTable의 재명명

{{domxref("WaveTable")}} 인터페이스는 {{domxref("PeriodicWave")}}로 이름이 바뀌었습니다. 여기 `WaveTable`를 사용하는 낡은 코드를 어떻게 표준 AudioContext API로 옮기는지에 대한 방법이 있습니다.

```js
// 오래된 webkitAudioContext 코드:
var osc = context.createOscillator();
var table = context.createWaveTable(realArray, imaginaryArray);
osc.setWaveTable(table);

// 새로운 표준 AudioContext 코드:
var osc = context.createOscillator();
var table = context.createPeriodicWave(realArray, imaginaryArray);
osc.setPeriodicWave(table);
```

## AudioParam의 몇몇 읽기 전용 특성들의 제거

다음의 읽기 전용 특성들은 AudioParam으로부터 제거되었습니다: `name`, `units`, `minValue`, `maxValue`. 이것들은 정보를 제공하는 특성들이었습니다. 여기 어떻게 여러분이 이 값들을 만약 필요하다면 얻는지에 대한 정보가 있습니다.

- `name` 특성은 {{domxref("AudioParam")}} 객체의 이름을 나타내는 문자열입니다. 예를 들자면, {{domxref("GainNode.gain")}}의 이름은 `"gain"`입니다. 만약 여러분이 이 정보가 필요하다면 코드에서 어디서 {{domxref("AudioParam")}} 객체가 오는지 추적할 수 있습니다.
- `minValue`와 `maxValue` 특성은 {{domxref("AudioParam")}}의 명목상의 범위를 나타내는 읽기 전용 값입니다. 예를 들자면, {{domxref("GainNode") }}에 대해서, 이 값들은 각각 0과 1입니다. 이 경계는 엔진에 의해 강요되지 않고, 단지 정보를 제공하는 목적에서 사용된다는 것에 주목하십시오. 예제로써, gain 값을 2나, 심지어 -1로 설정하는 것은 완전히 유효합니다. 이 명목상의 값들을 찾기 위해서, 여러분은 [명세](https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html)를 참고할 수 있습니다.
- `webkitAudioContext` 구현에서 구현된 `units` 특성은 사용된 적이 없고, 항상 0을 반환합니다. 여러분이 이 특성이 필요할지도 모르는 이유는 없습니다.

## MediaElementAudioSourceNode.mediaElement의 제거

{{domxref("MediaElementAudioSourceNode")}}의 `mediaElement` 특성은 제거되었습니다. 만약 여러분이 나중에 이것에 접근할 필요가 있다면 여러분은 이 노드를 생성하기 위해 사용된 미디어 요소에 대한 참조를 유지할 수 있습니다.

## MediaStreamAudioSourceNode.mediaStream의 제거

{{domxref("MediaStreamAudioSourceNode")}}의 `mediaStream` 특성은 제거되었습니다. 만약 여러분이 나중에 이것에 접근할 필요가 있다면 여러분은 이 노드를 생성하기 위해 사용된 미디어 스트림에 대한 참조를 유지할 수 있습니다.
