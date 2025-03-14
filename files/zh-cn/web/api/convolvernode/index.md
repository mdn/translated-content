---
title: ConvolverNode
slug: Web/API/ConvolverNode
---

{{APIRef("Web Audio API")}}

`ConvolverNode` 接口是一个对给定 {{domxref("AudioBuffer")}} 上执行线性卷积的 {{domxref("AudioNode")}}，一般用来做音频混响效果。每一个 `ConvolverNode` 都会有一个输入值和输出值。

> [!NOTE]
> 更多线性卷积理论的相关信息，请参阅[Convolution article on Wikipedia](https://en.wikipedia.org/wiki/Convolution).

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
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td><code>1</code>, <code>2</code>, or <code>4</code></td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## 构造函数

- {{domxref("ConvolverNode.ConvolverNode()", "ConvolverNode()")}}
  - : 创建一个新的 `ConvolverNode` 对象实例。

## 属性

继承其父级的属性*, {{domxref("AudioNode")}}*.

- {{domxref("ConvolverNode.buffer")}}
  - : 一个被 `ConvolverNode` 用来产生混响效果的单声道、立体声或四声道的音频缓冲器，包含了 (可能是多声道) 脉冲反应 (IR)。
- {{domxref("ConvolverNode.normalize")}}
  - : 布尔值，在设置缓冲区属性时，可绝定是否对来自 `buffer` 的脉冲反应按等功率归一化进行缩放。

## 方法

没有具体的方法，从其父继承方法，_{{domxref("AudioNode")}}_.

## ConvolverNode 例子

下面的示例展示了 AudioContext 创建卷积节点的基础用法。

> [!NOTE]
> 你需要找到一个脉冲反应来完成下面的示例。可查看[此处](https://codepen.io/DonKarlssonSan/pen/doVKRE) 的实例。

```js
let audioCtx = new window.AudioContext();

async function createReverb() {
    let convolver = audioCtx.createConvolver();

    // 从文件加载脉冲反应
    let response     = await fetch("path/to/impulse-response.wav");
    let arraybuffer  = await response.arrayBuffer();
    convolver.buffer = await audioCtx.decodeAudioData(arraybuffer);

    return convolver;
}

...

let reverb = await createReverb();

// someOtherAudioNode -> reverb -> destination
someOtherAudioNode.connect(reverb);
reverb.connect(audioCtx.destination);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
