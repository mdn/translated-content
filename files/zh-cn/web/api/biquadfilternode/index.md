---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
---

{{APIRef("Web Audio API")}}

`BiquadFilterNode` 接口表示一个简单低阶滤波器（双二阶滤波器），通过 {{ domxref("AudioContext.createBiquadFilter()") }} 方法创建。它是一个能表示不同类型的过滤器，声调控制设备，图形均衡器的 {{domxref("AudioNode")}}。一个`BiquadFilterNode`（双二阶滤波器）总是恰好有一个输入和一个输出。

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

## 属性

_继承属性自父级的_ _{{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.frequency")}}
  - : Is an [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a frequency in the current filtering algorithm measured in hertz (Hz).
- {{domxref("BiquadFilterNode.detune")}}
  - : Is an [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representing detuning of the frequency in [cents](http://en.wikipedia.org/wiki/Cent_%28music%29).
- {{domxref("BiquadFilterNode.Q")}}
  - : Is an [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing a [Q factor](http://en.wikipedia.org/wiki/Q_factor), or _quality factor_.
- {{domxref("BiquadFilterNode.gain")}} {{readonlyInline}}
  - : Is an [a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, a double representing the [gain](http://en.wikipedia.org/wiki/Gain) used in the current filtering algorithm.
- {{domxref("BiquadFilterNode.type")}}
  - : 节点实现定义不同过滤算法的一个字符串值。

    | `type`      | Description                                                                                                                                                                                                                                                                  | `frequency`                                                                                                                                                                     | `Q`                                                                                                                                        | `gain`                                                                   |
    | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
    | `lowpass`   | Standard second-order resonant lowpass filter with 12dB/octave rolloff. Frequencies below the cutoff pass through; frequencies above it are attenuated.                                                                                                                      | The cutoff frequency.                                                                                                                                                           | Indicates how peaked the frequency is around the cutoff. The greater the value is, the greater is the peak.                                | _Not used_                                                               |
    | `highpass`  | Standard second-order resonant highpass filter with 12dB/octave rolloff. Frequencies below the cutoff are attenuated; frequencies above it pass through.                                                                                                                     | The cutoff frequency.                                                                                                                                                           | Indicates how peaked the frequency is around the cutoff. The greater the value, the greater the peak.                                      | _Not used_                                                               |
    | `bandpass`  | Standard second-order bandpass filter. Frequencies outside the given range of frequencies are attenuated; the frequencies inside it pass through.                                                                                                                            | The center of the range of frequencies.                                                                                                                                         | Controls the width of the frequency band. The greater the `Q` value, the smaller the frequency band.                                       | _Not used_                                                               |
    | `lowshelf`  | Standard second-order lowshelf filer. Frequencies lower than the frequency get a boost, or an attenuation; frequencies over it are unchanged.                                                                                                                                | The upper limit of the frequencies getting a boost or an attenuation.                                                                                                           | _Not used_                                                                                                                                 | The boost, in dB, to be applied; if negative, it will be an attenuation. |
    | `highshelf` | Standard second-order highshelf filer. Frequencies higher than the frequency get a boost or an attenuation; frequencies lower than it are unchanged.                                                                                                                         | The lower limit of the frequencies getting a boost or an attenuation.                                                                                                           | _Not used_                                                                                                                                 | The boost, in dB, to be applied; if negative, it will be an attenuation. |
    | `peaking`   | Frequencies inside the range get a boost or an attenuation; frequencies outside it are unchanged.                                                                                                                                                                            | The middle of the frequency range getting a boost or an attenuation.                                                                                                            | Controls the width of the frequency band. The greater the `Q` value, the smaller the frequency band.                                       | The boost, in dB, to be applied; if negative, it will be an attenuation. |
    | `notch`     | Standard [notch](http://en.wikipedia.org/wiki/Band-stop_filter) filter, also called a _band-stop_ or _band-rejection_ filter. It is the opposite of a bandpass filter: frequencies outside the give range of frequencies pass through; frequencies inside it are attenuated. | The center of the range of frequencies.                                                                                                                                         | Controls the width of the frequency band. The greater the `Q` value, the smaller the frequency band.                                       | _Not used_                                                               |
    | `allpass`   | Standard second-order [allpass](http://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation) filter. It lets all frequencies through, but changes the phase-relationship between the various frequencies.                                                            | The frequency with the maximal [group delay](http://en.wikipedia.org/wiki/Group_delay_and_phase_delay), that is, the frequency where the center of the phase transition occurs. | Controls how sharp the transition is at the medium frequency. The larger this parameter is, the sharper and larger the transition will be. | _Not used_                                                               |

## 方法

_继承方法自父级的 {{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.getFrequencyResponse()")}}
  - : From the current filter parameter settings this method calculates the frequency response for frequencies specified in the provided array of frequencies.

## 示例

参见 [`AudioContext.createBiquadFilter`](/zh-CN/docs/Web/API/BaseAudioContext/createBiquadFilter#示例) 以获取示例代码，其中展示了如何使用 `AudioContext` 创建一个 Biquad 滤波器节点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
