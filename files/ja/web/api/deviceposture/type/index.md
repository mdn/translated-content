---
title: "DevicePosture: type プロパティ"
short-title: type
slug: Web/API/DevicePosture/type
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

**`type`** は {{domxref("DevicePosture")}} インターフェイスの読み取り専用プロパティで、端末の現在の形態を返します。

## 値

この端末の現在の形態を表す文字列です。以下のどちらかの値です。

- `continuous`
  - : 平らな画面の形態を示します。これには、平らな状態で使用中の折り曲げ式端末、継ぎ目のない曲面ディスプレイ、または標準的なデスクトップ、ノートパソコン、タブレット、モバイル端末の画面を含みます。
- `folded`
  - : 折り曲げられた画面の形態を示します。これはブック型またはノートパソコンの形態折り曲げ可能な端末を含みます。

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
