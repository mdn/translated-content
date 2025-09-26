---
title: GainNode：gain 屬性
slug: Web/API/GainNode/gain
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{ APIRef("Web Audio API") }}

{{ domxref("GainNode") }} 介面的 `gain` 屬性是一個 [a-rate](/zh-TW/docs/Web/API/AudioParam#a-rate) 的 {{domxref("AudioParam")}}，代表要應用的增益量。

## 值

一個 {{domxref("AudioParam")}}。

> [!NOTE]
> 雖然回傳的 `AudioParam` 是唯讀的，但它所代表的值並非如此。

## 範例

參見 [`BaseAudioContext.createGain()`](/zh-TW/docs/Web/API/BaseAudioContext/createGain#範例) 的範例程式碼，其展示了如何使用 `AudioContext` 來建立 `GainNode`，接著透過改變 gain 屬性值來靜音和取消靜音音訊。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
