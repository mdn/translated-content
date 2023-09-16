---
title: "USBConfiguration: USBConfiguration() コンストラクター"
slug: Web/API/USBConfiguration/USBConfiguration
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

**`USBConfiguration()`** コンストラクターは、渡された `USBDevice` の指定のコンフィギュレーション番号のコンフィギュレーションの情報が格納された新しい {{domxref("USBConfiguration")}} オブジェクトを生成します。

## 構文

```js-nolint
new USBConfiguration(device, configurationValue)
```

### 引数

- `device`
  - : 設定を行う {{domxref('USBDevice')}} を指定します。
- `configurationValue`
  - : 読み取りを行う[コンフィギュレーションディスクリプター](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)を指定します。これは 0 から 255 の符号なし整数です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
