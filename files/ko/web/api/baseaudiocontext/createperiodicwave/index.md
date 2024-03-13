---
title: BaseAudioContext.createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
---

{{ APIRef("Web Audio API") }}

{{ domxref("BaseAudioContext") }} 인터페이스의 `createPeriodicWave()` 메서드는 {{domxref("PeriodicWave")}}를 생성하기 위해 사용되는데, 이는 {{ domxref("OscillatorNode") }}의 출력을 형성하기 위해 사용될 수 있는 주기적인 파형을 정의하기 위해 사용됩니다.

## 구문

```js
var wave = AudioContext.createPeriodicWave(real, imag[, constraints]);
```

### 반환

{{domxref("PeriodicWave")}}.

### 매개변수

- `real`
  - : 코사인 항의 배열 (전통적으로 A 항).
- `imag`
  - : 사인 항의 배열 (전통적으로 B 항).

`real` 과 `imag` 배열은 같은 길이를 가져야만 합니다. 그렇지 않으면 오류가 발생됩니다.

- `constraints` {{optional_inline}}
  - : 정규화(normalization)가 비활성화되어야 하는지를 명시하는 dictionary 객체입니다 (만약 명시되지 않으면, 기본적으로 정규화는 활성화 됩니다.) 이것은 하나의 프로퍼티를 취합니다:\* `disableNormalization`: 만약 `true`로 설정되면, 정규화는 주기파에 대해 비활성화 됩니다. 기본값은 `false`입니다.

> **참고:** 만약 정규화되면, 결과 파동은 최고 절대값(maximum absolute peak value) 1을 가지게 됩니다.

## 예제

다음의 예제는 단순한 사인파를 포함하는 {{domxref("PeriodicWave")}} 객체를 생성하기 위한 `createPeriodicWave()`의 간단한 사용을 보여줍니다.

```js
var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();
var osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

var wave = ac.createPeriodicWave(real, imag, { disableNormalization: true });

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

이는 정의에 의해 오직 기본음을 포함하는 소리가 사인파이기 때문에 작동합니다.

여기서, 우리는 두 값과 함께 `PeriodicWave`를 생성합니다. 첫번째 값은 oscillator가 시작하는 값인 DC 오프셋입니다. 여기서 0은 좋은데, 왜냐하면 우리는 곡선을 \[-1.0; 1.0] 범위의 중간에서 시작하기를 원하기 때문입니다.

두번째와 그 다음의 값은 사인과 코사인 요소입니다. 여러분은 이것을 시간 도메인 값으로부터 주파수 도메인 값을 얻는 푸리에 변환의 결과로 생각할 수 있습니다. 여기서, `createPeriodicWave()`와 함께, 여러분은 주파수를 명시하고, 브라우저는 oscillator의 주파수에 대한 시간 도메인 버퍼를 얻기 위해 역 푸리에 변환을 수행합니다. 여기서, 우리는 오직 기본음의 전체 볼륨 (1.0)에서의 한 요소만을 설정했으므로, 우리는 사인파를 얻습니다.

푸리에 변환의 계수는 *오름*차순으로 주어져야만 하고
(예: <math><semantics><mrow><mrow><mo>(</mo>
<mrow><mi>a</mi>
<mo>+</mo>
<mi>b</mi>
<mi>i</mi>
</mrow><mo>)</mo>
</mrow><msup><mi>e</mi>
<mi>i</mi>
</msup><mo>,</mo>
<mrow><mo>(</mo>
<mrow><mi>c</mi>
<mo>+</mo>
<mi>d</mi>
<mi>i</mi>
</mrow><mo>)</mo>
</mrow><msup><mi>e</mi>
<mrow><mn>2</mn>
<mi>i</mi>
</mrow></msup><mo>,</mo>
<mrow><mo>(</mo>
<mrow><mi>f</mi>
<mo>+</mo>
<mi>g</mi>
<mi>i</mi>
</mrow><mo>)</mo>
</mrow><msup><mi>e</mi>
<mrow><mn>3</mn>
<mi>i</mi>
</mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} ,
\left(f+gi\right)e^{3i} </annotation></semantics></math> 등) 양이거나 음일 수 있습니다. 수동으로 이러한 계수들을 얻는 간단한 방법은 (최고의 방법은 아니지만) 그래프 계산기를 사용하는 것입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Using the Web Audio API](/ko/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
