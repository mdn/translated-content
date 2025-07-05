---
title: GainNode
slug: Web/API/GainNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

`GainNode` 介面表示音量的改變。它是一個 {{domxref("AudioNode")}} 音訊處理模組，會將指定的增益應用於輸入資料，然後再傳播到輸出。`GainNode` 總是只有一個輸入和一個輸出，兩者都有相同數量的聲道。

增益是一個無單位的數值，會隨時間變化，並與所有輸入聲道的每個對應取樣相乘。如果修改了增益，新的增益會立即套用，導致在最終的音訊中產生不悅耳的「喀嚓聲」。為了避免這種情況發生，切勿直接改變數值，而應使用 {{domxref("AudioParam")}} 介面上的指數內插法。

![GainNode 正在增加輸出的增益。](webaudiogainnode.png)

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">輸入數量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">輸出數量</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">聲道計數模式</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">聲道計數</th>
      <td><code>2</code>（在預設計數模式下未使用）</td>
    </tr>
    <tr>
      <th scope="row">聲道詮釋</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## 建構子

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : 建立並回傳一個新的 `GainNode` 物件。或者你也可以使用 {{domxref("BaseAudioContext.createGain()")}} 工廠方法；參見[建立 AudioNode](/zh-TW/docs/Web/API/AudioNode#建立_audionode)。

## 實體屬性

_繼承其父介面 {{domxref("AudioNode")}} 的屬性。_

- {{domxref("GainNode.gain")}} {{ReadOnlyInline}}
  - : 一個 [a-rate](/zh-TW/docs/Web/API/AudioParam#a-rate) 的 {{domxref("AudioParam")}}，表示要應用的增益量。你必須設定 {{domxref("AudioParam.value")}} 或使用 `AudioParam` 的方法來改變增益的效果。

## 實體方法

_沒有自身的方法；繼承其父介面 {{domxref("AudioNode")}} 的方法。_

## 範例

參見 [`BaseAudioContext.createGain()`](/zh-TW/docs/Web/API/BaseAudioContext/createGain#範例) 的範例程式碼，其中展示了如何使用 `AudioContext` 來建立 `GainNode`。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
