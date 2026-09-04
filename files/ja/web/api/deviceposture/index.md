---
title: DevicePosture
slug: Web/API/DevicePosture
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

**`DevicePosture`** は{{domxref("Device Posture API", "端末形態 API", "", "nocode")}} のインターフェイスで、この端末の形態、すなわちビューポートが平らなのか、折り曲げられている状態なのかを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{DOMxRef("EventTarget")}} から継承したプロパティがあります。_

- {{domxref("DevicePosture.type", "type")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : この端末の現在の形態を返します。

## イベント

- {{domxref("DevicePosture.change_event", "change")}} {{Experimental_Inline}}
  - : 端末の形態が変化したときに発生します。

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
