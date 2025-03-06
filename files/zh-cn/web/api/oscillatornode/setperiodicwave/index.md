---
title: OscillatorNode.setPeriodicWave()
slug: Web/API/OscillatorNode/setPeriodicWave
---

{{ APIRef("Web Audio API") }}

{{ domxref("OscillatorNode") }} 接口的 **`setPeriodicWave()`** 方法用来指向 {{domxref("PeriodicWave")}}，PeriodicWave 定义了一个周期性波形能够形成 oscillator 的输出，当{{domxref("OscillatorNode.type", "type")}} 是 `custom` 的时候。

> [!NOTE]
> 该方法取代了废弃的 {{ domxref("OscillatorNode.setWaveTable()")}}.

## 语法

```js-nolint
setPeriodicWave(wave)
```

### 参数

- `wave`
  - : 一个 {{domxref("PeriodicWave")}} 对象，表示特定的波形用来形成 oscillator 的输出。

### 返回值

{{jsxref("undefined")}}

## 示例

下面示例说明了 `createPeriodicWave() 方法的简单使用`, 从一个周期波形中重新生成了一个正弦波形。

```js
var real = new Float32Array(2);
var imag = new Float32Array(2);
var ac = new AudioContext();
var osc = ac.createOscillator();

real[0] = 0;
imag[0] = 0;
real[1] = 1;
imag[1] = 0;

var wave = ac.createPeriodicWave(real, imag);

osc.setPeriodicWave(wave);

osc.connect(ac.destination);

osc.start();
osc.stop(2);
```

这段代码可以运行因为通过定义一个正弦波形使得声音包含了基础的音调。

这里，我们用两个值创建一个{{domxref("PeriodicWave")}}。第一个值是直流偏移，是 oscillator 开始的时候的值。这里 0 很合适，因为我们想要在 \[-1.0; 1.0] 这个范围的中间值开始。

第二个和后面的值是正弦和余弦内容。可以把它看做傅里叶变换的结果，使得可以从时间阈值得到频率阈值。这里通过 `createPeriodicWave() 方法，可以指定频率，并且浏览器执行逆傅里叶变换来得到一个时间阈值缓冲。`Here, we only set one component at full volume (1.0) on the fundamental tone, so we get a sine wave.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [AudioContext.createPeriodicWave](/zh-CN/docs/Web/API/BaseAudioContext/createPeriodicWave)
