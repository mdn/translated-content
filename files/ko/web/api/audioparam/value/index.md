---
title: AudioParam.value
slug: Web/API/AudioParam/value
tags:
  - API
  - AudioParam
  - Parameter
  - Property
  - Reference
  - Web Audio API
  - sound
  - value
browser-compat: api.AudioParam.value
---
{{APIRef("Web Audio API")}}

[Web Audio API](/ko/docs/Web/API/Web_Audio_API) {{domxref("AudioParam")}} 인터페이스의 **`value`** 속성은 현재 시간에서의 해당 {{domxref("AudioParam")}}의 값을 get하거나 set합니다. 초기 값은 {{domxref("AudioParam.defaultValue")}}으로 설정됩니다.

`value` 를 설정하는 것은 `AudioContext` 의 {{domxref("BaseAudioContext/currentTime", "currentTime")}} 속성에 의해 반환된 시간과 함께 {{domxref("AudioParam.setValueAtTime")}}를 호출하는 것과 같은 효과를 가지고 있습니다.

## 구문

```js
var curValue = audioParam.value;
audioParam.value = newValue;
```

### 값

현재 시간에서의 파라미터의 값을 나타내는 부동점 {{jsxref("Number")}}. 이 값은 {{domxref("AudioParam.minValue", "minValue")}}와 {{domxref("AudioParam.maxValue",
  "maxValue")}} 속성에 의해 명시된 값 사이에 있을 것입니다.

## 사용 일람

### 값 정밀도과 변화

`value` 를 저장하기 위해 내부적으로 사용되는 데이터 타입은 단일 정밀도 (32비트) 부동점 number인 반면, JavaScript는 64비트 배정밀도 부동점 number를 사용합니다. 그 결과로, `value` 속성에서 읽은 값이 항상 설정한 것과 정확히 같지 않을 수 있습니다.

아래의 예시를 고려해 보세요.

```js
const source = new AudioBufferSourceNode(...);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

출력된 로그는 `false` 일 것인데, 왜냐하면 playback rate 파라미터 `rate` 는 5.3에 가장 가까운 32비트 부동점 number로 전환되고, 이 값은 5.300000190734863이기 때문입니다. 한 가지 해결 방법은 `value` 를 설정할 때 다음과 같이 {{jsxref("Math.fround()")}} 메서드를 사용하는 것인데, 이 메서드는 명시된 64비트 JavaScript 값과 같은 단일 정밀도 값을 반환합니다.

    const source = new AudioBufferSourceNode(...);
    const rate = Math.fround(5.3);
    source.playbackRate.value = rate;
    console.log(source.playbackRate.value === rate);

이 경우, 출력된 로그는 `true` 일 것입니다.

### 시간에 따라 변화하는 속성의 값

`AudioParam` 의 `value` 는 고정되어 있을 수도 있고 시간에 따라 달라질 수도 있습니다. 이는 `value` getter에 의해 반영되는데, 이것은 오디오 렌더링 엔진의 가장 최근의 **render
quantum** , 즉 오디오 버퍼가 처리되고 갱신되는 순간에서의 파라미터의 값을 반환합니다. 오디오 버퍼를 처리하는 것에 덧붙여, 각각의 render quantum은 현재 시간과 설정된 시간 기반의 파라미터 값이 변화한다면 필요할 때 각 `AudioParam` 의 `value` 를 갱신합니다.

파라미터를 처음 생성했을 때, 파라미터의 값은 {{domxref("AudioParam.defaultValue")}}에 의해 주어지는 기본 값으로 설정됩니다. 이것은 0.0초에서의 이 파라미터의 값이고, 값이 변경되는 첫번째 render quantum 전까지 계속 유지될 것입니다.

각 render quantum 도중에, 브라우저는 파라미터의 값을 관리하는 것에 관련된 다음의 일들을 합니다.

- 만약 `value` setter가 사용되었다면, 파라미터의 값은 주어진 값으로 변경됩니다.
- 만약 현재 시간이 {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}}의 이전 호출에 의해 명시된 시간과 같거나 초과한다면, `value` 는 `setValueAtTime()` 에 전달된 값으로 변경됩니다.
- 만약 graduated나 ramped 방식의 값 변경 메서드가 호출되었고 현재 시간이 graduated된 변화가 발생해야 하는 시간 범위 내에 있다면, 값은 적절한 알고리즘에 기반해 갱신됩니다. ramped나 graduated 값 변화 메서드에는 {{domxref("AudioParam.linearRampToValueAtTime",
    "linearRampToValueAtTime()")}}, {{domxref("AudioParam.setTargetAtTime",
    "setTargetAtTime()")}}, {{domxref("AudioParam.setValueCurveAtTime",
    "setValueCurveAtTime()")}}이 있습니다.

이렇게 하여, 파라미터의 `value` 는 시간에 따른 파라미터의 상태를 정밀하게 반영하도록 유지됩니다.

## 예제

이 예제는 {{domxref("GainNode")}}의 볼륨을 즉시 40%로 변경합니다.

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.4;
// 위는 아래와 같습니다.
gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

{{domxref("GainNode")}}의 gain 값을 변경할 때, 버전 64 (2018년 1월) 이전의 Google Chrome은 dezippering을 방지하기 위해 부드러운 보간(interpolation)을 수행할 것입니다. 버전 64부터, Web Audio 명세서와 일치하도록 값은 즉시 변경됩니다. 자세한 정보를 보려면 [Chrome Platform
Status](https://www.chromestatus.com/feature/5287995770929152)를 참고하세요.

## 같이 보기

- [Web Audio API 사용하기](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
