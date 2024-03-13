---
title: HIDDevice.receiveFeatureReport()
slug: Web/API/HIDDevice/receiveFeatureReport
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

{{domxref("HIDDevice")}} インターフェイスの **`receiveFeatureReport()`** メソッドは、HID レポートから Feature レポートを受信します。Feature レポートは、HID デバイスとアプリケーションが標準化されていない HID データを交換するための方法です。

各レポート形式用にデバイスがサポートしている `reportId` は、{{domxref("HIDDevice.collections")}} から取得できます。

## 構文

```js-nolint
receiveFeatureReport(reportId)
```

### 引数

- `reportId`
  - : 8 ビットのレポート ID です。HID デバイスがレポート ID を使わない場合、`0` を送信します。

### 返値

Feature レポートが入った {{jsxref("DataView")}} オブジェクトで解決する {{jsxref("Promise")}} を返します。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : 何らかの理由でレポートの受信に失敗したとき投げられます。

## 例

この例では、`reportId` の値 `1` を用いてデバイスからレポートを受信します。

```js
const dataView = await device.receiveFeatureReport(1);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
