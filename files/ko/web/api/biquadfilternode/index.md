---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
tags:
  - API
  - BiquadFilterNode
  - Interface
  - Reference
  - Web Audio API
translation_of: Web/API/BiquadFilterNode
---
{{APIRef("Web Audio API")}}

The `BiquadFilterNode` interface represents a simple low-order filter, and is created using the {{ domxref("AudioContext.createBiquadFilter()") }} method. It is an {{domxref("AudioNode")}} that can represent different kinds of filters, tone control devices, and graphic equalizers. A `BiquadFilterNode` always has exactly one input and one output.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Number of inputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Number of outputs</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>2</code> (not used in the default count mode)</td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructor

- {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}}
  - : Creates a new instance of an `BiquadFilterNode` object.

## Properties

_Inherits properties from its parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.frequency")}}
  - : Is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a frequency in the current filtering algorithm measured in hertz (Hz).
- {{domxref("BiquadFilterNode.detune")}}
  - : Is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing detuning of the frequency in [cents](http://en.wikipedia.org/wiki/Cent_%28music%29).
- {{domxref("BiquadFilterNode.Q")}}
  - : Is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a [Q factor](http://en.wikipedia.org/wiki/Q_factor), or _quality factor_.
- {{domxref("BiquadFilterNode.gain")}} {{readonlyInline}}
  - : Is an [a-rate](/en-US/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing the [gain](http://en.wikipedia.org/wiki/Gain) used in the current filtering algorithm.
- {{domxref("BiquadFilterNode.type")}}

  - : Is a string value defining the kind of filtering algorithm the node is implementing.

    <table class="standard-table">
      <caption>
        The meaning of the different parameters depending of the type of the filter
        (detune has the same meaning regardless, so isn't listed below)
      </caption>
      <thead>
        <tr>
          <th scope="row"><code>type</code></th>
          <th scope="col">Description</th>
          <th scope="col"><code>frequency</code></th>
          <th scope="col"><code>Q</code></th>
          <th scope="col"><code>gain</code></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><code>lowpass</code></th>
          <td>
            12dB/octave의 롤오프를 가진 표준 2차 공진 로우패스 필터입니다. 컷오프
            이하의 주파수는 통과하며 그 이상의 주파수는 감쇠합니다.
          </td>
          <td>컷오프 주파수</td>
          <td>
            컷오프 부근에서 주파수의 피크가 얼마나 큰지 나타냅니다. 값이 클수록
            피크가 커집니다.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            12dB/octave의 롤오프를 가진 표준 2차 공진 하이패스 필터입니다. 컷오프
            이하의 주파수는 감쇠하며 그 이상의 주파수는 통과합니다.
          </td>
          <td>컷오프 주파수</td>
          <td>
            컷오프 부근에서 주파수의 피크가 얼마나 큰지 나타냅니다. 값이 클수록
            피크가 커집니다.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>
            표준 2차 밴드패스 필터입니다. 주어진 주파수 대역 바깥의 주파수는
            감쇠되며, 이내의 주파수는 통과합니다.
          </td>
          <td>주파수 대역의 중앙</td>
          <td>
            주파수 대역의 폭을 조정합니다. Q값이 클수록 주파수 대역은 작아집니다.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            표준 2차 로우쉘프 필터입니다. 기준 주파수보다 낮은 주파수는 증폭되거나
            감쇠됩니다. 그 이상의 주파수는 변하지 않습니다.
          </td>
          <td>증폭이나 감쇠를 얻는 주파수의 상한값</td>
          <td><em>Not used</em></td>
          <td>적용할 증폭(단위 : dB), 음수이면 감쇠됩니다.</td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            표준 2차 하이쉘프 필터입니다. 기준 주파수보다 큰 주파수는 증폭되거나
            감쇠됩니다. 그 이하의 주파수는 변하지 않습니다.
          </td>
          <td>증폭이나 감쇠를 얻는 주파수의 하한값</td>
          <td><em>Not used</em></td>
          <td>적용할 증폭(단위 : dB), 음수이면 감쇠됩니다.</td>
        </tr>
        <tr>
          <th scope="row"><code>peaking</code></th>
          <td>
            대역 내의 주파수는 증폭되거나 감쇠됩니다. 바깥의 주파수는 변하지
            않습니다.
          </td>
          <td>증폭이나 감쇠를 얻는 주파수 대역의 중앙</td>
          <td>
            주파수 대역의 폭을 조정합니다. Q값이 클수록 주파수 대역은 작아집니다.
          </td>
          <td>적용할 증폭(단위 : dB), 음수이면 감쇠됩니다.</td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            밴드 스톱, 혹은 밴드 리젝션으로 불리는 표준 <a
              href="http://en.wikipedia.org/wiki/Band-stop_filter"
              title="/en-US/docs/"
              >notch</a
            > 필터입니다. 이는 밴드패스 필터와 반대입니다. 주어진 대역폭 바깥의
            주파수는 통과하며, 안쪽의 주파수는 감쇠합니다.
          </td>
          <td>주파수 대역의 중앙</td>
          <td>
            주파수 대역의 폭을 조정합니다. Q값이 클수록 주파수 대역은 작아집니다.
          </td>
          <td><em>Not used</em></td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            표준 2차 <a
              href="http://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation"
              title="/en-US/docs/"
              >allpass</a
            > 필터입니다. 이는 모든 주파수를 통과시키지만, 가변 주파수 사이의 위상
            관계를 변화시킵니다.
          </td>
          <td>
            최대 <a
              href="http://en.wikipedia.org/wiki/Group_delay_and_phase_delay"
              title="/en-US/docs/"
              >group delay</a
            >를 갖는 주파수, 즉 위상 전이 발생의 중심에 있는 주파수입니다.
          </td>
          <td>
            중간 주파수에서 전환이 얼마나 선명한가를 제어합니다. 이 매개 변수가
            클수록 더 선명하고 크게 전환됩니다.
          </td>
          <td><em>Not used</em></td>
        </tr>
      </tbody>
    </table>

## Methods

_{{domxref("AudioNode")}} 로부터 메서드를 상속받습니다_.

- {{domxref("BiquadFilterNode.getFrequencyResponse()")}}
  - : 이 메서드는 현재 필터 파라미터 설정으로부터 제공된 주파수 배열에 지정된 주파수에 대한 주파수 응답을 계산합니다

## Example

See [`AudioContext.createBiquadFilter`](/en-US/docs/Web/API/BaseAudioContext/createBiquadFilter#example) for example code that shows how to use an `AudioContext` to create a Biquad filter node.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/en-US/docs/Web_Audio_API/Using_Web_Audio_API)
