---
title: "Navigator: devicePosture プロパティ"
short-title: devicePosture
slug: Web/API/Navigator/devicePosture
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Device Posture API")}}{{SeeCompatTable}}

**`Navigator.devicePosture`** は読み取り専用のプロパティで、ブラウザーの {{domxref("DevicePosture")}} オブジェクトを返します。これにより、開発者は端末の現在の形態（つまり、ビューポートの状態が平らか折り曲げられているか）を問い合わせ、形態の変化に応じてコードを実行することができるようになります。

## 値

{{domxref("DevicePosture")}} オブジェクトです。

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

- {{domxref("DevicePosture")}}
- {{domxref("devicePosture.type")}}
- [端末形態 API](/ja/docs/Web/API/Device_Posture_API)
- CSS {{cssxref("@media/device-posture", "device-posture")}} `@media` 特性
