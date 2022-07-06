---
title: AudioParam.setTargetAtTime()
slug: Web/API/AudioParam/setTargetAtTime
tags:
  - API
  - AudioParam
  - Method
  - Reference
  - Web Audio API
  - setTargetAtTime
browser-compat: api.AudioParam.setTargetAtTime
---
{{ APIRef("Web Audio API") }}

{{domxref("AudioParam")}} 인터페이스의 `setTargetAtTime()` 메서드는 `AudioParam` 값에 점진적인 변화의 시작을 예정합니다. 이 메서드는 ADSR 엔벨로프의 decay 혹은 release 부분에 유용합니다.

## 구문

```js
var paramRef = param.setTargetAtTime(target, startTime, timeConstant);
```

### 매개변수

- target
  - : 주어진 시작 시간에 파라미터가 변화를 시작할 값.
- startTime
  - : {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}과 같은 시간 좌표계에서 지수적 변화가 시작될 시간. 만약 이 값이 `AudioContext.currentTime` 보다 작거나 같다면, 파라미터는 즉시 변화를 시작할 것입니다.
- timeConstant
  - : target 값을 향한 지수적 접근의 시간 상수 값 (초 단위로 주어짐). 이 값이 클수록, 변화는 더 느려질 것입니다.

### 반환

이 `AudioParam` 객체에 대한 참조. 이 인터페이스의 몇몇 오래된 브라우저 구현은 void를 반환합니다.

## 설명

변화는 `startTime` 에 명시된 시간에 시작해 `target` 매개변수에 의해 주어진 값을 향해 지수적으로 움직입니다. `timeConstant` 매개변수에 의해 정의된 감소율은 지수적입니다. 그러므로 값은 절대 `target` 에 완벽히 도달하지 못할 것이지만, `timeConstant` 길이의 각 시간 단계 이후에, 값은 또 다른 <math>
  <semantics>
    <mrow>
      <mn>1</mn>
      <mo>-</mo>
      <msup>
        <mi>e</mi>
        <mrow>
          <mo>-</mo>
          <mn>1</mn>
        </mrow>
      </msup>
      <mo>≈</mo>
      <mn>63.2</mn>
      <mtext>%</mtext>
    </mrow>
    <annotation encoding="TeX">1 - e^{-1} \대략 63.2%</annotation>
  </semantics>
</math> 에 의해 `target` 에 다가가게 될 것입니다. (일차 선형 연속 시불변 시스템을 사용하는) 완전한 공식은 [Web
Audio 명세서](https://webaudio.github.io/web-audio-api/#dom-audioparam-settargetattime)에서 확인할 수 있습니다.

만약 특정한 시간까지 target 값에 절대적으로 도달할 필요가 있다면, {{domxref("AudioParam.exponentialRampToValueAtTime()")}}를 사용할 수 있습니다. 그러나, 수학적인 이유로, 이 메서드는 현재 값이나 target 값이 `0` 이면 작동하지 않습니다.

### 좋은 `timeConstant` 고르기

위에서 언급되었다시피, 각 `timeConstant` 가 target 값을 향해 63.2% 만큼씩 움직이며, 값은 지수적으로 변화합니다. target 값에 도달하는 것에 대해 걱정할 필요가 없습니다. 한 번 충분히 가까워지고 나면, 듣는 사람은 추가적인 변화를 감지하지 못할 것입니다.

사용하는 경우에 따라, target 값에 95% 만큼 도달하는 것은 충분할 것입니다. 그 경우, `timeConstant` 를 원하는 기간의 1/3만큼 설정할 수 있습니다.

시간이 진행함에 따라 어떻게 값이 0%에서 100%로 변화하는지에 대해서는 아래의 표를 참고해 보세요.

| `startTime` 이후로의 시간 | 값                             |
| ---------------------- | --------------------------------- |
| `0 * timeConstant`     | 0%                                |
| `0.5 * timeConstant`   | 39.3%                             |
| `1 * timeConstant`     | 63.2%                             |
| `2 * timeConstant`     | 86.5%                             |
| `3 * timeConstant`     | 95.0%                             |
| `4 * timeConstant`     | 98.2%                             |
| `5 * timeConstant`     | 99.3%                             |
| `n * timeConstant`     | <math><semantics><mrow><mn>1</mn> |

<math>
  <semantics>
    <mrow>
      <mn>1</mn>
      <mo>-</mo>
      <msup>
        <mi>e</mi>
        <mrow>
          <mo>-</mo>
          <mi>n</mi>
        </mrow>
      </msup>
    </mrow>
    <annotation encoding="TeX">1 - e^{-n}</annotation>
  </semantics>
</math>

## 예제

이 예제에는 두 개의 제어 버튼을 가진 미디어 소스가 있습니다 (소스 코드는 [webaudio-examples
repo](https://github.com/mdn/webaudio-examples/blob/master/audio-param/index.html)에서 볼 수 있고, [작동 예제](https://mdn.github.io/webaudio-examples/audio-param/)도 볼 수 있습니다). 이 버튼이 눌렸을 때, `setTargetAtTime()` 이 사용되어 각각 gain 값을 1.0까지, 그리고 0까지 서서히 사라지게(fade) 하는데, 이 이펙트는 1초 후에 시작되고 이펙트가 지속되는 시간의 길이는 timeConstant에 의해 제어됩니다.

```js
// 오디오 컨텍스트를 생성합니다
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

// 예제를 위한 기본 변수를 설정합니다
var myAudio = document.querySelector('audio');
var pre = document.querySelector('pre');
var myScript = document.querySelector('script');

pre.innerHTML = myScript.innerHTML;

var atTimePlus = document.querySelector('.at-time-plus');
var atTimeMinus = document.querySelector('.at-time-minus');

// MediaElementAudioSourceNode를 생성합니다
// HTMLMediaElement를 노드 내로 전달합니다
var source = audioCtx.createMediaElementSource(myAudio);

// gain 노드를 생성하고 gain 값을 0.5로 설정합니다
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
var currGain = gainNode.gain.value;

// AudioBufferSourceNode를 gainNode에 연결하고
// gainNode를 destination에 연결합니다
source.connect(gainNode);
gainNode.connect(audioCtx.destination);

// onclick이 발생했을 때 무언가를 하기 위해 버튼을 설정합니다
atTimePlus.onclick = function() {
  currGain = 1.0;
  gainNode.gain.setTargetAtTime(1.0, audioCtx.currentTime + 1, 0.5);
}

atTimeMinus.onclick = function() {
  currGain = 0;
  gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + 1, 0.5);
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
