---
title: "DevicePosture: change イベント"
short-title: change
slug: Web/API/DevicePosture/change_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

**`change`** は {{domxref("DevicePosture")}} インターフェイスのイベントで、この端末の形態が変化したときに発生します。例えば、折り曲げ可能な端末が折り曲げ形態 (`folded`) から平面形態 (`continuous`) へ移行したときなどです。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
const postureOutput = document.getElementById("currentPosture");

function reportPostureOutput() {
  // type プロパティは "continuous" または "folded" を返す
  postureOutput.textContent = `端末の形態: ${navigator.devicePosture.type}`;
}

navigator.devicePosture.addEventListener("change", reportPostureOutput);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media` 特性
- [端末形態 API](/ja/docs/Web/API/Device_Posture_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) - developer.chrome.com (2024)
