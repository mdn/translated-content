---
title: "고급 기법: 오디오 생성 및 시퀸싱"
slug: Web/API/Web_Audio_API/Advanced_techniques
---

{{DefaultAPISidebar("Web Audio API")}}

이 자습서에서, 우리는 사운드 생성과 수정 뿐만 아니라, 타이밍과 스케쥴링도 다룰 것입니다. 우리는 샘플 로딩, 엔벨로프, 필터, 웨이브 테이블, 주파수 조정을 소개할 것입니다. 만약 여러분이 이 용어들에 익숙하고 Web Audio API 내에서의 이것들의 응용에 대한 입문을 찾고 있다면, 맞는 장소에 오셨습니다.

## 데모

우리는 아주 간단한 스텝 시퀸서를 살펴볼 것입니다:

![재생과 BPM 주 제어, 각각을 제어할 수 있는 4가지의 다른 소리를 기능으로 가지는 사운드 시퀸서 애플리케이션.](sequencer.png)

실제로는 이것은 라이브러리로 하는 것이 더 쉽습니다 — Web Audio API는 기반이 되도록 개발되었습니다. 만약 여러분이 무언가 더욱 복잡한 것의 개발에 착수하려고 한다면, [tone.js](https://tonejs.github.io/)가 시작하기 좋은 지점일 것입니다. 그러나, 학습 예제로서, 우리는 이런 데모를 기본 원칙들으로부터 어떻게 개발하는지를 보이고 싶습니다.

> [!NOTE]
> 여러분은 [step-sequencer](https://github.com/mdn/webaudio-examples/tree/master/step-sequencer) 소스 코드를 GitHub에서 찾을 수 있습니다; [step-sequencer 작동 예제](https://mdn.github.io/webaudio-examples/step-sequencer/)도 확인해 보세요.

인터페이스는 시퀸서를 재생/정지할 수 있게 하는 주 제어 버튼, 그리고 "음악"의 속도를 올리거나 내릴 수 있게 하는 BPM (beats per minute) 조절 슬라이더로 이루어져 있습니다.

재생될 수 있는 네 가지의 다른 음, 또는 소리가 있습니다. 각 소리는 네 개의 버튼을 가지고 있는데, 이는 음악의 한 마디에 있는 네 개의 비트를 나타냅니다. 이것들이 활성화되었을 때 노트는 소리를 낼 것입니다. 악기가 재생될 때, 이것은 이 비트들의 세트를 가로질러 이동하고 마디를 반복할 것입니다.

각 소리들은 또한 해당 소리를 수정할 수 있는 슬라이더를 가지고 있는데, 이는 이펙트나 우리가 이 소리들을 만들기 위해 사용한 각 기법의 특정한 파라미터를 조작할 수 있게 해 줍니다. 우리가 사용하는 이 기법들은:

| 소리의 이름 | 기법                              | 연관된 Web Audio API 기능                                                                         |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------------- |
| "스윕"      | 오실레이터, 주기파                | {{domxref("OscillatorNode")}}, {{domxref("PeriodicWave")}}                                        |
| "펄스"      | 다수의 오실레이터                 | {{domxref("OscillatorNode")}}                                                                     |
| "노이즈"    | 무작위 노이즈 버퍼, 바이쿼드 필터 | {{domxref("AudioBuffer")}}, {{domxref("AudioBufferSourceNode")}}, {{domxref("BiquadFilterNode")}} |
| "다이얼 음" | 재생할 사운드 샘플 로딩하기       | {{domxref("BaseAudioContext/decodeAudioData")}}, {{domxref("AudioBufferSourceNode")}}             |

> [!NOTE]
> 이 악기는 좋은 소리를 내기 위해 만들어지지 않았습니다. 이것은 데모 코드를 제공하기 위해 만들어졌고 이런 악기의 **아주** 단순화된 버전을 나타냅니다. 이 소리들은 다이얼 접속 모뎀에 기반합니다. 만약 여러분이 이것이 어떤 소리인지 모른다면 [여기서 들어볼 수 있습니다.](https://soundcloud.com/john-pemberton/modem-dialup)

## 오디오 컨텍스트 생성하기

지금쯤은 이미 익숙할지도 모르지만, 각 Web Audio API 앱은 오디오 컨텍스트로 시작합니다:

```js
// 크로스 브라우저 호환성을 위해
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

## "스윕" — 오실레이터, 주기파, 엔벨로프

여러분이 접속할 때 처음 듣는 노이즈인 우리가 "스윕" 소리라고 부를 것에 대해서, 우리는 소리를 생성하기 위해 오실레이터를 생성할 것입니다.

{{domxref("OscillatorNode")}}에는 바로 사용할 수 있는 기본 파형 — 사인파, 사각파, 삼각파, 톱니파 — 이 딸려 있습니다. 그러나, 기본으로 딸린 표준 파동을 사용하는 대신, 우리는 {{domxref("PeriodicWave")}} 인터페이스와 웨이브 테이블에 설정된 값들을 이용해 우리만의 소리를 만들 것입니다. 우리는 오실레이터로 이 사용자 정의 파동을 만들기 위해 {{domxref("BaseAudioContext.createPeriodicWave")}} 메서드를 사용할 수 있습니다.

### 주기파

우선, 우리는 주기파를 생성합니다. 이렇게 하기 위해서는, 우리는 {{domxref("BaseAudioContext.createPeriodicWave()")}} 메서드에 real과 imaginary 값을 전달할 필요가 있습니다:

```js
const wave = audioCtx.createPeriodicWave(wavetable.real, wavetable.imag);
```

> [!NOTE]
> 우리의 예제에서 웨이브 테이블은 별도의 JavaScript 파일 (`wavetable.js`) 에 저장되어 있는데, 왜냐하면 **아주** 많은 값들이 있기 때문입니다. 이것은 [Google Chrome Labs으로부터의 Web Audio API 예제들](https://github.com/GoogleChromeLabs/web-audio-samples/)에서 찾을 수 있는 [웨이브 테이블 레포지토리](https://github.com/GoogleChromeLabs/web-audio-samples/tree/main/archive/demos/wave-tables)에서 가져온 것입니다.

### 오실레이터

이제 우리는 {{domxref("OscillatorNode")}}를 생성하고 우리가 생성한 것에 이것의 파동을 설정합니다.

```js
function playSweep(time) {
  const osc = audioCtx.createOscillator();
  osc.setPeriodicWave(wave);
  osc.frequency.value = 440;
  osc.connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + 1);
}
```

여기서 우리는 시간 매개변수를 함수에 전달하는데, 이는 우리가 나중에 스윕을 스케쥴하기 위해서 사용할 것입니다.

### 진폭 제어하기

이것은 훌륭하지만, 만약 우리가 이것에 적용되는 진폭 엔벨로프를 가지고 있다면 멋지지 않을까요? Web Audio API로 엔벨로프를 생성하기 위해 필요한 메서드들에 익숙해지도록 간단한 것을 생성해 봅시다.

우리의 엔벨로프가 attack과 release를 가지고 있다고 해 봅시다. 우리는 사용자가 이것들을 인터페이스의 [range 입력](/ko/docs/Web/HTML/Element/input/range)를 사용하여 제어할 수 있도록 할 수 있습니다.

```html
<label for="attack">Attack</label>
<input
  name="attack"
  id="attack"
  type="range"
  min="0"
  max="1"
  value="0.2"
  step="0.1" />

<label for="release">Release</label>
<input
  name="release"
  id="release"
  type="range"
  min="0"
  max="1"
  value="0.5"
  step="0.1" />
```

이제 우리는 JavaScript에서 몇 가지 변수들을 생성하고 입력 값들이 업데이트되었을 때 바뀌도록 할 수 있습니다:

```js
let attackTime = 0.2;
const attackControl = document.querySelector("#attack");
attackControl.addEventListener(
  "input",
  function () {
    attackTime = Number(this.value);
  },
  false,
);

let releaseTime = 0.5;
const releaseControl = document.querySelector("#release");
releaseControl.addEventListener(
  "input",
  function () {
    releaseTime = Number(this.value);
  },
  false,
);
```

### 최종 playSweep() 함수

이제 우리는 우리의 `playSweep()` 함수를 확장할 수 있습니다. 우리는 {{domxref("GainNode")}}를 추가하고 실제로 진폭 변화를 소리에 적용하기 위하여 우리의 오디오 그래프를 통해 이 노드를 연결할 필요가 있습니다. gain 노드는 하나의 속성 `gain` 을 가지고 있는데, 이는 {{domxref("AudioParam")}} 유형입니다.

이것은 정말로 유용합니다 — 이제 우리는 gain 값에 audio param 메서드의 힘을 사용할 수 있습니다. 우리는 특정한 시간에 값을 설정할 수 있거나, {{domxref("AudioParam.linearRampToValueAtTime")}}과 같은 메서드로 시간에 **따라** 이것을 변화시킬 수 있습니다.

우리의 attack과 release에 대해, 우리는 위에서 언급된 `linearRampToValueAtTime` 메서드를 사용할 것입니다. 이것은 두 개의 매개변수를 취합니다 — 변화시키고 있는 파라미터에 설정하기 원하는 값 (이 경우 gain) 그리고 언제 이것을 하고 싶은지. 우리의 경우 **언제**는 우리의 입력에 의해 제어됩니다. 그래서 아래의 예제에서 gain은 attack 범위 입력이 설정된 시간에 따라 선형 비율로 1까지 증가됩니다. 비슷하게 release의 경우, release 입력이 설정된 시간에 걸쳐 선형 비율로 gain은 0으로 설정됩니다.

```js
let sweepLength = 2;
function playSweep(time) {
  let osc = audioCtx.createOscillator();
  osc.setPeriodicWave(wave);
  osc.frequency.value = 440;

  let sweepEnv = audioCtx.createGain();
  sweepEnv.gain.cancelScheduledValues(time);
  sweepEnv.gain.setValueAtTime(0, time);
  // attack을 설정합니다
  sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
  // release를 설정합니다
  sweepEnv.gain.linearRampToValueAtTime(0, time + sweepLength - releaseTime);

  osc.connect(sweepEnv).connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + sweepLength);
}
```

## "펄스" — 낮은 주파수 오실레이터 조정

훌륭합니다, 이제 우리는 스윕을 가지고 있습니다! 계속해서 이 멋진 펄스 사운드에도 관심을 기울여 봅시다. 우리는 이것을 두 번째 오실레이터에 의해 조정되는 기본적인 오실레이터로 달성할 수 있습니다.

### 첫 오실레이터

우리가 맞춤형 파동을 설정하기 위해 웨이브 테이블을 사용하지 않을 것이라는 점을 제외하고, 우리는 스윕 사운드에 한 것과 같은 방식으로 첫번째 {{domxref("OscillatorNode")}}를 설정합니다 — 우리는 단지 기본 `sine`파를 사용할 것입니다:

```js
const osc = audioCtx.createOscillator();
osc.type = "sine";
osc.frequency.value = 880;
```

우리가 두 번째 저주파 오실레이터로 진동시킬 것은 gain 값이므로, 이제 우리는 {{domxref("GainNode")}}를 만들 것입니다.

```js
const amp = audioCtx.createGain();
amp.gain.setValueAtTime(1, audioCtx.currentTime);
```

### 두 번째 저주파 오실레이터 생성하기

첫 번째 사인파의 진폭을 변경하기 위해 우리는 이제 두 번째 — `square` — 파 (또는 펄스) 오실레이터를 생성할 것입니다:

```js
const lfo = audioCtx.createOscillator();
lfo.type = "square";
lfo.frequency.value = 30;
```

### 그래프 연결하기

여기서 중요한 점은 그래프를 옳게 연결하는 것이고, 더불어 두 개의 오실레이터를 모두 시작시키는 것입니다:

```js
lfo.connect(amp.gain);
osc.connect(amp).connect(audioCtx.destination);
lfo.start();
osc.start(time);
osc.stop(time + pulseTime);
```

> [!NOTE]
> 우리는 또한 우리가 생성하는 이 오실레이터 중 어느 것에 대해서도 기본 파동 유형을 사용할 필요가 없습니다 — 우리는 웨이브 테이블과 우리가 전에 한 것처럼 주기파를 사용할 수 있습니다. 최소한의 노드들로도 다수의 가능성이 있습니다.

### 펄스 슬라이더

UI 제어에 대해, 오실레이터의 두 주파수들이 range 입력을 통해 제어될 수 있도록 모두 노출합시다. 하나는 음색을 변경할 것이고 나머지 하나는 어떻게 펄스가 첫번째 파동을 조정하는지를 변경할 것입니다.

```html
<label for="hz">Hz</label>
<input
  name="hz"
  id="hz"
  type="range"
  min="660"
  max="1320"
  value="880"
  step="1" />
<label for="lfo">LFO</label>
<input name="lfo" id="lfo" type="range" min="20" max="40" value="30" step="1" />
```

이전처럼, 우리는 range 입력 값이 사용자에 의해 변화되었을 때 파라미터에 변화를 줄 것입니다.

```js
let pulseHz = 880;
const hzControl = document.querySelector("#hz");
hzControl.addEventListener(
  "input",
  function () {
    pulseHz = Number(this.value);
  },
  false,
);

let lfoHz = 30;
const lfoControl = document.querySelector("#lfo");
lfoControl.addEventListener(
  "input",
  function () {
    lfoHz = Number(this.value);
  },
  false,
);
```

### 최종 playPulse() 함수

여기 전체 `playPulse()` 함수가 있습니다:

```js
let pulseTime = 1;
function playPulse(time) {
  let osc = audioCtx.createOscillator();
  osc.type = "sine";
  osc.frequency.value = pulseHz;

  let amp = audioCtx.createGain();
  amp.gain.value = 1;

  let lfo = audioCtx.createOscillator();
  lfo.type = "square";
  lfo.frequency.value = lfoHz;

  lfo.connect(amp.gain);
  osc.connect(amp).connect(audioCtx.destination);
  lfo.start();
  osc.start(time);
  osc.stop(time + pulseTime);
}
```

## "노이즈" — 바이쿼드 필터와 함께하는 무작위 노이즈 버퍼

이제 우리는 노이즈를 만들 필요가 있습니다! 모든 모뎀은 노이즈를 가지고 있습니다. 노이즈는 오디오 데이터에 관한 한 단지 무작위 숫자들이므로, 코드로 생성하기 비교적 간단한 것입니다.

### 오디오 버퍼 생성하기

우리는 이 값들을 넣을 빈 컨테이너를 만들 필요가 있지만, 이것은 Web Audio API가 이해하는 것이어야 합니다. 여기서 {{domxref("AudioBuffer")}} 객체가 등장합니다. 여러분은 파일을 가지고 와서 버퍼 안에 디코드하거나 (자습서에서 나중에 시작할 것입니다), 또는 여러분은 빈 버퍼를 만들고 여러분만의 데이터로 채울 수 있습니다.

노이즈에 대해, 후자를 선택합시다. 우리는 버퍼를 만들기 위해 버퍼의 크기를 계산할 필요가 있습니다. 우리는 이것을 위해 {{domxref("BaseAudioContext.sampleRate")}} 속성을 사용할 수 있습니다:

```js
const bufferSize = audioCtx.sampleRate * noiseLength;
const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
```

이제 우리는 이것을 -1과 1 사이의 랜덤 값으로 채울 수 있습니다.

```js
let data = buffer.getChannelData(0); // 데이터 얻기

// 버퍼를 노이즈로 채우기
for (let i = 0; i < bufferSize; i++) {
  data[i] = Math.random() * 2 - 1;
}
```

> [!NOTE]
> 왜 -1에서 1인가요? 파일이나 스피커에 사운드를 출력할 때 우리는 0db 풀 스케일을 표현하기 위해 하나의 숫자를 가질 필요가 있습니다 — 고정점 미디어나 DAC의 숫자로 나타낸 한도입니다. 부동점 오디오에서, 1은 신호에 대한 수학적 연산을 위한 "풀 스케일"을 매핑하는 편리한 숫자입니다. 그래서 오실레이터, 노이즈 생성기, 그리고 다른 음원은 보통 -1에서 1 범위에서 쌍극(bipolar) 신호를 출력합니다. 브라우저는 이 범위 바깥의 값들을 고정시킬 것입니다.

### 버퍼 소스 생성하기

이제 우리는 오디오 버퍼를 가지고 있고 이것을 데이터로 채웠으니, 우리는 소스로서 버퍼를 사용할 수 있는 그래프에 추가할 노드가 필요합니다. 우리는 이것을 위해 {{domxref("AudioBufferSourceNode")}}를 생성하고, 우리가 생성한 데이터를 전달할 것입니다:

```js
let noise = audioCtx.createBufferSource();
noise.buffer = buffer;
```

만약 우리가 이것을 오디오 그래프를 통해 연결시키고 재생한다면 —

```js
noise.connect(audioCtx.destination);
noise.start();
```

여러분은 이것이 꽤 쉭쉭하는 소리가 나거나 금속성의 소리가 나는 것을 인지하였을 것입니다. 우리는 백색소음을 만들었고, 백색소음이라면 그래야만 합니다. 값은 -1과 1 사이에서 실행되는데, 이는 우리가 모든 주파수의 피크를 가지고 있고, 결국 실제로 꽤 찢어지는 듯한 소리가 난다는 것을 의미합니다. 우리는 이 함수가 0.5에서 -0.5에서 실행되거나 피크를 내려 불편함을 줄이는 유사한 작업을 하도록 수정**할 수 있는데**, 그렇게 하면 재미가 없죠? 우리가 생성한 노이즈가 필터를 통과하도록 전송합시다.

### 믹스에 바이쿼드 필터 추가하기

우리는 분홍색 또는 갈색 소음의 범위에 있는 무언가를 원합니다. 우리는 저 높은 주파수들과 아마 몇몇 낮은 것들을 잘라내기를 원합니다. 이 일을 위해 밴드패스 바이쿼드 필터를 도입합시다.

> [!NOTE]
> Web Audio API는 두 종류의 필터 노드를 가지고 있습니다: {{domxref("BiquadFilterNode")}}와 {{domxref("IIRFilterNode")}}입니다. 대부분의 경우 바이쿼드 필터는 충분히 좋습니다 — 이것은 로우패스, 하이패스, 밴드패스와 같은 다른 종류의 필터들을 가지고 있습니다. 그러나 만약 여러분이 좀 더 맞춤형의 무언가를 찾고 있다면, IIR 필터가 좋은 옵션일 수 있습니다 — 더 많은 정보가 필요하시다면 [IIR 필터 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_IIR_filters)를 참고해 보세요.

이것을 연결하는 것은 우리가 전에 본 것과 같습니다. 우리는 {{domxref("BiquadFilterNode")}}를 생성하고, 원하는 속성들을 설정하고 그래프를 통해 연결시킵니다. 바이쿼드 필터의 다른 유형들은 다른 속성들을 가지고 있습니다 — 예를 들자면 밴드패스 유형에 주파수를 설정하는 것은 중앙 주파수를 조정하는데, 로우패스에서 이것은 위쪽 주파수를 설정할 것입니다.

```js
let bandpass = audioCtx.createBiquadFilter();
bandpass.type = "bandpass";
bandpass.frequency.value = 1000;

// 그래프 연결하기
noise.connect(bandpass).connect(audioCtx.destination);
```

### 노이즈 슬라이더

UI에서 우리는 사용자가 range 입력과 지난 섹션에서처럼의 이벤트 처리기를 통해 노이즈 지속과 우리가 밴드하기를 원하는 주파수를 조정할 수 있도록 이것들을 노출시킬 것입니다.

```html
<label for="duration">Duration</label>
<input
  name="duration"
  id="duration"
  type="range"
  min="0"
  max="2"
  value="1"
  step="0.1" />

<label for="band">Band</label>
<input
  name="band"
  id="band"
  type="range"
  min="400"
  max="1200"
  value="1000"
  step="5" />
```

```js
let noiseDuration = 1;
const durControl = document.querySelector("#duration");
durControl.addEventListener(
  "input",
  function () {
    noiseDuration = Number(this.value);
  },
  false,
);

let bandHz = 1000;
const bandControl = document.querySelector("#band");
bandControl.addEventListener(
  "input",
  function () {
    bandHz = Number(this.value);
  },
  false,
);
```

### 최종 playNoise() 함수

여기 전체 `playNoise()` 함수가 있습니다:

```js
function playNoise(time) {
  const bufferSize = audioCtx.sampleRate * noiseDuration; // 노트의 시간을 설정합니다
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate); // 빈 버퍼를 생성합니다
  let data = buffer.getChannelData(0); // get data

  // 버퍼를 노이즈로 채웁니다
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  // 생성된 데이터에 대해 버퍼 소스 생성하기
  let noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  let bandpass = audioCtx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.value = bandHz;

  // 그래프 연결하기
  noise.connect(bandpass).connect(audioCtx.destination);
  noise.start(time);
}
```

## "다이얼 음" — 사운드 샘플 로딩하기

이미 살펴본 메서드들을 사용해 두 개의 오실레이터를 함께 재생함으로써 휴대폰 다이얼 (DTMF) 소리를 모방하는 것은 충분히 간단하지만, 이 섹션에서, 우리는 무엇이 관여되어 있는지를 살펴볼 수 있도록 대신 샘플 파일을 로드할 것입니다.

### 샘플 로딩하기

우리가 파일을 사용하기 전에 파일이 로드되었고 버퍼 안으로 디코드되었음을 확실히 하기를 원하므로, 이를 하기 위해서 [`async`](/ko/docs/Web/JavaScript/Reference/Statements/async_function) 함수를 생성합시다.

```js
async function getFile(audioContext, filepath) {
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
}
```

그리고 나서 이 함수를 호출할 때 우리는 [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await) 연산자를 사용할 수 있는데, 이는 이것이 실행을 마쳤을 때 오직 우리가 차후의 코드를 실행할 수 있다는 것을 보장합니다.

샘플을 설정하기 위해 또 다른 `async` 함수를 생성합시다 — 이 파일이 로드되고 버퍼된 후의 동작을 수행하기 위해 우리는 두 개의 async 함수를 멋진 프로미스 패턴으로 결합할 수 있습니다:

```js
async function setupSample() {
  const filePath = "dtmf.mp3";
  const sample = await getFile(audioCtx, filePath);
  return sample;
}
```

> [!NOTE]
> 파일의 배열을 취해서 하나 이상의 샘플의 로드를 반복하기 위해 여러분은 쉽게 위의 함수를 수정할 수 있습니다. 이것은 더욱 복잡한 악기나, 게이밍에 대해 매우 유용할 것입니다.

이제 우리는 `setupSample()`을 다음과 같이 사용할 수 있습니다:

```js
setupSample().then((sample) => {
  // 샘플은 우리의 버퍼된 파일입니다
  // ...
});
```

샘플이 재생할 준비가 되었을 때, 프로그램을 UI를 설정하므로 이것은 실행될 준비가 됩니다.

### 샘플 재생하기

우리가 다른 소리들에 대해 한 것과 비슷한 방법으로 `playSample()` 함수를 생성해 봅시다. 이번엔 이것은 {{domxref("AudioBufferSourceNode")}}를 생성하고, 우리가 가져온 버퍼 데이터를 넣고 내부에서 디코드하고, 재생할 것입니다:

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = audioContext.createBufferSource();
  sampleSource.buffer = audioBuffer;
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> [!NOTE]
> 우리는 {{domxref("AudioBufferSourceNode")}}의 `stop()`을 호출할 수 있지만, 이것은 샘플이 재생을 마쳤을 때 자동적으로 발생할 것입니다.

### 다이얼 음 슬라이더

{{domxref("AudioBufferSourceNode")}}는 [`playbackRate`](/ko/docs/Web/API/AudioBufferSourceNode/playbackRate) 속성을 가지고 있습니다. 우리가 샘플의 속도를 올리고 내릴 수 있도록, 이것을 UI에 드러내 봅시다. 우리는 이전에 한 것과 같은 종류의 방법으로 이것을 할 것입니다:

```html
<label for="rate">Rate</label>
<input
  name="rate"
  id="rate"
  type="range"
  min="0.1"
  max="2"
  value="1"
  step="0.1" />
```

```js
let playbackRate = 1;
const rateControl = document.querySelector("#rate");
rateControl.addEventListener(
  "input",
  function () {
    playbackRate = Number(this.value);
  },
  false,
);
```

### 최종 playSample() 함수

그리고 나서 우리는 `playbackRate` 속성을 `playSample()` 함수에 업데이트하기 위한 라인을 추가할 것입니다. 최종 버전은 다음과 같습니다:

```js
function playSample(audioContext, audioBuffer, time) {
  const sampleSource = audioContext.createBufferSource();
  sampleSource.buffer = audioBuffer;
  sampleSource.playbackRate.value = playbackRate;
  sampleSource.connect(audioContext.destination);
  sampleSource.start(time);
  return sampleSource;
}
```

> [!NOTE]
> 이 사운드 파일의 출처는 [soundbible.com](https://soundbible.com/1573-DTMF-Tones.html)입니다.

## 시간에 맞춰 오디오 재생하기

디지털 오디오 애플리케이션의 일반적인 문제는 사운드를 비트가 일정하게 유지되고, 시간에서 벗어나지 않도록, 제 시간에 재생하는 것입니다.

우리는 `for` 반복문 내에서 소리가 재생되도록 스케쥴할 수 있지만, 이것의 가장 큰 문제는 이것이 재생되는 도중에 업데이트되고, 우리는 이미 이것을 하기 위한 UI를 구현했다는 것입니다. 또한, 악기 전체의 BPM 슬라이더를 고려하는 것은 정말 좋을 것입니다. 비트에 맞춰 소리를 재생시키는 가장 좋은 방법은 우리가 노드가 언제 재생될지 내다보고 그것들을 큐에 넣는 스케쥴링 시스템을 만드는 것입니다. 우리는 currentTime 속성으로 정밀한 시간에서 이것들을 시작시킬 수 있고 또한 어떠한 변화도 고려할 수 있습니다.

> [!NOTE]
> 이것은 [Chris Wilson의 A Tale Of Two Clocks](https://www.html5rocks.com/en/tutorials/audio/scheduling/) 글의 가장 기본적인 것만 남긴 버전인데, 저 글은 이 방법을 더욱 자세하게 다룹니다. 이것을 모두 여기서 반복할 필요는 없지만, 저 글을 읽고 이 방법을 사용하는 것을 대단히 추천합니다. 여기서의 대부분의 코드는 그의 [메트로놈 예제](https://github.com/cwilso/metronome/blob/master/js/metronome.js)에서 가져온 것인데, 이 예제는 그가 저 글에서 언급했습니다.

또한 — 추측하셨다시피 — 유저가 또 다른 range 입력을 통해 제어할 수 있는 기본 BPM (beats per minute)을 설정하면서 시작해 봅시다.

```js
let tempo = 60.0;
const bpmControl = document.querySelector("#bpm");
bpmControl.addEventListener(
  "input",
  function () {
    tempo = Number(this.value);
  },
  false,
);
```

그리고 나서 우리는 얼마나 미리 우리가 내다보기를 원하는지, 그리고 얼마나 미리 우리가 스케쥴하기를 원하는지를 정의하는 변수를 생성할 것입니다:

```js
const lookahead = 25.0; // 얼마나 자주 스케쥴링 함수를 호출할 것인지 (밀리세컨드로)
const scheduleAheadTime = 0.1; // 얼마나 미리 오디오를 스케쥴할지 (초)
```

한 박마다 노트를 앞으로 이동시키고, 박자가 4번째 (마지막)에 도달했을 때 첫번째로 반복해 돌아오는 함수를 생성해 봅시다:

```js
let currentNote = 0;
let nextNoteTime = 0.0; // 다음 노트가 예정되어 있을 때

function nextNote() {
  const secondsPerBeat = 60.0 / tempo;

  nextNoteTime += secondsPerBeat; // 박자 시간을 유지하기 위해 비트 길이를 추가

  // 박자 숫자를 진행시키고, 0으로 만듭니다
  currentNote++;
  if (currentNote === 4) {
    currentNote = 0;
  }
}
```

우리는 재생될 노트에 대한 참조 큐와, 이전에 우리가 만든 함수들을 사용해 그것들을 재생할 기능을 만들기를 원합니다:

```js
const notesInQueue = [];

function scheduleNote(beatNumber, time) {
  // 우리가 재생 중이 아닐지라도, 노트를 큐에 푸시합니다.
  notesInQueue.push({ note: beatNumber, time: time });

  if (
    pads[0]
      .querySelectorAll("button")
      [beatNumber].getAttribute("aria-checked") === "true"
  ) {
    playSweep(time);
  }
  if (
    pads[1]
      .querySelectorAll("button")
      [beatNumber].getAttribute("aria-checked") === "true"
  ) {
    playPulse(time);
  }
  if (
    pads[2]
      .querySelectorAll("button")
      [beatNumber].getAttribute("aria-checked") === "true"
  ) {
    playNoise(time);
  }
  if (
    pads[3]
      .querySelectorAll("button")
      [beatNumber].getAttribute("aria-checked") === "true"
  ) {
    playSample(audioCtx, dtmf, time);
  }
}
```

여기서 우리는 현재 시간을 보고 다음 노트에 대한 시간과 비교합니다; 두 개가 일치할 때 이것은 이전의 두 함수를 호출할 것입니다.

{{domxref("AudioContext")}} 객체 인스턴스는 [`currentTime`](/ko/docs/Web/API/BaseAudioContext/currentTime) 속성을 가지고 있는데, 이는 우리가 처음 컨텍스트를 생성한 이후의 초를 얻을 수 있게 합니다. 이것은 우리가 우리의 스텝 시퀸서 내에서 타이밍을 위해 사용해야만 하는 것입니다 — 약 소수 15자리까지의 정확한 float 값을 반환하는 이것은 극도로 정확합니다.

```js
function scheduler() {
  // 다음 구간 전에 재생할 필요가 있을 노트가 있는 동안, 그것들을 스케쥴하고 포인터를 진행시킵니다.
  while (nextNoteTime < audioCtx.currentTime + scheduleAheadTime) {
    scheduleNote(currentNote, nextNoteTime);
    nextNote();
  }
  timerID = window.setTimeout(scheduler, lookahead);
}
```

언제 비트가 진행하는지를 볼 수 있도록 우리는 또한 UI를 업데이트할 그리기 함수가 필요합니다.

```js
let lastNoteDrawn = 3;

function draw() {
  let drawNote = lastNoteDrawn;
  let currentTime = audioCtx.currentTime;

  while (notesInQueue.length && notesInQueue[0].time < currentTime) {
    drawNote = notesInQueue[0].note;
    notesInQueue.splice(0, 1); // 노트를 큐에서 제거합니다
  }

  // 우리는 오직 노트가 이동되었을 경우 그릴 필요가 있습니다.
  if (lastNoteDrawn != drawNote) {
    pads.forEach(function (el, i) {
      el.children[lastNoteDrawn].style.borderColor = "hsla(0, 0%, 10%, 1)";
      el.children[drawNote].style.borderColor = "hsla(49, 99%, 50%, 1)";
    });

    lastNoteDrawn = drawNote;
  }
  // 다시 그리기 위해 설정됨
  requestAnimationFrame(draw);
}
```

## 종합하기

이제 남은 것은 우리가 악기를 **재생**할 수 있기 전에 샘플이 로드된 것을 확실히 하는 것입니다. 우리는 파일이 가져와지고 디코드되었을 때 사라지는 로딩 스크린을 추가할 것이고, 그리고 나서 우리는 재생 버튼 클릭 이벤트를 사용해 스케쥴러가 시작되도록 할 수 있습니다.

```js
// 로드된 샘플이 재생을 허용했을 때
let loadingEl = document.querySelector(".loading");
const playButton = document.querySelector("[data-playing]");
let isPlaying = false;
setupSample().then((sample) => {
  loadingEl.style.display = "none"; // 로딩 스크린 제거

  dtmf = sample; // 우리의 playSample 함수에서 사용될 것임

  playButton.addEventListener("click", function () {
    isPlaying = !isPlaying;

    if (isPlaying) {
      // 재생 시작

      // 컨텍스트가 연기(suspended) 상태인지 확인 (자동 재생 정책)
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      currentNote = 0;
      nextNoteTime = audioCtx.currentTime;
      scheduler(); // 스케쥴링 시작
      requestAnimationFrame(draw); // 드로잉 루프 시작.
      this.dataset.playing = "true";
    } else {
      window.clearTimeout(timerID);
      this.dataset.playing = "false";
    }
  });
});
```

## 요약

우리는 이제 브라우저 안에 악기를 가지고 있습니다! 계속 재생하고 실험해 보세요 — 여러분은 무언가 더욱 복잡한 것을 만들기 위해 이 모든 기법을 확장할 수 있습니다.
