---
title: GainNode
slug: Web/API/GainNode
---

{{ APIRef("Web Audio API") }}

`GainNode` 介面代表的是音量改變。 這是 {{domxref("AudioNode")}} 音訊處理模組，可以對輸入的訊號做增益 (gain) 後輸出。一個 `GainNode` 有一個輸入和一個輸出，兩者有相同的聲道數。

增益 (gain) 是無單位的數值，隨時間變化，會用來和所有輸入聲道的取樣做相乘。 如果更改的話，新的增益會用 de-zippering 演算法處理，以避免輸出聲音出現難聽的「喀」聲。

![The GainNode is increasing the gain of the output.](webaudiogainnode.png)

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

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : Creates a new instance of an GainNode object.

## Properties

_Inherits properties from its parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("GainNode.gain")}} {{readonlyinline}}
  - : 是 [a-rate](/zh-TW/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} ，代表增益值

## Methods

_No specific method; inherits methods from its parent,_ _{{domxref("AudioNode")}}_.

## Example

See [`BaseAudioContext.createGain()`](/zh-TW/docs/Web/API/BaseAudioContext/createGain#example) for example code showing how to use an `AudioContext` to create a `GainNode`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
