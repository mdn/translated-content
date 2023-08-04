---
title: BaseAudioContext.createPeriodicWave()
slug: Web/API/BaseAudioContext/createPeriodicWave
---

{{ APIRef("Web Audio API") }}

{{ domxref("BaseAudioContext") }} 接口的 `createPeriodicWave()` 方法用于创建可对 {{ domxref("OscillatorNode") }} 输出进行整形的 {{domxref("PeriodicWave")}}（周期波）。

## 语法

```
var wave = AudioContext.createPeriodicWave(real, imag[, constraints]);
```

### 返回值

一个 {{domxref("PeriodicWave")}}.

### 参数

- `real`
  - : 一系列余弦术语 (传统上的 A 项)。
- `imag`
  - : 一系列正弦项 (传统上的 B 项)。
- `constraints` {{optional_inline}}

  - : 一个字典对象，用于指定是否禁用规范化（如果没有指定，则默认启动规范化）。它有一个属性：

    - `disableNormalization`: 如果设置为 `true`，对周期波禁用规范化。默认值为 `false`.

> **备注：** 如果使用规范化，生成波形的最大绝对峰值为 1。

## 例子

下面的例子为 `createPeriodicWave()` 的简单用法，创建包含简单正弦波的 {{domxref("PeriodicWave")}} 对象。

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

这之所以有用是因为根据定义仅包含基本音调的声音是正弦波。

这里，我们创建一个具有两个值的 `PeriodicWave` (周期波) 。第一个值是 DC(直流) 偏移，它是振荡器启动的值。0 在这里是好的，因为我们想在 \[-1.0; 1.0] 范围的中间开始曲线。

第二个值和后续值是正弦和余弦分量。你可以把它看做是傅里叶变换的结果，可以从时域值中获取频域值。这里，使用 `createPeriodicWave()`，你可以指定频率，浏览器会执行一个逆傅里叶变换，以获得振荡器的时域缓冲。这里，我们只在基础音上设置了一个全音量 (1.0) 的分量，所以我们得到一个正弦波。

傅里叶变换系数应该按升序给出（例如：<math><semantics><mrow><mrow><mo>(</mo><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi></mrow></msup><mo>,</mo><mrow><mo>(</mo><mrow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mrow><mo>)</mo></mrow><msup><mi>e</mi><mrow><mn>3</mn><mi>i</mi></mrow></msup></mrow><annotation encoding="TeX">\left(a+bi\right)e^{i} , \left(c+di\right)e^{2i} , \left(f+gi\right)e^{3i} </annotation></semantics></math>等。）可以是正的或者是负的。一个简单的手动获取此类系数的方法是使用图形计算器，尽管这不是最好的。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
